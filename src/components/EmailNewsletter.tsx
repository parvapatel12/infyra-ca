import React, { useState } from 'react';
import { FirebaseService } from '../services/firebase';
import { Mail, CheckCircle, Sparkles, Heart } from 'lucide-react';

export const EmailNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{ success?: boolean; message?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(async () => {
      const res = await FirebaseService.addLeadSubscriber(email);
      setStatus(res);
      setLoading(false);
      if (res.success) {
        setEmail('');
      }
    }, 400);
  };

  return (
    <section className="py-16 bg-[#FFFBF6] border-b-2 border-[#E4DCD0] text-[#23313B] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10 space-y-5">
        
        <div className="inline-flex items-center gap-2 bg-[#FDEEEB] px-4 py-1.5 rounded-full text-xs font-extrabold text-[#E5624E] border border-[#F5C2B9] shadow-2xs">
          <Sparkles className="w-4 h-4 text-[#E5624E]" />
          <span>Join the Infyra Family Club 🎉</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#23313B]">
          Stay Connected for Early Access & Baby Care Advice!
        </h2>

        <p className="text-sm sm:text-base text-[#5B6B76] max-w-2xl mx-auto font-semibold leading-relaxed">
          Receive early access to new releases, expert baby care advice, and milestone care guides from our Canadian team.
        </p>

        {/* Lead Capture Form */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-3 pt-2">
          <div className="flex flex-col sm:flex-row items-center gap-2 bg-[#FAF4EC] p-2.5 rounded-3xl border-2 border-[#E4DCD0] shadow-xs">
            <div className="relative w-full flex items-center pl-3">
              <Mail className="w-4 h-4 text-[#54758D] shrink-0" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address..."
                className="w-full px-3 py-2 text-xs sm:text-sm font-semibold text-[#23313B] placeholder-[#8EA1B0] focus:outline-hidden"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto shrink-0 px-8 py-3 bg-[#E5624E] hover:bg-[#D34F3C] text-white font-extrabold text-xs rounded-2xl transition-all shadow-xs border border-[#D34F3C]"
            >
              {loading ? 'Subscribing...' : 'Join Club 💌'}
            </button>
          </div>

          {status.message && (
            <div className={`p-3.5 rounded-2xl text-xs font-extrabold flex items-center justify-center gap-2 ${
              status.success ? 'bg-[#EFF4EE] text-[#2B4B28] border-2 border-[#849C81]' : 'bg-[#FDEEEB] text-[#782318] border-2 border-[#E5624E]'
            }`}>
              {status.success && <CheckCircle className="w-4 h-4 text-[#849C81]" />}
              <span>{status.message}</span>
            </div>
          )}
        </form>

        <p className="text-xs text-[#5B6B76] font-bold flex items-center justify-center gap-1.5 pt-1">
          <Heart className="w-4 h-4 fill-[#E5624E] text-[#E5624E]" />
          <span>Zero spam. Pure care for Canadian parents. Unsubscribe anytime.</span>
        </p>

      </div>
    </section>
  );
};
