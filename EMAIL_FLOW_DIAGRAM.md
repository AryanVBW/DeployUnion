# Email Service Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          DeployUnion Email Flow                          │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────┐
│   Founder    │
│  Visits Site │
└──────┬───────┘
       │
       ▼
┌─────────────────────────────────┐
│  /founder Page                   │
│  • Fill Name                     │
│  • Fill Email (optional)         │
│  • Fill Phone                    │
│  • Fill Contribution Amount      │
└────────────────┬────────────────┘
                 │
                 │ [Submit Form]
                 ▼
┌──────────────────────────────────────────┐
│  Form Validation                          │
│  ✓ Name required                          │
│  ✓ Phone 10 digits                        │
│  ✓ Amount >= ₹100                         │
└───────────────┬──────────────────────────┘
                │
                │ [Valid]
                ▼
┌──────────────────────────────────────────┐
│  Save to sessionStorage                   │
│  founderData = {                          │
│    name, email, phone, donationAmount    │
│  }                                        │
└───────────────┬──────────────────────────┘
                │
                ├──────────────┬───────────────┐
                │              │               │
                ▼              ▼               ▼
        [If email exists]  [Payment]   [Always]
                │              │               │
                │              │               │
┌───────────────▼──────────────────┐          │
│  POST /api/send-email             │          │
│  {                                │          │
│    name: string,                  │          │
│    email: string,                 │          │
│    phone: string,                 │          │
│    donationAmount: string         │          │
│  }                                │          │
└───────────────┬──────────────────┘          │
                │                              │
                │ [Resend API]                 │
                ▼                              │
┌────────────────────────────────────┐        │
│  Generate HTML Emails               │        │
│                                     │        │
│  1. generateFounderConfirmationHTML │        │
│     • Logo                          │        │
│     • Success icon                  │        │
│     • Details card                  │        │
│     • Benefits list                 │        │
│     • CTAs                          │        │
│                                     │        │
│  2. generateAdminNotificationHTML   │        │
│     • Alert header                  │        │
│     • Founder details               │        │
│     • Timestamp                     │        │
└────────────────┬───────────────────┘        │
                 │                             │
                 ├──────────┬─────────┐        │
                 │          │         │        │
                 ▼          ▼         │        │
         ┌────────────┐ ┌──────────┐ │        │
         │   Resend   │ │  Resend  │ │        │
         │   Email    │ │  Email   │ │        │
         │   Service  │ │  Service │ │        │
         └──────┬─────┘ └────┬─────┘ │        │
                │            │        │        │
                ▼            ▼        │        │
         ┌────────────┐ ┌──────────┐ │        │
         │  Founder   │ │  Admin   │ │        │
         │  Inbox     │ │  Inbox   │ │        │
         │            │ │          │ │        │
         │ ✓ Welcome  │ │ 🎉 New   │ │        │
         │ ✓ Details  │ │   Member │ │        │
         │ ✓ Benefits │ │          │ │        │
         └────────────┘ └──────────┘ │        │
                                     │        │
                                     ▼        ▼
                              ┌──────────────────────┐
                              │  UPI Payment Flow     │
                              │  • Mobile: Open UPI   │
                              │  • Desktop: Show QR   │
                              └──────────┬───────────┘
                                         │
                                         ▼
                              ┌──────────────────────┐
                              │  /founder/thank-you   │
                              │  • Show details       │
                              │  • What's next info   │
                              │  • Contact buttons    │
                              └──────────────────────┘
```

## Email Contents

### 📧 Founder Confirmation Email

```
┌────────────────────────────────────────────────┐
│                                                 │
│              [DeployUnion Logo]                 │
│                                                 │
│                     ✓                           │
│            (Success Circle)                     │
│                                                 │
│    Welcome to the Revolution                    │
│                                                 │
│    Congratulations, John Doe!                   │
│                                                 │
│    Your founding contribution has been...       │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │   Your Founding Details                  │  │
│  │   ──────────────────────────────────     │  │
│  │   Founder Name     John Doe              │  │
│  │   Email           john@example.com       │  │
│  │   Phone           1234567890             │  │
│  │   Contribution    ₹5,000                 │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │   What's Next?                           │  │
│  │   Our team will contact you within...    │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │   Your Founding Benefits                 │  │
│  │   • Exclusive founding member equity     │  │
│  │   • Early access to all features         │  │
│  │   • Direct line to founding team         │  │
│  │   • Recognition in hall of fame          │  │
│  │   • Priority support                     │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│         [Visit Dashboard Button]                │
│                                                 │
│         Have questions? Contact Us              │
│                                                 │
│  ───────────────────────────────────────────    │
│  DeployUnion - Independent Cloud Infrastructure │
│  Secure Transaction | Details encrypted         │
│  © 2025 DeployUnion. All rights reserved.       │
└────────────────────────────────────────────────┘
```

### 🔔 Admin Notification Email

```
┌────────────────────────────────────────────┐
│  New Founding Member! 🎉                   │
│                                            │
│  ┌──────────────────────────────────────┐ │
│  │  Name:         John Doe              │ │
│  │  Email:        john@example.com      │ │
│  │  Phone:        1234567890            │ │
│  │  Contribution: ₹5,000                │ │
│  └──────────────────────────────────────┘ │
│                                            │
│  Time: Nov 4, 2025, 10:30:00 AM           │
└────────────────────────────────────────────┘
```

## API Flow

```
POST /api/send-email
├── Validate input
│   ├── Required: name, phone, donationAmount
│   └── Optional: email
│
├── Generate HTML emails
│   ├── generateFounderConfirmationHTML(data)
│   └── generateAdminNotificationHTML(data)
│
├── Send via Resend
│   ├── Founder Email
│   │   ├── From: onboarding@resend.dev
│   │   ├── To: founder's email
│   │   └── Subject: Welcome to DeployUnion...
│   │
│   └── Admin Email
│       ├── From: onboarding@resend.dev
│       ├── To: vivek.aryanvbw@gmail.com
│       └── Subject: New Founder: Name - Amount
│
└── Return response
    ├── Success: { success: true, founderEmailId, adminEmailId }
    └── Error: { error: message, details }
```

## Environment Setup

```
Production Environment
├── .env.local (local development)
│   └── RESEND_API_KEY=re_xxxxx
│
├── Vercel/Deployment Platform
│   └── Environment Variables
│       └── RESEND_API_KEY=re_xxxxx
│
└── Resend Dashboard
    ├── API Keys
    ├── Domains (optional for production)
    └── Email Logs
```

## File Dependencies

```
/app/founder/page.tsx
    │
    ├─→ Calls POST /api/send-email
    │
    ▼
/app/api/send-email/route.ts
    │
    ├─→ Imports from /lib/email-templates.ts
    │
    ├─→ Uses Resend client
    │
    └─→ Sends emails via Resend API
         │
         ▼
    generateFounderConfirmationHTML()
    generateAdminNotificationHTML()
         │
         ▼
    Resend Service → Email Delivery
```

## Theme Colors in Emails

```
Background:  #0a0a0a  ████████████
Primary:     #FFC700  ████████████
Text:        #ffffff  ████████████
Muted:       #a3a3a3  ████████████
Border:      rgba(255, 199, 0, 0.3)
Card BG:     rgba(38, 38, 38, 0.5)
```

## Status Indicators

```
✅ Configured   - Email templates created
✅ Configured   - API route set up
✅ Configured   - Form integration added
✅ Configured   - HTML emails matching theme
✅ Configured   - Admin notifications
✅ Configured   - Error handling
⏳ Pending      - Install resend package
⏳ Pending      - Add RESEND_API_KEY to .env.local
⏳ Pending      - Test email delivery
```
