'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';
import { mockProducts } from '@/data/products';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const recentSearches = ['Heavyweight Tee', 'Selvedge Denim', 'Cargo Pants', 'Corset Top', 'Bomber'];
  const popularCategories = ['Streetwear', 'Oversized Tees', 'Denim Jackets', 'Parachute Pants', 'Baby Tees'];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredProducts = query.trim()
    ? mockProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.collection.toLowerCase().includes(query.toLowerCase()) ||
          p.outfitCategory.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 4)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onClose();
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex flex-col justify-start pt-16 sm:pt-24 select-none">
      <div className="vostra-container w-full">
        <div className="relative bg-[#F8F8F6] border border-black/10 rounded-[2px] shadow-2xl p-6 sm:p-10 max-w-4xl mx-auto overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#111315] transition-colors"
            aria-label="Close search overlay"
          >
            <X className="w-5 h-5 text-[#111315]" />
          </button>

          {/* Search Header */}
          <div className="space-y-1 mb-6">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#C65A28] uppercase">
              STUDIO CATALOG SEARCH // 2026
            </span>
            <h3 className="text-xl sm:text-2xl font-primary font-bold uppercase tracking-tight text-[#111315]">
              DISCOVER PIECES & SILHOUETTES
            </h3>
          </div>

          {/* Search Input */}
          <form onSubmit={handleSearchSubmit} className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7E838B]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH BY KEYWORD, FIT, OR COLLECTION..."
              className="w-full bg-white border border-black/15 pl-12 pr-28 py-4 text-sm sm:text-base font-mono uppercase tracking-wider text-[#111315] placeholder-[#7E838B] focus:outline-none focus:border-[#111315] rounded-sm transition-colors shadow-sm"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-20 top-1/2 -translate-y-1/2 p-1 text-[#7E838B] hover:text-[#111315]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#111315] text-white text-xs font-mono font-bold uppercase rounded-sm hover:bg-[#23272B] transition-colors"
            >
              GO
            </button>
          </form>

          {/* Quick Links / Filter Tags */}
          {!query && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#7E838B] uppercase mb-4">
                  <TrendingUp className="w-3.5 h-3.5 text-[#C65A28]" />
                  <span>POPULAR SEARCHES</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3.5 py-2 text-xs font-mono uppercase tracking-wider bg-black/5 hover:bg-black/10 border border-black/10 rounded-sm text-[#111315] transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#7E838B] uppercase mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-[#0E6068]" />
                  <span>SUGGESTED CATEGORIES</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setQuery(cat)}
                      className="px-3.5 py-2 text-xs font-mono uppercase tracking-wider bg-black/5 hover:bg-black/10 border border-black/10 rounded-sm text-[#111315] transition-colors"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Search Results */}
          {query && (
            <div className="mt-6">
              <div className="text-xs font-mono tracking-widest text-[#7E838B] uppercase mb-4">
                RESULTS FOR &quot;{query}&quot; ({filteredProducts.length})
              </div>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      onClick={onClose}
                      className="group flex flex-col p-2 bg-white border border-black/10 hover:border-black/30 rounded-sm transition-all shadow-sm"
                    >
                      <MediaPlaceholder
                        type="product"
                        aspectRatio="4/5"
                        label={product.subCategory}
                        gradient={product.placeholderGradient || 'linear-gradient(135deg, #F0EDE6 0%, #E2DDD3 100%)'}
                        className="w-full mb-2"
                      />
                      <span className="font-primary font-bold text-xs uppercase text-[#111315] line-clamp-1 group-hover:text-[#0E6068]">
                        {product.name}
                      </span>
                      <span className="font-mono text-xs font-semibold text-[#111315] mt-1">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 text-[#7E838B] font-mono text-sm uppercase">
                  NO PIECES MATCH YOUR QUERY. TRY &quot;TEE&quot;, &quot;DENIM&quot; OR &quot;CARGO&quot;.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
