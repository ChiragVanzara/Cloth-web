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
  const [selectedMediaAngle, setSelectedMediaAngle] = useState<number>(0);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);

  // Accordion open states
  const [openAccordion, setOpenAccordion] = useState<string | null>('details');

  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

  const isSaved = isInWishlist(product.id);

  const mediaAngles = [
    { label: 'ANGLE 01 // FRONT ELEVATION', type: 'product', gradient: product.placeholderGradient },
    { label: 'ANGLE 02 // 45° PROFILE', type: 'editorial', gradient: 'linear-gradient(135deg, #121416 0%, #182A3A 60%, #090A0B 100%)' },
    { label: 'ANGLE 03 // MACRO TEXTURE & SEAMS', type: 'square', gradient: 'linear-gradient(135deg, #1B1F22 0%, #123A3F 50%, #090A0B 100%)' },
    { label: 'ANGLE 04 // STUDIO DRAPE & FIT', type: 'portrait', gradient: 'linear-gradient(135deg, #682C21 0%, #090A0B 60%, #121416 100%)' },
  ];

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
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      {/* Breadcrumb Bar */}
      <div className="border-b border-white/10 bg-[#121416]/30 py-3">
        <div className="layout-container flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-white/50">
          <Link href="/" className="hover:text-white">HOME</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-white">SHOP</Link>
          <span>/</span>
          <Link href={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-white">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-white truncate">{product.name}</span>
        </div>
      </div>

      <div className="layout-container pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: 4:5 Media Gallery with Multi-Angle Thumbnails (7 cols) */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails Row/Column */}
            <div className="flex sm:flex-col gap-2.5 overflow-x-auto sm:overflow-visible no-scrollbar flex-shrink-0">
              {mediaAngles.map((angle, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedMediaAngle(idx)}
                  className={`w-16 h-20 sm:w-20 sm:h-24 rounded-[2px] border overflow-hidden transition-all ${
                    selectedMediaAngle === idx
                      ? 'border-[#1ECAD3] ring-1 ring-[#1ECAD3]/40'
                      : 'border-white/15 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`View ${angle.label}`}
                >
                  <MediaPlaceholder
                    type="thumbnail"
                    aspectRatio="4/5"
                    gradient={angle.gradient}
                    showGridLines={false}
                    showCoordinates={false}
                    label={`VIEW 0${idx + 1}`}
                    className="w-full h-full"
                  />
                </button>
              ))}
            </div>

            {/* Main Stage Media Slot (4:5) */}
            <div className="flex-1 relative rounded-[2px] border border-white/15 overflow-hidden">
              <MediaPlaceholder
                type="product"
                aspectRatio="4/5"
                gradient={mediaAngles[selectedMediaAngle].gradient}
                label={mediaAngles[selectedMediaAngle].label}
                subLabel={`${product.material} // ${selectedColor.name}`}
                className="w-full min-h-[440px] sm:min-h-[620px]"
              />

              {/* Floating Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase rounded-sm bg-black/80 border border-white/20 text-[#1ECAD3] backdrop-blur-md">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Product Info & Purchasing UI (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Header Meta */}
            <div className="space-y-2 border-b border-white/10 pb-4">
              <div className="flex items-center justify-between text-xs font-mono text-white/50 tracking-widest uppercase">
                <span>VOSTRA STUDIO // {product.outfitCategory}</span>
                <div className="flex items-center gap-1 text-[#C59A3A]">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-bold text-white">{product.rating}</span>
                  <span className="text-white/40">({product.reviewCount} REVIEWS)</span>
                </div>
              </div>

              <h1 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
                {product.name}
              </h1>

              {/* Price & Discounts */}
              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-2xl sm:text-3xl font-mono font-bold text-white">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.compareAtPrice && (
                  <span className="text-sm font-mono text-white/40 line-through">
                    ₹{product.compareAtPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {product.discountPercent && (
                  <span className="px-2 py-0.5 text-xs font-mono font-bold uppercase bg-[#C65A28] text-white rounded-sm">
                    SAVE {product.discountPercent}%
                  </span>
                )}
              </div>
              <p className="text-[11px] font-mono text-[#1ECAD3]">
                INCLUSIVE OF ALL TAXES • FREE EXPRESS SHIPPING ON THIS ITEM
              </p>
            </div>

            {/* Color Selection */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white/60 uppercase">COLOR:</span>
                <span className="font-bold text-white uppercase">{selectedColor.name}</span>
              </div>
              <div className="flex items-center gap-3">
                {product.colors.map((color) => {
                  const isSelected = selectedColor.name === color.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`relative w-9 h-9 rounded-full border transition-all ${
                        isSelected
                          ? 'border-white scale-110 ring-2 ring-white/50'
                          : 'border-white/30 hover:border-white/60 opacity-80'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      aria-label={`Select color ${color.name}`}
                    >
                      {isSelected && (
                        <span className="absolute inset-0 flex items-center justify-center text-white drop-shadow">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Size Selection & Guide Modal Trigger */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-white/60 uppercase">SELECT SIZE:</span>
                  <span className="font-bold text-white">{selectedSize}</span>
                </div>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="flex items-center gap-1 text-[#1ECAD3] hover:underline uppercase text-[11px]"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>SIZE GUIDE</span>
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2 font-mono">
                {product.sizes.map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-center text-xs font-bold uppercase rounded-sm border transition-all ${
                        isSelected
                          ? 'bg-white text-black border-white shadow-lg'
                          : 'bg-[#121416] text-white/80 border-white/15 hover:border-white/40'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-white/50 pt-1">
                <span>FIT: {product.fit.toUpperCase()} SILHOUETTE</span>
                <span className="text-[#C65A28]">ONLY 4 PIECES REMAINING IN SIZE {selectedSize}</span>
              </div>
            </div>

            {/* Quantity Selector & Purchase CTAs */}
            <div className="space-y-3 pt-2">
              <div className="flex gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-white/20 rounded-sm bg-[#121416] text-sm font-mono px-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-white/60 hover:text-white"
                  >
                    -
                  </button>
                  <span className="px-3 font-bold text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-white/60 hover:text-white"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 btn-primary text-xs py-3.5 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO BAG</span>
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={handleWishlist}
                  className={`p-3.5 border rounded-sm transition-colors ${
                    isSaved
                      ? 'bg-[#C65A28] border-[#C65A28] text-white'
                      : 'bg-[#121416] border-white/20 text-white/70 hover:text-white hover:border-white/50'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Instant Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="w-full btn-accent text-xs py-3.5 flex items-center justify-center gap-2 font-bold"
              >
                <span>BUY NOW WITH 1-CLICK CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Product Value Props Strip */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-[11px] font-mono text-white/60">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#1ECAD3]" />
                <span>2-4 DAY DISPATCH</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-[#C65A28]" />
                <span>7-DAY EASY PICKUP</span>
              </div>
            </div>

            {/* Accordion Tabs for Details, Material, Fit, Care, Shipping */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              {/* Tab 1: Details & Construction */}
              <div className="border border-white/10 rounded-sm overflow-hidden bg-[#121416]">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'details' ? null : 'details')}
                  className="w-full px-4 py-3 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-left"
                >
                  <span>PRODUCT DETAILS & ARCHITECTURAL SPECS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'details' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'details' && (
                  <div className="px-4 pb-4 text-xs font-secondary text-white/70 space-y-2 border-t border-white/5 pt-3">
                    <p>{product.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-white/60">
                      {product.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Tab 2: Material & Care */}
              <div className="border border-white/10 rounded-sm overflow-hidden bg-[#121416]">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'material' ? null : 'material')}
                  className="w-full px-4 py-3 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-left"
                >
                  <span>MATERIAL & TEXTILE COMPOSITION</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'material' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'material' && (
                  <div className="px-4 pb-4 text-xs font-secondary text-white/70 space-y-2 border-t border-white/5 pt-3">
                    <p><strong className="text-white">Fabric:</strong> {product.material}</p>
                    <p><strong className="text-white">Composition:</strong> {product.composition}</p>
                    <div className="pt-2">
                      <strong className="text-white block mb-1">Care Guide:</strong>
                      <ul className="list-disc list-inside space-y-1 text-white/60">
                        {product.careInstructions.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Tab 3: Shipping & Returns */}
              <div className="border border-white/10 rounded-sm overflow-hidden bg-[#121416]">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
                  className="w-full px-4 py-3 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-left"
                >
                  <span>SHIPPING & 7-DAY REVERSE PICKUP</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'shipping' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'shipping' && (
                  <div className="px-4 pb-4 text-xs font-secondary text-white/70 space-y-1.5 border-t border-white/5 pt-3">
                    <p>• Complimentary air express shipping on domestic orders over ₹999.</p>
                    <p>• Hassle-free 7-day doorstep exchange and refund service.</p>
                    <p>• Packed in our signature biodegradable matte charcoal dust bags.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Grid */}
        <div className="pt-16 mt-16 border-t border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
              COMPLETE THE LOOK // RELATED PIECES
            </h3>
            <Link href="/shop" className="text-xs font-mono text-white/60 hover:text-white uppercase underline">
              EXPLORE MORE
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        category={product.category}
      />
    </div>
  );
}
