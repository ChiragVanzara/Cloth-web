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
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      <div className="border-b border-black/10 bg-white py-8">
        <div className="vostra-container">
          <Link
            href="/account"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#757A82] hover:text-[#111315] mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ACCOUNT PORTAL</span>
          </Link>
          <h1 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
            YOUR ORDER HISTORY & TRACKING
          </h1>
        </div>
      </div>

      <div className="vostra-container pt-8 max-w-5xl space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="p-6 bg-white border border-black/10 rounded-sm space-y-4 font-mono text-xs shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-black/10 gap-2">
              <div className="flex items-center gap-3">
                <span className="font-primary text-base font-bold text-[#111315] uppercase">
                  {order.id}
                </span>
                <span
                  className={`px-2 py-0.5 text-[10px] font-bold rounded-sm uppercase ${
                    order.status === 'In Transit'
                      ? 'bg-[#E2ECEB] text-[#0E6068]'
                      : 'bg-[#EAEAE4] text-[#111315]'
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <span className="text-[#757A82]">ORDER PLACED: {order.date}</span>
            </div>

            <div className="space-y-2">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-[#111315]">{item.name}</span>
                    <span className="text-[#757A82] ml-2 font-mono">
                      (SIZE: {item.size} • {item.color} • QTY {item.qty})
                    </span>
                  </div>
                  <span className="font-bold text-[#111315]">
                    ₹{(item.price * item.qty).toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#757A82]">
              <div>
                <span>COURIER: {order.courier} • </span>
                <span className="text-[#0E6068] font-bold">{order.trackingNumber}</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-[#111315]">
                  TOTAL: ₹{order.total.toLocaleString('en-IN')}
                </span>
                <Link
                  href={`/account/orders/${order.id}`}
                  className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1"
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
