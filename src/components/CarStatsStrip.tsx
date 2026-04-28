type Stat = { label: string; value: string };

export function CarStatsStrip({ stats, className = "" }: { stats: Stat[]; className?: string }) {
  return (
    <div className={`grid gap-6 ${stats.length <= 3 ? "grid-cols-5" : "grid-cols-3 sm:grid-cols-5"} ${className}`}>
      {stats.map((s) => (
        <div key={s.label} className="flex gap-3">
          <div className="writing-vertical text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
            {s.label}
          </div>
          <div className="font-display text-2xl uppercase tracking-wide text-white">
            {s.value}
          </div>
        </div>
      ))}
    </div>
  );
}
