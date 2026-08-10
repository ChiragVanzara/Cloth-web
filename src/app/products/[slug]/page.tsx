'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import { mockProducts } from '@/data/products';
import { ProductColor } from '@/types';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { SizeGuideModal } from '@/components/product/SizeGuideModal';
import { ProductCard } from '@/components/product/ProductCard';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useToast } from '@/context/ToastContext';
import {
  Heart,
  ShoppingBag,
  Star,
  Ruler,
  Truck,
  RotateCcw,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Check,
} from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = mockProducts.find((p) => p.slug === params.slug);
  const router = useRouter();

  if (!product) {
    return notFound();
  }

  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number>(0);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);

  // Accordion open states
  const [openAccordion, setOpenAccordion] = useState<string | null>('details');

  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

  const isSaved = isInWishlist(product.id);

  // Curated gallery images for this product
  const galleryImages = [
    product.imageUrl || 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800',
    product.hoverImageUrl || 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800',
    ...(product.images || []),
  ].filter((img, idx, self) => self.indexOf(img) === idx);

  const handleAddToCart = () => {
    addItem(product, selectedColor, selectedSize, quantity);
    showToast(`Added ${product.name} (Size: ${selectedSize}) to your bag`, 'success');
  };

  const handleBuyNow = () => {
    addItem(product, selectedColor, selectedSize, quantity);
    router.push('/checkout');
  };

  const handleWishlist = () => {
    const added = toggleWishlist(product);
    showToast(added ? 'Added to your wishlist' : 'Removed from wishlist', added ? 'success' : 'info');
  };

  const relatedProducts = mockProducts
    .filter((p) => p.id !== product.id && (p.category === product.category || p.gender === product.gender))
    .slice(0, 4);

  return (
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      {/* Breadcrumb Bar */}
      <div className="border-b border-black/10 bg-[#EFEFEA]/60 py-3">
        <div className="vostra-container flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#757A82]">
          <Link href="/" className="hover:text-[#111315]">HOME</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#111315]">SHOP</Link>
          <span>/</span>
          <Link href={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-[#111315]">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-[#111315] truncate font-bold">{product.name}</span>
        </div>
      </div>

      <div className="vostra-container pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: 4:5 Media Gallery with Multi-Angle Thumbnails (7 cols) */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails Row/Column */}
            <div className="flex sm:flex-col gap-2.5 overflow-x-auto sm:overflow-visible no-scrollbar flex-shrink-0">
              {galleryImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedMediaIndex(idx)}
                  className={`w-16 h-20 sm:w-20 sm:h-24 rounded-[2px] border overflow-hidden transition-all ${
                    selectedMediaIndex === idx
                      ? 'border-[#111315] ring-2 ring-[#111315]/20 scale-105'
                      : 'border-black/10 opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`View Image ${idx + 1}`}
                >
                  <img
                    src={imgUrl}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>

            {/* Main Stage Media Slot (4:5) with Zoom Transition */}
            <div className="flex-1 relative rounded-[2px] border border-black/10 overflow-hidden shadow-lg bg-white">
              <MediaPlaceholder
                type="product"
                aspectRatio="4/5"
                imageUrl={galleryImages[selectedMediaIndex]}
                altText={`${product.name} main view`}
                label={product.name}
                subLabel={`${product.material} // ${selectedColor.name}`}
                className="w-full min-h-[440px] sm:min-h-[620px]"
              />

              {/* Floating Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase rounded-sm bg-white/90 border border-black/10 text-[#111315] shadow-md backdrop-blur-md">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Product Info & Purchasing UI (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Header Meta */}
            <div className="space-y-2 border-b border-black/10 pb-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#757A82] tracking-widest uppercase">
                <span>VOSTRA STUDIO // {product.outfitCategory}</span>
                <div className="flex items-center gap-1 text-[#A37A24]">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-bold text-[#111315]">{product.rating}</span>
                  <span className="text-[#757A82]">({product.reviewCount} REVIEWS)</span>
                </div>
              </div>

              <h1 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
                {product.name}
              </h1>

              {/* Price & Discounts */}
              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-2xl sm:text-3xl font-mono font-bold text-[#111315]">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.compareAtPrice && (
                  <span className="text-sm font-mono text-[#757A82] line-through">
                    ₹{product.compareAtPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {product.discountPercent && (
                  <span className="px-2 py-0.5 text-xs font-mono font-bold uppercase bg-[#C65A28] text-white rounded-sm">
                    SAVE {product.discountPercent}%
                  </span>
                )}
              </div>
              <p className="text-[11px] font-mono text-[#0E6068] font-semibold">
                INCLUSIVE OF ALL TAXES • FREE EXPRESS SHIPPING ON THIS ITEM
              </p>
            </div>

            {/* Color Selection */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#4A4E54] uppercase">COLOR:</span>
                <span className="font-bold text-[#111315] uppercase">{selectedColor.name}</span>
              </div>
              <div className="flex items-center gap-3">
                {product.colors.map((color) => {
                  const isSelected = selectedColor.name === color.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-7 h-7 rounded-full border transition-all flex items-center justify-center ${
                        isSelected
                          ? 'border-[#111315] ring-2 ring-black/20 scale-110'
                          : 'border-black/20 hover:scale-105 opacity-80'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                      aria-label={`Color option: ${color.name}`}
                    >
                      {isSelected && (
                        <Check className="w-3 h-3 text-white drop-shadow-sm" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#4A4E54] uppercase">SELECT SIZE:</span>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="flex items-center gap-1.5 text-[#0E6068] hover:text-[#111315] uppercase font-bold transition-colors underline underline-offset-4"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>SIZE GUIDE</span>
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-xs font-mono font-bold tracking-wider rounded-sm border transition-all ${
                        isSelected
                          ? 'bg-[#111315] text-white border-[#111315] shadow-md'
                          : 'bg-white text-[#111315] border-black/15 hover:border-black/40'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Selector & Action Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-black/15 rounded-sm bg-white px-3 py-2 font-mono text-xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 text-[#757A82] hover:text-[#111315]"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-4 font-bold text-[#111315]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 text-[#757A82] hover:text-[#111315]"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 btn-primary flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO BAG</span>
                </button>

                {/* Wishlist */}
                <button
                  onClick={handleWishlist}
                  className={`p-3.5 rounded-sm border transition-all ${
                    isSaved
                      ? 'bg-[#C65A28] text-white border-[#C65A28]'
                      : 'bg-white border-black/15 text-[#111315] hover:border-black/40'
                  }`}
                  aria-label={isSaved ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Buy Now Direct Button */}
              <button
                onClick={handleBuyNow}
                className="w-full btn-accent flex items-center justify-center gap-2"
              >
                <span>BUY NOW WITH 1-CLICK</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service & Assurance Props */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-black/10 text-[10px] font-mono text-[#4A4E54] uppercase tracking-wider text-center">
              <div className="p-2.5 bg-white border border-black/5 rounded-sm flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-[#0E6068]" />
                <span>FREE AIR SHIPPING</span>
              </div>
              <div className="p-2.5 bg-white border border-black/5 rounded-sm flex flex-col items-center gap-1">
                <RotateCcw className="w-4 h-4 text-[#C65A28]" />
                <span>7-DAY EASY EXCHANGES</span>
              </div>
              <div className="p-2.5 bg-white border border-black/5 rounded-sm flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#A37A24]" />
                <span>{product.material.split(' ')[0]} GSM DENSE</span>
              </div>
            </div>

            {/* Product Accordion Details */}
            <div className="space-y-2 pt-2 border-t border-black/10">
              {/* Product Details */}
              <div className="border border-black/10 rounded-sm overflow-hidden bg-white">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'details' ? null : 'details')}
                  className="w-full p-4 flex items-center justify-between text-xs font-mono font-bold tracking-wider uppercase text-[#111315] text-left hover:bg-black/5"
                >
                  <span>PRODUCT SPECIFICATIONS & DETAILS</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openAccordion === 'details' ? 'rotate-180 text-[#0E6068]' : ''
                    }`}
                  />
                </button>
                {openAccordion === 'details' && (
                  <div className="p-4 pt-0 text-xs font-secondary text-[#4A4E54] space-y-2 border-t border-black/5">
                    <p className="leading-relaxed">{product.description}</p>
                    <ul className="list-disc pl-4 space-y-1 pt-2 font-mono text-[11px]">
                      {product.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Fabric & Composition */}
              <div className="border border-black/10 rounded-sm overflow-hidden bg-white">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'fabric' ? null : 'fabric')}
                  className="w-full p-4 flex items-center justify-between text-xs font-mono font-bold tracking-wider uppercase text-[#111315] text-left hover:bg-black/5"
                >
                  <span>FABRIC & MATERIAL ARCHITECTURE</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openAccordion === 'fabric' ? 'rotate-180 text-[#0E6068]' : ''
                    }`}
                  />
                </button>
                {openAccordion === 'fabric' && (
                  <div className="p-4 pt-0 text-xs font-secondary text-[#4A4E54] space-y-2 border-t border-black/5">
                    <div className="font-mono text-[11px] space-y-1">
                      <p><span className="text-[#111315] font-bold">MATERIAL:</span> {product.material}</p>
                      <p><span className="text-[#111315] font-bold">COMPOSITION:</span> {product.composition}</p>
                      <p><span className="text-[#111315] font-bold">FIT PROFILE:</span> {product.fit}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Complete the Look / Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-10 border-t border-black/10">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-black/10">
              <div className="flex items-center gap-2 text-xs font-mono text-[#0E6068] uppercase tracking-widest font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>COMPLETE THE SILHOUETTE // PAIR WITH</span>
              </div>
              <Link href="/shop" className="text-xs font-mono text-[#757A82] hover:text-[#111315] uppercase tracking-wider underline underline-offset-4">
                EXPLORE ALL
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Size Guide Modal */}
      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
    </div>
  );
}
