import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";

const STATS = [
  { n: "14", label: "Years in business" },
  { n: "120+", label: "Cars sold" },
  { n: "22", label: "Full restorations" },
  { n: "1", label: "Shop · South Austin" },
];

export default function About() {
  useReveal();
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="mx-auto max-w-[1400px] px-5 pb-12 pt-14 sm:px-6 sm:pt-20 lg:px-10">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-[#3b5bdb]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
            Since 2011
          </span>
        </div>
        <h1 className="font-display fluid-display uppercase tracking-wide">
          A Small Shop.
          <br />
          <span className="text-[#3b5bdb]">Sharp Focus.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="space-y-6 text-base leading-relaxed text-white/80 md:col-span-7">
            <p>
              Autorama Motors started in a two-bay garage in South Austin in 2011. The idea was
              simple: we wanted to work on the cars we grew up loving — early Datsun sports cars and
              classic American muscle — and do it with the rigor those cars deserve.
            </p>
            <p>
              Fourteen years later, the shop is still small on purpose. We keep the project list
              capped so every car gets lead-tech attention from teardown through shakedown. The
              answer "we're backed up for six months" is a feature, not a bug.
            </p>
            <p>
              We buy. We sell. We restore. We paint. We daily-drive a '73 240Z and a '67 Fastback.
              If you drop by, bring coffee — ours is terrible.
            </p>
          </div>
          <aside className="md:col-span-5">
            <div className="border border-white/10 bg-[#0a0a0f] p-6 sm:p-8">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
                By The Numbers
              </div>
              <div className="mt-6 grid grid-cols-2 gap-6">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-5xl uppercase tracking-wide text-white">
                      {s.n}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[#3b5bdb]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0a0a0f]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 py-16 sm:px-6 md:grid-cols-3 lg:px-10">
          {[
            {
              title: "Honesty",
              body: "If something is wrong with a car, we say so. We'd rather lose a sale than ship a problem.",
            },
            {
              title: "Focus",
              body: "Pre-1980 Japanese sports cars and American muscle. We stay in our lane so we can do it well.",
            },
            {
              title: "Patience",
              body: "Restorations take as long as they take. We won't skip steps to hit a calendar date.",
            },
          ].map((v) => (
            <div key={v.title} className="reveal">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
                Value
              </div>
              <h3 className="font-display mt-2 text-3xl uppercase tracking-wide">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-28 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h2 className="font-display fluid-display-sm uppercase tracking-wide">
            Come <span className="text-[#3b5bdb]">By.</span>
          </h2>
          <Link
            to="/contact"
            className="bg-[#3b5bdb] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:bg-[#4c6ef5]"
          >
            Visit The Shop
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
