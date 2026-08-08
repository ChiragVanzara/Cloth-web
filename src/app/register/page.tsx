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
    <div className="bg-[#090A0B] text-white min-h-[85vh] flex items-center justify-center p-4 sm:p-8 select-none">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-[#121416] border border-white/15 rounded-[2px] overflow-hidden shadow-2xl">
        {/* Left Side: Register Editorial Media */}
        <div className="hidden md:block relative">
          <MediaPlaceholder
            type="portrait"
            aspectRatio="4/5"
            gradient="linear-gradient(135deg, #682C21 0%, #121416 60%, #090A0B 100%)"
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
            <h1 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
              CREATE YOUR ACCOUNT
            </h1>
            <p className="text-xs text-white/60 font-secondary mt-1">
              Gain access to drop countdowns, private archive sales, and rapid checkout.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-3.5">
            <div>
              <label className="block text-[11px] font-mono text-white/60 uppercase mb-1">
                FULL NAME *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Sureshkumar Vanzara"
                className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-white/60 uppercase mb-1">
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="vip@vostra.studio"
                className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-white/60 uppercase mb-1">
                MOBILE NUMBER (FOR DROP SMS)
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-white/60 uppercase mb-1">
                SECURE PASSWORD *
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••••••"
                className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono text-white rounded-sm focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-xs py-3.5 flex items-center justify-center gap-2 font-bold mt-2"
            >
              <span>REGISTER ACCOUNT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="pt-3 border-t border-white/10 text-center">
            <p className="text-xs font-secondary text-white/60">
              Already have an account?{' '}
              <Link href="/login" className="text-[#C65A28] hover:underline font-bold font-mono">
                SIGN IN HERE
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
