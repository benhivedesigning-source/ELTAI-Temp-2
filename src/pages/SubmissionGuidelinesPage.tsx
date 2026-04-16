import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Link as LinkIcon, AlignLeft, CheckCircle, ClipboardList, ChevronDown, Clock, ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const GuidelineCard = ({ item, index, isCategoryB }: { item: any, index: number, isCategoryB: boolean, key?: React.Key }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-[2.5rem] p-8 transition-all duration-500 hover:shadow-2xl ${
        isCategoryB 
          ? 'bg-zinc-900 border border-zinc-800 hover:border-[#8355eb]/50' 
          : 'bg-white border border-zinc-100 shadow-sm hover:border-[#e76366]/30'
      }`}
    >
      {/* Background Accent */}
      <div className={`absolute -right-12 -top-12 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${
        isCategoryB ? 'bg-[#8355eb]' : 'bg-[#e76366]'
      }`}></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-8">
          <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
            isCategoryB 
              ? 'bg-[#8355eb]/10 text-[#8355eb] border border-[#8355eb]/20' 
              : 'bg-[#e76366]/10 text-[#e76366] border border-[#e76366]/20'
          }`}>
            {item.duration}
          </div>
          {isCategoryB && item.ribbon && (
            <div className="bg-gradient-to-r from-[#e76366] to-[#8355eb] text-white text-[9px] font-black uppercase tracking-widest py-1 px-3 rounded-lg">
              {item.ribbon}
            </div>
          )}
        </div>

        <h3 className={`font-['Poppins'] font-black text-2xl mb-4 tracking-tight leading-tight ${
          isCategoryB ? 'text-white' : 'text-gray-900'
        }`}>
          {item.name}
        </h3>

        <div className="space-y-6 flex-1">
          <div>
            <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${
              isCategoryB ? 'text-gray-500' : 'text-gray-400'
            }`}>Purpose</p>
            <p className={`text-sm leading-relaxed ${
              isCategoryB ? 'text-gray-400' : 'text-gray-600'
            }`}>{item.purpose}</p>
          </div>

          <div>
            <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${
              isCategoryB ? 'text-gray-500' : 'text-gray-400'
            }`}>Best Suitable For</p>
            <p className={`text-sm leading-relaxed font-medium ${
              isCategoryB ? 'text-gray-300' : 'text-gray-800'
            }`}>{item.suitable}</p>
          </div>

          <div className={`pt-6 border-t ${isCategoryB ? 'border-zinc-800' : 'border-zinc-100'}`}>
            <p className={`text-[10px] font-black uppercase tracking-widest mb-3 ${
              isCategoryB ? 'text-gray-500' : 'text-gray-400'
            }`}>Guidelines</p>
            <p className={`text-xs leading-relaxed italic ${
              isCategoryB ? 'text-gray-500' : 'text-gray-500'
            }`}>{item.guidelines}</p>
          </div>
        </div>

        {item.accepted && (
          <div className={`mt-8 pt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider ${
            isCategoryB ? 'text-[#8355eb]' : 'text-[#e76366]'
          }`}>
            <CheckCircle size={14} />
            {item.accepted}
          </div>
        )}
      </div>
    </motion.div>
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
      accepted: "Up to 500 papers accepted",
      duration: "15 mins + 5 mins Q&A",
      purpose: "To present research-based, theoretical, or conceptual work",
      suitable: "Research studies; literature analysis; policy papers; curriculum research; academic arguments",
      guidelines: "Clearly state objective/research question, method (if applicable), and key insights. Slides optional."
    },
    {
      name: "Poster Presentation",
      accepted: "Up to 100 posters accepted",
      duration: "75-min interactive",
      purpose: "To showcase work visually and through dialogue",
      suitable: "Classroom projects; action research; work-in-progress; DH experiments; reading initiatives",
      guidelines: "Poster size A0 landscape (33.1 × 46.8 inches) preferred. Design must be clear and visually engaging. Posters must be displayed during scheduled sessions, and presenters must be present for discussion."
    },
    {
      name: "Digital Humanities Demonstration",
      accepted: "Selective slots",
      duration: "15–20 mins",
      purpose: "To illustrate tools, platforms, or methods",
      suitable: "Corpora; tools; datasets; digital platforms",
      guidelines: "Live demo required. Must be accessible to non-technical audiences."
    },
    {
      name: "Community Showcase",
      accepted: "Selective slots",
      duration: "10–15 mins",
      purpose: "To highlight work beyond formal institutions",
      suitable: "NGOs; libraries; reading clubs; outreach projects",
      guidelines: "Emphasis on impact and community engagement. Visual evidence encouraged."
    }
  ];

  const categoryB = [
    {
      name: "Workshop",
      accepted: "Only 15 accepted",
      ribbon: "Highly Selective",
      duration: "90 mins",
      purpose: "To provide hands-on learning experiences",
      suitable: "Teaching strategies; AI tools; assessment methods; DH tools",
      guidelines: "Must include objectives, activities, and outcomes. List all participant requirements clearly."
    },
    {
      name: "Lightning Talks",
      accepted: "Only 10 accepted",
      ribbon: "TED-Style",
      duration: "5 mins",
      purpose: "To present one strong idea in TED-Talks style",
      suitable: "Teaching hacks; tools; micro-research; provocations",
      guidelines: "Max. 3 slides. Strictly timed. Focus on one key idea."
    },
    {
      name: "Poetry Reading",
      accepted: "Only 25 accepted",
      ribbon: "Creative",
      duration: "5 mins per poem",
      purpose: "To express the theme artistically",
      suitable: "Original or translated poetry",
      guidelines: "Max. 30 lines. Must relate to theme or domains. English only or with translation."
    },
    {
      name: "Storytelling",
      accepted: "Only 25 accepted",
      ribbon: "Narrative",
      duration: "5–7 mins",
      purpose: "To share lived experiences",
      suitable: "Teachers; learners; community storytellers",
      guidelines: "Max. 500 words. Reflective tone. English only. Must align with theme or domains."
    },
    {
      name: "Teaching Clinics",
      accepted: "Only 15 accepted",
      ribbon: "Interactive",
      duration: "30 mins",
      purpose: "To address classroom challenges collaboratively",
      suitable: "Teachers; teacher educators",
      guidelines: "Participants submit issues in advance. Highly interactive, solution-focused format."
    }
  ];

  return (
    <div className="bg-black min-h-screen font-sans text-white selection:bg-primary selection:text-black overflow-x-hidden">
      <PageBanner 
        title="Submission Guidelines"
        subtitle="Review the detailed guidelines for each presentation category."
        breadcrumb={[
          { label: "Submit", path: "/submit" },
          { label: "Submission Guidelines" }
        ]}
        image="https://www.image2url.com/r2/default/images/1776335278286-3065b2af-9ae5-4564-8522-27cd6a15fc54.png"
      />

      {/* PRESENTATION GUIDELINES */}
      <section className="py-32 bg-zinc-50 relative z-10 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#e76366]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#8355eb]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <p className="font-['Caveat'] text-3xl mb-4" style={gradientText}>Presentation Formats</p>
              <h2 className="font-['Poppins'] font-black text-gray-900 text-5xl md:text-8xl tracking-tighter uppercase leading-[0.9]">
                How to <br />
                <span style={gradientText}>Present?</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:text-right"
            >
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-2">Selection Process</p>
              <p className="text-gray-400 max-w-xs lg:ml-auto leading-relaxed">
                We offer two categories of presentation formats to accommodate diverse research and creative contributions.
              </p>
            </motion.div>
          </div>

          {/* CATEGORY A */}
          <div className="mb-32">
            <div className="flex items-center gap-6 mb-12">
              <div className="h-px flex-1 bg-zinc-200"></div>
              <div className="flex flex-col items-center">
                <span className="font-['Poppins'] font-black text-4xl text-gray-900 tracking-tighter">CATEGORY A</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mt-1">Core Academic Formats</span>
              </div>
              <div className="h-px flex-1 bg-zinc-200"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryA.map((item, index) => (
                <GuidelineCard key={index} item={item} index={index} isCategoryB={false} />
              ))}
            </div>
          </div>

          {/* CATEGORY B */}
          <div>
            <div className="flex items-center gap-6 mb-12">
              <div className="h-px flex-1 bg-zinc-800"></div>
              <div className="flex flex-col items-center">
                <span className="font-['Poppins'] font-black text-4xl text-gray-900 tracking-tighter">CATEGORY B</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8355eb] mt-1">Highly Selective Slots</span>
              </div>
              <div className="h-px flex-1 bg-zinc-800"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryB.map((item, index) => (
                <GuidelineCard key={index} item={item} index={index} isCategoryB={true} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SUBMISSION GUIDELINES */}
      <section className="py-32 bg-white relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* LEFT: MAIN INFO & TEMPLATES */}
            <div className="lg:col-span-7 space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-['Poppins'] font-black text-4xl md:text-5xl text-gray-900 mb-8 tracking-tighter uppercase">
                  How to <span style={gradientText}>Submit?</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  All abstracts must engage with the conference theme <span className="font-bold text-gray-900">“English on the Edge: Survive? Evolve? Thrive?”</span> and align with at least one of the seven conference domains.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                      <ClipboardList className="text-[#e76366]" size={24} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">Submission Template</h4>
                    <ul className="space-y-3 text-sm text-gray-500">
                      <li className="flex gap-2 italic">
                        <span className="text-primary">•</span>
                        Templates for abstracts of different presentation formats are available here.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        Presenters should log-in to the conference website and submit relevant details to the abstract submission form.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                      <AlignLeft className="text-[#8355eb]" size={24} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">Title & Length</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span className="font-bold text-gray-900">Titles:</span> Concise, not exceeding 15 words.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span className="font-bold text-gray-900">Abstracts:</span> Max 150 words (250 for Workshops).
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-red-50 rounded-xl border border-red-100 flex items-center gap-3">
                      <Clock className="text-red-500 shrink-0" size={16} />
                      <p className="text-[10px] text-red-600 font-bold uppercase tracking-wider">Auto-truncation enabled beyond limits</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900 rounded-[3rem] p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#e76366]/10 to-[#8355eb]/10 rounded-full blur-3xl"></div>
                
                <h3 className="text-white font-['Poppins'] font-black text-3xl mb-8 tracking-tight">Abstract Quality</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    "Original & previously unpresented work",
                    "Accurately reflects content",
                    "Clear purpose, approach & significance",
                    "Formal British English conventions",
                    "No title repetition in body",
                    "No biographical/institutional info",
                    "No citations or references"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-[#8355eb] shrink-0 mt-1" size={18} />
                      <span className="text-gray-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT: REQUIREMENTS LIST */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-32"
              >
                <div className="bg-zinc-50 rounded-[3rem] p-12 border border-zinc-100">
                  <h3 className="font-['Poppins'] font-black text-3xl text-gray-900 mb-8 tracking-tight uppercase">
                    Submission <br /> <span style={gradientText}>Requirements</span>
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      "Title of the presentation",
                      "Name(s) of author(s)",
                      "Designation & institutional affiliation",
                      "Email address & contact number",
                      "Selected conference domain",
                      "Abstract (word-limited)"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center font-black text-xs text-gray-400 group-hover:border-primary group-hover:text-primary transition-colors">
                          0{i + 1}
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}

                    <div className="pt-8 mt-8 border-t border-zinc-200">
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">For Creative/Digital Formats</p>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                          <p className="text-gray-600 text-sm">Description of medium or format</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                          <p className="text-gray-600 text-sm">Technical or logistical requirements</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider: zinc-50 -> black */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block relative z-10" style={{ background: '#ffffff' }}>
        <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#000000" />
      </svg>

      {/* DEADLINE — DRAMATIC FULL BLEED */}
      <section className="py-32 bg-black relative overflow-hidden z-10">
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[800px] h-[800px] bg-[#e76366]/20 rounded-full blur-[150px] pointer-events-none"
          ></motion.div>
        </div>

        {/* FOREGROUND */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-['Caveat'] text-4xl mb-6" style={gradientText}>Submission Deadline</p>
            <h2 className="font-['Poppins'] font-black text-white text-6xl md:text-9xl tracking-tighter uppercase mb-16 leading-none">
              Final <br />
              <span style={gradientText}>Call</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-zinc-900 border border-zinc-800 rounded-[3rem] p-12 text-left relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#e76366] to-[#8355eb]"></div>
              
              <p className="text-gray-500 text-xs font-black uppercase tracking-[0.3em] mb-8">Submission Portal</p>
              
              <h3 className="text-white font-['Poppins'] font-black text-3xl md:text-4xl mb-6 leading-tight">
                All abstracts must be <br /> submitted online
              </h3>
              
              <a 
                href="https://conf2026.eltai.in" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-black text-xl md:text-2xl group/link"
              >
                <span style={gradientText} className="underline decoration-[#e76366] underline-offset-8">conf2026.eltai.in</span>
                <ArrowRight className="text-[#8355eb] group-hover/link:translate-x-2 transition-transform" />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gradient-to-br from-[#e76366] to-[#8355eb] rounded-[3rem] p-12 text-left flex flex-col justify-between shadow-[0_20px_50px_rgba(231,99,102,0.3)]"
            >
              <div>
                <Clock className="text-white/40 mb-8" size={48} />
                <p className="text-white/60 text-xs font-black uppercase tracking-[0.3em] mb-2 text-center">Deadline</p>
                <div className="text-center">
                  <span className="font-['Poppins'] font-black text-white text-4xl md:text-5xl leading-none block mb-2">
                    15 AUG
                  </span>
                  <span className="font-['Poppins'] font-black text-white/80 text-2xl block">
                    2026
                  </span>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20 text-center">
                <p className="text-white font-black text-3xl">10:00 PM</p>
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Indian Standard Time</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <p className="text-gray-500 text-sm italic">
              * Late submissions will not be considered for review. Please ensure your abstract is complete before the deadline.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SubmissionGuidelinesPage;
