import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      <div className="border-b border-black/10 bg-white py-10">
        <div className="vostra-container max-w-4xl space-y-2">
          <div className="text-xs font-mono text-[#757A82] tracking-widest uppercase font-bold">
            DATA GOVERNANCE // 2026
          </div>
          <h1 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
            PRIVACY & DATA POLICY
          </h1>
          <p className="text-xs sm:text-sm font-secondary text-[#4A4E54]">
            We value your digital sovereignty. Zero third-party ad tracker resale.
          </p>
        </div>
      </div>

      <div className="vostra-container pt-8 max-w-4xl">
        <div className="p-6 sm:p-8 bg-white border border-black/10 rounded-sm space-y-4 font-secondary text-xs sm:text-sm text-[#4A4E54] leading-relaxed shadow-sm">
          <h3 className="font-primary font-bold uppercase text-[#111315] text-base">
            1. DATA WE COLLECT
          </h3>
          <p>
            When you purchase from VOSTRA Studio, we securely capture your shipping address, email, and mobile contact to coordinate air fulfillment and provide SMS live updates.
          </p>

          <h3 className="font-primary font-bold uppercase text-[#111315] text-base pt-2">
            2. ZERO THIRD-PARTY AD SELLOUT
          </h3>
          <p>
            We will never sell or lease your customer profile to third-party ad brokers or spam networks. Your data stays within our encrypted studio infrastructure.
          </p>

          <h3 className="font-primary font-bold uppercase text-[#111315] text-base pt-2">
            3. COOKIE POLICY & SESSION CONTROL
          </h3>
          <p>
            We use minimal functional cookies to maintain your shopping cart, wishlist selections, and authentication tokens.
          </p>
        </div>
      </div>
    </div>
  );
}
