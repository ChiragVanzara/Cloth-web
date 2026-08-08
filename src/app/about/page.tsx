import React from 'react';
import Link from 'next/link';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { ArrowRight, Sparkles, Compass, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      {/* Editorial Header */}
      <section className="py-12 border-b border-white/10 bg-[#121416]/50">
        <div className="layout-container max-w-4xl space-y-4">
          <div className="text-xs font-mono tracking-widest text-[#C65A28] uppercase font-bold">
            STUDIO MANIFESTO // THE VOSTRA ETHOS
          </div>
          <h1 className="display-lg text-white font-primary font-bold uppercase tracking-tight">
            NOT BUILT FOR THE MASSES. ENGINEERED FOR MOVEMENT.
          </h1>
          <p className="text-sm sm:text-base font-secondary text-white/70 leading-relaxed">
            VOSTRA was founded to reject the generic cycle of fast fashion. We treat garments as architectural structures — prioritizing heavy GSM weights, unwashed Okayama denim, and sculpted cuts that age with individual grace.
          </p>
        </div>
      </section>

      {/* Main Story & Media Grid */}
      <section className="py-12">
        <div className="layout-container max-w-5xl space-y-16">
          {/* Section 1: The Design Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <MediaPlaceholder
              type="editorial"
              aspectRatio="4/5"
              gradient="linear-gradient(135deg, #1B1F22 0%, #123A3F 60%, #090A0B 100%)"
              label="TEXTILE RESEARCH LAB // 4:5"
              subLabel="280-450 GSM DENSE WEAVES"
              className="w-full min-h-[380px]"
            />
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#1ECAD3] uppercase tracking-widest font-bold">
                01. TEXTILE PROPORTIONS
              </span>
              <h2 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
                PROPRIETARY HEAVYWEIGHT WEAVES
              </h2>
              <p className="text-xs sm:text-sm font-secondary text-white/70 leading-relaxed">
                Most commercial streetwear uses flimsy 160-200 GSM blanks. VOSTRA knits begin at 280 GSM dry-touch jersey and scale to 450 GSM loopback French terry — creating an uncompromising drape that maintains its boxy architecture even after 100+ wears.
              </p>
            </div>
          </div>

          {/* Section 2: Japanese Selvedge Denim */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 md:order-1 order-2">
              <span className="text-[10px] font-mono text-[#C65A28] uppercase tracking-widest font-bold">
                02. JAPANESE HERITAGE
              </span>
              <h2 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
                OKAYAMA SHUTTLE LOOMS
              </h2>
              <p className="text-xs sm:text-sm font-secondary text-white/70 leading-relaxed">
                Woven on vintage Toyoda shuttle looms in Kojima, Okayama. Our 14.5oz raw selvedge denim is left unwashed so that each crease, whisker, and honeycomb fade tells the unique physical history of the person wearing it.
              </p>
            </div>
            <MediaPlaceholder
              type="editorial"
              aspectRatio="4/5"
              gradient="linear-gradient(135deg, #182A3A 0%, #090A0B 70%, #121416 100%)"
              label="OKAYAMA SHUTTLE LOOM // 4:5"
              subLabel="14.5 OZ RED-LINE SELVEDGE"
              className="w-full min-h-[380px] md:order-2 order-1"
            />
          </div>

          {/* Section 3: Responsible Micro-Batch Drops */}
          <div className="p-8 sm:p-12 bg-[#121416] border border-white/10 rounded-sm space-y-4 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono text-[#C59A3A] uppercase tracking-widest font-bold">
              03. ZERO OVERPRODUCTION
            </span>
            <h3 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
              STRICTLY LIMITED CAPSULE RELEASES
            </h3>
            <p className="text-xs sm:text-sm font-secondary text-white/70 leading-relaxed">
              We never produce surplus inventory destined for landfills. Every seasonal collection is manufactured in strict numbered batches of 250-500 pieces. Once archived, we move forward.
            </p>
            <div className="pt-2">
              <Link href="/shop" className="btn-primary text-xs inline-flex items-center gap-2">
                <span>EXPLORE CURRENT PIECES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
