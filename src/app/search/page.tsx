'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { mockProducts } from '@/data/products';
import { mockCollections } from '@/data/collections';
import { ProductCard } from '@/components/product/ProductCard';
import { Search, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  const filteredProducts = searchTerm.trim()
    ? mockProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.subCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.collection.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.outfitCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.material.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const filteredCollections = searchTerm.trim()
    ? mockCollections.filter(
        (c) =>
          c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.tagline.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const suggestedTags = ['Oversized Tee', 'Japanese Denim', 'Bomber Jacket', 'Cargo Jogger', 'Corset Top', 'Mohair Knit', 'Baby Tee'];

  return (
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      {/* Header & Large Search Form */}
      <section className="py-12 border-b border-white/10 bg-[#121416]/50">
        <div className="layout-container max-w-4xl mx-auto space-y-6">
          <div className="text-xs font-mono tracking-widest text-[#1ECAD3] uppercase font-bold">
            SEARCH & ARCHIVE RETRIEVAL
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-white/40" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="SEARCH SILHOUETTES, FABRICS, OR COLLECTIONS..."
              className="w-full bg-[#090A0B] border border-white/20 pl-14 pr-6 py-4 text-base sm:text-xl font-primary uppercase tracking-tight text-white placeholder-white/30 focus:outline-none focus:border-white rounded-sm shadow-xl"
            />
          </div>

          {/* Quick Tag Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono text-white/50 uppercase">POPULAR:</span>
            {suggestedTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchTerm(tag)}
                className="px-3 py-1 bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono uppercase rounded-sm text-white/80 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <div className="layout-container pt-10">
        {searchTerm.trim() ? (
          <div className="space-y-8">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
              <span className="text-white/60 uppercase">
                FOUND <strong className="text-white">{filteredProducts.length}</strong> PRODUCTS &{' '}
                <strong className="text-white">{filteredCollections.length}</strong> COLLECTIONS FOR "{searchTerm}"
              </span>
              <button
                onClick={() => setSearchTerm('')}
                className="text-[#C65A28] hover:underline uppercase"
              >
                CLEAR SEARCH
              </button>
            </div>

            {/* Collection Matches */}
            {filteredCollections.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xs font-mono font-bold tracking-widest text-[#1ECAD3] uppercase">
                  MATCHING COLLECTIONS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredCollections.map((col) => (
                    <Link
                      key={col.id}
                      href={`/collections/${col.slug}`}
                      className="p-5 bg-[#121416] border border-white/10 hover:border-white/30 rounded-sm flex items-center justify-between group"
                    >
                      <div>
                        <span className="text-[10px] font-mono text-white/50 uppercase">
                          {col.season}
                        </span>
                        <h4 className="font-primary text-base font-bold uppercase text-white group-hover:text-[#1ECAD3] transition-colors">
                          {col.name}
                        </h4>
                        <p className="text-xs text-white/60 font-secondary mt-1">{col.tagline}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white transform group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center bg-[#121416]/40 border border-white/10 rounded-sm space-y-3">
                <p className="text-xs font-mono text-white/50 uppercase">
                  NO PRODUCTS FOUND MATCHING "{searchTerm}"
                </p>
                <Link href="/shop" className="btn-secondary text-xs inline-block">
                  BROWSE COMPLETE CATALOG
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            <h3 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
              TRENDING IN THE ARCHIVE
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {mockProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
