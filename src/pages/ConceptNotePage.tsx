import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Zap, Star, Calendar, MapPin, GraduationCap, ChevronDown, ArrowRight, Quote } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
      {/* Breadcrumb */}
      <nav className="pt-24 max-w-[1800px] mx-auto px-4 lg:px-8 py-4">
        <div className="text-gray-500 text-sm font-medium flex items-center gap-2">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-zinc-700">/</span>
          <Link to="/theme" className="hover:text-white transition-colors">Theme</Link>
          <span className="text-zinc-700">/</span>
          <span style={gradientText} className="font-bold">Concept Note</span>
        </div>
      </nav>

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[calc(100vh-120px)] flex items-center justify-center overflow-hidden">
        {/* Radial gradient glow */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#e76366] opacity-15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#8355eb] opacity-15 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        {/* Floating decorative shapes */}
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full border-2 border-[#e76366] opacity-10"
        />
        <motion.div 
          animate={{ y: [0, -30, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 left-1/5 w-24 h-24 rounded-full border border-[#8355eb] opacity-5"
        />
        <motion.div 
          animate={{ y: [0, -25, 0], rotate: [0, 45, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-[#e76366] opacity-10"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        <motion.div 
          animate={{ y: [0, -15, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-1/4 right-1/3 w-12 h-12 rounded-full bg-[#8355eb] opacity-10"
        />
        <motion.div 
          animate={{ y: [0, -35, 0], rotate: [0, -45, 0] }} 
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-1/2 right-1/6 w-16 h-16 border border-[#e76366] opacity-5"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-['Caveat'] text-lg tracking-widest mb-6" style={gradientText}>
              Concept Note
            </p>
            <h1 className="font-['Poppins'] font-black text-5xl md:text-7xl text-white leading-tight mb-2">
              English on the Edge:
            </h1>
            <h1 className="font-['Poppins'] font-black text-5xl md:text-7xl leading-tight mb-6" style={gradientText}>
              Survive? Evolve? Thrive?
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mt-4 max-w-3xl mx-auto">
              The 20th International and 56th Annual Conference of ELTAI
            </p>

            <div className="mt-12 flex gap-3 flex-wrap justify-center">
              <div className="bg-zinc-900 border border-zinc-700 rounded-full px-5 py-2 text-white text-sm font-bold flex items-center gap-2">
                <Calendar size={16} />
                07–10 October 2026
              </div>
              <div className="bg-zinc-900 border border-zinc-700 rounded-full px-5 py-2 text-white text-sm font-bold flex items-center gap-2">
                <MapPin size={16} />
                MIT ADT University, Pune
              </div>
              <div className="bg-zinc-900 border border-zinc-700 rounded-full px-5 py-2 text-white text-sm font-bold flex items-center gap-2">
                <GraduationCap size={16} />
                20th International & 56th Annual
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Wave divider: Black -> White */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block" style={{background:'#000'}}>
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff"/>
      </svg>

      {/* SECTION 2 — OPENING PULL QUOTE */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative">
          {/* Giant quotation mark */}
          <div className="absolute top-0 left-0 text-[12rem] leading-none opacity-20 pointer-events-none -translate-x-4 -translate-y-12" style={gradientText}>
            ❝
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-['Caveat'] text-2xl mb-8 pl-8 md:pl-16" style={gradientText}>
                Opening Statement
              </p>
              
              <p className="text-gray-700 text-xl md:text-2xl leading-relaxed font-medium italic pl-8 md:pl-16">
                "The teaching of English language and literature – across schools,
                colleges, and universities – stands at a defining crossroads in 
                the twenty-first century. From early literacy classrooms to 
                postgraduate seminars, educators across contexts are negotiating 
                profound shifts in purpose, practice, and possibility. In higher 
                education, English departments are being downsized or 
                restructured, and the very identity of the discipline is under 
                scrutiny. This trend is visible in institutions across the US, 
                the UK, Australia, and India, where English departments have 
                faced closures, mergers, or significant restructuring. At the 
                school level, teachers confront parallel pressures – rising 
                curricular demands, multilingual realities, and the accelerating 
                presence of AI in young people's reading and writing lives. 
                Across the educational continuum, a shared question emerges: 
                what remains distinctively human about English education when 
                machines can read, write, translate, and even emulate teaching?"
              </p>

              <div className="mt-12 pl-8 md:pl-16">
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white mb-4" style={{ background: 'linear-gradient(90deg, #e76366, #8355eb)' }}>
                  NEP 2020
                </span>
                <p className="text-gray-600 text-lg leading-relaxed">
                  In the Indian context, these transformations are shaped 
                  significantly by the National Education Policy (NEP) 2020, which 
                  foregrounds multilingual education, competency-based learning, 
                  curricular flexibility, and the thoughtful integration of 
                  technology across schooling and higher education. English 
                  education today must therefore be understood not in isolation, 
                  but in dialogue with the broader reforms and aspirations 
                  envisioned by NEP 2020.
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

      {/* SECTION 3 — WHAT IS THE EDGE? */}
      <section className="bg-black py-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="font-['Caveat'] text-2xl mb-4" style={gradientText}>
              The Concept
            </p>
            <h2 className="font-['Poppins'] font-black text-4xl md:text-5xl text-white">
              What is 'The Edge'?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-gray-300 text-xl leading-relaxed mt-12">
              "English on the Edge: Survive? Evolve? Thrive?" captures this 
              moment of both uncertainty and possibility. The "edge" here is 
              not merely a point of crisis or decline, but a dynamic threshold 
              where continuity and change meet. It is a space of negotiation 
              between inherited traditions and emerging futures, between 
              disciplinary stability and transformation. At this edge, English 
              education is neither collapsing nor complete; rather, it is being 
              reimagined. The questions of survival, evolution, and thriving 
              are not sequential stages but co-existing perspectives through 
              which the present and future of English studies can be examined. While some political and ideological discourses frame English as a colonial inheritance to be resisted, global realities continue to position it as a language of connection, mobility, and shared intellectual exchange. At the same time, advances in artificial intelligence, digital platforms, and data-driven learning challenge long-held assumptions about reading, writing, authorship, and assessment. In this complex landscape, English education must respond not only by defending its relevance but by rearticulating its purpose – ethically, critically, and creatively.
            </p>

            <div className="bg-zinc-900 border-l-4 border-[#e76366] rounded-r-2xl p-6 md:p-8 mt-12 relative">
              <Quote className="absolute top-6 left-6 w-8 h-8 opacity-20" color="#e76366" />
              <p className="text-gray-300 italic text-lg leading-relaxed pl-12">
                In India's multilingual ecology – shaped by constitutional 
                languages, rich regional linguistic traditions, and everyday 
                classroom realities – English functions not as a replacement 
                for other languages, but as a complementary resource that 
                coexists with and draws strength from linguistic diversity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — THREE PILLARS */}
      <section className="bg-black py-24">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="font-['Caveat'] text-2xl mb-6" style={gradientText}>
              Core Inquiry
            </p>
            <h2 className="font-['Poppins'] font-black text-3xl md:text-4xl text-white leading-tight max-w-4xl mx-auto">
              The three questions – <span style={gradientText}>Survive? Evolve? Thrive?</span> – guide the core inquiry of this conference. They function as overlapping lenses rather than linear stages.
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* CARD 1: SURVIVE? */}
            <motion.div 
              variants={staggerItem}
              className="bg-zinc-900 rounded-[2rem] p-8 md:p-10 border border-zinc-800 hover:border-[#e76366] hover:shadow-[0_0_30px_rgba(231,99,102,0.2)] transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #e76366, #c0507a)' }}>
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="font-['Poppins'] font-black text-4xl md:text-5xl mb-6" style={gradientText}>
                SURVIVE?
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                The pressures on English education compel us to ask what must 
                endure. In universities, long-established disciplinary structures 
                are under strain; in schools, spaces for language and literature 
                compete with STEM-driven priorities. Yet core human capacities – 
                critical thinking, ethical reasoning, empathy, imagination – 
                remain uniquely nurtured through English at all levels. What 
                foundational experiences in early literacy, storytelling, and 
                reading cultures must survive? And how do we articulate the 
                enduring value of English education in systems driven 
                increasingly by metrics, markets, and mechanisation?
              </p>
            </motion.div>

            {/* CARD 2: EVOLVE? */}
            <motion.div 
              variants={staggerItem}
              className="bg-zinc-900 rounded-[2rem] p-8 md:p-10 border border-zinc-800 hover:border-[#b05aac] hover:shadow-[0_0_30px_rgba(176,90,172,0.2)] transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #b05aac, #9645c0)' }}>
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="font-['Poppins'] font-black text-4xl md:text-5xl mb-6" style={gradientText}>
                EVOLVE?
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Because the contexts of learning have changed dramatically, 
                English education must evolve to remain meaningful. Students 
                across age groups now inhabit digital ecosystems where 
                AI-generated writing, machine translation, and algorithmic 
                reading are everyday realities. Higher education navigates 
                digital scholarship, posthuman theory, and academic integrity 
                in the age of AI; schools negotiate device dependence, 
                multimodal literacies, and diverse linguistic repertoires. How 
                might curriculum, pedagogy, and assessment evolve across these 
                contexts? What new approaches – multimodal composing, hybrid 
                learning, AI-aware formative assessment, multilingual practice 
                – can help English move beyond inherited binaries of print vs 
                digital, teacher vs learner, human vs machine?
              </p>
            </motion.div>

            {/* CARD 3: THRIVE? */}
            <motion.div 
              variants={staggerItem}
              className="bg-zinc-900 rounded-[2rem] p-8 md:p-10 border border-zinc-800 hover:border-[#8355eb] hover:shadow-[0_0_30px_rgba(131,85,235,0.2)] transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #8355eb, #6040d0)' }}>
                <Star className="text-white" size={24} />
              </div>
              <h3 className="font-['Poppins'] font-black text-4xl md:text-5xl mb-6" style={gradientText}>
                THRIVE?
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Thriving requires imagination – not only for continuity but 
                also for renewal. English education can become a site of hope: 
                cultivating cultural literacy, ethical reflection, emotional 
                intelligence, creativity, and connection across generations. 
                Initiatives such as ELTAI's India Reads Movement reaffirm 
                reading as a social, emotional, and cultural practice that 
                nurtures imagination and lifelong learning. From digital 
                humanities projects, interdisciplinary programmes, and 
                community archiving to school-based reading circles, 
                storytelling clubs, and creative writing spaces, English 
                flourishes when language is lived, shared, and meaningfully 
                experienced. What bold paradigms might allow English education 
                not only to survive change but to shape it – across 
                institutions, communities, and generations?
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — CLOSING INVITATION */}
      <section className="bg-black py-32 relative overflow-hidden">
        {/* Watermark text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Poppins'] font-black text-[8vw] opacity-[0.04] whitespace-nowrap pointer-events-none z-0" style={gradientText}>
          SURVIVE · EVOLVE · THRIVE
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-['Caveat'] text-2xl mb-4" style={gradientText}>
              Be Part of It
            </p>
            <h2 className="font-['Poppins'] font-black text-4xl md:text-6xl text-white mb-6">
              Join the Conversation
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
              This conference invites all who shape, teach, research, learn, 
              write, imagine, and transform English education – from early 
              schooling to higher education – to engage in critical 
              reflection, creative experimentation, and collective envisioning 
              of what English might yet become on the edge of automation, 
              imagination, and transformation.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white rounded-full px-8 py-4 font-black text-lg shadow-[0_0_30px_rgba(231,99,102,0.3)] flex items-center gap-2"
                style={{ background: 'linear-gradient(90deg, #e76366, #8355eb)' }}
              >
                Register Now <ArrowRight size={20} />
              </motion.button>
              
              <motion.button 
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                className="border-2 border-white/30 text-white rounded-full px-8 py-4 font-black text-lg transition-colors"
              >
                Submit Abstract
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConceptNotePage;
