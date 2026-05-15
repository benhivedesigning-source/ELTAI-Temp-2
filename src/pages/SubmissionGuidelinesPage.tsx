import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Link as LinkIcon, AlignLeft, CheckCircle, ClipboardList, ChevronDown, Clock, ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';

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
      guidelines: "Poster size A0 landscape (33.1 × 46.8 inches) preferred. Design must be clear and visually engaging. Posters must be displayed during scheduled sessions, and presenters must be present for discussion. Accepted posters may be archived on the ELTAI website."
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
      guidelines: "Max. 30 lines. Must relate to theme or domains. English only. Non-English poems must include English translation."
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
        title={
  <>
    Submission <span className="ml-1">Guidelines</span>
  </>
}
        subtitle="Review the detailed guidelines for each presentation category."
        breadcrumb={[
          { label: "Submit", path: "/submit" },
          { label: "Submission Guidelines" }
        ]}
        image="https://www.image2url.com/r2/default/images/1776335278286-3065b2af-9ae5-4564-8522-27cd6a15fc54.png"
      />

      {/* Presentation Guidelines */}
      <section className="py-32 bg-zinc-50 relative z-10 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#e76366]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#8355eb]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-['Poppins'] font-black text-gray-900 text-3xl md:text-5xl lg:text-6xl tracking-tighter capitalize leading-tight">
                Presentation Guidelines: <span className="text-black">How to Present?</span>
              </h2>
            </motion.div>
          </div>

          {/* Category A */}
          <div className="mb-32">
            <div className="flex items-center gap-6 mb-12">
              <div className="h-px flex-1 bg-zinc-200"></div>
              <div className="flex flex-col items-center">
                <span className="font-['Poppins'] font-black text-4xl text-gray-900 tracking-tighter capitalize">Category A</span>
                <span className="text-[10px] font-black capitalize tracking-[0.3em] text-gray-400 mt-1">Core Academic Formats</span>
              </div>
              <div className="h-px flex-1 bg-zinc-200"></div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-x-auto rounded-3xl border border-zinc-200 shadow-xl bg-white"
            >
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-zinc-50 border-bottom border-zinc-200">
                    <th className="p-6 text-[10px] font-black capitalize tracking-widest text-[#e76366]">Format</th>
                    <th className="p-6 text-[10px] font-black capitalize tracking-widest text-gray-400">Duration</th>
                    <th className="p-6 text-[10px] font-black capitalize tracking-widest text-gray-400">Purpose</th>
                    <th className="p-6 text-[10px] font-black capitalize tracking-widest text-gray-400">Suitability</th>
                    <th className="p-6 text-[10px] font-black capitalize tracking-widest text-gray-400">Guidelines</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {categoryA.map((item, index) => (
                    <tr key={index} className="group hover:bg-zinc-50/50 transition-colors">
                      <td className="p-6 align-top">
                        <p className="font-['Poppins'] font-black text-lg text-gray-900 leading-tight mb-2 capitalize">{item.name}</p>
                      </td>
                      <td className="p-6 align-top">
                        <span className="inline-block px-3 py-1 bg-zinc-100 text-gray-600 font-bold text-[10px] capitalize rounded-full whitespace-nowrap">
                          {item.duration}
                        </span>
                      </td>
                      <td className="p-6 align-top">
                        <p className="text-sm text-gray-600 leading-relaxed max-w-xs">{item.purpose}</p>
                      </td>
                      <td className="p-6 align-top">
                        <p className="text-sm text-gray-800 font-medium leading-relaxed max-w-xs">{item.suitable}</p>
                      </td>
                      <td className="p-6 align-top">
                        <p className="text-sm text-gray-600 leading-relaxed max-w-xs">{item.guidelines}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>

          {/* Category B */}
          <div>
            <div className="flex items-center gap-6 mb-12">
              <div className="h-px flex-1 bg-zinc-200"></div>
              <div className="flex flex-col items-center">
                <span className="font-['Poppins'] font-black text-4xl text-gray-900 tracking-tighter capitalize">Category B</span>
                <span className="text-[10px] font-black capitalize tracking-[0.3em] text-[#8355eb] mt-1">Highly Selective Slots</span>
              </div>
              <div className="h-px flex-1 bg-zinc-200"></div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-x-auto rounded-3xl border border-zinc-200 shadow-xl bg-white"
            >
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-zinc-50 border-bottom border-zinc-200">
                    <th className="p-6 text-[10px] font-black capitalize tracking-widest text-[#8355eb]">Format</th>
                    <th className="p-6 text-[10px] font-black capitalize tracking-widest text-gray-400">Duration</th>
                    <th className="p-6 text-[10px] font-black capitalize tracking-widest text-gray-400">Purpose</th>
                    <th className="p-6 text-[10px] font-black capitalize tracking-widest text-gray-400">Suitability</th>
                    <th className="p-6 text-[10px] font-black capitalize tracking-widest text-gray-400">Guidelines</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {categoryB.map((item, index) => (
                    <tr key={index} className="group hover:bg-zinc-50/50 transition-colors">
                      <td className="p-6 align-top">
                        <div className="flex items-center gap-3 mb-2">
                          <p className="font-['Poppins'] font-black text-lg text-gray-900 leading-tight capitalize">{item.name}</p>
                          {item.ribbon && (
                            <span className="px-2 py-0.5 bg-gradient-to-r from-[#e76366] to-[#8355eb] text-white text-[8px] font-black capitalize rounded shrink-0 whitespace-nowrap">
                              {item.ribbon}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-6 align-top">
                        <span className="inline-block px-3 py-1 bg-zinc-100 text-gray-600 font-bold text-[10px] capitalize rounded-full whitespace-nowrap">
                          {item.duration}
                        </span>
                      </td>
                      <td className="p-6 align-top">
                        <p className="text-sm text-gray-600 leading-relaxed max-w-xs">{item.purpose}</p>
                      </td>
                      <td className="p-6 align-top">
                        <p className="text-sm text-gray-800 font-medium leading-relaxed max-w-xs">{item.suitable}</p>
                      </td>
                      <td className="p-6 align-top">
                        <p className="text-sm text-gray-600 leading-relaxed max-w-xs">{item.guidelines}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Submission Guidelines */}
      <section className="py-32 bg-white relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Main Info & Templates */}
            <div className="lg:col-span-7 space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-['Poppins'] font-black text-4xl md:text-5xl text-gray-900 mb-8 tracking-tighter capitalize">
                  How to <span className="text-black">Submit?</span>
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
                      <li className="flex gap-2">
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
                      <p className="text-[10px] text-red-600 font-bold capitalize tracking-wider">Auto-truncation enabled beyond limits</p>
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

            {/* Right: Requirements List */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-32"
              >
                <div className="bg-zinc-50 rounded-[3rem] p-12 border border-zinc-100">
                  <h3 className="font-['Poppins'] font-black text-3xl text-gray-900 mb-8 tracking-tight capitalize">
                    Submission <br /> <span className="text-black">Requirements</span>
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
                      <p className="text-[10px] font-black capitalize tracking-widest text-gray-400 mb-4">For Creative/Digital Formats</p>
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

      {/* Deadline — Dramatic Full Bleed */}
      <section className="py-24 bg-black relative overflow-hidden z-10">
        {/* Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[800px] h-[800px] bg-[#e76366]/20 rounded-full blur-[150px] pointer-events-none"
          ></motion.div>
        </div>

        {/* Foreground */}
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-['Poppins'] text-3xl mb-10" style={gradientText}>Submission Deadline</p>
            
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-zinc-900 border border-zinc-800 rounded-[2rem] p-6 md:p-8 text-left relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#e76366] to-[#8355eb]"></div>
              
              <p className="text-gray-500 text-[10px] font-black capitalize tracking-[0.3em] mb-4">Submission Portal</p>
              
              <h3 className="text-white font-['Poppins'] font-black text-xl md:text-2xl mb-4 leading-tight">
                All abstracts must be <br /> submitted online
              </h3>
              
              <a 
                href="https://conf2026.eltai.in" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-black text-lg md:text-xl group/link"
              >
                <span style={gradientText} className="underline decoration-[#e76366] underline-offset-8">conf2026.eltai.in</span>
                <ArrowRight className="text-[#8355eb] group-hover/link:translate-x-2 transition-transform" size={18} />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gradient-to-br from-[#e76366] to-[#8355eb] rounded-[2rem] p-6 md:p-8 text-center flex flex-col items-center justify-between shadow-[0_15px_40px_rgba(231,99,102,0.25)]"
            >
              <div className="flex flex-col items-center w-full">
                <Clock className="text-white/40 mb-4 mx-auto" size={32} />
                <p className="text-white/60 text-[10px] font-black capitalize tracking-[0.3em] mb-2 text-center">Deadline</p>
                <div className="text-center">
                  <span className="font-['Poppins'] font-black text-white text-2xl md:text-3xl leading-none block mb-1">
                    15<sup className="text-[0.65em] leading-none ml-[0.05em] select-none lowercase">th</sup> August
                  </span>
                  <span className="font-['Poppins'] font-black text-white/80 text-lg block">
                    2026
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20 text-center w-full flex flex-col items-center justify-center">
                <p className="text-white font-black text-xl text-center">06:00 pm</p>
                <p className="text-white/60 text-[9px] font-bold capitalize tracking-widest text-center">Indian Standard Time</p>
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
            
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SubmissionGuidelinesPage;
