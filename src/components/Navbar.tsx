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
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b-2 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-lg shadow-black/20 border-zinc-800' : 'bg-transparent py-6 border-transparent'}`}>
      <div className="w-full px-4 xl:px-8 flex items-center justify-center gap-6 xl:gap-10 max-w-[1800px] mx-auto">
        {/* Left Logo (ELT@I) */}
        <div className="flex items-center shrink-0">
          <Link to="/" className={`flex items-center bg-white rounded-lg cursor-pointer shrink-0 transition-all duration-300 ${isScrolled ? 'h-10 p-1 xl:h-12 xl:p-1.5' : 'h-12 p-1.5 xl:h-16 xl:p-2'}`}>
            <img src="https://conf2026.eltai.in/assets/ELTAI-DxCx19mA.png" alt="ELT@I Logo" className="h-full w-auto object-contain" />
          </Link>
        </div>
        
        {/* Center Menu */}
        <div className="hidden lg:flex items-center justify-center gap-2 xl:gap-3 font-bold text-[12px] xl:text-[15px] tracking-wide capitalize">
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
            <div key={i} className="relative group">
              <Link 
                to={link.path || '#'} 
                className={`flex items-center transition-colors py-4 ${isMainActive ? 'text-primary' : 'text-white hover:text-primary'}`}
              >
                <span className="whitespace-nowrap">{link.name}</span>
                {link.dropdown && <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-300 group-hover:rotate-180" strokeWidth={3} />}
              </Link>
              {/* Dropdown Menu */}
              {link.subItems && (
                <div className="absolute top-full left-0 mt-[-8px] w-64 bg-black/95 backdrop-blur-md border border-zinc-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                  <div className="py-2">
                    {link.subItems.map((subItem, j) => {
                      const isRestricted = restrictedPaths.includes(subItem.path);
                      if (isRestricted) {
                        return (
                          <div key={j} className="flex items-center justify-between px-4 py-2.5 text-zinc-600 cursor-not-allowed text-[13px] xl:text-[14px] group/item">
                            <span>{subItem.name}</span>
                            <span className="text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-500 capitalize font-black">Soon</span>
                          </div>
                        );
                      }
                      const isSubActive = location.pathname === subItem.path;
                      return (
                        <Link key={j} to={subItem.path} className={`block px-4 py-2.5 hover:bg-white/5 transition-colors text-[13px] xl:text-[14px] ${isSubActive ? 'text-primary' : 'text-white hover:text-primary'}`}>
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

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4 shrink-0">
          <div className="relative group/submit">
            <motion.button 
              className="bg-zinc-900 text-zinc-500 px-4 py-2 xl:px-6 xl:py-2 rounded-full font-bold cursor-not-allowed text-[9px] xl:text-[11px] capitalize text-center leading-tight border border-zinc-800 whitespace-nowrap flex flex-col items-center"
            >
              Submit
              <span className="text-[8px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-600 capitalize font-black mt-0.5">Soon</span>
            </motion.button>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-4 py-2 xl:px-6 xl:py-2 rounded-full font-bold hover:bg-white hover:text-black transition-colors duration-300 text-[9px] xl:text-[11px] capitalize text-center leading-tight shadow-[0_0_15px_rgba(231,99,102,0.2)] whitespace-nowrap"
          >
            Register Now
          </motion.button>
          
          <div className="w-px h-6 xl:h-8 bg-zinc-700"></div>
          
          {/* Right Logo (MIT-AIFT) */}
          <Link to="/" className={`flex items-center bg-white rounded-lg cursor-pointer shrink-0 transition-all duration-300 ${isScrolled ? 'h-10 p-1 xl:h-12 xl:p-1.5' : 'h-12 p-1.5 xl:h-16 xl:p-2'}`}>
            <img src="https://conf2026.eltai.in/assets/MITADT-KRFaF891.png" alt="MIT-ADT Logo" className="h-full w-auto object-contain" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center justify-end">
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
          className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-zinc-800 p-6 flex flex-col gap-4 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto"
        >
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
              <div key={i} className="flex flex-col">
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
                  className={`text-lg font-heading font-bold flex items-center justify-center gap-3 transition-colors capitalize ${isMainActive ? 'text-primary' : 'text-white hover:text-primary'}`}
                >
                  <div className="flex items-center">
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
                      <div className="flex flex-col gap-3 mt-3 ml-2 py-2">
                        {link.subItems.map((subItem, j) => {
                          const isRestricted = restrictedPaths.includes(subItem.path);
                          if (isRestricted) {
                            return (
                              <div key={j} className="text-zinc-600 cursor-not-allowed text-base capitalize font-bold flex items-center justify-start gap-2">
                                {subItem.name}
                                <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-500 capitalize font-black">Soon</span>
                              </div>
                            );
                          }
                          const isSubActive = location.pathname === subItem.path;
                          return (
                            <Link 
                              key={j} 
                              to={subItem.path} 
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`transition-colors text-base capitalize font-bold text-left ${isSubActive ? 'text-primary' : 'text-gray-400 hover:text-primary'}`}
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
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 pt-4 border-t border-zinc-800">
            <div className="w-full sm:w-auto flex-grow relative">
              <motion.button 
                className="bg-zinc-900 text-zinc-600 px-6 py-3 rounded-full font-bold text-lg w-full flex items-center justify-center gap-3 cursor-not-allowed border border-zinc-800"
              >
                Submit Now
                <span className="text-[10px] bg-zinc-800 px-2.5 py-1 rounded text-zinc-500 capitalize font-black">Soon</span>
              </motion.button>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-white px-6 py-3 rounded-full font-bold text-lg w-full sm:w-auto flex-grow shadow-[0_0_20px_rgba(231,99,102,0.3)] capitalize leading-tight"
            >
              Register Now
            </motion.button>
            <div className="flex items-center justify-center bg-white px-4 py-2 rounded-lg w-full sm:w-auto h-14">
              <img src="https://conf2026.eltai.in/assets/MITADT-KRFaF891.png" alt="MIT-ADT Logo" className="h-full w-auto object-contain" />
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
