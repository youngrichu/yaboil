import ProductDetailLayout from '../components/ProductDetailLayout';

const product = {
  id: 'black-seed',
  name: 'Black Seed Oil',
  price: 54.00,
  specs: '120ML / 4OZ',
  image: '/images/black-seed.png',
  imageAlt: 'Black Seed Oil Product Shot',
  illustration: '/images/illustrations/nigella-sativa.jpg',
  description: 'A potent, ancient remedy cold-pressed from Nigella Sativa seeds. Known as the "seed of blessing," this deep amber oil is rich in thymoquinone, offering unparalleled antioxidant protection and restorative vitality for both hair and skin.',
  sections: [
    { title: 'The Absolute Potency', body: 'Naturally fortifying, this oil acts as a profound systemic balancer.' },
    { title: 'Usage & Ritual', body: 'Use as a final step in your evening ritual. Drizzle into palms, warm by rubbing, and press into damp hair or skin.' },
    { title: 'Ingredients', body: '100% Pure Cold-Pressed Black Seed Oil (Nigella Sativa).' },
    { title: 'Sourcing', body: 'Harvested from heritage farms in Ethiopia, where the climate produces the highest concentration of active compounds.' },
  ],
};

export default function ProductDetail() {
  return <ProductDetailLayout product={product} />;
}
