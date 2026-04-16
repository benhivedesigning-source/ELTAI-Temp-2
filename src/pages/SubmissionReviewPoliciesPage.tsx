import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileSearch, Scale, Clock, CheckCircle2, Users, UserCheck, ShieldAlert, Mail, FilePlus, Info, Search, Calendar, ClipboardCheck, XCircle } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const SubmissionReviewPoliciesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gradientText = {
    background: 'linear-gradient(90deg, #e76366, #8355eb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const corePolicies = [
    {
      title: "Originality Requirement",
      icon: <ShieldAlert size={24} className="text-[#e76366]" />,
      iconBg: "bg-[#e76366]/10",
      points: [
        <>Submitted abstracts must be <span className="font-bold text-gray-900">original</span> and must not have been previously presented at any ELTAI Annual Conference or other academic event.</>,
        <>Plagiarised or AI-generated abstracts are not accepted for presentations.</>
      ]
    },
    {
      title: "Presenter Regulations",
      icon: <Users size={24} className="text-[#8355eb]" />,
      iconBg: "bg-[#8355eb]/10",
      points: [
        <>An individual may be the <span className="font-bold text-gray-900">main presenter in only one abstract.</span></>,
        <>A presenter may be listed as co-presenter in <span className="font-bold text-gray-900">one additional abstract only.</span></>,
        <>An abstract may have a maximum of <span className="font-bold text-gray-900">three presenters.</span></>,
        <>All presenters must register and pay the conference fee separately.</>,
        <>In the case of joint submissions, all co-presenters must confirm availability before submission.</>
      ]
    },
    {
      title: "Presentation Mode",
      icon: <UserCheck size={24} className="text-[#e76366]" />,
      iconBg: "bg-[#e76366]/10",
      points: [
        <span className="font-bold text-gray-900">All presentations must be made only in person.</span>,
        <>Online, remote, or in-absentia presentations are not permitted.</>,
        <>Proxy or substitute presenters are not permitted.</>
      ]
    },
    {
      title: "Communication & Responsibility",
      icon: <Mail size={24} className="text-[#8355eb]" />,
      iconBg: "bg-[#8355eb]/10",
      points: [
        <>All communication regarding submission status will be available on the submission portal at <span className="font-bold text-gray-900 underline">https://conf2026.eltai.in</span> and will be sent by email.</>,
        <>Presenters must ensure a valid email address is provided.</>,
        <>Authors are advised to add <span className="font-bold text-gray-900">info@eltai.in</span> and <span className="font-bold text-gray-900">indiaeltai@gmail.com</span> to email whitelist.</>,
        <>The contact author is responsible for informing co-presenters.</>,
        <>Presenters must inform organisers in advance if unable to present.</>
      ]
    },
    {
      title: "Number of Submissions",
      icon: <FilePlus size={24} className="text-[#e76366]" />,
      iconBg: "bg-[#e76366]/10",
      points: [
        <>Each participant may submit <span className="font-bold text-gray-900">one abstract under Category A.</span></>,
        <>Submission under <span className="font-bold text-gray-900">Category B is optional.</span> Participants who wish to do so may submit <span className="font-bold text-gray-900">one abstract under Category B, subject to availability of slots.</span></>,
        <><span className="font-bold text-gray-900">Category B formats are highly selective and limited in number;</span> acceptance is based on quality, relevance, and programme feasibility.</>,
        <>Acceptance in one category does not influence decisions in the other.</>
      ]
    },
    {
      title: "Additional Notes",
      icon: <Info size={24} className="text-[#8355eb]" />,
      iconBg: "bg-[#8355eb]/10",
      points: [
        <>Abstracts not accepted as papers may be considered for poster presentation.</>,
        <>Interdisciplinary and collaborative submissions are encouraged.</>,
        <>Only registered presentations will appear in the conference programme.</>
      ]
    }
  ];

  const evaluationCriteria = [
    "Focus (theoretical, practical, or combined)",
    "Clarity of purpose",
    "Relevance to context and audience",
    "Coherence between title and abstract",
    "Structure and organisation",
    "Contribution to knowledge or practice"
  ];

  return (
    <div className="bg-black min-h-screen font-sans text-white selection:bg-primary selection:text-black overflow-x-hidden">
      <PageBanner 
        title="Submission Policies"
        subtitle="Key regulations and requirements for abstract submission."
        breadcrumb={[
          { label: "Submit", path: "/submit" },
          { label: "Policies" }
        ]}
        image="https://www.image2url.com/r2/default/images/1776335381048-9ce9d1a0-ae63-4868-b47a-3dfded4674e4.png"
      />

      {/* CORE POLICIES SECTION */}
      <section className="bg-[#f8fafc] py-24 relative z-10 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8355eb 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {corePolicies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group h-full"
              >
                {/* Animated Glow Behind Card */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#e76366]/20 to-[#8355eb]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white flex flex-col h-full overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group-hover:border-white/50">
                  
                  {/* Decorative corner gradient */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#e76366]/10 to-[#8355eb]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-16 h-16 rounded-2xl ${policy.iconBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm`}>
                        {policy.icon}
                      </div>
                      <div className="text-gray-100 font-['Poppins'] font-black text-6xl opacity-50 group-hover:opacity-100 group-hover:text-[#8355eb]/10 transition-colors duration-500 select-none">
                        0{index + 1}
                      </div>
                    </div>
                    
                    <h3 className="font-['Poppins'] font-black text-2xl text-gray-900 mb-8 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#e76366] group-hover:to-[#8355eb] transition-all duration-300">
                      {policy.title}
                    </h3>
                    
                    <ul className="space-y-5 flex-1">
                      {policy.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-4 group/item">
                          <div className="mt-1 relative flex items-center justify-center shrink-0">
                            <div className="absolute inset-0 bg-[#8355eb]/20 rounded-full scale-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                            <CheckCircle2 className="text-[#8355eb] relative z-10" size={18} />
                          </div>
                          <span className="text-gray-600 text-[15px] leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* REVIEW POLICIES SECTION */}
          <div className="mt-32">
            <div className="mb-16">
              <h2 className="font-['Poppins'] font-black text-5xl text-gray-900 mb-4 uppercase tracking-tighter">
                REVIEW <span style={gradientText}>POLICIES</span>
              </h2>
              <p className="text-gray-600 text-lg font-medium">
                Our commitment to a fair, quality-controlled, and transparent review process.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Card: Peer Review & Timeline */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group rounded-[2.5rem] p-10 md:p-12 flex flex-col justify-center overflow-hidden"
              >
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-zinc-950 z-0"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#e76366]/30 to-[#8355eb]/30 blur-3xl rounded-full mix-blend-screen transition-transform duration-700 group-hover:scale-150"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#8355eb]/20 to-transparent blur-3xl rounded-full mix-blend-screen transition-transform duration-700 group-hover:scale-150"></div>
                
                {/* Border Glow */}
                <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] z-10 group-hover:border-white/20 transition-colors duration-500"></div>

                <div className="relative z-20 space-y-12">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e76366] to-[#8355eb] flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(231,99,102,0.4)] group-hover:scale-110 transition-transform duration-500">
                      <Search className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Double-Blind Peer Review</h3>
                      <p className="text-gray-400 leading-relaxed text-lg">
                        All abstracts undergo <span className="text-white font-bold">double-blind peer review</span> by experienced reviewers. Neither the presenters nor the reviewers will know each other's identities.
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-800/80 border border-white/10 flex items-center justify-center shrink-0 shadow-xl backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                      <Calendar className="text-[#8355eb]" size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Notification Timeline</h3>
                      <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                        Presenters will normally be notified of the review outcome within <span className="text-[#8355eb] font-bold">15 days</span> of submission.
                      </p>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#8355eb]"></div>
                        <p className="text-gray-400 text-sm leading-relaxed italic">
                          Please note that, due to the high volume of submissions received closer to the deadline, the review process may take slightly longer during peak periods. Every effort will be made to communicate decisions as promptly as possible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Criteria & Disqualification */}
              <div className="flex flex-col gap-8">
                {/* Evaluation Criteria */}
                <motion.div 
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden group hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#8355eb]/10 to-transparent blur-2xl rounded-full transition-transform duration-700 group-hover:scale-150"></div>
                  
                  <div className="flex items-center gap-5 mb-10 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#8355eb]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <ClipboardCheck className="text-[#8355eb]" size={28} />
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 tracking-tight">Evaluation Criteria</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-10 relative z-10">
                    {evaluationCriteria.map((criterion, i) => (
                      <div key={i} className="flex items-center gap-4 group/item">
                        <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-sm font-black text-gray-400 shrink-0 group-hover/item:bg-[#8355eb] group-hover/item:text-white group-hover/item:border-[#8355eb] transition-all duration-300 shadow-sm">
                          {i + 1}
                        </div>
                        <span className="text-gray-700 text-sm font-semibold leading-snug">{criterion}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-100 relative z-10">
                    <div className="flex items-start gap-3">
                      <Info className="text-[#8355eb] shrink-0 mt-0.5" size={18} />
                      <p className="text-gray-500 text-sm italic font-medium">
                        Authors of selected abstracts will receive <span className="text-[#8355eb] font-bold">formal communication and presentation guidelines.</span>
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Disqualification Conditions */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-zinc-950 rounded-[2.5rem] p-10 relative overflow-hidden group shadow-2xl"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 blur-3xl rounded-full transition-transform duration-700 group-hover:scale-150"></div>
                  <div className="absolute inset-0 border border-red-500/20 rounded-[2.5rem] z-10 group-hover:border-red-500/40 transition-colors duration-500"></div>

                  <div className="relative z-20">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <XCircle className="text-red-500" size={28} />
                      </div>
                      <h3 className="text-3xl font-black text-white tracking-tight">Disqualification</h3>
                    </div>
                    
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-8">
                      <p className="text-red-400 font-bold text-sm uppercase tracking-wider">An abstract will be rejected if:</p>
                    </div>

                    <ul className="space-y-5">
                      {[
                        "It is plagiarised.",
                        "It is submitted after the deadline.",
                        "It does not follow submission guidelines.",
                        "It promotes commercial products or services.",
                        "It contains misleading or irrelevant information."
                      ].map((text, i) => (
                        <li key={i} className="flex items-center gap-4 group/item">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50 shrink-0 group-hover/item:bg-red-500 group-hover/item:shadow-[0_0_10px_rgba(239,68,68,0.8)] transition-all duration-300"></div>
                          <span className="text-gray-300 text-sm font-medium group-hover/item:text-white transition-colors">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider: White -> Black */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block relative z-10" style={{ background: '#f8fafc' }}>
        <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#000000" />
      </svg>

    </div>

  );
};

export default SubmissionReviewPoliciesPage;
