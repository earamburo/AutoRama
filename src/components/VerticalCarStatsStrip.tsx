type Stat = { label: string; value: string };

export function VerticalCarStatsStrip({ stats, className = "" }: { stats: Stat[]; className?: string }) {
  return (
    <div className="mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
      <div className={`grid gap-6 ${stats.length <= 3 ? "grid-cols-3" : "grid-cols-3 sm:grid-cols-5"} ${className}`}>
        {stats.slice(0, 3).map((s) => (
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
    </div>
  );
}
