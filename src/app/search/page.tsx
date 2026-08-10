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
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      {/* Header & Large Search Form */}
      <section className="py-12 border-b border-black/10 bg-white">
        <div className="vostra-container max-w-4xl mx-auto space-y-6">
          <div className="text-xs font-mono tracking-widest text-[#0E6068] uppercase font-bold">
            SEARCH & ARCHIVE RETRIEVAL
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#757A82]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="SEARCH SILHOUETTES, FABRICS, OR COLLECTIONS..."
              className="w-full bg-[#F7F7F5] border border-black/15 pl-14 pr-6 py-4 text-base sm:text-xl font-primary uppercase tracking-tight text-[#111315] placeholder-[#757A82] focus:outline-none focus:border-black rounded-sm shadow-sm"
            />
          </div>

          {/* Quick Tag Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono text-[#757A82] uppercase font-bold">POPULAR:</span>
            {suggestedTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchTerm(tag)}
                className="px-3 py-1 bg-white hover:bg-black/5 border border-black/10 text-xs font-mono uppercase rounded-sm text-[#111315] transition-colors shadow-sm"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-10">
        <div className="vostra-container">
          {searchTerm.trim() === '' ? (
            <div className="py-16 text-center space-y-3">
              <Sparkles className="w-8 h-8 text-[#0E6068] mx-auto" />
              <h3 className="font-primary text-lg font-bold uppercase tracking-tight text-[#111315]">
                DISCOVER THE VOSTRA ARCHIVE
              </h3>
              <p className="text-xs text-[#757A82] font-secondary max-w-sm mx-auto">
                Type keywords like "Acid", "Raw Selvedge", "450 GSM", or "Corset" to query inventory.
              </p>
            </div>
          ) : (
            <div className="space-y-10">
              {/* Matched Collections Banner */}
              {filteredCollections.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xs font-mono text-[#757A82] uppercase tracking-widest font-bold">
                    MATCHED CHAPTERS ({filteredCollections.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredCollections.map((col) => (
                      <Link
                        key={col.id}
                        href={`/collections/${col.slug}`}
                        className="p-5 bg-white border border-black/10 hover:border-black/30 rounded-sm flex items-center justify-between transition-all shadow-sm"
                      >
                        <div>
                          <span className="text-[10px] font-mono text-[#C65A28] font-bold uppercase">
                            {col.season}
                          </span>
                          <h4 className="font-primary text-base font-bold uppercase text-[#111315]">
                            {col.name}
                          </h4>
                          <p className="text-xs font-secondary text-[#757A82] line-clamp-1">
                            {col.tagline}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#111315]" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Products */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-black/10">
                  <span className="text-xs font-mono text-[#757A82] uppercase">
                    RESULTS FOR "{searchTerm.toUpperCase()}" ({filteredProducts.length})
                  </span>
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="py-16 text-center bg-white border border-black/10 rounded-sm space-y-3 shadow-sm">
                    <p className="text-sm font-mono text-[#757A82] uppercase">
                      NO PRODUCTS FOUND MATCHING "{searchTerm.toUpperCase()}"
                    </p>
                    <Link href="/shop" className="btn-secondary text-xs inline-block">
                      VIEW ENTIRE CATALOG
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
