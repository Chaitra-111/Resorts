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
  name: "The Tito's Orange Sky Agonda Beach Resort",
  shortName: "Tito's Orange Sky",
  subTitle: "Beachfront Cottages, Jacuzzi & Sunset Dining",
  tagline: "Private Jacuzzi Beach Bungalows, Golden Sands & Serene Sunset Dining on Agonda Beach, South Goa",
  phone: "+91 93562 20116",
  phoneRaw: "+919356220116",
  phoneAlt: "+91 88053 89094",
  email: "stay@orangeskyagonda.com",
  website: "https://orangeskyagonda.com",
  address: "Plot No. 118/1, Igarzwada, Near St. Anne's Church, Agonda Beach Road, Agonda, Canacona, South Goa 403702",
  landmark: "Directly on Agonda Beach shoreline, near St. Anne's Church, 8 km from Palolem",
  googleMapsQuery: "The+Tito%27s+Orange+Sky+Agonda+Beach+Resort+Goa",
  googleMapsUrl: "https://www.google.com/maps/place/THE+TITO'S+Orange+sky+Agonda+beach+resort/@15.0406846,73.9881029,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbe4fe0a3d5aa33:0x942e06279bfc47be!5m2!4m1!1i2!8m2!3d15.0406846!4d73.9881029!16s%2Fg%2F11k3kvpxw3?entry=ttu",
  googleMapsEmbed: "https://maps.google.com/maps?q=THE+TITO%27S+Orange+sky+Agonda+beach+resort+Goa&t=&z=16&ie=UTF8&iwloc=&output=embed",
  justdialLink: "https://www.justdial.com/Goa/The-Titos-Orange-Sky-Agonda-Beach-Resort-Near-St-Annes-Church-Agonda/0832PX832-X832-230214174810-N8A9_BZDET",
  timings: "24/7 Front Desk · Beachfront Restaurant & Sunbeds 7:30 AM – 11:30 PM",
  distanceHighlights: "0m on Agonda Beach (Direct Sand) | Private Jacuzzi Bungalows | 8 km to Palolem & Cola Lagoon",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "private-jacuzzi-beach-bungalow",
    name: "Private Jacuzzi Beach Bungalow",
    category: "Signature Oceanfront Luxury",
    tagline: "Exclusive beachfront wooden cottage with private outdoor heated jacuzzi overlooking Agonda Beach",
    pricePerNight: 7500,
    capacity: "2–3 Guests",
    sizeSqFt: 480,
    bedType: "Extra-Large Canopy King Bed",
    view: "Unobstructed Arabian Sea & Orange Sky Sunsets",
    description:
      "Our flagship romantic sanctuary on Agonda Beach. Unwind inside your private outdoor jacuzzi on a timber veranda while watching crimson sunsets melt into the ocean. Equipped with bespoke teak interiors, split air-conditioning, mini bar, high-speed Wi-Fi, and direct sand access.",
    features: [
      "Private outdoor jacuzzi on beachfront wooden terrace",
      "Direct 10-second walk onto the golden sands of Agonda Beach",
      "Silent split air-conditioning & climate control",
      "Extra-large king bed with premium cotton linens & mosquito net",
      "Complimentary beach sunbeds & umbrellas with butler service",
      "Attached luxury bath with rain shower and 24/7 hot water",
    ],
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "seafront-beach-cottage",
    name: "Seafront Beach Cottage",
    category: "Direct Beachfront",
    tagline: "Air-conditioned wooden beach chalet steps from the surf with sunset balcony seating",
    pricePerNight: 6200,
    capacity: "2 Guests",
    sizeSqFt: 380,
    bedType: "Plush King Size Bed",
    view: "Panoramic Agonda Shoreline & Rolling Surf",
    description:
      "Fall asleep to the peaceful symphony of Arabian Sea waves. Crafted in warm tropical hardwood right along Agonda's shoreline, these cottages boast wide sunset verandas with cushioned lounge chairs, modern split A/C, coffee/tea maker, and instant beach access.",
    features: [
      "Front-row oceanfront patio with cushioned daybed & chairs",
      "Steps away from the calm swimming cove of Agonda",
      "Silent split air-conditioner and timber ceiling fans",
      "Clean modern bathroom with 24/7 pressurized hot showers",
      "Dedicated sun loungers reserved right on the sand",
      "Room service from The Tito's Orange Sky Beach Restaurant",
    ],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "garden-breeze-deluxe-cottage",
    name: "Garden Breeze Deluxe Cottage",
    category: "Tropical Palm Retreat",
    tagline: "Quiet air-conditioned chalet nestled amidst coconut palms just 30 steps from the waves",
    pricePerNight: 4800,
    capacity: "2–3 Guests",
    sizeSqFt: 350,
    bedType: "King Size Bed + Option for Extra Bed",
    view: "Lush Coconut Palms & Landscaped Courtyard",
    description:
      "Surrounded by tropical hibiscus blooms and swaying coconut fronds, this peaceful chalet offers refreshing sanctuary after a sun-soaked day at the beach. Complete with private patio, comfortable seating, work desk, mini fridge, and speedy Wi-Fi.",
    features: [
      "Private shaded garden veranda surrounded by tropical palms",
      "Silent split air-conditioning & ceiling fan",
      "High-speed wireless internet connectivity",
      "Attached spacious bathroom with toiletries & hot water",
      "30-second stroll through the garden straight onto the sand",
      "Daily housekeeping & fresh beach towels provided",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "deluxe-balcony-courtyard-room",
    name: "Deluxe Courtyard Balcony Room",
    category: "Coastal Value Suite",
    tagline: "Comfortable first-floor A/C room with elevated balcony overlooking coconut groves and sea glimpses",
    pricePerNight: 4200,
    capacity: "2 Guests",
    sizeSqFt: 300,
    bedType: "Comfort King Bed",
    view: "Courtyard Palms & Partial Sea View",
    description:
      "Elevated for cool coastal cross-breezes and treetop vistas. Ideal for couples, digital nomads, and long-stay travelers enjoying Agonda's peaceful rhythm with full access to resort sunbeds, restaurant dining, and kayak excursions.",
    features: [
      "Elevated private balcony catching gentle coastal breezes",
      "Air-conditioned bedroom with spacious wardrobe & seating",
      "Complimentary high-speed Wi-Fi suitable for remote work",
      "Modern en-suite bathroom with hot & cold water",
      "Full access to beachfront sun loungers & umbrellas",
      "Scooter rental and Butterfly Beach boat trip desk",
    ],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export const RESORT_HOTSPOTS: Hotspot[] = [
  {
    id: "private-jacuzzi-deck",
    title: "Private Jacuzzi Beach Bungalows",
    subtitle: "Oceanfront Bliss & Warm Soaks",
    description:
      "Indulge in your private beachfront heated jacuzzi under golden Agonda twilight skies while listening to the gentle roar of Arabian Sea waves.",
    x: 26,
    y: 44,
    category: "deck",
  },
  {
    id: "agonda-sunset-restaurant",
    title: "Orange Sky Beach Restaurant & Bar",
    subtitle: "Toes-in-the-Sand Dining",
    description:
      "Savor wood-fired coastal delicacies, fresh Goan fish curries, sizzling seafood platters, and signature sundowner cocktails right on the sand.",
    x: 62,
    y: 58,
    category: "interior",
  },
  {
    id: "agonda-beach-cove",
    title: "Pristine Agonda Shoreline",
    subtitle: "0m · Turtle Nesting & Quiet Sands",
    description:
      "Ranked among Asia's finest beaches — famous for tranquil golden stretches, Olive Ridley turtle conservation, dolphin watching, and kayaking to Butterfly Beach.",
    x: 80,
    y: 28,
    category: "view",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Orange Sky Sunsets & Cocktails",
    caption: "Watch Agonda's legendary tangerine sunsets from beachfront sun loungers with handcrafted Tito's cocktails.",
    timeTag: "06:00 PM",
    location: "Orange Sky Beach Bar",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Private Jacuzzi Relaxation",
    caption: "Soak in warm bubbling waters on your private beachfront deck with ocean waves just steps away.",
    timeTag: "04:30 PM",
    location: "Jacuzzi Beach Bungalow",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Candlelit Seafood Dinners",
    caption: "Feast on fresh grilled tiger prawns, Goan fish curry rice, and tandoori catch beneath the stars.",
    timeTag: "08:15 PM",
    location: "Agonda Beachfront Dining",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Kayaking to Butterfly Beach",
    caption: "Launch straight from Agonda sands for morning dolphin spotting boats and secluded cove kayaking.",
    timeTag: "09:30 AM",
    location: "Agonda Bay Waters",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Morning Yoga & Palm Breeze",
    caption: "Greet the peaceful South Goa morning surrounded by coconut groves and uninterrupted ocean breeze.",
    timeTag: "07:15 AM",
    location: "Palm Garden Courtyard",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Starlit Shore Strolls",
    caption: "Experience Agonda's peaceful, uncrowded moonlit beach walks before retiring to your cozy timber chalet.",
    timeTag: "10:30 PM",
    location: "Agonda Golden Sands",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Waves",
    title: "0m on Agonda Beach",
    description: "Unbeatable direct beachfront property with private step-out access onto tranquil golden sands.",
  },
  {
    icon: "Sparkles",
    title: "Private Jacuzzi Cottages",
    description: "Select luxury beach bungalows feature an exclusive private outdoor jacuzzi with sea breeze.",
  },
  {
    icon: "Coffee",
    title: "Beach Restaurant & Bar",
    description: "Open-air seafront dining serving Goan seafood, wood-fired specialties, breakfasts, and cocktails.",
  },
  {
    icon: "Mountain",
    title: "Reserved Beach Sunbeds",
    description: "Complimentary cushioned sun loungers and beach umbrellas serviced all day for resort guests.",
  },
  {
    icon: "ShieldCheck",
    title: "24/7 Front Desk & Care",
    description: "Friendly Tito's hospitality team offering round-the-clock reception, luggage hold, and taxi booking.",
  },
  {
    icon: "Gamepad2",
    title: "High-Speed Wi-Fi",
    description: "Dependable wireless internet across all wooden cottages, balcony suites, and the beach deck.",
  },
  {
    icon: "Car",
    title: "Canacona & Airport Transfers",
    description: "Convenient cab arrangements from Canacona Station (10 km) and Goa Dabolim / Mopa airports.",
  },
  {
    icon: "Flame",
    title: "Kayaking & Boat Excursions",
    description: "Direct booking for Butterfly Beach boat trips, dolphin cruises, kayaking, and scooter rentals.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Aarav & Kiara Deshmukh",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment:
      "The Private Jacuzzi Beach Bungalow at Tito's Orange Sky was sheer magic! Watching the glowing orange sunset over Agonda Beach from our balcony jacuzzi was unforgettable. The staff is warm, food at the restaurant is delicious, and the beach right outside is spotless and serene.",
    date: "October 2026",
  },
  {
    id: "r2",
    author: "Liam & Hannah Gallagher",
    location: "Dublin, Ireland",
    rating: 5,
    comment:
      "Agonda is paradise and Orange Sky sits right on the best stretch of it near St. Anne's Church. The wooden cottages are spacious, A/C works great, beds are super comfortable, and walking out barefoot onto the beach for morning coffee is priceless.",
    date: "September 2026",
  },
  {
    id: "r3",
    author: "Nikhil & Tanya Verma",
    location: "Bengaluru, Karnataka",
    rating: 5,
    comment:
      "Best beach resort in Agonda! Fresh butter garlic prawns, friendly waiters, comfy beach loungers, and clean cozy rooms. They even arranged our boat trip to Butterfly Beach and taxi to Canacona railway station seamlessly.",
    date: "August 2026",
  },
  {
    id: "r4",
    author: "Sofia Lindqvist",
    location: "Stockholm, Sweden",
    rating: 5,
    comment:
      "Peaceful, romantic, and unspoilt South Goa charm. Unlike busy North Goa beaches, here you hear only the waves. The sunset drinks and candlelit dinners on the sand made our holiday extraordinary.",
    date: "July 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "sunset",
    name: "Orange Sky Sunset",
    tagline: "Iconic tangerine sunset twilight & glowing Agonda beach waves",
    bg: "linear-gradient(160deg, #faf3ec 0%, #f1d5be 55%, #b56232 100%)",
    accent: "#b56232",
    colorScheme: "velora",
  },
  {
    key: "coastal",
    name: "Agonda Breeze",
    tagline: "Crisp morning surf & palm-shaded beachfront chalets",
    bg: "linear-gradient(160deg, #f0f7f9 0%, #d4e9ee 55%, #1b6370 100%)",
    accent: "#165864",
    colorScheme: "mist",
  },
  {
    key: "night",
    name: "Starlit Shore",
    tagline: "Calm moonlit Agonda bay & candlelit beach shack tables",
    bg: "linear-gradient(160deg, #0a111a 0%, #111d2e 55%, #050b11 100%)",
    accent: "#f97316",
    colorScheme: "night",
  },
] as const;
