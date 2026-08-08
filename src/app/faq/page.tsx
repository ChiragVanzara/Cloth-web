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
    <div className="bg-[#090A0B] text-white min-h-screen pb-20 select-none">
      {/* Header Banner */}
      <div className="border-b border-white/10 bg-[#121416]/40 py-12">
        <div className="layout-container max-w-4xl space-y-4 text-center mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#1ECAD3] uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE & GUIDELINES</span>
          </div>
          <h1 className="display-lg text-white font-primary font-bold uppercase tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-xs sm:text-sm font-secondary text-white/60 max-w-lg mx-auto">
            Everything you need to know regarding our heavyweight textile standards, shipping timelines, doorstep exchanges, and selvedge care.
          </p>

          {/* Quick Search in FAQ */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH QUESTIONS (E.G. RETURNS, GSM, SIZING)..."
              className="w-full bg-[#090A0B] border border-white/20 pl-10 pr-4 py-2.5 text-xs font-mono uppercase text-white rounded-sm focus:outline-none focus:border-white"
            />
          </div>
        </div>
      </div>

      <div className="layout-container pt-8 max-w-4xl">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider border whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-white text-black font-bold border-white'
                  : 'bg-[#121416] text-white/70 border-white/10 hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {filteredFAQs.length === 0 ? (
            <div className="p-8 text-center bg-[#121416] border border-white/10 rounded-sm font-mono text-xs text-white/50">
              NO QUESTIONS FOUND MATCHING YOUR SEARCH.
            </div>
          ) : (
            filteredFAQs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-white/10 rounded-sm overflow-hidden bg-[#121416]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-mono text-xs sm:text-sm font-bold uppercase text-white hover:text-[#1ECAD3] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-white/60 flex-shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-[#1ECAD3]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm font-secondary text-white/70 leading-relaxed border-t border-white/5 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still need assistance */}
        <div className="mt-12 p-6 bg-[#121416] border border-white/10 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-primary text-sm font-bold uppercase text-white">
              STILL HAVE AN UNANSWERED QUESTION?
            </h4>
            <p className="text-xs text-white/60 font-secondary">
              Our studio concierge team is on standby 7 days a week.
            </p>
          </div>
          <Link href="/contact" className="btn-primary text-xs flex items-center gap-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONTACT CONCIERGE</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
