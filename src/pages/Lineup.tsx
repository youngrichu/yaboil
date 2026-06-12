import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { IMAGES } from '../config/images';

interface Product {
  name: string;
  latinName: string;
  price: number;
  description: string;
  origin: string;
  image: string;
  link: string;
  offset?: boolean;
}

const products: Product[] = [
  {
    name: 'Black Seed Oil',
    latinName: 'Nigella Sativa',
    price: 48,
    description: 'Cold-pressed for maximum potency. Renowned for its dense antioxidant profile and deeply restorative properties.',
    origin: 'Egypt',
    image: IMAGES.blackSeed,
    link: '/product/black-seed',
  },
  {
    name: 'Pumpkin Seed Oil',
    latinName: 'Cucurbita Pepo',
    price: 42,
    description: 'Rich in zinc and essential fatty acids. A deeply nourishing, lightweight oil ideal for sensitive skin profiles.',
    origin: 'Austria',
    image: IMAGES.pumpkinSeed,
    link: '/product/pumpkin-seed',
    offset: true,
  },
  {
    name: 'Castor Oil',
    latinName: 'Ricinus Communis',
    price: 38,
    description: 'Hexane-free and unrefined. A dense, humectant barrier oil traditional used for fortifying hair and brows.',
    origin: 'India',
    image: IMAGES.castor,
    link: '/product',
  },
  {
    name: 'Rosemary Oil',
    latinName: 'Salvia Rosmarinus',
    price: 55,
    description: 'Steam-distilled pure essential extract. Invigorating and clarifying, celebrated for stimulating scalp vitality.',
    origin: 'Spain',
    image: IMAGES.rosemary,
    link: '/product',
    offset: true,
  },
];

function LineupCard({ product }: { product: Product }) {
  return (
    <div className={`group flex flex-col bg-alabaster border border-raw-sienna/10 overflow-hidden transition-all duration-500 hover:shadow-[10px_10px_30px_rgba(74,44,17,0.12)]${product.offset ? ' md:mt-24' : ''}`}>
      <div className="relative h-[45vh] md:h-[60vh] lg:h-[70vh] w-full overflow-hidden bg-surface-container-low cursor-pointer">
        <img
          alt={`${product.name} Bottle`}
          src={product.image}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <span className="font-label-caps text-label-caps text-canvas tracking-[0.2em] uppercase">{product.latinName}</span>
        </div>
      </div>
      <div className="p-8 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <h2 className="font-headline-md text-headline-md text-deep-bark font-medium">{product.name}</h2>
          <span className="font-body-md text-body-md text-raw-sienna">${product.price}</span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">{product.description}</p>
        <div className="mt-4 pt-4 border-t border-raw-sienna/10 flex justify-between items-center">
          <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest">Origin: {product.origin}</span>
          <Link to={product.link} className="font-label-caps text-label-caps text-canvas bg-raw-sienna px-6 py-3 hover:scale-[1.02] transition-transform duration-300 golden-shadow uppercase tracking-widest cursor-pointer">Discover</Link>
        </div>
      </div>
    </div>
  );
}

export default function Lineup() {
  return (
    <>
      <main className="flex-grow flex flex-col pt-32 lg:pt-40">
        <section className="w-full px-page-margin-mobile md:px-page-margin-desktop py-12 md:py-section-gap max-w-screen-2xl mx-auto flex flex-col items-center text-center relative overflow-hidden">
          <img src={IMAGES.castorIllustration} aria-hidden="true" alt="" className="absolute top-0 left-0 w-[260px] h-auto opacity-[0.13] mix-blend-multiply pointer-events-none select-none hidden lg:block [mask-image:radial-gradient(ellipse_at_top_left,black_25%,transparent_68%)]" />
          <img src={IMAGES.castorIllustration} aria-hidden="true" alt="" className="absolute top-0 right-0 w-[260px] h-auto opacity-[0.13] mix-blend-multiply pointer-events-none select-none hidden lg:block [mask-image:radial-gradient(ellipse_at_top_right,black_25%,transparent_68%)]" />
          <h1 className="font-serif text-display-lg-mobile md:text-display-lg text-deep-bark mb-6 max-w-4xl tracking-tight relative z-10">The Artisanal Lineup</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed relative z-10">
            Four exceptional botanicals, cold-pressed in small batches. Each bottle represents a commitment to purity, capturing the essence of organic agriculture through meticulous extraction processes.
          </p>
        </section>

        <section className="w-full px-page-margin-mobile md:px-page-margin-desktop pb-section-gap max-w-screen-2xl mx-auto relative overflow-hidden">
          <img src={IMAGES.pumpkinVine} aria-hidden="true" alt="" className="absolute bottom-0 right-0 w-[240px] h-auto opacity-[0.11] mix-blend-multiply pointer-events-none select-none hidden lg:block [filter:sepia(0.8)_saturate(0.5)] [mask-image:radial-gradient(ellipse_at_bottom_right,black_25%,transparent_70%)]" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 relative z-10">
            {products.map((product) => (
              <LineupCard key={product.name} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
