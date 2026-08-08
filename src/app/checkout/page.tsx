'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import {
  ShieldCheck,
  Truck,
  CreditCard,
  QrCode,
  Building2,
  Banknote,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Lock,
} from 'lucide-react';

export default function CheckoutPage() {
  const { items, subtotal, discount, shippingFee, finalTotal, clearCart } = useCart();
  const { showToast } = useToast();

  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details');

  // Form Fields
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    fullName: '',
    street: '',
    apartment: '',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    deliveryMethod: 'express',
    paymentMethod: 'upi',
    upiId: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
  });

  const [orderNumber, setOrderNumber] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.phone || !formData.fullName || !formData.street) {
      showToast('Please complete all shipping address fields', 'error');
      return;
    }
    setStep('payment');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrderNum = 'VOS-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(generatedOrderNum);
    setStep('confirmation');
    clearCart();
    showToast(`Order ${generatedOrderNum} confirmed!`, 'success');
  };

  if (step === 'confirmation') {
    return (
      <div className="bg-[#090A0B] text-white min-h-screen py-20 select-none">
        <div className="layout-container max-w-2xl mx-auto text-center space-y-6 bg-[#121416] p-8 sm:p-12 border border-white/15 rounded-sm shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-[#123A3F] border border-[#1ECAD3]/40 flex items-center justify-center mx-auto text-[#1ECAD3]">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-[#1ECAD3] uppercase font-bold tracking-widest">
              ORDER RECONCILED & DISPATCH READY
            </span>
            <h1 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
              THANK YOU, {formData.fullName.toUpperCase()}!
            </h1>
            <p className="text-xs sm:text-sm font-secondary text-white/70">
              We have received your order. A confirmation email and tracking link have been dispatched to{' '}
              <strong className="text-white">{formData.email || 'your email'}</strong>.
            </p>
          </div>

          <div className="p-4 bg-[#090A0B] border border-white/10 rounded-sm text-left font-mono text-xs space-y-2">
            <div className="flex justify-between text-white/60">
              <span>ORDER REFERENCE:</span>
              <strong className="text-white">{orderNumber}</strong>
            </div>
            <div className="flex justify-between text-white/60">
              <span>DELIVERY ADDRESS:</span>
              <span className="text-white truncate max-w-xs">{formData.street}, {formData.city}</span>
            </div>
            <div className="flex justify-between text-white/60">
              <span>PAYMENT STATUS:</span>
              <span className="text-[#1ECAD3] font-bold">PREPAID VIA {formData.paymentMethod.toUpperCase()}</span>
            </div>
            <div className="flex justify-between text-white/60 pt-2 border-t border-white/10">
              <span>TOTAL PAID:</span>
              <strong className="text-white text-sm">₹{finalTotal.toLocaleString('en-IN')}</strong>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/account/orders" className="btn-primary text-xs">
              VIEW ORDERS IN ACCOUNT
            </Link>
            <Link href="/shop" className="btn-secondary text-xs">
              RETURN TO CATALOG
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      {/* Checkout Breadcrumb Header */}
      <div className="border-b border-white/10 bg-[#121416]/40 py-6">
        <div className="layout-container flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/cart" className="p-1 text-white/60 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-primary text-lg sm:text-xl font-bold uppercase tracking-tight">
              EXPRESS CHECKOUT
            </h1>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-white/60">
            <Lock className="w-3.5 h-3.5 text-[#1ECAD3]" />
            <span>256-BIT ENCRYPTED</span>
          </div>
        </div>
      </div>

      <div className="layout-container pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Form Area (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {step === 'details' ? (
              <form onSubmit={handleProceedToPayment} className="space-y-6">
                {/* 1. Contact Information */}
                <div className="p-6 bg-[#121416] border border-white/10 rounded-sm space-y-4">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-[#1ECAD3] uppercase">
                    01. CONTACT DETAILS
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-white/60 uppercase mb-1">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@domain.com"
                        className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-white/60 uppercase mb-1">
                        PHONE NUMBER (FOR SMS TRACKING) *
                      </label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Shipping Address */}
                <div className="p-6 bg-[#121416] border border-white/10 rounded-sm space-y-4">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-[#1ECAD3] uppercase">
                    02. DELIVERY ADDRESS (INDIA)
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-mono text-white/60 uppercase mb-1">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Sureshkumar Vanzara"
                        className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-white/60 uppercase mb-1">
                        STREET ADDRESS & BUILDING *
                      </label>
                      <input
                        type="text"
                        required
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                        placeholder="Flat / Floor / Street Name"
                        className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-white/60 uppercase mb-1">
                          CITY *
                        </label>
                        <input
                          type="text"
                          required
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-white/60 uppercase mb-1">
                          STATE *
                        </label>
                        <input
                          type="text"
                          required
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-white/60 uppercase mb-1">
                          PINCODE *
                        </label>
                        <input
                          type="text"
                          required
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Delivery Method */}
                <div className="p-6 bg-[#121416] border border-white/10 rounded-sm space-y-4">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-[#1ECAD3] uppercase">
                    03. SHIPPING SPEED
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`flex items-center justify-between p-3.5 rounded-sm border cursor-pointer ${
                        formData.deliveryMethod === 'express'
                          ? 'border-[#1ECAD3] bg-[#123A3F]/20 text-white'
                          : 'border-white/10 bg-[#090A0B] text-white/60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="deliveryMethod"
                          value="express"
                          checked={formData.deliveryMethod === 'express'}
                          onChange={handleInputChange}
                          className="accent-[#1ECAD3]"
                        />
                        <div>
                          <div className="text-xs font-mono font-bold uppercase">STANDARD AIR EXPRESS</div>
                          <div className="text-[10px] text-white/50">2-4 BUSINESS DAYS</div>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#1ECAD3]">FREE</span>
                    </label>

                    <label
                      className={`flex items-center justify-between p-3.5 rounded-sm border cursor-pointer ${
                        formData.deliveryMethod === 'priority'
                          ? 'border-[#C65A28] bg-[#682C21]/20 text-white'
                          : 'border-white/10 bg-[#090A0B] text-white/60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="deliveryMethod"
                          value="priority"
                          checked={formData.deliveryMethod === 'priority'}
                          onChange={handleInputChange}
                          className="accent-[#C65A28]"
                        />
                        <div>
                          <div className="text-xs font-mono font-bold uppercase">NEXT-DAY METRO DROP</div>
                          <div className="text-[10px] text-white/50">GUARANTEED 24 HOURS</div>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-white">₹199</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-xs py-4 flex items-center justify-center gap-2 font-bold"
                >
                  <span>CONTINUE TO PAYMENT METHOD</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              /* Payment Step */
              <form onSubmit={handlePlaceOrder} className="space-y-6">
                <div className="p-6 bg-[#121416] border border-white/10 rounded-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-mono font-bold tracking-widest text-[#1ECAD3] uppercase">
                      04. PAYMENT ARCHITECTURE
                    </h3>
                    <button
                      type="button"
                      onClick={() => setStep('details')}
                      className="text-[11px] font-mono text-white/60 hover:text-white underline uppercase"
                    >
                      EDIT ADDRESS
                    </button>
                  </div>

                  {/* Payment Method Selector */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'upi', label: 'UPI / QR', icon: QrCode },
                      { id: 'card', label: 'CARDS', icon: CreditCard },
                      { id: 'netbanking', label: 'NETBANKING', icon: Building2 },
                      { id: 'cod', label: 'CASH ON DELIVERY', icon: Banknote },
                    ].map((pm) => {
                      const Icon = pm.icon;
                      const isSelected = formData.paymentMethod === pm.id;
                      return (
                        <button
                          key={pm.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, paymentMethod: pm.id })}
                          className={`p-3 rounded-sm border flex flex-col items-center gap-2 text-xs font-mono uppercase transition-all ${
                            isSelected
                              ? 'bg-white text-black font-bold border-white shadow-lg'
                              : 'bg-[#090A0B] text-white/70 border-white/10 hover:border-white/30'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span>{pm.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* UPI Inputs */}
                  {formData.paymentMethod === 'upi' && (
                    <div className="pt-4 border-t border-white/10 space-y-3">
                      <label className="block text-[11px] font-mono text-white/60 uppercase">
                        ENTER UPI ID (GPay, PhonePe, Paytm, CRED)
                      </label>
                      <input
                        type="text"
                        name="upiId"
                        value={formData.upiId}
                        onChange={handleInputChange}
                        placeholder="username@okhdfcbank"
                        className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white"
                      />
                      <p className="text-[10px] font-mono text-[#1ECAD3]">
                        A payment prompt will be dispatched instantly to your UPI application.
                      </p>
                    </div>
                  )}

                  {/* Card Inputs */}
                  {formData.paymentMethod === 'card' && (
                    <div className="pt-4 border-t border-white/10 space-y-3">
                      <div>
                        <label className="block text-[11px] font-mono text-white/60 uppercase mb-1">
                          CARD NUMBER
                        </label>
                        <input
                          type="text"
                          placeholder="4532 •••• •••• 8892"
                          className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="MM / YY"
                          className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white"
                        />
                        <input
                          type="password"
                          placeholder="CVV"
                          maxLength={4}
                          className="w-full bg-[#090A0B] border border-white/15 px-3.5 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white"
                        />
                      </div>
                    </div>
                  )}

                  {/* COD Notice */}
                  {formData.paymentMethod === 'cod' && (
                    <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/70 space-y-1">
                      <p>• Verification OTP will be sent to +91 {formData.phone || 'your phone'} before drop delivery.</p>
                      <p>• Exact cash or UPI at doorstep accepted.</p>
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep('details')}
                    className="btn-secondary text-xs px-6 py-4"
                  >
                    BACK
                  </button>
                  <button
                    type="submit"
                    className="flex-1 btn-accent text-xs py-4 flex items-center justify-center gap-2 font-bold"
                  >
                    <span>CONFIRM & PLACE ORDER (₹{finalTotal.toLocaleString('en-IN')})</span>
                    <ShieldCheck className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Order Summary (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 bg-[#121416] border border-white/15 rounded-sm space-y-4 sticky top-24">
              <h3 className="font-primary text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-3">
                ORDER REVIEW ({items.length} ITEMS)
              </h3>

              {/* Items Mini List */}
              <div className="max-h-60 overflow-y-auto space-y-3 pr-1 no-scrollbar">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`}
                    className="flex items-center gap-3 text-xs font-mono pb-3 border-b border-white/5"
                  >
                    <div className="w-12 h-14 flex-shrink-0 rounded-sm overflow-hidden border border-white/10">
                      <MediaPlaceholder
                        type="thumbnail"
                        aspectRatio="4/5"
                        gradient={item.product.placeholderGradient}
                        showCoordinates={false}
                        showGridLines={false}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-primary font-semibold truncate uppercase">
                        {item.product.name}
                      </h4>
                      <p className="text-[10px] text-white/50">
                        {item.selectedSize} • {item.selectedColor.name} • QTY {item.quantity}
                      </p>
                    </div>
                    <span className="font-bold text-white">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>

              {/* Calculations */}
              <div className="space-y-2 text-xs font-mono pt-2">
                <div className="flex justify-between text-white/60">
                  <span>SUBTOTAL</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[#1ECAD3]">
                    <span>PROMO DISCOUNT</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-white/60">
                  <span>EXPRESS SHIPPING</span>
                  <span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base font-bold text-white pt-2 border-t border-white/10">
                  <span>TOTAL DUE</span>
                  <span className="font-primary text-lg">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
