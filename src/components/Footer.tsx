import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 border-t-2 border-zinc-900">
      <div className="max-w-[1800px] mx-auto px-4 xl:px-8">
        
        {/* Middle */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-zinc-400 mb-20">
          <div className="space-y-4">
            <div className="bg-zinc-900/50 rounded-2xl p-4 inline-block mb-4 border border-zinc-800">
              <img src="https://conf2026.eltai.in/assets/ELTAI-DxCx19mA.png" alt="ELTAI Logo" className="h-10 object-contain" />
            </div>
            <p className="text-zinc-100 font-bold text-base leading-tight">English Language Teachers' Association of India</p>
            <div className="space-y-1 text-zinc-500 text-sm">
              <p>D-54 Third Floor, Anandham Apartments</p>
              <p>156, SIDCO Nagar Main Road</p>
              <p>Villivakkam, Chennai - 600 049, India</p>
            </div>
            
            {/* Stay Connected - Moved and resized */}
            <div className="pt-6 space-y-3">
              <p className="text-zinc-100 font-bold text-sm ">Stay Connected</p>
              <div className="flex gap-3">
                {[
                  { icon: () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>, label: "X" },
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Youtube, label: "Youtube" },
                  { icon: Linkedin, label: "Linkedin" }
                ].map((social, i) => (
                  <a key={i} href="#" className="w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-800 transition-all transform hover:scale-110">
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-zinc-900/50 rounded-2xl p-4 inline-block mb-4 border border-zinc-800">
              <img src="https://conf2026.eltai.in/assets/MITADT-KRFaF891.png" alt="MIT-ADT Logo" className="h-10 object-contain" />
            </div>
            <p className="text-zinc-100 font-bold text-base leading-tight">School of Humanities & School of Holistic Development</p>
            <div className="space-y-1 text-zinc-500 text-sm">
              <p>MIT Art, Design & Technological University</p>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-zinc-900 text-xs text-zinc-500 font-medium tracking-wide">
          <p className="text-zinc-300 mb-4 md:mb-0">© 2026 ELT@I. All rights reserved.</p>
          <p className="flex items-center gap-1.5">Designed by <span className="text-zinc-300 flex items-center gap-1.5 hover:text-white transition-colors"><svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> Deemsys</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
