'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { mockFAQs } from '@/data/faqs';
import { ChevronDown, Sparkles, Search, MessageSquare } from 'lucide-react';

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Orders', 'Shipping', 'Returns', 'Payments', 'Sizing', 'Products', 'Account'];

  const filteredFAQs = mockFAQs.filter((faq) => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#F7F7F5] text-[#111315] min-h-screen pb-20 select-none">
      {/* Header Banner */}
      <div className="border-b border-black/10 bg-white py-12">
        <div className="vostra-container max-w-4xl space-y-4 text-center mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0E6068] uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE & GUIDELINES</span>
          </div>
          <h1 className="display-lg text-[#111315] font-primary font-bold uppercase tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-xs sm:text-sm font-secondary text-[#4A4E54] max-w-lg mx-auto leading-relaxed">
            Everything you need to know regarding our heavyweight textile standards, shipping timelines, doorstep exchanges, and selvedge care.
          </p>

          {/* Quick Search in FAQ */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#757A82]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH QUESTIONS (E.G. RETURNS, GSM, SIZING)..."
              className="w-full bg-[#F7F7F5] border border-black/15 pl-10 pr-4 py-2.5 text-xs font-mono uppercase text-[#111315] placeholder-[#757A82] rounded-sm focus:outline-none focus:border-black shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="vostra-container pt-8 max-w-4xl">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider border whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#111315] text-white font-bold border-[#111315] shadow-sm'
                  : 'bg-white text-[#4A4E54] border-black/10 hover:border-black/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFAQs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-black/10 rounded-sm overflow-hidden bg-white shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-black/5 transition-colors gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#0E6068] uppercase font-bold tracking-wider">
                      {faq.category}
                    </span>
                    <h3 className="font-primary text-sm sm:text-base font-bold text-[#111315] uppercase tracking-tight">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#757A82] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0E6068]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 border-t border-black/5 text-xs sm:text-sm font-secondary text-[#4A4E54] leading-relaxed">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 sm:p-8 bg-white border border-black/10 rounded-sm text-center space-y-3 shadow-sm">
          <MessageSquare className="w-8 h-8 text-[#0E6068] mx-auto" />
          <h3 className="font-primary text-base sm:text-lg font-bold uppercase text-[#111315]">
            STILL HAVE UNRESOLVED INQUIRIES?
          </h3>
          <p className="text-xs text-[#4A4E54] font-secondary max-w-md mx-auto">
            Our Delhi client relations studio is active Monday through Saturday (10:00 AM – 7:00 PM IST).
          </p>
          <div className="pt-2">
            <Link href="/contact" className="btn-primary text-xs inline-block">
              CONTACT SUPPORT STUDIO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
