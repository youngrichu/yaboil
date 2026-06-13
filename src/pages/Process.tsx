import React from "react";
import { motion } from "motion/react";
import Footer from "../components/Footer";
import { IMAGES } from "../config/images";

interface Step {
  number: string;
  label: string;
  title: string;
  body: string;
  icon: string;
  iconLabel: string;
  image: string;
  imageAlt: string;
  illustration: string;
  illustrationPos: string;
  illustrationMask: string;
  reverse?: boolean;
}

const steps: Step[] = [
  {
    number: "01",
    label: "The Harvest",
    title: "Selecting the Raw Elements",
    body: "Our process begins at peak vitality. Botanicals are hand-selected during the late afternoon, ensuring optimal essential oil concentration. We prioritize sustainable foraging, working in harmony with the natural rhythms of the earth.",
    icon: "grass",
    iconLabel: "Organic Matter",
    image: IMAGES.rosemary,
    imageAlt: "Harvesting Botanicals",
    illustration: IMAGES.herbRosemary,
    illustrationPos: "bottom-0 right-0",
    illustrationMask:
      "[mask-image:radial-gradient(ellipse_at_bottom_right,black_25%,transparent_68%)]",
  },
  {
    number: "02",
    label: "Cold Press",
    title: "Patience in Extraction",
    body: "We employ a traditional cold-press methodology. By avoiding heat, we preserve the delicate lipid profiles and volatile aromatics of the raw ingredients. It is a slow, methodical yield that prioritizes quality over quantity.",
    icon: "water_drop",
    iconLabel: "Pure Yield",
    image: IMAGES.blackSeed,
    imageAlt: "Cold Pressing Process",
    illustration: IMAGES.castorIllustration,
    illustrationPos: "top-0 left-0",
    illustrationMask:
      "[mask-image:radial-gradient(ellipse_at_top_left,black_25%,transparent_68%)]",
    reverse: true,
  },
  {
    number: "03",
    label: "Bottling",
    title: "Curated Containment",
    body: "Each micro-batch is immediately decanted into UV-protective amber glass. This final step seals in the efficacy and aroma, protecting the delicate molecular structure from degradation until it reaches your hands.",
    icon: "science",
    iconLabel: "UV Protected",
    image: IMAGES.collection,
    imageAlt: "Bottling the Oil",
    illustration: IMAGES.herbRosemary,
    illustrationPos: "bottom-0 left-0",
    illustrationMask:
      "[mask-image:radial-gradient(ellipse_at_bottom_left,black_25%,transparent_68%)]",
  },
];

const imageReveal = {
  initial: { opacity: 0, scale: 0.98, y: 20 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
};

function ProcessStep({ step, key }: { step: Step; key?: React.Key }) {
  const textAnim = {
    initial: { opacity: 0, x: step.reverse ? -20 : 20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section
      className={`flex flex-col ${step.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-gutter-desktop relative overflow-hidden`}
    >
      <img
        src={step.illustration}
        aria-hidden="true"
        alt=""
        className={`absolute ${step.illustrationPos} w-[260px] h-auto opacity-[0.13] mix-blend-multiply pointer-events-none select-none hidden lg:block ${step.illustrationMask}`}
      />
      <motion.div
        {...imageReveal}
        className="w-full md:w-1/2 image-scale-container golden-shadow bg-alabaster p-2 border border-raw-sienna/10 group overflow-hidden"
      >
        <img
          alt={step.imageAlt}
          src={step.image}
          className="w-full h-[260px] md:h-[480px] object-cover transition-transform duration-1000 ease-out group-hover:scale-105 grayscale-[20%] sepia-[10%]"
        />
      </motion.div>
      <motion.div
        {...textAnim}
        className={`w-full md:w-1/2 flex flex-col justify-center space-y-6 ${step.reverse ? "md:pr-12 items-start md:items-end md:text-right" : "md:pl-12"}`}
      >
        <span className="font-label-caps text-label-caps text-raw-sienna tracking-[0.2em] font-medium block">
          {step.number}. {step.label}
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-medium">
          {step.title}
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
          {step.body}
        </p>
        <div
          className={`pt-4 border-t border-raw-sienna/10 flex items-center gap-4 ${step.reverse ? "md:flex-row-reverse w-full md:w-auto" : "w-fit"}`}
        >
          <span
            className="material-symbols-outlined text-raw-sienna select-none"
            style={{ fontVariationSettings: "'wght' 200" }}
          >
            {step.icon}
          </span>
          <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest font-medium">
            {step.iconLabel}
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default function Process() {
  return (
    <div className="bg-canvas text-on-surface antialiased selection:bg-raw-sienna selection:text-canvas min-h-screen flex flex-col pt-20">
      <main className="flex-grow pt-12 pb-section-gap px-page-margin-mobile md:px-page-margin-desktop max-w-screen-2xl mx-auto w-full">
        <div className="relative overflow-hidden">
          <img
            src={IMAGES.nigellaSativa}
            aria-hidden="true"
            alt=""
            className="absolute top-0 right-0 w-[240px] h-auto opacity-[0.13] mix-blend-multiply pointer-events-none select-none hidden lg:block [mask-image:radial-gradient(ellipse_at_top_right,black_25%,transparent_68%)]"
          />
          <img
            src={IMAGES.nigellaSativa}
            aria-hidden="true"
            alt=""
            className="absolute top-0 left-0 w-[240px] h-auto opacity-[0.13] mix-blend-multiply pointer-events-none select-none hidden lg:block [mask-image:radial-gradient(ellipse_at_top_left,black_25%,transparent_68%)]"
          />
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 text-center max-w-3xl mx-auto py-12 md:py-16 relative z-10"
          >
            <span className="font-label-caps text-label-caps text-raw-sienna tracking-[0.25em] block mb-4 uppercase">
              Our Craft Method
            </span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-obsidian mb-6 font-medium leading-none">
              Small Batch{" "}
              <span className="font-serif not-italic text-raw-sienna/40 mx-3">
                |
              </span>{" "}
              Naturally Pressed
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              A visual narrative of our methodology. We believe in the slow,
              deliberate craft of extracting botanical essence. Every drop is a
              testament to raw materials and patient hands, captured in the
              warmth of the golden hour.
            </p>
          </motion.section>
        </div>

        <div className="space-y-section-gap overflow-hidden">
          {steps.map((step) => (
            <ProcessStep key={step.number} step={step} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
