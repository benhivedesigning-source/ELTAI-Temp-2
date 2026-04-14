import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-zinc-900">
      <div className="max-w-[1800px] mx-auto px-4 lg:px-8">
        
        {/* Middle */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-base text-gray-400 mb-20 font-medium">
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-3 inline-block mb-2">
              <img src="https://conf2026.eltai.in/assets/ELTAI-DxCx19mA.png" alt="ELTAI Logo" className="h-12 object-contain" />
            </div>
            <p className="text-white font-bold text-lg leading-tight">English Language Teachers' Association of India</p>
            <div className="space-y-2">
              <p>D-54 Third Floor, Anandham Apartments</p>
              <p>156, SIDCO Nagar Main Road</p>
              <p>Villivakkam, Chennai - 600 049, India</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-3 inline-block mb-2">
              <img src="https://conf2026.eltai.in/assets/MITADT-KRFaF891.png" alt="MIT-ADT Logo" className="h-12 object-contain" />
            </div>
            <p className="text-white font-bold text-lg leading-tight">School of Humanities & School of Holistic Development</p>
            <div className="space-y-2">
              <p>MIT Art, Design & Technological University</p>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-white font-bold text-lg mb-4">Join Us</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-zinc-900 text-sm text-gray-500 font-bold tracking-wide">
          <p className="text-white mb-4 md:mb-0">© 2026 ELT@I. All rights reserved.</p>
          <p>Designed and Developed by <span className="text-white flex items-center gap-2 inline-flex"><svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> Deemsys</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
