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
  name: "ROYAL CASTLE RESORT Palolem",
  shortName: "Royal Castle Palolem",
  subTitle: "Sea-View Balcony Rooms & Beach Cottages",
  tagline: "Steps from Palolem Beach Sands, Sea-View Balconies, Cozy Cottages & Multi-Cuisine Dining in Canacona, South Goa",
  phone: "+91 98221 23456",
  phoneRaw: "+919822123456",
  phoneAlt: "+91 832 264 3456",
  email: "stay@royalcastlepalolem.com",
  website: "https://royalcastlepalolem.com",
  address: "Palolem Street, Mohanbagh, Palolem Beach, Canacona, South Goa 403702",
  landmark: "Steps onto Palolem Beach (50m), near Palolem Blue Lagoon & Neptune Point, 2 km to Canacona Station",
  googleMapsQuery: "ROYAL+CASTLE+RESORT+Palolem+Goa",
  googleMapsUrl: "https://www.google.com/maps/place/ROYAL+CASTLE+RESORT+Palolem/@15.0095419,74.0244251,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbe45ca4cf02eb1:0xd35e940962b5b096!5m2!4m1!1i2!8m2!3d15.0095419!4d74.0244251!16s%2Fg%2F11qplhj0tx?entry=ttu",
  googleMapsEmbed: "https://maps.google.com/maps?q=15.0095419,74.0244251&t=&z=16&ie=UTF8&iwloc=&output=embed",
  timings: "24/7 Front Desk & Concierge · Multi-Cuisine Restaurant & Bar 7:30 AM – 11:30 PM",
  distanceHighlights: "50m to Palolem Beach sand | 2 km to Canacona Station | 5 mins to Blue Lagoon & Monkey Island",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "deluxe-sea-view-balcony-room",
    name: "Deluxe Sea-View Balcony Room",
    category: "Signature Oceanfront Vantage",
    tagline: "Air-conditioned upper-floor room with private balcony commanding sweeping Palolem crescent views",
    pricePerNight: 4200,
    capacity: "2 Guests",
    sizeSqFt: 340,
    bedType: "Plush King Size Bed",
    view: "Palolem Beach Crescent & Arabian Sea Sunset",
    description:
      "Wake up to stunning aerial views of Palolem's famous turquoise crescent and swaying palm canopy from your private balcony. Thoughtfully furnished with silent split air-conditioning, plush king bedding, en-suite bathroom with 24/7 hot water, free Wi-Fi, and instant step-down access to the beach sand.",
    features: [
      "Private furnished balcony with scenic sea and sunset vistas",
      "Only 50 meters (1-minute walk) to Palolem Beach sands",
      "Silent split air-conditioning & personalized climate control",
      "Modern en-suite bath with pressurized hot showers & toiletries",
      "High-speed Wi-Fi and in-room dining from our restaurant",
      "Direct assistance for kayak rentals, boat trips & scooter hire",
    ],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "premium-king-beach-cottage",
    name: "Premium King Beach Cottage",
    category: "Beachside Cottage Living",
    tagline: "Spacious wooden coastal cottage with private sit-out porch steps from Palolem shore",
    pricePerNight: 4800,
    capacity: "2–3 Guests",
    sizeSqFt: 380,
    bedType: "Plush King Size Bed",
    view: "Tropical Palm Garden & Shore Breeze",
    description:
      "Designed for travelers who love the authentic charm of coastal wood architecture paired with modern boutique comforts. Offers a wide covered porch, cooling split air-conditioning, attached modern bathroom with hot water, and a relaxed garden ambiance moments from the water.",
    features: [
      "Spacious covered sit-out veranda overlooking palm gardens",
      "Handcrafted wooden construction with excellent natural insulation",
      "Split air-conditioning, timber ceiling fan & fresh linens",
      "Attached clean bathroom with 24/7 hot water supply",
      "Room service from Royal Castle's multi-cuisine restaurant",
      "Effortless access to Palolem Blue Lagoon and beach cafes",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "deluxe-double-garden-cottage",
    name: "Deluxe Double Garden Cottage",
    category: "Tranquil Garden Retreat",
    tagline: "Comfortable air-conditioned double cottage nestled in quiet Mohanbagh greenery",
    pricePerNight: 3400,
    capacity: "2 Guests",
    sizeSqFt: 300,
    bedType: "Comfort Double Bed",
    view: "Lush Palm Garden Courtyard",
    description:
      "A peaceful haven set just behind the active beachfront row. Enjoy serene mornings on your garden porch, cool air-conditioned sleeping quarters, attached modern bath with hot water, and complimentary high-speed Wi-Fi, all within a 1-minute walk of the beach.",
    features: [
      "Nestled inside a quiet tropical garden courtyard in Mohanbagh",
      "Split air-conditioner & comfortable double bed with fresh linens",
      "Attached private washroom with hot & cold water shower",
      "Free high-speed Wi-Fi suitable for digital nomads & vacationers",
      "1-minute walk to Palolem beach shacks and sunset viewpoints",
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
    id: "standard-homestay-room",
    name: "Standard Homestay Room",
    category: "Pocket-Friendly Coastal Stay",
    tagline: "Comfortable solid-structure room ideal for solo travelers, couples & weekend explorers",
    pricePerNight: 2600,
    capacity: "2 Guests",
    sizeSqFt: 260,
    bedType: "Comfort Double Bed",
    view: "Courtyard & Garden Path",
    description:
      "An affordable and cozy accommodation choice in Palolem. Features solid walls for a quiet night's sleep, ceiling fan or A/C cooling, attached bathroom with hot water, and instant proximity to the beach, cafes, and local shopping street.",
    features: [
      "Budget-friendly stay option just steps from Palolem Beach",
      "Comfort double bedding with sanitized linens and pillows",
      "Private bathroom with hot and cold shower facilities",
      "High-speed wireless internet across the room and courtyard",
      "2 km to Canacona Railway Station with easy taxi/auto access",
      "Tour desk assistance for boat trips, scuba & bike rentals",
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
    id: "palolem-beach-shore",
    title: "Palolem Beach Shoreline (50m)",
    subtitle: "1-Min Walk · Sheltered Crescent",
    description:
      "Walk just 50 meters down the sandy path directly onto Palolem Beach. Enjoy calm shallow waters for swimming, paddleboarding, and evening sunset strolls.",
    x: 22,
    y: 35,
    category: "view",
  },
  {
    id: "royal-castle-restaurant",
    title: "Royal Castle Multi-Cuisine Restaurant & Bar",
    subtitle: "Goan Seafood · Tandoor · Sunset Cocktails",
    description:
      "Feast on freshly caught Arabian Sea fish curries, sizzling tandoori chicken, continental breakfasts, and chilled beers in our breezy dining lounge.",
    x: 65,
    y: 50,
    category: "interior",
  },
  {
    id: "neptune-blue-lagoon",
    title: "Palolem Blue Lagoon & Neptune Point",
    subtitle: "Short Stroll · Scenic Headland",
    description:
      "Explore the picturesque northern headland of Palolem Beach, home to the scenic Blue Lagoon, Monkey Island views, and sunset viewpoints.",
    x: 48,
    y: 65,
    category: "deck",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Tangerine Sunsets from Sea-View Balconies",
    caption: "Watch fiery Arabian Sea sunsets over the Palolem crescent directly from your private room balcony.",
    timeTag: "06:15 PM",
    location: "Deluxe Sea-View Balcony",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Fresh Seafood & Coastal Grills",
    caption: "Indulge in fresh catch tandoori kingfish, butter garlic prawns, and Goan curry at our restaurant.",
    timeTag: "08:00 PM",
    location: "Royal Castle Restaurant",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Morning Sea-Breeze Breakfast",
    caption: "Start your day with fluffy pancakes, fresh fruit juices, and brewed coffee on the open-air garden deck.",
    timeTag: "08:30 AM",
    location: "Garden Deck & Pavilion",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Kayaking to Butterfly Beach",
    caption: "Hop on a morning kayak or dolphin-watching boat from Palolem Beach to discover secluded coves.",
    timeTag: "10:00 AM",
    location: "Palolem Beach Waters",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Relaxed Cottage Living in the Palms",
    caption: "Unwind on your private wooden veranda surrounded by lush tropical greenery and coastal breeze.",
    timeTag: "03:30 PM",
    location: "King Cottage Porch",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Starlit Evenings by the Beach",
    caption: "Experience Palolem's famous bohemian evening vibes with chilled drinks and acoustic music.",
    timeTag: "09:30 PM",
    location: "Royal Castle Lounge Bar",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Waves",
    title: "50m to Palolem Beach Sand",
    description: "Barely 1-minute walk directly onto the golden sands of iconic Palolem Beach.",
  },
  {
    icon: "Coffee",
    title: "Multi-Cuisine Restaurant & Bar",
    description: "Serving fresh Goan seafood, North Indian tandoor, Chinese specials, and cocktails.",
  },
  {
    icon: "Mountain",
    title: "Sea-View Balconies & Garden Cottages",
    description: "Elevated rooms with ocean vistas and ground cottages with private furnished verandas.",
  },
  {
    icon: "ShieldCheck",
    title: "Split A/C & 24/7 Hot Water",
    description: "Comfortable air-conditioned rooms with modern en-suite bathrooms and hot showers.",
  },
  {
    icon: "Gamepad2",
    title: "Free High-Speed Wi-Fi",
    description: "Complimentary wireless internet available across all rooms, cottages, and restaurant.",
  },
  {
    icon: "Car",
    title: "Airport Transfers & Scooter Hire",
    description: "Convenient rental bike arrangements, Canacona station pickups, and airport taxi services.",
  },
  {
    icon: "Sparkles",
    title: "Sun Deck & Garden Lounge",
    description: "Outdoor patio furniture and palm-shaded garden spaces for relaxing between beach dips.",
  },
  {
    icon: "Flame",
    title: "24/7 Front Desk & Care",
    description: "Round-the-clock reception, luggage assistance, daily housekeeping, and tour booking desk.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Arjun & Priyanka Rao",
    location: "Bengaluru, Karnataka",
    rating: 5,
    comment:
      "Royal Castle Resort has the perfect location in Palolem! Our Deluxe Sea-View Room had a private balcony looking right at the ocean. Just 50 meters to the beach, great food at the restaurant, and very warm staff. Canacona station is barely 5 mins away.",
    date: "November 2026",
  },
  {
    id: "r2",
    author: "Sebastian & Laura Müller",
    location: "Berlin, Germany",
    rating: 5,
    comment:
      "We stayed in the Premium King Beach Cottage. Very comfortable bed, strong A/C, and loved sitting on the veranda with morning coffee. The beach is literally right outside the gate. Excellent value for South Goa!",
    date: "October 2026",
  },
  {
    id: "r3",
    author: "Kunal & Tanvi Sen",
    location: "Kolkata, West Bengal",
    rating: 4,
    comment:
      "Super close to Palolem beach and the Blue Lagoon area. The restaurant serves delicious Goan fish curry and tandoori prawns. Room was clean with good hot water pressure.",
    date: "September 2026",
  },
  {
    id: "r4",
    author: "Zoe Martinez",
    location: "Madrid, Spain",
    rating: 5,
    comment:
      "Lovely stay in Palolem! Peaceful garden setting, nice sea breeze, fast Wi-Fi, and the staff helped arrange a kayak to Butterfly Beach. Would definitely return!",
    date: "August 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "coastal",
    name: "Palolem Breeze",
    tagline: "Sunlit Palolem crescent & gentle Arabian Sea tides",
    bg: "linear-gradient(160deg, #f0f7f9 0%, #d4e9ee 55%, #1b6370 100%)",
    accent: "#165864",
    colorScheme: "mist",
  },
  {
    key: "sunset",
    name: "Castle Sunset",
    tagline: "Crimson horizons & twilight drinks from your sea-view balcony",
    bg: "linear-gradient(160deg, #faf3ec 0%, #f1d5be 55%, #b56232 100%)",
    accent: "#b56232",
    colorScheme: "velora",
  },
  {
    key: "night",
    name: "Starlit Palm",
    tagline: "Gentle ocean rustles beneath moonlit South Goa skies",
    bg: "linear-gradient(160deg, #0a111a 0%, #111d2e 55%, #050b11 100%)",
    accent: "#38bdf8",
    colorScheme: "night",
  },
] as const;
