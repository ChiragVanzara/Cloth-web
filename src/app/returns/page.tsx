import React from 'react';
import Link from 'next/link';
import { RotateCcw, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ReturnsPage() {
  return (
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      <div className="border-b border-white/10 bg-[#121416]/40 py-10">
        <div className="layout-container max-w-4xl space-y-2">
          <div className="text-xs font-mono text-[#C65A28] tracking-widest uppercase font-bold">
            DOORSTEP REVERSE LOGISTICS
          </div>
          <h1 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
            7-DAY HASSLE-FREE RETURNS & SIZE EXCHANGES
          </h1>
          <p className="text-xs sm:text-sm font-secondary text-white/60">
            If your fit is slightly off or you wish to exchange a drop piece, we collect directly from your doorstep.
          </p>
        </div>
      </div>

      <div className="layout-container pt-8 max-w-4xl space-y-6">
        <div className="p-6 bg-[#121416] border border-white/10 rounded-sm space-y-4 font-secondary text-xs sm:text-sm text-white/80 leading-relaxed">
          <h3 className="font-primary font-bold uppercase text-white text-base">
            1. THE 7-DAY EXCHANGE WINDOW
          </h3>
          <p>
            You have 7 full calendar days from the date of confirmed delivery to initiate a doorstep size exchange or return. All original fabric tags, security seals, and the signature matte dust bag must remain intact and unwashed.
          </p>

          <h3 className="font-primary font-bold uppercase text-white text-base pt-2">
            2. ZERO RETURN FEE FOR SIZE EXCHANGES
          </h3>
          <p>
            Exchanges for another size or store credit carry zero reverse shipping fees. Our courier agent will arrive with the replacement piece and pick up the original simultaneously in metro regions.
          </p>

          <h3 className="font-primary font-bold uppercase text-white text-base pt-2">
            3. INSTANT REFUNDS
          </h3>
          <p>
            Once our studio quality control certifies that the garment is unworn, prepaid UPI / Card refunds are processed back to the original source within 24-48 hours.
          </p>
        </div>

        <div className="p-6 bg-[#121416] border border-white/10 rounded-sm flex items-center justify-between">
          <span className="font-mono text-xs text-white">READY TO INITIATE A REVERSE PICKUP?</span>
          <Link href="/account/orders" className="btn-primary text-xs">
            MANAGE IN ACCOUNT
          </Link>
        </div>
      </div>
    </div>
  );
}
