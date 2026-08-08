export default function Loading() {
  return (
    <div className="bg-[#090A0B] text-white min-h-[60vh] flex flex-col items-center justify-center select-none">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-[#1ECAD3] animate-spin" />
        <span className="font-mono text-[11px] uppercase tracking-widest text-white/50 animate-pulse">
          VOSTRA STUDIO // RETRIEVING ASSETS
        </span>
      </div>
    </div>
  );
}
