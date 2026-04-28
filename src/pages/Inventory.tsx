import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CarCard } from "@/components/CarCard";
import { useReveal } from "@/hooks/useReveal";
import { cars, type CarStatus } from "@/data/cars";

const makes = ["All", ...Array.from(new Set(cars.map((c) => c.make)))];
const eras = ["All", "1960s", "1970s"] as const;
const statuses: (CarStatus | "All")[] = ["All", "For Sale", "In Restoration", "Sold"];
const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under $30k", min: 0, max: 30000 },
  { label: "$30k – $50k", min: 30000, max: 50000 },
  { label: "$50k+", min: 50000, max: Infinity },
];

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <div className="mb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40">
        {label}
      </div>
      <div className="flex flex-wrap gap-3 sm:gap-4">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`border-b pb-1 text-[11px] uppercase tracking-[0.2em] transition-colors ${
              value === o
                ? "border-[#3b5bdb] text-[#3b5bdb]"
                : "border-transparent text-white/60 hover:text-white"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Inventory() {
  useReveal();
  const [make, setMake] = useState("All");
  const [era, setEra] = useState<(typeof eras)[number]>("All");
  const [status, setStatus] = useState<CarStatus | "All">("All");
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(true);

  useMemo(() => {
    const t = setTimeout(() => setLoading(false), 250);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    return cars.filter((c) => {
      if (make !== "All" && c.make !== make) return false;
      if (era !== "All") {
        const d = Math.floor(c.year / 10) * 10;
        if (`${d}s` !== era) return false;
      }
      if (status !== "All" && c.status !== status) return false;
      const r = priceRanges[price];
      if (c.price < r.min || c.price > r.max) return false;
      return true;
    });
  }, [make, era, status, price]);

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="relative border-b border-white/5">
        <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#3b5bdb]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
              The Collection
            </span>
          </div>
          <h1 className="font-display fluid-display uppercase tracking-wide">
            Inven<span className="text-[#3b5bdb]">tory</span>
          </h1>
          <p className="mt-6 max-w-xl text-[#9ca3af]">
            Every car listed has been inspected, photographed, and sorted in-house. What you see is
            what you get.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[60px] z-30 border-b border-white/5 bg-black/95 backdrop-blur-md sm:top-[68px] lg:top-[80px]">
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-6 px-5 py-5 sm:gap-8 sm:px-6 lg:px-10">
          <FilterGroup label="Make" options={makes} value={make} onChange={setMake} />
          <FilterGroup
            label="Era"
            options={eras as unknown as string[]}
            value={era}
            onChange={(v) => setEra(v as typeof era)}
          />
          <FilterGroup
            label="Status"
            options={statuses as unknown as string[]}
            value={status}
            onChange={(v) => setStatus(v as CarStatus | "All")}
          />
          <div>
            <div className="mb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40">
              Price
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {priceRanges.map((r, i) => (
                <button
                  key={r.label}
                  onClick={() => setPrice(i)}
                  className={`border-b pb-1 text-[11px] uppercase tracking-[0.2em] transition-colors ${
                    price === i
                      ? "border-[#3b5bdb] text-[#3b5bdb]"
                      : "border-transparent text-white/60 hover:text-white"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="mb-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
          {filtered.length} {filtered.length === 1 ? "car" : "cars"}
        </div>
        {loading ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-[#0a0a0f]">
                <div className="aspect-[4/3] animate-pulse bg-[#101019]" />
                <div className="space-y-3 p-5">
                  <div className="h-3 w-16 animate-pulse bg-[#101019]" />
                  <div className="h-6 w-40 animate-pulse bg-[#101019]" />
                  <div className="h-4 w-24 animate-pulse bg-[#101019]" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-24 text-center">
            <div className="font-display text-4xl uppercase tracking-wide text-white">
              No <span className="text-[#3b5bdb]">matches</span>
            </div>
            <p className="mt-3 text-sm text-[#9ca3af]">Adjust filters to see more.</p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <div key={c.id} className="reveal">
                <CarCard car={c} />
              </div>
            ))}
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
