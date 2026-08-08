import React from 'react';
import { X, Sparkles, Globe, DollarSign, BarChart2, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FreeStrategyGuideModalProps {
  onClose: () => void;
}

export const FreeStrategyGuideModal: React.FC<FreeStrategyGuideModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-white text-slate-800 w-full max-w-4xl rounded-3xl shadow-2xl border border-rose-100 overflow-hidden relative my-8 my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-rose-100 bg-gradient-to-r from-amber-500 via-rose-500 to-pink-600 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 text-white flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black font-serif">Infyra Brand Growth & Free AI Roadmap</h2>
              <p className="text-xs text-rose-100">Connecting infyra.ca (GoDaddy), Free Hosting, Tracking & AI Tools</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-xs sm:text-sm">
          
          {/* Executive Summary Box */}
          <div className="bg-rose-50 p-5 rounded-2xl border border-rose-200/80 space-y-2">
            <h3 className="font-bold text-rose-950 flex items-center gap-2 text-base font-serif">
              <span>🎯 Your Strategy at a Glance</span>
            </h3>
            <p className="text-slate-700 leading-relaxed font-normal">
              You already own <strong className="text-slate-900 font-semibold">infyra.ca</strong> on GoDaddy and have 4 signature baby teethers listed on Amazon Canada. Your goal is to establish a premium, trustworthy web presence, redirect traffic to Amazon, capture visitor click & email data, and keep fixed costs at <strong className="text-emerald-700 font-bold">$0/month</strong> while leveraging AI.
            </p>
          </div>

          {/* Step 1: Free Hosting & Connecting GoDaddy infyra.ca */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-base font-serif flex items-center gap-2">
              <Globe className="w-5 h-5 text-rose-600" />
              <span>Step 1: Free Website Hosting for infyra.ca (0$ Forever)</span>
            </h3>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
              <p className="font-semibold text-slate-800">Best Free Options to Host Your Website:</p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Vercel (Recommended):</strong> Free tier includes unlimited custom domains, automatic SSL certificates, fast CDN, and automated deployments from GitHub.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Cloudflare Pages or Netlify:</strong> Free tier with global DNS management, free SSL, and DDoS protection.</span>
                </li>
              </ul>

              <div className="bg-white p-3 rounded-xl border border-slate-200 mt-3 text-xs space-y-1">
                <p className="font-bold text-slate-800">How to Point infyra.ca in GoDaddy:</p>
                <p className="text-slate-600">1. Log into GoDaddy → DNS Management for <code className="bg-slate-100 px-1 py-0.5 rounded">infyra.ca</code>.</p>
                <p className="text-slate-600">2. Set CNAME record for <code className="bg-slate-100 px-1 py-0.5 rounded">www</code> pointing to Vercel/Cloudflare host.</p>
                <p className="text-slate-600">3. Set A record for <code className="bg-slate-100 px-1 py-0.5 rounded">@</code> to Vercel/Cloudflare IP address.</p>
              </div>
            </div>
          </div>

          {/* Step 2: Capturing Visitor Data & Amazon Attribution */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-base font-serif flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-emerald-600" />
              <span>Step 2: How to Capture Data for Future DTC Launch</span>
            </h3>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-800 text-xs">1. Built-in Analytics (Included Here)</p>
                  <p className="text-xs text-slate-600 mt-1">This website logs every page view, product modal view, and Amazon CA button click. Click "Owner Analytics" at the top to export CSV files for future marketing list import!</p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-800 text-xs">2. Free Google Analytics 4 (GA4)</p>
                  <p className="text-xs text-slate-600 mt-1">Create a free GA4 property for <code className="bg-slate-100 px-1 py-0.5 rounded">infyra.ca</code> to track real-time active users, locations, and referral traffic from Instagram.</p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-800 text-xs">3. Amazon Attribution Links (Free Bonus!)</p>
                  <p className="text-xs text-slate-600 mt-1">Generate free Amazon Attribution links in Seller Central. Amazon will pay you a <strong>~10% Brand Referral Bonus</strong> back on sales generated from infyra.ca traffic!</p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-800 text-xs">4. VIP Parent Email Club</p>
                  <p className="text-xs text-slate-600 mt-1">Collect customer emails for new toy launches, teething guides, and exclusive discount codes when you open your own DTC store later.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Leveraging AI */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-base font-serif flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Step 3: Leveraging AI (Google AI Studio & Gemini)</span>
            </h3>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
              <p className="text-slate-700 leading-relaxed font-normal">
                Use Google AI Studio (free tier) with the prompts codified in your Instagram chat PDF:
              </p>
              <ul className="space-y-1.5 text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span><strong>Scale-Locked Product Photography:</strong> Include exact mm dimensions (117mm x 102mm) to ensure photorealistic scaling.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span><strong>Instagram Reels & Captions:</strong> Generate short, high-converting captions with 5 targeted hashtags (#Infyra, #BabyTeethers, #CanadianMoms).</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-rose-100 bg-rose-50 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all"
          >
            Got It! Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
