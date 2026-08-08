import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Package, Truck, CheckCircle2 } from 'lucide-react';

export default function OrdersPage() {
  const orders = [
    {
      id: 'VOS-884291',
      date: 'August 04, 2026',
      status: 'In Transit',
      courier: 'Delhivery Express Air',
      trackingNumber: 'DEL-8892100492',
      items: [
        { name: 'HEAVYWEIGHT OVERSIZED ACID TEE', size: 'L', color: 'Graphite Mineral', price: 1499, qty: 1 },
        { name: 'TACTICAL RIPSTOP CARGO JOGGER', size: 'L', color: 'Midnight Onyx', price: 2799, qty: 1 },
      ],
      total: 4298,
    },
    {
      id: 'VOS-719320',
      date: 'July 18, 2026',
      status: 'Delivered',
      courier: 'Blue Dart Aviation',
      trackingNumber: 'BLU-4928100188',
      items: [
        { name: 'RAW JAPANESE SELVEDGE WIDE-LEG JEAN', size: 'M', color: 'Indigo Ink', price: 3499, qty: 1 },
      ],
      total: 3499,
    },
  ];

  return (
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      <div className="border-b border-white/10 bg-[#121416]/40 py-8">
        <div className="layout-container">
          <Link
            href="/account"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-white/50 hover:text-white mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ACCOUNT PORTAL</span>
          </Link>
          <h1 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
            YOUR ORDER HISTORY & TRACKING
          </h1>
        </div>
      </div>

      <div className="layout-container pt-8 max-w-5xl space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="p-6 bg-[#121416] border border-white/10 rounded-sm space-y-4 font-mono text-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/10 gap-2">
              <div className="flex items-center gap-3">
                <span className="font-primary text-base font-bold text-white uppercase">
                  {order.id}
                </span>
                <span
                  className={`px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase ${
                    order.status === 'In Transit'
                      ? 'bg-[#123A3F] text-[#1ECAD3]'
                      : 'bg-white/10 text-white'
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <div className="text-white/50">
                PLACED ON {order.date} • {order.courier}
              </div>
            </div>

            <div className="space-y-2">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex justify-between text-white/80 py-1">
                  <span>
                    {item.name} <span className="text-white/40">({item.size}, {item.color}) x{item.qty}</span>
                  </span>
                  <span className="font-bold text-white">₹{item.price.toLocaleString('en-IN')}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="text-white/50">
                TRACKING: <strong className="text-white">{order.trackingNumber}</strong>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-primary font-bold text-white">
                  TOTAL: ₹{order.total.toLocaleString('en-IN')}
                </span>
                <Link
                  href={`/account/orders/${order.id}`}
                  className="btn-primary text-xs py-2 px-3 flex items-center gap-1"
                >
                  <span>LIVE TRACKING</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
