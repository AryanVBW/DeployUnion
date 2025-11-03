# 🚀 Email Service Setup Checklist

Use this checklist to ensure your email service is properly configured and tested.

## 📋 Pre-Setup Requirements

- [ ] Node.js and npm installed
- [ ] DeployUnion project cloned and running
- [ ] Access to create Resend account
- [ ] Email address for testing

## 🔧 Installation & Configuration

### Step 1: Install Resend Package
- [ ] Run: `npm install resend`
- [ ] Verify installation in `package.json`
- [ ] No errors in terminal

### Step 2: Create Resend Account
- [ ] Go to https://resend.com
- [ ] Click "Sign Up"
- [ ] Verify your email address
- [ ] Log in to dashboard

### Step 3: Get API Key
- [ ] Navigate to "API Keys" in Resend dashboard
- [ ] Click "Create API Key"
- [ ] Name it (e.g., "DeployUnion Dev" or "DeployUnion Production")
- [ ] Copy the API key (starts with `re_`)
- [ ] Save it securely (you won't see it again!)

### Step 4: Configure Environment
- [ ] Create `.env.local` file in project root
- [ ] Add: `RESEND_API_KEY=re_your_actual_key_here`
- [ ] Replace with your actual API key
- [ ] Verify no extra spaces or quotes
- [ ] Confirm `.env.local` is in `.gitignore`

### Step 5: Restart Dev Server
- [ ] Stop current dev server (Ctrl+C)
- [ ] Run: `npm run dev`
- [ ] Wait for "Ready" message
- [ ] No errors in terminal

## ✅ Testing

### Test 1: Basic Form Submission
- [ ] Open browser to http://localhost:3000/founder
- [ ] Fill in all fields:
  - [ ] Name: Your name
  - [ ] Email: Your email address
  - [ ] Phone: 10-digit number
  - [ ] Amount: Minimum ₹100
- [ ] Click "Secure Your Spot"
- [ ] No errors in browser console
- [ ] Form submits successfully

### Test 2: Email Delivery
- [ ] Check your email inbox (wait 1-2 minutes)
- [ ] Check spam/junk folder if not in inbox
- [ ] Email should arrive from "DeployUnion"
- [ ] Subject: "Welcome to DeployUnion - Founding Member Confirmed! 🚀"

### Test 3: Email Content Verification
- [ ] Email opens without issues
- [ ] DeployUnion logo visible at top
- [ ] Success checkmark displays
- [ ] Your name appears correctly
- [ ] Your email displays correctly
- [ ] Your phone number shows correctly
- [ ] Contribution amount is formatted properly (₹X,XXX)
- [ ] All sections visible:
  - [ ] Welcome message
  - [ ] Your Founding Details card
  - [ ] What's Next section
  - [ ] Founder Benefits list (5 items)
  - [ ] Visit Dashboard button
  - [ ] Contact Us link
  - [ ] Footer with branding

### Test 4: Email Design Check
- [ ] Email matches dark theme
- [ ] Colors look correct (black bg, gold accent)
- [ ] Text is readable
- [ ] Layout looks professional
- [ ] No broken images
- [ ] Mobile responsive (check on phone)

### Test 5: Admin Notification
- [ ] Check vivek.aryanvbw@gmail.com inbox
- [ ] Email received with subject: "New Founder: [Name] - ₹[Amount]"
- [ ] Contains all founder details
- [ ] Timestamp included
- [ ] Properly formatted

### Test 6: Edge Cases
- [ ] Test without email (optional field):
  - [ ] Submit form with email field empty
  - [ ] Form still submits
  - [ ] Payment flow works
  - [ ] No email sent (expected)
  - [ ] No errors
- [ ] Test with invalid email format:
  - [ ] Try "invalid-email"
  - [ ] Form validation catches it
- [ ] Test with amount less than ₹100:
  - [ ] Error message displays

## 🌐 Browser Testing

- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browser (iOS/Android)

## 📱 Mobile Testing

- [ ] Form displays correctly
- [ ] Email input works
- [ ] Email received on mobile
- [ ] Email renders correctly on mobile
- [ ] Images load properly
- [ ] Buttons are tappable
- [ ] Text is readable

## 🔍 Console & Logs

### Check Browser Console
- [ ] Open Developer Tools (F12)
- [ ] Go to Console tab
- [ ] Submit form
- [ ] No red errors related to email
- [ ] API call to `/api/send-email` succeeds (200 status)

### Check Network Tab
- [ ] Open Developer Tools (F12)
- [ ] Go to Network tab
- [ ] Submit form
- [ ] Find `send-email` request
- [ ] Status: 200 OK
- [ ] Response contains `success: true`
- [ ] Response has `founderEmailId` and `adminEmailId`

### Check Resend Dashboard
- [ ] Log in to Resend dashboard
- [ ] Go to "Logs" or "Emails"
- [ ] See your test email
- [ ] Status: "Delivered"
- [ ] No errors shown

## 🚀 Production Preparation

### Before Going Live
- [ ] Domain verified in Resend (optional but recommended)
- [ ] Update sender email addresses:
  - [ ] Edit `/app/api/send-email/route.ts`
  - [ ] Change from `onboarding@resend.dev`
  - [ ] To `onboarding@yourdomain.com`
- [ ] Update admin email if needed (line 45)
- [ ] Update logo URL to production domain
- [ ] Test with production domain
- [ ] Add `RESEND_API_KEY` to deployment platform
- [ ] Test on staging environment
- [ ] Monitor delivery rates

### DNS Configuration (If using custom domain)
- [ ] SPF record added
- [ ] DKIM record added
- [ ] DMARC record added
- [ ] Domain status: Verified in Resend

## 📊 Monitoring

### After Launch
- [ ] Monitor Resend dashboard for:
  - [ ] Delivery rates
  - [ ] Bounce rates
  - [ ] Open rates
  - [ ] Any errors
- [ ] Check spam reports
- [ ] Verify admin notifications arriving
- [ ] Monitor API usage/limits

## 🐛 Troubleshooting Checklist

### If Emails Not Sending
- [ ] API key is correct in `.env.local`
- [ ] No typos in API key
- [ ] Dev server restarted after adding env
- [ ] `resend` package installed
- [ ] No errors in terminal
- [ ] No errors in browser console
- [ ] Check Resend dashboard logs
- [ ] Verify email address is valid

### If Emails in Spam
- [ ] Using custom domain (not resend.dev)
- [ ] Domain verified in Resend
- [ ] SPF/DKIM configured
- [ ] Content not triggering spam filters
- [ ] Ask recipients to mark "Not Spam"

### If Styling Issues
- [ ] Clear email client cache
- [ ] Test in different email clients
- [ ] Check image URLs are accessible
- [ ] Verify logo path is correct
- [ ] Test on Gmail, Outlook, Apple Mail

## 📝 Documentation Review

- [ ] Read `QUICKSTART.md` for quick setup
- [ ] Read `EMAIL_SETUP.md` for detailed guide
- [ ] Read `EMAIL_CONFIGURATION_SUMMARY.md` for overview
- [ ] Review `EMAIL_FLOW_DIAGRAM.md` for architecture
- [ ] Keep `.env.example` as reference

## 🎯 Success Criteria

All of these should be true:
- [ ] Form submits without errors
- [ ] Founder receives confirmation email within 2 minutes
- [ ] Admin receives notification email
- [ ] Emails display correctly with all content
- [ ] Logo and styling are perfect
- [ ] Mobile emails look professional
- [ ] No errors in console or logs
- [ ] Resend dashboard shows "Delivered"

## 🎉 Final Verification

- [ ] Take screenshots of:
  - [ ] Form submission
  - [ ] Email in inbox
  - [ ] Email content
  - [ ] Mobile email view
  - [ ] Resend dashboard
- [ ] Document any issues found
- [ ] Note customizations made
- [ ] Save API key securely
- [ ] Backup `.env.local` template

## 📞 Support

If you encounter issues:

1. Check this checklist for missed steps
2. Review error messages carefully
3. Check Resend dashboard logs
4. Consult documentation files
5. Visit Resend docs: https://resend.com/docs
6. Contact: vivek.aryanvbw@gmail.com

---

## ✨ Once Complete

Congratulations! Your email service is fully configured and operational. 🎊

Mark the date you completed setup: ________________

Last tested: ________________

Status: [ ] Development [ ] Staging [ ] Production

---

**Print this checklist and check off items as you complete them!**
