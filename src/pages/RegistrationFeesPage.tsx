import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, UserPlus, Info, ArrowRight, Download, Zap, Star } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import Ordinal from '../components/Ordinal';

const RegistrationFeesPage = () => {
  const [selectedPhase, setSelectedPhase] = useState<'earlybird' | 'regular' | 'onthespot'>('earlybird');
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

  const pricing = {
    c1: {
      title: "Educators, Post-doctoral Researchers, Administrators, Writers, Editors, Publishers, Policymakers, NGOs, Corporate Professionals",
      members: { earlybird: 1500, regular: 1750, onthespot: 2000 },
      nonMembers: { earlybird: 2500, regular: 2750, onthespot: 3000 }
    },
    c2: {
      title: "PhD Researchers (Full-time)",
      members: { earlybird: 1250, regular: 1500, onthespot: 1750 },
      nonMembers: { earlybird: 2500, regular: 2750, onthespot: 3000 }
    },
    c3: {
      title: "UG & PG students, B.Ed. & M.Ed. Teacher Trainees",
      members: { earlybird: 1000, regular: 1250, onthespot: 1500 },
      nonMembers: { earlybird: 2500, regular: 2750, onthespot: 3000 }
    }
  };

  return (
    <div className="bg-black min-h-screen font-sans text-white overflow-x-hidden">
      <PageBanner 
        title={
  <>
    Registration <span className="ml-1">Fees</span>
  </>
}
        subtitle={<Ordinal text="Secure your spot at the 20th International & 56th Annual ELTAI Conference." />}
        breadcrumb={[
          { label: "Register", path: "/register" },
          { label: "Registration Fees" }
        ]}
        image="https://www.image2url.com/r2/default/images/1776340001521-fa0c9c37-a32f-42df-b315-899bc9a4ea3f.png"
      />

      {/* REGISTRATION FEES TABLE */}
      <section className="py-32 bg-zinc-50 relative z-10 overflow-hidden">
        {/* Decorative background gradients */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[800px] h-[800px] bg-gradient-to-br from-[#e76366]/5 to-[#8355eb]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[800px] h-[800px] bg-gradient-to-tr from-[#8355eb]/5 to-[#e76366]/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-900 mb-6 tracking-tighter capitalize">
              Registration <span style={gradientText}>Fees</span>
            </h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto bg-white p-2 sm:p-4 rounded-[2.5rem] shadow-xl shadow-zinc-200/50 border border-zinc-100 ring-1 ring-zinc-900/5"
          >
            <table className="w-full text-left border-collapse border border-zinc-200 rounded-3xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white text-xs font-bold capitalize tracking-wider">
                  <th className="p-6 whitespace-nowrap">Registration Categories</th>
                  <th className="p-6 text-center whitespace-nowrap">Early-bird</th>
                  <th className="p-6 text-center whitespace-nowrap">Regular</th>
                  <th className="p-6 text-center whitespace-nowrap">On-the-spot</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {Object.entries(pricing).map(([key, cat], idx) => (
                  <React.Fragment key={key}>
                    {/* Members Row */}
                    <tr className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
                      <td className="p-6 align-top">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-gray-100 rounded-xl mt-1">
                            <Star className="w-5 h-5 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 mb-1 font-heading">Category {idx + 1}</div>
                            <div className="text-gray-700 font-medium mb-2 leading-relaxed max-w-sm">{cat.title}</div>
                            <div className="text-amber-600 font-bold text-sm flex items-center gap-1">
                              ELTAI Members <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-6 text-center font-black text-slate-900 text-lg whitespace-nowrap">₹{cat.members.earlybird} <span className="text-xs font-bold text-gray-400">*</span></td>
                      <td className="p-6 text-center font-black text-slate-900 text-lg whitespace-nowrap">₹{cat.members.regular} <span className="text-xs font-bold text-gray-400">*</span></td>
                      <td className="p-6 text-center font-black text-slate-900 text-lg whitespace-nowrap">₹{cat.members.onthespot} <span className="text-xs font-bold text-gray-400">*</span></td>
                    </tr>
                    {/* Non-Members Row */}
                    <tr className="border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                      <td className="p-6 pl-20 align-top">
                          <div className="text-gray-900 font-bold mb-0.5 font-heading">Non-Members</div>
                          <div className="text-gray-500 text-xs">(includes annual membership of ELTAI)</div>
                      </td>
                      <td className="p-6 text-center font-black text-slate-900 text-lg whitespace-nowrap">₹{cat.nonMembers.earlybird} <span className="text-xs font-bold text-gray-400">**</span></td>
                      <td className="p-6 text-center font-black text-slate-900 text-lg whitespace-nowrap">₹{cat.nonMembers.regular} <span className="text-xs font-bold text-gray-400">**</span></td>
                      <td className="p-6 text-center font-black text-slate-900 text-lg whitespace-nowrap">₹{cat.nonMembers.onthespot} <span className="text-xs font-bold text-gray-400">**</span></td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Section 4 — Notes */}
      <section className="pb-32 pt-10 bg-zinc-50 relative z-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm text-sm">
              <div className="flex items-center gap-2 mb-2">
                <Info size={16} color="#e76366" />
                <h3 className="font-['Poppins'] font-black text-gray-900">
                  <span className="text-[#e76366]">*</span> ELTAI Members
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The registration fee for ELTAI Members includes the conference kit, lunch and refreshments, and the certificate for all four days of the conference.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm text-sm">
              <div className="flex items-center gap-2 mb-2">
                <Info size={16} color="#8355eb" />
                <h3 className="font-['Poppins'] font-black text-gray-900">
                  <span className="text-[#8355eb]">**</span> Non-Members
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The registration fee for Non-Members includes an annual membership of ELTAI, the conference kit, lunch and refreshments, and the certificate for all four days of the conference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Cta 
      <section className="py-24 bg-black relative overflow-hidden"> */}
        {/* Watermark 
        <div className="absolute z-0 pointer-events-none opacity-[0.03] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="font-['Poppins'] font-black text-[18vw] whitespace-nowrap" style={gradientText}>
            Register
          </span>
        </div>*/}

        {/* Foreground 
        <div className="relative z-10 text-center max-w-xl mx-auto px-4">
          <p className="font-['Poppins'] text-xl" style={gradientText}>
            Conference Registration Fee
          </p>
          <h2 className="font-['Poppins'] font-black text-white text-4xl md:text-5xl mt-2">
            Register Now
          </h2>

          <div className="mt-10 flex gap-4 justify-center flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="rounded-full px-10 py-4 font-black text-white text-lg"
              style={{ background: 'linear-gradient(90deg, #e76366, #8355eb)' }}
            >
              Register Now →
            </motion.button>
            <button className="border-2 border-white/20 text-white rounded-full px-10 py-4 font-black text-lg hover:bg-white/10 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default RegistrationFeesPage;
