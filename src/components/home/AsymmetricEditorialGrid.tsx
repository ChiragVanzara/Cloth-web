'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { asymmetricEditorialBlocks } from '@/data/products';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';

export const AsymmetricEditorialGrid: React.FC = () => {
  return (
    <section className="section-spacing-lg select-none bg-[#F7F7F5]">
      <div className="vostra-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-black/10 gap-3">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C65A28] uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EDITORIAL ARCHIVE // UNEVEN GRID</span>
            </div>
            <h2 className="display-lg text-[#111315] font-primary font-bold tracking-tight uppercase">
              EXPERIMENT IN FORM
            </h2>
          </div>

          <div className="text-right hidden sm:block">
            <span className="text-[11px] font-mono tracking-widest text-[#757A82] uppercase">
              ASYMMETRIC COMPOSITION // VOL. 26
            </span>
          </div>
        </div>

        {/* Intentionally Uneven 12-Column CSS Grid with High-Fashion Editorial Photography */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* Block 1: Large Horizontal (8 cols) */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-[2px] border border-black/10 hover:border-black/30 transition-all duration-300 shadow-md bg-white">
            <MediaPlaceholder
              type="editorial"
              aspectRatio="16/9"
              imageUrl={asymmetricEditorialBlocks[0].imageUrl || '/images/editorial-street.png'}
              altText="Street Essentials Oversized Heavyweight Cotton"
              label={asymmetricEditorialBlocks[0].label}
              className="w-full min-h-[320px] sm:min-h-[440px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 sm:p-12 flex flex-col justify-between z-20 pointer-events-auto text-white">
                <div className="flex items-center justify-between text-[11px] font-mono text-white/80 tracking-widest uppercase">
                  <span>{asymmetricEditorialBlocks[0].location}</span>
                  <span className="text-[#1ECAD3] font-bold">{asymmetricEditorialBlocks[0].coordinates}</span>
                </div>

                <div className="space-y-2.5">
                  <h3 className="heading-xl text-white font-primary font-bold uppercase tracking-tight group-hover:text-[#1ECAD3] transition-colors">
                    {asymmetricEditorialBlocks[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm font-secondary text-white/85 max-w-md leading-relaxed">
                    {asymmetricEditorialBlocks[0].tagline}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={asymmetricEditorialBlocks[0].href}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-white hover:text-[#1ECAD3] transition-colors underline underline-offset-4"
                    >
                      <span>EXPLORE COLLECTION</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </MediaPlaceholder>
          </div>

          {/* Block 2: Small Vertical (4 cols) */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-[2px] border border-black/10 hover:border-black/30 transition-all duration-300 shadow-md bg-white">
            <MediaPlaceholder
              type="editorial"
              aspectRatio="4/5"
              imageUrl={asymmetricEditorialBlocks[1].imageUrl || '/images/editorial-denim.png'}
              altText="Japanese 14.5oz Okayama Raw Selvedge Denim"
              label={asymmetricEditorialBlocks[1].label}
              className="w-full min-h-[320px] sm:min-h-[440px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 sm:p-8 flex flex-col justify-between z-20 pointer-events-auto text-white">
                <div className="flex items-center justify-between text-[11px] font-mono text-white/80 tracking-widest uppercase">
                  <span>{asymmetricEditorialBlocks[1].location}</span>
                  <span className="text-[#C65A28] font-bold">{asymmetricEditorialBlocks[1].coordinates}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-primary text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#C65A28] transition-colors">
                    {asymmetricEditorialBlocks[1].title}
                  </h3>
                  <p className="text-xs font-secondary text-white/85 leading-relaxed">
                    {asymmetricEditorialBlocks[1].tagline}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={asymmetricEditorialBlocks[1].href}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-white hover:text-[#C65A28] transition-colors underline underline-offset-4"
                    >
                      <span>VIEW DENIM</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </MediaPlaceholder>
          </div>

          {/* Block 3: Small Vertical (4 cols) */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-[2px] border border-black/10 hover:border-black/30 transition-all duration-300 shadow-md bg-white">
            <MediaPlaceholder
              type="editorial"
              aspectRatio="4/5"
              imageUrl={asymmetricEditorialBlocks[2].imageUrl || '/images/editorial-knitwear.png'}
              altText="Monochrome Chunky Ribbed Organic Knitwear"
              label={asymmetricEditorialBlocks[2].label}
              className="w-full min-h-[320px] sm:min-h-[420px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 sm:p-8 flex flex-col justify-between z-20 pointer-events-auto text-white">
                <div className="flex items-center justify-between text-[11px] font-mono text-white/80 tracking-widest uppercase">
                  <span>{asymmetricEditorialBlocks[2].location}</span>
                  <span className="text-[#A37A24] font-bold">{asymmetricEditorialBlocks[2].coordinates}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-primary text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#A37A24] transition-colors">
                    {asymmetricEditorialBlocks[2].title}
                  </h3>
                  <p className="text-xs font-secondary text-white/85 leading-relaxed">
                    {asymmetricEditorialBlocks[2].tagline}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={asymmetricEditorialBlocks[2].href}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-white hover:text-[#A37A24] transition-colors underline underline-offset-4"
                    >
                      <span>DISCOVER KNITS</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </MediaPlaceholder>
          </div>

          {/* Block 4: Large Vertical (4 cols) */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-[2px] border border-black/10 hover:border-black/30 transition-all duration-300 shadow-md bg-white">
            <MediaPlaceholder
              type="editorial"
              aspectRatio="3/4"
              imageUrl={asymmetricEditorialBlocks[3].imageUrl || '/images/editorial-sculpt.png'}
              altText="The Sculpt Series Boned Corset Top and Trousers"
              label={asymmetricEditorialBlocks[3].label}
              className="w-full min-h-[320px] sm:min-h-[420px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 sm:p-8 flex flex-col justify-between z-20 pointer-events-auto text-white">
                <div className="flex items-center justify-between text-[11px] font-mono text-white/80 tracking-widest uppercase">
                  <span>{asymmetricEditorialBlocks[3].location}</span>
                  <span className="text-[#C65A28] font-bold">{asymmetricEditorialBlocks[3].coordinates}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-primary text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#C65A28] transition-colors">
                    {asymmetricEditorialBlocks[3].title}
                  </h3>
                  <p className="text-xs font-secondary text-white/85 leading-relaxed">
                    {asymmetricEditorialBlocks[3].tagline}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={asymmetricEditorialBlocks[3].href}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-white hover:text-[#C65A28] transition-colors underline underline-offset-4"
                    >
                      <span>SHOP CAPSULE</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </MediaPlaceholder>
          </div>

          {/* Block 5: Medium (4 cols) */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-[2px] border border-black/10 hover:border-black/30 transition-all duration-300 shadow-md bg-white">
            <MediaPlaceholder
              type="editorial"
              aspectRatio="4/5"
              imageUrl={asymmetricEditorialBlocks[4].imageUrl || '/images/editorial-uniform.png'}
              altText="Everyday Unisex Uniform Technical Bomber Jacket"
              label={asymmetricEditorialBlocks[4].label}
              className="w-full min-h-[320px] sm:min-h-[420px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 sm:p-8 flex flex-col justify-between z-20 pointer-events-auto text-white">
                <div className="flex items-center justify-between text-[11px] font-mono text-white/80 tracking-widest uppercase">
                  <span>{asymmetricEditorialBlocks[4].location}</span>
                  <span className="text-[#0E6068] font-bold">{asymmetricEditorialBlocks[4].coordinates}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-primary text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#0E6068] transition-colors">
                    {asymmetricEditorialBlocks[4].title}
                  </h3>
                  <p className="text-xs font-secondary text-white/85 leading-relaxed">
                    {asymmetricEditorialBlocks[4].tagline}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={asymmetricEditorialBlocks[4].href}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-white hover:text-[#0E6068] transition-colors underline underline-offset-4"
                    >
                      <span>VIEW UNIFORM</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </MediaPlaceholder>
          </div>
        </div>
      </div>
    </section>
  );
};
