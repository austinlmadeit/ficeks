import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      formType = 'general_quote', // 'general_quote' | 'quick_quote' | 'contact'
      name,
      phone,
      email,
      insuranceType,
      postalCode,
      message,
      bestTimeToCall,
      preferredBroker,
    } = body;

    if (!name || !phone) {
      return Response.json({ success: false, error: 'Name and phone number are required.' }, { status: 400 });
    }

    const typeTitle = insuranceType || 'General Consultation';
    const formTitle = formType === 'contact' 
      ? '💬 New Contact Message'
      : formType === 'quick_quote'
      ? '⚡ Instant Homepage Quote Request'
      : '📝 New Multi-Line Quote Request';

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f4f4f5; margin: 0; padding: 0; }
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
              <h1>${formTitle}</h1>
              <p>Submitted via ficekinsurance.com — ${new Date().toLocaleString('en-CA', { timeZone: 'America/Winnipeg', dateStyle: 'full', timeStyle: 'short' })} (CST)</p>
            </div>

            <div class="section">
              <div class="badge">Client Contact Information</div>
              <div class="row">
                <div class="field">
                  <label>Full Name</label>
                  <span>${name}</span>
                </div>
                <div class="field">
                  <label>Phone Number</label>
                  <span><a href="tel:${phone}" style="color:#dc2626;text-decoration:none;">${phone}</a></span>
                </div>
              </div>
              <div class="row">
                <div class="field">
                  <label>Email Address</label>
                  <span>${email ? `<a href="mailto:${email}" style="color:#dc2626;text-decoration:none;">${email}</a>` : 'Not provided'}</span>
                </div>
                <div class="field">
                  <label>Postal Code / Location</label>
                  <span>${postalCode || 'Brandon / Westman'}</span>
                </div>
              </div>
              ${bestTimeToCall ? `
              <div class="row">
                <div class="field">
                  <label>Best Time to Call</label>
                  <span>${bestTimeToCall}</span>
                </div>
              </div>` : ''}
            </div>

            <div class="section">
              <div class="badge">Coverage Request</div>
              <div class="row">
                <div class="field">
                  <label>Insurance Type Requested</label>
                  <div class="highlight"><span>${typeTitle}</span></div>
                </div>
                ${preferredBroker ? `
                <div class="field">
                  <label>Preferred Broker / Office</label>
                  <span>${preferredBroker}</span>
                </div>` : ''}
              </div>

              ${message ? `
              <div class="field" style="margin-top:16px;">
                <label>Client Message / Coverage Notes</label>
                <div class="notes">${message}</div>
              </div>` : ''}
            </div>

            <div class="footer">
              Ficek Insurance Brokerage Lead Management<br />
              Direct Client Call: <strong><a href="tel:${phone}" style="color:#dc2626;">${phone}</a></strong>
            </div>
          </div>
        </body>
      </html>
    `;

    const toEmail = process.env.LEAD_NOTIFICATION_EMAIL || 'austin.l@ficekinsurance.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Ficek Insurance Website <onboarding@resend.dev>';

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email || toEmail,
      subject: `${formTitle} — ${name} (${typeTitle})`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend Lead API error:', error);
      return Response.json({ success: false, error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Lead route error:', err);
    return Response.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
