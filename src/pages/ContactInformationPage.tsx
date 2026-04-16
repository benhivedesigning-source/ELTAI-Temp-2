import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Twitter, Facebook, Instagram, Youtube, Linkedin, ChevronDown, ExternalLink, ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const ContactInformationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gradientText = {
    background: 'linear-gradient(90deg, #e76366, #8355eb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  return (
    <div className="bg-black min-h-screen font-sans text-white selection:bg-primary selection:text-black overflow-x-hidden">
      <PageBanner 
        title="Contact Us"
        subtitle="Get in touch with us for any inquiries or support."
        breadcrumb={[
          { label: "Contact", path: "/contact" },
          { label: "Contact Information" }
        ]}
        image="https://www.image2url.com/r2/default/images/1776342811932-0c59c87d-fb0f-4f18-af6b-af5d33bf34e4.png"
      />

      {/* MAIN CONTENT — SPLIT LAYOUT */}
      <section 
        className="py-24 bg-black relative"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(131,85,235,0.06) 0%, transparent 70%)'
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* LEFT COLUMN */}
            <div>
              <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-[1.5rem] p-5 inline-block mb-8">
                <img 
                  src="https://conf2026.eltai.in/assets/ELTAI-DxCx19mA.png" 
                  alt="ELTAI Logo" 
                  className="h-16 object-contain bg-white rounded-xl p-2"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h2 className="font-['Poppins'] font-black text-4xl md:text-5xl leading-tight text-white mt-2 tracking-tight">
                Let's Start a <br className="hidden md:block" />
                <span style={gradientText}>Conversation</span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mt-5 max-w-md">
                Whether you have questions about membership, the conference, or our publications, we're here to help. Reach out to us through any of the channels below.
              </p>

              <div className="mt-8 flex gap-4 flex-wrap">
                <motion.a 
                  href="mailto:indiaeltai@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-[#e76366] to-[#8355eb] rounded-full px-7 py-3.5 font-black text-white text-base flex items-center gap-2 shadow-[0_0_25px_rgba(231,99,102,0.3)]"
                >
                  <Mail size={18} className="text-white" />
                  Send a Message
                </motion.a>

                <a 
                  href="https://www.eltai.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-zinc-700 text-white rounded-full px-7 py-3.5 font-black text-base flex items-center gap-2 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  <Globe size={18} className="text-white" />
                  Visit Website
                </a>
              </div>

              <div className="border-t border-zinc-800 my-10"></div>

              <div className="font-['Caveat'] text-lg mb-5" style={gradientText}>
                FOLLOW US ON
              </div>

              <div className="flex gap-4 flex-wrap">
                {[
                  { icon: Twitter, link: "#" },
                  { icon: Facebook, link: "#" },
                  { icon: Instagram, link: "#" },
                  { icon: Youtube, link: "#" },
                  { icon: Linkedin, link: "#" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#e76366] hover:to-[#8355eb] hover:border-transparent hover:shadow-[0_0_20px_rgba(231,99,102,0.3)] transition-all duration-300"
                  >
                    <social.icon size={18} className="text-white" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: MapPin,
                  title: "Visit Our Office",
                  detail: (
                    <>
                      D-54 Third Floor, Anandham Apartments,<br />
                      156, SIDCO Nagar Main Road,<br />
                      Villivakkam, Chennai-600 049.
                    </>
                  )
                },
                {
                  icon: Phone,
                  title: "Give us a Call",
                  detail: (
                    <a href="tel:+919344425159" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#e76366] hover:to-[#8355eb] transition-all">
                      +91 93444-25159
                    </a>
                  )
                },
                {
                  icon: Mail,
                  title: "Send us an Email",
                  detail: (
                    <a href="mailto:indiaeltai@gmail.com" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#e76366] hover:to-[#8355eb] transition-all">
                      indiaeltai@gmail.com
                    </a>
                  )
                },
                {
                  icon: Globe,
                  title: "Official Website",
                  detail: (
                    <a href="https://www.eltai.in" target="_blank" rel="noopener noreferrer" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#e76366] hover:to-[#8355eb] transition-all">
                      www.eltai.in
                    </a>
                  )
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-[1.5rem] p-7 flex items-start gap-5 hover:border-[#e76366]/50 hover:shadow-[0_0_40px_rgba(231,99,102,0.12)] hover:bg-zinc-900 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e76366] to-[#8355eb] shrink-0 flex items-center justify-center shadow-[0_0_20px_rgba(231,99,102,0.2)]">
                    <card.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-['Poppins'] font-bold text-white text-lg">{card.title}</h3>
                    <div className="text-gray-400 text-base mt-1 leading-relaxed">
                      {card.detail}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* MAP STRIP */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block relative z-10" style={{ background: '#000' }}>
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
      </svg>

      <section className="py-20 bg-white relative z-10">
        <div className="text-center mb-12 px-4">
          <div className="font-['Caveat'] text-lg mb-3" style={gradientText}>Find Us</div>
          <h2 className="font-['Poppins'] font-black text-gray-900 text-4xl tracking-tight">
            Our <span style={gradientText}>Office</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200/80">
            <iframe 
              src="https://maps.google.com/maps?q=SIDCO+Nagar+Main+Road+Villivakkam+Chennai&output=embed" 
              className="w-full h-[260px] md:h-[380px] border-0"
              loading="lazy" 
              allowFullScreen
              title="ELTAI Office Location"
            ></iframe>

            <div className="px-8 py-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e76366] to-[#8355eb] flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-white" />
                </div>
                <p className="font-['Poppins'] font-bold text-gray-900 text-base leading-snug">
                  D-54 Third Floor, Anandham Apartments,<br className="hidden sm:block" />
                  156, SIDCO Nagar Main Road,<br className="hidden sm:block" />
                  Villivakkam, Chennai-600 049.
                </p>
              </div>

              <a 
                href="https://maps.google.com/?q=SIDCO+Nagar+Villivakkam+Chennai" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 rounded-full px-5 py-2.5 text-gray-700 font-bold text-sm flex items-center gap-2 transition-colors shrink-0"
              >
                <ExternalLink size={14} />
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — TEXTURED BG */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block relative z-10" style={{ background: '#ffffff' }}>
        <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#000000" />
      </svg>

      <section className="py-32 bg-black relative overflow-hidden z-10">
        {/* BACKGROUND LAYERS */}
        <img 
          src="https://www.image2url.com/r2/default/images/1776343004910-541cc9e8-f3e1-40ff-ae7f-82de9bfd0dd3.png" 
          alt="Conference Background" 
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: 'brightness(0.08) saturate(0.5)' }}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        
        <div 
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(131,85,235,0.25) 0%, transparent 65%)' }}
        ></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[2] w-full text-center">
          <span className="font-['Poppins'] font-black text-[18vw] leading-none tracking-tighter opacity-[0.04]" style={gradientText}>
            HELLO
          </span>
        </div>

        {/* FOREGROUND */}
        <div className="relative z-10 text-center max-w-xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="font-['Caveat'] text-xl" 
              style={gradientText}
            >
              Get in Touch
            </motion.div>

            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="font-['Poppins'] font-black text-white text-5xl md:text-6xl mt-2 tracking-tight"
            >
              Questions? <br className="md:hidden" />
              <span style={gradientText}>We're Here.</span>
            </motion.h2>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="mt-10"
            >
              <motion.div 
                whileHover={{ scale: 1.02, borderColor: 'rgba(231,99,102,0.4)', boxShadow: '0 0 40px rgba(231,99,102,0.15)' }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[1.5rem] px-8 py-6 inline-flex flex-col sm:flex-row items-center gap-4 transition-all duration-300"
              >
                <Mail size={24} className="text-[#e76366]" />
                <a 
                  href="mailto:indiaeltai@gmail.com"
                  className="font-['Poppins'] font-black text-xl md:text-2xl underline hover:opacity-80 transition-opacity"
                  style={gradientText}
                >
                  indiaeltai@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ContactInformationPage;
