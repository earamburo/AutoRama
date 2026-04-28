import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CarImage } from "@/components/CarImage";
import { CarCard } from "@/components/CarCard";
import { SharedHomeSections } from "@/components/SharedHomeSections";
import { useReveal } from "@/hooks/useReveal";
import { cars } from "@/data/cars";
import { HERO_CAR, HERO_STATS } from "@/data/hero";

export default function V3Split() {
  useReveal();
  const preview = cars.slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="relative overflow-hidden bg-black">
        <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-2">
          {/* Left half — headline + CTAs */}
          <div className="relative flex min-h-[70vh] flex-col justify-center bg-black px-5 py-16 sm:px-6 sm:py-20 lg:min-h-[88vh] lg:px-12 lg:py-24">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#3b5bdb]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
                Since 2011 — Austin, TX
              </span>
            </div>
            <h1 className="font-display fluid-display uppercase leading-[0.85] tracking-tight">
              Vintage Iron,
              <br />
              <span className="text-[#3b5bdb]">Modern</span> Standards.
            </h1>
            <p className="mt-8 max-w-md text-[#9ca3af]">
              Datsun specialists. American muscle. Restoration, sales, repair, and paint — finished
              to a standard that rewards close inspection.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/inventory"
                className="bg-[#3b5bdb] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:bg-[#4c6ef5]"
              >
                View Inventory
              </Link>
              <Link
                to="/restoration"
                className="border border-white/20 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:border-[#3b5bdb] hover:text-[#4c6ef5]"
              >
                Restoration
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6">
              {HERO_STATS.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
                    {s.label}
                  </div>
                  <div className="font-display mt-2 text-xl uppercase tracking-wide text-white sm:text-2xl">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solid blue divider — vertical on desktop, horizontal on mobile */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[#3b5bdb] lg:block" />
          <div className="pointer-events-none h-px w-full bg-[#3b5bdb] lg:hidden" />

          {/* Right half — floating car */}
          <div className="relative flex min-h-[60vh] items-center justify-center bg-black px-5 py-12 sm:px-6 sm:py-16 lg:min-h-[88vh] lg:px-12">
            <CarImage
              loading="eager"
              src={HERO_CAR.photos[0]}
              alt={`${HERO_CAR.year} ${HERO_CAR.make} ${HERO_CAR.model}`}
              className="relative z-10 w-full max-w-[680px] object-contain"
              style={{ transform: "rotate(-6deg) scaleX(-1)" }}
            />
            <div className="absolute bottom-6 left-6 z-10 sm:left-12">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
                {HERO_CAR.year} — {HERO_CAR.status}
              </div>
              <div className="font-display mt-1 text-3xl uppercase tracking-wide text-white sm:text-4xl">
                {HERO_CAR.make} {HERO_CAR.model}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 lg:px-10">
        <div className="reveal mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-10 bg-[#3b5bdb]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
              Also Available
            </span>
          </div>
          <h2 className="font-display fluid-display-sm uppercase tracking-wide">
            The <span className="text-[#3b5bdb]">Floor</span>
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

      <SharedHomeSections title="V3 · Split" accentWords={["Half/Half", "Solid Blue Rule"]} />
      <SiteFooter />
    </div>
  );
}
