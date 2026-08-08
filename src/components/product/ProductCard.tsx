'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Product, ProductColor } from '@/types';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';

interface ProductCardProps {
  product: Product;
  className?: string;
  showQuickAdd?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className = '',
  showQuickAdd = true,
}) => {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addItem } = useCart();
  const { showToast } = useToast();

  const isSaved = isInWishlist(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const added = toggleWishlist(product);
    if (added) {
      showToast(`${product.name} added to your wishlist`, 'success');
    } else {
      showToast(`${product.name} removed from wishlist`, 'info');
    }
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, selectedColor, product.sizes[0] || 'M', 1);
    showToast(`Added ${product.name} to bag`, 'success');
  };

  return (
    <div
      className={`group relative flex flex-col justify-between bg-white border border-black/[0.08] hover:border-black/25 transition-all duration-300 rounded-[2px] p-3 select-none shadow-sm hover:shadow-md ${className}`}
    >
      {/* Top Media Area with 4:5 Aspect Ratio */}
      <div className="relative overflow-hidden rounded-[2px]">
        <Link href={`/products/${product.slug}`} className="block relative">
          <MediaPlaceholder
            type="product"
            aspectRatio="4/5"
            imageUrl={product.imageUrl}
            altText={product.name}
            label={product.subCategory || product.category}
            subLabel={selectedColor.name}
            gradient={product.placeholderGradient || 'linear-gradient(135deg, #F0EDE6 0%, #E2DDD3 50%, #ECE7DD 100%)'}
            className="w-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </Link>

        {/* Badges Overlay */}
        <div className="absolute top-2.5 left-2.5 z-20 flex flex-col gap-1.5 pointer-events-none">
          {product.badge && (
            <span
              className={`px-2 py-0.5 text-[9px] font-mono font-bold tracking-widest uppercase rounded-sm border ${
                product.badge === 'NEW DROP'
                  ? 'bg-[#0E6068]/10 text-[#0E6068] border-[#0E6068]/30 backdrop-blur-sm'
                  : product.badge === 'LIMITED DROP'
                  ? 'bg-[#C65A28]/10 text-[#C65A28] border-[#C65A28]/30 backdrop-blur-sm'
                  : 'bg-black/10 text-[#111315] border-black/20 backdrop-blur-sm'
              }`}
            >
              {product.badge}
            </span>
          )}
          {product.discountPercent && (
            <span className="px-2 py-0.5 text-[9px] font-mono font-bold tracking-widest uppercase rounded-sm bg-[#C65A28] text-white">
              -{product.discountPercent}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          aria-label={isSaved ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-2.5 right-2.5 z-20 p-2 rounded-full backdrop-blur-md transition-all duration-200 ${
            isSaved
              ? 'bg-[#C65A28] text-white shadow-md shadow-[#C65A28]/30'
              : 'bg-white/80 text-[#111315]/70 hover:text-[#111315] hover:bg-white border border-black/10'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
        </button>

        {/* Quick Add Overlay on Desktop Hover */}
        {showQuickAdd && (
          <div className="absolute bottom-2 left-2 right-2 z-20 hidden sm:flex opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <button
              onClick={handleQuickAdd}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#111315] text-white hover:bg-[#23272B] text-xs font-primary font-bold uppercase tracking-wider rounded-sm shadow-lg transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>QUICK ADD</span>
            </button>
          </div>
        )}
      </div>

      {/* Product Metadata Information */}
      <div className="pt-3 flex flex-col justify-between flex-1 space-y-2">
        <div>
          {/* Micro Tag & Rating */}
          <div className="flex items-center justify-between text-[10px] font-mono text-[#757A82] uppercase tracking-widest mb-1">
            <span>{product.outfitCategory || product.category}</span>
            <div className="flex items-center gap-1 text-[#111315]">
              <Star className="w-3 h-3 text-[#A37A24] fill-current" />
              <span className="font-semibold">{product.rating}</span>
            </div>
          </div>

          {/* Product Title */}
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-primary font-bold text-xs sm:text-sm text-[#111315] group-hover:text-[#0E6068] transition-colors uppercase tracking-tight line-clamp-1">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Color Swatches and Price Row */}
        <div className="pt-2 border-t border-black/[0.08] flex items-center justify-between">
          {/* Color Dots */}
          <div className="flex items-center gap-1.5">
            {product.colors.map((color) => {
              const isSelected = selectedColor.name === color.name;
              return (
                <button
                  key={color.name}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedColor(color);
                  }}
                  title={color.name}
                  className={`w-3.5 h-3.5 rounded-full border transition-all ${
                    isSelected
                      ? 'border-[#111315] scale-125 ring-1 ring-black/30'
                      : 'border-black/20 hover:scale-110 opacity-70'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Color option: ${color.name}`}
                />
              );
            })}
          </div>

          {/* Pricing in INR */}
          <div className="flex items-baseline gap-2 font-mono">
            <span className="text-xs sm:text-sm font-bold text-[#111315]">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.compareAtPrice && (
              <span className="text-[10px] text-[#757A82] line-through">
                ₹{product.compareAtPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className="sm:hidden mt-2 w-full py-2 bg-[#111315] text-white hover:bg-[#23272B] rounded-sm text-[11px] font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>ADD TO BAG</span>
        </button>
      </div>
    </div>
  );
};
