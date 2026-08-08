'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside
      aria-label="Announcement"
      className="w-full bg-[#EFEFEA] border-b border-black/10 text-[#111315] select-none z-50 relative"
    >
      <div className="vostra-container h-9 flex items-center justify-between text-[11px] font-secondary tracking-widest uppercase">
        {/* Left: Drop Tag */}
        <div className="hidden lg:flex items-center gap-2 text-[#4A4E54]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C65A28] animate-pulse" />
          <span className="font-semibold text-[#111315]">AUTUMN / WINTER 2026</span>
          <span className="text-black/20">—</span>
          <span className="text-[#C65A28] font-bold">DROP 01 LIVE</span>
        </div>

        {/* Center: Main Promotion */}
        <div className="mx-auto lg:mx-0 flex items-center gap-2 sm:gap-3 text-[#111315] font-medium">
          <span>FREE EXPRESS AIR SHIPPING ON ORDERS ABOVE ₹999</span>
          <span className="text-black/25 hidden sm:inline">|</span>
          <Link
            href="/shop?sale=true"
            className="text-[#C65A28] hover:text-[#a84417] font-bold flex items-center gap-1 transition-colors"
          >
            <span>ARCHIVE SALE (UP TO 40% OFF)</span>
            <ArrowRight className="w-3 h-3 inline" />
          </Link>
        </div>

        {/* Right: Currency & Utility */}
        <div className="hidden xl:flex items-center gap-4 text-[#757A82] text-[10px]">
          <span className="text-[#111315] font-semibold">INDIA (INR ₹)</span>
          <span className="text-black/20">•</span>
          <Link href="/contact" className="hover:text-[#111315] transition-colors">
            STORE LOCATOR
          </Link>
        </div>
      </div>
    </aside>
  );
};
