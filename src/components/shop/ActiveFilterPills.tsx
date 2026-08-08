'use client';

import React from 'react';
import { FilterState } from '@/types';
import { X } from 'lucide-react';

interface ActiveFilterPillsProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onClearAll: () => void;
}

export const ActiveFilterPills: React.FC<ActiveFilterPillsProps> = ({
  filters,
  onFilterChange,
  onClearAll,
}) => {
  const pills: { label: string; onRemove: () => void }[] = [];

  filters.gender.forEach((g) => {
    pills.push({
      label: `GENDER: ${g.toUpperCase()}`,
      onRemove: () =>
        onFilterChange({ ...filters, gender: filters.gender.filter((x) => x !== g) }),
    });
  });

  filters.category.forEach((c) => {
    pills.push({
      label: `CAT: ${c.toUpperCase()}`,
      onRemove: () =>
        onFilterChange({ ...filters, category: filters.category.filter((x) => x !== c) }),
    });
  });

  filters.size.forEach((s) => {
    pills.push({
      label: `SIZE: ${s}`,
      onRemove: () =>
        onFilterChange({ ...filters, size: filters.size.filter((x) => x !== s) }),
    });
  });

  filters.color.forEach((col) => {
    pills.push({
      label: `COLOR: ${col.toUpperCase()}`,
      onRemove: () =>
        onFilterChange({ ...filters, color: filters.color.filter((x) => x !== col) }),
    });
  });

  filters.fit.forEach((f) => {
    pills.push({
      label: `FIT: ${f.toUpperCase()}`,
      onRemove: () =>
        onFilterChange({ ...filters, fit: filters.fit.filter((x) => x !== f) }),
    });
  });

  filters.outfitCategory.forEach((o) => {
    pills.push({
      label: `OUTFIT: ${o}`,
      onRemove: () =>
        onFilterChange({
          ...filters,
          outfitCategory: filters.outfitCategory.filter((x) => x !== o),
        }),
    });
  });

  if (filters.onSaleOnly) {
    pills.push({
      label: 'SALE ONLY',
      onRemove: () => onFilterChange({ ...filters, onSaleOnly: false }),
    });
  }

  if (pills.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 pt-2">
      {pills.map((pill, idx) => (
        <span
          key={idx}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase bg-white/10 border border-white/20 text-white rounded-sm"
        >
          <span>{pill.label}</span>
          <button
            onClick={pill.onRemove}
            className="text-white/50 hover:text-white"
            aria-label={`Remove ${pill.label} filter`}
          >
            <X className="w-3 h-3" />
          </button>
        </span>
      ))}

      <button
        onClick={onClearAll}
        className="text-[10px] font-mono text-[#C65A28] hover:underline uppercase pl-1"
      >
        CLEAR ALL
      </button>
    </div>
  );
};
