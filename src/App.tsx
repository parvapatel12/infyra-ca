import React, { useState, useEffect } from 'react';
import { Product } from './types';
import { PRODUCTS } from './data/products';
import { AnalyticsService } from './services/analytics';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { SafetySection } from './components/SafetySection';
import { InfyraLandStorySection } from './components/InfyraLandStorySection';
import { InstagramFeed } from './components/InstagramFeed';
import { EmailNewsletter } from './components/EmailNewsletter';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { FreeStrategyGuideModal } from './components/FreeStrategyGuideModal';
import { Footer } from './components/Footer';
import { ShoppingBag, Heart, Sparkles, Filter, ExternalLink } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [filterColor, setFilterColor] = useState<string>('all');

  useEffect(() => {
    AnalyticsService.initInitialPageView();
  }, []);

  const filteredProducts = PRODUCTS.filter(p => {
    if (filterColor === 'all') return true;
    return p.id.includes(filterColor);
  });

  return (
    <div className="min-h-screen bg-[#FAF4EC] text-[#23313B] font-sans antialiased selection:bg-[#FDEEEB] selection:text-[#E5624E]"
      style={{ backgroundImage: 'url(/assets/BackgroundPattern.png)', backgroundRepeat: 'repeat', backgroundSize: 'auto'}}
    >
      
      {/* Header */}
      <Header
        onOpenAnalytics={() => setShowAnalytics(true)}
        onOpenGuide={() => setShowGuide(true)}
      />

      {/* Main Hero Banner */}
      <Hero />

      {/* Main Products Catalog Section */}
      <section id="products" className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10 pb-6 border-b-2 border-[#E4DCD0]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold font-heading text-[#E5624E] bg-[#FDEEEB] px-3.5 py-1.5 rounded-full mb-2 border border-[#F5C2B9] shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#E5624E]" />
              <span>Signature Teether Toy Collection 🧸</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#23313B]">
              Our 4 Signature Baby Teethers
            </h2>
            <p className="text-sm text-[#5B6B76] mt-1 font-semibold max-w-2xl leading-relaxed">
              Engineered with 100% food-grade silicone, multi-sensory textures, and gentle rattle sounds. Select any teether to view detailed dimensions or order directly on Amazon Canada!
            </p>
          </div>

          {/* Quick Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#FFFBF6] p-2 rounded-2xl border-2 border-[#E4DCD0] shadow-2xs text-xs font-extrabold shrink-0">
            <Filter className="w-4 h-4 text-[#54758D] ml-1.5" />
            <button
              onClick={() => setFilterColor('all')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                filterColor === 'all'
                  ? 'bg-[#54758D] text-white shadow-2xs'
                  : 'text-[#5B6B76] hover:bg-[#EBF1F5]'
              }`}
            >
              All 4
            </button>
            <button
              onClick={() => setFilterColor('green')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                filterColor === 'green'
                  ? 'bg-[#849C81] text-white shadow-2xs'
                  : 'text-[#5B6B76] hover:bg-[#EFF4EE]'
              }`}
            >
              Fresh Green
            </button>
            <button
              onClick={() => setFilterColor('blue')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                filterColor === 'blue'
                  ? 'bg-[#54758D] text-white shadow-2xs'
                  : 'text-[#5B6B76] hover:bg-[#EBF1F5]'
              }`}
            >
              Ocean Blue
            </button>
            <button
              onClick={() => setFilterColor('crocodile')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                filterColor === 'crocodile'
                  ? 'bg-[#64748B] text-white shadow-2xs'
                  : 'text-[#5B6B76] hover:bg-[#F1F5F9]'
              }`}
            >
              Crocodile
            </button>
            <button
              onClick={() => setFilterColor('crab')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                filterColor === 'crab'
                  ? 'bg-[#D97706] text-white shadow-2xs'
                  : 'text-[#5B6B76] hover:bg-[#FEF3C7]'
              }`}
            >
              Crab
            </button>
          </div>
        </div>

        {/* 4 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>

        {/* Amazon Redirect Guarantee Callout - Solid Terracotta Coral */}
        <div className="mt-12 bg-[#E5624E] rounded-3xl p-6 sm:p-8 text-white shadow-sm border-2 border-[#D34F3C] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center font-bold text-xl shrink-0 border border-white/30">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-lg font-heading font-extrabold text-white">Direct Fast Delivery via Amazon Canada 🇨🇦</p>
              <p className="text-xs text-white/90 font-bold mt-0.5">All product links take visitors directly to our official Amazon CA listing for fast shipping across provinces!</p>
            </div>
          </div>
          <a
            href="https://www.amazon.ca/s?me=A3GUNQCRP94MEZ&marketplaceID=A2EUQ1WTGCTBG2"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 px-7 py-3.5 bg-[#54758D] hover:bg-[#3F5B70] text-white text-xs font-extrabold rounded-2xl shadow-xs transition-all inline-flex items-center gap-2 border border-[#3F5B70]"
          >
            <span>Visit Amazon CA Store 🇨🇦</span>
            <ExternalLink className="w-4 h-4 text-white" />
          </a>
        </div>

      </section>

      {/* Safety & Canadian Standards Section */}
      <SafetySection />

      {/* Infyra Land Behind-The-Scenes Roadmap */}
      <InfyraLandStorySection />

      {/* Parent Reviews Section */}
      <section id="reviews" className="py-16 bg-[#FAF4EC] border-b-2 border-[#E4DCD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold font-heading text-[#E5624E] bg-[#FDEEEB] px-4 py-1.5 rounded-full border border-[#F5C2B9]">
              <Heart className="w-4 h-4 text-[#E5624E] fill-[#E5624E]" />
              <span>Happy Parents & Smiling Babies 💖</span>
            </div>
            <h2 className="text-3xl font-heading font-extrabold text-[#23313B]">Loved by Canadian Parents</h2>
            <p className="text-sm text-[#5B6B76] font-semibold">Real feedback from parents using Infyra teethers for on-the-go soothing relief.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#FFFBF6] rounded-3xl p-6 border-2 border-[#849C81] shadow-xs space-y-3">
              <div className="flex items-center gap-1.5 text-amber-500">
                <span className="text-xs font-extrabold text-[#23313B] mr-1 bg-[#EFF4EE] px-2 py-0.5 rounded-md">5.0</span>
                {'★'.repeat(5)}
              </div>
              <p className="text-xs text-[#23313B] font-semibold italic leading-relaxed">
                "The Fresh Green 2-in-1 Rattle is a lifesaver on stroller walks! My 7-month-old loves the rabbit and bear textures. The quiet rattle sound keeps him happy without driving me crazy."
              </p>
              <div className="pt-3 border-t border-[#E4DCD0] text-xs">
                <p className="font-heading font-extrabold text-[#23313B]">Sarah M.</p>
                <p className="text-[11px] font-bold text-[#849C81]">Verified Amazon CA Buyer • Toronto, ON</p>
              </div>
            </div>

            <div className="bg-[#FFFBF6] rounded-3xl p-6 border-2 border-[#54758D] shadow-xs space-y-3">
              <div className="flex items-center gap-1.5 text-amber-500">
                <span className="text-xs font-extrabold text-[#23313B] mr-1 bg-[#EBF1F5] px-2 py-0.5 rounded-md">5.0</span>
                {'★'.repeat(5)}
              </div>
              <p className="text-xs text-[#23313B] font-semibold italic leading-relaxed">
                "The Grey Crocodile Pop-It teether is so clever! The pop-it buttons keep my daughter entertained during high-chair meal prep. Excellent quality food-grade silicone."
              </p>
              <div className="pt-3 border-t border-[#E4DCD0] text-xs">
                <p className="font-heading font-extrabold text-[#23313B]">David & Jessica L.</p>
                <p className="text-[11px] font-bold text-[#54758D]">Verified Amazon CA Buyer • Vancouver, BC</p>
              </div>
            </div>

            <div className="bg-[#FFFBF6] rounded-3xl p-6 border-2 border-[#D97706] shadow-xs space-y-3">
              <div className="flex items-center gap-1.5 text-amber-500">
                <span className="text-xs font-extrabold text-[#23313B] mr-1 bg-[#FEF3C7] px-2 py-0.5 rounded-md">5.0</span>
                {'★'.repeat(5)}
              </div>
              <p className="text-xs text-[#23313B] font-semibold italic leading-relaxed">
                "We bought the Cream Yellow Crab teether. It's so easy for little hands to hold solo! I love that Infyra follows strict Canadian safety standards."
              </p>
              <div className="pt-3 border-t border-[#E4DCD0] text-xs">
                <p className="font-heading font-extrabold text-[#23313B]">Emily K.</p>
                <p className="text-[11px] font-bold text-[#D97706]">Verified Amazon CA Buyer • Calgary, AB</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Instagram Community Feed */}
      <InstagramFeed />

      {/* Email VIP Lead Subscription Form */}
      <EmailNewsletter />

      {/* Footer */}
      <Footer
        onOpenAnalytics={() => setShowAnalytics(true)}
        onOpenGuide={() => setShowGuide(true)}
      />

      {/* Modals */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {showAnalytics && (
        <AnalyticsDashboard onClose={() => setShowAnalytics(false)} />
      )}

      {/* {showGuide && (
        <FreeStrategyGuideModal onClose={() => setShowGuide(false)} />
      )} */}

    </div>
  );
}
