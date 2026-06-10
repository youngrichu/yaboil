import LegalPage from '../components/LegalPage';

const sections = [
  { title: 'Acceptance of Terms', body: `By accessing or purchasing from yaboil.com, you agree to be bound by these Terms of Service. If you do not agree, please do not use our site. These terms apply to all visitors, customers, and others who access or use the service.` },
  { title: 'Products & Descriptions', body: `We make every effort to display our products accurately, including colour, texture, and scent profiles. However, variations in screen calibration and natural batch-to-batch differences in cold-pressed botanical oils may result in slight differences from what is depicted. All product descriptions are for informational purposes and do not constitute medical advice.` },
  { title: 'Pricing & Payment', body: `All prices are listed in USD and are subject to change without notice. We reserve the right to refuse or cancel any order if a pricing error occurs. Payment is due in full at the time of purchase. We accept all major credit cards and other payment methods displayed at checkout.` },
  { title: 'Shipping & Delivery', body: `We ship to most countries worldwide. Estimated delivery times are provided at checkout and are not guaranteed. Title and risk of loss for all products pass to you upon delivery to the carrier. We are not responsible for delays caused by customs, weather, or carrier disruptions.` },
  { title: 'Returns & Refunds', body: `We accept returns of unopened, undamaged products within 14 days of delivery. To initiate a return, contact us at hello@yaboil.com with your order number. Once your return is received and inspected, we will process your refund within 7 business days. Shipping costs are non-refundable unless the return is due to our error.` },
  { title: 'Intellectual Property', body: `All content on this site — including text, photography, illustrations, logos, and design — is the exclusive property of YabOil Artisanal and is protected by applicable intellectual property law. You may not reproduce, distribute, or create derivative works without our express written consent.` },
  { title: 'Limitation of Liability', body: `To the fullest extent permitted by law, YabOil Artisanal shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our products or services. Our total liability to you for any claim shall not exceed the amount you paid for the product in question.` },
  { title: 'Skin Sensitivity & Patch Testing', body: `Our products are made with natural botanical ingredients. We strongly recommend performing a patch test on a small area of skin before full use. If irritation occurs, discontinue use immediately. YabOil Artisanal is not responsible for adverse reactions resulting from failure to patch test or from known pre-existing allergies.` },
  { title: 'Governing Law', body: `These terms are governed by and construed in accordance with applicable law. Any disputes shall be resolved through good-faith negotiation before resorting to formal proceedings.` },
];

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="These terms govern your use of yaboil.com and any purchase made through our store. Please read them carefully."
      sections={sections}
      crossLink={{ to: '/privacy', label: 'Privacy Policy' }}
    />
  );
}
