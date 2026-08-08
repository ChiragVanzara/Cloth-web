'use client';

import React from 'react';
import { FilterState } from '@/types';
import { FilterSidebar } from './FilterSidebar';
import { X, Check } from 'lucide-react';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onReset: () => void;
  productCount: number;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onReset,
  productCount,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-8">
        <div className="w-screen max-w-md bg-[#090A0B] border-l border-white/10 text-white flex flex-col shadow-2xl">
          {/* Drawer Header */}
          <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
            <span className="font-primary text-sm font-bold uppercase tracking-wider">
              FILTER CATALOG
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-white/60 hover:text-white"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body with FilterSidebar */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <FilterSidebar
              filters={filters}
              onFilterChange={onFilterChange}
              onReset={onReset}
              productCount={productCount}
            />
          </div>

          {/* Drawer Footer with Apply Button */}
          <div className="px-6 py-4 border-t border-white/10 bg-[#121416]">
            <button
              onClick={onClose}
              className="w-full btn-primary text-xs py-3 flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>APPLY FILTERS ({productCount} RESULTS)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
