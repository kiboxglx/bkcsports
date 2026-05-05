// Meta Pixel — client-side tracking
// Loads fbevents.js asynchronously and exposes track helpers.
// Every event generates an eventID so the server-side CAPI call
// can pass the same ID and Meta dedupes both into one event.

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

let initialized = false;

function loadFbq() {
    if (typeof window === 'undefined' || window.fbq) return;

    const n = window.fbq = function () {
        n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
    };
    if (!window._fbq) window._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];

    const t = document.createElement('script');
    t.async = true;
    t.src = 'https://connect.facebook.net/en_US/fbevents.js';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(t, s);
}

export function initMetaPixel() {
    if (initialized) return;
    if (!PIXEL_ID) {
        if (import.meta.env.DEV) {
            console.warn('[meta-pixel] VITE_META_PIXEL_ID ausente. Pixel nao iniciado.');
        }
        return;
    }
    loadFbq();
    window.fbq('init', PIXEL_ID);
    initialized = true;
}

export function generateEventId() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

// Standard Meta events: PageView, ViewContent, Lead, Contact, etc.
export function trackStandard(eventName, params = {}, eventId = null) {
    if (typeof window === 'undefined' || !window.fbq) return null;
    const id = eventId || generateEventId();
    window.fbq('track', eventName, params, { eventID: id });
    return id;
}

// Custom events (eg. Lead_Qualificado)
export function trackCustom(eventName, params = {}, eventId = null) {
    if (typeof window === 'undefined' || !window.fbq) return null;
    const id = eventId || generateEventId();
    window.fbq('trackCustom', eventName, params, { eventID: id });
    return id;
}

export function isPixelReady() {
    return initialized && typeof window !== 'undefined' && !!window.fbq;
}
