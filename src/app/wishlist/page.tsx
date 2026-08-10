'use client';

import React from 'react';
import Link from 'next/link';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { mockProducts } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
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
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      {/* Header */}
      <div className="border-b border-black/10 bg-white py-8">
        <div className="vostra-container flex items-center justify-between">
          <div>
            <div className="text-xs font-mono text-[#C65A28] tracking-widest uppercase font-bold">
              SAVED SILHOUETTES
            </div>
            <h1 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
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

      <div className="vostra-container pt-8">
        {wishlist.length === 0 ? (
          <div className="py-20 text-center bg-white border border-black/10 rounded-sm space-y-4 max-w-lg mx-auto shadow-sm">
            <Heart className="w-12 h-12 text-[#757A82]/30 mx-auto" />
            <h3 className="font-primary text-lg font-bold uppercase tracking-wide text-[#111315]">
              YOUR WISHLIST IS CURRENTLY EMPTY
            </h3>
            <p className="text-xs text-[#757A82] font-secondary max-w-sm mx-auto">
              Save your favorite oversized tees, cargo joggers, and raw selvedge denim while exploring.
            </p>
            <div className="pt-2">
              <Link href="/shop" className="btn-primary text-xs inline-flex items-center gap-2">
                <span>EXPLORE THE COLLECTION</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Recommended Pieces */}
        <div className="mt-20 pt-10 border-t border-black/10">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-black/10">
            <span className="text-xs font-mono text-[#0E6068] uppercase tracking-widest font-bold">
              RECOMMENDED FOR YOU
            </span>
            <Link href="/shop" className="text-xs font-mono text-[#757A82] hover:text-[#111315] uppercase underline underline-offset-4">
              VIEW ALL
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {trendingPicks.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
