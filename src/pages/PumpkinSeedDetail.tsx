import ProductDetailLayout from '../components/ProductDetailLayout';

const product = {
  id: 'pumpkin-seed',
  name: 'Pumpkin Seed Oil',
  price: 42.00,
  specs: '250ML / 4OZ',
  image: '/images/pumpkin-seed.png',
  imageAlt: 'Pumpkin Seed Oil Product Shot',
  illustration: '/images/illustrations/pumpkin-vine.jpg',
  description: 'Pressed from organic Styrian pumpkin seeds, this nutrient-dense oil is abundant in zinc, omega fatty acids, and skin-firming vitamins. It delivers a radiant, lightweight dewiness while deeply nourishing the lipid barrier for long-term hydration.',
  sections: [
    { title: 'The Nutrient Powerhouse', body: 'Rich in zinc, Omega-3, 6, and 9 fatty acids, this oil supports collagen production, cellular repair, and lasting moisture retention — delivering a visible glow with every application.' },
    { title: 'Usage & Ritual', body: 'For facial vitality, warm three drops between palms and press gently into damp skin. For hair, use as a pre-wash treatment or a finishing serum to tame flyaways and add a glass-like shine.' },
    { title: 'Ingredients', body: '100% Pure Cold-Pressed Pumpkin Seed Oil (Cucurbita pepo). No fillers, no synthetic fragrances, no preservatives. Just the essence of the seed.' },
    { title: 'Sourcing', body: 'Harvested from small-batch farms in Styria, Austria — a region world-renowned for its nutrient-dense "green gold." We press in micro-batches to ensure every drop retains its high antioxidant profile and deep, nutty aroma.' },
  ],
};

export default function PumpkinSeedDetail() {
  return <ProductDetailLayout product={product} />;
}
