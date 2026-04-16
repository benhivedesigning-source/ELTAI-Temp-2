import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Clock, Calendar, CheckCircle, ArrowRight, Star, Unlock, FileText, UserCheck, Sparkles, Users, MapPin, Mic, BookOpen, Award } from 'lucide-react';
import PageBanner from '../components/PageBanner';

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

  return (
    <div className="bg-black min-h-screen font-sans text-white selection:bg-primary selection:text-black overflow-x-hidden">
      <PageBanner 
        title="Important Dates"
        subtitle="Stay on track with our conference timeline and key deadlines."
        breadcrumb={[
          { label: "Submit", path: "/submit" },
          { label: "Important Dates" }
        ]}
        image="https://www.image2url.com/r2/default/images/1776339630799-a79ba149-9c86-4023-a491-83084d39c3d5.png"
      />

      {/* VERTICAL TIMELINE — MAGAZINE STYLE */}
      <section className="w-full bg-white py-32 relative z-10 overflow-hidden">
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
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Timeline</span>
                <div className="w-12 h-px bg-primary"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-gray-900 mb-6 tracking-tighter uppercase leading-tight">
                Every <span style={gradientText}>Deadline</span>
              </h2>
            </motion.div>
          </div>

          <div className="relative">
            {/* TIMELINE SPINE WITH GLOW */}
            <div className="absolute left-[2rem] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gray-200">
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#e76366] via-[#8355eb] to-[#e76366] shadow-[0_0_15px_rgba(131,85,235,0.3)]"
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
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#e76366] to-[#8355eb] border-4 border-white relative z-10 shadow-[0_0_30px_rgba(131,85,235,0.5)]"></div>
                        </div>
                      ) : (
                        <div className="relative group-hover:scale-150 transition-transform duration-500">
                          <div className={`absolute inset-0 rounded-full ${node.dotColor} blur-sm opacity-30`}></div>
                          <div className={`w-5 h-5 rounded-full ${node.dotColor} border-[3px] border-white relative z-10 shadow-md`} />
                        </div>
                      )}
                    </div>

                    {/* CONNECTOR LINE */}
                    <div className="absolute left-[2rem] top-1/2 -translate-y-1/2 w-10 h-[2px] bg-gradient-to-r from-gray-200 to-transparent md:hidden z-10"></div>
                    {isOdd && <div className="hidden md:block absolute right-1/2 top-1/2 -translate-y-1/2 w-16 h-[2px] bg-gradient-to-l from-gray-200 to-transparent z-10 group-hover:from-[#e76366] transition-colors duration-500"></div>}
                    {isEven && <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 w-16 h-[2px] bg-gradient-to-r from-gray-200 to-transparent z-10 group-hover:from-[#8355eb] transition-colors duration-500"></div>}

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
                          <div className="relative p-[2px] rounded-[2.5rem] bg-gradient-to-r from-[#e76366] to-[#8355eb] overflow-hidden shadow-[0_0_50px_rgba(131,85,235,0.2)] group-hover:shadow-[0_0_80px_rgba(231,99,102,0.3)] transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                            <div className="bg-white rounded-[2.4rem] p-10 relative z-10 overflow-hidden text-center md:text-left">
                              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#e76366]/10 to-[#8355eb]/10 blur-3xl rounded-full"></div>
                              
                              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#e76366] to-[#8355eb] flex items-center justify-center shadow-xl shrink-0">
                                  <node.icon size={40} className="text-white" />
                                </div>
                                <div>
                                  <div className="font-heading font-black text-2xl text-gray-900 mb-2 tracking-tight uppercase">{node.date}</div>
                                  <div className="font-heading font-black text-4xl md:text-5xl mb-4 leading-none uppercase" style={gradientText}>{node.title}</div>
                                  <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 text-gray-600 font-bold text-sm border border-gray-100 uppercase tracking-widest">
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
                            <div className={`absolute -inset-[1px] rounded-[2rem] bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
                            
                            <div className={`relative bg-gray-50 border border-gray-100 rounded-[2rem] p-8 transition-all duration-500 ${node.hoverBorder} ${node.glow} hover:bg-white hover:-translate-y-2 overflow-hidden cursor-pointer shadow-sm`}>
                              {/* Watermark Number */}
                              <div className="absolute -right-4 -bottom-6 text-[8rem] font-black text-gray-900/[0.03] pointer-events-none font-['Poppins'] leading-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:text-gray-900/[0.05]">
                                {(index + 1).toString().padStart(2, '0')}
                              </div>

                              <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className={`w-14 h-14 rounded-2xl ${node.pillBg} flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                                  <node.icon size={24} className="text-white" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Step {(index + 1).toString().padStart(2, '0')}</div>
                                  <div className="font-['Poppins'] font-bold text-gray-900 text-lg leading-tight">{node.date}</div>
                                </div>
                              </div>

                              <div className="relative z-10">
                                <h3 className="font-['Poppins'] font-black text-2xl text-gray-900 leading-snug mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#e76366] group-hover:to-[#8355eb] transition-all">
                                  {node.title}
                                </h3>
                                
                                {node.badge && (
                                  <div className={`inline-flex items-center gap-2 border rounded-xl px-4 py-2 text-[11px] font-bold mb-4 ${node.badge.colorClass.replace('bg-amber-950', 'bg-amber-50').replace('bg-green-950', 'bg-green-50').replace('text-amber-400', 'text-amber-700').replace('text-green-400', 'text-green-700')} shadow-inner`}>
                                    {node.badge.icon && <node.badge.icon size={13} />}
                                    {node.badge.text}
                                  </div>
                                )}
                                
                                {node.extra && (
                                  <div className="flex items-start gap-3 mt-2 pt-4 border-t border-gray-100">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 group-hover:bg-[#8355eb] transition-colors"></div>
                                    <p className="text-gray-500 text-sm italic font-medium leading-relaxed">
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
