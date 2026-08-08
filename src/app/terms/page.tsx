import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      <div className="border-b border-white/10 bg-[#121416]/40 py-10">
        <div className="layout-container max-w-4xl space-y-2">
          <div className="text-xs font-mono text-white/50 tracking-widest uppercase font-bold">
            LEGAL PROTOCOL
          </div>
          <h1 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
            TERMS OF SERVICE & PURCHASE CONDITIONS
          </h1>
          <p className="text-xs sm:text-sm font-secondary text-white/60">
            Terms governing purchases, drop reservations, and digital interactions with VOSTRA.
          </p>
        </div>
      </div>

      <div className="layout-container pt-8 max-w-4xl">
        <div className="p-6 sm:p-8 bg-[#121416] border border-white/10 rounded-sm space-y-4 font-secondary text-xs sm:text-sm text-white/80 leading-relaxed">
          <h3 className="font-primary font-bold uppercase text-white text-base">
            1. LIMITED DROP TERMS
          </h3>
          <p>
            Items marked as LIMITED DROP or EXCLUSIVE CAPSULE are produced in finite numbered runs. Placing an item in the cart does not reserve inventory until checkout confirmation is completed.
          </p>

          <h3 className="font-primary font-bold uppercase text-white text-base pt-2">
            2. INDIAN PRICING & GST COMPLIANCE
          </h3>
          <p>
            All prices listed in INR (₹) are fully inclusive of statutory GST. Invoice documentation is attached automatically to order confirmation emails.
          </p>

          <h3 className="font-primary font-bold uppercase text-white text-base pt-2">
            3. INTELLECTUAL PROPERTY & SILHOUETTE DESIGNS
          </h3>
          <p>
            All architectural patterns, graphics, typographic taglines, and branding marks are the exclusive property of VOSTRA STUDIO.
          </p>
        </div>
      </div>
    </div>
  );
}
