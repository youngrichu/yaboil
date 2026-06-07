import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function HarvestingDesertDetail() {
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const articleParagraphs = [
    {
      subtitle: "The Resilience of Nigella Sativa",
      text: "Deep within the parched soils of the Eastern Egyptian deserts, where the noon sun radiates with intense fervor and rainfall is measured in drops per year, thrives Nigella Sativa—commonly known as the black seed. This resilient botanical does not merely survive in extreme environments; it yields its finest medical treasures precisely because of the harsh climate. The metabolic stress induced by arid soil and persistent heat triggers a concentrated synthesis of thymoquinone, the potent antioxidant compound that gives our oil its distinct restorative power."
    },
    {
      subtitle: "Centuries in the Sand",
      text: "The relationship between Egyptian agrarian communities and Nigella Sativa spans several millennia. Tutankhamun's tomb contained a secure flask of black seed oil, intended to preserve the pharaoh's vitality in the afterlife. Our partner farms in the Al-Fayyum oasis still practice ancient cyclical routines. Our seeds are sown by hand in mid-autumn, relying on mineral-rich Nile subterranean water tables to slowly nourish the deep root networks during the cool desert winters."
    },
    {
      subtitle: "The Late-Afternoon Selection",
      text: "Sourcing at YabOil is defined by patience. We do not engage in automated mechanical harvesting. Instead, during the peak of October, local agricultural experts walk the rows in the late afternoon when the desert plants naturally drop their moisture levels. The dry seed pods, resembling fragile papyrus capsules, are gently snipped by hand and laid on raw linen canvases under the waning golden sun. This slow, field-drying method ensures the outer capsule doesn't burst prematurely, preserving the sensitive essential oils tightly coiled within each pitch-black seed."
    },
    {
      subtitle: "Preserved in Small Batches",
      text: "Once dried, the capsules are winnowed to release the gleaming black seeds. We immediately package them in airtight containers and fly them directly to our micro-pressing facilities. By maintaining a highly abbreviated supply chain, we completely eliminate the oxidation risks that degrade generic high-volume oils. When you open a bottle of YabOil, you inhale the unchanged, earthy, dry aromatics of the Egyptian soil, locked in time through our dedicated cold extraction methods."
    }
  ];

  return (
    <div className="bg-canvas text-on-surface antialiased selection:bg-raw-sienna selection:text-canvas min-h-screen flex flex-col pt-20">
      <main className="flex-grow">
        {/* Back navigation bar */}
        <div className="border-b border-raw-sienna/10 py-4 px-page-margin-mobile md:px-page-margin-desktop sticky top-20 bg-canvas/95 backdrop-blur-md z-30">
          <div className="max-w-screen-2xl mx-auto flex items-center">
            <Link 
              to="/journal" 
              className="group font-label-caps text-label-caps text-deep-bark hover:text-raw-sienna flex items-center gap-2 transition-colors uppercase tracking-widest font-semibold"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              Back to Journal
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <motion.article 
          variants={pageTransition}
          initial="initial"
          animate="animate"
          className="pb-24"
        >
          {/* Header Area */}
          <div className="max-w-4xl mx-auto px-page-margin-mobile md:px-12 pt-12 md:pt-20 text-center space-y-6 md:space-y-8">
            <div className="space-y-2">
              <span className="font-label-caps text-[11px] md:text-label-caps text-raw-sienna uppercase tracking-[0.25em] font-semibold block">
                Origins • Field Report
              </span>
              <h1 className="font-headline-md text-4xl md:text-6xl text-deep-bark leading-tight font-medium italic">
                Harvesting the Desert:<br className="hidden md:inline" /> Black Seed Sourcing
              </h1>
            </div>

            {/* Author / Date Metadata */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-on-surface-variant/80 border-y border-raw-sienna/10 py-5 w-fit mx-auto px-12">
              <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-wider">
                <span className="material-symbols-outlined text-raw-sienna text-sm select-none">calendar_today</span>
                <span>October 14, 2023</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-raw-sienna/40 hidden md:block" />
              <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-wider">
                <span className="material-symbols-outlined text-raw-sienna text-sm select-none">person</span>
                <span>By Elias Thorne</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-raw-sienna/40 hidden md:block" />
              <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-wider">
                <span className="material-symbols-outlined text-raw-sienna text-sm select-none">schedule</span>
                <span>6 Minute Read</span>
              </div>
            </div>
          </div>

          {/* Epic Banner Image */}
          <div className="w-full max-w-7xl mx-auto px-page-margin-mobile md:px-12 py-12">
            <div className="aspect-[21/9] w-full overflow-hidden bg-alabaster border border-raw-sienna/10 golden-shadow relative group">
              <img 
                alt="Cinematic arid landscape of resilient botanical plant source for black seeds in the desert" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02] grayscale-[15%] sepia-[10%]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuD_dgsduL1eH7yp1MxUh1hyJL4rweSp2otrnwMDzK-kb7C09cw7z_lDJ9Qr-CiC8YWWJo8lIsKeJBfL_PZXMJmIx3oZQfi04F6cEuNMeES4491teZkc220JKhO5B9ziiwckEmagK8AiWaxpqKIh3vJmOEho8POIgHYV9kZ-Ly_AclRPY7GNRr0WsSMn0A-z8G1m8KmRxHRFWiCjvfqAB5KRxd99t6IR11JdfVzDtJnc7z0-zili70bbX4eiGvvtmYJACOxvtTPQ4_" 
              />
              <div className="absolute inset-0 bg-deep-bark/5 pointer-events-none" />
            </div>
            <p className="mt-4 text-center font-label-sm text-xs font-light text-on-surface-variant/70 italic max-w-2xl mx-auto">
               Resilient Nigella Sativa fields in East Al-Fayyum, Egypt. Captured during peak autumn dry-down.
            </p>
          </div>

          {/* Main Editorial Text Column */}
          <div className="max-w-2xl mx-auto px-page-margin-mobile md:px-0 space-y-12">
            <p className="font-body-lg text-lg text-deep-bark leading-relaxed first-letter:text-6xl first-letter:font-headline-md first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:text-raw-sienna">
              Every drop of our pure cold-pressed Nigella Sativa oil carries the thermal intelligence of centuries ancient desert soil. We believe that to truly restore skin and vitality, a botanical must be allowed to perfect its biological shield in its native ecosystem. That is why We do not synthesize greenhouse solutions. Instead, we follow the crop into the wild sands.
            </p>

            {articleParagraphs.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="font-headline-md text-2xl md:text-3xl text-deep-bark italic font-medium">
                  {section.subtitle}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}

            {/* Inner Callout Card */}
            <div className="border-l-4 border-raw-sienna bg-surface-container-low p-8 mt-12 space-y-3">
              <span className="material-symbols-outlined text-raw-sienna select-none" style={{ fontVariationSettings: "'FILL' 1, 'wght' 200" }}>
                format_quote
              </span>
              <p className="font-headline-md text-xl md:text-2xl text-deep-bark italic leading-relaxed">
                "The Egyptian black seed does not compromise. Facing the elements directly, it encodes absolute resilience into its deep amber lipids. Our responsibility is purely preservative."
              </p>
              <cite className="font-label-caps text-xs text-raw-sienna uppercase tracking-widest font-semibold block not-italic">
                — AMARA YAB, BOTANICAL RESEARCH DIRECTORY
              </cite>
            </div>
            
            {/* Conclusion & Back Link */}
            <div className="pt-12 border-t border-raw-sienna/10 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="font-label-caps text-xs text-raw-sienna uppercase tracking-wider font-semibold">Share this Article</span>
                <p className="font-body-md text-xs text-on-surface-variant">Spread mindful beauty routines</p>
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Article link copied to clipboard!");
                  }}
                  className="font-label-caps text-[11px] text-deep-bark hover:text-raw-sienna px-4 py-2 border border-raw-sienna/20 hover:border-raw-sienna tracking-widest font-semibold transition-colors uppercase cursor-pointer"
                >
                  Copy Link
                </button>
                <Link 
                  to="/journal"
                  className="font-label-caps text-[11px] text-canvas bg-raw-sienna hover:bg-deep-bark px-5 py-2 tracking-widest font-semibold transition-colors uppercase cursor-pointer shadow-sm"
                >
                  All Entries
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </main>

      <Footer />
    </div>
  );
}
