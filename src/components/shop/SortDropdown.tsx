'use client';

import React from 'react';
import { SortOption } from '@/types';
import { ChevronDown } from 'lucide-react';

interface SortDropdownProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export const SortDropdown: React.FC<SortDropdownProps> = ({ currentSort, onSortChange }) => {
  const options: { label: string; value: SortOption }[] = [
    { label: 'RECOMMENDED', value: 'recommended' },
    { label: 'NEWEST DROPS', value: 'newest' },
    { label: 'PRICE: LOW TO HIGH', value: 'price-asc' },
    { label: 'PRICE: HIGH TO LOW', value: 'price-desc' },
    { label: 'TOP RATED', value: 'rating' },
    { label: 'TRENDING NOW', value: 'trending' },
  ];

  return (
    <div className="relative inline-flex items-center">
      <select
        value={currentSort}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
        className="appearance-none bg-white border border-black/15 hover:border-black/40 text-[#111315] font-mono text-xs uppercase tracking-wider py-2 pl-3.5 pr-8 rounded-sm focus:outline-none focus:border-black cursor-pointer transition-colors shadow-sm"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-white text-[#111315]">
            SORT: {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2.5 w-3.5 h-3.5 text-[#757A82] pointer-events-none" />
    </div>
  );
};
