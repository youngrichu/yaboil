import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, Mail, MapPin, Sparkles, Sliders, Calendar, Package, ArrowRight,
  LogOut, Edit3, CheckCircle2, RefreshCw, Eye, Heart, Camera, Check, ShieldAlert
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  skinFocus: string;
  hairAlignment: string;
}

interface OrderHistory {
  id: string;
  date: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  status: 'Under Extraction' | 'Hand-Poured & Dispatched' | 'Completed';
  tracking?: string;
}

interface SubscriptionRitual {
  id: string;
  name: string;
  frequency: string;
  nextExtraction: string;
  price: number;
  status: 'Active' | 'Paused';
}

export default function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [errorMessage, setErrorMessage] = useState('');
  
  // Auth Form State
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [skinFocusInput, setSkinFocusInput] = useState('Nourishing & Radiance');
  const [hairAlignmentInput, setHairAlignmentInput] = useState('Scalp Restoration');

  // Active Dashboard Tabs
  const [activeTab, setActiveTab] = useState<'rituals' | 'history' | 'profile'>('rituals');
  
  // Profile Data
  const [profile, setProfile] = useState<ProfileData>({
    name: 'Amara Thorne',
    email: 'amara.thorne@essence.com',
    phone: '+1 (555) 439-0932',
    address: '14 Heritage Sand Road',
    city: 'Al-Fayyum',
    zip: '12450',
    skinFocus: 'Nourishing & Radiance',
    hairAlignment: 'Scalp Restoration'
  });

  // Edit Mode State
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editedProfile, setEditedProfile] = useState<ProfileData>({ ...profile });
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Subscriptions & History Simulation
  const [subscriptions, setSubscriptions] = useState<SubscriptionRitual[]>([
    {
      id: 'sub-01',
      name: 'Verdant Essence Oil Auto-Harvest',
      frequency: 'Every 30 Days',
      nextExtraction: 'June 28, 2026',
      price: 84.00,
      status: 'Active'
    },
    {
      id: 'sub-02',
      name: 'Black Seed Oil (120ml) Restock Plan',
      frequency: 'Every 60 Days',
      nextExtraction: 'July 14, 2026',
      price: 54.00,
      status: 'Active'
    }
  ]);

  const [orders, setOrders] = useState<OrderHistory[]>([
    {
      id: 'YAB-10903',
      date: 'June 02, 2026',
      items: [
        { name: 'Ancient Resin Cleanser', quantity: 1, price: 62.00 },
        { name: 'Verdant Essence Oil', quantity: 1, price: 84.00 }
      ],
      total: 146.00,
      status: 'Under Extraction'
    },
    {
      id: 'YAB-09852',
      date: 'April 12, 2026',
      items: [
        { name: 'Pumpkin Seed Oil - Styria Blend', quantity: 1, price: 42.00 }
      ],
      total: 42.00,
      status: 'Completed'
    }
  ]);

  // Load and check simulated state
  useEffect(() => {
    const rawUser = localStorage.getItem('yaboil_user');
    if (rawUser) {
      try {
        const parsed = JSON.parse(rawUser);
        setProfile(parsed);
        setEditedProfile(parsed);
        setIsLoggedIn(true);
      } catch (e) {}
    }

    const rawSubs = localStorage.getItem('yaboil_subs');
    if (rawSubs) {
      try {
        setSubscriptions(JSON.parse(rawSubs));
      } catch (e) {}
    }

    const rawOrders = localStorage.getItem('yaboil_orders');
    if (rawOrders) {
      try {
        setOrders(JSON.parse(rawOrders));
      } catch (e) {}
    }
  }, []);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (authMode === 'login') {
      if (!emailInput || !passwordInput) {
        setErrorMessage('All ritual parameters are required.');
        return;
      }
      
      // Simulate successful login
      const mockProfile: ProfileData = {
        name: nameInput || 'Elias Thorne',
        email: emailInput,
        phone: '+1 (555) 902-8812',
        address: '144 Emerald Plaza Apt D',
        city: 'Alexandria',
        zip: '21500',
        skinFocus: skinFocusInput,
        hairAlignment: hairAlignmentInput
      };
      
      localStorage.setItem('yaboil_user', JSON.stringify(mockProfile));
      setProfile(mockProfile);
      setEditedProfile(mockProfile);
      setIsLoggedIn(true);
    } else {
      if (!emailInput || !passwordInput || !nameInput) {
        setErrorMessage('Kindly complete all sacred credentials.');
        return;
      }

      const mockProfile: ProfileData = {
        name: nameInput,
        email: emailInput,
        phone: '+1 (555) 000-0000',
        address: '',
        city: '',
        zip: '',
        skinFocus: skinFocusInput,
        hairAlignment: hairAlignmentInput
      };

      localStorage.setItem('yaboil_user', JSON.stringify(mockProfile));
      setProfile(mockProfile);
      setEditedProfile(mockProfile);
      setIsLoggedIn(true);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('yaboil_user');
    setIsLoggedIn(false);
    setEmailInput('');
    setPasswordInput('');
    setNameInput('');
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(editedProfile);
    localStorage.setItem('yaboil_user', JSON.stringify(editedProfile));
    setIsEditingProfile(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const toggleSubscription = (id: string) => {
    const nextSubs = subscriptions.map(sub => {
      if (sub.id === id) {
        const nextStatus = sub.status === 'Active' ? 'Paused' : 'Active';
        return { ...sub, status: nextStatus as 'Active' | 'Paused' };
      }
      return sub;
    });
    setSubscriptions(nextSubs);
    localStorage.setItem('yaboil_subs', JSON.stringify(nextSubs));
  };

  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="bg-canvas text-on-surface antialiased selection:bg-raw-sienna selection:text-canvas min-h-screen flex flex-col pt-20">
      <main className="flex-grow max-w-[1440px] w-full mx-auto px-page-margin-mobile md:px-page-margin-desktop py-12">
        <motion.div 
          variants={pageTransition}
          initial="initial"
          animate="animate"
          className="space-y-12"
        >
          {/* Header */}
          <header className="border-b border-raw-sienna/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="font-label-caps text-xs text-raw-sienna tracking-[0.2em] font-semibold block uppercase">Client Portal</span>
              <h1 className="font-headline-md text-4xl md:text-5xl text-obsidian font-semibold italic mt-1">Your Sacred Space</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 leading-relaxed">
                Review active botanical harvests, customized routines, and skin integration files.
              </p>
            </div>
            {isLoggedIn && (
              <button 
                onClick={handleSignOut}
                className="flex items-center gap-2 bg-raw-sienna/10 hover:bg-red-50 text-deep-bark hover:text-red-700 hover:border-red-200 border border-raw-sienna/15 px-5 py-2.5 font-label-caps text-xs tracking-widest uppercase transition-all duration-300 font-semibold cursor-pointer select-none"
              >
                <LogOut size={14} />
                Sign Out / Exit
              </button>
            )}
          </header>

          <AnimatePresence mode="wait">
            {!isLoggedIn ? (
              /* ================== SIGN IN / UP SCENE ================== */
              <motion.div 
                key="auth-scene"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full mx-auto bg-alabaster border border-raw-sienna/10 py-12 px-8 md:px-10 golden-shadow relative overflow-hidden"
              >
                {/* Vintage corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-raw-sienna/30"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-raw-sienna/30"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-raw-sienna/30"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-raw-sienna/30"></div>

                <div className="text-center space-y-3 mb-10">
                  <span className="font-label-caps text-[10px] text-raw-sienna tracking-widest uppercase font-bold block">Ritual Access</span>
                  <h2 className="font-headline-md text-3xl text-deep-bark italic font-medium">
                    {authMode === 'login' ? 'Vessel Authentication' : 'Establish Alignment Profile'}
                  </h2>
                </div>

                <form onSubmit={handleAuthSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="bg-red-50 border border-red-200 text-red-900 text-xs p-3 font-body-md tracking-wide flex items-center gap-2">
                      <ShieldAlert size={14} className="flex-shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  {authMode === 'signup' && (
                    <div>
                      <label className="font-label-caps text-[10px] text-raw-sienna tracking-wider block mb-1 font-semibold uppercase">SACRED NAME</label>
                      <input 
                        required
                        type="text" 
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        placeholder="Amara Thorne" 
                        className="w-full bg-transparent border-b border-raw-sienna/20 py-2.5 font-body-md focus:outline-none focus:border-raw-sienna transition-colors text-deep-bark text-sm placeholder:text-on-surface-variant/30 rounded-none focus:ring-0"
                      />
                    </div>
                  )}

                  <div>
                    <label className="font-label-caps text-[10px] text-raw-sienna tracking-wider block mb-1 font-semibold uppercase">EMAIL ADDRESS</label>
                    <input 
                      required
                      type="email" 
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="amara@essence.com" 
                      className="w-full bg-transparent border-b border-raw-sienna/20 py-2.5 font-body-md focus:outline-none focus:border-raw-sienna transition-colors text-deep-bark text-sm placeholder:text-on-surface-variant/30 rounded-none focus:ring-0"
                    />
                  </div>

                  <div>
                    <label className="font-label-caps text-[10px] text-raw-sienna tracking-wider block mb-1 font-semibold uppercase">PASSWORD KEY</label>
                    <input 
                      required
                      type="password" 
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      placeholder="••••••••••••" 
                      className="w-full bg-transparent border-b border-raw-sienna/20 py-2.5 font-body-md focus:outline-none focus:border-raw-sienna transition-colors text-deep-bark text-sm placeholder:text-on-surface-variant/30 rounded-none focus:ring-0"
                    />
                  </div>

                  {authMode === 'signup' && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="font-label-caps text-[9px] text-raw-sienna tracking-wider block mb-1 font-semibold uppercase">SKIN FOCUS</label>
                        <select 
                          value={skinFocusInput}
                          onChange={(e) => setSkinFocusInput(e.target.value)}
                          className="w-full bg-transparent border-b border-raw-sienna/20 py-2.5 font-body-md focus:outline-none focus:border-raw-sienna transition-colors text-deep-bark text-xs rounded-none focus:ring-0"
                        >
                          <option value="Nourishing & Radiance">Nourishing & Radiance</option>
                          <option value="Soothing Calm">Soothing Calm</option>
                          <option value="Deep Cellular Repair">Deep Cellular Repair</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-label-caps text-[9px] text-raw-sienna tracking-wider block mb-1 font-semibold uppercase">HAIR TYPE</label>
                        <select 
                          value={hairAlignmentInput}
                          onChange={(e) => setHairAlignmentInput(e.target.value)}
                          className="w-full bg-transparent border-b border-raw-sienna/20 py-2.5 font-body-md focus:outline-none focus:border-raw-sienna transition-colors text-deep-bark text-xs rounded-none focus:ring-0"
                        >
                          <option value="Scalp Restoration">Scalp Restoration</option>
                          <option value="Follicle Strength">Follicle Strength</option>
                          <option value="Moisture Alignment">Moisture Alignment</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <button 
                    type="submit"
                    className="w-full bg-raw-sienna text-canvas py-4 font-label-caps text-label-caps tracking-widest hover:bg-deep-bark transition-all duration-300 uppercase font-bold text-center mt-4 cursor-pointer"
                  >
                    {authMode === 'login' ? 'INITIALIZE PORTAL' : 'ESTABLISH LINK'}
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-raw-sienna/10 text-center">
                  <button 
                    onClick={() => {
                      setAuthMode(authMode === 'login' ? 'signup' : 'login');
                      setErrorMessage('');
                    }}
                    className="font-label-caps text-xs text-raw-sienna hover:text-deep-bark transition-colors tracking-widest uppercase font-semibold cursor-pointer"
                  >
                    {authMode === 'login' ? "New here? Create alignment profile" : 'Have a customized profile? Sign In'}
                  </button>
                </div>
              </motion.div>
            ) : (
              /* ================== SIGNED IN DASHBOARD SCENE ================== */
              <motion.div 
                key="dashboard-scene"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
              >
                {/* Left Side: Dynamic Tabs Navigation & Profile Summary Card */}
                <div className="lg:col-span-4 space-y-8">
                  {/* Summary card */}
                  <div className="bg-alabaster border border-raw-sienna/10 p-8 golden-shadow relative">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-raw-sienna/30"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-raw-sienna/30"></div>
                    
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full border border-raw-sienna/20 bg-canvas flex items-center justify-center text-raw-sienna select-none relative overflow-hidden">
                          <User size={40} strokeWidth={1} />
                        </div>
                        <span className="absolute bottom-0 right-0 bg-raw-sienna text-canvas p-1.5 rounded-full shadow-md">
                          <Sparkles size={12} />
                        </span>
                      </div>

                      <div>
                        <h3 className="font-headline-md text-2xl text-deep-bark italic font-medium leading-none">{profile.name}</h3>
                        <p className="font-mono text-[10px] text-raw-sienna mt-2 select-none tracking-widest uppercase font-bold">ESSENCE MEMBER CLIENT</p>
                      </div>

                      {/* Micro-Badges for routine goals */}
                      <div className="w-full pt-4 border-t border-raw-sienna/10 grid grid-cols-2 gap-2 text-center text-[10px] font-mono">
                        <div className="bg-canvas p-2 border border-raw-sienna/5">
                          <span className="text-on-surface-variant/60 block uppercase text-[8px] leading-tight mb-0.5">SKIN GOAL</span>
                          <strong className="text-deep-bark/85 truncate block">{profile.skinFocus}</strong>
                        </div>
                        <div className="bg-canvas p-2 border border-raw-sienna/5">
                          <span className="text-on-surface-variant/60 block uppercase text-[8px] leading-tight mb-0.5">HAIR GOAL</span>
                          <strong className="text-deep-bark/85 truncate block">{profile.hairAlignment}</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab controllers */}
                  <div className="flex flex-col border border-raw-sienna/10 overflow-hidden divide-y divide-raw-sienna/10 bg-canvas">
                    <button 
                      onClick={() => setActiveTab('rituals')}
                      className={`flex items-center gap-4 px-6 py-4.5 font-label-caps text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                        activeTab === 'rituals' ? 'bg-deep-bark text-canvas' : 'text-on-surface-variant hover:bg-alabaster'
                      }`}
                    >
                      <RefreshCw size={14} />
                      Active Auto-Refills ({subscriptions.length})
                    </button>
                    <button 
                      onClick={() => setActiveTab('history')}
                      className={`flex items-center gap-4 px-6 py-4.5 font-label-caps text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                        activeTab === 'history' ? 'bg-deep-bark text-canvas' : 'text-on-surface-variant hover:bg-alabaster'
                      }`}
                    >
                      <Package size={14} />
                      Botanical Extraction Log ({orders.length})
                    </button>
                    <button 
                      onClick={() => setActiveTab('profile')}
                      className={`flex items-center gap-4 px-6 py-4.5 font-label-caps text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                        activeTab === 'profile' ? 'bg-deep-bark text-canvas' : 'text-on-surface-variant hover:bg-alabaster'
                      }`}
                    >
                      <Sliders size={14} />
                      Personal Specifications
                    </button>
                  </div>
                </div>

                {/* Right Side: Tab content detail panels with rich formatting */}
                <div className="lg:col-span-8 w-full">
                  <AnimatePresence mode="wait">
                    
                    {/* -- TAB 1: RITUALS (AUTO REFILLS / MEMBERSHIPS) -- */}
                    {activeTab === 'rituals' && (
                      <motion.div 
                        key="tab-rituals"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="border-b border-raw-sienna/10 pb-4">
                          <h3 className="font-headline-md text-2xl text-deep-bark font-medium italic">Active Refills</h3>
                          <p className="font-body-md text-sm text-on-surface-variant mt-1">
                            Your recurrent botanical extractions, scheduled to keep your regimen aligned without interruption.
                          </p>
                        </div>

                        <div className="space-y-4">
                          {subscriptions.map((sub) => (
                            <div 
                              key={sub.id}
                              className={`border p-6 transition-all duration-300 relative ${
                                sub.status === 'Active' 
                                  ? 'border-raw-sienna/20 bg-alabaster/60 hover:bg-alabaster shadow-sm' 
                                  : 'border-raw-sienna/10 bg-canvas opacity-70'
                              }`}
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                  <div className="flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${sub.status === 'Active' ? 'bg-green-600' : 'bg-amber-500'}`}></span>
                                    <h4 className="font-headline-md text-xl text-deep-bark font-medium">{sub.name}</h4>
                                  </div>
                                  <div className="flex items-center gap-4 text-xs font-mono text-on-surface-variant/80">
                                    <span>Schedule: {sub.frequency}</span>
                                    <span>•</span>
                                    <span>Next Harvest: {sub.nextExtraction}</span>
                                  </div>
                                </div>

                                <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-0 pt-4 sm:pt-0 border-raw-sienna/10">
                                  <span className="font-headline-md text-xl font-bold italic text-deep-bark">${sub.price.toFixed(2)}</span>
                                  
                                  <button 
                                    onClick={() => toggleSubscription(sub.id)}
                                    className={`px-4 py-2 font-label-caps text-[10px] tracking-wider uppercase font-bold transition-all duration-300 cursor-pointer select-none border ${
                                      sub.status === 'Active' 
                                        ? 'border-raw-sienna text-raw-sienna bg-transparent hover:bg-raw-sienna hover:text-canvas' 
                                        : 'bg-raw-sienna border-raw-sienna text-canvas hover:bg-deep-bark'
                                    }`}
                                  >
                                    {sub.status === 'Active' ? 'PAUSE HARVEST' : 'RESUME RITUAL'}
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Aesthetic membership note */}
                        <div className="bg-surface-container-low/50 border border-raw-sienna/10 p-6 flex items-start gap-4">
                          <Sparkles className="text-raw-sienna h-5 w-5 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                          <div className="space-y-1">
                            <span className="font-label-caps text-[10px] text-raw-sienna tracking-widest font-bold block uppercase">Custom Synthesis Note</span>
                            <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                              Need to adjust auto-refill schedules or combine botanical items for a customized delivery? Reach out to our distillers at <strong>harvest@yaboil.com</strong> and reference your custom Member ID.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* -- TAB 2: HISTORY (BOTANICAL ARCHIVES) -- */}
                    {activeTab === 'history' && (
                      <motion.div 
                        key="tab-history"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="border-b border-raw-sienna/10 pb-4">
                          <h3 className="font-headline-md text-2xl text-deep-bark font-medium italic">Botanical Extraction Ledger</h3>
                          <p className="font-body-md text-sm text-on-surface-variant mt-1">
                            A historical record of your hand-poured botanical orders, including active cold-press extractions in progress.
                          </p>
                        </div>

                        <div className="space-y-6">
                          {orders.map((order) => (
                            <div key={order.id} className="border border-raw-sienna/10 bg-canvas p-6 space-y-4">
                              {/* Order metadata bar */}
                              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-raw-sienna/5 pb-3">
                                <div className="space-y-0.5">
                                  <span className="font-label-caps text-xs text-raw-sienna font-bold tracking-wider">{order.id}</span>
                                  <p className="font-mono text-[10px] text-on-surface-variant/60">HARVEST RECORDED: {order.date}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                  <span className={`w-2 h-2 rounded-full ${
                                    order.status === 'Completed' ? 'bg-green-600' : 'bg-raw-sienna animate-pulse'
                                  }`}></span>
                                  <span className="font-label-caps text-[10px] tracking-wider uppercase font-bold text-deep-bark bg-raw-sienna/10 px-2.5 py-1">
                                    {order.status}
                                  </span>
                                </div>
                              </div>

                              {/* Order items stack */}
                              <div className="divide-y divide-raw-sienna/5">
                                {order.items.map((it, idx) => (
                                  <div key={idx} className="py-2.5 flex justify-between font-body-md text-sm text-on-surface">
                                    <span>{it.name} <em className="text-on-surface-variant/60 font-mono text-xs">x{it.quantity}</em></span>
                                    <span className="font-medium text-deep-bark">${(it.price * it.quantity).toFixed(2)}</span>
                                  </div>
                                ))}
                              </div>

                              {/* Order total */}
                              <div className="pt-3 border-t border-raw-sienna/5 flex justify-between items-baseline">
                                <span className="font-label-caps text-[10px] text-on-surface-variant font-bold tracking-wider uppercase">Vessel Total</span>
                                <span className="font-headline-md text-xl font-bold italic text-deep-bark">${order.total.toFixed(2)}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* -- TAB 3: PROFILE / PERSONAL ALIGNMENT CONFIG -- */}
                    {activeTab === 'profile' && (
                      <motion.div 
                        key="tab-profile"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="border-b border-raw-sienna/10 pb-4 flex justify-between items-center">
                          <div>
                            <h3 className="font-headline-md text-2xl text-deep-bark font-medium italic">Alignment Profile Specifications</h3>
                            <p className="font-body-md text-sm text-on-surface-variant mt-1">
                              Verify your cellular focus values and your physical dispatch coordinates.
                            </p>
                          </div>
                          {!isEditingProfile && (
                            <button 
                              onClick={() => {
                                setEditedProfile({ ...profile });
                                setIsEditingProfile(true);
                              }}
                              className="flex items-center gap-1.5 border border-raw-sienna/20 px-3.5 py-2 font-label-caps text-[10px] tracking-widest uppercase transition-colors hover:bg-raw-sienna/5 font-semibold text-raw-sienna cursor-pointer select-none"
                            >
                              <Edit3 size={12} />
                              Edit specs
                            </button>
                          )}
                        </div>

                        {saveSuccess && (
                          <div className="bg-green-50 border border-green-200 text-green-800 text-xs p-3.5 flex items-center gap-2 font-body-md">
                            <CheckCircle2 size={14} />
                            Your cosmological details have been successfully preserved.
                          </div>
                        )}

                        {isEditingProfile ? (
                          <form onSubmit={handleSaveProfile} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="font-label-caps text-[10px] text-raw-sienna tracking-wider block mb-1 font-semibold uppercase">SECULAR CLIENT NAME</label>
                                <input 
                                  required
                                  type="text" 
                                  value={editedProfile.name}
                                  onChange={(e) => setEditedProfile({...editedProfile, name: e.target.value})}
                                  className="w-full bg-transparent border-b border-raw-sienna/20 py-2.5 font-body-md focus:outline-none focus:border-raw-sienna transition-colors text-deep-bark text-sm rounded-none focus:ring-0"
                                />
                              </div>

                              <div>
                                <label className="font-label-caps text-[10px] text-raw-sienna tracking-wider block mb-1 font-semibold uppercase">ORGANIC EMAIL</label>
                                <input 
                                  required
                                  type="email" 
                                  value={editedProfile.email}
                                  onChange={(e) => setEditedProfile({...editedProfile, email: e.target.value})}
                                  className="w-full bg-transparent border-b border-raw-sienna/20 py-2.5 font-body-md focus:outline-none focus:border-raw-sienna transition-colors text-deep-bark text-sm rounded-none focus:ring-0"
                                />
                              </div>

                              <div>
                                <label className="font-label-caps text-[10px] text-raw-sienna tracking-wider block mb-1 font-semibold uppercase">PHONE DIRECTORY</label>
                                <input 
                                  type="text" 
                                  value={editedProfile.phone}
                                  onChange={(e) => setEditedProfile({...editedProfile, phone: e.target.value})}
                                  className="w-full bg-transparent border-b border-raw-sienna/20 py-2.5 font-body-md focus:outline-none focus:border-raw-sienna transition-colors text-deep-bark text-sm rounded-none focus:ring-0"
                                />
                              </div>

                              <div>
                                <label className="font-label-caps text-[10px] text-raw-sienna tracking-wider block mb-1 font-semibold uppercase">STREET LOCATION ADDRESS</label>
                                <input 
                                  type="text" 
                                  value={editedProfile.address}
                                  onChange={(e) => setEditedProfile({...editedProfile, address: e.target.value})}
                                  className="w-full bg-transparent border-b border-raw-sienna/20 py-2.5 font-body-md focus:outline-none focus:border-raw-sienna transition-colors text-deep-bark text-sm rounded-none focus:ring-0"
                                />
                              </div>

                              <div>
                                <label className="font-label-caps text-[10px] text-raw-sienna tracking-wider block mb-1 font-semibold uppercase">HARVEST CITY</label>
                                <input 
                                  type="text" 
                                  value={editedProfile.city}
                                  onChange={(e) => setEditedProfile({...editedProfile, city: e.target.value})}
                                  className="w-full bg-transparent border-b border-raw-sienna/20 py-2.5 font-body-md focus:outline-none focus:border-raw-sienna transition-colors text-deep-bark text-sm rounded-none focus:ring-0"
                                />
                              </div>

                              <div>
                                <label className="font-label-caps text-[10px] text-raw-sienna tracking-wider block mb-1 font-semibold uppercase">POSTAL ZIP CODE</label>
                                <input 
                                  type="text" 
                                  value={editedProfile.zip}
                                  onChange={(e) => setEditedProfile({...editedProfile, zip: e.target.value})}
                                  className="w-full bg-transparent border-b border-raw-sienna/20 py-2.5 font-body-md focus:outline-none focus:border-raw-sienna transition-colors text-deep-bark text-sm rounded-none focus:ring-0"
                                />
                              </div>

                              <div>
                                <label className="font-label-caps text-[10px] text-raw-sienna tracking-wider block mb-1 font-semibold uppercase">SKIN INTEGRATION ALIGNMENT</label>
                                <select 
                                  value={editedProfile.skinFocus}
                                  onChange={(e) => setEditedProfile({...editedProfile, skinFocus: e.target.value})}
                                  className="w-full bg-transparent border-b border-raw-sienna/20 py-2.5 font-body-md focus:outline-none focus:border-raw-sienna transition-colors text-deep-bark text-xs rounded-none focus:ring-0 cursor-pointer"
                                >
                                  <option value="Nourishing & Radiance">Nourishing & Radiance</option>
                                  <option value="Soothing Calm">Soothing Calm</option>
                                  <option value="Deep Cellular Repair">Deep Cellular Repair</option>
                                </select>
                              </div>

                              <div>
                                <label className="font-label-caps text-[10px] text-raw-sienna tracking-wider block mb-1 font-semibold uppercase">HAIR CELL STRUCTURE ALIGNMENT</label>
                                <select 
                                  value={editedProfile.hairAlignment}
                                  onChange={(e) => setEditedProfile({...editedProfile, hairAlignment: e.target.value})}
                                  className="w-full bg-transparent border-b border-raw-sienna/20 py-2.5 font-body-md focus:outline-none focus:border-raw-sienna transition-colors text-deep-bark text-xs rounded-none focus:ring-0 cursor-pointer"
                                >
                                  <option value="Scalp Restoration">Scalp Restoration</option>
                                  <option value="Follicle Strength">Follicle Strength</option>
                                  <option value="Moisture Alignment">Moisture Alignment</option>
                                </select>
                              </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                              <button 
                                type="submit"
                                className="bg-raw-sienna text-canvas px-6 py-3 font-label-caps text-xs tracking-widest hover:bg-deep-bark transition-colors uppercase font-bold cursor-pointer select-none"
                              >
                                SAVE REVISIONS
                              </button>
                              <button 
                                type="button"
                                onClick={() => setIsEditingProfile(false)}
                                className="border border-raw-sienna/20 px-6 py-3 font-label-caps text-xs tracking-widest hover:bg-alabaster transition-colors uppercase font-bold text-on-surface-variant cursor-pointer select-none"
                              >
                                CANCEL
                              </button>
                            </div>
                          </form>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                            {/* Visual metadata block */}
                            <div className="space-y-4">
                              <h4 className="font-label-caps text-xs uppercase tracking-widest font-bold text-deep-bark border-b border-raw-sienna/10 pb-2 flex items-center gap-2">
                                <Sparkles size={14} className="text-raw-sienna" />
                                1. Personal Specifications
                              </h4>
                              <div className="space-y-3 font-body-md text-sm text-on-surface-variant/90">
                                <div>
                                  <span className="text-[10px] font-mono tracking-wider text-raw-sienna uppercase block">MEMBER ID CLASSIFICATION</span>
                                  <strong className="text-deep-bark text-base font-semibold italic">AM-T-0290</strong>
                                </div>
                                <div>
                                  <span className="text-[10px] font-mono tracking-wider text-raw-sienna uppercase block">CLIENT CONTACT</span>
                                  <strong className="text-deep-bark block">{profile.phone || 'Not recorded'}</strong>
                                </div>
                                <div>
                                  <span className="text-[10px] font-mono tracking-wider text-raw-sienna uppercase block">SECURE EMAIL RECIPIENT</span>
                                  <strong className="text-deep-bark block">{profile.email}</strong>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h4 className="font-label-caps text-xs uppercase tracking-widest font-bold text-deep-bark border-b border-raw-sienna/10 pb-2 flex items-center gap-2">
                                <MapPin size={14} className="text-raw-sienna" />
                                2. Default Coordinates
                              </h4>
                              <div className="space-y-3 font-body-md text-sm text-on-surface-variant/90">
                                {profile.address ? (
                                  <div>
                                    <span className="text-[10px] font-mono tracking-wider text-raw-sienna uppercase block">DISPATCH STREET ADDRESS</span>
                                    <strong className="text-deep-bark block leading-relaxed">{profile.address}</strong>
                                    <strong className="text-deep-bark block">{profile.city}, {profile.zip}</strong>
                                  </div>
                                ) : (
                                  <p className="italic text-on-surface-variant/50 text-xs">
                                    No dispatch coordinates established. Use 'Edit Specs' button above.
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
