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
  name: "Sarita Guest House Bar & Restaurant",
  shortName: "Sarita Guest House",
  subTitle: "Beachfront Rooms & Seaside Dining",
  tagline: "Direct Beachfront Living, Sunset Balconies & Authentic Goan Seafood in Bogmalo, Goa",
  phone: "+91 98901 34533",
  phoneRaw: "+919890134533",
  phoneAlt: "+91 832 253 8965",
  email: "stay@saritaguesthousegoa.com",
  website: "https://saritaguesthousegoa.com",
  address: "Right on Bogmalo Beach (Beside John's Seagull), Bogmalo, Vasco da Gama, Goa 403806",
  landmark: "Directly on Bogmalo Beach, beside John's Seagull, 4 km from Dabolim Airport",
  googleMapsQuery: "Sarita+Guest+House+Bar+and+Restaurant+Bogmalo+Goa",
  googleMapsUrl: "https://www.google.com/maps/place/Sarita+Guest+House+Bar+%26+Restaurant/@15.3697543,73.8343823,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbfc7fdf2f025a9:0x83b36f48147d1d7d!5m2!4m1!1i2!8m2!3d15.3697543!4d73.8343823!16s%2Fg%2F1tfbrb78?entry=ttu",
  googleMapsEmbed: "https://maps.google.com/maps?q=Sarita+Guest+House+Bar+Restaurant+Bogmalo+Goa&t=&z=16&ie=UTF8&iwloc=&output=embed",
  justdialLink: "https://www.justdial.com/Goa/Sarita-Guest-House-Bar-Restaurant-Beside-Johns-Seagull-Bogmalo/0832PX832-X832-120419163234-A7L9_BZDET",
  timings: "24/7 Front Desk · Beachfront Bar & Restaurant 8:00 AM – 11:30 PM",
  distanceHighlights: "0 meters to Bogmalo Beach (Direct Sands) | 4 km to Dabolim Airport | Beside John's Seagull",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "sea-view-balcony-room",
    name: "Sea View Balcony Deluxe Room",
    category: "Beachfront Panorama",
    tagline: "Air-conditioned oceanfront haven with private balcony directly overlooking the Arabian Sea waves",
    pricePerNight: 2600,
    capacity: "2 Guests",
    sizeSqFt: 300,
    bedType: "Plush King Size Bed",
    view: "Unobstructed Arabian Sea & Sunset Beach View",
    description:
      "Wake up to the soothing sound of rolling waves. This premium ocean-facing sanctuary features a private sit-out balcony overlooking Bogmalo Beach, silent split air-conditioning, high-speed Wi-Fi, smart flat-screen TV, mini fridge, and an attached modern bath with hot showers.",
    features: [
      "Direct private balcony overlooking the sands and Arabian Sea",
      "Silent split air-conditioning & personalized climate control",
      "High-speed wireless internet connectivity",
      "Flat-screen LED television with satellite channels",
      "Attached private bath with 24/7 hot water geyser",
      "Direct beach access right down the stairs",
    ],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "deluxe-beach-ac-room",
    name: "Deluxe Beach A/C Room",
    category: "Coastal Comfort",
    tagline: "Comfortable air-conditioned king room steps away from the golden sands of Bogmalo",
    pricePerNight: 2100,
    capacity: "2 Guests",
    sizeSqFt: 270,
    bedType: "Comfort King Bed",
    view: "Bogmalo Coconut Grove & Beach Courtyard",
    description:
      "Designed for beach enthusiasts, couples, and leisure holidaymakers. Enjoy quiet coastal relaxation with instant beach access, crisp sanitized linens, work desk, in-room wardrobe, and prompt seaside restaurant room service.",
    features: [
      "Immediate steps to Bogmalo Beach and the shoreline",
      "Ultra-silent split air-conditioner",
      "Clean private attached bathroom with hot & cold shower",
      "Tea & coffee setup with electric kettle",
      "Wardrobe storage and daily housekeeping service",
      "24/7 guest assistance and front desk care",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "coastal-family-suite",
    name: "Coastal Family Beachfront Suite",
    category: "Family & Vacation Groups",
    tagline: "Spacious multi-bed suite perfect for holidaying families and groups staying right on the beach",
    pricePerNight: 3500,
    capacity: "4 Guests",
    sizeSqFt: 460,
    bedType: "Two Double Beds + Lounge Seating",
    view: "Panoramic Bogmalo Coastline View",
    description:
      "The ultimate beachfront holiday accommodation in Bogmalo. Offers two spacious double beds, a cozy sitting lounge, dual air-conditioning, multi-device charging hubs, and doorstep access to the beach shack, water sports, and seaside restaurant.",
    features: [
      "Two comfortable double beds with plush orthopaedic mattresses",
      "Spacious living lounge with coffee table and chairs",
      "Dual split air-conditioners for total cooling",
      "Attached spacious modern bathroom with instantaneous geyser",
      "Direct room delivery from Sarita's beachfront seafood kitchen",
      "Private viewing patio with sunset vistas",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "standard-beach-room",
    name: "Standard Transit Beach Room",
    category: "Budget & Airport Transit",
    tagline: "Pocket-friendly accommodation right on the shore, just 4 km from Dabolim Airport",
    pricePerNight: 1400,
    capacity: "2 Guests",
    sizeSqFt: 210,
    bedType: "Comfort Double Bed",
    view: "Courtyard & Beach Lane",
    description:
      "A budget-friendly coastal choice for solo backpackers, beach explorers, and transit passengers with flight connections at Dabolim Airport. Features clean double bed, cooling ceiling fan or AC option, attached bathroom, and 24-hr check-in.",
    features: [
      "Located directly on Bogmalo Beach (0 meters to sand)",
      "Only 8–10 minutes to Goa Dabolim International Airport",
      "Clean attached bathroom with hot and cold water",
      "Complimentary high-speed Wi-Fi access",
      "24/7 front desk assistance & airport cab booking",
      "Scooter rental and water sports coordination",
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
    id: "beachfront-sand",
    title: "Direct Bogmalo Beach Access",
    subtitle: "0m · Right on the Shoreline",
    description:
      "Step directly out onto the powdery sands of Bogmalo Beach. Enjoy morning beach walks, swimming in calm waters, and sunset ocean panoramas.",
    x: 24,
    y: 35,
    category: "deck",
  },
  {
    id: "sarita-restaurant",
    title: "Sarita Beach Bar & Restaurant",
    subtitle: "Famous Seafood & Sun Terrace",
    description:
      "Our celebrated on-site beach shack restaurant serving freshly caught Goan fish curries, tandoori grills, chilled cocktails, and seaside dining.",
    x: 64,
    y: 56,
    category: "interior",
  },
  {
    id: "dabolim-airport",
    title: "Dabolim Airport Corridor",
    subtitle: "4 km · 10 Min Drive",
    description:
      "Convenient taxi access to Goa International Airport (GOI Dabolim) with 24/7 reception and hassle-free departure support.",
    x: 82,
    y: 28,
    category: "view",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Sunset Dinners by the Waves",
    caption: "Dine directly on the beachfront terrace with the crimson sun setting over the Arabian Sea.",
    timeTag: "06:15 PM",
    location: "Sarita Beachfront Terrace",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Sea View Balcony Living",
    caption: "Sip morning coffee or evening beverages while gazing at the waves rolling onto the sand.",
    timeTag: "08:30 AM",
    location: "Sea View Balcony Suite",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Fresh Goan Seafood Feasts",
    caption: "Savor butter garlic lobster, kingfish rava fry, prawn curry, and chilled beers at our beach shack.",
    timeTag: "08:00 PM",
    location: "Sarita Bar & Restaurant",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Water Sports & Sandy Shallows",
    caption: "Try jet skiing, banana rides, and swimming in Bogmalo's scenic sheltered cove right outside.",
    timeTag: "11:00 AM",
    location: "Bogmalo Beach Water Sports",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Family Vacations & Group Gatherings",
    caption: "Spacious multi-bed suites offering relaxed seaside comfort for families and holiday groups.",
    timeTag: "03:30 PM",
    location: "Coastal Family Wing",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "24/7 Front Desk & Airport Cabs",
    caption: "Friendly caretaking staff ready to assist with late-night flight arrivals, luggage, and taxi transfers.",
    timeTag: "11:30 PM",
    location: "Sarita Reception Desk",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Mountain",
    title: "0m to Bogmalo Beach",
    description: "Located directly on the beach sand — wake up to the ocean breeze and immediate water access.",
  },
  {
    icon: "Waves",
    title: "Sea View Balcony Rooms",
    description: "Air-conditioned rooms featuring private balconies overlooking the Arabian Sea and sunset.",
  },
  {
    icon: "Coffee",
    title: "On-Site Beach Bar & Restaurant",
    description: "Famous Goan fish thali, freshly caught seafood, continental snacks, cocktails, and chilled beer.",
  },
  {
    icon: "Car",
    title: "4 km from Dabolim Airport",
    description: "Convenient 8–10 minute commute to Goa International Airport (GOI) with 24/7 taxi coordination.",
  },
  {
    icon: "ShieldCheck",
    title: "24/7 Front Desk & Care",
    description: "Round-the-clock reception welcoming late-night flight check-ins and offering luggage assistance.",
  },
  {
    icon: "Gamepad2",
    title: "Free High-Speed Wi-Fi",
    description: "Complimentary wireless internet connectivity across rooms and the beachfront restaurant deck.",
  },
  {
    icon: "Sparkles",
    title: "Sun Terrace & Beach Dining",
    description: "Open-air dining deck on the sand for golden-hour cocktails, starlit dinners, and sunset watching.",
  },
  {
    icon: "Flame",
    title: "Scooter & Water Sports Help",
    description: "Effortless bike rentals and coordination for jet skiing, boat rides, and South Goa tour trips.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Deepak & Simran Rao",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment:
      "Staying right on Bogmalo Beach at Sarita Guest House was the highlight of our Goa trip! Having breakfast on the deck with the sea waves just meters away was unbelievable. The kingfish rava fry at the restaurant was mouth-watering. Best beachfront value in South Goa!",
    date: "October 2026",
  },
  {
    id: "r2",
    author: "Clara Bennett",
    location: "Bristol, UK",
    rating: 5,
    comment:
      "Fantastic location right on the sand beside John's Seagull. Very close to Dabolim Airport (10 mins by taxi). The sea view balcony room was clean, AC worked great, and sunset views from the terrace bar are world-class.",
    date: "September 2026",
  },
  {
    id: "r3",
    author: "Prateek Nair",
    location: "Bengaluru, Karnataka",
    rating: 5,
    comment:
      "Superb beachfront experience! The staff is friendly and down-to-earth, the food is authentic Goan seafood, and you can literally walk out of your room onto the beach in 10 seconds. Great value for money.",
    date: "August 2026",
  },
  {
    id: "r4",
    author: "Siddharth Joshi",
    location: "Pune, Maharashtra",
    rating: 4,
    comment:
      "Loved the chill beach shack vibes. Peaceful beach, great cocktails at sunset, and easy transit to the airport for our morning flight. Highly recommended for couples and backpackers.",
    date: "July 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "coastal",
    name: "Beach Breeze",
    tagline: "Bright, sunlit beachfront waves & golden sands in Bogmalo",
    bg: "linear-gradient(160deg, #f0f7f9 0%, #d4e9ee 55%, #2a7b88 100%)",
    accent: "#1e7280",
    colorScheme: "mist",
  },
  {
    key: "sunset",
    name: "Golden Hour",
    tagline: "Spectacular ocean sunset & chilled beach shack vibes",
    bg: "linear-gradient(160deg, #faf3ec 0%, #f1d5be 55%, #b56232 100%)",
    accent: "#b56232",
    colorScheme: "velora",
  },
  {
    key: "night",
    name: "Starlit Shore",
    tagline: "Gentle rolling waves under starlit Goan skies",
    bg: "linear-gradient(160deg, #0e1724 0%, #152233 55%, #0a111a 100%)",
    accent: "#48a9b8",
    colorScheme: "night",
  },
] as const;
