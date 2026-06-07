import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

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
          <img alt="The YabOil Collection" className="w-full h-full object-cover brightness-[0.98]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYzkFLqQxet2yC6MJJFeWb1I3rlIchOCrsROuvaJ5OgSoxsOFcuvW188OcsFvxj_cCA5s76DHXTOCaWjNVPgDoLl61kq6Fv3LzXBjNW4QhzvnDnyc6PyBZ1iLzSiU1Tj_Ie6a1cNpVdDCRiwEQ_xguOgKCewklD-yWiissSSZI4Ub_RNejeUX0QH01tCeB8zo0mOJeXr3zWZqHciySzORJfOta2J-3MWfDWaor8ZGvONtv6yRzosCT2zr5nXsTi012E1iNJPJqPVo7" />
          <div className="absolute inset-0 bg-gradient-to-tr from-deep-bark/80 via-deep-bark/40 to-transparent"></div>
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
      <section ref={addToRefs} className="py-section-gap px-page-margin-mobile md:px-page-margin-desktop bg-alabaster transition-all duration-1000 opacity-100 translate-y-0" id="shop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <span className="font-label-caps text-label-caps text-raw-sienna mb-4 block">The Core Four</span>
            <h2 className="font-headline-md text-headline-md text-deep-bark">Curated essentials for every skin and hair type.</h2>
          </div>
          <a className="font-label-caps text-label-caps text-on-surface border-b border-on-surface pb-1 hover:text-raw-sienna hover:border-raw-sienna transition-colors" href="#">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Rosemary Oil",
              desc: "Stimulating & Strengthening",
              price: "$42.00",
              tag: "Best Seller",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmtYlZW6tIKkv7DwMKu6No6WR8kmnu-Yn0WgEmJ2usbVLgUn3SBPIYkMIeL2Y0o4iC19HKxEq0pf3lpm7V_07wR1KgAN5joBbNG1snPmC2w0XjByuSdy2PP9a8cKenWW2h3sBQ_Ai9gj2wJcoWAFi7LKJcecbCqaO-yogoInDeJQrpdEKjh_QdPmlR3ENt55vJsP93xxpHHetqrlPYDX__882eZ6gdBSTP_svyIO8ckGDahNyl5nHJv0oA4sH7RjxU4zG0MFw2LlZR",
              link: "/lineup"
            },
            {
              name: "Black Seed Oil",
              desc: "Restorative & Healing",
              price: "$48.00",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVbfkk1_KEeDkQfyVDdOo_kl8PbmdFAVzQ_YQytXwXhf9wsaRpVq-nVzRjrLBoPWkGPrtV6yX4ngrNC5AFUylFHY7i3yOv_I0CMIndM5aAq_8pVp0YfJGlVLrXJzIihitNEwGdNjDbmXJZ61w4NnbOuiNDGtlVEtCVbL1tn0nj_UVGmGsSsVOSI4DWa3PysjJOMJrXV2kXQ1w6c3WSUtxDJB3sfn-Y2BbVrOkvqxt-KnKs2S1D5-DOmmu6sRHB87xF2uo3X7WHjjJm",
              link: "/product/black-seed"
            },
            {
              name: "Pumpkin Seed Oil",
              desc: "Nutrient-Rich Glow",
              price: "$38.00",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDptkAWrp8-oCwOXn9dvsjg3oj4H-QSKY4Ol5q3-cemmawNNXKcVbR2opoVCD6LfMAx2rAkvNe36Q_y7Ch-lD0Kzn8LvV8EWx6bFV-aQscUJUPTNQOZZ0GhwdSdBOJZdhbp-R2ewUjgmsS2kdK_SXigGrwCvX5uCjWBHgm0H5J_6gYYvayPX6rvXw_Juuf0ygDqnGaMWYJHBqDOErq3FqyZXHrJgASbm_x10tKIWNzvbtIfdqEGIkG6QSYVqJf7uGmnD4zMxPLVkZ6_",
              link: "/product/pumpkin-seed"
            },
            {
              name: "Castor Oil",
              desc: "Lash & Brow Vitality",
              price: "$34.00",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdH_jygLq9wUNHzS_dvBJMH2hA5fICEG-qT_klAfs8bfMPsIwyh_VRKAbryTQXSNtX9n8k2WZsWacY2RkTmoCs-W25l0bAuigs7VgDeAE17YPBXdqIV3xRWe1rni8HFqEJwz-t6La56oscZe0DTaqkjEfhYU18fEfduEr5GNMP-lni21JMqDgDpxwyW3qVX-XVA5NasZSdeHlzNzegsPARCw7diW4UjTv_dfphdbPvUCKpRx6iYZ07neHzz_grKTzuNCQx5ppBnXyI",
              link: "/lineup"
            }
          ].map((product, idx) => (
            <div key={idx} className="group cursor-pointer">
              <Link to={product.link} className="block">
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-surface-container">
                  <img alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={product.img} />
                  {product.tag && (
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-canvas/90 backdrop-blur-md px-3 py-1 font-label-sm text-label-sm text-deep-bark">{product.tag}</span>
                    </div>
                  )}
                </div>
              </Link>
              <div className="space-y-2">
                <Link to={product.link} className="hover:opacity-80 block">
                  <h3 className="font-headline-md text-[20px] text-deep-bark">{product.name}</h3>
                </Link>
                <p className="font-label-caps text-label-sm text-on-surface-variant">{product.desc}</p>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-body-md text-body-md">{product.price}</span>
                  <Link className="font-label-caps text-label-caps text-raw-sienna opacity-0 group-hover:opacity-100 transition-opacity" to={product.link}>Discover</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story Section */}
      <section ref={addToRefs} className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] transition-all duration-1000 opacity-100 translate-y-0">
        <div className="relative overflow-hidden bg-surface-container-low group min-h-[50vh] md:min-h-full">
          <div className="absolute inset-0 bg-deep-bark/5 z-10 transition-opacity group-hover:opacity-0"></div>
          <div className="h-full w-full" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmtYlZW6tIKkv7DwMKu6No6WR8kmnu-Yn0WgEmJ2usbVLgUn3SBPIYkMIeL2Y0o4iC19HKxEq0pf3lpm7V_07wR1KgAN5joBbNG1snPmC2w0XjByuSdy2PP9a8cKenWW2h3sBQ_Ai9gj2wJcoWAFi7LKJcecbCqaO-yogoInDeJQrpdEKjh_QdPmlR3ENt55vJsP93xxpHHetqrlPYDX__882eZ6gdBSTP_svyIO8ckGDahNyl5nHJv0oA4sH7RjxU4zG0MFw2LlZR")`, backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
          {/* Floating Callout */}
          <div className="absolute top-1/4 left-1/4 z-20 flex flex-col items-center">
            <div className="w-2 h-2 bg-raw-sienna rounded-full"></div>
            <div className="w-px h-24 bg-raw-sienna/40"></div>
            <div className="bg-canvas/90 backdrop-blur-md p-4 golden-shadow border border-raw-sienna/10 max-w-[180px]">
              <span className="font-label-caps text-[10px] text-raw-sienna block mb-1">Process 01</span>
              <p className="font-body-md text-[13px] leading-tight text-on-surface-variant">Cold-pressed below 40°C to preserve enzymatic integrity.</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-page-margin-mobile md:p-page-margin-desktop bg-canvas border-l border-raw-sienna/5">
          <div className="max-w-md space-y-8">
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
              <button className="font-label-caps text-label-caps text-deep-bark flex items-center gap-4 group cursor-pointer focus:outline-none">
                  LEARN ABOUT OUR PRESSING
                  <span className="w-12 h-px bg-deep-bark group-hover:w-16 transition-all duration-300"></span>
              </button>
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
