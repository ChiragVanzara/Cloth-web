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
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      {/* Header */}
      <div className="border-b border-white/10 bg-[#121416]/40 py-8">
        <div className="layout-container flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#1ECAD3] tracking-widest uppercase font-bold">
              VIP MEMBER PASSPORT // ID: #VOS-9942
            </div>
            <h1 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
              WELCOME BACK, SURESHKUMAR
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#123A3F] border border-[#1ECAD3]/40 rounded-sm text-[#1ECAD3] text-xs font-mono uppercase font-bold">
              TIER: PLATINUM INSIDER
            </span>
          </div>
        </div>
      </div>

      <div className="layout-container pt-8">
        {/* Quick Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <Link
            href="/account/orders"
            className="p-5 bg-[#121416] border border-white/10 hover:border-white/30 rounded-sm flex items-center justify-between group transition-all"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-white/50 uppercase">ACTIVE ORDERS</span>
              <div className="text-xl font-primary font-bold text-white">2 ORDERS</div>
            </div>
            <Package className="w-6 h-6 text-[#1ECAD3] group-hover:scale-110 transition-transform" />
          </Link>

          <Link
            href="/wishlist"
            className="p-5 bg-[#121416] border border-white/10 hover:border-white/30 rounded-sm flex items-center justify-between group transition-all"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-white/50 uppercase">SAVED PIECES</span>
              <div className="text-xl font-primary font-bold text-white">{totalWishlistItems} ITEMS</div>
            </div>
            <Heart className="w-6 h-6 text-[#C65A28] group-hover:scale-110 transition-transform" />
          </Link>

          <Link
            href="/account/addresses"
            className="p-5 bg-[#121416] border border-white/10 hover:border-white/30 rounded-sm flex items-center justify-between group transition-all"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-white/50 uppercase">SAVED ADDRESSES</span>
              <div className="text-xl font-primary font-bold text-white">2 LOCATIONS</div>
            </div>
            <MapPin className="w-6 h-6 text-[#C59A3A] group-hover:scale-110 transition-transform" />
          </Link>

          <Link
            href="/account/profile"
            className="p-5 bg-[#121416] border border-white/10 hover:border-white/30 rounded-sm flex items-center justify-between group transition-all"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-white/50 uppercase">PROFILE SETTINGS</span>
              <div className="text-xl font-primary font-bold text-white">VERIFIED</div>
            </div>
            <User className="w-6 h-6 text-white/70 group-hover:scale-110 transition-transform" />
          </Link>
        </div>

        {/* Recent Orders Overview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <h3 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
              RECENT ORDERS
            </h3>
            <Link
              href="/account/orders"
              className="text-xs font-mono text-[#C65A28] hover:underline uppercase"
            >
              VIEW ALL ORDERS →
            </Link>
          </div>

          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="p-5 bg-[#121416] border border-white/10 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-white text-sm">{order.id}</strong>
                    <span
                      className={`px-2 py-0.5 rounded-sm font-bold uppercase text-[10px] ${
                        order.status === 'In Transit'
                          ? 'bg-[#123A3F] text-[#1ECAD3]'
                          : 'bg-white/10 text-white'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <p className="text-white/50">{order.date} • {order.itemsCount} Items • {order.tracking}</p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6">
                  <span className="font-primary text-base font-bold text-white">
                    ₹{order.total.toLocaleString('en-IN')}
                  </span>
                  <Link
                    href={`/account/orders/${order.id}`}
                    className="btn-secondary text-[11px] py-1.5 px-3 flex items-center gap-1"
                  >
                    <span>TRACK</span>
                    <ArrowRight className="w-3 h-3" />
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
