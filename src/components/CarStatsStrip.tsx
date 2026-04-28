type Stat = { label: string; value: string };

export function CarStatsStrip({ stats }: { stats: Stat[] }) {
  return (
    <div className="border-y border-white/10 bg-[#0a0a0f]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:grid-cols-5">
        {stats.map((s) => (
          <div key={s.label} className="px-5 py-6 sm:px-6 sm:py-8 lg:px-10">
            <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
              {s.label}
            </div>
            <div className="font-display mt-2 text-xl tracking-wide text-white sm:text-2xl md:text-3xl">
              {s.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
