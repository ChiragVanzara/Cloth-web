import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      <div className="border-b border-black/10 bg-white py-10">
        <div className="vostra-container max-w-4xl space-y-2">
          <div className="text-xs font-mono text-[#757A82] tracking-widest uppercase font-bold">
            LEGAL PROTOCOL
          </div>
          <h1 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
            TERMS OF SERVICE & PURCHASE CONDITIONS
          </h1>
          <p className="text-xs sm:text-sm font-secondary text-[#4A4E54]">
            Terms governing purchases, drop reservations, and digital interactions with VOSTRA.
          </p>
        </div>
      </div>

      <div className="vostra-container pt-8 max-w-4xl">
        <div className="p-6 sm:p-8 bg-white border border-black/10 rounded-sm space-y-4 font-secondary text-xs sm:text-sm text-[#4A4E54] leading-relaxed shadow-sm">
          <h3 className="font-primary font-bold uppercase text-[#111315] text-base">
            1. LIMITED DROP TERMS
          </h3>
          <p>
            Items marked as LIMITED DROP or EXCLUSIVE CAPSULE are produced in finite numbered runs. Placing an item in the cart does not reserve inventory until checkout confirmation is completed.
          </p>

          <h3 className="font-primary font-bold uppercase text-[#111315] text-base pt-2">
            2. INDIAN PRICING & GST COMPLIANCE
          </h3>
          <p>
            All prices listed in INR (₹) are fully inclusive of statutory GST. Invoice documentation is attached automatically to order confirmation emails.
          </p>

          <h3 className="font-primary font-bold uppercase text-[#111315] text-base pt-2">
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
