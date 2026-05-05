// CAPI client — envia eventos pra Netlify Function que repassa pro Graph API.
// Mesmo eventID do Pixel client-side, pra Meta deduplicar os dois sinais.

const ENDPOINT = '/.netlify/functions/meta-capi';

function readCookie(name) {
    if (typeof document === 'undefined') return undefined;
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]+)`));
    return match ? match[1] : undefined;
}

export async function sendCapiEvent({
    event_name,
    event_id,
    user_data = {},
    custom_data = {},
}) {
    if (!event_name || !event_id) return;
    if (typeof window === 'undefined') return;

    const enrichedUserData = {
        ...user_data,
        fbp: user_data.fbp || readCookie('_fbp'),
        fbc: user_data.fbc || readCookie('_fbc'),
    };

    Object.keys(enrichedUserData).forEach((key) => {
        if (enrichedUserData[key] === undefined || enrichedUserData[key] === '') {
            delete enrichedUserData[key];
        }
    });

    const body = {
        event_name,
        event_id,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: window.location.href,
        action_source: 'website',
        user_data: enrichedUserData,
        custom_data,
    };

    try {
        await fetch(ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
            keepalive: true, // sobrevive a navegacao/unload
        });
    } catch (err) {
        if (import.meta.env.DEV) {
            console.warn('[capi-client] send failed', err);
        }
    }
}
