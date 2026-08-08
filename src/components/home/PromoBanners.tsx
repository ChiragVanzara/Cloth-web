'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Tag, Truck } from 'lucide-react';
import { promotionalBanners } from '@/data/products';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';

export const PromoBanners: React.FC = () => {
  return (
    <section className="section-spacing select-none bg-[#F7F7F5]">
      <div className="vostra-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Banner 1: Sale / Limited Drop */}
          <div className="group relative overflow-hidden rounded-[2px] border border-black/10 hover:border-[#C65A28] transition-all duration-300 shadow-md bg-white">
            <MediaPlaceholder
              type="banner"
              aspectRatio="21/9"
              imageUrl="/images/editorial-denim.png"
              altText="Limited Drop Archive Sale"
              gradient="linear-gradient(135deg, #F5EDE8 0%, #E8D8CF 65%, #F0DDD4 100%)"
              label={promotionalBanners[0].badge}
              className="w-full min-h-[240px] sm:min-h-[280px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent p-6 sm:p-10 flex flex-col justify-between z-20 pointer-events-auto text-white">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-sm bg-[#C65A28]/20 text-[#C65A28] border border-[#C65A28]/40">
                    <Tag className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#C65A28] uppercase">
                    {promotionalBanners[0].badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="heading-xl text-white font-primary font-bold uppercase tracking-tight group-hover:text-[#C65A28] transition-colors">
                    {promotionalBanners[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm font-secondary text-white/80 max-w-sm leading-relaxed">
                    {promotionalBanners[0].subtitle}
                  </p>
                </div>

                <div>
                  <Link
                    href={promotionalBanners[0].ctaHref}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-white hover:text-[#C65A28] transition-colors underline underline-offset-4"
                  >
                    <span>{promotionalBanners[0].ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </MediaPlaceholder>
          </div>

          {/* Banner 2: Free Shipping / Easy Returns */}
          <div className="group relative overflow-hidden rounded-[2px] border border-black/10 hover:border-[#0E6068] transition-all duration-300 shadow-md bg-white">
            <MediaPlaceholder
              type="banner"
              aspectRatio="21/9"
              imageUrl="/images/editorial-uniform.png"
              altText="Complimentary Logistics and Shipping"
              gradient="linear-gradient(135deg, #E6F0EE 0%, #D4E2DF 60%, #E2ECE9 100%)"
              label={promotionalBanners[1].badge}
              className="w-full min-h-[240px] sm:min-h-[280px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent p-6 sm:p-10 flex flex-col justify-between z-20 pointer-events-auto text-white">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-sm bg-[#0E6068]/20 text-[#1ECAD3] border border-[#1ECAD3]/40">
                    <Truck className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#1ECAD3] uppercase">
                    {promotionalBanners[1].badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="heading-xl text-white font-primary font-bold uppercase tracking-tight group-hover:text-[#1ECAD3] transition-colors">
                    {promotionalBanners[1].title}
                  </h3>
                  <p className="text-xs sm:text-sm font-secondary text-white/80 max-w-sm leading-relaxed">
                    {promotionalBanners[1].subtitle}
                  </p>
                </div>

                <div>
                  <Link
                    href={promotionalBanners[1].ctaHref}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-white hover:text-[#1ECAD3] transition-colors underline underline-offset-4"
                  >
                    <span>{promotionalBanners[1].ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </MediaPlaceholder>
          </div>
        </div>
      </div>
    </section>
  );
};
