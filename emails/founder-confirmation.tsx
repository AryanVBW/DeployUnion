import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface FounderConfirmationEmailProps {
  name: string;
  email: string;
  phone: string;
  donationAmount: string;
}

export const FounderConfirmationEmail = ({
  name,
  email,
  phone,
  donationAmount,
}: FounderConfirmationEmailProps) => {
  const formattedAmount = Number.parseFloat(donationAmount).toLocaleString();

  return (
    <Html>
      <Head />
      <Preview>Welcome to DeployUnion - Your Founding Membership Confirmed</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Site Title Section */}
          <Section style={titleSection}>
            <Heading style={siteTitle}>DeployUnion</Heading>
            <Text style={tagline}>Independent Cloud Infrastructure</Text>
          </Section>

          {/* Success Icon */}
          <Section style={successSection}>
            <div style={successIcon}>✓</div>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h1}>
              Welcome to the <span style={italic}>Revolution</span>
            </Heading>

            <Text style={paragraph}>
              Congratulations, <strong>{name}</strong>!
            </Text>

            <Text style={paragraph}>
              Your founding contribution has been received, and you are now part of an exclusive group 
              reshaping cloud infrastructure. Welcome to the DeployUnion family!
            </Text>

            {/* Details Card */}
            <Section style={detailsCard}>
              <Heading style={cardTitle}>Your Founding Details</Heading>
              
              <div style={detailRow}>
                <Text style={detailLabel}>Founder Name</Text>
                <Text style={detailValue}>{name}</Text>
              </div>
              <Hr style={divider} />

              <div style={detailRow}>
                <Text style={detailLabel}>Email</Text>
                <Text style={detailValue}>{email || 'N/A'}</Text>
              </div>
              <Hr style={divider} />

              <div style={detailRow}>
                <Text style={detailLabel}>Phone</Text>
                <Text style={detailValue}>{phone}</Text>
              </div>
              <Hr style={divider} />

              <div style={contributionRow}>
                <Text style={contributionLabel}>Contribution</Text>
                <Text style={contributionValue}>₹{formattedAmount}</Text>
              </div>
            </Section>

            {/* What's Next Section */}
            <Section style={nextStepsCard}>
              <Heading style={cardTitle}>What's Next?</Heading>
              <Text style={nextStepsText}>
                Our team will contact you within 24 hours to confirm your founding membership, 
                discuss equity details, and welcome you personally to the DeployUnion family.
              </Text>
            </Section>

            {/* Benefits Section */}
            <Section style={benefitsSection}>
              <Heading style={cardTitle}>Your Founding Benefits</Heading>
              <ul style={benefitsList}>
                <li style={benefitItem}> Exclusive founding member equity</li>
                <li style={benefitItem}> Early access to all platform features</li>
                <li style={benefitItem}> Direct line to founding team</li>
                <li style={benefitItem}> Recognition in our founding hall of fame</li>
                <li style={benefitItem}> Priority support and consultation</li>
              </ul>
            </Section>

            {/* CTA Section */}
            <Section style={ctaSection}>
              <Link href="https://deployunion.nexus-v.tech/" style={button}>
                Visit Dashboard
              </Link>
              <Text style={ctaText}>
                Have questions? <Link href="mailto:vivek.aryanvbw@gmail.com" style={link}>Contact Us</Link>
              </Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Hr style={footerDivider} />
            <Text style={footerText}>
              <strong>DeployUnion</strong> - Independent Cloud Infrastructure
            </Text>
            <Text style={footerSubtext}>
              Secure Transaction | Your details are encrypted and protected
            </Text>
            <Text style={footerSubtext}>
              © 2025 DeployUnion. All rights reserved.
            </Text>
            <Text style={empoweredBy}>
              Empowered by <span style={empoweredByName}>AryanVBW</span>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default FounderConfirmationEmail;

// Styles matching the site's theme
const main = {
  backgroundColor: '#0a0a0a',
  fontFamily: '"Courier New", Courier, monospace',
};

const container = {
  margin: '0 auto',
  padding: '20px 0',
  width: '100%',
  maxWidth: '600px',
};

const titleSection = {
  padding: '30px 0 10px',
  textAlign: 'center' as const,
  backgroundColor: '#0a0a0a',
};

const siteTitle = {
  color: '#FFC700',
  fontSize: '36px',
  fontWeight: '700',
  margin: '0',
  fontFamily: 'Georgia, serif',
  letterSpacing: '0.5px',
};

const tagline = {
  color: '#a3a3a3',
  fontSize: '13px',
  margin: '8px 0 0 0',
  fontWeight: '400',
};

const successSection = {
  textAlign: 'center' as const,
  padding: '30px 0 20px',
};

const successIcon = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 199, 0, 0.2)',
  border: '2px solid rgba(255, 199, 0, 0.3)',
  fontSize: '32px',
  color: '#FFC700',
  margin: '0 auto',
};

const content = {
  padding: '0 20px',
};

const h1 = {
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: '700',
  textAlign: 'center' as const,
  margin: '20px 0',
  fontFamily: 'Georgia, serif',
};

const italic = {
  fontStyle: 'italic',
  fontWeight: '300',
};

const paragraph = {
  color: '#a3a3a3',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '16px 0',
};

const detailsCard = {
  backgroundColor: 'rgba(38, 38, 38, 0.5)',
  border: '1px solid rgba(255, 199, 0, 0.3)',
  padding: '24px',
  margin: '24px 0',
  borderRadius: '4px',
};

const cardTitle = {
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 16px 0',
  fontFamily: 'Georgia, serif',
};

const detailRow = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 0',
};

const detailLabel = {
  color: '#737373',
  fontSize: '12px',
  margin: '0',
};

const detailValue = {
  color: '#ffffff',
  fontSize: '14px',
  margin: '0',
  fontWeight: '500',
};

const divider = {
  borderColor: 'rgba(255, 255, 255, 0.1)',
  margin: '0',
};

const contributionRow = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: '16px',
};

const contributionLabel = {
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0',
};

const contributionValue = {
  color: '#FFC700',
  fontSize: '18px',
  fontWeight: '700',
  margin: '0',
};

const nextStepsCard = {
  backgroundColor: 'rgba(38, 38, 38, 0.5)',
  border: '1px solid rgba(115, 115, 115, 0.3)',
  padding: '24px',
  margin: '24px 0',
  borderRadius: '4px',
  textAlign: 'center' as const,
};

const nextStepsText = {
  color: '#a3a3a3',
  fontSize: '13px',
  lineHeight: '1.6',
  margin: '8px 0 0 0',
};

const benefitsSection = {
  backgroundColor: 'rgba(38, 38, 38, 0.3)',
  border: '1px solid rgba(115, 115, 115, 0.2)',
  padding: '24px',
  margin: '24px 0',
  borderRadius: '4px',
};

const benefitsList = {
  color: '#ffffff',
  fontSize: '14px',
  lineHeight: '1.8',
  margin: '12px 0',
  paddingLeft: '20px',
};

const benefitItem = {
  margin: '8px 0',
  color: '#e5e5e5',
};

const ctaSection = {
  textAlign: 'center' as const,
  margin: '32px 0',
};

const button = {
  backgroundColor: '#FFC700',
  color: '#0a0a0a',
  fontSize: '14px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 32px',
  borderRadius: '4px',
  margin: '0 0 16px 0',
};

const ctaText = {
  color: '#a3a3a3',
  fontSize: '13px',
  margin: '16px 0',
};

const link = {
  color: '#FFC700',
  textDecoration: 'underline',
};

const footer = {
  padding: '32px 20px 20px',
};

const footerDivider = {
  borderColor: 'rgba(255, 255, 255, 0.1)',
  margin: '0 0 20px 0',
};

const footerText = {
  color: '#ffffff',
  fontSize: '14px',
  textAlign: 'center' as const,
  margin: '8px 0',
};

const footerSubtext = {
  color: '#737373',
  fontSize: '11px',
  textAlign: 'center' as const,
  margin: '4px 0',
};

const empoweredBy = {
  color: '#737373',
  fontSize: '12px',
  textAlign: 'center' as const,
  margin: '16px 0 4px 0',
  fontStyle: 'italic',
};

const empoweredByName = {
  color: '#FFC700',
  fontWeight: '600',
  fontStyle: 'normal',
};
