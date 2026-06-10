import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle } from 'lucide-react';

interface OrderFormData {
  email: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
}

interface CheckoutDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  itemCount: number;
  total: number;
  formData: OrderFormData;
  onFormChange: (field: keyof OrderFormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  checkoutComplete: boolean;
  whatsappUrl: string;
  onCompleteClose: () => void;
}

const inputClass = "w-full bg-transparent border-b border-raw-sienna/20 py-2 font-body-md focus:outline-none focus:border-raw-sienna transition-colors text-deep-bark text-sm placeholder:text-on-surface-variant/30 rounded-none focus:ring-0";
const labelClass = "font-label-caps text-[9px] text-raw-sienna tracking-wider block mb-1 font-semibold uppercase";

export default function CheckoutDrawer({ isOpen, onClose, itemCount, total, formData, onFormChange, onSubmit, checkoutComplete, whatsappUrl, onCompleteClose }: CheckoutDrawerProps) {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-obsidian/75 backdrop-blur-md z-[100] flex items-center justify-end p-0"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="bg-canvas border-l border-raw-sienna/10 max-w-lg w-full h-full p-8 md:p-12 overflow-y-auto relative flex flex-col justify-between"
            >
              <div>
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 text-deep-bark hover:text-raw-sienna transition-colors focus:outline-none cursor-pointer p-1"
                  aria-label="Close checkout"
                >
                  <X size={24} />
                </button>

                <div className="space-y-6 mb-8 pt-4">
                  <div>
                    <span className="font-label-caps text-xs text-raw-sienna uppercase tracking-widest font-semibold block">Checkout Ritual</span>
                    <h3 className="font-headline-md text-3xl text-deep-bark italic font-medium mt-1">Complete Order</h3>
                  </div>

                  <div className="bg-surface-container/60 p-4 font-body-md text-sm text-deep-bark flex justify-between items-center">
                    <span>Vessel summary • {itemCount} items</span>
                    <span className="font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>

                <form onSubmit={onSubmit} className="space-y-5">
                  <div>
                    <label className={labelClass}>FULL NAME</label>
                    <input required type="text" value={formData.name} onChange={(e) => onFormChange('name', e.target.value)} placeholder="Amara Thorne" className={inputClass} />
                  </div>

                  <div>
                    <label className={labelClass}>PHONE / WHATSAPP NUMBER</label>
                    <input required type="tel" value={formData.phone} onChange={(e) => onFormChange('phone', e.target.value)} placeholder="+251 9XX XXX XXX" className={inputClass} />
                  </div>

                  <div>
                    <label className={labelClass}>EMAIL ADDRESS</label>
                    <input type="email" value={formData.email} onChange={(e) => onFormChange('email', e.target.value)} placeholder="your@email.com" className={inputClass} />
                  </div>

                  <div>
                    <label className={labelClass}>DELIVERY ADDRESS</label>
                    <input required type="text" value={formData.address} onChange={(e) => onFormChange('address', e.target.value)} placeholder="Street, neighbourhood" className={inputClass} />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>CITY / SUBCITY</label>
                      <input required type="text" value={formData.city} onChange={(e) => onFormChange('city', e.target.value)} placeholder="Addis Ababa" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>WOREDA / ZIP</label>
                      <input type="text" value={formData.zip} onChange={(e) => onFormChange('zip', e.target.value)} placeholder="Woreda 03" className={inputClass} />
                    </div>
                  </div>

                  {/* FUTURE_PAYMENT: replace button below with Stripe gateway
                  <div className="space-y-4 pt-4">
                    <h4>Secured Gateway</h4>
                    cardNumber / expiry / cvv inputs
                  </div>
                  */}

                  <button
                    type="submit"
                    className="w-full bg-[#25D366] text-white py-4 font-label-caps text-label-caps tracking-widest hover:bg-[#1ebe5d] transition-all duration-300 uppercase font-bold text-center mt-4 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} strokeWidth={2.5} />
                    SEND ORDER ON WHATSAPP • ${total.toFixed(2)}
                  </button>
                </form>
              </div>

              <div className="pt-8 text-center">
                <p className="font-label-sm text-[10px] text-on-surface-variant/60 uppercase tracking-widest leading-relaxed">
                  Thank you for embracing patient, slow beauty.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {checkoutComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-obsidian/95 backdrop-blur-md z-[110] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95 }}
              className="bg-canvas border border-raw-sienna/25 max-w-sm w-full p-8 md:p-10 text-center relative golden-shadow"
            >
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mx-auto">
                  <MessageCircle size={28} strokeWidth={1.5} />
                </div>

                <div className="space-y-1">
                  <span className="font-label-caps text-xs text-raw-sienna uppercase tracking-widest font-semibold block">WhatsApp Opened</span>
                  <h3 className="font-headline-md text-2xl text-deep-bark italic font-medium">Your order is ready to send</h3>
                </div>

                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Your order details have been pre-filled in WhatsApp. Just hit send — we will confirm and arrange delivery from there.
                </p>

                <div className="space-y-3 pt-1">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3.5 font-label-caps text-xs tracking-widest uppercase font-semibold hover:bg-[#1ebe5d] transition-colors cursor-pointer select-none"
                  >
                    <MessageCircle size={14} strokeWidth={2.5} />
                    OPEN WHATSAPP AGAIN
                  </a>

                  <button
                    onClick={onCompleteClose}
                    className="w-full font-label-caps text-[10px] text-on-surface-variant/50 uppercase tracking-widest hover:text-deep-bark transition-colors cursor-pointer py-2"
                  >
                    Back to store
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
