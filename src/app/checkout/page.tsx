'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import {
  Lock,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Truck,
  CreditCard,
  Building2,
  Banknote,
  QrCode,
} from 'lucide-react';

export default function CheckoutPage() {
  const { items, subtotal, discount, shippingFee, finalTotal, clearCart } = useCart();
  const { showToast } = useToast();

  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details');

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    fullName: '',
    street: '',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    deliveryMethod: 'express',
    paymentMethod: 'upi',
    upiId: '',
  });

  const [orderNumber, setOrderNumber] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.street) {
      showToast('Please complete all required address fields', 'error');
      return;
    }
    setStep('payment');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrderNum = `VST-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedOrderNum);
    setStep('confirmation');
    clearCart();
    showToast(`Order ${generatedOrderNum} confirmed!`, 'success');
  };

  if (step === 'confirmation') {
    return (
      <div className="bg-[#F7F7F5] text-[#111315] min-h-screen py-20 select-none">
        <div className="vostra-container max-w-2xl mx-auto text-center space-y-6 bg-white p-8 sm:p-12 border border-black/10 rounded-sm shadow-xl">
          <div className="w-16 h-16 rounded-full bg-[#E2ECEB] border border-[#0E6068]/40 flex items-center justify-center mx-auto text-[#0E6068]">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-[#0E6068] uppercase font-bold tracking-widest">
              ORDER RECONCILED & DISPATCH READY
            </span>
            <h1 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
              THANK YOU, {formData.fullName.toUpperCase()}!
            </h1>
            <p className="text-xs sm:text-sm font-secondary text-[#4A4E54] leading-relaxed">
              We have received your order. A confirmation email and tracking link have been dispatched to{' '}
              <strong className="text-[#111315]">{formData.email || 'your email'}</strong>.
            </p>
          </div>

          <div className="p-4 bg-[#F7F7F5] border border-black/10 rounded-sm text-left font-mono text-xs space-y-2">
            <div className="flex justify-between text-[#757A82]">
              <span>ORDER REFERENCE:</span>
              <strong className="text-[#111315]">{orderNumber}</strong>
            </div>
            <div className="flex justify-between text-[#757A82]">
              <span>DELIVERY ADDRESS:</span>
              <span className="text-[#111315] truncate max-w-xs">{formData.street}, {formData.city}</span>
            </div>
            <div className="flex justify-between text-[#757A82]">
              <span>PAYMENT STATUS:</span>
              <span className="text-[#0E6068] font-bold">PREPAID VIA {formData.paymentMethod.toUpperCase()}</span>
            </div>
            <div className="flex justify-between text-[#757A82] pt-2 border-t border-black/10">
              <span>TOTAL PAID:</span>
              <strong className="text-[#111315] text-sm">₹{finalTotal.toLocaleString('en-IN')}</strong>
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
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      {/* Checkout Breadcrumb Header */}
      <div className="border-b border-black/10 bg-white py-6">
        <div className="vostra-container flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/cart" className="p-1 text-[#757A82] hover:text-[#111315]">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-primary text-lg sm:text-xl font-bold uppercase tracking-tight text-[#111315]">
              EXPRESS CHECKOUT
            </h1>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#0E6068] font-bold">
            <Lock className="w-3.5 h-3.5" />
            <span>256-BIT ENCRYPTED</span>
          </div>
        </div>
      </div>

      <div className="vostra-container pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Form Area (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {step === 'details' ? (
              <form onSubmit={handleProceedToPayment} className="space-y-6">
                {/* 1. Contact Information */}
                <div className="p-6 bg-white border border-black/10 rounded-sm space-y-4 shadow-sm">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-[#0E6068] uppercase">
                    01. CONTACT DETAILS
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@domain.com"
                        className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] placeholder-[#757A82] rounded-sm focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                        PHONE NUMBER (FOR SMS TRACKING) *
                      </label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] placeholder-[#757A82] rounded-sm focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Shipping Address */}
                <div className="p-6 bg-white border border-black/10 rounded-sm space-y-4 shadow-sm">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-[#0E6068] uppercase">
                    02. DELIVERY ADDRESS (INDIA)
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Sureshkumar Vanzara"
                        className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] placeholder-[#757A82] rounded-sm focus:outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                        STREET ADDRESS & BUILDING *
                      </label>
                      <input
                        type="text"
                        required
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                        placeholder="Flat / Floor / Street Name"
                        className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] placeholder-[#757A82] rounded-sm focus:outline-none focus:border-black"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                          CITY *
                        </label>
                        <input
                          type="text"
                          required
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] rounded-sm focus:outline-none focus:border-black"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                          STATE *
                        </label>
                        <input
                          type="text"
                          required
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] rounded-sm focus:outline-none focus:border-black"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                          PINCODE *
                        </label>
                        <input
                          type="text"
                          required
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] rounded-sm focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Delivery Method */}
                <div className="p-6 bg-white border border-black/10 rounded-sm space-y-4 shadow-sm">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-[#0E6068] uppercase">
                    03. SHIPPING SPEED
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`flex items-center justify-between p-3.5 rounded-sm border cursor-pointer ${
                        formData.deliveryMethod === 'express'
                          ? 'border-[#0E6068] bg-[#E2ECEB] text-[#111315]'
                          : 'border-black/10 bg-[#F7F7F5] text-[#4A4E54]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="deliveryMethod"
                          value="express"
                          checked={formData.deliveryMethod === 'express'}
                          onChange={handleInputChange}
                          className="accent-[#0E6068]"
                        />
                        <div>
                          <div className="text-xs font-mono font-bold uppercase">STANDARD AIR EXPRESS</div>
                          <div className="text-[10px] text-[#757A82]">2-4 BUSINESS DAYS</div>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#0E6068]">FREE</span>
                    </label>

                    <label
                      className={`flex items-center justify-between p-3.5 rounded-sm border cursor-pointer ${
                        formData.deliveryMethod === 'priority'
                          ? 'border-[#C65A28] bg-[#F5EAE6] text-[#111315]'
                          : 'border-black/10 bg-[#F7F7F5] text-[#4A4E54]'
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
                          <div className="text-[10px] text-[#757A82]">GUARANTEED 24 HOURS</div>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#111315]">₹199</span>
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
                <div className="p-6 bg-white border border-black/10 rounded-sm space-y-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-mono font-bold tracking-widest text-[#0E6068] uppercase">
                      04. PAYMENT ARCHITECTURE
                    </h3>
                    <button
                      type="button"
                      onClick={() => setStep('details')}
                      className="text-[11px] font-mono text-[#757A82] hover:text-[#111315] underline uppercase"
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
                              ? 'bg-[#111315] text-white font-bold border-[#111315] shadow-md'
                              : 'bg-[#F7F7F5] text-[#4A4E54] border-black/10 hover:border-black/30'
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
                    <div className="pt-4 border-t border-black/10 space-y-3">
                      <label className="block text-[11px] font-mono text-[#4A4E54] uppercase">
                        ENTER UPI ID (GPay, PhonePe, Paytm, CRED)
                      </label>
                      <input
                        type="text"
                        name="upiId"
                        value={formData.upiId}
                        onChange={handleInputChange}
                        placeholder="username@okhdfcbank"
                        className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] placeholder-[#757A82] rounded-sm focus:outline-none focus:border-black"
                      />
                      <p className="text-[10px] font-mono text-[#0E6068]">
                        A payment prompt will be dispatched instantly to your UPI application.
                      </p>
                    </div>
                  )}

                  {/* Card Inputs */}
                  {formData.paymentMethod === 'card' && (
                    <div className="pt-4 border-t border-black/10 space-y-3">
                      <div>
                        <label className="block text-[11px] font-mono text-[#4A4E54] uppercase mb-1">
                          CARD NUMBER
                        </label>
                        <input
                          type="text"
                          placeholder="4532 •••• •••• 8892"
                          className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] placeholder-[#757A82] rounded-sm focus:outline-none focus:border-black"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="MM / YY"
                          className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] placeholder-[#757A82] rounded-sm focus:outline-none focus:border-black"
                        />
                        <input
                          type="password"
                          placeholder="CVV"
                          maxLength={4}
                          className="w-full bg-[#F7F7F5] border border-black/15 px-3.5 py-2.5 text-xs font-mono uppercase text-[#111315] placeholder-[#757A82] rounded-sm focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>
                  )}

                  {/* COD Notice */}
                  {formData.paymentMethod === 'cod' && (
                    <div className="pt-4 border-t border-black/10 text-xs font-mono text-[#4A4E54] space-y-1">
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
            <div className="p-6 bg-white border border-black/15 rounded-sm space-y-4 sticky top-24 shadow-sm">
              <h3 className="font-primary text-sm font-bold uppercase tracking-wider text-[#111315] border-b border-black/10 pb-3">
                ORDER REVIEW ({items.length} ITEMS)
              </h3>

              {/* Items Mini List */}
              <div className="max-h-60 overflow-y-auto space-y-3 pr-1 no-scrollbar">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`}
                    className="flex items-center gap-3 text-xs font-mono pb-3 border-b border-black/5"
                  >
                    <div className="w-12 h-14 flex-shrink-0 rounded-sm overflow-hidden border border-black/10 bg-[#F7F7F5]">
                      <img
                        src={item.product.imageUrl || 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800'}
                        alt={item.product.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[#111315] font-primary font-semibold truncate uppercase">
                        {item.product.name}
                      </h4>
                      <p className="text-[10px] text-[#757A82]">
                        {item.selectedSize} • {item.selectedColor.name} • QTY {item.quantity}
                      </p>
                    </div>
                    <span className="font-bold text-[#111315]">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>

              {/* Calculations */}
              <div className="space-y-2 text-xs font-mono pt-2">
                <div className="flex justify-between text-[#757A82]">
                  <span>SUBTOTAL</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[#0E6068] font-bold">
                    <span>PROMO DISCOUNT</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#757A82]">
                  <span>EXPRESS SHIPPING</span>
                  <span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base font-bold text-[#111315] pt-2 border-t border-black/10">
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
