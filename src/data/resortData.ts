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
  name: "Sapphire Sand Resort",
  shortName: "Sapphire Sand Agonda",
  subTitle: "Poolside Thatched Cabanas & 2-BHK Villa",
  tagline: "Freeform Winding Pool Cabanas, Multi-Cuisine Dining & 1-Minute Walk to Agonda Beach in South Goa",
  phone: "+91 85510 37073",
  phoneRaw: "+918551037073",
  phoneAlt: "+91 97651 86400",
  email: "stay@sapphiresandagonda.com",
  website: "https://sapphiresandagonda.com",
  address: "Building No. 312, Beach Road, Dhavalkhazan, Agonda, Canacona, South Goa 403702",
  landmark: "300m (1-min walk) to Agonda Beach sands, near Cola Lagoon (4 km) & Butterfly Beach",
  googleMapsQuery: "Sapphire+Sand+Resort+Agonda+Goa",
  googleMapsUrl: "https://www.google.com/maps/place/Sapphire+sand+resort/@15.047317,73.9858527,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbe4f0015972b8d:0xb7069ccabcd75adc!5m2!4m1!1i2!8m2!3d15.047317!4d73.9858527!16s%2Fg%2F11y_zz195j?entry=ttu",
  googleMapsEmbed: "https://maps.google.com/maps?q=15.047317,73.9858527&t=&z=16&ie=UTF8&iwloc=&output=embed",
  timings: "24/7 Reception & Power Backup · Poolside Multi-Cuisine Restaurant 7:30 AM – 11:00 PM",
  distanceHighlights: "1-min walk (300m) to Agonda Beach | 4 km to Cola Lagoon | 10 km to Canacona Station",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "luxury-pool-view-cabana",
    name: "Luxury Pool-View Cabana Suite",
    category: "Signature Winding Poolside",
    tagline: "Boutique thatched-roof cabana opening right onto our winding freeform swimming pool",
    pricePerNight: 5200,
    capacity: "2–3 Guests",
    sizeSqFt: 370,
    bedType: "Plush King Size Bed",
    view: "Freeform Winding Pool & Tropical Palms",
    description:
      "Step directly from your private shaded porch onto the deck of Sapphire Sand's signature winding freeform swimming pool. Designed as an intimate 12-cabana boutique hideaway featuring eco-thatched roofing, cool split A/C, flat-screen TV, electric kettle, hot water supply, and uninterrupted inverter power backup.",
    features: [
      "Private sit-out porch directly overlooking the winding freeform pool",
      "Plush King-sized bed with crisp white linens & reading lights",
      "Split air-conditioning, flat-screen TV & tea/coffee electric kettle",
      "Modern en-suite bath with 24/7 hot water & bath amenities",
      "High-speed Wi-Fi and dependable inverter power backup",
      "Only a 1-minute walk (300m) to serene Agonda Beach sands",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "two-bhk-coastal-villa",
    name: "2-BHK Poolside Family Villa",
    category: "Private Group Villa",
    tagline: "Spacious two-bedroom coastal villa for families & groups steps from the winding pool",
    pricePerNight: 9500,
    capacity: "4–6 Guests",
    sizeSqFt: 850,
    bedType: "Two King Size Bedrooms",
    view: "Winding Pool & Dhavalkhazan Coconut Grove",
    description:
      "Crafted for families, close friends, and extended Agonda stays seeking privacy together under one roof. Features two air-conditioned bedrooms, lounge seating, flat-screen TV, electric kettle setup, private porch, and instant access to our pool and multi-cuisine restaurant.",
    features: [
      "Two separate air-conditioned bedrooms with King beds",
      "Private veranda lounge overlooking palm gardens & pool deck",
      "Flat-screen TV, electric kettle & full power backup support",
      "Two modern attached baths with hot water supply",
      "Room service from Sapphire Sand multi-cuisine kitchen",
      "Short 1-minute stroll to Northern Agonda Beach & Sunset Cove",
    ],
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "deluxe-thatched-cabana",
    name: "Deluxe Poolside Cabana",
    category: "Boutique Cabana",
    tagline: "Intimate thatched-roof cabana blending coastal warmth, A/C comfort & pool proximity",
    pricePerNight: 4200,
    capacity: "2 Guests",
    sizeSqFt: 320,
    bedType: "Plush King Size Bed",
    view: "Pool Courtyard & Tropical Foliage",
    description:
      "One of only 12 boutique cabanas nestled inside Sapphire Sand's serene garden courtyard in Dhavalkhazan. Relax beside the meandering pool, enjoy cool split air-conditioning, watch sunset skies from Agonda Beach 300m away, and savor fresh Goan dining on-site.",
    features: [
      "Intimate 12-unit thatched cabana architecture for quiet serenity",
      "Split air-conditioning, flat-screen TV & electric kettle",
      "Free high-speed Wi-Fi and full inverter power backup",
      "24/7 hot water private shower & complimentary toiletries",
      "Direct access to poolside sun loungers and multi-cuisine dining",
      "Easy scooter/car rental & Cola Lagoon excursion desk",
    ],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "garden-sanctuary-cabana",
    name: "Garden Retreat Cabana",
    category: "Tranquil Escape",
    tagline: "Peaceful A/C thatched cabana framed by Agonda's coastal palms near Beach Road",
    pricePerNight: 3500,
    capacity: "2 Guests",
    sizeSqFt: 285,
    bedType: "Comfort King Size Bed",
    view: "Shaded Botanical Courtyard",
    description:
      "Tailored for solo explorers, couples, and mindful travelers looking for tranquil South Goa comfort minutes from quiet northern Agonda shores. Complete with air conditioning, hot water bath, electric kettle, Wi-Fi, and poolside access.",
    features: [
      "Private veranda overlooking lush palm garden in Dhavalkhazan",
      "Split air-conditioning, flat-screen TV & tea/coffee kettle",
      "Reliable inverter power backup for seamless comfort",
      "Free Wi-Fi throughout the property & poolside deck",
      "1-minute walk across Beach Road onto Agonda sands",
      "Friendly assistance for local tours & station/airport transfers",
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
    id: "freeform-winding-pool",
    title: "Winding Freeform Swimming Pool",
    subtitle: "Centerpiece Pool · Sun Lounger Deck",
    description:
      "A curved, resort-wide freeform pool weaving gracefully past thatched cabanas and tropical palms—perfect for refreshing afternoon dips or serene evening swims.",
    x: 48,
    y: 52,
    category: "deck",
  },
  {
    id: "sapphire-kitchen",
    title: "Sapphire Multi-Cuisine Restaurant",
    subtitle: "Poolside Dining & Room Service",
    description:
      "Enjoy freshly prepared Goan fish curries, tandoori seafood platters, continental breakfasts, and evening snacks served poolside or delivered to your cabana.",
    x: 68,
    y: 42,
    category: "interior",
  },
  {
    id: "agonda-beach-walk",
    title: "Agonda Beach Shoreline (300m)",
    subtitle: "1-Min Walk · Northern Cove",
    description:
      "Cross quiet Dhavalkhazan Beach Road for an effortless 1-minute walk straight onto peaceful northern Agonda Beach for sunset strolls and dolphin tours.",
    x: 20,
    y: 32,
    category: "view",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Poolside Lounging Under Palms",
    caption: "Relax beside Sapphire Sand's signature meandering pool framed by thatched cabanas.",
    timeTag: "11:00 AM",
    location: "Winding Freeform Pool",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "1-Minute Stroll to Agonda Surf",
    caption: "Catch golden hour crimson sunsets along quiet northern Agonda Beach just 300m away.",
    timeTag: "06:00 PM",
    location: "Agonda Beach Dhavalkhazan",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Multi-Cuisine Poolside Feasts",
    caption: "Savor freshly cooked Goan curry, tandoori platters, and warm room-service dinners.",
    timeTag: "08:00 PM",
    location: "Sapphire Sand Kitchen",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Cabana Morning Tea & Breakfast",
    caption: "Brew morning tea on your veranda with your electric kettle before heading poolside.",
    timeTag: "08:30 AM",
    location: "Luxury Cabana Porch",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Cola Lagoon & Cabo de Rama Rides",
    caption: "Hire a scooter right through reception to explore scenic emerald lagoons and cliff forts.",
    timeTag: "10:00 AM",
    location: "South Goa Coastal Trail",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Starlit Boutique Serenity",
    caption: "Unwind in an intimate 12-cabana sanctuary with continuous inverter power backup and calm nights.",
    timeTag: "09:30 PM",
    location: "Sapphire Sand Courtyard",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Waves",
    title: "Freeform Winding Swimming Pool",
    description: "Sparkling winding outdoor pool curving right past thatched cabanas and sunbeds.",
  },
  {
    icon: "Coffee",
    title: "Multi-Cuisine Restaurant & Room Service",
    description: "Delicious Goan seafood, Indian, and continental meals available poolside or in-cabana.",
  },
  {
    icon: "Mountain",
    title: "1-Min Walk to Agonda Beach",
    description: "Situated just 300m off peaceful Beach Road in Dhavalkhazan near Agonda Beach.",
  },
  {
    icon: "ShieldCheck",
    title: "Power Backup, A/C & Hot Water",
    description: "Every cabana includes split A/C, flat-screen TV, electric kettle, hot water & inverter backup.",
  },
  {
    icon: "Gamepad2",
    title: "Complimentary High-Speed Wi-Fi",
    description: "Reliable Wi-Fi connectivity across all 12 thatched cabanas, 2-BHK villa, and pool area.",
  },
  {
    icon: "Car",
    title: "Bike Rentals & Tour Desk",
    description: "Assistance with scooter rentals, cab transfers, Butterfly Beach boats & local South Goa tours.",
  },
  {
    icon: "Sparkles",
    title: "Intimate 12-Cabana + 2-BHK Scale",
    description: "Quiet, uncrowded boutique property ideal for couples, families, and private retreats.",
  },
  {
    icon: "Flame",
    title: "Cola Lagoon & Cove Excursions",
    description: "Short scenic drive north to Cola Emerald Lagoon, Khola Beach, and Cabo de Rama cliff.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Aditi & Vikram Kulkarni",
    location: "Pune, Maharashtra",
    rating: 5,
    comment:
      "The winding freeform swimming pool at Sapphire Sand Resort makes it feel so special! Only 12 thatched cabanas meant zero crowds, rooms were spotless with good A/C and power backup, and Agonda Beach is literally a 1-minute walk.",
    date: "October 2026",
  },
  {
    id: "r2",
    author: "Daniel & Chloe Bennett",
    location: "Bristol, UK",
    rating: 5,
    comment:
      "Booked the 2-BHK Coastal Villa with friends in Dhavalkhazan. Loved how peaceful the north end of Agonda is compared to bustling strips. Poolside Goan fish curry and breakfast service were wonderful!",
    date: "September 2026",
  },
  {
    id: "r3",
    author: "Nikhil Sharma",
    location: "Bengaluru, Karnataka",
    rating: 5,
    comment:
      "Best value boutique stay in Agonda. Electric kettle, crisp linens, reliable hot shower, and the staff quickly arranged scooters for us to visit Cola Lagoon and Cabo de Rama.",
    date: "August 2026",
  },
  {
    id: "r4",
    author: "Elena Petrova",
    location: "Vienna, Austria",
    rating: 5,
    comment:
      "Tranquil garden setting right next to Agonda sands. Morning coffee beside the curved pool before walking to swim in the Arabian Sea was pure bliss.",
    date: "April 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "coastal",
    name: "Sapphire Pool",
    tagline: "Clear turquoise pool waters & sunlit thatched cabanas",
    bg: "linear-gradient(160deg, #f0f7f9 0%, #d4e9ee 55%, #1b6370 100%)",
    accent: "#165864",
    colorScheme: "mist",
  },
  {
    key: "sunset",
    name: "Agonda Glow",
    tagline: "Crimson twilight walks 300m down Dhavalkhazan Beach Road",
    bg: "linear-gradient(160deg, #faf3ec 0%, #f1d5be 55%, #b56232 100%)",
    accent: "#b56232",
    colorScheme: "velora",
  },
  {
    key: "night",
    name: "Cabana Night",
    tagline: "Warm poolside lanterns beneath peaceful South Goa stars",
    bg: "linear-gradient(160deg, #0a111a 0%, #111d2e 55%, #050b11 100%)",
    accent: "#38bdf8",
    colorScheme: "night",
  },
] as const;
