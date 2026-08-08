import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { mockCollections } from '@/data/collections';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';

export default function CollectionsPage() {
  return (
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      {/* Header Banner */}
      <section className="py-12 border-b border-white/10 bg-[#121416]/50">
        <div className="layout-container space-y-2">
          <div className="text-xs font-mono tracking-widest text-[#C65A28] uppercase font-bold">
            COLLECTION REALMS // LOOKBOOK ARCHIVE
          </div>
          <h1 className="display-lg text-white font-primary font-bold uppercase tracking-tight">
            CURATED DESIGN CHAPTERS
          </h1>
          <p className="text-xs sm:text-sm font-secondary text-white/60 max-w-xl">
            Each collection explores a distinct textile discipline — from Okayama shuttle-loomed raw denim to sculptural bonded eveningwear.
          </p>
        </div>
      </section>

      {/* Collections Lookbook Grid */}
      <section className="py-10">
        <div className="layout-container space-y-12">
          {mockCollections.map((collection, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={collection.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 sm:p-8 bg-[#121416]/70 border border-white/10 hover:border-white/30 transition-all rounded-[2px]`}
              >
                {/* Media Container (7 cols) */}
                <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <MediaPlaceholder
                    type="collection"
                    aspectRatio="16/9"
                    gradient={collection.gradient}
                    label={`LOOKBOOK // ${collection.name}`}
                    subLabel={collection.season}
                    className="w-full min-h-[260px] sm:min-h-[380px]"
                  />
                </div>

                {/* Text & Meta Container (5 cols) */}
                <div className={`lg:col-span-5 space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
                      {collection.season}
                    </span>
                    {collection.badge && (
                      <span className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase rounded-sm bg-[#C65A28] text-white">
                        {collection.badge}
                      </span>
                    )}
                  </div>

                  <h2 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
                    {collection.name}
                  </h2>

                  <p className="text-xs sm:text-sm font-primary text-[#1ECAD3] uppercase font-semibold tracking-wider">
                    {collection.tagline}
                  </p>

                  <p className="text-xs font-secondary text-white/70 leading-relaxed">
                    {collection.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      href={`/collections/${collection.slug}`}
                      className="btn-primary text-xs flex items-center gap-2"
                    >
                      <span>EXPLORE LOOKBOOK</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <span className="text-xs font-mono text-white/40">
                      {collection.itemCount} PIECES
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
