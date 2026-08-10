'use client';

import React from 'react';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="bg-[#F7F7F5] text-[#111315] min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 select-none">
      <div className="text-[10px] font-mono tracking-widest text-[#C65A28] uppercase font-bold mb-2">
        SYSTEM EXCEPTION
      </div>
      <h1 className="heading-xl text-[#111315] font-primary font-bold uppercase tracking-tight mb-3">
        AN UNEXPECTED GLITCH OCCURRED
      </h1>
      <p className="text-xs sm:text-sm font-secondary text-[#4A4E54] max-w-md mb-8">
        We encountered a rendering interruption. You can attempt to reload the view or return to the main catalog.
      </p>
      <div className="flex gap-4">
        <button onClick={() => reset()} className="btn-primary text-xs">
          RETRY VIEW
        </button>
        <Link href="/" className="btn-secondary text-xs">
          GO TO HOMEPAGE
        </Link>
      </div>
    </div>
  );
}
