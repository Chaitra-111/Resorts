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
  name: "ATHI RESORTS",
  shortName: "Athi Resorts",
  subTitle: "Boutique Beach Resort & Poolside Stays",
  tagline: "Serene Coastal Getaway & Poolside Comfort near Bogmalo Beach, Goa",
  phone: "+91 83800 72282",
  phoneRaw: "+918380072282",
  phoneAlt: "083800 72282",
  email: "stay@athiresortsgoa.com",
  website: "https://athiresortsgoa.com",
  address: "Plot No. 38-41, Alto Bogmalo, Bogmalo Beach Road, Opposite Naval Aviation Museum, Vasco da Gama, Goa 403806",
  landmark: "Opposite Naval Aviation Museum, 1 km to Bogmalo Beach, 4 km to Dabolim Airport",
  googleMapsQuery: "ATHI+RESORTS+Bogmalo+Goa",
  googleMapsUrl: "https://www.google.com/maps/place/ATHI+RESORTS/@15.3758416,73.8403797,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbfc7f8c7dc4529:0x8d459e9cafa59456!5m2!4m1!1i2!8m2!3d15.3758416!4d73.8403797!16s%2Fg%2F11r8p9htw?entry=ttu",
  googleMapsEmbed: "https://maps.google.com/maps?q=ATHI+RESORTS+Bogmalo+Goa&t=&z=16&ie=UTF8&iwloc=&output=embed",
  justdialLink: "https://www.justdial.com/Goa/Athi-Resorts-Opposite-Naval-Aviation-Museum-Alto-Bogmalo/0832PX832-X832-220412150536-Q4V7_BZDET",
  timings: "24/7 Front Desk · Check-in 12:00 PM · Check-out 12:00 PM",
  distanceHighlights: "1 km to Bogmalo Beach | Opp. Naval Aviation Museum | 4 km to Dabolim Airport",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "deluxe-pool-view-room",
    name: "Deluxe Pool View Room",
    category: "Poolside Serenity",
    tagline: "Air-conditioned comfort overlooking the sparkling outdoor swimming pool and tropical palms",
    pricePerNight: 2400,
    capacity: "2 Guests",
    sizeSqFt: 290,
    bedType: "Plush King Size Bed",
    view: "Outdoor Swimming Pool & Garden View",
    description:
      "A sunlit, air-conditioned sanctuary opening towards the resort's sparkling pool and palm-fringed sundeck. Outfitted with high-speed Wi-Fi, flat-screen smart TV, mini refrigerator, tea/coffee maker, and an en-suite modern bath with refreshing hot showers.",
    features: [
      "Direct balcony / patio views of the outdoor swimming pool",
      "Silent split air-conditioning & personalized climate control",
      "High-speed complimentary fiber Wi-Fi",
      "Flat-screen TV with entertainment & sports channels",
      "En-suite designer bath with hot & cold water and premium toiletries",
      "Coffee & tea brewing station with complimentary supplies",
    ],
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "deluxe-king-garden-room",
    name: "Deluxe King Garden Room",
    category: "Tropical Garden Retreat",
    tagline: "Peaceful king-bedded room nestled amidst lush Goan greenery and floral gardens",
    pricePerNight: 2000,
    capacity: "2 Guests",
    sizeSqFt: 270,
    bedType: "Premium King Bed",
    view: "Lush Tropical Garden View",
    description:
      "Designed for travelers seeking quiet peace after days at Bogmalo Beach or exploring South Goa. Features a plush king mattress, sound-damped windows, work desk, in-room wardrobe, and quick garden access.",
    features: [
      "Scenic views of the lush tropical garden and lawns",
      "Ultra-silent split air-conditioner",
      "Ergonomic work desk and high-speed Wi-Fi",
      "Mini refrigerator and electric kettle",
      "Daily housekeeping with freshly laundered linens and towels",
      "24/7 room service & reception assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "executive-family-suite",
    name: "Executive Family Coastal Suite",
    category: "Family & Vacation Groups",
    tagline: "Spacious multi-bed suite perfect for holidaying families, beach trips, and group stays",
    pricePerNight: 3500,
    capacity: "4 Guests",
    sizeSqFt: 450,
    bedType: "Two Double Beds + Lounge Seating",
    view: "Resort Lawn & Poolside Panorama",
    description:
      "Generously proportioned for visiting families and friend entourages spending holidays in Goa. Offers dual double beds, a cozy seating lounge, dual air-conditioning, multi-device charging hubs, and quick access to Bogmalo Beach and the pool.",
    features: [
      "Two comfortable double beds with plush orthopaedic mattresses",
      "Spacious living lounge with coffee table and armchairs",
      "Dual split air-conditioners for uninterrupted cooling",
      "Attached spacious modern bathroom with continuous hot water",
      "Doorstep room service for authentic Goan curries and beverages",
      "Generous luggage storage and in-room safe box",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "transit-comfort-room",
    name: "Airport Transit Classic Room",
    category: "Transit & Value Stay",
    tagline: "Pocket-friendly, cozy air-conditioned room tailored for flight layovers and solo explorers",
    pricePerNight: 1600,
    capacity: "2 Guests",
    sizeSqFt: 220,
    bedType: "Comfort Double Bed",
    view: "Alto Bogmalo Courtyard",
    description:
      "The perfect budget-friendly solution for travelers with late-night arrivals or early flights at Goa Dabolim Airport (just 4 km away). Includes split AC, high-speed Wi-Fi, clean attached bathroom, and 24-hour taxi coordination.",
    features: [
      "Just 8-10 minutes from Goa Dabolim International Airport",
      "Split air-conditioning & high-speed ceiling fan",
      "Attached clean bathroom with hot & cold shower",
      "Complimentary high-speed fiber Wi-Fi",
      "24-hour front desk check-in & airport taxi assistance",
      "Scooter rental & local tour booking desk",
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
    id: "bogmalo-beach",
    title: "Bogmalo Beach Hub",
    subtitle: "1 km from the Shoreline",
    description:
      "A serene crescent-shaped sandy beach renowned for tranquil sunset walks, water sports, beach shacks, and seafood grills.",
    x: 25,
    y: 35,
    category: "deck",
  },
  {
    id: "outdoor-pool",
    title: "Outdoor Swimming Pool",
    subtitle: "Sun Deck & Tropical Palms",
    description:
      "Take a refreshing dip in our sparkling outdoor pool or soak up the Goan sunshine on the comfortable poolside lounge beds.",
    x: 62,
    y: 54,
    category: "interior",
  },
  {
    id: "airport-hub",
    title: "Dabolim Airport Corridor",
    subtitle: "Just 4 km · 10 min Drive",
    description:
      "Effortless transit for flights at Goa International Airport (GOI Dabolim) with 24/7 cab assistance and hassle-free check-in.",
    x: 82,
    y: 28,
    category: "view",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Golden Hour at Bogmalo Beach",
    caption: "Take an evening stroll along the quiet shores of Bogmalo Beach, just minutes from the resort.",
    timeTag: "05:45 PM",
    location: "Bogmalo Beach Shoreline",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Poolside Sunshine & Cocktails",
    caption: "Relax by the outdoor swimming pool surrounded by swaying palms and cool coastal breezes.",
    timeTag: "11:30 AM",
    location: "Athi Outdoor Pool Deck",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Authentic Goan Seafood Feasts",
    caption: "Savor fresh kingfish rava fry, prawn balchao, and chilled beverages at nearby beach shacks.",
    timeTag: "08:00 PM",
    location: "Bogmalo Shacks & Resort Diner",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Naval Aviation Museum Visit",
    caption: "Explore India's historic naval aircraft and maritime memorabilia right across the road.",
    timeTag: "10:00 AM",
    location: "Opposite Naval Aviation Museum",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Spacious Family Stays & Vacations",
    caption: "Generous multi-bed suites designed for holidaying families and groups exploring South Goa.",
    timeTag: "03:00 PM",
    location: "Executive Family Wing",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Hassle-Free Airport Transits",
    caption: "Rest peacefully between flights with 24/7 check-in and quick 10-minute transit to Dabolim Airport.",
    timeTag: "11:00 PM",
    location: "Front Desk & Cab Dispatch",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Waves",
    title: "Outdoor Swimming Pool",
    description: "Well-maintained open-air pool with sun deck loungers for refreshing swims and relaxation.",
  },
  {
    icon: "Mountain",
    title: "1 km to Bogmalo Beach",
    description: "Scenic 12-minute walk or 2-minute drive to the sandy beach, water sports, and seaside shacks.",
  },
  {
    icon: "Car",
    title: "4 km from Dabolim Airport",
    description: "Convenient 8–10 minute commute to Goa International Airport (GOI) with 24/7 taxi coordination.",
  },
  {
    icon: "ShieldCheck",
    title: "24/7 Reception & Security",
    description: "Round-the-clock front desk welcoming late-night flight arrivals, with CCTV security and parking.",
  },
  {
    icon: "Coffee",
    title: "On-Site Restaurant & Bar",
    description: "Freshly prepared Goan specialties, North & South Indian dishes, continental breakfast, and bar drinks.",
  },
  {
    icon: "Gamepad2",
    title: "Free High-Speed Wi-Fi",
    description: "Complimentary wireless internet connectivity across all guest rooms, dining area, and pool deck.",
  },
  {
    icon: "Sparkles",
    title: "Tropical Garden & Sun Terrace",
    description: "Lush landscaped gardens offering peaceful, calm outdoor spaces surrounded by coastal palm trees.",
  },
  {
    icon: "Flame",
    title: "Bike / Car Rental Assistance",
    description: "Effortless scooter and self-drive car rentals arranged on-site to explore South Goa's hidden gems.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Rohan & Neha Deshmukh",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment:
      "Athi Resorts is a hidden gem in Bogmalo! We had a late evening flight into Dabolim Airport and reached the resort in under 10 minutes. The swimming pool was clean, our Deluxe Pool View room was spacious, and Bogmalo beach is just a short pleasant walk away. The staff was super helpful!",
    date: "October 2026",
  },
  {
    id: "r2",
    author: "Ashley Fernandes",
    location: "Bengaluru, Karnataka",
    rating: 5,
    comment:
      "Great stay close to the airport. Very peaceful ambiance, clean AC rooms, and lovely tropical garden around. The Naval Aviation Museum right opposite is an added treat. Best budget-friendly resort stay in South Goa.",
    date: "September 2026",
  },
  {
    id: "r3",
    author: "Vikram Malhotra",
    location: "New Delhi",
    rating: 4,
    comment:
      "Booked Athi Resorts for a 3-night holiday with friends. They helped us rent scooters at great rates, and we loved spending our afternoons chilling by the pool after returning from Bogmalo and Hollant beach. Highly recommend!",
    date: "August 2026",
  },
  {
    id: "r4",
    author: "Sophie Miller",
    location: "London, UK",
    rating: 5,
    comment:
      "Perfect stopover in Goa! Warm and attentive staff, quiet location away from city chaos, friendly resident pets, and lovely swimming pool. Food was freshly cooked and delicious.",
    date: "July 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "coastal",
    name: "Coastal Breeze",
    tagline: "Bright, sunlit poolside tropical charm in Goa",
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
    name: "Tropical Starlight",
    tagline: "Peaceful starlit night by the palm-fringed pool",
    bg: "linear-gradient(160deg, #0e1724 0%, #152233 55%, #0a111a 100%)",
    accent: "#48a9b8",
    colorScheme: "night",
  },
] as const;
