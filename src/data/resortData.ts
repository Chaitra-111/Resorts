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
  name: "Citylite Lodge",
  shortName: "Citylite",
  subTitle: "Lodging & Transit Stays",
  tagline: "Affordable Comfort & Central Transit Convenience in Nizamabad",
  phone: "+91 96422 06868",
  phoneRaw: "+919642206868",
  phoneAlt: "096422 06868",
  email: "contact@citylitelodge.com",
  website: "https://citylitelodge.com",
  address: "H.No. 5-7-223, Beside Fire Station, Jawahar Road / Tilak Garden Road, Yellamma Gutta, Khaleelwadi, Nizamabad, Telangana 503180",
  landmark: "Beside Fire Station & Tilak Garden Road, 600m from Nizamabad Railway Station",
  googleMapsQuery: "Citylite+lodge+Nizamabad",
  googleMapsUrl: "https://www.google.com/maps/place/Citylite+lodge/@18.6764427,78.1037811,17z/data=!3m1!4b1!4m9!3m8!1s0x3bcddb9fa1ec52f5:0x24d307aff85af3e3!5m2!4m1!1i2!8m2!3d18.6764427!4d78.1037811!16s%2Fg%2F11k5820bjl?entry=ttu",
  googleMapsEmbed: "https://maps.google.com/maps?q=Citylite+lodge+Nizamabad&t=&z=16&ie=UTF8&iwloc=&output=embed",
  justdialLink: "https://www.justdial.com/Nizamabad/City-Lite-Lodge-Beside-Fire-Station-Jawahar-Road/9999PX846-X846-191015190425-S7L8_BZDET",
  timings: "24/7 Front Desk · Flexible Check-in & 24h Check-out Assistance",
  distanceHighlights: "600m from Railway Station (7 min walk) | 1.2 km from Bus Stand | In Khaleelwadi",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "deluxe-ac-room",
    name: "Deluxe A/C Room",
    category: "Air-Conditioned Comfort",
    tagline: "Cool, peaceful comfort with attached modern bath and high-speed Wi-Fi",
    pricePerNight: 1400,
    capacity: "2 Guests",
    sizeSqFt: 250,
    bedType: "Comfortable King Bed / Twin Beds",
    view: "Khaleelwadi City View",
    description:
      "A peaceful, air-conditioned retreat tailored for business travelers, couples, and transit guests. Features high-speed Wi-Fi, cable TV, freshly laundered linens, and an attached bathroom with 24-hour hot water.",
    features: [
      "Silent split air-conditioning & climate control",
      "High-speed wireless internet connectivity",
      "Flat-screen LED TV with satellite channels",
      "Attached private bath with 24-hour hot water geyser",
      "Clean sanitized linens and daily towel change",
      "Intercom phone & 24/7 room service assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "standard-non-ac-room",
    name: "Standard Non-A/C Room",
    category: "Budget Friendly",
    tagline: "Pocket-friendly lodging with essential amenities for smart travelers",
    pricePerNight: 900,
    capacity: "2 Guests",
    sizeSqFt: 210,
    bedType: "Plush Double Bed",
    view: "Courtyard & Tilak Garden Lane",
    description:
      "Designed for cost-conscious travelers, solo explorers, and pilgrims seeking clean, dependable overnight accommodation. Outfitted with high-speed ceiling fan, cable television, and dedicated work desk.",
    features: [
      "High-speed ceiling fan ventilation",
      "Comfortable double mattress with clean bedsheets",
      "Television with regional and national channels",
      "Attached clean private bathroom with hot water",
      "Complimentary high-speed Wi-Fi access",
      "24/7 front desk check-in and assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "executive-family-ac",
    name: "Executive Family A/C Room",
    category: "Family & Groups",
    tagline: "Spacious four-guest room with dual beds and generous living space",
    pricePerNight: 2200,
    capacity: "4 Guests",
    sizeSqFt: 400,
    bedType: "Two Double Beds + Seating Divan",
    view: "Jawahar Road Street View",
    description:
      "Spacious and accommodating for visiting families, wedding groups, and teams. Offers two comfortable double beds, powerful split AC, multiple charging points, and quick walking access to Nizamabad's best dining.",
    features: [
      "Two spacious double beds with orthopaedic support",
      "Split air conditioner & dual ceiling fans",
      "Spacious luggage rack and wardrobe",
      "Dual washroom vanity conveniences",
      "24/7 in-room tea, coffee & food delivery support",
      "Sound-damped windows for quiet night rest",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "triple-sharing-room",
    name: "Triple Sharing Transit Room",
    category: "Transit & Friends",
    tagline: "Ideal group arrangement for railway passengers and wedding attendees",
    pricePerNight: 1600,
    capacity: "3 Guests",
    sizeSqFt: 320,
    bedType: "Three Single Beds or King + Single",
    view: "Station Road Skyline",
    description:
      "The perfect economic choice for groups of 3 friends, colleagues, or wedding entourages. Offers individual sleeping spaces, dedicated lockers, high-speed Wi-Fi, and quick 7-minute walking proximity to the railway station.",
    features: [
      "Three separate comfortable beds with individual reading lights",
      "Air conditioning or natural breeze ventilation options",
      "High-speed fiber Wi-Fi throughout the stay",
      "Attached bathroom with instantaneous hot water",
      "Luggage storage and safe parcel deposit",
      "Flexible early check-in and luggage drop service",
    ],
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export const RESORT_HOTSPOTS: Hotspot[] = [
  {
    id: "station-access",
    title: "Station-Side Transit Hub",
    subtitle: "600m from Nizamabad Junction",
    description:
      "Merely a 7-minute walk or 2-minute auto ride from Nizamabad Railway Station, making arrivals and early-morning departures seamless.",
    x: 28,
    y: 35,
    category: "deck",
  },
  {
    id: "khaleelwadi-center",
    title: "Khaleelwadi Commercial Hub",
    subtitle: "Heart of Nizamabad",
    description:
      "Surrounded by popular Andhra restaurants, local biryani houses, medical centers, textile showrooms, and theaters along Jawahar Road.",
    x: 62,
    y: 58,
    category: "interior",
  },
  {
    id: "secure-stay",
    title: "24/7 Front Desk & Parking",
    subtitle: "Peace of Mind",
    description:
      "Round-the-clock caretaker support, secure parking on-site, continuous CCTV surveillance, and 24-hour hot water in all rooms.",
    x: 78,
    y: 25,
    category: "view",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Effortless Railway Arrival",
    caption: "Arrive at Nizamabad Junction and reach your room within minutes without long commutes.",
    timeTag: "06:30 AM",
    location: "Railway Station Corridor (600m)",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Clean, Air-Conditioned Comfort",
    caption: "Cool and peaceful guest rooms offering restful beds and spotless attached bathrooms.",
    timeTag: "01:00 PM",
    location: "Deluxe AC Guest Rooms",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Khaleelwadi Dining & Food Trails",
    caption: "Explore famous regional biryanis, tiffin centers, and Irani chai shops right on Jawahar Road.",
    timeTag: "07:30 PM",
    location: "Jawahar Road Food Hub",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Tilak Garden & Heritage Walks",
    caption: "Located right beside Tilak Garden for refreshing morning strolls and nearby Quilla visits.",
    timeTag: "07:00 AM",
    location: "Beside Tilak Garden Road",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Group Stays & Wedding Packages",
    caption: "Spacious multi-bed rooms accommodating families and wedding entourages under one roof.",
    timeTag: "04:00 PM",
    location: "Executive Family Wing",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "24/7 Front Desk Assistance",
    caption: "Friendly caretaking staff ready to help with luggage, directions, and flexible check-out.",
    timeTag: "11:00 PM",
    location: "Citylite Front Office",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Mountain",
    title: "Station-Side Proximity",
    description: "Located just 600 meters from Nizamabad Railway Station — a quick 7-minute walk.",
  },
  {
    icon: "Waves",
    title: "Deluxe AC & Non-AC Rooms",
    description: "Flexible room categories with silent air-conditioning and comfortable modern bedding.",
  },
  {
    icon: "ShieldCheck",
    title: "24/7 Front Desk & Security",
    description: "Round-the-clock check-in support, active CCTV security monitoring, and secure on-site parking.",
  },
  {
    icon: "Coffee",
    title: "24-Hour Hot & Cold Water",
    description: "Dedicated water heaters in every attached bathroom for refreshing showers at any hour.",
  },
  {
    icon: "Gamepad2",
    title: "High-Speed Wi-Fi",
    description: "Free high-speed fiber internet connectivity across all rooms and public corridors.",
  },
  {
    icon: "Sparkles",
    title: "Daily Housekeeping",
    description: "Impeccably clean bedsheets, sanitized bathrooms, and prompt room refresh on request.",
  },
  {
    icon: "UtensilsCrossed",
    title: "Food Delivery Support",
    description: "Easy delivery assistance from top regional restaurants and Hyderabadi biryani centers.",
  },
  {
    icon: "Flame",
    title: "Group Booking Discounts",
    description: "Budget-friendly bulk rates for wedding parties, pilgrim tours, and corporate groups.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "K. Murali Krishna",
    location: "Hyderabad, Telangana",
    rating: 5,
    comment:
      "Citylite Lodge is the most convenient budget stay in Nizamabad! It is literally 7 minutes walk from the railway station. The Deluxe AC room was very clean, hot water was instantaneous, and the staff was extremely courteous.",
    date: "February 2026",
  },
  {
    id: "r2",
    author: "Suresh Babu",
    location: "Nanded, Maharashtra",
    rating: 5,
    comment:
      "Stayed here during a medical visit in Khaleelwadi. Great central location right beside the fire station. Peaceful rooms, fast Wi-Fi, and very affordable tariffs. Highly recommended for short stays.",
    date: "January 2026",
  },
  {
    id: "r3",
    author: "Prasad Rao",
    location: "Warangal, Telangana",
    rating: 5,
    comment:
      "We booked 5 rooms for a family marriage function in Nizamabad. Excellent service by the lodge management. They accommodated early morning check-in and helped with all luggage smoothly.",
    date: "March 2026",
  },
  {
    id: "r4",
    author: "Anand Verma",
    location: "Secunderabad, Telangana",
    rating: 5,
    comment:
      "Perfect value for money. Neat beds, clean bathroom, working TV, and parking space for cars. Walkable to Jawahar Road food spots and Tilak Garden.",
    date: "April 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "transit",
    name: "Daylight Transit",
    tagline: "Bright, welcoming comfort & station-side convenience",
    bg: "linear-gradient(160deg, #faf5ec 0%, #eed0b7 55%, #a5582d 100%)",
    accent: "#a5582d",
    colorScheme: "velora",
  },
  {
    key: "morning",
    name: "Crisp Breeze",
    tagline: "Cool morning solace beside Tilak Garden",
    bg: "linear-gradient(160deg, #edf3f5 0%, #d4e0e5 55%, #6b8788 100%)",
    accent: "#3d6f7c",
    colorScheme: "mist",
  },
  {
    key: "night",
    name: "City Lights",
    tagline: "Quiet night rest in the heart of Khaleelwadi",
    bg: "linear-gradient(160deg, #121620 0%, #191f2c 55%, #0d1119 100%)",
    accent: "#d49b5c",
    colorScheme: "night",
  },
] as const;
