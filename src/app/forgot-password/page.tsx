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
    <div className="bg-[#F7F7F5] text-[#111315] min-h-[75vh] flex items-center justify-center p-4 select-none">
      <div className="w-full max-w-md bg-white border border-black/10 p-8 sm:p-10 rounded-[2px] shadow-xl space-y-6">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-[10px] font-mono uppercase text-[#757A82] hover:text-[#111315]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO SIGN IN</span>
        </Link>

        <div>
          <div className="text-[10px] font-mono tracking-widest text-[#0E6068] uppercase font-bold mb-1">
            ACCOUNT RECOVERY
          </div>
          <h1 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
            RESET PASSWORD
          </h1>
          <p className="text-xs text-[#4A4E54] font-secondary mt-1">
            Enter your email address to receive secure reset credentials.
          </p>
        </div>

        {sent ? (
          <div className="p-4 bg-[#E2ECEB] border border-[#0E6068]/40 rounded-sm text-[#0E6068] text-xs font-mono uppercase space-y-2">
            <div className="flex items-center gap-2 font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>RECOVERY DISPATCHED</span>
            </div>
            <p className="text-[#4A4E54] normal-case font-secondary">
              Check your inbox for a secure token to reset your password.
            </p>
          </div>
        ) : (
          <form onSubmit={handleReset} className="space-y-4">
            <div>
              <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                REGISTERED EMAIL
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] placeholder-[#757A82] rounded-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-xs py-3 flex items-center justify-center gap-2"
            >
              <span>SEND RECOVERY EMAIL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
