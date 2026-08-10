'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from '@/context/ToastContext';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  });

  const router = useRouter();
  const { showToast } = useToast();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.fullName) {
      showToast('Please fill all mandatory fields', 'error');
      return;
    }
    showToast('Account registered! Welcome to the VOSTRA VIP roster', 'success');
    router.push('/account');
  };

  return (
    <div className="bg-[#F7F7F5] text-[#111315] min-h-[85vh] flex items-center justify-center p-4 sm:p-8 select-none">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-white border border-black/10 rounded-[2px] overflow-hidden shadow-xl">
        {/* Left Side: Register Editorial Media */}
        <div className="hidden md:block relative bg-[#F7F7F5]">
          <MediaPlaceholder
            type="portrait"
            aspectRatio="4/5"
            imageUrl="https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&q=80&w=800"
            altText="Join the VOSTRA Guild"
            label="BECOME AN INSIDER // 2026"
            subLabel="EARLY ACCESS • FREE SHIPPING • ARCHIVE DEALS"
            className="w-full h-full min-h-[480px]"
          />
        </div>

        {/* Right Side: Registration Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#C65A28] uppercase font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE VOSTRA GUILD</span>
            </div>
            <h1 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
              CREATE YOUR ACCOUNT
            </h1>
            <p className="text-xs text-[#4A4E54] font-secondary mt-1">
              Gain access to drop countdowns, private archive sales, and rapid checkout.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-3.5">
            <div>
              <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                FULL NAME *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Chirag Vanzara"
                className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] placeholder-[#757A82] rounded-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] placeholder-[#757A82] rounded-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                MOBILE NUMBER
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] placeholder-[#757A82] rounded-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                CHOOSE SECURE PASSWORD *
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono text-[#111315] placeholder-[#757A82] rounded-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-xs py-3 flex items-center justify-center gap-2 mt-3"
            >
              <span>CONFIRM & REGISTER</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="pt-6 border-t border-black/10 text-center space-y-2">
            <p className="text-xs text-[#4A4E54] font-secondary">
              Already have an account?
            </p>
            <Link
              href="/login"
              className="inline-block text-xs font-mono text-[#0E6068] font-bold hover:underline uppercase"
            >
              SIGN IN TO YOUR PASSPORT →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
