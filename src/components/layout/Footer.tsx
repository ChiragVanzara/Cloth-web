'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Truck, RotateCcw, Sparkles } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please provide a valid email address', 'error');
      return;
    }
    setIsSubscribed(true);
    showToast('You are on the VIP drop list. Welcome to VOSTRA.', 'success');
  };

  return (
    <footer className="bg-[#EFEFEA] border-t border-black/10 text-[#111315] pt-16 pb-12 mt-24 select-none">
      {/* Brand Value Props Strip */}
      <div className="vostra-container pb-12 mb-12 border-b border-black/[0.08] grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start gap-4 p-5 bg-white border border-black/5 rounded-sm shadow-sm">
          <Truck className="w-6 h-6 text-[#0E6068] flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-[#111315]">
              COMPLIMENTARY SHIPPING
            </h4>
            <p className="text-[11px] font-secondary text-[#4A4E54]">
              On all domestic orders exceeding ₹999 with carbon-neutral transit.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 bg-white border border-black/5 rounded-sm shadow-sm">
          <RotateCcw className="w-6 h-6 text-[#C65A28] flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-[#111315]">
              7-DAY EFFORTLESS RETURNS
            </h4>
            <p className="text-[11px] font-secondary text-[#4A4E54]">
              Complimentary doorstep reverse pickup for seamless size exchanges.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 bg-white border border-black/5 rounded-sm shadow-sm">
          <ShieldCheck className="w-6 h-6 text-[#A37A24] flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-[#111315]">
              PROPRIETARY GSM STANDARDS
            </h4>
            <p className="text-[11px] font-secondary text-[#4A4E54]">
              Custom combed 280-450 GSM jerseys engineered to resist wear and tear.
            </p>
          </div>
        </div>
      </div>

      <div className="vostra-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-black/[0.08]">
          {/* Newsletter Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C65A28] uppercase font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE DROP LIST</span>
            </div>
            <h3 className="font-primary text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#111315]">
              GET EARLY ACCESS TO LIMITED DROPS
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4E54] font-secondary max-w-md leading-relaxed">
              Join 45,000+ fashion insiders. Receive instant alerts for limited capsule drops, secret archive sales, and runway lookbooks before public releases.
            </p>

            {isSubscribed ? (
              <div className="flex items-center gap-2 p-3.5 bg-white border border-[#0E6068]/40 rounded-sm text-[#0E6068] text-xs font-mono uppercase shadow-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>ACCESS GRANTED // CHECK YOUR INBOX FOR VIP PASS</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL ADDRESS"
                  className="flex-1 bg-white border border-black/15 px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#111315] placeholder-[#757A82] focus:outline-none focus:border-[#111315] transition-colors rounded-sm shadow-sm"
                />
                <button
                  type="submit"
                  className="btn-primary text-xs flex items-center gap-2 px-6"
                >
                  <span>JOIN</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <p className="text-[10px] font-mono text-[#757A82]">
              BY SUBSCRIBING YOU AGREE TO OUR PRIVACY POLICY. NO SPAM, ZERO CLUTTER.
            </p>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs font-mono">
            {/* Column 1: Shop */}
            <div className="space-y-3">
              <h5 className="text-[11px] font-bold text-[#111315] tracking-widest uppercase border-b border-black/10 pb-2">
                COLLECTIONS
              </h5>
              <ul className="space-y-2 text-[#4A4E54]">
                <li><Link href="/men" className="hover:text-[#111315] transition-colors">MEN</Link></li>
                <li><Link href="/women" className="hover:text-[#111315] transition-colors">WOMEN</Link></li>
                <li><Link href="/new-arrivals" className="hover:text-[#111315] transition-colors">NEW ARRIVALS</Link></li>
                <li><Link href="/collections/streetwear" className="hover:text-[#111315] transition-colors">STREETWEAR</Link></li>
                <li><Link href="/collections/denim" className="hover:text-[#111315] transition-colors">RAW DENIM</Link></li>
                <li><Link href="/collections/essentials" className="hover:text-[#111315] transition-colors">ESSENTIALS</Link></li>
                <li><Link href="/shop?sale=true" className="text-[#C65A28] hover:text-[#a84417] transition-colors font-bold">SALE (-40%)</Link></li>
              </ul>
            </div>

            {/* Column 2: About */}
            <div className="space-y-3">
              <h5 className="text-[11px] font-bold text-[#111315] tracking-widest uppercase border-b border-black/10 pb-2">
                STUDIO
              </h5>
              <ul className="space-y-2 text-[#4A4E54]">
                <li><Link href="/about" className="hover:text-[#111315] transition-colors">OUR STORY</Link></li>
                <li><Link href="/about" className="hover:text-[#111315] transition-colors">PHILOSOPHY</Link></li>
                <li><Link href="/about" className="hover:text-[#111315] transition-colors">FABRIC RESEARCH</Link></li>
                <li><Link href="/collections" className="hover:text-[#111315] transition-colors">LOOKBOOKS</Link></li>
                <li><Link href="/contact" className="hover:text-[#111315] transition-colors">PRESS & EDITORIAL</Link></li>
              </ul>
            </div>

            {/* Column 3: Help */}
            <div className="space-y-3">
              <h5 className="text-[11px] font-bold text-[#111315] tracking-widest uppercase border-b border-black/10 pb-2">
                ASSISTANCE
              </h5>
              <ul className="space-y-2 text-[#4A4E54]">
                <li><Link href="/shipping" className="hover:text-[#111315] transition-colors">SHIPPING & LOGISTICS</Link></li>
                <li><Link href="/returns" className="hover:text-[#111315] transition-colors">RETURNS & EXCHANGES</Link></li>
                <li><Link href="/faq" className="hover:text-[#111315] transition-colors">FAQS</Link></li>
                <li><Link href="/contact" className="hover:text-[#111315] transition-colors">CONTACT CONCIERGE</Link></li>
                <li><Link href="/privacy" className="hover:text-[#111315] transition-colors">PRIVACY POLICY</Link></li>
                <li><Link href="/terms" className="hover:text-[#111315] transition-colors">TERMS OF SERVICE</Link></li>
              </ul>
            </div>

            {/* Column 4: Social */}
            <div className="space-y-3">
              <h5 className="text-[11px] font-bold text-[#111315] tracking-widest uppercase border-b border-black/10 pb-2">
                CONNECT
              </h5>
              <ul className="space-y-2 text-[#4A4E54]">
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#111315] transition-colors">INSTAGRAM</a></li>
                <li><a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-[#111315] transition-colors">PINTEREST</a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#111315] transition-colors">YOUTUBE</a></li>
                <li><a href="https://spotify.com" target="_blank" rel="noreferrer" className="hover:text-[#111315] transition-colors">STUDIO PLAYLIST</a></li>
                <li><Link href="/account" className="hover:text-[#111315] transition-colors">ACCOUNT PORTAL</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Coordinates */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#757A82]">
          <div className="flex items-center gap-4">
            <span className="font-bold text-[#111315]">VOSTRA STUDIO &copy; 2026</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          <div className="flex items-center gap-6">
            <span>28.6139° N, 77.2090° E</span>
            <span>DOMESTIC CURRENCY: INR (₹)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
