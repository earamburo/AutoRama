import { cars, formatPrice } from "@/data/cars";

export const HERO_CAR = cars.find((c) => c.id === "1972-datsun-240z")!;

export const HERO_STATS = [
  { label: "Base Price", value: formatPrice(HERO_CAR.price) },
  { label: "Power", value: HERO_CAR.horsepower },
  { label: "Engine", value: HERO_CAR.engine.split(" ").slice(0, 2).join(" ") },
  { label: "Trans", value: "4-SPD MT" },
  { label: "Mileage", value: HERO_CAR.mileage.toLocaleString() },
];
