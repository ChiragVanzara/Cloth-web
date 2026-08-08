'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useToast } from '@/context/ToastContext';
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const { showToast } = useToast();

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      showToast('Please enter your registered email address', 'error');
      return;
    }
    setSent(true);
    showToast('Password recovery link dispatched!', 'success');
  };

  return (
    <div className="bg-[#090A0B] text-white min-h-[75vh] flex items-center justify-center p-4 select-none">
      <div className="w-full max-w-md bg-[#121416] border border-white/15 p-8 sm:p-10 rounded-[2px] shadow-2xl space-y-6">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-[10px] font-mono uppercase text-white/50 hover:text-white"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO SIGN IN</span>
        </Link>

        <div>
          <div className="text-[10px] font-mono tracking-widest text-[#1ECAD3] uppercase font-bold mb-1">
            ACCOUNT RECOVERY
          </div>
          <h1 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
            RESET PASSWORD
          </h1>
          <p className="text-xs text-white/60 font-secondary mt-1">
            Enter your email address to receive secure reset credentials.
          </p>
        </div>

        {sent ? (
          <div className="p-4 bg-[#123A3F]/50 border border-[#1ECAD3]/40 rounded-sm text-[#1ECAD3] text-xs font-mono uppercase space-y-2">
            <div className="flex items-center gap-2 font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>RECOVERY DISPATCHED</span>
            </div>
            <p className="text-white/80 normal-case font-secondary">
              Check your inbox for a secure token to reset your password.
            </p>
          </div>
        ) : (
          <form onSubmit={handleReset} className="space-y-4">
            <div>
              <label className="block text-[11px] font-mono text-white/60 uppercase mb-1">
                REGISTERED EMAIL
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vip@vostra.studio"
                className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-xs py-3.5 flex items-center justify-center gap-2 font-bold"
            >
              <span>SEND RESET LINK</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
