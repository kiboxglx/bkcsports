// Unified tracking — dispara o mesmo evento via Pixel (client) e CAPI (server)
// com o mesmo eventID. Meta deduplica os dois sinais e usa o melhor match.
//
// Uso:
//   track('Lead', { user_data: { email, phone }, custom_data: { value, currency } })
//   trackCustomEvent('Lead_Qualificado', { user_data: {...}, custom_data: {...} })

import { trackStandard, trackCustom, generateEventId } from './meta-pixel';
import { sendCapiEvent } from './capi-client';

export function track(eventName, options = {}) {
    const { user_data = {}, custom_data = {} } = options;
    const event_id = generateEventId();

    // Pixel client-side (browser)
    trackStandard(eventName, custom_data, event_id);

    // CAPI server-side (Netlify Function) — mesmo eventID
    sendCapiEvent({
        event_name: eventName,
        event_id,
        user_data,
        custom_data,
    });

    return event_id;
}

export function trackCustomEvent(eventName, options = {}) {
    const { user_data = {}, custom_data = {} } = options;
    const event_id = generateEventId();

    trackCustom(eventName, custom_data, event_id);

    sendCapiEvent({
        event_name: eventName,
        event_id,
        user_data,
        custom_data,
    });

    return event_id;
}
