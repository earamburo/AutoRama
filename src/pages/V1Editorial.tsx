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
    <div className="min-h-screen bg-surface-base text-white">
      <SiteHeader />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Blue atmospheric glow behind car — intensified */}
        <div className="hero-glow-bg pointer-events-none absolute inset-0" />
        {/* Subtle bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[surface-base] to-transparent" />

        {/* Vertical text accent — left edge */}
        <div className="writing-vertical absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 xl:flex flex-col gap-3">
         
          <span className="font-display fluid-display-sm uppercase text-outline-brand leading-none tracking-tight">
            AUTORAMA
          </span>
           <span className="text-label-lg font-semibold uppercase tracking-label-widest text-white/30">
            Athens, Georgia · Est. 1987
          </span>
        </div>

        <div className="relative mx-auto grid max-w-[1400px] grid-cols-12 items-center px-6 pb-10 pt-10 lg:px-10 lg:pt-16">

          {/* ── Left: editorial content ── */}
          <div className="col-span-12 lg:col-span-5">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-brand" />
              <span className="text-label font-semibold uppercase tracking-label-wider text-brand">
                Issue N°01 · Est. 1987
              </span>
            </div>

            <h1 className="font-display fluid-display-lg uppercase text-white">
              Vintage
              <br />
              Iron,
              <br />
              <span className="text-brand">Modern</span>
              <br />
              Standards.
            </h1>

            <div className="mt-8 flex gap-5">
              <div className="w-px flex-shrink-0 self-stretch bg-brand/35" />
              <p className="text-sm leading-relaxed text-ink-muted">
                We restore, sell, and maintain classic cars for people who know the difference.
                No hedge, no filler — just properly sorted iron.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/restoration"
                className="group inline-flex items-center gap-3 bg-brand px-7 py-4 text-label-lg font-semibold uppercase tracking-label text-white transition-colors hover:bg-brand-hover"
              >
                Restoration
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-white/15 px-7 py-4 text-label-lg font-semibold uppercase tracking-label text-white/75 transition-colors hover:border-brand hover:text-brand-hover"
              >
                Inquire
              </Link>
            </div>
          </div>

          {/* ── Right: hero car ── */}
          <div className="relative col-span-12 mt-10 lg:col-span-7 lg:mt-0">

            {/* Ghost "260Z" behind car */}
            <div className="pointer-events-none absolute inset-0 z-[1] flex select-none items-center justify-center">
              <span className="hero-ghost-text font-display">260Z</span>
            </div>

            {/* Spotlight glow around car */}
            <div className="hero-spotlight-glow pointer-events-none absolute inset-0 z-[2]" />

            {/* Floor / ground glow */}
            <div className="hero-floor-glow pointer-events-none absolute bottom-0 left-1/2 z-[3] h-24 w-4/5 -translate-x-1/2" />

            {/* Car label top-left */}
            <div className="absolute left-0 top-0 z-20 flex items-center gap-3 text-label uppercase tracking-label-wide text-ink-muted">
              <span>{HERO_CAR.year} · {HERO_CAR.make} {HERO_CAR.model}</span>
              <span className="h-px w-5 bg-brand/50" />
              <span className="text-brand">{HERO_CAR.status}</span>
            </div>

            {/* Annotation — Engine (left side, hood area) */}
            <div className="annotation-engine pointer-events-none absolute z-30 hidden items-center gap-0 lg:flex">
              <div className="flex flex-col items-end mr-2">
                <span className="text-label-xs font-semibold uppercase tracking-label-wide text-brand">Engine</span>
                <span className="text-label-sm uppercase tracking-snug text-white/50">L24 Inline-Six</span>
              </div>
              <div className="h-px w-8 bg-brand/35" />
              <div className="h-[5px] w-[5px] rounded-full bg-brand ring-2 ring-brand/20" />
            </div>

            {/* Annotation — Colour (right side, rear quarter) */}
            <div className="annotation-exterior pointer-events-none absolute z-30 hidden items-center gap-0 lg:flex">
              <div className="h-[5px] w-[5px] rounded-full bg-brand ring-2 ring-brand/20" />
              <div className="h-px w-8 bg-brand/35" />
              <div className="flex flex-col ml-2">
                <span className="text-label-xs font-semibold uppercase tracking-label-wide text-brand">Exterior</span>
                <span className="text-label-sm uppercase tracking-snug text-white/50">918 Orange</span>
              </div>
            </div>

            {/* Circular editorial stamp */}
            <div className="absolute bottom-10 right-6 z-20 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-brand/30 bg-surface-base/80 text-center backdrop-blur-sm lg:h-20 lg:w-20">
              <div>
                <div className="font-display text-label-xs uppercase tracking-label text-brand">Est.</div>
                <div className="font-display text-xl leading-none text-white">1987</div>
              </div>
            </div>

            <CarImage
              loading="eager"
              src={DatsunImage}
              alt={`${HERO_CAR.year} ${HERO_CAR.make} ${HERO_CAR.model}`}
              className="hero-car-image relative w-full object-contain"
            />
          </div>
        </div>

        {/* ── Stat bar ── */}
        {/* <div className="border-t border-white/[0.05] bg-surface-raised">
          <div className="mx-auto grid max-w-[1400px] grid-cols-5 divide-x divide-white/[0.05] px-6 lg:px-10">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="px-5 py-5 first:pl-0 last:pr-0">
                <div className="text-label-sm font-semibold uppercase tracking-label-wide text-ink-muted/55">
                  {s.label}
                </div>
                <div className="mt-1.5 font-display text-lg uppercase tracking-wide text-white">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </section>

      {/* ─── ABOUT STRIP ──────────────────────────────────── */}
      <section className="border-y border-white/[0.05] bg-surface-raised">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-20 md:grid-cols-12 md:gap-16 lg:px-10 lg:py-28">
          <div className="md:col-span-5">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-brand" />
              <span className="text-label font-semibold uppercase tracking-label-wide text-brand">
                The Shop
              </span>
            </div>
            <h2 className="font-display fluid-display-sm uppercase tracking-wide">
              Built By
              <br />
              <span className="text-brand">Enthusiasts.</span>
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-ink-muted md:col-span-6 md:col-start-7 md:pt-4">
            <p>
              Autorama Motors is a small shop in Athens, Georgia focused on vintage Japanese sports
              cars and American muscle. We buy, sell, restore, and maintain pre-1980 iron.
            </p>
            <p>
              Every car that leaves the shop has been through our hands. Sorted mechanically,
              photographed honestly, and priced for what it is. If something is wrong with a car,
              we'll tell you — we'd rather lose a sale than ship a problem.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 pt-2 text-label-lg font-semibold uppercase tracking-label text-white transition-colors hover:text-brand-hover"
            >
              <span className="h-px w-8 bg-brand" /> Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ─── INVENTORY PREVIEW ────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-6 pb-24 pt-16 sm:px-6 lg:px-10">
        <div className="mb-12 flex items-end justify-between reveal">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-brand" />
              <span className="text-label font-semibold uppercase tracking-label-wide text-brand">
                Current Inventory
              </span>
            </div>
            <h2 className="font-display fluid-display-sm uppercase tracking-wide">
              In The <span className="text-brand">Showroom</span>
            </h2>
          </div>
          <Link
            to="/inventory"
            className="hidden text-label-lg font-semibold uppercase tracking-label text-white/40 transition-colors hover:text-brand-hover md:block"
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



      <SiteFooter />
    </div>
  );
}
