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
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      {/* Women Editorial Hero Section */}
      <section className="pt-4 pb-8">
        <div className="vostra-container">
          <div className="relative overflow-hidden rounded-[2px] border border-black/10 shadow-md bg-white">
            <MediaPlaceholder
              type="hero"
              aspectRatio="16/9"
              imageUrl="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1600"
              altText="VOSTRA Women High Fashion Runway"
              label="WOMEN'S EDITORIAL CAMPAIGN — 16:9"
              subLabel="SCULPTED TOPS // DRAPED DRESSES // WIDE-LEG SILHOUETTES"
              className="w-full min-h-[460px] sm:min-h-[580px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-6 sm:p-12 flex flex-col justify-between z-20 pointer-events-auto text-white">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest bg-white/20 text-white rounded-sm uppercase font-bold border border-white/30 backdrop-blur-md">
                    WOMEN'S HIGH-FASHION RUNWAY
                  </span>
                </div>

                <div className="max-w-2xl space-y-4">
                  <div className="text-xs font-mono text-[#C65A28] tracking-widest uppercase font-bold">
                    SERIES 02 // ARCHITECTURAL FORM & MOVEMENT
                  </div>
                  <h1 className="display-xl text-white font-primary font-bold uppercase tracking-tight drop-shadow-lg">
                    SCULPTED & UNRESTRICTED
                  </h1>
                  <p className="text-xs sm:text-sm font-secondary text-white/90 max-w-lg leading-relaxed drop-shadow-sm">
                    Explore sculpted asymmetric corset tops, fluid heavy drape dresses, micro-ribbed modal baby tees, and voluminous balloon parachute pants.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <Link href="/shop?gender=women" className="btn-primary text-xs">
                      SHOP ALL WOMEN
                    </Link>
                    <Link href="/collections/limited-drop" className="btn-secondary text-xs">
                      VIEW THE SCULPT SERIES
                    </Link>
                  </div>
                </div>

                <div className="hidden sm:flex items-center justify-between text-[10px] font-mono text-white/70 uppercase tracking-widest pt-4 border-t border-white/20">
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
        <div className="vostra-container">
          <div className="flex items-end justify-between mb-6 pb-2 border-b border-black/10">
            <div>
              <span className="text-[10px] font-mono text-[#C65A28] tracking-widest uppercase font-bold">
                AVANT-GARDE ARCHITECTURE
              </span>
              <h2 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
                CORSET & SCULPTED TOPS
              </h2>
            </div>
            <Link
              href="/collections/limited-drop"
              className="text-xs font-mono tracking-widest text-[#757A82] hover:text-[#111315] uppercase underline underline-offset-4"
            >
              EXPLORE SCULPT CAPSULE
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {sculptedDresses.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Micro Ribbed Essentials & Baby Tees */}
      <section className="py-8">
        <div className="vostra-container">
          <div className="flex items-end justify-between mb-6 pb-2 border-b border-black/10">
            <div>
              <span className="text-[10px] font-mono text-[#0E6068] tracking-widest uppercase font-bold">
                BUTTERY MODAL HANDFEEL
              </span>
              <h2 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
                BABY TEES & CORE KNITS
              </h2>
            </div>
            <Link
              href="/shop?category=Baby+Tees"
              className="text-xs font-mono tracking-widest text-[#757A82] hover:text-[#111315] uppercase underline underline-offset-4"
            >
              VIEW ALL ESSENTIALS
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {essentials.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Wide-Leg & Parachute Pants */}
      <section className="py-8">
        <div className="vostra-container">
          <div className="flex items-end justify-between mb-6 pb-2 border-b border-black/10">
            <div>
              <span className="text-[10px] font-mono text-[#A37A24] tracking-widest uppercase font-bold">
                VOLUME & TUCK PLEATS
              </span>
              <h2 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
                WIDE-LEG & BALLOON SILHOUETTES
              </h2>
            </div>
            <Link
              href="/shop?category=Parachute+Pants"
              className="text-xs font-mono tracking-widest text-[#757A82] hover:text-[#111315] uppercase underline underline-offset-4"
            >
              ALL TROUSERS ({wideLegDenim.length})
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {wideLegDenim.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
