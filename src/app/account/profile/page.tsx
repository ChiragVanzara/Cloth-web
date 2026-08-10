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
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      <div className="border-b border-black/10 bg-white py-8">
        <div className="vostra-container">
          <Link
            href="/account"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#757A82] hover:text-[#111315] mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ACCOUNT PORTAL</span>
          </Link>
          <h1 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
            INSIDER PROFILE & PREFERENCES
          </h1>
        </div>
      </div>

      <div className="vostra-container pt-8 max-w-2xl">
        <form onSubmit={handleSave} className="p-6 sm:p-8 bg-white border border-black/10 rounded-sm space-y-6 shadow-sm">
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                FULL NAME
              </label>
              <input
                type="text"
                value={profile.fullName}
                onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] rounded-sm focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] rounded-sm focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                PRIMARY PHONE
              </label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] rounded-sm focus:outline-none focus:border-black"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                  PREFERRED SILHOUETTE FIT
                </label>
                <select
                  value={profile.preferredFit}
                  onChange={(e) => setProfile({ ...profile, preferredFit: e.target.value })}
                  className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] rounded-sm focus:outline-none focus:border-black"
                >
                  <option value="Oversized">OVERSIZED / BOXY</option>
                  <option value="Relaxed">RELAXED CASUAL</option>
                  <option value="Straight">STRAIGHT CUT</option>
                  <option value="Slim">SLIM / TAILORED</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                  CATALOG CATEGORY BIAS
                </label>
                <select
                  value={profile.preferredGender}
                  onChange={(e) => setProfile({ ...profile, preferredGender: e.target.value })}
                  className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] rounded-sm focus:outline-none focus:border-black"
                >
                  <option value="Men / Unisex">MEN / UNISEX</option>
                  <option value="Women">WOMEN</option>
                  <option value="All">ALL COLLECTIONS</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-primary text-xs py-3 flex items-center justify-center gap-2"
          >
            <Save className="w-3.5 h-3.5" />
            <span>SAVE PASSPORT SPECIFICATIONS</span>
          </button>
        </form>
      </div>
    </div>
  );
}
