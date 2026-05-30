export function confirmationEmailTemplate(name: string): string {
  const firstName = name ? name.split(' ')[0] : 'there';
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Ventory</title>
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
              <h1 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 700; color: #0f172a; letter-spacing: -0.5px; line-height: 1.3;">
                You're officially on the waitlist.
              </h1>

              <!-- Content -->
              <p style="margin: 0 0 24px 0; font-size: 16px; color: #475569; line-height: 1.6;">
                Hi ${firstName},
              </p>

              <p style="margin: 0 0 24px 0; font-size: 16px; color: #475569; line-height: 1.6;">
                You're now part of a select group of builders, startups, and engineers getting early access to Africa's next-generation cloud infrastructure.
              </p>

              <p style="margin: 0 0 32px 0; font-size: 16px; color: #475569; line-height: 1.6;">
                Ventory is built to remove the complexity, high costs, and latency challenges developers face with global cloud platforms — replacing them with something faster, simpler, and truly local.
              </p>

              <div style="background-color: #fff7ed; color: #ea580c; border: 1px solid #fed7aa; padding: 12px 16px; border-radius: 8px; font-size: 15px; font-weight: 600; margin-bottom: 32px; display: inline-block;">
                Planned Launch: Q4 2026
              </div>

              <p style="margin: 0 0 32px 0; font-size: 16px; color: #475569; line-height: 1.6;">
                We're building a cloud platform designed for real-world performance across Africa — focused on speed, simplicity, and local accessibility.
              </p>

              <p style="margin: 0 0 32px 0; font-size: 16px; color: #475569; line-height: 1.6;">
                We're building a cloud platform designed for real-world performance across Africa — focused on speed, simplicity, and local accessibility.
              </p>

              <p style="margin: 0 0 16px 0; font-size: 16px; color: #475569; line-height: 1.6;">
                Follow the journey as we build:
              </p>

              <!-- Social Links -->
              <table border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                <tr>
                  <td style="padding-right: 16px;">
                    <a href="https://instagram.com/ventory_" style="text-decoration: none;">
                      <img src="https://img.icons8.com/material-rounded/48/f97316/instagram-new.png" width="22" height="22" alt="Instagram" style="display: block;" />
                    </a>
                  </td>
                  <td style="padding-right: 16px;">
                    <a href="https://www.linkedin.com/company/ventoryhq/" style="text-decoration: none;">
                      <img src="https://img.icons8.com/material-rounded/48/f97316/linkedin.png" width="22" height="22" alt="LinkedIn" style="display: block;" />
                    </a>
                  </td>
                  <td style="padding-right: 16px;">
                    <a href="https://x.com/Ventory" style="text-decoration: none;">
                      <img src="https://img.icons8.com/material-rounded/48/f97316/twitter.png" width="22" height="22" alt="X" style="display: block;" />
                    </a>
                  </td>
                  <td style="padding-right: 16px;">
                    <a href="https://github.com/ventory" style="text-decoration: none;">
                      <img src="https://img.icons8.com/material-rounded/48/f97316/github.png" width="22" height="22" alt="GitHub" style="display: block;" />
                    </a>
                  </td>
                  <td style="font-size: 13px; color: #94a3b8; font-weight: 600; vertical-align: middle; letter-spacing: 0.2px;">
                    @Ventory
                  </td>
                </tr>
              </table>

              <!-- Footer Block -->
              <table border="0" cellpadding="0" cellspacing="0" style="border-top: 1px solid #e2e8f0; width: 100%; padding-top: 24px;">
                <tr>
                  <td>
                    <!-- Minimalist Footer -->
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
