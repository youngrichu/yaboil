import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import ProductButton from './ProductButton';
import { useProductCart } from '../hooks/useProductCart';

interface Section {
  title: string;
  body: string;
}

interface ProductData {
  id: string;
  name: string;
  price: number;
  specs: string;
  image: string;
  imageAlt: string;
  description: string;
  illustration: string;
  sections: Section[];
}

export default function ProductDetailLayout({ product }: { product: ProductData }) {
  const { cartStatus, cartQuantity, updateQuantity, addToCart } = useProductCart(product.id);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `YabOil | ${product.name}`;
    return () => { document.title = previousTitle; };
  }, [product.name]);

  const cartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    specs: product.specs,
  };

  const QuantitySelector = () => (
    <div className="space-y-4 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <div className="flex-1 flex items-center justify-between border border-raw-sienna/30 px-6 py-4 bg-canvas font-body-md select-none">
          <button onClick={() => updateQuantity(-1)} className="text-on-surface-variant hover:text-raw-sienna transition-colors p-2 cursor-pointer flex items-center justify-center" aria-label="Decrease quantity">
            <span className="material-symbols-outlined font-bold text-lg select-none">remove</span>
          </button>
          <span className="font-headline-md text-xl font-semibold tracking-tight text-deep-bark text-center min-w-[50px]">{cartQuantity} in Cart</span>
          <button onClick={() => updateQuantity(1)} className="text-on-surface-variant hover:text-raw-sienna transition-colors p-2 cursor-pointer flex items-center justify-center" aria-label="Increase quantity">
            <span className="material-symbols-outlined font-bold text-lg select-none">add</span>
          </button>
        </div>
        <Link to="/lineup" className="flex-1 bg-deep-bark text-canvas text-center py-5 px-8 font-label-caps text-label-caps tracking-widest hover:bg-raw-sienna hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 uppercase font-semibold h-full flex items-center justify-center text-[11px]">
          Continue Shopping
        </Link>
      </div>
      <p className="text-center font-label-sm text-xs text-raw-sienna/80 italic tracking-wider">
        Adjust quantity above or continue exploring other exceptional botanicals.
      </p>
    </div>
  );

  return (
    <>
      <main className="min-h-screen relative pt-20">
        <div className="flex flex-col md:flex-row h-full w-full items-start">
          {/* Left: sticky product image */}
          <div className="w-full md:w-1/2 h-[60vh] md:h-[calc(100vh-80px)] md:sticky md:top-20 bg-alabaster relative group z-0">
            <div className="absolute inset-0 w-full h-full p-4 md:p-8 lg:p-12 flex items-center justify-center">
              <img
                alt={product.imageAlt}
                src={product.image}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] shadow-[12px_16px_32px_-8px_rgba(74,44,17,0.08)]"
              />
            </div>
          </div>

          {/* Right: scrolling narrative */}
          <div className="w-full md:w-1/2 min-h-screen px-page-margin-mobile md:px-12 lg:px-24 py-16 bg-canvas flex flex-col justify-start relative z-10 overflow-hidden">
            <img src={product.illustration} aria-hidden="true" alt="" className="absolute bottom-0 right-0 w-[280px] h-auto opacity-[0.13] mix-blend-multiply pointer-events-none select-none hidden lg:block [mask-image:radial-gradient(ellipse_at_bottom_right,black_25%,transparent_68%)]" />

            {/* Header */}
            <div className="mb-12">
              <h1 className="font-aligarh text-display-lg-mobile md:text-display-lg text-on-surface mb-4 leading-normal py-2">{product.name}</h1>
              <div className="flex items-baseline gap-4">
                <span className="font-body-lg text-body-lg text-on-surface-variant">${product.price.toFixed(2)}</span>
                <span className="font-label-caps text-label-caps text-outline tracking-widest uppercase">{product.specs}</span>
              </div>
            </div>

            {/* Description */}
            <div className="prose max-w-none mb-12">
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">{product.description}</p>
            </div>

            {/* CTA */}
            <div className="mb-16 pb-12 border-b border-raw-sienna/10 sticky top-[72px] bg-canvas/90 backdrop-blur-sm z-10 py-4 -mx-page-margin-mobile px-page-margin-mobile md:mx-0 md:px-0 md:static md:bg-transparent space-y-4">
              {cartQuantity > 0 ? <QuantitySelector /> : <ProductButton onClick={() => addToCart(cartItem)} status={cartStatus} variant="main" />}
            </div>

            {/* Editorial sections */}
            <div className="space-y-8">
              {product.sections.map((section, i) => (
                <div key={i} className="border-b border-obsidian/10 pb-6 group cursor-pointer">
                  <h2 className="font-aligarh text-headline-md text-on-surface mb-3 group-hover:text-raw-sienna transition-colors leading-normal pt-1">{section.title}</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="relative z-10 bg-obsidian">
        <Footer />
      </div>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-canvas/90 backdrop-blur-md px-page-margin-mobile py-4 border-t border-raw-sienna/10 flex items-center justify-between z-50 gap-4">
        {cartQuantity > 0 ? (
          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex items-center border border-raw-sienna/30 px-3 py-2 space-x-4 bg-canvas justify-between flex-1 min-w-0">
              <button onClick={() => updateQuantity(-1)} className="text-on-surface-variant hover:text-raw-sienna p-1" aria-label="Decrease quantity">
                <span className="material-symbols-outlined text-sm font-bold select-none">remove</span>
              </button>
              <span className="font-body-md font-semibold text-deep-bark text-xs select-none">{cartQuantity} in Cart</span>
              <button onClick={() => updateQuantity(1)} className="text-on-surface-variant hover:text-raw-sienna p-1" aria-label="Increase quantity">
                <span className="material-symbols-outlined text-sm font-bold select-none">add</span>
              </button>
            </div>
            <Link to="/lineup" className="bg-raw-sienna text-canvas px-4 py-3.5 font-label-caps text-[10px] uppercase tracking-widest font-semibold flex-grow text-center">Shop More</Link>
          </div>
        ) : (
          <>
            <div>
              <span className="font-label-caps text-label-caps text-deep-bark text-xs">{product.name}</span>
              <p className="font-body-md text-body-md font-bold text-on-surface">${product.price.toFixed(2)}</p>
            </div>
            <ProductButton onClick={() => addToCart(cartItem)} status={cartStatus} variant="mobile" />
          </>
        )}
      </div>
    </>
  );
}
