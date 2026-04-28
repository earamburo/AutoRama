import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CarImage } from "@/components/CarImage";
import { CarCard } from "@/components/CarCard";
import { CarStatsStrip } from "@/components/CarStatsStrip";
import { SharedHomeSections } from "@/components/SharedHomeSections";
import { useReveal } from "@/hooks/useReveal";
import { cars } from "@/data/cars";
import { HERO_CAR, HERO_STATS } from "@/data/hero";

export default function V2Showroom() {
  useReveal();
  const preview = cars.slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="relative overflow-hidden bg-black">
        <div className="mx-auto max-w-[1400px] px-5 pb-12 pt-14 text-center sm:px-6 sm:pt-20 lg:px-10">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#3b5bdb]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
              Featured Showroom
            </span>
            <span className="h-px w-10 bg-[#3b5bdb]" />
          </div>

          <h1 className="font-display fluid-display-xl uppercase tracking-tight">
            1972 <span className="text-[#3b5bdb]">240Z</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[#9ca3af]">{HERO_CAR.heroBlurb}</p>

          {/* Floating centered car */}
          <div className="relative mx-auto mt-8 flex max-w-[1000px] items-center justify-center">
            <CarImage
              loading="eager"
              src={HERO_CAR.photos[0]}
              alt={`${HERO_CAR.year} ${HERO_CAR.make} ${HERO_CAR.model}`}
              className="relative z-10 w-full object-contain"
              style={{ transform: "rotate(-6deg) scaleX(-1)" }}
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to={`/inventory/${HERO_CAR.id}`}
              className="bg-[#3b5bdb] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:bg-[#4c6ef5]"
            >
              See This Car
            </Link>
            <Link
              to="/inventory"
              className="border border-white/20 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:border-[#3b5bdb] hover:text-[#4c6ef5]"
            >
              View Inventory
            </Link>
          </div>
        </div>

        <CarStatsStrip stats={HERO_STATS} />
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 lg:px-10">
        <div className="reveal mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#3b5bdb]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
              Also On The Floor
            </span>
            <span className="h-px w-10 bg-[#3b5bdb]" />
          </div>
          <h2 className="font-display fluid-display-sm uppercase tracking-wide">
            More <span className="text-[#3b5bdb]">Iron</span>
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((c) => (
            <div key={c.id} className="reveal">
              <CarCard car={c} />
            </div>
          ))}
        </div>
      </section>

      <SharedHomeSections title="V2 · Showroom" accentWords={["Centered", "Oversized Headline"]} />
      <SiteFooter />
    </div>
  );
}
