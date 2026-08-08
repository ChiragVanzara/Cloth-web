'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/types';

interface WishlistContextType {
  wishlist: Product[];
  toggleWishlist: (product: Product) => boolean; // returns true if added, false if removed
  isInWishlist: (productId: string) => boolean;
  removeFromWishlist: (productId: string) => void;
  totalWishlistItems: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('vostra_wishlist');
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Error reading wishlist from localStorage', e);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem('vostra_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Error saving wishlist to localStorage', e);
    }
  }, [wishlist, isLoaded]);

  const toggleWishlist = (product: Product): boolean => {
    let added = false;
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        added = false;
        return prev.filter((item) => item.id !== product.id);
      } else {
        added = true;
        return [...prev, product];
      }
    });
    return added;
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        totalWishlistItems: wishlist.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
