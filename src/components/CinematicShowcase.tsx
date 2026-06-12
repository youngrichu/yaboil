import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react';
import { IMAGES } from '../config/images';

const products = [
  {
    id: "rosemary",
    name: "Rosemary Oil",
    desc: "Stimulating & Strengthening",
    longDesc: "Steam-distilled pure essential extract. Invigorating and clarifying, celebrated for stimulating scalp vitality and restoring hair radiance.",
    price: 42.00,
    tag: "Best Seller",
    bgText: "ROSEMARY",
    img: IMAGES.rosemary,
    link: "/product",
    spec: "60ML / 2OZ"
  },
  {
    id: "black-seed",
    name: "Black Seed Oil",
    desc: "Restorative & Healing",
    longDesc: "Cold-pressed from Nigella Sativa seeds. A dense antioxidant powerhouse that heals the skin barrier, reduces redness, and deeply restores.",
    price: 48.00,
    bgText: "NIGELLA",
    img: IMAGES.blackSeed,
    link: "/product/black-seed",
    spec: "120ML / 4OZ"
  },
  {
    id: "pumpkin-seed",
    name: "Pumpkin Seed Oil",
    desc: "Nutrient-Rich Glow",
    longDesc: "Pressed from organic Styrian pumpkin seeds. Abundant in zinc and skin-firming vitamins, delivering a radiant, lightweight dewiness.",
    price: 38.00,
    bgText: "PUMPKIN",
    img: IMAGES.pumpkinSeed,
    link: "/product/pumpkin-seed",
    spec: "120ML / 4OZ"
  },
  {
    id: "castor",
    name: "Castor Oil",
    desc: "Lash & Brow Vitality",
    longDesc: "Thick, hexane-free organic castor seed press. An ancient humectant shield that fortifies hair shafts and promotes lush growth.",
    price: 34.00,
    bgText: "CASTOR",
    img: IMAGES.castor,
    link: "/product",
    spec: "60ML / 2OZ"
  }
];

const bgGradients = [
  "linear-gradient(160deg, #FDFBF7 0%, #F0E8DE 100%)", // Rosemary — Canvas → light Sienna wash
  "linear-gradient(160deg, #F6EDE0 0%, #E5D4BA 100%)", // Black Seed — warm amber, richest Sienna pull
  "linear-gradient(160deg, #FDFBF7 0%, #EDE4D7 100%)", // Pumpkin Seed — Canvas → honeyed mid-tint
  "linear-gradient(160deg, #F4EDE6 0%, #E2D0C0 100%)", // Castor — clay-warm, deepest Canvas blend
];

interface ShowcaseCardProps {
  product: typeof products[number];
  offset: number;
  isActive: boolean;
  isAdjacent: boolean;
  rotateX: number;
  rotateY: number;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  key?: React.Key;
}

function ShowcaseCard({ product, offset, isActive, isAdjacent, rotateX, rotateY, onMouseMove, onMouseLeave, onClick, key }: ShowcaseCardProps) {
  // When the circular deck wraps, a card's offset jumps by more than 1
  // (e.g. -1 → +2). Animating that jump sweeps the card across the visible
  // carousel, so snap position/rotation and only animate opacity/scale.
  const prevOffset = useRef(offset);
  const wrapped = Math.abs(offset - prevOffset.current) > 1;
  useEffect(() => {
    prevOffset.current = offset;
  }, [offset]);

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: isActive ? 30 : isAdjacent ? 20 : 5,
        pointerEvents: isActive || isAdjacent ? 'auto' : 'none',
      }}
      className="flex items-center justify-center"
    >
      <motion.div
        animate={{
          x: `${offset * 115}%`,
          scale: isActive ? 1 : isAdjacent ? 0.72 : 0.5,
          opacity: isActive ? 1 : isAdjacent ? 0.55 : 0.001,
          rotate: isActive ? 0 : offset > 0 ? 18 : -22,
        }}
        transition={{
          duration: 1.0,
          ease: [0.16, 1, 0.3, 1],
          ...(wrapped && { x: { duration: 0 }, rotate: { duration: 0 } }),
        }}
        style={{ perspective: 1000, willChange: 'transform, opacity' }}
        className="w-[200px] sm:w-[260px] md:w-[340px] aspect-[3/4] rounded-[100px_100px_16px_16px] overflow-hidden isolate border border-deep-bark/5 bg-canvas select-none shadow-[20px_30px_60px_-15px_rgba(74,44,17,0.15)] flex flex-col justify-between"
      >
        <motion.div
          onMouseMove={isActive ? onMouseMove : undefined}
          onMouseLeave={isActive ? onMouseLeave : undefined}
          animate={isActive ? { rotateX, rotateY } : { rotateX: 0, rotateY: 0 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
          className="w-full h-full relative overflow-hidden rounded-[inherit] flex items-center justify-center group cursor-pointer"
          onClick={onClick}
        >
          {product.tag && isActive && (
            <span className="absolute top-6 left-6 z-20 bg-deep-bark text-canvas px-3 py-1 font-label-caps text-[9px] uppercase tracking-widest rounded-none shadow-sm animate-fade-in">
              {product.tag}
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-bark/[0.05] to-transparent pointer-events-none z-10" />
          {/* IMAGE ZOOM DISABLED FOR FLICKER TESTING — was: animate={{ scale: isActive ? 1.12 : 1.0 }} */}
          <img
            alt={product.name}
            className="w-full h-full object-cover"
            src={product.img}
            draggable="false"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function CinematicShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cartStatus, setCartStatus] = useState<'idle' | 'adding' | 'added'>('idle');
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number>(0);
  const dragStartX = useRef<number | null>(null);
  const didDrag = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? handleNext() : handlePrev();
    }
    setIsPaused(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    didDrag.current = false;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const delta = dragStartX.current - e.clientX;
    if (Math.abs(delta) > 60) {
      didDrag.current = true;
      delta > 0 ? handleNext() : handlePrev();
    }
    dragStartX.current = null;
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex, isPaused]);

  const activeProduct = products[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Limit rotation to maximum 10 degrees
    setRotateX(-y / 18);
    setRotateY(x / 18);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
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
      
      const existingIndex = cart.findIndex((item: any) => item.id === activeProduct.id);
      if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
      } else {
        cart.push({
          id: activeProduct.id,
          name: activeProduct.name,
          price: activeProduct.price,
          image: activeProduct.img,
          specs: activeProduct.spec,
          quantity: 1
        });
      }
      
      localStorage.setItem('yaboil_cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('cart-updated'));
      setCartStatus('added');
      setTimeout(() => {
        setCartStatus('idle');
      }, 1500);
    }, 800);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => { setIsPaused(false); dragStartX.current = null; }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[95vh] flex flex-col justify-between overflow-hidden py-16 md:py-24 px-6 md:px-12 bg-[#F6EFE5]"
    >
      {/*
        Cross-faded gradient layers instead of animating `background` on the
        section itself. Gradients are not compositor-animatable, so Motion
        interpolates the gradient string in JS and rewrites style.background
        every frame, forcing a full repaint of the 95vh section (including the
        11vw stroked text) 60x/s. On mobile GPUs the rasterizer falls behind at
        transition start and presents blank (white) tiles for a few frames.
        Opacity cross-fades run entirely on the compositor, and the static
        beige base color above means any dropped tile flashes beige, not white.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {bgGradients.map((gradient, idx) => (
          <motion.div
            key={idx}
            style={{ background: gradient }}
            initial={false}
            animate={{ opacity: idx === activeIndex ? 1 : 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          />
        ))}
      </div>

      {/* Background Kinetic Typography */}
      <div className="absolute inset-0 flex flex-col justify-center gap-16 pointer-events-none select-none z-0 overflow-hidden">
        {/* Row 1 Scrolling Left */}
        {/*
          The spans must NOT restyle on slide change. These rows are huge
          (8 names at 11vw, stroked text) — an animated color/opacity change
          re-rasterizes the whole row every frame for 1s, which stalls the
          mobile GPU rasterizer and drops the entire page content layer for
          a few frames (the beige full-page blink). With static content the
          x-slide is compositor-only, and willChange keeps the rows on their
          own persistent GPU layers so they never re-raster on transitions.
        */}
        <motion.div
          style={{ willChange: 'transform' }}
          animate={{ x: `-${activeIndex * 12 + 10}%` }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex whitespace-nowrap gap-16 text-[11vw] font-bold text-stroke font-serif leading-none tracking-tighter opacity-30"
        >
          {products.map((p, idx) => (
            <span key={`row1-${idx}`}>{p.bgText}</span>
          ))}
          {/* Double length to ensure space coverage */}
          {products.map((p, idx) => (
            <span key={`row1-dup-${idx}`}>{p.bgText}</span>
          ))}
        </motion.div>

        {/* Row 2 Scrolling Right */}
        <motion.div
          style={{ willChange: 'transform' }}
          animate={{ x: `${activeIndex * 12 - 35}%` }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex whitespace-nowrap gap-16 text-[11vw] font-bold text-stroke font-serif leading-none tracking-tighter opacity-30"
        >
          {[...products].reverse().map((p, idx) => (
            <span key={`row2-${idx}`}>{p.bgText}</span>
          ))}
          {[...products].reverse().map((p, idx) => (
            <span key={`row2-dup-${idx}`}>{p.bgText}</span>
          ))}
        </motion.div>
      </div>

      {/* Showcase Section Header */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="font-label-caps text-label-caps text-raw-sienna tracking-[0.2em] mb-2 block uppercase font-medium">
            The Botanical Collection
          </span>
          <h2 className="font-headline-md text-[28px] md:text-[36px] text-deep-bark max-w-md font-medium leading-tight">
            Curated cold-pressed active essentials.
          </h2>
        </div>
        
        {/* Navigation Indicators & Controls */}
        <div className="flex items-center gap-6 self-end md:self-auto">
          <div className="font-label-caps text-xs tracking-wider text-deep-bark/60 font-medium">
            <span className="text-deep-bark font-bold">0{activeIndex + 1}</span> / 0{products.length}
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-deep-bark/20 flex items-center justify-center text-deep-bark hover:bg-canvas hover:border-canvas hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-sm"
              aria-label="Previous product"
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-deep-bark/20 flex items-center justify-center text-deep-bark hover:bg-canvas hover:border-canvas hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-sm"
              aria-label="Next product"
            >
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Showcase Carousel Area */}
      <div data-cursor="drag" className="relative z-10 w-full max-w-6xl mx-auto my-12 h-[300px] sm:h-[360px] md:h-[480px] flex items-center justify-center select-none">
        {products.map((product, idx) => {
          const rawOffset = idx - activeIndex;
          const half = products.length / 2;
          const offset = rawOffset > half
            ? rawOffset - products.length
            : rawOffset < -half
            ? rawOffset + products.length
            : rawOffset;
          const isActive = offset === 0;
          const isAdjacent = Math.abs(offset) === 1;

          return (
            <ShowcaseCard
              key={product.id}
              product={product}
              offset={offset}
              isActive={isActive}
              isAdjacent={isAdjacent}
              rotateX={rotateX}
              rotateY={rotateY}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                if (!isActive && !didDrag.current) setActiveIndex(idx);
                didDrag.current = false;
              }}
            />
          );
        })}
      </div>

      {/* Dynamic Details Panel */}
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 md:space-y-6 flex flex-col items-center"
          >
            <div>
              <h3 className="font-headline-md text-[32px] md:text-[44px] text-deep-bark leading-none tracking-tight">
                {activeProduct.name}
              </h3>
              <p className="font-label-caps text-xs md:text-sm text-raw-sienna tracking-[0.25em] uppercase mt-2 font-medium">
                {activeProduct.desc} — {activeProduct.spec}
              </p>
            </div>
            
            <p className="font-body-md text-sm md:text-base text-on-surface-variant max-w-lg leading-relaxed font-light">
              {activeProduct.longDesc}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4 w-full justify-center">
              <span className="font-headline-md text-2xl text-deep-bark font-semibold">
                ${activeProduct.price.toFixed(2)}
              </span>

              <div className="flex items-center gap-3">
                {/* Simulated Add to Cart CTA */}
                <button
                  onClick={handleAddToCart}
                  disabled={cartStatus !== 'idle'}
                  className={`min-w-[180px] h-[52px] font-label-caps text-[11px] uppercase tracking-[0.2em] font-semibold border transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 rounded-none shadow-sm ${
                    cartStatus === 'added'
                      ? 'bg-emerald-800 text-canvas border-emerald-800'
                      : 'bg-raw-sienna text-canvas border-raw-sienna hover:bg-deep-bark hover:border-deep-bark hover:scale-[1.02]'
                  }`}
                >
                  {cartStatus === 'idle' && (
                    <>
                      <ShoppingBag size={14} />
                      Add To Cart
                    </>
                  )}
                  {cartStatus === 'adding' && (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Adding...
                    </>
                  )}
                  {cartStatus === 'added' && (
                    <>
                      <Check size={14} />
                      Added to Cart
                    </>
                  )}
                </button>

                {/* Editorial Details Link */}
                <Link
                  to={activeProduct.link}
                  className="px-6 h-[52px] border border-deep-bark/20 hover:border-deep-bark hover:bg-canvas/40 text-deep-bark font-label-caps text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center rounded-none"
                >
                  Discover
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
