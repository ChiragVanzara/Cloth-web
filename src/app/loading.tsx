export default function Loading() {
  return (
    <div className="bg-[#F7F7F5] text-[#111315] min-h-[60vh] flex flex-col items-center justify-center select-none">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-black/15 border-t-[#0E6068] animate-spin" />
        <span className="font-mono text-[11px] uppercase tracking-widest text-[#757A82] animate-pulse">
          VOSTRA STUDIO // RETRIEVING ASSETS
        </span>
      </div>
    </div>
  );
}
