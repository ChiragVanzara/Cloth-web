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
    removeItem(item.product.id, item.selectedSize, item.selectedColor.name);
    showToast(`Moved ${item.product.name} to Wishlist`, 'info');
  };

  const shippingProgress = Math.min(100, Math.round(((freeShippingThreshold - amountNeededForFreeShipping) / freeShippingThreshold) * 100));

  if (items.length === 0) {
    return (
      <div className="bg-[#F7F7F5] text-[#111315] min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 select-none">
        <div className="w-16 h-16 rounded-full bg-white border border-black/10 flex items-center justify-center mb-6 shadow-sm">
          <ShoppingBag className="w-8 h-8 text-[#757A82]" />
        </div>
        <h1 className="display-md text-[#111315] font-primary font-bold uppercase tracking-tight mb-2">
          YOUR BAG IS CURRENTLY EMPTY
        </h1>
        <p className="text-xs sm:text-sm font-secondary text-[#4A4E54] max-w-md mb-8">
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
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      {/* Header */}
      <div className="border-b border-black/10 bg-white py-8">
        <div className="vostra-container flex items-center justify-between">
          <div>
            <div className="text-xs font-mono text-[#0E6068] tracking-widest uppercase font-bold">
              ORDER RECONCILIATION
            </div>
            <h1 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
              SHOPPING BAG ({totalItems} ITEMS)
            </h1>
          </div>
          <button
            onClick={clearCart}
            className="text-xs font-mono text-[#757A82] hover:text-[#C65A28] uppercase underline font-bold"
          >
            CLEAR BAG
          </button>
        </div>
      </div>

      <div className="vostra-container pt-8">
        {/* Free Shipping Meter Banner */}
        <div className="p-4 bg-white border border-black/10 rounded-sm mb-8 shadow-sm">
          {amountNeededForFreeShipping > 0 ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#4A4E54]">
                  ADD ₹{amountNeededForFreeShipping.toLocaleString('en-IN')} MORE TO UNLOCK COMPLIMENTARY EXPRESS AIR SHIPPING
                </span>
                <span className="text-[#0E6068] font-bold">{shippingProgress}%</span>
              </div>
              <div className="w-full h-1.5 bg-black/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0E6068] transition-all duration-500"
                  style={{ width: `${shippingProgress}%` }}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-xs font-mono text-[#0E6068] font-bold">
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
                className="p-4 sm:p-6 bg-white border border-black/10 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 shadow-sm"
              >
                {/* Product Thumbnail and Info */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-20 sm:w-24 flex-shrink-0">
                    <img
                      src={item.product.imageUrl || 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800'}
                      alt={item.product.name}
                      className="w-full h-24 object-cover object-center rounded-sm border border-black/10"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#757A82] uppercase tracking-widest">
                      {item.product.outfitCategory}
                    </span>
                    <Link
                      href={`/products/${item.product.slug}`}
                      className="font-primary text-sm sm:text-base font-bold uppercase text-[#111315] hover:text-[#0E6068] transition-colors block"
                    >
                      {item.product.name}
                    </Link>

                    <div className="flex items-center gap-3 text-xs font-mono text-[#757A82]">
                      <span className="flex items-center gap-1">
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-black/20"
                          style={{ backgroundColor: item.selectedColor.hex }}
                        />
                        <span>{item.selectedColor.name}</span>
                      </span>
                      <span>•</span>
                      <span>SIZE: {item.selectedSize}</span>
                    </div>

                    <div className="pt-2 flex items-center gap-4 text-xs font-mono">
                      <button
                        onClick={() => handleMoveToWishlist(item)}
                        className="text-[#757A82] hover:text-[#111315] flex items-center gap-1 uppercase"
                      >
                        <Heart className="w-3 h-3" />
                        <span>SAVE TO WISHLIST</span>
                      </button>
                      <button
                        onClick={() => removeItem(item.product.id, item.selectedSize, item.selectedColor.name)}
                        className="text-[#757A82] hover:text-[#C65A28] flex items-center gap-1 uppercase"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>REMOVE</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quantity and Line Total */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-black/10">
                  <div className="flex items-center border border-black/15 rounded-sm bg-[#F7F7F5] font-mono text-xs">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.selectedSize,
                          item.selectedColor.name,
                          item.quantity - 1
                        )
                      }
                      className="px-2.5 py-1 text-[#757A82] hover:text-[#111315]"
                    >
                      -
                    </button>
                    <span className="px-3 font-bold text-[#111315]">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.selectedSize,
                          item.selectedColor.name,
                          item.quantity + 1
                        )
                      }
                      className="px-2.5 py-1 text-[#757A82] hover:text-[#111315]"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <div className="text-base sm:text-lg font-mono font-bold text-[#111315]">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                    {item.quantity > 1 && (
                      <span className="text-[10px] font-mono text-[#757A82]">
                        (₹{item.product.price.toLocaleString('en-IN')} each)
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Box (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-white border border-black/10 rounded-sm space-y-6 shadow-sm">
              <h2 className="heading-lg text-[#111315] font-primary font-bold uppercase tracking-tight">
                ORDER SUMMARY
              </h2>

              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="PROMO CODE"
                    className="flex-1 bg-[#F7F7F5] border border-black/15 px-3 py-2 text-xs font-mono uppercase text-[#111315] placeholder-[#757A82] focus:outline-none focus:border-black rounded-sm"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#111315] hover:bg-black text-white text-xs font-mono uppercase rounded-sm transition-colors"
                  >
                    APPLY
                  </button>
                </div>
                {promoError && (
                  <p className="text-[10px] font-mono text-[#C65A28]">{promoError}</p>
                )}
                {appliedPromo && (
                  <div className="flex items-center justify-between text-xs font-mono text-[#0E6068] bg-[#E2ECEB] px-3 py-1.5 rounded-sm border border-[#0E6068]/30">
                    <span>CODE "{appliedPromo}" APPLIED</span>
                    <button
                      type="button"
                      onClick={removePromoCode}
                      className="text-[#757A82] hover:text-[#111315] underline"
                    >
                      REMOVE
                    </button>
                  </div>
                )}
              </form>

              {/* Price Calculations */}
              <div className="space-y-2.5 text-xs font-mono border-t border-black/10 pt-4">
                <div className="flex justify-between text-[#757A82]">
                  <span>SUBTOTAL</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-[#0E6068] font-bold">
                    <span>PROMO DISCOUNT (10%)</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#757A82]">
                  <span>EXPRESS AIR SHIPPING</span>
                  <span>{shippingFee === 0 ? 'COMPLIMENTARY' : `₹${shippingFee}`}</span>
                </div>

                <div className="flex justify-between text-sm font-bold text-[#111315] pt-3 border-t border-black/10">
                  <span>TOTAL DUE</span>
                  <span className="text-lg font-primary">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <Link
                href="/checkout"
                className="w-full btn-primary flex items-center justify-center gap-2 py-4"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Assurances */}
              <div className="space-y-2 pt-4 border-t border-black/10 text-[11px] font-mono text-[#757A82]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0E6068]" />
                  <span>256-BIT ENCRYPTED RAZORPAY CHECKOUT</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0E6068]" />
                  <span>7-DAY UNCONDITIONAL FIT RETURNS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
