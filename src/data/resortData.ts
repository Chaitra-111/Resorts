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
  image: string;
  location: string;
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
  name: "The Ranch by MagoStays - 6BR Pool Farmstay",
  shortName: "The Ranch by MagoStays",
  subTitle: "Luxury 6BR Private Pool Farmstay & Forest Retreat",
  phone: "+91 91548 55984",
  phoneRaw: "919154855984",
  phoneAlt: "+91 98480 12345",
  email: "hello@magostays.com",
  website: "https://magostays.com",
  address: "Near Pargi, Vikarabad District, Telangana 501501",
  landmark: "Secluded Forest Belt, Pargi (68 km from Hyderabad via Chevella Highway)",
  googleMapsQuery: "The+Ranch+by+MagoStays+6BR+Pool+Farmstay+Pargi",
  googleMapsEmbed: "https://maps.google.com/maps?q=The+Ranch+by+MagoStays+Pargi+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleMapsLink: "https://www.google.com/maps/place/The+Ranch+by+MagoStays+-+6BR+Pool+Farmstay/@17.2140656,77.9070129,17z",
  timings: "Check-in: 02:00 PM | Check-out: 11:00 AM (24/7 Caretaker & Host Support)",
  distanceFromHyd: "68 km from Hyderabad (approx. 1 hr 20 mins via Chevella / Pargi Highway) · 25 km from Ananthagiri Hills",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "entire-6br-ranch-estate",
    name: "The Entire 6BR Ranch Estate & Pool",
    category: "Exclusive Private Farmstay Buyout",
    tagline: "Private 6-bedroom villa buyout with exclusive pool, home theater & lawns for up to 30 guests",
    pricePerNight: 24000,
    capacity: "Up to 30 Guests",
    sizeSqFt: 5500,
    bedType: "6 Master King Bedrooms + Extra Bedding",
    view: "Private Pool, Manicured Lawns & Forest Canopy",
    description:
      "Enjoy absolute privacy with complete exclusive access to the entire 6-bedroom luxury estate. Features a secluded swimming pool, indoor and outdoor kitchens, smart projector hall, barbecue station, and sprawling party lawns.",
    features: [
      "Exclusive private buyout of the entire 6-bedroom farmstay estate",
      "Private outdoor swimming pool with sun loungers & party deck",
      "Entertainment hall with smart HD projector & surround sound system",
      "Fully equipped indoor kitchen + open-air barbecue grill setup",
      "Evening bonfire pit and stargazing terrace overlooking forest greenery",
      "Dedicated 24/7 on-site caretaker assistance and guided forest walks",
    ],
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "forest-master-suite",
    name: "Forest View Master Suite",
    category: "Executive AC Master Bedroom",
    tagline: "Luxurious master bedroom overlooking pristine forest greenery and serene mornings",
    pricePerNight: 4800,
    capacity: "2-3 Adults",
    sizeSqFt: 460,
    bedType: "Plush King Bed + Balcony Lounger",
    view: "Pristine Reserve Forest & Sunrise Greens",
    description:
      "A peaceful master sanctuary featuring panoramic glass windows, silent split AC, a private sit-out terrace with forest views, and an artisan en-suite bath.",
    features: [
      "Panoramic forest views with private sunrise sit-out balcony",
      "Silent split air-conditioning & high-speed Wi-Fi connectivity",
      "Luxury King mattress with fine Egyptian cotton bed linens",
      "Spacious en-suite bathroom with glass shower & solar geyser",
      "Direct indoor access to the central pool and entertainment hall",
      "Complimentary tea/coffee station and electric kettle",
    ],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "poolside-veranda-suite",
    name: "Poolside Veranda Suite",
    category: "Ground-Floor Pool Access Suite",
    tagline: "Step straight from your private veranda into the shimmering crystal-clear pool",
    pricePerNight: 4200,
    capacity: "2 Adults + 1 Child",
    sizeSqFt: 400,
    bedType: "King Bed + Cane Loungers",
    view: "Private Swimming Pool & Sun Deck",
    description:
      "Wake up and take an invigorating morning swim. Features direct poolside glass sliding doors, outdoor cane loungers, modern AC cooling, and refreshing cross breezes.",
    features: [
      "Direct step-out access to the swimming pool & wooden sun deck",
      "Private shaded veranda with outdoor morning seating",
      "Air-conditioned bedroom with designer wooden accents",
      "Attached modern bathroom with fresh towel sets & organic toiletries",
      "Steps away from the barbecue grill & evening bonfire pit",
      "Daily housekeeping and on-demand caretaker support",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "family-loft-sanctuary",
    name: "Family Loft Suite & Terrace",
    category: "Multi-Bed Family Quarters",
    tagline: "Spacious multi-bed haven designed for joint families, kids, and close friend groups",
    pricePerNight: 6200,
    capacity: "4-6 Adults",
    sizeSqFt: 680,
    bedType: "Two Queen Beds + Daybed",
    view: "Farmstay Grounds & Starry Night Terrace",
    description:
      "Ideal for family celebrations or friend road trips. Offers multiple sleeping options, an adjoining private terrace for stargazing, and generous space for relaxing together.",
    features: [
      "Accommodates up to 6 guests with multiple premium beds",
      "Private terrace access with 360-degree night sky views",
      "Split air-conditioning and spacious wardrobe storage",
      "Attached modern bathroom with continuous hot water supply",
      "Board games, indoor activities, and projector entertainment access",
      "Assisted barbecue and bonfire arrangements upon request",
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
    id: "pool",
    title: "Private Swimming Pool & Deck",
    subtitle: "Crystal-Clear Waters & Sun Loungers",
    description:
      "A sparkling outdoor pool surrounded by wooden sun decks, lounge chairs, and serene forest views reserved exclusively for your group.",
    x: 48,
    y: 52,
    category: "deck",
  },
  {
    id: "theater",
    title: "Projector Entertainment Hall",
    subtitle: "Home Theater & Surround Sound",
    description:
      "A grand air-conditioned central living hall featuring a smart HD projector, OTT streaming, and surround audio for movies and match screenings.",
    x: 28,
    y: 65,
    category: "interior",
  },
  {
    id: "lawn",
    title: "Barbecue & Bonfire Lawn",
    subtitle: "Starlit Evenings & Sizzling Grills",
    description:
      "Sprawling manicured celebration lawn equipped with a live barbecue setup, crackling bonfire pit, and outdoor dining under the stars.",
    x: 75,
    y: 40,
    category: "view",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Sunrise Poolside Calm",
    caption: "Waking up to birdsong and taking an invigorating morning dip in your private swimming pool.",
    timeTag: "06:45 AM",
    location: "Private Swimming Pool Deck",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Guided Forest Morning Trek",
    caption: "Exploring tranquil woodland paths and breathing in clean forest air on nature trails arranged by the caretaker.",
    timeTag: "08:30 AM",
    location: "Pargi Forest Trails",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Midday Splash & Lawn Games",
    caption: "Enjoying badminton, board games, and refreshing swims with family and friends in complete privacy.",
    timeTag: "01:30 PM",
    location: "The Ranch Main Lawns",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Golden Hour Terrace Sunset",
    caption: "Watching warm amber sunlight paint the rural forest canopy from the breezy rooftop observation terrace.",
    timeTag: "05:45 PM",
    location: "Rooftop Sunset Terrace",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Movie Night on the Big Screen",
    caption: "Gathering the whole group in the AC living hall for movies, gaming, and matches on the smart HD projector.",
    timeTag: "07:45 PM",
    location: "Smart Projector Hall",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Sizzling Barbecue & Bonfire Under the Stars",
    caption: "Crackling campfire warmth, live skewers on the grill, acoustic music, and starry night skies.",
    timeTag: "09:30 PM",
    location: "Bonfire & BBQ Lawn",
    image:
      "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Waves",
    title: "Private Swimming Pool",
    description: "Exclusive outdoor swimming pool with clean filtered water, sun loungers, and party deck reserved only for your group.",
  },
  {
    icon: "Sparkles",
    title: "Entire 6BR Villa Buyout",
    description: "Six fully air-conditioned master bedrooms with attached private bathrooms, sleeping up to 30 guests comfortably.",
  },
  {
    icon: "Flame",
    title: "Live BBQ & Bonfire Lounge",
    description: "Dedicated barbecue station with charcoal grills, skewers, and a crackling evening campfire pit for starry nights.",
  },
  {
    icon: "Gamepad2",
    title: "Smart Projector Theater",
    description: "Large living lounge equipped with an HD smart projector, OTT streaming platforms, and surround sound.",
  },
  {
    icon: "UtensilsCrossed",
    title: "Indoor & Outdoor Kitchens",
    description: "Complete cooking freedom with refrigerator, stove, utensils, and on-site caretaker assistance for group meals.",
  },
  {
    icon: "TreePine",
    title: "Secluded Forest Edge Setting",
    description: "Peaceful rural location near Pargi surrounded by lush trees, clean country air, and guided forest nature treks.",
  },
  {
    icon: "Car",
    title: "Just 68 km from Hyderabad",
    description: "Effortless 80-minute scenic drive via Chevella & Pargi Road, ideal for hassle-free weekend escapes.",
  },
  {
    icon: "ShieldCheck",
    title: "24/7 Caretaker & Power Backup",
    description: "Private gated compound with round-the-clock caretaker support, 100% generator power backup, and secure parking.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Aditya Reddy",
    location: "Hitech City, Hyderabad",
    rating: 5,
    comment:
      "We booked the entire 6BR Ranch for our college reunion of 18 friends. The private pool, open lawn, and projector theater blew everyone away. Caretakers made the barbecue and bonfire super effortless. Will definitely visit again!",
    date: "February 2026",
  },
  {
    id: "r2",
    author: "Pooja Varma",
    location: "Kondapur, Hyderabad",
    rating: 5,
    comment:
      "An absolute gem of a farmstay just 1.5 hours from Gachibowli. Pure peace surrounded by forest. The villa was sparkling clean, ACs worked great, and swimming in the private pool with forest views was pure bliss.",
    date: "January 2026",
  },
  {
    id: "r3",
    author: "Sanjay Mehta",
    location: "Banjara Hills, Hyderabad",
    rating: 5,
    comment:
      "Stayed here for a family milestone celebration with 22 members. Plenty of room for everyone, large kitchen for cooking, and the kids loved the lawn and swimming pool. Highly recommend MagoStays for private group stays.",
    date: "March 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "emerald",
    name: "Forest Serenity",
    tagline: "Lush forest greenery & private pool calm",
    bg: "linear-gradient(160deg, #eaf2eb 0%, #d4e5d6 55%, #7a9c7e 100%)",
    accent: "#3a6344",
    colorScheme: "emerald",
  },
  {
    key: "golden",
    name: "Ranch Sunset",
    tagline: "Warm golden glow over the open lawn & terrace",
    bg: "linear-gradient(160deg, #faf1df 0%, #eed0b7 55%, #a5582d 100%)",
    accent: "#a5582d",
    colorScheme: "velora",
  },
  {
    key: "twilight",
    name: "Bonfire Starlight",
    tagline: "Crackling campfire & starlit night skies",
    bg: "linear-gradient(160deg, #1c2522 0%, #131b18 55%, #0b110f 100%)",
    accent: "#4ea366",
    colorScheme: "night",
  },
] as const;
