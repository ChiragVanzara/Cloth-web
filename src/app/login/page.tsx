'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from '@/context/ToastContext';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { ArrowRight, Eye, EyeOff, Lock, User, Sparkles } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { showToast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      showToast('Please enter both email and password', 'error');
      return;
    }
    showToast('Signed in successfully! Welcome to VOSTRA Studio', 'success');
    router.push('/account');
  };

  return (
    <div className="bg-[#F7F7F5] text-[#111315] min-h-[85vh] flex items-center justify-center p-4 sm:p-8 select-none">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-white border border-black/10 rounded-[2px] overflow-hidden shadow-xl">
        {/* Left Side: Editorial Backdrop Placeholder */}
        <div className="hidden md:block relative bg-[#F7F7F5]">
          <MediaPlaceholder
            type="portrait"
            aspectRatio="4/5"
            imageUrl="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800"
            altText="Member Editorial"
            label="MEMBER EDITORIAL // AUTUMN 26"
            subLabel="EARLY ACCESS & DROP PRIVILEGES"
            className="w-full h-full min-h-[460px]"
          />
        </div>

        {/* Right Side: Login Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#0E6068] uppercase font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VOSTRA PASSPORT</span>
            </div>
            <h1 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
              SIGN IN TO YOUR ACCOUNT
            </h1>
            <p className="text-xs text-[#4A4E54] font-secondary mt-1">
              Access order timelines, curated drop invitations, and saved addresses.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                EMAIL ADDRESS
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

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-mono text-[#4A4E54] uppercase">
                  PASSWORD
                </label>
                <Link
                  href="/forgot-password"
                  className="text-[10px] font-mono text-[#0E6068] hover:underline uppercase font-bold"
                >
                  FORGOT PASSWORD?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#F7F7F5] border border-black/15 pl-3.5 pr-10 py-2.5 text-xs font-mono text-[#111315] placeholder-[#757A82] rounded-sm focus:outline-none focus:border-black transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#757A82] hover:text-[#111315]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-xs py-3 flex items-center justify-center gap-2 mt-2"
            >
              <span>ACCESS ACCOUNT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="pt-6 border-t border-black/10 text-center space-y-2">
            <p className="text-xs text-[#4A4E54] font-secondary">
              Don't have a VOSTRA Passport?
            </p>
            <Link
              href="/register"
              className="inline-block text-xs font-mono text-[#0E6068] font-bold hover:underline uppercase"
            >
              CREATE AN ACCOUNT NOW →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
