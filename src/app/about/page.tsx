import React from 'react';
import Link from 'next/link';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { ArrowRight, Sparkles, Compass, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      {/* Editorial Header */}
      <section className="py-12 border-b border-black/10 bg-white">
        <div className="vostra-container max-w-4xl space-y-4">
          <div className="text-xs font-mono tracking-widest text-[#C65A28] uppercase font-bold">
            STUDIO MANIFESTO // THE VOSTRA ETHOS
          </div>
          <h1 className="display-lg text-[#111315] font-primary font-bold uppercase tracking-tight">
            NOT BUILT FOR THE MASSES. ENGINEERED FOR MOVEMENT.
          </h1>
          <p className="text-sm sm:text-base font-secondary text-[#4A4E54] leading-relaxed">
            VOSTRA was founded to reject the generic cycle of fast fashion. We treat garments as architectural structures — prioritizing heavy GSM weights, unwashed Okayama denim, and sculpted cuts that age with individual grace.
          </p>
        </div>
      </section>

      {/* Main Story & Media Grid */}
      <section className="py-12">
        <div className="vostra-container max-w-5xl space-y-16">
          {/* Section 1: The Design Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border border-black/10 p-6 sm:p-8 rounded-sm shadow-sm">
            <div className="rounded-[2px] overflow-hidden border border-black/10">
              <MediaPlaceholder
                type="editorial"
                aspectRatio="4/5"
                imageUrl="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800"
                altText="Textile Research Lab"
                label="TEXTILE RESEARCH LAB // 4:5"
                subLabel="280-450 GSM DENSE WEAVES"
                className="w-full min-h-[380px]"
              />
            </div>
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#0E6068] uppercase tracking-widest font-bold">
                01. TEXTILE PROPORTIONS
              </span>
              <h2 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
                PROPRIETARY HEAVYWEIGHT WEAVES
              </h2>
              <p className="text-xs sm:text-sm font-secondary text-[#4A4E54] leading-relaxed">
                Most commercial streetwear uses flimsy 160-200 GSM blanks. VOSTRA knits begin at 280 GSM dry-touch jersey and scale to 450 GSM loopback French terry — creating an uncompromising drape that maintains its boxy architecture even after 100+ wears.
              </p>
            </div>
          </div>

          {/* Section 2: Japanese Selvedge Denim */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border border-black/10 p-6 sm:p-8 rounded-sm shadow-sm">
            <div className="space-y-4 md:order-1 order-2">
              <span className="text-[10px] font-mono text-[#C65A28] uppercase tracking-widest font-bold">
                02. JAPANESE HERITAGE
              </span>
              <h2 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
                OKAYAMA SHUTTLE LOOMS
              </h2>
              <p className="text-xs sm:text-sm font-secondary text-[#4A4E54] leading-relaxed">
                Woven on vintage Toyoda shuttle looms in Kojima, Okayama. Our 14.5oz raw selvedge denim is left unwashed so that each crease, whisker, and honeycomb fade tells the unique physical history of the person wearing it.
              </p>
            </div>
            <div className="md:order-2 order-1 rounded-[2px] overflow-hidden border border-black/10">
              <MediaPlaceholder
                type="editorial"
                aspectRatio="4/5"
                imageUrl="https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&q=80&w=800"
                altText="Okayama Shuttle Looms"
                label="SHUTTLE LOOM WEAVE // 4:5"
                subLabel="KOJIMA DENIM DISTRICT"
                className="w-full min-h-[380px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
