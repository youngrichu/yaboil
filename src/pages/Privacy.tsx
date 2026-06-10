import LegalPage from '../components/LegalPage';

const sections = [
  { title: 'Information We Collect', body: `When you place an order or create an account, we collect your name, email address, shipping address, and payment information. Payment details are processed securely through our payment provider and are never stored on our servers. We also collect non-personal browsing data such as pages visited, time on site, and device type to improve your experience.` },
  { title: 'How We Use Your Information', body: `Your information is used solely to fulfil orders, send shipping confirmations, and — if you opt in — deliver our newsletter with sourcing stories, new batches, and slow beauty dispatches. We do not sell, rent, or share your personal data with third parties for marketing purposes.` },
  { title: 'Cookies', body: `We use essential cookies to keep your cart intact between sessions and to understand aggregate site usage. You can disable cookies in your browser settings at any time, though this may affect cart functionality. We do not use advertising or cross-site tracking cookies.` },
  { title: 'Data Storage & Security', body: `Your data is stored on secured servers with encryption in transit and at rest. We retain order records for up to seven years as required by applicable tax and commercial law. Account data can be deleted at any time upon request.` },
  { title: 'Your Rights', body: `You have the right to access, correct, export, or delete the personal data we hold about you. To make a request, email us at hello@yaboil.com. We will respond within 30 days. If you are located in the European Economic Area, you also have the right to lodge a complaint with your local supervisory authority.` },
  { title: 'Third-Party Services', body: `We use a small number of trusted third-party services to operate our store — including a payment processor, a shipping carrier, and an email delivery provider. Each is bound by its own privacy policy and processes only the data necessary to provide their service.` },
  { title: 'Changes to This Policy', body: `We may update this policy to reflect changes in our practices or applicable law. Material changes will be communicated by email to registered customers at least 14 days before taking effect. Continued use of our site after that date constitutes acceptance.` },
];

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="We believe transparency is part of the artisanal standard. This policy explains what data we collect, why we collect it, and how we protect it."
      sections={sections}
      crossLink={{ to: '/terms', label: 'Terms of Service' }}
    />
  );
}
