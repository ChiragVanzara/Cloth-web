import { Collection } from '@/types';

export const mockCollections: Collection[] = [
  {
    id: 'streetwear',
    name: 'STREETWEAR CAPSULE',
    slug: 'streetwear',
    tagline: 'Heavyweight jerseys, boxy cuts, and drop-shoulder silhouettes.',
    description: 'A study in contemporary youth culture and aggressive proportions. Featuring custom 280-450 GSM French terry fabrics, tactile puff screen-prints, and modular utility hardware.',
    itemCount: 14,
    season: 'Autumn / Winter 2026',
    accentColor: '#C65A28',
    gradient: 'linear-gradient(135deg, #1B1F22 0%, #123A3F 60%, #090A0B 100%)',
    badge: 'POPULAR',
    featured: true
  },
  {
    id: 'denim',
    name: 'OKAYAMA RAW DENIM',
    slug: 'denim',
    tagline: 'Woven on vintage shuttle looms with red-line selvedge edges.',
    description: 'Pure 14.5oz unwashed raw denim engineered to mold to the unique contours and lifestyle wear patterns of the wearer over years of intentional use.',
    itemCount: 9,
    season: 'Core Archive',
    accentColor: '#182A3A',
    gradient: 'linear-gradient(135deg, #182A3A 0%, #090A0B 70%, #123A3F 100%)',
    badge: 'SELVEDGE',
    featured: true
  },
  {
    id: 'essentials',
    name: 'THE VOSTRA ESSENTIALS',
    slug: 'essentials',
    tagline: 'Uncompromising daily fundamentals with zero logo clutter.',
    description: 'Elevated basic tees, baby tees, relaxed trousers, and structured knit polos designed as permanent building blocks for the discerning modern wardrobe.',
    itemCount: 18,
    season: 'Permanent Series',
    accentColor: '#123A3F',
    gradient: 'linear-gradient(135deg, #121416 0%, #1B1F22 55%, #090A0B 100%)',
    badge: 'CORE',
    featured: true
  },
  {
    id: 'limited-drop',
    name: 'THE SCULPT SERIES',
    slug: 'limited-drop',
    tagline: 'Avant-garde bonded ponte corsets and draped dresses.',
    description: 'Limited edition high-fashion pieces featuring architectural boning channels, asymmetric handkerchief hemlines, and heavy industrial hardware.',
    itemCount: 8,
    season: 'Limited Run / 250 Units',
    accentColor: '#682C21',
    gradient: 'linear-gradient(135deg, #682C21 0%, #090A0B 60%, #C65A28 100%)',
    badge: 'LIMITED DROP',
    featured: true
  },
  {
    id: 'outerwear',
    name: 'METROPOLIS OUTERWEAR',
    slug: 'outerwear',
    tagline: 'Weatherproof flight nylon bombers and heavy truckers.',
    description: 'Armor against shifting city climates. Equipped with 3M Thinsulate insulation, YKK two-way zippers, and ripstop modular utility storage.',
    itemCount: 11,
    season: 'Winter 2026',
    accentColor: '#C59A3A',
    gradient: 'linear-gradient(135deg, #1B1F22 0%, #121416 60%, #682C21 100%)',
    badge: 'NEW DROP',
    featured: true
  },
  {
    id: 'monochrome',
    name: 'MONOCHROME SPECTRUM',
    slug: 'monochrome',
    tagline: 'Deep black, graphite, and mineral tones in layered textures.',
    description: 'Stripping back distracting colors to highlight form, shadow, stitch tension, and tactile fabric depth.',
    itemCount: 16,
    season: 'Continuous Edit',
    accentColor: '#B8BAB5',
    gradient: 'linear-gradient(135deg, #090A0B 0%, #1B1F22 50%, #121416 100%)',
    featured: false
  }
];
