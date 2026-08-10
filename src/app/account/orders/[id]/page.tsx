import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Truck, Package, Clock, ShieldCheck } from 'lucide-react';

interface Props {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return [{ id: 'VOS-884291' }, { id: 'VOS-719320' }];
}

export default function OrderTrackingPage({ params }: Props) {
  const milestones = [
    { title: 'ORDER RECEIVED & FABRIC CERTIFIED', time: 'Aug 04, 11:30 AM', done: true },
    { title: 'QUALITY CONTROL INSPECTED & PACKED', time: 'Aug 04, 04:15 PM', done: true },
    { title: 'DISPATCHED VIA AIR EXPRESS', time: 'Aug 05, 08:20 AM', done: true },
    { title: 'ARRIVED AT DESTINATION HUB (MUMBAI)', time: 'Aug 06, 02:40 PM', done: true },
    { title: 'OUT FOR DOORSTEP DELIVERY', time: 'TODAY // ESTIMATED BY 6 PM', done: false, active: true },
    { title: 'DELIVERED', time: 'PENDING', done: false },
  ];

  return (
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      <div className="border-b border-black/10 bg-white py-8">
        <div className="vostra-container">
          <Link
            href="/account/orders"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#757A82] hover:text-[#111315] mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ALL ORDERS</span>
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h1 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
              TRACKING ORDER #{params.id}
            </h1>
            <span className="px-3 py-1 bg-[#E2ECEB] text-[#0E6068] text-xs font-mono font-bold uppercase rounded-sm">
              STATUS: OUT FOR DELIVERY
            </span>
          </div>
        </div>
      </div>

      <div className="vostra-container pt-8 max-w-4xl space-y-8">
        {/* Milestone Timeline */}
        <div className="p-6 sm:p-8 bg-white border border-black/10 rounded-sm space-y-6 shadow-sm">
          <h3 className="text-xs font-mono font-bold tracking-widest text-[#0E6068] uppercase">
            LIVE LOGISTICS MILESTONES
          </h3>

          <div className="space-y-6 font-mono text-xs">
            {milestones.map((m, idx) => (
              <div key={idx} className="flex items-start gap-4 relative">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                    m.done
                      ? 'bg-[#0E6068] text-white font-bold'
                      : m.active
                      ? 'bg-[#C65A28] text-white animate-pulse'
                      : 'bg-black/10 text-[#757A82]'
                  }`}
                >
                  {m.done ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                </div>

                <div className="space-y-0.5 flex-1">
                  <div className="font-bold text-[#111315] uppercase tracking-wide">
                    {m.title}
                  </div>
                  <div className="text-[11px] text-[#757A82]">{m.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Courier Support Details */}
        <div className="p-6 bg-white border border-black/10 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1 font-mono text-xs text-[#757A82]">
            <span className="font-bold text-[#111315] uppercase block">
              COURIER PARTNER: DELHIVERY EXPRESS AIR
            </span>
            <p>AWB WAYBILL NO: #DEL-8892100492 • OTP REQUIRED AT DELIVERY</p>
          </div>

          <Link href="/contact" className="btn-secondary text-xs">
            CONTACT CONCIERGE DESK
          </Link>
        </div>
      </div>
    </div>
  );
}
