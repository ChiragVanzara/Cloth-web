'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, ProductColor } from '@/types';

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, selectedColor?: ProductColor, selectedSize?: string, quantity?: number) => void;
  removeItem: (productId: string, colorName: string, size: string) => void;
  updateQuantity: (productId: string, colorName: string, size: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  discount: number;
  appliedPromo: string | null;
  applyPromoCode: (code: string) => boolean;
  removePromoCode: () => void;
  shippingFee: number;
  freeShippingThreshold: number;
  amountNeededForFreeShipping: number;
  finalTotal: number;
  isCartDrawerOpen: boolean;
  setIsCartDrawerOpen: (open: boolean) => void;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 999;
const STANDARD_SHIPPING_FEE = 99;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoDiscountPercent, setPromoDiscountPercent] = useState<number>(0);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize from LocalStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('vostra_cart');
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed reading cart from localStorage', e);
    }
    setIsLoaded(true);
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem('vostra_cart', JSON.stringify(items));
    } catch (e) {
      console.error('Failed saving cart to localStorage', e);
    }
  }, [items, isLoaded]);

  const addItem = (
    product: Product,
    selectedColor?: ProductColor,
    selectedSize?: string,
    quantity = 1
  ) => {
    const color = selectedColor || product.colors[0];
    const size = selectedSize || product.sizes[0] || 'M';

    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor.name === color.name &&
          item.selectedSize === size
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [...prev, { product, selectedColor: color, selectedSize: size, quantity }];
    });

    setIsCartDrawerOpen(true);
  };

  const removeItem = (productId: string, colorName: string, size: string) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedColor.name === colorName &&
            item.selectedSize === size
          )
      )
    );
  };

  const updateQuantity = (
    productId: string,
    colorName: string,
    size: string,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeItem(productId, colorName, size);
      return;
    }
    setItems((prev) =>
      prev.map((item) => {
        if (
          item.product.id === productId &&
          item.selectedColor.name === colorName &&
          item.selectedSize === size
        ) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setItems([]);
    setAppliedPromo(null);
    setPromoDiscountPercent(0);
  };

  const applyPromoCode = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === 'VOSTRA10') {
      setAppliedPromo('VOSTRA10');
      setPromoDiscountPercent(10);
      return true;
    } else if (clean === 'DROP20') {
      setAppliedPromo('DROP20');
      setPromoDiscountPercent(20);
      return true;
    }
    return false;
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setPromoDiscountPercent(0);
  };

  const openCartDrawer = () => setIsCartDrawerOpen(true);
  const closeCartDrawer = () => setIsCartDrawerOpen(false);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discount = Math.round((subtotal * promoDiscountPercent) / 100);

  const discountedSubtotal = Math.max(0, subtotal - discount);

  const shippingFee =
    items.length === 0 || discountedSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_FEE;

  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - discountedSubtotal);

  const finalTotal = discountedSubtotal + shippingFee;

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        discount,
        appliedPromo,
        applyPromoCode,
        removePromoCode,
        shippingFee,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountNeededForFreeShipping,
        finalTotal,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        openCartDrawer,
        closeCartDrawer,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
