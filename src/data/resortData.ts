export interface Suite {
  id: string;
  name: string;
  category: string;
  tagline: string;
  pricePerNight: number;
  capacity: string;
  sizeSqFt: number;
  bedType: string;
  view: string;
  description: string;
  features: string[];
  image: string;
  gallery: string[];
}

export interface Hotspot {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  x: number;
  y: number;
  category: "view" | "interior" | "deck";
}

export interface Moment {
  id: string;
  title: string;
  caption: string;
  timeTag: string;
  location: string;
  image: string;
}

export interface Amenity {
  icon: string;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

export const RESORT_CONTACT = {
  name: "Mia's Beach Resort Patnem",
  shortName: "Mia's Beach Resort",
  subTitle: "Beachfront Cottages & Patnem Bay Living",
  tagline: "Steps from Patnem Beach Sands, Handcrafted Wooden Cottages, Beachfront Cafe Dining & Bohemian Chill in Canacona, South Goa",
  phone: "+91 98221 23456",
  phoneRaw: "+919822123456",
  phoneAlt: "+91 832 264 4567",
  email: "stay@miaspatnem.com",
  website: "https://miaspatnem.com",
  address: "Near Home Patnem, Patnem Beach, Canacona, South Goa 403702",
  landmark: "Direct beachfront / 30m to Patnem Beach sands, near Home Patnem & Colomb Bay, 3 km to Canacona Station",
  googleMapsQuery: "Mia's+beach+resort+Patnem+Goa",
  googleMapsUrl: "https://www.google.com/maps/place/Mia's+beach+resort/@14.997885,74.0336319,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbe5b0c6732f979:0xfba06bbed767527c!5m2!4m1!1i2!8m2!3d14.997885!4d74.0336319!16s%2Fg%2F11t30h99pm?entry=ttu",
  googleMapsEmbed: "https://maps.google.com/maps?q=14.997885,74.0336319&t=&z=16&ie=UTF8&iwloc=&output=embed",
  timings: "24/7 Front Desk & Host Care · Beachfront Cafe & Shack 7:30 AM – 11:30 PM",
  distanceHighlights: "30m to Patnem Beach sand | Near Colomb Bay & Palolem (~1.5 km) | 3 km to Canacona Station",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "sea-facing-beach-cottage",
    name: "Sea-Facing Beach Cottage",
    category: "Signature Oceanfront Living",
    tagline: "Frontline wooden cottage with private porch commanding sweeping views across Patnem bay",
    pricePerNight: 3800,
    capacity: "2 Guests",
    sizeSqFt: 340,
    bedType: "Plush King Size Bed",
    view: "Patnem Shoreline & Arabian Sea Sunset",
    description:
      "Wake up to the soothing sound of rolling waves in our signature sea-facing cottage. Featuring warm timber walls, cooling split air-conditioning, comfortable king bed, private covered porch with loungers, attached modern bathroom with 24/7 hot shower, and effortless steps right onto Patnem Beach.",
    features: [
      "Frontline ocean vantage—step directly onto Patnem sand",
      "Private covered sit-out porch with ocean-view deck loungers",
      "Silent split air-conditioning & timber ceiling fan",
      "Attached private washroom with pressurized hot showers",
      "Free high-speed Wi-Fi and beach shack room service",
      "Assistance with boat trips, kayak rentals & yoga classes",
    ],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "deluxe-wooden-ac-cottage",
    name: "Deluxe Wooden AC Cottage",
    category: "Bohemian Tropical Haven",
    tagline: "Spacious wooden beach cottage tucked in a quiet coconut palm garden steps from the sand",
    pricePerNight: 3200,
    capacity: "2–3 Guests",
    sizeSqFt: 320,
    bedType: "Plush King Size Bed",
    view: "Tropical Coconut Palm Courtyard",
    description:
      "Set in the tranquil coconut grove just behind the beachfront line. Designed for travelers seeking authentic coastal relaxation with modern conveniences—featuring wooden interiors, cooling split air-conditioning, attached modern bathroom with hot water, and a cozy private veranda.",
    features: [
      "Nestled in a peaceful coconut garden 30 seconds from the water",
      "Handcrafted wooden construction with private shaded sit-out",
      "Split air-conditioner & silent ceiling fan for sound sleep",
      "Private attached bathroom with continuous hot water supply",
      "High-speed wireless internet across cottages and property",
      "Close to Patnem's popular cafes, bakeries, and yoga shalas",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "cozy-garden-beach-hut",
    name: "Cozy Garden Beach Hut",
    category: "Authentic Patnem Living",
    tagline: "Charming rustic beach hut offering laid-back South Goa comfort at attractive tariffs",
    pricePerNight: 2400,
    capacity: "2 Guests",
    sizeSqFt: 280,
    bedType: "Comfort Double Bed",
    view: "Lush Garden & Sand Pathway",
    description:
      "Experience classic bohemian Patnem living in our comfortable garden hut. Enjoy natural wooden touches, double bedding with clean linens, fan/AC cooling, en-suite bathroom with hot shower, and a private shaded porch to soak up the tropical sea air.",
    features: [
      "Charming rustic wooden construction steps from Patnem Beach",
      "Double bed with sanitized linens and fresh towels",
      "Attached private washroom with hot & cold water shower",
      "Private veranda seating overlooking the sandy garden path",
      "Complimentary high-speed Wi-Fi across the property",
      "Daily housekeeping & friendly 24-hour reception service",
    ],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "standard-backpacker-studio",
    name: "Standard Backpacker Studio",
    category: "Pocket-Friendly Coastal Stay",
    tagline: "Comfortable solid-structure room ideal for solo travelers, couples & weekend explorers",
    pricePerNight: 1800,
    capacity: "2 Guests",
    sizeSqFt: 240,
    bedType: "Comfort Double Bed",
    view: "Garden Courtyard Path",
    description:
      "A clean, budget-friendly accommodation choice right at Patnem Beach. Features a comfortable double bed, ceiling fan/AC cooling, private attached bathroom with hot shower, free Wi-Fi, and instant access to Patnem's relaxed beachfront cafes and yoga centers.",
    features: [
      "Budget-friendly stay option just 30 meters from Patnem Beach",
      "Comfort double bedding with clean linens and pillows",
      "Attached private washroom with hot & cold shower",
      "Fast wireless internet for remote workers & digital nomads",
      "3 km to Canacona Railway Station with easy taxi/auto access",
      "Scooter hire, airport transfer, and dolphin trip assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export const RESORT_HOTSPOTS: Hotspot[] = [
  {
    id: "patnem-beach-sand",
    title: "Patnem Beach Shore (30m)",
    subtitle: "30-Sec Walk · Tranquil Crescent & Calm Waters",
    description:
      "Step straight onto the golden sands of Patnem Beach. Enjoy peaceful swimming in sheltered waters, sunset walks, and a laid-back bohemian vibe.",
    x: 22,
    y: 35,
    category: "view",
  },
  {
    id: "mias-beach-shack",
    title: "Mia's Beach Shack & Cafe",
    subtitle: "Fresh Goan Seafood · Wood-Fired Pizzas · Sunset Cocktails",
    description:
      "Feast on freshly grilled pomfret, kingfish rava fry, authentic Goan fish curry, wood-fired pizzas, and chilled beers right by the sand.",
    x: 65,
    y: 50,
    category: "interior",
  },
  {
    id: "colomb-bay-walk",
    title: "Colomb Bay & Coastal Trail",
    subtitle: "Short Stroll · Secluded Rocky Cove & Headland",
    description:
      "Explore the scenic coastal path linking Patnem Beach to Colomb Bay and Palolem Beach, dotted with bohemian cafes and sunset viewpoints.",
    x: 48,
    y: 65,
    category: "deck",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Tangerine Sunsets from Beachfront Porch",
    caption: "Watch fiery Arabian Sea sunsets over the tranquil Patnem crescent directly from your private cottage veranda.",
    timeTag: "06:15 PM",
    location: "Sea-Facing Cottage Veranda",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Fresh Seafood & Candlelit Beach Dining",
    caption: "Savor fresh catch tandoori kingfish, butter garlic prawns, and authentic Goan curry with sand between your toes.",
    timeTag: "08:00 PM",
    location: "Mia's Beach Shack & Cafe",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Morning Oceanfront Breakfast & Coffee",
    caption: "Start your day with banana pancakes, masala omelettes, tropical fruit bowls, and freshly brewed coffee by the waves.",
    timeTag: "08:30 AM",
    location: "Beachside Dining Deck",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Coastal Walk to Colomb Bay & Palolem",
    caption: "Take a scenic morning walk along the rocky headland connecting Patnem to charming Colomb Bay and Palolem Beach.",
    timeTag: "10:30 AM",
    location: "Patnem Coastal Trail",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Tropical Cottage Afternoon Siesta",
    caption: "Unwind on your private wooden veranda surrounded by lush coconut palms and gentle sea breezes.",
    timeTag: "03:30 PM",
    location: "Deluxe Wooden Veranda",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Starlit Acoustic Nights by the Sea",
    caption: "Experience Patnem's serene evening vibe with acoustic tunes, chilled drinks, and the gentle whisper of the tide.",
    timeTag: "09:30 PM",
    location: "Mia's Shoreline Lounge",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Waves",
    title: "30m to Patnem Beach Sand",
    description: "Barely 30 seconds walk directly onto the peaceful golden sands of Patnem Beach.",
  },
  {
    icon: "Coffee",
    title: "Mia's Beach Shack & Cafe",
    description: "Serving fresh Goan seafood, wood-fired pizzas, continental breakfast, and cocktails.",
  },
  {
    icon: "Mountain",
    title: "Handcrafted Wooden Beach Cottages",
    description: "Authentic timber cottages with private porches, sea views, and lush palm grove surrounds.",
  },
  {
    icon: "ShieldCheck",
    title: "Split A/C & 24/7 Hot Water",
    description: "Cool air-conditioned rooms paired with private modern bathrooms and pressurized hot showers.",
  },
  {
    icon: "Gamepad2",
    title: "Free High-Speed Wi-Fi",
    description: "Complimentary wireless internet available across all cottages and the beachfront dining shack.",
  },
  {
    icon: "Car",
    title: "Scooter Hire & Airport Transfers",
    description: "Easy scooter rentals, Canacona railway station pickups, and Goa airport taxi assistance.",
  },
  {
    icon: "Sparkles",
    title: "Beach Sunbeds & Bohemian Vibe",
    description: "Complimentary sun loungers right on the sand for resort guests to relax between swims.",
  },
  {
    icon: "Flame",
    title: "24/7 Front Desk & Host Care",
    description: "Round-the-clock host assistance, housekeeping, luggage storage, and tour bookings.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Sophie & Daniel Bennett",
    location: "London, United Kingdom",
    rating: 5,
    comment:
      "Mia's Beach Resort is our favorite quiet haven in South Goa! Located right on Patnem Beach, away from the massive crowds. Our sea-facing cottage was clean, comfortable, and right by the water. Great food at the shack too!",
    date: "November 2026",
  },
  {
    id: "r2",
    author: "Aditya & Neha Sharma",
    location: "Pune, Maharashtra",
    rating: 5,
    comment:
      "The best relaxed bohemian atmosphere. Great breakfast at the shack, fast Wi-Fi for remote work, and friendly hosts who helped arrange a scooter rental. Canacona station is barely 7 minutes away.",
    date: "October 2026",
  },
  {
    id: "r3",
    author: "Liam O'Connor",
    location: "Dublin, Ireland",
    rating: 4,
    comment:
      "Authentic wooden cottage, great hot water pressure, and literally 30 seconds to the sand. Patnem is so peaceful and clean compared to other beaches. Delicious Goan prawn curry!",
    date: "September 2026",
  },
  {
    id: "r4",
    author: "Camille Dupont",
    location: "Lyon, France",
    rating: 5,
    comment:
      "Loved staying at Mia's! Sleeping to the sound of ocean waves and waking up to fresh papaya juice and coffee on the veranda. Easy walk to Colomb Bay and yoga studios.",
    date: "August 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "coastal",
    name: "Patnem Tides",
    tagline: "Serene Patnem crescent & gentle Arabian Sea breeze",
    bg: "linear-gradient(160deg, #f0f7f9 0%, #d4e9ee 55%, #1b6370 100%)",
    accent: "#165864",
    colorScheme: "mist",
  },
  {
    key: "sunset",
    name: "Mia's Twilight",
    tagline: "Warm amber skies & candlelit beach shack tables on the sand",
    bg: "linear-gradient(160deg, #faf3ec 0%, #f1d5be 55%, #b56232 100%)",
    accent: "#b56232",
    colorScheme: "velora",
  },
  {
    key: "night",
    name: "Starlit Patnem",
    tagline: "Quiet ocean murmurs beneath starry South Goa skies",
    bg: "linear-gradient(160deg, #0a111a 0%, #111d2e 55%, #050b11 100%)",
    accent: "#38bdf8",
    colorScheme: "night",
  },
] as const;
