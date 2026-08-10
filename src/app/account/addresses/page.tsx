'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Plus, Trash2, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

export default function AddressesPage() {
  const [addresses, setAddresses] = useState([
    {
      id: 'addr-1',
      fullName: 'Sureshkumar Vanzara',
      street: 'Tower 4, Suite 802, Palladium Residences, Lower Parel',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400013',
      phone: '+91 98765 43210',
      isDefault: true,
      type: 'home',
    },
    {
      id: 'addr-2',
      fullName: 'Sureshkumar Vanzara (Studio)',
      street: 'Studio 14, Arts Guild District, Indiranagar',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560038',
      phone: '+91 98765 43210',
      isDefault: false,
      type: 'work',
    },
  ]);

  const { showToast } = useToast();

  const handleSetDefault = (id: string) => {
    setAddresses(addresses.map((a) => ({ ...a, isDefault: a.id === id })));
    showToast('Default shipping address updated', 'success');
  };

  const handleDelete = (id: string) => {
    setAddresses(addresses.filter((a) => a.id !== id));
    showToast('Address removed', 'info');
  };

  return (
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      <div className="border-b border-black/10 bg-white py-8">
        <div className="vostra-container">
          <Link
            href="/account"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#757A82] hover:text-[#111315] mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ACCOUNT PORTAL</span>
          </Link>
          <h1 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight">
            SAVED SHIPPING ADDRESSES
          </h1>
        </div>
      </div>

      <div className="vostra-container pt-8 max-w-4xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className={`p-6 rounded-sm border space-y-3 font-mono text-xs shadow-sm ${
                addr.isDefault
                  ? 'bg-white border-[#0E6068] ring-1 ring-[#0E6068]/30'
                  : 'bg-white border-black/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 text-[9px] bg-black/5 text-[#111315] uppercase font-bold rounded-sm">
                  {addr.type}
                </span>
                {addr.isDefault && (
                  <span className="text-[10px] text-[#0E6068] flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>DEFAULT</span>
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <h3 className="font-primary text-sm font-bold text-[#111315] uppercase">
                  {addr.fullName}
                </h3>
                <p className="text-[#4A4E54] leading-relaxed">{addr.street}</p>
                <p className="text-[#4A4E54]">{addr.city}, {addr.state} - {addr.pincode}</p>
                <p className="text-[#757A82] pt-1">{addr.phone}</p>
              </div>

              <div className="pt-3 border-t border-black/10 flex items-center justify-between text-xs">
                {!addr.isDefault && (
                  <button
                    onClick={() => handleSetDefault(addr.id)}
                    className="text-[#0E6068] hover:underline uppercase font-bold"
                  >
                    SET AS DEFAULT
                  </button>
                )}
                <button
                  onClick={() => handleDelete(addr.id)}
                  className="text-[#C65A28] hover:underline uppercase ml-auto font-bold"
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
