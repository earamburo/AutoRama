import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";

const SERVICES = [
  {
    n: "01",
    title: "Restoration",
    body: "Full rotisserie and partial restorations. Body, paint, interior, mechanical — to period-correct or modified spec. Documented top to bottom.",
    bullets: ["Rotisserie builds", "Partial refreshes", "Concours-level finish"],
    to: "/restoration",
  },
  {
    n: "02",
    title: "Sales",
    body: "Every car we sell has been through our hands. Sorted mechanically, photographed honestly, and priced for what it is.",
    bullets: ["Pre-purchase inspection", "Honest condition reports", "Documented history"],
    to: "/inventory",
  },
  {
    n: "03",
    title: "Basic Repair",
    body: "Carburetors, ignition, cooling, brakes, suspension. We keep vintage iron on the road and dial in the cars our customers already own.",
    bullets: ["Tune-ups & diagnostics", "Cooling & charging", "Brake & suspension"],
    to: "/contact",
  },
  {
    n: "04",
    title: "Paint",
    body: "In-house downdraft booth. Single-stage or base/clear in any factory or custom color. Block-sanded, wet-sanded, polished.",
    bullets: ["Full and panel respray", "Color matching", "Wet-sand & buff"],
    to: "/contact",
  },
];

export default function Services() {
  useReveal();
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="mx-auto max-w-[1400px] px-5 pb-12 pt-14 sm:px-6 sm:pt-20 lg:px-10">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-[#3b5bdb]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
            What We Do
          </span>
        </div>
        <h1 className="font-display fluid-display uppercase tracking-wide">
          Four <span className="text-[#3b5bdb]">Services.</span>
          <br />
          One Shop.
        </h1>
        <p className="mt-6 max-w-2xl text-[#9ca3af]">
          Restoration, sales, basic repair, and paint — all under one roof in Austin. We keep the
          project list small so every car gets the attention it needs.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-6 sm:pb-32 lg:px-10">
        <div className="divide-y divide-white/10 border-y border-white/10">
          {SERVICES.map((s, i) => (
            <div
              key={s.n}
              className={`reveal grid gap-6 py-10 sm:py-14 md:grid-cols-12 md:gap-10 ${
                i % 2 === 1 ? "md:[&>*:nth-child(1)]:order-2" : ""
              }`}
            >
              <div className="md:col-span-4">
                <div className="font-display text-6xl uppercase tracking-wide text-[#3b5bdb] sm:text-7xl">
                  {s.n}
                </div>
                <h2 className="font-display mt-2 text-4xl uppercase tracking-wide sm:text-5xl">
                  {s.title}
                </h2>
              </div>
              <div className="md:col-span-6">
                <p className="text-white/80">{s.body}</p>
                <ul className="mt-5 grid gap-2 text-sm text-white/70 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-[7px] h-[6px] w-[6px] shrink-0 bg-[#3b5bdb]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-start md:col-span-2 md:justify-end">
                <Link
                  to={s.to}
                  className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:border-[#3b5bdb] hover:text-[#4c6ef5]"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border border-white/10 bg-[#0a0a0f] px-6 py-8 sm:px-10">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
              Have A Project?
            </div>
            <h3 className="font-display mt-2 text-3xl uppercase tracking-wide sm:text-4xl">
              Let's <span className="text-[#3b5bdb]">Talk.</span>
            </h3>
          </div>
          <Link
            to="/contact"
            className="bg-[#3b5bdb] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:bg-[#4c6ef5]"
          >
            Start A Conversation
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
