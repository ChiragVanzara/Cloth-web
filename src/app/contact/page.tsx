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
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      <div className="border-b border-black/10 bg-white py-10">
        <div className="vostra-container max-w-4xl space-y-2">
          <div className="text-xs font-mono text-[#0E6068] tracking-widest uppercase font-bold">
            CONCIERGE & SUPPORT
          </div>
          <h1 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
            CONTACT VOSTRA STUDIO
          </h1>
          <p className="text-xs sm:text-sm font-secondary text-[#4A4E54]">
            For sizing consultations, capsule inquiries, wholesale requests, or order tracking support.
          </p>
        </div>
      </div>

      <div className="vostra-container pt-10 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-black/10 p-6 sm:p-8 rounded-sm shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-3 font-mono text-xs text-[#0E6068]">
                <CheckCircle2 className="w-10 h-10 mx-auto text-[#0E6068]" />
                <h3 className="font-primary text-base font-bold text-[#111315] uppercase">
                  MESSAGE DISPATCHED
                </h3>
                <p className="text-[#4A4E54] font-secondary text-xs">
                  Our concierge team usually responds within 2-4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F7F7F5] border border-black/15 px-3 py-2 text-[#111315] rounded-sm focus:outline-none focus:border-black"
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
                    className="w-full bg-[#F7F7F5] border border-black/15 px-3 py-2 text-[#111315] rounded-sm focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                    ORDER REFERENCE (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. VST-849201"
                    value={formData.orderNumber}
                    onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                    className="w-full bg-[#F7F7F5] border border-black/15 px-3 py-2 text-[#111315] rounded-sm focus:outline-none focus:border-black uppercase"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                    INQUIRY CATEGORY
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#F7F7F5] border border-black/15 px-3 py-2 text-[#111315] rounded-sm focus:outline-none focus:border-black text-xs font-mono uppercase"
                  >
                    <option value="general">GENERAL INQUIRY</option>
                    <option value="order">ORDER & LOGISTICS TRACKING</option>
                    <option value="exchange">RETURN OR SIZE EXCHANGE</option>
                    <option value="collaboration">EDITORIAL / BRAND COLLABORATION</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                    MESSAGE / INQUIRY DETAILS *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F7F7F5] border border-black/15 p-3 text-[#111315] rounded-sm focus:outline-none focus:border-black font-secondary text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-xs py-3 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT MESSAGE</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Studio Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-white border border-black/10 rounded-sm space-y-4 shadow-sm">
              <h3 className="font-primary text-sm font-bold uppercase tracking-wider text-[#111315]">
                DIRECT STUDIO CHANNELS
              </h3>

              <div className="space-y-3 text-xs font-mono text-[#4A4E54]">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#0E6068] mt-0.5" />
                  <div>
                    <strong className="text-[#111315] block">ELECTRONIC DESK:</strong>
                    <span>support@vostra-studio.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass className="w-4 h-4 text-[#0E6068] mt-0.5" />
                  <div>
                    <strong className="text-[#111315] block">STUDIO & LOGISTICS HUB:</strong>
                    <span>Plot 42, Okhla Industrial Area Phase III, New Delhi 110020, India</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-black/10">
                <span className="text-[10px] font-mono text-[#757A82] uppercase block">
                  CLIENT DESK HOURS: MON–SAT (10:00 AM – 7:00 PM IST)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
