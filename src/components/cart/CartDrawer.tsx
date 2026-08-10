'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { X, Trash2, ArrowRight, ShieldCheck, Sparkles, ShoppingBag } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    closeCartDrawer,
    removeItem,
    updateQuantity,
    subtotal,
    totalItems,
    appliedPromo,
    discount,
    shippingFee,
    finalTotal,
    applyPromoCode,
    removePromoCode,
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const success = applyPromoCode(promoInput);
    if (!success) {
      setPromoError('INVALID PROMO CODE. TRY "VOSTRA10"');
    } else {
      setPromoError('');
      setPromoInput('');
    }
  };

  const freeShippingThreshold = 999;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      {/* Backdrop */}
      <div
        onClick={closeCartDrawer}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity animate-fadeIn"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-black/10 text-[#111315] flex flex-col shadow-2xl animate-slideLeft">
          {/* Header */}
          <div className="px-6 py-5 border-b border-black/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-primary text-sm font-bold uppercase tracking-wider text-[#111315]">
                SHOPPING BAG
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono bg-black/5 rounded-sm text-[#757A82] font-bold">
                {totalItems} ITEMS
              </span>
            </div>
            <button
              onClick={closeCartDrawer}
              className="p-1.5 text-[#757A82] hover:text-[#111315] transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="px-6 py-3 bg-[#F7F7F5] border-b border-black/10 text-xs font-mono">
            {amountNeededForFreeShipping > 0 ? (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-[#4A4E54]">
                  <span>ADD ₹{amountNeededForFreeShipping.toLocaleString('en-IN')} MORE FOR FREE SHIPPING</span>
                  <span className="text-[#0E6068] font-bold">{shippingProgress}%</span>
                </div>
                <div className="w-full h-1 bg-black/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#0E6068] transition-all duration-500"
                    style={{ width: `${shippingProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-[#0E6068] text-[11px] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>UNLOCKED: COMPLIMENTARY EXPRESS SHIPPING!</span>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                <ShoppingBag className="w-12 h-12 text-[#757A82] stroke-1" />
                <div className="space-y-1">
                  <p className="font-primary text-sm font-bold uppercase tracking-wider text-[#111315]">
                    YOUR BAG IS EMPTY
                  </p>
                  <p className="text-xs font-secondary text-[#757A82]">
                    Explore new drops and archive collections.
                  </p>
                </div>
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
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.name}`}
                  className="flex gap-4 p-3 bg-[#F7F7F5] border border-black/10 rounded-sm relative group"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-24 flex-shrink-0 overflow-hidden rounded-[2px] border border-black/10 bg-white">
                    <img
                      src={item.product.imageUrl || 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800'}
                      alt={item.product.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <Link
                          href={`/products/${item.product.slug}`}
                          onClick={closeCartDrawer}
                          className="font-primary text-xs font-bold uppercase tracking-tight text-[#111315] hover:text-[#0E6068] truncate block pr-2"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.product.id, item.selectedSize, item.selectedColor.name)}
                          className="text-[#757A82] hover:text-[#C65A28] p-0.5"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] font-mono text-[#757A82]">
                        <span className="flex items-center gap-1">
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-black/20 inline-block"
                            style={{ backgroundColor: item.selectedColor.hex }}
                          />
                          <span>{item.selectedColor.name}</span>
                        </span>
                        <span>•</span>
                        <span>SIZE: {item.selectedSize}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-black/15 rounded-sm bg-white font-mono text-xs">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor.name,
                              item.quantity - 1
                            )
                          }
                          className="px-2 py-0.5 text-[#757A82] hover:text-[#111315]"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-[#111315]">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor.name,
                              item.quantity + 1
                            )
                          }
                          className="px-2 py-0.5 text-[#757A82] hover:text-[#111315]"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <span className="font-mono text-xs font-bold text-[#111315]">
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
            <div className="px-6 py-5 border-t border-black/10 bg-white space-y-3">
              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="space-y-1">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="PROMO CODE (TRY: VOSTRA10)"
                    className="flex-1 bg-[#F7F7F5] border border-black/15 px-3 py-2 text-xs font-mono uppercase tracking-wider text-[#111315] placeholder-[#757A82] focus:outline-none focus:border-black rounded-sm"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#111315] hover:bg-black text-white text-xs font-mono uppercase tracking-wider rounded-sm transition-colors"
                  >
                    APPLY
                  </button>
                </div>
                {promoError && (
                  <p className="text-[10px] font-mono text-[#C65A28]">{promoError}</p>
                )}
                {appliedPromo && (
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#0E6068] bg-[#E2ECEB] px-2 py-1 rounded-sm border border-[#0E6068]/30">
                    <span>CODE {appliedPromo} APPLIED (-{discount > 0 ? `₹${discount.toLocaleString('en-IN')}` : ''})</span>
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

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs font-mono pt-2 border-t border-black/10">
                <div className="flex justify-between text-[#757A82]">
                  <span>SUBTOTAL</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[#0E6068] font-bold">
                    <span>DISCOUNT</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#757A82]">
                  <span>SHIPPING</span>
                  <span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#111315] pt-1 border-t border-black/10">
                  <span>ESTIMATED TOTAL</span>
                  <span className="text-base font-primary font-bold">
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

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-[#757A82] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0E6068]" />
                <span>256-BIT ENCRYPTED RAZORPAY CHECKOUT</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
