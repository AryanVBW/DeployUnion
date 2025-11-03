import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface AdminNotificationEmailProps {
  name: string;
  email: string;
  phone: string;
  donationAmount: string;
}

export const AdminNotificationEmail = ({
  name,
  email,
  phone,
  donationAmount,
}: AdminNotificationEmailProps) => {
  const formattedAmount = Number.parseFloat(donationAmount).toLocaleString();
  const timestamp = new Date().toLocaleString();

  return (
    <Html>
      <Head />
      <Preview>New Founding Member: {name} - ₹{formattedAmount}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Founding Member! </Heading>

          <Section style={detailsCard}>
            <Text style={detail}>
              <strong style={label}>Name:</strong> {name}
            </Text>
            <Hr style={divider} />

            <Text style={detail}>
              <strong style={label}>Email:</strong> {email || 'N/A'}
            </Text>
            <Hr style={divider} />

            <Text style={detail}>
              <strong style={label}>Phone:</strong> {phone}
            </Text>
            <Hr style={divider} />

            <Text style={contributionDetail}>
              <strong style={label}>Contribution:</strong>{' '}
              <span style={amount}>₹{formattedAmount}</span>
            </Text>
          </Section>

          <Text style={timestamp}>Time: {timestamp}</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default AdminNotificationEmail;

// Styles
const main = {
  backgroundColor: '#0a0a0a',
  fontFamily: '"Courier New", Courier, monospace',
};

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  width: '100%',
  maxWidth: '600px',
};

const h1 = {
  color: '#FFC700',
  fontSize: '24px',
  fontWeight: '700',
  margin: '0 0 24px 0',
};

const detailsCard = {
  backgroundColor: 'rgba(38, 38, 38, 0.5)',
  border: '1px solid rgba(255, 199, 0, 0.3)',
  padding: '24px',
  borderRadius: '4px',
};

const detail = {
  color: '#ffffff',
  fontSize: '14px',
  margin: '12px 0',
  lineHeight: '1.6',
};

const contributionDetail = {
  color: '#ffffff',
  fontSize: '14px',
  margin: '12px 0 0 0',
  lineHeight: '1.6',
};

const label = {
  color: '#a3a3a3',
};

const amount = {
  color: '#FFC700',
  fontSize: '18px',
  fontWeight: '700',
};

const divider = {
  borderColor: 'rgba(255, 255, 255, 0.1)',
  margin: '12px 0',
};

const timestamp = {
  color: '#737373',
  fontSize: '12px',
  margin: '20px 0 0 0',
};
