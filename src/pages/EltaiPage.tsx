import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Globe, Award, ArrowRight, ChevronDown, User, Calendar, CheckCircle, Network, Building } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import Ordinal from '../components/Ordinal';

const EltaiPage = () => {
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
        title="ELT@I"
        subtitle="The oldest and largest professional association of English teachers in India."
        breadcrumb={[
          { label: "Organizers", path: "/organizers" },
          { label: "ELT@I" }
        ]}
        image="https://www.image2url.com/r2/default/images/1776342638241-64c553c9-163b-4277-a954-425cc2061a2d.png"
      />

      {/* Bento Grid Stats Section - Redesigned */}
      <section className="py-24 relative z-10 bg-white overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#e76366]/5 to-[#8355eb]/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Founder Card - Sleek Minimalist Look */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 relative rounded-[2rem] bg-zinc-950 p-[1px] overflow-hidden group shadow-2xl"
            >
              <div className="relative h-full bg-zinc-900 rounded-[1.9rem] p-10 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#e76366]/20 to-transparent blur-3xl opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e76366] to-[#8355eb] flex items-center justify-center p-[2px]">
                      <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center">
                        <User className="text-white" size={18} />
                      </div>
                    </div>
                    <h3 className="text-xs font-bold text-zinc-400 tracking-widest capitalize">Our Founder</h3>
                  </div>
                  <h2 className="text-4xl font-black text-white leading-tight mb-8">Padmashree <br/> S. Natarajan</h2>
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="bg-zinc-800/50 rounded-2xl p-5 border border-zinc-700/50">
                    <div className="text-[10px] text-zinc-400 font-bold capitalize tracking-wider mb-1">Founded On</div>
                    <div className="text-lg font-bold text-white flex items-center gap-2 tracking-tight">
                      <Calendar size={18} className="text-[#e76366]" /> <Ordinal text="7th August 1969" />
                    </div>
                  </div>
                  <div className="bg-zinc-800/50 rounded-2xl p-5 border border-zinc-700/50">
                    <div className="text-[10px] text-zinc-400 font-bold capitalize tracking-wider mb-1">Registered In</div>
                    <div className="text-lg font-bold text-white flex items-center gap-2 tracking-tight">
                      <CheckCircle size={18} className="text-[#8355eb]" /> 1974
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 4 Stats Cards - Clean Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Community", value: "6000+", desc: "Active Members", icon: Users, color: "#e76366" },
                { title: "Network", value: "81+", desc: "Chapters", icon: Network, color: "#8355eb" },
                { title: "Global", value: "12+", desc: "Intl. Partnerships", icon: Globe, color: "#e76366" },
                { title: "Partners", value: "100+", desc: "Institutions", icon: Building, color: "#8355eb" }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative bg-zinc-50 border border-zinc-100 rounded-[2rem] p-8 group hover:border-zinc-200 hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500 border border-zinc-100">
                        <stat.icon size={22} style={{ color: stat.color }} />
                      </div>
                    </div>
                    <div className="text-5xl font-black text-zinc-950 mb-2 mt-auto tracking-tighter">{stat.value}</div>
                    <div className="text-xs font-bold text-zinc-400 capitalize tracking-wider">{stat.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Publications Card - Expansive and Informative */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-12 relative bg-zinc-950 border border-zinc-900 rounded-[2rem] p-10 md:p-12 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center relative z-10">
                <div className="lg:shrink-0">
                  <h2 className="text-4xl font-black text-white tracking-tighter capitalize">Publications</h2>
                </div>
                
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  {[
                    "Journal of English Language Teaching (JELT)",
                    "Journal of Teaching and Research in English Literature (JTREL)",
                    "Journal of Technology for ELT (JTELT)",
                    "ELT Practitioner (ELT-P)"
                  ].map((name, idx) => (
                    <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex items-center gap-4 hover:border-zinc-700 transition-colors duration-300">
                      <div className="w-1.5 h-10 rounded-full bg-gradient-to-b from-[#e76366] to-[#8355eb]"></div>
                      <span className="text-zinc-100 font-bold">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* About Elt@i - Editorial Layout */}
      <section className="py-24 md:py-32 relative z-10 bg-zinc-50 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#e76366]/5 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#8355eb]/5 to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            
            <h2 className="text-4xl md:text-6xl font-heading font-black text-gray-900 mb-6 tracking-tighter capitalize">
              About <span style={gradientText}>Elt@i</span>
            </h2>
          </motion.div>

          {/* Article Flow */}
          <div className="prose prose-lg md:prose-xl prose-zinc max-w-none text-gray-600 leading-relaxed font-medium text-justify">
            <p>
              The English Language Teachers’ Association of India (ELT@I) is one of the oldest, largest, and most influential professional bodies dedicated to the advancement of English language and literature teaching and learning in the country. Founded in 1969 and officially registered in 1974, ELT@I has grown steadily over more than five decades into a vibrant national movement that connects teachers, teacher educators, researchers, scholars, and students of English across India and beyond.
            </p>

            {/* Floated Image Right */}
            <motion.figure 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="float-none md:float-right w-full md:w-[45%] ml-0 md:ml-8 mb-6 mt-4 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100"
            >
              <img src="https://www.image2url.com/r2/default/images/1776318550019-340d0891-639f-4aaf-bac4-4cbf2e4088b4.webp" alt="Educators at conference" className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700" />
            </motion.figure>

            <p className="mt-6 md:mt-0">
              At its core, ELT@I is a community of practice. It believes that meaningful change in English language and literature education emerges through dialogue, collaboration, reflection, and sustained professional engagement. From its early beginnings as a small collective of committed teachers, ELT@I has expanded into a nationwide network with 81 active chapters, 6000+ members, and 12 partnerships with teacher associations and institutions across the world. This growth reflects both the changing landscape of English language and literature education in India and ELT@I’s ability to respond thoughtfully to those changes.
            </p>
            <p className="mt-6">
              ELT@I’s vision goes beyond the teaching of English as a subject. It views English as a resource for empowerment, mobility, academic inquiry, and global engagement, while remaining sensitive to India’s multilingual and multicultural realities. The association actively encourages context-responsive pedagogies, inclusive classroom practices, and research grounded in local needs and experiences. In doing so, ELT@I consistently bridges theory and practice, ensuring that scholarly insights translate into classroom realities.
            </p>

            {/* Clear floats before the Glance board */}
            <div className="clear-both"></div>




            {/* Floated Image Left */}
            <motion.figure 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="float-none md:float-left w-full md:w-[40%] mr-0 md:mr-8 mb-6 mt-4 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100"
            >
              <img src="https://www.image2url.com/r2/default/images/1777463456114-fd9cb288-005d-4859-bcc7-00222493d1e7.png" alt="Professional development" className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700" />
            </motion.figure>

            <p className="mt-6 md:mt-0">
              One of the defining strengths of ELT@I is its commitment to professional development at all levels. Through annual international conferences, national and regional seminars, workshops, webinars, lecture series, and reading initiatives, the association creates platforms for continuous learning and exchange. These activities provide opportunities for early-career teachers to find their voice, for experienced educators to mentor others, and for researchers to share and refine their work within a supportive academic environment.
            </p>
            <p className="mt-6">
              ELT@I also places strong emphasis on research and publication. Its journals, conference proceedings, and edited volumes promote rigorous yet accessible scholarship in English language teaching, literature, linguistics, and allied areas. By encouraging teachers to document classroom practices, explore indigenous approaches, and engage in reflective inquiry, ELT@I nurtures a culture of research that is rooted in Indian contexts while remaining globally relevant.Equally important is ELT@I’s belief in leadership and collaboration. The association works closely with educational institutions, universities, schools, and international teacher organisations to strengthen professional networks and advocate for meaningful reforms in English language and literature education. Its chapter-based structure ensures that professional support and innovation reach educators working in diverse regions and institutional settings. 
            </p>

            {/* Clear floats if needed */}
            <div className="clear-both hidden md:block"></div>

            <p className="mt-6">
              The ELT@I Annual Conference embodies these values. It serves as a meeting point for ideas, experiences, and perspectives, bringing together voices from classrooms, research centres, and policy spaces. As ELT@I continues its journey, it remains firmly committed to empowering English language teachers and learners, fostering academic excellence, and shaping the future of English language education in India and beyond. To learn more about ELTAI, visit <a href="https://eltai.in/" target="_blank" rel="noopener noreferrer" className="text-[#e76366] hover:underline font-black transition-colors">https://eltai.in/</a>
            </p>
            
            {/* Third full width image beautifully breaking up the final text */}
            <motion.figure 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="my-12 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 block relative"
            >
              <img src="https://www.image2url.com/r2/default/images/1776343330164-470d3816-d22f-445b-9452-2131abb9f061.png" alt="Global Network" className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-700 opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </motion.figure>
            
          </div>
        </div>
      </section>

      {/* Empowering Educators Cta Section */}
      <section className="py-32 relative overflow-hidden z-10 bg-black m-4 lg:m-8 rounded-[3rem] shadow-2xl border border-zinc-800">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src="https://www.image2url.com/r2/default/images/1776343437938-8d7c66b5-a4ce-41c0-920b-db7c6011b813.png" 
            alt="Audience in a dark auditorium" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Animated glowing orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#e76366] rounded-full blur-[120px] pointer-events-none"
          ></motion.div>
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.2, 0.1] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8355eb] rounded-full blur-[120px] pointer-events-none"
          ></motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            className="font-['Poppins'] font-black text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight"
          >
            Empowering Educators, <br />
            <span className="text-white">Enriching Classrooms</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-white-800 mb-12 max-w-3xl mx-auto leading-relaxed font-medium text-justify"
          >
            As ELTAI continues its journey, it remains firmly committed to empowering English language teachers and learners, fostering academic excellence, and shaping the future of English language education in India and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <span className="text-sm font-bold tracking-widest capitalize text-white">To Learn More</span>
            <a 
              href="https://www.eltai.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] overflow-hidden"
            >
              {/* Button Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#e76366]/20 to-[#8355eb]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="relative z-10 flex items-center gap-2">
                Visit Official Website
                <Globe size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default EltaiPage;
