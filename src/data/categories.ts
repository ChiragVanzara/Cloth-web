export interface CategoryItem {
  id: string;
  name: string;
  gender: 'men' | 'women' | 'unisex' | 'all';
  count: number;
}

export const allCategories: CategoryItem[] = [
  // Men
  { id: 'T-Shirts', name: 'T-Shirts', gender: 'men', count: 18 },
  { id: 'Oversized Tees', name: 'Oversized Tees', gender: 'men', count: 12 },
  { id: 'Graphic Tees', name: 'Graphic Tees', gender: 'men', count: 10 },
  { id: 'Basic Tees', name: 'Basic Tees', gender: 'men', count: 8 },
  { id: 'Polo Shirts', name: 'Polo Shirts', gender: 'men', count: 6 },
  { id: 'Shirts', name: 'Shirts & Overshirts', gender: 'men', count: 9 },
  { id: 'Hoodies', name: 'Hoodies & Sweatshirts', gender: 'men', count: 14 },
  { id: 'Jackets', name: 'Jackets & Bombers', gender: 'men', count: 11 },
  { id: 'Cargo Pants', name: 'Cargo Pants & Joggers', gender: 'men', count: 12 },
  { id: 'Jeans', name: 'Jeans & Raw Denim', gender: 'men', count: 15 },
  { id: 'Trousers', name: 'Trousers & Parachute Pants', gender: 'men', count: 8 },
  { id: 'Knitwear', name: 'Knitwear & Sweaters', gender: 'men', count: 7 },
  { id: 'Co-Ord Sets', name: 'Co-Ord Sets', gender: 'men', count: 6 },

  // Women
  { id: 'Baby Tees', name: 'Baby Tees & Crop Tops', gender: 'women', count: 14 },
  { id: 'Corset Tops', name: 'Corset & Sculpted Tops', gender: 'women', count: 8 },
  { id: 'Dresses', name: 'Dresses & Gowns', gender: 'women', count: 9 },
  { id: 'Skirts', name: 'Skirts (Mini & Midi)', gender: 'women', count: 11 },
  { id: 'Wide-Leg Jeans', name: 'Wide-Leg & Relaxed Jeans', gender: 'women', count: 13 },
  { id: 'Parachute Pants', name: 'Parachute & Cargo Pants', gender: 'women', count: 10 },
  { id: 'Cardigans', name: 'Cardigans & Knits', gender: 'women', count: 8 },

  // Unisex & Lifestyle
  { id: 'Streetwear', name: 'Streetwear Editions', gender: 'unisex', count: 24 },
  { id: 'Essentials', name: 'Core Essentials', gender: 'unisex', count: 19 },
  { id: 'Accessories', name: 'Accessories & Bags', gender: 'unisex', count: 12 },
  { id: 'Footwear', name: 'Footwear & High Tops', gender: 'unisex', count: 6 },
];

export const outfitCategories = [
  'EVERYDAY FIT',
  'STREET FIT',
  'CAMPUS FIT',
  'WEEKEND FIT',
  'DATE NIGHT',
  'NIGHT OUT',
  'TRAVEL FIT',
  'MINIMAL FIT',
  'OVERSIZED FIT',
  'LAYERED FIT',
  'MONOCHROME',
  'DENIM EDIT',
  'SUMMER FIT',
  'WINTER LAYERS'
];

export const filterSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const filterFits = ['Oversized', 'Relaxed', 'Straight', 'Boxy', 'Regular', 'Wide-Leg', 'Slim'];

export const filterColors = [
  { name: 'Pitch Black', hex: '#090A0B' },
  { name: 'Charcoal Wash', hex: '#121416' },
  { name: 'Graphite Mineral', hex: '#1B1F22' },
  { name: 'Deep Teal', hex: '#123A3F' },
  { name: 'Indigo Navy', hex: '#182A3A' },
  { name: 'Deep Rust', hex: '#682C21' },
  { name: 'Burnt Orange', hex: '#C65A28' },
  { name: 'Muted Gold', hex: '#C59A3A' },
  { name: 'Bone White', hex: '#B8BAB5' },
];
