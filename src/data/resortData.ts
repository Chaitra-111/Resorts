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
  name: "Sea View Resort",
  shortName: "Sea View",
  subTitle: "Coastal Balcony Rooms & Beachside Getaways",
  tagline: "Serene Sea Breeze, Private Balconies & Bogmalo Beach Proximity in South Goa",
  phone: "+91 82086 81467",
  phoneRaw: "+918208681467",
  phoneAlt: "082086 81467",
  email: "stay@seaviewresortgoa.com",
  website: "https://seaviewresortgoa.com",
  address: "Near Naval Aviation Museum, 145, Bogmalo Beach Road, Bogmalo, Vasco da Gama, Goa 403806",
  landmark: "Near Naval Aviation Museum, 1 km to Bogmalo Beach, 4 km to Goa Dabolim Airport",
  googleMapsQuery: "Sea+View+Resort+Bogmalo+Goa",
  googleMapsUrl: "https://www.google.com/maps/place/Sea+View+Resort/@15.3767364,73.841455,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbfc7f89f55398f:0xbb2da309362eebcc!5m2!4m1!1i2!8m2!3d15.3767364!4d73.841455!16s%2Fg%2F11dynz42xn?entry=ttu",
  googleMapsEmbed: "https://maps.google.com/maps?q=Sea+View+Resort+Bogmalo+Goa&t=&z=16&ie=UTF8&iwloc=&output=embed",
  justdialLink: "https://www.justdial.com/Goa/Sea-View-Resorts-Near-Naval-Aviation-Museum-Bogmalo/0832PX832-X832-171120194411-V4Q9_BZDET",
  timings: "24/7 Front Desk · Flexible Check-in & Airport Assistance",
  distanceHighlights: "1 km to Bogmalo Beach | Near Naval Museum | 4 km to Dabolim Airport",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "deluxe-balcony-sea-breeze",
    name: "Deluxe Balcony Sea Breeze Room",
    category: "Coastal Balcony View",
    tagline: "Air-conditioned retreat featuring a private sit-out balcony with gentle coastal sea breezes",
    pricePerNight: 2200,
    capacity: "2 Guests",
    sizeSqFt: 280,
    bedType: "Plush King Bed",
    view: "Private Balcony with Coastal & Green View",
    description:
      "A serene, air-conditioned haven designed for couples, leisure travelers, and holidaymakers. Step out onto your private balcony to enjoy the fresh coastal morning breeze, high-speed fiber Wi-Fi, cable TV, and an attached modern bath with 24-hour hot showers.",
    features: [
      "Private outdoor sit-out balcony overlooking tropical greenery",
      "Silent split air-conditioning & personalized climate control",
      "High-speed wireless fiber internet connectivity",
      "Flat-screen LED television with national & regional channels",
      "Attached private bath with 24/7 continuous hot water geyser",
      "Fresh sanitized linens, daily towel change & toiletries",
    ],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "executive-king-room",
    name: "Executive King Coastal Room",
    category: "Premium King Comfort",
    tagline: "Spacious air-conditioned king room with work desk and serene garden ambiance",
    pricePerNight: 2600,
    capacity: "2-3 Guests",
    sizeSqFt: 340,
    bedType: "Royal King Bed + Sofa Chair",
    view: "Bogmalo Coconut Grove & Garden View",
    description:
      "Perfect for travelers seeking comfort and tranquility in South Goa. Outfitted with a premium king mattress, comfortable armchairs, mini refrigerator, tea/coffee maker, ergonomic work area, and peaceful garden views.",
    features: [
      "Spacious room layout with plush king bed & seating",
      "Ultra-silent split air-conditioner",
      "Electric kettle with complimentary tea & coffee sachets",
      "Mini refrigerator for beverages and snacks",
      "Generous wardrobe space and secure room amenities",
      "24/7 room service & front desk assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "coastal-family-suite",
    name: "Coastal Family Balcony Suite",
    category: "Family & Vacation Groups",
    tagline: "Expansive multi-bed suite with private balcony designed for families and group vacations",
    pricePerNight: 3400,
    capacity: "4 Guests",
    sizeSqFt: 440,
    bedType: "Two Double Beds + Balcony Lounge",
    view: "Alto Bogmalo Palm Horizon View",
    description:
      "A grand family retreat accommodating up to 4 guests in ultimate comfort. Featuring dual double beds, an attached viewing balcony, dual split ACs, multiple charging points, and quick access to Bogmalo Beach shacks and water sports.",
    features: [
      "Two spacious double beds with orthopaedic comfort mattresses",
      "Private extended balcony overlooking Goan coconut trees",
      "Dual split air-conditioning units for total cooling",
      "Attached modern washroom with instantaneous hot water shower",
      "24/7 room service assistance for snacks, tea, and beverages",
      "Sound-damped windows ensuring peaceful nights",
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
    name: "Airport Transit Standard Room",
    category: "Transit & Budget Friendly",
    tagline: "Cozy, hygienic air-conditioned room tailored for Dabolim Airport flight transits",
    pricePerNight: 1500,
    capacity: "2 Guests",
    sizeSqFt: 210,
    bedType: "Comfort Double Bed",
    view: "Courtyard Greenery",
    description:
      "An economical, sparkling clean haven for solo travelers, flight layovers, and pilgrims. Situated just 4 km (under 10 minutes drive) from Dabolim Airport, with 24-hour check-in and dedicated cab assistance.",
    features: [
      "Only 8–10 minutes to Goa Dabolim International Airport",
      "Quiet split air-conditioning & high-speed ceiling fan",
      "Attached clean private bathroom with instantaneous hot water",
      "Complimentary high-speed fiber Wi-Fi",
      "24/7 front desk check-in & reliable taxi coordination",
      "Scooter & self-drive car rental assistance at reception",
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
    id: "bogmalo-coast",
    title: "Bogmalo Beach Shoreline",
    subtitle: "1 km from the Waves",
    description:
      "A scenic 12-minute walk or 2-minute drive down the coastal road to golden sands, sunset sea shacks, and water sports.",
    x: 24,
    y: 34,
    category: "deck",
  },
  {
    id: "balcony-views",
    title: "Private Balconies & Garden",
    subtitle: "Coastal Palms & Open Skies",
    description:
      "Relax on open-air balconies sipping morning chai while enjoying cooling coastal breezes and lush tropical greenery.",
    x: 64,
    y: 56,
    category: "interior",
  },
  {
    id: "dabolim-transit",
    title: "Dabolim Airport Transit Corridor",
    subtitle: "4 km · Under 10 Mins Drive",
    description:
      "Stress-free flight connections for Goa International Airport (GOI Dabolim) with 24/7 front desk and reliable taxi coordination.",
    x: 82,
    y: 28,
    category: "view",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Stroll Down to Bogmalo Beach",
    caption: "Take an easy morning or evening walk to the tranquil sands and sunset views of Bogmalo Beach.",
    timeTag: "06:00 PM",
    location: "Bogmalo Beach (1 km)",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Relax on Private Balconies",
    caption: "Unwind with refreshing sea breezes and tropical palm views from your room's private balcony.",
    timeTag: "08:30 AM",
    location: "Deluxe Balcony Rooms",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Goan Seafood & Beach Shacks",
    caption: "Feast on fresh kingfish rava fry, prawn curry, and chilled drinks at Bogmalo's seaside shacks.",
    timeTag: "08:00 PM",
    location: "Bogmalo Beachside Shacks",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Explore Naval Aviation History",
    caption: "Visit India's celebrated Naval Aviation Museum located right near the resort.",
    timeTag: "10:30 AM",
    location: "Naval Aviation Museum Road",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Family Vacations & Group Trips",
    caption: "Spacious multi-bed suites offering restful comforts for families and holiday groups.",
    timeTag: "03:30 PM",
    location: "Coastal Family Suites",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Seamless Flight Transit Stays",
    caption: "Rest soundly before or after flights with 24/7 check-in and quick 10-minute transit to Dabolim Airport.",
    timeTag: "11:30 PM",
    location: "Sea View Front Desk",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Mountain",
    title: "1 km to Bogmalo Beach",
    description: "Scenic 12-minute stroll or 2-minute drive to the sandy beach, water sports, and sunset shacks.",
  },
  {
    icon: "Waves",
    title: "Private Balcony Rooms",
    description: "Air-conditioned rooms featuring private sit-out balconies to enjoy coastal breezes and palm views.",
  },
  {
    icon: "Car",
    title: "4 km from Dabolim Airport",
    description: "Quick 8–10 minute commute to Goa International Airport (GOI) with 24/7 taxi coordination.",
  },
  {
    icon: "ShieldCheck",
    title: "24/7 Front Desk & Security",
    description: "Round-the-clock check-in support welcoming late-night flight arrivals, with CCTV security.",
  },
  {
    icon: "Coffee",
    title: "Dining & Shack Trails",
    description: "Close to authentic Goan beach shacks, seafood restaurants, and doorstep room delivery support.",
  },
  {
    icon: "Gamepad2",
    title: "Free High-Speed Wi-Fi",
    description: "Complimentary wireless internet connectivity across all rooms and common lounge areas.",
  },
  {
    icon: "Sparkles",
    title: "Garden & Outdoor Seating",
    description: "Serene garden enclave surrounded by coconut groves for relaxing morning walks and reading.",
  },
  {
    icon: "Flame",
    title: "Scooter & Car Rentals",
    description: "Convenient rental bike and car assistance arranged at the front desk to explore South Goa.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Kunal Singhania",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment:
      "Sea View Resort was the ideal budget-friendly stay for our Goa trip! It is very close to Dabolim Airport, making arrival late at night super smooth. The room had a lovely private balcony with nice coastal breeze, and Bogmalo Beach was just a short walk away. The caretaker was polite and very accommodating.",
    date: "October 2026",
  },
  {
    id: "r2",
    author: "Pooja Hegde",
    location: "Bengaluru, Karnataka",
    rating: 5,
    comment:
      "Clean AC rooms, peaceful location away from city noise, and great value for money. We rented scooters right from the resort and explored Bogmalo, Heart Shaped Lake, and Hollant Beach. Wonderful hospitality!",
    date: "September 2026",
  },
  {
    id: "r3",
    author: "David Wilson",
    location: "Melbourne, Australia",
    rating: 4,
    comment:
      "A very convenient and tranquil lodge near Goa Airport. The Naval Aviation Museum is right nearby and worth a visit. Clean bed, hot shower, and helpful staff who arranged an early morning cab for our flight.",
    date: "August 2026",
  },
  {
    id: "r4",
    author: "Manish Chawla",
    location: "Pune, Maharashtra",
    rating: 5,
    comment:
      "Loved the quiet vibe and balcony views. If you are looking for an affordable, cozy stay close to Bogmalo Beach and the airport, Sea View Resort is a great choice.",
    date: "July 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "coastal",
    name: "Coastal Breeze",
    tagline: "Bright, sunlit sea breezes & tropical charm in Goa",
    bg: "linear-gradient(160deg, #f0f7f9 0%, #d4e9ee 55%, #2a7b88 100%)",
    accent: "#1e7280",
    colorScheme: "mist",
  },
  {
    key: "sunset",
    name: "Bogmalo Sunset",
    tagline: "Warm golden sands & beachside relaxation",
    bg: "linear-gradient(160deg, #faf3ec 0%, #f1d5be 55%, #b56232 100%)",
    accent: "#b56232",
    colorScheme: "velora",
  },
  {
    key: "night",
    name: "Starlit Palms",
    tagline: "Peaceful starlit night in Alto Bogmalo",
    bg: "linear-gradient(160deg, #0e1724 0%, #152233 55%, #0a111a 100%)",
    accent: "#48a9b8",
    colorScheme: "night",
  },
] as const;
