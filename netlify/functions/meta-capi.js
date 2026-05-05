// Meta Conversions API (CAPI) — server-side event ingestion.
// Recebe eventos do client (mesmo eventID do Pixel) e encaminha pro Graph API
// com PII hasheada. A deduplicacao no Meta acontece via eventID.

import crypto from 'node:crypto';

const PIXEL_ID = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE;
const GRAPH_API_VERSION = 'v21.0';

function sha256(value) {
    return crypto.createHash('sha256').update(value).digest('hex');
}

function hashEmail(email) {
    if (!email) return undefined;
    return sha256(String(email).trim().toLowerCase());
}

// E.164 normalization for BR phones (default country).
function hashPhone(phone) {
    if (!phone) return undefined;
    const digits = String(phone).replace(/\D/g, '');
    if (!digits) return undefined;
    const e164 = digits.startsWith('55') ? digits : `55${digits}`;
    return sha256(e164);
}

function hashLowerTrim(value) {
    if (!value) return undefined;
    return sha256(String(value).trim().toLowerCase());
}

function getCookie(cookieHeader, name) {
    if (!cookieHeader) return undefined;
    const match = cookieHeader.match(new RegExp(`(?:^|; )${name}=([^;]+)`));
    return match ? match[1] : undefined;
}

const RESPONSE_HEADERS = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

export const handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 204, headers: RESPONSE_HEADERS, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: RESPONSE_HEADERS,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    }

    if (!PIXEL_ID || !ACCESS_TOKEN) {
        return {
            statusCode: 500,
            headers: RESPONSE_HEADERS,
            body: JSON.stringify({ error: 'CAPI not configured (missing env vars)' }),
        };
    }

    let payload;
    try {
        payload = JSON.parse(event.body || '{}');
    } catch {
        return {
            statusCode: 400,
            headers: RESPONSE_HEADERS,
            body: JSON.stringify({ error: 'Invalid JSON' }),
        };
    }

    const {
        event_name,
        event_id,
        event_time,
        event_source_url,
        user_data = {},
        custom_data = {},
        action_source = 'website',
    } = payload;

    if (!event_name || !event_id) {
        return {
            statusCode: 400,
            headers: RESPONSE_HEADERS,
            body: JSON.stringify({ error: 'event_name and event_id required' }),
        };
    }

    // Browser context from request headers
    const reqHeaders = event.headers || {};
    const cookieHeader = reqHeaders.cookie || reqHeaders.Cookie;
    const ip = reqHeaders['x-nf-client-connection-ip']
        || (reqHeaders['x-forwarded-for'] && reqHeaders['x-forwarded-for'].split(',')[0].trim())
        || reqHeaders['client-ip'];
    const userAgent = reqHeaders['user-agent'] || reqHeaders['User-Agent'];

    // Build hashed user_data (Meta requires SHA-256 for PII)
    const builtUserData = {};

    if (user_data.email) builtUserData.em = [hashEmail(user_data.email)];
    if (user_data.phone) builtUserData.ph = [hashPhone(user_data.phone)];
    if (user_data.first_name) builtUserData.fn = [hashLowerTrim(user_data.first_name)];
    if (user_data.last_name) builtUserData.ln = [hashLowerTrim(user_data.last_name)];
    if (user_data.city) builtUserData.ct = [hashLowerTrim(user_data.city)];
    if (user_data.state) builtUserData.st = [hashLowerTrim(user_data.state)];
    if (user_data.country) builtUserData.country = [hashLowerTrim(user_data.country)];
    if (user_data.zip) builtUserData.zp = [hashLowerTrim(user_data.zip)];
    if (user_data.external_id) builtUserData.external_id = [hashLowerTrim(user_data.external_id)];

    const fbp = user_data.fbp || getCookie(cookieHeader, '_fbp');
    const fbc = user_data.fbc || getCookie(cookieHeader, '_fbc');
    if (fbp) builtUserData.fbp = fbp;
    if (fbc) builtUserData.fbc = fbc;
    if (ip) builtUserData.client_ip_address = ip;
    if (userAgent) builtUserData.client_user_agent = userAgent;

    const eventData = {
        event_name,
        event_time: event_time || Math.floor(Date.now() / 1000),
        event_id,
        action_source,
        user_data: builtUserData,
    };

    if (event_source_url) eventData.event_source_url = event_source_url;
    if (Object.keys(custom_data).length > 0) eventData.custom_data = custom_data;

    const requestBody = { data: [eventData] };
    if (TEST_EVENT_CODE) requestBody.test_event_code = TEST_EVENT_CODE;

    const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        });
        const result = await response.json();

        if (!response.ok) {
            console.error('[meta-capi] Graph API error', result);
            return {
                statusCode: 502,
                headers: RESPONSE_HEADERS,
                body: JSON.stringify({ error: 'Graph API error', detail: result }),
            };
        }

        return {
            statusCode: 200,
            headers: RESPONSE_HEADERS,
            body: JSON.stringify({
                success: true,
                events_received: result.events_received,
                fbtrace_id: result.fbtrace_id,
            }),
        };
    } catch (err) {
        console.error('[meta-capi] Request failed', err);
        return {
            statusCode: 500,
            headers: RESPONSE_HEADERS,
            body: JSON.stringify({ error: 'Request failed' }),
        };
    }
};
