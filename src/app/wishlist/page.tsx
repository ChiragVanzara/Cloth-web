'use client';

import React from 'react';
import Link from 'next/link';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { mockProducts } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addItem } = useCart();
  const { showToast } = useToast();

  const handleMoveAllToBag = () => {
    wishlist.forEach((product) => {
      addItem(product, product.colors[0], product.sizes[0] || 'M', 1);
    });
    showToast(`Moved ${wishlist.length} pieces to your bag`, 'success');
  };

  const trendingPicks = mockProducts.slice(0, 4);

  return (
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      {/* Header */}
      <div className="border-b border-white/10 bg-[#121416]/40 py-8">
        <div className="layout-container flex items-center justify-between">
          <div>
            <div className="text-xs font-mono text-[#C65A28] tracking-widest uppercase font-bold">
              SAVED SILHOUETTES
            </div>
            <h1 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
              YOUR WISHLIST ({wishlist.length})
            </h1>
          </div>

          {wishlist.length > 0 && (
            <button
              onClick={handleMoveAllToBag}
              className="btn-primary text-xs flex items-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>MOVE ALL TO BAG</span>
            </button>
          )}
        </div>
      </div>

      <div className="layout-container pt-8">
        {wishlist.length === 0 ? (
          <div className="py-20 text-center bg-[#121416]/40 border border-white/10 rounded-sm space-y-4 max-w-lg mx-auto">
            <Heart className="w-12 h-12 text-white/20 mx-auto" />
            <h3 className="font-primary text-lg font-bold uppercase tracking-wide">
              YOUR WISHLIST IS CURRENTLY EMPTY
            </h3>
            <p className="text-xs text-white/60 font-secondary max-w-sm mx-auto">
              Save your favorite oversized graphic tees, raw selvedge denim, and limited drop pieces to track inventory availability.
            </p>
            <Link href="/shop" className="btn-primary text-xs inline-block">
              EXPLORE CATALOG
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Curated Recommendations */}
        <div className="pt-16 mt-16 border-t border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
              CURATED FOR YOUR WARDROBE
            </h3>
            <Link href="/new-arrivals" className="text-xs font-mono text-white/60 hover:text-white uppercase underline">
              VIEW NEW ARRIVALS
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {trendingPicks.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
