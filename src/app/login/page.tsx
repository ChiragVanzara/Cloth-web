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
    <div className="bg-[#090A0B] text-white min-h-[85vh] flex items-center justify-center p-4 sm:p-8 select-none">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-[#121416] border border-white/15 rounded-[2px] overflow-hidden shadow-2xl">
        {/* Left Side: Editorial Backdrop Placeholder */}
        <div className="hidden md:block relative">
          <MediaPlaceholder
            type="portrait"
            aspectRatio="4/5"
            gradient="linear-gradient(135deg, #182A3A 0%, #123A3F 50%, #090A0B 100%)"
            label="MEMBER EDITORIAL // AUTUMN 26"
            subLabel="EARLY ACCESS & DROP PRIVILEGES"
            className="w-full h-full min-h-[460px]"
          />
        </div>

        {/* Right Side: Login Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#1ECAD3] uppercase font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VOSTRA PASSPORT</span>
            </div>
            <h1 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
              SIGN IN TO YOUR ACCOUNT
            </h1>
            <p className="text-xs text-white/60 font-secondary mt-1">
              Access order timelines, curated drop invitations, and saved addresses.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[11px] font-mono text-white/60 uppercase mb-1">
                EMAIL ADDRESS
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

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-[11px] font-mono text-white/60 uppercase">
                  PASSWORD
                </label>
                <Link
                  href="/forgot-password"
                  className="text-[10px] font-mono text-[#C65A28] hover:underline uppercase"
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
                  placeholder="••••••••••••"
                  className="w-full bg-[#090A0B] border border-white/15 pl-3.5 pr-10 py-2.5 text-xs font-mono text-white rounded-sm focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-xs py-3.5 flex items-center justify-center gap-2 font-bold"
            >
              <span>SIGN IN</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Social Auth and Register link */}
          <div className="pt-4 border-t border-white/10 space-y-3 text-center">
            <p className="text-xs font-secondary text-white/60">
              New to VOSTRA Studio?{' '}
              <Link href="/register" className="text-[#1ECAD3] hover:underline font-bold font-mono">
                CREATE AN ACCOUNT
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
