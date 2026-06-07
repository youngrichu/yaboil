import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import ProductButton from '../components/ProductButton';

export default function ProductDetail() {
  const [cartStatus, setCartStatus] = useState<'idle' | 'adding' | 'added'>('idle');
  const [cartQuantity, setCartQuantity] = useState<number>(0);

  const getItemQuantity = () => {
    const rawCart = localStorage.getItem('yaboil_cart');
    if (rawCart) {
      try {
        const cart = JSON.parse(rawCart);
        if (Array.isArray(cart)) {
          const item = cart.find((i: any) => i.id === 'black-seed');
          return item ? item.quantity : 0;
        }
      } catch (e) {}
    }
    return 0;
  };

  useEffect(() => {
    const updateQty = () => {
      setCartQuantity(getItemQuantity());
    };
    updateQty();
    window.addEventListener('storage', updateQty);
    window.addEventListener('cart-updated', updateQty);
    return () => {
      window.removeEventListener('storage', updateQty);
      window.removeEventListener('cart-updated', updateQty);
    };
  }, []);

  const handleUpdateQuantity = (delta: number) => {
    const rawCart = localStorage.getItem('yaboil_cart');
    let cart: any[] = [];
    if (rawCart) {
      try {
        cart = JSON.parse(rawCart);
        if (!Array.isArray(cart)) cart = [];
      } catch (e) {
        cart = [];
      }
    }
    
    const existingIndex = cart.findIndex((i: any) => i.id === 'black-seed');
    if (existingIndex > -1) {
      const newQty = cart[existingIndex].quantity + delta;
      if (newQty <= 0) {
        cart.splice(existingIndex, 1);
      } else {
        cart[existingIndex].quantity = newQty;
      }
    }
    
    localStorage.setItem('yaboil_cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-updated'));
    setCartQuantity(getItemQuantity());
  };

  const handleAddToCart = () => {
    setCartStatus('adding');
    setTimeout(() => {
      const rawCart = localStorage.getItem('yaboil_cart');
      let cart: any[] = [];
      if (rawCart) {
        try {
          cart = JSON.parse(rawCart);
          if (!Array.isArray(cart)) cart = [];
        } catch (e) {
          cart = [];
        }
      }
      const existingIndex = cart.findIndex((i: any) => i.id === 'black-seed');
      if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
      } else {
        cart.push({
          id: 'black-seed',
          name: 'Black Seed Oil',
          price: 54.00,
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGxgAWAt_jY0BelWOq2pzzEkdf0ZZs6UmB7kf53gmeB4SneLRXcfs1JJ2jRoL4Bk3oIzwW9Fv2uGmHBcV-3Qi6DytAievcBxmC3Z4aMrwkb5wXT2FMDhhso7yurbe1X8hQKIqJR74Lh1M2778nkAmin00-NFoQKATKCjhgBmO9zboL4cyaZ8RKIoJYKCarJvpZWhgxvZEA6i-mofXW2riSxrdX2ZaSkxOMMw485wbr2qnECDPBSifYTYYQbJBEt5SphQErdU59hwK4',
          specs: '120ML / 4OZ',
          quantity: 1
        });
      }
      localStorage.setItem('yaboil_cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('cart-updated'));

      setCartStatus('added');
      setTimeout(() => {
        setCartStatus('idle');
      }, 2000);
    }, 800);
  };

  return (
    <>
      <main className="min-h-screen relative pt-20">
        <div className="flex flex-col md:flex-row h-full w-full items-start">
          {/* Left Side: Sticky High-Fidelity Product Shot */}
          <div className="w-full md:w-1/2 h-[60vh] md:h-[calc(100vh-80px)] md:sticky md:top-20 bg-alabaster relative group z-0">
            <div className="absolute inset-0 w-full h-full p-4 md:p-8 lg:p-12 flex items-center justify-center">
              <img 
                alt="Black Seed Oil Product Shot" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] shadow-[12px_16px_32px_-8px_rgba(74,44,17,0.08)]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGxgAWAt_jY0BelWOq2pzzEkdf0ZZs6UmB7kf53gmeB4SneLRXcfs1JJ2jRoL4Bk3oIzwW9Fv2uGmHBcV-3Qi6DytAievcBxmC3Z4aMrwkb5wXT2FMDhhso7yurbe1X8hQKIqJR74Lh1M2778nkAmin00-NFoQKATKCjhgBmO9zboL4cyaZ8RKIoJYKCarJvpZWhgxvZEA6i-mofXW2riSxrdX2ZaSkxOMMw485wbr2qnECDPBSifYTYYQbJBEt5SphQErdU59hwK4" 
              />
            </div>
          </div>
          
          {/* Right Side: Scrolling Narrative */}
          <div className="w-full md:w-1/2 min-h-screen px-page-margin-mobile md:px-12 lg:px-24 py-16 md:py-16 bg-canvas flex flex-col justify-start relative z-10">
            {/* Product Header & Pricing */}
            <div className="mb-12">
              <h1 className="font-aligarh text-display-lg-mobile md:text-display-lg text-on-surface mb-4 leading-normal py-2">Black Seed Oil</h1>
              <div className="flex items-baseline gap-4">
                <span className="font-body-lg text-body-lg text-on-surface-variant">$54.00</span>
                <span className="font-label-caps text-label-caps text-outline tracking-widest uppercase">120ml / 4oz</span>
              </div>
            </div>
            
            {/* Product Description */}
            <div className="prose max-w-none mb-12">
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                A potent, ancient remedy cold-pressed from Nigella Sativa seeds. Known as the "seed of blessing," this deep amber oil is rich in thymoquinone, offering unparalleled antioxidant protection and restorative vitality for both hair and skin.
              </p>
            </div>
            
            {/* Add to Cart Action */}
            <div className="mb-16 pb-12 border-b border-raw-sienna/10 sticky top-[72px] bg-canvas/90 backdrop-blur-sm z-10 py-4 -mx-page-margin-mobile px-page-margin-mobile md:mx-0 md:px-0 md:static md:bg-transparent space-y-4">
              {cartQuantity > 0 ? (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    {/* Quantity Selector with Minus/Plus */}
                    <div className="flex-1 flex items-center justify-between border border-raw-sienna/30 px-6 py-4 bg-canvas font-body-md select-none">
                      <button 
                        onClick={() => handleUpdateQuantity(-1)}
                        className="text-on-surface-variant hover:text-raw-sienna transition-colors p-2 cursor-pointer flex items-center justify-center"
                        aria-label="Decrease quantity"
                      >
                        <span className="material-symbols-outlined font-bold text-lg select-none">remove</span>
                      </button>
                      <span className="font-headline-md text-xl font-semibold tracking-tight text-deep-bark text-center min-w-[50px]">
                        {cartQuantity} in Cart
                      </span>
                      <button 
                        onClick={() => handleUpdateQuantity(1)}
                        className="text-on-surface-variant hover:text-raw-sienna transition-colors p-2 cursor-pointer flex items-center justify-center"
                        aria-label="Increase quantity"
                      >
                        <span className="material-symbols-outlined font-bold text-lg select-none">add</span>
                      </button>
                    </div>

                    {/* Return link to lineup / other items */}
                    <Link
                      to="/lineup"
                      className="flex-1 bg-deep-bark text-canvas text-center py-5 px-8 font-label-caps text-label-caps tracking-widest hover:bg-raw-sienna hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 uppercase font-semibold h-full flex items-center justify-center text-[11px]"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                  <p className="text-center font-label-sm text-xs text-raw-sienna/80 italic tracking-wider">
                    Adjust quantity above or continue exploring other exceptional botanicals.
                  </p>
                </div>
              ) : (
                <ProductButton
                  onClick={handleAddToCart}
                  status={cartStatus}
                  variant="main"
                />
              )}
            </div>
            
            {/* Detailed Sections (Accordions/Editorial Blocks) */}
            <div className="space-y-8">
              {/* Section 1 */}
              <div className="border-b border-obsidian/10 pb-6 group cursor-pointer">
                <h2 className="font-aligarh text-headline-md text-on-surface mb-3 group-hover:text-raw-sienna transition-colors leading-normal pt-1">The Absolute Potency</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Naturally fortifying, this oil acts as a profound systemic balancer.</p>
              </div>
              
              {/* Section 2 */}
              <div className="border-b border-obsidian/10 pb-6 group cursor-pointer">
                <h2 className="font-aligarh text-headline-md text-on-surface mb-3 group-hover:text-raw-sienna transition-colors leading-normal pt-1">Usage & Ritual</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Use as a final step in your evening ritual. Drizzle into palms, warm by rubbing, and press into damp hair or skin.</p>
              </div>
              
              {/* Section 3 */}
              <div className="border-b border-obsidian/10 pb-6 group cursor-pointer">
                <h2 className="font-aligarh text-headline-md text-on-surface mb-3 group-hover:text-raw-sienna transition-colors leading-normal pt-1">Ingredients</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">100% Pure Cold-Pressed Black Seed Oil (Nigella Sativa).</p>
              </div>
              
              {/* Section 4 */}
              <div className="border-b border-obsidian/10 pb-6 group cursor-pointer">
                <h2 className="font-aligarh text-headline-md text-on-surface mb-3 group-hover:text-raw-sienna transition-colors leading-normal pt-1">Sourcing</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Harvested from heritage farms in Ethiopia, where the climate produces the highest concentration of active compounds.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Adjust Footer z-index since main has fixed layout items */}
      <div className="relative z-10 bg-obsidian">
        <Footer />
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-canvas/90 backdrop-blur-md px-page-margin-mobile py-4 border-t border-raw-sienna/10 flex items-center justify-between z-50 gap-4">
        {cartQuantity > 0 ? (
          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex items-center border border-raw-sienna/30 px-3 py-2 space-x-4 bg-canvas justify-between w-[150px]">
              <button 
                onClick={() => handleUpdateQuantity(-1)}
                className="text-on-surface-variant hover:text-raw-sienna p-1"
                aria-label="Decrease quantity"
              >
                <span className="material-symbols-outlined text-sm font-bold select-none">remove</span>
              </button>
              <span className="font-body-md font-semibold text-deep-bark text-xs select-none">
                {cartQuantity} in Cart
              </span>
              <button 
                onClick={() => handleUpdateQuantity(1)}
                className="text-on-surface-variant hover:text-raw-sienna p-1"
                aria-label="Increase quantity"
              >
                <span className="material-symbols-outlined text-sm font-bold select-none">add</span>
              </button>
            </div>
            <Link
              to="/lineup"
              className="bg-raw-sienna text-canvas px-4 py-3.5 font-label-caps text-[10px] uppercase tracking-widest font-semibold flex-grow text-center"
            >
              Shop More
            </Link>
          </div>
        ) : (
          <>
            <div>
              <span className="font-label-caps text-label-caps text-deep-bark text-xs">Black Seed Oil</span>
              <p className="font-body-md text-body-md font-bold text-on-surface">$54.00</p>
            </div>
            <ProductButton
              onClick={handleAddToCart}
              status={cartStatus}
              variant="mobile"
            />
          </>
        )}
      </div>
    </>
  );
}
