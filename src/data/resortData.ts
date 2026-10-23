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
  name: "Hotel Nikhil Sai International",
  shortName: "Nikhil Sai",
  subTitle: "Boutique Hotel & Grand Banquets",
  tagline: "Premier Hospitality & Celebrations in the Heart of Nizamabad",
  phone: "+91 80089 66635",
  phoneRaw: "+918008966635",
  phoneAlt: "+91 8462 236634",
  phoneDesk: "+91 80089 66634",
  email: "connect@hotelnikhilsaiinternational.com",
  website: "https://www.hotelnikhilsaiinternational.com",
  address: "D.No. 5-6-661, Devi Theatre 'X' Road, Nizamabad - Hyderabad Road, Dwaraka Nagar, Nizamabad, Telangana 503001",
  landmark: "Near Devi Theatre 'X' Road & Venu Mall (130m), Hyderabad Road",
  googleMapsQuery: "Hotel+Nikhil+Sai+international+Nizamabad",
  googleMapsUrl: "https://www.google.com/maps/place/Hotel+Nikhil+Sai+international/@18.6693133,78.104744,17z/data=!4m9!3m8!1s0x3bcddb2967b1a78d:0x16491a3401aa2942!5m2!4m1!1i2!8m2!3d18.6693133!4d78.104744!16s%2Fg%2F1ttpfbky?entry=ttu",
  googleMapsEmbed: "https://maps.google.com/maps?q=Hotel+Nikhil+Sai+international+Nizamabad&t=&z=16&ie=UTF8&iwloc=&output=embed",
  justdialLink: "https://www.justdial.com/Nizamabad/Hotel-Nikhil-Sai-International-Near-Devi-Theatre-Dwaraka-Nagar/9999PX846-X846-120309121759-E8V9_BZDET",
  timings: "Check-in: 12:00 PM | Check-out: 11:00 AM (24/7 Front Desk & Concierge)",
  distanceHighlights: "130m from Venu Mall | 1.5 km from Bus Stand | 2 km from Railway Station",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "executive-ac-room",
    name: "Executive A/C Room",
    category: "Executive Stays",
    tagline: "Contemporary elegance with ergonomic workstations and high-speed Wi-Fi",
    pricePerNight: 2400,
    capacity: "2 Guests",
    sizeSqFt: 340,
    bedType: "Plush King Bed or Twin Beds",
    view: "City Skyline & Boulevard",
    description:
      "Designed specifically for discerning business executives and leisure travelers. Featuring soundproofed glazing, warm timber finishes, dedicated work desk with ergonomic seating, and high-speed optical fiber connectivity.",
    features: [
      "Ultra-fast high-speed Wi-Fi connectivity",
      "50-inch Smart LED TV with premium HD channels",
      "Central air conditioning with precision climate control",
      "Ergonomic work desk & multi-socket charging station",
      "Tea & coffee maker with daily complimentary infusions",
      "Italian ceramic en-suite bath with rain shower & luxury toiletries",
    ],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "executive-suite",
    name: "Executive Luxury Suite",
    category: "Premium Suites",
    tagline: "Spacious partitioned living salon, minibar, and upgraded boutique comforts",
    pricePerNight: 3600,
    capacity: "2-3 Guests",
    sizeSqFt: 580,
    bedType: "Master King Bed + Cozy Divan",
    view: "Panoramic Nizamabad Cityscape",
    description:
      "Offering generous spatial luxury, the Executive Suite features a discrete living salon separated from the master bedroom. Perfect for business travelers hosting short client discussions or couples desiring unhurried indulgence.",
    features: [
      "Separate plush living lounge with tailored sofa set",
      "Stocked minibar refrigerator & gourmet beverage station",
      "In-room digital electronic safe for valuables",
      "Two 55-inch Smart 4K televisions",
      "Express in-room dining from Chaskah Restaurant",
      "Complimentary morning newspaper & shoe-shine service",
    ],
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "presidential-suite",
    name: "The Presidential Royal Suite",
    category: "Signature VIP Residence",
    tagline: "The crown jewel: royal master suite, private dining, and dedicated butler service",
    pricePerNight: 5400,
    capacity: "2-4 Guests",
    sizeSqFt: 960,
    bedType: "California Grand King Bed",
    view: "360° Skyline & Sunset Vistas",
    description:
      "The definitive pinnacle of hospitality in Nizamabad. Curated for dignitaries, celebratory wedding couples, and VIP delegates, this palatial suite boasts a majestic living salon, six-seater dining table, and luxury marble bathroom with soaking tub.",
    features: [
      "Palatial master bedroom with regal gilded headboard",
      "Grand entertaining salon with 6-seater private dining",
      "Marble bathroom with deep soaking tub & rainfall shower",
      "Dedicated 24/7 personal butler service on call",
      "VIP complimentary airport/station transfer coordination",
      "Fresh seasonal fruit platter and chef's artisan evening chocolates",
    ],
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "deluxe-family-suite",
    name: "Deluxe Family Suite",
    category: "Family & Groups",
    tagline: "Interconnected spatial luxury steps away from Nizamabad's shopping hub",
    pricePerNight: 4200,
    capacity: "4-5 Guests",
    sizeSqFt: 720,
    bedType: "Two Queen Beds + Pull-Out Daybed",
    view: "Venu Mall & Hyderabad Road Promenade",
    description:
      "Thoughtfully arranged for family vacations, wedding attendees, and travel groups. Features multiple plush beds, generous wardrobe spaces, dual vanities, and direct proximity to Venu Mall's shopping and entertainment complexes.",
    features: [
      "Twin Queen beds with orthopaedic comfort mattresses",
      "Spacious luggage vestibule and double wardrobes",
      "Dual vanities for effortless family preparation",
      "Special children's amenities and dining menu",
      "Sound-damped double-glazed windows for tranquil sleep",
      "Instant 24-hour hot water and round-the-clock room service",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export const RESORT_HOTSPOTS: Hotspot[] = [
  {
    id: "upperdeck",
    title: "Upper Deck Rooftop Banquet",
    subtitle: "Open-Air Celebrations",
    description:
      "Nizamabad's signature rooftop celebration venue accommodating up to 600 guests beneath the evening stars, featuring live buffet pavilions and panoramic town views.",
    x: 28,
    y: 35,
    category: "deck",
  },
  {
    id: "chaskah",
    title: "Chaskah Fine Dining Restaurant",
    subtitle: "Culinary Landmark of Nizamabad",
    description:
      "Renowned multi-cuisine restaurant serving authentic Hyderabadi Dum Biryanis, sizzling tandoori grills, rich North Indian curries, and regional Andhra delicacies.",
    x: 62,
    y: 58,
    category: "interior",
  },
  {
    id: "baithak",
    title: "Baithak Grand Banquet & Boardroom",
    subtitle: "Weddings, Receptions & Summits",
    description:
      "A grand pillar-free banquet hall and state-of-the-art corporate boardroom equipped with high-definition audio-visual projection for weddings and corporate meetings.",
    x: 78,
    y: 25,
    category: "view",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Grand Facade in Twilight",
    caption: "Hotel Nikhil Sai International glowing gracefully on Hyderabad Road, welcoming travelers to Nizamabad.",
    timeTag: "07:00 PM",
    location: "Main Entrance Portico",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Aromatic Flavors at Chaskah",
    caption: "Master culinary artists preparing fragrant hand-ground dum biryanis and smoky tandoori platters.",
    timeTag: "01:00 PM",
    location: "Chaskah Multi-Cuisine Restaurant",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Baithak Grand Weddings & Sangeet",
    caption: "Glimmering crystal chandeliers, ornate floral backdrops, and joyous family celebrations.",
    timeTag: "06:30 PM",
    location: "Baithak Grand Banquet Hall",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Inswinger Sports Lounge & Drinks",
    caption: "Catching live matches on large screens while sipping chilled beverages and artisanal appetizers.",
    timeTag: "08:30 PM",
    location: "Inswinger Sports Bar & Lounge",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Upper Deck Starry Receptions",
    caption: "Open-air rooftop terrace illuminated with fairy lights for magical evening gala dinners.",
    timeTag: "09:00 PM",
    location: "Upper Deck Rooftop Terrace",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Corporate Excellence in Boardroom",
    caption: "Productive conferences and regional leadership meets facilitated with modern AV systems.",
    timeTag: "11:00 AM",
    location: "Executive Boardroom",
    image:
      "https://images.unsplash.com/photo-1431540015161-0bf866a2d407?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "UtensilsCrossed",
    title: "Chaskah Restaurant",
    description: "Multi-cuisine fine dining featuring authentic Hyderabadi Biryanis, regional curries, and tandoori grills.",
  },
  {
    icon: "Sparkles",
    title: "Baithak & Upper Deck Banquets",
    description: "Versatile indoor and rooftop banquet halls hosting 50 to 600+ guests for weddings, parties, and conferences.",
  },
  {
    icon: "Flame",
    title: "Inswinger & Outswinger Lounges",
    description: "Cricket-themed sports bar and open-air lounge offering curated spirits, cocktails, and savory bar bites.",
  },
  {
    icon: "Gamepad2",
    title: "Executive Boardroom",
    description: "Modern conference facilities equipped with HD projection, high-speed Wi-Fi, and executive business seating.",
  },
  {
    icon: "Waves",
    title: "Central Air Conditioning",
    description: "100% climate-controlled rooms and public areas with full 24/7 generator power backup support.",
  },
  {
    icon: "Coffee",
    title: "24/7 In-Room Dining",
    description: "Freshly prepared delicacies and hot beverages delivered straight to your suite at any hour.",
  },
  {
    icon: "ShieldCheck",
    title: "Valet Parking & CCTV Security",
    description: "Secure on-site covered car parking, 24/7 security personnel, and comprehensive CCTV monitoring.",
  },
  {
    icon: "Mountain",
    title: "Prime Central Connectivity",
    description: "Located right on Hyderabad Road, just 130m from Venu Mall, 1.5 km from bus stand, and 2 km from railway station.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Ramesh Goud",
    location: "Hyderabad, Telangana",
    rating: 5,
    comment:
      "Stayed at Hotel Nikhil Sai International during our visit to Nizamabad for a family wedding. The Executive Suite was spotlessly clean, very spacious, and food at Chaskah was exceptional! Best hotel in Nizamabad with prompt service.",
    date: "February 2026",
  },
  {
    id: "r2",
    author: "Dr. Sunita Rao",
    location: "Warangal, Telangana",
    rating: 5,
    comment:
      "We hosted a regional medical conference and reception at the Baithak Banquet Hall. The management, audio-visual support, and buffet catering were top-notch. Centrally located near the railway station and bus stand.",
    date: "January 2026",
  },
  {
    id: "r3",
    author: "Vikram K.",
    location: "Bengaluru, Karnataka",
    rating: 5,
    comment:
      "Excellent location right on Hyderabad Road next to Venu Mall. Great hospitality, fast Wi-Fi, comfortable beds, and courteous staff. The Inswinger lounge was great for relaxing after work meetings.",
    date: "March 2026",
  },
  {
    id: "r4",
    author: "Pravin Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment:
      "The Presidential Suite exceeded all expectations. Beautiful interiors, prompt room service, and secure valet parking. Highly recommended for both business and family stays in Nizamabad.",
    date: "April 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "royal",
    name: "Royal Nizam",
    tagline: "Warm gilded amber & rich heritage warmth",
    bg: "linear-gradient(160deg, #faf1df 0%, #eed0b7 55%, #a5582d 100%)",
    accent: "#a5582d",
    colorScheme: "velora",
  },
  {
    key: "morning",
    name: "Daylight Luxury",
    tagline: "Crisp sunlight & welcoming contemporary comfort",
    bg: "linear-gradient(160deg, #e7edf0 0%, #d4e0e5 55%, #889e9f 100%)",
    accent: "#6b8788",
    colorScheme: "mist",
  },
  {
    key: "twilight",
    name: "Lounge Twilight",
    tagline: "Deep indigo sky & vibrant evening hospitality",
    bg: "linear-gradient(160deg, #242938 0%, #161c28 55%, #0f121b 100%)",
    accent: "#d49b5c",
    colorScheme: "night",
  },
] as const;
