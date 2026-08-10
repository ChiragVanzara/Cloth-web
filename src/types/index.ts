export type Gender = 'men' | 'women' | 'unisex';

export type FitType = 'Oversized' | 'Relaxed' | 'Straight' | 'Boxy' | 'Regular' | 'Wide-Leg' | 'Slim';

export interface ProductColor {
  name: string;
  hex: string;
  gradient?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subCategory: string;
  gender: Gender;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  colors: ProductColor[];
  sizes: ('XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL')[];
  fit: FitType;
  material: string;
  composition: string;
  collection: string;
  badge?: 'NEW DROP' | 'BEST SELLER' | 'LIMITED DROP' | 'COMMUNITY PICK' | 'STAFF PICK' | 'SALE' | 'HOT' | string;
  discountPercent?: number;
  description: string;
  details: string[];
  careInstructions: string[];
  outfitCategory: string; // e.g. "STREET FIT", "EVERYDAY FIT", "OVERSIZED FIT", "NIGHT OUT"
  isTrending?: boolean;
  isTopRated?: boolean;
  isNewArrival?: boolean;
  placeholderGradient?: string;
  imageUrl?: string;
  hoverImageUrl?: string;
  images?: string[];
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  itemCount: number;
  season: string;
  accentColor: string;
  gradient: string;
  badge?: string;
  featured?: boolean;
  imageUrl?: string;
}

export interface CartItem {
  product: Product;
  selectedColor: ProductColor;
  selectedSize: string;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface FilterState {
  gender: string[];
  category: string[];
  size: string[];
  color: string[];
  fit: string[];
  priceRange: [number, number];
  outfitCategory: string[];
  collection: string[];
  inStockOnly: boolean;
  onSaleOnly: boolean;
}

export type SortOption =
  | 'recommended'
  | 'newest'
  | 'price-asc'
  | 'price-desc'
  | 'rating'
  | 'trending';

export interface OrderItem {
  productId: string;
  name: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  date: string;
  status: 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
  trackingNumber: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  shippingAddress: Address;
  paymentMethod: string;
}

export interface Address {
  id: string;
  fullName: string;
  street: string;
  apartment?: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  isDefault?: boolean;
  type: 'home' | 'work' | 'other';
}
