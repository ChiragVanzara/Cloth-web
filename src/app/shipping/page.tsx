import React from 'react';
import Link from 'next/link';
import { Truck, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ShippingPage() {
  return (
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      <div className="border-b border-white/10 bg-[#121416]/40 py-10">
        <div className="layout-container max-w-4xl space-y-2">
          <div className="text-xs font-mono text-[#1ECAD3] tracking-widest uppercase font-bold">
            DOMESTIC & GLOBAL LOGISTICS
          </div>
          <h1 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
            SHIPPING POLICY & DELIVERY TIMELINES
          </h1>
          <p className="text-xs sm:text-sm font-secondary text-white/60">
            Complimentary express air fulfillment across India on all orders exceeding ₹999.
          </p>
        </div>
      </div>

      <div className="layout-container pt-8 max-w-4xl space-y-8 font-mono text-xs">
        {/* Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 bg-[#121416] border border-white/10 rounded-sm space-y-2">
            <Truck className="w-5 h-5 text-[#1ECAD3]" />
            <h4 className="font-bold text-white uppercase">FREE EXPRESS SHIPPING</h4>
            <p className="text-white/60 text-[11px] font-secondary">Automatic zero-shipping on all orders of ₹999 or higher.</p>
          </div>
          <div className="p-5 bg-[#121416] border border-white/10 rounded-sm space-y-2">
            <Clock className="w-5 h-5 text-[#C65A28]" />
            <h4 className="font-bold text-white uppercase">2-3 DAY METRO AIR</h4>
            <p className="text-white/60 text-[11px] font-secondary">Mumbai, Delhi-NCR, Bengaluru, Hyderabad, Chennai, Kolkata.</p>
          </div>
          <div className="p-5 bg-[#121416] border border-white/10 rounded-sm space-y-2">
            <ShieldCheck className="w-5 h-5 text-[#C59A3A]" />
            <h4 className="font-bold text-white uppercase">TAMPER-PROOF PACKAGING</h4>
            <p className="text-white/60 text-[11px] font-secondary">Sealed in our biodegradable heavy matte charcoal dust bags.</p>
          </div>
        </div>

        {/* Policy Text */}
        <div className="p-6 bg-[#121416] border border-white/10 rounded-sm space-y-4 font-secondary text-xs sm:text-sm text-white/80 leading-relaxed">
          <h3 className="font-primary font-bold uppercase text-white text-base">
            1. ORDER PROCESSING & DISPATCH
          </h3>
          <p>
            Orders placed before 2:00 PM IST Monday through Saturday are packed and certified at our central fulfillment studio on the same day. Orders placed after 2:00 PM IST are dispatched on the subsequent business morning.
          </p>

          <h3 className="font-primary font-bold uppercase text-white text-base pt-2">
            2. REAL-TIME SMS & EMAIL LIVE TRACKING
          </h3>
          <p>
            The moment your shipment is handed over to our air logistics partner (Delhivery / Blue Dart), you receive an encrypted SMS and email containing your live tracking identifier and estimated delivery window.
          </p>

          <h3 className="font-primary font-bold uppercase text-white text-base pt-2">
            3. CASH ON DELIVERY (COD) PROTOCOL
          </h3>
          <p>
            Cash on delivery is available for orders up to ₹7,500. A nominal COD verification SMS is dispatched prior to delivery to ensure accurate doorstep delivery coordination.
          </p>
        </div>
      </div>
    </div>
  );
}
