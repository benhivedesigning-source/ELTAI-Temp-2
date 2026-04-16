import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Zap, Star, Calendar, MapPin, GraduationCap, ChevronDown, ArrowRight, Quote } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';

const ConceptNotePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gradientText = {
    background: 'linear-gradient(90deg, #e76366, #8355eb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <div className="bg-black min-h-screen font-sans text-white selection:bg-primary selection:text-black overflow-x-hidden">
      <PageBanner 
        title="Concept Note"
        subtitle="English on the Edge: Survive? Evolve? Thrive?"
        breadcrumb={[
          { label: "Theme", path: "/theme" },
          { label: "Concept Note" }
        ]}
        image="https://www.image2url.com/r2/default/images/1776257653770-c1ca765c-55f8-42a2-aeae-3bf47a3b03ca.webp"
      />

      {/* SECTION 2 — OPENING PULL QUOTE (Prestige Editorial Variation) */}
      <section className="bg-zinc-50 py-32 relative overflow-hidden">
       
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* LEFT: STYLIZED IMAGE (Oval Mask & Floating Elements) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-5/12 relative"
            >
            
              <div className="relative group">
                {/* Decorative Ring */}
                <div className="absolute -inset-6 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite] opacity-40"></div>
                
                {/* Main Image with Oval Mask */}
                <div className="relative rounded-[10rem] overflow-hidden shadow-2xl aspect-[3/4] border-8 border-white">
                  <img 
                    src="https://www.image2url.com/r2/default/images/1776323037836-8f087a65-b411-416c-b7e5-c2bfb7ce4d3a.png" 
                    alt="Education and Innovation" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[3000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/20"></div>
                </div>

                {/* Floating Stats/Label */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-zinc-100 z-20"
                >
                  <p className="text-primary font-black text-3xl mb-1">2026</p>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Conference Year</p>
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT: CONTENT (Refined Typography) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-7/12"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-primary"></div>
                <p className="font-['Caveat'] text-3xl" style={gradientText}>Opening Statement</p>
              </div>
              
              <h2 className="font-heading font-black text-4xl md:text-5xl text-gray-900 mb-10 leading-[1.1] tracking-tighter uppercase italic">
                A Defining <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e76366] to-[#8355eb]">Crossroads</span>
              </h2>

              <div className="relative mb-12">
                <Quote size={64} className="absolute -top-10 -left-10 text-primary/10 -z-10" />
                <p className="text-gray-700 text-xl md:text-2xl leading-relaxed font-medium italic border-l-4 border-primary/20 pl-8">
                  "The teaching of English language and literature – across schools,
                  colleges, and universities – stands at a defining crossroads in the twenty-first century. From early literacy classrooms to 
                  postgraduate seminars, educators across contexts are negotiating profound shifts in purpose, practice, and possibility. In higher 
                  education, English departments are being downsized or restructured, and the very identity of the discipline is under 
                  scrutiny."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-zinc-200/50 border border-zinc-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[5rem] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                  <span className="inline-block rounded-full px-4 py-1.5 text-[10px] font-black text-white mb-6 uppercase tracking-widest" style={{ background: 'linear-gradient(90deg, #e76366, #8355eb)' }}>
                    Policy Vision
                  </span>
                  <p className="text-gray-600 text-base leading-relaxed font-medium">
                    In the Indian context, these transformations are shaped 
                    significantly by the National Education Policy (NEP) 2020, which 
                    foregrounds multilingual education and competency-based learning.
                  </p>
                </div>

                <div className="pt-4">
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    English education today must therefore be understood not in isolation, 
                    but in dialogue with the broader reforms and aspirations 
                    envisioned by NEP 2020.
                  </p>
                  <Link to="/theme" className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest group">
                    Explore Theme <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Wave divider: White -> Black */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block" style={{background:'#fff'}}>
        <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#000000"/>
      </svg>

      {/* SECTION 3 — WHAT IS THE EDGE? */}
      <section className="bg-black py-24">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12 bg-primary"></div>
                  <p className="font-['Caveat'] text-2xl" style={gradientText}>
                    The Concept
                  </p>
                </div>
                <h2 className="font-['Poppins'] font-black text-4xl md:text-5xl lg:text-6xl text-white mb-8 tracking-tighter uppercase">
                  What is <span style={gradientText}>'The Edge'?</span>
                </h2>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium">
                  "English on the Edge: Survive? Evolve? Thrive?" captures this 
                  moment of both uncertainty and possibility. The "edge" here is 
                  not merely a point of crisis or decline, but a dynamic threshold 
                  where continuity and change meet. It is a space of negotiation 
                  between inherited traditions and emerging futures, between 
                  disciplinary stability and transformation.
                </p>
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  At this edge, English education is neither collapsing nor complete; rather, it is being 
                  reimagined. The questions of survival, evolution, and thriving 
                  are not sequential stages but co-existing perspectives through 
                  which the present and future of English studies can be examined. While some political and ideological discourses frame English as a colonial inheritance to be resisted, global realities continue to position it as a language of connection, mobility, and shared intellectual exchange. At the same time, advances in artificial intelligence, digital platforms, and data-driven learning challenge long-held assumptions about reading, writing, authorship, and assessment. In this complex landscape, English education must respond not only by defending its relevance but by rearticulating its purpose – ethically, critically, and creatively.
                </p>

                <div className="bg-zinc-900 border-l-4 border-[#e76366] rounded-r-2xl p-6 md:p-8 relative">
                  <Quote className="absolute top-6 left-6 w-8 h-8 opacity-20" color="#e76366" />
                  <p className="text-gray-300 italic text-lg leading-relaxed pl-12 font-medium">
                    In India's multilingual ecology – shaped by constitutional 
                    languages, rich regional linguistic traditions, and everyday 
                    classroom realities – English functions not as a replacement 
                    for other languages, but as a complementary resource that 
                    coexists with and draws strength from linguistic diversity.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Decorative Background Elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#e76366]/20 to-[#8355eb]/20 blur-2xl rounded-[3rem]"></div>
                <div className="absolute -top-8 -right-8 w-32 h-32 border border-white/10 rounded-full"></div>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 border border-white/10 rounded-full"></div>
                
                {/* Main Image Container */}
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] lg:aspect-square group">
                  <img 
                    src="https://www.image2url.com/r2/default/images/1776258145205-7ccacfae-fabb-43e0-b311-25d9dfaa3e19.webp" 
                    alt="The Edge Concept" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2000ms]"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white font-bold text-lg mb-2">A Dynamic Threshold</p>
                    <p className="text-gray-300 text-sm">Where continuity and change meet in English education.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider: Black -> White */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block" style={{background:'#000'}}>
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff"/>
      </svg>

      {/* SECTION 4 — THREE PILLARS (CORE INQUIRY) */}
      <section className="bg-black py-32 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#e76366]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#8355eb]/5 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center mb-6"
            >
              <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5L10 0L20 10L30 0L40 5" stroke="url(#icon-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-heading font-black mb-6 tracking-tighter uppercase text-white"
            >
              The Core Inquiry
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed font-medium"
            >
              The conference theme is structured around three fundamental perspectives that define our current educational landscape.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {/* SURVIVE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                <Shield size={32} className="text-[#e76366]" />
              </div>
              <div>
                <h3 className="text-3xl font-heading font-black text-white mb-4 uppercase tracking-tight">Survive?</h3>
                <p className="text-gray-400 leading-relaxed font-medium">
                  The pressures on English education compel us to ask what must endure. In universities, long-established disciplinary structures are under strain; in schools, spaces for language and literature compete with STEM-driven priorities. Yet core human capacities – critical thinking, ethical reasoning, empathy, imagination – remain uniquely nurtured through English at all levels. What foundational experiences in early literacy, storytelling, and reading cultures must survive? And how do we articulate the enduring value of English education in systems driven increasingly by metrics, markets, and mechanisation?
                </p>
              </div>
            </motion.div>

            {/* EVOLVE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                <Zap size={32} className="text-[#8355eb]" />
              </div>
              <div>
                <h3 className="text-3xl font-heading font-black text-white mb-4 uppercase tracking-tight">Evolve?</h3>
                <p className="text-gray-400 leading-relaxed font-medium">
                  Because the contexts of learning have changed dramatically, English education must evolve to remain meaningful. Students across age groups now inhabit digital ecosystems where AI-generated writing, machine translation, and algorithmic reading are everyday realities. Higher education navigates digital scholarship, posthuman theory, and academic integrity in the age of AI; schools negotiate device dependence, multimodal literacies, and diverse linguistic repertoires. How might curriculum, pedagogy, and assessment evolve across these contexts? What new approaches – multimodal composing, hybrid learning, AI-aware formative assessment, multilingual practice – can help English move beyond inherited binaries of print vs digital, teacher vs learner, human vs machine?
                </p>
              </div>
            </motion.div>

            {/* THRIVE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                <Star size={32} className="text-[#FFA239]" />
              </div>
              <div>
                <h3 className="text-3xl font-heading font-black text-white mb-4 uppercase tracking-tight">Thrive?</h3>
                <p className="text-gray-400 leading-relaxed font-medium">
                  Thriving requires imagination – not only for continuity but also for renewal. English education can become a site of hope: cultivating cultural literacy, ethical reflection, emotional intelligence, creativity, and connection across generations. Initiatives such as ELTAI's India Reads Movement reaffirm reading as a social, emotional, and cultural practice that nurtures imagination and lifelong learning. From digital humanities projects, interdisciplinary programmes, and community archiving to school-based reading circles, storytelling clubs, and creative writing spaces, English flourishes when language is lived, shared, and meaningfully experienced. What bold paradigms might allow English education not only to survive change but to shape it – across institutions, communities, and generations?
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave divider: White -> Black */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block" style={{background:'#fff'}}>
        <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#000000"/>
      </svg>

      {/* SECTION 6 — CLOSING INVITATION */}
      <section className="bg-black py-32 relative overflow-hidden">
        
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
              This conference invites all who shape, teach, research, learn, 
              write, imagine, and transform English education – from early 
              schooling to higher education – to engage in critical 
              reflection, creative experimentation, and collective envisioning 
              of what English might yet become on the edge of automation, 
              imagination, and transformation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConceptNotePage;
