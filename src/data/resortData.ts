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
  name: "Royal Resort Rajbag",
  shortName: "Royal Resort",
  subTitle: "Swimming Pool, Spa & Suites near Rajbagh Beach",
  tagline: "Outdoor Swimming Pool, Executive Suites, Spa & Multi-Cuisine Dining near Rajbagh Beach in Canacona, South Goa",
  phone: "+91 99959 99165",
  phoneRaw: "+919995999165",
  phoneAlt: "+91 92262 01051",
  email: "reservations@broadbeangoa.com",
  website: "https://broadbeangoa.com",
  address: "Rajbag Tarir / Kindlebag (Near The LaLiT Golf & Spa), Rajbagh Beach, Canacona, South Goa 403702",
  landmark: "Short walk to Rajbagh Beach, next to The LaLiT Golf & Spa, 3 km to Canacona Railway Station",
  googleMapsQuery: "Royal+Resort+Rajbag+Goa",
  googleMapsUrl: "https://www.google.com/maps/place/Royal+Resort+Rajbag/@14.9910304,74.0425443,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbe5acf3f033771:0x87b35dc6ac08f9d6!5m2!4m1!1i2!8m2!3d14.9910304!4d74.0425443!16s%2Fg%2F11gcj2g_ds?entry=ttu",
  googleMapsEmbed: "https://maps.google.com/maps?q=14.9910304,74.0425443&t=&z=16&ie=UTF8&iwloc=&output=embed",
  timings: "24/7 Front Desk & Concierge · Multi-Cuisine Restaurant & Bar 7:00 AM – 11:30 PM",
  distanceHighlights: "500m to Rajbagh Beach | 3 km to Canacona Station | Next to The LaLiT Golf Course",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "executive-pool-view-suite",
    name: "Executive Pool-View Suite",
    category: "Signature Poolside Horizon",
    tagline: "Spacious luxury suite with private balcony overlooking the shimmering outdoor swimming pool",
    pricePerNight: 5500,
    capacity: "2–3 Guests",
    sizeSqFt: 420,
    bedType: "Plush King Size Bed",
    view: "Swimming Pool & Landscaped Palm Gardens",
    description:
      "Our premier Executive Pool-View Suite pairs upscale contemporary comfort with tranquil South Goa vistas. Step out onto your private balcony overlooking the sparkling pool deck, relax with silent split air-conditioning, flat-screen entertainment, a modern en-suite bath with hot shower, and 24/7 room service.",
    features: [
      "Private furnished balcony with direct swimming pool views",
      "Plush king-sized bed with premium mattress & luxury linens",
      "Silent split air-conditioning & personalized climate control",
      "Large flat-screen satellite TV and high-speed Wi-Fi access",
      "Modern en-suite bath with premium toiletries & 24/7 hot water",
      "Only a short 500m walk to unspoiled Rajbagh Beach sands",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "deluxe-family-suite",
    name: "Deluxe Family Suite",
    category: "Spacious Family Retreat",
    tagline: "Generously appointed two-bed suite tailored for families and group vacations in South Goa",
    pricePerNight: 6800,
    capacity: "4–5 Guests",
    sizeSqFt: 580,
    bedType: "Two Plush Queen Beds",
    view: "Rajbagh Palm Grove & Garden",
    description:
      "Designed specifically for families and groups traveling together to Canacona. Features two comfortable queen beds, living seating area, flat-screen TV, private balcony, silent climate control, attached modern bath with hot showers, and room service from our multi-cuisine restaurant.",
    features: [
      "Two plush queen beds accommodating up to 4–5 guests",
      "Spacious living lounge area with comfortable seating",
      "Private balcony overlooking tranquil palm garden courtyards",
      "High-power split air-conditioner & flat-screen smart TV",
      "Modern attached bathroom with pressurized hot showers",
      "Full access to the outdoor swimming pool, spa & dining",
    ],
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "super-deluxe-room",
    name: "Super Deluxe Room",
    category: "Elevated Comfort",
    tagline: "Upper-floor room offering scenic open garden vistas, King bed & private balcony",
    pricePerNight: 4400,
    capacity: "2 Guests",
    sizeSqFt: 340,
    bedType: "Comfort King Size Bed",
    view: "Tropical Garden & Surrounding Canopy",
    description:
      "Located on upper levels with picturesque views of Rajbagh's lush coconut greenery. Enjoy a peaceful private balcony, cool split air-conditioning, warm wooden accents, flat-screen TV, and modern en-suite bathroom with 24/7 hot water supply.",
    features: [
      "Private sit-out balcony with tropical tree-canopy views",
      "Comfort King bed with clean sanitized linens & pillows",
      "Split air-conditioning and ceiling fans for cooling comfort",
      "Flat-screen TV and high-speed wireless internet connection",
      "Attached bathroom with hot and cold shower amenities",
      "Room service from the restaurant and poolside snack bar",
    ],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "standard-garden-room",
    name: "Standard Garden Room",
    category: "Relaxed Boutique Living",
    tagline: "Comfortable air-conditioned room surrounded by tranquil nature near The LaLiT Golf Course",
    pricePerNight: 3400,
    capacity: "2 Guests",
    sizeSqFt: 290,
    bedType: "Comfort Double Bed",
    view: "Courtyard Greenery",
    description:
      "A serene and pocket-friendly option for couples, solo travelers, and weekend explorers. Complete with cooling split A/C, modern attached bath with hot water, comfortable double bed, flat-screen TV, and direct access to the resort pool and restaurant.",
    features: [
      "Peaceful courtyard setting away from busy tourist crowds",
      "Silent split air-conditioning & flat-screen television",
      "Clean private en-suite bathroom with hot & cold water",
      "Complimentary high-speed Wi-Fi and daily housekeeping",
      "Short walking distance to serene Rajbagh Beach sands",
      "Convenient free on-site parking for cars and two-wheelers",
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
    id: "outdoor-swimming-pool",
    title: "Outdoor Swimming Pool & Sun Deck",
    subtitle: "Poolside Loungers · Sun Deck",
    description:
      "A crystal-clear outdoor swimming pool surrounded by comfortable sun loungers and tropical palms—ideal for a refreshing morning swim or an afternoon cocktail by the water.",
    x: 48,
    y: 52,
    category: "deck",
  },
  {
    id: "broadbean-restaurant",
    title: "Multi-Cuisine Restaurant & Bar",
    subtitle: "Goan Seafood · North Indian · Cocktails",
    description:
      "Indulge in authentic Goan seafood curries, sizzling tandoori grills, continental breakfasts, and evening cocktails in our spacious open-air dining space.",
    x: 68,
    y: 42,
    category: "interior",
  },
  {
    id: "rajbagh-beach-estuary",
    title: "Rajbagh Beach & Talpona River Estuary",
    subtitle: "500m Walk · Unspoiled Shore",
    description:
      "One of South Goa's cleanest, least crowded beaches where the Talpona River meets the Arabian Sea, right next to the lush championship LaLiT Golf Course.",
    x: 20,
    y: 32,
    category: "view",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Afternoon Swimming Pool Dips",
    caption: "Take a revitalizing dip in our outdoor swimming pool framed by swaying South Goa palms.",
    timeTag: "03:30 PM",
    location: "Resort Pool Deck",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Golden Hour Stroll on Rajbagh Beach",
    caption: "Walk 500 meters to the quiet shores of Rajbagh Beach for breathtaking golden sunsets over the Arabian Sea.",
    timeTag: "06:00 PM",
    location: "Rajbagh Beach Shore",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Goan Seafood & Tandoori Feasts",
    caption: "Savor fresh catch tandoori pomfret, Goan prawn curry, and multi-cuisine delights at our on-site restaurant.",
    timeTag: "08:00 PM",
    location: "Multi-Cuisine Restaurant",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Morning Balcony Tea & Breakfast",
    caption: "Enjoy freshly brewed tea or coffee on your private suite balcony overlooking tropical gardens.",
    timeTag: "08:30 AM",
    location: "Executive Suite Balcony",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Talpona Estuary & Golf Course Walks",
    caption: "Explore the scenic neighborhood around The LaLiT Golf Course and tranquil Talpona River mouth.",
    timeTag: "10:00 AM",
    location: "Rajbag Tarir Trail",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Poolside Cocktail Evenings & Lounge",
    caption: "Unwind with chilled beers, cocktails, and night-club music in our vibrant on-property lounge.",
    timeTag: "09:30 PM",
    location: "Pool Lounge & Bar",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Waves",
    title: "Outdoor Swimming Pool & Sun Deck",
    description: "Sparkling full-sized swimming pool with poolside sun loungers for all guests.",
  },
  {
    icon: "Coffee",
    title: "Multi-Cuisine Restaurant & Bar",
    description: "Serving authentic Goan seafood, North Indian dishes, tandoor specials, and cocktails.",
  },
  {
    icon: "Mountain",
    title: "500m to Rajbagh Beach",
    description: "Short 5-minute walk to one of South Goa's most pristine, uncrowded golden beaches.",
  },
  {
    icon: "ShieldCheck",
    title: "Spa & Wellness Center",
    description: "Dedicated spa offering soothing massages and rejuvenation treatments during your stay.",
  },
  {
    icon: "Gamepad2",
    title: "Complimentary High-Speed Wi-Fi",
    description: "Fast, reliable Wi-Fi available throughout suites, rooms, restaurant, and pool deck.",
  },
  {
    icon: "Car",
    title: "Free On-Site Parking & Cabs",
    description: "Ample complimentary guest parking plus easy airport, station, and local taxi transfers.",
  },
  {
    icon: "Sparkles",
    title: "Night Club & DJ Lounge",
    description: "On-property nightlife entertainment venue featuring vibrant music and dancing.",
  },
  {
    icon: "Flame",
    title: "24/7 Front Desk & Concierge",
    description: "Round-the-clock reception, daily housekeeping, room service, and tour booking desk.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Prashant & Deepa Sawant",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment:
      "Royal Resort Rajbag was the highlight of our Canacona trip! The swimming pool is clean and huge, our Executive Suite had a great balcony overlooking the pool, and Rajbagh Beach is just a short 5-minute walk away. Much more peaceful than Palolem!",
    date: "November 2026",
  },
  {
    id: "r2",
    author: "Matthew & Sarah Jenkins",
    location: "London, UK",
    rating: 5,
    comment:
      "Superb stay near The LaLiT Golf Course. Staff was very accommodating, the food at the restaurant was authentic and tasty, and the spa was so relaxing after long beach walks at Rajbagh and Patnem.",
    date: "October 2026",
  },
  {
    id: "r3",
    author: "Kavita & Rajesh Menon",
    location: "Kochi, Kerala",
    rating: 5,
    comment:
      "We booked the Deluxe Family Suite for four of us. Very spacious, clean modern bathroom, reliable hot water and A/C, and plenty of space for the kids to swim in the pool. Station is only 3 km away.",
    date: "September 2026",
  },
  {
    id: "r4",
    author: "Alexander Becker",
    location: "Frankfurt, Germany",
    rating: 4,
    comment:
      "Great value resort in South Goa. Clean rooms, nice pool, good Wi-Fi, and the proximity to the Talpona river estuary and Rajbagh beach makes it a hidden paradise for nature lovers.",
    date: "August 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "coastal",
    name: "Rajbagh Azure",
    tagline: "Shimmering pool waters & gentle Arabian Sea breezes",
    bg: "linear-gradient(160deg, #f0f7f9 0%, #d4e9ee 55%, #1b6370 100%)",
    accent: "#165864",
    colorScheme: "mist",
  },
  {
    key: "sunset",
    name: "Estuary Glow",
    tagline: "Warm twilight skies where Talpona River meets the sea",
    bg: "linear-gradient(160deg, #faf3ec 0%, #f1d5be 55%, #b56232 100%)",
    accent: "#b56232",
    colorScheme: "velora",
  },
  {
    key: "night",
    name: "Royal Starlit",
    tagline: "Lantern-lit pool evenings beneath calm South Goa stars",
    bg: "linear-gradient(160deg, #0a111a 0%, #111d2e 55%, #050b11 100%)",
    accent: "#38bdf8",
    colorScheme: "night",
  },
] as const;
