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
  name: "Next-ta-Sea Resort",
  shortName: "Next-ta-Sea Palolem",
  subTitle: "Handcrafted Beachfront Bungalows & Suites",
  tagline: "Sea-Facing Wooden Bungalows, First-Floor Ocean Suites & Candlelit Palolem Dining in Canacona, South Goa",
  phone: "+91 70664 62502",
  phoneRaw: "+917066462502",
  phoneAlt: "+91 70664 62502",
  email: "nexttasea@gmail.com",
  website: "https://nexttasea.com",
  address: "Rosy Wing, Ourem Road, Mohanbagh, Palolem Beach, Canacona, South Goa 403702",
  landmark: "Directly on Palolem Beach sands, 2 km to Canacona Railway Station, close to Monkey Island & Colomb Bay",
  googleMapsQuery: "Next-ta-Sea+Resort+Palolem+Goa",
  googleMapsUrl: "https://www.google.com/maps/place/Next-ta-Sea+Resort/@15.007861,74.0260767,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbe459da1d6f51d:0xe3e5e2d3d0f0c2d9!5m2!4m1!1i2!8m2!3d15.007861!4d74.0260767!16s%2Fg%2F11pkckrv9n?entry=ttu",
  googleMapsEmbed: "https://maps.google.com/maps?q=15.007861,74.0260767&t=&z=16&ie=UTF8&iwloc=&output=embed",
  timings: "24/7 Front Desk · Seasonal Oceanfront Operations (Oct–May) · Beach Restaurant & Shack Bar",
  distanceHighlights: "0m directly on Palolem Beach | 2 km to Canacona Station | 5 mins to Butterfly Island Boats",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "first-floor-sea-view-suite",
    name: "First-Floor Direct Sea-View Suite",
    category: "Signature Ocean Panorama",
    tagline: "Elevated handcrafted wooden bungalow suite with private balcony overlooking Palolem Beach crescent",
    pricePerNight: 6500,
    capacity: "2–3 Guests",
    sizeSqFt: 380,
    bedType: "Plush King Size Bed",
    view: "Elevated Panoramic Palolem Bay & Twilight Horizon",
    description:
      "Perched on the upper level above Ourem's palm-lined sand, our First-Floor Direct Sea-View Suite commands sweeping aerial vistas across the entire Palolem crescent. Crafted in warm timber with a breezy sit-out veranda, crisp air-conditioning, hot water en-suite bath, and free Wi-Fi.",
    features: [
      "Private elevated balcony with unobstructed 180° Palolem Bay ocean views",
      "Direct 0-meter beach frontage right onto Palolem's calm crescent sands",
      "Silent split air-conditioning & crafted coastal wood interiors",
      "Attached modern washroom with 24/7 hot water shower & fresh linens",
      "High-speed Wi-Fi and in-room dining from our beach shack restaurant",
      "Complimentary reserved sun loungers & umbrellas on the sand",
    ],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "ground-sea-facing-bungalow",
    name: "Ground-Floor Sea-Facing Bungalow",
    category: "Step-Out Sandfront",
    tagline: "Handcrafted air-conditioned wooden beach bungalow opening directly onto Palolem sands",
    pricePerNight: 5200,
    capacity: "2 Guests",
    sizeSqFt: 330,
    bedType: "Comfort King Size Bed",
    view: "Direct Palolem Surf & Coconut Palms",
    description:
      "Leave your footwear on the porch and step straight from your wooden bungalow onto cool morning sands. Combining Palolem's iconic eco-wooden beach architecture with modern comfort, cool air-conditioning, hot showers, and attentive beachfront shack service.",
    features: [
      "Step straight from your private porch onto Palolem Beach sands",
      "Split air-conditioning with large breezy slatted windows",
      "Clean private en-suite bathroom with hot & cold water showers",
      "Complimentary wireless internet and cozy reading veranda",
      "Room service & candlelit dinner setup at the shoreline",
      "Kayak rental, scooter hire & Butterfly Beach boat support",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "deluxe-wooden-garden-cottage",
    name: "Deluxe Wooden Garden Cottage",
    category: "Colors Coastal Sanctuary",
    tagline: "Cozy handcrafted A/C wooden cottage shaded by coconut groves along Rosy Wing, Ourem Road",
    pricePerNight: 4000,
    capacity: "2 Guests",
    sizeSqFt: 290,
    bedType: "Plush Queen Bed",
    view: "Tropical Coconut Garden & Partial Shore Breeze",
    description:
      "Tucked peacefully behind the seafront row in our shaded coconut palm garden, Deluxe Wooden Cottages deliver restful sleep just 30 seconds from the water. Complete with private wooden sit-out deck, cool A/C, hot shower bath, and vibrant coastal colors.",
    features: [
      "Tranquil palm-shaded wooden sit-out balcony & outdoor chairs",
      "Crisp air-conditioning, ceiling fan & mosquito mesh screens",
      "Private bathroom with 24/7 hot water shower & fresh towels",
      "Free Wi-Fi ideal for workations & long winter stays",
      "30-second walk straight onto tranquil Mohanbagh / Palolem sand",
      "Friendly 24/7 reception & daily housekeeping",
    ],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "the-mild-kitchenette-cabin",
    name: "The Mild Kitchenette Cabin",
    category: "Extended Stay Studio",
    tagline: "Wooden studio cabin with fridge, induction cooktop & electric kettle for long Goa getaways",
    pricePerNight: 3200,
    capacity: "2 Guests",
    sizeSqFt: 300,
    bedType: "Comfort Double Bed",
    view: "Mohanbagh Garden Wing",
    description:
      "Part of our sister 'The Mild' collection tailored for slow-travelers, yoga enthusiasts, and winter snowbirds in Palolem. Features an equipped compact kitchenette with refrigerator, induction stove, and kettle alongside cozy A/C sleeping quarters and private patio.",
    features: [
      "Equipped kitchenette with fridge, induction cooktop & electric kettle",
      "Ideal for long coastal stays, digital nomads & slow travelers",
      "Cool split air-conditioning & private attached hot-water bath",
      "Free Wi-Fi & peaceful garden wing along Ourem Road",
      "Only steps from Palolem Beach & cafes in Mohanbagh",
      "Available with flexible weekly & monthly winter rates",
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
    id: "palolem-crescent-shore",
    title: "Palolem Beach Crescent",
    subtitle: "0m · Calm Protected Bay",
    description:
      "Walk straight out from Next-ta-Sea onto Palolem's iconic mile-long golden crescent. Calm shallow waters make it ideal for sunrise swims and paddleboarding.",
    x: 24,
    y: 36,
    category: "deck",
  },
  {
    id: "next-ta-sea-shack",
    title: "Next-ta-Sea Beach Restaurant & Bar",
    subtitle: "Candlelit Sands & Coastal Cocktails",
    description:
      "Savor fresh catch tandoori fish, Goan prawn curry, continental breakfasts, and tropical cocktails from sunrise smoothies to candlelit beach dinners.",
    x: 62,
    y: 58,
    category: "interior",
  },
  {
    id: "monkey-island-view",
    title: "Canacona / Monkey Island Horizon",
    subtitle: "Palolem North Headland · Boat Access",
    description:
      "Look across the bay toward wooded Canacona Island, or hop aboard a morning kayak or fisherman boat to secluded Butterfly & Honeymoon Beaches.",
    x: 82,
    y: 28,
    category: "view",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Crimson Sunsets on Palolem Bay",
    caption: "Watch the sky turn deep gold above Palolem's calm crescent from your first-floor balcony.",
    timeTag: "06:00 PM",
    location: "Next-ta-Sea Oceanfront Deck",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Sunrise Yoga & Shore Breakfast",
    caption: "Start mornings with seasonal coastal yoga followed by fresh smoothies, eggs, and filter coffee.",
    timeTag: "07:30 AM",
    location: "Mohanbagh Shoreline",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Candlelit Sand Dinners",
    caption: "Feast on fresh grilled snapper, Goan seafood thalis, and multi-cuisine classics by lantern light.",
    timeTag: "08:00 PM",
    location: "Next-ta-Sea Beachfront Kitchen",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Kayaking to Butterfly Beach",
    caption: "Paddle across sheltered Palolem waters to explore hidden coves and Monkey Island at low tide.",
    timeTag: "10:00 AM",
    location: "Palolem Cove Waters",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Breezy Wooden Bungalow Living",
    caption: "Unwind in handcrafted timber cabins blending South Goa beach-hut charm with modern A/C luxury.",
    timeTag: "03:00 PM",
    location: "Rosy Wing Cottages",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Airport & Station Pickup Care",
    caption: "Seamless private transfers connecting Canacona Station (2 km) and Dabolim/Mopa airports.",
    timeTag: "24 Hours",
    location: "Next-ta-Sea Reception",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Waves",
    title: "0m Directly on Palolem Beach",
    description: "Unmatched direct beach frontage along Palolem's calm, picturesque southern shore.",
  },
  {
    icon: "Coffee",
    title: "Multi-Cuisine Shack & Candlelit Dining",
    description: "On-site seaside restaurant & bar serving fresh seafood, Goan curries, Indian & continental dishes.",
  },
  {
    icon: "Mountain",
    title: "Private Sea-Facing Balconies",
    description: "Upper-floor and ground-level timber decks equipped with cozy coastal seating.",
  },
  {
    icon: "ShieldCheck",
    title: "24/7 Front Desk & Room Service",
    description: "Attentive local hospitality, daily housekeeping, hot showers, and in-room dining.",
  },
  {
    icon: "Gamepad2",
    title: "Free High-Speed Wi-Fi",
    description: "Complimentary Wi-Fi coverage across seafront bungalows, suites, and beachfront lounge.",
  },
  {
    icon: "Car",
    title: "Bike Rentals & Airport Transfers",
    description: "Seamless airport shuttle requests, Canacona Railway Station cabs, and scooter rentals.",
  },
  {
    icon: "Sparkles",
    title: "Complimentary Loungers & Sunbeds",
    description: "Relax beneath shaded umbrellas directly outside the resort on private beachfront loungers.",
  },
  {
    icon: "Flame",
    title: "Sunrise Yoga & Boat Excursions",
    description: "Arrange sunrise beach yoga, dolphin watching boats, kayaks, and Butterfly Island trips.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Elena & Lukas Weber",
    location: "Munich, Germany",
    rating: 5,
    comment:
      "Next-ta-Sea Resort has the prettiest wooden bungalows on Palolem! Our First-Floor Sea-View Suite had a panoramic balcony right above the palms. Waking up to waves and candlelit dinners on the sand was unforgettable.",
    date: "October 2026",
  },
  {
    id: "r2",
    author: "Siddharth & Ananya Nair",
    location: "Bengaluru, Karnataka",
    rating: 5,
    comment:
      "Loved staying at Rosy Wing along Ourem Road—quiet, spotless, and literally zero steps from Palolem Beach. The restaurant's Goan fish curry and garlic naan were amazing, and Wi-Fi worked smoothly for remote work.",
    date: "September 2026",
  },
  {
    id: "r3",
    author: "Sophie Laurent",
    location: "Lyon, France",
    rating: 5,
    comment:
      "Stayed two weeks in The Mild kitchenette cabin and extended by another week because we couldn't leave Palolem! Super friendly team, peaceful mornings, and kayaks right outside for Butterfly Beach.",
    date: "March 2026",
  },
  {
    id: "r4",
    author: "Rohan Deshmukh",
    location: "Pune, Maharashtra",
    rating: 5,
    comment:
      "Authentic handcrafted Palolem beach-hut aesthetic with crisp A/C and reliable hot showers. Less than 10 minutes from Canacona railway station and right in the sweet spot of Mohanbagh.",
    date: "February 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "coastal",
    name: "Palolem Mist",
    tagline: "Sunlit Palolem shoreline & emerald Arabian Sea crescent",
    bg: "linear-gradient(160deg, #f0f7f9 0%, #d4e9ee 55%, #1b6370 100%)",
    accent: "#165864",
    colorScheme: "mist",
  },
  {
    key: "sunset",
    name: "Ourem Sunset",
    tagline: "Crimson sunsets & candlelit tables on Mohanbagh sands",
    bg: "linear-gradient(160deg, #faf3ec 0%, #f1d5be 55%, #b56232 100%)",
    accent: "#b56232",
    colorScheme: "velora",
  },
  {
    key: "night",
    name: "Starlit Bay",
    tagline: "Moonlit tides & calm evening breezes across Palolem",
    bg: "linear-gradient(160deg, #0a111a 0%, #111d2e 55%, #050b11 100%)",
    accent: "#38bdf8",
    colorScheme: "night",
  },
] as const;
