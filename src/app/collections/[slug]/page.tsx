import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockCollections } from '@/data/collections';
import { mockProducts } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return mockCollections.map((col) => ({ slug: col.slug }));
}

export default function CollectionDetailPage({ params }: Props) {
  const collection = mockCollections.find((c) => c.slug === params.slug);

  if (!collection) {
    return notFound();
  }

  const collectionProducts = mockProducts.filter(
    (p) =>
      p.collection.toLowerCase() === collection.name.toLowerCase() ||
      p.collection.toLowerCase() === collection.slug.toLowerCase() ||
      p.outfitCategory.toLowerCase().includes(collection.slug.toLowerCase())
  );

  // Fallback to related if empty
  const displayProducts = collectionProducts.length > 0 ? collectionProducts : mockProducts.slice(0, 6);

  const relatedCollections = mockCollections.filter((c) => c.slug !== collection.slug).slice(0, 2);

  return (
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      {/* Breadcrumb & Hero */}
      <section className="py-6 border-b border-white/10">
        <div className="layout-container">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white uppercase mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ALL COLLECTIONS</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C65A28] uppercase font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{collection.season}</span>
              </div>
              <h1 className="display-xl text-white font-primary font-bold uppercase tracking-tight">
                {collection.name}
              </h1>
              <p className="text-sm sm:text-base font-primary text-[#1ECAD3] uppercase font-semibold">
                {collection.tagline}
              </p>
              <p className="text-xs sm:text-sm font-secondary text-white/70 leading-relaxed">
                {collection.description}
              </p>
              <div className="text-xs font-mono text-white/40">
                TOTAL ARCHIVE PIECES: {displayProducts.length}
              </div>
            </div>

            <div className="lg:col-span-6">
              <MediaPlaceholder
                type="editorial"
                aspectRatio="16/9"
                gradient={collection.gradient}
                label={`EDITORIAL CAMPAIGN // ${collection.name}`}
                className="w-full min-h-[280px] sm:min-h-[380px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collection Products Grid */}
      <section className="py-10">
        <div className="layout-container">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/10 text-xs font-mono">
            <span className="text-white/60 uppercase">
              PIECES IN THIS CHAPTER ({displayProducts.length})
            </span>
            <Link href="/shop" className="text-[#C65A28] hover:underline uppercase">
              EXPLORE ALL STYLES →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Collections */}
      <section className="py-12 border-t border-white/10 bg-[#121416]/50">
        <div className="layout-container space-y-6">
          <h3 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
            RELATED COLLECTION CHAPTERS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedCollections.map((rel) => (
              <Link
                key={rel.id}
                href={`/collections/${rel.slug}`}
                className="group p-6 bg-[#090A0B] border border-white/10 hover:border-white/30 rounded-sm flex flex-col justify-between transition-all"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-white/50 uppercase">
                    {rel.season}
                  </span>
                  <h4 className="font-primary text-xl font-bold uppercase text-white group-hover:text-[#1ECAD3] transition-colors">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-white/60 font-secondary">
                    {rel.tagline}
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-2 text-xs font-mono font-bold text-[#C65A28] uppercase">
                  <span>DISCOVER CHAPTER</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
