import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Lineup() {
  return (
    <>
      <main className="flex-grow flex flex-col pt-32 lg:pt-40">
        {/* Hero Section */}
        <section className="w-full px-page-margin-mobile md:px-page-margin-desktop py-12 md:py-section-gap max-w-screen-2xl mx-auto flex flex-col items-center text-center">
          <h1 className="font-aligarh text-headline-lg-mobile md:text-display-lg text-deep-bark mb-6 max-w-4xl tracking-tight">
            The Artisanal Lineup
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Four exceptional botanicals, cold-pressed in small batches. Each bottle represents a commitment to purity, capturing the essence of organic agriculture through meticulous extraction processes.
          </p>
        </section>

        {/* Product Grid */}
        <section className="w-full px-page-margin-mobile md:px-page-margin-desktop pb-section-gap max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Product 1: Black Seed */}
            <div className="group flex flex-col bg-alabaster border border-raw-sienna/10 overflow-hidden transition-all duration-500 hover:shadow-[10px_10px_30px_rgba(74,44,17,0.12)]">
              <div className="relative h-[45vh] md:h-[60vh] lg:h-[70vh] w-full overflow-hidden bg-surface-container-low cursor-pointer">
                <img 
                  alt="Black Seed Oil Bottle" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  src="/images/black-seed.png" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="font-label-caps text-label-caps text-canvas tracking-[0.2em] uppercase">Nigella Sativa</span>
                </div>
              </div>
              <div className="p-8 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <h2 className="font-headline-md text-headline-md text-deep-bark font-medium">Black Seed Oil</h2>
                  <span className="font-body-md text-body-md text-raw-sienna">$48</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">Cold-pressed for maximum potency. Renowned for its dense antioxidant profile and deeply restorative properties.</p>
                <div className="mt-4 pt-4 border-t border-raw-sienna/10 flex justify-between items-center">
                  <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest">Origin: Egypt</span>
                  <Link to="/product/black-seed" className="font-label-caps text-label-caps text-canvas bg-raw-sienna px-6 py-3 hover:scale-[1.02] transition-transform duration-300 golden-shadow uppercase tracking-widest cursor-pointer">Discover</Link>
                </div>
              </div>
            </div>

            {/* Product 2: Pumpkin Seed */}
            <div className="group flex flex-col bg-alabaster border border-raw-sienna/10 overflow-hidden transition-all duration-500 hover:shadow-[10px_10px_30px_rgba(74,44,17,0.12)] md:mt-24">
              <div className="relative h-[45vh] md:h-[60vh] lg:h-[70vh] w-full overflow-hidden bg-surface-container-low cursor-pointer">
                <img 
                  alt="Pumpkin Seed Oil Bottle" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  src="/images/pumpkin-seed.png" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="font-label-caps text-label-caps text-canvas tracking-[0.2em] uppercase">Cucurbita Pepo</span>
                </div>
              </div>
              <div className="p-8 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <h2 className="font-headline-md text-headline-md text-deep-bark font-medium">Pumpkin Seed Oil</h2>
                  <span className="font-body-md text-body-md text-raw-sienna">$42</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">Rich in zinc and essential fatty acids. A deeply nourishing, lightweight oil ideal for sensitive skin profiles.</p>
                <div className="mt-4 pt-4 border-t border-raw-sienna/10 flex justify-between items-center">
                  <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest">Origin: Austria</span>
                  <Link to="/product/pumpkin-seed" className="font-label-caps text-label-caps text-canvas bg-raw-sienna px-6 py-3 hover:scale-[1.02] transition-transform duration-300 golden-shadow uppercase tracking-widest cursor-pointer">Discover</Link>
                </div>
              </div>
            </div>

            {/* Product 3: Castor */}
            <div className="group flex flex-col bg-alabaster border border-raw-sienna/10 overflow-hidden transition-all duration-500 hover:shadow-[10px_10px_30px_rgba(74,44,17,0.12)]">
              <div className="relative h-[45vh] md:h-[60vh] lg:h-[70vh] w-full overflow-hidden bg-surface-container-low cursor-pointer">
                <img 
                  alt="Castor Oil Bottle" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  src="/images/castor.png" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="font-label-caps text-label-caps text-canvas tracking-[0.2em] uppercase">Ricinus Communis</span>
                </div>
              </div>
              <div className="p-8 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <h2 className="font-headline-md text-headline-md text-deep-bark font-medium">Castor Oil</h2>
                  <span className="font-body-md text-body-md text-raw-sienna">$38</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">Hexane-free and unrefined. A dense, humectant barrier oil traditional used for fortifying hair and brows.</p>
                <div className="mt-4 pt-4 border-t border-raw-sienna/10 flex justify-between items-center">
                  <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest">Origin: India</span>
                  <Link to="/product" className="font-label-caps text-label-caps text-canvas bg-raw-sienna px-6 py-3 hover:scale-[1.02] transition-transform duration-300 golden-shadow uppercase tracking-widest cursor-pointer">Discover</Link>
                </div>
              </div>
            </div>

            {/* Product 4: Rosemary */}
            <div className="group flex flex-col bg-alabaster border border-raw-sienna/10 overflow-hidden transition-all duration-500 hover:shadow-[10px_10px_30px_rgba(74,44,17,0.12)] md:mt-24">
              <div className="relative h-[45vh] md:h-[60vh] lg:h-[70vh] w-full overflow-hidden bg-surface-container-low cursor-pointer">
                <img 
                  alt="Rosemary Oil Bottle" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  src="/images/rosemary.png" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="font-label-caps text-label-caps text-canvas tracking-[0.2em] uppercase">Salvia Rosmarinus</span>
                </div>
              </div>
              <div className="p-8 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <h2 className="font-headline-md text-headline-md text-deep-bark font-medium">Rosemary Oil</h2>
                  <span className="font-body-md text-body-md text-raw-sienna">$55</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">Steam-distilled pure essential extract. Invigorating and clarifying, celebrated for stimulating scalp vitality.</p>
                <div className="mt-4 pt-4 border-t border-raw-sienna/10 flex justify-between items-center">
                  <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest">Origin: Spain</span>
                  <Link to="/product" className="font-label-caps text-label-caps text-canvas bg-raw-sienna px-6 py-3 hover:scale-[1.02] transition-transform duration-300 golden-shadow uppercase tracking-widest cursor-pointer">Discover</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
