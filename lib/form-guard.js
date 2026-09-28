// Shared bot-defence helpers for the website lead forms.
//
// Two cheap, frictionless signals stop automated submissions without putting a
// CAPTCHA in front of real customers:
//
//   1. Honeypot  — a field real people never see and never fill. Bots fill in
//                  every input they find, so any value here means "not human".
//   2. Time trap — bots post in well under a second. A person cannot type a
//                  name, phone and message that fast.
//
// Both are enforced server side, because a bot can POST straight to the API
// without ever loading the page or running its JavaScript.

// Deliberately boring and tempting: bots match on field names like this one.
export const HONEYPOT_FIELD = 'company_website';

// Minimum time between the form rendering and submitting, in milliseconds.
// Three seconds is far below what a real submission takes and far above what
// an automated one does.
export const MIN_FILL_MS = 3000;

// The field carrying how long the form was on screen before submission.
export const ELAPSED_FIELD = 'renderedMs';

/**
 * Decide whether a submission looks automated.
 * Returns { bot: boolean, reason: string|null }.
 */
export function inspectSubmission(body = {}) {
  const trap = body[HONEYPOT_FIELD];
  if (typeof trap === 'string' && trap.trim() !== '') {
    return { bot: true, reason: 'honeypot_filled' };
  }

  const elapsed = Number(body[ELAPSED_FIELD]);
  if (!Number.isFinite(elapsed)) {
    // Our own forms always send this. A submission without it did not come
    // from the site, which is the signature of a direct POST to the API.
    return { bot: true, reason: 'missing_timing' };
  }
  if (elapsed < MIN_FILL_MS) {
    return { bot: true, reason: 'submitted_too_fast' };
  }

  return { bot: false, reason: null };
}

/**
 * Escape text before interpolating it into notification email HTML.
 * Without this, a submitted message can inject live markup — links, images,
 * tracking beacons — into the inbox of whoever receives the lead.
 */
export function escapeHtml(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
