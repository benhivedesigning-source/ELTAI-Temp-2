import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, CheckCircle, XCircle, Ban, UserX, Clock, Shield, AlertCircle, Info, ArrowRight } from 'lucide-react';

const CancellationPolicyPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gradientText = {
    background: 'linear-gradient(90deg, #e76366, #8355eb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const policies = [
    {
      id: '01',
      icon: <Globe size={18} />,
      content: (
        <p className="text-gray-700 text-base leading-relaxed">
          All requests for cancellation must be made through the conference registration portal at <a href="https://conf2026.eltai.in" className="font-bold underline" style={gradientText}>conf2026.eltai.in</a>.
        </p>
      )
    },
    {
      id: '02',
      icon: <CheckCircle size={18} />,
      content: (
        <p className="text-gray-700 text-base leading-relaxed">
          Cancellations received on or before <span className="font-bold" style={gradientText}>15 September 2026</span> will be eligible for a refund of <span className="font-bold" style={gradientText}>75%</span> of the registration fee. The remaining <span className="font-bold" style={gradientText}>25%</span> will be deducted towards administrative and processing charges.
        </p>
      )
    },
    {
      id: '03',
      icon: <XCircle size={18} color="#e76366" />,
      content: (
        <div>
          <p className="text-gray-700 text-base leading-relaxed">
            Cancellations received <span className="font-bold" style={gradientText}>after 15 September 2026</span> will not be eligible for any refund.
          </p>
          <div className="bg-red-950 border border-red-800 text-red-400 rounded-full px-4 py-1.5 text-xs font-bold inline-flex items-center gap-1.5 mt-3">
            <AlertCircle size={12} /> No Refund After This Date
          </div>
        </div>
      )
    },
    {
      id: '04',
      icon: <Ban size={18} color="#e76366" />,
      content: (
        <div>
          <p className="text-gray-700 text-base leading-relaxed">
            No refunds will be issued for on-the-spot registrations, regardless of the reason for cancellation or non-attendance.
          </p>
          <div className="bg-orange-950 border border-orange-800 text-orange-400 rounded-full px-4 py-1.5 text-xs font-bold inline-flex items-center gap-1.5 mt-3">
            <AlertCircle size={12} /> On-the-spot Registrations
          </div>
        </div>
      )
    },
    {
      id: '05',
      icon: <UserX size={18} />,
      content: (
        <p className="text-gray-700 text-base leading-relaxed">
          Registration fees are non-transferable, and substitution of participants is not permitted.
        </p>
      )
    },
    {
      id: '06',
      icon: <Clock size={18} />,
      content: (
        <p className="text-gray-700 text-base leading-relaxed">
          Refunds, where applicable, will be processed within <span className="font-bold" style={gradientText}>30 working days</span> after the conclusion of the conference and will be made through the original mode of payment. Enquiries may be sent to <a href="mailto:indiaeltai@gmail.com" className="font-bold underline" style={gradientText}>indiaeltai@gmail.com</a> only after the conference.
        </p>
      )
    },
    {
      id: '07',
      icon: <Shield size={18} />,
      content: (
        <p className="text-gray-700 text-base leading-relaxed">
          In the event of <span className="font-bold italic" style={gradientText}>force majeure</span> (natural calamities, government restrictions, public health emergencies, or other circumstances beyond the organisers' control), the organisers reserve the right to modify the programme or refund policy. In such cases, the decision of the Organising Committee shall be final.
        </p>
      )
    }
  ];

  return (
    <div className="bg-black min-h-screen font-sans text-white overflow-x-hidden">
      {/* SVG Gradient Definition for Icons */}
      <svg width="0" height="0" className="absolute">
        <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop stopColor="#e76366" offset="0%" />
          <stop stopColor="#8355eb" offset="100%" />
        </linearGradient>
      </svg>

      {/* BREADCRUMB */}
      <nav className="pt-24 max-w-[1800px] mx-auto px-4 lg:px-8 py-4">
        <div className="text-gray-500 text-sm font-medium flex items-center gap-2">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-zinc-700">/</span>
          <Link to="/register" className="hover:text-white transition-colors">Register</Link>
          <span className="text-zinc-700">/</span>
          <span style={gradientText}>Cancellation Policy</span>
        </div>
      </nav>

      {/* SECTION 1 — HERO */}
      <section className="min-h-[45vh] flex items-center justify-center bg-black text-center relative overflow-hidden">
        {/* Radial gradient glow */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[rgba(231,99,102,0.12)] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[rgba(131,85,235,0.12)] rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>
        </div>

        {/* 5 floating shapes */}
        <motion.div className="absolute top-20 left-[10%] w-24 h-24 rounded-full bg-[#e76366] opacity-5 z-0" animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-32 right-[15%] w-40 h-40 rounded-full bg-[#8355eb] opacity-5 z-0" animate={{ y: [0, -20, 0] }} transition={{ duration: 6, delay: 1, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-1/3 right-[20%] w-32 h-32 rounded-full bg-[#e76366] opacity-8 z-0" animate={{ y: [0, -20, 0] }} transition={{ duration: 7, delay: 2, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-20 left-[20%] w-56 h-56 rounded-full bg-[#8355eb] opacity-5 z-0" animate={{ y: [0, -20, 0] }} transition={{ duration: 8, delay: 0.5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-[#e76366] opacity-5 z-0" animate={{ y: [0, -20, 0] }} transition={{ duration: 5.5, delay: 1.5, repeat: Infinity, ease: "easeInOut" }} />

        {/* Centered content */}
        <div className="relative z-10 px-4">
          <p className="font-['Caveat'] text-xl tracking-widest" style={gradientText}>
            Register
          </p>
          <h1 className="font-['Poppins'] font-black text-white text-5xl md:text-7xl mt-2">
            Cancellation
          </h1>
          <h1 className="font-['Poppins'] font-black text-5xl md:text-7xl" style={gradientText}>
            Policy
          </h1>
        </div>
      </section>

      {/* WAVE: Black to White */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block" style={{background:'#000'}}>
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 2 — POLICY CARDS */}
      <section className="py-24 bg-white">
        <p className="font-['Caveat'] text-center text-lg mb-4" style={gradientText}>
          Cancellation & Refund Policy
        </p>
        <div className="max-w-3xl mx-auto px-4 mt-10 flex flex-col gap-5">
          {policies.map((policy, index) => (
            <motion.div
              key={policy.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-[1.5rem] p-6 flex items-start gap-5 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center font-['Poppins'] font-black text-white text-sm" style={{ background: 'linear-gradient(135deg, #e76366, #8355eb)' }}>
                {policy.id}
              </div>
              <div className="flex-1">
                <div className="mb-2 [&>svg]:stroke-[url(#icon-gradient)]">
                  {React.cloneElement(policy.icon as React.ReactElement, { 
                    style: (policy.icon as React.ReactElement).props.color ? {} : { stroke: 'url(#icon-gradient)' }
                  })}
                </div>
                {policy.content}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — REFUND TIMELINE */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="font-['Caveat'] text-center text-lg mb-10" style={gradientText}>
            Refund Timeline
          </p>

          {/* Timeline Container */}
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
            
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-6 left-10 right-10 h-0.5 opacity-30 z-0" style={{ background: 'linear-gradient(90deg, #e76366, #8355eb)' }}></div>
            
            {/* Connecting Line (Mobile) */}
            <div className="md:hidden absolute top-6 bottom-6 left-6 border-l-2 border-dashed border-gray-200 z-0"></div>

            {/* Milestone 1 */}
            <div className="relative z-10 flex md:flex-col items-start md:items-center gap-4 md:gap-4 w-full md:w-1/3 text-left md:text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #e76366, #8355eb)' }}>
                <CheckCircle color="#ffffff" size={24} />
              </div>
              <div>
                <h4 className="font-['Poppins'] font-black text-gray-900 text-base leading-tight">
                  On or Before<br className="hidden md:block" /> 15 September 2026
                </h4>
                <div className="mt-3">
                  <span className="bg-green-100 text-green-700 border border-green-200 rounded-full px-3 py-1 text-xs font-bold">
                    75% Refund
                  </span>
                </div>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="relative z-10 flex md:flex-col items-start md:items-center gap-4 md:gap-4 w-full md:w-1/3 text-left md:text-center">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <XCircle color="#e76366" size={24} />
              </div>
              <div>
                <h4 className="font-['Poppins'] font-black text-gray-900 text-base leading-tight">
                  After<br className="hidden md:block" /> 15 September 2026
                </h4>
                <div className="mt-3">
                  <span className="bg-red-100 text-red-600 border border-red-200 rounded-full px-3 py-1 text-xs font-bold">
                    No Refund
                  </span>
                </div>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="relative z-10 flex md:flex-col items-start md:items-center gap-4 md:gap-4 w-full md:w-1/3 text-left md:text-center">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <Ban color="#e76366" size={24} />
              </div>
              <div>
                <h4 className="font-['Poppins'] font-black text-gray-900 text-base leading-tight">
                  On-the-spot<br className="hidden md:block" /> Registrations
                </h4>
                <div className="mt-3">
                  <span className="bg-orange-100 text-orange-600 border border-orange-200 rounded-full px-3 py-1 text-xs font-bold">
                    No Refund
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WAVE: White to Black */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block" style={{background:'#fff'}}>
        <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#000000" />
      </svg>

      {/* SECTION 4 — CONTACT NOTE */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute z-0 pointer-events-none opacity-[0.03] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="font-['Poppins'] font-black text-[18vw] whitespace-nowrap" style={gradientText}>
            POLICY
          </span>
        </div>

        {/* Foreground */}
        <div className="relative z-10 text-center max-w-xl mx-auto px-4">
          <p className="font-['Caveat'] text-xl" style={gradientText}>
            Cancellation & Refund Policy
          </p>
          <h2 className="font-['Poppins'] font-black text-white text-4xl md:text-5xl mt-2">
            Questions?
          </h2>

          <p className="text-gray-400 text-base leading-relaxed mt-6">
            Enquiries may be sent to
          </p>
          <a href="mailto:indiaeltai@gmail.com" className="block mt-2 font-['Poppins'] font-black text-2xl underline hover:opacity-80 transition-opacity" style={gradientText}>
            indiaeltai@gmail.com
          </a>
          <p className="text-gray-500 text-sm mt-3">
            only after the conference
          </p>
        </div>
      </section>
    </div>
  );
};

export default CancellationPolicyPage;
