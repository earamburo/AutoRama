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
      className="group relative block bg-[#0a0a0f] transition-colors hover:bg-[#101019]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-black">
        <CarImage
          src={car.photos[0]}
          alt={`${car.year} ${car.make} ${car.model}`}
          className="absolute inset-0 h-full w-full scale-110 object-cover transition-transform duration-700 group-hover:scale-[1.18]"
        />
        <div className="absolute left-4 top-4 z-10">
          <StatusBadge status={car.status} />
        </div>
      </div>
      <div className="relative p-5">
        <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#3b5bdb]">
          {car.year}
        </div>
        <h3 className="font-display mt-1 text-2xl uppercase leading-none tracking-wide text-white sm:text-3xl">
          {car.make} {car.model}
        </h3>
        <div className="mt-4 flex items-end justify-between">
          <span className="text-lg font-semibold text-white">{formatPrice(car.price)}</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 transition-colors group-hover:text-[#4c6ef5]">
            View →
          </span>
        </div>
        <div className="absolute bottom-0 left-0 h-px w-0 bg-[#3b5bdb] transition-all duration-500 group-hover:w-full" />
      </div>
    </Link>
  );
}
