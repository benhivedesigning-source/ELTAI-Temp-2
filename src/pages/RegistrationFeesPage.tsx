import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, UserPlus, Info, ArrowRight, Download, Zap, Star } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import Ordinal from '../components/Ordinal';

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
      <PageBanner 
        title="Registration Fees"
        subtitle={<Ordinal text="Secure your spot at the 20th International & 56th Annual ELTAI Conference." />}
        breadcrumb={[
          { label: "Register", path: "/register" },
          { label: "Registration Fees" }
        ]}
        image="https://www.image2url.com/r2/default/images/1776340001521-fa0c9c37-a32f-42df-b315-899bc9a4ea3f.png"
      />

      {/* SECTION 2 — PHASE TOGGLE */}
      <section className="py-32 bg-white relative overflow-hidden z-10">
        {/* Deep background atmospheric glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(231,99,102,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#e76366] animate-pulse"></span>
              <span className="text-xs font-black uppercase tracking-widest text-gray-500">Registration Timeline</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-heading font-black text-gray-900 mb-6 tracking-tighter uppercase leading-tight"
            >
              Select Your <span style={gradientText}>Phase</span>
            </motion.h2>
          </div>

          {/* Timeline Interactive Toggle */}
          <div className="relative max-w-4xl mx-auto px-4 sm:px-16">
            {/* Connecting Line Background */}
            <div className="absolute top-6 left-16 right-16 h-1.5 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#e76366] to-[#8355eb]"
                initial={false}
                animate={{ 
                  width: selectedPhase === 'earlybird' ? '0%' : selectedPhase === 'regular' ? '50%' : '100%' 
                }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
              />
            </div>

            <div className="flex justify-between relative z-10">
              {[
                { id: 'earlybird', label: 'Early-bird', date: 'Ends 30th June 2026', icon: <Zap size={24} /> },
                { id: 'regular', label: 'Regular', date: 'Starts 1st July 2026', icon: <CheckCircle size={24} /> },
                { id: 'onthespot', label: 'On-the-spot', date: 'Available at Venue', icon: <Star size={24} /> }
              ].map((phase, idx) => {
                const isActive = selectedPhase === phase.id;
                const phasesList = ['earlybird', 'regular', 'onthespot'];
                const currentIndex = phasesList.indexOf(selectedPhase);
                const isPast = currentIndex > idx;
                
                return (
                  <div 
                    key={phase.id} 
                    className="flex flex-col items-center relative group cursor-pointer w-32" 
                    onClick={() => setSelectedPhase(phase.id as any)}
                  >
                    {/* Node */}
                    <motion.div 
                      animate={{ 
                        scale: isActive ? 1.15 : 1,
                        backgroundColor: isActive ? '#ffffff' : isPast ? '#e76366' : '#f9fafb',
                        borderColor: isActive ? '#e76366' : isPast ? '#e76366' : '#f3f4f6'
                      }}
                      className={`w-20 h-20 rounded-2xl rotate-45 flex items-center justify-center border-2 relative z-10 transition-colors duration-300 ${
                        isActive ? 'shadow-[0_0_40px_rgba(231,99,102,0.2)] text-[#e76366]' : 
                        isPast ? 'text-white shadow-[0_0_20px_rgba(231,99,102,0.1)]' : 
                        'text-gray-400 group-hover:border-gray-300 group-hover:text-gray-600 group-hover:bg-white'
                      }`}
                    >
                      {/* Un-rotate the icon so it stands straight */}
                      <div className="-rotate-45">
                        {phase.icon}
                      </div>

                      {/* Pulsing ring for active state */}
                      {isActive && (
                        <motion.div 
                          className="absolute inset-[-4px] rounded-2xl border border-[#e76366]/30"
                          animate={{ scale: [1, 1.3], opacity: [0.8, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        />
                      )}
                    </motion.div>

                    {/* Label */}
                    <div className="absolute top-28 w-48 text-center pointer-events-none">
                      <motion.h3 
                        animate={{ 
                          color: isActive ? '#111827' : '#6b7280',
                          scale: isActive ? 1.05 : 1
                        }}
                        className="font-black uppercase tracking-widest text-sm mb-2 transition-colors"
                      >
                        {phase.label}
                      </motion.h3>
                      <motion.div 
                        animate={{ 
                          opacity: isActive ? 1 : 0.6,
                          y: isActive ? 0 : -5
                        }}
                        className="inline-block bg-gray-50 border border-gray-100 rounded-full px-3 py-1 shadow-sm"
                      >
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                          <Ordinal text={phase.date} />
                        </p>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Spacer to account for absolute positioned labels */}
          <div className="h-40"></div>
        </div>
      </section>

      {/* WAVE: White to Black */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block" style={{background:'#ffffff'}}>
        <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#000000" />
      </svg>

      {/* SECTION 3 — PRICING CARDS */}
      <section className="py-32 bg-black relative z-10 overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col gap-6">
            {Object.entries(pricing).map(([key, cat], idx) => {
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="relative rounded-[2rem] p-[1px] overflow-hidden group"
                >
                  {/* Animated Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 group-hover:from-[#e76366] group-hover:to-[#8355eb] transition-all duration-500 opacity-30 group-hover:opacity-100"></div>
                  
                  {/* Card Content Container */}
                  <div className="relative bg-zinc-950/90 backdrop-blur-xl rounded-[calc(2rem-1px)] p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-8">
                    
                    {/* Left: Title and Icon */}
                    <div className="lg:w-[35%] flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#e76366]/50 transition-colors shrink-0">
                        <Star className="w-6 h-6 text-gray-400 group-hover:text-[#e76366] transition-colors" />
                      </div>
                      <h3 className="font-heading font-bold text-white text-lg lg:text-xl leading-snug tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#e76366] group-hover:to-[#8355eb] transition-all duration-300 uppercase">
                        {cat.title}
                      </h3>
                    </div>

                    {/* Middle: Prices */}
                    <div className="flex-1 flex flex-col sm:flex-row gap-4 lg:gap-6">
                      {/* Member Price */}
                      <div className="flex-1 relative bg-white/5 rounded-2xl p-5 border border-white/5 group-hover:border-white/10 transition-colors overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#e76366] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">ELTAI Members*</p>
                        <div className="flex items-baseline gap-1">
                          <span className="text-white text-3xl font-black tracking-tighter">₹{cat.members[selectedPhase]}</span>
                          <span className="text-gray-500 text-[10px] font-medium">/ person</span>
                        </div>
                      </div>

                      {/* Non-Member Price */}
                      <div className="flex-1 relative bg-white/5 rounded-2xl p-5 border border-white/5 group-hover:border-white/10 transition-colors overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#8355eb] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Non-Members**</p>
                        <div className="flex items-baseline gap-1">
                          <span className="text-white text-3xl font-black tracking-tighter">₹{cat.nonMembers[selectedPhase]}</span>
                          <span className="text-gray-500 text-[10px] font-medium">/ person</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Button */}
                    <div className="lg:w-[15%] shrink-0">
                      <button className="w-full font-black py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn bg-white text-black hover:bg-gradient-to-r hover:from-[#e76366] hover:to-[#8355eb] hover:text-white shadow-lg hover:shadow-[#e76366]/20">
                        Select
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
