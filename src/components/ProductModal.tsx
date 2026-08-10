import React, { useState } from 'react';
import { Product } from '../types';
import { FirebaseService } from '../services/firebase';
import { TeetherVisual } from './TeetherVisual';
import { X, ExternalLink, ShieldCheck, CheckCircle2, Copy, Check, Star, Sparkles, Heart } from 'lucide-react';
import { TeetherImage } from './TeetherImage';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!product) return null;

  const handleAmazonRedirect = () => {
    FirebaseService.trackEvent('amazon_click', {
      productId: product.id,
      productName: product.name + ` (${product.colorName})`,
      targetUrl: product.amazonUrl,
    });
    window.open(product.amazonUrl, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(product.amazonUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#FFFBF6] w-full max-w-4xl rounded-3xl shadow-xl border-2 border-[#E4DCD0] overflow-hidden relative my-8 animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-[#FAF4EC] hover:bg-[#FDEEEB] text-[#23313B] hover:text-[#E5624E] flex items-center justify-center transition-colors shadow-2xs border border-[#E4DCD0]"
          title="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Visual Column */}
          <div className="md:col-span-5 bg-[#FAF4EC] p-8 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r-2 border-[#E4DCD0]">
            
            <div className="bg-[#FFFBF6] px-3.5 py-1 rounded-full text-xs font-extrabold text-[#23313B] shadow-2xs mb-4 font-heading border border-[#CBD8E1]">
              {product.badge}
            </div>

            <TeetherImage type={product.svgType} size="lg" />

            {/* Quick Dimensions Box */}
            <div className="w-full bg-[#FFFBF6] rounded-2xl p-4 mt-6 border-2 border-[#E4DCD0] shadow-2xs text-center space-y-1">
              <p className="text-xs font-extrabold text-[#23313B] font-heading uppercase tracking-wider">
                Precision Dimensions 📐
              </p>
              <div className="flex items-center justify-center gap-3 text-xs text-[#23313B] pt-1 font-bold">
                <span>Height: <strong className="text-[#E5624E]">{product.dimensions.height}</strong></span>
                <span>Width: <strong className="text-[#E5624E]">{product.dimensions.width}</strong></span>
                <span>Weight: <strong className="text-[#E5624E]">{product.dimensions.weight}</strong></span>
              </div>
              {product.dimensions.handleOpening && (
                <p className="text-[11px] text-[#5B6B76] pt-0.5 font-semibold">
                  Handle Opening: <strong>{product.dimensions.handleOpening}</strong> (Optimized for 0-12m hands)
                </p>
              )}
            </div>

            <p className="text-[11px] text-[#5B6B76] mt-4 text-center font-bold">
              1:1 Real-World Proportions • Fits comfortably in an infant’s single palm.
            </p>
          </div>

          {/* Right Info Column */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-3.5 h-3.5 rounded-full border-2 border-white shadow-2xs" style={{ backgroundColor: product.colorHex }} />
                <span className="text-xs font-extrabold font-heading text-[#5B6B76] uppercase tracking-wider">
                  Infyra {product.colorName} Edition
                </span>
                <div className="ml-auto flex items-center gap-1 bg-[#FEF3C7] px-3 py-1 rounded-full border border-amber-300 text-xs font-extrabold text-[#78350F] shadow-2xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  <span>{product.rating} / 5.0</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#23313B]">
                {product.name}
              </h2>
              <p className="text-xs font-extrabold text-[#E5624E] mt-1 font-heading">
                cuddle • play • comfort
              </p>
            </div>

            <p className="text-sm text-[#23313B] leading-relaxed font-semibold">
              {product.description}
            </p>

            {/* Key Feature Bullets */}
            <div className="space-y-2">
              <h3 className="text-xs font-extrabold font-heading uppercase tracking-wider text-[#23313B] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Product Highlights</span>
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {product.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-[#EFF4EE] p-3 rounded-2xl border border-[#849C81] text-xs font-bold text-[#23313B]">
                    <CheckCircle2 className="w-4 h-4 text-[#849C81] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5-Nub Sensory Breakdown */}
            <div className="space-y-2">
              <h3 className="text-xs font-extrabold font-heading uppercase tracking-wider text-[#23313B] flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#E5624E]" />
                <span>Sensory Nub & Texture Breakdown</span>
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {product.sensoryBreakdown.map((nub, idx) => (
                  <div key={idx} className="bg-[#FDEEEB] p-3 rounded-2xl border border-[#F5C2B9] text-xs">
                    <p className="font-extrabold font-heading text-[#782318]">{nub.title}</p>
                    <p className="text-[11px] text-[#5B6B76] mt-0.5 leading-snug font-semibold">{nub.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="bg-[#EBF1F5] p-4 rounded-2xl border border-[#54758D] space-y-2 text-xs">
              <h4 className="font-extrabold font-heading text-[#1E3A4E] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#54758D]" />
                <span>Canadian Lab Safety & Material Specs</span>
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[#23313B] font-semibold">
                <div>
                  <span className="font-extrabold text-[#23313B]">Material:</span> {product.specifications.material}
                </div>
                <div>
                  <span className="font-extrabold text-[#23313B]">Age:</span> {product.specifications.ageRange}
                </div>
                <div>
                  <span className="font-extrabold text-[#23313B]">Safety:</span> {product.specifications.certifications}
                </div>
                <div>
                  <span className="font-extrabold text-[#23313B]">Care:</span> {product.specifications.careInstructions}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 space-y-3">
              <button
                onClick={handleAmazonRedirect}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#E5624E] hover:bg-[#D34F3C] text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xs transition-all border-2 border-[#D34F3C]"
              >
                <span>Buy On Amazon Canada 🇨🇦</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </button>

              <div className="flex items-center justify-between gap-3 text-xs text-slate-600 pt-1">
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF4EC] hover:bg-[#EBF1F5] text-[#23313B] font-bold transition-colors border border-[#CBD8E1]"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#849C81]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Amazon CA Link Copied!' : 'Copy Amazon CA Link'}</span>
                </button>

                <span className="text-[11px] text-[#2B4B28] font-bold bg-[#EFF4EE] px-3 py-1 rounded-full border border-[#849C81]">
                  🍁 Verified Canadian Seller
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
