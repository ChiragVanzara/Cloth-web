'use client';

import React from 'react';
import { FilterState } from '@/types';
import { filterSizes, filterFits, outfitCategories } from '@/data/categories';
import { RotateCcw } from 'lucide-react';

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

  const toggleSize = (size: string) => {
    const exists = filters.size.includes(size);
    const updated = exists
      ? filters.size.filter((s) => s !== size)
      : [...filters.size, size];
    onFilterChange({ ...filters, size: updated });
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
    filters.size.length > 0 ||
    filters.fit.length > 0 ||
    filters.outfitCategory.length > 0 ||
    filters.onSaleOnly ||
    filters.priceRange[1] < 10000;

  return (
    <aside className="w-full space-y-6 text-[#111315] select-none">
      {/* Top Header & Clear All */}
      <div className="flex items-center justify-between pb-3 border-b border-black/10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold tracking-widest uppercase">
            FILTERS
          </span>
          <span className="text-[10px] font-mono text-[#757A82]">
            ({productCount} ITEMS)
          </span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-[10px] font-mono text-[#C65A28] hover:underline uppercase font-bold"
          >
            <RotateCcw className="w-3 h-3" />
            <span>RESET</span>
          </button>
        )}
      </div>

      {/* Gender Tabs */}
      <div className="space-y-2">
        <h4 className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#757A82]">
          GENDER
        </h4>
        <div className="grid grid-cols-3 gap-1.5">
          {['men', 'women', 'unisex'].map((g) => {
            const isSelected = filters.gender.includes(g);
            return (
              <button
                key={g}
                onClick={() => toggleGender(g)}
                className={`py-1.5 px-2 text-center text-xs font-mono uppercase tracking-wider rounded-sm border transition-colors ${isSelected
                  ? 'bg-[#111315] text-white font-bold border-[#111315]'
                  : 'bg-white text-[#4A4E54] border-black/10 hover:border-black/30'
                  }`}
              >
                {g}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-2">
        <h4 className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#757A82]">
          SIZE
        </h4>
        <div className="grid grid-cols-3 gap-1.5">
          {filterSizes.map((size) => {
            const isSelected = filters.size.includes(size);
            return (
              <button
                key={size}
                onClick={() => toggleSize(size)}
                className={`py-1.5 text-center text-xs font-mono rounded-sm border transition-colors ${isSelected
                  ? 'bg-[#111315] text-white font-bold border-[#111315]'
                  : 'bg-white text-[#4A4E54] border-black/10 hover:border-black/30'
                  }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Fit Profile */}
      <div className="space-y-2">
        <h4 className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#757A82]">
          FIT PROFILE
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {filterFits.map((fit) => {
            const isSelected = filters.fit.includes(fit);
            return (
              <button
                key={fit}
                onClick={() => toggleFit(fit)}
                className={`px-2.5 py-1 text-[11px] font-mono rounded-sm border transition-colors ${isSelected
                  ? 'bg-[#111315] text-white font-bold border-[#111315]'
                  : 'bg-white text-[#4A4E54] border-black/10 hover:border-black/30'
                  }`}
              >
                {fit}
              </button>
            );
          })}
        </div>
      </div>

      {/* Outfit Occasion */}
      <div className="space-y-2">
        <h4 className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#757A82]">
          OCCASION / MOOD
        </h4>
        <div className="space-y-1">
          {outfitCategories.map((outfit) => {
            const isSelected = filters.outfitCategory.includes(outfit);
            return (
              <label
                key={outfit}
                className="flex items-center justify-between py-1 cursor-pointer group text-xs font-secondary hover:text-[#111315]"
              >
                <span className={isSelected ? 'text-[#111315] font-bold' : 'text-[#4A4E54]'}>
                  {outfit}
                </span>
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleOutfit(outfit)}
                  className="accent-[#111315] rounded-sm cursor-pointer"
                />
              </label>
            );
          })}
        </div>
      </div>
    </aside>
  );
};