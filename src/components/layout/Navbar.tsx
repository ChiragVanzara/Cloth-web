'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, Heart, User, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { SearchOverlay } from '@/components/layout/SearchOverlay';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { CartDrawer } from '@/components/cart/CartDrawer';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, openCartDrawer } = useCart();
  const { totalWishlistItems } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'MEN', href: '/men' },
    { label: 'WOMEN', href: '/women' },
    { label: 'NEW ARRIVALS', href: '/new-arrivals', badge: 'NEW' },
    { label: 'COLLECTIONS', href: '/collections' },
    { label: 'SHOP', href: '/shop' },
    { label: 'SALE', href: '/shop?sale=true', isSale: true },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-black/10 shadow-sm py-3.5'
            : 'bg-[#F7F7F5]/90 backdrop-blur-sm border-b border-black/[0.06] py-5'
        }`}
      >
        <div className="vostra-container flex items-center justify-between">
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-1.5 text-[#111315]/80 hover:text-[#111315] transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5 text-[#111315]" />
            </button>

            <Link
              href="/"
              className="group flex items-center gap-1.5 font-primary text-2xl font-bold tracking-tight text-[#111315] uppercase select-none"
            >
              <span>VOSTRA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C65A28] group-hover:scale-150 transition-transform" />
              <span className="hidden 2xl:inline text-[9px] font-mono tracking-widest text-[#757A82] ml-2 font-normal border-l border-black/15 pl-2">
                STUDIO / 2026
              </span>
            </Link>
          </div>

          {/* Center: Desktop Navigation Links (24px-32px spacing) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 text-[12px] font-secondary tracking-widest-nav uppercase transition-colors duration-200 ${
                    link.isSale
                      ? 'text-[#C65A28] font-bold hover:text-[#a84417]'
                      : isActive
                      ? 'text-[#111315] font-bold'
                      : 'text-[#4A4E54] hover:text-[#111315] font-medium'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.label}
                    {link.badge && (
                      <span className="text-[8px] px-1.5 py-0.2 bg-[#0E6068]/10 text-[#0E6068] rounded-sm font-mono font-bold border border-[#0E6068]/20">
                        {link.badge}
                      </span>
                    )}
                  </span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#111315]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions (Search, Account, Wishlist, Cart) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-2 text-xs font-secondary uppercase tracking-widest text-[#4A4E54] hover:text-[#111315] hover:bg-black/5 rounded-sm transition-colors"
              aria-label="Search catalog"
            >
              <Search className="w-4 h-4 text-[#111315]" />
              <span className="hidden sm:inline text-[11px] font-semibold">SEARCH</span>
            </button>

            {/* Account Link */}
            <Link
              href="/account"
              className="hidden sm:flex items-center gap-2 px-3 py-2 text-xs font-secondary uppercase tracking-widest text-[#4A4E54] hover:text-[#111315] hover:bg-black/5 rounded-sm transition-colors"
              aria-label="User Account"
            >
              <User className="w-4 h-4 text-[#111315]" />
              <span className="hidden xl:inline text-[11px] font-semibold">ACCOUNT</span>
            </Link>

            {/* Wishlist Link */}
            <Link
              href="/wishlist"
              className="relative p-2.5 text-[#4A4E54] hover:text-[#111315] hover:bg-black/5 rounded-sm transition-colors"
              aria-label={`Wishlist (${totalWishlistItems} items)`}
            >
              <Heart className="w-4 h-4 text-[#111315]" />
              {totalWishlistItems > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#C65A28] text-[9px] font-mono font-bold text-white flex items-center justify-center">
                  {totalWishlistItems}
                </span>
              )}
            </Link>

            {/* Cart Trigger */}
            <button
              onClick={openCartDrawer}
              className="relative flex items-center gap-2.5 px-4 py-2 bg-[#111315] hover:bg-[#23272B] rounded-sm text-white transition-all duration-200 shadow-sm"
              aria-label={`Shopping Cart (${totalItems} items)`}
            >
              <ShoppingBag className="w-4 h-4 text-white" />
              <span className="font-mono text-xs font-bold text-white">
                BAG ({totalItems})
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Global Overlays */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />
      <CartDrawer />
    </>
  );
};
