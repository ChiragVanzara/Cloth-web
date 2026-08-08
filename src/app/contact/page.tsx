'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useToast } from '@/context/ToastContext';
import { Mail, MessageSquare, Compass, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    subject: 'general',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill out all mandatory fields', 'error');
      return;
    }
    setSubmitted(true);
    showToast('Your message has been sent to our concierge desk', 'success');
  };

  return (
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      <div className="border-b border-white/10 bg-[#121416]/40 py-10">
        <div className="layout-container max-w-4xl space-y-2">
          <div className="text-xs font-mono text-[#1ECAD3] tracking-widest uppercase font-bold">
            CONCIERGE & SUPPORT
          </div>
          <h1 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
            CONTACT VOSTRA STUDIO
          </h1>
          <p className="text-xs sm:text-sm font-secondary text-white/60">
            For sizing consultations, capsule inquiries, wholesale requests, or order tracking support.
          </p>
        </div>
      </div>

      <div className="layout-container pt-10 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#121416] border border-white/10 p-6 sm:p-8 rounded-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-3 font-mono text-xs text-[#1ECAD3]">
                <CheckCircle2 className="w-10 h-10 mx-auto text-[#1ECAD3]" />
                <h3 className="font-primary text-base font-bold text-white uppercase">
                  MESSAGE DISPATCHED
                </h3>
                <p className="text-white/60 font-secondary text-xs">
                  Our concierge team usually responds within 2-4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-white/60 uppercase mb-1">FULL NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#090A0B] border border-white/15 px-3 py-2 text-white rounded-sm focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-white/60 uppercase mb-1">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#090A0B] border border-white/15 px-3 py-2 text-white rounded-sm focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-white/60 uppercase mb-1">ORDER NUMBER (OPTIONAL)</label>
                  <input
                    type="text"
                    value={formData.orderNumber}
                    onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                    placeholder="e.g. VOS-884291"
                    className="w-full bg-[#090A0B] border border-white/15 px-3 py-2 text-white rounded-sm focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-white/60 uppercase mb-1">SUBJECT</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#090A0B] border border-white/15 px-3 py-2 text-white rounded-sm focus:outline-none focus:border-white uppercase"
                  >
                    <option value="general">GENERAL INQUIRY</option>
                    <option value="order">ORDER & DELIVERY SUPPORT</option>
                    <option value="exchange">SIZE EXCHANGE & RETURNS</option>
                    <option value="press">PRESS & EDITORIAL</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/60 uppercase mb-1">MESSAGE *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="HOW MAY WE ASSIST YOUR WARDROBE?"
                    className="w-full bg-[#090A0B] border border-white/15 p-3 text-white rounded-sm focus:outline-none focus:border-white font-secondary text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-xs py-3.5 flex items-center justify-center gap-2 font-bold"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT INQUIRY</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Studio Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6 font-mono text-xs">
            <div className="p-6 bg-[#121416] border border-white/10 rounded-sm space-y-3">
              <span className="text-[#C65A28] font-bold uppercase tracking-widest block">
                DIRECT CHANNELS
              </span>
              <p className="text-white/80">
                <strong className="text-white block">Email Concierge:</strong>
                concierge@vostra.studio
              </p>
              <p className="text-white/80">
                <strong className="text-white block">WhatsApp VIP Hotline:</strong>
                +91 98765 43210 (10:00 - 19:00 IST)
              </p>
            </div>

            <div className="p-6 bg-[#121416] border border-white/10 rounded-sm space-y-2">
              <span className="text-[#C59A3A] font-bold uppercase tracking-widest block">
                STUDIO COORDINATES
              </span>
              <p className="text-white/70">
                VOSTRA ARCHITECTURAL STUDIO<br />
                Tower 4, Arts Guild District<br />
                Mumbai, Maharashtra 400013
              </p>
              <div className="pt-2 text-white/40 text-[10px]">
                28.6139° N, 77.2090° E
              </div>
            </div>

            <div className="p-4 border border-white/10 rounded-sm text-center">
              <Link href="/faq" className="text-xs text-[#1ECAD3] hover:underline uppercase font-bold">
                LOOKING FOR QUICK ANSWERS? VIEW THE FAQ →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
