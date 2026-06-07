export default function HighImpact() {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[1280px] mx-auto min-h-[calc(100vh-80px)] bg-hi-surface text-hi-obsidian font-sans pt-[80px]">
      
      {/* Sticky Sidebar - Brutalist Edge */}
      <aside className="w-full lg:w-[320px] xl:w-[400px] lg:sticky lg:top-[80px] lg:h-[calc(100vh-80px)] bg-hi-surface border-b-2 lg:border-b-0 lg:border-r-2 border-hi-obsidian p-6 md:p-8 lg:p-12 flex flex-col z-10 overflow-y-auto">
        <div className="mb-12">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-hi-obsidian mb-6 block border-b-2 border-hi-obsidian pb-2 w-max">
            Brand Guidelines
          </span>
          <h1 className="font-aligarh text-4xl lg:text-7xl font-bold leading-tight tracking-tight mb-4 lg:mb-8">
            High-Impact<br/>Editorial
          </h1>
          <p className="font-sans text-sm lg:text-lg font-normal leading-relaxed text-hi-obsidian">
            The authoritative, sophisticated, and intellectually rigorous foundation of YabOil. Brutalist-Minimalism defined.
          </p>
        </div>

        <nav className="flex flex-col mt-auto border-t-2 border-hi-obsidian pt-6 gap-2">
          <NavLink num="01" text="Structure" active />
          <NavLink num="02" text="Typography" />
          <NavLink num="03" text="Monochrome" />
          <NavLink num="04" text="Application" />
        </nav>
      </aside>

      {/* Main Content - Brutalist Flow */}
      <main className="flex-1 bg-white p-6 md:p-12 lg:p-24 space-y-24 w-full overflow-hidden">
        
        {/* Section 01: Structure */}
        <section id="structure">
            <div className="flex justify-between items-baseline border-b-2 border-hi-obsidian pb-6 mb-12">
              <h2 className="font-aligarh text-4xl font-bold tracking-tight">01. Structure</h2>
              <span className="text-[11px] uppercase tracking-[0.1em] font-bold">Grid</span>
            </div>
            
            <div className="border-2 border-hi-obsidian bg-hi-surface p-12 mb-12 flex justify-center shadow-[8px_8px_0px_#1b1c1c]">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzgCXCjMQDhM_3AmfAgrcutPqhuZOxj-LhW9QEfxEhZn7Ua7b5W3ql1k4Wo5lX_cgdjoANQva3GX2xBF762mP5qiNokipxqIEr6q2Sst_QVsNQF1T-T33D-HDyqAC8rTe4_kIFOXW9lzmPJpSDhCNYv691pnQK6k29aEDpuEuoCOyCM1l3Kfk4eEakE353AWwlzZuAey3tjr17C7NhpJ0AuGXJdJIWEt3YELfhZcQbd_S8IvHdjGoe8zTZ5c0EjjTR2K21QIgFEyum" alt="YabOil Mark" className="w-64 h-64 mix-blend-multiply grayscale contrast-125 object-contain" />
            </div>

            <div className="flex flex-col xl:flex-row gap-8">
              <p className="font-sans text-xl font-normal leading-relaxed text-hi-obsidian xl:w-2/3">
                 The form is strictly architectural. There are no rounded corners. Every container, button, input field, and image frame must have a 0px border radius. This reinforces the brutalist nature and ensures a consistent visual "snap" to the grid.
              </p>
              <div className="xl:w-1/3 flex flex-col gap-4 border-2 border-hi-obsidian bg-hi-surface p-6">
                  <div className="flex justify-between items-center border-b-2 border-hi-obsidian pb-2 mb-2">
                    <span className="text-[10px] uppercase tracking-[0.1em] font-bold">Base Unit</span>
                    <span className="text-sm font-bold">4px</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-[0.1em] font-bold">Gutter</span>
                    <span className="text-sm font-bold">24px</span>
                  </div>
              </div>
            </div>
        </section>

        {/* Section 02: Typography */}
        <section id="typography">
            <div className="flex justify-between items-baseline border-b-2 border-hi-obsidian pb-6 mb-12">
              <h2 className="font-aligarh text-4xl font-bold tracking-tight">02. Typography</h2>
              <span className="text-[11px] uppercase tracking-[0.1em] font-bold">Typefaces</span>
            </div>

            <div className="flex flex-col xl:flex-row gap-0 border-2 border-hi-obsidian mb-16">
              <div className="w-full xl:w-1/2 bg-hi-surface border-b-2 xl:border-b-0 xl:border-r-2 border-hi-obsidian p-12 lg:p-24 flex items-center justify-center relative justify-center overflow-hidden">
                  <span className="font-aligarh text-[80px] lg:text-[140px] leading-none absolute -bottom-4 lg:-bottom-8 -right-2 lg:-right-4 opacity-10">Aa</span>
                  <span className="font-aligarh text-[60px] lg:text-[120px] leading-none z-10">Aa</span>
              </div>
              <div className="w-full xl:w-1/2 flex flex-col justify-center p-8 lg:p-12 bg-white">
                  <span className="text-[10px] uppercase tracking-[0.1em] font-bold bg-hi-obsidian text-white px-2 py-1 mb-4 w-max">Heading</span>
                  <h3 className="font-aligarh text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">Aligarh Arabic</h3>
                  <p className="font-sans text-base md:text-lg font-normal leading-relaxed text-hi-obsidian mb-6 lg:mb-8 border-l-4 border-hi-obsidian pl-4 lg:pl-6">
                    Used for high-impact moments. Set with tight leading and slight negative tracking to enhance its architectural presence.
                  </p>
                  <div>
                    <p className="font-aligarh text-xl lg:text-3xl font-bold mb-2 uppercase break-words">The Quick Brown Fox</p>
                  </div>
              </div>
            </div>

            <div className="flex flex-col-reverse xl:flex-row gap-0 border-2 border-hi-obsidian">
              <div className="w-full xl:w-1/2 flex flex-col justify-center p-8 lg:p-12 bg-hi-obsidian text-white">
                  <span className="text-[10px] uppercase tracking-[0.1em] font-bold bg-white text-hi-obsidian px-2 py-1 mb-4 w-max">Body / UI</span>
                  <h3 className="font-sans text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">Jost</h3>
                  <p className="font-sans text-base lg:text-lg font-normal leading-relaxed text-white/90 mb-6 lg:mb-8 border-l-4 border-white pl-4 lg:pl-6">
                    Used for long-form reading and functional labels to maintain a clean, modern accessibility. Always uppercase for labels.
                  </p>
                  <div>
                    <p className="font-sans text-xs lg:text-sm uppercase tracking-widest font-bold mb-3 break-all">0123456789 & @ % # *</p>
                  </div>
              </div>
              <div className="w-full xl:w-1/2 bg-hi-surface p-12 lg:p-24 flex items-center justify-center text-hi-obsidian">
                  <span className="font-sans text-[60px] lg:text-[120px] font-bold leading-none">Aa</span>
              </div>
            </div>
        </section>

        {/* Section 03: Color Palette */}
        <section id="monochrome">
            <div className="flex justify-between items-baseline border-b-2 border-hi-obsidian pb-6 mb-12">
              <h2 className="font-aligarh text-4xl font-bold tracking-tight">03. Monochrome</h2>
              <span className="text-[11px] uppercase tracking-[0.1em] font-bold">Contrast</span>
            </div>
            
            <p className="font-sans text-lg font-normal leading-relaxed text-hi-obsidian max-w-3xl mb-12 bg-hi-surface p-6 border-l-4 border-hi-obsidian">
              Strictly monochromatic to emphasize content and structural form. Depth is conveyed entirely through bold borders and tonal layering.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SolidCard hex="#000000" name="Primary Black" bgClass="bg-black" textClass="text-white" borderClass="border-2 border-black" />
              <SolidCard hex="#FFFFFF" name="Negative White" bgClass="bg-white" borderClass="border-2 border-black drop-shadow-[4px_4px_0_rgba(0,0,0,1)]" />
              <SolidCard hex="#E3E2E2" name="Mid-range Grey" bgClass="bg-hi-grey" borderClass="border-2 border-black" />
            </div>
        </section>

        {/* Section 04: Packaging */}
        <section id="application">
            <div className="flex justify-between items-baseline border-b-2 border-hi-obsidian pb-6 mb-12">
              <h2 className="font-aligarh text-4xl font-bold tracking-tight">04. Application</h2>
              <span className="text-[11px] uppercase tracking-[0.1em] font-bold">Product</span>
            </div>

            <div className="relative w-full border-2 border-hi-obsidian mb-16 overflow-hidden grid grid-cols-2 lg:grid-cols-4 grayscale contrast-125 bg-surface-container">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVbfkk1_KEeDkQfyVDdOo_kl8PbmdFAVzQ_YQytXwXhf9wsaRpVq-nVzRjrLBoPWkGPrtV6yX4ngrNC5AFUylFHY7i3yOv_I0CMIndM5aAq_8pVp0YfJGlVLrXJzIihitNEwGdNjDbmXJZ61w4NnbOuiNDGtlVEtCVbL1tn0nj_UVGmGsSsVOSI4DWa3PysjJOMJrXV2kXQ1w6c3WSUtxDJB3sfn-Y2BbVrOkvqxt-KnKs2S1D5-DOmmu6sRHB87xF2uo3X7WHjjJm" alt="Black Seed" className="w-full aspect-square object-cover border-r-2 border-b-2 lg:border-b-0 border-hi-obsidian" />
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmtYlZW6tIKkv7DwMKu6No6WR8kmnu-Yn0WgEmJ2usbVLgUn3SBPIYkMIeL2Y0o4iC19HKxEq0pf3lpm7V_07wR1KgAN5joBbNG1snPmC2w0XjByuSdy2PP9a8cKenWW2h3sBQ_Ai9gj2wJcoWAFi7LKJcecbCqaO-yogoInDeJQrpdEKjh_QdPmlR3ENt55vJsP93xxpHHetqrlPYDX__882eZ6gdBSTP_svyIO8ckGDahNyl5nHJv0oA4sH7RjxU4zG0MFw2LlZR" alt="Rosemary" className="w-full aspect-square object-cover lg:border-r-2 lg:border-b-0 border-b-2 border-hi-obsidian" />
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDptkAWrp8-oCwOXn9dvsjg3oj4H-QSKY4Ol5q3-cemmawNNXKcVbR2opoVCD6LfMAx2rAkvNe36Q_y7Ch-lD0Kzn8LvV8EWx6bFV-aQscUJUPTNQOZZ0GhwdSdBOJZdhbp-R2ewUjgmsS2kdK_SXigGrwCvX5uCjWBHgm0H5J_6gYYvayPX6rvXw_Juuf0ygDqnGaMWYJHBqDOErq3FqyZXHrJgASbm_x10tKIWNzvbtIfdqEGIkG6QSYVqJf7uGmnD4zMxPLVkZ6_" alt="Pumpkin Seed" className="w-full aspect-square object-cover border-r-2 border-hi-obsidian" />
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdH_jygLq9wUNHzS_dvBJMH2hA5fICEG-qT_klAfs8bfMPsIwyh_VRKAbryTQXSNtX9n8k2WZsWacY2RkTmoCs-W25l0bAuigs7VgDeAE17YPBXdqIV3xRWe1rni8HFqEJwz-t6La56oscZe0DTaqkjEfhYU18fEfduEr5GNMP-lni21JMqDgDpxwyW3qVX-XVA5NasZSdeHlzNzegsPARCw7diW4UjTv_dfphdbPvUCKpRx6iYZ07neHzz_grKTzuNCQx5ppBnXyI" alt="Castor" className="w-full aspect-square object-cover" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t-2 border-hi-obsidian pt-12 mt-12 relative">
              <div className="absolute top-0 right-1/2 w-0.5 h-full bg-hi-obsidian hidden md:block"></div>
              <div className="md:pr-12">
                <h3 className="font-aligarh text-4xl font-bold mb-6">Cut-out Effect</h3>
                <p className="font-sans text-xl font-normal leading-relaxed text-hi-obsidian">
                  When elements need to appear "above" the main surface, they should use a stark white fill with a heavy black outline, creating a "cut-out" effect against the grid.
                </p>
              </div>
              <div className="md:pl-12">
                <h3 className="font-aligarh text-4xl font-bold mb-6">Execution</h3>
                <ul className="space-y-4 font-sans text-lg font-bold text-hi-obsidian list-none pl-0 uppercase">
                  <li className="flex items-center gap-4 before:content-[''] before:w-4 before:h-4 before:bg-black">Full Bleed Imagery</li>
                  <li className="flex items-center gap-4 before:content-[''] before:w-4 before:h-4 before:bg-black">0px Border Radius</li>
                  <li className="flex items-center gap-4 before:content-[''] before:w-4 before:h-4 before:border-2 before:border-black before:bg-white">Flat 2D Plane</li>
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
    <a href={`#${text.toLowerCase().replace(' ', '-')}`} className={`group flex items-center justify-between py-3 border-b-2 ${active ? 'border-hi-obsidian' : 'border-hi-outline/30 hover:border-hi-obsidian'}`}>
      <span className={`text-lg font-sans font-bold uppercase transition-colors ${active ? 'text-hi-obsidian' : 'text-hi-obsidian/60 group-hover:text-hi-obsidian'}`}>
        {text}
      </span>
      <span className={`text-sm font-sans font-bold transition-colors bg-hi-obsidian px-2 text-white ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        {num}
      </span>
    </a>
  );
}

function SolidCard({ hex, name, bgClass, textClass = "text-hi-obsidian", borderClass }: { hex: string, name: string, bgClass: string, textClass?: string, borderClass?: string }) {
  return (
    <div className={`flex flex-col ${borderClass}`}>
      <div className={`w-full aspect-square ${bgClass}`}></div>
      <div className={`p-4 border-t-2 border-hi-obsidian bg-white ${textClass === 'text-white' ? 'bg-black text-white' : ''}`}>
        <span className="text-[12px] uppercase tracking-widest font-bold block mb-1">{name}</span>
        <span className="text-sm font-sans font-bold opacity-70">{hex}</span>
      </div>
    </div>
  );
}
