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

export default function V4Cinematic() {
  useReveal();
  const preview = cars.slice(0, 6);

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="relative overflow-hidden bg-black">
        {/* Corner wordmark */}
        <div className="absolute left-5 top-6 z-20 flex items-center gap-3 sm:left-8 sm:top-8 lg:left-12">
          <span className="h-px w-8 bg-[#3b5bdb]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white">
            Autorama Motors
          </span>
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-[1600px] items-center px-5 pb-36 pt-20 sm:px-6 sm:pb-40 sm:pt-24 lg:px-12">
          {/* Ghost year — absolute, 15% white opacity */}
          <div
            aria-hidden
            className="font-display pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none uppercase leading-none tracking-tight"
            style={{
              color: "rgba(255,255,255,0.15)",
              fontSize: "clamp(10rem, 32vw, 28rem)",
              lineHeight: 0.8,
              whiteSpace: "nowrap",
              paddingRight: "2vw",
            }}
          >
            {HERO_CAR.year}
          </div>

          <div className="relative z-10 flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:items-end lg:gap-16">
            {/* Headline bottom-left */}
            <div className="flex-1 lg:max-w-lg">
              <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
                Featured · {HERO_CAR.status}
              </div>
              <h1 className="font-display fluid-display uppercase tracking-tight">
                Vintage Iron,
                <br />
                <span className="text-[#3b5bdb]">Modern Standards.</span>
              </h1>
              <p className="mt-6 max-w-md text-[#9ca3af]">
                {HERO_CAR.year} {HERO_CAR.make} {HERO_CAR.model} — {HERO_CAR.heroBlurb}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
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

            {/* Floating car, right-of-center */}
            <div className="flex flex-1 items-center justify-center">
              <CarImage
                loading="eager"
                src={HERO_CAR.photos[0]}
                alt={`${HERO_CAR.year} ${HERO_CAR.make} ${HERO_CAR.model}`}
                className="relative z-10 w-full max-w-[720px] object-contain"
                style={{ transform: "rotate(-6deg) scaleX(-1)" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom stat strip */}
        <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-black/70 backdrop-blur-sm">
          <CarStatsStrip stats={HERO_STATS} />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-6 lg:px-10">
        <div className="reveal mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-10 bg-[#3b5bdb]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
              Current Inventory
            </span>
          </div>
          <h2 className="font-display fluid-display-sm uppercase tracking-wide">
            The <span className="text-[#3b5bdb]">Collection</span>
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

      <SharedHomeSections title="V4 · Cinematic" accentWords={["Ghost Year", "Bottom Stats"]} />
      <SiteFooter />
    </div>
  );
}
