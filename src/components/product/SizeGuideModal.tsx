'use client';

import React, { useState } from 'react';
import { X, Ruler } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: string;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose, category = 'Apparel' }) => {
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
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
      />

      <div className="relative w-full max-w-xl bg-white border border-black/10 text-[#111315] p-6 sm:p-8 rounded-[2px] shadow-2xl z-10 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-black/10">
          <div className="flex items-center gap-2">
            <Ruler className="w-4 h-4 text-[#0E6068]" />
            <h3 className="font-primary text-base font-bold uppercase tracking-wider text-[#111315]">
              SIZE & MEASUREMENT GUIDE // {category.toUpperCase()}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#757A82] hover:text-[#111315]"
            aria-label="Close size guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Unit Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-xs text-[#4A4E54] font-secondary leading-relaxed">
            All garments follow an architectural drop-shoulder cut. Measure against your best-fitting tee or trouser.
          </p>

          <div className="flex border border-black/15 rounded-sm overflow-hidden text-xs font-mono self-start sm:self-auto">
            <button
              onClick={() => setUnit('in')}
              className={`px-3 py-1 uppercase font-bold transition-colors ${
                unit === 'in' ? 'bg-[#111315] text-white' : 'bg-white text-[#4A4E54]'
              }`}
            >
              INCHES
            </button>
            <button
              onClick={() => setUnit('cm')}
              className={`px-3 py-1 uppercase font-bold transition-colors ${
                unit === 'cm' ? 'bg-[#111315] text-white' : 'bg-white text-[#4A4E54]'
              }`}
            >
              CM
            </button>
          </div>
        </div>

        {/* Measurements Table */}
        <div className="border border-black/10 rounded-sm overflow-hidden font-mono text-xs">
          <table className="w-full text-left">
            <thead className="bg-[#F7F7F5] border-b border-black/10 text-[#757A82] text-[10px] tracking-wider uppercase">
              <tr>
                <th className="p-3">SIZE</th>
                <th className="p-3">CHEST</th>
                <th className="p-3">LENGTH</th>
                <th className="p-3">SHOULDER</th>
                <th className="p-3">SLEEVE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 text-[#111315]">
              {measurements.map((m) => (
                <tr key={m.size} className="hover:bg-[#F7F7F5] transition-colors">
                  <td className="p-3 font-bold text-[#0E6068]">{m.size}</td>
                  <td className="p-3">{m.chest}</td>
                  <td className="p-3">{m.length}</td>
                  <td className="p-3">{m.shoulder}</td>
                  <td className="p-3">{m.sleeve}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fit Tip */}
        <div className="p-3.5 bg-[#F7F7F5] border border-black/10 rounded-sm text-xs font-mono text-[#4A4E54]">
          <span className="text-[#C65A28] font-bold">FIT ADVICE:</span> For our intended relaxed drape, select your true size. For a tailored profile, take one size down.
        </div>
      </div>
    </div>
  );
};
