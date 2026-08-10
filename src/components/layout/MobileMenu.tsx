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
    <div className="fixed inset-0 z-50 flex flex-col bg-white text-[#111315] animate-fadeIn overflow-y-auto">
      {/* Top Header inside Mobile Menu */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-black/10">
        <Link
          href="/"
          onClick={onClose}
          className="font-primary text-xl font-bold tracking-tighter uppercase text-[#111315]"
        >
          VOSTRA<span className="text-[#C65A28]">.</span>
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="p-1.5 text-[#757A82] hover:text-[#111315]"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 text-[#757A82] hover:text-[#111315]"
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
            className="group flex items-center justify-between font-primary text-3xl sm:text-4xl font-bold uppercase tracking-tight py-2 border-b border-black/5 text-[#111315] hover:text-[#0E6068] transition-colors"
          >
            <span>MEN</span>
            <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform text-[#757A82]" />
          </Link>

          <Link
            href="/women"
            onClick={onClose}
            className="group flex items-center justify-between font-primary text-3xl sm:text-4xl font-bold uppercase tracking-tight py-2 border-b border-black/5 text-[#111315] hover:text-[#C65A28] transition-colors"
          >
            <span>WOMEN</span>
            <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform text-[#757A82]" />
          </Link>

          <Link
            href="/new-arrivals"
            onClick={onClose}
            className="group flex items-center justify-between font-primary text-2xl sm:text-3xl font-bold uppercase tracking-tight py-2 border-b border-black/5 text-[#111315] hover:text-[#0E6068] transition-colors"
          >
            <div className="flex items-center gap-2">
              <span>NEW ARRIVALS</span>
              <span className="px-2 py-0.5 text-[9px] font-mono bg-[#E2ECEB] text-[#0E6068] rounded-sm font-bold border border-[#0E6068]/20">
                DROP 01
              </span>
            </div>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform text-[#757A82]" />
          </Link>

          <Link
            href="/collections"
            onClick={onClose}
            className="group flex items-center justify-between font-primary text-2xl sm:text-3xl font-bold uppercase tracking-tight py-2 border-b border-black/5 text-[#111315] hover:text-[#0E6068] transition-colors"
          >
            <span>COLLECTIONS</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform text-[#757A82]" />
          </Link>

          <Link
            href="/shop"
            onClick={onClose}
            className="group flex items-center justify-between font-primary text-2xl sm:text-3xl font-bold uppercase tracking-tight py-2 border-b border-black/5 text-[#111315] hover:text-[#0E6068] transition-colors"
          >
            <span>SHOP ALL</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform text-[#757A82]" />
          </Link>

          <Link
            href="/shop?sale=true"
            onClick={onClose}
            className="group flex items-center justify-between font-primary text-2xl sm:text-3xl font-bold uppercase tracking-tight py-2 border-b border-black/5 text-[#C65A28] hover:text-[#b04f21] transition-colors"
          >
            <span>ARCHIVE SALE (-40%)</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform text-[#C65A28]" />
          </Link>
        </nav>

        {/* Quick User Actions Bottom */}
        <div className="pt-8 border-t border-black/10 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/account"
              onClick={onClose}
              className="flex items-center justify-center gap-2 p-3.5 bg-[#F7F7F5] border border-black/10 rounded-sm text-xs font-mono uppercase tracking-wider text-[#111315] hover:border-black/30"
            >
              <User className="w-4 h-4" />
              <span>ACCOUNT</span>
            </Link>

            <Link
              href="/wishlist"
              onClick={onClose}
              className="flex items-center justify-center gap-2 p-3.5 bg-[#F7F7F5] border border-black/10 rounded-sm text-xs font-mono uppercase tracking-wider text-[#111315] hover:border-black/30"
            >
              <Heart className="w-4 h-4" />
              <span>SAVED ({totalWishlistItems})</span>
            </Link>
          </div>

          <button
            onClick={() => {
              onClose();
              openCartDrawer();
            }}
            className="w-full btn-primary text-xs flex items-center justify-center gap-2 py-3.5"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>OPEN BAG ({totalItems} ITEMS)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
