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
  name: "Royal Woods Beach Resort",
  shortName: "Royal Woods Palolem",
  subTitle: "Beachfront Wooden Cottages & Sea-View Stays",
  tagline: "Direct Frontline Beachfront, Handcrafted Wooden Cottages, Sea-View Verandas & On-Site Beach Shack Dining in Canacona, South Goa",
  phone: "+91 98152 03635",
  phoneRaw: "+919815203635",
  phoneAlt: "+91 98221 23456",
  email: "stay@royalwoodsgoa.com",
  website: "https://royalwoodsgoa.com",
  address: "Ourem Road, Mohanbagh, Palolem Beach, Canacona, South Goa 403702",
  landmark: "Direct beachfront on Palolem Beach sands, near Art Resort & Ourem estuary, 2.5 km to Canacona Station",
  googleMapsQuery: "Royal+Woods+Beach+Resort+Palolem+Goa",
  googleMapsUrl: "https://www.google.com/maps/place/Royal+Woods+Beach+Resort/@15.0066777,74.0267737,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbe455d399d3dbd:0xb899b05fc8966eaa!5m2!4m1!1i2!8m2!3d15.0066777!4d74.0267737!16s%2Fg%2F11gxww1lj7?entry=ttu",
  googleMapsEmbed: "https://maps.google.com/maps?q=15.0066777,74.0267737&t=&z=16&ie=UTF8&iwloc=&output=embed",
  timings: "24/7 Front Desk & Care · Beach Shack Restaurant & Bar 7:30 AM – 11:30 PM",
  distanceHighlights: "Direct beachfront on Palolem sand | Near Art Resort & Ourem Estuary | 2.5 km to Canacona Station",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "beachfront-sea-facing-cottage",
    name: "Beachfront Sea-Facing Wooden Cottage",
    category: "Signature Frontline Living",
    tagline: "Direct beach-facing handcrafted wooden cottage with private porch right on Palolem sand",
    pricePerNight: 4500,
    capacity: "2 Guests",
    sizeSqFt: 360,
    bedType: "Plush King Size Bed",
    view: "Direct Palolem Beachfront & Arabian Sea Sunset",
    description:
      "Step directly from your private wooden porch onto the soft golden sands of Palolem Beach. Features authentic timber construction, cooling split air-conditioning, plush king bedding, en-suite bathroom with 24/7 hot shower, private sit-out loungers, and unhindered sunset views across the bay.",
    features: [
      "Direct beachfront position—step right onto the golden sand",
      "Private covered wooden porch with ocean-view deck loungers",
      "Split air-conditioning & timber ceiling fan for optimal comfort",
      "Modern en-suite bath with pressurized hot showers & toiletries",
      "Free high-speed Wi-Fi and beach shack room service",
      "Direct beach sunbeds and kayak rental arrangements",
    ],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "premium-sea-view-upper-cottage",
    name: "Premium Sea-View Upper Cottage",
    category: "Elevated Bay Haven",
    tagline: "Elevated wooden cottage commanding panoramic crescent views across Palolem bay",
    pricePerNight: 4200,
    capacity: "2 Guests",
    sizeSqFt: 340,
    bedType: "Plush King Size Bed",
    view: "Panoramic Palolem Bay & Swaying Palms",
    description:
      "Perched on the upper floor to catch gentle Arabian Sea breezes and panoramic views of the Palolem shoreline. Designed with rich natural wood interiors, king bed, split air-conditioning, private furnished balcony, and attached bathroom with hot water.",
    features: [
      "Elevated private balcony with sweeping ocean & sunset views",
      "Cooling sea breezes and tranquil coastal ambiance",
      "Handcrafted wooden architecture with excellent insulation",
      "Split air-conditioning, soft linens, and daily housekeeping",
      "Attached private washroom with 24/7 hot and cold shower",
      "Complimentary high-speed Wi-Fi and breakfast options",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "deluxe-wooden-ac-cottage",
    name: "Deluxe Wooden AC Cottage",
    category: "Tropical Palm Grove",
    tagline: "Spacious wooden coastal cottage nestled under coconut palms steps from the shore",
    pricePerNight: 3600,
    capacity: "2–3 Guests",
    sizeSqFt: 320,
    bedType: "Comfort King Bed",
    view: "Palm Grove Courtyard & Garden Breeze",
    description:
      "A peaceful wooden retreat tucked in the lush palm grove just seconds behind the beach front row. Unwind on your private veranda, sleep comfortably in split air-conditioned interiors, and enjoy instant access to the warm sea and beach cafes.",
    features: [
      "Nestled in a peaceful coconut garden just steps from the sand",
      "Handmade timber construction with private shaded sit-out",
      "Split air-conditioner & silent ceiling fan for sound sleep",
      "Private attached bathroom with continuous hot water supply",
      "High-speed wireless internet across cottages and property",
      "Near Ourem Road art cafes, yoga centers, and beach shacks",
    ],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "standard-garden-beach-hut",
    name: "Standard Garden Beach Hut",
    category: "Authentic Coastal Living",
    tagline: "Rustic beach cottage offering authentic South Goa charm at pocket-friendly tariffs",
    pricePerNight: 2600,
    capacity: "2 Guests",
    sizeSqFt: 260,
    bedType: "Comfort Double Bed",
    view: "Garden Sand Path",
    description:
      "Embrace authentic Palolem beach culture in our cozy wooden beach hut. Ideal for couples, backpackers, and digital nomads seeking beachfront proximity without the premium tag. Equipped with double bedding, fan/AC cooling, private bathroom, and direct path to the sand.",
    features: [
      "Pocket-friendly beach stay directly on Palolem property grounds",
      "Double bed with clean linens and mosquito netting / screens",
      "Attached private washroom with hot & cold shower",
      "Private outdoor bench to enjoy the tropical coastal air",
      "Free high-speed Wi-Fi throughout the resort",
      "Scooter hire, airport transfer, and dolphin trip assistance",
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
    id: "palolem-beach-sand",
    title: "Direct Palolem Beachfront (0m)",
    subtitle: "Step Straight onto Sand · Calm Bay Waters",
    description:
      "Walk straight out of your cottage onto the golden sands of Palolem. Enjoy calm waters protected by the bay, beach sunbeds, and gentle swimming.",
    x: 22,
    y: 35,
    category: "view",
  },
  {
    id: "royal-woods-shack",
    title: "Royal Woods Beach Shack & Bar",
    subtitle: "Fresh Catch Seafood · Sunset Cocktails · Tandoori Grills",
    description:
      "Feast on fresh Arabian Sea catch, tandoori grills, wood-fired pizzas, Goan fish curry, and chilled beers with sand between your toes.",
    x: 65,
    y: 50,
    category: "interior",
  },
  {
    id: "ourem-estuary-art-resort",
    title: "Ourem Estuary & Art Resort Vibe",
    subtitle: "Scenic Southern Crescent · Kayak Excursions",
    description:
      "Situated near the scenic Ourem estuary and Art Resort on the peaceful southern stretch of Palolem Beach, ideal for kayaking and dolphin trips.",
    x: 48,
    y: 65,
    category: "deck",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Golden Sunsets from Beachfront Porch",
    caption: "Watch fiery Arabian Sea sunsets over the Palolem crescent directly from your private wooden cottage veranda.",
    timeTag: "06:15 PM",
    location: "Beachfront Wooden Porch",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Fresh Seafood & Candlelit Beach Dining",
    caption: "Indulge in fresh catch tandoori kingfish, butter garlic prawns, and authentic Goan curry right on the sand.",
    timeTag: "08:00 PM",
    location: "Royal Woods Beach Shack",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Morning Oceanfront Breakfast",
    caption: "Start your day with fluffy pancakes, fresh tropical juices, and brewed coffee by the tranquil morning waves.",
    timeTag: "08:30 AM",
    location: "Beachside Dining Deck",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Kayaking & Dolphin Spotting Tours",
    caption: "Hire a kayak or join a morning dolphin boat tour heading out from the quiet Ourem end toward Butterfly Beach.",
    timeTag: "10:00 AM",
    location: "Palolem Beach Shore",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Tropical Afternoon Cottage Siesta",
    caption: "Relax on your private wooden veranda surrounded by coconut palms and gentle coastal breezes.",
    timeTag: "03:30 PM",
    location: "Deluxe Wooden Veranda",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Starlit Nights by the Ocean",
    caption: "Experience Palolem's famous relaxed evening vibe with acoustic music, chilled cocktails, and ocean rustle.",
    timeTag: "09:30 PM",
    location: "Royal Woods Shoreline Lounge",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Waves",
    title: "Direct Beachfront on Palolem Sand",
    description: "Step right out from your cottage onto the golden sands of Palolem Beach.",
  },
  {
    icon: "Coffee",
    title: "Royal Woods Beach Shack & Bar",
    description: "Serving fresh Goan seafood, tandoor grills, wood-fired specials, and sunset cocktails.",
  },
  {
    icon: "Mountain",
    title: "Handcrafted Wooden Beach Cottages",
    description: "Authentic timber cottages with private porches, sea views, and lush palm grove surrounds.",
  },
  {
    icon: "ShieldCheck",
    title: "Split A/C & 24/7 Hot Water",
    description: "Cool air-conditioned rooms paired with private modern bathrooms and pressurized hot showers.",
  },
  {
    icon: "Gamepad2",
    title: "Free High-Speed Wi-Fi",
    description: "Complimentary wireless internet available across all cottages and the beachfront dining shack.",
  },
  {
    icon: "Car",
    title: "Scooter Hire & Airport Transfers",
    description: "Easy scooter rentals, Canacona railway station pickups, and Goa airport taxi assistance.",
  },
  {
    icon: "Sparkles",
    title: "Beach Sunbeds & Umbrellas",
    description: "Complimentary sun loungers right on the sand for resort guests to relax between swims.",
  },
  {
    icon: "Flame",
    title: "24/7 Front Desk & Care",
    description: "Round-the-clock host assistance, housekeeping, luggage storage, and boat tour bookings.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Rohan & Sneha Joshi",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment:
      "Royal Woods has the best beachfront location in Palolem! Stepping right onto the sand from our wooden cottage was unforgettable. Great food at the beach shack and lovely sunset view. Very peaceful Ourem side.",
    date: "November 2026",
  },
  {
    id: "r2",
    author: "Oliver & Emily Clarke",
    location: "Bristol, United Kingdom",
    rating: 5,
    comment:
      "Authentic wooden cottage stay right near Art Resort on the quiet Ourem end. Super comfortable bed, strong A/C, and loved sitting on the veranda with morning coffee. The beach is literally right outside!",
    date: "October 2026",
  },
  {
    id: "r3",
    author: "Vikram & Ananya Roy",
    location: "Bengaluru, Karnataka",
    rating: 4,
    comment:
      "Delicious Goan fish curry, friendly staff, and the beach is literally your front yard. We stayed 3 nights in the Deluxe Wooden AC Cottage. Great value for beachfront in Palolem.",
    date: "September 2026",
  },
  {
    id: "r4",
    author: "Elena Rostova",
    location: "Saint Petersburg, Russia",
    rating: 5,
    comment:
      "The upper sea-view cottage was amazing. Falling asleep to ocean waves and waking up to the turquoise bay view is pure bliss. Fast Wi-Fi and easy kayak rentals right on the beach.",
    date: "August 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "coastal",
    name: "Palolem Tides",
    tagline: "Direct beachfront sands & rhythmic Arabian Sea waves",
    bg: "linear-gradient(160deg, #f0f7f9 0%, #d4e9ee 55%, #1b6370 100%)",
    accent: "#165864",
    colorScheme: "mist",
  },
  {
    key: "sunset",
    name: "Ourem Sunset",
    tagline: "Golden amber horizons & chilled shack cocktails on the sand",
    bg: "linear-gradient(160deg, #faf3ec 0%, #f1d5be 55%, #b56232 100%)",
    accent: "#b56232",
    colorScheme: "velora",
  },
  {
    key: "night",
    name: "Starlit Beachfront",
    tagline: "Gentle ocean rustles beneath moonlit South Goa skies",
    bg: "linear-gradient(160deg, #0a111a 0%, #111d2e 55%, #050b11 100%)",
    accent: "#38bdf8",
    colorScheme: "night",
  },
] as const;
