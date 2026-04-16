import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import {
  FileText, GraduationCap, BookOpen, Palette,
  BookMarked, Briefcase, Cpu, Landmark, Users,
  Star, Layout, Monitor, Globe, PenTool,
  Zap, Mic, ArrowRight
} from 'lucide-react';
import PageBanner from '../components/PageBanner';

const CallForAbstractsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gradientText = {
    background: 'linear-gradient(90deg, #e76366, #8355eb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const presenters = [
    {
      icon: <GraduationCap size={18} className="text-white" />,
      title: "Educators, teacher-educators, academic researchers, school leaders, and institutional heads",
      desc: "across schools, colleges, and universities;"
    },
    {
      icon: <BookOpen size={18} className="text-white" />,
      title: "Curriculum designers, assessment professionals, instructional designers, and learning experience (LXD) specialists",
      desc: "involved in developing syllabi, evaluations, and learning systems;"
    },
    {
      icon: <Palette size={18} className="text-white" />,
      title: "Creative and cultural practitioners,",
      desc: "including writers, translators, editors, performers, and storytellers;"
    },
    {
      icon: <BookMarked size={18} className="text-white" />,
      title: "Publishers and content professionals",
      desc: "engaged in educational, academic, or creative publishing;"
    },
    {
      icon: <Briefcase size={18} className="text-white" />,
      title: "Industry and corporate professionals",
      desc: "working in communication, media, and language-driven fields;"
    },
    {
      icon: <Cpu size={18} className="text-white" />,
      title: "Technologists and innovators,",
      desc: "including edtech designers, AI developers, and data scientists at the intersection of language and technology;"
    },
    {
      icon: <Landmark size={18} className="text-white" />,
      title: "Policymakers and education leaders",
      desc: "involved in curriculum design, governance, and institutional reform;"
    },
    {
      icon: <Users size={18} className="text-white" />,
      title: "Libraries, NGOs, literacy organisations, and community educators",
      desc: "involved in education, multilingualism, and public humanities;"
    },
    {
      icon: <Star size={18} className="text-white" />,
      title: "Students and emerging scholars",
      desc: "at undergraduate, postgraduate, and doctoral levels."
    }
  ];

  const categoryA = [
    {
      name: "Paper Presentation",
      duration: "15 mins + 5 mins Q&A",
      icon: <FileText size={20} className="text-white" />,
      body: "A paper presentation consists of a structured academic talk based on research, critical analysis, or conceptual work. The format prioritises argument development, evidence, and scholarly discussion."
    },
    {
      name: "Poster Presentation",
      duration: "Interaction for 5 mins",
      icon: <Layout size={20} className="text-white" />,
      body: "A poster presentation communicates research or practice-based work through visual display. Posters are exhibited during a scheduled session, and presenters engage in discussion with participants as they view the materials."
    },
    {
      name: "Digital Humanities Demonstration",
      duration: "10–15 mins",
      icon: <Monitor size={20} className="text-white" />,
      body: "This format presents digital tools, archives, platforms, or datasets through live demonstration. The emphasis is on explaining functionality, method, and application in language and literature contexts."
    },
    {
      name: "Community / Public Humanities Showcase",
      duration: "10–15 mins",
      icon: <Globe size={20} className="text-white" />,
      body: "This format highlights literacy initiatives, community programmes, and educational work conducted beyond formal institutions. Presentations focus on purpose, practice, and social impact."
    }
  ];

  const categoryB = [
    {
      ribbon: "Only 15 accepted",
      icon: <PenTool size={22} className="text-white" />,
      name: "Workshop",
      duration: "90 mins – Only 15 workshops accepted",
      body: "Workshops are structured, activity-based sessions through which a method, pedagogy, or tool is taught. Emphasis is placed on demonstration, practice, and peer learning."
    },
    {
      ribbon: "Only 10 accepted",
      icon: <Zap size={22} className="text-white" />,
      name: "Lightning Talk",
      duration: "5 mins – Only 10 lightning talks accepted",
      body: "Lightning talks are brief, focused presentations built around a single idea, argument, or innovation. The format is time-bound and designed for clarity and sharpness of communication in TED-talks style."
    },
    {
      ribbon: "Only 25 accepted",
      icon: <Mic size={22} className="text-white" />,
      name: "Creative Performance – Poetry",
      duration: "5 mins – Only 25 poems accepted",
      body: "Poetry readings present literary work through live performance. The focus is on voice, language, and aesthetic engagement with the theme."
    },
    {
      ribbon: "Only 25 accepted",
      icon: <BookOpen size={22} className="text-white" />,
      name: "Creative Performance – Storytelling",
      duration: "5–7 mins – Only 25 stories accepted",
      body: "Storytelling sessions present narrative accounts drawn from lived, educational, or community contexts. Meaning is conveyed through oral narrative rather than analytical exposition."
    },
    {
      ribbon: "Only 15 accepted",
      icon: <Users size={22} className="text-white" />,
      name: "Teaching Clinics",
      duration: "30 mins – Only 15 accepted",
      body: "Teaching clinics are facilitated sessions of collaborative problem-solving. Classroom challenges are examined through guided discussion and shared pedagogical strategies."
    }
  ];

  return (
    <div className="bg-black min-h-screen font-sans text-white selection:bg-primary selection:text-black overflow-x-hidden">
      <PageBanner 
        title="Call For Abstracts"
        subtitle="Share your research and insights with a global community of scholars."
        breadcrumb={[
          { label: "Submit", path: "/submit" },
          { label: "Call For Abstracts" }
        ]}
        image="https://www.image2url.com/r2/default/images/1776333372596-4c745240-675e-4be0-bb26-d4444fa3565d.png"
      />

      {/* SECTION 2 — ELIGIBLE PRESENTERS */}
      <section className="bg-white py-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-['Caveat'] text-2xl mb-4" style={gradientText}>Who Can Present</p>
              <h2 className="font-['Poppins'] font-black text-gray-900 text-5xl md:text-7xl tracking-tighter uppercase">
                Eligible <span style={gradientText}>Presenters</span>
              </h2>
              <div className="h-1.5 w-24 mx-auto rounded-full bg-gradient-to-r from-[#e76366] to-[#8355eb] mt-8"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {presenters.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 border border-gray-100 p-10 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e76366] to-[#8355eb] shadow-lg flex items-center justify-center mb-8 text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="font-['Poppins'] font-black text-xl text-gray-900 mb-4 tracking-tight leading-snug">{item.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto mt-20 text-center italic font-medium">
            All individuals and groups whose work intersects with the future of English language and literature – through teaching, research, creativity, policy, or practice – are warmly invited to contribute.
          </p>
        </div>
      </section>

      {/* Wave divider: white -> black */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block relative z-10" style={{ background: '#fff' }}>
        <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#000000" />
      </svg>

      {/* SECTION 3 — SUBMISSION CATEGORIES INTRO */}
      <section className="py-32 bg-black relative z-10 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#e76366]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#8355eb]/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
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
                <span className="text-xs font-bold tracking-widest uppercase text-gray-500">What Can Be Presented?</span>
              </div>

              <h2 className="font-['Poppins'] font-black text-4xl md:text-5xl lg:text-7xl text-white mb-8 leading-[1.1] tracking-tighter uppercase">
                Submission <br/>
                <span style={gradientText}>Categories</span>
              </h2>

              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
                <p>
                  The conference welcomes a wide range of <span className="text-white font-bold">research-based, classroom-driven, creative, and community-focused contributions</span> that engage with any one of the seven domains of the conference theme <span style={gradientText} className="font-bold italic">"English on the Edge: Survive? Evolve? Thrive?"</span>.
                </p>
                <p>
                  To balance academic depth with experiential learning, <span className="text-white font-bold">presentation formats are organised into two programme categories.</span> These categories are <span className="text-white font-bold">organisational, not hierarchical.</span> All accepted presentations carry equal academic value.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-black">A</div>
                  <span className="text-gray-300 font-bold">Core Academic Formats</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-black">B</div>
                  <span className="text-gray-300 font-bold">Highly Selective Slots</span>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="relative rounded-[3rem] overflow-hidden bg-zinc-900 aspect-[4/3] shadow-2xl border border-white/5 transform group-hover:-translate-y-2 transition-all duration-700">
                <img 
                  src="https://www.image2url.com/r2/default/images/1776333421148-8c3aa905-9397-4398-a2e4-08d5e5ea0363.png" 
                  alt="Academic presentation" 
                  className="w-full h-full object-cover relative z-0 opacity-80"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-zinc-900 p-6 rounded-3xl shadow-xl border border-white/5 hidden md:block">
                <p className="text-4xl font-black text-white mb-1">9+</p>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Unique Formats</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CATEGORY A */}
      <section className="bg-white py-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="font-['Caveat'] text-2xl mb-4" style={gradientText}>Core Academic Formats</p>
                <h2 className="font-['Poppins'] font-black text-gray-900 text-5xl md:text-7xl tracking-tighter mb-8 uppercase">
                  Category <span style={gradientText}>A</span>
                </h2>
                <p className="text-gray-600 text-xl font-medium leading-relaxed">
                  Academic and research-oriented presentations focusing on theoretical frameworks and empirical studies. <span className="text-gray-900 font-bold">One submission allowed per participant.</span>
                </p>
              </motion.div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {categoryA.map((item, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-100 p-8 rounded-[2rem] hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e76366] to-[#8355eb] shadow-md flex items-center justify-center mb-6 text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <h4 className="text-gray-900 font-black text-xl mb-2">{item.name}</h4>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-4">{item.duration}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider: white -> black */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block relative z-10" style={{ background: '#fff' }}>
        <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#000000" />
      </svg>

      {/* SECTION 5 — CATEGORY B */}
      <section className="bg-black py-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="font-['Caveat'] text-2xl mb-4" style={gradientText}>Interactive & Creative Formats</p>
                <h2 className="font-['Poppins'] font-black text-white text-5xl md:text-7xl tracking-tighter mb-8 uppercase">
                  Category <span style={gradientText}>B</span>
                </h2>
                <p className="text-gray-400 text-xl font-medium leading-relaxed">
                  High-engagement and participatory formats that are limited due to logistical constraints. Acceptance is <span className="text-white font-bold">competitive and subject to programme feasibility.</span>
                </p>
              </motion.div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {categoryB.map((item, idx) => (
                <div key={idx} className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] hover:border-zinc-600 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#e76366] to-[#8355eb] text-white text-[9px] font-black uppercase tracking-widest py-1.5 px-4 rounded-bl-2xl z-10">
                    {item.ribbon}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-black text-xl mb-2">{item.name}</h4>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-4">{item.duration}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallForAbstractsPage;
