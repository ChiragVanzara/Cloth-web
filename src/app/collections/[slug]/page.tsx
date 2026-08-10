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
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      {/* Breadcrumb & Hero */}
      <section className="py-6 border-b border-black/10 bg-white">
        <div className="vostra-container">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#757A82] hover:text-[#111315] uppercase mb-4"
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
              <h1 className="display-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
                {collection.name}
              </h1>
              <p className="text-sm sm:text-base font-primary text-[#0E6068] uppercase font-semibold">
                {collection.tagline}
              </p>
              <p className="text-xs sm:text-sm font-secondary text-[#4A4E54] leading-relaxed">
                {collection.description}
              </p>
              <div className="text-xs font-mono text-[#757A82]">
                TOTAL ARCHIVE PIECES: {displayProducts.length}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[2px] overflow-hidden border border-black/10 shadow-md bg-white">
                <MediaPlaceholder
                  type="collection"
                  aspectRatio="16/9"
                  imageUrl={collection.imageUrl}
                  altText={collection.name}
                  label={`LOOKBOOK // ${collection.name}`}
                  className="w-full min-h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-10">
        <div className="vostra-container">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-black/10">
            <span className="text-xs font-mono text-[#757A82] uppercase">
              SHOWING <strong className="text-[#111315]">{displayProducts.length}</strong> PIECES IN THIS CHAPTER
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Collections */}
      {relatedCollections.length > 0 && (
        <section className="py-12 border-t border-black/10 bg-white">
          <div className="vostra-container">
            <h3 className="text-xs font-mono text-[#757A82] tracking-widest uppercase mb-6 font-bold">
              EXPLORE OTHER CHAPTERS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedCollections.map((relCol) => (
                <Link
                  key={relCol.id}
                  href={`/collections/${relCol.slug}`}
                  className="group p-6 bg-[#F7F7F5] border border-black/10 hover:border-black/30 rounded-sm flex flex-col justify-between transition-all shadow-sm"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-[#C65A28] uppercase font-bold">
                      {relCol.season}
                    </span>
                    <h4 className="heading-lg text-[#111315] font-primary font-bold uppercase tracking-tight group-hover:text-[#0E6068] transition-colors">
                      {relCol.name}
                    </h4>
                    <p className="text-xs font-secondary text-[#4A4E54] line-clamp-2">
                      {relCol.tagline}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#111315] font-bold">
                    <span>{relCol.itemCount} ITEMS</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
