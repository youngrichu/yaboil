import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Minus, Plus, Trash2, X, Gift, Tag, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import EmptyCart from '../components/EmptyCart';
import CheckoutDrawer from '../components/CheckoutDrawer';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  specs: string;
  quantity: number;
}

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [giftNoteOpen, setGiftNoteOpen] = useState(false);
  const [giftNoteText, setGiftNoteText] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0); // as percentage (e.g. 10 for 10% off)
  const [appliedCodeStr, setAppliedCodeStr] = useState<string>('');
  const [promoError, setPromoError] = useState<string>('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    // FUTURE_PAYMENT: kept for Stripe/online gateway integration
    // cardNumber: '',
    // expiry: '',
    // cvv: '',
  });

  // Initialize and synchronize with localStorage if exists or pre-seed items
  useEffect(() => {
    const rawCart = localStorage.getItem('yaboil_cart');
    if (rawCart) {
      try {
        const parsed = JSON.parse(rawCart) as CartItem[];
        // If parsed is empty list, we will let it be empty, but if there's nothing at all, seed with the defaults
        setItems(parsed);
      } catch (e) {
        seedDefaultItems();
      }
    } else {
      seedDefaultItems();
    }
  }, []);

  const seedDefaultItems = () => {
    const defaultItems: CartItem[] = [
      {
        id: 'verdant-essence',
        name: 'Verdant Essence Oil',
        price: 84.00,
        image: '/images/rosemary.png',
        specs: '100ML | HAND-POURED',
        quantity: 1,
      },
      {
        id: 'ancient-resin',
        name: 'Ancient Resin Cleanser',
        price: 62.00,
        image: '/images/castor.png',
        specs: '200ML | ORGANIC BASE',
        quantity: 1,
      }
    ];
    setItems(defaultItems);
    saveCart(defaultItems);
  };

  const saveCart = (newItems: CartItem[]) => {
    localStorage.setItem('yaboil_cart', JSON.stringify(newItems));
    // Dispatch storage event to trigger update in other headers if listening
    window.dispatchEvent(new Event('storage'));
  };

  const updateQuantity = (id: string, delta: number) => {
    const updated = items.map(item => {
      if (item.id === id) {
        const nextQuant = Math.max(1, item.quantity + delta);
        return { ...item, quantity: nextQuant };
      }
      return item;
    });
    setItems(updated);
    saveCart(updated);
  };

  const removeItem = (id: string) => {
    const filtered = items.filter(item => item.id !== id);
    setItems(filtered);
    saveCart(filtered);
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const code = promoCode.trim().toUpperCase();
    if (!code) return;

    if (code === 'BOTANICAL15' || code === 'ESSENCE15' || code === 'YABOIL15') {
      setAppliedDiscount(15);
      setAppliedCodeStr(code);
      setPromoCode('');
    } else if (code === 'WELCOME10') {
      setAppliedDiscount(10);
      setAppliedCodeStr(code);
      setPromoCode('');
    } else {
      setPromoError('This organic passcode is unrecognized.');
    }
  };

  const removePromo = () => {
    setAppliedDiscount(0);
    setAppliedCodeStr('');
  };

  // Calculations
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discountAmount = subtotal * (appliedDiscount / 100);
  const shipping = subtotal > 100 || subtotal === 0 ? 0.00 : 12.00;
  const tax = subtotal === 0 ? 0.00 : parseFloat((subtotal * 0.08).toFixed(2));
  const total = parseFloat((subtotal - discountAmount + shipping + tax).toFixed(2));

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const itemLines = items.map(i => `• ${i.name} ×${i.quantity} — $${(i.price * i.quantity).toFixed(2)}`).join('\n');
    const message = [
      `Hello YabOil 🌿 I'd like to place an order.`,
      ``,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Address: ${formData.address}, ${formData.city} ${formData.zip}`.trim(),
      ``,
      `Order:`,
      itemLines,
      ``,
      `Total: $${total.toFixed(2)}`,
      ``,
      `Please confirm. Thank you!`,
    ].join('\n');

    const url = `https://wa.me/251937882928?text=${encodeURIComponent(message)}`;
    setWhatsappUrl(url);
    window.open(url, '_blank');
    setIsCheckingOut(false);
    setCheckoutComplete(true);
    saveCart([]);
    setItems([]);
  };

  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="bg-canvas text-on-surface antialiased selection:bg-raw-sienna selection:text-canvas min-h-screen flex flex-col pt-20">
      <main className="flex-grow max-w-[1440px] w-full mx-auto px-page-margin-mobile md:px-page-margin-desktop py-12">
        <motion.div 
          variants={pageTransition}
          initial="initial"
          animate="animate"
          className="space-y-12"
        >
          {/* Header */}
          <header className="border-b border-raw-sienna/10 pb-8">
            <h1 className="font-headline-md text-4xl md:text-5xl text-obsidian font-semibold italic">Your Selection</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 leading-relaxed">
              Carefully curated botanical rituals awaiting your discovery.
            </p>
          </header>

          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-start">
            {/* Cart Items Section */}
            <div className="lg:col-span-8 w-full space-y-10">
              <AnimatePresence initial={false}>
                {items.length === 0 ? (
                  <EmptyCart />
                ) : (
                  <div className="divide-y divide-raw-sienna/10 border-b border-raw-sienna/10">
                    {items.map((item) => (
                      <motion.div 
                        key={item.id}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, x: -50, height: 0, transition: { duration: 0.3 } }}
                        className="group flex flex-col md:flex-row gap-8 py-8 md:py-10 first:pt-0"
                      >
                        {/* Image */}
                        <div className="w-full md:w-48 aspect-[4/3] bg-alabaster border border-raw-sienna/5 overflow-hidden golden-shadow flex-shrink-0">
                          <img 
                            alt={item.name} 
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103" 
                            src={item.image} 
                          />
                        </div>

                        {/* Title, Quant, Remove */}
                        <div className="flex-grow flex flex-col justify-between">
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <h3 className="font-headline-md text-2xl text-obsidian tracking-tight font-medium leading-snug">{item.name}</h3>
                              <p className="font-label-caps text-label-caps text-raw-sienna mt-1.5 tracking-wider font-semibold">{item.specs}</p>
                            </div>
                            <span className="font-body-lg text-lg text-obsidian font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>

                          <div className="flex justify-between items-end mt-8 pt-4">
                            {/* Quantity controller */}
                            <div className="flex items-center border border-raw-sienna/20 px-4 py-2 space-x-6 bg-canvas hover:border-raw-sienna/50 transition-colors">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="text-on-surface-variant hover:text-raw-sienna transition-colors cursor-pointer p-1"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={14} strokeWidth={2.5} />
                              </button>
                              <span className="font-body-md text-body-md font-medium text-deep-bark select-none min-w-[12px] text-center">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="text-on-surface-variant hover:text-raw-sienna transition-colors cursor-pointer p-1"
                                aria-label="Increase quantity"
                              >
                                <Plus size={14} strokeWidth={2.5} />
                              </button>
                            </div>

                            {/* Remove button */}
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="font-label-caps text-xs text-on-surface-variant hover:text-red-700 uppercase tracking-widest font-semibold pb-1 border-b border-transparent hover:border-red-700/30 transition-all flex items-center cursor-pointer"
                            >
                              <Trash2 size={13} className="mr-2" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>

              {/* Gift Notes accordion and shipping policies */}
              {items.length > 0 && (
                <div className="space-y-6 pt-4">
                  <div className="border border-raw-sienna/10 bg-surface-container-low p-6">
                    <button 
                      onClick={() => setGiftNoteOpen(!giftNoteOpen)}
                      className="w-full flex items-center justify-between font-label-caps text-label-caps tracking-widest uppercase font-semibold text-deep-bark focus:outline-none cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <Gift size={16} className="text-raw-sienna" />
                        Add a gift note
                      </span>
                      <span className="material-symbols-outlined text-raw-sienna select-none">
                        {giftNoteOpen ? 'remove' : 'add'}
                      </span>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${giftNoteOpen ? 'max-h-48 mt-4' : 'max-h-0'}`}>
                      <textarea
                        value={giftNoteText}
                        onChange={(e) => setGiftNoteText(e.target.value)}
                        placeholder="Write your beautiful botanical greeting here..."
                        className="w-full bg-transparent border-b border-raw-sienna/20 focus:border-raw-sienna outline-none font-body-md text-body-md py-2 resize-none placeholder:text-on-surface-variant/40 text-deep-bark rounded-none focus:ring-0 min-h-[80px]"
                      />
                    </div>
                  </div>

                  <div className="border-l-2 border-raw-sienna/40 pl-6 space-y-2">
                    <span className="font-label-caps text-[10px] text-raw-sienna tracking-widest uppercase font-semibold block">Sustainable Shipments</span>
                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed max-w-xl">
                      Each batch is cradled in biodegradeable hemp packaging and stored in protective UV-proof violet miron glass. We dispatch packages within 48 hours.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Summary Section */}
            {items.length > 0 && (
              <aside className="lg:col-span-4 w-full md:sticky md:top-32">
                <div className="bg-alabaster p-8 border border-raw-sienna/10 golden-shadow space-y-8">
                  <h2 className="font-headline-md text-3xl text-obsidian border-b border-raw-sienna/10 pb-4 font-normal italic">
                    Summary
                  </h2>

                  {/* Calculations */}
                  <div className="space-y-4">
                    <div className="flex justify-between text-body-md">
                      <span className="text-on-surface-variant/80 font-body-md">Subtotal</span>
                      <span className="text-obsidian font-medium">${subtotal.toFixed(2)}</span>
                    </div>

                    {appliedDiscount > 0 && (
                      <div className="flex justify-between text-body-md text-green-700 font-medium">
                        <span className="flex items-center gap-1.5 font-body-md">
                          <Tag size={13} />
                          Discount ({appliedCodeStr})
                        </span>
                        <span>-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-body-md">
                      <span className="text-on-surface-variant/80 font-body-md">Estimated Shipping</span>
                      <span className="text-obsidian font-medium">
                        {shipping > 0 ? `$${shipping.toFixed(2)}` : 'Complimentary'}
                      </span>
                    </div>

                    <div className="flex justify-between text-body-md">
                      <span className="text-on-surface-variant/80 font-body-md">Tax (8%)</span>
                      <span className="text-obsidian font-medium">${tax.toFixed(2)}</span>
                    </div>

                    <div className="pt-5 border-t border-raw-sienna/10 flex justify-between items-baseline">
                      <span className="font-label-caps text-label-caps text-obsidian tracking-wider font-bold">TOTAL</span>
                      <span className="font-headline-md text-3xl text-obsidian font-bold">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Promo Code Input */}
                  <div className="pt-4 border-t border-raw-sienna/10 space-y-3">
                    {appliedCodeStr ? (
                      <div className="bg-green-50 border border-green-200 text-green-800 text-xs py-2 px-3 flex items-center justify-between">
                        <span className="font-label-caps tracking-wider font-semibold uppercase flex items-center gap-1">
                          <Tag size={12} />
                          {appliedCodeStr} applied ({appliedDiscount}%)
                        </span>
                        <button onClick={removePromo} className="text-green-800/60 hover:text-green-800 cursor-pointer">
                          <X size={14} strokeWidth={2.5} />
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleApplyPromo} className="flex gap-2">
                        <input 
                          type="text" 
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="PROMO CODE" 
                          className="flex-grow bg-transparent border-b border-raw-sienna/20 py-2 font-label-caps text-xs focus:outline-none focus:border-raw-sienna transition-colors placeholder:text-on-surface-variant/30 text-deep-bark rounded-none focus:ring-0 uppercase tracking-widest"
                        />
                        <button 
                          type="submit"
                          className="font-label-caps text-[10px] tracking-wider text-canvas bg-deep-bark uppercase font-bold px-4 hover:bg-raw-sienna transition-colors select-none py-1 h-[36px] mt-0.5 whitespace-nowrap"
                        >
                          APPLY
                        </button>
                      </form>
                    )}
                    {promoError && (
                      <p className="text-[11px] text-red-600 font-label-sm italic tracking-wide">{promoError}</p>
                    )}
                    {!appliedCodeStr && (
                      <p className="text-[10px] text-on-surface-variant/50 font-label-sm italic tracking-wide">
                        Try <strong>WELCOME10</strong> (10% off) or <strong>BOTANICAL15</strong> (15% off)
                      </p>
                    )}
                  </div>

                  {/* Action CTA */}
                  <div className="space-y-4">
                    <button 
                      onClick={() => setIsCheckingOut(true)}
                      className="w-full bg-raw-sienna text-canvas py-4.5 font-label-caps text-label-caps tracking-widest hover:bg-deep-bark transition-colors uppercase font-bold text-center select-none shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] duration-300 cursor-pointer"
                    >
                      PROCEED TO CHECKOUT
                    </button>

                    <div className="flex items-center justify-center gap-4 text-on-surface-variant/40 pt-4 border-t border-raw-sienna/5 select-none font-mono text-[10px]">
                      <span className="flex items-center gap-1">
                        <ShieldCheck size={14} />
                        PERSONAL DELIVERY
                      </span>
                      <span>•</span>
                      <span>DIRECT CONTACT</span>
                    </div>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </motion.div>
      </main>

      <Footer />

      <CheckoutDrawer
        isOpen={isCheckingOut}
        onClose={() => setIsCheckingOut(false)}
        itemCount={items.reduce((sum, i) => sum + i.quantity, 0)}
        total={total}
        formData={formData}
        onFormChange={(field, value) => setFormData(prev => ({ ...prev, [field]: value }))}
        onSubmit={handleCheckoutSubmit}
        checkoutComplete={checkoutComplete}
        whatsappUrl={whatsappUrl}
        onCompleteClose={() => setCheckoutComplete(false)}
      />
    </div>
  );
}
