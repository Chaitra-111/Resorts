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
  x: number; // percentage from left
  y: number; // percentage from top
  category: "view" | "interior" | "deck";
}

export interface Moment {
  id: string;
  title: string;
  caption: string;
  timeTag: string;
  image: string;
  location: string;
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
  name: "Hills View Luxury Holidays Residential Resort",
  shortName: "Hills View Resort",
  subTitle: "Residential Suites & Celebrations",
  phone: "+91 63029 19296",
  phoneRaw: "+916302919296",
  phoneAlt: "063029 19296",
  email: "stay@hillsview.in",
  website: "https://hillsview.in",
  address: "Near Mahaveer Medical College, Mudallagadda, Gangawaram, Vikarabad, Telangana 501101",
  landmark: "Beside Ananthagiri Hills Nature Belt, Vikarabad",
  googleMapsQuery: "Hills+View+Luxury+Holidays+Residential+Resort+Vikarabad",
  googleMapsEmbed: "https://maps.google.com/maps?q=Hills+View+Luxury+Residential+Resort+Gangawaram+Vikarabad&t=&z=14&ie=UTF8&iwloc=&output=embed",
  justdialLink: "https://www.justdial.com/Vikarabad/Hills-View-Luxury-Residential-Resort-Near-Mahaveer-Medical-College-Mudallagadda-Gangawaram/040PXX40-XX40-220920194141-Z8M4_BZDET",
  timings: "Check-in: 12:00 PM | Check-out: 11:00 AM (24/7 Front Desk)",
  distanceFromHyd: "75 km from Gachibowli / Financial District (approx. 90 mins drive via Shankarpalli Road)",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "valley-vista",
    name: "Valley Vista Residential Suite",
    category: "Signature Suite",
    tagline: "Panoramic floor-to-ceiling sunrise vistas over Ananthagiri forest",
    pricePerNight: 5500,
    capacity: "2-3 Guests",
    sizeSqFt: 620,
    bedType: "King Bed + Plush Daybed",
    view: "Ananthagiri Forest & Sunrise Valley",
    description:
      "Perched on the upper tier of the residential wing, this suite unfolds onto an expansive private timber balcony. Wake up enveloped by the cool morning mist of Vikarabad, with golden sunlight filtering through high vaulted glass.",
    features: [
      "Private glass-fronted viewing deck",
      "En-suite Italian marble bathroom with rain shower",
      "High-speed fiber connectivity",
      "Air conditioning & climate comfort",
      "Complimentary morning tea & plantation brew",
      "Smart 55-inch entertainment screen",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "presidential-villa",
    name: "The Presidential 2-BHK Residence",
    category: "Private Residence",
    tagline: "Expansive twin-bedroom villa with private lounge and family patio",
    pricePerNight: 9800,
    capacity: "4-6 Guests",
    sizeSqFt: 1250,
    bedType: "Two Master King Bedrooms",
    view: "360° Hills & Sunset Lawn Panorama",
    description:
      "Designed specifically for family getaways and intimate celebratory circles. Features two distinct master bedrooms, an expansive sunken lounge, dining vestibule, and direct veranda access to the manicured lawn gardens.",
    features: [
      "Two private master suites with king beds",
      "Grand central living lounge & dining nook",
      "Private terrace veranda overlooking sunset hills",
      "Dedicated butler service on call",
      "Tea/coffee bar & refrigeration unit",
      "Exclusive lawn seating for evening stargazing",
    ],
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "garden-pool-suite",
    name: "Garden Pool Villa",
    category: "Poolside Retreat",
    tagline: "Steps away from the azure swimming pool with sun terrace",
    pricePerNight: 6800,
    capacity: "2-4 Guests",
    sizeSqFt: 780,
    bedType: "Super King Bed + Sofa Bed",
    view: "Lapis Swimming Pool & Courtyard",
    description:
      "Step directly from your bedroom patio onto the sun-drenched pool deck. Warm earth tones, high ceilings, and artisan wicker loungers create a serene Mediterranean vibe amidst the Telangana hills.",
    features: [
      "Direct walkout to the resort swimming pool",
      "Private shaded sun-lounger porch",
      "Oversized rainfall shower & luxury robes",
      "Poolside snack & beverage service",
      "Sound-damped acoustic privacy",
      "Mini bar & artisan welcome hamper",
    ],
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "sunset-terrace-cottage",
    name: "Sunset Forest Cottage",
    category: "Couples & Duos",
    tagline: "Cozy timber-accented cottage nestled under mature tree canopies",
    pricePerNight: 4900,
    capacity: "2 Guests",
    sizeSqFt: 520,
    bedType: "California King Bed",
    view: "Forest Greens & Twilight Ridge",
    description:
      "An intimate residential sanctuary surrounded by rustling leaves and birdsong. Features hand-crafted timber furnishings, ambient reading lighting, and a romantic sunset deck facing the western ridges of Vikarabad.",
    features: [
      "Handcrafted natural wood interiors",
      "Sunset viewing balcony with bistro table",
      "Aromatherapy diffuser & botanical bath salts",
      "In-room breakfast service on request",
      "Silent whisper air conditioning",
      "Private garden pathway",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export const RESORT_HOTSPOTS: Hotspot[] = [
  {
    id: "deck",
    title: "Cantilevered Sunset Deck",
    subtitle: "High above the valley floor",
    description:
      "Crafted with weather-cured teak and safety glass, offering unobstructed 180-degree sightlines of the sunset dipping below Ananthagiri ridges.",
    x: 28,
    y: 35,
    category: "deck",
  },
  {
    id: "interiors",
    title: "Residential Master Living",
    subtitle: "Understated bespoke elegance",
    description:
      "Handpicked warm sandstone accents, Italian tile floors, and custom linen bedding create a warm home-away-from-home ambiance.",
    x: 62,
    y: 58,
    category: "interior",
  },
  {
    id: "canopy",
    title: "Ananthagiri Forest Canopy",
    subtitle: "Natural oxygen reservoir",
    description:
      "Known for dense medicinal trees, teak forests, and morning fog that keeps the resort's temperature pleasantly cooler than the city all year.",
    x: 80,
    y: 22,
    category: "view",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Morning Mist over the Ridge",
    caption: "The first golden rays breaking through Ananthagiri's ethereal morning fog.",
    timeTag: "06:30 AM",
    location: "Upper Observation Deck",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "The Azure Pool Oasis",
    caption: "Cool crystalline waters reflecting the vast open skies of Vikarabad.",
    timeTag: "11:00 AM",
    location: "Central Courtyard Pool",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Celebration Lawns & Gatherings",
    caption: "Sprawling manicured greens ready for memorable destination events and family laughter.",
    timeTag: "04:30 PM",
    location: "Emerald Banquets Lawn",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Hillside Twilight & Bonfire",
    caption: "Warm crackling flames, acoustic melodies, and shared stories under a blanket of stars.",
    timeTag: "08:00 PM",
    location: "Campfire Hearth Circle",
    image:
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Sunset over Teak Forests",
    caption: "Golden hour washing the rugged Deccan hills in tones of amber, peach, and burnt ochre.",
    timeTag: "05:45 PM",
    location: "Valley Vista Balcony",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Stargazing Vikarabad Nights",
    caption: "Zero city light pollution reveals a breathtaking cosmos right from your private terrace.",
    timeTag: "10:30 PM",
    location: "Residential Suite Rooftop",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Waves",
    title: "Azure Swimming Pool",
    description: "Crystalline open-air swimming pool featuring dedicated shallow loungers and pool deck.",
  },
  {
    icon: "Sparkles",
    title: "Grand Banquet Lawns",
    description: "Expansive green party grounds customized for destination weddings, milestones & corporate summits.",
  },
  {
    icon: "Flame",
    title: "Starlight Bonfire Arena",
    description: "Evening campfire circles set beneath the starry night canopy of Vikarabad.",
  },
  {
    icon: "UtensilsCrossed",
    title: "Hillside Dining & Grill",
    description: "Authentic Telangana regional delicacies, live barbecues, and multi-cuisine favorites.",
  },
  {
    icon: "Mountain",
    title: "Nature & Forest Trails",
    description: "Direct proximity to Ananthagiri Hills viewpoint, Kotepally reservoir, and teakwood walks.",
  },
  {
    icon: "Gamepad2",
    title: "Indoor Recreation",
    description: "Table tennis, carrom, board games, and outdoor badminton for all age groups.",
  },
  {
    icon: "ShieldCheck",
    title: "Gated 24/7 Security",
    description: "Private residential compound with secure parking, CCTV coverage, and courteous caretaking staff.",
  },
  {
    icon: "Coffee",
    title: "Self-Catering & Pantry",
    description: "Equipped residential suites with tea/coffee amenities and designated outdoor dining lounges.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "K. Srikanth Rao",
    location: "Hyderabad",
    rating: 5,
    comment:
      "The location near Ananthagiri Hills is unbeatable. The residential suites are spacious, clean, and the view from the balcony in the morning mist is sheer bliss. Perfect peaceful getaway just 1.5 hours from the city!",
    date: "February 2026",
  },
  {
    id: "r2",
    author: "Pooja Reddy",
    location: "Secunderabad",
    rating: 5,
    comment:
      "We hosted our family reunion of 25 members here. The sprawling lawn, swimming pool, and evening campfire made it truly unforgettable. The manager and staff were extremely cooperative and attended to every detail.",
    date: "January 2026",
  },
  {
    id: "r3",
    author: "Aditya Varma",
    location: "Gachibowli, Hyderabad",
    rating: 5,
    comment:
      "Huge rooms, fantastic swimming pool, and very calm surrounding away from city pollution. Excellent choice for weekend staycations with friends and family. Highly recommend the presidential residence!",
    date: "March 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "dawn",
    name: "Dawn Mist",
    tagline: "Cool mountain air & gentle morning fog",
    bg: "linear-gradient(160deg, #e7edf0 0%, #d4e0e5 55%, #889e9f 100%)",
    accent: "#6b8788",
    colorScheme: "mist",
  },
  {
    key: "golden",
    name: "Golden Hour",
    tagline: "Warm amber glow across Ananthagiri hills",
    bg: "linear-gradient(160deg, #faf1df 0%, #eed0b7 55%, #a5582d 100%)",
    accent: "#a5582d",
    colorScheme: "velora",
  },
  {
    key: "twilight",
    name: "Twilight Stars",
    tagline: "Deep indigo sky & crackling campfire glow",
    bg: "linear-gradient(160deg, #242938 0%, #161c28 55%, #0f121b 100%)",
    accent: "#d49b5c",
    colorScheme: "night",
  },
] as const;
