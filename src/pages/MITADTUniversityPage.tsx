import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Building2, ChevronDown, Activity, Brain, Heart, Users, 
  Lightbulb, Star, Globe, Shield, BookOpen, CheckCircle, 
  Award, Briefcase, ExternalLink, ArrowRight 
} from 'lucide-react';
import PageBanner from '../components/PageBanner';

const MITADTUniversityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gradientText = {
    background: 'linear-gradient(90deg, #e76366, #8355eb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  return (
    <div className="bg-black min-h-screen font-sans text-white selection:bg-primary selection:text-black overflow-x-hidden">
      <PageBanner 
        title="MIT ADT University"
        subtitle="Where Innovation Meets Holistic Education."
        breadcrumb={[
          { label: "Organizers", path: "/organizers" },
          { label: "MIT ADT University" }
        ]}
        image="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop"
      />

      {/* ABOUT SECTION — BENTO SPLIT */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="font-['Caveat'] text-xl mb-3" style={gradientText}>About MIT ADT University</div>
              <h2 className="font-['Poppins'] font-black text-gray-900 text-4xl md:text-5xl leading-tight">
                Where <span className="italic text-gray-900">Innovation</span> Meets <br/>
                <span style={gradientText}>Holistic Education</span>
              </h2>

              <div className="text-gray-600 text-lg leading-relaxed space-y-5 mt-8">
                <p>
                  MIT Art, Design and Technology University is honoured to host the <strong className="text-gray-900">20th International and 56th Annual Conference of ELTAI.</strong> With the compelling theme <span className="italic" style={gradientText}>'English on the Edge: Survive? Evolve? Thrive?'</span>, the conference invites educators, researchers, scholars, writers, and learners to reflect on the evolving role of English in a rapidly transforming world shaped by automation, imagination, and innovation.
                </p>
                <p>
                  MIT Art, Design and Technology University is a UGC-recognised, state private and multi-disciplinary university under the prestigious MIT Group of Institutions. Accredited with <strong className="text-gray-900">NAAC 'A' grade,</strong> it represents a progressive and holistic vision of higher education.
                </p>
                <p>
                  Spread over a <strong className="text-gray-900">150-acre campus</strong> with serene, green surroundings, the university has received the 'Best Campus Award' and the 'Best Private State University in India Award.' With <strong className="text-gray-900">17 constituent Schools</strong> offering diverse programmes, MIT ADT University blends academic excellence with holistic growth and global outlook. Crowning the campus is the <strong className="text-gray-900">Raj Kapoor Museum</strong> and the iconic <strong className="text-white">World Peace Dome,</strong> the world's largest dome, symbolising knowledge, unity, and global harmony.
                </p>
              </div>
            </motion.div>

            {/* RIGHT - BENTO image grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[2rem] overflow-hidden aspect-[4/3] w-full relative group shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop" 
                  alt="MIT ADT Campus" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Stat Cards Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-3">
                  <div className="bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl p-5 flex-1 text-center shadow-lg">
                    <div className="font-black text-3xl" style={gradientText}>150+</div>
                    <div className="text-gray-500 text-xs mt-1 font-medium uppercase tracking-wider">Acres Green Campus</div>
                  </div>
                  <div className="bg-gradient-to-r from-[#e76366] to-[#8355eb] rounded-2xl p-5 flex-1 text-center shadow-lg">
                    <div className="text-white font-black text-3xl">NAAC 'A'</div>
                    <div className="text-white/80 text-xs mt-1 font-medium uppercase tracking-wider">Accredited Grade</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SCHOOL OF HOLISTIC DEVELOPMENT */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="font-['Caveat'] text-xl mb-2" style={gradientText}>MIT School of Holistic Development</div>
            <h2 className="font-['Poppins'] font-black text-gray-900 text-4xl md:text-5xl leading-tight">
              MIT School of <br/>
              <span style={gradientText}>Holistic Development</span>
            </h2>
            <p className="text-gray-500 text-lg text-center max-w-3xl mx-auto mt-6 leading-relaxed">
              With a vision to create winning personalities and comprehensive global professionals, the School enables students to meet the challenges of career and life with skills, sensibilities, and a strong sense of responsibility towards society and humanity.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 border border-gray-200 rounded-[2.5rem] p-6 md:p-10 max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* LEFT */}
              <div>
                <p className="text-gray-600 text-base mb-8 font-medium">
                  The School focuses on nurturing students to be:
                </p>

                {/* 8 focus chips grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-2xl px-4 py-3 flex items-center gap-3 text-sm font-bold shadow-sm">
                    <Activity className="text-green-500 shrink-0" size={18} /> Physically Fit
                  </div>
                  <div className="bg-blue-50 border border-blue-200 text-blue-700 rounded-2xl px-4 py-3 flex items-center gap-3 text-sm font-bold shadow-sm">
                    <Brain className="text-blue-500 shrink-0" size={18} /> Mentally Strong
                  </div>
                  <div className="bg-pink-50 border border-pink-200 text-pink-700 rounded-2xl px-4 py-3 flex items-center gap-3 text-sm font-bold shadow-sm">
                    <Heart className="text-pink-500 shrink-0" size={18} /> Emotionally Alert
                  </div>
                  <div className="bg-purple-50 border border-purple-200 text-purple-700 rounded-2xl px-4 py-3 flex items-center gap-3 text-sm font-bold shadow-sm">
                    <Users className="text-purple-500 shrink-0" size={18} /> Socially Responsible
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 rounded-2xl px-4 py-3 flex items-center gap-3 text-sm font-bold shadow-sm">
                    <Lightbulb className="text-yellow-500 shrink-0" size={18} /> Intellectually Sharp
                  </div>
                  <div className="bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-2xl px-4 py-3 flex items-center gap-3 text-sm font-bold shadow-sm">
                    <Star className="text-indigo-500 shrink-0" size={18} /> Spiritually Elevated
                  </div>
                  <div className="bg-teal-50 border border-teal-200 text-teal-700 rounded-2xl px-4 py-3 flex items-center gap-3 text-sm font-bold shadow-sm">
                    <Globe className="text-teal-500 shrink-0" size={18} /> Linguistically Competent
                  </div>
                  <div className="bg-gray-100 border border-gray-300 text-gray-700 rounded-2xl px-4 py-3 flex items-center gap-3 text-sm font-bold shadow-sm">
                    <Shield className="text-gray-500 shrink-0" size={18} /> Morally Upright
                  </div>
                </div>

                {/* 12-Credit block */}
                <div className="mt-10">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen size={24} className="text-[#e76366]" />
                    <h3 className="font-['Poppins'] font-black text-gray-900 text-xl">12-Credit Mandatory Courses</h3>
                  </div>
                  <p className="text-gray-600 text-base mb-6">
                    It conducts 12-credit mandatory courses for <strong className="text-gray-900">15,000+ students,</strong> including:
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {[
                      "English Communication",
                      "Health Practices",
                      "Spirituality and Morality",
                      "Performing Arts (20 electives)",
                      "Holistic Personality Programme",
                      "Societal Immersion",
                      "Creative Arts",
                      "Foreign and Indian Languages"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-[#8355eb] shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="rounded-[2rem] overflow-hidden relative aspect-[3/4] shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" 
                  alt="Students" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 pt-20">
                  <p className="text-white italic text-xl font-medium leading-snug">
                    "Creating comprehensive global professionals."
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* WAVE WHITE TO BLACK */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block relative z-10" style={{ background: '#000000' }}>
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
      </svg>

      {/* SCHOOL OF HUMANITIES */}
      <section className="py-24 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[2rem] overflow-hidden relative aspect-[4/3] w-full border border-zinc-800">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop" 
                  alt="Humanities" 
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.85)' }}
                  loading="lazy"
                />
                
                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-black/60 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                  <div className="text-white font-black text-2xl">School of Humanities</div>
                  <div className="text-gray-300 text-sm mt-1 font-medium">Nurturing linguistic and literary excellence.</div>
                </div>

                {/* NEP badge */}
                <div className="absolute top-6 right-6 bg-white rounded-xl p-4 shadow-2xl">
                  <div className="font-black text-xl" style={gradientText}>NEP</div>
                  <div className="text-gray-600 text-xs mt-1 leading-tight font-bold">
                    National Education Policy<br/>Based Curriculum
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="font-['Caveat'] text-xl mb-3" style={gradientText}>Academic Excellence</div>
              <h2 className="font-['Poppins'] font-black text-white text-4xl md:text-5xl leading-tight">
                Fostering Research & <br/>
                <span style={gradientText}>Collaborative Growth</span>
              </h2>

              <div className="text-gray-400 text-lg leading-relaxed mt-6 space-y-4">
                <p>
                  At the School of Humanities, programmes such as <strong className="text-white">B.A. English (Honours), M.A. English (ELLT),</strong> and <strong className="text-white">Ph.D. in English</strong> nurture linguistic and literary excellence, enriching students' socio-cultural understanding and strengthening their collaborative and persuasive abilities.
                </p>
                <p>
                  The School follows the <strong className="text-white">National Education Policy-based curriculum</strong> with a strong research-driven approach. Through in-depth critical study, meaningful integration of technology, and an interdisciplinary framework, students receive a well-rounded education.
                </p>
              </div>

              {/* Key Highlights card */}
              <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-[1.5rem] p-7">
                <h3 className="font-['Poppins'] font-bold text-white text-lg mb-6">Key Highlights</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex items-start gap-3">
                    <Globe className="text-[#e76366] shrink-0 mt-0.5" size={20} />
                    <div>
                      <div className="text-white font-bold text-sm">International Collab</div>
                      <div className="text-gray-500 text-xs mt-0.5">Global exposure for students</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="text-[#8355eb] shrink-0 mt-0.5" size={20} />
                    <div>
                      <div className="text-white font-bold text-sm">Cambridge Cert.</div>
                      <div className="text-gray-500 text-xs mt-0.5">Certification opportunities</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="text-[#e76366] shrink-0 mt-0.5" size={20} />
                    <div>
                      <div className="text-white font-bold text-sm">Internships</div>
                      <div className="text-gray-500 text-xs mt-0.5">Structured internship exposure</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="text-[#8355eb] shrink-0 mt-0.5" size={20} />
                    <div>
                      <div className="text-white font-bold text-sm">Research Driven</div>
                      <div className="text-gray-500 text-xs mt-0.5">Strong academic foundation</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-zinc-800">
                  <p className="text-gray-500 text-sm italic">
                    "Preparing learners to make a remarkable mark in academia and beyond."
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CLOSING CTA — FULL BLEED IMAGE */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block bg-black relative z-10">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="transparent" />
      </svg>

      <section className="py-32 relative overflow-hidden rounded-[3rem] mx-4 md:mx-8 mb-12 z-10 group">
        {/* Layer 1 — Students image with zoom effect */}
        <motion.img 
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.1 }}
          transition={{ duration: 10, ease: "linear" }}
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop" 
          alt="Students" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ filter: 'brightness(0.3)' }}
          loading="lazy"
        />

        {/* Layer 2 — Gradient overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-black/60 to-black/90"></div>

        {/* Animated Glowing Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#e76366]/30 blur-[120px] rounded-full pointer-events-none z-[2] -translate-y-1/2 -translate-x-1/2"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#8355eb]/30 blur-[120px] rounded-full pointer-events-none z-[2] -translate-y-1/2 translate-x-1/2"
        ></motion.div>

        {/* FOREGROUND */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-6 py-2 inline-flex items-center mb-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <span className="text-sm font-bold text-white tracking-widest uppercase">Join Us at MIT ADT</span>
            </motion.div>

            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="font-['Poppins'] font-black text-white text-4xl md:text-6xl leading-[1.1]"
            >
              We warmly welcome you to a campus that celebrates <br className="hidden md:block" />
              <span style={gradientText}>dialogue, innovation, and holistic education.</span>
            </motion.h2>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="mt-12"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.mituniversity.edu.in" 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-black rounded-full px-10 py-5 font-black text-xl flex items-center gap-3 mx-auto inline-flex shadow-[0_0_40px_rgba(231,99,102,0.3)] transition-all hover:shadow-[0_0_60px_rgba(131,85,235,0.5)] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#e76366] hover:to-[#8355eb] relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Visit Official Website
                  <ExternalLink size={24} className="text-black group-hover:text-[#8355eb] transition-colors" />
                </span>
                {/* Button hover gradient background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default MITADTUniversityPage;
