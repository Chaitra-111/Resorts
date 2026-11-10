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
  name: "TELES Westend Hotel",
  shortName: "Teles Westend",
  subTitle: "Transit Hotel & City Rooms",
  tagline: "Comfortable City Stay & Transit Convenience in Vasco da Gama, Goa",
  phone: "+91 91581 01122",
  phoneRaw: "+919158101122",
  phoneAlt: "091581 01122",
  email: "stay@teleswestendhotel.com",
  website: "https://teleswestendhotel.com",
  address: "3rd Floor, Mendes Mansion Building (Above YES Bank), F.L. Gomes Road, Vasco da Gama, Goa 403802",
  landmark: "Above YES Bank, 400m from Vasco Railway Station, 5 km from Dabolim Airport",
  googleMapsQuery: "TELES+Westend+Hotel+Vasco+da+Gama+Goa",
  googleMapsUrl: "https://www.google.com/maps/place/TELES+Westend+Hotel/@15.3967737,73.8092646,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbfc65454cf7065:0x97feb691c87e5412!5m2!4m1!1i2!8m2!3d15.3967737!4d73.8092646!16s%2Fg%2F1vg4h7ks?entry=ttu",
  googleMapsEmbed: "https://maps.google.com/maps?q=TELES+Westend+Hotel+Vasco+da+Gama+Goa&t=&z=16&ie=UTF8&iwloc=&output=embed",
  justdialLink: "https://www.justdial.com/Goa/Teles-Westend-Hotel-Above-Yes-Bank-Vasco-Da-Gama/0832PX832-X832-130422115124-E1E7_BZDET",
  timings: "24/7 Front Desk · 24-Hour Check-in & Departure Assistance",
  distanceHighlights: "400m to Vasco Railway Station | 1.5 km to Baina Beach | 5 km to Dabolim Airport",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "deluxe-ac-city-room",
    name: "Deluxe A/C City Room",
    category: "Air-Conditioned Comfort",
    tagline: "Cool, spotless urban room with modern attached bath, cable TV, and high-speed Wi-Fi",
    pricePerNight: 1600,
    capacity: "2 Guests",
    sizeSqFt: 260,
    bedType: "Plush King Bed / Twin Beds",
    view: "F.L. Gomes Road City View",
    description:
      "A peaceful, climate-controlled sanctuary right in the commercial heart of Vasco da Gama. Tailored for business travelers, transit passengers, and couples, featuring high-speed Wi-Fi, cable LED TV, spotless linen, and an attached bath with 24-hour hot water.",
    features: [
      "Silent split air-conditioning & personalized climate control",
      "High-speed wireless internet connectivity",
      "Flat-screen LED TV with satellite channels",
      "Attached private bath with 24-hour hot water geyser",
      "Clean sanitized linens and daily towel refresh",
      "Intercom phone & 24/7 front desk room assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "executive-deluxe-room",
    name: "Executive Deluxe Room",
    category: "Executive City Comfort",
    tagline: "Spacious business room with dedicated work desk and city skyline vistas",
    pricePerNight: 2000,
    capacity: "2-3 Guests",
    sizeSqFt: 320,
    bedType: "Royal King Bed + Sitting Divan",
    view: "Vasco da Gama Town Center View",
    description:
      "Designed for traveling corporate executives and holidaymakers seeking extra room. Features an ergonomic work desk, plush armchair seating, tea/coffee maker, sound-damped windows, and generous wardrobe storage.",
    features: [
      "Spacious room layout with work desk & seating",
      "Ultra-silent split air-conditioner",
      "Electric kettle with complimentary tea & coffee sachets",
      "Attached spacious modern bathroom with instantaneous geyser",
      "Wardrobe space with secure storage",
      "Complimentary high-speed fiber Wi-Fi throughout stay",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "family-transit-suite",
    name: "Family Transit Suite",
    category: "Family & Vacation Groups",
    tagline: "Expansive multi-bed suite tailored for visiting families, wedding groups, and tour parties",
    pricePerNight: 2800,
    capacity: "4 Guests",
    sizeSqFt: 420,
    bedType: "Two Double Beds + Living Area",
    view: "Mendes Mansion City Horizon",
    description:
      "Spacious and accommodating for visiting families and friend groups traveling through Goa. Offers two comfortable double beds, powerful air-conditioning, multiple charging points, and quick walking access to Vasco Railway Station and the market.",
    features: [
      "Two spacious double beds with orthopaedic comfort mattresses",
      "Dual air-conditioning units for consistent cooling",
      "Generous seating lounge area with coffee table",
      "Attached modern washroom with instantaneous hot shower",
      "24/7 doorstep food ordering & tea delivery assistance",
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
    id: "standard-transit-room",
    name: "Standard Transit Room",
    category: "Budget & Railway Transit",
    tagline: "Pocket-friendly lodging with essential amenities for railway & flight layovers",
    pricePerNight: 1100,
    capacity: "2 Guests",
    sizeSqFt: 200,
    bedType: "Comfort Double Bed",
    view: "City Courtyard",
    description:
      "An economical, sparkling clean haven for solo travelers, backpackers, and transit passengers. Located merely 400 meters from Vasco Railway Station, offering 24-hour check-in and luggage storage.",
    features: [
      "Just 4-minute walk from Vasco da Gama Railway Station",
      "Cooling ventilation & high-speed ceiling fan",
      "Television with regional & national channels",
      "Attached clean private bathroom with hot water",
      "Complimentary high-speed Wi-Fi access",
      "24/7 front desk check-in & luggage holding service",
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
    id: "railway-hub",
    title: "Vasco Railway Station Hub",
    subtitle: "400m · 4 Min Walk",
    description:
      "Effortless walking proximity to Vasco da Gama Railway Station, making arrivals and train departures completely seamless.",
    x: 26,
    y: 35,
    category: "deck",
  },
  {
    id: "city-center",
    title: "F.L. Gomes Road Market",
    subtitle: "Commercial Town Center",
    description:
      "Surrounded by Vasco's top Goan eateries, bakeries, cafes, Yes Bank, pharmacies, and shopping avenues right at your doorstep.",
    x: 62,
    y: 56,
    category: "interior",
  },
  {
    id: "airport-transit",
    title: "Dabolim Airport Corridor",
    subtitle: "5 km · 12 Min Drive",
    description:
      "Quick taxi connections to Goa Dabolim International Airport (GOI) with 24/7 front desk and reliable cab coordination.",
    x: 80,
    y: 28,
    category: "view",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Effortless Railway Arrival",
    caption: "Arrive at Vasco da Gama Railway Station and walk to your comfortable room in just 4 minutes.",
    timeTag: "07:00 AM",
    location: "Vasco Railway Station (400m)",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Clean, Air-Conditioned Comfort",
    caption: "Rest soundly in air-conditioned rooms featuring crisp linens, smart TV, and hot water showers.",
    timeTag: "01:00 PM",
    location: "Deluxe AC Rooms",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Authentic Goan Food Trails",
    caption: "Explore famous local fish thali restaurants, Irani cafes, and Goan bakeries along F.L. Gomes Road.",
    timeTag: "08:00 PM",
    location: "F.L. Gomes Road Dining",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Sunset Walk at Baina Beach",
    caption: "Take a quick 5-minute auto ride to nearby Baina Beach for sea breezes and coastal sunset strolls.",
    timeTag: "06:15 PM",
    location: "Baina Beach Shoreline (1.5 km)",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Family Stays & Transit Delegations",
    caption: "Spacious multi-bed suites offering restful comforts for visiting families and group travelers.",
    timeTag: "04:00 PM",
    location: "Family Suite Wing",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "24/7 Front Desk & Airport Cabs",
    caption: "Friendly caretaking staff ready to assist with late-night check-ins, luggage, and airport cabs.",
    timeTag: "11:30 PM",
    location: "Teles Westend Reception",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Mountain",
    title: "400m from Railway Station",
    description: "Merely a 4-minute walk from Vasco da Gama Railway Station — perfect for train transit.",
  },
  {
    icon: "Waves",
    title: "Deluxe AC & Standard Rooms",
    description: "Spotless, sanitized rooms with silent split air-conditioning and comfortable modern bedding.",
  },
  {
    icon: "Car",
    title: "5 km from Dabolim Airport",
    description: "Convenient 12-minute drive to Goa International Airport (GOI) with 24/7 taxi coordination.",
  },
  {
    icon: "ShieldCheck",
    title: "24/7 Front Desk & Security",
    description: "Round-the-clock check-in support, active CCTV security monitoring, and late-night reception.",
  },
  {
    icon: "Coffee",
    title: "24-Hour Hot & Cold Water",
    description: "Instantaneous water geysers in all attached bathrooms for refreshing hot showers at any hour.",
  },
  {
    icon: "Gamepad2",
    title: "Free High-Speed Wi-Fi",
    description: "Complimentary wireless fiber internet connectivity across all guest rooms and corridors.",
  },
  {
    icon: "Sparkles",
    title: "Daily Housekeeping",
    description: "Impeccably clean bedsheets, sanitized bathrooms, and prompt room refresh on request.",
  },
  {
    icon: "Flame",
    title: "Food Delivery & City Access",
    description: "Easy delivery assistance from top Vasco restaurants and quick walking access to markets.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Nilesh Sawant",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment:
      "Teles Westend Hotel is the most convenient place to stay in Vasco! It is literally 4 minutes walk from the railway station. The room was surprisingly clean and modern, AC worked perfectly, and the staff was very cooperative during our late night check-in.",
    date: "October 2026",
  },
  {
    id: "r2",
    author: "Savio D'Souza",
    location: "Panaji, Goa",
    rating: 5,
    comment:
      "Great transit hotel right in the heart of Vasco da Gama above YES Bank. Close to the port, bus stand, and market. Affordable tariffs and reliable hot water.",
    date: "September 2026",
  },
  {
    id: "r3",
    author: "Rahul Bhattacharya",
    location: "Kolkata, West Bengal",
    rating: 4,
    comment:
      "Stayed here for 2 nights for official work in Mormugao. Fast Wi-Fi, clean washroom, and polite front desk staff. Very close to Dabolim Airport as well.",
    date: "August 2026",
  },
  {
    id: "r4",
    author: "Amit Kumar",
    location: "Pune, Maharashtra",
    rating: 5,
    comment:
      "Value for money budget stay. Very neat beds, clean bathroom, TV with sports channels, and good food joints right downstairs on F.L. Gomes Road.",
    date: "July 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "coastal",
    name: "City Daylight",
    tagline: "Bright, welcoming comfort & station-side convenience in Vasco",
    bg: "linear-gradient(160deg, #f0f7f9 0%, #d4e9ee 55%, #2a7b88 100%)",
    accent: "#1e7280",
    colorScheme: "mist",
  },
  {
    key: "sunset",
    name: "Golden Transit",
    tagline: "Warm sunset glow over Vasco da Gama",
    bg: "linear-gradient(160deg, #faf3ec 0%, #f1d5be 55%, #b56232 100%)",
    accent: "#b56232",
    colorScheme: "velora",
  },
  {
    key: "night",
    name: "Vasco City Lights",
    tagline: "Quiet night rest in the heart of town",
    bg: "linear-gradient(160deg, #0e1724 0%, #152233 55%, #0a111a 100%)",
    accent: "#48a9b8",
    colorScheme: "night",
  },
] as const;
