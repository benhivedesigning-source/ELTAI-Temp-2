import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, User, Globe, Zap, Users, Calendar, Clock, ArrowRight, Instagram, Facebook, Twitter, ChevronDown, MapPin, Building2, Download, Youtube, Linkedin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

// --- Data ---
const STATS = [
  { number: '1,500+', label: 'Attendees' },
  { number: '100+', label: 'Speakers' },
  { number: '200+', label: 'Sessions' },
  { number: '8HR', label: 'Workshops' },
];

const FEATURES = [
  { icon: User, title: 'Visionary Speaker', desc: 'Learn from industry leaders and creative minds pushing the boundaries of design.' },
  { icon: Globe, title: 'Worldwide Events', desc: 'Connect with a global community of designers, developers, and product managers.' },
  { icon: Zap, title: 'Level-up Your Skills', desc: 'Participate in hands-on workshops and masterclasses to elevate your craft.' },
  { icon: Users, title: 'Help Find Your Tribe', desc: 'Network with like-minded professionals and build lasting relationships.' },
];

const SCHEDULE = [
  {
    day: 1,
    date: '19 July',
    events: [
      { time: '08:00 - 09:00', title: 'Grand Opening', speaker: 'Kevin Chase', role: 'Chairman Tesla', avatar: 'https://picsum.photos/seed/kevin/100/100' },
      { time: '09:00 - 10:00', title: 'The Modern Engineering Methods', speaker: 'Jeff Robbins', role: 'Partner Startup', avatar: 'https://picsum.photos/seed/jeff/100/100' },
      { time: '10:00 - 10:30', title: 'Coffee Break', type: 'break' },
      { time: '10:30 - 12:00', title: 'Evolution of User Experience', speaker: 'Daniela Alva', role: 'Co-founder Zipcar', avatar: 'https://picsum.photos/seed/daniela/100/100' },
    ]
  },
  {
    day: 2,
    date: '20 July',
    events: [
      { time: '08:00 - 09:00', title: 'Autonomous Vehicles', speaker: 'John Doe', role: 'Founder Envato', avatar: 'https://picsum.photos/seed/john/100/100' },
      { time: '09:00 - 10:00', title: 'Value and Building Blocks', speaker: 'Joanna Smith', role: 'VP Design Apple', avatar: 'https://picsum.photos/seed/joanna/100/100' },
      { time: '10:00 - 10:30', title: 'Coffee Break', type: 'break' },
    ]
  }
];

const PAST_CONFERENCES = [
  { name: 'ELTAI 2025', role: 'Chennai, India', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=400&auto=format&fit=crop' },
  { name: 'ELTAI 2024', role: 'Delhi, India', image: 'https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=400&auto=format&fit=crop' },
  { name: 'ELTAI 2023', role: 'Mumbai, India', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop' },
  { name: 'ELTAI 2022', role: 'Bangalore, India', image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=400&auto=format&fit=crop' },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', active: true },
    { name: 'Theme', dropdown: true },
    { name: 'Submit', dropdown: true },
    { name: 'Programme', dropdown: true },
    { name: 'Highlights', dropdown: true },
    { name: 'Register', dropdown: true },
    { name: 'Travel', dropdown: true },
    { name: 'Organizers', dropdown: true },
    { name: 'Contact', dropdown: true },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b-2 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-lg shadow-black/20 border-zinc-800' : 'bg-black/80 py-6 border-zinc-800/50'}`}>
      <div className="w-full px-4 lg:px-8 flex items-center justify-between max-w-[1800px] mx-auto">
        {/* Left Logo (ELT@I) */}
        <div className="flex-1 flex justify-start">
          <a href="#" className={`flex items-center bg-white rounded-lg cursor-pointer shrink-0 transition-all duration-300 ${isScrolled ? 'h-12 p-1.5' : 'h-14 md:h-16 p-2'}`}>
            <img src="https://conf2026.eltai.in/assets/ELTAI-DxCx19mA.png" alt="ELT@I Logo" className="h-full w-auto object-contain" />
          </a>
        </div>
        
        {/* Center Menu */}
        <div className="hidden xl:flex flex-none items-center justify-center gap-6 font-bold text-[14px] tracking-wide uppercase">
          {navLinks.map((link, i) => (
            <a key={i} href="#" className={`flex items-center gap-1 transition-colors ${link.active ? 'text-primary' : 'text-white hover:text-primary'}`}>
              {link.name}
              {link.dropdown && <ChevronDown size={16} strokeWidth={3} />}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden xl:flex flex-1 items-center justify-end gap-4 shrink-0">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-black px-5 py-1.5 rounded-full font-bold hover:bg-white hover:text-black transition-colors duration-300 text-[11px] uppercase text-center leading-tight shadow-[0_0_15px_rgba(196,240,66,0.2)]"
          >
            Register<br/>Now
          </motion.button>
          
          <div className="w-px h-8 bg-zinc-700"></div>
          
          {/* Right Logo (MIT-AIFT) */}
          <a href="#" className={`flex items-center bg-white rounded-lg cursor-pointer shrink-0 transition-all duration-300 ${isScrolled ? 'h-12 p-1.5' : 'h-14 md:h-16 p-2'}`}>
            <img src="https://conf2026.eltai.in/assets/MITADT-KRFaF891.png" alt="MIT-ADT Logo" className="h-full w-auto object-contain" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="xl:hidden flex-1 flex justify-end">
          <button className="text-white hover:text-primary transition-colors ml-4" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="xl:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-zinc-800 p-6 flex flex-col gap-4 shadow-2xl max-h-[80vh] overflow-y-auto"
        >
          {navLinks.map((link, i) => (
            <a key={i} href="#" className={`text-lg font-heading font-bold flex items-center justify-between transition-colors uppercase ${link.active ? 'text-primary' : 'text-white hover:text-primary'}`}>
              {link.name}
              {link.dropdown && <ChevronDown size={20} />}
            </a>
          ))}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 pt-4 border-t border-zinc-800">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-black px-6 py-3 rounded-full font-bold text-lg w-full sm:w-auto flex-grow shadow-[0_0_20px_rgba(196,240,66,0.3)] uppercase leading-tight"
            >
              Register Now
            </motion.button>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg w-full sm:w-auto justify-center">
              <div className="w-8 h-8 rounded-full border-[2px] border-[#311B92] flex items-center justify-center relative">
                <div className="w-4 h-4 border-[1.5px] border-[#311B92] rounded-full flex items-center justify-center">
                  <div className="w-1 h-2 bg-[#311B92]"></div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[#311B92] font-serif font-bold text-base leading-none">MIT-AIFT</span>
                <span className="text-[6px] text-[#311B92] tracking-widest mt-0.5 font-bold">UNIVERSITY</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default function App() {
  const [activeDay, setActiveDay] = useState(1);
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
    <div className="bg-black min-h-screen font-sans text-white selection:bg-primary selection:text-black overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ y: heroY, opacity: heroOpacity }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" 
            alt="Conference Hall" 
            className="w-full h-full object-cover origin-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-4 lg:px-8 w-full flex-1 flex flex-col justify-center mt-10">
          <div className="max-w-5xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-white mb-4 font-medium"
            >
              The 20th International and 56th Annual Conference of ELTAI
            </motion.p>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="text-6xl md:text-8xl lg:text-[6rem] font-heading font-black leading-[0.9] tracking-tighter mb-10 uppercase"
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
                <Calendar className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mb-1">DATES</p>
                <p className="text-white font-bold text-sm leading-tight mb-1">07th - 10th October 2026</p>
                <p className="text-gray-400 text-xs">(Wednesday - Saturday)</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={20} />
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
                <Users className="text-primary" size={20} />
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
                <Building2 className="text-primary" size={20} />
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

      {/* Stats Section */}
      <section className="py-32 relative z-20 bg-[#ffffff]">
        <div className="max-w-[1800px] mx-auto px-4 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            {/* Left: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 flex flex-col items-start text-left"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#000000] mb-6 tracking-tighter uppercase">
                ELTAI ANNUAL CONFERENCE 2026
              </h2>
              
              <p className="text-[#909294] text-lg md:text-xl leading-relaxed mb-6 font-medium">
                For over five decades, ELTAI Annual Conferences have stood as landmark events in the journey of English language and literature education in India. Bringing together teachers, scholars, researchers, and practitioners from across the nation and beyond, these conferences celebrate shared learning, collective wisdom, and the enduring spirit of the teaching community. Each year, ELTAI creates spaces for dialogue through inspiring keynote addresses, engaging workshops, research presentations, creative sessions, and exhibitions of innovative educational resources.
              </p>
              
              <p className="text-[#909294] text-lg md:text-xl leading-relaxed mb-10 font-medium">
                The <strong className="text-[#000000]">20<sup>th</sup> International and 56<sup>th</sup> Annual ELTAI Conference</strong>, theme "English on the Edge: Survive? Evolve? Thrive?", will be <strong className="text-[#000000]">hosted by the School of Humanities and the School of Holistic Development, MIT Art, Design &amp; Technology University, Pune, from 07<sup>th</sup> to 10<sup>th</sup> October 2026</strong>. As ELTAI continues its legacy of nurturing teachers, promoting reading cultures, and advancing English education across diverse contexts, <strong className="text-[#000000]">ELTAI 2026 invites you to come together in Pune, the Oxford of the East,</strong> to reflect, reimagine, and reaffirm our shared commitment to the future of English education.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="bg-primary text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(196,240,66,0.3)] uppercase tracking-wide">
                  REGISTER NOW <ArrowRight size={20} strokeWidth={3} />
                </button>
                <button className="bg-[#6d6d6d] text-white border-none px-8 py-4 rounded-full font-bold text-lg hover:bg-[#5a5a5a] transition-colors flex items-center justify-center gap-2 uppercase tracking-wide">
                  BROCHURE <Download size={20} strokeWidth={2.5} />
                </button>
              </div>
              
              <div className="font-handwriting text-4xl md:text-5xl text-primary transform -rotate-3 mt-12 hidden lg:block">
                ELTAI Annual Conference 2026
              </div>
            </motion.div>
            
            {/* Right: Images */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 flex justify-center lg:justify-end items-center relative"
            >
              <div className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-square mx-auto lg:mr-0">
                {/* Top Middle: Guy on laptop */}
                <motion.img 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05, zIndex: 30 }}
                  src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=400&auto=format&fit=crop" 
                  className="absolute top-0 right-[25%] w-[32%] h-[32%] rounded-full object-cover shadow-2xl z-10" 
                  alt="Attendee on laptop" 
                />
                
                {/* Far Right: Stage view */}
                <motion.img 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  whileHover={{ scale: 1.05, zIndex: 30 }}
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop" 
                  className="absolute top-[25%] right-0 w-[16%] h-[16%] rounded-full object-cover shadow-2xl z-10" 
                  alt="Stage view" 
                />

                {/* Middle Left: Woman speaking */}
                <motion.img 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  whileHover={{ scale: 1.05, zIndex: 30 }}
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=400&auto=format&fit=crop" 
                  className="absolute top-[40%] left-0 w-[24%] h-[24%] rounded-full object-cover shadow-2xl z-10" 
                  alt="Speaker" 
                />

                {/* Bottom Left: People walking/hall */}
                <motion.img 
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  whileHover={{ scale: 1.05, zIndex: 30 }}
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=400&auto=format&fit=crop" 
                  className="absolute bottom-[15%] left-[12%] w-[20%] h-[20%] rounded-full object-cover shadow-2xl z-10" 
                  alt="Networking" 
                />

                {/* Bottom Right: Group talking */}
                <motion.img 
                  animate={{ y: [0, -18, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  whileHover={{ scale: 1.05, zIndex: 30 }}
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600&auto=format&fit=crop" 
                  className="absolute bottom-[5%] right-[5%] w-[52%] h-[52%] rounded-full object-cover shadow-2xl z-20" 
                  alt="Group discussion" 
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Organiser & Host Section */}
      <div className="relative bg-black">
        {/* Cloud SVG */}
        <svg className="absolute bottom-full w-full h-24 md:h-40 lg:h-56 text-black fill-current translate-y-1" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <rect x="0" y="60" width="1200" height="60" fill="currentColor" />
          <circle cx="20" cy="50" r="70" fill="currentColor" />
          <circle cx="120" cy="70" r="40" fill="currentColor" />
          <circle cx="200" cy="55" r="60" fill="currentColor" />
          <circle cx="320" cy="35" r="80" fill="currentColor" />
          <circle cx="480" cy="10" r="110" fill="currentColor" />
          <circle cx="620" cy="65" r="45" fill="currentColor" />
          <circle cx="700" cy="50" r="65" fill="currentColor" />
          <circle cx="820" cy="30" r="85" fill="currentColor" />
          <circle cx="940" cy="60" r="50" fill="currentColor" />
          <circle cx="1050" cy="25" r="95" fill="currentColor" />
          <circle cx="1180" cy="45" r="75" fill="currentColor" />
        </svg>
        
        <section className="py-32 relative z-10 overflow-hidden">
          <div className="max-w-[1800px] mx-auto px-4 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-heading font-black tracking-tighter text-white">
                Organiser & Host
              </h2>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              {/* Organiser Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-6"
              >
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-800 w-80 md:w-96 h-48 flex items-center justify-center hover:shadow-md transition-shadow">
                  <img 
                    src="https://conf2026.eltai.in/assets/ELTAI-DxCx19mA.png" 
                    alt="ELTAI Logo" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-gray-400 font-medium">Organiser</p>
              </motion.div>

              {/* Host Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center gap-6"
              >
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-800 w-80 md:w-96 h-48 flex items-center justify-center hover:shadow-md transition-shadow">
                  <img 
                    src="https://conf2026.eltai.in/assets/MITADT-KRFaF891.png" 
                    alt="MIT-ADT University Logo" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-gray-400 font-medium">Host</p>
              </motion.div>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-center text-gray-400 mt-20 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              A collaboration between India's premier English teaching association and one of the nation's most innovative universities.
            </motion.p>
          </div>
        </section>
      </div>

      {/* Speakers Section */}
      <div className="relative bg-white">
        {/* Cloud SVG */}
        <svg className="absolute bottom-full w-full h-24 md:h-40 text-white fill-current translate-y-1" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,100 C120,100 240,0 360,50 C480,100 600,0 720,50 C840,100 960,0 1080,50 C1200,100 1320,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
        
        <section className="text-black py-32 relative z-10">
          <div className="max-w-[1800px] mx-auto px-4 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24 relative"
            >
              <div className="absolute left-1/2 -translate-x-1/2 -top-12 font-handwriting text-gray-400 text-4xl transform -rotate-6">Looking Back</div>
              <h2 className="text-6xl md:text-[5.5rem] font-heading font-black tracking-tighter mt-8">Our Past Conferences</h2>
              <p className="text-gray-500 text-xl mt-6 max-w-2xl mx-auto">Moments and milestones from our previous conference editions.</p>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute left-10 top-10 w-16 h-16 bg-blue-600 rounded-full hidden md:block"
              ></motion.div>
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-20 bottom-0 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-primary transform rotate-12 hidden md:block"
              ></motion.div>
            </motion.div>

            <div className="relative w-full overflow-hidden py-10 -mx-4 lg:-mx-8 px-4 lg:px-8">
              {/* Gradient Masks for smooth fade on edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
              
              <motion.div 
                className="flex w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                  repeat: Infinity, 
                  ease: "linear", 
                  duration: 30 
                }}
              >
                {[...PAST_CONFERENCES, ...PAST_CONFERENCES, ...PAST_CONFERENCES, ...PAST_CONFERENCES].map((conference, i) => (
                  <div key={i} className="px-4">
                    <div className="group relative overflow-hidden rounded-[2.5rem] w-[280px] md:w-[350px] lg:w-[400px] aspect-[4/5] bg-gray-100 shadow-xl shrink-0">
                      <img 
                        src={conference.image} 
                        alt={conference.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-2xl md:text-3xl font-heading font-black text-white mb-2">{conference.name}</h3>
                        <div className="overflow-hidden">
                          <p className="text-primary font-bold text-sm tracking-widest uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75">{conference.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-4 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black rounded-[4rem] p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-16 shadow-2xl"
          >
            <div className="lg:w-1/2">
              <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4">
                07-10 OCTOBER 2026 • PUNE, INDIA
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-black tracking-tighter mb-6 leading-[1.1] text-white">
                Join us at ELTAI 2026 – Where English Education Meets Innovation
              </h2>
              <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl font-medium leading-relaxed">
                Be part of the 20th International and 56th Annual ELTAI Conference. Connect with educators, researchers, and thought leaders shaping the future of English education.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-black px-8 py-4 rounded-full font-black text-lg hover:bg-white transition-colors inline-flex items-center gap-2 shadow-[0_0_30px_rgba(196,240,66,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] group"
                >
                  <ArrowRight strokeWidth={3} className="group-hover:translate-x-1 transition-transform" /> REGISTER NOW
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-black text-lg hover:bg-white/10 hover:border-white transition-colors inline-flex items-center gap-2"
                >
                  SUBMIT ABSTRACT
                </motion.button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full relative group cursor-pointer">
              <div className="absolute inset-0 bg-primary transform rotate-3 rounded-[3rem] transition-transform duration-500 group-hover:rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop" 
                alt="Conference Stage" 
                className="w-full h-auto rounded-[3rem] object-cover aspect-[4/3] relative z-10 shadow-2xl transform -rotate-3 transition-transform duration-500 group-hover:rotate-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-24 pb-12 border-t border-zinc-900">
        <div className="max-w-[1800px] mx-auto px-4 lg:px-8">
          
          {/* Middle */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-base text-gray-400 mb-20 font-medium">
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-3 inline-block mb-2">
                <img src="https://conf2026.eltai.in/assets/ELTAI-DxCx19mA.png" alt="ELTAI Logo" className="h-12 object-contain" />
              </div>
              <p className="text-white font-bold text-lg leading-tight">English Language Teachers' Association of India</p>
              <div className="space-y-2">
                <p>D-54 Third Floor, Anandham Apartments</p>
                <p>156, SIDCO Nagar Main Road</p>
                <p>Villivakkam, Chennai - 600 049, India</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-3 inline-block mb-2">
                <img src="https://conf2026.eltai.in/assets/MITADT-KRFaF891.png" alt="MIT-ADT Logo" className="h-12 object-contain" />
              </div>
              <p className="text-white font-bold text-lg leading-tight">School of Humanities & School of Holistic Development</p>
              <div className="space-y-2">
                <p>MIT Art, Design & Technological University</p>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-white font-bold text-lg mb-4">Join Us</p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-zinc-900 text-sm text-gray-500 font-bold tracking-wide">
            <p className="text-white mb-4 md:mb-0">© 2026 ELT@I. All rights reserved.</p>
            <p>Designed and Developed by <span className="text-white flex items-center gap-2 inline-flex"><svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> Deemsys</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

