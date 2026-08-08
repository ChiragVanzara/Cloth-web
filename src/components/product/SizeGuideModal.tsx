'use client';

import React, { useState } from 'react';
import { X, Ruler } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose, category }) => {
  const [unit, setUnit] = useState<'in' | 'cm'>('in');

  if (!isOpen) return null;

  const measurements = [
    { size: 'XS', chest: unit === 'in' ? '38"' : '96 cm', length: unit === 'in' ? '27"' : '68 cm', shoulder: unit === 'in' ? '18.5"' : '47 cm', sleeve: unit === 'in' ? '8.5"' : '21 cm' },
    { size: 'S', chest: unit === 'in' ? '40"' : '101 cm', length: unit === 'in' ? '28"' : '71 cm', shoulder: unit === 'in' ? '19.5"' : '49 cm', sleeve: unit === 'in' ? '9.0"' : '23 cm' },
    { size: 'M', chest: unit === 'in' ? '43"' : '109 cm', length: unit === 'in' ? '29"' : '74 cm', shoulder: unit === 'in' ? '20.5"' : '52 cm', sleeve: unit === 'in' ? '9.5"' : '24 cm' },
    { size: 'L', chest: unit === 'in' ? '46"' : '117 cm', length: unit === 'in' ? '30"' : '76 cm', shoulder: unit === 'in' ? '21.5"' : '54 cm', sleeve: unit === 'in' ? '10.0"' : '25 cm' },
    { size: 'XL', chest: unit === 'in' ? '49"' : '124 cm', length: unit === 'in' ? '31"' : '79 cm', shoulder: unit === 'in' ? '22.5"' : '57 cm', sleeve: unit === 'in' ? '10.5"' : '26 cm' },
    { size: 'XXL', chest: unit === 'in' ? '52"' : '132 cm', length: unit === 'in' ? '32"' : '81 cm', shoulder: unit === 'in' ? '23.5"' : '60 cm', sleeve: unit === 'in' ? '11.0"' : '28 cm' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="relative w-full max-w-xl bg-[#090A0B] border border-white/15 text-white p-6 sm:p-8 rounded-[2px] shadow-2xl z-10 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Ruler className="w-4 h-4 text-[#1ECAD3]" />
            <h3 className="font-primary text-base font-bold uppercase tracking-wider">
              SIZE & MEASUREMENT GUIDE // {category.toUpperCase()}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white"
            aria-label="Close size guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Unit Selector */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-white/60 font-secondary">
            All garments follow an architectural drop-shoulder cut. Measure against your best-fitting tee or trouser.
          </p>

          <div className="flex border border-white/20 rounded-sm overflow-hidden text-xs font-mono">
            <button
              onClick={() => setUnit('in')}
              className={`px-3 py-1 uppercase ${unit === 'in' ? 'bg-white text-black font-bold' : 'bg-[#121416] text-white/60'}`}
            >
              INCHES
            </button>
            <button
              onClick={() => setUnit('cm')}
              className={`px-3 py-1 uppercase ${unit === 'cm' ? 'bg-white text-black font-bold' : 'bg-[#121416] text-white/60'}`}
            >
              CM
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-white/10 rounded-sm">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[#121416] text-white/70 uppercase border-b border-white/10">
              <tr>
                <th className="p-3">SIZE</th>
                <th className="p-3">CHEST</th>
                <th className="p-3">LENGTH</th>
                <th className="p-3">SHOULDER</th>
                <th className="p-3">SLEEVE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white/80">
              {measurements.map((row) => (
                <tr key={row.size} className="hover:bg-white/5">
                  <td className="p-3 font-bold text-white">{row.size}</td>
                  <td className="p-3">{row.chest}</td>
                  <td className="p-3">{row.length}</td>
                  <td className="p-3">{row.shoulder}</td>
                  <td className="p-3">{row.sleeve}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fit Guide note */}
        <div className="p-3 bg-[#121416] border border-white/10 rounded-sm text-[11px] font-mono text-white/60 space-y-1">
          <strong className="text-white">PRO TIP:</strong> For an extreme boxy/runway drape, take your true size. For a tailored street silhouette, size down one step.
        </div>
      </div>
    </div>
  );
};
