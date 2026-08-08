'use client';

import React from 'react';
import Link from 'next/link';
import { collectionStoryCircles } from '@/data/products';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';

export const CollectionStories: React.FC = () => {
  return (
    <section className="section-spacing select-none overflow-hidden bg-[#F7F7F5]">
      <div className="vostra-container">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-black/10">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#C65A28]" />
            <h2 className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-[#111315]">
              COLLECTION STORIES // CURATED EDITS
            </h2>
          </div>
          <span className="text-[10px] font-mono tracking-widest text-[#757A82] uppercase hidden sm:inline">
            SELECT A REALM TO EXPLORE
          </span>
        </div>

        {/* Horizontal Row (Desktop) & Snap Horizontal Scroll (Mobile) */}
        <div className="flex items-center gap-6 sm:gap-8 lg:gap-10 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth">
          {collectionStoryCircles.map((circle) => (
            <Link
              key={circle.id}
              href={circle.href}
              className="group flex-shrink-0 flex flex-col items-center gap-3.5 text-center"
            >
              {/* Circular Gradient Media Placeholder with Rotating Border Glow */}
              <div className="relative w-22 h-22 sm:w-28 sm:h-28 lg:w-32 lg:h-32">
                <MediaPlaceholder
                  type="circle"
                  aspectRatio="1/1"
                  imageUrl={circle.imageUrl}
                  altText={circle.name}
                  gradient={circle.gradient || 'linear-gradient(135deg, #F0EFEA 0%, #DFDBD2 100%)'}
                  showGridLines={false}
                  showCoordinates={false}
                  className="w-full h-full transform group-hover:scale-105 transition-all duration-300 shadow-md shadow-black/5"
                />

                {/* Badge Overlay */}
                {circle.badge && (
                  <span className="absolute -top-1 -right-1 z-20 px-2 py-0.5 text-[9px] font-mono font-bold uppercase rounded-full bg-[#C65A28] text-white shadow-sm">
                    {circle.badge}
                  </span>
                )}
              </div>

              {/* Collection Name Underneath */}
              <div className="flex flex-col items-center space-y-0.5">
                <span className="font-primary text-xs sm:text-sm font-bold tracking-wider uppercase text-[#111315] group-hover:text-[#0E6068] transition-colors">
                  {circle.name}
                </span>
                <span className="text-[9px] font-mono text-[#757A82] uppercase group-hover:text-[#111315]">
                  DISCOVER →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
