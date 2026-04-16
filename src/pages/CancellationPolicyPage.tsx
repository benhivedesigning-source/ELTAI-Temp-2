import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, CheckCircle, XCircle, Ban, UserX, Clock, Shield, AlertCircle, Info, ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';

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
      <PageBanner 
        title="Cancellation Policy"
        subtitle="Review our cancellation and refund policies for the conference."
        breadcrumb={[
          { label: "Register", path: "/register" },
          { label: "Cancellation Policy" }
        ]}
        image="https://www.image2url.com/r2/default/images/1776339333795-0927f6dd-f544-4b7f-9e11-183d554b7b42.png"
      />

      {/* SECTION 2 — POLICY CARDS */}
      <section className="py-24 bg-[#f8fafc] relative overflow-hidden z-10">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8355eb 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#e76366]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#8355eb]/5 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="text-center mb-20 relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-['Caveat'] text-2xl mb-4" style={gradientText}>
              Terms & Conditions
            </p>
            <h2 className="font-['Poppins'] font-black text-4xl md:text-5xl text-gray-900 tracking-tight uppercase">
              Cancellation <span style={gradientText}>Policy</span>
            </h2>
            <div className="h-1.5 w-24 mx-auto rounded-full bg-gradient-to-r from-[#e76366] to-[#8355eb] mt-6"></div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {policies.map((policy, index) => (
            <motion.div
              key={policy.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group h-full"
            >
              {/* Animated Glow Behind Card */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#e76366] to-[#8355eb] rounded-[2rem] opacity-0 group-hover:opacity-20 blur-lg transition duration-500"></div>
              
              <div className="relative bg-white border border-gray-100 group-hover:border-transparent rounded-[2rem] p-8 flex flex-col h-full overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-500">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#e76366]/5 to-[#8355eb]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10 flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-['Poppins'] font-black text-white text-xl shadow-[0_0_15px_rgba(231,99,102,0.2)] group-hover:shadow-[0_0_30px_rgba(131,85,235,0.4)] transition-all duration-500 transform group-hover:rotate-6" style={{ background: 'linear-gradient(135deg, #e76366, #8355eb)' }}>
                    {policy.id}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-white group-hover:border-[#8355eb]/20 transition-colors duration-500 shadow-sm flex items-center justify-center">
                    {React.cloneElement(policy.icon as React.ReactElement, { 
                      className: "text-gray-500 group-hover:text-[#8355eb] transition-colors duration-500",
                      size: 24
                    })}
                  </div>
                </div>
                
                <div className="relative z-10 flex-1">
                  <div className="text-gray-700 group-hover:text-gray-900 transition-colors duration-500">
                    {policy.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — REFUND TIMELINE */}
      <section className="py-16 bg-[#f8fafc] relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-['Caveat'] text-2xl mb-4" style={gradientText}>
                Process
              </p>
              <h2 className="font-['Poppins'] font-black text-3xl md:text-4xl text-gray-900 tracking-tight uppercase">
                Refund <span style={gradientText}>Timeline</span>
              </h2>
            </motion.div>
          </div>

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
