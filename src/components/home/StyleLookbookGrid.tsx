'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, Sparkles } from 'lucide-react';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';

interface LookbookItem {
  id: string;
  title: string;
  category: 'ALL' | 'STREETWEAR' | 'DENIM' | 'TAILORING' | 'OUTERWEAR';
  location: string;
  season: string;
  imageUrl: string;
  hoverImageUrl: string;
  featuredProducts: { name: string; price: number; slug: string }[];
}

const lookbookItems: LookbookItem[] = [
  {
    id: 'look-01',
    title: 'TOKYO BRUTALIST MONOCHROME',
    category: 'STREETWEAR',
    location: 'SHIBUYA // TOKYO',
    season: 'AW26 // 01',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
    hoverImageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800',
    featuredProducts: [
      { name: 'Heavyweight Oversized Acid Tee', price: 1499, slug: 'heavyweight-oversized-acid-tee' },
      { name: 'Tactical Ripstop Cargo Jogger', price: 2799, slug: 'tactical-ripstop-cargo-jogger' }
    ]
  },
  {
    id: 'look-02',
    title: 'OKAYAMA RAW INDIGO DRAPE',
    category: 'DENIM',
    location: 'KURASHIKI // JAPAN',
    season: 'AW26 // 02',
    imageUrl: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&q=80&w=800',
    hoverImageUrl: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?auto=format&fit=crop&q=80&w=800',
    featuredProducts: [
      { name: 'Raw Japanese Selvedge Wide-Leg Jean', price: 3499, slug: 'raw-japanese-selvedge-wide-leg-jean' },
      { name: 'Vintage Carpenter Selvedge Denim', price: 3699, slug: 'vintage-carpenter-selvedge-denim' }
    ]
  },
  {
    id: 'look-03',
    title: 'PARIS MINIMAL SCULPTED CORSET',
    category: 'TAILORING',
    location: 'LE MARAIS // PARIS',
    season: 'AW26 // 03',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    hoverImageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800',
    featuredProducts: [
      { name: 'Asymmetric Sculpted Corset Top', price: 1899, slug: 'asymmetric-sculpted-corset-top' },
      { name: 'Pleated Wide-Leg Trouser', price: 2999, slug: 'pleated-wide-leg-trouser' }
    ]
  },
  {
    id: 'look-04',
    title: 'MILAN OVERSIZED TAILORING',
    category: 'TAILORING',
    location: 'BRERA // MILAN',
    season: 'AW26 // 04',
    imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
    hoverImageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    featuredProducts: [
      { name: 'Oversized Tailored Blazer', price: 4999, slug: 'oversized-tailored-blazer' },
      { name: 'Structured Leather Studio Tote', price: 3499, slug: 'structured-leather-studio-tote' }
    ]
  },
  {
    id: 'look-05',
    title: 'LONDON FLIGHT BOMBER UNIFORM',
    category: 'OUTERWEAR',
    location: 'SOHO // LONDON',
    season: 'AW26 // 05',
    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800',
    hoverImageUrl: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&q=80&w=800',
    featuredProducts: [
      { name: 'Boxy Nylon Bomber Jacket', price: 4299, slug: 'boxy-nylon-bomber-jacket' },
      { name: 'Parachute Balloon Pants', price: 2499, slug: 'parachute-balloon-pants' }
    ]
  },
  {
    id: 'look-06',
    title: 'NORDIC MOHAIR & ALABASTER KNIT',
    category: 'STREETWEAR',
    location: 'STOCKHOLM // SWEDEN',
    season: 'AW26 // 06',
    imageUrl: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800',
    hoverImageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800',
    featuredProducts: [
      { name: 'Deconstructed Brushed Knit Sweater', price: 3199, slug: 'deconstructed-brushed-knit-sweater' },
      { name: 'Chunky Platform High Tops', price: 4999, slug: 'chunky-platform-high-tops' }
    ]
  },
  {
    id: 'look-07',
    title: 'BERLIN DISTRESSED LEATHER MOTO',
    category: 'OUTERWEAR',
    location: 'MITTE // BERLIN',
    season: 'AW26 // 07',
    imageUrl: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&q=80&w=800',
    hoverImageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800',
    featuredProducts: [
      { name: 'Oversized Washed Leather Moto Jacket', price: 7999, slug: 'oversized-washed-leather-moto-jacket' },
      { name: 'Minimal Crossbody Sling Bag', price: 1999, slug: 'minimal-crossbody-sling-bag' }
    ]
  },
  {
    id: 'look-08',
    title: 'SEOUL CONTEMPORARY DOUBLE-FACED COAT',
    category: 'OUTERWEAR',
    location: 'GANGNAM // SEOUL',
    season: 'AW26 // 08',
    imageUrl: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&q=80&w=800',
    hoverImageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    featuredProducts: [
      { name: 'Minimalist Double-Faced Wool Coat', price: 8499, slug: 'minimalist-double-faced-wool-coat' },
      { name: 'Chunky Ribbed Cashmere Beanie', price: 1199, slug: 'chunky-ribbed-cashmere-beanie' }
    ]
  }
];

export const StyleLookbookGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'STREETWEAR' | 'DENIM' | 'TAILORING' | 'OUTERWEAR'>('ALL');

  const filteredLooks = activeCategory === 'ALL'
    ? lookbookItems
    : lookbookItems.filter((item) => item.category === activeCategory);

  const categories: ('ALL' | 'STREETWEAR' | 'DENIM' | 'TAILORING' | 'OUTERWEAR')[] = [
    'ALL',
    'STREETWEAR',
    'DENIM',
    'TAILORING',
    'OUTERWEAR'
  ];

  return (
    <section className="section-spacing bg-[#EFEFEA] select-none border-y border-black/10 overflow-hidden">
      <div className="vostra-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-black/10 gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C65A28] uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EDITORIAL LOOKBOOK ARCHIVE // 30+ GLOBAL LOOKS</span>
            </div>
            <h2 className="display-lg text-[#111315] font-primary font-bold tracking-tight uppercase">
              STYLE ARCHIVE & LOOKBOOK
            </h2>
            <p className="text-xs sm:text-sm font-secondary text-[#4A4E54] max-w-xl leading-relaxed">
              Explore global runway captures and curated styling options from Tokyo, Milan, Paris, and London studios. Hover to inspect alternate editorial viewpoints.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-[11px] font-mono font-bold tracking-wider uppercase rounded-sm border transition-all ${
                    isActive
                      ? 'bg-[#111315] text-white border-[#111315] shadow-sm'
                      : 'bg-white/80 text-[#4A4E54] border-black/10 hover:border-black/30 hover:text-[#111315]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Responsive Lookbook Grid: 4 columns desktop, 2 columns tablet, 1 column mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLooks.map((look) => (
            <div
              key={look.id}
              className="group relative bg-white border border-black/[0.08] hover:border-black/25 rounded-[2px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Media Container with 4:5 Aspect Ratio and Hover Crossfade */}
              <div className="relative overflow-hidden">
                <MediaPlaceholder
                  type="lookbook"
                  aspectRatio="4/5"
                  imageUrl={look.imageUrl}
                  hoverImageUrl={look.hoverImageUrl}
                  altText={look.title}
                  className="w-full"
                />

                {/* Top Location & Season Pill */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-20 pointer-events-none">
                  <span className="px-2 py-0.5 text-[9px] font-mono font-bold tracking-widest uppercase rounded-sm bg-black/70 text-white backdrop-blur-md">
                    {look.location}
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-mono font-bold tracking-widest uppercase rounded-sm bg-white/90 text-[#111315] backdrop-blur-md">
                    {look.season}
                  </span>
                </div>
              </div>

              {/* Lookbook Content & Featured Products */}
              <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
                <div>
                  <span className="text-[10px] font-mono text-[#0E6068] uppercase font-bold tracking-wider">
                    {look.category}
                  </span>
                  <h3 className="font-primary font-bold text-xs sm:text-sm text-[#111315] uppercase tracking-tight line-clamp-1 mt-0.5">
                    {look.title}
                  </h3>
                </div>

                {/* Tagged Products in this Look */}
                <div className="pt-2 border-t border-black/[0.06] space-y-1.5">
                  <span className="text-[9px] font-mono text-[#757A82] uppercase tracking-widest block">
                    TAGGED IN LOOK:
                  </span>
                  {look.featuredProducts.map((prod) => (
                    <Link
                      key={prod.slug}
                      href={`/products/${prod.slug}`}
                      className="flex items-center justify-between text-[11px] font-secondary text-[#4A4E54] hover:text-[#111315] group/item transition-colors"
                    >
                      <span className="truncate pr-2 group-hover/item:underline">{prod.name}</span>
                      <span className="font-mono font-bold text-[#111315] whitespace-nowrap">
                        ₹{prod.price.toLocaleString('en-IN')}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
