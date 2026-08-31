# VOSTRA STUDIO — Comprehensive Architectural & Component Documentation

> **Contemporary Luxury Streetwear & Architectural Apparel E-Commerce Platform**  
> Built with Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, Lenis Momentum Scrolling, and Custom Design Systems.

---

## 1. Executive Summary & Design Philosophy

**VOSTRA** is a high-end contemporary fashion and architectural streetwear web application designed to deliver a luxury editorial experience. The platform combines high-density textile specifications (280–450 GSM jerseys, 14.5oz Okayama raw selvedge denim) with clean light-luxury aesthetics, butter-smooth 60fps hardware-accelerated momentum scrolling, and rich interactive e-commerce functionality.

### Core Architectural Pillars
- **Clean Light Luxury Aesthetics**: Pure white (`#FFFFFF`) card containers and modular elements over warm neutral canvas (`#F7F7F5`), contrasted with crisp `#111315` typography and curated accents (`#0E6068` deep pine, `#C65A28` terracotta).
- **Interactive Multi-Image Crossfade**: All product cards feature dual-angle model photography with smooth opacity crossfades on mouse hover.
- **Continuous 60fps Momentum Scrolling**: Integrated Lenis engine with exponential easing and hardware acceleration across all viewports.
- **Complete End-to-End Commerce Flow**: Fully functional cart slide-over drawer, promo code engine, free shipping progress meters, dynamic multi-step checkout, wishlist persistence, order tracking timeline, and user account management.
- **Zero Placeholder Architecture**: Features 24 fully detailed contemporary garments with 35–40+ high-resolution editorial fashion images and real studio lookbooks (Tokyo, Paris, Milan, London).

---

## 2. Technology Stack & Dependencies

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14.2.23 (App Router)** | Server & client component architecture, file-system routing, dynamic metadata, and static generation. |
| **Runtime & UI** | **React 18.3.1 & React DOM** | State management, context providers, hooks, and responsive lifecycle rendering. |
| **Language** | **TypeScript 5.7.3** | Strict type safety for data models, context providers, filters, and component props. |
| **Styling** | **Tailwind CSS 3.4.17 & PostCSS** | Custom design tokens, typography utilities, responsive breakpoints, and glassmorphism. |
| **Motion & Scroll** | **Lenis 1.3.26 & Framer Motion** | Inertial momentum smooth scrolling, continuous marquee tickers, and UI transitions. |
| **Icons** | **Lucide React 0.475.0** | Clean, lightweight geometric iconography. |

---

## 3. Project Directory Structure

```
Cloth-web/
├── .agents/
│   └── AGENTS.md                  # Project rules & Git workflow policies (No unauthorized pushes)
├── public/
│   └── images/                    # Local optimized image assets & fallbacks
├── src/
│   ├── app/                       # Next.js 14 App Router (All 20+ pages & routes)
│   │   ├── about/page.tsx         # Brand manifesto & textile laboratory story
│   │   ├── account/
│   │   │   ├── addresses/page.tsx # Saved shipping address management
│   │   │   ├── orders/
│   │   │   │   ├── [id]/page.tsx  # Live order tracking timeline & milestones
│   │   │   │   └── page.tsx       # Order history with live status tags
│   │   │   ├── profile/page.tsx   # Fit preferences & insider profile specs
│   │   │   └── page.tsx           # Member passport dashboard
│   │   ├── cart/page.tsx          # Full shopping bag page with calculations
│   │   ├── checkout/page.tsx      # Multi-step express checkout & order confirmation
│   │   ├── collections/
│   │   │   ├── [slug]/page.tsx    # Individual collection capsule view (Denim, Knitwear, etc.)
│   │   │   └── page.tsx           # Collections index & seasonal chapters
│   │   ├── contact/page.tsx       # Studio concierge & customer support inquiry form
│   │   ├── faq/page.tsx           # Searchable accordion knowledge base
│   │   ├── forgot-password/page.tsx # Password recovery token dispatcher
│   │   ├── login/page.tsx         # Member authentication portal
│   │   ├── men/page.tsx           # Dedicated Men's catalog & editorial banner
│   │   ├── new-arrivals/page.tsx  # Drop 01 release countdown & fresh inventory
│   │   ├── privacy/page.tsx       # Privacy policy & data governance
│   │   ├── products/
│   │   │   └── [slug]/page.tsx    # Dynamic product detail page with size selector & gallery
│   │   ├── register/page.tsx      # Guild registration & insider membership
│   │   ├── returns/page.tsx       # 7-day doorstep return & exchange protocol
│   │   ├── search/page.tsx        # Instant search & archive keyword filter
│   │   ├── shipping/page.tsx      # Shipping timelines & express air logistics
│   │   ├── shop/page.tsx          # Comprehensive catalog with multi-facet sidebar
│   │   ├── terms/page.tsx         # Terms of service & purchase conditions
│   │   ├── wishlist/page.tsx      # Saved silhouettes grid with move-to-bag action
│   │   ├── women/page.tsx         # Dedicated Women's catalog & editorial showcase
│   │   ├── error.tsx              # System exception error boundary view
│   │   ├── globals.css            # Custom CSS utilities, typography imports, and Lenis styles
│   │   ├── layout.tsx             # Root layout with providers, Navbar, Footer, and CartDrawer
│   │   ├── loading.tsx            # Global asset retrieval loading spinner
│   │   ├── not-found.tsx          # 404 Void error state
│   │   └── page.tsx               # Homepage with hero, lookbook, carousel, and stories
│   ├── components/
│   │   ├── cart/
│   │   │   └── CartDrawer.tsx     # Slide-over cart drawer with shipping meter & promo engine
│   │   ├── home/
│   │   │   ├── AsymmetricEditorialGrid.tsx # 12-column uneven high-fashion visual grid
│   │   │   ├── CollectionStories.tsx       # Instagram-style circular capsule story reels
│   │   │   ├── HeroSection.tsx             # 16:9 cinematic campaign banner with typography
│   │   │   ├── NewsletterSection.tsx       # VIP drop invitation subscriber capture
│   │   │   ├── PromoBanners.tsx            # Dual promotional feature cards (Sale & Shipping)
│   │   │   ├── StyleLookbookGrid.tsx       # 30+ lookbook grid with Tokyo/Paris/Milan/London tabs
│   │   │   └── TrendingCarousel.tsx        # Auto-scrolling horizontal marquee with pause/controls
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.tsx         # Live ticker with rotating perks & drop alerts
│   │   │   ├── Footer.tsx                  # Brand propositions, links, newsletter, & legal info
│   │   │   ├── MobileMenu.tsx              # Fullscreen mobile navigation drawer
│   │   │   ├── Navbar.tsx                  # Sticky blurred header with badge indicators & search
│   │   │   └── SearchOverlay.tsx           # Global modal search popup with instant results
│   │   ├── product/
│   │   │   ├── ProductCard.tsx             # Hover multi-image crossfade, quick-add, & colors
│   │   │   └── SizeGuideModal.tsx          # Interactive Inches/CM sizing table & fit advice
│   │   ├── shop/
│   │   │   ├── ActiveFilterPills.tsx       # Active filter tag pills with instant dismissal
│   │   │   ├── FilterDrawer.tsx            # Slide-over filter interface for mobile screens
│   │   │   ├── FilterSidebar.tsx           # Multi-criteria accordion sidebar for desktop
│   │   │   └── SortDropdown.tsx            # Dropdown menu for sorting catalog results
│   │   └── ui/
│   │       ├── MediaPlaceholder.tsx        # Responsive media container with hover crossfade
│   │       └── SmoothScrollProvider.tsx    # Root Lenis 60fps momentum scroll provider
│   ├── context/
│   │   ├── CartContext.tsx        # Cart state, quantities, promo code validator, and pricing
│   │   ├── ToastContext.tsx       # Global toast notification alerts
│   │   └── WishlistContext.tsx    # Wishlist storage, toggle handlers, and item counters
│   ├── data/
│   │   ├── categories.ts          # Category definitions, fits, sizes, and color palettes
│   │   ├── collections.ts         # Curated capsule chapters and seasonal collections
│   │   ├── faqs.ts                # Structured knowledge base Q&A entries
│   │   └── products.ts            # 24 contemporary products with multi-image arrays & GSM specs
│   └── types/
│       └── index.ts               # Core TypeScript interfaces & data models
├── package.json                   # Dependencies and npm scripts
├── tailwind.config.ts             # Tailwind design tokens, typography, and color configs
└── tsconfig.json                  # TypeScript compiler options
```

---

## 4. Comprehensive Page Documentation

### 4.1. Homepage (`/` — `src/app/page.tsx`)
The centerpiece of the application, featuring high-fashion editorial aesthetics:
1. **Announcement Bar**: Live ticker highlighting "Complimentary Express Air Shipping on Orders > ₹999" and "Drop 01 Active".
2. **Hero Section**: 16:9 cinematic campaign banner showcasing Tokyo architectural fashion photography, luxury typography, and dual CTAs (**Shop Men** / **Shop Women**).
3. **Collection Stories**: Circular story reels highlighting *New Drops*, *Men*, *Women*, *Streetwear*, *Denim*, *Outerwear*, and *Archive Sale*.
4. **Trending Now Marquee**: Continuous smooth-scrolling horizontal marquee displaying bestsellers with pause-on-hover and directional arrow buttons.
5. **Experiment in Form (Asymmetric Editorial Grid)**: 12-column uneven grid highlighting raw Japanese denim, heavyweight knits, and sculpt series.
6. **Global Style Archive & Lookbook**: Interactive 30+ lookbook grid with city filter tabs (**Tokyo**, **Paris**, **Milan**, **London**).
7. **Promotional Highlights**: Dual cards for *Limited Drop Archive (-40%)* and *Complimentary Logistics*.
8. **VIP Drop Newsletter**: Early-access signup form with instant validation.

---

### 4.2. Department Catalogs
- **Men's Department (`/men` — `src/app/men/page.tsx`)**: Filtered catalog displaying boxy heavyweight tees, raw Okayama selvedge denim, MA-1 bombers, and technical cargo pants with a dedicated editorial hero banner.
- **Women's Department (`/women` — `src/app/women/page.tsx`)**: Dedicated catalog featuring sculpted boned corsets, baby tees, mohair knits, wide-leg trousers, and technical parachute pants.
- **New Arrivals (`/new-arrivals` — `src/app/new-arrivals/page.tsx`)**: Features a live countdown timer card for Autumn/Winter 2026 Drop 01 and exclusive early-access pieces.

---

### 4.3. Shop All & Filtering (`/shop` — `src/app/shop/page.tsx`)
Comprehensive catalog supporting real-time multi-criteria filtering:
- **Filtering Capabilities**:
  - **Gender / Department**: Men, Women, Unisex.
  - **Category**: Tees, Hoodies, Denim, Cargo Pants, Outerwear, Knitwear, Accessories.
  - **Fit**: Oversized, Relaxed, Straight, Boxy, Tailored.
  - **Size**: XS, S, M, L, XL, XXL.
  - **Color**: Graphite Mineral, Midnight Onyx, Indigo Ink, Vintage Olive, Sand Stone, Chalk White, Rust Terracotta.
  - **Price Range**: Dynamic multi-tier price bracket filtering.
  - **On Sale**: Instant toggle for discounted archive pieces.
- **Sorting Options**: Featured, Newest Drops, Price: Low to High, Price: High to Low.
- **Active Pills**: Clear all or individually dismiss active filter criteria.
- **Dual Layout**: Sticky accordion sidebar on desktop (`FilterSidebar.tsx`) and smooth slide-over modal drawer on mobile (`FilterDrawer.tsx`).

---

### 4.4. Product Detail View (`/products/[slug]` — `src/app/products/[slug]/page.tsx`)
High-conversion product page engineered with luxury details:
- **Multi-Angle Gallery**: Interactive vertical gallery with high-resolution image zoom on click.
- **Textile Specifications**: Technical badge showing exact **GSM weight** (e.g., 280 GSM, 450 GSM), **Fabric Composition** (100% Organic Combed Cotton, 14.5oz Raw Okayama Denim), and **Country of Origin**.
- **Interactive Color Swatches**: Visual color dots with selected label indicator.
- **Interactive Size Selector**: XS through XXL buttons with live stock indicators ("2 Left in Stock" / "In Stock").
- **Interactive Size Guide**: Modal trigger opening measurement charts with Inch / CM conversion.
- **Quantity Stepper & Instant Cart Insertion**: Smooth add-to-bag with automatic Cart Drawer expansion and toast notifications.
- **Collapsible Specification Accordions**: Shipping & Returns, Fabric Care, Fit Advice.
- **Related Recommendations**: Curated "Complete the Look" product cards.

---

### 4.5. Collections & Capsules (`/collections` & `/collections/[slug]`)
- **Collections Index (`/collections/page.tsx`)**: Grid of active design chapters (Winter 26, Heavyweight Uniforms, Selvedge Archive, The Sculpt Series).
- **Collection View (`/collections/[slug]/page.tsx`)**: Dedicated capsule page with atmospheric editorial banner, designer notes, and targeted garment grid.

---

### 4.6. Shopping Cart & Slide-Over Drawer
- **Cart Drawer (`src/components/cart/CartDrawer.tsx`)**:
  - Accessible from anywhere in the app with the shopping bag icon.
  - **Free Shipping Meter**: Dynamic progress bar calculating amount remaining until ₹999 free express shipping threshold.
  - **Item Management**: In-line quantity adjustment, item removal, color/size indicators, and price recalculation.
  - **Promo Engine**: Input validating promo codes (e.g., `VOSTRA10` for 10% off) with error handling.
  - **Encrypted Checkout Link**: Direct link to `/checkout`.
- **Full Cart Page (`/cart` — `src/app/cart/page.tsx`)**:
  - Expanded 2-column view with item list, save-to-wishlist actions, shipping progress bar, promo code summary, and price reconciliation.

---

### 4.7. Express Multi-Step Checkout (`/checkout` — `src/app/checkout/page.tsx`)
A streamlined, frictionless checkout flow:
- **Step 1: Contact & Delivery Address**: Full name, email, phone (with SMS updates), street address, city, state, and pincode.
- **Step 2: Shipping Method**: Standard Air Express (Free) vs. Next-Day Metro Drop (₹199).
- **Step 3: Payment Architecture**:
  - **UPI / QR**: GPay, PhonePe, Paytm, CRED with live UPI ID validation.
  - **Cards**: Credit & Debit card input with auto-formatting.
  - **Netbanking**: Major Indian banks (HDFC, ICICI, SBI, Axis).
  - **Cash on Delivery (COD)**: Doorstep verification and payment.
- **Step 4: Order Confirmation**: Generates a unique order reference (`VST-XXXXXX`), clears the cart, and displays full order summary and dispatch details.

---

### 4.8. Wishlist (`/wishlist` — `src/app/wishlist/page.tsx`)
- Saved silhouettes grid synced with browser localStorage.
- **Move All to Bag**: Bulk migration of all saved items directly to the shopping cart.
- Instant toggle from product cards or detail pages.

---

### 4.9. User Account Portal (`/account/*`)
- **Member Dashboard (`/account/page.tsx`)**: VIP passport status, platinum insider badge, overview of active orders, and quick access to addresses, wishlist, and fit profile.
- **Order History (`/account/orders/page.tsx`)**: List of current and past orders with live status badges (*In Transit*, *Delivered*), courier partner names, and AWB tracking numbers.
- **Live Order Tracking (`/account/orders/[id]/page.tsx`)**: Visual milestone timeline (*Order Received* → *QC Inspected* → *Dispatched* → *Arrived at Hub* → *Out for Delivery*).
- **Saved Addresses (`/account/addresses/page.tsx`)**: Management of Home and Studio addresses with default selection toggles.
- **Fit Profile (`/account/profile/page.tsx`)**: Customization of silhouette fit preferences (Oversized, Relaxed, Straight, Slim) and gender bias.

---

### 4.10. Knowledge & Support Pages
- **FAQ Knowledge Base (`/faq` — `src/app/faq/page.tsx`)**: Categorized accordion FAQs (Orders, Shipping, Returns, Sizing, Fabrics) with instant search filter.
- **Studio Concierge (`/contact` — `src/app/contact/page.tsx`)**: Direct customer message dispatch form and physical studio coordinates.
- **Studio Manifesto (`/about` — `src/app/about/page.tsx`)**: The VOSTRA design philosophy, 280–450 GSM textile standards, and Okayama shuttle loom history.
- **Shipping Policy (`/shipping` — `src/app/shipping/page.tsx`)**: Pan-India logistics timelines and COD verification protocols.
- **Returns & Exchanges (`/returns` — `src/app/returns/page.tsx`)**: 7-day doorstep exchange policies and instant refund timelines.
- **Terms & Privacy (`/terms` & `/privacy`)**: GST compliance, intellectual property, and zero-ad-tracking privacy policies.

---

## 5. Component Architecture & Reusability

### 5.1. Layout Components (`src/components/layout/`)
1. **`Navbar.tsx`**:
   - Sticky header with glassmorphism backdrop blur (`backdrop-blur-md bg-white/90`).
   - Category navigation links (**Men**, **Women**, **New Arrivals**, **Collections**, **Shop**).
   - Interactive icon triggers: Instant Search modal, User Account, Wishlist counter badge, and Cart Drawer trigger with live item count.
2. **`MobileMenu.tsx`**:
   - Fullscreen animated overlay for mobile devices.
   - High-contrast typography links and quick actions (Account, Wishlist, Bag).
3. **`SearchOverlay.tsx`**:
   - Full-screen search modal with keyboard shortcuts (`Esc` to close).
   - Live query debouncing, instant product matches, and popular search tag shortcuts.
4. **`AnnouncementBar.tsx`**:
   - Top banner with rotating perks and drop announcements.
5. **`Footer.tsx`**:
   - Three key value propositions (*Complimentary Shipping*, *7-Day Effortless Returns*, *Proprietary GSM Standards*).
   - Newsletter subscription input with toast feedback.
   - Structured sitemap columns and legal metadata.

---

### 5.2. Product Components (`src/components/product/`)
1. **`ProductCard.tsx`**:
   - **Multi-Image Crossfade**: Displays `imageUrl` by default and seamlessly crossfades to `hoverImageUrl` on mouse hover.
   - **Quick Add Action**: Hover button to instantly add garment to cart with default size.
   - **Wishlist Toggle**: One-click heart icon adding/removing garment from Wishlist.
   - **Color Variant Swatches**: Interactive color dots switching the card display.
   - **Badges**: Displays `NEW DROP`, `BESTSELLER`, or discount percentages (`-40%`).
2. **`SizeGuideModal.tsx`**:
   - Interactive modal with Inches / Centimeters unit toggle.
   - Full measurement matrix (Chest, Length, Shoulder, Sleeve) from XS to XXL.
   - Silhouette fit advice.

---

### 5.3. Home Components (`src/components/home/`)
1. **`HeroSection.tsx`**: 16:9 cinematic banner with campaign photography and responsive action buttons.
2. **`CollectionStories.tsx`**: Instagram-style circular capsules with gradient borders and instant routing.
3. **`TrendingCarousel.tsx`**: Continuous smooth horizontal marquee of trending garments with pause-on-hover and arrow navigation.
4. **`AsymmetricEditorialGrid.tsx`**: 12-column uneven high-fashion visual grid highlighting denim, knits, and sculpt series.
5. **`StyleLookbookGrid.tsx`**: 30+ lookbook grid featuring real street-style photography filtered across Tokyo, Paris, Milan, and London.
6. **`PromoBanners.tsx`**: Dual banner cards for Archive Sale and Free Express Shipping.
7. **`NewsletterSection.tsx`**: VIP drop list subscriber form with confirmation states.

---

### 5.4. Shop Components (`src/components/shop/`)
1. **`FilterSidebar.tsx`**: Multi-accordion desktop filter panel with checkboxes, color swatches, and price brackets.
2. **`FilterDrawer.tsx`**: Slide-over mobile drawer housing the complete filter controls.
3. **`ActiveFilterPills.tsx`**: Displays active filter badges with individual removal buttons and a "Clear All" action.
4. **`SortDropdown.tsx`**: Custom select menu for catalog sorting.

---

### 5.5. UI & Provider Components (`src/components/ui/`)
1. **`MediaPlaceholder.tsx`**:
   - Universal media renderer supporting images, video labels, aspect ratios (`16/9`, `4/5`, `1/1`, `21/9`, `3/4`), and hover crossfade animations.
   - Clean white fallback rendering when images are loading.
2. **`SmoothScrollProvider.tsx`**:
   - Wraps the application root with the **Lenis** smooth scroll engine.
   - Exponential easing (`duration: 1.2`, `easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`).

---

## 6. Global State & Context Management

### 6.1. `CartContext.tsx`
- **State Properties**: `items`, `subtotal`, `discount`, `shippingFee`, `finalTotal`, `totalItems`, `isCartOpen`, `appliedPromo`.
- **Key Methods**:
  - `addItem(product, color, size, quantity)`: Appends item or increments quantity if matching variant exists.
  - `removeItem(productId, size, colorName)`: Removes targeted variant.
  - `updateQuantity(productId, size, colorName, quantity)`: Updates variant quantity or removes if quantity becomes 0.
  - `applyPromoCode(code)`: Validates promo codes and calculates percentage discounts.
  - `removePromoCode()`: Resets applied discounts.
  - `clearCart()`: Empties bag upon checkout completion.
  - `openCartDrawer()` / `closeCartDrawer()`: Controls slide-over drawer visibility.
- **Persistence**: Synchronizes state with `localStorage` on client side.

### 6.2. `WishlistContext.tsx`
- **State Properties**: `wishlist`, `totalWishlistItems`.
- **Key Methods**:
  - `toggleWishlist(product)`: Adds or removes product with instant state update.
  - `isInWishlist(productId)`: Boolean check for active heart icons.
  - `removeFromWishlist(productId)`: Targeted removal.
- **Persistence**: Synchronizes with `localStorage`.

### 6.3. `ToastContext.tsx`
- **State Properties**: `toasts` array with active notifications.
- **Key Methods**:
  - `showToast(message, type)`: Displays floating alert (`success`, `error`, `info`) that automatically dismisses after 3.5 seconds.

---

## 7. Data Models & Product Inventory

### Garment Data Model (`Product`)
```typescript
export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: 'Tees' | 'Hoodies' | 'Denim' | 'Cargo Pants' | 'Outerwear' | 'Knitwear' | 'Accessories';
  subCategory: string;
  gender: 'Men' | 'Women' | 'Unisex';
  outfitCategory: 'TOP' | 'BOTTOM' | 'OUTERWEAR' | 'ACCESSORY';
  badge?: string;
  isNewDrop?: boolean;
  isBestSeller?: boolean;
  isTrending?: boolean;
  onSale?: boolean;
  rating: number;
  reviewCount: number;
  sizes: ('XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL')[];
  colors: { name: string; hex: string }[];
  material: string;
  gsm?: number;
  fit: 'Oversized' | 'Relaxed' | 'Straight' | 'Boxy' | 'Tailored';
  collection: string;
  inStock: boolean;
  stockCount: number;
  imageUrl: string;
  hoverImageUrl?: string;
  images?: string[];
  placeholderGradient?: string;
}
```

### 24 Curated Garments in Catalog:
1. **Heavyweight Oversized Acid-Wash Tee** (280 GSM, Graphite Mineral)
2. **Okayama 14.5oz Raw Selvedge Wide-Leg Jean** (14.5oz Japanese Denim, Indigo)
3. **Tactical Ripstop Multi-Pocket Cargo Jogger** (320 GSM, Midnight Onyx)
4. **Structured Boned Architectural Corset Top** (Chalk White & Onyx)
5. **Drop-Shoulder MA-1 Reversible Bomber Jacket** (Bonded Nylon, Vintage Olive)
6. **Tactile Alpaca & Mohair Ribbed Crewneck** (450 GSM Knit, Sand Dune)
7. **Heavy Loopback French Terry Boxy Hoodie** (450 GSM, Washed Rust)
8. **Asymmetrical Cutout Baby Rib Tee** (240 GSM, Chalk White)
9. **Voluminous Technical Parachute Trouser** (Ripstop Nylon, Sage Slate)
10. **Double-Breasted Raw-Edge Wool Overcoat** (600 GSM Melton Wool, Charcoal)
11. **Heavyweight Washed Vintage Graphic Tee** (280 GSM, Vintage Black)
12. **Japanese Double-Knee Carpenter Denim** (13.5oz Selvedge, Ecru Natural)
13. **Tactical Modular Crossbody Sling Bag** (Cordura 1000D, Stealth Onyx)
14. **Cropped Relaxed-Fit Zip Harrington Jacket** (380 GSM Cotton Twill, Tan)
15. **Distressed Ribbed Open-Knit Cardigan** (Italian Yarn, Charcoal)
16. **Pleated Architectural Wide-Leg Trouser** (Tropical Wool Blend, Navy)
17. **Heavyweight Minimalist Mock-Neck Sweatshirt** (420 GSM, Bone Off-White)
18. **Sculpted Halterneck Compression Top** (Bonded Jersey, Terracotta)
19. **Heavyweight Straight-Leg Selvedge Jean** (15oz Japanese Raw Denim)
20. **Technical Utility Vest with Modular Pouches** (Ripstop, Olive Drab)
21. **Heavyweight Oversized Flannel Overshirt** (350 GSM Wool-Cotton, Shadow Plaid)
22. **Architectural High-Waisted Cargo Maxi Skirt** (Cotton Ripstop, Slate)
23. **Chunky Platform High-Top Canvas Sneaker** (16oz Heavy Duck Canvas, Off-White)
24. **Heavyweight French Terry Relaxed Sweatpant** (450 GSM, Washed Taupe)

---

## 8. Design System Tokens & Typography

### 8.1. Color Palette
- **Backgrounds**: Pure White (`#FFFFFF`) on primary cards and panels; Soft Light Neutral (`#F7F7F5`) on main page canvases; Subtle Gray (`#EFEFEA`) on secondary containers and footers.
- **Typography & Ink**: Deep Ink Charcoal (`#111315`) for headlines and body; Muted Slate (`#4A4E54` & `#757A82`) for metadata and secondary descriptions.
- **Borders**: Subdued dividers (`border-black/10` and `border-black/15`).
- **Brand Accents**:
  - **Deep Pine / Teal (`#0E6068`)**: Used for verified badges, free shipping indicators, and primary accents.
  - **Warm Terracotta (`#C65A28`)**: Used for drop alerts, price highlights, and sale tags.
  - **Warm Ochre (`#A37A24`)**: Used for ratings and textile certifications.

### 8.2. Typography Hierarchy
- **Display & Headlines (`font-primary`)**: `Syne`, sans-serif (Architectural, bold, uppercase tracking).
- **Sub-headings & Nav (`font-secondary`)**: `Space Grotesk`, sans-serif (Clean, modern geometry).
- **Body & Longform**: `Inter`, sans-serif (High legibility).
- **Technical Specs & Pricing (`font-mono`)**: `JetBrains Mono`, monospace (Textile weights, GSM, coordinates, prices).

---

## 9. Running & Building the Project

### Development Server
```bash
npm run dev
```
Starts the local development server at `http://localhost:3000`.

### Production Build & Validation
```bash
npm run build
npm run start
```
Compiles and starts the optimized production application.

---

## 10. Summary of Architectural Features Built

- [x] **20+ Fully Responsive Pages** across ecommerce, catalog, lookbooks, account management, and customer support.
- [x] **Pure White & Light Luxury Theme** with zero dark gradients and crisp high-contrast readability.
- [x] **24 Complete Garments & 40+ Editorial Images** with hover crossfades and live variant switching.
- [x] **60fps Lenis Momentum Scrolling** for a fluid, premium desktop and mobile browsing feel.
- [x] **Complete Shopping Engine**: Cart slide-over drawer, free shipping meter, promo engine, and multi-step checkout.
- [x] **Live Order Tracking**: Interactive 5-step milestone tracking timeline for user orders.
- [x] **City-Filtered Lookbook Grid**: Interactive street style curation across Tokyo, Paris, Milan, and London.
