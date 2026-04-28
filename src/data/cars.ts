export type CarStatus = "For Sale" | "Sold" | "In Restoration";

export type Car = {
  id: string;
  year: number;
  make: string;
  model: string;
  price: number;
  status: CarStatus;
  mileage: number;
  vin: string;
  engine: string;
  transmission: string;
  horsepower: string;
  exteriorColor: string;
  interior: string;
  description: string[];
  photos: string[];
  restorationNotes: string[];
  heroBlurb?: string;
};

export const cars: Car[] = [
  {
    id: "1972-datsun-240z",
    year: 1972,
    make: "Datsun",
    model: "240Z",
    price: 42000,
    status: "For Sale",
    mileage: 87000,
    vin: "HLS30-078412",
    engine: "2.4L L24 Inline-Six",
    transmission: "4-Speed Manual",
    horsepower: "150 HP",
    exteriorColor: "918 Orange",
    interior: "Black Vinyl",
    heroBlurb:
      "Numbers-matching Series 1. Repainted in period-correct 918 orange. Engine rebuilt 4,200 miles ago.",
    description: [
      "A clean Series 1 240Z with documented ownership from new. The chassis is rust-free, inspected on a lift, and the floors, frame rails, and rear hatch channel are original steel. Paint is a recent bare-metal respray in factory 918 orange.",
      "Mechanically sorted. The L24 was rebuilt to stock specification with new bearings, rings, valves, and a rebuilt head. SU carburetors were rebuilt by Ztherapy. Clutch and rear main were done at the same time.",
      "Drives straight and pulls cleanly through all four gears. A proper driver-quality Z-car that does not need anything to be enjoyed this weekend.",
    ],
    photos: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80",
    ],
    restorationNotes: [
      "Bare-metal respray in factory 918 orange",
      "L24 engine rebuild with documentation",
      "SU carburetors rebuilt by Ztherapy",
      "New clutch, pressure plate, rear main seal",
      "Original interior retained, carpet replaced",
    ],
  },
  {
    id: "1969-datsun-510",
    year: 1969,
    make: "Datsun",
    model: "510",
    price: 28500,
    status: "For Sale",
    mileage: 112000,
    vin: "PL510-045201",
    engine: "1.6L L16 Inline-Four",
    transmission: "4-Speed Manual",
    horsepower: "96 HP",
    exteriorColor: "Bluebird Blue",
    interior: "Black Vinyl",
    description: [
      "A tidy two-door 510 in its original Bluebird Blue. Unmolested body with straight panels and original VIN tags intact.",
      "Runs and drives as it should. Independent rear suspension is tight, steering is precise. A fine candidate for a mild BRE-style build or to keep as-is.",
      "Documented with original service records from the second owner.",
    ],
    photos: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
    ],
    restorationNotes: [
      "Mechanical refresh completed 2022",
      "New weatherstripping throughout",
      "Original paint, preserved",
    ],
  },
  {
    id: "1970-datsun-fairlady-roadster",
    year: 1970,
    make: "Datsun",
    model: "Fairlady Roadster",
    price: 35000,
    status: "For Sale",
    mileage: 64000,
    vin: "SRL311-012887",
    engine: "2.0L U20 Inline-Four",
    transmission: "5-Speed Manual",
    horsepower: "135 HP",
    exteriorColor: "Silver",
    interior: "Black Vinyl",
    description: [
      "A right-hand-drive 2000 Roadster, imported from Japan in 2019. The U20 is the hot motor — Solex carburetors, close-ratio 5-speed, and the competition package dash.",
      "Body is solid with minor cosmetic scuffing consistent with age. Top is new. Drives with the mechanical honesty you'd expect from a late-60s Japanese sports car.",
      "A rare find in the U.S. market and the best-driving of the Roadster line.",
    ],
    photos: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=80",
    ],
    restorationNotes: [
      "JDM import with documentation",
      "New convertible top installed 2021",
      "Solex carburetors rebuilt",
    ],
  },
  {
    id: "1976-datsun-280z",
    year: 1976,
    make: "Datsun",
    model: "280Z",
    price: 31000,
    status: "In Restoration",
    mileage: 93000,
    vin: "HLS30-312764",
    engine: "2.8L L28 Inline-Six",
    transmission: "4-Speed Manual",
    horsepower: "170 HP",
    exteriorColor: "Black",
    interior: "Black Vinyl",
    description: [
      "Currently mid-restoration in our shop. Stripped to bare metal, floors and frame rails inspected and spot-repaired. Ready for paint in factory black.",
      "Engine and transmission are out and being refreshed concurrently. Interior is catalogued and will be restored to stock specification.",
      "Available for purchase in current state or finished to the next owner's spec. Contact for progress photos and to discuss.",
    ],
    photos: [
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=80",
    ],
    restorationNotes: [
      "Bare-metal strip complete",
      "Engine disassembled, machining in progress",
      "Interior catalogued for reassembly",
    ],
  },
  {
    id: "1968-datsun-521",
    year: 1968,
    make: "Datsun",
    model: "521 Pickup",
    price: 22000,
    status: "Sold",
    mileage: 78000,
    vin: "521-089234",
    engine: "1.6L L16 Inline-Four",
    transmission: "4-Speed Manual",
    horsepower: "96 HP",
    exteriorColor: "Forest Green",
    interior: "Tan Vinyl",
    description: [
      "Sold to a collector in Oregon. A clean short-bed 521 in forest green with original bed wood replaced in oak.",
      "Rolling restoration completed over three years. Bed was refinished, cab was repainted, running gear refreshed.",
      "Documented in our restoration archive — inquire about similar projects.",
    ],
    photos: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
    ],
    restorationNotes: [
      "Three-year rolling restoration",
      "New oak bed wood",
      "Sold to collector 2024",
    ],
  },
  {
    id: "1969-chevrolet-camaro-ss",
    year: 1969,
    make: "Chevrolet",
    model: "Camaro SS",
    price: 58000,
    status: "For Sale",
    mileage: 54000,
    vin: "124379N612845",
    engine: "350 V8",
    transmission: "4-Speed Manual",
    horsepower: "300 HP",
    exteriorColor: "Daytona Yellow with Black Stripes",
    interior: "Black",
    description: [
      "Daytona yellow with black SS stripes. 350 small-block backed by a Muncie 4-speed and a 12-bolt rear. A proper driver.",
      "Documented with a Protect-O-Plate and dealer records. Paint is an older respray that still presents well. Interior is original and in excellent condition.",
      "Runs strong with good oil pressure, tight steering, and no surprises underneath. Ready for summer.",
    ],
    photos: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?auto=format&fit=crop&w=1600&q=80",
    ],
    restorationNotes: [
      "Original drivetrain, matching numbers",
      "Older respray, well preserved",
      "Recent brake and fuel system refresh",
    ],
  },
  {
    id: "1967-ford-mustang-fastback",
    year: 1967,
    make: "Ford",
    model: "Mustang Fastback",
    price: 65000,
    status: "For Sale",
    mileage: 71000,
    vin: "7R02A145678",
    engine: "289 V8",
    transmission: "4-Speed Manual",
    horsepower: "271 HP",
    exteriorColor: "Highland Green",
    interior: "Black",
    description: [
      "A 1967 GT Fastback in Highland Green — the Bullitt color, chosen deliberately. 289 V8 with a toploader 4-speed and a 9-inch rear.",
      "Full rotisserie restoration completed in 2021. Show-quality paint, new interior to factory specification, and a fully rebuilt drivetrain.",
      "Finished to a standard that rewards close inspection. Photographs do not do it justice — an in-person viewing is encouraged.",
    ],
    photos: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80",
    ],
    restorationNotes: [
      "2021 rotisserie restoration",
      "Highland Green respray to concours standard",
      "Drivetrain fully rebuilt with documentation",
    ],
  },
];

export const getCarById = (id: string) => cars.find((c) => c.id === id);
export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
export const formatMiles = (n: number) =>
  new Intl.NumberFormat("en-US").format(n);
