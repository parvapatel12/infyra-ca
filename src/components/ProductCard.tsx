import React from 'react';
import { Product } from '../types';
import { FirebaseService } from '../services/firebase';
import { TeetherVisual } from './TeetherVisual';
import { ExternalLink, Star, CheckCircle2, Eye } from 'lucide-react';
import { TeetherImage } from './TeetherImage';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  const handleAmazonRedirect = (e: React.MouseEvent) => {
    e.stopPropagation();
    FirebaseService.trackEvent('amazon_click', {
      productId: product.id,
      productName: product.name + ` (${product.colorName})`,
      targetUrl: product.amazonUrl,
    });
    window.open(product.amazonUrl, '_blank');
  };

  const handleCardClick = () => {
    FirebaseService.trackEvent('product_view', {
      productId: product.id,
      productName: product.name + ` (${product.colorName})`,
    });
    onSelectProduct(product);
  };

  // Color theme mapping
  const getThemeClasses = () => {
    switch (product.id) {
      case 'fresh-green-rattle':
        return {
          border: 'border-[#849C81] hover:border-[#6B8368]',
          badgeBg: 'bg-[#EFF4EE] text-[#2B4B28] border-[#849C81]',
          visualBg: 'bg-[#EFF4EE]',
          checkIcon: 'text-[#849C81]',
          starColor: 'fill-amber-400 text-amber-500',
        };
      case 'ocean-blue-rattle':
        return {
          border: 'border-[#54758D] hover:border-[#3F5B70]',
          badgeBg: 'bg-[#EBF1F5] text-[#1E3A4E] border-[#54758D]',
          visualBg: 'bg-[#EBF1F5]',
          checkIcon: 'text-[#54758D]',
          starColor: 'fill-amber-400 text-amber-500',
        };
      case 'grey-crocodile-teether':
        return {
          border: 'border-[#64748B] hover:border-[#475569]',
          badgeBg: 'bg-[#F1F5F9] text-[#334155] border-[#64748B]',
          visualBg: 'bg-[#F1F5F9]',
          checkIcon: 'text-[#64748B]',
          starColor: 'fill-amber-400 text-amber-500',
        };
      case 'cream-yellow-crab-teether':
      default:
        return {
          border: 'border-[#D97706] hover:border-[#B45309]',
          badgeBg: 'bg-[#FEF3C7] text-[#78350F] border-[#D97706]',
          visualBg: 'bg-[#FEF3C7]',
          checkIcon: 'text-[#D97706]',
          starColor: 'fill-amber-400 text-amber-500',
        };
    }
  };

  const theme = getThemeClasses();

  return (
    <div
      onClick={handleCardClick}
      className={`group cursor-pointer bg-[#FFFBF6] rounded-3xl p-5 border-2 ${theme.border} shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between relative overflow-hidden`}
    >
      <div>
        {/* Top Badge & Rating */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`text-xs font-heading font-extrabold px-3 py-1 rounded-full border shadow-2xs ${theme.badgeBg}`}>
            {product.badge}
          </span>
          <div className="flex items-center gap-1 bg-[#FAF4EC] border border-[#E4DCD0] px-2.5 py-1 rounded-full shadow-2xs">
            <Star className={`w-3.5 h-3.5 ${theme.starColor}`} />
            <span className="text-xs font-extrabold text-[#23313B]">{product.rating}</span>
            <span className="text-[11px] font-bold text-[#5B6B76]">({product.reviewCount})</span>
          </div>
        </div>

        {/* Center Visual Box */}
        <div className={`w-full aspect-square ${theme.visualBg} rounded-2xl flex items-center justify-center mb-4 border border-black/5`}>
          {/* <TeetherVisual type={product.svgType} size="md" /> */}
          <TeetherImage type={product.svgType} size="md" />
        </div>

        {/* Product Meta */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span
              className="w-3.5 h-3.5 rounded-full border-2 border-white shadow-2xs shrink-0"
              style={{ backgroundColor: product.colorHex }}
            />
            <p className="text-xs font-bold text-[#5B6B76] font-heading">
              {product.colorName} • 100% Food Silicone
            </p>
          </div>

          <h3 className="font-heading font-extrabold text-xl text-[#23313B] group-hover:text-[#E5624E] transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-[#5B6B76] line-clamp-2 leading-relaxed font-semibold">
            {product.subtitle}
          </p>

          {/* Feature Bullets */}
          <ul className="space-y-1.5 pt-2 text-xs font-bold text-[#23313B]">
            {product.keyFeatures.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <CheckCircle2 className={`w-4 h-4 ${theme.checkIcon} shrink-0 mt-0.5`} />
                <span className="line-clamp-1">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-5 space-y-2">
        <button
          onClick={handleAmazonRedirect}
          className="w-full py-3 text-center text-xs font-extrabold bg-[#E5624E] hover:bg-[#D34F3C] text-white rounded-2xl shadow-xs transition-all inline-flex items-center justify-center gap-2 transform active:scale-95 border border-[#D34F3C]"
        >
          <span>Buy on Amazon CA 🇨🇦</span>
          <ExternalLink className="w-3.5 h-3.5 text-white/90" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
          className="w-full py-2.5 text-center text-xs font-extrabold bg-[#FAF4EC] text-[#54758D] rounded-2xl hover:bg-[#EBF1F5] transition-colors border border-[#CBD8E1] inline-flex items-center justify-center gap-1.5"
        >
          <Eye className="w-3.5 h-3.5 text-[#54758D]" />
          <span>View Specifications</span>
        </button>
      </div>
    </div>
  );
};
