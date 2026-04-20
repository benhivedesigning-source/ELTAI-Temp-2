import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Shield, RotateCw, Sun } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const DomainsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  const pillars = [
    {
      title: "SURVIVE",
      subtitle: "What Must Endure",
      icon: <Shield className="w-8 h-8 text-white" />,
      gradient: "from-[#e76366] to-[#c0507a]",
      domains: [
        { id: 1, title: "Future of English Education" },
        { id: 2, title: "English Policy & Governance" }
      ]
    },
    {
      title: "EVOLVE",
      subtitle: "What Must Transform",
      icon: <RotateCw className="w-8 h-8 text-white" />,
      gradient: "from-[#b05aac] to-[#9645c0]",
      domains: [
        { id: 3, title: "English Teaching in the AI Era" },
        { id: 4, title: "English Curricula for a Changing World" },
        { id: 5, title: "Human-Centred, AI-Informed English Assessment" }
      ]
    },
    {
      title: "THRIVE",
      subtitle: "What Can Flourish",
      icon: <Sun className="w-8 h-8 text-white" />,
      gradient: "from-[#8355eb] to-[#6040d0]",
      domains: [
        { id: 6, title: "Literature & Digital Humanities" },
        { id: 7, title: "English Beyond Classrooms" }
      ]
    }
  ];

  const detailedDomains = [
    {
      id: 1,
      title: "Future of English Education",
      description: "As English departments shrink in universities and English hours diminish in school timetables, this domain revisits the values and purposes that must remain non-negotiable across all levels of education. It examines the structural, cultural, and intellectual pressures shaping English in higher education and the parallel curriculum, workload, and policy pressures shaping English in schools.",
      image: "https://www.image2url.com/r2/default/images/1776330987723-e12329d8-7c53-4b3a-9e7c-13c81b9c7140.png",
      provocations: [
        "What is worth defending, whether in a university department or a crowded school timetable?",
        "How do we articulate English education's value when institutions demand metrics, not meaning?",
        "What new leadership models or organisational forms could sustain English across sectors?",
        "Are we witnessing decline or the early stages of transformation?"
      ]
    },
    {
      id: 2,
      title: "English Policy and Governance",
      description: "Policies decide which subjects survive, which shrink, and which evolve. This domain examines how national policy frameworks, school reforms, higher education governance, regulatory bodies, and ideological debates shape the destiny of English education in both universities and schools.",
      image: "https://www.image2url.com/r2/default/images/1776329747877-026dcfe4-4ce8-4368-a156-0dd3aaff4dfc.png",
      provocations: [
        "How do language and education policies elevate or erode English studies and school English learning?",
        "How do political narratives about nationalism, multilingualism, or employability shape curricular decisions?",
        "What autonomy do institutions and schools have under shifting priorities?",
        "What futures do today's policy trends imagine for English learners and teachers?"
      ]
    },
    {
      id: 3,
      title: "English Teaching in the AI Era",
      description: "As AI becomes co-reader, co-writer, and co-teacher, this domain explores how English teaching must evolve. It considers how AI reshapes pedagogy, teacher identity, learner engagement, integrity, and trust.",
      image: "https://www.image2url.com/r2/default/images/1776329984410-793270e6-5cb2-4c4b-aaa5-5abf4ac6c342.png",
      provocations: [
        "What remains decisively human in English teaching at school and university levels?",
        "How does AI change the nature of classroom interaction, mentorship, and learner motivation?",
        "Can AI deepen learning, or does it risk displacing it, especially for young learners?",
        "What new roles must teachers inhabit as guides, ethicists, or creative facilitators?"
      ]
    },
    {
      id: 4,
      title: "English Curricula for a Changing World",
      description: "New literacies, digital cultures, and evolving learner identities demand curricula that reflect the real worlds that children, adolescents, and adults inhabit. This domain invites parallel conversations about curriculum renewal in schools and universities.",
      image: "https://www.image2url.com/r2/default/images/1776330082023-a6189860-5a87-4e51-ae69-f60c2e1a0a6f.png",
      provocations: [
        "What competencies should a modern curriculum prioritise at foundational, intermediate, and advanced levels?",
        "How do we balance literary inheritance with innovation in multimodal and multilingual contexts?",
        "What does curriculum relevance mean across early schooling, secondary learning, and higher education?",
        "How do we design curricular pathways that build continuity rather than fragmentation?"
      ]
    },
    {
      id: 5,
      title: "Human-Centred, AI-Informed English Assessment",
      description: "Assessment must evolve as technological and digital tools reshape reading, writing, and meaning-making. This domain explores how evaluation can remain human-centred while acknowledging technological realities in classrooms, from primary to postgraduate education.",
      image: "https://www.image2url.com/r2/default/images/1776330258743-da37fe27-180a-4aea-934f-849e899f0f6e.png",
      provocations: [
        "What counts as 'authentic work' when AI tools can convincingly mimic student voice across levels?",
        "Should school assignments and university assessments prioritise processes or products?",
        "How do we ensure fairness, accountability, and transparency in algorithmic environments?",
        "What hybrid assessment models can honour teacher judgement while integrating AI responsibly?"
      ]
    },
    {
      id: 6,
      title: "Literature and Digital Humanities",
      description: "Where imagination meets digital culture, new possibilities emerge for meaning-making. This domain brings together school teachers using multimodal storytelling with university scholars working in digital humanities, exploring how literature can thrive across contexts.",
      image: "https://www.image2url.com/r2/default/images/1776330369761-8b91f352-5e02-4058-9b35-ce5387c7f63b.png",
      provocations: [
        "How does literature help children, adolescents, and adults dream, reflect, and imagine in an automated world?",
        "What new forms of storytelling arise when narrative meets data, gaming, or visual culture?",
        "Can digital humanities democratise cultural knowledge for young learners and general readers?",
        "How does literary imagination evolve when computational creativity enters classrooms?"
      ]
    },
    {
      id: 7,
      title: "English Beyond Classrooms",
      description: "Learning unfolds across communities, public spaces, and digital networks – from ELTAI's India Reads Movement to school reading clubs to university outreach projects. This domain explores how English flourishes where people gather, create, and learn together. It also welcomes work emerging from non-formal and community learning spaces such as libraries, NGOs, street-connected learning programmes, public reading initiatives, and alternative schooling environments where English functions as a bridge to expression, dignity, and opportunity.",
      image: "https://www.image2url.com/r2/default/images/1776330565479-af8ed9e8-454b-4091-8141-18e457bf088e.png",
      provocations: [
        "What can schools, colleges, and communities learn from each other's literacy practices?",
        "How can public spaces – libraries, parks, streets – become sites of engagement with learning and reading?",
        "how can partnerships with NGOs, libraries, and community educators expand access to English learning for marginalised and out-of-school learners?",
        "What new pedagogies arise from community storytelling, outdoor learning, or digital commons?"
      ]
    }
  ];

  return (
    <div className="bg-black min-h-screen font-sans text-white selection:bg-primary selection:text-black overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] md:h-[80vh] flex flex-col justify-center items-center overflow-hidden pt-20">
        {/* Background Image */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://www.image2url.com/r2/default/images/1776321806823-c794601e-529e-4262-b1e2-1706941aebed.png" 
            alt="Conference Domains" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          {/* Deep Gradient Blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black"></div>
          
          {/* Ambient Glows */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#e76366]/20 blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#8355eb]/20 blur-[120px] translate-x-1/2 translate-y-1/2"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 text-center">
          {/* Breadcrumb */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center items-center gap-2 text-sm font-medium text-gray-400"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-zinc-700">/</span>
            <Link to="/theme" className="hover:text-white transition-colors">Theme</Link>
            <span className="text-zinc-700">/</span>
            <span style={gradientText} className="font-bold">Domains</span>
          </motion.nav>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter uppercase mb-6 leading-[0.9]"
          >
            Conference <br/> 
            <span style={gradientText}>Domains</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto font-medium"
          >
            Seven interconnected domains grouped under three overarching perspectives – Survive, Evolve, and Thrive.
          </motion.p>
        </div>

        {/* BLENDED WAVE DIVIDER */}
        <div className="absolute bottom-0 left-0 w-full z-20 translate-y-[1px]">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* SECTION 2 — PILLARS & DOMAINS GRID */}
      <section className="bg-white py-32 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {/* Watermark */}
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0.1, 0.4], [100, -100]) }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none"
          >
            <span className="font-heading font-black text-[25vw] leading-none tracking-tighter text-black block uppercase">
              PERSPECTIVES
            </span>
          </motion.div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          {/* Animated Blobs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -left-24 w-96 h-96 bg-[#e76366] opacity-[0.05] rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-[#8355eb] opacity-[0.05] rounded-full blur-[100px]"
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400">The Three Pillars</span>
                <div className="w-12 h-px bg-primary"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-black uppercase tracking-tighter leading-tight">
                Conference <span style={gradientText}>Perspectives</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pillars.map((pillar, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative group h-full"
              >
                {/* Card Shadow/Glow */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 rounded-[2.5rem]`}></div>
                
                <div className="relative bg-zinc-900 rounded-[2.5rem] p-8 lg:p-10 flex flex-col items-center text-center shadow-2xl border border-zinc-800 group-hover:border-zinc-700 transition-all duration-500 h-full overflow-hidden">
                  {/* Background Number */}
                  <div className="absolute -top-10 -right-10 text-[12rem] font-black text-white/[0.02] pointer-events-none group-hover:text-white/[0.05] transition-colors duration-700 leading-none">
                    {index + 1}
                  </div>

                  {/* Icon Section */}
                  <div className="relative mb-8">
                    <div className={`absolute -inset-4 rounded-full bg-gradient-to-br ${pillar.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`}></div>
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl bg-gradient-to-br ${pillar.gradient} transform group-hover:scale-110 transition-all duration-500 relative z-10`}
                    >
                      {pillar.icon}
                    </motion.div>
                  </div>

                  {/* Title Section */}
                  <div className="mb-10 relative z-10">
                    <h2 className="font-heading font-black text-4xl lg:text-5xl text-white mb-2 tracking-tighter uppercase italic group-hover:scale-105 transition-transform duration-500">
                      {pillar.title}
                    </h2>
                    <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px] lg:text-xs">
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Domains List */}
                  <div className="w-full space-y-4 mt-auto relative z-10">
                    {pillar.domains.map((domain) => (
                      <motion.div
                        key={domain.id}
                        whileHover={{ x: 8 }}
                        className="relative group/domain"
                      >
                        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-5 text-left hover:border-white/30 hover:bg-white/10 transition-all duration-300">
                          <div className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${pillar.gradient} text-white font-black text-xs shrink-0`}>
                              {domain.id}
                            </div>
                            <h3 className="text-white font-bold text-sm leading-tight group-hover/domain:text-primary transition-colors">
                              {domain.title}
                            </h3>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave divider: White -> Black */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block" style={{background:'#fff'}}>
        <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#000000"/>
      </svg>

      {/* SECTION 3 — THE CORE INQUIRY */}
      <section className="bg-black py-32 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#e76366]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#8355eb]/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-500">The Core Inquiry</span>
              </div>

              <h2 className="font-['Poppins'] font-black text-4xl md:text-5xl lg:text-7xl text-white mb-8 leading-[1.1] tracking-tighter uppercase">
                Overlapping <br/>
                <span style={gradientText}>Lenses</span>
              </h2>

              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 font-medium">
                These three questions guide the core inquiry of this conference. They function as overlapping lenses rather than linear stages, challenging us to rethink our relationship with the English language in an automated world.
              </p>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-6"
              >
                {[
                  { title: "Survive?", icon: <Shield size={24} />, color: "#e76366", desc: "What must endure in the face of structural pressures?" },
                  { title: "Evolve?", icon: <RotateCw size={24} />, color: "#b05aac", desc: "What must transform as pedagogy and technology intersect?" },
                  { title: "Thrive?", icon: <Sun size={24} />, color: "#8355eb", desc: "What can flourish when imagination meets new possibilities?" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={staggerItem}
                    whileHover={{ x: 10, scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                    className="flex items-center gap-6 bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${item.color}20`, color: item.color, border: `1px solid ${item.color}40` }}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-black text-xl italic">{item.title}</h3>
                      <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="relative rounded-[3rem] overflow-hidden bg-zinc-900 aspect-[4/5] shadow-2xl border border-white/5 transform group-hover:-translate-y-2 transition-all duration-700">
                <img 
                  src="https://www.image2url.com/r2/default/images/1776318550019-340d0891-639f-4aaf-bac4-4cbf2e4088b4.webp" 
                  alt="Future of education" 
                  className="w-full h-full object-cover relative z-0 opacity-80"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Floating Content on Image */}
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                    <p className="text-white font-medium text-lg leading-relaxed italic">
                      "In the intersection of tradition and technology, we find the edge where English truly lives."
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Orbs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#e76366]/20 blur-[80px] rounded-full -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#8355eb]/20 blur-[80px] rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — DETAILED DOMAINS */}
      <section className="bg-white py-32 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.03]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] border border-black rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-black rounded-full"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="space-y-40">
            {detailedDomains.map((domain, index) => (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Background Glow */}
                <div className={`absolute -inset-20 bg-gradient-to-br ${index % 3 === 0 ? 'from-[#e76366]/10' : index % 3 === 1 ? 'from-[#b05aac]/10' : 'from-[#8355eb]/10'} to-transparent blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>

                <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Image Section — Creative Masking */}
                  <div className="w-full lg:w-1/2 relative group">
                    <motion.div 
                      whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                      transition={{ duration: 0.6 }}
                      className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square"
                    >
                      <img 
                        src={domain.image} 
                        alt={domain.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    </motion.div>
                    
                    {/* Decorative Elements */}
                    <div className={`absolute -top-6 -left-6 w-24 h-24 border-4 border-primary/20 rounded-3xl -z-10 group-hover:rotate-12 transition-transform duration-500`}></div>
                    <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10`}></div>
                    
                    {/* Domain ID Badge */}
                    <div className="absolute -bottom-10 right-10 lg:-right-10 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-zinc-100 flex items-center gap-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-white font-black text-3xl">
                        {domain.id}
                      </div>
                      <div>
                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Domain</p>
                        <p className="text-black font-bold text-lg">Focus</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-primary"></div>
                        <p className="font-['Caveat'] text-2xl" style={gradientText}>Domain {domain.id}</p>
                      </div>
                      
                      <h2 className="font-['Poppins'] font-black text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-8 leading-[1.1] tracking-tighter">
                        {domain.title}
                      </h2>
                      
                      <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12 font-medium">
                        {domain.description}
                      </p>

                      {/* Provocations Section */}
                      <div className="space-y-6">
                        <h4 className="text-gray-900 font-black text-xs uppercase tracking-[0.3em] flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-primary"></span>
                          Guiding Provocations
                        </h4>

                        <motion.div 
                          variants={staggerContainer}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, margin: "-50px" }}
                          className="grid grid-cols-1 gap-4"
                        >
                          {domain.provocations.map((q, i) => (
                            <motion.div 
                              key={i}
                              variants={staggerItem}
                              whileHover={{ x: 10, scale: 1.01 }}
                              className="bg-zinc-50 hover:bg-white p-6 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:shadow-xl transition-all duration-300 group/item flex gap-5 items-center"
                            >
                              <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center shrink-0 group-hover/item:bg-primary transition-all duration-300 shadow-lg">
                                <span className="text-white font-black text-lg">?</span>
                              </div>
                              <p className="text-gray-700 text-base font-bold leading-snug">
                                {q}
                              </p>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Background Watermark */}
                <div className={`absolute -bottom-20 ${index % 2 === 0 ? '-right-20' : '-left-20'} text-[20rem] font-black text-black/[0.02] pointer-events-none select-none -z-10 leading-none`}>
                  0{domain.id}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default DomainsPage;
