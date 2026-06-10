import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import CinematicShowcase from '../components/CinematicShowcase';

export default function Home() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    sectionsRef.current.forEach(section => {
        if (section) {
            section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
            observer.observe(section);
        }
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="bg-canvas text-on-surface font-body-md overflow-x-hidden min-h-screen">
      {/* Hero Section */}
      <section ref={addToRefs} className="relative min-h-screen flex items-center pt-20 overflow-hidden transition-all duration-1000 opacity-100 translate-y-0">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-poster.jpg"
            ref={(el) => { if (el) el.playbackRate = 0.65; }}
            className="w-full h-full object-cover brightness-[0.98]"
          >
            <source src="/images/hero-bg.webm" type="video/webm" />
            <source src="/images/hero-bg-compressed.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-deep-bark/30"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-deep-bark/75 via-deep-bark/40 to-transparent"></div>
        </div>
        <div className="relative z-10 px-page-margin-mobile md:px-page-margin-desktop w-full max-w-4xl">
          <div className="space-y-6">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-canvas animate-fade-in-up font-aligarh">Rooted in Radiance</h1>
            <p className="font-body-lg text-body-lg text-canvas/90 max-w-lg">Small-batch, cold-pressed botanicals for the modern ritual. Experience the tactile essence of artisanal craftsmanship.</p>
            <div className="pt-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a className="inline-block px-10 py-5 bg-raw-sienna text-canvas font-label-caps text-label-caps tracking-[0.2em] rounded-none hover:scale-[1.02] transition-all duration-500 golden-shadow" href="#shop">
                EXPLORE THE LINEUP
              </a>
            </div>
          </div>
        </div>
        {/* Slow Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="font-label-caps text-[10px] tracking-widest uppercase text-canvas">Scroll</span>
          <div className="w-px h-12 bg-canvas/40"></div>
        </div>
      </section>

      {/* Product Spotlight */}
      <section ref={addToRefs} id="shop" className="transition-all duration-1000 opacity-100 translate-y-0">
        <CinematicShowcase />
      </section>

      {/* Brand Story Section */}
      <section ref={addToRefs} className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] transition-all duration-1000 opacity-100 translate-y-0">
        <div className="relative overflow-hidden bg-surface-container-low group min-h-[50vh] md:min-h-full">
          <div className="absolute inset-0 bg-deep-bark/5 z-10 transition-opacity group-hover:opacity-0 pointer-events-none"></div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTYxe61RRkZ7M-dmHY9blpT3Kt05vz9ZwBzpumU072ueB3e_ug07ZJWtj_JR7DtlK-92Fg7lWctM3W9aq5dTx_F-htroALw0EmoXmWAfYijWhMIwDrIFR1yl1eR-FZ99yWo9ID636bUARkOWTuIWRb9z_6Zoyz7tVgnr3DDM0LkcM2mR2lmFDgGfKemUqyOalyWQFbhiglNBAl-QfqQ916oCVv27I5_9K7vRgBulKrodlclKED1sE41M9Ib9oqEWJWLUMmq5fCh2Ak"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center p-page-margin-mobile md:p-page-margin-desktop bg-canvas border-l border-raw-sienna/5 relative overflow-hidden">
          <img src="/images/illustrations/herb-rosemary.jpg" aria-hidden="true" alt="" className="absolute bottom-0 right-0 w-[260px] h-auto opacity-[0.15] mix-blend-multiply pointer-events-none select-none hidden lg:block [mask-image:radial-gradient(ellipse_at_bottom_right,black_25%,transparent_70%)]" />
          <div className="max-w-md space-y-8 relative z-10">
            <span className="font-label-caps text-label-caps text-raw-sienna tracking-[0.3em]">OUR PHILOSOPHY</span>
            <h2 className="font-headline-md text-headline-md text-deep-bark leading-snug">The Artisanal Standard: Naturally Pressed.</h2>
            <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
              <p>
                  We believe that luxury shouldn't be synthetic. Our oils are extracted using traditional mechanical pressing methods that respect the biological blueprint of the seed.
              </p>
              <p>
                  Every bottle of YabOil represents a singular batch, tracked from the field to the finished decanter. No fillers, no perfumes, no compromise. Just the raw intelligence of the botanical world, bottled for your skin.
              </p>
            </div>
            <div className="pt-4">
              <Link to="/process" className="font-label-caps text-label-caps text-deep-bark flex items-center gap-4 group cursor-pointer focus:outline-none">
                  LEARN ABOUT OUR PRESSING
                  <span className="w-12 h-px bg-deep-bark group-hover:w-16 transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Banner */}
      <section ref={addToRefs} className="py-24 bg-deep-bark text-canvas overflow-hidden transition-all duration-1000 opacity-100 translate-y-0">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2].map((_, idx) => (
            <div key={idx} className="flex items-center gap-12 px-6">
              <span className="font-headline-md text-4xl opacity-30 italic">Pure Castor</span>
              <span className="material-symbols-outlined text-raw-sienna">fiber_manual_record</span>
              <span className="font-headline-md text-4xl opacity-30 italic">Organic Rosemary</span>
              <span className="material-symbols-outlined text-raw-sienna">fiber_manual_record</span>
              <span className="font-headline-md text-4xl opacity-30 italic">Black Seed</span>
              <span className="material-symbols-outlined text-raw-sienna">fiber_manual_record</span>
              <span className="font-headline-md text-4xl opacity-30 italic">Pumpkin Seed</span>
              <span className="material-symbols-outlined text-raw-sienna">fiber_manual_record</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
