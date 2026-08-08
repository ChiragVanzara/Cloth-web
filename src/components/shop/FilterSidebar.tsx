'use client';

import React from 'react';
import { FilterState, SortOption } from '@/types';
import { filterSizes, filterFits, filterColors, allCategories, outfitCategories } from '@/data/categories';
import { X, RotateCcw, Check } from 'lucide-react';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onReset: () => void;
  productCount: number;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onReset,
  productCount,
}) => {
  const toggleGender = (gender: string) => {
    const exists = filters.gender.includes(gender);
    const updated = exists
      ? filters.gender.filter((g) => g !== gender)
      : [...filters.gender, gender];
    onFilterChange({ ...filters, gender: updated });
  };

  const toggleCategory = (cat: string) => {
    const exists = filters.category.includes(cat);
    const updated = exists
      ? filters.category.filter((c) => c !== cat)
      : [...filters.category, cat];
    onFilterChange({ ...filters, category: updated });
  };

  const toggleSize = (size: string) => {
    const exists = filters.size.includes(size);
    const updated = exists
      ? filters.size.filter((s) => s !== size)
      : [...filters.size, size];
    onFilterChange({ ...filters, size: updated });
  };

  const toggleColor = (colorName: string) => {
    const exists = filters.color.includes(colorName);
    const updated = exists
      ? filters.color.filter((c) => c !== colorName)
      : [...filters.color, colorName];
    onFilterChange({ ...filters, color: updated });
  };

  const toggleFit = (fit: string) => {
    const exists = filters.fit.includes(fit);
    const updated = exists
      ? filters.fit.filter((f) => f !== fit)
      : [...filters.fit, fit];
    onFilterChange({ ...filters, fit: updated });
  };

  const toggleOutfit = (outfit: string) => {
    const exists = filters.outfitCategory.includes(outfit);
    const updated = exists
      ? filters.outfitCategory.filter((o) => o !== outfit)
      : [...filters.outfitCategory, outfit];
    onFilterChange({ ...filters, outfitCategory: updated });
  };

  const hasActiveFilters =
    filters.gender.length > 0 ||
    filters.category.length > 0 ||
    filters.size.length > 0 ||
    filters.color.length > 0 ||
    filters.fit.length > 0 ||
    filters.outfitCategory.length > 0 ||
    filters.onSaleOnly ||
    filters.priceRange[1] < 10000;

  return (
    <aside className="w-full space-y-6 text-white select-none">
      {/* Top Header & Clear All */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold tracking-widest uppercase">
            FILTERS
          </span>
          <span className="text-[10px] font-mono text-white/50">
            ({productCount} ITEMS)
          </span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-[10px] font-mono text-[#C65A28] hover:underline uppercase"
          >
            <RotateCcw className="w-3 h-3" />
            <span>RESET</span>
          </button>
        )}
      </div>

      {/* Gender Tabs */}
      <div className="space-y-2">
        <h4 className="text-[11px] font-mono font-bold tracking-wider uppercase text-white/60">
          GENDER
        </h4>
        <div className="grid grid-cols-3 gap-1.5">
          {['men', 'women', 'unisex'].map((g) => {
            const isSelected = filters.gender.includes(g);
            return (
              <button
                key={g}
                onClick={() => toggleGender(g)}
                className={`py-1.5 px-2 text-center text-xs font-mono uppercase tracking-wider rounded-sm border transition-colors ${
                  isSelected
                    ? 'bg-white text-black font-bold border-white'
                    : 'bg-[#121416] text-white/70 border-white/10 hover:border-white/30'
                }`}
              >
                {g}
              </button>
            );
          })}
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-2">
        <h4 className="text-[11px] font-mono font-bold tracking-wider uppercase text-white/60">
          CATEGORIES
        </h4>
        <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1 no-scrollbar">
          {allCategories.map((cat) => {
            const isSelected = filters.category.includes(cat.name);
            return (
              <label
                key={cat.id}
                onClick={() => toggleCategory(cat.name)}
                className="flex items-center justify-between text-xs font-mono text-white/80 hover:text-white cursor-pointer py-1"
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center ${
                      isSelected
                        ? 'bg-[#1ECAD3] border-[#1ECAD3] text-black'
                        : 'border-white/30 bg-transparent'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span className="truncate">{cat.name}</span>
                </div>
                <span className="text-[10px] text-white/40">({cat.count})</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-2">
        <h4 className="text-[11px] font-mono font-bold tracking-wider uppercase text-white/60">
          SIZE
        </h4>
        <div className="grid grid-cols-3 gap-1.5">
          {filterSizes.map((size) => {
            const isSelected = filters.size.includes(size);
            return (
              <button
                key={size}
                onClick={() => toggleSize(size)}
                className={`py-1.5 text-center text-xs font-mono uppercase rounded-sm border transition-colors ${
                  isSelected
                    ? 'bg-[#C65A28] border-[#C65A28] text-white font-bold'
                    : 'bg-[#121416] text-white/70 border-white/10 hover:border-white/30'
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-2">
        <h4 className="text-[11px] font-mono font-bold tracking-wider uppercase text-white/60">
          PALETTE & TONES
        </h4>
        <div className="grid grid-cols-3 gap-2">
          {filterColors.map((color) => {
            const isSelected = filters.color.includes(color.name);
            return (
              <button
                key={color.name}
                onClick={() => toggleColor(color.name)}
                className={`flex items-center gap-1.5 p-1.5 rounded-sm border text-[10px] font-mono uppercase truncate ${
                  isSelected
                    ? 'border-white bg-white/15 text-white'
                    : 'border-white/10 bg-[#121416] text-white/60 hover:border-white/30'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full border border-white/20 flex-shrink-0"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="truncate">{color.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fit Taxonomy */}
      <div className="space-y-2">
        <h4 className="text-[11px] font-mono font-bold tracking-wider uppercase text-white/60">
          SILHOUETTE FIT
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {filterFits.map((fit) => {
            const isSelected = filters.fit.includes(fit);
            return (
              <button
                key={fit}
                onClick={() => toggleFit(fit)}
                className={`px-2.5 py-1 text-[11px] font-mono uppercase rounded-sm border transition-colors ${
                  isSelected
                    ? 'bg-white text-black font-bold border-white'
                    : 'bg-[#121416] text-white/70 border-white/10 hover:border-white/30'
                }`}
              >
                {fit}
              </button>
            );
          })}
        </div>
      </div>

      {/* Outfit Discovery */}
      <div className="space-y-2">
        <h4 className="text-[11px] font-mono font-bold tracking-wider uppercase text-white/60">
          OUTFIT EDIT
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {outfitCategories.slice(0, 8).map((outfit) => {
            const isSelected = filters.outfitCategory.includes(outfit);
            return (
              <button
                key={outfit}
                onClick={() => toggleOutfit(outfit)}
                className={`px-2 py-1 text-[10px] font-mono uppercase rounded-sm border transition-colors ${
                  isSelected
                    ? 'bg-[#123A3F] border-[#1ECAD3] text-[#1ECAD3] font-bold'
                    : 'bg-[#121416] text-white/60 border-white/10 hover:border-white/30'
                }`}
              >
                {outfit}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sale Only Toggle */}
      <div className="pt-2 border-t border-white/10">
        <label className="flex items-center justify-between text-xs font-mono text-white/80 cursor-pointer py-1">
          <span className="uppercase text-[#C65A28] font-bold">SALE ARCHIVE ONLY</span>
          <input
            type="checkbox"
            checked={filters.onSaleOnly}
            onChange={(e) => onFilterChange({ ...filters, onSaleOnly: e.target.checked })}
            className="w-4 h-4 accent-[#C65A28] rounded cursor-pointer"
          />
        </label>
      </div>
    </aside>
  );
};
