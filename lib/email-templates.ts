// Simple HTML email template (no dependencies required)
interface FounderEmailData {
  name: string;
  email: string;
  phone: string;
  donationAmount: string;
}

export function generateFounderConfirmationHTML(data: FounderEmailData): string {
  const formattedAmount = Number.parseFloat(data.donationAmount).toLocaleString();
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to DeployUnion</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: 'Courier New', Courier, monospace;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0a0a0a;">
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%;">
          
          <!-- Logo Section -->
          <tr>
            <td align="center" style="padding: 20px 0;">
              <img src="https://deployunion.vercel.app/logo.png" alt="DeployUnion" width="180" height="45" style="display: block;">
            </td>
          </tr>

          <!-- Success Icon -->
          <tr>
            <td align="center" style="padding: 30px 0 20px;">
              <div style="display: inline-block; width: 64px; height: 64px; border-radius: 50%; background-color: rgba(255, 199, 0, 0.2); border: 2px solid rgba(255, 199, 0, 0.3); text-align: center; line-height: 64px; font-size: 32px; color: #FFC700;">
                ✓
              </div>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 0 20px;">
              <h1 style="color: #ffffff; font-size: 32px; font-weight: 700; text-align: center; margin: 20px 0; font-family: Georgia, serif;">
                Welcome to the <em style="font-style: italic; font-weight: 300;">Revolution</em>
              </h1>

              <p style="color: #a3a3a3; font-size: 14px; line-height: 1.6; margin: 16px 0;">
                Congratulations, <strong>${data.name}</strong>!
              </p>

              <p style="color: #a3a3a3; font-size: 14px; line-height: 1.6; margin: 16px 0;">
                Your founding contribution has been received, and you are now part of an exclusive group reshaping cloud infrastructure. Welcome to the DeployUnion family!
              </p>

              <!-- Details Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: rgba(38, 38, 38, 0.5); border: 1px solid rgba(255, 199, 0, 0.3); margin: 24px 0; border-radius: 4px;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="color: #ffffff; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; font-family: Georgia, serif;">Your Founding Details</h2>
                    
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="color: #737373; font-size: 12px;">Founder Name</td>
                              <td align="right" style="color: #ffffff; font-size: 14px; font-weight: 500;">${data.name}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="color: #737373; font-size: 12px;">Email</td>
                              <td align="right" style="color: #ffffff; font-size: 14px; font-weight: 500;">${data.email || 'N/A'}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="color: #737373; font-size: 12px;">Phone</td>
                              <td align="right" style="color: #ffffff; font-size: 14px; font-weight: 500;">${data.phone}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px 0 0 0;">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="color: #ffffff; font-size: 14px; font-weight: 600;">Contribution</td>
                              <td align="right" style="color: #FFC700; font-size: 18px; font-weight: 700;">₹${formattedAmount}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- What's Next Section -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: rgba(38, 38, 38, 0.5); border: 1px solid rgba(115, 115, 115, 0.3); margin: 24px 0; border-radius: 4px;">
                <tr>
                  <td style="padding: 24px; text-align: center;">
                    <h2 style="color: #ffffff; font-size: 18px; font-weight: 600; margin: 0 0 8px 0; font-family: Georgia, serif;">What's Next?</h2>
                    <p style="color: #a3a3a3; font-size: 13px; line-height: 1.6; margin: 0;">
                      Our team will contact you within 24 hours to confirm your founding membership, discuss equity details, and welcome you personally to the DeployUnion family.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Benefits Section -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: rgba(38, 38, 38, 0.3); border: 1px solid rgba(115, 115, 115, 0.2); margin: 24px 0; border-radius: 4px;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="color: #ffffff; font-size: 18px; font-weight: 600; margin: 0 0 12px 0; font-family: Georgia, serif;">Your Founding Benefits</h2>
                    <ul style="color: #e5e5e5; font-size: 14px; line-height: 1.8; margin: 12px 0; padding-left: 20px;">
                      <li style="margin: 8px 0;">🎯 Exclusive founding member equity</li>
                      <li style="margin: 8px 0;">🚀 Early access to all platform features</li>
                      <li style="margin: 8px 0;">💬 Direct line to founding team</li>
                      <li style="margin: 8px 0;">🏆 Recognition in our founding hall of fame</li>
                      <li style="margin: 8px 0;">📊 Priority support and consultation</li>
                    </ul>
                  </td>
                </tr>
              </table>

              <!-- CTA Section -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin: 32px 0;">
                <tr>
                  <td align="center">
                    <a href="https://deployunion.vercel.app" style="display: inline-block; background-color: #FFC700; color: #0a0a0a; font-size: 14px; font-weight: 600; text-decoration: none; padding: 12px 32px; border-radius: 4px; margin: 0 0 16px 0;">
                      Visit Dashboard
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <p style="color: #a3a3a3; font-size: 13px; margin: 16px 0;">
                      Have questions? <a href="mailto:vivek.aryanvbw@gmail.com" style="color: #FFC700; text-decoration: underline;">Contact Us</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 20px 20px;">
              <hr style="border: none; border-top: 1px solid rgba(255, 255, 255, 0.1); margin: 0 0 20px 0;">
              <p style="color: #ffffff; font-size: 14px; text-align: center; margin: 8px 0;">
                <strong>DeployUnion</strong> - Independent Cloud Infrastructure
              </p>
              <p style="color: #737373; font-size: 11px; text-align: center; margin: 4px 0;">
                Secure Transaction | Your details are encrypted and protected
              </p>
              <p style="color: #737373; font-size: 11px; text-align: center; margin: 4px 0;">
                © 2025 DeployUnion. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function generateAdminNotificationHTML(data: FounderEmailData): string {
  const formattedAmount = Number.parseFloat(data.donationAmount).toLocaleString();
  const timestamp = new Date().toLocaleString();
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Founding Member</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: 'Courier New', Courier, monospace;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0a0a0a;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%;">
          
          <tr>
            <td>
              <h1 style="color: #FFC700; font-size: 24px; font-weight: 700; margin: 0 0 24px 0;">New Founding Member! 🎉</h1>
            </td>
          </tr>

          <tr>
            <td>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: rgba(38, 38, 38, 0.5); border: 1px solid rgba(255, 199, 0, 0.3); border-radius: 4px;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="color: #ffffff; font-size: 14px; margin: 12px 0; line-height: 1.6;">
                      <strong style="color: #a3a3a3;">Name:</strong> ${data.name}
                    </p>
                    <hr style="border: none; border-top: 1px solid rgba(255, 255, 255, 0.1); margin: 12px 0;">
                    
                    <p style="color: #ffffff; font-size: 14px; margin: 12px 0; line-height: 1.6;">
                      <strong style="color: #a3a3a3;">Email:</strong> ${data.email || 'N/A'}
                    </p>
                    <hr style="border: none; border-top: 1px solid rgba(255, 255, 255, 0.1); margin: 12px 0;">
                    
                    <p style="color: #ffffff; font-size: 14px; margin: 12px 0; line-height: 1.6;">
                      <strong style="color: #a3a3a3;">Phone:</strong> ${data.phone}
                    </p>
                    <hr style="border: none; border-top: 1px solid rgba(255, 255, 255, 0.1); margin: 12px 0;">
                    
                    <p style="color: #ffffff; font-size: 14px; margin: 12px 0 0 0; line-height: 1.6;">
                      <strong style="color: #a3a3a3;">Contribution:</strong> 
                      <span style="color: #FFC700; font-size: 18px; font-weight: 700;">₹${formattedAmount}</span>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td>
              <p style="color: #737373; font-size: 12px; margin: 20px 0 0 0;">Time: ${timestamp}</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
