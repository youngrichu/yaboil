import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../config/images';

interface EmptyCartProps {
  message?: string;
  title?: string;
}

export default function EmptyCart({
  title = 'Your vessel is empty',
  message = 'Embark on a slow beauty journey and collect raw essences to restore your skin and hair alignment.'
}: EmptyCartProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="text-center py-20 px-6 border border-dashed border-raw-sienna/20 space-y-8 bg-surface-container-low/50 max-w-2xl mx-auto my-12 relative golden-shadow overflow-hidden"
    >
      {/* Botanical illustration framing the empty state */}
      <img src={IMAGES.castorIllustration} aria-hidden="true" alt="" className="absolute w-[140%] max-w-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.15] mix-blend-multiply pointer-events-none select-none" />

      {/* Aesthetic ambient corner lines */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-raw-sienna/30"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-raw-sienna/30"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-raw-sienna/30"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-raw-sienna/30"></div>

      <div className="relative space-y-6">
        <div className="w-20 h-20 rounded-full bg-raw-sienna/10 text-raw-sienna flex items-center justify-center mx-auto opacity-80 hover:scale-105 transition-transform duration-300">
          <ShoppingBag className="h-9 w-9" strokeWidth={1} />
        </div>

        <div className="space-y-3">
          <h3 className="font-headline-md text-3xl text-deep-bark font-medium italic">
            {title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto leading-relaxed">
            {message}
          </p>
        </div>

        <div className="pt-4">
          <Link 
            to="/lineup" 
            className="inline-flex items-center gap-3 bg-raw-sienna text-canvas px-10 py-4 font-label-caps text-label-caps tracking-widest hover:bg-deep-bark hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 uppercase font-semibold shadow-md cursor-pointer select-none"
          >
            <ArrowLeft size={14} strokeWidth={2.5} />
            Return to Lineup
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
