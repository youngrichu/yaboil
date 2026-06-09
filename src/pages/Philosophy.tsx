import Footer from '../components/Footer';

export default function Philosophy() {
  return (
    <div className="bg-canvas text-on-surface font-body-md overflow-x-hidden min-h-screen">
      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-section-gap px-page-margin-mobile md:px-page-margin-desktop overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Warm sunlight hitting botanical leaves." className="w-full h-full object-cover opacity-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-p5YZeyZkHHNnBWCNG78nQze3vH8TcxU4ZyjeNvRAkMnCPE5F2EiE4Pxy1zuOCDUTgG5xcH6Iehsa9yMk_VG0lrpjUhD7BgVLuEIc09IJ6VsCWWhvbOOxJlSjppoDyRbDNdrw0hUTGwMJk7_L5ufdxOncpEP9YvwmdJE-IUHvhxxLgNPtK2WWUKhOGlNVI5YljmK4LsG2Qjmeqd_8DxNYpeCgom_GWcKehp1UeqP3KvfYsirkZgbmxgZwbWo5fK9EIdMJF9ym-b0x" />
          <div className="absolute inset-0 bg-gradient-to-b from-canvas/20 via-canvas/40 to-canvas/80"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <img alt="YabOil Logo" className="w-24 h-24 object-contain mb-8 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWdkkVRExRBGCddQwfSLXD-SkbHc63dPMwFP1B_qXd73WNRZg_j-gQYDbllQ8UCG51aBYymD_WNbCrUSpZ8Ox8D4ML5t5rP6kXEpIXIh08cIoVmqsRDbgZp5uMDGd9Du2ewM8hNT9_0ja3HtF5iZ7NgRiCSVYUHuOELl8XEKGlebkfQKHu-aWjWq2IHWq8YHwRKLlGnyTsklSoyZA-Cil-ReClcmKkje9RCzaFdxjKOrQT25j67ZZJDVQYnvoB13OMRRC2rHVYWwpx" />
          <h1 className="font-aligarh text-headline-lg-mobile md:text-display-lg text-deep-bark mb-6 tracking-tight">The Art of Slow Beauty</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            Naturally Pressed, Small-Batch Botanicals. A return to intention, honoring the raw rhythm of nature through meticulous, unhurried craftsmanship.
          </p>
          <div className="h-16 w-[1px] bg-raw-sienna/30"></div>
        </div>
      </header>

      {/* Content Sections */}
      <main>
        {/* Founder's Story / Intent */}
        <section className="py-section-gap px-page-margin-mobile md:px-page-margin-desktop">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="md:col-span-12 lg:col-span-5 lg:col-start-2 order-2 lg:order-1 flex flex-col justify-center">
              <span className="font-label-caps text-label-caps text-raw-sienna mb-4 block tracking-widest uppercase">Our Intent</span>
              <h2 className="font-aligarh text-headline-md text-deep-bark mb-6">From Seed to Bottle</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  We believe that luxury is time. Our process is a deliberate rejection of mass production, focusing instead on the quiet alchemy of nature. Every drop is a testament to the soil, the sun, and the careful hands that guide it from the earth to your skin.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                  It begins with raw materials bathed in sun-drenched environments, harvested precisely when their active compounds are at their peak.
              </p>
            </div>
            <div className="md:col-span-12 lg:col-span-6 order-1 lg:order-2 mb-10 lg:mb-0">
              <div className="relative aspect-[4/5] w-full overflow-hidden golden-shadow group">
                <img alt="Sun-drenched raw materials being processed." className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1hZjQhZkUA_FR7pCZaYpvFuMjvBFRMQD2n4kd4BJpQQJ3wEcF92058h6UW3_eU37VcdoCegkUoAa4DRXwgWIR3NIg_9D41o0EnAKIEuB1JC3TEzBCCb8av5XRi4r-z4q5hjAi7XZEO1JPJYzeRVPosziKWYKmtLUGdGzprqPk-ladINHKck5YWYjnSXMvtKHppA2K4QL17DfZTF4C378ZhVs7P67M-zh06pwfw1TliionbUh34j8CMSXZYFT2GQwH9uxW8kZR0quc" />
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Highlights */}
        <section className="py-section-gap bg-surface-container-low px-page-margin-mobile md:px-page-margin-desktop border-y border-outline/10 relative overflow-hidden">
          <img src="/images/illustrations/castor.jpg" aria-hidden="true" alt="" className="absolute -left-[35%] top-1/2 -translate-y-1/2 w-[55%] opacity-[0.2] mix-blend-multiply pointer-events-none select-none hidden md:block" />
          <img src="/images/illustrations/castor.jpg" aria-hidden="true" alt="" className="absolute -right-[35%] top-1/2 -translate-y-1/2 w-[55%] opacity-[0.2] mix-blend-multiply pointer-events-none select-none hidden md:block" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="font-label-caps text-label-caps tracking-widest uppercase text-raw-sienna mb-4 block">Methodology</span>
              <h2 className="font-aligarh text-headline-md text-deep-bark">Naturally Pressed</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Feature 1 */}
              <div className="bg-canvas p-8 golden-shadow hover:shadow-[12px_16px_40px_-4px_rgba(74,44,17,0.12)] transition-all duration-300 flex flex-col h-full border border-outline/5 group">
                <span className="material-symbols-outlined text-raw-sienna text-3xl mb-6">water_drop</span>
                <h3 className="font-aligarh text-headline-md text-deep-bark text-2xl mb-4">Cold-Pressed</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                  Extracted without heat or chemical solvents to preserve the delicate lipid barriers and vital nutrients of each seed and flower.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="bg-canvas p-8 golden-shadow hover:shadow-[12px_16px_40px_-4px_rgba(74,44,17,0.12)] transition-all duration-300 flex flex-col h-full border border-outline/5 group">
                <span className="material-symbols-outlined text-raw-sienna text-3xl mb-6">hourglass_empty</span>
                <h3 className="font-aligarh text-headline-md text-deep-bark text-2xl mb-4">Slow Maturation</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                  Allowed to settle and clarify naturally over weeks, ensuring unparalleled purity and a sensory profile that cannot be rushed.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="bg-canvas p-8 golden-shadow hover:shadow-[12px_16px_40px_-4px_rgba(74,44,17,0.12)] transition-all duration-300 flex flex-col h-full border border-outline/5 group">
                <span className="material-symbols-outlined text-raw-sienna text-3xl mb-6">spa</span>
                <h3 className="font-aligarh text-headline-md text-deep-bark text-2xl mb-4">Artisanal Yields</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                  Produced in strictly limited batches. We prioritize the uncompromising quality of a small yield over the compromises of volume.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sourcing Commitment */}
        <section className="py-section-gap px-page-margin-mobile md:px-page-margin-desktop relative overflow-hidden">
          <img src="/images/illustrations/herb-rosemary.jpg" aria-hidden="true" alt="" className="absolute -left-[35%] top-1/2 -translate-y-1/2 w-[55%] opacity-[0.2] mix-blend-multiply pointer-events-none select-none hidden md:block" />
          <img src="/images/illustrations/herb-rosemary.jpg" aria-hidden="true" alt="" className="absolute -right-[35%] top-1/2 -translate-y-1/2 w-[55%] opacity-[0.2] mix-blend-multiply pointer-events-none select-none hidden md:block" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="md:col-span-12 lg:col-span-6 mb-10 lg:mb-0 relative">
              <div className="absolute -inset-4 bg-background -z-10 golden-shadow opacity-50 hidden md:block"></div>
              <img alt="Hands working with soil and plants." className="w-full aspect-square object-cover golden-shadow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFmwg2zuHv_QHBFeR5oydzlo29TvfY0c3uW0ovUHMKBPzL7YZ7kxD76ckcpqFqIUghelU2yEWUtH55IRd9ICzMJFWowsZrw-ITS5bbRtia90bgAELJ-2X70bX6QKHia4nMK57WmKuxJtXjyPR94GC6p-3T76ho4M1VBNqmA4oZQ8bcLAssUBC2MZcoBpG4OTZ1S455ofFVe7Nxc76ZbsEI3R2LNSuBHKJT976p8sQf4cOJHo_cXuDe0Q3MN12fD8J7yv-4umoLVmpm" />
            </div>
            <div className="md:col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
              <span className="font-label-caps text-label-caps text-raw-sienna mb-4 block tracking-widest uppercase">Ethical Sourcing</span>
              <h2 className="font-aligarh text-headline-md text-deep-bark mb-6">A Commitment to the Earth</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  Our relationship with our growers is rooted in transparency and respect. We source exclusively from farms that practice regenerative agriculture, ensuring that we give back to the soil as much as we take.
              </p>
              <ul className="space-y-4 mb-8 border-t border-outline/20 pt-6">
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-raw-sienna text-sm">check</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">Traceable origins for every botanical.</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-raw-sienna text-sm">check</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">Fair-trade partnerships with local cultivators.</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-raw-sienna text-sm">check</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">Zero-waste extraction processes.</span>
                </li>
              </ul>
              <a className="inline-flex items-center gap-2 font-label-caps text-[12px] text-canvas bg-raw-sienna px-8 py-4 uppercase tracking-[0.2em] hover:bg-deep-bark transition-colors w-fit golden-shadow" href="#">
                  Discover Our Partners
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
