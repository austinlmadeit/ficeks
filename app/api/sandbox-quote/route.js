import { Resend } from 'resend';
import { inspectSubmission, escapeHtml } from '@/lib/form-guard';

// The Resend client is created on first use, not at module scope. Next.js
// evaluates route modules while collecting page data during the build, so
// constructing it here would make the build itself require a runtime secret
// and fail wherever RESEND_API_KEY is not present (for example, preview
// deployments that only have production-scoped variables).
let resendClient = null;
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  if (!resendClient) resendClient = new Resend(key);
  return resendClient;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      // Step 1
      firstName,
      lastName,
      email,
      phone,
      bestTimeToCall,
      // Step 2
      vehicleYear,
      vehicleMake,
      vehicleModel,
      currentDeductible,
      dsrRating,
      // Step 3
      preferredLiability,
      coverageInterests,
      additionalNotes,
    } = body;

    // Drop automated submissions before anything is sent. Responds success so
    // the sender cannot tell it was filtered. See lib/form-guard.js.
    const verdict = inspectSubmission(body);
    if (verdict.bot) {
      console.warn('Blocked suspected bot sandbox quote:', verdict.reason);
      return Response.json({ success: true });
    }

    if (!firstName || !phone) {
      return Response.json({ success: false, error: 'Name and phone number are required.' }, { status: 400 });
    }

    const coverageList = Array.isArray(coverageInterests)
      ? coverageInterests.join(', ')
      : coverageInterests || 'None specified';

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f4f4f5; margin: 0; padding: 0; }
            .wrapper { max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
            .header { background: #09090b; padding: 28px 36px; border-bottom: 4px solid #dc2626; }
            .header h1 { color: #ffffff; font-size: 20px; font-weight: 900; margin: 0; }
            .header p { color: #a1a1aa; font-size: 13px; margin: 6px 0 0; }
            .badge { display: inline-block; background: #dc2626; color: #fff; font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; padding: 4px 10px; border-radius: 4px; margin-bottom: 16px; }
            .section { padding: 24px 36px; border-bottom: 1px solid #e4e4e7; }
            .section:last-child { border-bottom: none; }
            .section-title { font-size: 11px; font-weight: 800; color: #71717a; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 14px; }
            .row { display: flex; gap: 24px; margin-bottom: 12px; }
            .field { flex: 1; }
            .field label { font-size: 11px; color: #71717a; font-weight: 600; display: block; margin-bottom: 4px; }
            .field span { font-size: 15px; font-weight: 700; color: #09090b; display: block; }
            .highlight { background: #fef2f2; border-left: 4px solid #dc2626; padding: 12px 16px; border-radius: 0 6px 6px 0; margin-top: 4px; }
            .highlight span { color: #dc2626; font-weight: 800; }
            .notes { background: #f4f4f5; border-radius: 8px; padding: 14px 16px; font-size: 14px; color: #3f3f46; line-height: 1.6; }
            .footer { padding: 20px 36px; background: #fafafa; font-size: 12px; color: #a1a1aa; text-align: center; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <h1>🚗 New Sandbox Auto Quote Request</h1>
              <p>Submitted via ficekinsurance.com — ${new Date().toLocaleString('en-CA', { timeZone: 'America/Winnipeg', dateStyle: 'full', timeStyle: 'short' })} (CST)</p>
            </div>

            <div class="section">
              <div class="badge">Step 1 — Client Info</div>
              <div class="section-title">Contact Details</div>
              <div class="row">
                <div class="field">
                  <label>Full Name</label>
                  <span>${escapeHtml(firstName)} ${escapeHtml(lastName)}</span>
                </div>
                <div class="field">
                  <label>Best Time to Call</label>
                  <span>${escapeHtml(bestTimeToCall || 'Anytime')}</span>
                </div>
              </div>
              <div class="row">
                <div class="field">
                  <label>Phone Number</label>
                  <span><a href="tel:${escapeHtml(phone)}" style="color:#dc2626;text-decoration:none;">${escapeHtml(phone)}</a></span>
                </div>
                <div class="field">
                  <label>Email Address</label>
                  <span><a href="mailto:${escapeHtml(email)}" style="color:#dc2626;text-decoration:none;">${escapeHtml(email)}</a></span>
                </div>
              </div>
            </div>

            <div class="section">
              <div class="badge">Step 2 — Vehicle Details</div>
              <div class="section-title">Vehicle & Policy Information</div>
              <div class="row">
                <div class="field">
                  <label>Vehicle Year</label>
                  <span>${escapeHtml(vehicleYear || '—')}</span>
                </div>
                <div class="field">
                  <label>Make</label>
                  <span>${escapeHtml(vehicleMake || '—')}</span>
                </div>
                <div class="field">
                  <label>Model</label>
                  <span>${escapeHtml(vehicleModel || '—')}</span>
                </div>
              </div>
              <div class="row">
                <div class="field">
                  <label>Current MPI Deductible</label>
                  <div class="highlight"><span>${escapeHtml(currentDeductible || '—')}</span></div>
                </div>
                <div class="field">
                  <label>DSR Rating</label>
                  <div class="highlight"><span>${escapeHtml(dsrRating || 'Unknown')}</span></div>
                </div>
              </div>
            </div>

            <div class="section">
              <div class="badge">Step 3 — Coverage Preferences</div>
              <div class="section-title">Preferred Sandbox Mutual Coverage</div>
              <div class="row">
                <div class="field">
                  <label>Preferred Liability Limit</label>
                  <div class="highlight"><span>${escapeHtml(preferredLiability || '—')}</span></div>
                </div>
              </div>
              <div class="field" style="margin-bottom:12px;">
                <label>Coverage Interests</label>
                <span style="font-size:14px;color:#09090b;">${escapeHtml(coverageList)}</span>
              </div>
              ${additionalNotes ? `
              <div class="field">
                <label>Additional Notes from Client</label>
                <div class="notes">${escapeHtml(additionalNotes)}</div>
              </div>` : ''}
            </div>

            <div class="footer">
              This lead was submitted via the Ficek Insurance website auto insurance quote form.<br />
              Reply directly to this email or call the client at <strong>${escapeHtml(phone)}</strong>.
            </div>
          </div>
        </body>
      </html>
    `;

    const resend = getResend();
    if (!resend) {
      console.error('RESEND_API_KEY is not set; cannot send lead notification email.');
      return Response.json(
        { success: false, error: 'We could not send your message right now. Please call us at 204-571-1777.' },
        { status: 503 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Ficek Insurance Website <onboarding@resend.dev>',
      // Must match the Resend account owner while using the testing sender. See /api/lead.
      to: [process.env.LEAD_NOTIFICATION_EMAIL || 'austin.l@ficekinsurance.com'],
      replyTo: email,
      subject: `🚗 New Sandbox Auto Quote Request — ${String(`${firstName} ${lastName}`).replace(/[\r\n]+/g, ' ').slice(0, 120)} (${vehicleYear || ''} ${vehicleMake || ''} ${vehicleModel || ''})`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ success: false, error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('API route error:', err);
    return Response.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
