export default function Footer() {
  return (
    <footer className="w-full pt-section-gap pb-12 bg-obsidian text-canvas border-t border-raw-sienna/10">
      <div className="px-page-margin-mobile md:px-page-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-xs space-y-6">
                <div className="h-16 w-16">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzgCXCjMQDhM_3AmfAgrcutPqhuZOxj-LhW9QEfxEhZn7Ua7b5W3ql1k4Wo5lX_cgdjoANQva3GX2xBF762mP5qiNokipxqIEr6q2Sst_QVsNQF1T-T33D-HDyqAC8rTe4_kIFOXW9lzmPJpSDhCNYv691pnQK6k29aEDpuEuoCOyCM1l3Kfk4eEakE353AWwlzZuAey3tjr17C7NhpJ0AuGXJdJIWEt3YELfhZcQbd_S8IvHdjGoe8zTZ5c0EjjTR2K21QIgFEyum" alt="YabOil Monogram" className="h-full w-full object-contain rounded-none" />
                </div>
                <p className="font-body-md text-canvas/80">Redefining slow beauty through artisanal botanical mastery. Sustainably sourced, hand-poured in small batches.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                <div className="space-y-4">
                    <h4 className="font-label-caps text-label-caps text-canvas/60 uppercase tracking-widest">Company</h4>
                    <ul className="space-y-3 font-body-md text-body-md text-canvas/80">
                        <li><a href="#" className="hover:text-raw-sienna transition-colors">Sustainability</a></li>
                        <li><a href="#" className="hover:text-raw-sienna transition-colors">Shipping</a></li>
                        <li><a href="#" className="hover:text-raw-sienna transition-colors">Wholesale</a></li>
                        <li><a href="#" className="hover:text-raw-sienna transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="w-full md:w-auto max-w-sm space-y-6">
                <h4 className="font-label-caps text-label-caps text-canvas uppercase tracking-widest">The Journal</h4>
                <div className="relative">
                    <input type="email" placeholder="email@address.com" className="w-full bg-transparent border-b border-canvas/30 py-3 font-body-md focus:outline-none focus:border-raw-sienna transition-colors text-canvas rounded-none" />
                    <button className="absolute right-0 top-1/2 -translate-y-1/2 text-raw-sienna cursor-pointer focus:outline-none">
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
        <div className="pt-8 border-t border-canvas/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-label-sm text-label-sm text-canvas/60">© 2024 YabOil Artisanal. Crafted in Small Batches.</p>
            <div className="flex gap-6 opacity-40">
                <span className="material-symbols-outlined">payments</span>
                <span className="material-symbols-outlined">credit_card</span>
            </div>
        </div>
      </div>
    </footer>
  );
}
