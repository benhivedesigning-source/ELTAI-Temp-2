import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Link as LinkIcon, AlignLeft, CheckCircle, ClipboardList, ChevronDown, Clock } from 'lucide-react';

const AccordionItem = ({ item, isFirst, isLast, isCategoryB }: { key?: React.Key, item: any, isFirst: boolean, isLast: boolean, isCategoryB: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-zinc-900 border-b border-zinc-800 relative overflow-hidden ${isFirst ? 'rounded-t-2xl' : ''} ${isLast ? 'rounded-b-2xl border-b-0' : ''}`}>
      {isCategoryB && item.ribbon && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-[#e76366] to-[#8355eb] text-white text-[9px] font-black uppercase tracking-widest py-1.5 px-4 rounded-bl-xl rounded-tr-2xl z-10">
          {item.ribbon}
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
      >
        <div className="flex items-center gap-3 pr-4">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#e76366] to-[#8355eb] shrink-0"></div>
          <div>
            <span className="text-white font-bold">{item.name}</span>
            {item.accepted && <span className="text-gray-500 text-sm ml-2">{item.accepted}</span>}
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="bg-zinc-800 rounded-full px-3 py-1 text-gray-300 text-xs font-bold hidden sm:block">
            {item.duration}
          </div>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            <ChevronDown size={18} className="text-gray-400" />
          </motion.div>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2">
              <div className="bg-zinc-800 rounded-full px-3 py-1 text-gray-300 text-xs font-bold sm:hidden inline-block mb-4">
                {item.duration}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ background: 'linear-gradient(90deg, #e76366, #8355eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Purpose</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.purpose}</p>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ background: 'linear-gradient(90deg, #e76366, #8355eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Best Suitable For</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.suitable}</p>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ background: 'linear-gradient(90deg, #e76366, #8355eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Guidelines</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.guidelines}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SubmissionGuidelinesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gradientText = {
    background: 'linear-gradient(90deg, #e76366, #8355eb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const categoryA = [
    {
      name: "Paper Presentation",
      accepted: "(Up to 500 papers accepted)",
      duration: "15 mins + 5 mins Q&A",
      purpose: "To present research-based, theoretical, or conceptual work",
      suitable: "Research studies; literature analysis; policy papers; curriculum research; academic arguments",
      guidelines: "Clearly state objective/research question, method (if applicable), and key insights. Slides optional."
    },
    {
      name: "Poster Presentation",
      accepted: "(Up to 100 posters accepted)",
      duration: "75-min interactive",
      purpose: "To showcase work visually and through dialogue",
      suitable: "Classroom projects; action research; work-in-progress; DH experiments; reading initiatives",
      guidelines: "Poster size A0 landscape (33.1 × 46.8 inches) preferred. Design must be clear and visually engaging. Posters must be displayed during scheduled sessions, and presenters must be present for discussion. Accepted posters may be archived on the ELTAI website."
    },
    {
      name: "Digital Humanities Demonstration",
      accepted: "",
      duration: "15–20 mins",
      purpose: "To illustrate tools, platforms, or methods",
      suitable: "Corpora; tools; datasets; digital platforms",
      guidelines: "Live demo required. Must be accessible to non-technical audiences."
    },
    {
      name: "Community / Public Humanities Showcase",
      accepted: "",
      duration: "10–15 mins",
      purpose: "To highlight work beyond formal institutions",
      suitable: "NGOs; libraries; reading clubs; outreach projects",
      guidelines: "Emphasis on impact and community engagement. Visual evidence encouraged."
    }
  ];

  const categoryB = [
    {
      name: "Workshop",
      accepted: "(Up to 15 workshops will be accepted)",
      ribbon: "Only 15",
      duration: "90 mins",
      purpose: "To provide hands-on learning experiences",
      suitable: "Teaching strategies; AI tools; assessment methods; DH tools",
      guidelines: "Must include objectives, activities, and outcomes. List all participant requirements clearly."
    },
    {
      name: "Lightning Talks",
      accepted: "(Up to 10 will be accepted)",
      ribbon: "Only 10",
      duration: "5 mins",
      purpose: "To present one strong idea in TED-Talks style",
      suitable: "Teaching hacks; tools; micro-research; provocations",
      guidelines: "Max. 3 slides. Strictly timed. Focus on one key idea."
    },
    {
      name: "Creative Performance – Poetry Reading",
      accepted: "(Up to 25 poems will be accepted)",
      ribbon: "Only 25",
      duration: "5 mins per poem",
      purpose: "To express the theme artistically",
      suitable: "Poetry",
      guidelines: "Max. 30 lines. Must relate to theme or domains. English only. Non-English poems must include English translation."
    },
    {
      name: "Creative Performance – Storytelling",
      accepted: "(Up to 15 stories will be accepted)",
      ribbon: "Only 25",
      duration: "5–7 mins per story",
      purpose: "To share lived experiences",
      suitable: "Teachers; learners; community storytellers",
      guidelines: "Max. 500 words. Reflective tone. English only. Must align with theme or domains."
    },
    {
      name: "Teaching Clinics",
      accepted: "(Up to 15 will be accepted)",
      ribbon: "Only 15",
      duration: "30 mins",
      purpose: "To address classroom challenges collaboratively",
      suitable: "Teachers; teacher educators",
      guidelines: "Participants submit issues in advance. Highly interactive, solution-focused format."
    }
  ];

  return (
    <div className="bg-black min-h-screen font-sans text-white selection:bg-primary selection:text-black overflow-x-hidden">
      {/* BREADCRUMB */}
      <nav className="pt-24 max-w-[1800px] mx-auto px-4 lg:px-8 py-4 relative z-20">
        <div className="text-gray-500 text-sm font-medium flex items-center gap-2">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-zinc-700">/</span>
          <Link to="/submit" className="hover:text-white transition-colors">Submit</Link>
          <span className="text-zinc-700">/</span>
          <span style={gradientText} className="font-bold">Submission Guidelines</span>
        </div>
      </nav>

      {/* HERO — CINEMATIC */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#e76366]/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#8355eb]/15 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-full text-center">
            <span className="font-['Poppins'] font-black text-[30vw] leading-none tracking-tighter opacity-[0.03]" style={gradientText}>
              3.2
            </span>
          </div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            
            <h1 className="font-['Poppins'] font-black text-6xl md:text-8xl lg:text-9xl text-white leading-none tracking-tighter">
              Submission
            </h1>
            <h1 className="font-['Poppins'] font-black text-6xl md:text-8xl lg:text-9xl leading-none tracking-tighter" style={gradientText}>
              Guidelines
            </h1>
          </motion.div>
        </div>
      </section>

      {/* PRESENTATION GUIDELINES */}
      <section className="py-20 bg-black relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="bg-gradient-to-r from-[#e76366] to-[#8355eb] text-white rounded-full px-5 py-2 font-black text-sm uppercase tracking-widest mb-6">
              PRESENTATION GUIDELINES
            </div>
            <h2 className="font-['Poppins'] font-black text-white text-4xl md:text-5xl">
              How to Present?
            </h2>
          </div>

          {/* CATEGORY A */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-[#e76366] to-[#8355eb] rounded-2xl px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <span className="text-white font-['Poppins'] font-black text-xl">CATEGORY A</span>
              <span className="text-gray-300 text-sm font-medium">Core Academic & Community Formats</span>
            </div>
            <div className="flex flex-col">
              {categoryA.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  item={item} 
                  isFirst={index === 0} 
                  isLast={index === categoryA.length - 1} 
                  isCategoryB={false}
                />
              ))}
            </div>
          </div>

          {/* CATEGORY B */}
          <div>
            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <span className="font-['Poppins'] font-black text-xl" style={gradientText}>CATEGORY B</span>
              <span className="text-gray-500 text-sm font-bold italic">Highly selective; limited slots</span>
            </div>
            <div className="flex flex-col">
              {categoryB.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  item={item} 
                  isFirst={index === 0} 
                  isLast={index === categoryB.length - 1} 
                  isCategoryB={true}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider: black -> white */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block relative z-10" style={{ background: '#000' }}>
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
      </svg>

      {/* DEADLINE — DRAMATIC FULL BLEED */}
      <section className="py-32 bg-black relative overflow-hidden z-10">
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-[600px] h-[600px] bg-[#8355eb]/20 rounded-full blur-[150px] pointer-events-none"
          ></motion.div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-full text-center">
            <span className="font-['Poppins'] font-black text-[16vw] leading-none tracking-tighter opacity-[0.03]" style={gradientText}>
              DEADLINE
            </span>
          </div>
        </div>

        {/* FOREGROUND */}
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <span className="font-['Caveat'] text-xl block" style={gradientText}>
            Submission Deadline
          </span>
          
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e76366] to-[#8355eb] text-white rounded-full px-5 py-2 font-black text-sm uppercase tracking-widest mt-4">
            <Clock size={14} className="text-white" />
            SUBMISSION DEADLINE
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-zinc-900 border border-zinc-700 rounded-[2rem] p-10 inline-block mt-10 w-full"
          >
            <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">
              All abstracts must be submitted through
            </p>
            
            <a href="https://conf2026.eltai.in" className="block mt-2 font-black text-xl underline decoration-[#e76366] underline-offset-4 hover:opacity-80 transition-opacity" style={gradientText}>
              https://conf2026.eltai.in
            </a>
            
            <p className="text-gray-400 text-lg mt-6 font-medium">
              at or before 10 pm on
            </p>
            
            <div className="mt-3">
              <span className="font-['Poppins'] font-black text-white text-5xl md:text-6xl leading-tight block">
                <span style={gradientText}>15 August 2026,</span>
              </span>
              <span className="font-['Poppins'] font-black text-5xl md:text-6xl leading-tight block" style={gradientText}>
                10.00 PM IST
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SubmissionGuidelinesPage;
