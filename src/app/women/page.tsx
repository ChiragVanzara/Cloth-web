import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { mockProducts } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';

export default function WomenPage() {
  const womenProducts = mockProducts.filter((p) => p.gender === 'women' || p.gender === 'unisex');
  const sculptedDresses = womenProducts.filter((p) => p.category === 'Dresses' || p.category === 'Tops' || p.category === 'Skirts');
  const essentials = womenProducts.filter((p) => p.collection === 'Essentials' || p.subCategory === 'Baby Tees');
  const wideLegDenim = womenProducts.filter((p) => p.category === 'Jeans' || p.category === 'Pants');

  return (
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      {/* Women Editorial Hero Section */}
      <section className="pt-4 pb-8">
        <div className="layout-container">
          <div className="relative overflow-hidden rounded-[2px] border border-white/15">
            <MediaPlaceholder
              type="hero"
              aspectRatio="16/9"
              gradient="linear-gradient(135deg, #682C21 0%, #123A3F 55%, #090A0B 100%)"
              label="WOMEN'S EDITORIAL CAMPAIGN — 16:9"
              subLabel="SCULPTED TOPS // DRAPED DRESSES // WIDE-LEG SILHOUETTES"
              className="w-full min-h-[460px] sm:min-h-[580px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-6 sm:p-12 flex flex-col justify-between z-20 pointer-events-auto">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest bg-white/10 rounded-sm uppercase font-bold border border-white/20">
                    WOMEN'S HIGH-FASHION RUNWAY
                  </span>
                </div>

                <div className="max-w-2xl space-y-4">
                  <div className="text-xs font-mono text-[#C65A28] tracking-widest uppercase font-bold">
                    SERIES 02 // ARCHITECTURAL FORM & MOVEMENT
                  </div>
                  <h1 className="display-xl text-white font-primary font-bold uppercase tracking-tight">
                    SCULPTED & UNRESTRICTED
                  </h1>
                  <p className="text-xs sm:text-sm font-secondary text-white/70 max-w-lg">
                    Explore sculpted asymmetric corset tops, fluid heavy drape dresses, micro-ribbed modal baby tees, and voluminous balloon parachute pants.
                  </p>
                  <div className="pt-2 flex gap-3">
                    <Link href="/shop?gender=women" className="btn-primary text-xs">
                      SHOP ALL WOMEN
                    </Link>
                    <Link href="/collections/limited-drop" className="btn-secondary text-xs">
                      VIEW THE SCULPT SERIES
                    </Link>
                  </div>
                </div>

                <div className="hidden sm:flex items-center justify-between text-[10px] font-mono text-white/40 uppercase tracking-widest pt-4 border-t border-white/10">
                  <span>BONDED PONTE CORSETS</span>
                  <span>LENZING MODAL BABY TEES</span>
                  <span>KNIFE-PLEATED SUITING</span>
                </div>
              </div>
            </MediaPlaceholder>
          </div>
        </div>
      </section>

      {/* The Sculpt Series & Evening Drapes */}
      <section className="py-8">
        <div className="layout-container">
          <div className="flex items-end justify-between mb-6 pb-2 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono text-[#C65A28] tracking-widest uppercase font-bold">
                AVANT-GARDE ARCHITECTURE
              </span>
              <h2 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
                CORSET & SCULPTED TOPS
              </h2>
            </div>
            <Link
              href="/collections/limited-drop"
              className="text-xs font-mono tracking-widest text-white/60 hover:text-white uppercase underline"
            >
              EXPLORE SCULPT CAPSULE
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {sculptedDresses.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Micro Ribbed Essentials & Baby Tees */}
      <section className="py-8">
        <div className="layout-container">
          <div className="flex items-end justify-between mb-6 pb-2 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono text-[#1ECAD3] tracking-widest uppercase font-bold">
                BUTTERY MODAL HANDFEEL
              </span>
              <h2 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
                BABY TEES & CORE KNITS
              </h2>
            </div>
            <Link
              href="/shop?category=Baby+Tees"
              className="text-xs font-mono tracking-widest text-white/60 hover:text-white uppercase underline"
            >
              VIEW ALL ESSENTIALS
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {essentials.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Wide-Leg & Parachute Pants */}
      <section className="py-8">
        <div className="layout-container">
          <div className="flex items-end justify-between mb-6 pb-2 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono text-[#C59A3A] tracking-widest uppercase font-bold">
                VOLUME & TUCK PLEATS
              </span>
              <h2 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
                WIDE-LEG & BALLOON SILHOUETTES
              </h2>
            </div>
            <Link
              href="/shop?category=Parachute+Pants"
              className="text-xs font-mono tracking-widest text-white/60 hover:text-white uppercase underline"
            >
              ALL TROUSERS ({wideLegDenim.length})
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {wideLegDenim.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
