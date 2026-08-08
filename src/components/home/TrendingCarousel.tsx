'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, TrendingUp } from 'lucide-react';
import { mockProducts } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';

export const TrendingCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const trendingProducts = mockProducts.filter((p) => p.isTrending || p.isTopRated);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="section-spacing select-none bg-[#F7F7F5] overflow-hidden">
      <div className="vostra-container">
        {/* Carousel Header with Navigation Arrows */}
        <div className="flex items-end justify-between mb-8 pb-3 border-b border-black/10">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-[#0E6068] uppercase tracking-widest font-bold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>THE COMMUNITY PICKS // TOP RATED</span>
            </div>
            <h2 className="display-lg text-[#111315] font-primary font-bold tracking-tight uppercase">
              TRENDING NOW
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/shop"
              className="text-xs font-mono tracking-widest uppercase text-[#4A4E54] hover:text-[#111315] underline underline-offset-4 hidden sm:inline"
            >
              EXPLORE ALL ({mockProducts.length})
            </Link>

            {/* Desktop Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="p-2.5 rounded-sm bg-black/5 hover:bg-black/10 border border-black/10 text-[#111315] transition-colors"
                aria-label="Previous products"
              >
                <ArrowLeft className="w-4 h-4 text-[#111315]" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2.5 rounded-sm bg-black/5 hover:bg-black/10 border border-black/10 text-[#111315] transition-colors"
                aria-label="Next products"
              >
                <ArrowRight className="w-4 h-4 text-[#111315]" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrolling Track: 4 on Desktop, 2-3 on Tablet, 1.3-1.5 on Mobile */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-1 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 snap-start w-[72vw] sm:w-[42vw] md:w-[30vw] lg:w-[22vw] min-w-[240px] max-w-[320px]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
