import React from 'react';
import Link from 'next/link';
import { Sparkles, Clock, ArrowRight } from 'lucide-react';
import { mockProducts } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';

export default function NewArrivalsPage() {
  const newArrivals = mockProducts.filter((p) => p.isNewArrival || p.badge === 'NEW DROP');

  return (
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      {/* Drop Banner */}
      <section className="py-8 sm:py-12 border-b border-black/10 bg-white">
        <div className="vostra-container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2ECEB] border border-[#0E6068]/30 rounded-sm text-[#0E6068] text-xs font-mono uppercase font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FRESH DROP // 2026 DROP 01 ARCHIVE</span>
              </div>
              <h1 className="display-lg text-[#111315] font-primary font-bold uppercase tracking-tight">
                NEW RELEASES & LIMITED CAPSULES
              </h1>
              <p className="text-xs sm:text-sm font-secondary text-[#4A4E54] max-w-xl leading-relaxed">
                Every release is strictly numbered with custom fabric certifications. Once inventory sells out, archived pieces do not enter restock.
              </p>
            </div>

            {/* Release Timer Box */}
            <div className="p-4 sm:p-5 bg-[#F7F7F5] border border-black/10 rounded-sm flex flex-col gap-2 min-w-[260px] shadow-sm">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#757A82] uppercase font-bold">
                <Clock className="w-3.5 h-3.5 text-[#C65A28]" />
                <span>NEXT CAPSULE DROP IN</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-lg sm:text-xl font-bold text-[#111315]">
                <span className="p-1.5 bg-white border border-black/10 rounded-sm">04D</span>
                <span>:</span>
                <span className="p-1.5 bg-white border border-black/10 rounded-sm">18H</span>
                <span>:</span>
                <span className="p-1.5 bg-white border border-black/10 rounded-sm">42M</span>
              </div>
              <p className="text-[10px] font-mono text-[#0E6068] font-bold">
                SERIES 05 // THE DISTORTED GRAPHICS EDIT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Product Grid */}
      <section className="py-10">
        <div className="vostra-container">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-black/10 text-xs font-mono">
            <span className="text-[#4A4E54]">
              SHOWING <strong className="text-[#111315]">{newArrivals.length}</strong> NEW DROPS
            </span>
            <Link href="/shop" className="text-[#C65A28] hover:underline uppercase font-bold">
              VIEW FULL CATALOG →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
