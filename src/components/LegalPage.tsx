import { Link } from 'react-router-dom';
import Footer from './Footer';

interface Section {
  title: string;
  body: string;
}

interface LegalPageProps {
  title: string;
  subtitle: string;
  sections: Section[];
  crossLink: { to: string; label: string };
}

export default function LegalPage({ title, subtitle, sections, crossLink }: LegalPageProps) {
  return (
    <div className="bg-canvas text-on-surface min-h-screen">
      <main className="pt-32 pb-section-gap px-page-margin-mobile md:px-page-margin-desktop max-w-3xl mx-auto">

        <div className="mb-16 space-y-4">
          <span className="font-label-caps text-label-caps text-raw-sienna tracking-[0.25em] uppercase block">Legal</span>
          <h1 className="font-serif text-5xl md:text-6xl text-deep-bark font-medium italic leading-tight">{title}</h1>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-xl pt-2">{subtitle}</p>
          <p className="font-label-sm text-[11px] text-outline uppercase tracking-widest pt-4">Last updated: June 2026</p>
        </div>

        <div className="space-y-12 border-t border-raw-sienna/10 pt-12">
          {sections.map((section, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-12 border-b border-raw-sienna/10 last:border-none">
              <div className="md:col-span-4">
                <span className="font-label-caps text-[10px] text-raw-sienna tracking-[0.2em] uppercase block mb-1">0{i + 1}</span>
                <h2 className="font-serif text-xl text-deep-bark font-medium">{section.title}</h2>
              </div>
              <p className="md:col-span-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-raw-sienna/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-body-md text-sm text-on-surface-variant">
            Questions? Email us at{' '}
            <a href="mailto:hello@yaboil.com" className="text-raw-sienna hover:underline">hello@yaboil.com</a>
          </p>
          <Link to={crossLink.to} className="font-label-caps text-[11px] text-deep-bark uppercase tracking-widest hover:text-raw-sienna transition-colors flex items-center gap-2">
            {crossLink.label}
            <span className="w-6 h-px bg-current"></span>
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  );
}
