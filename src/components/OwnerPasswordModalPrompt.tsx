import React, { useState } from 'react';
import { Lock, X } from 'lucide-react';

interface OwnerPasswordModalProps {
  onSuccess: () => void;
  onClose: () => void;
}

export const OwnerPasswordModal: React.FC<OwnerPasswordModalProps> = ({ onSuccess, onClose }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set your secure owner password here
    if (password === (import.meta as any).env.VITE_OWNER_PASSWORD) { 
      onSuccess();
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 text-white w-full max-w-sm p-6 rounded-3xl border border-slate-700 shadow-2xl space-y-4 relative">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <Lock className="w-4 h-4" />
            <span>Store Owner Access</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1">
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-400">
          Enter your owner password to view store analytics and leads.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            placeholder="Enter password..."
            autoFocus
            className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
          />

          {error && (
            <p className="text-[11px] text-rose-400 font-medium">Incorrect password. Please try again.</p>
          )}

          <button
            type="submit"
            className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition shadow-xs"
          >
            Authenticate
          </button>
        </form>

      </div>
    </div>
  );
};