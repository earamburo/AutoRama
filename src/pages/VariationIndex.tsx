import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CarImage } from "@/components/CarImage";
import { HERO_CAR } from "@/data/hero";

const VARIATIONS = [
  {
    code: "V1",
    to: "/v1-editorial",
    title: "Editorial",
    blurb: "Magazine spread. Rotated AUTORAMA wordmark down the left edge, floating 240Z to the right.",
  },
  {
    code: "V2",
    to: "/v2-showroom",
    title: "Showroom",
    blurb: "Centered hero. Oversized 1972 240Z headline stacked above a floating car and stat strip.",
  },
  {
    code: "V3",
    to: "/v3-split",
    title: "Split Screen",
    blurb: "Two solid black halves divided by a single solid blue line. Headline left, car right.",
  },
  {
    code: "V4",
    to: "/v4-cinematic",
    title: "Cinematic",
    blurb: "Full-bleed dark hero. Ghosted 1972 year behind the car. Stats run across the bottom.",
  },
  {
    code: "V5",
    to: "/v5-grid",
    title: "Grid",
    blurb: "2×2 card grid of featured cars. Hover reveals blue accents. Oversized wordmark above.",
  },
];

export default function VariationIndex() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="mx-auto max-w-[1400px] px-5 pb-6 pt-8 sm:px-6 sm:pt-12 lg:px-10">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-[#3b5bdb]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
            Direction Review
          </span>
        </div>
        <h1 className="font-display fluid-display uppercase tracking-tight">
          Five <span className="text-[#3b5bdb]">Homepages.</span>
          <br />
          One Shop.
        </h1>
        <p className="mt-6 max-w-xl text-[#9ca3af]">
          Every variation shares the same header, footer, inventory, and detail pages — only the
          homepage hero treatment differs. Pick a direction.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-28 sm:px-6 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VARIATIONS.map((v) => (
            <Link
              key={v.code}
              to={v.to}
              className="group relative block overflow-hidden border border-white/10 bg-[#0a0a0f] p-6 transition-colors hover:border-[#3b5bdb] hover:bg-[#101019]"
            >
              <div className="relative mb-6 aspect-[4/3] overflow-hidden bg-black">
                <CarImage
                  src={HERO_CAR.photos[0]}
                  alt="Preview"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute right-4 top-4 bg-[#3b5bdb] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white">
                  {v.code}
                </div>
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
                {v.code} · Hero Treatment
              </div>
              <h3 className="font-display mt-2 text-3xl uppercase tracking-wide">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#9ca3af]">{v.blurb}</p>
              <div className="mt-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white transition-colors group-hover:text-[#4c6ef5]">
                <span className="h-px w-8 bg-[#3b5bdb]" /> Open Variation →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 border-t border-white/5 pt-10">
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
            Shared Pages
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-[11px] uppercase tracking-[0.25em] text-white/70">
            {[
              { to: "/inventory", label: "Inventory" },
              { to: "/restoration", label: "Restoration" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="border border-white/10 px-4 py-2 transition-colors hover:border-[#3b5bdb] hover:text-[#4c6ef5]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
