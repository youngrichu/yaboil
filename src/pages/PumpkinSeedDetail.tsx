import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import ProductButton from '../components/ProductButton';

export default function PumpkinSeedDetail() {
  const [isIngredientsOpen, setIsIngredientsOpen] = useState(false);
  const [cartStatus, setCartStatus] = useState<'idle' | 'adding' | 'added'>('idle');
  const [cartQuantity, setCartQuantity] = useState<number>(0);

  const getItemQuantity = () => {
    const rawCart = localStorage.getItem('yaboil_cart');
    if (rawCart) {
      try {
        const cart = JSON.parse(rawCart);
        if (Array.isArray(cart)) {
          const item = cart.find((i: any) => i.id === 'pumpkin-seed');
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
    
    const existingIndex = cart.findIndex((i: any) => i.id === 'pumpkin-seed');
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
      const existingIndex = cart.findIndex((i: any) => i.id === 'pumpkin-seed');
      if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
      } else {
        cart.push({
          id: 'pumpkin-seed',
          name: 'Pumpkin Seed Oil',
          price: 42.00,
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBB3ppVTedLI-ehsEjCbeQ9mUmBHzIRwzkThRY7wrrKjnZ0KBCNSlEqLql2gIwcFWZAnosezanyZJeo26FWU0L4Mx3l9H11OrhW3oqLJXISjnkdbZQXlNyugj7N3va-4kIl7QFfcwYgdh6dNfKeTMTzI3eyp-dbt6redn7JXjk87q_A2en0sv7zk-qUmt5ykUfy9VHrbyv61f8eVI-VnxBclgIDKPCPjRil28gY0y28lkNdRkCFkPoDCiGNvYC_XcbvQDXfufJwBq_3',
          specs: '250ML | COLD PRESSED STYRIA',
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
          {/* Left Side: Sticky Product Shot */}
          <div className="w-full md:w-1/2 h-[60vh] md:h-[calc(100vh-80px)] md:sticky md:top-20 bg-alabaster relative group z-0 overflow-hidden">
            <div className="absolute inset-0 w-full h-full p-4 md:p-8 lg:p-12 flex items-center justify-center">
              <img 
                alt="Pumpkin Seed Oil Product Shot" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03] shadow-[12px_16px_32px_-8px_rgba(74,44,17,0.08)]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB3ppVTedLI-ehsEjCbeQ9mUmBHzIRwzkThRY7wrrKjnZ0KBCNSlEqLql2gIwcFWZAnosezanyZJeo26FWU0L4Mx3l9H11OrhW3oqLJXISjnkdbZQXlNyugj7N3va-4kIl7QFfcwYgdh6dNfKeTMTzI3eyp-dbt6redn7JXjk87q_A2en0sv7zk-qUmt5ykUfy9VHrbyv61f8eVI-VnxBclgIDKPCPjRil28gY0y28lkNdRkCFkPoDCiGNvYC_XcbvQDXfufJwBq_3" 
              />
              <div className="absolute inset-0 bg-deep-bark/5 pointer-events-none"></div>
              
              {/* Callout Component */}
              <div className="absolute top-1/2 left-8 md:left-16 group-hover:translate-x-4 transition-transform duration-500">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full bg-raw-sienna shadow-lg"></div>
                  <div className="h-[1px] w-12 bg-raw-sienna/50"></div>
                  <span className="font-label-caps text-[10px] md:text-label-caps text-deep-bark bg-canvas/80 px-3 py-1 backdrop-blur-sm uppercase tracking-widest whitespace-nowrap">
                    Cold Pressed Styria
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side: Scrolling Narrative */}
          <div className="w-full md:w-1/2 min-h-screen px-page-margin-mobile md:px-12 lg:px-24 py-16 md:py-16 bg-canvas flex flex-col justify-start relative z-10">
            {/* Product Header & Pricing */}
            <div className="mb-10 space-y-4">
              <div className="flex flex-col space-y-2">
                <span className="font-label-caps text-label-caps text-raw-sienna uppercase tracking-widest">
                  Single Origin Botanical
                </span>
                <h1 className="font-aligarh text-display-lg-mobile md:text-display-lg text-deep-bark leading-normal py-2 italic font-semibold">
                  Pumpkin Seed Oil
                </h1>
              </div>
              <div className="flex items-center justify-between border-b border-raw-sienna/10 pb-8">
                <p className="font-headline-md text-headline-md text-on-surface flex items-baseline gap-2">
                  <span>$42.00</span>
                  <span className="text-body-md text-on-surface-variant font-body-md ml-1 font-normal">/ 250ml</span>
                </p>
                <div className="flex space-x-1 text-raw-sienna">
                  <span className="material-symbols-outlined select-none" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined select-none" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined select-none" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined select-none" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined select-none" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
              </div>
            </div>
            
            {/* Add to Cart Action */}
            <div className="mb-14 pb-12 border-b border-raw-sienna/10 z-25 space-y-4">
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
              <p className="text-center mt-4 font-label-sm text-label-sm text-on-surface-variant italic">
                Complimentary shipping on orders over $100.
              </p>
            </div>
            
            {/* The Nutrient Powerhouse Section */}
            <div className="mb-16 space-y-6">
              <h2 className="font-headline-md text-headline-md text-deep-bark italic border-b border-raw-sienna/10 pb-4">
                The Nutrient Powerhouse
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <span className="font-label-caps text-label-caps text-raw-sienna block">High Zinc Content</span>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Essential for collagen production and cellular repair, maintaining skin elasticity and a youthful glow.
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="font-label-caps text-label-caps text-raw-sienna block">Omega Fatty Acids</span>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Rich in Omega-3, 6, and 9 to nourish the lipid barrier and lock in moisture for long-term hydration.
                  </p>
                </div>
              </div>
            </div>

            {/* Imagery Interlude */}
            <div className="w-full h-80 overflow-hidden relative mb-16 golden-shadow group">
              <img 
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" 
                alt="Organic pumpkin seeds layout styling" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsooy0Fv01LrTE05cdkwSW3IEoABMgnCWepFYI5PtwLtfQnRs4fnhNeDNQK1cwIHwFAhysYokA69mlyMhIM_zZOoLNycTCk8j9KhS8n2BFLLFS9XAroSF_6eqkT2QGW_G3fx2RJGuafBt4JKqZtsA1PVjT2lfN7guhPgrYYiUARJBwD2tO_pz-XF_U9BnJhAwc-5vQZjUyh_H4oUI6MGDk_GsubepE4mgI74Btiv4NcnvjHR57KMIz4doqrmV5cFqweK1lkQZTluvI" 
              />
              <div className="absolute inset-0 bg-deep-bark/5 pointer-events-none"></div>
            </div>

            {/* Usage & Ritual */}
            <div className="mb-16 space-y-6">
              <h2 className="font-headline-md text-headline-md text-deep-bark italic border-b border-raw-sienna/10 pb-4">
                Usage & Ritual
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Embrace a moment of slow living. For facial vitality, warm three drops between palms and press gently into damp skin. For hair, use as a pre-wash treatment or a finishing serum to tame flyaways and add a glass-like shine.
              </p>
            </div>

            {/* Ingredients Accordion (Interactive) */}
            <div className="border-t border-raw-sienna/10 mb-16">
              <button 
                onClick={() => setIsIngredientsOpen(!isIngredientsOpen)}
                className="w-full py-6 flex justify-between items-center cursor-pointer group focus:outline-none"
              >
                <h3 className="font-headline-md text-headline-md text-deep-bark">Ingredients</h3>
                <span className={`material-symbols-outlined text-raw-sienna transition-transform duration-300 ${isIngredientsOpen ? 'rotate-45' : ''}`}>
                  add
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isIngredientsOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  100% Pure Cold-Pressed Pumpkin Seed Oil (Cucurbita pepo). No fillers, no synthetic fragrances, no preservatives. Just the essence of the seed.
                </p>
              </div>
            </div>

            {/* Sourcing */}
            <div className="bg-surface-container-low p-8 md:p-12 mb-16 space-y-6">
              <span className="font-label-caps text-label-caps text-raw-sienna block">The Source</span>
              <h3 className="font-headline-md text-headline-md text-deep-bark italic">Grown in the heart of Styria</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Our pumpkin seeds are harvested from small-batch farms in Styria, Austria—a region world-renowned for its nutrient-dense "green gold." We press in micro-batches to ensure every drop retains its high antioxidant profile and deep, nutty aroma.
              </p>
            </div>

            {/* Sustainable Ethics */}
            <div className="border-t border-raw-sienna/10 pt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-label-caps text-label-caps text-deep-bark uppercase">Discover More</h4>
                <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                  <li className="hover:text-primary transition-colors cursor-pointer">Argan Elixir</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Rosehip Radiance</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Marula Recovery</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-label-caps text-label-caps text-deep-bark uppercase animate-pulse-slow">Sustainable Ethics</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Plastic-free packaging. Zero-waste production. Committed to the earth that provides for us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Global Footer */}
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
              <span className="font-label-caps text-label-caps text-deep-bark text-xs">Pumpkin Seed Oil</span>
              <p className="font-body-md text-body-md font-bold text-on-surface">$42.00</p>
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
