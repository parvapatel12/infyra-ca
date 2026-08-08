import React, { useState } from 'react';
import { INFYRA_STORY_STOPS } from '../data/infyraLandStory';
import { Palette, Leaf, Cog, ShieldCheck, Search, Package, HeartHandshake, Sparkles, MapPin } from 'lucide-react';

export const InfyraLandStorySection: React.FC = () => {
  const [selectedStopId, setSelectedStopId] = useState<string>(INFYRA_STORY_STOPS[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return <Palette className="w-4 h-4" />;
      case 'Leaf': return <Leaf className="w-4 h-4" />;
      case 'Cog': return <Cog className="w-4 h-4" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4" />;
      case 'Search': return <Search className="w-4 h-4" />;
      case 'Package': return <Package className="w-4 h-4" />;
      case 'HeartHandshake': return <HeartHandshake className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const activeStop = INFYRA_STORY_STOPS.find(s => s.id === selectedStopId) || INFYRA_STORY_STOPS[0];

  return (
    <section id="infyra-land" className="py-16 bg-[#FAF4EC] border-b-2 border-[#E4DCD0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#EBF1F5] text-[#54758D] border-2 border-[#54758D] px-4 py-1.5 rounded-full text-xs font-extrabold shadow-xs">
            <MapPin className="w-4 h-4 text-[#54758D]" />
            <span>Behind The Scenes Journey 🚀</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#23313B]">
            The Road Trip to Infyra Land!
          </h2>

          <p className="text-base text-[#5B6B76] leading-relaxed font-semibold">
            A fun behind-the-scenes journey through our key design milestones, where safety testing, materials research, and infant comfort come together.
          </p>
        </div>

        {/* Story Stops Horizontal Timeline Buttons */}
        <div className="mt-10 overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex items-center gap-3 min-w-max px-2">
            {INFYRA_STORY_STOPS.map((stop) => {
              const isActive = stop.id === selectedStopId;
              return (
                <button
                  key={stop.id}
                  onClick={() => setSelectedStopId(stop.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs font-heading font-extrabold transition-all border-2 ${
                    isActive
                      ? 'bg-[#54758D] text-white border-[#3F5B70] shadow-xs'
                      : 'bg-[#FFFBF6] text-[#23313B] hover:bg-[#EBF1F5] border-[#E4DCD0]'
                  }`}
                >
                  <span className={`p-1.5 rounded-xl ${isActive ? 'bg-white/20 text-white' : 'bg-[#EBF1F5] text-[#54758D]'}`}>
                    {getIcon(stop.iconName)}
                  </span>
                  <span>Stop #{stop.postNumber}: {stop.facilityName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Facility Spotlight Card */}
        <div className="mt-8 bg-[#FFFBF6] rounded-3xl p-6 sm:p-10 border-2 border-[#E4DCD0] shadow-xs relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#FDEEEB] text-[#E5624E] border border-[#F5C2B9] shadow-2xs font-heading">
                Stop #{activeStop.postNumber} Roadmap Facility 📍
              </span>
              <span className="text-xs text-[#5B6B76] font-extrabold uppercase tracking-wider">Infyra World Building</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#23313B]">
              {activeStop.facilityName}
            </h3>

            <p className="text-sm text-[#23313B] leading-relaxed font-semibold bg-[#FAF4EC] p-5 rounded-2xl border-2 border-[#E4DCD0]">
              "{activeStop.story}"
            </p>

            <div className="pt-2">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#E5624E] font-heading">The Aesthetic & Vibe</p>
              <p className="text-sm text-[#23313B] font-bold mt-1">{activeStop.vibe}</p>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#EBF1F5] rounded-3xl p-6 flex flex-col items-center justify-center text-center border-2 border-[#CBD8E1] space-y-3">
            <div className="w-16 h-16 rounded-3xl bg-white text-[#23313B] flex items-center justify-center shadow-xs text-3xl font-bold border-2 border-[#54758D]">
              🧸
            </div>
            <p className="text-xs font-extrabold text-[#54758D] font-heading uppercase tracking-wider">Brand Philosophy</p>
            <p className="text-base font-heading font-extrabold text-[#E5624E]">"cuddle • play • comfort"</p>
            <p className="text-xs text-[#5B6B76] font-semibold leading-relaxed">
              Building a safe, beautiful space for your little ones to grow and explore!
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
