import React from 'react';
import { FirebaseService } from '../services/firebase';
import { BarChart3, Instagram, ShieldCheck, ShoppingBag, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenAnalytics: () => void;
  onOpenGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAnalytics, onOpenGuide }) => {
  const handleInstagramClick = () => {
    FirebaseService.trackEvent('instagram_click', { targetUrl: 'https://www.instagram.com/infyra.ca' });
    window.open('https://www.instagram.com/infyra.ca', '_blank');
  };

  const handleAmazonClick = () => {
    FirebaseService.trackEvent('amazon_click', {
      productName: 'Amazon CA Storefront Redirect (Header)',
      targetUrl: 'https://www.amazon.ca/s?me=A3GUNQCRP94MEZ&marketplaceID=A2EUQ1WTGCTBG2',
    });
    window.open('https://www.amazon.ca/s?me=A3GUNQCRP94MEZ&marketplaceID=A2EUQ1WTGCTBG2', '_blank');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFBF6] border-b-2 border-[#E4DCD0] shadow-xs">
      {/* Canadian Safety Trust Banner - Solid Slate Blue */}
      <div className="bg-[#54758D] text-white text-xs sm:text-sm py-2 px-4 text-center font-bold tracking-wide flex items-center justify-center gap-2">
        {/* <span className="text-base">🇨🇦</span> */}
        <span>Tested & Certified to Strict Canadian Safety Standards</span>
        <span className="hidden sm:inline-block border-l border-white/30 pl-2.5 font-semibold text-white/90">
          100% Food-Grade Silicone • BPA-Free • Fast Shipping via Amazon CA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Slogan matching Logo exact palette */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-15 h-15 rounded-2xl p-1 group-hover:scale-105 transition-transform">
              <img src="/assets/BrandLogo2.png" alt="Infyra Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-heading font-extrabold tracking-wide text-[#54758D]">
                  infyra
                </span>
                <span className="text-xs font-extrabold bg-[#EBF1F5] text-[#54758D] px-2 py-0.5 rounded-full border border-[#CBD8E1]">
                  .ca
                </span>
              </div>
              <p className="text-xs font-extrabold tracking-wider text-[#E5624E] font-heading">
                cuddle<span className="text-[#54758D]">.</span> play<span className="text-[#54758D]">.</span> comfort<span className="text-[#54758D]">.</span>
              </p>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 font-heading font-extrabold text-sm text-[#23313B]">
            <a href="#products" className="hover:text-[#E5624E] transition-colors">
              {/* 🎨 */}
              🧸
              Teethers
            </a>
            <a href="#safety" className="hover:text-[#849C81] transition-colors flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#849C81]" />
              Safety Standard
            </a>
            <a href="#infyra-land" className="hover:text-[#54758D] transition-colors">
              📖 
              Brand Story
            </a>
            <a href="#reviews" className="hover:text-[#E5624E] transition-colors">
              🌟 
              Reviews
            </a>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleInstagramClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-extrabold text-[#E5624E] bg-[#FDEEEB] hover:bg-[#FADBD6] rounded-xl transition-all border border-[#F5C2B9]"
              title="Visit Infyra Instagram Page"
            >
              <Instagram className="w-4 h-4 text-[#E5624E]" />
              <span className="hidden sm:inline">Instagram</span>
            </button>

            <button
              onClick={handleAmazonClick}
              className="relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-extrabold text-white bg-[#E5624E] hover:bg-[#D34F3C] rounded-xl transition-all shadow-xs"
              title="Visit Infyra Amazon Store"
            >
              <ShoppingBag className="w-5 h-5 text-white/90" />
              <span className="hidden lg:inline">Amazon</span>
            </button>

            {/* <button
              onClick={onOpenGuide}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-extrabold text-[#54758D] bg-[#EBF1F5] hover:bg-[#D8E4EC] rounded-xl transition-all border border-[#CBD8E1]"
              title="Free Hosting & AI Growth Strategy"
            >
              <Sparkles className="w-4 h-4 text-[#54758D]" />
              <span className="hidden md:inline">AI Guide</span>
            </button> */}

            {/* <button
              onClick={onOpenAnalytics}
              className="relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-extrabold text-white bg-[#54758D] hover:bg-[#3F5B70] rounded-xl transition-all shadow-xs"
              title="Store Owner Analytics Dashboard"
            >
              <BarChart3 className="w-4 h-4 text-emerald-300" />
              <span className="hidden lg:inline">Owner Stats</span>
              <span className="lg:hidden">Stats</span>
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};
