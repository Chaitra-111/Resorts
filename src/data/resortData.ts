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
  name: "Kakatiya Resorts Laknavaram",
  shortName: "Kakatiya Resorts",
  subTitle: "Lakeview Cottages & Nature Retreat",
  phone: "+91 93983 16500",
  phoneRaw: "+919398316500",
  phoneAlt: "+91 73834 55195",
  email: "bookings@kakatiyaresorts.com",
  website: "https://kakatiyaresorts.com",
  address: "Survey No. 153, Bussapur Village, Near Laknavaram Lake, Govindaraopet Mandal, Mulugu District, Telangana 506344",
  landmark: "Beside Laknavaram Lake & Suspension Bridge Road, Bussapur",
  googleMapsQuery: "Kakatiya+Resorts+Laknavaram+Bussapur+Govindaraopet+Telangana",
  googleMapsEmbed: "https://maps.google.com/maps?q=Kakatiya+Resorts+Laknavaram+Govindaraopet+Mulugu&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleMapsLink: "https://www.google.com/maps/place/Kakatiya+Resorts+Laknavaram/@18.1807487,80.0834112,17z",
  justdialLink: "https://www.google.com/maps/place/Kakatiya+Resorts+Laknavaram/@18.1807487,80.0834112,17z",
  timings: "Check-in: 12:00 PM | Check-out: 11:00 AM (24/7 Front Desk & Caretaker Support)",
  distanceFromHyd: "210 km from Hyderabad (approx. 3.5 - 4 hours via NH163 Warangal Highway) · 70 km from Warangal / Hanamkonda",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "rudrama-cottage",
    name: "Rudrama Lakeview Cottage",
    category: "Lake-Facing Wooden Cottage",
    tagline: "Serene timber cottage with open veranda overlooking peaceful nature groves",
    pricePerNight: 4200,
    capacity: "2 Adults + 1 Child",
    sizeSqFt: 360,
    bedType: "Comfort King Bed",
    view: "Laknavaram Forest Canopy & Water Periphery",
    description:
      "Tucked amidst whispering teak trees, the Rudrama Cottage offers a cozy rustic escape crafted with natural timber finishes, air conditioning, scenic veranda sit-outs, and panoramic morning mist views just minutes from the lake.",
    features: [
      "Private veranda with garden & forest view seating",
      "Silent split air-conditioning & flat-screen TV",
      "Complimentary high-speed Wi-Fi",
      "En-suite bathroom with 24/7 hot water supply",
      "Morning tea kettle with artisanal chai/coffee kits",
      "Direct pathway to resort swimming pool & dining lawn",
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
    id: "ganapati-deluxe",
    name: "Ganapati Heritage Deluxe Suite",
    category: "Deluxe Air-Conditioned Suite",
    tagline: "Spacious premium room inspired by classic Kakatiya stone & timber aesthetics",
    pricePerNight: 4800,
    capacity: "2-3 Adults",
    sizeSqFt: 520,
    bedType: "Emperor King Bed + Daybed",
    view: "Central Pool Deck & Green Orchards",
    description:
      "Designed for travelers and couples seeking elevated comfort after boating on Laknavaram Lake. Features Kakatiya architectural touches, expansive floor space, cozy reading loungers, and plush bedding for restorative sleep.",
    features: [
      "Spacious air-conditioned bedroom with premium linens",
      "Private balcony overlooking swimming pool & landscaped gardens",
      "Wide-screen smart LED television with cable channels",
      "Rainfall shower with botanical bath amenities",
      "Daily housekeeping & room service delivery",
      "Complimentary breakfast at Orugallu Restaurant",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "prataparudra-family",
    name: "Prataparudra Family Cottage",
    category: "Two-Bedroom Family Cottage",
    tagline: "Spacious multi-bed haven designed for joint families and weekend reunions",
    pricePerNight: 7500,
    capacity: "4-6 Adults",
    sizeSqFt: 780,
    bedType: "Two King Beds + Double Pull-Out",
    view: "Manicured Play Lawns & Coconut Palms",
    description:
      "Our two-bedroom family cottages provide ample privacy and togetherness. With two interconnected sleeping zones, shared family veranda, and quick access to the kids' pool and outdoor activity grounds, this is a family favorite.",
    features: [
      "Two interconnected air-conditioned bedroom chambers",
      "Private outdoor sit-out deck with garden patio set",
      "Two independent en-suite bathrooms with hot water",
      "Mini-refrigerator & electric kettle with refreshments",
      "Direct access to children's play park & pool slides",
      "Dedicated campfire seating arrangement upon request",
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
    id: "kakatiya-imperial",
    name: "Kakatiya Imperial Grand Villa",
    category: "Large Group & Gathering Villa",
    tagline: "Expansive grand holiday villa hosting 8 to 12 guests under one roof",
    pricePerNight: 12500,
    capacity: "8-12 Guests",
    sizeSqFt: 1100,
    bedType: "3 Master King Suites + Living Lounge",
    view: "360° Lake Valley, Pool & Forest Greens",
    description:
      "The pinnacle of group celebrations at Laknavaram. Features multiple bedrooms, a central family lounge, large private patio, and priority arrangement for evening tandoor barbecues and lake tour assistance.",
    features: [
      "Hosts large families or friend circles up to 12 guests comfortably",
      "Expansive central living hall with plush sofa arrangements",
      "Private lawn garden for exclusive family evening get-togethers",
      "Three master suites with individual attached bathrooms",
      "Complimentary bonfire & barbecue pit setup",
      "Assisted booking for Laknavaram speed boating & suspension bridge",
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
    title: "Resort Swimming Pool & Splash Zone",
    subtitle: "Crystal Waters & Water Fun",
    description:
      "A scenic outdoor swimming pool featuring kid-friendly water fun, sun deck loungers, and tropical palm canopies for a refreshing dip after exploring Laknavaram.",
    x: 46,
    y: 52,
    category: "deck",
  },
  {
    id: "lake",
    title: "Laknavaram Lake & Suspension Bridge",
    subtitle: "13 Islands & 10,000-Acre Water Body",
    description:
      "Located just minutes from the resort, walk the iconic 160-meter hanging bridge connecting green islands or enjoy exhilarating speed boat cruises across the historic lake.",
    x: 75,
    y: 35,
    category: "view",
  },
  {
    id: "dining",
    title: "Orugallu Kitchen & Open-Air Barbecue",
    subtitle: "Traditional Telangana Culinary Delights",
    description:
      "Feast on authentic Telangana specialties like Natukodi pulusu, freshly caught lake fish fry, fragrant dum biryanis, and twilight tandoor skewers grilled by the bonfire.",
    x: 25,
    y: 65,
    category: "interior",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Morning Mist over Laknavaram Lake",
    caption: "Golden sunbeams breaking through dense teak canopies as tranquil waters mirror the misty hills.",
    timeTag: "06:30 AM",
    location: "Laknavaram Waterfront & Islands",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Splash & Relax at the Resort Pool",
    caption: "Cool midday swims and laughter in the sparkling pool under breezy coconut trees.",
    timeTag: "11:00 AM",
    location: "Resort Swimming Pool Deck",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Boating & The Hanging Bridge Walk",
    caption: "Crossing the famous suspension bridge connecting emerald lake islands and feeling the cool breeze.",
    timeTag: "03:45 PM",
    location: "Laknavaram Suspension Bridge",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Lawn Celebrations & Golden Sunset",
    caption: "Savoring vibrant evening skies from our open-air celebration lawns with steaming hot snacks and chai.",
    timeTag: "06:15 PM",
    location: "Kakatiya Garden Lawns",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Orugallu Barbecue & Campfire Nights",
    caption: "A crackling bonfire, sizzling marinated tikkas, and local acoustic music under a blanket of stars.",
    timeTag: "08:30 PM",
    location: "Campfire Circle & Dining Deck",
    image:
      "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Starlight Solace at the Cottages",
    caption: "The peaceful crickets of Govindaraopet forest and nocturnal stillness outside your private veranda.",
    timeTag: "10:30 PM",
    location: "Rudrama Lakeview Veranda",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Waves",
    title: "Outdoor Swimming Pool & Slides",
    description: "Inviting outdoor swimming pool with water slides and kids splash section for family leisure.",
  },
  {
    icon: "Compass",
    title: "Proximity to Laknavaram Lake",
    description: "Located within minutes of the 13 islands, speed boating jetty, and iconic suspension bridge.",
  },
  {
    icon: "UtensilsCrossed",
    title: "Orugallu Kitchen & Restaurant",
    description: "Authentic Telangana cuisine, country chicken curries, fresh fish fry, and multi-cuisine meals.",
  },
  {
    icon: "Flame",
    title: "Night Campfire & Live Barbecue",
    description: "Dedicated bonfire area with live grill stations for starry evening family gatherings and parties.",
  },
  {
    icon: "Sparkles",
    title: "500-Guest Celebration Lawns",
    description: "Spacious green lawns designed for destination events, birthdays, college offsites, and get-togethers.",
  },
  {
    icon: "Gamepad2",
    title: "Sports & Children's Play Park",
    description: "Badminton, table tennis, net cricket, swings, and slides for children and enthusiastic groups.",
  },
  {
    icon: "ShieldCheck",
    title: "24/7 Power Backup & Security",
    description: "Fully fenced property with round-the-clock power generator backup, CCTV, and caretaker support.",
  },
  {
    icon: "Coffee",
    title: "Weekend Tour Assistance",
    description: "Guided assistance for visiting UNESCO Ramappa Temple, Medaram shrine, and Eturnagaram safari.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Venkatesh Rao",
    location: "Hanamkonda, Warangal",
    rating: 5,
    comment:
      "Best place to stay when visiting Laknavaram! The resort is just a few minutes from the lake and hanging bridge. Swimming pool was very clean, and the country chicken curry with bagara rice was top-notch.",
    date: "February 2026",
  },
  {
    id: "r2",
    author: "Harika Reddy",
    location: "Hyderabad, Telangana",
    rating: 5,
    comment:
      "We booked the Prataparudra Family Cottage for 6 of us during the weekend. The green surroundings and forest breeze are so calming. The night campfire with barbecue made our trip memorable!",
    date: "January 2026",
  },
  {
    id: "r3",
    author: "Sandeep Kumar",
    location: "Khammam, Telangana",
    rating: 5,
    comment:
      "Came with our office team of 25 for a weekend getaway. Very peaceful location near Bussapur. Staff arranged speed boat tickets for Laknavaram and organized a wonderful evening lawn party.",
    date: "March 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "emerald",
    name: "Forest Mist",
    tagline: "Lush green teak trees & fresh lake breeze",
    bg: "linear-gradient(160deg, #eaf2eb 0%, #d4e5d6 55%, #7a9c7e 100%)",
    accent: "#3a6344",
    colorScheme: "emerald",
  },
  {
    key: "golden",
    name: "Kakatiya Gold",
    tagline: "Warm sunset radiance over historic lake waters",
    bg: "linear-gradient(160deg, #faf1df 0%, #eed0b7 55%, #a5582d 100%)",
    accent: "#a5582d",
    colorScheme: "velora",
  },
  {
    key: "twilight",
    name: "Campfire Starlight",
    tagline: "Nocturnal silence, crackling bonfire & open constellations",
    bg: "linear-gradient(160deg, #1c2522 0%, #131b18 55%, #0b110f 100%)",
    accent: "#4ea366",
    colorScheme: "night",
  },
] as const;
