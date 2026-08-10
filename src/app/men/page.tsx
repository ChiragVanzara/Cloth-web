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
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      {/* Men Editorial Hero Section */}
      <section className="pt-4 pb-8">
        <div className="vostra-container">
          <div className="relative overflow-hidden rounded-[2px] border border-black/10 shadow-md bg-white">
            <MediaPlaceholder
              type="hero"
              aspectRatio="16/9"
              imageUrl="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1600"
              altText="VOSTRA Men Studio Capsule"
              label="MEN'S EDITORIAL CAMPAIGN — 16:9"
              subLabel="HEAVY KNITS // RAW SELVEDGE // DROP-SHOULDER PROPORTIONS"
              className="w-full min-h-[460px] sm:min-h-[580px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-6 sm:p-12 flex flex-col justify-between z-20 pointer-events-auto text-white">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest bg-white/20 text-white rounded-sm uppercase font-bold border border-white/30 backdrop-blur-md">
                    MEN'S STUDIO CAPSULE
                  </span>
                </div>

                <div className="max-w-2xl space-y-4">
                  <div className="text-xs font-mono text-[#1ECAD3] tracking-widest uppercase font-bold">
                    SERIES 01 // UNCOMPROMISING STRUCTURE
                  </div>
                  <h1 className="display-xl text-white font-primary font-bold uppercase tracking-tight drop-shadow-lg">
                    BUILT FOR MODERN MOVEMENT
                  </h1>
                  <p className="text-xs sm:text-sm font-secondary text-white/90 max-w-lg leading-relaxed drop-shadow-sm">
                    Discover boxy 280-450 GSM French terry hoodies, 14.5oz Okayama selvedge denim, tactical ripstop cargo joggers, and modular technical outerwear.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <Link href="/shop?gender=men" className="btn-primary text-xs">
                      SHOP ALL MEN
                    </Link>
                    <Link href="/collections/streetwear" className="btn-secondary text-xs">
                      VIEW STREETWEAR
                    </Link>
                  </div>
                </div>

                <div className="hidden sm:flex items-center justify-between text-[10px] font-mono text-white/70 uppercase tracking-widest pt-4 border-t border-white/20">
                  <span>OKAYAMA SELVEDGE DENIM</span>
                  <span>450 GSM FRENCH TERRY</span>
                  <span>TACTICAL UTILITY HARDWARE</span>
                </div>
              </div>
            </MediaPlaceholder>
          </div>
        </div>
      </section>

      {/* Heavyweight Streetwear Drop */}
      <section className="py-8">
        <div className="vostra-container">
          <div className="flex items-end justify-between mb-6 pb-2 border-b border-black/10">
            <div>
              <span className="text-[10px] font-mono text-[#0E6068] tracking-widest uppercase font-bold">
                HEAVYWEIGHT SILHOUETTES
              </span>
              <h2 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
                STREETWEAR ARCHIVE
              </h2>
            </div>
            <Link
              href="/collections/streetwear"
              className="text-xs font-mono tracking-widest text-[#757A82] hover:text-[#111315] uppercase underline underline-offset-4"
            >
              EXPLORE STREETWEAR ({streetwear.length})
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {streetwear.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Shuttle-Loomed Selvedge Denim */}
      <section className="py-8">
        <div className="vostra-container">
          <div className="flex items-end justify-between mb-6 pb-2 border-b border-black/10">
            <div>
              <span className="text-[10px] font-mono text-[#A37A24] tracking-widest uppercase font-bold">
                OKAYAMA JAPANESE WEAVE
              </span>
              <h2 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
                RAW SELVEDGE DENIM
              </h2>
            </div>
            <Link
              href="/collections/denim"
              className="text-xs font-mono tracking-widest text-[#757A82] hover:text-[#111315] uppercase underline underline-offset-4"
            >
              DISCOVER DENIM
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {denim.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Outerwear */}
      <section className="py-8">
        <div className="vostra-container">
          <div className="flex items-end justify-between mb-6 pb-2 border-b border-black/10">
            <div>
              <span className="text-[10px] font-mono text-[#C65A28] tracking-widest uppercase font-bold">
                WEATHER-PROOF & LAYERED
              </span>
              <h2 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
                OUTERWEAR & BOMBERS
              </h2>
            </div>
            <Link
              href="/collections/outerwear"
              className="text-xs font-mono tracking-widest text-[#757A82] hover:text-[#111315] uppercase underline underline-offset-4"
            >
              ALL JACKETS ({outerwear.length})
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {outerwear.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
