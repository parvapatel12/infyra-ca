import React from 'react';
import { INSTAGRAM_POSTS } from '../data/instagramPosts';
import { AnalyticsService } from '../services/analytics';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  const handleInstagramClick = () => {
    AnalyticsService.trackEvent('instagram_click', { targetUrl: 'https://instagram.com/infyra' });
    window.open('https://instagram.com', '_blank');
  };

  return (
    <section className="py-16 bg-[#FAF4EC] border-b-2 border-[#E4DCD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b-2 border-[#E4DCD0]">
          <div>
            <div className="flex items-center gap-2 text-xs font-heading font-extrabold text-[#E5624E] bg-[#FDEEEB] px-3 py-1 rounded-full w-fit shadow-2xs border border-[#F5C2B9]">
              <Instagram className="w-4 h-4 text-[#E5624E]" />
              <span>@infyra.ca on Instagram 📸</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#23313B] mt-2">
              Follow Our Joyful Journey!
            </h2>
            <p className="text-sm text-[#5B6B76] mt-1 font-semibold">
              Gentle moments, baby care tips, and behind-the-scenes stories from Canadian parents.
            </p>
          </div>

          <button
            onClick={handleInstagramClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E5624E] hover:bg-[#D34F3C] text-white font-extrabold text-xs rounded-2xl transition-all shadow-xs border-2 border-[#D34F3C]"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @infyra.ca</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/90" />
          </button>
        </div>

        {/* Post Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={handleInstagramClick}
              className="group cursor-pointer bg-[#FFFBF6] rounded-3xl p-5 border-2 border-[#E4DCD0] hover:border-[#54758D] transition-all shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-heading font-extrabold text-[#54758D] bg-[#EBF1F5] px-3 py-0.5 rounded-full border border-[#CBD8E1] shadow-2xs">
                    Post #{post.id} • {post.postType}
                  </span>
                  <span className="text-xs font-bold text-[#5B6B76]">{post.date}</span>
                </div>

                <h3 className="text-lg font-heading font-extrabold text-[#23313B] group-hover:text-[#E5624E] transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs text-[#5B6B76] line-clamp-3 leading-relaxed font-semibold">
                  {post.caption}
                </p>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.hashtags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-bold text-[#849C81] bg-[#EFF4EE] px-2.5 py-0.5 rounded-full border border-[#849C81]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engagement Bar */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t-2 border-[#E4DCD0] text-xs text-[#5B6B76]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 font-bold text-[#E5624E]">
                    <Heart className="w-4 h-4 fill-[#E5624E] text-[#E5624E]" />
                    <span>Liked</span>
                  </span>
                  <span className="flex items-center gap-1 font-bold text-[#5B6B76]">
                    <MessageCircle className="w-4 h-4 text-[#54758D]" />
                    <span>Community</span>
                  </span>
                </div>

                <span className="text-xs font-heading font-extrabold text-[#54758D] group-hover:underline flex items-center gap-1">
                  <span>View Post</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
