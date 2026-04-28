import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CarImage } from "@/components/CarImage";
import { CarCard } from "@/components/CarCard";
import { SharedHomeSections } from "@/components/SharedHomeSections";
import { useReveal } from "@/hooks/useReveal";
import { cars } from "@/data/cars";
import { HERO_CAR, HERO_STATS } from "@/data/hero";
import { VerticalCarStatsStrip } from "@/components/VerticalCarStatsStrip";
import { CarStatsStrip } from "@/components/CarStatsStrip";
import DatsunImage from "@/assets/test.png"

export default function V1Editorial() {
  useReveal();
  const preview = cars.slice(0, 6);

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* HERO — editorial magazine spread */}
      <section className="relative overflow-hidden bg-black">
        <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-5 pb-12 pt-6 sm:px-6 lg:grid-cols-12 lg:gap-0 lg:px-10 lg:pt-10">
          {/* Left: vertical rotated wordmark */}
          <div className="hidden lg:col-span-1 lg:block">
            <div
              className="writing-vertical font-display uppercase tracking-[0.15em] text-[#3b5bdb]"
              style={{ fontSize: "clamp(3rem, 6vw, 6rem)", lineHeight: 1 }}
            >
              Autorama
            </div>
          </div>

          {/* Center: editorial headline */}
          <div className="lg:col-span-5 lg:pt-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#3b5bdb]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
                Issue N°01 — Featured For Sale
              </span>
            </div>
            <h1 className="font-display fluid-display uppercase tracking-tight">
              Vintage Iron,
              <br />
              <span className="text-[#3b5bdb]">Modern</span>
              <br />
              Standards.
            </h1>
            <p className="mt-8 max-w-md text-[#9ca3af]">
              We restore, sell, and maintain classic cars for people who know the difference. No
              hedge, no filler — just properly sorted iron.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/inventory"
                className="group inline-flex items-center gap-3 bg-[#3b5bdb] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:bg-[#4c6ef5]"
              >
                View Inventory
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/restoration"
                className="inline-flex items-center gap-3 border border-white/20 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:border-[#3b5bdb] hover:text-[#4c6ef5]"
              >
                Restoration
              </Link>
            </div>

            {/* Vertical-label stat callouts */}
            {/* <div className="mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {HERO_STATS.slice(0, 3).map((s) => (
                <div key={s.label} className="flex gap-3">
                  <div className="writing-vertical text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
                    {s.label}
                  </div>
                  <div className="font-display text-2xl uppercase tracking-wide text-white">
                    {s.value}
                  </div>
                </div>
              ))}
            </div> */}

          </div>
          {/* <VerticalCarStatsStrip stats={HERO_STATS.slice(0, 3)} /> */}


          {/* Right: floating Datsun */}
          <div className="relative lg:col-span-6">
            <div className="relative z-10 mt-2 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[#9ca3af]">
              <span>
                {HERO_CAR.year} · {HERO_CAR.make} {HERO_CAR.model}
              </span>
              <span className="text-[#3b5bdb]">{HERO_CAR.status}</span>
            </div>

            <div className="relative flex h-full items-center justify-center">
              <CarImage
                loading="eager"
                src={DatsunImage}
                alt={`${HERO_CAR.year} ${HERO_CAR.make} ${HERO_CAR.model}`}
                className="relative z-10 w-full max-w-[720px] object-contain"
                // style={{ transform: "rotate(-6deg) scaleX(-1)" }}
              />
            </div>
            <CarStatsStrip stats={HERO_STATS} />



          </div>
        </div>
      </section>

      {/* Inventory preview */}
      <section className="mx-auto max-w-[1400px] px-5 pb-24 pt-8 sm:px-6 lg:px-10">
        <div className="mb-10 flex items-end justify-between reveal">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#3b5bdb]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
                Current Inventory
              </span>
            </div>
            <h2 className="font-display fluid-display-sm uppercase tracking-wide">
              In The <span className="text-[#3b5bdb]">Showroom</span>
            </h2>
          </div>
          <Link
            to="/inventory"
            className="hidden text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-[#4c6ef5] md:block"
          >
            View All →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((c) => (
            <div key={c.id} className="reveal">
              <CarCard car={c} />
            </div>
          ))}
        </div>
      </section>

      <SharedHomeSections title="V1 · Editorial" accentWords={["Magazine", "Rotated Wordmark"]} />
      <SiteFooter />
    </div>
  );
}
