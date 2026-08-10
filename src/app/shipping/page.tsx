import React from 'react';
import Link from 'next/link';
import { Truck, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ShippingPage() {
  return (
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      <div className="border-b border-black/10 bg-white py-10">
        <div className="vostra-container max-w-4xl space-y-2">
          <div className="text-xs font-mono text-[#0E6068] tracking-widest uppercase font-bold">
            DOMESTIC & GLOBAL LOGISTICS
          </div>
          <h1 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
            SHIPPING POLICY & DELIVERY TIMELINES
          </h1>
          <p className="text-xs sm:text-sm font-secondary text-[#4A4E54]">
            Complimentary express air fulfillment across India on all orders exceeding ₹999.
          </p>
        </div>
      </div>

      <div className="vostra-container pt-8 max-w-4xl space-y-8 font-mono text-xs">
        {/* Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 bg-white border border-black/10 rounded-sm space-y-2 shadow-sm">
            <Truck className="w-5 h-5 text-[#0E6068]" />
            <h4 className="font-bold text-[#111315] uppercase">FREE EXPRESS SHIPPING</h4>
            <p className="text-[#4A4E54] text-[11px] font-secondary">Automatic zero-shipping on all orders of ₹999 or higher.</p>
          </div>
          <div className="p-5 bg-white border border-black/10 rounded-sm space-y-2 shadow-sm">
            <Clock className="w-5 h-5 text-[#C65A28]" />
            <h4 className="font-bold text-[#111315] uppercase">2-3 DAY METRO AIR</h4>
            <p className="text-[#4A4E54] text-[11px] font-secondary">Mumbai, Delhi-NCR, Bengaluru, Hyderabad, Chennai, Kolkata.</p>
          </div>
          <div className="p-5 bg-white border border-black/10 rounded-sm space-y-2 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-[#A37A24]" />
            <h4 className="font-bold text-[#111315] uppercase">TAMPER-PROOF PACKAGING</h4>
            <p className="text-[#4A4E54] text-[11px] font-secondary">Sealed in our biodegradable heavy matte charcoal dust bags.</p>
          </div>
        </div>

        {/* Policy Text */}
        <div className="p-6 bg-white border border-black/10 rounded-sm space-y-4 font-secondary text-xs sm:text-sm text-[#4A4E54] leading-relaxed shadow-sm">
          <h3 className="font-primary font-bold uppercase text-[#111315] text-base">
            1. ORDER PROCESSING & DISPATCH
          </h3>
          <p>
            Orders placed before 2:00 PM IST Monday through Saturday are packed and certified at our central fulfillment studio on the same day. Orders placed after 2:00 PM IST are dispatched on the subsequent business morning.
          </p>

          <h3 className="font-primary font-bold uppercase text-[#111315] text-base pt-2">
            2. REAL-TIME SMS & EMAIL LIVE TRACKING
          </h3>
          <p>
            The moment your shipment is handed over to our air logistics partner (Delhivery / Blue Dart), you receive an encrypted SMS and email containing your live tracking identifier and estimated delivery window.
          </p>

          <h3 className="font-primary font-bold uppercase text-[#111315] text-base pt-2">
            3. CASH ON DELIVERY (COD) PROTOCOL
          </h3>
          <p>
            For COD orders, an automatic OTP verification prompt is sent to your registered phone number prior to dispatch. Doorstep payments can be made via exact cash or UPI QR code with the delivery executive.
          </p>
        </div>
      </div>
    </div>
  );
}
