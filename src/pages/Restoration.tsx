import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CarImage } from "@/components/CarImage";
import { useReveal } from "@/hooks/useReveal";
import { cars } from "@/data/cars";

const PHASES = [
  {
    n: "01",
    title: "Teardown",
    body: "Every panel off. Every bolt labeled. Chassis on the rotisserie, drivetrain on the stand, interior catalogued.",
  },
  {
    n: "02",
    title: "Bodywork",
    body: "Bare metal. Rust repaired with fabricated patch panels. Block-sanded in primer until the light is dead straight.",
  },
  {
    n: "03",
    title: "Paint",
    body: "Single-stage or base/clear. Sprayed in our downdraft booth, wet-sanded, and polished to a show finish.",
  },
  {
    n: "04",
    title: "Mechanical",
    body: "Engine rebuilds, transmission refreshes, suspension, brakes, and wiring — done to period-correct spec or upgraded, your call.",
  },
  {
    n: "05",
    title: "Reassembly",
    body: "New gaskets, new fasteners, restored trim. Test fit, test fit, test fit.",
  },
  {
    n: "06",
    title: "Shakedown",
    body: "300 test miles, final tuning, and a complete photo log. You sign off before the car leaves the shop.",
  },
];

export default function Restoration() {
  useReveal();
  const feature = cars.find((c) => c.id === "1967-ford-mustang-fastback")!;
  const featureTwo = cars.find((c) => c.id === "1976-datsun-280z")!;

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="mx-auto max-w-[1400px] px-5 pb-12 pt-14 sm:px-6 sm:pt-20 lg:px-10">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-[#3b5bdb]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
            Full-Scope Restoration
          </span>
        </div>
        <h1 className="font-display fluid-display uppercase tracking-wide">
          Built, Not <span className="text-[#3b5bdb]">Assembled.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-[#9ca3af]">
          Rotisserie restorations, partial refreshes, and everything in between. We take on a
          handful of projects per year so each car gets the attention it deserves.
        </p>
      </section>

      {/* Feature project */}
      <section className="border-y border-white/10 bg-[#0a0a0f]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-0 lg:px-10">
          <div className="flex items-center justify-center bg-black p-4 sm:p-8">
            <CarImage
              src={feature.photos[0]}
              alt={`${feature.year} ${feature.make} ${feature.model}`}
              className="w-full max-w-[600px] object-contain"
            />
          </div>
          <div className="flex flex-col justify-center lg:p-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#3b5bdb]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
                Recent Build — 18 Months
              </span>
            </div>
            <h2 className="font-display fluid-display-sm uppercase tracking-wide">
              {feature.year}
              <br />
              <span className="text-[#3b5bdb]">
                {feature.make} {feature.model}
              </span>
            </h2>
            <p className="mt-6 text-white/75">
              Full rotisserie restoration completed over eighteen months. Highland Green respray to
              concours standard. Drivetrain rebuilt and documented.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              {feature.restorationNotes.map((n) => (
                <li key={n} className="flex items-start gap-3 border-b border-white/5 pb-2">
                  <span className="mt-[6px] h-[6px] w-[6px] shrink-0 bg-[#3b5bdb]" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
            <Link
              to={`/inventory/${feature.id}`}
              className="mt-8 inline-flex w-fit items-center gap-3 bg-[#3b5bdb] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:bg-[#4c6ef5]"
            >
              See The Build →
            </Link>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-28 lg:px-10">
        <div className="mb-12 reveal">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#3b5bdb]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
              The Process
            </span>
          </div>
          <h2 className="font-display fluid-display-sm uppercase tracking-wide">
            Six <span className="text-[#3b5bdb]">Phases.</span>
          </h2>
        </div>
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {PHASES.map((p) => (
            <div key={p.n} className="reveal border-t border-white/10 pt-6">
              <div className="font-display text-5xl uppercase tracking-wide text-[#3b5bdb]">
                {p.n}
              </div>
              <h3 className="font-display mt-2 text-2xl uppercase tracking-wide">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#9ca3af]">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* In-progress */}
      <section className="border-t border-white/10 bg-[#0a0a0f]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#3b5bdb]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
                Currently In The Shop
              </span>
            </div>
            <h3 className="font-display fluid-display-sm uppercase tracking-wide">
              {featureTwo.year}
              <br />
              <span className="text-[#3b5bdb]">
                {featureTwo.make} {featureTwo.model}
              </span>
            </h3>
            <p className="mt-4 text-white/70">
              Mid-restoration. Available for purchase now or finished to the next owner's spec.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex w-fit items-center gap-3 border border-white/20 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:border-[#3b5bdb] hover:text-[#4c6ef5]"
            >
              Discuss A Project →
            </Link>
          </div>
          <div className="flex items-center justify-center lg:col-span-7">
            <CarImage
              src={featureTwo.photos[0]}
              alt={`${featureTwo.year} ${featureTwo.make} ${featureTwo.model}`}
              className="w-full max-w-[720px] object-contain"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
