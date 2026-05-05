// Attribution capture — UTM + click IDs.
// Last-touch with override: each new campaign visit overwrites stored data.
// If user lands without UTMs (eg. direct, organic), we keep what was saved before.
// TTL: 30 days. After that, treated as new visitor.

const UTM_KEYS = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
];

const CLICK_ID_KEYS = [
    'gclid',     // Google Ads
    'fbclid',    // Meta (Facebook/Instagram)
    'msclkid',   // Microsoft Ads
    'ttclid',    // TikTok
];

const STORAGE_KEY = 'bkc_attribution';
const TTL_MS = 30 * 24 * 60 * 60 * 1000;

function readStorage() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const data = JSON.parse(raw);
        if (!data?.captured_at) return null;
        if (Date.now() - data.captured_at > TTL_MS) {
            localStorage.removeItem(STORAGE_KEY);
            return null;
        }
        return data;
    } catch {
        return null;
    }
}

function writeStorage(payload) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
        // localStorage indisponivel (modo privado, quota): ignora
    }
}

export function captureAttributionFromUrl() {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const captured = {};

    [...UTM_KEYS, ...CLICK_ID_KEYS].forEach((key) => {
        const value = params.get(key);
        if (value) captured[key] = value;
    });

    // URL sem nada de campanha: mantem o que ja estava salvo
    if (Object.keys(captured).length === 0) return;

    const payload = {
        ...captured,
        landing_page: window.location.pathname,
        referrer: document.referrer || null,
        captured_at: Date.now(),
    };

    writeStorage(payload);
}

export function getAttribution() {
    return readStorage();
}

// Retorna objeto plano pronto pra anexar a um form ou evento.
// Sempre devolve as chaves (preenchidas ou vazias) para o backend ter shape estavel.
export function getAttributionFlat() {
    const data = readStorage() || {};
    const flat = {};
    [...UTM_KEYS, ...CLICK_ID_KEYS].forEach((key) => {
        flat[key] = data[key] || '';
    });
    flat.landing_page = data.landing_page || '';
    flat.referrer = data.referrer || '';
    return flat;
}

export function clearAttribution() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch {
        // ignora
    }
}
