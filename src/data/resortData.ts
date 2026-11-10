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
  name: "Noel Guest House",
  shortName: "Noel Guest House",
  subTitle: "Peaceful Village Stays & Airport Transit",
  tagline: "Cozy Coastal Accommodation, Warm Goan Hospitality & Rapid 5-Min Airport Transit in Bogmalo, Goa",
  phone: "+91 97659 73880",
  phoneRaw: "+919765973880",
  phoneAlt: "+91 832 253 8094",
  email: "stay@noelguesthousegoa.com",
  website: "https://noelguesthousegoa.com",
  address: "House No. 94, Bogmalo Road, Near Bogmalo Church (Chocolate Ward), Bogmalo, Mormugao, South Goa 403806",
  landmark: "50m from Bogmalo Church, 5-minute walk (~400m) to Bogmalo Beach, 4 km from Dabolim Airport",
  googleMapsQuery: "Noel+Guest+House+Bogmalo+Goa",
  googleMapsUrl: "https://www.google.com/maps/place/Noel+Guest+House/@15.3703666,73.8388173,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbfc7fe350bf305:0x3bf0cc558a5707ae!5m2!4m1!1i2!8m2!3d15.3703666!4d73.8388173!16s%2Fg%2F11c200955j?entry=ttu",
  googleMapsEmbed: "https://maps.google.com/maps?q=Noel+Guest+House+Bogmalo+Goa&t=&z=16&ie=UTF8&iwloc=&output=embed",
  justdialLink: "https://www.justdial.com/Goa/Noel-Guest-House-Opposite-Bogmallo-Church-Bogmalo/0832PX832-X832-120419163234-A7L9_BZDET",
  timings: "24/7 Front Desk · Flexible Check-In for Early & Late Flights",
  distanceHighlights: "5 min walk to Bogmalo Beach (~400m) | 4 km to Goa Dabolim Airport (5-7 min drive) | 50m to Bogmalo Church",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "deluxe-ac-double-room",
    name: "Deluxe A/C Double Room",
    category: "Cozy Comfort",
    tagline: "Air-conditioned double bedroom with balcony, peaceful garden views, and attached hot water bath",
    pricePerNight: 1900,
    capacity: "2 Guests",
    sizeSqFt: 280,
    bedType: "Plush King Size Bed",
    view: "Tropical Coconut Trees & Garden View",
    description:
      "A serene and comfortable sanctuary nestled in a quiet village setting. Features silent split air-conditioning, a private sit-out balcony, crisp clean linens, high-speed Wi-Fi, television, and an attached modern private bath with 24/7 hot water geyser.",
    features: [
      "Private sit-out balcony overlooking lush tropical greenery",
      "Silent split air-conditioning for peaceful sleep",
      "High-speed wireless internet connectivity",
      "Attached private bathroom with 24/7 hot water geyser",
      "Plush king size bed with freshly sanitized linens",
      "5-minute stroll to Bogmalo Beach and sea shacks",
    ],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "comfort-standard-double-room",
    name: "Comfort Standard Double Room",
    category: "Village Serenity",
    tagline: "Clean and peaceful standard bedroom with private bath, ideal for holidaying couples and travelers",
    pricePerNight: 1400,
    capacity: "2 Guests",
    sizeSqFt: 240,
    bedType: "Comfort Double Bed",
    view: "Bogmalo Village & Courtyard",
    description:
      "Designed for guests who love peaceful Goan village charm. Enjoy restful nights surrounded by birdsong and whispering palm fronds, with an attached clean bathroom, comfortable mattress, ceiling fan, and warm host hospitality.",
    features: [
      "Spotlessly clean bedroom with comfortable double bedding",
      "Attached private bathroom with hot & cold water",
      "Fast Wi-Fi for staying connected or remote working",
      "Quiet residential setting away from city noise",
      "5-minute walk to Bogmalo beachside restaurants",
      "Warm, personalized caretaking by the host family",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "garden-family-suite-room",
    name: "Garden Family Suite Room",
    category: "Family & Small Groups",
    tagline: "Spacious multi-bed room accommodating up to 4 guests, close to both beach and airport",
    pricePerNight: 2600,
    capacity: "4 Guests",
    sizeSqFt: 420,
    bedType: "Two Double Beds + Seating Area",
    view: "Palm Grove & Village Landscape",
    description:
      "Generously sized family accommodation offering two double beds, powerful air-conditioning, attached modern bath, and plenty of space for luggage. Perfect for families landing in Goa or preparing for an early morning departure from Dabolim.",
    features: [
      "Two comfortable double beds for up to 4 guests",
      "Split air-conditioner & ceiling fans",
      "Spacious attached bathroom with instantaneous hot water",
      "High-speed Wi-Fi and multiple mobile charging points",
      "Easy parking space for cars and rented two-wheelers",
      "Airport cab arrangement available 24/7",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "airport-transit-layover-room",
    name: "Airport Transit Layover Room",
    category: "Budget & Flight Layover",
    tagline: "Affordable and convenient room just 4 km (5-7 mins) from Goa Dabolim International Airport",
    pricePerNight: 1100,
    capacity: "2 Guests",
    sizeSqFt: 200,
    bedType: "Comfort Double Bed",
    view: "Quiet Courtyard View",
    description:
      "The premier budget layover choice for flight transit travelers arriving late at night or catching early flights from Dabolim Airport. Features comfortable bedding, attached bathroom, hot water, luggage storage, and prompt airport taxi coordination.",
    features: [
      "Only 5 to 7 minutes drive from Goa Dabolim Airport (4 km)",
      "Flexible 24/7 check-in accommodating late-night flight arrivals",
      "Clean attached private bathroom with hot shower",
      "Free high-speed Wi-Fi connectivity",
      "Airport shuttle/taxi coordination on request",
      "Short walk to beach shacks for fresh seafood and drinks",
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
    title: "Bogmalo Beach & Shacks",
    subtitle: "400m · 5 Min Easy Walk",
    description:
      "Take a peaceful stroll down the village lane to Bogmalo Beach. Enjoy safe swimming waters, sunset walks, water sports, and beachside shacks.",
    x: 22,
    y: 38,
    category: "deck",
  },
  {
    id: "bogmalo-church",
    title: "Historic Bogmalo Church",
    subtitle: "50m · Serene Village Setting",
    description:
      "Located just steps from the beautiful village church in Chocolate Ward, surrounded by swaying palms, quiet lanes, and peaceful Goan charm.",
    x: 58,
    y: 62,
    category: "interior",
  },
  {
    id: "dabolim-airport",
    title: "Dabolim Airport Corridor",
    subtitle: "4 km · 5-7 Min Drive",
    description:
      "Unmatched proximity to Goa Dabolim International Airport (GOI), offering 24/7 check-in support and dependable early morning airport transfers.",
    x: 84,
    y: 30,
    category: "view",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Peaceful Village Mornings",
    caption: "Wake up to fresh coastal air, singing birds, and tropical greenery right outside your window.",
    timeTag: "07:30 AM",
    location: "Noel Guest House Courtyard",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "5-Minute Stroll to the Beach",
    caption: "Walk down the calm coconut-fringed lane to the sands of Bogmalo for sunbathing and swimming.",
    timeTag: "10:00 AM",
    location: "Bogmalo Beach Shore",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Sunset at Bogmalo Cove",
    caption: "Watch the sun sink into the Arabian Sea while enjoying chilled drinks at beachfront shacks.",
    timeTag: "06:15 PM",
    location: "Bogmalo Sunset Point",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Fresh Goan Seafood Trails",
    caption: "Taste authentic kingfish fry, prawn curry rice, and calamari at famous Bogmalo beach eateries.",
    timeTag: "08:00 PM",
    location: "Bogmalo Beach Shacks",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Cozy Family & Group Stays",
    caption: "Spacious air-conditioned rooms designed for families and holidaying friends traveling together.",
    timeTag: "03:30 PM",
    location: "Garden Family Suite",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "24/7 Airport Layover Care",
    caption: "Hassle-free late-night check-ins and reliable cab transfers to Dabolim Airport in just 5-7 minutes.",
    timeTag: "11:30 PM",
    location: "Noel Reception & Transit",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Mountain",
    title: "400m to Bogmalo Beach",
    description: "An easy 5-minute stroll to the sandy shoreline, calm swimming cove, and beach restaurants.",
  },
  {
    icon: "Car",
    title: "4 km from Dabolim Airport",
    description: "Swift 5 to 7 minute drive to Goa Dabolim International Airport with round-the-clock cab help.",
  },
  {
    icon: "Waves",
    title: "Deluxe Air-Conditioned Rooms",
    description: "Clean, silent split AC rooms with private balconies and quiet village garden atmosphere.",
  },
  {
    icon: "Coffee",
    title: "Warm Host Hospitality",
    description: "Personally hosted by Cajetan Rodrigues & family, offering warm care and local travel guidance.",
  },
  {
    icon: "ShieldCheck",
    title: "24/7 Flexible Check-In",
    description: "Round-the-clock reception to welcome late-night flight arrivals and early-morning travelers.",
  },
  {
    icon: "Gamepad2",
    title: "Free High-Speed Wi-Fi",
    description: "Complimentary wireless internet connectivity throughout rooms and guest lounge areas.",
  },
  {
    icon: "Sparkles",
    title: "Free On-Site Parking",
    description: "Safe and convenient parking space for private vehicles, rental cars, and hired two-wheelers.",
  },
  {
    icon: "Flame",
    title: "Scooter Rental & Sightseeing",
    description: "Easy scooter/bike rentals and tour guidance for South Goa churches, beaches, and scenic spots.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Rohan & Sneha Kulkarni",
    location: "Pune, Maharashtra",
    rating: 5,
    comment:
      "Noel Guest House was the perfect choice for our Goa holiday! It's just a 5-minute walk to Bogmalo Beach and only 7 minutes from Dabolim Airport. Cajetan was an exceptional host who helped us with scooter rental and airport cabs. The rooms are spotless and peaceful!",
    date: "October 2026",
  },
  {
    id: "r2",
    author: "Oliver Schmidt",
    location: "Munich, Germany",
    rating: 5,
    comment:
      "Outstanding hospitality and unbeatable location near Dabolim airport. Our flight arrived at 1 AM and the host welcomed us with great warmth. Room was super clean, AC worked perfectly, and having the beach just down the road was wonderful.",
    date: "September 2026",
  },
  {
    id: "r3",
    author: "Ananya Sen",
    location: "Kolkata, West Bengal",
    rating: 5,
    comment:
      "A quiet, green oasis in Bogmalo. Very peaceful village surroundings right opposite the church. Delicious seafood at nearby shacks and so convenient for catching our early flight. Great value for money!",
    date: "August 2026",
  },
  {
    id: "r4",
    author: "Michael & Sarah Davies",
    location: "London, UK",
    rating: 4,
    comment:
      "Very cozy and friendly guest house. Hot shower, comfortable bed, and the beach is just a short stroll away. Highly recommended for airport layovers or relaxed budget stays in South Goa.",
    date: "July 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "coastal",
    name: "Village Breeze",
    tagline: "Serene village greenery & gentle coastal air in Bogmalo",
    bg: "linear-gradient(160deg, #f0f7f9 0%, #d4e9ee 55%, #2a7b88 100%)",
    accent: "#1e7280",
    colorScheme: "mist",
  },
  {
    key: "sunset",
    name: "Golden Hour",
    tagline: "Warm sunset glow & chilled Bogmalo beach shack vibes",
    bg: "linear-gradient(160deg, #faf3ec 0%, #f1d5be 55%, #b56232 100%)",
    accent: "#b56232",
    colorScheme: "velora",
  },
  {
    key: "night",
    name: "Peaceful Night",
    tagline: "Quiet village slumber under starlit Goan skies",
    bg: "linear-gradient(160deg, #0e1724 0%, #152233 55%, #0a111a 100%)",
    accent: "#48a9b8",
    colorScheme: "night",
  },
] as const;
