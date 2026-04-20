import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Globe, Award, ArrowRight, ChevronDown, User, Calendar, CheckCircle, Network, Building } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import Ordinal from '../components/Ordinal';

const EltaiPage = () => {
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
        title="ELT@I"
        subtitle="The oldest and largest professional association of English teachers in India."
        breadcrumb={[
          { label: "Organizers", path: "/organizers" },
          { label: "ELT@I" }
        ]}
        image="https://www.image2url.com/r2/default/images/1776342638241-64c553c9-163b-4277-a954-425cc2061a2d.png"
      />

      {/* BENTO GRID STATS SECTION - REDESIGNED */}
      <section className="py-24 relative z-10 bg-white overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#e76366]/5 to-[#8355eb]/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Founder Card (Col Span 4) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 relative rounded-[2.5rem] p-[2px] overflow-hidden group shadow-sm"
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e76366] via-gray-200 to-[#8355eb] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative h-full bg-gray-50 rounded-[2.4rem] p-8 flex flex-col justify-between overflow-hidden">
                {/* Background texture */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#e76366]/20 via-transparent to-transparent"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#e76366] to-[#8355eb] p-[2px] mb-8 shadow-[0_0_30px_rgba(231,99,102,0.2)]">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <User className="text-gray-900" size={24} />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-2">Our Founder</h3>
                  <h2 className="text-4xl font-black text-gray-900 leading-tight mb-8">Padmashree <br/> S. Natarajan</h2>
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-xs text-gray-400 mb-1">Founded On</div>
                    <div className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <Calendar size={16} className="text-[#e76366]" /> <Ordinal text="7th August 1969" />
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-xs text-gray-400 mb-1">Registered In</div>
                    <div className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#8355eb]" /> 1974
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 4 Stats Cards (Col Span 8) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Community", value: "6000+", desc: "Active Members", icon: Users, color: "#e76366", bgNum: "6k" },
                { title: "Network", value: "81+", desc: "Chapters", icon: Network, color: "#8355eb", bgNum: "81" },
                { title: "Global", value: "12+", desc: "Intl. Partnerships", icon: Globe, color: "#e76366", bgNum: "12" },
                { title: "Partners", value: "100+", desc: "Institutions", icon: Building, color: "#8355eb", bgNum: "100" }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative bg-gray-50 border border-gray-100 rounded-[2.5rem] p-8 overflow-hidden group hover:border-gray-200 hover:bg-white transition-all duration-500 shadow-sm"
                >
                  {/* Giant background number */}
                  <div className="absolute -bottom-6 -right-2 text-[100px] font-black text-gray-900/5 group-hover:text-gray-900/10 transition-colors duration-500 pointer-events-none leading-none">
                    {stat.bgNum}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-sm`} style={{ boxShadow: `0 0 20px ${stat.color}10` }}>
                        <stat.icon className="text-gray-400 transition-colors duration-500" size={20} style={{ color: stat.color }} />
                      </div>
                      <div className="text-xs font-bold text-gray-500 tracking-widest uppercase">{stat.title}</div>
                    </div>
                    <div className="text-5xl font-black text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#e76366] group-hover:to-[#8355eb] transition-all duration-500">{stat.value}</div>
                    <div className="text-lg text-gray-500 font-medium">{stat.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Publications Card (Col Span 12) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-12 relative bg-gray-50 border border-gray-100 rounded-[2.5rem] p-8 md:p-12 overflow-hidden group hover:bg-white transition-all duration-500 shadow-sm"
            >
              {/* Abstract background shapes */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#8355eb]/5 to-transparent pointer-events-none"></div>
              
              <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                <div className="lg:w-1/3 text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-gray-100 mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-md">
                    <BookOpen className="text-[#8355eb]" size={28} />
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 mb-4">Our Publications</h2>
                  <p className="text-gray-500">Fostering research and excellence through our robust portfolio of academic journals.</p>
                </div>
                
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  {[
                    { name: "Journal of English Language Teaching (JELT)", color: "from-[#e76366]" },
                    { name: "Journal of Teaching and Research in English Literature (JTREL)", color: "from-[#8355eb]" },
                    { name: "Journal of Technology for ELT (JTELT)", color: "from-[#e76366]" },
                    { name: "ELT Practitioner (ELT-P)", color: "from-[#8355eb]" }
                  ].map((pub, idx) => (
                    <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-4 hover:border-gray-200 hover:shadow-md transition-all duration-300 group/item">
                      <div className={`w-2 h-12 rounded-full bg-gradient-to-b ${pub.color} to-transparent group-hover/item:scale-y-110 transition-transform`}></div>
                      <span className="text-gray-900 font-medium text-lg group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-[#e76366] group-hover/item:to-[#8355eb] transition-all">{pub.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ABOUT ELT@I - VIBRANT MOVEMENT */}
      {/* THE ELT@I JOURNEY - COMBINED IMPACT SECTION */}
      <section className="py-32 relative z-10 bg-black overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#e76366]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#8355eb]/5 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          {/* 1. A VIBRANT NATIONAL MOVEMENT (About) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-40">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Our Legacy</span>
              </div>

              <motion.h2 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-[1.1] tracking-tighter uppercase"
              >
                A Vibrant <br/>
                <span style={gradientText}>National Movement</span>
              </motion.h2>

              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  The English Language Teachers' Association of India (ELT@I) is the largest and oldest professional organization for teachers of English in the country. Founded in 1969 by the visionary late Padmashree S. Natarajan, ELT@I has grown into a vibrant national movement.
                </motion.p>
                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  With over 50 chapters across India, it serves as a bridge between classroom practitioners, researchers, and policy makers, fostering a culture of continuous professional growth and innovation.
                </motion.p>
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
              <div className="relative rounded-[2.5rem] overflow-hidden bg-zinc-900 aspect-[4/3] shadow-2xl border border-white/5 transform group-hover:-translate-y-2 transition-all duration-700">
                <img 
                  src="https://www.image2url.com/r2/default/images/1776342943556-56da55b5-cdfa-464e-9df1-d9073eb32ec4.png" 
                  alt="Students in a modern classroom" 
                  className="w-full h-full object-cover relative z-0 opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-8 -left-8 bg-zinc-900 p-6 rounded-3xl shadow-xl border border-white/5 hidden md:block">
                <p className="text-4xl font-black text-white mb-1">50+</p>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Years of Excellence</p>
              </div>
            </motion.div>
          </div>

          {/* 2. EMPOWERING LOCAL VOICES */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-40">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group order-2 lg:order-1"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden bg-zinc-900 aspect-[4/3] shadow-2xl border border-white/5 transform group-hover:-translate-y-2 transition-all duration-700">
                <img 
                  src="https://www.image2url.com/r2/default/images/1776343010817-bfb47006-014b-4cbe-8073-3419a7fee448.png" 
                  alt="Speaker presenting Vision" 
                  className="w-full h-full object-cover relative z-0 opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Vision & Excellence</span>
              </div>

              <motion.h2 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-[1.1] tracking-tighter uppercase"
              >
                Empowering <br/>
                <span style={gradientText}>Local Voices</span>
              </motion.h2>

              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  ELT@I's vision goes beyond the teaching of English as a subject. It views English as a resource for empowerment, mobility, academic inquiry, and global engagement, while remaining sensitive to India's multilingual and multicultural realities.
                </motion.p>
                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  The association actively encourages context-responsive pedagogies, inclusive classroom practices, and research grounded in local needs and experiences, consistently bridging theory and practice.
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* 3. RESEARCH & PUBLICATION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-40">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Knowledge Dissemination</span>
              </div>

              <motion.h2 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-[1.1] tracking-tighter uppercase"
              >
                Research & <br/>
                <span style={gradientText}>Publication</span>
              </motion.h2>

              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  ELTAI also places strong emphasis on research and publication. Its journals, conference proceedings, and edited volumes promote rigorous yet accessible scholarship in English language teaching, literature, linguistics, and allied areas.
                </motion.p>
                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  By encouraging teachers to document classroom practices, explore indigenous approaches, and engage in reflective inquiry, ELTAI nurtures a culture of research that is rooted in Indian contexts while remaining globally relevant.
                </motion.p>
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
              <div className="relative rounded-[2.5rem] overflow-hidden bg-zinc-900 aspect-[4/3] shadow-2xl border border-white/5 transform group-hover:-translate-y-2 transition-all duration-700">
                <img 
                  src="https://www.image2url.com/r2/default/images/1776343268517-e0880b26-0d7d-4b5f-b6dd-8581f9b48a94.png" 
                  alt="Speaker at podium" 
                  className="w-full h-full object-cover relative z-0 opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>

          {/* Leadership & Collaboration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
              className="relative group order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-[#8355eb] to-[#e76366] rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-700 transform group-hover:scale-105"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden bg-zinc-900 aspect-[16/10] shadow-2xl border border-white/5 transform group-hover:-translate-y-2 transition-all duration-700">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src="https://www.image2url.com/r2/default/images/1776343330164-470d3816-d22f-445b-9452-2131abb9f061.png" 
                  alt="Group of people collaborating" 
                  className="w-full h-full object-cover relative z-0 opacity-80"
                  loading="lazy"
                />
                <div className="absolute top-6 left-6 w-12 h-12 border-t-4 border-l-4 border-white/30 rounded-tl-xl z-20 transition-all duration-500 group-hover:border-white/60 group-hover:w-16 group-hover:h-16"></div>
                <div className="absolute bottom-6 right-6 w-12 h-12 border-b-4 border-r-4 border-white/30 rounded-br-xl z-20 transition-all duration-500 group-hover:border-white/60 group-hover:w-16 group-hover:h-16"></div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="order-1 lg:order-2"
            >
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="bg-white/5 border border-white/10 rounded-full px-5 py-2 inline-flex items-center mb-8 shadow-sm"
              >
                <span className="text-xs font-bold tracking-widest uppercase" style={gradientText}>Building Nation</span>
              </motion.div>

              <motion.h2 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="font-['Poppins'] font-black text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-[1.1]"
              >
                Leadership & <br/>
                <span style={gradientText}>Collaboration</span>
              </motion.h2>

              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  Equally important is ELTAI's belief in leadership and collaboration. The association works closely with educational institutions, universities, schools, and international teacher organizations to strengthen professional networks and advocate for meaningful reforms in English language and literature education.
                </motion.p>
                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  Its chapter-based structure ensures that professional support and innovation reach educators working in diverse regions and institutional settings. The ELTAI Annual Conference embodies these values. It serves as a meeting point for ideas, experiences, and perspectives, bringing together voices from classrooms, research centers, and policy spaces.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EMPOWERING EDUCATORS CTA SECTION */}
      <section className="py-32 relative overflow-hidden z-10 bg-black m-4 lg:m-8 rounded-[3rem] shadow-2xl border border-zinc-800">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src="https://www.image2url.com/r2/default/images/1776343437938-8d7c66b5-a4ce-41c0-920b-db7c6011b813.png" 
            alt="Audience in a dark auditorium" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
          
          {/* Animated glowing orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#e76366] rounded-full blur-[120px] pointer-events-none"
          ></motion.div>
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.2, 0.1] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8355eb] rounded-full blur-[120px] pointer-events-none"
          ></motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            className="font-['Poppins'] font-black text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight"
          >
            Empowering Educators, <br />
            <span style={gradientText}>Enriching Classrooms</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            As ELTAI continues its journey, it remains firmly committed to empowering English language teachers and learners, fostering academic excellence, and shaping the future of English language education in India and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <span className="text-sm font-bold tracking-widest uppercase" style={gradientText}>To Learn More</span>
            <a 
              href="https://www.eltai.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] overflow-hidden"
            >
              {/* Button Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#e76366]/20 to-[#8355eb]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="relative z-10 flex items-center gap-2">
                Visit Official Website
                <Globe size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default EltaiPage;
