'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, Sparkles, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    fullName: 'Sureshkumar Vanzara',
    email: 'suresh.vanzara@example.com',
    phone: '+91 98765 43210',
    preferredFit: 'Oversized',
    preferredGender: 'Men / Unisex',
    notifyDrops: true,
  });

  const { showToast } = useToast();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Profile specifications updated successfully', 'success');
  };

  return (
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      <div className="border-b border-white/10 bg-[#121416]/40 py-8">
        <div className="layout-container">
          <Link
            href="/account"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-white/50 hover:text-white mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ACCOUNT PORTAL</span>
          </Link>
          <h1 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
            INSIDER PROFILE & PREFERENCES
          </h1>
        </div>
      </div>

      <div className="layout-container pt-8 max-w-2xl">
        <form onSubmit={handleSave} className="p-6 sm:p-8 bg-[#121416] border border-white/10 rounded-sm space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-mono text-white/60 uppercase mb-1">
                FULL NAME
              </label>
              <input
                type="text"
                value={profile.fullName}
                onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-white/60 uppercase mb-1">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-white/60 uppercase mb-1">
                PHONE (FOR INSTANT DROP NOTIFICATIONS)
              </label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-white/60 uppercase mb-1">
                  DEFAULT SILHOUETTE FIT
                </label>
                <select
                  value={profile.preferredFit}
                  onChange={(e) => setProfile({ ...profile, preferredFit: e.target.value })}
                  className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white"
                >
                  <option value="Oversized">OVERSIZED (BOX-FIT)</option>
                  <option value="Relaxed">RELAXED</option>
                  <option value="Regular">REGULAR</option>
                  <option value="Slim">SLIM / SCULPTED</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-white/60 uppercase mb-1">
                  WARDROBE REALM
                </label>
                <select
                  value={profile.preferredGender}
                  onChange={(e) => setProfile({ ...profile, preferredGender: e.target.value })}
                  className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white"
                >
                  <option value="Men / Unisex">MEN / UNISEX</option>
                  <option value="Women / Unisex">WOMEN / UNISEX</option>
                  <option value="All">ALL CHAPTERS</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-primary text-xs py-3.5 flex items-center justify-center gap-2 font-bold"
          >
            <Save className="w-4 h-4" />
            <span>SAVE PROFILE CHANGES</span>
          </button>
        </form>
      </div>
    </div>
  );
}
