export default function GoldenHour() {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto min-h-[calc(100vh-80px)] bg-canvas text-obsidian pt-[80px]">
      {/* Sticky Sidebar */}
      <aside className="w-full lg:w-[320px] xl:w-[400px] lg:sticky lg:top-[80px] lg:h-[calc(100vh-80px)] bg-canvas border-b lg:border-b-0 lg:border-r border-obsidian/10 p-6 md:p-8 lg:p-12 flex flex-col z-10 overflow-y-auto">
        <div className="mb-12">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-obsidian/60 mb-6 block">
            Internal Document
          </span>
          <h1 className="font-serif text-4xl py-2 md:text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-6 lg:mb-8">
            Brand<br/>Guidelines
          </h1>
          <p className="font-sans text-sm md:text-base lg:text-lg font-light leading-relaxed text-obsidian/80">
            The visual and strategic foundation of YabOil Artisanal Botanicals. A guide to our modern editorial minimalism.
          </p>
        </div>

        <nav className="flex flex-col gap-4 mt-auto">
          <NavLink num="01" text="The Mark" active />
          <NavLink num="02" text="Typography" />
          <NavLink num="03" text="Color Palette" />
          <NavLink num="04" text="Packaging" />
        </nav>
      </aside>

      {/* Main Content Scroll */}
      <main className="flex-1 bg-alabaster p-6 md:p-12 lg:p-24 space-y-24 w-full overflow-hidden">
        
        {/* Section 01: The Mark */}
        <section id="the-mark">
            <div className="flex justify-between items-baseline border-b border-obsidian/10 pb-6 mb-12">
              <h2 className="font-serif text-3xl font-bold tracking-tight">01. The Mark</h2>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-obsidian/60">Identity</span>
            </div>
            
            <div className="bg-canvas border border-obsidian/5 rounded-sm p-16 flex items-center justify-center mb-12">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzgCXCjMQDhM_3AmfAgrcutPqhuZOxj-LhW9QEfxEhZn7Ua7b5W3ql1k4Wo5lX_cgdjoANQva3GX2xBF762mP5qiNokipxqIEr6q2Sst_QVsNQF1T-T33D-HDyqAC8rTe4_kIFOXW9lzmPJpSDhCNYv691pnQK6k29aEDpuEuoCOyCM1l3Kfk4eEakE353AWwlzZuAey3tjr17C7NhpJ0AuGXJdJIWEt3YELfhZcQbd_S8IvHdjGoe8zTZ5c0EjjTR2K21QIgFEyum" alt="YabOil Mark" className="w-64 h-64 mix-blend-multiply object-contain" />
            </div>

            <div className="flex flex-col xl:flex-row gap-12">
              <p className="font-sans text-lg font-light leading-relaxed text-obsidian/80 xl:w-2/3">
                The YabOil monogram is a locked 'Y' structure infused with delicate botanical linework. It serves as the primary identifier across all touchpoints. The mark is designed to be highly legible at small sizes on packaging while maintaining intricate detail when scaled for environmental applications.
              </p>
              <div className="xl:w-1/3 flex flex-col gap-4 border-l border-obsidian/10 pl-8">
                  <div className="flex justify-between items-center bg-canvas/50 px-4 py-3 border border-obsidian/5">
                    <span className="text-[10px] uppercase tracking-[0.15em] font-medium">Clear Space</span>
                    <span className="text-obsidian/40 border-2 border-obsidian/20 w-4 h-4 block"></span>
                  </div>
                  <div className="flex justify-between items-center bg-canvas/50 px-4 py-3 border border-obsidian/5">
                    <span className="text-[10px] uppercase tracking-[0.15em] font-medium">Minimum Size</span>
                    <span className="text-sm font-light">16px</span>
                  </div>
              </div>
            </div>
        </section>

        {/* Section 02: Typography */}
        <section id="typography">
            <div className="flex justify-between items-baseline border-b border-obsidian/10 pb-6 mb-12">
              <h2 className="font-serif text-3xl font-bold tracking-tight">02. Typography</h2>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-obsidian/60">Typefaces</span>
            </div>

            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 border-b border-obsidian/10 pb-16 mb-16">
              <div className="w-full xl:w-1/2 bg-canvas border border-obsidian/5 p-12 lg:p-24 flex items-center justify-center">
                  <span className="font-serif text-[80px] lg:text-[120px] leading-none">Aa</span>
              </div>
              <div className="w-full xl:w-1/2 flex flex-col justify-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-sienna mb-4 block">Primary Heading</span>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold mb-2">EB Garamond</h3>
                  <span className="text-sm italic font-serif text-obsidian/60 mb-6 block">Used for artisanal editorial impact</span>
                  <p className="font-sans text-base md:text-lg font-light leading-relaxed text-obsidian/80 mb-8">
                    Used exclusively for high-impact moments: display headings, product names, and primary storytelling. Its calligraphic roots evoke a sense of craftsmanship and heritage.
                  </p>
                  <div className="border-l-2 border-sienna pl-4 md:pl-6">
                    <p className="font-serif text-xl md:text-2xl font-bold italic mb-4">The quick brown fox jumps over the lazy dog.</p>
                    <p className="font-serif text-lg md:text-xl italic break-all">0123456789 & @ % # *</p>
                  </div>
              </div>
            </div>

            <div className="flex flex-col-reverse xl:flex-row gap-8 xl:gap-12">
              <div className="w-full xl:w-1/2 flex flex-col justify-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-sienna mb-4 block">Secondary / UI</span>
                  <h3 className="font-sans text-3xl md:text-4xl font-normal mb-2 tracking-tight">Jost</h3>
                  <span className="font-sans text-sm font-light text-obsidian/60 mb-6 block">Geometric Sans-Serif</span>
                  <p className="font-sans text-base md:text-lg font-light leading-relaxed text-obsidian/80 mb-8">
                    Applied to all technical information, interface elements, and long-form body copy. It provides a clean, modern counterpoint to the romantic primary typeface.
                  </p>
                  <div>
                    <p className="font-sans text-sm uppercase tracking-widest font-medium mb-3">The quick brown fox</p>
                    <p className="font-sans text-sm font-light mb-2">The quick brown fox jumps over the lazy dog.</p>
                    <p className="font-sans text-sm font-light break-all">0123456789 & @ % # *</p>
                  </div>
              </div>
              <div className="w-full xl:w-1/2 bg-canvas border border-obsidian/5 p-12 lg:p-24 flex items-center justify-center">
                  <span className="font-sans text-[80px] lg:text-[120px] font-light leading-none">Aa</span>
              </div>
            </div>
        </section>

        {/* Section 03: Color Palette */}
        <section id="color-palette">
            <div className="flex justify-between items-baseline border-b border-obsidian/10 pb-6 mb-12">
              <h2 className="font-serif text-3xl font-bold tracking-tight">03. Color Palette</h2>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-obsidian/60">Golden Hour</span>
            </div>
            
            <p className="font-sans text-lg font-light leading-relaxed text-obsidian/80 max-w-3xl mb-12">
              Our palette is drawn directly from the natural botanicals we harvest. It is warm, earthy, and intentionally constrained to maintain a gallery-like focus on the product.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
              <ColorSwatch hex="#A67C52" name="Raw Sienna" bgClass="bg-sienna" />
              <ColorSwatch hex="#FDFBF7" name="Canvas" bgClass="bg-canvas" hasBorder />
              <ColorSwatch hex="#FAFAFA" name="Alabaster" bgClass="bg-alabaster" hasBorder />
              <ColorSwatch hex="#1C1918" name="Obsidian" bgClass="bg-obsidian" textClass="text-canvas" />
              <ColorSwatch hex="#4A2C11" name="Deep Bark" bgClass="bg-bark" textClass="text-canvas" />
            </div>
        </section>

        {/* Section 04: Packaging */}
        <section id="packaging">
            <div className="flex justify-between items-baseline border-b border-obsidian/10 pb-6 mb-12">
              <h2 className="font-serif text-3xl font-bold tracking-tight">04. Packaging</h2>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-obsidian/60">Application</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
               <img src="/images/black-seed.png" alt="Black Seed" className="w-full aspect-[4/5] object-cover bg-surface-container" />
               <img src="/images/rosemary.png" alt="Rosemary" className="w-full aspect-[4/5] object-cover bg-surface-container" />
               <img src="/images/pumpkin-seed.png" alt="Pumpkin" className="w-full aspect-[4/5] object-cover bg-surface-container" />
               <img src="/images/castor.png" alt="Castor" className="w-full aspect-[4/5] object-cover bg-surface-container" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              <div>
                <h3 className="font-serif text-3xl font-bold mb-6">The Gold Standard</h3>
                <p className="font-sans text-lg font-light leading-relaxed text-obsidian/80">
                  Our cylindrical amber bottles serve as the primary vessel. The amber glass protects the volatile botanicals from UV degradation while establishing a premium apothecary aesthetic.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-3xl font-bold mb-6">Label Hierarchy</h3>
                <ul className="space-y-4 font-sans text-lg font-light text-obsidian/80 list-none pl-0">
                  <li className="flex items-center gap-3 before:content-['•'] before:text-sienna">Product Monogram (Top Center)</li>
                  <li className="flex items-center gap-3 before:content-['•'] before:text-sienna">Primary Name (EB Garamond, 24pt)</li>
                  <li className="flex items-center gap-3 before:content-['•'] before:text-sienna">Key Ingredients (Jost, 8pt Caps)</li>
                  <li className="flex items-center gap-3 before:content-['•'] before:text-sienna">Volume (Bottom Right)</li>
                </ul>
              </div>
            </div>
        </section>

      </main>
    </div>
  );
}

function NavLink({ num, text, active = false }: { num: string, text: string, active?: boolean }) {
  return (
    <a href={`#${text.toLowerCase().replace(' ', '-')}`} className="group flex items-center gap-4 py-2 w-max">
      <span className={`text-[11px] font-sans transition-colors ${active ? 'text-sienna font-medium' : 'text-obsidian/40 group-hover:text-obsidian'}`}>
        {num}.
      </span>
      <span className={`text-sm font-sans tracking-wide transition-colors ${active ? 'text-sienna' : 'text-obsidian/70 group-hover:text-obsidian'}`}>
        {text}
      </span>
    </a>
  );
}

function ColorSwatch({ hex, name, bgClass, textClass = "text-obsidian", hasBorder = false }: { hex: string, name: string, bgClass: string, textClass?: string, hasBorder?: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      <div className={`w-full aspect-square ${bgClass} ${hasBorder ? 'border border-obsidian/10' : ''}`}></div>
      <div>
        <span className="text-[10px] uppercase tracking-[0.15em] font-medium block mb-1">{name}</span>
        <span className="text-[11px] font-mono text-obsidian/50">{hex}</span>
      </div>
    </div>
  );
}
