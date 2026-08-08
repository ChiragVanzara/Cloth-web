import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { mockProducts } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';

export default function MenPage() {
  const menProducts = mockProducts.filter((p) => p.gender === 'men' || p.gender === 'unisex');
  const newArrivals = menProducts.filter((p) => p.isNewArrival);
  const streetwear = menProducts.filter((p) => p.collection === 'Streetwear');
  const denim = menProducts.filter((p) => p.collection === 'Denim');
  const outerwear = menProducts.filter((p) => p.category === 'Jackets' || p.collection === 'Outerwear');

  return (
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      {/* Men Editorial Hero Section */}
      <section className="pt-4 pb-8">
        <div className="layout-container">
          <div className="relative overflow-hidden rounded-[2px] border border-white/15">
            <MediaPlaceholder
              type="hero"
              aspectRatio="16/9"
              gradient="linear-gradient(135deg, #182A3A 0%, #090A0B 60%, #123A3F 100%)"
              label="MEN'S EDITORIAL CAMPAIGN — 16:9"
              subLabel="HEAVY KNITS // RAW SELVEDGE // DROP-SHOULDER PROPORTIONS"
              className="w-full min-h-[460px] sm:min-h-[580px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-6 sm:p-12 flex flex-col justify-between z-20 pointer-events-auto">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest bg-white/10 rounded-sm uppercase font-bold border border-white/20">
                    MEN'S STUDIO CAPSULE
                  </span>
                </div>

                <div className="max-w-2xl space-y-4">
                  <div className="text-xs font-mono text-[#1ECAD3] tracking-widest uppercase font-bold">
                    SERIES 01 // UNCOMPROMISING STRUCTURE
                  </div>
                  <h1 className="display-xl text-white font-primary font-bold uppercase tracking-tight">
                    BUILT FOR MODERN MOVEMENT
                  </h1>
                  <p className="text-xs sm:text-sm font-secondary text-white/70 max-w-lg">
                    Discover boxy 280-450 GSM French terry hoodies, 14.5oz Okayama selvedge denim, tactical ripstop cargo joggers, and modular technical outerwear.
                  </p>
                  <div className="pt-2 flex gap-3">
                    <Link href="/shop?gender=men" className="btn-primary text-xs">
                      SHOP ALL MEN
                    </Link>
                    <Link href="/collections/streetwear" className="btn-secondary text-xs">
                      VIEW STREETWEAR
                    </Link>
                  </div>
                </div>

                <div className="hidden sm:flex items-center justify-between text-[10px] font-mono text-white/40 uppercase tracking-widest pt-4 border-t border-white/10">
                  <span>OKAYAMA SELVEDGE DENIM</span>
                  <span>450 GSM FRENCH TERRY</span>
                  <span>TACTICAL UTILITY HARDWARE</span>
                </div>
              </div>
            </MediaPlaceholder>
          </div>
        </div>
      </section>

      {/* Streetwear Capsule */}
      <section className="py-8">
        <div className="layout-container">
          <div className="flex items-end justify-between mb-6 pb-2 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono text-[#C65A28] tracking-widest uppercase font-bold">
                PROPORTIONS & DROPPED SEAMS
              </span>
              <h2 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
                STREETWEAR SILHOUETTES
              </h2>
            </div>
            <Link
              href="/collections/streetwear"
              className="text-xs font-mono tracking-widest text-white/60 hover:text-white uppercase underline"
            >
              EXPLORE STREETWEAR ({streetwear.length})
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {streetwear.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Okayama Raw Denim Edit */}
      <section className="py-8">
        <div className="layout-container">
          <div className="flex items-end justify-between mb-6 pb-2 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono text-[#1ECAD3] tracking-widest uppercase font-bold">
                JAPANESE SHUTTLE LOOMS
              </span>
              <h2 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
                RAW DENIM ARCHIVE
              </h2>
            </div>
            <Link
              href="/collections/denim"
              className="text-xs font-mono tracking-widest text-white/60 hover:text-white uppercase underline"
            >
              VIEW DENIM EDIT
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {denim.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Outerwear */}
      <section className="py-8">
        <div className="layout-container">
          <div className="flex items-end justify-between mb-6 pb-2 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono text-[#C59A3A] tracking-widest uppercase font-bold">
                CITY CLIMATE PROTECTION
              </span>
              <h2 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
                MODULAR OUTERWEAR
              </h2>
            </div>
            <Link
              href="/collections/outerwear"
              className="text-xs font-mono tracking-widest text-white/60 hover:text-white uppercase underline"
            >
              ALL JACKETS ({outerwear.length})
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {outerwear.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
