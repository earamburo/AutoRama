import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CarImage } from "@/components/CarImage";
import { CarStatsStrip } from "@/components/CarStatsStrip";
import { useReveal } from "@/hooks/useReveal";
import { cars, getCarById, formatPrice, formatMiles } from "@/data/cars";

function InquiryForm({ carName }: { carName: string }) {
  const [sent, setSent] = useState(false);
  const inputClass =
    "w-full border-0 border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder:text-white/40 focus:border-b-2 focus:border-[#3b5bdb] focus:outline-none focus:ring-0 transition-colors";
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="mt-8 space-y-4"
    >
      <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
        Inquire
      </div>
      <input type="text" required placeholder="Name" className={inputClass} />
      <input type="email" required placeholder="Email" className={inputClass} />
      <textarea
        rows={3}
        required
        placeholder={`Questions about the ${carName}?`}
        className={`${inputClass} resize-none`}
      />
      <button
        type="submit"
        disabled={sent}
        className="w-full bg-[#3b5bdb] px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:bg-[#4c6ef5] disabled:bg-white/10"
      >
        {sent ? "Sent — We'll be in touch" : "Send Inquiry"}
      </button>
    </form>
  );
}

export default function CarDetail() {
  useReveal();
  const { carId } = useParams<{ carId: string }>();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const car = carId ? getCarById(carId) : undefined;

  if (!car) {
    return (
      <div className="min-h-screen bg-black text-white">
        <SiteHeader />
        <div className="mx-auto max-w-[1400px] px-5 py-32 text-center sm:px-6 lg:px-10">
          <h1 className="font-display fluid-display uppercase">
            Not <span className="text-[#3b5bdb]">Found</span>
          </h1>
          <p className="mt-4 text-[#9ca3af]">That car isn't in our inventory.</p>
          <Link
            to="/inventory"
            className="mt-8 inline-block bg-[#3b5bdb] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-white hover:bg-[#4c6ef5]"
          >
            Back to Inventory
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const transShort = car.transmission
    .replace("-Speed", "-SPD")
    .replace(" Manual", " MT")
    .replace(" Automatic", " AT");
  const similar = cars.filter((c) => c.id !== car.id && c.make === car.make).slice(0, 3);
  const callouts = car.restorationNotes.slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <div className="mx-auto max-w-[1400px] px-5 pt-8 sm:px-6 lg:px-10">
        <Link
          to="/inventory"
          className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50 transition-colors hover:text-[#4c6ef5]"
        >
          ← Back to Inventory
        </Link>
      </div>

      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-5 pt-6 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#3b5bdb]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
              {car.status}
            </span>
          </div>
          <h1 className="font-display fluid-display-xl mt-4 uppercase leading-[0.82] tracking-tight">
            <span>{car.year} </span>
            <span className="text-[#3b5bdb]">{car.model}</span>
          </h1>
          <div className="mt-2 text-base uppercase tracking-[0.3em] text-white/60 sm:text-xl">
            {car.make}
          </div>
          {car.heroBlurb && <p className="mt-6 max-w-2xl text-[#9ca3af]">{car.heroBlurb}</p>}
        </div>

        {/* Floating hero image with callouts */}
        <div className="relative mx-auto mt-10 max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <div className="relative aspect-[16/9] bg-black">
            <CarImage
              loading="eager"
              src={car.photos[0]}
              alt={`${car.year} ${car.make} ${car.model}`}
              className="absolute inset-0 h-full w-full object-contain"
            />
            {callouts.map((text, i) => {
              const posClass = ["callout-pos-0", "callout-pos-1", "callout-pos-2"][i];
              return (
                <div
                  key={text}
                  className={`${posClass} absolute hidden items-center gap-3 md:flex`}
                >
                  <div className="h-2 w-2 rounded-full bg-[#3b5bdb]" />
                  <div className="h-px w-12 bg-[#3b5bdb]" />
                  <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/90">
                    {text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <CarStatsStrip stats={[
        { label: "Engine", value: car.engine.split(" ").slice(0, 2).join(" ") },
        { label: "Power", value: car.horsepower },
        { label: "Trans", value: transShort },
        { label: "Mileage", value: formatMiles(car.mileage) },
        { label: "Price", value: formatPrice(car.price) },
      ]} />

      {/* Gallery */}
      <section className="mx-auto max-w-[1400px] px-5 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-[#3b5bdb]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
            Gallery
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {car.photos.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setLightbox(i)}
              className="group relative aspect-square overflow-hidden bg-[#0a0a0f]"
            >
              <img
                src={src}
                alt={`${car.model} photo ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </button>
          ))}
        </div>
      </section>

      {/* Description + specs */}
      <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#3b5bdb]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
                The Car
              </span>
            </div>
            <h2 className="font-display fluid-display-sm uppercase tracking-wide">
              Descrip<span className="text-[#3b5bdb]">tion</span>
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-white/75">
              {car.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mb-6 mt-14 flex items-center gap-3">
              <span className="h-px w-10 bg-[#3b5bdb]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
                Restoration Notes
              </span>
            </div>
            <ul className="space-y-3 text-white/75">
              {car.restorationNotes.map((n) => (
                <li key={n} className="flex items-start gap-4 border-b border-white/5 pb-3">
                  <span className="mt-[6px] h-[6px] w-[6px] shrink-0 bg-[#3b5bdb]" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="md:col-span-5">
            <div className="sticky top-28 border border-white/10 bg-[#0a0a0f] p-6 sm:p-8">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
                Specifications
              </div>
              <dl className="mt-6 divide-y divide-white/5 text-sm">
                {[
                  ["Year", car.year],
                  ["Make", car.make],
                  ["Model", car.model],
                  ["VIN", car.vin],
                  ["Engine", car.engine],
                  ["Transmission", car.transmission],
                  ["Horsepower", car.horsepower],
                  ["Mileage", `${formatMiles(car.mileage)} mi`],
                  ["Exterior", car.exteriorColor],
                  ["Interior", car.interior],
                  ["Status", car.status],
                  ["Price", formatPrice(car.price)],
                ].map(([k, v]) => (
                  <div key={k as string} className="flex justify-between gap-4 py-3">
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
                      {k}
                    </dt>
                    <dd className="text-right text-white/90">{v as string | number}</dd>
                  </div>
                ))}
              </dl>

              <InquiryForm carName={`${car.year} ${car.make} ${car.model}`} />
            </div>
          </aside>
        </div>
      </section>

      {similar.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-6 lg:px-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#3b5bdb]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
              More From {car.make}
            </span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {similar.map((c) => (
              <Link
                key={c.id}
                to={`/inventory/${c.id}`}
                className="group block overflow-hidden bg-[#0a0a0f] transition-colors hover:bg-[#101019]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <CarImage
                    src={c.photos[0]}
                    alt={c.model}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#3b5bdb]">
                    {c.year}
                  </div>
                  <div className="font-display mt-1 text-2xl uppercase">
                    {c.make} {c.model}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <SiteFooter />

      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + car.photos.length) % car.photos.length);
            }}
            className="absolute left-4 text-3xl text-white/70 transition-colors hover:text-[#4c6ef5] sm:left-6"
            aria-label="Previous"
          >
            ←
          </button>
          <img
            src={car.photos[lightbox]}
            alt=""
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % car.photos.length);
            }}
            className="absolute right-4 text-3xl text-white/70 transition-colors hover:text-[#4c6ef5] sm:right-6"
            aria-label="Next"
          >
            →
          </button>
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white sm:right-6 sm:top-6"
          >
            Close ✕
          </button>
        </div>
      )}
    </div>
  );
}
