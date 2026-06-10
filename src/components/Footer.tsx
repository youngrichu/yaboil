import { Link } from 'react-router-dom';
import { IMAGES } from '../config/images';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full pt-section-gap pb-12 bg-obsidian text-canvas border-t border-raw-sienna/10">
      <div className="px-page-margin-mobile md:px-page-margin-desktop">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-1 space-y-6">
            <img src={IMAGES.logoSvg} alt="YabOil" className="h-14 w-auto object-contain brightness-0 invert opacity-90" />
            <p className="font-body-md text-sm text-canvas/70 leading-relaxed max-w-xs">
              Small-batch, cold-pressed botanicals for the modern ritual. Sustainably sourced. Hand-poured.
            </p>
            <div className="flex items-center gap-5 pt-2">
              <a href="#" aria-label="Instagram" className="text-canvas/50 hover:text-raw-sienna transition-colors duration-300">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="TikTok" className="text-canvas/50 hover:text-raw-sienna transition-colors duration-300">
                <TikTokIcon />
              </a>
              <a href="#" aria-label="Pinterest" className="text-canvas/50 hover:text-raw-sienna transition-colors duration-300">
                <PinterestIcon />
              </a>
            </div>
          </div>

          {/* Shop column */}
          <div className="space-y-5">
            <h4 className="font-label-caps text-[10px] text-canvas/40 uppercase tracking-[0.2em]">Shop</h4>
            <ul className="space-y-3 font-body-md text-sm text-canvas/70">
              <li><Link to="/lineup" className="hover:text-raw-sienna transition-colors duration-300">All Products</Link></li>
              <li><Link to="/product/black-seed" className="hover:text-raw-sienna transition-colors duration-300">Black Seed Oil</Link></li>
              <li><Link to="/product/pumpkin-seed" className="hover:text-raw-sienna transition-colors duration-300">Pumpkin Seed Oil</Link></li>
              <li><Link to="/product" className="hover:text-raw-sienna transition-colors duration-300">Rosemary Oil</Link></li>
              <li><Link to="/product" className="hover:text-raw-sienna transition-colors duration-300">Castor Oil</Link></li>
            </ul>
          </div>

          {/* Explore column */}
          <div className="space-y-5">
            <h4 className="font-label-caps text-[10px] text-canvas/40 uppercase tracking-[0.2em]">Explore</h4>
            <ul className="space-y-3 font-body-md text-sm text-canvas/70">
              <li><Link to="/philosophy" className="hover:text-raw-sienna transition-colors duration-300">Our Philosophy</Link></li>
              <li><Link to="/process" className="hover:text-raw-sienna transition-colors duration-300">Our Process</Link></li>
              <li><Link to="/journal" className="hover:text-raw-sienna transition-colors duration-300">The Journal</Link></li>
              <li><Link to="/cart" className="hover:text-raw-sienna transition-colors duration-300">Cart</Link></li>
            </ul>
          </div>

          {/* Newsletter column */}
          <div className="space-y-5">
            <h4 className="font-label-caps text-[10px] text-canvas/40 uppercase tracking-[0.2em]">Newsletter</h4>
            <p className="font-body-md text-sm text-canvas/70 leading-relaxed">
              Slow beauty dispatches, new batches, and sourcing stories.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-transparent border-b border-canvas/20 py-3 pr-10 font-body-md text-sm focus:outline-none focus:border-raw-sienna transition-colors text-canvas placeholder:text-canvas/30 rounded-none"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-raw-sienna cursor-pointer focus:outline-none hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-canvas/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-label-sm text-[11px] text-canvas/40 tracking-wider">
            © {new Date().getFullYear()} YabOil Artisanal. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="font-label-sm text-[11px] text-canvas/40 hover:text-canvas/70 transition-colors tracking-wider uppercase">Privacy</Link>
            <Link to="/terms" className="font-label-sm text-[11px] text-canvas/40 hover:text-canvas/70 transition-colors tracking-wider uppercase">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
