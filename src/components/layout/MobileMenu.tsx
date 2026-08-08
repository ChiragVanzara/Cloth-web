'use client';

import React from 'react';
import Link from 'next/link';
import { X, ArrowRight, User, Heart, ShoppingBag, Search, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenSearch }) => {
  const { totalItems, openCartDrawer } = useCart();
  const { totalWishlistItems } = useWishlist();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#090A0B] text-white animate-fadeIn overflow-y-auto">
      {/* Top Header inside Mobile Menu */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <Link
          href="/"
          onClick={onClose}
          className="font-primary text-xl font-bold tracking-tighter uppercase"
        >
          VOSTRA<span className="text-[#C65A28]">.</span>
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="p-1.5 text-white/70 hover:text-white"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Navigation Links */}
      <div className="flex-1 px-6 py-8 flex flex-col justify-between">
        <nav className="flex flex-col space-y-4">
          <Link
            href="/men"
            onClick={onClose}
            className="group flex items-center justify-between font-primary text-3xl sm:text-4xl font-bold uppercase tracking-tight py-2 border-b border-white/5 text-white/90 hover:text-[#1ECAD3] transition-colors"
          >
            <span>MEN</span>
            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link
            href="/women"
            onClick={onClose}
            className="group flex items-center justify-between font-primary text-3xl sm:text-4xl font-bold uppercase tracking-tight py-2 border-b border-white/5 text-white/90 hover:text-[#C65A28] transition-colors"
          >
            <span>WOMEN</span>
            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link
            href="/new-arrivals"
            onClick={onClose}
            className="group flex items-center justify-between font-primary text-3xl sm:text-4xl font-bold uppercase tracking-tight py-2 border-b border-white/5 text-white/90 hover:text-[#C59A3A] transition-colors"
          >
            <div className="flex items-center gap-2">
              <span>NEW ARRIVALS</span>
              <Sparkles className="w-4 h-4 text-[#C59A3A]" />
            </div>
            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link
            href="/collections"
            onClick={onClose}
            className="group flex items-center justify-between font-primary text-3xl sm:text-4xl font-bold uppercase tracking-tight py-2 border-b border-white/5 text-white/90 hover:text-white transition-colors"
          >
            <span>COLLECTIONS</span>
            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link
            href="/shop"
            onClick={onClose}
            className="group flex items-center justify-between font-primary text-3xl sm:text-4xl font-bold uppercase tracking-tight py-2 border-b border-white/5 text-white/90 hover:text-white transition-colors"
          >
            <span>ALL PRODUCTS</span>
            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link
            href="/shop?sale=true"
            onClick={onClose}
            className="group flex items-center justify-between font-primary text-3xl sm:text-4xl font-bold uppercase tracking-tight py-2 border-b border-white/5 text-[#C65A28] hover:text-[#e06c35] transition-colors"
          >
            <span>ARCHIVE SALE (-40%)</span>
            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </nav>

        {/* Quick User Actions in Drawer */}
        <div className="pt-8 border-t border-white/10 mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/account"
              onClick={onClose}
              className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-sm text-xs font-mono tracking-wider uppercase text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <User className="w-4 h-4 text-[#1ECAD3]" />
              <span>ACCOUNT</span>
            </Link>

            <Link
              href="/wishlist"
              onClick={onClose}
              className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-sm text-xs font-mono tracking-wider uppercase text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#C65A28]" />
                <span>WISHLIST</span>
              </div>
              {totalWishlistItems > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#C65A28] text-[9px] font-mono font-bold flex items-center justify-center text-white">
                  {totalWishlistItems}
                </span>
              )}
            </Link>
          </div>

          <button
            onClick={() => {
              onClose();
              openCartDrawer();
            }}
            className="w-full flex items-center justify-between p-3.5 bg-white text-black rounded-sm text-xs font-primary font-bold tracking-wider uppercase hover:bg-white/90 transition-colors"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              <span>OPEN SHOPPING BAG</span>
            </div>
            <span className="font-mono text-xs">({totalItems} ITEMS)</span>
          </button>

          {/* Secondary Footer links inside Mobile Drawer */}
          <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-mono tracking-widest text-white/40 uppercase">
            <Link href="/about" onClick={onClose} className="hover:text-white">ABOUT</Link>
            <Link href="/faq" onClick={onClose} className="hover:text-white">FAQ</Link>
            <Link href="/shipping" onClick={onClose} className="hover:text-white">SHIPPING</Link>
            <Link href="/contact" onClick={onClose} className="hover:text-white">CONTACT</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
