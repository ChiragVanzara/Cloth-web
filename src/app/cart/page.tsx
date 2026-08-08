'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useToast } from '@/context/ToastContext';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { Trash2, Heart, ArrowRight, ShieldCheck, ShoppingBag, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CartPage() {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    discount,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    shippingFee,
    freeShippingThreshold,
    amountNeededForFreeShipping,
    finalTotal,
    totalItems,
  } = useCart();

  const { toggleWishlist } = useWishlist();
  const { showToast } = useToast();

  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    if (!promoInput.trim()) return;
    const success = applyPromoCode(promoInput);
    if (!success) {
      setPromoError('Invalid promo code. Try "VOSTRA10" for 10% off');
    } else {
      setPromoInput('');
      showToast('Promo code applied successfully!', 'success');
    }
  };

  const handleMoveToWishlist = (item: (typeof items)[0]) => {
    toggleWishlist(item.product);
    removeItem(item.product.id, item.selectedColor.name, item.selectedSize);
    showToast(`Moved ${item.product.name} to Wishlist`, 'info');
  };

  const shippingProgress = Math.min(100, Math.round(((freeShippingThreshold - amountNeededForFreeShipping) / freeShippingThreshold) * 100));

  if (items.length === 0) {
    return (
      <div className="bg-[#090A0B] text-white min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 select-none">
        <div className="w-16 h-16 rounded-full bg-[#121416] border border-white/10 flex items-center justify-center mb-6">
          <ShoppingBag className="w-8 h-8 text-white/40" />
        </div>
        <h1 className="display-md text-white font-primary font-bold uppercase tracking-tight mb-2">
          YOUR BAG IS CURRENTLY EMPTY
        </h1>
        <p className="text-xs sm:text-sm font-secondary text-white/60 max-w-md mb-8">
          Explore our seasonal drops, raw Japanese selvedge denim, or technical outerwear pieces.
        </p>
        <div className="flex gap-4">
          <Link href="/shop" className="btn-primary text-xs">
            START SHOPPING
          </Link>
          <Link href="/wishlist" className="btn-secondary text-xs">
            VIEW WISHLIST
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      {/* Header */}
      <div className="border-b border-white/10 bg-[#121416]/40 py-8">
        <div className="layout-container flex items-center justify-between">
          <div>
            <div className="text-xs font-mono text-[#1ECAD3] tracking-widest uppercase font-bold">
              ORDER RECONCILIATION
            </div>
            <h1 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
              SHOPPING BAG ({totalItems} ITEMS)
            </h1>
          </div>
          <button
            onClick={clearCart}
            className="text-xs font-mono text-white/40 hover:text-[#C65A28] uppercase underline"
          >
            CLEAR BAG
          </button>
        </div>
      </div>

      <div className="layout-container pt-8">
        {/* Free Shipping Meter Banner */}
        <div className="p-4 bg-[#121416] border border-white/10 rounded-sm mb-8">
          {amountNeededForFreeShipping > 0 ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white/80">
                  ADD ₹{amountNeededForFreeShipping.toLocaleString('en-IN')} MORE TO UNLOCK COMPLIMENTARY EXPRESS AIR SHIPPING
                </span>
                <span className="text-[#1ECAD3] font-bold">{shippingProgress}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#123A3F] via-[#1ECAD3] to-[#C65A28] transition-all duration-500"
                  style={{ width: `${shippingProgress}%` }}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-xs font-mono text-[#1ECAD3] font-bold">
              <Sparkles className="w-4 h-4" />
              <span>COMPLIMENTARY EXPRESS AIR SHIPPING UNLOCKED FOR THIS ORDER</span>
            </div>
          )}
        </div>

        {/* 2-Column Checkout Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Items Table (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`}
                className="p-4 sm:p-6 bg-[#121416] border border-white/10 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6"
              >
                {/* Product Thumbnail and Info */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-20 sm:w-24 flex-shrink-0">
                    <MediaPlaceholder
                      type="product"
                      aspectRatio="4/5"
                      label={item.product.category}
                      gradient={item.product.placeholderGradient}
                      showCoordinates={false}
                      showGridLines={false}
                      className="w-full rounded-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
                      {item.product.outfitCategory}
                    </span>
                    <Link
                      href={`/products/${item.product.slug}`}
                      className="font-primary text-sm sm:text-base font-bold uppercase text-white hover:text-[#1ECAD3] transition-colors block"
                    >
                      {item.product.name}
                    </Link>
                    <div className="flex items-center gap-3 text-xs font-mono text-white/70 pt-1">
                      <span>SIZE: <strong className="text-white">{item.selectedSize}</strong></span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block border border-white/30"
                          style={{ backgroundColor: item.selectedColor.hex }}
                        />
                        {item.selectedColor.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions: Quantity, Price, Move to Wishlist, Remove */}
                <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
                  {/* Quantity */}
                  <div className="flex items-center border border-white/20 rounded-sm font-mono text-xs bg-black/40">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.selectedColor.name,
                          item.selectedSize,
                          item.quantity - 1
                        )
                      }
                      className="px-2.5 py-1 text-white/60 hover:text-white"
                    >
                      -
                    </button>
                    <span className="px-3 font-bold text-white">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.selectedColor.name,
                          item.selectedSize,
                          item.quantity + 1
                        )
                      }
                      className="px-2.5 py-1 text-white/60 hover:text-white"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right">
                    <span className="font-mono text-sm sm:text-base font-bold text-white">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Quick Action Icons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleMoveToWishlist(item)}
                      title="Move to Wishlist"
                      className="p-1.5 text-white/40 hover:text-[#C65A28] transition-colors"
                      aria-label="Move to Wishlist"
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        removeItem(item.product.id, item.selectedColor.name, item.selectedSize)
                      }
                      title="Remove Item"
                      className="p-1.5 text-white/40 hover:text-[#C65A28] transition-colors"
                      aria-label="Remove Item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary & Checkout Box (4 cols) */}
          <div className="lg:col-span-4">
            <div className="p-6 bg-[#121416] border border-white/15 rounded-sm space-y-6 sticky top-24">
              <h3 className="font-primary text-base font-bold uppercase tracking-wider text-white border-b border-white/10 pb-3">
                ORDER BREAKDOWN
              </h3>

              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="space-y-1.5">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="PROMO CODE (VOSTRA10)"
                    className="flex-1 bg-black/50 border border-white/15 px-3 py-2.5 text-xs font-mono uppercase tracking-wider text-white placeholder-white/30 focus:outline-none focus:border-white rounded-sm"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider border border-white/15 rounded-sm transition-colors"
                  >
                    APPLY
                  </button>
                </div>
                {promoError && (
                  <p className="text-[10px] font-mono text-[#C65A28]">{promoError}</p>
                )}
                {appliedPromo && (
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#1ECAD3] bg-[#123A3F]/30 p-2 rounded-sm border border-[#1ECAD3]/30">
                    <span>COUPON {appliedPromo} ACTIVE</span>
                    <button
                      type="button"
                      onClick={removePromoCode}
                      className="text-white/60 hover:text-white underline"
                    >
                      REMOVE
                    </button>
                  </div>
                )}
              </form>

              {/* Line Item Breakdown */}
              <div className="space-y-2 text-xs font-mono border-t border-white/10 pt-4">
                <div className="flex justify-between text-white/60">
                  <span>CART SUBTOTAL</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[#1ECAD3]">
                    <span>PROMO SAVINGS</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-white/60">
                  <span>EXPRESS AIR SHIPPING</span>
                  <span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base font-bold text-white pt-2 border-t border-white/10">
                  <span>ESTIMATED TOTAL</span>
                  <span className="font-primary text-lg sm:text-xl">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <Link
                  href="/checkout"
                  className="w-full btn-primary text-xs py-4 flex items-center justify-center gap-2 font-bold"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/shop"
                  className="w-full btn-secondary text-xs py-3 flex items-center justify-center text-center block"
                >
                  CONTINUE SHOPPING
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-white/40 pt-2 border-t border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#1ECAD3]" />
                <span>ENCRYPTED 256-BIT PAYMENT PROTECTION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
