import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CarImage } from "@/components/CarImage";
import { SharedHomeSections } from "@/components/SharedHomeSections";
import { useReveal } from "@/hooks/useReveal";
import { cars, formatPrice } from "@/data/cars";
import { HERO_CAR } from "@/data/hero";

export default function V5Grid() {
  useReveal();
  const featured = [
    cars.find((c) => c.id === "1972-datsun-240z")!,
    cars.find((c) => c.id === "1969-datsun-510")!,
    cars.find((c) => c.id === "1969-chevrolet-camaro-ss")!,
    cars.find((c) => c.id === "1967-ford-mustang-fastback")!,
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="mx-auto max-w-[1400px] px-5 pb-12 pt-14 sm:px-6 sm:pt-20 lg:px-10">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-[#3b5bdb]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
            Four From The Floor
          </span>
        </div>
        <h1 className="font-display fluid-display uppercase tracking-tight">
          Autorama /
          <br />
          <span className="text-[#3b5bdb]">Vintage Motors</span>
        </h1>
        <p className="mt-6 max-w-xl text-[#9ca3af]">
          Datsun specialists and American muscle. Every car has been sorted in-house and
          photographed honestly.
        </p>
      </section>

      {/* 2x2 hero grid */}
      <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {featured.map((c, i) => (
            <Link
              key={c.id}
              to={`/inventory/${c.id}`}
              className="group relative block aspect-[4/3] overflow-hidden border border-white/5 bg-[#0a0a0f] transition-colors hover:border-[#3b5bdb]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <CarImage
                  loading={i < 2 ? "eager" : "lazy"}
                  src={c.photos[0]}
                  alt={`${c.year} ${c.make} ${c.model}`}
                  className="h-full w-full scale-110 object-contain transition-transform duration-700 group-hover:scale-125"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-5 sm:p-7">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
                    {c.year}
                  </div>
                  <div className="font-display mt-1 text-3xl uppercase tracking-wide text-white sm:text-4xl">
                    {c.make} {c.model}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-white">{formatPrice(c.price)}</div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 transition-colors group-hover:text-[#4c6ef5]">
                    View →
                  </div>
                </div>
              </div>
              {/* Hover accent line */}
              <span className="absolute inset-x-0 bottom-0 h-[2px] w-0 bg-[#3b5bdb] transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/inventory"
            className="bg-[#3b5bdb] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:bg-[#4c6ef5]"
          >
            View Full Inventory
          </Link>
          <Link
            to="/restoration"
            className="border border-white/20 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:border-[#3b5bdb] hover:text-[#4c6ef5]"
          >
            Our Restoration Work
          </Link>
        </div>
      </section>

      <SharedHomeSections title="V5 · Grid" accentWords={["2×2 Hero", "Hover Blue"]} />
      <SiteFooter />
    </div>
  );
}
