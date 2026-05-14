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
      text: "Educators, teacher-educators, academic researchers, school leaders, and institutional heads across schools, colleges, and universities."
    },
    {
      icon: <BookOpen size={18} className="text-white" />,
      text: "Curriculum designers, assessment professionals, instructional designers, and learning experience (LXD) specialists involved in developing syllabi, evaluations, and learning systems."
    },
    {
      icon: <Palette size={18} className="text-white" />,
      text: "Creative and cultural practitioners, including writers, translators, editors, performers, and storytellers."
    },
    {
      icon: <BookMarked size={18} className="text-white" />,
      text: "Publishers and content professionals engaged in educational, academic, or creative publishing."
    },
    {
      icon: <Briefcase size={18} className="text-white" />,
      text: "Industry and corporate professionals working in communication, media, and language-driven fields."
    },
    {
      icon: <Cpu size={18} className="text-white" />,
      text: "Technologists and innovators, including edtech designers, AI developers, and data scientists at the intersection of language and technology."
    },
    {
      icon: <Landmark size={18} className="text-white" />,
      text: "Policymakers and education leaders involved in curriculum design, governance, and institutional reform."
    },
    {
      icon: <Users size={18} className="text-white" />,
      text: "Libraries, NGOs, literacy organisations, and community educators involved in education, multilingualism, and public humanities."
    },
    {
      icon: <Star size={18} className="text-white" />,
      text: "Students and emerging scholars at undergraduate, postgraduate, and doctoral levels."
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
        title={
  <>
    Call <span className="ml-1">For</span>
    <span className="ml-1">Abstracts</span>
  </>
}
        subtitle="Share your research and insights with a global community of scholars."
        breadcrumb={[
          { label: "Submit", path: "/submit" },
          { label: "Call For Abstracts" }
        ]}
        image="https://www.image2url.com/r2/default/images/1776333372596-4c745240-675e-4be0-bb26-d4444fa3565d.png"
      />

      {/* Intro Section */}
      <section className="bg-white pt-24 pb-12 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Poppins'] font-black text-gray-900 text-5xl md:text-7xl tracking-tighter capitalize mb-8">
                Call for <span style={gradientText}>Abstracts</span>
              </h2>
              <p className="text-gray-600 text-center text-justify text-xl font-medium leading-relaxed">
                The 20th International and 56th Annual Conference of ELTAI invites submissions that engage critically, creatively, or experimentally with the conference theme <span className="text-black font-black italic">“English on the Edge: Survive? Evolve? Thrive?”</span> and the seven conference domains. Contributors are encouraged to propose work that is original, rigorous, and reflective of emerging questions in English language and literature studies.
              </p>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 — Eligible Presenters */}
      <section className="bg-white pt-8 pb-20 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-['Poppins'] font-black text-gray-900 text-5xl md:text-7xl tracking-tighter capitalize">
                Who Can <span style={gradientText}>Present</span>
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
              <p className="text-gray-700 font-medium leading-relaxed text-lg">
                {item.text}
              </p>
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

      {/* Section 3 — What Can Be Presented Intro */}
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
              <h2 className="font-['Poppins'] font-black text-4xl md:text-5xl lg:text-7xl text-white mb-8 leading-[1.1] tracking-tighter capitalize">
                What <span className="ml-1">Can</span>
    <span className="ml-1">Be</span>
    <span className="ml-1" style={gradientText}>Presented?</span>
              </h2>

              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
                <p>
                  The conference welcomes a wide range of <span className="text-white font-bold">research-based, classroom-driven, creative, and community-focused contributions</span> that engage with any one of the seven domains of the conference theme <span style={gradientText} className="font-bold italic">"English on the Edge: Survive? Evolve? Thrive?"</span>.
                </p>
                <p>
               To balance academic depth with experiential learning, presentation formats are organised into two programme categories. These categories are organisational, not hierarchical. All accepted presentations carry equal academic value. Each submission is evaluated independently on merit, relevance, and quality, regardless of category. Creative and practice-based contributions are valued on par with traditional academic papers.                  </p>
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
                  className="w-full h-full object-cover relative z-0 opacity-100"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-zinc-900 p-6 rounded-3xl shadow-xl border border-white/5 hidden md:block">
                <p className="text-4xl font-black text-white mb-1">9+</p>
                <p className="text-gray-500 text-xs font-bold capitalize tracking-wider">Unique Formats</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4 — Category A */}
      <section className="bg-white py-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-['Poppins'] text-2xl mb-4" style={gradientText}>Core Academic Formats</p>
              <h2 className="font-['Poppins'] font-black text-gray-900 text-5xl md:text-7xl tracking-tighter mb-8 capitalize leading-tight">
                Category <span style={gradientText}>A</span>
              </h2>
              <p className="text-gray-600 text-center text-justify text-xl font-medium leading-relaxed">
               Category A represents the primary scholarly and practice-based programme of the conference and includes:  <span className="text-gray-900 font-bold">One submission allowed per participant.</span>
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categoryA.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 border border-gray-100 p-8 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e76366] to-[#8355eb] shadow-md flex items-center justify-center mb-6 text-white transition-all duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="text-gray-900 font-black text-2xl mb-2 tracking-tight">{item.name}</h4>
                <p className="text-primary text-[10px] font-black capitalize tracking-[0.2em] mb-4 bg-primary/5 inline-block px-3 py-1 rounded-full w-fit">
                  {item.duration}
                </p>
                <p className="text-gray-600 text-base leading-relaxed flex-1">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave divider: white -> black */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block relative z-10" style={{ background: '#fff' }}>
        <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#000000" />
      </svg>

      {/* Section 5 — Category B */}
      <section className="bg-black py-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-['Poppins'] text-2xl mb-4" style={gradientText}>Interactive & Creative Formats</p>
              <h2 className="font-['Poppins'] font-black text-white text-5xl md:text-7xl tracking-tighter mb-8 capitalize leading-tight">
                Category <span style={gradientText}>B</span>
              </h2>
              <p className="text-gray-400 text-center text-justify text-xl font-medium leading-relaxed">
                High-engagement and participatory formats that are limited due to logistical constraints. Acceptance is <span className="text-white font-bold">competitive and subject to programme feasibility.</span>
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryB.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 p-10 rounded-[3rem] hover:border-zinc-600 transition-all duration-500 group relative overflow-hidden flex flex-col h-full shadow-2xl"
              >
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#e76366] to-[#8355eb] text-white text-[9px] font-black capitalize tracking-widest py-2 px-6 rounded-bl-3xl z-10 shadow-lg">
                  {item.ribbon}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="text-white font-black text-2xl mb-4 tracking-tight leading-tight">{item.name}</h4>
                <p className="text-gray-500 text-[10px] font-black capitalize tracking-[0.2em] mb-6 border border-zinc-800 inline-block px-3 py-1 rounded-full w-fit">
                  {item.duration}
                </p>
                <p className="text-gray-400 text-base leading-relaxed flex-1">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallForAbstractsPage;
