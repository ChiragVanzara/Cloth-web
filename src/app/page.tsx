import { HeroSection } from '@/components/home/HeroSection';
import { PromoBanners } from '@/components/home/PromoBanners';
import { CollectionStories } from '@/components/home/CollectionStories';
import { AsymmetricEditorialGrid } from '@/components/home/AsymmetricEditorialGrid';
import { StyleLookbookGrid } from '@/components/home/StyleLookbookGrid';
import { TrendingCarousel } from '@/components/home/TrendingCarousel';
import { NewsletterSection } from '@/components/home/NewsletterSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#F7F7F5] text-[#111315]">
      {/* 1. Large Hero Video / Image Area */}
      <HeroSection />

      {/* 2. Two Horizontal Promotional Banners */}
      <PromoBanners />

      {/* 3. Collection Stories — Circular UI */}
      <CollectionStories />

      {/* 4. Uneven Editorial / Product Section (Asymmetric Grid) */}
      <AsymmetricEditorialGrid />

      {/* 5. Style Archive & Lookbook Gallery (30+ High-Fashion Options) */}
      <StyleLookbookGrid />

      {/* 6. Horizontally Auto-Scrolling Trending / Top Rated Carousel */}
      <TrendingCarousel />

      {/* 7. VIP Drop Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
