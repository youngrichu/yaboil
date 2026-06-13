import { IMAGES } from '../config/images';

export interface ProductSection {
  title: string;
  body: string;
}

export interface Product {
  /** slug — used in /product/:id and as the cart line id */
  id: string;
  name: string;
  /** italic-caps overlay on the lineup card */
  latinName: string;
  /** "Origin: …" on the lineup card */
  origin: string;
  price: number;
  /** e.g. "120ML / 4OZ" */
  specs: string;
  image: string;
  imageAlt: string;
  /** faint botanical line-art behind the detail page */
  illustration: string;
  /** short label under the carousel name */
  tagline: string;
  /** lineup card body copy */
  cardDesc: string;
  /** carousel detail-panel copy */
  blurb: string;
  /** detail-page intro paragraph */
  description: string;
  sections: ProductSection[];
  /** carousel kinetic background word */
  bgText: string;
  /** carousel background gradient */
  bgGradient: string;
  /** optional carousel badge */
  tag?: string;
}

/**
 * Single source of truth for the product catalog. The lineup grid, homepage
 * carousel, and detail pages all derive from this array — order here is the
 * canonical lineup order.
 */
export const products: Product[] = [
  {
    id: 'black-seed',
    name: 'Black Seed Oil',
    latinName: 'Nigella Sativa',
    origin: 'Egypt',
    price: 48,
    specs: '120ML / 4OZ',
    image: IMAGES.blackSeed,
    imageAlt: 'Black Seed Oil Product Shot',
    illustration: IMAGES.nigellaSativa,
    tagline: 'Restorative & Healing',
    cardDesc: 'Cold-pressed for maximum potency. Renowned for its dense antioxidant profile and deeply restorative properties.',
    blurb: 'Cold-pressed from Nigella Sativa seeds. A dense antioxidant powerhouse that heals the skin barrier, reduces redness, and deeply restores.',
    description: 'A potent, ancient remedy cold-pressed from Nigella Sativa seeds. Known as the "seed of blessing," this deep amber oil is rich in thymoquinone, offering unparalleled antioxidant protection and restorative vitality for both hair and skin.',
    sections: [
      { title: 'The Absolute Potency', body: 'Naturally fortifying, this oil acts as a profound systemic balancer.' },
      { title: 'Usage & Ritual', body: 'Use as a final step in your evening ritual. Drizzle into palms, warm by rubbing, and press into damp hair or skin.' },
      { title: 'Ingredients', body: '100% Pure Cold-Pressed Black Seed Oil (Nigella Sativa).' },
      { title: 'Sourcing', body: 'Harvested from heritage farms in Ethiopia, where the climate produces the highest concentration of active compounds.' },
    ],
    bgText: 'NIGELLA',
    bgGradient: 'linear-gradient(160deg, #F6EDE0 0%, #E5D4BA 100%)',
  },
  {
    id: 'pumpkin-seed',
    name: 'Pumpkin Seed Oil',
    latinName: 'Cucurbita Pepo',
    origin: 'Austria',
    price: 42,
    specs: '120ML / 4OZ',
    image: IMAGES.pumpkinSeed,
    imageAlt: 'Pumpkin Seed Oil Product Shot',
    illustration: IMAGES.pumpkinVine,
    tagline: 'Nutrient-Rich Glow',
    cardDesc: 'Rich in zinc and essential fatty acids. A deeply nourishing, lightweight oil ideal for sensitive skin profiles.',
    blurb: 'Pressed from organic Styrian pumpkin seeds. Abundant in zinc and skin-firming vitamins, delivering a radiant, lightweight dewiness.',
    description: 'Pressed from organic Styrian pumpkin seeds, this nutrient-dense oil is abundant in zinc, omega fatty acids, and skin-firming vitamins. It delivers a radiant, lightweight dewiness while deeply nourishing the lipid barrier for long-term hydration.',
    sections: [
      { title: 'The Nutrient Powerhouse', body: 'Rich in zinc, Omega-3, 6, and 9 fatty acids, this oil supports collagen production, cellular repair, and lasting moisture retention — delivering a visible glow with every application.' },
      { title: 'Usage & Ritual', body: 'For facial vitality, warm three drops between palms and press gently into damp skin. For hair, use as a pre-wash treatment or a finishing serum to tame flyaways and add a glass-like shine.' },
      { title: 'Ingredients', body: '100% Pure Cold-Pressed Pumpkin Seed Oil (Cucurbita pepo). No fillers, no synthetic fragrances, no preservatives. Just the essence of the seed.' },
      { title: 'Sourcing', body: 'Harvested from small-batch farms in Styria, Austria — a region world-renowned for its nutrient-dense "green gold." We press in micro-batches to ensure every drop retains its high antioxidant profile and deep, nutty aroma.' },
    ],
    bgText: 'PUMPKIN',
    bgGradient: 'linear-gradient(160deg, #FDFBF7 0%, #EDE4D7 100%)',
  },
  {
    id: 'castor',
    name: 'Castor Oil',
    latinName: 'Ricinus Communis',
    origin: 'India',
    price: 38,
    specs: '60ML / 2OZ',
    image: IMAGES.castor,
    imageAlt: 'Cold-pressed YabOil Castor Oil for hair, lashes and brows',
    illustration: IMAGES.castorIllustration,
    tagline: 'Lash & Brow Vitality',
    cardDesc: 'Hexane-free and unrefined. A dense, humectant barrier oil traditionally used for fortifying hair and brows.',
    blurb: 'Thick, hexane-free organic castor seed press. An ancient humectant shield that fortifies hair shafts and promotes lush growth.',
    description: 'A dense, humectant barrier oil cold-pressed and hexane-free from organic castor seeds. Used for generations to fortify hair, lashes, and brows, this rich, glossy oil seals in moisture, shields strands from breakage, and creates the conditions for thicker, lusher-looking growth.',
    sections: [
      { title: 'The Humectant Shield', body: "Castor oil's signature ricinoleic acid draws and locks in moisture, coating each strand in a protective barrier that reduces breakage and split ends. It's the time-honored choice for fuller-looking lashes, bolder brows, and a nourished scalp." },
      { title: 'Usage & Ritual', body: 'A little goes a long way. Warm one to two drops between fingertips and work through ends, lashes, or brows before bed. For the scalp, dilute with a lighter oil and massage in as a weekly fortifying treatment.' },
      { title: 'Ingredients', body: '100% Pure Cold-Pressed Castor Seed Oil (Ricinus communis), hexane-free and unrefined. No fillers, no synthetic fragrance, no preservatives.' },
      { title: 'Sourcing', body: 'Pressed from organically grown castor seeds in India, where the crop has been cultivated and cold-extracted for centuries. Unrefined and hexane-free to preserve its full humectant character.' },
    ],
    bgText: 'CASTOR',
    bgGradient: 'linear-gradient(160deg, #F4EDE6 0%, #E2D0C0 100%)',
  },
  {
    id: 'rosemary',
    name: 'Rosemary Oil',
    latinName: 'Salvia Rosmarinus',
    origin: 'Spain',
    price: 25,
    specs: '60ML / 2OZ',
    image: IMAGES.rosemary,
    imageAlt: 'Steam-distilled YabOil Rosemary Oil scalp tonic',
    illustration: IMAGES.herbRosemary,
    tagline: 'Stimulating & Strengthening',
    cardDesc: 'Steam-distilled pure essential extract. Invigorating and clarifying, celebrated for stimulating scalp vitality.',
    blurb: 'Steam-distilled pure essential extract. Invigorating and clarifying, celebrated for stimulating scalp vitality and restoring hair radiance.',
    description: 'A pure, steam-distilled rosemary essential extract prized for centuries as a scalp tonic. Invigorating and clarifying, it stimulates circulation at the roots, awakens tired follicles, and restores shine and vitality to dull, lifeless hair.',
    sections: [
      { title: 'Stimulating & Clarifying', body: 'Rosemary is celebrated for boosting circulation at the scalp, supporting healthy hair growth and a balanced, refreshed root. Its bright, herbaceous aroma clarifies and energizes every ritual.' },
      { title: 'Usage & Ritual', body: 'Always dilute this concentrated essential oil before use — add a few drops to a carrier such as our Sesame or Castor oil, then massage into the scalp. Leave for 20–30 minutes before washing. Use two to three times weekly.' },
      { title: 'Ingredients', body: '100% Pure Steam-Distilled Rosemary Essential Oil (Salvia rosmarinus). A concentrated extract — dilute before applying to skin or scalp.' },
      { title: 'Sourcing', body: 'Steam-distilled from rosemary grown in the sun-drenched hills of Spain, where the Mediterranean climate yields an especially aromatic, high-potency extract.' },
    ],
    bgText: 'ROSEMARY',
    bgGradient: 'linear-gradient(160deg, #FDFBF7 0%, #F0E8DE 100%)',
    tag: 'Best Seller',
  },
  {
    id: 'sesame',
    name: 'Sesame Oil',
    latinName: 'Sesamum Indicum',
    origin: 'Ethiopia',
    price: 38,
    specs: '120ML / 4OZ',
    image: IMAGES.sesame,
    imageAlt: 'Cold-pressed YabOil Sesame Oil for hair and skin',
    illustration: IMAGES.pumpkinVine,
    tagline: 'Lightweight & Conditioning',
    cardDesc: 'Cold-pressed from golden Humera sesame seeds. A featherlight, vitamin E–rich oil that conditions strands and softens skin without weighing either down.',
    blurb: "Cold-pressed from Ethiopia's golden Humera sesame. A featherlight, vitamin E–rich oil that seals in moisture and softens skin without any heavy residue.",
    description: "Cold-pressed from Ethiopia's prized Humera sesame seeds, this golden, fast-absorbing oil is naturally abundant in vitamin E, sesamol, and skin-loving fatty acids. Lightweight yet deeply conditioning, it seals moisture into hair, soothes a dry scalp, and leaves skin supple with a soft, non-greasy finish.",
    sections: [
      { title: 'Lightweight, Deep Conditioning', body: 'Naturally rich in vitamin E and sesamol antioxidants, cold-pressed sesame oil penetrates the hair shaft to smooth frizz, tame split ends, and shield strands from heat and pollution — without the heavy residue of richer oils.' },
      { title: 'Usage & Ritual', body: 'Warm three to four drops between palms and work through mid-lengths to ends, or massage into the scalp before washing as a nourishing pre-shampoo treatment. A single drop also doubles as a quick-absorbing daily face and body moisturizer.' },
      { title: 'Ingredients', body: '100% Pure Cold-Pressed Sesame Seed Oil (Sesamum indicum). No fillers, no synthetic fragrance, no preservatives. Just the essence of the seed.' },
      { title: 'Sourcing', body: "Single-origin from the Humera lowlands of northern Ethiopia, a region world-renowned for some of the planet's finest sesame. We press in small batches to preserve every drop's antioxidant potency and signature nutty warmth." },
    ],
    bgText: 'SESAME',
    bgGradient: 'linear-gradient(160deg, #FBF4E8 0%, #E8D2A8 100%)',
    tag: 'New',
  },
  {
    id: 'growth',
    name: 'Growth Oil',
    latinName: 'Botanical Blend',
    origin: 'Small-Batch Blend',
    price: 58,
    specs: '120ML / 4OZ',
    image: IMAGES.growth,
    imageAlt: 'YabOil Growth Oil hair growth blend for a healthy scalp',
    illustration: IMAGES.herbRosemary,
    tagline: 'Root to Tip Density',
    cardDesc: 'Our signature root-to-tip growth elixir — a small-batch blend of rosemary, black seed, and castor oils to awaken the scalp and encourage thicker, fuller-looking hair.',
    blurb: 'Our signature growth elixir — a small-batch blend of rosemary, black seed, and castor oils that invigorates the scalp and supports thicker, fuller-looking hair.',
    description: 'A potent root-to-tip growth elixir, hand-blended from rosemary, black seed, castor, and nourishing seed oils. Designed to invigorate the scalp, strengthen the follicle, and support visibly thicker, fuller, more resilient hair — our most-loved formula for anyone chasing length and density.',
    sections: [
      { title: 'The Growth Synergy', body: 'Rosemary stimulates circulation at the scalp, castor delivers a humectant shield that fortifies each strand, and black seed calms and balances — together a time-honored trio celebrated for encouraging healthy hair growth and reducing breakage.' },
      { title: 'Usage & Ritual', body: 'Part the hair and apply five to eight drops directly to the scalp, massaging in slow circles for two to three minutes to boost circulation. Use three to four times weekly, leaving on overnight or for at least 30 minutes before washing. Consistency is everything — give it a full cycle to see results.' },
      { title: 'Ingredients', body: 'A pure botanical blend of Rosemary Oil (Salvia rosmarinus), Cold-Pressed Black Seed Oil (Nigella sativa), Castor Oil (Ricinus communis), and supporting seed oils. No mineral oil, silicones, or synthetic fragrance.' },
      { title: 'Sourcing', body: 'Blended by hand in small batches from single-origin oils we press ourselves, so every bottle carries the same potency from first drop to last.' },
    ],
    bgText: 'GROWTH',
    bgGradient: 'linear-gradient(160deg, #F7F4E9 0%, #DAD6B0 100%)',
    tag: 'New',
  },
  {
    id: 'flaxseed',
    name: 'Flaxseed Oil',
    latinName: 'Linum Usitatissimum',
    origin: 'Ethiopia',
    price: 42,
    specs: '120ML / 4OZ',
    image: IMAGES.flaxseed,
    imageAlt: 'Cold-pressed YabOil Flaxseed Oil rich in omega-3 for hair',
    illustration: IMAGES.castorIllustration,
    tagline: 'Omega-Rich Definition',
    cardDesc: 'Cold-pressed from heritage flax (telba). An omega-3–dense oil that defines curls, smooths frizz, and feeds the scalp the essential fatty acids it craves.',
    blurb: "Cold-pressed from heritage Ethiopian flax (telba). One of nature's richest plant sources of omega-3, it defines curls, calms frizz, and nourishes the scalp.",
    description: "Cold-pressed from heritage Ethiopian flax — known locally as telba — this amber oil is one of nature's richest plant sources of omega-3 (ALA) and protective lignans. It hydrates from the inside of the strand out, defining curls, calming frizz, and nourishing the scalp for softer, springier, more resilient hair.",
    sections: [
      { title: 'Omega-Rich Definition', body: "Loaded with omega-3 alpha-linolenic acid and lignan antioxidants, flaxseed oil reinforces the hair's elasticity and shine. It's a curl-lover's secret for natural hold and definition without crunch, and a featherweight conditioner for fine hair." },
      { title: 'Usage & Ritual', body: 'Smooth a few drops over damp curls to shape and define, or warm between palms and glide over dry ends to seal frizz. As a scalp treatment, massage in before washing to deliver essential fatty acids straight to the root.' },
      { title: 'Ingredients', body: '100% Pure Cold-Pressed Flaxseed (Linseed) Oil (Linum usitatissimum). No fillers, no synthetic fragrance, no preservatives.' },
      { title: 'Sourcing', body: 'Pressed from highland Ethiopian flax, a heritage crop cultivated for generations as telba. Small-batch cold-pressing protects the delicate omega-3 profile that makes this oil so prized — and so perishable in lesser hands.' },
    ],
    bgText: 'FLAXSEED',
    bgGradient: 'linear-gradient(160deg, #F8EFE4 0%, #E3C9A6 100%)',
    tag: 'New',
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
