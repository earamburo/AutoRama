import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CarImage } from "@/components/CarImage";
import { CarCard } from "@/components/CarCard";
import { useReveal } from "@/hooks/useReveal";
import { cars } from "@/data/cars";
import { HERO_CAR, HERO_STATS } from "@/data/hero";
import DatsunImage from "@/assets/test.png";

export default function V1Editorial() {
  useReveal();
  const preview = cars.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#080b14] text-white">
      <SiteHeader />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Blue atmospheric glow behind car */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 85% at 78% 55%, rgba(59,91,219,0.2) 0%, transparent 68%)",
          }}
        />
        {/* Subtle bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#080b14] to-transparent" />

        <div className="relative mx-auto grid max-w-[1400px] grid-cols-12 items-center px-6 pb-0 pt-10 lg:px-10 lg:pt-16">

          {/* ── Left: editorial content ── */}
          <div className="col-span-12 lg:col-span-5">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-[#3b5bdb]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#3b5bdb]">
                Issue N°01 · Est. 1987
              </span>
            </div>

            <h1
              className="font-display uppercase leading-[0.85] text-white"
              style={{ fontSize: "clamp(3.8rem, 8.5vw, 7.5rem)" }}
            >
              Vintage
              <br />
              Iron,
              <br />
              <span className="text-[#3b5bdb]">Modern</span>
              <br />
              Standards.
            </h1>

            <div className="mt-8 flex gap-5">
              <div className="w-px flex-shrink-0 self-stretch bg-[#3b5bdb]/35" />
              <p className="text-sm leading-relaxed text-[#9ca3af]">
                We restore, sell, and maintain classic cars for people who know the difference.
                No hedge, no filler — just properly sorted iron.
              </p>
            </div>

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
                className="inline-flex items-center gap-3 border border-white/15 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/75 transition-colors hover:border-[#3b5bdb] hover:text-[#4c6ef5]"
              >
                Restoration
              </Link>
            </div>
          </div>

          {/* ── Right: hero car ── */}
          <div className="relative col-span-12 mt-10 lg:col-span-7 lg:mt-0">
            {/* Car label top-left */}
            <div className="absolute left-0 top-0 z-20 flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-[#9ca3af]">
              <span>{HERO_CAR.year} · {HERO_CAR.make} {HERO_CAR.model}</span>
              <span className="h-px w-5 bg-[#3b5bdb]/50" />
              <span className="text-[#3b5bdb]">{HERO_CAR.status}</span>
            </div>

            {/* Circular editorial stamp */}
            <div className="absolute bottom-10 right-6 z-20 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#3b5bdb]/30 bg-[#080b14]/80 text-center backdrop-blur-sm lg:h-20 lg:w-20">
              <div>
                <div className="font-display text-[7px] uppercase tracking-[0.25em] text-[#3b5bdb]">Est.</div>
                <div className="font-display text-xl leading-none text-white">1987</div>
              </div>
            </div>

            <CarImage
              loading="eager"
              src={DatsunImage}
              alt={`${HERO_CAR.year} ${HERO_CAR.make} ${HERO_CAR.model}`}
              className="relative z-10 mt-6 w-full object-contain"
              style={{ transform: "rotate(-6deg) scaleX(-1)" }}
            />
          </div>
        </div>

        {/* ── Stat bar ── */}
        <div className="border-t border-white/[0.05] bg-[#0a0d1a]">
          <div className="mx-auto grid max-w-[1400px] grid-cols-5 divide-x divide-white/[0.05] px-6 lg:px-10">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="px-5 py-5 first:pl-0 last:pr-0">
                <div className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#9ca3af]/55">
                  {s.label}
                </div>
                <div className="mt-1.5 font-display text-lg uppercase tracking-wide text-white">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INVENTORY PREVIEW ────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-6 pb-24 pt-16 sm:px-6 lg:px-10">
        <div className="mb-12 flex items-end justify-between reveal">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#3b5bdb]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
                Current Inventory
              </span>
            </div>
            <h2 className="font-display fluid-display-sm uppercase tracking-wide">
              In The <span className="text-[#3b5bdb]">Showroom</span>
            </h2>
          </div>
          <Link
            to="/inventory"
            className="hidden text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40 transition-colors hover:text-[#4c6ef5] md:block"
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

      {/* ─── ABOUT STRIP ──────────────────────────────────── */}
      <section className="border-y border-white/[0.05] bg-[#0a0d1a]">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-20 md:grid-cols-12 md:gap-16 lg:px-10 lg:py-28">
          <div className="md:col-span-5">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#3b5bdb]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
                The Shop
              </span>
            </div>
            <h2 className="font-display fluid-display-sm uppercase tracking-wide">
              Built By
              <br />
              <span className="text-[#3b5bdb]">Enthusiasts.</span>
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-[#9ca3af] md:col-span-6 md:col-start-7 md:pt-4">
            <p>
              Autorama Motors is a small shop in South Austin focused on vintage Japanese sports
              cars and American muscle. We buy, sell, restore, and maintain pre-1980 iron.
            </p>
            <p>
              Every car that leaves the shop has been through our hands. Sorted mechanically,
              photographed honestly, and priced for what it is. If something is wrong with a car,
              we'll tell you — we'd rather lose a sale than ship a problem.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 pt-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:text-[#4c6ef5]"
            >
              <span className="h-px w-8 bg-[#3b5bdb]" /> Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ─── DESIGN VARIANTS STRIP ───────────────────────── */}
      <section className="border-t border-white/[0.04] bg-[#080b14]">
        <div className="mx-auto max-w-[1400px] px-6 py-7 lg:px-10">
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/18">
              Design Variants
            </span>
            {[
              { label: "V2 · Showroom", to: "/v2-showroom" },
              { label: "V3 · Split", to: "/v3-split" },
              { label: "V4 · Cinematic", to: "/v4-cinematic" },
              { label: "V5 · Grid", to: "/v5-grid" },
              { label: "All Variants", to: "/variations" },
            ].map((v) => (
              <Link
                key={v.to}
                to={v.to}
                className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/25 transition-colors hover:text-[#3b5bdb]"
              >
                {v.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
