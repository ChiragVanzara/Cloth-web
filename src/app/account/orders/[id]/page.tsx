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
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      <div className="border-b border-white/10 bg-[#121416]/40 py-8">
        <div className="layout-container">
          <Link
            href="/account/orders"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-white/50 hover:text-white mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ALL ORDERS</span>
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h1 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
              TRACKING ORDER #{params.id}
            </h1>
            <span className="px-3 py-1 bg-[#123A3F] text-[#1ECAD3] text-xs font-mono font-bold uppercase rounded-sm">
              STATUS: OUT FOR DELIVERY
            </span>
          </div>
        </div>
      </div>

      <div className="layout-container pt-8 max-w-4xl space-y-8">
        {/* Milestone Timeline */}
        <div className="p-6 sm:p-8 bg-[#121416] border border-white/10 rounded-sm space-y-6">
          <h3 className="text-xs font-mono font-bold tracking-widest text-[#1ECAD3] uppercase">
            LIVE LOGISTICS MILESTONES
          </h3>

          <div className="space-y-6 font-mono text-xs">
            {milestones.map((m, idx) => (
              <div key={idx} className="flex items-start gap-4 relative">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                    m.done
                      ? 'bg-[#1ECAD3] text-black font-bold'
                      : m.active
                      ? 'bg-[#C65A28] text-white animate-pulse'
                      : 'bg-white/10 text-white/40'
                  }`}
                >
                  {m.done ? <CheckCircle2 className="w-4 h-4 stroke-[3]" /> : idx + 1}
                </div>

                {idx < milestones.length - 1 && (
                  <div className="absolute left-3 top-6 bottom-[-24px] w-[1px] bg-white/15" />
                )}

                <div className="flex-1 pb-2">
                  <div className={`font-bold uppercase ${m.active ? 'text-[#C65A28]' : m.done ? 'text-white' : 'text-white/40'}`}>
                    {m.title}
                  </div>
                  <div className="text-[11px] text-white/50">{m.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Courier Details */}
        <div className="p-6 bg-[#121416] border border-white/10 rounded-sm text-xs font-mono grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <span className="text-white/50 block">LOGISTICS PARTNER</span>
            <strong className="text-white">Delhivery Air Logistics</strong>
          </div>
          <div>
            <span className="text-white/50 block">AIRWAY BILL (AWB)</span>
            <strong className="text-white">DEL-8892100492</strong>
          </div>
          <div>
            <span className="text-white/50 block">ESTIMATED DROP</span>
            <strong className="text-[#1ECAD3]">TODAY BY 18:00 HRS</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
