import React from 'react';
import { FirebaseService } from '../services/firebase';
import { ShieldCheck, ShoppingBag, ArrowRight, Heart, Award, Sparkles } from 'lucide-react';
import { TeetherVisual } from './TeetherVisual';

export const Hero: React.FC = () => {
  const handleAmazonCaMainClick = () => {
    FirebaseService.trackEvent('amazon_click', {
      productName: 'Amazon CA Storefront Redirect (Hero)',
      targetUrl: 'https://www.amazon.ca/s?me=A3GUNQCRP94MEZ&marketplaceID=A2EUQ1WTGCTBG2',
    });
    window.open('https://www.amazon.ca/s?me=A3GUNQCRP94MEZ&marketplaceID=A2EUQ1WTGCTBG2', '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF4EC] border-b-2 border-[#E4DCD0] py-12 lg:py-20"
      style={{
        backgroundImage: 'url(/assets/Background7.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'auto',
        backgroundColor: 'rgba(255,255,255,0.85)',
        backgroundBlendMode: 'lighten'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Brand Story & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#EBF1F5] border-2 border-[#CBD8E1] px-4 py-1.5 rounded-full text-xs font-extrabold text-[#54758D] shadow-xs">
              <span className="text-base">🍁</span>
              <span>Proudly Canadian Brand</span>
              <span className="text-base">🍁</span>
              {/* <span className="w-1.5 h-1.5 rounded-full bg-[#E5624E]" /> */}
              {/* <span className="text-[#E5624E] lowercase font-extrabold">infyra.ca</span> */}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#23313B] leading-[1.15] tracking-wide">
              Gentle Soothing & Fun for Growing Smiles!
              <span className="block text-2xl sm:text-3xl font-heading font-extrabold text-[#E5624E] mt-2">
                cuddle • play • comfort
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5B6B76] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold">
              Premium, ultra-safe, and thoughtfully designed baby teething toys for your little ones.
              Made with 100% food-grade silicone, soft rattle sounds, and lab-certified Canadian relief!
            </p>

            {/* Key Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="bg-[#FFFBF6] p-3.5 rounded-2xl border-2 border-[#849C81] shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EFF4EE] text-[#849C81] flex items-center justify-center shrink-0 font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold font-heading text-[#23313B]">Lab Tested</p>
                  <p className="text-[11px] text-[#849C81] font-bold">Canadian Rules</p>
                </div>
              </div>

              <div className="bg-[#FFFBF6] p-3.5 rounded-2xl border-2 border-[#E5624E] shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FDEEEB] text-[#E5624E] flex items-center justify-center shrink-0 font-bold">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold font-heading text-[#23313B]">100% Silicone</p>
                  <p className="text-[11px] text-[#E5624E] font-bold">BPA-Free Safe</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-[#FFFBF6] p-3.5 rounded-2xl border-2 border-[#54758D] shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBF1F5] text-[#54758D] flex items-center justify-center shrink-0 font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold font-heading text-[#23313B]">5 Sensory Nubs</p>
                  <p className="text-[11px] text-[#54758D] font-bold">Motor Skills</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Solid Terracotta Coral & Solid Slate Blue */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={handleAmazonCaMainClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E5624E] hover:bg-[#D34F3C] text-white text-sm font-extrabold rounded-2xl shadow-sm transition-all group transform active:scale-95 border-2 border-[#D34F3C]"
              >
                <ShoppingBag className="w-5 h-5 text-white/90" />
                <span>Shop Official Amazon CA Store 🇨🇦</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#FFFBF6] hover:bg-[#EBF1F5] text-[#54758D] text-xs font-extrabold rounded-2xl border-2 border-[#54758D] transition-all"
              >
                <span>🎨 View Teether Toys</span>
              </a>
            </div>

            {/* Amazon Fulfillment Note */}
            <p className="text-xs text-[#5B6B76] font-extrabold flex items-center justify-center lg:justify-start gap-1.5 pt-1">
              <Sparkles className="w-4 h-4 text-[#E5624E]" />
              <span>Fulfilled by Amazon Canada for fast delivery across all provinces!</span>
            </p>

          </div>

          {/* Right Column: Featured Teethers Visual Grid */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#FFFBF6] rounded-3xl p-6 border-2 border-[#E4DCD0] shadow-md relative">

              <div className="flex items-center justify-between pb-4 border-b-2 border-[#E4DCD0] mb-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#54758D] font-heading">
                  ✨ Signature Toy Collection
                </span>
                <span className="text-xs font-extrabold text-[#54758D] bg-[#EBF1F5] px-3 py-1 rounded-full border border-[#CBD8E1]">4 Cute Designs</span>
              </div>

              {/* 2x2 Visual Cards */}
              <div className="grid grid-cols-2 gap-3">
                <a href="#products" className="group bg-[#EFF4EE] p-3.5 rounded-2xl border-2 border-[#849C81] hover:bg-[#E2ECE1] transition-all flex flex-col items-center text-center shadow-xs">
                  {/* <TeetherVisual type="rattle-green" size="sm" /> */}
                  <img src="/assets/RattleTeetherGreen1.png" alt="Rattle Teether Green" className="w-30 h-30 h-full object-contain drop-shadow-md" />
                  <span className="text-xs font-heading font-extrabold text-[#23313B] mt-2 group-hover:text-[#849C81]">
                    Fresh Green
                  </span>
                  <span className="text-[10px] font-bold text-[#849C81]">2-in-1 Rattle</span>
                </a>

                <a href="#products" className="group bg-[#EBF1F5] p-3.5 rounded-2xl border-2 border-[#54758D] hover:bg-[#DDE8F0] transition-all flex flex-col items-center text-center shadow-xs">
                  {/* <TeetherVisual type="rattle-blue" size="sm" /> */}
                  <img src="/assets/RattleTeetherBlue1.png" alt="Rattle Teether Blue" className="w-30 h-30 h-full object-contain drop-shadow-md" />
                  <span className="text-xs font-heading font-extrabold text-[#23313B] mt-2 group-hover:text-[#54758D]">
                    Ocean Blue
                  </span>
                  <span className="text-[10px] font-bold text-[#54758D]">2-in-1 Rattle</span>
                </a>

                <a href="#products" className="group bg-[#F1F5F9] p-3.5 rounded-2xl border-2 border-[#64748B] hover:bg-[#E2E8F0] transition-all flex flex-col items-center text-center shadow-xs">
                  {/* <TeetherVisual type="crocodile-grey" size="sm" /> */}
                  <img src="/assets/CrocodileTeether1.png" alt="Crocodile Teether" className="w-25 h-25 h-full object-contain drop-shadow-md" />
                  <span className="text-xs font-heading font-extrabold text-[#23313B] mt-2 group-hover:text-[#64748B]">
                    Slate Grey
                  </span>
                  <span className="text-[10px] font-bold text-[#64748B]">Crocodile Pop-It</span>
                </a>

                <a href="#products" className="group bg-[#FEF3C7] p-3.5 rounded-2xl border-2 border-[#D97706] hover:bg-[#FDE68A] transition-all flex flex-col items-center text-center shadow-xs">
                  {/* <TeetherVisual type="crab-yellow" size="sm" /> */}
                  <img src="/assets/CrabTeether1.png" alt="Crab Teether" className="w-30 h-30 h-full object-contain drop-shadow-md" />
                  <span className="text-xs font-heading font-extrabold text-[#23313B] mt-2 group-hover:text-[#D97706]">
                    Cream Yellow
                  </span>
                  <span className="text-[10px] font-bold text-[#B45309]">Silicone Crab</span>
                </a>
              </div>

              {/* Floating Quote Badge */}
              <div className="mt-4 p-3 bg-[#FAF4EC] rounded-2xl border-2 border-[#E4DCD0] text-center">
                <p className="text-xs font-heading font-extrabold text-[#54758D]">
                  "Designed for little hands, crafted for total parental peace of mind! 🧸"
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
