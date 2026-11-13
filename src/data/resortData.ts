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
  name: "Dreams of Palolem Beach Resort",
  shortName: "Dreams of Palolem",
  subTitle: "Handcrafted Wooden Cottages & Beach Huts",
  tagline: "Eco Wooden Cottages, Rustic Beach Huts & Multi-Cuisine Dining Moments from Palolem Shore in South Goa",
  phone: "+91 96733 66823",
  phoneRaw: "+919673366823",
  phoneAlt: "+91 96733 66823",
  email: "stay@dreamsofpalolem.com",
  website: "https://dreamsofpalolem.com",
  address: "Plot No. 103/5-B (H.No. 61/1A), Ourem Road, Mohanbagh, Palolem Beach, Canacona, South Goa 403702",
  landmark: "100m to Ourem / Palolem Beach sands, 2 km to Canacona Railway Station, near Colomb Bay trail",
  googleMapsQuery: "Dreams+of+Palolem+Beach+Resort+Goa",
  googleMapsUrl: "https://www.google.com/maps/place/Dreams+of+Palolem+Beach+Resort/@15.0069865,74.0266428,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbe454da3c29289:0x8fbb1b6e81b2589e!5m2!4m1!1i2!8m2!3d15.0069865!4d74.0266428!16s%2Fg%2F11gfh9bb1q?entry=ttu",
  googleMapsEmbed: "https://maps.google.com/maps?q=15.0069865,74.0266428&t=&z=16&ie=UTF8&iwloc=&output=embed",
  timings: "24/7 Front Desk · On-Site Multi-Cuisine Restaurant & Bar 7:30 AM – 11:30 PM",
  distanceHighlights: "100m to Palolem Beach sands | 2 km to Canacona Station | 5 mins to Butterfly Beach boats",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "deluxe-wooden-beach-cottage",
    name: "Deluxe Wooden Beach Cottage",
    category: "Signature Timber Retreat",
    tagline: "Handcrafted eco-wooden cottage with private balcony sit-out just 100 meters from Palolem sands",
    pricePerNight: 4800,
    capacity: "2–3 Guests",
    sizeSqFt: 350,
    bedType: "Plush King Size Bed",
    view: "Palm Garden & Gentle Sea Breeze",
    description:
      "Crafted from warm natural timber along quiet Ourem Road in Mohanbagh, our Deluxe Wooden Beach Cottage offers the quintessential Palolem experience. Complete with a private shaded balcony, silent split A/C, modern en-suite bath with hot shower, and comfortable king bedding.",
    features: [
      "Private shaded wooden veranda with outdoor lounge chairs",
      "Only 100 meters (under 2-min walk) to Palolem Beach sand",
      "Silent split air-conditioning & natural wooden insulation",
      "Attached modern washroom with 24/7 hot water & fresh linens",
      "High-speed Wi-Fi and in-room dining from our restaurant",
      "Assistance for boat trips, dolphin cruises & scooter rentals",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "traditional-palolem-beach-hut",
    name: "Traditional Palolem Beach Hut",
    category: "Rustic Coastal Living",
    tagline: "Authentic coastal beach hut with thatched styling, crisp A/C & cozy porch steps from the shore",
    pricePerNight: 3800,
    capacity: "2 Guests",
    sizeSqFt: 300,
    bedType: "Comfort Double Bed",
    view: "Mohanbagh Coconut Grove",
    description:
      "Embrace South Goa's bohemian beach spirit with traditional thatched architecture paired with modern split A/C and attached hot-water showers. Step out each morning to the gentle rustle of coconut fronds and the sound of Palolem's calm bay waters.",
    features: [
      "Traditional thatched roof aesthetic with modern split A/C",
      "Private attached bathroom with hot and cold shower facilities",
      "Cozy sit-out porch overlooking tropical coconut trees",
      "Free high-speed wireless internet across the hut",
      "100 meters to Ourem Beach shacks and sunset viewpoints",
      "Daily housekeeping & friendly 24-hour reception service",
    ],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "family-quad-wooden-cottage",
    name: "Family Quad Wooden Cottage",
    category: "Spacious Group Haven",
    tagline: "Large two-bed wooden cottage designed for families and friend groups visiting Palolem",
    pricePerNight: 6500,
    capacity: "4–5 Guests",
    sizeSqFt: 520,
    bedType: "Two Plush Queen Beds",
    view: "Garden Courtyard & Shaded Palms",
    description:
      "Perfect for families with kids or groups of friends wanting to stay together near the beach. Features two queen beds, extra seating space, silent air-conditioning, attached modern bath with hot water, and a wide wooden veranda for evening conversations.",
    features: [
      "Two comfortable queen beds accommodating up to 4–5 guests",
      "Spacious covered wooden veranda with garden seating",
      "High-power split air-conditioner & timber ceiling fans",
      "Modern private washroom with pressurized hot showers",
      "Room service from Dreams of Palolem multi-cuisine kitchen",
      "Quiet Mohanbagh setting with zero late-night beach noise",
    ],
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "standard-ac-garden-room",
    name: "Standard A/C Garden Room",
    category: "Pocket-Friendly Coastal Stay",
    tagline: "Comfortable air-conditioned solid-structure room ideal for solo travelers & couples",
    pricePerNight: 3200,
    capacity: "2 Guests",
    sizeSqFt: 270,
    bedType: "Comfort Double Bed",
    view: "Palm Garden Courtyard",
    description:
      "A peaceful, budget-conscious choice for travelers who value restful sleep and solid structure insulation while remaining just 100 meters from Palolem Beach. Features split air-conditioning, clean attached bath with hot water, and free Wi-Fi.",
    features: [
      "Solid construction offering quiet, temperature-controlled comfort",
      "Split air-conditioner and comfortable double bedding",
      "Clean private bathroom with 24/7 hot water supply",
      "High-speed Wi-Fi ideal for remote working nomads",
      "2-minute stroll to Palolem sands, cafes, and yoga studios",
      "Assistance for Canacona Station & Goa airport transfers",
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
    id: "palolem-beach-access",
    title: "Palolem Beach & Ourem Shore",
    subtitle: "100m Walk · Crescent Bay",
    description:
      "Walk barely 100 meters from your cottage porch straight onto Palolem's tranquil southern crescent at Ourem—perfect for morning swimming, paddleboarding, and sunset walks.",
    x: 22,
    y: 35,
    category: "view",
  },
  {
    id: "dreams-restaurant",
    title: "Dreams of Palolem Multi-Cuisine Restaurant & Bar",
    subtitle: "Goan Seafood & Tandoori Grills",
    description:
      "Savor freshly caught tandoori kingfish, authentic Goan prawn curries, Chinese wok specials, and chilled sunset beers served in our breezy open dining pavilion.",
    x: 65,
    y: 50,
    category: "interior",
  },
  {
    id: "palm-garden-courtyard",
    title: "Tropical Mohanbagh Palm Courtyard",
    subtitle: "Lush Garden · Shaded Retreat",
    description:
      "Relax in our peaceful green courtyard shaded by towering coconut palms, offering a calm respite from the open beach sun.",
    x: 48,
    y: 65,
    category: "deck",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Crimson Sunsets on Palolem Sands",
    caption: "Stroll 100 meters to the beach to watch South Goa's legendary tangerine sunsets over the Arabian Sea.",
    timeTag: "06:15 PM",
    location: "Palolem Beach Crescent",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Fresh Seafood & Tandoori Feasts",
    caption: "Feast on butter garlic jumbo prawns, crispy calamari rava fry, and tandoori specials at our restaurant.",
    timeTag: "08:00 PM",
    location: "Dreams Restaurant & Bar",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Morning Coffee on Wooden Porch",
    caption: "Wake up to birdsong and fresh sea breeze on your private cottage veranda surrounded by palms.",
    timeTag: "08:30 AM",
    location: "Deluxe Cottage Veranda",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Kayaking & Butterfly Beach Trips",
    caption: "Rent a kayak or take a morning dolphin boat from Ourem shore to Butterfly and Honeymoon beaches.",
    timeTag: "10:00 AM",
    location: "Ourem Cove Waters",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Cozy Beach-Hut Living",
    caption: "Experience rustic coastal living with modern air-conditioned comfort in our handcrafted huts.",
    timeTag: "03:30 PM",
    location: "Palolem Beach Huts",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Starlit Acoustic Evenings",
    caption: "Unwind under palm trees with chilled drinks, soft background tunes, and warm hospitality.",
    timeTag: "09:30 PM",
    location: "Garden Lounge & Bar",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Waves",
    title: "100m to Palolem Beach",
    description: "Short 2-minute stroll to the calm golden crescent of Palolem and Ourem Beach.",
  },
  {
    icon: "Coffee",
    title: "Multi-Cuisine Restaurant & Bar",
    description: "Serving fresh Goan seafood, North Indian, tandoori grills, Chinese, and continental favorites.",
  },
  {
    icon: "Mountain",
    title: "Handcrafted Wooden Cottages & Huts",
    description: "Eco-friendly wooden cottages and traditional thatched beach huts with private verandas.",
  },
  {
    icon: "ShieldCheck",
    title: "Split A/C & 24/7 Hot Water",
    description: "Every room features split air-conditioning, attached modern bath with hot showers, and room service.",
  },
  {
    icon: "Gamepad2",
    title: "Free High-Speed Wi-Fi",
    description: "Reliable Wi-Fi access throughout cottages, rooms, restaurant, and garden courtyard.",
  },
  {
    icon: "Car",
    title: "Scooter Rentals & Tour Desk",
    description: "Easy arrangements for rental bikes, airport/station taxi transfers, and dolphin boat trips.",
  },
  {
    icon: "Sparkles",
    title: "Family Quad Cottages Available",
    description: "Spacious wooden cottages with two queen beds, ideal for families and group vacations.",
  },
  {
    icon: "Flame",
    title: "24-Hour Reception & Housekeeping",
    description: "Attentive around-the-clock front desk, daily housekeeping, and doctor-on-call assistance.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Rahul & Sneha Deshpande",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment:
      "Dreams of Palolem is a wonderful gem in South Goa! Staying in the Deluxe Wooden Cottage was so comfortable—just a 2-minute walk to Palolem Beach, excellent food at the restaurant, and very peaceful at night.",
    date: "November 2026",
  },
  {
    id: "r2",
    author: "Liam & Jessica O'Connor",
    location: "Dublin, Ireland",
    rating: 5,
    comment:
      "Loved the rustic beach-hut vibe with proper A/C and hot showers. Staff was incredibly helpful, arranging scooters to explore Colomb and Butterfly Beach. Fish curry at their restaurant is delicious!",
    date: "October 2026",
  },
  {
    id: "r3",
    author: "Pooja & Amit Verma",
    location: "Delhi NCR",
    rating: 5,
    comment:
      "We stayed in the Family Quad Cottage with our two kids. Plenty of room, great veranda to relax on, and so close to the calm beach waters where the kids could safely swim. Canacona station is only 5 minutes away.",
    date: "September 2026",
  },
  {
    id: "r4",
    author: "Camille Dupont",
    location: "Bordeaux, France",
    rating: 4,
    comment:
      "Very relaxed atmosphere in Mohanbagh along Ourem Road. Clean room, comfortable bed, good Wi-Fi for work, and steps from the beach shacks and yoga spots.",
    date: "August 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "coastal",
    name: "Palolem Dawn",
    tagline: "Golden morning shoreline & calm emerald bay tides",
    bg: "linear-gradient(160deg, #f0f7f9 0%, #d4e9ee 55%, #1b6370 100%)",
    accent: "#165864",
    colorScheme: "mist",
  },
  {
    key: "sunset",
    name: "Ourem Glow",
    tagline: "Crimson sunsets & warm evening dining in Mohanbagh",
    bg: "linear-gradient(160deg, #faf3ec 0%, #f1d5be 55%, #b56232 100%)",
    accent: "#b56232",
    colorScheme: "velora",
  },
  {
    key: "night",
    name: "Starlit Palm",
    tagline: "Gentle night breezes through swaying coconut palms",
    bg: "linear-gradient(160deg, #0a111a 0%, #111d2e 55%, #050b11 100%)",
    accent: "#38bdf8",
    colorScheme: "night",
  },
] as const;
