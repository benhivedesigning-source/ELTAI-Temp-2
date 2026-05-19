import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Home, Lightbulb, FileText, Calendar, Star, UserPlus, Plane, Users, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMenu(null);
  }, [location]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setExpandedMenu(null);
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={16} /> },
    { name: 'Theme', dropdown: true, icon: <Lightbulb size={16} />, subItems: [
      { name: 'Concept Note', path: '/theme/concept-note' },
      { name: 'Domains', path: '/theme/domains' }
    ] },
    { name: 'Submit', dropdown: true, icon: <FileText size={16} />, subItems: [
      { name: 'Call for Abstracts', path: '/submit/call-for-abstracts' },
      { name: 'Submission Guidelines', path: '/submit/submission-guidelines' },
      { name: 'Submission & Review Policies', path: '/submit/review-policies' },
      { name: 'Important Dates', path: '/submit/important-dates' }
    ] },
    { name: 'Programme', dropdown: true, icon: <Calendar size={16} />, subItems: [
      { name: 'Schedule', path: '/programme/schedule' },
      { name: 'Parallel Sessions', path: '/programme/sessions' },
      { name: 'Speakers', path: '/programme/speakers' }
    ] },
    { name: 'Highlights', dropdown: true, icon: <Star size={16} />, subItems: [
      { name: 'Gallery', path: '/gallery' },
      { name: 'Scholarships', path: '/highlights/scholarships' },
      { name: 'Publications', path: '/highlights/publications' },
      { name: 'Awards', path: '/highlights/awards' }
    ] },
    { name: 'Register', dropdown: true, icon: <UserPlus size={16} />, subItems: [
      { name: 'Registration Fees', path: '/register/registration-fees' },
      { name: 'Cancellation Policy', path: '/register/cancellation-policy' }
    ] },
    { name: 'Travel', dropdown: true, icon: <Plane size={16} />, subItems: [
      { name: 'How to Reach Us', path: '/travel/reach' },
      { name: 'Accommodation', path: '/travel/accommodation' },
      { name: 'Places to Visit', path: '/travel/visit' }
    ] },
    { name: 'Organizers', dropdown: true, icon: <Users size={16} />, subItems: [
      { name: 'ELT@I', path: '/organizers/eltai' },
      { name: 'MIT ADT University', path: '/organizers/mit-adt-university' },
      { name: 'Organising Partners', path: '/organizers/partners' },
      { name: 'Organising Committee', path: '/organizers/committee' }
    ] },
    { name: 'Contact', dropdown: true, icon: <Mail size={16} />, subItems: [
      { name: 'Contact Information', path: '/contact/contact-information' },
      { name: 'Help Desk', path: '/contact/help' },
      { name: 'FAQ', path: '/contact/faq' }
    ] },
  ];

  const restrictedPaths = [
    '/programme/schedule',
    '/programme/sessions',
    '/programme/speakers',
    '/highlights/scholarships',
    '/highlights/publications',
    '/highlights/awards',
    '/travel/reach',
    '/travel/accommodation',
    '/travel/visit',
    '/organizers/partners',
    '/organizers/committee',
    '/contact/help',
    '/contact/faq'
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b-2 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-3 md:py-4 shadow-lg shadow-black/20 border-zinc-800' : 'bg-transparent py-4 md:py-6 border-transparent'}`}>
      <div className="w-full px-2 lg:px-4 xl:px-6 2xl:px-8 flex items-center justify-between gap-2 xl:gap-4 2xl:gap-10 max-w-[1920px] mx-auto">
        {/* Left Logo (ELT@I) */}
        <div className="flex items-center shrink-0">
          <Link to="/" className={`flex items-center bg-white rounded-lg cursor-pointer shrink-0 transition-all duration-300 ${isScrolled ? 'h-8 p-1 xl:h-11 xl:p-1' : 'h-10 p-1 xl:h-14 xl:p-1.5'}`}>
            <img src="https://conf2026.eltai.in/assets/ELTAI-DxCx19mA.png" alt="ELT@I Logo" className="h-full w-auto object-contain" />
          </Link>
        </div>
        
        {/* Center Menu - Desktop (Visible from xl) */}
        <div className="hidden xl:flex items-center justify-center gap-0 2xl:gap-2 font-bold text-[11px] xl:text-[12px] 2xl:text-[14px] tracking-tight capitalize">
          {navLinks.map((link, i) => {
            const isMainActive = location.pathname === link.path || 
                                 (link.subItems && link.subItems.some(s => location.pathname === s.path || location.pathname.startsWith(link.name.toLowerCase() === 'home' ? '/!!fake' : `/${link.name.toLowerCase()}`))) ||
                                 (link.name === 'Submit' && location.pathname.startsWith('/submit')) ||
                                 (link.name === 'Highlights' && location.pathname.startsWith('/highlights')) ||
                                 (link.name === 'Programme' && location.pathname.startsWith('/programme')) ||
                                 (link.name === 'Travel' && location.pathname.startsWith('/travel')) ||
                                 (link.name === 'Organizers' && location.pathname.startsWith('/organizers')) ||
                                 (link.name === 'Theme' && location.pathname.startsWith('/theme')) ||
                                 (link.name === 'Contact' && location.pathname.startsWith('/contact')) ||
                                 (link.name === 'Register' && location.pathname.includes('/register'));

            return (
            <div key={i} className="relative group flex items-center">
              <Link 
                to={link.path || '#'} 
                className={`flex items-center transition-colors py-4 px-1.5 2xl:px-2 relative ${isMainActive ? 'text-primary' : 'text-white hover:text-primary'}`}
              >
                <span className="whitespace-nowrap">{link.name}</span>
                {link.dropdown && <ChevronDown className={`ml-0.5 w-3 h-3 2xl:w-4 2xl:h-4 transition-transform duration-300 ${isMainActive ? 'rotate-180' : 'group-hover:rotate-180'}`} strokeWidth={3} />}
                
                {/* Active Selection Indicator Arrow */}
                {isMainActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 flex justify-center items-center pointer-events-none"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0L14 7H0L7 0Z" fill="currentColor" className="text-primary" />
                    </svg>
                  </motion.div>
                )}
              </Link>
              {/* Dropdown Menu */}
              {link.subItems && (
                <div className="absolute top-full left-0 mt-[-8px] w-64 bg-black/95 backdrop-blur-md border border-zinc-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                  <div className="py-2">
                    {link.subItems.map((subItem, j) => {
                      const isRestricted = restrictedPaths.includes(subItem.path);
                      if (isRestricted) {
                        return (
                          <div key={j} className="flex items-center justify-between px-4 py-2.5 text-zinc-600 cursor-not-allowed text-[13px] 2xl:text-[14px] group/item">
                            <span>{subItem.name}</span>
                            <span className="text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-500 capitalize font-black">Soon</span>
                          </div>
                        );
                      }
                      const isSubActive = location.pathname === subItem.path;
                      return (
                        <Link key={j} to={subItem.path} className={`block px-4 py-2.5 hover:bg-white/5 transition-colors text-[13px] 2xl:text-[14px] ${isSubActive ? 'text-primary' : 'text-white hover:text-primary'}`}>
                          {subItem.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )})}
        </div>

        {/* Right Section - Desktop (Visible from xl) */}
        <div className="hidden xl:flex items-center gap-2 2xl:gap-4 shrink-0">
          <div className="relative group/submit">
            <motion.button 
              className="bg-zinc-900 text-zinc-500 px-3 py-1.5 2xl:px-5 2xl:py-2 rounded-full font-bold cursor-not-allowed text-[10px] 2xl:text-[11px] capitalize text-center leading-tight border border-zinc-800 whitespace-nowrap flex flex-col items-center"
            >
              Submit
              <span className="text-[8px] bg-zinc-800 px-1 py-0.5 rounded text-zinc-500 capitalize font-black mt-0.5 shrink-0">Soon</span>
            </motion.button>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-3 py-2 2xl:px-5 2xl:py-2.5 rounded-full font-bold hover:bg-white hover:text-black transition-colors duration-300 text-[10px] 2xl:text-[11px] capitalize text-center leading-tight shadow-[0_0_15px_rgba(231,99,102,0.2)] whitespace-nowrap"
          >
            Register Now
          </motion.button>
          
          {/* Right Logo (MIT-ADT) */}
          <Link to="/" className={`flex items-center bg-white rounded-lg cursor-pointer shrink-0 transition-all duration-300 ${isScrolled ? 'h-8 p-1 xl:h-11 xl:p-1' : 'h-10 p-1 xl:h-14 xl:p-1.5'}`}>
            <img src="https://conf2026.eltai.in/assets/MITADT-KRFaF891.png" alt="MIT-ADT Logo" className="h-full w-auto object-contain" />
          </Link>
        </div>

        {/* Mobile/Tablet Toggle */}
        <div className="xl:hidden flex items-center justify-end gap-3">
          {/* Tablet only quick actions */}
          <div className="hidden md:flex lg:hidden items-center gap-3 mr-2">
            <button className="bg-primary text-white px-5 py-2 rounded-full font-bold text-xs capitalize shadow-[0_0_15px_rgba(231,99,102,0.2)]">
              Register
            </button>
          </div>
          
          <button className="text-white hover:text-primary transition-colors h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Mobile only right logo */}
          <div className="lg:hidden flex items-center">
             <Link to="/" className={`flex items-center bg-white rounded-lg cursor-pointer transition-all duration-300 ${isScrolled ? 'h-9 p-1' : 'h-10 p-1'}`}>
                <img src="https://conf2026.eltai.in/assets/MITADT-KRFaF891.png" alt="MIT-ADT Logo" className="h-full w-auto object-contain" />
             </Link>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="xl:hidden fixed inset-0 top-[60px] md:top-[80px] bg-black/98 backdrop-blur-2xl z-[60] overflow-y-auto"
          >
            <div className="max-w-3xl mx-auto p-6 md:p-10 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                {navLinks.map((link, i) => {
                  const isExpanded = expandedMenu === link.name;
                  const isMainActive = location.pathname === link.path || 
                                      (link.subItems && link.subItems.some(s => location.pathname === s.path || location.pathname.startsWith(link.name.toLowerCase() === 'home' ? '/!!fake' : `/${link.name.toLowerCase()}`))) ||
                                      (link.name === 'Submit' && location.pathname.startsWith('/submit')) ||
                                      (link.name === 'Highlights' && location.pathname.startsWith('/highlights')) ||
                                      (link.name === 'Programme' && location.pathname.startsWith('/programme')) ||
                                      (link.name === 'Travel' && location.pathname.startsWith('/travel')) ||
                                      (link.name === 'Organizers' && location.pathname.startsWith('/organizers')) ||
                                      (link.name === 'Theme' && location.pathname.startsWith('/theme')) ||
                                      (link.name === 'Contact' && location.pathname.startsWith('/contact')) ||
                                      (link.name === 'Register' && location.pathname.includes('/register'));

                  return (
                    <div key={i} className="flex flex-col bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-4 transition-all hover:bg-zinc-900/80">
                      <Link 
                        to={link.path || '#'} 
                        onClick={(e) => {
                          if (link.dropdown) {
                            e.preventDefault();
                            setExpandedMenu(isExpanded ? null : link.name);
                          } else {
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className={`text-base md:text-lg font-bold flex items-center justify-between transition-colors capitalize ${isMainActive ? 'text-primary' : 'text-white hover:text-primary'}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="p-2 rounded-xl bg-white/5 text-zinc-400">
                             {link.icon}
                          </span>
                          {link.name}
                        </div>
                        {link.dropdown && <ChevronDown size={20} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />}
                      </Link>
                      
                      <AnimatePresence>
                        {link.dropdown && isExpanded && link.subItems && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-2.5 mt-4 pt-4 border-t border-zinc-800/50">
                              {link.subItems.map((subItem, j) => {
                                const isRestricted = restrictedPaths.includes(subItem.path);
                                if (isRestricted) {
                                  return (
                                    <div key={j} className="flex items-center justify-between px-2 py-1.5 text-zinc-500 cursor-not-allowed text-sm font-medium">
                                      <span>{subItem.name}</span>
                                      <span className="text-[9px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-600 font-bold uppercase tracking-wider">Coming Soon</span>
                                    </div>
                                  );
                                }
                                const isSubActive = location.pathname === subItem.path;
                                return (
                                  <Link 
                                    key={j} 
                                    to={subItem.path} 
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-2 py-1.5 transition-colors text-sm font-medium rounded-lg hover:bg-white/5 ${isSubActive ? 'text-primary' : 'text-zinc-400 hover:text-white'}`}
                                  >
                                    {subItem.name}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Mobile/Tablet Menu Bottom Actions */}
              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-zinc-800">
                <div className="relative group">
                  <button 
                    className="bg-zinc-900 text-zinc-600 py-4 px-6 rounded-2xl font-bold text-base w-full flex items-center justify-center gap-3 cursor-not-allowed border border-zinc-800"
                  >
                    Submit Abstract
                    <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-500 font-black uppercase tracking-widest">Soon</span>
                  </button>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary text-white py-4 px-6 rounded-2xl font-bold text-base w-full shadow-[0_0_20px_rgba(231,99,102,0.3)] capitalize transition-all active:scale-95"
                >
                  Register Now
                </motion.button>
              </div>
              
              {/* Organized by badge at mobile menu bottom */}
              <div className="flex flex-col items-center gap-4 mt-6 text-center">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-600">Hosted At</p>
                <div className="bg-white p-4 rounded-2xl inline-block shadow-lg">
                  <img src="https://conf2026.eltai.in/assets/MITADT-KRFaF891.png" alt="MIT-ADT Logo" className="h-10 md:h-12 w-auto object-contain" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
