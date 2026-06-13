import ProductDetailLayout from '../components/ProductDetailLayout';
import { IMAGES } from '../config/images';

const product = {
  id: 'flaxseed',
  name: 'Flaxseed Oil',
  price: 42.00,
  specs: '120ML / 4OZ',
  image: IMAGES.flaxseed,
  imageAlt: 'Cold-pressed YabOil Flaxseed Oil rich in omega-3 for hair',
  illustration: IMAGES.castorIllustration,
  description: "Cold-pressed from heritage Ethiopian flax — known locally as telba — this amber oil is one of nature's richest plant sources of omega-3 (ALA) and protective lignans. It hydrates from the inside of the strand out, defining curls, calming frizz, and nourishing the scalp for softer, springier, more resilient hair.",
  sections: [
    { title: 'Omega-Rich Definition', body: "Loaded with omega-3 alpha-linolenic acid and lignan antioxidants, flaxseed oil reinforces the hair's elasticity and shine. It's a curl-lover's secret for natural hold and definition without crunch, and a featherweight conditioner for fine hair." },
    { title: 'Usage & Ritual', body: 'Smooth a few drops over damp curls to shape and define, or warm between palms and glide over dry ends to seal frizz. As a scalp treatment, massage in before washing to deliver essential fatty acids straight to the root.' },
    { title: 'Ingredients', body: '100% Pure Cold-Pressed Flaxseed (Linseed) Oil (Linum usitatissimum). No fillers, no synthetic fragrance, no preservatives.' },
    { title: 'Sourcing', body: 'Pressed from highland Ethiopian flax, a heritage crop cultivated for generations as telba. Small-batch cold-pressing protects the delicate omega-3 profile that makes this oil so prized — and so perishable in lesser hands.' },
  ],
};

export default function FlaxseedDetail() {
  return <ProductDetailLayout product={product} />;
}
