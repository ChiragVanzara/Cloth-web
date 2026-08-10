'use client';

import React from 'react';
import Link from 'next/link';
import { Package, User, MapPin, Heart, ArrowRight, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';

export default function AccountPage() {
  const { totalWishlistItems } = useWishlist();

  const recentOrders = [
    {
      id: 'VOS-884291',
      date: 'Aug 04, 2026',
      status: 'In Transit',
      itemsCount: 2,
      total: 4298,
      tracking: 'DELHIVERY #88921004',
    },
    {
      id: 'VOS-719320',
      date: 'Jul 18, 2026',
      status: 'Delivered',
      itemsCount: 1,
      total: 3499,
      tracking: 'BLUEDART #49281001',
    },
  ];

  return (
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      {/* Header */}
      <div className="border-b border-black/10 bg-white py-8">
        <div className="vostra-container flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#0E6068] tracking-widest uppercase font-bold">
              VIP MEMBER PASSPORT // ID: #VOS-9942
            </div>
            <h1 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
              WELCOME BACK, SURESHKUMAR
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#E2ECEB] border border-[#0E6068]/30 rounded-sm text-[#0E6068] text-xs font-mono uppercase font-bold">
              TIER: PLATINUM INSIDER
            </span>
          </div>
        </div>
      </div>

      <div className="vostra-container pt-8">
        {/* Quick Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <Link
            href="/account/orders"
            className="p-5 bg-white border border-black/10 hover:border-black/30 rounded-sm flex items-center justify-between group transition-all shadow-sm"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#757A82] uppercase font-bold">ACTIVE ORDERS</span>
              <div className="text-xl font-primary font-bold text-[#111315]">2 ORDERS</div>
            </div>
            <Package className="w-6 h-6 text-[#0E6068]" />
          </Link>

          <Link
            href="/wishlist"
            className="p-5 bg-white border border-black/10 hover:border-black/30 rounded-sm flex items-center justify-between group transition-all shadow-sm"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#757A82] uppercase font-bold">WISHLIST PIECES</span>
              <div className="text-xl font-primary font-bold text-[#111315]">{totalWishlistItems} SAVED</div>
            </div>
            <Heart className="w-6 h-6 text-[#C65A28]" />
          </Link>

          <Link
            href="/account/addresses"
            className="p-5 bg-white border border-black/10 hover:border-black/30 rounded-sm flex items-center justify-between group transition-all shadow-sm"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#757A82] uppercase font-bold">SAVED ADDRESSES</span>
              <div className="text-xl font-primary font-bold text-[#111315]">2 LOCATIONS</div>
            </div>
            <MapPin className="w-6 h-6 text-[#A37A24]" />
          </Link>

          <Link
            href="/account/profile"
            className="p-5 bg-white border border-black/10 hover:border-black/30 rounded-sm flex items-center justify-between group transition-all shadow-sm"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#757A82] uppercase font-bold">PASSPORT PROFILE</span>
              <div className="text-xl font-primary font-bold text-[#111315]">100% COMPLETE</div>
            </div>
            <User className="w-6 h-6 text-[#0E6068]" />
          </Link>
        </div>

        {/* Recent Orders Overview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-black/10">
            <h2 className="heading-md text-[#111315] font-primary font-bold uppercase tracking-tight">
              RECENT ORDERS
            </h2>
            <Link
              href="/account/orders"
              className="text-xs font-mono text-[#0E6068] hover:underline uppercase font-bold"
            >
              VIEW ALL ORDERS →
            </Link>
          </div>

          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="p-5 bg-white border border-black/10 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm"
              >
                <div className="space-y-1 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <strong className="text-sm text-[#111315]">{order.id}</strong>
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
                  <p className="text-[#757A82]">
                    {order.date} • {order.itemsCount} ITEMS • {order.tracking}
                  </p>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                  <span className="font-mono text-base font-bold text-[#111315]">
                    ₹{order.total.toLocaleString('en-IN')}
                  </span>
                  <Link
                    href={`/account/orders/${order.id}`}
                    className="btn-secondary text-xs py-2 px-3 flex items-center gap-1.5"
                  >
                    <span>DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
