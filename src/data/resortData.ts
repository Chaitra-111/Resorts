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
  name: "Woodland Resorts",
  shortName: "Woodland Resorts",
  subTitle: "Luxury Villas & Conventions",
  phone: "+91 99518 44444",
  phoneRaw: "+919951844444",
  phoneAlt: "040 2939 4444",
  email: "reservation@woodlandresorts.co.in",
  website: "https://woodlandresorts.co.in",
  address: "Sy. No. 18, Near Sreenidhi International School, Opp. Nagbabu Studio, Aziz Nagar Village, Moinabad Mandal, Hyderabad, Telangana 500075",
  landmark: "Beside Sreenidhi International School, Aziz Nagar / Moinabad",
  googleMapsQuery: "Woodland+Resorts+Aziz+Nagar+Moinabad+Hyderabad",
  googleMapsEmbed: "https://maps.google.com/maps?q=Woodland+Resorts+Aziz+Nagar+Moinabad+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleMapsLink: "https://www.google.com/maps/place/Woodland+Resorts/@17.3437738,78.3370109,17z",
  justdialLink: "https://www.google.com/maps/place/Woodland+Resorts/@17.3437738,78.3370109,17z",
  timings: "Check-in: 02:00 PM | Check-out: 11:00 AM (24/7 Front Desk & Concierge)",
  distanceFromHyd: "15 km from Gachibowli IT Hub / Financial District (approx. 25-30 mins via Chevella Road / ORR Exit 18)",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "shloka-villa",
    name: "Shloka Luxury Villa",
    category: "Cozy Studio Villa",
    tagline: "Intimate portable luxury overlooking manicured emerald lawns",
    pricePerNight: 5000,
    capacity: "2 Adults",
    sizeSqFt: 320,
    bedType: "Plush King Bed",
    view: "Manicured Lawn & Garden Canopy",
    description:
      "Engineered for modern couples and busy professionals seeking a quick weekend recharge. Shloka Villa combines minimalist timber aesthetics with warm recessed lighting, a personal coffee desk, and scenic glass doors opening onto peaceful lawns.",
    features: [
      "Panoramic garden-facing glass façade",
      "Private lawn access and outdoor patio chairs",
      "High-speed fiber Wi-Fi & work desk",
      "Silent climate-controlled air conditioning",
      "Smart 43-inch LED television",
      "En-suite designer bath with luxury herbal toiletries",
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
    id: "chandan-villa",
    name: "Chandan Signature Villa",
    category: "Aromatic Garden Suite",
    tagline: "Exclusive sanctuary surrounded by blooming flora and central greens",
    pricePerNight: 7000,
    capacity: "2-3 Adults",
    sizeSqFt: 580,
    bedType: "Super King Bed + Lounger",
    view: "Sandalwood Aromatic Courtyard",
    description:
      "One of our 16 curated Chandan residences nestled around botanical groves. Designed to evoke subtle calmness, featuring spacious dressing vestibules, Italian vitrified flooring, and direct steps to the central pavilion and swimming pool.",
    features: [
      "Spacious bedroom with handcrafted timber furniture",
      "Shared serene courtyard garden with stone pathways",
      "Rainfall glass shower & vanity kit",
      "In-room tea & coffee bar",
      "Complimentary breakfast at Cascade Restaurant",
      "Dedicated room service & concierge",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "vatika-villa",
    name: "Vatika Premium Villa",
    category: "Signature Private Lawn",
    tagline: "Spacious independent villa with private enclosed lawn and veranda",
    pricePerNight: 9000,
    capacity: "2-4 Adults",
    sizeSqFt: 780,
    bedType: "Emperor Bed + Daybed",
    view: "Private Enclosed Lawn & Swaying Palms",
    description:
      "Part of our premier collection of 19 signature Vatika homes. Features your own private fenced green lawn for personal morning yoga, family conversations, and twilight tea, enveloped by lush mature neem and mango canopies.",
    features: [
      "Private enclosed lawn with outdoor sun wicker seating",
      "Expansive bedroom with warm earth tone interior",
      "Luxury double vanity bath & oversized rain shower",
      "High ceilings with ambient mood recessed lighting",
      "Fast optical broadband & 55-inch 4K screen",
      "Personalized butler service on request",
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
    id: "samasth-villa",
    name: "Samasth Grand Family Villa",
    category: "Multi-Room Estate",
    tagline: "Expansive 1,000 sq. ft. family estate accommodating 8 to 10 guests",
    pricePerNight: 15000,
    capacity: "8-10 Guests",
    sizeSqFt: 1050,
    bedType: "Multiple King Suites + Living Lounge",
    view: "360° Resort Lawns & Pool Vista",
    description:
      "The pinnacle of group celebrations and joint family holidays at Woodland. Samasth offers multiple interconnected living spaces, grand dining arrangements, and ample capacity for celebrations, birthdays, and corporate retreats under one roof.",
    features: [
      "Accommodates up to 10 family members in absolute luxury",
      "Expansive central living room with sectional sofa seating",
      "Private celebration veranda overlooking the swimming pool",
      "Two master suites with dedicated en-suite bathrooms",
      "Dining table for 8 & private pantry amenities",
      "Priority booking for Cascade live-grill barbecue",
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
    title: "Glass-Edge Swimming Pool",
    subtitle: "Crystalline Waters & Kids Pool",
    description:
      "Signature outdoor swimming pool surrounded by artisan sun decks, tropical palms, and comfortable cabanas, with a safe dedicated splash zone for children.",
    x: 48,
    y: 52,
    category: "deck",
  },
  {
    id: "villas",
    title: "Vatika Private Green Lawns",
    subtitle: "51 Independent Villas",
    description:
      "Dotted across 8 acres of manicured landscape, each villa provides secluded personal verandas and garden pathways away from city bustle.",
    x: 75,
    y: 38,
    category: "interior",
  },
  {
    id: "dining",
    title: "Cascade Multi-Cuisine Dining",
    subtitle: "Live Kitchen & Alfresco Grills",
    description:
      "Enjoy live culinary creations featuring North Indian specialties, authentic Hyderabadi biryanis, Chinese wok favorites, and tandoori barbecue.",
    x: 24,
    y: 65,
    category: "view",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Morning Sun on the 8-Acre Greens",
    caption: "Dewdrops shimmering across manicured gardens as gentle breezes roll through Aziz Nagar.",
    timeTag: "07:00 AM",
    location: "Central Palm Promenade",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "The Glass-Edge Pool Oasis",
    caption: "Refreshing daytime swim under open blue skies with poolside coolers and sun loungers.",
    timeTag: "11:30 AM",
    location: "Glass-Edge Swimming Pool",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Afternoon Sports & Archery",
    caption: "Thrilling badminton rallies, table tennis matches, and box cricket sessions with family.",
    timeTag: "03:30 PM",
    location: "Sports & Recreation Arena",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Grand Evening Celebrations",
    caption: "Illuminated convention lawns hosting dream destination sangeets and corporate gala dinners.",
    timeTag: "06:45 PM",
    location: "Grand Convention Grounds",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Cascade Live Grill & Tandoor",
    caption: "Sizzling kebabs, aromatic curries, and live chefs preparing fresh regional delicacies.",
    timeTag: "08:30 PM",
    location: "Cascade Live Restaurant",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Quiet Villa Starlight Hours",
    caption: "A peaceful conclusion to the day on your private lawn beneath the tranquil Moinabad sky.",
    timeTag: "10:30 PM",
    location: "Vatika Private Veranda",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Waves",
    title: "Glass-Edge Swimming Pool",
    description: "Expansive outdoor swimming pool with crystal water, poolside sunbeds, and safe kids shallow area.",
  },
  {
    icon: "Sparkles",
    title: "1,500-Guest Convention Lawns",
    description: "Massive open-air celebration lawns designed for grand weddings, receptions, and corporate galas.",
  },
  {
    icon: "UtensilsCrossed",
    title: "Cascade Restaurant & Live Kitchen",
    description: "Multi-cuisine dining featuring Hyderabadi specialties, North Indian tandoor, and continental dishes.",
  },
  {
    icon: "Gamepad2",
    title: "Sports & Activity Arena",
    description: "Net cricket, badminton, archery, table tennis, carrom, and board games for non-stop group fun.",
  },
  {
    icon: "Flame",
    title: "Evening Bonfire & Barbecue",
    description: "Dedicated bonfire circles and live barbecue grill counters for unforgettable night gatherings.",
  },
  {
    icon: "Bike",
    title: "Bicycle Rentals & Jogging Trails",
    description: "Scenic cycling and morning walk pathways winding across the 8-acre lush property.",
  },
  {
    icon: "ShieldCheck",
    title: "24/7 Security & Ample Parking",
    description: "Gated estate with high-definition CCTV security, valet parking, and round-the-clock reception.",
  },
  {
    icon: "Coffee",
    title: "Day-Outing & Corporate Packages",
    description: "Curated packages including welcome drinks, high tea, buffet lunches, and team activities.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Pranay Kulkarni",
    location: "Gachibowli, Hyderabad",
    rating: 5,
    comment:
      "Just 20 minutes from Financial District! We stayed in the Vatika Villa with private lawn and it was exceptionally serene. The glass-edge pool is well-maintained, and food at Cascade was delicious.",
    date: "February 2026",
  },
  {
    id: "r2",
    author: "Sowmya Goud",
    location: "Jubilee Hills, Hyderabad",
    rating: 5,
    comment:
      "Booked the Samasth Villa for our 10-member family reunion. Huge living space, super clean bathrooms, and the kids loved the sports arena and pool. Perfect venue for family celebrations!",
    date: "January 2026",
  },
  {
    id: "r3",
    author: "Rohan Chandrasekhar",
    location: "Madhapur, Hyderabad",
    rating: 5,
    comment:
      "Our team of 40 conducted our annual strategy offsite here. The convention lawn is massive, archery and net cricket were huge hits, and the staff coordinated every requirement seamlessly.",
    date: "March 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "emerald",
    name: "Emerald Green",
    tagline: "8 acres of soothing palms & morning mist",
    bg: "linear-gradient(160deg, #eaf2eb 0%, #d4e5d6 55%, #7a9c7e 100%)",
    accent: "#3a6344",
    colorScheme: "emerald",
  },
  {
    key: "golden",
    name: "Golden Hour",
    tagline: "Warm sunset radiance over Moinabad landscapes",
    bg: "linear-gradient(160deg, #faf1df 0%, #eed0b7 55%, #a5582d 100%)",
    accent: "#a5582d",
    colorScheme: "velora",
  },
  {
    key: "twilight",
    name: "Starlight Gala",
    tagline: "Twilight convention lights & bonfire ambiance",
    bg: "linear-gradient(160deg, #1c2522 0%, #131b18 55%, #0b110f 100%)",
    accent: "#4ea366",
    colorScheme: "night",
  },
] as const;
