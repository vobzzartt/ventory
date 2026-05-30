export function founderEmailTemplate(name: string): string {
  const firstName = name ? name.split(' ')[0] : 'there';
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>A note from our founder</title>
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
              <h1 style="margin: 0 0 24px 0; font-size: 24px; font-weight: 700; color: #0f172a; letter-spacing: -0.5px; line-height: 1.3;">
                A quick note from our founder
              </h1>

              <!-- Content -->
              <p style="margin: 0 0 24px 0; font-size: 16px; color: #475569; line-height: 1.6;">
                Hi ${firstName}, I'm Victor Bodude the Founder of Ventory.
              </p>

              <p style="margin: 0 0 24px 0; font-size: 16px; color: #475569; line-height: 1.6;">
                I didn't start Ventory because I wanted to build a company. I started it because deploying and running infrastructure here felt harder than it should be.
              </p>

              <p style="margin: 0 0 24px 0; font-size: 16px; color: #475569; line-height: 1.6;">
                Between high costs in dollars, payment limitations, and slow performance from distant servers, it became clear that the system wasn't built with us in mind.
              </p>

              <p style="margin: 0 0 24px 0; font-size: 16px; color: #475569; line-height: 1.6;">
                Ventory is our attempt to fix that.
              </p>
              
              <p style="margin: 0 0 24px 0; font-size: 16px; color: #475569; line-height: 1.6;">
                We're building something simpler, faster, and more aligned with how developers and startups in Africa actually work — from lower latency to payments that don't block you.
              </p>

              <p style="margin: 0 0 32px 0; font-size: 16px; color: #475569; line-height: 1.6;">
                Nothing complicated.<br>
                Just infrastructure that works the way it should.
              </p>

              <p style="margin: 0 0 32px 0; font-size: 16px; color: #475569; line-height: 1.6;">
                If you're here, it means you got in early.<br>
                And I appreciate that.
              </p>

              <p style="margin: 0 0 24px 0; font-size: 16px; color: #475569; line-height: 1.6;">
                If you want to read the full story behind Ventory, you can do that here:
              </p>

              <table border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 40px;">
                <tr>
                  <td align="left">
                    <a href="https://victorbodude.hashnode.dev/rebuilding-africas-cloud-future-the-ventory-story" style="background-color: #f97316; color: #ffffff; display: inline-block; padding: 12px 24px; font-size: 15px; font-weight: 600; text-decoration: none; border-radius: 8px;">
                      Read the full story
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 0 0 32px 0; font-size: 16px; color: #475569; line-height: 1.6;">
                Looking forward to building this with you.
              </p>

              <!-- Footer / Signature -->
              <table border="0" cellpadding="0" cellspacing="0" style="border-top: 1px solid #e2e8f0; width: 100%; padding-top: 32px;">
                <tr>
                  <td>
                    <div style="font-size: 16px; font-weight: 600; color: #0f172a;">Victor Bodude</div>
                    <div style="font-size: 14px; color: #94a3b8; margin-top: 4px; margin-bottom: 12px;">FOUNDER</div>
                    <a href="mailto:victorbodude@gmail.com" style="color: #475569; font-size: 14px; text-decoration: none;">victorbodude@gmail.com</a>
                    <span style="color: #e2e8f0; margin: 0 8px;">|</span>
                    <a href="https://ventory.com" style="color: #475569; font-size: 14px; text-decoration: none;">ventory.com</a>
                    
                    <!-- Personal Social Icons -->
                    <div style="margin-top: 24px;">
                      <table border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding-right: 16px;">
                            <a href="https://instagram.com/vobzzatt" style="text-decoration: none;">
                              <img src="https://img.icons8.com/material-rounded/48/94a3b8/instagram-new.png" width="22" height="22" alt="Instagram" style="display: block;" />
                            </a>
                          </td>
                          <td style="padding-right: 16px;">
                            <a href="https://linkedin.com/in/victorbodude" style="text-decoration: none;">
                              <img src="https://img.icons8.com/material-rounded/48/94a3b8/linkedin.png" width="22" height="22" alt="LinkedIn" style="display: block;" />
                            </a>
                          </td>
                          <td style="padding-right: 16px;">
                            <a href="https://x.com/vobzzatt" style="text-decoration: none;">
                              <img src="https://img.icons8.com/material-rounded/48/94a3b8/twitter.png" width="22" height="22" alt="X" style="display: block;" />
                            </a>
                          </td>
                          <td style="padding-right: 16px;">
                            <a href="https://github.com/vobzzatt" style="text-decoration: none;">
                              <img src="https://img.icons8.com/material-rounded/48/94a3b8/github.png" width="22" height="22" alt="GitHub" style="display: block;" />
                            </a>
                          </td>
                          <td style="font-size: 13px; color: #94a3b8; font-weight: 600; vertical-align: middle; letter-spacing: 0.2px;">
                            @vobzzatt
                          </td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>

        <!-- Micro Footer -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; text-align: center; margin-top: 16px;">
          <tr>
            <td style="font-size: 11px; color: #94a3b8;">
              &copy; ${new Date().getFullYear()} Ventory. All rights reserved.
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
