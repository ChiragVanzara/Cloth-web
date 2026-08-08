'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, Trash2, ArrowRight, ShieldCheck, ShoppingBag, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartDrawerOpen,
    closeCartDrawer,
    updateQuantity,
    removeItem,
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

  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  if (!isCartDrawerOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    if (!promoInput.trim()) return;
    const success = applyPromoCode(promoInput);
    if (!success) {
      setPromoError('Invalid code. Try "VOSTRA10" for 10% off');
    } else {
      setPromoInput('');
    }
  };

  const shippingProgress = Math.min(100, Math.round(((freeShippingThreshold - amountNeededForFreeShipping) / freeShippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      {/* Backdrop */}
      <div
        onClick={closeCartDrawer}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-fadeIn"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#090A0B] border-l border-white/10 text-white flex flex-col shadow-2xl animate-slideLeft">
          {/* Header */}
          <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-primary text-sm font-bold uppercase tracking-wider">
                SHOPPING BAG
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono bg-white/10 rounded-sm text-white/70">
                {totalItems} ITEMS
              </span>
            </div>
            <button
              onClick={closeCartDrawer}
              className="p-1.5 text-white/60 hover:text-white transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="px-6 py-3 bg-[#121416] border-b border-white/10 text-xs font-mono">
            {amountNeededForFreeShipping > 0 ? (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-white/80">
                  <span>ADD ₹{amountNeededForFreeShipping.toLocaleString('en-IN')} MORE FOR FREE SHIPPING</span>
                  <span className="text-[#1ECAD3]">{shippingProgress}%</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#123A3F] to-[#1ECAD3] transition-all duration-500"
                    style={{ width: `${shippingProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-[#1ECAD3] text-[11px] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>UNLOCKED: COMPLIMENTARY EXPRESS SHIPPING!</span>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <ShoppingBag className="w-12 h-12 text-white/20 mb-3" />
                <h3 className="font-primary text-base font-bold uppercase tracking-wider mb-1">
                  YOUR BAG IS CURRENTLY EMPTY
                </h3>
                <p className="text-xs font-secondary text-white/50 max-w-xs mb-6">
                  Explore our latest drop of heavyweight tees, raw Japanese selvedge denim, and structured outerwear.
                </p>
                <Link
                  href="/shop"
                  onClick={closeCartDrawer}
                  className="btn-primary text-xs"
                >
                  START SHOPPING
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`}
                  className="flex gap-4 p-3 bg-[#121416] border border-white/10 rounded-sm"
                >
                  {/* Thumbnail Placeholder */}
                  <div className="w-20 flex-shrink-0">
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

                  {/* Item Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/products/${item.product.slug}`}
                          onClick={closeCartDrawer}
                          className="font-primary text-xs font-semibold text-white hover:text-[#1ECAD3] line-clamp-1 uppercase transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() =>
                            removeItem(item.product.id, item.selectedColor.name, item.selectedSize)
                          }
                          className="text-white/40 hover:text-[#C65A28] transition-colors p-0.5"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-white/60">
                        <span>SIZE: {item.selectedSize}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <span
                            className="w-2 h-2 rounded-full inline-block border border-white/20"
                            style={{ backgroundColor: item.selectedColor.hex }}
                          />
                          {item.selectedColor.name}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/10">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-white/20 rounded-sm text-xs font-mono">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedColor.name,
                              item.selectedSize,
                              item.quantity - 1
                            )
                          }
                          className="px-2 py-0.5 text-white/60 hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 text-white font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedColor.name,
                              item.selectedSize,
                              item.quantity + 1
                            )
                          }
                          className="px-2 py-0.5 text-white/60 hover:text-white"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <span className="font-mono text-xs font-bold text-white">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with Calculations and Checkout */}
          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-white/10 bg-[#090A0B] space-y-3">
              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="space-y-1">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="PROMO CODE (TRY: VOSTRA10)"
                    className="flex-1 bg-[#121416] border border-white/15 px-3 py-2 text-xs font-mono uppercase tracking-wider text-white placeholder-white/30 focus:outline-none focus:border-white"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider border border-white/15 transition-colors"
                  >
                    APPLY
                  </button>
                </div>
                {promoError && (
                  <p className="text-[10px] font-mono text-[#C65A28]">{promoError}</p>
                )}
                {appliedPromo && (
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#1ECAD3] bg-[#123A3F]/30 px-2 py-1 rounded-sm border border-[#1ECAD3]/30">
                    <span>CODE {appliedPromo} APPLIED (-{discount > 0 ? `₹${discount.toLocaleString('en-IN')}` : ''})</span>
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

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs font-mono pt-2 border-t border-white/10">
                <div className="flex justify-between text-white/60">
                  <span>SUBTOTAL</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[#1ECAD3]">
                    <span>DISCOUNT</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-white/60">
                  <span>SHIPPING</span>
                  <span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-1 border-t border-white/10">
                  <span>ESTIMATED TOTAL</span>
                  <span className="text-base font-primary">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <Link
                  href="/checkout"
                  onClick={closeCartDrawer}
                  className="w-full btn-primary text-xs flex items-center justify-center gap-2 py-3"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/cart"
                  onClick={closeCartDrawer}
                  className="w-full btn-secondary text-xs flex items-center justify-center py-2.5"
                >
                  VIEW FULL CART
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-white/40 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1ECAD3]" />
                <span>256-BIT ENCRYPTED SECURE CHECKOUT</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
