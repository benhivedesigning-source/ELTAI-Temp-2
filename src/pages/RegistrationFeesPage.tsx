import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, UserPlus, Info, ArrowRight, Download } from 'lucide-react';

const RegistrationFeesPage = () => {
  const [selectedPhase, setSelectedPhase] = useState<'earlybird' | 'regular' | 'onthespot'>('earlybird');
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gradientText = {
    background: 'linear-gradient(90deg, #e76366, #8355eb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const pricing = {
    c1: {
      title: "Educators, Post-doctoral Researchers, Administrators, Writers, Editors, Publishers, Policymakers, NGOs, Corporate Professionals",
      members: { earlybird: 1500, regular: 1750, onthespot: 2000 },
      nonMembers: { earlybird: 2500, regular: 2750, onthespot: 3000 }
    },
    c2: {
      title: "PhD Researchers (Full-time)",
      members: { earlybird: 1250, regular: 1500, onthespot: 1750 },
      nonMembers: { earlybird: 2500, regular: 2750, onthespot: 3000 }
    },
    c3: {
      title: "UG & PG students, B.Ed. & M.Ed. Teacher Trainees",
      members: { earlybird: 1000, regular: 1250, onthespot: 1500 },
      nonMembers: { earlybird: 2500, regular: 2750, onthespot: 3000 }
    }
  };

  return (
    <div className="bg-black min-h-screen font-sans text-white overflow-x-hidden">
      {/* BREADCRUMB */}
      <nav className="pt-24 max-w-[1800px] mx-auto px-4 lg:px-8 py-4">
        <div className="text-gray-500 text-sm font-medium flex items-center gap-2">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-zinc-700">/</span>
          <Link to="/register" className="hover:text-white transition-colors">Register</Link>
          <span className="text-zinc-700">/</span>
          <span style={gradientText}>Registration Fees</span>
        </div>
      </nav>

      {/* SECTION 1 — HERO */}
      <section className="min-h-[45vh] flex items-center justify-center bg-black text-center relative overflow-hidden">
        {/* Radial gradient glow */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[rgba(231,99,102,0.12)] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[rgba(131,85,235,0.12)] rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>
        </div>

        {/* 5 floating shapes */}
        <motion.div className="absolute top-20 left-[10%] w-24 h-24 rounded-full bg-[#e76366] opacity-5 z-0" animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-32 right-[15%] w-40 h-40 rounded-full bg-[#8355eb] opacity-5 z-0" animate={{ y: [0, -20, 0] }} transition={{ duration: 6, delay: 1, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-1/3 right-[20%] w-32 h-32 rounded-full bg-[#e76366] opacity-8 z-0" animate={{ y: [0, -20, 0] }} transition={{ duration: 7, delay: 2, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-20 left-[20%] w-56 h-56 rounded-full bg-[#8355eb] opacity-5 z-0" animate={{ y: [0, -20, 0] }} transition={{ duration: 8, delay: 0.5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-[#e76366] opacity-5 z-0" animate={{ y: [0, -20, 0] }} transition={{ duration: 5.5, delay: 1.5, repeat: Infinity, ease: "easeInOut" }} />

        {/* Centered content */}
        <div className="relative z-10 px-4">
          
          <h1 className="font-['Poppins'] font-black text-white text-5xl md:text-7xl mt-2">
            Registration <span style={gradientText}>Fees</span>
          </h1>
        </div>
      </section>

      {/* SECTION 2 — PHASE TOGGLE */}
      <section className="py-10 bg-black text-center">
        <p className="font-['Caveat'] text-lg" style={gradientText}>
          Registration Categories
        </p>
        <div className="bg-zinc-900 border border-zinc-800 rounded-full p-1.5 inline-flex gap-1 mt-6">
          {['earlybird', 'regular', 'onthespot'].map((phase) => (
            <button
              key={phase}
              onClick={() => setSelectedPhase(phase as any)}
              className={selectedPhase === phase ? 'text-white font-bold rounded-full px-6 py-2.5 transition-all duration-300' : 'text-gray-400 hover:text-white px-6 py-2.5 rounded-full cursor-pointer font-medium transition-colors'}
              style={selectedPhase === phase ? { background: 'linear-gradient(90deg, #e76366, #8355eb)' } : {}}
            >
              {phase === 'earlybird' ? 'Early-bird' : phase === 'regular' ? 'Regular' : 'On-the-spot'}
            </button>
          ))}
        </div>
      </section>

      {/* WAVE: Black to White */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block" style={{background:'#000'}}>
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 4 — NOTES */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-['Poppins'] font-black text-gray-900 text-3xl mb-8">
            Note
          </h2>

          <div className="bg-gray-50 border-l-4 border-[#e76366] rounded-r-2xl p-6 mb-5">
            <div className="flex items-center gap-2 mb-3">
              <Info size={18} color="#e76366" />
              <h3 className="font-['Poppins'] font-black text-gray-900 text-lg">
                <span style={gradientText}>*</span> ELTAI Members
              </h3>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              The registration fee for ELTAI Members includes the conference kit, lunch and refreshments, and the certificate for all four days of the conference.
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-[#8355eb] rounded-r-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Info size={18} color="#8355eb" />
              <h3 className="font-['Poppins'] font-black text-gray-900 text-lg">
                <span style={gradientText}>**</span> Non-Members
              </h3>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              The registration fee for Non-Members includes an annual membership of ELTAI, the conference kit, lunch and refreshments, and the certificate for all four days of the conference.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute z-0 pointer-events-none opacity-[0.03] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="font-['Poppins'] font-black text-[18vw] whitespace-nowrap" style={gradientText}>
            REGISTER
          </span>
        </div>

        {/* Foreground */}
        <div className="relative z-10 text-center max-w-xl mx-auto px-4">
          <p className="font-['Caveat'] text-xl" style={gradientText}>
            Conference Registration Fee
          </p>
          <h2 className="font-['Poppins'] font-black text-white text-4xl md:text-5xl mt-2">
            Register Now
          </h2>

          <div className="mt-10 flex gap-4 justify-center flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="rounded-full px-10 py-4 font-black text-white text-xl"
              style={{ background: 'linear-gradient(90deg, #e76366, #8355eb)' }}
            >
              Register Now →
            </motion.button>
            <button className="border-2 border-white/20 text-white rounded-full px-10 py-4 font-black text-xl hover:bg-white/10 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationFeesPage;
