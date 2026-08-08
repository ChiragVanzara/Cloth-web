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
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      <div className="border-b border-white/10 bg-[#121416]/40 py-8">
        <div className="layout-container">
          <Link
            href="/account"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-white/50 hover:text-white mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ACCOUNT PORTAL</span>
          </Link>
          <h1 className="heading-xl text-white font-primary font-bold uppercase tracking-tight">
            SAVED SHIPPING ADDRESSES
          </h1>
        </div>
      </div>

      <div className="layout-container pt-8 max-w-4xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className={`p-6 bg-[#121416] border rounded-sm flex flex-col justify-between space-y-4 font-mono text-xs ${
                addr.isDefault ? 'border-[#1ECAD3]' : 'border-white/10'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-primary text-sm font-bold text-white uppercase">
                    {addr.fullName}
                  </span>
                  {addr.isDefault && (
                    <span className="px-2 py-0.5 bg-[#123A3F] text-[#1ECAD3] text-[9px] font-bold uppercase rounded-sm">
                      DEFAULT
                    </span>
                  )}
                </div>
                <p className="text-white/70 leading-relaxed">
                  {addr.street}, {addr.city}, {addr.state} — {addr.pincode}
                </p>
                <p className="text-white/50">PHONE: {addr.phone}</p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                {!addr.isDefault ? (
                  <button
                    onClick={() => handleSetDefault(addr.id)}
                    className="text-[#1ECAD3] hover:underline uppercase text-[11px]"
                  >
                    SET AS DEFAULT
                  </button>
                ) : (
                  <span className="text-[11px] text-white/40">ACTIVE FOR 1-CLICK DROP</span>
                )}

                <button
                  onClick={() => handleDelete(addr.id)}
                  className="text-white/40 hover:text-[#C65A28]"
                  aria-label="Delete address"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
