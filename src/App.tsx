import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import GoldenHour from './pages/GoldenHour';
import HighImpact from './pages/HighImpact';
import Philosophy from './pages/Philosophy';
import Lineup from './pages/Lineup';
import Process from './pages/Process';
import Journal from './pages/Journal';
import HarvestingDesertDetail from './pages/HarvestingDesertDetail';
import ProductDetail from './pages/ProductDetail';
import PumpkinSeedDetail from './pages/PumpkinSeedDetail';
import Cart from './pages/Cart';
import Account from './pages/Account';
import { ShoppingBag, User, Menu, X } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/golden-hour" element={<GoldenHour />} />
          <Route path="/high-impact" element={<HighImpact />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/lineup" element={<Lineup />} />
          <Route path="/process" element={<Process />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/harvesting-the-desert" element={<HarvestingDesertDetail />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/product/black-seed" element={<ProductDetail />} />
          <Route path="/product/pumpkin-seed" element={<PumpkinSeedDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function NavBar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHighImpact = location.pathname.includes('high-impact');
  
  // Dynamic styling based on current route
  const navClass = isHighImpact 
    ? "fixed top-0 z-50 w-full h-[80px] bg-hi-surface border-b-2 border-hi-obsidian flex items-center shadow-none"
    : "fixed top-0 z-50 w-full glass-nav bg-canvas/80 border-b border-raw-sienna/10 shadow-[0_4px_20px_-5px_rgba(74,44,17,0.08)] py-4";
    
  const textClass = isHighImpact ? "text-hi-obsidian font-aligarh" : "text-deep-bark font-display-lg";
  const iconClass = isHighImpact ? "text-hi-obsidian" : "text-primary";

  return (
    <>
      <nav className={navClass}>
        <div className="w-full flex items-center justify-between px-6 md:px-12">
          <div className="flex items-center gap-4">
            <button className="md:hidden focus:outline-none hover:opacity-70 transition-opacity" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} className={iconClass} /> : <Menu size={24} className={iconClass} />}
            </button>
            <Link to="/" className={`text-2xl font-bold tracking-tight flex items-center gap-4 ${textClass}`}>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDJAr829hhc4sAgjQ1fdbD0sQQW7xZzBBB5HJpjpEmXmvOCPX70Jh0Z8dY6hq4fOSQX_fq21oyUIWY4UqYfqncENv0ba-w3MVo4eodXf-hpWZzXKt1EdfYrvf2HQyA9vEEAtFakOYuVhifXNlCM16MokFD1M2UNcsWXezX_5jDtX0nopTnJfN0kdVF1Lj6z1YkU_SVqWTabihOBiUNjASMXvtXN02FtQKYYVyRFLQBaqND-2SG9uGrOL3Fzf-WrjF8lDyGIihSWZLp" alt="YabOil Logo" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
              <span className="hidden lg:block text-headline-md tracking-tighter">YabOil</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/process" className={`font-label-caps text-[12px] uppercase tracking-[0.2em] font-medium hover:opacity-70 cursor-pointer ${isHighImpact ? 'text-hi-obsidian' : (location.pathname === '/process' ? 'text-primary border-b border-primary pb-1' : 'text-on-surface-variant hover:text-primary transition-all duration-300')}`}>Process</Link>
            <Link to="/lineup" className={`font-label-caps text-[12px] uppercase tracking-[0.2em] font-medium hover:opacity-70 cursor-pointer ${isHighImpact ? 'text-hi-obsidian' : (location.pathname === '/lineup' ? 'text-primary border-b border-primary pb-1' : 'text-on-surface-variant hover:text-primary transition-all duration-300')}`}>Lineup</Link>
            <Link to="/philosophy" className={`font-label-caps text-[12px] uppercase tracking-[0.2em] font-medium hover:opacity-70 cursor-pointer ${isHighImpact ? 'text-hi-obsidian' : (location.pathname === '/philosophy' ? 'text-primary border-b border-primary pb-1' : 'text-on-surface-variant hover:text-primary transition-all duration-300')}`}>Philosophy</Link>
            <Link to="/journal" className={`font-label-caps text-[12px] uppercase tracking-[0.2em] font-medium hover:opacity-70 cursor-pointer ${isHighImpact ? 'text-hi-obsidian' : (location.pathname === '/journal' ? 'text-primary border-b border-primary pb-1' : 'text-on-surface-variant hover:text-primary transition-all duration-300')}`}>Journal</Link>
          </div>

          <div className={`flex items-center gap-4 md:gap-6 ${iconClass}`}>
            <Link to="/golden-hour" className={`hidden lg:block font-label-caps text-[10px] uppercase tracking-[0.2em] font-medium ${!isHighImpact && location.pathname !== '/' ? 'opacity-100 border-b border-sienna pb-1' : 'opacity-40 hover:opacity-100'}`}>Golden Hour</Link>
            <Link to="/high-impact" className={`hidden lg:block font-label-caps text-[10px] uppercase tracking-[0.2em] font-medium ${isHighImpact ? 'opacity-100 border-b-2 border-hi-obsidian pb-1' : 'opacity-40 hover:opacity-100'}`}>High Impact</Link>
            <div className="hidden lg:block w-px h-4 bg-current opacity-20 mx-2"></div>
            <Link to="/cart" className="hover:scale-105 transition-transform focus:outline-none relative flex items-center justify-center p-1 text-current">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <CartIndicator isHighImpact={isHighImpact} />
            </Link>
            <Link to="/account" className={`hover:scale-105 transition-transform focus:outline-none relative flex items-center justify-center p-1 text-current ${location.pathname === '/account' ? 'opacity-100 border-b border-sienna pb-1' : ''}`} aria-label="Account Portal">
              <User size={20} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Content */}
      <div className={`md:hidden fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-canvas z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} border-t border-obsidian/10`}>
         <div className="flex flex-col p-8 gap-8">
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/golden-hour" className={`font-label-caps text-sm uppercase tracking-[0.2em] font-medium ${!isHighImpact ? 'text-sienna' : 'text-obsidian/70'}`}>Golden Hour Theme</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/high-impact" className={`font-label-caps text-sm uppercase tracking-[0.2em] font-medium ${isHighImpact ? 'text-hi-obsidian font-bold' : 'text-obsidian/70'}`}>High Impact Theme</Link>
            <div className="w-full h-px bg-obsidian/10 my-4"></div>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/process" className="font-label-caps text-sm uppercase tracking-[0.2em] font-medium text-on-surface-variant cursor-pointer hover:text-primary">Process</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/lineup" className="font-label-caps text-sm uppercase tracking-[0.2em] font-medium text-on-surface-variant cursor-pointer hover:text-primary">Lineup</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/philosophy" className="font-label-caps text-sm uppercase tracking-[0.2em] font-medium text-on-surface-variant cursor-pointer hover:text-primary">Philosophy</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/journal" className="font-label-caps text-sm uppercase tracking-[0.2em] font-medium text-on-surface-variant cursor-pointer hover:text-primary">Journal</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/cart" className="font-label-caps text-sm uppercase tracking-[0.2em] font-medium text-on-surface-variant cursor-pointer hover:text-primary">Cart</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/account" className="font-label-caps text-sm uppercase tracking-[0.2em] font-medium text-on-surface-variant cursor-pointer hover:text-primary">Account Portal</Link>
         </div>
      </div>
    </>
  );
}

function CartIndicator({ isHighImpact }: { isHighImpact: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const rawCart = localStorage.getItem('yaboil_cart');
      if (rawCart) {
        try {
          const parsed = JSON.parse(rawCart);
          if (Array.isArray(parsed)) {
            const sum = parsed.reduce((acc, item) => acc + (item.quantity || 0), 0);
            setCount(sum);
            return;
          }
        } catch (e) {}
      }
      setCount(0);
    };

    updateCount();
    window.addEventListener('storage', updateCount);
    window.addEventListener('cart-updated', updateCount);
    return () => {
      window.removeEventListener('storage', updateCount);
      window.removeEventListener('cart-updated', updateCount);
    };
  }, []);

  if (count === 0) return null;

  return (
    <span className={`absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full flex items-center justify-center text-[9px] font-bold shadow-md transition-all duration-300 ${
      isHighImpact ? 'bg-hi-obsidian text-hi-surface' : 'bg-raw-sienna text-canvas'
    }`}>
      {count}
    </span>
  );
}
