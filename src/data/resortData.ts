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
  name: "Casa Fiesta Sea Facing Resort",
  shortName: "Casa Fiesta Patnem",
  subTitle: "Sea-Facing Huts, Bungalows & Beach Shack",
  tagline: "Direct Patnem Beach Living, Sea-Facing Wooden Huts, A/C Bungalows & Beachfront Dining in Canacona, South Goa",
  phone: "+91 97644 93948",
  phoneRaw: "+919764493948",
  phoneAlt: "+91 98239 28548",
  email: "casafiestagoa@gmail.com",
  website: "https://casafiestapalolem.com",
  address: "Patnem Beach Entrance, Canacona, South Goa 403702",
  landmark: "Directly on Patnem Beach sands, 5 mins to Colomb Bay & Palolem, 3 km to Canacona Railway Station",
  googleMapsQuery: "Casa+Fiesta+Sea+Facing+Resort+Patnem+Goa",
  googleMapsUrl: "https://www.google.com/maps/place/Casa+Fiesta+Sea+Facing+Resort/@14.9978058,74.0352532,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbe45515d13396b:0x7c4939177e3c2924!5m2!4m1!1i2!8m2!3d14.9978058!4d74.0352532!16s%2Fg%2F11clybmhpp?entry=ttu",
  googleMapsEmbed: "https://maps.google.com/maps?q=14.9978058,74.0352532&t=&z=16&ie=UTF8&iwloc=&output=embed",
  timings: "24/7 Front Desk · Beachfront Multi-Cuisine Restaurant & Bar 7:30 AM – 11:30 PM",
  distanceHighlights: "0m directly on Patnem Beach | 5 mins to Colomb & Palolem | 3 km to Canacona Station",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "sea-facing-wooden-beach-hut",
    name: "Sea-Facing Wooden Beach Hut",
    category: "Signature Oceanfront Living",
    tagline: "Eco-wooden beach hut with private sit-out balcony opening directly onto Patnem Beach waves",
    pricePerNight: 3800,
    capacity: "2 Guests",
    sizeSqFt: 320,
    bedType: "Plush King Size Bed",
    view: "Unobstructed Patnem Bay & Arabian Sea Sunset",
    description:
      "Wake up to panoramic Arabian Sea vistas and the sound of rolling waves beneath your wooden veranda. Built with natural timber and mosquito netting for authentic South Goa coastal living, complete with private attached washroom, hot water shower, ceiling fan, and direct steps onto the sand.",
    features: [
      "Private front balcony overlooking Patnem Beach and ocean tides",
      "Direct 0-meter beach frontage right on the golden sands",
      "Comfortable king bed with mosquito canopy net & fresh linens",
      "Attached private bathroom with 24/7 hot & cold running water",
      "High-speed Wi-Fi and complimentary beach lounger service",
      "Room service from Casa Fiesta's beachfront restaurant & bar",
    ],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "deluxe-ac-coastal-bungalow",
    name: "Deluxe A/C Coastal Bungalow",
    category: "Air-Conditioned Coastal Comfort",
    tagline: "Spacious air-conditioned bungalow steps from the water with private veranda and modern fittings",
    pricePerNight: 4500,
    capacity: "2–3 Guests",
    sizeSqFt: 360,
    bedType: "Plush King Size Bed",
    view: "Patnem Coconut Palms & Partial Sea Breeze",
    description:
      "For travelers seeking chilled air-conditioned comfort after a sunny day on the beach. Features silent split A/C, modern tiled en-suite bathroom with pressurized hot shower, comfortable king bedding, wardrobe, and a shaded sit-out veranda just 15 steps from the shore.",
    features: [
      "Silent split air-conditioning & personalized climate control",
      "Spacious covered veranda with comfortable outdoor seating",
      "Attached modern tiled bathroom with hot water & toiletries",
      "Free high-speed Wi-Fi suitable for remote digital nomads",
      "Less than 30 seconds walk straight onto Patnem Beach sand",
      "Attentive daily housekeeping and friendly reception care",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "family-ac-beach-suite",
    name: "Family A/C Beach Suite",
    category: "Family & Group Haven",
    tagline: "Generous two-bed air-conditioned suite for families and friend groups holidaying in Canacona",
    pricePerNight: 5800,
    capacity: "4 Guests",
    sizeSqFt: 500,
    bedType: "Two Double / Queen Beds",
    view: "Palm Garden Courtyard & Beach Path",
    description:
      "A great choice for families with children or small groups of friends traveling together. Offers two comfortable beds, quiet split air-conditioning, attached modern bathroom with hot water, private porch seating, and instant access to our beachfront restaurant and sun loungers.",
    features: [
      "Two comfortable queen/double beds accommodating up to 4 guests",
      "High-power split air-conditioning & wooden ceiling fans",
      "Private attached washroom with continuous hot water supply",
      "Complimentary high-speed Wi-Fi and in-room dining service",
      "Direct pathway leading onto Patnem Beach sands (0m access)",
      "Assistance for boat trips, dolphin cruises & scooter rentals",
    ],
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "standard-garden-beach-hut",
    name: "Standard Garden Beach Hut",
    category: "Budget Coastal Escape",
    tagline: "Cozy shaded beach hut nestled in tropical palms just steps behind the beachfront line",
    pricePerNight: 2600,
    capacity: "2 Guests",
    sizeSqFt: 280,
    bedType: "Comfort Double Bed",
    view: "Palm Garden Courtyard",
    description:
      "An affordable beachside option for backpackers, couples, and yogis visiting South Goa. Features a comfortable double bed with mosquito netting, ceiling fan, clean attached bathroom with hot and cold water, and instant step-out access to the beach.",
    features: [
      "Nestled inside tropical coconut grove steps from the beach",
      "Comfort double bed with mosquito net & fresh linens",
      "Clean private bathroom with hot and cold water showers",
      "Complimentary high-speed Wi-Fi throughout the property",
      "Direct access to Casa Fiesta beach loungers and sunset dining",
      "Easy scooter hire and Canacona Station cab arrangements",
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
    id: "patnem-beach-sand",
    title: "Patnem Beachfront & Sun Loungers",
    subtitle: "0m · Direct Sand Frontage",
    description:
      "Step right out from Casa Fiesta onto the golden sands of Patnem Beach. Relax on complimentary sun loungers beneath shaded umbrellas with all-day beverage service.",
    x: 24,
    y: 36,
    category: "deck",
  },
  {
    id: "casa-fiesta-shack",
    title: "Casa Fiesta Restaurant & Sunset Bar",
    subtitle: "Toe-in-the-Sand Dining · Seafood & Mexican",
    description:
      "Feast on fresh Goan fish curries, sizzling fajitas, wood-fired seafood catch, and sunset cocktails right on the beach with your feet in the sand.",
    x: 62,
    y: 58,
    category: "interior",
  },
  {
    id: "colomb-palolem-trail",
    title: "Colomb Bay & Palolem Walking Trail",
    subtitle: "5 Mins · Scenic Coastal Headland",
    description:
      "A short scenic coastal walk leads over the rocky headland into picturesque Colomb Bay and the lively crescent of Palolem Beach.",
    x: 82,
    y: 28,
    category: "view",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Sunset Cocktails on the Beach",
    caption: "Watch tangerine sunsets across Patnem bay while sipping chilled margaritas and cocktails on the sand.",
    timeTag: "06:00 PM",
    location: "Casa Fiesta Beach Bar",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Fresh Seafood & Mexican Feasts",
    caption: "Indulge in grilled red snapper, butter garlic tiger prawns, crispy nachos, and spicy Goan prawn curries.",
    timeTag: "08:00 PM",
    location: "Casa Fiesta Restaurant",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Morning Sea-Breeze Breakfast",
    caption: "Wake up to ocean waves and enjoy fresh fruit pancakes, omelettes, and brewed coffee on your balcony.",
    timeTag: "08:30 AM",
    location: "Sea-Facing Hut Veranda",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Kayaking & Colomb Cove Adventures",
    caption: "Paddle a kayak across Patnem's sheltered bay or stroll the scenic trail to neighboring Colomb Bay.",
    timeTag: "10:30 AM",
    location: "Patnem Cove Waters",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Rustic Beach-Hut Living",
    caption: "Experience barefoot coastal living with soothing ocean breezes in our handcrafted wooden beach huts.",
    timeTag: "03:00 PM",
    location: "Oceanfront Wooden Huts",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Candlelit Sand Dining by the Waves",
    caption: "Dine under South Goa's starry skies with lantern-lit tables placed directly on Patnem sands.",
    timeTag: "09:30 PM",
    location: "Patnem Shoreline Tables",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Waves",
    title: "0m Directly on Patnem Beach",
    description: "Step straight from your hut or bungalow onto the soft golden sands of Patnem Beach.",
  },
  {
    icon: "Coffee",
    title: "Beach Shack Restaurant & Bar",
    description: "Renowned toe-in-the-sand dining serving fresh Goan seafood, Mexican specialties & cocktails.",
  },
  {
    icon: "Mountain",
    title: "Seafront Sunbeds & Umbrellas",
    description: "Complimentary reserved beachfront loungers with shaded umbrellas and all-day service.",
  },
  {
    icon: "ShieldCheck",
    title: "A/C Bungalows & Hot Showers",
    description: "Equipped with split air-conditioning, attached modern bathrooms, and 24/7 hot & cold water.",
  },
  {
    icon: "Gamepad2",
    title: "Free High-Speed Wi-Fi",
    description: "Complimentary wireless internet available across all huts, bungalows, and restaurant area.",
  },
  {
    icon: "Car",
    title: "Transfers & Scooter Rentals",
    description: "Easy booking for airport/station cabs, scooter hires, dolphin trips, and local South Goa tours.",
  },
  {
    icon: "Sparkles",
    title: "Family A/C Suites Available",
    description: "Spacious four-guest family suites with A/C, private veranda, and instant beach access.",
  },
  {
    icon: "Flame",
    title: "24/7 Reception & Daily Service",
    description: "Attentive front desk assistance, daily housekeeping, and luggage storage care.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Oliver & Mia Thompson",
    location: "Melbourne, Australia",
    rating: 5,
    comment:
      "Casa Fiesta was the highlight of our Goa trip! Staying in a Sea-Facing Wooden Hut right on the beach was an unforgettable experience. Waking up to the ocean sound, stepping directly onto the sand, and having amazing Mexican food and fresh fish curry right downstairs!",
    date: "November 2026",
  },
  {
    id: "r2",
    author: "Sameer & Ritu Malhotra",
    location: "Chandigarh, India",
    rating: 5,
    comment:
      "The Deluxe A/C Bungalow was spotless and the air conditioning was ice-cold. Patnem Beach is so clean and calm for swimming. Staff is super warm and helpful, and the sunset cocktails on the beach loungers are top notch.",
    date: "October 2026",
  },
  {
    id: "r3",
    author: "Hannah Lindqvist",
    location: "Stockholm, Sweden",
    rating: 5,
    comment:
      "Authentic South Goa beach hut charm! Great vibe, lovely food, good Wi-Fi for checking emails, and just a short walk over the rocks to Colomb Bay and Palolem. Canacona station is only 10 minutes away.",
    date: "September 2026",
  },
  {
    id: "r4",
    author: "Carlos Mendez",
    location: "Barcelona, Spain",
    rating: 4,
    comment:
      "Loved the food at Casa Fiesta restaurant—surprisingly good Mexican dishes right on an Indian beach! Clean room, hot water, and relaxing on the sunbeds all day was paradise.",
    date: "August 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "coastal",
    name: "Patnem Breeze",
    tagline: "Golden sands & tranquil turquoise Arabian Sea tides",
    bg: "linear-gradient(160deg, #f0f7f9 0%, #d4e9ee 55%, #1b6370 100%)",
    accent: "#165864",
    colorScheme: "mist",
  },
  {
    key: "sunset",
    name: "Fiesta Sunset",
    tagline: "Crimson horizons & beachfront cocktails on the sand",
    bg: "linear-gradient(160deg, #faf3ec 0%, #f1d5be 55%, #b56232 100%)",
    accent: "#b56232",
    colorScheme: "velora",
  },
  {
    key: "night",
    name: "Starlit Shore",
    tagline: "Candlelit beach tables beneath moonlit South Goa skies",
    bg: "linear-gradient(160deg, #0a111a 0%, #111d2e 55%, #050b11 100%)",
    accent: "#38bdf8",
    colorScheme: "night",
  },
] as const;
