'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isDone, setIsDone] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    setIsDone(true);
    showToast('VIP Drop Invitation sent to your inbox', 'success');
  };

  return (
    <section className="section-spacing select-none bg-[#F7F7F5]">
      <div className="vostra-container">
        <div className="relative overflow-hidden rounded-[2px] border border-black/10 bg-gradient-to-r from-[#EFEFEA] via-[#F4F4EE] to-[#EAEAE4] p-8 sm:p-14 lg:p-16 shadow-lg">
          {/* Background Warm Glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-15"
            style={{
              background: 'radial-gradient(circle at 80% 50%, #C65A28 0%, transparent 60%)',
            }}
          />

          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-sm text-[11px] font-mono tracking-widest text-[#0E6068] uppercase font-bold border border-black/10 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EXCLUSIVE ACCESS // THE VOSTRA GUILD</span>
            </div>

            <h2 className="display-lg text-[#111315] font-primary font-bold uppercase tracking-tight">
              GET THE DROP BEFORE THE WORLD DOES
            </h2>

            <p className="text-sm sm:text-base font-secondary text-[#4A4E54] leading-relaxed">
              Strictly limited quantities. Zero mass reproduction. Enter your email to receive direct private links 15 minutes before seasonal capsule releases.
            </p>

            {isDone ? (
              <div className="flex items-center gap-3 p-4 bg-white border border-[#0E6068]/40 rounded-sm text-[#0E6068] text-xs sm:text-sm font-mono uppercase shadow-sm">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>CONFIRMED // YOU ARE ON THE DROP LIST FOR AUTUMN/WINTER 2026</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL ADDRESS"
                  className="flex-1 bg-white border border-black/15 px-5 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#111315] placeholder-[#757A82] focus:outline-none focus:border-[#111315] transition-colors rounded-sm shadow-sm"
                />
                <button
                  type="submit"
                  className="btn-accent text-xs sm:text-sm flex items-center justify-center gap-2 font-bold whitespace-nowrap"
                >
                  <span>SUBSCRIBE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="flex items-center gap-6 pt-2 text-[10px] font-mono text-[#757A82] uppercase tracking-widest">
              <span>NO SPAM GUARANTEE</span>
              <span>•</span>
              <span>1-CLICK UNSUBSCRIBE</span>
              <span>•</span>
              <span>VIP DISCOUNTS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
