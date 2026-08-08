import React from 'react';
import Link from 'next/link';
import { Sparkles, Clock, ArrowRight } from 'lucide-react';
import { mockProducts } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';

export default function NewArrivalsPage() {
  const newArrivals = mockProducts.filter((p) => p.isNewArrival || p.badge === 'NEW DROP');

  return (
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      {/* Drop Banner */}
      <section className="py-8 sm:py-12 border-b border-white/10 bg-[#121416]/40">
        <div className="layout-container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#123A3F] border border-[#1ECAD3]/40 rounded-sm text-[#1ECAD3] text-xs font-mono uppercase font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FRESH DROP // 2026 DROP 01 ARCHIVE</span>
              </div>
              <h1 className="display-lg text-white font-primary font-bold uppercase tracking-tight">
                NEW RELEASES & LIMITED CAPSULES
              </h1>
              <p className="text-xs sm:text-sm font-secondary text-white/60 max-w-xl">
                Every release is strictly numbered with custom fabric certifications. Once inventory sells out, archived pieces do not enter restock.
              </p>
            </div>

            {/* Release Timer Box */}
            <div className="p-4 sm:p-5 bg-[#090A0B] border border-white/15 rounded-sm flex flex-col gap-2 min-w-[260px]">
              <div className="flex items-center gap-2 text-[10px] font-mono text-white/50 uppercase">
                <Clock className="w-3.5 h-3.5 text-[#C65A28]" />
                <span>NEXT CAPSULE DROP IN</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-lg sm:text-xl font-bold text-white">
                <span className="p-1.5 bg-[#121416] rounded-sm">04D</span>
                <span>:</span>
                <span className="p-1.5 bg-[#121416] rounded-sm">18H</span>
                <span>:</span>
                <span className="p-1.5 bg-[#121416] rounded-sm">42M</span>
              </div>
              <p className="text-[10px] font-mono text-[#1ECAD3]">
                SERIES 05 // THE DISTORTED GRAPHICS EDIT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Product Grid */}
      <section className="py-10">
        <div className="layout-container">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/10 text-xs font-mono">
            <span className="text-white/60">
              SHOWING <strong className="text-white">{newArrivals.length}</strong> NEW DROPS
            </span>
            <Link href="/shop" className="text-[#C65A28] hover:underline uppercase">
              VIEW FULL CATALOG →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
