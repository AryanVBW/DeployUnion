import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateFounderConfirmationHTML, generateAdminNotificationHTML } from '@/lib/email-templates';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, donationAmount } = await request.json();

    // Validate required fields
    if (!name || !phone || !donationAmount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // If no email provided, skip sending
    if (!email) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'No email provided, skipping email notification' 
        },
        { status: 200 }
      );
    }

    // Send confirmation email to founder
    const founderEmail = await resend.emails.send({
      from: 'DeployUnion <thanks-deployunion.nexus-v.tech>',
      to: [email],
      subject: 'Welcome to DeployUnion - Founding Member Confirmed! 🚀',
      html: generateFounderConfirmationHTML({
        name,
        email,
        phone,
        donationAmount,
      }),
    });

    // Send notification to admin
    const adminEmail = await resend.emails.send({
      from: 'DeployUnion <thanks-deployunion.nexus-v.tech>',
      to: ['vivek.aryanvbw@gmail.com'],
      subject: `New Founder: ${name} - ₹${Number.parseFloat(donationAmount).toLocaleString()}`,
      html: generateAdminNotificationHTML({
        name,
        email,
        phone,
        donationAmount,
      }),
    });

    return NextResponse.json(
      { 
        success: true, 
        founderEmailId: founderEmail.data?.id,
        adminEmailId: adminEmail.data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
