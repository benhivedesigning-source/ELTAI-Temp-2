import React, { useState } from 'react';
import { ArrowRight, Calendar, MapPin, Users, Building2, Download, Clock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import Ordinal from '../components/Ordinal';

const STATS = [
  { number: '1,500+', label: 'Attendees' },
  { number: '100+', label: 'Speakers' },
  { number: '200+', label: 'Sessions' },
  { number: '8HR', label: 'Workshops' },
];

const PAST_CONFERENCES = [
  { name: 'ELTAI 2025', role: 'Chennai, India', image: 'https://www.image2url.com/r2/default/images/1776255795293-05b8c1fa-1e2a-4f83-afbd-2799c6eef564.webp' },
  { name: 'ELTAI 2024', role: 'Delhi, India', image: 'https://www.image2url.com/r2/default/images/1776255853963-4292ff99-94fb-46a8-a8a8-492ce4b6c4cd.webp' },
  { name: 'ELTAI 2023', role: 'Mumbai, India', image: 'https://www.image2url.com/r2/default/images/1776255917201-a6e240d3-fbda-4bbb-b36c-2a01ca9aa01c.webp' },
  { name: 'ELTAI 2022', role: 'Bangalore, India', image: 'https://www.image2url.com/r2/default/images/1776255967219-e1567d7c-b68e-4444-ae92-4b5af6ce1681.webp' },
];

const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const staggerItem = {
    hidden: { y: "120%" },
    show: { y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.video 
            style={{ y: heroY, opacity: heroOpacity }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://image2url.com/r2/default/videos/1775824547717-30da8b7e-1861-425c-9659-c47fd746e14e.mp4" 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover origin-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-4 lg:px-8 w-full flex-1 flex flex-col justify-center mt-10">
          <div className="max-w-5xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-white mb-4 font-medium"
            >
              <Ordinal text="The 20th International and 56th Annual Conference of ELTAI" />
            </motion.p>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-heading font-black leading-[0.9] tracking-tighter mb-10 uppercase"
            >
              <div className="overflow-hidden pb-2"><motion.div variants={staggerItem} className="text-white">ENGLISH ON THE EDGE:</motion.div></div>
              <div className="overflow-hidden pb-2"><motion.div variants={staggerItem} className="text-primary">SURVIVE? EVOLVE? THRIVE?</motion.div></div>
            </motion.div>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-primary transition-colors duration-300 flex items-center gap-2"
            >
              Register Now <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
        
        {/* Info Cards (Bottom) */}
        <div className="relative z-20 max-w-[1800px] mx-auto px-4 lg:px-8 w-full mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* Card 1 */}
            <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <Calendar className="text-white" size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mb-1">DATES</p>
                <p className="text-white font-bold text-sm leading-tight mb-1"><Ordinal text="7th – 10th October 2026" /></p>
                <p className="text-gray-400 text-xs">(Wednesday - Saturday)</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <MapPin className="text-white" size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mb-1">VENUE</p>
                <p className="text-white font-bold text-sm leading-tight mb-1">MIT Art, Design &<br/>Technology University</p>
                <p className="text-gray-400 text-xs">Pune, Maharashtra</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <Users className="text-white" size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mb-1">ORGANISED BY</p>
                <p className="text-white font-bold text-sm leading-tight mb-1">English Language<br/>Teachers' Association of<br/>India</p>
                <p className="text-gray-400 text-xs">(ELTAI)</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <Building2 className="text-white" size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mb-1">HOSTED BY</p>
                <p className="text-white font-bold text-sm leading-tight mb-1">School of Humanities &<br/>School of Holistic<br/>Development</p>
                <p className="text-gray-400 text-xs">MIT Art, Design & Technology<br/>University, Pune, Maharashtra</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="w-full bg-primary border-y-4 border-black overflow-hidden py-3 md:py-4 flex items-center relative z-20">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20
          }}
        >
          {/* Duplicate text for seamless scrolling */}
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-black font-heading font-black text-2xl md:text-3xl tracking-widest uppercase mx-4 flex items-center">
              CONFERENCE PUNE, MAHARASHTRA <span className="mx-4 text-xl">●</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* About Conference Section */}
      <section className="py-24 relative z-20 bg-white text-black overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#e76366]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#8355eb]/5 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          
          {/* Top Centered Header */}
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
              className="text-3xl md:text-5xl font-heading font-black mb-6 tracking-tighter uppercase text-gray-900"
            >
              ELTAI ANNUAL CONFERENCE 2026
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto"
            >
              For over five decades, ELTAI Annual Conferences have stood as landmark events in the journey of English language and literature education in India.
            </motion.p>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
            
            {/* Left: Images */}
            <div className="lg:w-1/2 w-full relative flex justify-center lg:justify-start h-[400px] sm:h-[500px]">
              <div className="relative w-full max-w-[500px] h-full">
                {/* Image 1 (Left, taller) */}
                <motion.div 
                  className="absolute left-0 top-0 w-[60%] h-[85%] rounded-2xl overflow-hidden shadow-2xl z-10 border border-gray-100"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img src="https://www.image2url.com/r2/default/images/1776254867090-6b76e8ea-0b69-4765-8c49-2dee95a6dc41.webp" alt="Conference Audience" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>
                
                {/* Image 2 (Right, shorter, slightly lower) */}
                <motion.div 
                  className="absolute right-0 top-[15%] w-[55%] h-[70%] rounded-2xl overflow-hidden shadow-2xl z-20 border border-gray-100"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img src="https://www.image2url.com/r2/default/images/1776255681594-dd353048-4946-4080-9434-551c568a817c.webp" alt="Speaker" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>

                {/* Circular Badge */}
                <motion.div 
                  className="absolute bottom-[5%] right-[35%] w-28 h-28 bg-white border border-gray-100 rounded-full shadow-2xl z-30 flex items-center justify-center backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {/* Circular text SVG */}
                  <div className="absolute inset-1 animate-[spin_10s_linear_infinite]">
                     <svg viewBox="0 0 100 100" className="w-full h-full text-black uppercase text-[11px] font-bold tracking-widest bg-white rounded-full">
                       <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                       <text>
                         <textPath href="#circlePath" startOffset="0%" style={{letterSpacing:'2px'}}>
                          • STAY TUNED • STAY TUNED
                         </textPath>
                       </text>
                     </svg>
                  </div>
                  {/* Play button or icon in center */}
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(231,99,102,0.3)]" style={{ background: 'linear-gradient(135deg, #e76366, #8355eb)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3L19 12L5 21V3Z" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Text Content */}
            <motion.div 
              className="lg:w-1/2 flex flex-col items-start text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-gray-900 mb-6 tracking-tighter uppercase leading-tight">
                <Ordinal text="THE 20TH INTERNATIONAL AND 56TH ANNUAL ELTAI CONFERENCE" />
              </h3>
              
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-medium">
                Bringing together teachers, scholars, researchers, and practitioners from across the nation and beyond, these conferences celebrate shared learning, collective wisdom, and the enduring spirit of the teaching community. Each year, ELTAI creates spaces for dialogue through inspiring keynote addresses, engaging workshops, research presentations, creative sessions, and exhibitions of innovative educational resources.
              </p>
              
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10 font-medium">
                Hosted by the School of Humanities and the School of Holistic Development, MIT Art, Design &amp; Technology University, Pune, from <Ordinal text="7th to 10th October 2026" />. As ELTAI continues its legacy of nurturing teachers, promoting reading cultures, and advancing English education across diverse contexts, ELTAI 2026 invites you to come together in Pune, the Oxford of the East, to reflect, reimagine, and reaffirm our shared commitment to the future of English education.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link to="/register" className="text-white px-8 py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(231,99,102,0.3)] uppercase tracking-wide" style={{ background: 'linear-gradient(135deg, #e76366, #8355eb)' }}>
                  REGISTER NOW <ArrowRight size={16} strokeWidth={3} />
                </Link>
                <button className="bg-transparent text-gray-900 border-2 border-[#8355eb] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#8355eb]/5 transition-colors flex items-center justify-center gap-2 uppercase tracking-wide">
                  <Download size={16} strokeWidth={2.5} /> BROCHURE
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Organiser & Host Section */}
      <div className="relative bg-[#f8fafc]">
        <section className="py-32 relative z-10 overflow-hidden">
          <div className="max-w-[1800px] mx-auto px-4 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-heading font-black tracking-tighter text-black uppercase">
                Organiser & Host
              </h2>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 relative">
              
              {/* Vertical Divider (Desktop) */}
              <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gray-200"></div>

              {/* Organiser Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-6 w-full sm:w-auto"
              >
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 w-full sm:w-80 md:w-96 h-48 flex items-center justify-center hover:shadow-md transition-shadow">
                  <img 
                    src="https://conf2026.eltai.in/assets/ELTAI-DxCx19mA.png" 
                    alt="ELTAI Logo" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-gray-500 font-medium">Organiser</p>
              </motion.div>

              {/* Host Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center gap-6 w-full sm:w-auto"
              >
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 w-full sm:w-80 md:w-96 h-48 flex items-center justify-center hover:shadow-md transition-shadow">
                  <img 
                    src="https://conf2026.eltai.in/assets/MITADT-KRFaF891.png" 
                    alt="MIT-ADT University Logo" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-gray-500 font-medium">Host</p>
              </motion.div>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-center text-gray-500 mt-20 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              A collaboration between India's premier English teaching association and one of the nation's most innovative universities.
            </motion.p>
          </div>
        </section>
      </div>

      {/* Speakers Section */}
      <div className="relative bg-[#f8fafc]">
        <section className="text-black py-32 relative z-10">
          <div className="max-w-[1800px] mx-auto px-4 lg:px-8">
            
            {/* Header Section */}
            <div className="mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-start text-left"
              >
                <p className="text-gray-500 font-bold text-sm tracking-widest uppercase mb-2">Looking Back</p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter text-[#0a1128] uppercase mb-6">
                  Our Past Conferences
                </h2>
                
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <p className="text-gray-500 text-lg md:text-xl">
                    Moments and milestones from our previous conference editions.
                  </p>
                  <Link to="/gallery" className="group flex items-center gap-2 text-[#0a1128] font-bold text-sm uppercase tracking-wide hover:text-[#e76366] transition-colors">
                    VIEW FULL GALLERY 
                    <ArrowRight size={16} strokeWidth={2.5} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Images Marquee */}
            <div className="relative w-full overflow-hidden py-4 -mx-4 lg:-mx-8 px-4 lg:px-8">
              {/* Gradient Masks for smooth fade on edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none"></div>
              
              <motion.div 
                className="flex w-max gap-4 md:gap-6"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                  repeat: Infinity, 
                  ease: "linear", 
                  duration: 40 
                }}
              >
                {[
                  "https://www.image2url.com/r2/default/images/1776255795293-05b8c1fa-1e2a-4f83-afbd-2799c6eef564.webp",
                  "https://www.image2url.com/r2/default/images/1776255853963-4292ff99-94fb-46a8-a8a8-492ce4b6c4cd.webp",
                  "https://www.image2url.com/r2/default/images/1776255917201-a6e240d3-fbda-4bbb-b36c-2a01ca9aa01c.webp",
                  "https://www.image2url.com/r2/default/images/1776255967219-e1567d7c-b68e-4444-ae92-4b5af6ce1681.webp",
                  "https://www.image2url.com/r2/default/images/1776256581516-8eca8059-3a4d-45ab-93a1-cd2ee69e076b.webp",
                  "https://www.image2url.com/r2/default/images/1776333845022-b6006276-2f5e-4fa6-b06f-a2c07fec6e08.png",
                  "https://www.image2url.com/r2/default/images/1776256958728-347bba30-f858-4570-b39c-219a012baeb1.webp"
                ].map((src, i) => (
                  <div key={i} className="rounded-3xl overflow-hidden h-[300px] md:h-[400px] w-[280px] md:w-[350px] lg:w-[400px] shrink-0 shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={src} 
                      alt={`Conference Moment ${i}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </section>
      </div>

      {/* Schedule Section */}
      <section className="py-32 relative z-20 bg-white text-black">
        <div className="max-w-[1000px] mx-auto px-4 lg:px-8">
          
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tighter uppercase mb-12 leading-tight"
            >
              GET THE BEST EXPERIENCE IN THE WORLD OF DESIGNING
            </motion.h2>

            {/* Tabs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex justify-center gap-4 md:gap-8"
            >
              <div className="flex flex-col items-center cursor-pointer group">
                <span className="text-black text-sm font-bold mb-2">Day 01</span>
                <div className="px-8 py-3 rounded-full bg-primary text-white font-black text-lg">
                  7 OCT
                </div>
              </div>
              <div className="flex flex-col items-center cursor-pointer group">
                <span className="text-gray-400 text-sm font-bold mb-2 group-hover:text-gray-600 transition-colors">Day 02</span>
                <div className="px-8 py-3 rounded-full border border-gray-200 text-gray-400 font-black text-lg group-hover:border-gray-300 transition-all">
                  8 OCT
                </div>
              </div>
              <div className="flex flex-col items-center cursor-pointer group">
                <span className="text-gray-400 text-sm font-bold mb-2 group-hover:text-gray-600 transition-colors">Day 03</span>
                <div className="px-8 py-3 rounded-full border border-gray-200 text-gray-400 font-black text-lg group-hover:border-gray-300 transition-all">
                  9 OCT
                </div>
              </div>
            </motion.div>
          </div>

          {/* Schedule Cards */}
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow rounded-xl p-6 flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="w-full md:w-[280px] h-[220px] rounded-xl overflow-hidden shrink-0 relative">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" alt="Speaker" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black text-center py-2">
                  <p className="text-primary text-[10px] font-bold tracking-widest uppercase mb-0.5">SPEAKER</p>
                  <p className="text-white text-sm font-black uppercase">MICHAEL BROWN</p>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-600 mb-4">
                  <span className="flex items-center gap-2"><Clock size={16} className="text-gray-400" /> 9:00 AM - 10:00 AM</span>
                  <span className="flex items-center gap-2"><MapPin size={16} className="text-[#8b5cf6]" /> San Francisco, USA</span>
                </div>
                <h3 className="text-2xl font-heading font-black text-black mb-4 uppercase">REGISTRATION AND WELCOME COFFE</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  A wide range of desktop publishing tools and web design editors now feature dummy text as their primary example content. If you look up 'dummy text', you'll find many sites that are still in the early stages of development.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow rounded-xl p-6 flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="w-full md:w-[280px] h-[220px] rounded-xl overflow-hidden shrink-0 relative">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop" alt="Speaker" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black text-center py-2">
                  <p className="text-primary text-[10px] font-bold tracking-widest uppercase mb-0.5">SPEAKER</p>
                  <p className="text-white text-sm font-black uppercase">DAVID GREEN</p>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-600 mb-4">
                  <span className="flex items-center gap-2"><Clock size={16} className="text-gray-400" /> 10:00 AM - 11:30 AM</span>
                  <span className="flex items-center gap-2"><MapPin size={16} className="text-[#8b5cf6]" /> Main Auditorium</span>
                </div>
                <h3 className="text-2xl font-heading font-black text-black mb-4 uppercase">GATHERING, BREAKFAST, GETTING READY</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  A wide range of desktop publishing tools and web design editors now feature dummy text as their primary example content. If you look up 'dummy text', you'll find many sites that are still in the early stages of development.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow rounded-xl p-6 flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="w-full md:w-[280px] h-[220px] rounded-xl overflow-hidden shrink-0 relative">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" alt="Speaker" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black text-center py-2">
                  <p className="text-primary text-[10px] font-bold tracking-widest uppercase mb-0.5">SPEAKER</p>
                  <p className="text-white text-sm font-black uppercase">GUILLERMO RAUCH</p>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-600 mb-4">
                  <span className="flex items-center gap-2"><Clock size={16} className="text-gray-400" /> 11:30 AM - 12:30 PM</span>
                  <span className="flex items-center gap-2"><MapPin size={16} className="text-[#8b5cf6]" /> Hall B</span>
                </div>
                <h3 className="text-2xl font-heading font-black text-black mb-4 uppercase">SUSTAINABLE DESIGN PRACTICES</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  A wide range of desktop publishing tools and web design editors now feature dummy text as their primary example content. If you look up 'dummy text', you'll find many sites that are still in the early stages of development.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.image2url.com/r2/default/images/1776315989653-9a56a3fc-0281-441a-902b-dd4a9205a82b.webp" 
            alt="Conference Stage" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8 text-center flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest text-sm mb-6 uppercase"
          >
            7–10 OCTOBER 2026 • PUNE, INDIA
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white uppercase leading-[1.1] mb-8 tracking-tighter"
          >
            JOIN US AT ELTAI 2026 - WHERE<br/>ENGLISH EDUCATION MEETS<br/>INNOVATION
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-200 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            <Ordinal text="Be part of the 20th International and 56th Annual ELTAI Conference." /> Connect with educators, researchers, and thought leaders shaping the future of English education.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto"
          >
            <Link 
              to="/register" 
              className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 uppercase tracking-wide"
            >
              <ArrowRight size={18} strokeWidth={2.5} /> REGISTER NOW
            </Link>
            <Link 
              to="/guidelines" 
              className="w-full sm:w-auto bg-transparent border border-white text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-white/10 transition-colors flex items-center justify-center uppercase tracking-wide"
            >
              SUBMIT ABSTRACT
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-32 bg-white relative z-20">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter text-black uppercase">
              IMAGE GALLERY OF EVENT
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Left Column */}
            <div className="flex flex-col gap-4 md:gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[350px] shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src="https://www.image2url.com/r2/default/images/1776257062853-3bf9fcd2-2b57-43e0-b758-9b5236fb3e49.webp" 
                  alt="Confetti at event" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[350px] shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src="https://www.image2url.com/r2/default/images/1776257129142-7edbe805-7c0d-428e-ba6d-33b30efb8369.webp" 
                  alt="Speaker on stage" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>

            {/* Middle Column */}
            <div className="flex flex-col gap-4 md:gap-6 h-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-3xl overflow-hidden h-full min-h-[400px] md:min-h-0 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src="https://www.image2url.com/r2/default/images/1776257653770-c1ca765c-55f8-42a2-aeae-3bf47a3b03ca.webp" 
                  alt="Audience in dark auditorium" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 md:gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[350px] shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src="https://www.image2url.com/r2/default/images/1776257733704-599f7799-6d25-4259-8c72-7f1f511df261.webp" 
                  alt="Empty conference room" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[350px] shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src="https://www.image2url.com/r2/default/images/1776257988216-f13e1fcd-5f42-4310-b56d-bb6f8b35d7e8.webp" 
                  alt="Concert crowd" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
