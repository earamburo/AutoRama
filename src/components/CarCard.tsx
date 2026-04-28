import { Link } from "react-router-dom";
import { type Car, formatPrice } from "@/data/cars";
import { CarImage } from "@/components/CarImage";

function StatusBadge({ status }: { status: Car["status"] }) {
  if (status === "For Sale") {
    return (
      <span className="bg-[#3b5bdb] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
        For Sale
      </span>
    );
  }
  if (status === "Sold") {
    return (
      <span className="bg-[#6b7280] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
        Sold
      </span>
    );
  }
  return (
    <span className="border border-white px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#3b5bdb]">
      In Restoration
    </span>
  );
}

export function CarCard({ car }: { car: Car }) {
  return (
    <Link
      to={`/inventory/${car.id}`}
      className="group relative block bg-[#0a0d1a] transition-colors duration-300 hover:bg-[#0d1020]"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#050810]">
        <CarImage
          src={car.photos[0]}
          alt={`${car.year} ${car.make} ${car.model}`}
          className="absolute inset-0 h-full w-full scale-105 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1a]/80 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 z-10">
          <StatusBadge status={car.status} />
        </div>
        {/* Price overlaid at bottom of image */}
        <div className="absolute bottom-4 right-4 z-10 font-display text-xl uppercase tracking-wide text-white drop-shadow-lg">
          {formatPrice(car.price)}
        </div>
      </div>

      {/* Info */}
      <div className="relative px-5 pb-5 pt-4">
        <div className="flex items-center gap-3">
          <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
            {car.year}
          </span>
          <span className="h-px w-4 bg-[#3b5bdb]/40" />
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">{car.engine}</span>
        </div>
        <h3 className="font-display mt-1.5 text-2xl uppercase leading-none tracking-wide text-white sm:text-[1.6rem]">
          {car.make} {car.model}
        </h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
            {car.mileage.toLocaleString()} mi
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/30 transition-colors duration-200 group-hover:text-[#3b5bdb]">
            View →
          </span>
        </div>
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-px w-0 bg-[#3b5bdb] transition-all duration-500 group-hover:w-full" />
      </div>
    </Link>
  );
}
