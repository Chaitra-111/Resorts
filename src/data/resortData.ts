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
  name: "Coco Aavya - Luxury Villas",
  shortName: "Coco Aavya",
  subTitle: "Private Pool Villas & Riverfront Haven",
  tagline: "Ultra-Luxury Private Pool Villas, Panoramic Nerul River Views & Exclusive Coastal Living in Reis Magos, North Goa",
  phone: "+91 98221 37021",
  phoneRaw: "+919822137021",
  phoneAlt: "+91 832 249 8899",
  email: "concierge@cocoaavyavillas.com",
  website: "https://cocoaavyavillas.com",
  address: "Nerul - Reis Magos Road, Opposite Sinamon Villa, Nerul Dandadi, Reis Magos, Nerul, North Goa 403114",
  landmark: "Opposite Sinamon Villa, along Nerul River, 5 mins from Coco Beach, 8 mins to Candolim",
  googleMapsQuery: "Coco+Aavya+Luxury+Villas+Reis+Magos+Goa",
  googleMapsUrl: "https://www.google.com/maps/place/Coco+Aavya+-+Luxury+Villas/@15.5053871,73.7904643,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbfc12a0eb388d3:0x12f6294dfd0a9bd!8m2!3d15.5053871!4d73.7904643!16s%2Fg%2F11qncwd7s9?entry=ttu",
  googleMapsEmbed: "https://maps.google.com/maps?q=Coco+Aavya+Luxury+Villas+Reis+Magos+Goa&t=&z=16&ie=UTF8&iwloc=&output=embed",
  justdialLink: "https://www.justdial.com/Goa/Coco-Aavya-Luxury-Villas-Opposite-Sinamon-Villa-Reis-Magos/0832PX832-X832-211022194035-U8F6_BZDET",
  timings: "24/7 Dedicated Concierge · Private Chef & Butler on Call",
  distanceHighlights: "5 min to Coco Beach | 8 min to Candolim Beach & Fort Aguada | 15 min to Panaji",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "4bhk-grand-royal-pool-villa",
    name: "4BHK Grand Royal Pool Villa",
    category: "Ultra-Luxury Signature Estate",
    tagline: "Palatial 4-bedroom villa with private infinity pool, riverfront sundeck, personal chef & butler",
    pricePerNight: 38000,
    capacity: "8–10 Guests",
    sizeSqFt: 4800,
    bedType: "4 En-Suite Master King Bedrooms",
    view: "Panoramic Nerul River & Hillside Sunset View",
    description:
      "The pinnacle of Goan luxury living. This grand two-story private villa features four palatial en-suite bedrooms with Italian marble bathrooms, a stunning private infinity swimming pool, sunken lounge, manicured lawn, double-height living room, private bar, modular kitchen, and dedicated butler service.",
    features: [
      "Exclusive private infinity swimming pool with sun loungers & cabana",
      "4 spacious king bedrooms with private balconies and en-suite baths",
      "Double-height designer living & dining pavilion with Bose surround sound",
      "Dedicated butler and private chef on call for personalized dining",
      "High-speed fiber Wi-Fi throughout villa & pool deck",
      "Floor-to-ceiling glass windows framing Nerul river vistas",
    ],
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "3bhk-luxury-haven-villa",
    name: "3BHK Luxury Haven Villa",
    category: "Private Pool Sanctuary",
    tagline: "Sophisticated 3-bedroom villa with private plunge pool, lush tropical garden, and outdoor dining gazebo",
    pricePerNight: 26000,
    capacity: "6–8 Guests",
    sizeSqFt: 3500,
    bedType: "3 En-Suite King Bedrooms",
    view: "Verdant Hillside & Private Garden Oasis",
    description:
      "A serene and elegant architectural marvel crafted for families and discerning holidaymakers. Enjoy your private turquoise swimming pool, outdoor barbecue patio, open-concept living area with contemporary art, fully equipped gourmet kitchen, and plush king bedrooms with forest views.",
    features: [
      "Private swimming pool with outdoor poolside dining gazebo",
      "3 plush en-suite bedrooms with walk-in wardrobes and rain showers",
      "Modern gourmet kitchen equipped with high-end appliances",
      "Landscaped private garden with ambient night illumination",
      "High-speed internet, smart 4K TVs, and OTT streaming",
      "Daily housekeeping, turndown service, and 24/7 security",
    ],
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "presidential-riverview-penthouse",
    name: "Presidential Riverview Penthouse Suite",
    category: "Exclusive Penthouse",
    tagline: "Lavish 2-bedroom river-facing penthouse with private open-air jacuzzi, wrap-around sunset balcony, and cocktail lounge",
    pricePerNight: 18000,
    capacity: "4 Guests",
    sizeSqFt: 2200,
    bedType: "2 King Master Suites",
    view: "Unobstructed Mandovi & Nerul River Confluence",
    description:
      "Perched atop the estate, this opulent penthouse commands spectacular vistas of the Nerul River and Mandovi estuary. Highlights include an open-air heated jacuzzi on the panoramic terrace, private bar counter, custom teak furnishings, deep soaking tubs, and sunset cocktail service.",
    features: [
      "Private open-air heated jacuzzi on wrap-around sky terrace",
      "2 lavish master suites with Italian marble en-suite bathrooms",
      "Custom cocktail bar counter with wine cooler and espresso machine",
      "Floor-to-ceiling glass framing golden hour sunsets",
      "Direct elevator access and 24/7 dedicated concierge",
      "Personalized breakfast served daily on the sky terrace",
    ],
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "deluxe-poolside-master-suite",
    name: "Deluxe Poolside Master Villa Suite",
    category: "Couples & Executive Retreat",
    tagline: "Opulent individual villa master suite opening directly onto the private pool deck with lush tropical foliage",
    pricePerNight: 9500,
    capacity: "2 Guests",
    sizeSqFt: 1100,
    bedType: "Plush King Size Bed",
    view: "Glistening Pool & Tropical Palms",
    description:
      "An intimate romantic haven tailored for couples seeking privacy and refinement. Features direct step-out access to the swimming pool, freestanding bathtub, rainfall shower, plush king bed with Egyptian cotton linen, minibar, and in-room breakfast service.",
    features: [
      "Direct private access to swimming pool and sun loungers",
      "Freestanding designer soaking tub and rain shower",
      "Plush king size bed with luxury pillow menu",
      "Nespresso coffee station, curated minibar, and smart TV",
      "High-speed fiber Wi-Fi and bluetooth acoustic sound system",
      "In-suite candlelit dinner setup on request",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export const RESORT_HOTSPOTS: Hotspot[] = [
  {
    id: "private-pool",
    title: "Private Infinity Pool & Deck",
    subtitle: "Crystal-Clear Azure Waters",
    description:
      "Unwind in your secluded private swimming pool surrounded by tropical palm fronds, designer loungers, and evening mood lighting.",
    x: 28,
    y: 42,
    category: "deck",
  },
  {
    id: "nerul-river",
    title: "Nerul River & Sunset Vista",
    subtitle: "Scenic Waterfront Serenity",
    description:
      "Gaze at luxury yachts sailing along the peaceful Nerul River and Mandovi estuary with spectacular fiery Goan sunsets.",
    x: 68,
    y: 30,
    category: "view",
  },
  {
    id: "candolim-corridor",
    title: "Candolim & Fort Aguada Corridor",
    subtitle: "8 Mins to Coastal Buzz",
    description:
      "Moments from North Goa's premier fine-dining restaurants, chic beach clubs, heritage Reis Magos Fort, and Candolim sands.",
    x: 82,
    y: 65,
    category: "interior",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Champagne Sunsets by the Pool",
    caption: "Sip chilled vintage champagne on the pool deck as the sky turns fiery amber over the Nerul river.",
    timeTag: "05:45 PM",
    location: "Private Pool Deck",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Gourmet Chef-Crafted Breakfast",
    caption: "Wake up to artisanal croissants, fresh tropical fruit, and cooked-to-order eggs in your private gazebo.",
    timeTag: "09:00 AM",
    location: "Riverfront Dining Gazebo",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Yacht Charters & Dolphin Cruises",
    caption: "Embark on an exclusive private yacht sail right from the nearby Nerul jetty along the Arabian Sea.",
    timeTag: "11:30 AM",
    location: "Nerul River Marina",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Candolim Beach & Fine Dining",
    caption: "Indulge in award-winning coastal gastronomy and nightlife along Candolim's celebrated beach strip.",
    timeTag: "07:30 PM",
    location: "Candolim Coastal Strip",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Exclusive Celebrations & Soirées",
    caption: "Host intimate anniversary celebrations, cocktail parties, and family reunions in opulent seclusion.",
    timeTag: "08:30 PM",
    location: "Grand Villa Living Pavilion",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Starlit Midnight Swims",
    caption: "Take a calming dip under moonlit skies in the heated private swimming pool with soft acoustic tunes.",
    timeTag: "11:00 PM",
    location: "Heated Poolside Deck",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Waves",
    title: "Private Swimming Pools",
    description: "Secluded private swimming pools with sun loungers, cabanas, and temperature-controlled waters.",
  },
  {
    icon: "Coffee",
    title: "Dedicated Butler & Chef",
    description: "Personalized butler assistance and gourmet private chef on call for bespoke in-villa dining.",
  },
  {
    icon: "Mountain",
    title: "Nerul River & Nature Vistas",
    description: "Idyllic location in Reis Magos overlooking tranquil backwaters, lush hills, and coconut groves.",
  },
  {
    icon: "Car",
    title: "8 Mins to Candolim Beach",
    description: "Effortless drive to Candolim sands, Sinquerim beach clubs, Fort Aguada, and coastal fine-dining.",
  },
  {
    icon: "Sparkles",
    title: "Designer Modern Interiors",
    description: "Expansive European marble living rooms, bespoke teak furniture, and high-end audio systems.",
  },
  {
    icon: "ShieldCheck",
    title: "Gated 24/7 Security & Power",
    description: "Round-the-clock security surveillance, private gated access, and 100% silent power backup.",
  },
  {
    icon: "Gamepad2",
    title: "High-Speed Fiber Wi-Fi",
    description: "Seamless gigabit wireless internet connectivity throughout the villas and outdoor pool terraces.",
  },
  {
    icon: "Flame",
    title: "Private Parking & EV Charger",
    description: "Spacious on-site covered car parking with electric vehicle charging facility for private cars.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Vikram & Ananya Singhania",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment:
      "Coco Aavya is hands down the most luxurious villa experience we have ever had in Goa! The private pool was pristine, the villa architecture is breathtaking, and the private chef prepared unforgettable seafood dinners. Total privacy yet only minutes from Candolim.",
    date: "October 2026",
  },
  {
    id: "r2",
    author: "Edward & Sophie Montgomery",
    location: "London, UK",
    rating: 5,
    comment:
      "Absolute perfection! We stayed at the 4BHK Grand Royal Pool Villa for our family vacation. The view of the Nerul River at sunset is magical. The butler was attentive, rooms were impeccably maintained, and the pool deck became our favorite hangout spot.",
    date: "September 2026",
  },
  {
    id: "r3",
    author: "Sameer Malhotra",
    location: "New Delhi, Delhi",
    rating: 5,
    comment:
      "Exceptional property for high-end celebrations. Massive bedrooms, ultra-modern bathrooms, and top-tier amenities. Quiet, serene Reis Magos location away from crowds, yet close to all the top restaurants. 10/10 recommendation!",
    date: "August 2026",
  },
  {
    id: "r4",
    author: "Pooja Hegde & Friends",
    location: "Bengaluru, Karnataka",
    rating: 5,
    comment:
      "Spent an unforgettable 4 nights here. The infinity pool is gorgeous, the sound system and living spaces are top notch, and the concierge took care of every request seamlessly. Will definitely be returning!",
    date: "July 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "coastal",
    name: "Riverfront Breeze",
    tagline: "Serene Nerul backwaters & glistening private pool waters",
    bg: "linear-gradient(160deg, #f0f7f9 0%, #d4e9ee 55%, #1b6370 100%)",
    accent: "#165864",
    colorScheme: "mist",
  },
  {
    key: "sunset",
    name: "Golden Hour",
    tagline: "Opulent champagne glow & poolside sunset twilight",
    bg: "linear-gradient(160deg, #faf3ec 0%, #f1d5be 55%, #b56232 100%)",
    accent: "#b56232",
    colorScheme: "velora",
  },
  {
    key: "night",
    name: "Starlit Sanctuary",
    tagline: "Moonlit pool waters & serene private estate luxury",
    bg: "linear-gradient(160deg, #0a111a 0%, #111d2e 55%, #050b11 100%)",
    accent: "#38bdf8",
    colorScheme: "night",
  },
] as const;
