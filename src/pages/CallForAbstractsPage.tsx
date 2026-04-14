import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import {
  FileText, GraduationCap, BookOpen, Palette,
  BookMarked, Briefcase, Cpu, Landmark, Users,
  Star, Layout, Monitor, Globe, PenTool,
  Zap, Mic, ArrowRight
} from 'lucide-react';

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
      {/* BREADCRUMB */}
      <nav className="pt-24 max-w-[1800px] mx-auto px-4 lg:px-8 py-4 relative z-20">
        <div className="text-gray-500 text-sm font-medium flex items-center gap-2">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-zinc-700">/</span>
          <Link to="/submit" className="hover:text-white transition-colors">Submit</Link>
          <span className="text-zinc-700">/</span>
          <span style={gradientText} className="font-bold">Call for Abstracts</span>
        </div>
      </nav>

      {/* SECTION 1 — CINEMATIC HERO */}
      <section className="min-h-[60vh] relative overflow-hidden bg-black flex items-center justify-center text-center">
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#e76366]/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8355eb]/15 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <span className="font-['Poppins'] font-black text-[20vw] leading-none tracking-tighter opacity-[0.03]" style={gradientText}>
              SUBMIT
            </span>
          </div>
        </div>

        {/* FOREGROUND */}
        <div className="relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 }}
            className="bg-zinc-900 border border-zinc-800 rounded-full px-5 py-2 inline-flex items-center gap-2"
          >
            <FileText size={14} className="text-[#e76366]" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">Registration</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="font-['Poppins'] font-black text-white text-6xl md:text-8xl mt-4 leading-tight">
              Call for <br />
              <span style={gradientText}>Abstracts</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed font-['Inter']">
              The 20th International and 56th Annual Conference of ELTAI invites submissions that engage critically, creatively, or experimentally with the conference theme <span style={gradientText} className="font-bold">"English on the Edge: Survive? Evolve? Thrive?"</span> and the seven conference domains. Contributors are encouraged to propose work that is original, rigorous, and reflective of emerging questions in English language and literature studies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — ELIGIBLE PRESENTERS */}
      <section className="py-24 bg-black relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 }}
            className="bg-zinc-900 border border-zinc-800 rounded-full px-5 py-2 inline-flex items-center gap-2 mb-8"
          >
            <FileText size={14} className="text-[#e76366]" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">Registration</span>
          </motion.div>

          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-[#e76366] to-[#8355eb] text-white rounded-full px-5 py-2 font-black text-sm uppercase tracking-widest">
              ELIGIBLE PRESENTERS
            </div>
            <h2 className="font-['Poppins'] font-black text-white text-2xl">
              Who can present?
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mt-4 mb-12 font-['Inter']">
            Participation is open to a broad community of stakeholders connected to English education, scholarship, and creative practice. Submissions are welcome from:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {presenters.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.07 }}
                className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-black/60 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "text-white group-hover:text-primary transition-colors" })}
                </div>
                <div>
                  <h3 className="font-['Poppins'] font-bold text-white text-base leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mt-1 font-['Inter']">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-400 text-base leading-relaxed max-w-4xl mt-10 italic font-['Inter']">
            All individuals and groups whose work intersects with the future of English language and literature – through teaching, research, creativity, policy, or practice – are warmly invited to contribute.
          </p>
        </div>
      </section>

      {/* Wave divider: black -> white */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block relative z-10" style={{ background: '#000' }}>
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 3 — SUBMISSION CATEGORIES INTRO */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-[#e76366] to-[#8355eb] text-white rounded-full px-5 py-2 font-black text-sm uppercase tracking-widest">
              SUBMISSION CATEGORIES
            </div>
            <h2 className="font-['Poppins'] font-black text-gray-900 text-2xl">
              What Can Be Presented?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed space-y-5 font-['Inter']">
            <p>
              The conference welcomes a wide range of <span className="font-bold text-gray-900">research-based, classroom-driven, creative, and community-focused contributions</span> that engage with any one of the seven domains of the conference theme <span style={gradientText} className="font-bold italic">"English on the Edge: Survive? Evolve? Thrive?"</span>.
            </p>
            <p>
              To balance academic depth with experiential learning, <span className="font-bold text-gray-900">presentation formats are organised into two programme categories.</span> These categories are <span className="font-bold text-gray-900">organisational, not hierarchical.</span> All accepted presentations carry equal academic value. Each submission is evaluated independently on merit, relevance, and quality, regardless of category. Creative and practice-based contributions are valued on par with traditional academic papers.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CATEGORY A */}
      <section className="py-16 bg-white relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gray-50 border border-gray-200 rounded-[2rem] p-8 mb-12">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="bg-gradient-to-r from-[#e76366] to-[#8355eb] text-white rounded-full px-6 py-2.5 font-black text-base uppercase tracking-widest">
                CATEGORY A
              </div>
              <h2 className="font-['Poppins'] font-black text-gray-900 text-2xl">
                Core Academic & Community Formats
              </h2>
            </div>
            <p className="text-gray-600 text-base mt-4 leading-relaxed font-['Inter']">
              <span className="font-bold text-gray-900">One submission allowed per participant.</span> Category A represents the primary scholarly and practice-based programme of the conference and includes:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categoryA.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-[2rem] p-8 hover:border-transparent hover:shadow-[0_0_0_2px_#e76366,0_20px_60px_rgba(231,99,102,0.1)] transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-['Poppins'] font-black text-gray-900 text-xl">
                      {item.name}
                    </h3>
                    <div className="bg-gray-100 text-gray-600 rounded-full px-4 py-1.5 text-xs font-bold inline-block mt-2">
                      {item.duration}
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center bg-gradient-to-br from-[#e76366] to-[#8355eb]">
                    {item.icon}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mt-5 flex-1 font-['Inter']">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave divider: white -> black */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block relative z-10" style={{ background: '#fff' }}>
        <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#000000" />
      </svg>

      {/* SECTION 5 — CATEGORY B */}
      <section className="py-20 bg-black relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 mb-12">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="bg-gradient-to-r from-[#e76366] to-[#8355eb] text-white rounded-full px-6 py-2.5 font-black text-base uppercase tracking-widest">
                CATEGORY B
              </div>
              <h2 className="font-['Poppins'] font-black text-white text-2xl">
                Special Interactive & Creative Formats
              </h2>
              <div className="ml-2 bg-zinc-800 border border-zinc-700 rounded-full px-4 py-1.5 text-gray-400 text-xs font-bold italic">
                Highly selective; limited slots
              </div>
            </div>
            <p className="text-gray-400 text-base leading-relaxed mt-4 font-['Inter']">
              Category B includes <span className="text-white font-bold">high-engagement and participatory formats</span> that are limited due logistical constraints and will be scrutinised with additional feasibility criteria. Acceptance in Category B is <span className="text-white font-bold">competitive and subject to programme feasibility.</span> Formats under Category B include:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryB.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 hover:border-[#8355eb]/60 hover:shadow-[0_0_40px_rgba(131,85,235,0.15)] transition-all duration-300 flex flex-col relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#e76366] to-[#8355eb] text-white text-[9px] font-black uppercase tracking-widest py-1.5 px-4 rounded-bl-2xl rounded-tr-2xl z-10">
                  {item.ribbon}
                </div>

                <div className="w-14 h-14 rounded-full mb-5 flex items-center justify-center bg-gradient-to-br from-[#e76366] to-[#8355eb]">
                  {item.icon}
                </div>

                <h3 className="font-['Poppins'] font-black text-white text-xl">
                  {item.name}
                </h3>

                <div className="bg-zinc-800 border border-zinc-700 rounded-full px-4 py-1.5 text-gray-300 text-xs font-bold inline-block mt-2 mb-5 self-start">
                  {item.duration}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed flex-1 font-['Inter']">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallForAbstractsPage;
