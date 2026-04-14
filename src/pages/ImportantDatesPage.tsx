import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Clock, Calendar, CheckCircle, ArrowRight, Star, Unlock, FileText, UserCheck, Sparkles, Users, MapPin, Mic, BookOpen, Award } from 'lucide-react';

const ImportantDatesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gradientText = {
    background: 'linear-gradient(90deg, #e76366, #8355eb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const timelineNodes = [
    {
      id: 1,
      type: 'opening',
      date: '15th April 2026',
      title: 'Submission of Abstracts opens on',
      dotColor: 'bg-[#22c55e]',
      pillBg: 'bg-green-600',
      hoverBorder: 'hover:border-green-500',
      icon: Unlock,
      glow: 'group-hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]'
    },
    {
      id: 2,
      type: 'regular',
      date: '15th August 2026',
      title: 'Deadline for Regular Submission of Abstracts',
      extra: 'Before 6:00 pm',
      dotColor: 'bg-gradient-to-r from-[#e76366] to-[#8355eb]',
      pillBg: 'bg-gradient-to-r from-[#e76366] to-[#8355eb]',
      hoverBorder: 'hover:border-[#e76366]',
      icon: FileText,
      glow: 'group-hover:shadow-[0_0_40px_rgba(231,99,102,0.2)]'
    },
    {
      id: 3,
      type: 'late',
      date: '15th Aug 6:01pm – 31st Aug 6:00pm 2026',
      title: 'Extended Time Period for Late Submission of Abstracts',
      extra: 'From 6:01pm on 15th August 2026 To 6:00 pm on 31st August 2026',
      dotColor: 'bg-gradient-to-r from-[#e76366] to-[#8355eb]',
      pillBg: 'bg-gradient-to-r from-[#e76366] to-[#8355eb]',
      hoverBorder: 'hover:border-amber-500',
      icon: Clock,
      glow: 'group-hover:shadow-[0_0_40px_rgba(245,158,11,0.2)]',
      badge: {
        icon: AlertTriangle,
        text: 'Additional fee of ₹ 250',
        colorClass: 'bg-amber-950 border-amber-700 text-amber-400'
      }
    },
    {
      id: 4,
      type: 'acceptance',
      date: 'Within 15 days of submission',
      title: 'Notification of Acceptance',
      dotColor: 'bg-[#8355eb]',
      pillBg: 'bg-[#8355eb]',
      hoverBorder: 'hover:border-[#8355eb]',
      icon: CheckCircle,
      glow: 'group-hover:shadow-[0_0_40px_rgba(131,85,235,0.2)]'
    },
    {
      id: 5,
      type: 'presenter-reg',
      date: '15th September 2026',
      title: 'Deadline for Presenters to Register',
      extra: 'Before 6:00 pm',
      dotColor: 'bg-gradient-to-r from-[#e76366] to-[#8355eb]',
      pillBg: 'bg-gradient-to-r from-[#e76366] to-[#8355eb]',
      hoverBorder: 'hover:border-[#8355eb]',
      icon: UserCheck,
      glow: 'group-hover:shadow-[0_0_40px_rgba(131,85,235,0.2)]'
    },
    {
      id: 6,
      type: 'early-bird',
      date: '15th September 2026',
      title: 'Deadline for Early-bird Registrations',
      extra: 'Before 6:00 pm',
      dotColor: 'bg-gradient-to-r from-[#e76366] to-[#8355eb]',
      pillBg: 'bg-gradient-to-r from-[#e76366] to-[#8355eb]',
      hoverBorder: 'hover:border-green-500',
      icon: Sparkles,
      glow: 'group-hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]',
      badge: {
        text: 'Early-bird Rate',
        colorClass: 'bg-green-950 border-green-800 text-green-400'
      }
    },
    {
      id: 7,
      type: 'regular-reg',
      date: '15th Sep 6:01pm – 06th Oct 6:00pm 2026',
      title: 'Deadline for Regular Registrations',
      extra: 'From 6:01 pm on 15th September 2026 To 6:00 pm on 06th October 2026',
      dotColor: 'bg-gradient-to-r from-[#e76366] to-[#8355eb]',
      pillBg: 'bg-gradient-to-r from-[#e76366] to-[#8355eb]',
      hoverBorder: 'hover:border-[#e76366]',
      icon: Users,
      glow: 'group-hover:shadow-[0_0_40px_rgba(231,99,102,0.2)]'
    },
    {
      id: 8,
      type: 'on-the-spot',
      date: '07th and 08th October 2026',
      title: 'On-the-spot Registrations',
      dotColor: 'bg-[#e76366]',
      pillBg: 'bg-[#e76366]',
      hoverBorder: 'hover:border-[#e76366]',
      icon: MapPin,
      glow: 'group-hover:shadow-[0_0_40px_rgba(231,99,102,0.2)]'
    },
    {
      id: 9,
      type: 'conference',
      date: '07th to 10th October 2026',
      title: 'Conference Dates',
      extra: 'MIT ADT University, Pune, Maharashtra',
      dotColor: 'bg-gradient-to-r from-[#e76366] to-[#8355eb]',
      pillBg: '',
      hoverBorder: '',
      icon: Mic,
      isHero: true
    },
    {
      id: 10,
      type: 'full-paper',
      date: '31st October 2026',
      title: 'Deadline for Full-paper Submission',
      dotColor: 'bg-gradient-to-r from-[#e76366] to-[#8355eb]',
      pillBg: 'bg-gradient-to-r from-[#e76366] to-[#8355eb]',
      hoverBorder: 'hover:border-[#8355eb]',
      icon: BookOpen,
      glow: 'group-hover:shadow-[0_0_40px_rgba(131,85,235,0.2)]'
    },
    {
      id: 11,
      type: 'publication',
      date: 'After the conference',
      title: 'Publication',
      extra: 'Scopus, JELT and JTREL',
      dotColor: 'bg-[#8355eb]',
      pillBg: 'bg-[#8355eb]',
      hoverBorder: 'hover:border-[#8355eb]',
      icon: Award,
      glow: 'group-hover:shadow-[0_0_40px_rgba(131,85,235,0.2)]'
    }
  ];

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const emptyCells = Array.from({ length: 4 }); // Oct 1 is Thursday
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="bg-black min-h-screen font-sans text-white selection:bg-primary selection:text-black overflow-x-hidden">
      {/* BREADCRUMB */}
      <nav className="pt-24 max-w-[1800px] mx-auto px-4 lg:px-8 py-4 relative z-20">
        <div className="text-gray-500 text-sm font-medium flex items-center gap-2">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-500">Submit</span>
          <span className="text-zinc-700">/</span>
          <span style={gradientText} className="font-bold">Important Dates</span>
        </div>
      </nav>

      {/* HERO — CINEMATIC */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[rgba(231,99,102,0.15)] rounded-full blur-[140px] -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[rgba(131,85,235,0.15)] rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
          <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(rgba(255,255,255,1) 0, rgba(255,255,255,1) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, rgba(255,255,255,1) 0, rgba(255,255,255,1) 1px, transparent 1px, transparent 60px)' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-full text-center">
            <span className="font-['Poppins'] font-black text-[22vw] leading-none tracking-tighter opacity-[0.03]" style={gradientText}>
              DATES
            </span>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            
            <h1 className="font-['Poppins'] font-black text-6xl md:text-8xl text-white leading-none tracking-tighter">
              Important
            </h1>
            <h1 className="font-['Poppins'] font-black text-6xl md:text-8xl leading-none tracking-tighter" style={gradientText}>
              Dates
            </h1>

            <div className="mt-10 flex gap-4 justify-center flex-wrap">
              <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-2xl px-6 py-4 text-center">
                <div className="font-black text-3xl" style={gradientText}>Apr 2026</div>
                <div className="text-gray-500 text-xs mt-1 font-medium">Submissions Open</div>
              </div>
              <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-2xl px-6 py-4 text-center">
                <div className="font-black text-3xl" style={gradientText}>Aug 2026</div>
                <div className="text-gray-500 text-xs mt-1 font-medium">Abstract Deadline</div>
              </div>
              <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-2xl px-6 py-4 text-center">
                <div className="font-black text-3xl" style={gradientText}>Oct 2026</div>
                <div className="text-gray-500 text-xs mt-1 font-medium">Conference Dates</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VERTICAL TIMELINE — MAGAZINE STYLE */}
      <section className="w-full bg-black py-32 relative z-10 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#e76366]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#8355eb]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-['Caveat'] text-2xl block mb-4" style={gradientText}>Timeline</span>
              <h2 className="font-['Poppins'] font-black text-white text-5xl md:text-7xl tracking-tighter">
                Every <span style={gradientText}>Deadline</span>
              </h2>
            </motion.div>
          </div>

          <div className="relative">
            {/* TIMELINE SPINE WITH GLOW */}
            <div className="absolute left-[2rem] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-zinc-800">
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#e76366] via-[#8355eb] to-[#e76366] shadow-[0_0_15px_rgba(131,85,235,0.5)]"
              />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#e76366] shadow-[0_0_10px_#e76366]"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-[#8355eb] shadow-[0_0_10px_#8355eb]"></div>
            </div>

            {/* NODES */}
            <div className="flex flex-col gap-16 md:gap-24 py-10">
              {timelineNodes.map((node, index) => {
                const isOdd = index % 2 === 0;
                const isEven = !isOdd;

                return (
                  <div key={node.id} className="relative flex items-center w-full group">
                    
                    {/* DOT ON SPINE */}
                    <div className="absolute left-[2rem] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      {node.isHero ? (
                        <div className="relative flex items-center justify-center">
                          <motion.div 
                            animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-[#e76366] to-[#8355eb]"
                          />
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#e76366] to-[#8355eb] border-4 border-black relative z-10 shadow-[0_0_30px_rgba(131,85,235,1)]"></div>
                        </div>
                      ) : (
                        <div className="relative group-hover:scale-150 transition-transform duration-500">
                          <div className={`absolute inset-0 rounded-full ${node.dotColor} blur-sm opacity-50`}></div>
                          <div className={`w-5 h-5 rounded-full ${node.dotColor} border-[3px] border-black relative z-10 shadow-lg`} />
                        </div>
                      )}
                    </div>

                    {/* CONNECTOR LINE */}
                    <div className="absolute left-[2rem] top-1/2 -translate-y-1/2 w-10 h-[2px] bg-gradient-to-r from-zinc-800 to-transparent md:hidden z-10"></div>
                    {isOdd && <div className="hidden md:block absolute right-1/2 top-1/2 -translate-y-1/2 w-16 h-[2px] bg-gradient-to-l from-zinc-700 to-transparent z-10 group-hover:from-[#e76366] transition-colors duration-500"></div>}
                    {isEven && <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 w-16 h-[2px] bg-gradient-to-r from-zinc-700 to-transparent z-10 group-hover:from-[#8355eb] transition-colors duration-500"></div>}

                    {/* CARD CONTAINER */}
                    <div className={`w-full md:w-1/2 flex relative z-30 ${isEven ? 'justify-start pl-[5rem] md:pl-20 md:ml-auto' : 'justify-start md:justify-end pl-[5rem] md:pl-0 md:pr-20'}`}>
                      <motion.div
                        initial={{ opacity: 0, x: isOdd ? -60 : 60, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`w-full max-w-md`}
                      >
                        {node.isHero ? (
                          <div className="relative p-[2px] rounded-[2.5rem] bg-gradient-to-r from-[#e76366] to-[#8355eb] overflow-hidden shadow-[0_0_50px_rgba(131,85,235,0.4)] group-hover:shadow-[0_0_80px_rgba(231,99,102,0.6)] transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                            <div className="bg-zinc-950 rounded-[2.4rem] p-10 relative z-10 overflow-hidden text-center md:text-left">
                              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#e76366]/30 to-[#8355eb]/30 blur-3xl rounded-full mix-blend-screen"></div>
                              
                              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#e76366] to-[#8355eb] flex items-center justify-center shadow-2xl shrink-0">
                                  <node.icon size={40} className="text-white" />
                                </div>
                                <div>
                                  <div className="font-['Poppins'] font-black text-2xl text-white mb-2 tracking-tight">{node.date}</div>
                                  <div className="font-['Poppins'] font-black text-4xl md:text-5xl mb-4 leading-none" style={gradientText}>{node.title}</div>
                                  <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 text-gray-300 font-medium backdrop-blur-sm border border-white/10">
                                    <MapPin size={16} className="text-[#e76366]" />
                                    {node.extra}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="relative">
                            {/* Animated Glow Backdrop */}
                            <div className={`absolute -inset-[1px] rounded-[2rem] bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-sm`}></div>
                            
                            <div className={`relative bg-zinc-900/60 backdrop-blur-xl border border-zinc-700/50 rounded-[2rem] p-8 transition-all duration-500 ${node.hoverBorder} ${node.glow} hover:bg-zinc-900/80 hover:-translate-y-2 overflow-hidden cursor-pointer`}>
                              {/* Watermark Number */}
                              <div className="absolute -right-4 -bottom-6 text-[8rem] font-black text-white/[0.02] pointer-events-none font-['Poppins'] leading-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:text-white/[0.04]">
                                {(index + 1).toString().padStart(2, '0')}
                              </div>

                              <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className={`w-14 h-14 rounded-2xl ${node.pillBg} flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                                  <node.icon size={24} className="text-white" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Step {(index + 1).toString().padStart(2, '0')}</div>
                                  <div className="font-['Poppins'] font-bold text-white text-lg leading-tight">{node.date}</div>
                                </div>
                              </div>

                              <div className="relative z-10">
                                <h3 className="font-['Poppins'] font-black text-2xl text-white leading-snug mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                  {node.title}
                                </h3>
                                
                                {node.badge && (
                                  <div className={`inline-flex items-center gap-2 border rounded-xl px-4 py-2 text-[11px] font-bold mb-4 ${node.badge.colorClass} shadow-inner`}>
                                    {node.badge.icon && <node.badge.icon size={13} />}
                                    {node.badge.text}
                                  </div>
                                )}
                                
                                {node.extra && (
                                  <div className="flex items-start gap-3 mt-2 pt-4 border-t border-zinc-800/50">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 group-hover:bg-[#8355eb] transition-colors"></div>
                                    <p className="text-gray-400 text-sm italic font-medium leading-relaxed">
                                      {node.extra}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider: black -> white */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block relative z-10" style={{ background: '#000' }}>
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
      </svg>

      {/* CALENDAR GRID VIEW */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-['Caveat'] text-xl block mb-4" style={gradientText}>At a Glance</span>
            <h2 className="font-['Poppins'] font-black text-gray-900 text-4xl md:text-5xl">
              Full <span style={gradientText}>Schedule</span>
            </h2>
          </div>

          <div className="mb-6">
            <h3 className="font-['Poppins'] font-black text-gray-900 text-2xl">October 2026</h3>
          </div>

          <div className="grid grid-cols-7 gap-2 md:gap-4 mb-8">
            {/* Headers */}
            {daysOfWeek.map((day, i) => (
              <div key={i} className="text-center text-gray-400 text-xs font-bold uppercase pb-2">
                {day}
              </div>
            ))}

            {/* Empty Cells */}
            {emptyCells.map((_, i) => (
              <div key={`empty-${i}`} className="w-full aspect-square"></div>
            ))}

            {/* Days */}
            {daysInMonth.map((day) => {
              const isConfDay = day >= 7 && day <= 10;
              return (
                <div 
                  key={day} 
                  className={`w-full aspect-square rounded-xl flex flex-col items-center justify-center transition-all ${
                    isConfDay 
                      ? 'bg-gradient-to-br from-[#e76366] to-[#8355eb] text-white shadow-[0_0_20px_rgba(231,99,102,0.4)]' 
                      : 'bg-gray-50 text-gray-400 border border-gray-100'
                  }`}
                >
                  <span className={`text-sm md:text-base ${isConfDay ? 'font-black' : 'font-medium'}`}>
                    {day.toString().padStart(2, '0')}
                  </span>
                  {isConfDay && (
                    <span className="text-[8px] font-black uppercase mt-0.5 opacity-90 tracking-wider">
                      CONF
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <div className="bg-gray-100 border border-gray-200 rounded-full px-4 py-2 text-gray-600 text-xs font-bold inline-block text-center">
              Registration Deadline: 15 Sep · Full-paper Deadline: 31 Oct
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider: white -> black */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block relative z-10" style={{ background: '#ffffff' }}>
        <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#000000" />
      </svg>

      {/* CTA */}
      <section className="py-24 bg-black relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-full text-center">
          <span className="font-['Poppins'] font-black text-[16vw] leading-none tracking-tighter opacity-[0.03]" style={gradientText}>
            REGISTER
          </span>
        </div>

        <div className="relative z-10 text-center max-w-xl mx-auto px-4">
          <span className="font-['Caveat'] text-2xl block" style={gradientText}>
            Don't Miss Out
          </span>
          <h2 className="font-['Poppins'] font-black text-white text-5xl md:text-6xl mt-2">
            Register Now
          </h2>
          
          <div className="mt-10 flex gap-4 justify-center flex-wrap">
            <Link 
              to="/register/registration-fees" 
              className="bg-gradient-to-r from-[#e76366] to-[#8355eb] rounded-full px-10 py-4 font-black text-white text-xl hover:shadow-[0_0_30px_rgba(231,99,102,0.4)] transition-all duration-300"
            >
              Register Now →
            </Link>
            <Link 
              to="/submit/call-for-abstracts" 
              className="border-2 border-white/20 rounded-full px-10 py-4 font-black text-white text-xl hover:bg-white/10 transition-all duration-300"
            >
              Submit Abstract
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImportantDatesPage;
