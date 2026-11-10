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
  name: "S P GRAND Luxury Rooms",
  shortName: "SP GRAND",
  subTitle: "Luxury Rooms & Suites",
  tagline: "Modern Comfort & Premier Hospitality in Pragathi Nagar, Nizamabad",
  phone: "+91 90599 21243",
  phoneRaw: "+919059921243",
  phoneAlt: "090599 21243",
  email: "contact@spgrandrooms.com",
  website: "https://spgrandrooms.com",
  address: "Kakatiya Girls College Road, Pragathi Nagar, Mubaraknagar, Nizamabad, Telangana 503003",
  landmark: "Near Kakatiya Girls College, Pragathi Nagar / Mubaraknagar",
  googleMapsQuery: "S+P+GRAND+Luxury+Rooms+nizamabad",
  googleMapsUrl: "https://www.google.com/maps/place/S+P+GRAND+Luxury+Rooms,nizamabad/@18.6685942,78.1072942,17z/data=!3m1!4b1!4m9!3m8!1s0x3bcddb4fd271094d:0xb4067796b4a018bf!5m2!4m1!1i2!8m2!3d18.6685942!4d78.1072942!16s%2Fg%2F11tfjrrgkb?entry=tts",
  googleMapsEmbed: "https://maps.google.com/maps?q=S+P+GRAND+Luxury+Rooms+nizamabad&t=&z=16&ie=UTF8&iwloc=&output=embed",
  justdialLink: "https://www.justdial.com/Nizamabad/S-P-Grand-Luxury-Rooms-Near-Kakatiya-Girls-College-Road-Pragathi-Nagar-Mubaraknagar/9999PX846-X846-220803125219-N6L8_BZDET",
  timings: "24/7 Front Desk · Express Check-in & Round-the-Clock Assistance",
  distanceHighlights: "In Pragathi Nagar | Near Kakatiya College | ~1.5 km to Railway Station",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "deluxe-luxury-room",
    name: "Deluxe Luxury A/C Room",
    category: "Air-Conditioned Elegance",
    tagline: "Contemporary luxury styling with plush bedding, attached bath, and high-speed Wi-Fi",
    pricePerNight: 1500,
    capacity: "2 Guests",
    sizeSqFt: 280,
    bedType: "Plush King Size Bed",
    view: "Pragathi Nagar City View",
    description:
      "A sophisticated, climate-controlled retreat tailored for corporate executives, couples, and travelers seeking refined luxury. Features silent split air-conditioning, high-speed Wi-Fi, 43-inch smart LED TV, premium linens, and an attached designer bath with 24-hour geyser.",
    features: [
      "Silent split air-conditioning & personalized climate control",
      "High-speed wireless fiber internet connectivity",
      "Large smart LED TV with streaming & satellite channels",
      "Attached designer bathroom with 24/7 hot water supply",
      "Fresh sanitized premium linens and complimentary toiletries",
      "Direct intercom & 24/7 room service assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "executive-suite",
    name: "Executive Grand Suite",
    category: "Premium Executive",
    tagline: "Spacious business suite with dedicated workspace, lounge seating, and deluxe amenities",
    pricePerNight: 2200,
    capacity: "2-3 Guests",
    sizeSqFt: 360,
    bedType: "Royal King Bed + Comfort Sofa",
    view: "Mubaraknagar Skyline View",
    description:
      "Designed for traveling professionals, dignitaries, and couples seeking extra space and luxury. Boasts a private ergonomic workstation, plush sofa seating lounge, tea/coffee maker, sound-damped windows, and generous wardrobe storage.",
    features: [
      "Dedicated ergonomic work desk & comfortable task chair",
      "Plush sofa seating lounge area",
      "Ultra-silent split air-conditioning",
      "Electric kettle with complimentary tea & coffee sachets",
      "Spacious wardrobe with secure in-room safe",
      "Complimentary high-speed fiber Wi-Fi throughout stay",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "royal-family-suite",
    name: "Royal Family Luxury Suite",
    category: "Family & Groups",
    tagline: "Expansive multi-bed suite offering premium comforts for families and wedding entourages",
    pricePerNight: 2800,
    capacity: "4-5 Guests",
    sizeSqFt: 460,
    bedType: "Two Double Beds + Living Lounge",
    view: "Kakatiya College Road View",
    description:
      "The pinnacle of group hospitality in Mubaraknagar. Lavishly planned with two expansive double beds, a spacious living area, dual vanity conveniences, multi-device charging hubs, and dedicated room service for visiting families and wedding guests.",
    features: [
      "Two spacious double beds with orthopaedic comfort mattresses",
      "Dual air-conditioning units for consistent cooling",
      "Generous living lounge area with center table",
      "Modern attached bathroom with instantaneous hot water",
      "24/7 doorstep food ordering & beverage assistance",
      "Sound-insulated glass windows ensuring quiet night rest",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "standard-ac-room",
    name: "Classic Comfort Room",
    category: "Value & Transit",
    tagline: "Smart, hygienic accommodation with modern amenities at pocket-friendly tariffs",
    pricePerNight: 1200,
    capacity: "2 Guests",
    sizeSqFt: 220,
    bedType: "Comfort Double Bed",
    view: "Courtyard Greenery",
    description:
      "The smart economic choice for solo corporate travelers, transit passengers, and pilgrims. Features clean modern bed setup, split air-conditioning or natural breeze ventilation, cable LED TV, and spotless attached bath.",
    features: [
      "Cool split air-conditioning & high-speed ceiling fan",
      "Attached clean private bathroom with hot water",
      "Flat-screen television with news and regional channels",
      "Complimentary high-speed Wi-Fi access",
      "Daily room refresh and fresh towel change",
      "24/7 front desk check-in and luggage assistance",
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
    id: "pragathi-hub",
    title: "Pragathi Nagar Location",
    subtitle: "Kakatiya College Road",
    description:
      "Situated in the peaceful and well-connected enclave of Pragathi Nagar & Mubaraknagar, close to educational institutes, hospitals, and shopping.",
    x: 32,
    y: 38,
    category: "deck",
  },
  {
    id: "luxury-suites-hub",
    title: "Grand Luxury Suites",
    subtitle: "Modern Architectural Interiors",
    description:
      "Elegantly designed rooms and suites featuring split AC, designer lighting, plush mattresses, smart TVs, and spotless bathrooms.",
    x: 64,
    y: 56,
    category: "interior",
  },
  {
    id: "secure-services",
    title: "24/7 Concierge & Parking",
    subtitle: "Security & Peace of Mind",
    description:
      "Round-the-clock front desk reception, CCTV surveillance, secure on-site parking for four-wheelers and two-wheelers, and continuous hot water.",
    x: 80,
    y: 28,
    category: "view",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Welcoming Front Desk Reception",
    caption: "Experience seamless express check-in and personalized guest hospitality at any hour.",
    timeTag: "09:00 AM",
    location: "SP Grand Reception Lounge",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Air-Conditioned Luxury Living",
    caption: "Spacious, spotless rooms equipped with modern comforts, smart TVs, and plush bedding.",
    timeTag: "01:30 PM",
    location: "Deluxe Luxury Suite Wing",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Gourmet Regional Dining Trails",
    caption: "Explore famous Nizamabad biryani points, authentic tiffins, and doorstep food delivery.",
    timeTag: "08:00 PM",
    location: "Pragathi Nagar Food Corridor",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Peaceful Serenity & Greenery",
    caption: "A quiet, calm residential atmosphere free from highway chaos for sound, refreshing sleep.",
    timeTag: "06:30 AM",
    location: "Mubaraknagar Enclave",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Family & Wedding Group Bookings",
    caption: "Spacious multi-bed suites accommodating family functions, marriage parties, and corporate teams.",
    timeTag: "04:00 PM",
    location: "Royal Family Wing",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Round-the-Clock Room Assistance",
    caption: "Courteous staff attentive to every need — from hot water to luggage and transport arrangements.",
    timeTag: "10:30 PM",
    location: "Concierge & Housekeeping Desk",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Mountain",
    title: "Prime Pragathi Nagar Location",
    description: "Centrally positioned on Kakatiya College Road in Mubaraknagar with swift transit to city hubs.",
  },
  {
    icon: "Waves",
    title: "Deluxe & Executive AC Suites",
    description: "Stylishly appointed luxury rooms with silent split air conditioning and plush orthopaedic bedding.",
  },
  {
    icon: "ShieldCheck",
    title: "24/7 Security & CCTV",
    description: "Round-the-clock front desk presence, continuous CCTV surveillance, and dedicated parking space.",
  },
  {
    icon: "Coffee",
    title: "24-Hour Hot & Cold Water",
    description: "Individual instantaneous geysers in every attached modern bathroom for refreshing hot showers.",
  },
  {
    icon: "Gamepad2",
    title: "High-Speed Fiber Wi-Fi",
    description: "Complimentary high-speed internet connectivity across all rooms and public lobbies.",
  },
  {
    icon: "Sparkles",
    title: "Spotless Daily Housekeeping",
    description: "Freshly laundered linens, sanitized bathrooms, and prompt room refresh service upon request.",
  },
  {
    icon: "UtensilsCrossed",
    title: "Doorstep Food Delivery Support",
    description: "Direct assistance with Swiggy/Zomato orders and prompt tea/coffee service delivered to your room.",
  },
  {
    icon: "Flame",
    title: "Group & Wedding Discounts",
    description: "Attractive bulk package rates for family weddings, pilgrim groups, and corporate delegations.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Ravi Teja Varma",
    location: "Hyderabad, Telangana",
    rating: 5,
    comment:
      "S P GRAND Luxury Rooms is undoubtedly one of the best and cleanest stays in Nizamabad! The room was very modern, the AC worked wonderfully, and the location near Kakatiya Girls College in Pragathi Nagar was calm and convenient. Highly recommended!",
    date: "October 2026",
  },
  {
    id: "r2",
    author: "Mohammed Farooq",
    location: "Karimnagar, Telangana",
    rating: 5,
    comment:
      "Stayed for 2 days for business meetings in Mubaraknagar. Very courteous management, fast Wi-Fi for work, clean washrooms with instant hot water, and safe car parking. Great value for luxury comfort.",
    date: "September 2026",
  },
  {
    id: "r3",
    author: "Lakshmi Narayana",
    location: "Secunderabad, Telangana",
    rating: 5,
    comment:
      "We booked multiple rooms for our family wedding function. The staff was remarkably helpful with early morning check-ins and luggage support. The rooms are spacious and beautifully maintained.",
    date: "August 2026",
  },
  {
    id: "r4",
    author: "Srikanth Reddy",
    location: "Nanded, Maharashtra",
    rating: 4,
    comment:
      "Pleasant and peaceful stay. Neat beds, working smart TV, smooth check-in process, and quick access to good restaurants around Pragathi Nagar. Good hospitality by the SP Grand team.",
    date: "July 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "luxury",
    name: "Grand Daylight",
    tagline: "Bright, welcoming elegance & modern comfort",
    bg: "linear-gradient(160deg, #faf5ec 0%, #eed0b7 55%, #a5582d 100%)",
    accent: "#a5582d",
    colorScheme: "velora",
  },
  {
    key: "morning",
    name: "Serene Breeze",
    tagline: "Crisp, peaceful morning atmosphere in Mubaraknagar",
    bg: "linear-gradient(160deg, #edf3f5 0%, #d4e0e5 55%, #6b8788 100%)",
    accent: "#3d6f7c",
    colorScheme: "mist",
  },
  {
    key: "night",
    name: "Royal Velvet",
    tagline: "Quiet, starlit relaxation in Pragathi Nagar",
    bg: "linear-gradient(160deg, #121620 0%, #191f2c 55%, #0d1119 100%)",
    accent: "#d49b5c",
    colorScheme: "night",
  },
] as const;
