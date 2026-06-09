import { motion } from 'motion/react';
import Footer from '../components/Footer';

export default function Process() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Custom cubic-bezier for liquid/smooth movement
  };

  const imageReveal = {
    initial: { opacity: 0, scale: 0.98, y: 20 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  const textReveal = {
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
  };

  const textRevealLeft = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="bg-canvas text-on-surface antialiased selection:bg-raw-sienna selection:text-canvas min-h-screen flex flex-col pt-20">
      <main className="flex-grow pt-12 pb-section-gap px-page-margin-mobile md:px-page-margin-desktop max-w-screen-2xl mx-auto w-full">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <img src="/images/illustrations/nigella-sativa.jpg" aria-hidden="true" alt="" className="absolute -left-[35%] top-1/2 -translate-y-1/2 w-[55%] opacity-[0.2] mix-blend-multiply pointer-events-none select-none hidden lg:block" />
          <img src="/images/illustrations/nigella-sativa.jpg" aria-hidden="true" alt="" className="absolute -right-[35%] top-1/2 -translate-y-1/2 w-[55%] opacity-[0.2] mix-blend-multiply pointer-events-none select-none hidden lg:block" />
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center max-w-3xl mx-auto py-12 md:py-16 relative z-10"
        >
          <span className="font-label-caps text-label-caps text-raw-sienna tracking-[0.25em] block mb-4 uppercase">
            Our Craft Method
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-obsidian mb-6 italic font-medium leading-none">
            Small Batch <span className="font-serif not-italic text-raw-sienna/40 mx-3">|</span> Naturally Pressed
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            A visual narrative of our methodology. We believe in the slow, deliberate craft of extracting botanical essence. Every drop is a testament to raw materials and patient hands, captured in the warmth of the golden hour.
          </p>
        </motion.section>
        </div>

        {/* Zig-Zag Timeline */}
        <div className="space-y-section-gap overflow-hidden">
          {/* Step 1: Harvest */}
          <section className="flex flex-col md:flex-row items-center gap-gutter-desktop">
            <motion.div 
              {...imageReveal}
              className="w-full md:w-1/2 image-scale-container golden-shadow bg-alabaster p-2 border border-raw-sienna/10 group overflow-hidden"
            >
              <img 
                alt="Harvesting Botanicals" 
                className="w-full h-[260px] md:h-[480px] object-cover transition-transform duration-1000 ease-out group-hover:scale-105 grayscale-[20%] sepia-[10%]" 
                src="/images/rosemary.png"
              />
            </motion.div>
            <motion.div 
              {...textReveal}
              className="w-full md:w-1/2 flex flex-col justify-center space-y-6 md:pl-12"
            >
              <span className="font-label-caps text-label-caps text-raw-sienna tracking-[0.2em] font-medium block">
                01. The Harvest
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-obsidian italic font-medium">
                Selecting the Raw Elements
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
                Our process begins at peak vitality. Botanicals are hand-selected during the late afternoon, ensuring optimal essential oil concentration. We prioritize sustainable foraging, working in harmony with the natural rhythms of the earth.
              </p>
              <div className="pt-4 border-t border-raw-sienna/10 flex items-center gap-4 w-fit">
                <span className="material-symbols-outlined text-raw-sienna select-none" style={{ fontVariationSettings: "'wght' 200" }}>grass</span>
                <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest font-medium">Organic Matter</span>
              </div>
            </motion.div>
          </section>

          {/* Step 2: Cold Press */}
          <section className="flex flex-col md:flex-row-reverse items-center gap-gutter-desktop">
            <motion.div 
              {...imageReveal}
              className="w-full md:w-1/2 image-scale-container golden-shadow bg-alabaster p-2 border border-raw-sienna/10 group overflow-hidden"
            >
              <img 
                alt="Cold Pressing Process" 
                className="w-full h-[260px] md:h-[480px] object-cover transition-transform duration-1000 ease-out group-hover:scale-105 grayscale-[20%] sepia-[10%]" 
                src="/images/black-seed.png"
              />
            </motion.div>
            <motion.div 
              {...textRevealLeft}
              className="w-full md:w-1/2 flex flex-col justify-center space-y-6 md:pr-12 items-start md:items-end md:text-right"
            >
              <span className="font-label-caps text-label-caps text-raw-sienna tracking-[0.2em] font-medium block">
                02. Cold Press
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-obsidian italic font-medium">
                Patience in Extraction
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
                We employ a traditional cold-press methodology. By avoiding heat, we preserve the delicate lipid profiles and volatile aromatics of the raw ingredients. It is a slow, methodical yield that prioritizes quality over quantity.
              </p>
              <div className="pt-4 border-t border-raw-sienna/10 flex items-center gap-4 md:flex-row-reverse w-full md:w-auto">
                <span className="material-symbols-outlined text-raw-sienna select-none" style={{ fontVariationSettings: "'wght' 200" }}>water_drop</span>
                <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest font-medium">Pure Yield</span>
              </div>
            </motion.div>
          </section>

          {/* Step 3: Bottling */}
          <section className="flex flex-col md:flex-row items-center gap-gutter-desktop relative overflow-hidden">
            <img src="/images/illustrations/herb-rosemary.jpg" aria-hidden="true" alt="" className="absolute -left-[35%] top-1/2 -translate-y-1/2 w-[55%] opacity-[0.2] mix-blend-multiply pointer-events-none select-none hidden lg:block" />
            <img src="/images/illustrations/herb-rosemary.jpg" aria-hidden="true" alt="" className="absolute -right-[35%] top-1/2 -translate-y-1/2 w-[55%] opacity-[0.2] mix-blend-multiply pointer-events-none select-none hidden lg:block" />
            <motion.div 
              {...imageReveal}
              className="w-full md:w-1/2 image-scale-container golden-shadow bg-alabaster p-2 border border-raw-sienna/10 group overflow-hidden"
            >
              <img 
                alt="Bottling the Oil" 
                className="w-full h-[260px] md:h-[480px] object-cover transition-transform duration-1000 ease-out group-hover:scale-105 grayscale-[20%] sepia-[10%]" 
                src="/images/collection.png"
              />
            </motion.div>
            <motion.div 
              {...textReveal}
              className="w-full md:w-1/2 flex flex-col justify-center space-y-6 md:pl-12"
            >
              <span className="font-label-caps text-label-caps text-raw-sienna tracking-[0.2em] font-medium block">
                03. Bottling
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-obsidian italic font-medium">
                Curated Containment
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
                Each micro-batch is immediately decanted into UV-protective amber glass. This final step seals in the efficacy and aroma, protecting the delicate molecular structure from degradation until it reaches your hands.
              </p>
              <div className="pt-4 border-t border-raw-sienna/10 flex items-center gap-4 w-fit">
                <span className="material-symbols-outlined text-raw-sienna select-none" style={{ fontVariationSettings: "'wght' 200" }}>science</span>
                <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest font-medium">UV Protected</span>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
