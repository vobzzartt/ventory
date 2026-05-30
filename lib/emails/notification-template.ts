export function notificationEmailTemplate(name: string, email: string): string {
  const timestamp = new Date().toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
    timeZoneName: 'short',
  })

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Waitlist User</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f9fafb;">
    <tr>
      <td align="center" style="padding: 20px 20px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; text-align: left;">
          <tr>
            <td style="padding: 32px;">
              
              <!-- Brand Name -->
              <div style="margin-bottom: 24px; font-size: 18px; font-weight: 700; color: #0f172a; letter-spacing: -0.5px; opacity: 0.9;">
                Ventory
              </div>

              <!-- Heading -->
              <h1 style="margin: 0 0 24px 0; font-size: 20px; font-weight: 600; color: #0f172a; letter-spacing: -0.5px;">
                New Waitlist Registration
              </h1>

              <!-- Structured Data Frame -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                <tr>
                  <td style="padding: 24px;">
                    
                    <div style="margin-bottom: 16px;">
                      <div style="font-size: 13px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">User Name</div>
                      <div style="font-size: 16px; color: #0f172a; font-weight: 500;">${name}</div>
                    </div>
                    
                    <div style="margin-bottom: 16px;">
                      <div style="font-size: 13px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Email Address</div>
                      <div style="font-size: 16px; color: #f97316; font-weight: 500;">
                        <a href="mailto:${email}" style="color: #f97316; text-decoration: none;">${email}</a>
                      </div>
                    </div>

                    <div>
                      <div style="font-size: 13px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Time Logged</div>
                      <div style="font-size: 15px; color: #475569;">${timestamp}</div>
                    </div>

                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}
