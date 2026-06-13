import ProductDetailLayout from '../components/ProductDetailLayout';
import { IMAGES } from '../config/images';

const product = {
  id: 'sesame',
  name: 'Sesame Oil',
  price: 38.00,
  specs: '120ML / 4OZ',
  image: IMAGES.sesame,
  imageAlt: 'Cold-pressed YabOil Sesame Oil for hair and skin',
  illustration: IMAGES.pumpkinVine,
  description: "Cold-pressed from Ethiopia's prized Humera sesame seeds, this golden, fast-absorbing oil is naturally abundant in vitamin E, sesamol, and skin-loving fatty acids. Lightweight yet deeply conditioning, it seals moisture into hair, soothes a dry scalp, and leaves skin supple with a soft, non-greasy finish.",
  sections: [
    { title: 'Lightweight, Deep Conditioning', body: 'Naturally rich in vitamin E and sesamol antioxidants, cold-pressed sesame oil penetrates the hair shaft to smooth frizz, tame split ends, and shield strands from heat and pollution — without the heavy residue of richer oils.' },
    { title: 'Usage & Ritual', body: 'Warm three to four drops between palms and work through mid-lengths to ends, or massage into the scalp before washing as a nourishing pre-shampoo treatment. A single drop also doubles as a quick-absorbing daily face and body moisturizer.' },
    { title: 'Ingredients', body: '100% Pure Cold-Pressed Sesame Seed Oil (Sesamum indicum). No fillers, no synthetic fragrance, no preservatives. Just the essence of the seed.' },
    { title: 'Sourcing', body: "Single-origin from the Humera lowlands of northern Ethiopia, a region world-renowned for some of the planet's finest sesame. We press in small batches to preserve every drop's antioxidant potency and signature nutty warmth." },
  ],
};

export default function SesameDetail() {
  return <ProductDetailLayout product={product} />;
}
