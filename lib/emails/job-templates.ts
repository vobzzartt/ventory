export function jobApplicantEmailTemplate(name: string, role: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application Received - Ventory</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f9fafb;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; text-align: left;">
          <tr>
            <td style="padding: 40px;">
              <div style="font-size: 20px; font-weight: 800; color: #f97316; margin-bottom: 32px;">Ventory</div>
              <h1 style="margin: 0 0 20px 0; font-size: 24px; font-weight: 700; color: #0f172a; letter-spacing: -0.02em;">We've received your application, ${name.split(' ')[0]}.</h1>
              <p style="margin: 0 0 32px 0; font-size: 16px; line-height: 1.6; color: #475569;">
                Thank you for applying for the <strong>${role}</strong> position at Ventory. We're excited to learn more about you and your potential to help us build the future of African cloud infrastructure.
              </p>
              <div style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; padding: 24px; margin-bottom: 32px;">
                <p style="margin: 0; font-size: 14px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Next Steps</p>
                <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.5;">Our recruitment team will review your profile and resume. You can expect to hear back from us with feedback or next steps via this email within <strong>48 hours</strong>.</p>
              </div>
              <p style="margin: 0; font-size: 15px; color: #64748b;">Best regards,<br>Ventory Recruitment Team</p>
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

export function jobAdminEmailTemplate(name: string, email: string, role: string, interest: string, resumeUrl?: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Job Application</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f9fafb;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; text-align: left;">
          <tr>
            <td style="padding: 40px;">
              <div style="margin-bottom: 24px; font-size: 14px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.1em;">New Job Application</div>
              <h1 style="margin: 0 0 32px 0; font-size: 20px; font-weight: 700; color: #0f172a;">${name} has applied for ${role}</h1>
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; padding: 24px;">
                <tr>
                  <td style="padding-bottom: 16px;">
                    <div style="font-size: 12px; font-weight: 600; color: #94a3b8; text-transform: uppercase; margin-bottom: 4px;">Applicant Name</div>
                    <div style="font-size: 16px; color: #0f172a;">${name}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 16px;">
                    <div style="font-size: 12px; font-weight: 600; color: #94a3b8; text-transform: uppercase; margin-bottom: 4px;">Email Address</div>
                    <div style="font-size: 16px; color: #f97316;"><a href="mailto:${email}" style="color: #f97316; text-decoration: none;">${email}</a></div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 16px;">
                    <div style="font-size: 12px; font-weight: 600; color: #94a3b8; text-transform: uppercase; margin-bottom: 4px;">Role</div>
                    <div style="font-size: 16px; color: #0f172a; font-weight: 600;">${role}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 16px;">
                    <div style="font-size: 12px; font-weight: 600; color: #94a3b8; text-transform: uppercase; margin-bottom: 4px;">Why they are interested</div>
                    <div style="font-size: 14px; color: #475569; line-height: 1.5; font-style: italic;">"${interest}"</div>
                  </td>
                </tr>
                ${resumeUrl ? `
                <tr>
                  <td>
                    <div style="font-size: 12px; font-weight: 600; color: #94a3b8; text-transform: uppercase; margin-bottom: 4px;">Resume</div>
                    <div style="font-size: 14px;"><a href="${resumeUrl}" style="color: #0f172a; font-weight: 700; text-decoration: underline;">Download Resume</a></div>
                  </td>
                </tr>
                ` : ''}
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
