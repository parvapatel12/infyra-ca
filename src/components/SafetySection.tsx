import React from 'react';
import { ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export const SafetySection: React.FC = () => {
  return (
    <section id="safety" className="py-16 bg-[#FAF4EC] border-b-2 border-[#E4DCD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#EFF4EE] text-[#849C81] border-2 border-[#849C81] px-4 py-1.5 rounded-full text-xs font-extrabold shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#849C81]" />
            <span>Canadian Quality & Safety Guarantee 🛡️</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#23313B]">
            Gentle Safety Standards for Growing Smiles!
          </h2>

          <p className="text-base text-[#5B6B76] leading-relaxed font-semibold">
            When you see the Infyra logo, you see an uncompromising promise. Every texture, shape, and detail is lab-tested and certified to comply with strict Canadian baby safety expectations.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          
          {/* Card 1: Safety & Lab Testing (Sage Green Theme) */}
          <div className="bg-[#FFFBF6] rounded-3xl p-6 border-2 border-[#849C81] shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#EFF4EE] text-[#849C81] flex items-center justify-center mb-4 font-bold text-xl border border-[#849C81] shadow-2xs">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-heading font-extrabold text-[#23313B] mb-2">
              Uncompromising Safety
            </h3>

            <p className="text-xs text-[#5B6B76] leading-relaxed mb-4 font-semibold">
              Every single product is lab-tested and certified to meet Health Canada & CCPSA requirements. Non-toxic, lead-free, and phthalate-free.
            </p>

            <ul className="space-y-2 text-xs font-bold text-[#23313B] border-t border-[#E4DCD0] pt-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#849C81] shrink-0" />
                <span>CCPSA & Canadian Toy Safety Compliant</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#849C81] shrink-0" />
                <span>Heavy Metal & Phthalate Lab Audited</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#849C81] shrink-0" />
                <span>0-12 Month Choke-Hazard Proofed</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Premium Food-Grade Silicone (Terracotta Coral Theme) */}
          <div className="bg-[#FFFBF6] rounded-3xl p-6 border-2 border-[#E5624E] shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#FDEEEB] text-[#E5624E] flex items-center justify-center mb-4 font-bold text-xl border border-[#E5624E] shadow-2xs">
              <Heart className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-heading font-extrabold text-[#23313B] mb-2">
              100% Food-Grade Silicone
            </h3>

            <p className="text-xs text-[#5B6B76] leading-relaxed mb-4 font-semibold">
              Crafted from ultra-soft, premium food-grade silicone that is gentle on tender swollen gums while durable enough for enthusiastic chewers.
            </p>

            <ul className="space-y-2 text-xs font-bold text-[#23313B] border-t border-[#E4DCD0] pt-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5624E] shrink-0" />
                <span>100% BPA-Free & Latex-Free</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5624E] shrink-0" />
                <span>Dishwasher & Steam Sterilizer Safe</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5624E] shrink-0" />
                <span>Boil-Safe Hygiene Maintenance</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Ergonomic Motor Skills Design (Slate Blue Theme) */}
          <div className="bg-[#FFFBF6] rounded-3xl p-6 border-2 border-[#54758D] shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF1F5] text-[#54758D] flex items-center justify-center mb-4 font-bold text-xl border border-[#54758D] shadow-2xs">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-heading font-extrabold text-[#23313B] mb-2">
              Playful & Ergonomic Design
            </h3>

            <p className="text-xs text-[#5B6B76] leading-relaxed mb-4 font-semibold">
              Cute, textured, and ergonomically proportioned specifically for tiny infant hands (0-12m) to grasp, explore, and manipulate independently.
            </p>

            <ul className="space-y-2 text-xs font-bold text-[#23313B] border-t border-[#E4DCD0] pt-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#54758D] shrink-0" />
                <span>Solo-Grip Open Loop Handles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#54758D] shrink-0" />
                <span>5 Varied Tactile Massaging Textures</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#54758D] shrink-0" />
                <span>Quiet Rattle & Pop-It Fine Motor Relief</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Banner callout - Solid Slate Blue */}
        <div className="mt-12 bg-[#54758D] rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm border-2 border-[#3F5B70]">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#EFF4EE] font-heading">
              Canadian Quality Assurance
            </p>
            <p className="text-lg sm:text-xl font-heading font-extrabold text-white">
              "We know that parenthood is a beautiful, playful adventure—and it deserves products that match that joy."
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3 bg-white/15 px-4 py-3 rounded-2xl border border-white/25">
            <span className="text-3xl">🧸</span>
            <div className="text-left">
              <p className="text-xs font-extrabold font-heading text-white">Infyra Baby</p>
              <p className="text-xs text-white/90 font-bold">infyra.ca • Amazon CA</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
