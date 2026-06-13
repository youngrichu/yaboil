import ProductDetailLayout from '../components/ProductDetailLayout';
import { IMAGES } from '../config/images';

const product = {
  id: 'growth',
  name: 'Growth Oil',
  price: 58.00,
  specs: '120ML / 4OZ',
  image: IMAGES.growth,
  imageAlt: 'YabOil Growth Oil hair growth blend for a healthy scalp',
  illustration: IMAGES.herbRosemary,
  description: 'A potent root-to-tip growth elixir, hand-blended from rosemary, black seed, castor, and nourishing seed oils. Designed to invigorate the scalp, strengthen the follicle, and support visibly thicker, fuller, more resilient hair — our most-loved formula for anyone chasing length and density.',
  sections: [
    { title: 'The Growth Synergy', body: 'Rosemary stimulates circulation at the scalp, castor delivers a humectant shield that fortifies each strand, and black seed calms and balances — together a time-honored trio celebrated for encouraging healthy hair growth and reducing breakage.' },
    { title: 'Usage & Ritual', body: 'Part the hair and apply five to eight drops directly to the scalp, massaging in slow circles for two to three minutes to boost circulation. Use three to four times weekly, leaving on overnight or for at least 30 minutes before washing. Consistency is everything — give it a full cycle to see results.' },
    { title: 'Ingredients', body: 'A pure botanical blend of Rosemary Oil (Salvia rosmarinus), Cold-Pressed Black Seed Oil (Nigella sativa), Castor Oil (Ricinus communis), and supporting seed oils. No mineral oil, silicones, or synthetic fragrance.' },
    { title: 'Sourcing', body: 'Blended by hand in small batches from single-origin oils we press ourselves, so every bottle carries the same potency from first drop to last.' },
  ],
};

export default function GrowthDetail() {
  return <ProductDetailLayout product={product} />;
}
