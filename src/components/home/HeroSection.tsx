'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { heroCampaign } from '@/data/products';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full pt-2 pb-8 sm:pb-12 select-none bg-[#F7F7F5]">
      {/* Main 16:9 / 75vh Full-Bleed Hero Container with Real High-Fashion Photography */}
      <div className="relative w-full overflow-hidden border-y border-black/10 shadow-2xl bg-[#EAEAE4]">
        <MediaPlaceholder
          type="hero"
          aspectRatio="16/9"
          imageUrl="/images/hero-campaign.png"
          altText="VOSTRA Autumn/Winter 2026 Tokyo Architecture Fashion Campaign"
          className="w-full !rounded-none !border-x-0 min-h-[520px] sm:min-h-[640px] lg:min-h-[740px]"
        >
          {/* Cinematic Editorial Overlay Grid */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 flex flex-col justify-between p-6 sm:p-12 lg:p-16 z-20 pointer-events-auto text-white">
            <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between">
              
              {/* TOP HERO META STRIP */}
              <div className="flex items-center justify-between">
                {/* Top-Left: Season Badge */}
                <div className="flex items-center gap-2.5 px-3.5 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-sm shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#1ECAD3] animate-pulse" />
                  <span className="text-[11px] font-mono tracking-widest text-white uppercase font-bold">
                    {heroCampaign.season}
                  </span>
                </div>

                {/* Top-Right: Coordinates & Camera Info */}
                <div className="hidden sm:flex items-center gap-4 text-[11px] font-mono tracking-widest text-white/80 uppercase backdrop-blur-sm px-3 py-1 bg-black/40 rounded-sm">
                  <span>REC [●] RAW</span>
                  <span className="text-white/30">•</span>
                  <span>28.6139° N, 77.2090° E</span>
                  <span className="text-white/30">•</span>
                  <span className="text-[#C59A3A] font-bold">SERIES NO. 04</span>
                </div>
              </div>

              {/* CENTER-BOTTOM HERO CONTENT COMPOSITION */}
              <div className="max-w-4xl space-y-5 sm:space-y-6 pt-12 sm:pt-0">
                {/* Small Micro-Label */}
                <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#C65A28] uppercase font-bold bg-black/50 px-2.5 py-1 rounded-sm backdrop-blur-sm border border-white/10">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AUTUMN / WINTER 2026 DROP 01</span>
                </div>

                {/* Dramatic Hero Headline with Syne Luxury Font */}
                <h1 className="hero-headline max-w-3xl !text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                  {heroCampaign.headline}
                </h1>

                {/* Hero Description */}
                <p className="text-sm sm:text-base lg:text-lg text-white/90 font-secondary max-w-2xl leading-relaxed drop-shadow-md">
                  {heroCampaign.subhead}
                </p>

                {/* Real Designed 52px CTA Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <Link
                    href={heroCampaign.ctaPrimary.href}
                    className="btn-primary group"
                  >
                    <span>{heroCampaign.ctaPrimary.label}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </Link>

                  <Link
                    href={heroCampaign.ctaSecondary.href}
                    className="btn-secondary group !bg-white/15 !text-white !border-white/30 hover:!bg-white hover:!text-[#111315]"
                  >
                    <span>{heroCampaign.ctaSecondary.label}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* BOTTOM HERO FOOTER METADATA STRIP */}
              <div className="hidden md:grid grid-cols-3 gap-6 pt-6 border-t border-white/20 text-[11px] font-mono text-white/80 tracking-widest uppercase">
                <div className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-[#1ECAD3]" />
                  <span>GLOBAL LOGISTICS // EXPEDITED FULFILLMENT</span>
                </div>

                <div className="text-center">
                  <span>280–450 GSM // HEAVYWEIGHT ORGANIC COTTON</span>
                </div>

                <div className="text-right text-white font-semibold">
                  <span>14.5 OZ // OKAYAMA RAW SELVEDGE DENIM</span>
                </div>
              </div>

            </div>
          </div>
        </MediaPlaceholder>
      </div>
    </section>
  );
};
