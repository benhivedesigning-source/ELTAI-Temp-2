import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Building2, ChevronDown, Activity, Brain, Heart, Users, 
  Lightbulb, Star, Globe, Shield, BookOpen, CheckCircle, 
  Award, Briefcase, ExternalLink, ArrowRight 
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import Ordinal from '../components/Ordinal';

const MITADTUniversityPage = () => {
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
       title={
  <>
    MIT <span className="mx-1">ADT</span> University
  </>
}
        subtitle="Where Innovation Meets Holistic Education."
        breadcrumb={[
          { label: "Organizers", path: "/organizers" },
          { label: "MIT ADT University" }
        ]}
        image="https://www.image2url.com/r2/default/images/1776343708397-88e842a2-3e3b-4a46-ba73-d5da5da947de.webp"
      />

      {/* Editorial Layout Section - Single Paragraph Form */}
      <section className="py-24 md:py-32 relative z-10 bg-zinc-50 overflow-hidden">
        {/* Background Ambient Glows */}
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
              About <br className="md:hidden" /> <span className="inline-block md:ml-2" style={gradientText}>
    MIT ADT </span> <span className="inline-block md:ml-2" style={gradientText}>
    University</span>
            </h2>
          </motion.div>

          {/* Article Flow */}
          <div className="prose prose-lg md:prose-xl prose-zinc max-w-none text-gray-600 leading-relaxed font-medium text-justify">
            
            {/* First Image - Floated Right */}
            <motion.figure 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="float-none md:float-right w-full md:w-[45%] ml-0 md:ml-10 mb-8 mt-2 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100"
            >
              <img src="https://www.image2url.com/r2/default/images/1776343910210-85b4081c-4932-4264-a96d-ded109f05805.png" alt="MIT ADT Campus" className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700" />
            </motion.figure>

            <p>
              <strong>About MIT ADT University:</strong> MIT Art, Design and Technology University is honoured to host <Ordinal text="the 20th International and 56th Annual Conference of ELTAI" />. With the compelling theme “English on the Edge: Survive? Evolve? Thrive?” the conference invites educators, researchers, scholars, writers, and learners to reflect on the evolving role of English in a rapidly transforming world shaped by automation, imagination, and innovation. MIT Art, Design and Technology University is a UGC-recognised, state private and multi-disciplinary university under the prestigious MIT Group of Institutions. Accredited with NAAC ‘A’ grade, it represents a progressive and holistic vision of higher education. Spread over a 150-acre campus with serene, green surroundings, the university has received the ‘Best Campus Award’ and the ‘Best Private State University in India Award.’ With 17 constituent Schools offering diverse programmes, MIT ADT University blends academic excellence with holistic growth and global outlook. Crowning the campus is the Raj Kapoor Museum and the iconic World Peace Dome, the world’s largest dome, symbolising knowledge, unity, and global harmony. 
            </p>

            <p className="mt-6">
              <strong>MIT School of Holistic Development:</strong> With a vision to create winning personalities and comprehensive global professionals, the School enables students to meet the challenges of career and life with skills, sensibilities, and a strong sense of responsibility towards society and humanity. The School focuses on nurturing students to be physically fit, mentally strong, emotionally alert, socially responsible, intellectually sharp, linguistically competent, morally upright, and spiritually elevated. It conducts 12-credit mandatory courses for 15,000+ students, including English Communication and Holistic Personality Programme, Health Practices, Societal Immersion, Spirituality and Morality, Creative Arts and Performing Arts (20 electives), and Foreign and Indian Languages. 
            </p>
              
            <p className="mt-6">
              <strong>MIT School of Humanities:</strong> At the School of Humanities, programmes such as B.A. English (Honours), M.A. English (ELLT), and Ph.D. in English nurture linguistic and literary excellence, enriching students’ socio-cultural understanding and strengthening their collaborative and persuasive abilities. The School follows the National Education Policy-based curriculum with a strong research-driven approach. Through in-depth critical study, meaningful integration of technology, and an interdisciplinary framework, students receive a well-rounded education. With Cambridge Certification opportunities, international collaborations, and structured internship exposure, the School prepares learners to make a remarkable mark in academia and beyond. 
            </p>

            <p className="mt-12">
              We warmly welcome you to a campus that celebrates dialogue, innovation, and holistic education.
            </p>

            <div className="mt-20"></div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default MITADTUniversityPage;
