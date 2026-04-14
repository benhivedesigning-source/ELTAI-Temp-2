import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComingSoon = ({ title }: { title: string }) => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 uppercase tracking-tighter">
            {title}
          </h1>
          <p className="text-gray-400 text-xl mb-10 max-w-md mx-auto">
            We are working hard to bring you the content for this section. Please check back soon!
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-colors"
          >
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;
