'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { mockProducts } from '@/data/products';
import { FilterState, SortOption } from '@/types';
import { ProductCard } from '@/components/product/ProductCard';
import { FilterSidebar } from '@/components/shop/FilterSidebar';
import { FilterDrawer } from '@/components/shop/FilterDrawer';
import { ActiveFilterPills } from '@/components/shop/ActiveFilterPills';
import { SortDropdown } from '@/components/shop/SortDropdown';
import { SlidersHorizontal, LayoutGrid, Grid3X3 } from 'lucide-react';

export default function ShopPage() {
  const searchParams = useSearchParams();

  // URL query params initialization
  const initialCategory = searchParams.get('category');
  const initialGender = searchParams.get('gender');
  const initialCollection = searchParams.get('collection');
  const initialSale = searchParams.get('sale') === 'true';
  const initialFit = searchParams.get('fit');

  const [filters, setFilters] = useState<FilterState>({
    gender: initialGender ? [initialGender] : [],
    category: initialCategory ? [initialCategory] : [],
    size: [],
    color: [],
    fit: initialFit ? [initialFit] : [],
    priceRange: [0, 10000],
    collection: initialCollection ? [initialCollection] : [],
    outfitCategory: [],
    onSaleOnly: initialSale,
    newDropsOnly: false,
  });

  const [currentSort, setCurrentSort] = useState<SortOption>('recommended');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [gridColumns, setGridColumns] = useState<'three' | 'four'>('four');

  const resetFilters = () => {
    setFilters({
      gender: [],
      category: [],
      size: [],
      color: [],
      fit: [],
      priceRange: [0, 10000],
      collection: [],
      outfitCategory: [],
      onSaleOnly: false,
      newDropsOnly: false,
    });
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...mockProducts];

    // Gender
    if (filters.gender.length > 0) {
      result = result.filter(
        (p) => filters.gender.includes(p.gender) || p.gender === 'unisex'
      );
    }

    // Category
    if (filters.category.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category));
    }

    // Size
    if (filters.size.length > 0) {
      result = result.filter((p) => p.sizes.some((s) => filters.size.includes(s)));
    }

    // Color
    if (filters.color.length > 0) {
      result = result.filter((p) =>
        p.colors.some((c) => filters.color.includes(c.name))
      );
    }

    // Fit
    if (filters.fit.length > 0) {
      result = result.filter((p) => filters.fit.includes(p.fit));
    }

    // Collection
    if (filters.collection.length > 0) {
      result = result.filter((p) => filters.collection.includes(p.collection));
    }

    // Outfit
    if (filters.outfitCategory.length > 0) {
      result = result.filter((p) => filters.outfitCategory.includes(p.outfitCategory));
    }

    // Sale
    if (filters.onSaleOnly) {
      result = result.filter((p) => p.discountPercent && p.discountPercent > 0);
    }

    // Sorting
    if (currentSort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'newest') {
      result.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
    } else if (currentSort === 'trending') {
      result.sort((a, b) => (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0));
    }

    return result;
  }, [filters, currentSort]);

  return (
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      {/* Header Banner */}
      <div className="border-b border-black/10 bg-white py-10 sm:py-14">
        <div className="vostra-container space-y-2">
          <div className="text-xs font-mono tracking-widest text-[#0E6068] uppercase font-bold">
            FULL ARCHIVE CATALOG // DISCOVERY
          </div>
          <h1 className="display-lg text-[#111315] font-primary font-bold uppercase tracking-tight">
            ALL COLLECTIONS & SILHOUETTES
          </h1>
          <p className="text-xs sm:text-sm font-secondary text-[#4A4E54] max-w-xl leading-relaxed">
            Explore 280-450 GSM heavyweight jersey cuts, raw Okayama selvedge denim, technical ripstop cargo joggers, and modular everyday layers.
          </p>
        </div>
      </div>

      <div className="vostra-container pt-8">
        {/* Controls Toolbar: Mobile filter button, Active pills, Sort dropdown, Grid toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/10">
          <div className="flex items-center gap-3">
            {/* Mobile Drawer Trigger */}
            <button
              onClick={() => setIsFilterDrawerOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3.5 py-2 bg-white border border-black/15 rounded-sm text-xs font-mono uppercase tracking-wider text-[#111315] shadow-sm"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>FILTERS</span>
            </button>

            <span className="font-mono text-xs text-[#757A82]">
              SHOWING <strong className="text-[#111315]">{filteredProducts.length}</strong> RESULTS
            </span>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3">
            <SortDropdown currentSort={currentSort} onSortChange={setCurrentSort} />

            {/* Desktop Grid Layout Switcher */}
            <div className="hidden xl:flex items-center gap-1 p-1 bg-white border border-black/10 rounded-sm shadow-sm">
              <button
                onClick={() => setGridColumns('four')}
                className={`p-1.5 rounded-sm ${gridColumns === 'four' ? 'bg-[#111315] text-white' : 'text-[#757A82] hover:text-[#111315]'}`}
                aria-label="4 Columns"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridColumns('three')}
                className={`p-1.5 rounded-sm ${gridColumns === 'three' ? 'bg-[#111315] text-white' : 'text-[#757A82] hover:text-[#111315]'}`}
                aria-label="3 Columns"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Filter Pills Bar */}
        <ActiveFilterPills
          filters={filters}
          onFilterChange={setFilters}
          onClearAll={resetFilters}
        />

        {/* Main Content Layout: Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          {/* Desktop Filter Sidebar (3 cols) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 p-5 bg-white border border-black/10 rounded-[2px] shadow-sm">
              <FilterSidebar
                filters={filters}
                onFilterChange={setFilters}
                onReset={resetFilters}
                productCount={filteredProducts.length}
              />
            </div>
          </div>

          {/* Product Grid (9 cols) */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center bg-white border border-black/10 rounded-sm space-y-4 shadow-sm">
                <p className="text-sm font-mono text-[#757A82] uppercase">
                  NO PRODUCTS MATCH THE SELECTED FILTER CRITERIA
                </p>
                <button
                  onClick={resetFilters}
                  className="btn-secondary text-xs inline-block"
                >
                  RESET ALL ACTIVE FILTERS
                </button>
              </div>
            ) : (
              <div
                className={`grid grid-cols-2 ${
                  gridColumns === 'three' ? 'sm:grid-cols-2 md:grid-cols-3' : 'sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'
                } gap-3 sm:gap-4 lg:gap-5`}
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <FilterDrawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        filters={filters}
        onFilterChange={setFilters}
        onReset={resetFilters}
        productCount={filteredProducts.length}
      />
    </div>
  );
}
