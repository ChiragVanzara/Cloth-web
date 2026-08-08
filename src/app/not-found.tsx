import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-[#090A0B] text-white min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 select-none">
      <div className="text-[10px] font-mono tracking-widest text-[#C65A28] uppercase font-bold mb-2">
        ERROR CODE: 404 // VOID
      </div>
      <h1 className="display-xl text-white font-primary font-bold uppercase tracking-tight mb-3">
        SILHOUETTE NOT FOUND
      </h1>
      <p className="text-xs sm:text-sm font-secondary text-white/60 max-w-md mb-8">
        The piece, collection chapter, or archive link you are attempting to retrieve does not exist or has been retired.
      </p>
      <div className="flex gap-4">
        <Link href="/" className="btn-primary text-xs">
          RETURN TO HOMEPAGE
        </Link>
        <Link href="/shop" className="btn-secondary text-xs">
          BROWSE CATALOG
        </Link>
      </div>
    </div>
  );
}
