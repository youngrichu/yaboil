import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { IMAGES } from '../config/images';

interface Article {
  id: string;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'ORIGINS' | 'RITUALS' | 'SUSTAINABILITY'>('ALL');
  const [isRitualModalOpen, setIsRitualModalOpen] = useState(false);
  const [activeRitualStep, setActiveRitualStep] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const articles: Article[] = [
    {
      id: 'alchemy-cold-pressing',
      category: 'ORIGINS',
      date: 'SEPTEMBER 12, 2023',
      title: 'The Alchemy of Cold Pressing',
      description: 'In the quiet before dawn, the extraction begins. We explore the meticulous process of cold-pressing botanical seeds, a preservation of soul and potency that defines the Essence ethos.',
      image: IMAGES.alchemyPressing,
    },
    {
      id: 'evening-scalp-ritual',
      category: 'RITUALS',
      date: 'OCTOBER 02, 2023',
      title: 'The Evening Scalp Ritual',
      description: 'A slow, sensory guide to stimulating circulation, nourishing root structures, and fostering deep restoration before sleep with warm botanical oils.',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop', // Beautiful high-end pipette/essence representation
    },
    {
      id: 'note-on-glass',
      category: 'SUSTAINABILITY',
      date: 'AUGUST 28, 2023',
      title: 'A Note on Glass: Why We Do Not Use Plastic',
      description: 'Our commitment to UV-protective miron glass and why amber bottles are non-negotiable for preserving bioactive compounds and cellular integrity of seed botanical oils.',
      image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=600&auto=format&fit=crop', // Minimal brown bottles/design representation
    },
  ];

  const filteredArticles = activeCategory === 'ALL' 
    ? articles 
    : articles.filter(art => art.category === activeCategory);

  const ritualSteps = [
    {
      title: "Preparation & Warmth",
      details: "Pour 4-5 drops of Black Seed or Castor oil into the palm of your hand. Gently rub your hands together to warm the botanical lipid profile to your natural body temperature."
    },
    {
      title: "The Inhale",
      details: "Cup your hands over your nose and take three long, measured breaths. Feel the deep, earthy and nutty aromatics relax your nervous system."
    },
    {
      title: "Crown Accents & Pressure Points",
      details: "Press your warm palms into the crown of your head. Use the pads of your fingers (never nails) to make slow, firm circular motions from your temple down to the base of your neck."
    },
    {
      title: "Nourishment Integration",
      details: "Leave the oil to penetrate for a minimum of 20 minutes, or wrap in a warm linen towel overnight. Let nature restore what environmental stressors deplete."
    }
  ];

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  const animationProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <>
      <main className="bg-canvas text-on-surface pt-20 min-h-screen">
        {/* Intro Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto py-16 md:py-24 px-page-margin-mobile md:px-page-margin-desktop w-full"
        >
          <span className="font-label-caps text-label-caps text-raw-sienna tracking-[0.25em] block mb-4 uppercase">
            The Botanical Archive
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-obsidian mb-6 font-medium leading-none">
            The Journal
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Stories of origin, slow beauty rituals, and the ecological philosophy behind YabOil. We document our patient extractions, community harvesters, and mindful wellness routines.
          </p>
          <div className="w-px h-16 bg-raw-sienna/30 mx-auto mt-12"></div>
        </motion.section>

        {/* Featured Article Section */}
        <section className="px-page-margin-mobile md:px-page-margin-desktop max-w-screen-2xl mx-auto py-12 md:py-20 border-t border-b border-raw-sienna/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6 md:space-y-8"
            >
              <div>
                <span className="font-label-caps text-label-caps text-raw-sienna mb-4 block tracking-[0.25em]">
                  VOLUME IV • FEATURE ARTICLE
                </span>
                <h1 className="font-headline-md text-5xl md:text-6xl text-deep-bark font-medium leading-tight">
                  Harvesting the Desert:<br />Black Seed Sourcing
                </h1>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                Tracing the path of our signature Nigella Sativa from the arid plains to our hand-poured glass vials, observing weather patterns and small-batch sustainable farming routines.
              </p>
              <Link 
                to="/journal/harvesting-the-desert"
                className="inline-block bg-raw-sienna text-canvas px-10 py-4 font-label-caps text-label-caps transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer select-none tracking-widest uppercase hover:shadow-[16px_24px_48px_-12px_rgba(74,44,17,0.15)] shadow-md hover:text-canvas"
              >
                READ THE FEATURE
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.97, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative group"
            >
              <Link to="/journal/harvesting-the-desert" className="block relative group">
                <div className="aspect-[4/5] overflow-hidden bg-alabaster border border-raw-sienna/10 golden-shadow">
                  <img 
                    alt="Harvesting the Desert: Black Seed Sourcing" 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103 grayscale-[25%] sepia-[12%]" 
                    src={IMAGES.blackSeed}
                  />
                </div>
              </Link>
              <div className="absolute -bottom-6 -left-6 bg-canvas p-6 hidden xl:block border border-raw-sienna/10 shadow-lg">
                <p className="font-label-caps text-label-sm text-on-surface-variant italic tracking-wider">
                  Photography by Elias Thorne
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Navigation and Feed Anchor */}
        <span id="latest-entries-anchor" className="block scroll-mt-24 h-0 w-0" />
        
        {/* Latest Entries Feed Section */}
        <section className="px-page-margin-mobile md:px-page-margin-desktop max-w-screen-2xl mx-auto py-16 md:py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-12 border-b border-raw-sienna/10 pb-6 gap-6">
            <h2 className="font-headline-md text-3xl md:text-4xl text-deep-bark italic font-medium">
              Latest Entries
            </h2>
            <div className="flex flex-wrap gap-4 md:gap-8">
              {(['ALL', 'ORIGINS', 'RITUALS', 'SUSTAINABILITY'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-label-caps text-label-caps tracking-widest pb-2 transition-all cursor-pointer uppercase ${
                    activeCategory === cat 
                      ? 'text-raw-sienna border-b-2 border-raw-sienna font-semibold' 
                      : 'text-on-surface-variant/70 hover:text-raw-sienna'
                  }`}
                >
                  {cat === 'ALL' ? 'All Categories' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {filteredArticles.map((article) => (
              <motion.article 
                key={article.id} 
                {...animationProps}
                className="group flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[1.37] overflow-hidden mb-6 relative border border-raw-sienna/10 golden-shadow bg-alabaster">
                    {article.id === 'evening-scalp-ritual' ? (
                      <div className="w-full h-full relative cursor-pointer" onClick={() => setIsRitualModalOpen(true)}>
                        <img 
                          alt={article.title} 
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                          src={article.image} 
                        />
                        <div className="absolute inset-0 bg-deep-bark/20 group-hover:bg-deep-bark/30 transition-colors flex flex-col items-center justify-center p-6 text-center text-canvas select-none">
                          <span className="material-symbols-outlined text-4xl mb-3 text-canvas/90 animate-pulse">
                            temp_preferences_custom
                          </span>
                          <span className="font-label-caps text-[10px] tracking-widest uppercase bg-raw-sienna/80 px-3 py-1.5 backdrop-blur-sm shadow-md">
                            TAP TO LAUNCH ritual step-by-step
                          </span>
                        </div>
                      </div>
                    ) : article.id === 'harvesting-desert' ? (
                      <Link to="/journal/harvesting-the-desert" className="block w-full h-full">
                        <img 
                          alt={article.title} 
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                          src={article.image} 
                        />
                      </Link>
                    ) : (
                      <img 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                        src={article.image} 
                      />
                    )}
                    <div className="absolute top-4 right-4 bg-canvas/90 backdrop-blur px-3 py-1 font-label-caps text-[10px] uppercase tracking-widest text-deep-bark font-semibold">
                      {article.category}
                    </div>
                  </div>

                  <span className="font-label-caps text-label-sm text-raw-sienna mb-2 block tracking-widest">
                    {article.date}
                  </span>
                  
                  {article.id === 'harvesting-desert' ? (
                    <Link to="/journal/harvesting-the-desert" className="block group/title">
                      <h3 className="font-headline-md text-2xl text-deep-bark mb-4 group-hover:text-raw-sienna group-hover/title:text-raw-sienna transition-colors font-medium">
                        {article.title}
                      </h3>
                    </Link>
                  ) : (
                    <h3 className="font-headline-md text-2xl text-deep-bark mb-4 group-hover:text-raw-sienna transition-colors font-medium">
                      {article.title}
                    </h3>
                  )}
                  
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                </div>

                <div>
                  {article.id === 'evening-scalp-ritual' ? (
                    <button 
                      onClick={() => setIsRitualModalOpen(true)}
                      className="font-label-caps text-label-caps text-obsidian border-b border-obsidian/20 pb-1 inline-block hover:border-raw-sienna hover:text-raw-sienna transition-all cursor-pointer uppercase tracking-widest font-semibold"
                    >
                      DISCOVER RITUAL
                    </button>
                  ) : article.id === 'harvesting-desert' ? (
                    <Link 
                      to="/journal/harvesting-the-desert"
                      className="font-label-caps text-label-caps text-obsidian border-b border-obsidian/20 pb-1 inline-block hover:border-raw-sienna hover:text-raw-sienna transition-all uppercase tracking-widest font-semibold"
                    >
                      READ MORE
                    </Link>
                  ) : (
                    <span 
                      className="font-label-caps text-label-caps text-obsidian border-b border-obsidian/20 pb-1 inline-block hover:border-raw-sienna hover:text-raw-sienna transition-all cursor-default uppercase tracking-widest font-semibold"
                    >
                      READ MORE
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Editorial Quote Break */}
        <motion.section 
          {...animationProps}
          className="bg-obsidian py-20 md:py-28 text-canvas text-center"
        >
          <div className="max-w-4xl mx-auto px-page-margin-mobile md:px-page-margin-desktop space-y-6">
            <span className="material-symbols-outlined text-raw-sienna text-5xl select-none" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>
              format_quote
            </span>
            <blockquote className="font-headline-md text-3xl md:text-4xl text-canvas font-light leading-relaxed max-w-2xl mx-auto py-4">
              "True beauty is an act of preservation. We do not create essence; we simply protect the intelligence that nature has already perfected."
            </blockquote>
            <cite className="font-label-caps text-label-caps text-raw-sienna not-italic block uppercase tracking-[0.2em] font-semibold">
              — DR. AMARA YAB, FOUNDER
            </cite>
          </div>
        </motion.section>

        {/* Newsletter Subscription */}
        <motion.section 
          {...animationProps}
          className="px-page-margin-mobile md:px-page-margin-desktop py-20 md:py-28 bg-canvas border-b border-raw-sienna/10"
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="font-headline-md text-3xl md:text-4xl text-deep-bark font-medium leading-tight">
                The Essence Dispatch
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm leading-relaxed">
                Join our curated list for botanical insights, early access to new seasonal blends, and rituals direct from our press room.
              </p>
            </div>
            
            <form onSubmit={handleSubscribeSubmit} className="flex flex-col gap-6">
              <div className="relative">
                <label className="font-label-caps text-[10px] text-raw-sienna block mb-2 uppercase tracking-widest font-semibold">
                  EMAIL ADDRESS
                </label>
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={subscribed}
                  placeholder="name@address.com" 
                  className="w-full bg-transparent border-b border-raw-sienna py-3 font-body-md focus:outline-none focus:border-deep-bark transition-colors placeholder:text-on-surface-variant/30 text-deep-bark rounded-none"
                />
              </div>
              <button 
                type="submit"
                disabled={subscribed}
                className="bg-deep-bark text-canvas py-4 font-label-caps text-label-caps hover:bg-raw-sienna transition-colors duration-300 uppercase tracking-widest cursor-pointer select-none font-semibold shadow-md inline-flex items-center justify-center min-h-[50px] disabled:bg-raw-sienna/40 disabled:cursor-not-allowed"
              >
                {subscribed ? 'SUBSCRIBED ✓ WELCOME TO THE ESSENCE' : 'SUBSCRIBE'}
              </button>
            </form>
          </div>
        </motion.section>
      </main>

      <Footer />

      {/* Dynamic Ritual Step-by-Step Lightbox Modal */}
      <AnimatePresence>
        {isRitualModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-obsidian/95 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="bg-canvas border border-raw-sienna/25 max-w-2xl w-full p-8 md:p-12 relative overflow-hidden golden-shadow"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsRitualModalOpen(false)}
                className="absolute top-6 right-6 text-deep-bark hover:text-raw-sienna transition-colors focus:outline-none cursor-pointer p-1"
                aria-label="Close ritual details"
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>

              <div className="space-y-8">
                <div>
                  <span className="font-label-caps text-[11px] text-raw-sienna uppercase tracking-[0.2em] font-semibold">
                    Interactive Ritual Guide
                  </span>
                  <h3 className="font-headline-md text-3xl text-deep-bark font-medium mt-2">
                    The Evening Scalp Ritual
                  </h3>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1 bg-raw-sienna/10 relative">
                  <div 
                    className="absolute top-0 left-0 h-full bg-raw-sienna transition-all duration-500 ease-out"
                    style={{ width: `${((activeRitualStep + 1) / ritualSteps.length) * 100}%` }}
                  />
                </div>

                {/* Step content */}
                <div className="min-h-[160px] flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-4 text-raw-sienna">
                    <span className="font-label-caps text-label-caps text-xs border border-raw-sienna rounded-full px-2.5 py-1 font-semibold">
                      STEP {activeRitualStep + 1} OF {ritualSteps.length}
                    </span>
                    <span className="font-label-caps text-xs tracking-widest font-semibold uppercase">
                      {ritualSteps[activeRitualStep].title}
                    </span>
                  </div>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    {ritualSteps[activeRitualStep].details}
                  </p>
                </div>

                {/* Controller Buttons */}
                <div className="flex justify-between items-center pt-4 border-t border-raw-sienna/10">
                  <button
                    onClick={() => setActiveRitualStep(prev => Math.max(0, prev - 1))}
                    disabled={activeRitualStep === 0}
                    className="font-label-caps text-label-caps text-deep-bark hover:text-raw-sienna transition-colors cursor-pointer select-none disabled:opacity-30 disabled:cursor-not-allowed uppercase tracking-wider font-semibold"
                  >
                    PREVIOUS
                  </button>

                  <div className="flex gap-2">
                    {ritualSteps.map((_, idx) => (
                      <span 
                        key={idx} 
                        className={`w-2 h-2 rounded-full transition-colors ${idx === activeRitualStep ? 'bg-raw-sienna' : 'bg-raw-sienna/25'}`}
                      />
                    ))}
                  </div>

                  {activeRitualStep === ritualSteps.length - 1 ? (
                    <button
                      onClick={() => {
                        setIsRitualModalOpen(false);
                        setActiveRitualStep(0);
                      }}
                      className="font-label-caps text-label-caps text-canvas bg-raw-sienna px-6 py-3 transition-all cursor-pointer hover:scale-105 active:scale-95 uppercase tracking-widest font-bold"
                    >
                      COMPLETE
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveRitualStep(prev => Math.min(ritualSteps.length - 1, prev + 1))}
                      className="font-label-caps text-label-caps text-deep-bark hover:text-raw-sienna transition-colors cursor-pointer select-none uppercase tracking-wider font-semibold"
                    >
                      NEXT STEP
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
