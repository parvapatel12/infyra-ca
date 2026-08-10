import React from 'react';
import { FirebaseService } from '../services/firebase';
import { Instagram, ExternalLink, BarChart3, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenAnalytics: () => void;
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAnalytics, onOpenGuide }) => {
  const handleInstagramClick = () => {
    FirebaseService.trackEvent('instagram_click', { targetUrl: 'https://www.instagram.com/infyra.ca' });
    window.open('https://www.instagram.com/infyra.ca', '_blank');
  };

  const handleAmazonMainClick = (url: string) => () => {
    FirebaseService.trackEvent('amazon_click', {
      productName: 'Amazon CA Storefront (Footer)',
      targetUrl: url,
    });
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative colored glow in footer */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {/* <div className="w-12 h-12 rounded-2xl bg-[#E5624E] flex items-center justify-center text-2xl shadow-xs border-2 border-white/20">
                
              </div> */}
              <img src="/assets/BrandLogo2.png" alt="Infyra Logo" className="w-12 h-12 object-contain" />
              <div>
                <span className="text-2xl font-heading font-extrabold text-white tracking-wider">infyra</span>
                <p className="text-xs font-bold text-[#F5C2B9] font-heading">cuddle • play • comfort</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-semibold max-w-sm">
              Infyra is a Canadian baby brand dedicated to premium, safe, and thoughtfully designed teething solutions. Tested and certified to strict Canadian safety standards.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-slate-300 font-bold bg-slate-800/80 px-3 py-2 rounded-xl w-fit border border-slate-700">
              <span className="text-base">🇨🇦</span>
              <span>Official Website: <strong className="text-[#F5C2B9]">infyra.ca</strong></span>
            </div>
          </div>

          {/* Direct Amazon CA Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#E5624E] font-heading">
              Amazon CA Storefront 🇨🇦
            </p>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li>
                <button onClick={handleAmazonMainClick('https://www.amazon.ca/dp/B0GT3BSXPW?th=1')} className="hover:text-[#F5C2B9] transition-colors flex items-center gap-2 text-left group">
                  <ExternalLink className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span>Infyra Fresh Green 2-in-1 Rattle Teether</span>
                </button>
              </li>
              <li>
                <button onClick={handleAmazonMainClick('https://www.amazon.ca/dp/B0GT7VPW43?th=1')} className="hover:text-[#F5C2B9] transition-colors flex items-center gap-2 text-left group">
                  <ExternalLink className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span>Infyra Ocean Blue 2-in-1 Rattle Teether</span>
                </button>
              </li>
              <li>
                <button onClick={handleAmazonMainClick('https://www.amazon.ca/dp/B0GT8KX85H')} className="hover:text-[#F5C2B9] transition-colors flex items-center gap-2 text-left group">
                  <ExternalLink className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span>Infyra Grey Crocodile Pop-It Teether</span>
                </button>
              </li>
              <li>
                <button onClick={handleAmazonMainClick('https://www.amazon.ca/dp/B0GSPTTHSH')} className="hover:text-[#F5C2B9] transition-colors flex items-center gap-2 text-left group">
                  <ExternalLink className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span>Infyra Silicone Crab Teether</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Socials & Owner Tools */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-extrabold uppercase tracking-wider text-amber-400 font-heading">
              Community
            </p>
            <div className="space-y-2.5">
              <button
                onClick={handleInstagramClick}
                className="w-full inline-flex items-center gap-2 px-4 py-3 bg-[#E5624E] hover:bg-[#D34F3C] text-white text-xs font-extrabold rounded-2xl transition-all shadow-xs border border-[#D34F3C]"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram @infyra.ca</span>
              </button>

              <button
                onClick={onOpenAnalytics}
                className="w-full inline-flex items-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold rounded-2xl transition-all border border-slate-700"
              >
                <BarChart3 className="w-4 h-4 text-emerald-400" />
                <span>Store Owner Analytics</span>
              </button>

              {/* <button
                onClick={onOpenGuide}
                className="w-full inline-flex items-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold rounded-2xl transition-all border border-slate-700"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>infyra.ca AI Guide</span>
              </button> */}
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
          <p>© {new Date().getFullYear()} Infyra (infyra.ca). All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-amber-300">
            <span>Crafted with care for Canadian parents & growing babies 💖</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
