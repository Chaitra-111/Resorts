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
  name: "Chamundi Resorts & Valley",
  shortName: "Chamundi Resorts",
  subTitle: "Valley View Cottages & Nature Retreat",
  phone: "+91 94900 88889",
  phoneRaw: "+919490088889",
  phoneAlt: "+91 98492 56789",
  email: "contact@chamundiresorts.com",
  website: "https://chamundiresorts.com",
  address: "Beside Canal, Mallampally, Mulugu Road, Warangal, Telangana 506349",
  landmark: "Beside Canal, Mallampally (on Warangal - Mulugu Highway NH 163)",
  googleMapsQuery: "Chamundi+Resorts+and+Valley+Mallampally+Warangal+Telangana",
  googleMapsEmbed: "https://maps.google.com/maps?q=Chamundi+Resorts+%26+Valley+Mallampally+Warangal&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleMapsLink: "https://www.google.com/maps/place/Chamundi+Resorts+%26+Valley/@18.1307322,79.8609943,17z",
  justdialLink: "https://www.google.com/maps/place/Chamundi+Resorts+%26+Valley/@18.1307322,79.8609943,17z",
  timings: "Check-in: 12:00 PM | Check-out: 11:00 AM (24/7 Front Desk & Caretaker Support)",
  distanceFromHyd: "185 km from Hyderabad (approx. 3 - 3.5 hrs via NH 163 Warangal Highway) · 38 km from Warangal / Hanamkonda (approx. 45 mins)",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "valley-wooden-cottage",
    name: "Valley View Timber Chalet",
    category: "Rustic Wooden Chalet",
    tagline: "Charming timber cottage overlooking lush green valley gardens & canal breezes",
    pricePerNight: 3500,
    capacity: "2 Adults + 1 Child",
    sizeSqFt: 340,
    bedType: "Plush King Bed",
    view: "Canal Greens & Valley Canopy",
    description:
      "Nestled alongside the tranquil canal in Mallampally, this wooden chalet features natural timber textures, climate-controlled air conditioning, a private veranda for morning chai, and direct access to resort pathways.",
    features: [
      "Private scenic veranda with cane sit-out chairs",
      "Silent split air-conditioning & flat-screen LED TV",
      "High-speed Wi-Fi & workspace desk",
      "En-suite bathroom with 24/7 hot water supply",
      "Complimentary morning breakfast & tea kit",
      "Steps away from the outdoor swimming pool",
    ],
    image:
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "chamundi-deluxe-room",
    name: "Chamundi Valley Deluxe Suite",
    category: "Air-Conditioned Deluxe Suite",
    tagline: "Spacious modern suite with private sit-out and orchard garden vistas",
    pricePerNight: 4200,
    capacity: "2-3 Adults",
    sizeSqFt: 480,
    bedType: "Emperor King Bed + Lounger",
    view: "Resort Pool & Coconut Grove",
    description:
      "Tailored for travelers and families seeking serene comfort on the Warangal-Mulugu corridor. Features ceramic vitrified tiles, plush spring bedding, and expansive glass windows opening to refreshing greenery.",
    features: [
      "Air-conditioned bedroom with premium cotton linens",
      "Private balcony facing central resort greenery & pool",
      "Smart 43-inch LED television with satellite channels",
      "Rain shower with organic herbal toiletries",
      "24-hour room service delivery & housekeeping",
      "Complimentary valley breakfast buffet",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "canalside-family-cottage",
    name: "Canalside Family Villa",
    category: "Two-Bedroom Family Villa",
    tagline: "Interconnected multi-bed haven designed for joint families and weekend groups",
    pricePerNight: 6500,
    capacity: "4-6 Adults",
    sizeSqFt: 720,
    bedType: "Two King Beds + Daybed",
    view: "Canal Waters & Landscaped Lawns",
    description:
      "Spacious and private, our two-bedroom family villas offer independent bedrooms, an adjoining living lounge, and a covered veranda overlooking the canal breeze. Ideal for relaxed family holidays.",
    features: [
      "Two separate air-conditioned bedroom suites",
      "Shared family living lounge with sofa seating",
      "Two attached modern bathrooms with geysers",
      "Electric kettle, tea station & mini refrigerator",
      "Direct pathway to party lawns & children play area",
      "Complimentary evening campfire arrangement on request",
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
    id: "royal-valley-villa",
    name: "Royal Valley Grand Estate",
    category: "Grand Group Holiday Villa",
    tagline: "Expansive private estate accommodating 8 to 12 guests for reunions and celebrations",
    pricePerNight: 11000,
    capacity: "8-12 Guests",
    sizeSqFt: 1050,
    bedType: "3 Master King Suites + Lounge",
    view: "360° Valley Greens, Canal & Pool",
    description:
      "The premier retreat for large friend groups, family milestones, and company teams. Provides multiple bedrooms, private celebration lawns, barbecue setup, and dedicated concierge care throughout your stay.",
    features: [
      "Accommodates up to 12 guests in absolute private comfort",
      "Spacious central hall with group sectional seating",
      "Private lawn garden for evening gatherings & music",
      "Three master suites with en-suite bathrooms",
      "Dedicated barbecue & bonfire pit setup",
      "Assisted tour itinerary for Ramappa & Laknavaram",
    ],
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export const RESORT_HOTSPOTS: Hotspot[] = [
  {
    id: "pool",
    title: "Valley Swimming Pool & Deck",
    subtitle: "Refreshing Waters & Sun Loungers",
    description:
      "A scenic outdoor swimming pool enveloped by palm trees, sun loungers, and refreshing valley breezes for midday leisure.",
    x: 46,
    y: 52,
    category: "deck",
  },
  {
    id: "canal",
    title: "Canalside Walking Promenade",
    subtitle: "Canal Water Breeze & Scenic Trees",
    description:
      "Take peaceful morning strolls along the Mallampally canal right beside the resort periphery with fresh rural air.",
    x: 75,
    y: 35,
    category: "view",
  },
  {
    id: "dining",
    title: "Chamundi Valley Restaurant",
    subtitle: "Authentic Telangana & Tandoor Feasts",
    description:
      "Relish hot village-style country chicken curries, crispy snacks, tandoor kebabs, and live grills prepared fresh on-site.",
    x: 25,
    y: 65,
    category: "interior",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Morning Breeze by the Canal",
    caption: "Mist hovering gently over Mallampally canal waters as dawn sunbeams filter through coconut fronds.",
    timeTag: "06:30 AM",
    location: "Canalside Promenade",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Midday Poolside Relaxation",
    caption: "Refreshing dips in the outdoor swimming pool surrounded by peaceful nature and palm trees.",
    timeTag: "11:30 AM",
    location: "Valley Swimming Pool Deck",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Afternoon Leisure & Games",
    caption: "Enjoying badminton, outdoor games, and evening snacks with loved ones on manicured lawns.",
    timeTag: "03:30 PM",
    location: "Recreation Lawn & Courts",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Golden Sunset Over the Valley",
    caption: "Sun setting behind rustic tree canopies casting warm golden hues across the landscape.",
    timeTag: "06:00 PM",
    location: "Chamundi Valley Lawns",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Twilight Barbecue & Bonfire",
    caption: "Crackling campfires with hot sizzling kebabs, starry skies, and joyful acoustic gatherings.",
    timeTag: "08:30 PM",
    location: "Campfire Circle & Grill Deck",
    image:
      "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Quiet Cottage Night Starlight",
    caption: "Serene nocturnal tranquility on your private cottage veranda listening to whispering nature.",
    timeTag: "10:30 PM",
    location: "Valley Chalet Veranda",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Waves",
    title: "Outdoor Swimming Pool",
    description: "Inviting outdoor swimming pool with sun loungers and shallow area for relaxing family swims.",
  },
  {
    icon: "Compass",
    title: "Canalside Location in Mallampally",
    description: "Quiet green setting beside the canal on the scenic Warangal-Mulugu highway corridor.",
  },
  {
    icon: "UtensilsCrossed",
    title: "Chamundi Valley Restaurant",
    description: "Serving authentic Telangana village delicacies, country chicken curries, and multi-cuisine dishes.",
  },
  {
    icon: "Flame",
    title: "Night Bonfire & Live Barbecue",
    description: "Dedicated campfire pit with live tandoor and grill stations for starry evening gatherings.",
  },
  {
    icon: "Sparkles",
    title: "400-Guest Celebration Lawns",
    description: "Lush green lawns tailored for birthdays, family get-togethers, reunions, and day outings.",
  },
  {
    icon: "Gamepad2",
    title: "Sports & Play Areas",
    description: "Badminton, table tennis, open cricket play, and lawn space for kids and groups.",
  },
  {
    icon: "ShieldCheck",
    title: "24/7 Power Backup & Security",
    description: "Fenced estate with round-the-clock generator backup, caretaker support, and secure parking.",
  },
  {
    icon: "Coffee",
    title: "Ramappa & Laknavaram Gateway",
    description: "Convenient stopover & travel base situated on the route to UNESCO Ramappa Temple and Laknavaram Lake.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Shiva Prasad",
    location: "Hanamkonda, Warangal",
    rating: 5,
    comment:
      "Great weekend spot right in Mallampally on the way to Mulugu. The wooden cottages feel rustic and cozy. Swimming pool was fun, and the evening chicken fry with biryani was very tasty.",
    date: "February 2026",
  },
  {
    id: "r2",
    author: "Madhavi Latha",
    location: "Hyderabad, Telangana",
    rating: 4,
    comment:
      "We stayed overnight on our way to Ramappa Temple and Laknavaram. Super peaceful atmosphere beside the canal. Kids really enjoyed playing on the green lawns and pool.",
    date: "January 2026",
  },
  {
    id: "r3",
    author: "Ajay Varma",
    location: "Karimnagar, Telangana",
    rating: 5,
    comment:
      "Booked the family villa for our college friends reunion. Campfire with music and barbecue made our night unforgettable. Friendly staff and good location beside the canal.",
    date: "March 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "emerald",
    name: "Canal Greenery",
    tagline: "Lush green palms & canal-side breeze",
    bg: "linear-gradient(160deg, #eaf2eb 0%, #d4e5d6 55%, #7a9c7e 100%)",
    accent: "#3a6344",
    colorScheme: "emerald",
  },
  {
    key: "golden",
    name: "Valley Sunset",
    tagline: "Warm amber radiance over Mallampally valley",
    bg: "linear-gradient(160deg, #faf1df 0%, #eed0b7 55%, #a5582d 100%)",
    accent: "#a5582d",
    colorScheme: "velora",
  },
  {
    key: "twilight",
    name: "Campfire Starlight",
    tagline: "Crackling bonfires & open starry skies",
    bg: "linear-gradient(160deg, #1c2522 0%, #131b18 55%, #0b110f 100%)",
    accent: "#4ea366",
    colorScheme: "night",
  },
] as const;
