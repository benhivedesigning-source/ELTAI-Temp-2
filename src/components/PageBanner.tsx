import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; path?: string }[];
  image?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ 
  title, 
  subtitle, 
  breadcrumb, 
  image = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop" 
}) => {
  const gradientText = {
    background: 'linear-gradient(90deg, #e76366, #8355eb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  return (
    <section className="relative h-[350px] md:h-[450px] flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
        {/* Decorative Glows */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#e76366]/10 blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#8355eb]/10 blur-[100px] translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 text-center">
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center items-center gap-2 text-sm font-medium text-gray-400"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-zinc-700">/</span>
                {item.path ? (
                  <Link to={item.path} className="hover:text-white transition-colors">{item.label}</Link>
                ) : (
                  <span style={gradientText} className="font-bold">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter uppercase mb-4 leading-tight"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-medium"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      
      {/* Classic Bottom Border/Accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
};

export default PageBanner;
