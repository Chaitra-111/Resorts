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
  name: "Baywatch Beach Resort and Restaurant Patnem",
  shortName: "Baywatch Patnem",
  subTitle: "Beachfront Cottages & Seafront Dining",
  tagline: "Direct Patnem Beachfront Living, Sea View Balconies & Laid-Back Coastal Dining in Canacona, South Goa",
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  phoneAlt: "+91 832 264 3880",
  email: "stay@baywatchpatnem.com",
  website: "https://baywatchpatnem.com",
  address: "H.No. 156/A, Patnem Beach, Palolem-Patnem Road, Canacona, South Goa 403702",
  landmark: "Directly on Patnem Beach sands, 5 mins to Colomb Bay & Palolem Beach, 3 km to Canacona Station",
  googleMapsQuery: "Baywatch+Beach+Resort+and+Restaurant+Patnem+Goa",
  googleMapsUrl: "https://www.google.com/maps/place/Baywatch+Beach+Resort+and+Restaurant+Patnem/@14.9977989,74.0337351,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbe5badf0884755:0xa631fcd10e0c41d0!5m2!4m1!1i2!8m2!3d14.9977989!4d74.0337351!16s%2Fg%2F11tmsf_r7f?entry=ttu",
  googleMapsEmbed: "https://maps.google.com/maps?q=Baywatch+Beach+Resort+and+Restaurant+Patnem+Goa&t=&z=16&ie=UTF8&iwloc=&output=embed",
  justdialLink: "https://www.justdial.com/Goa/Baywatch-Beach-Resort-Patnem-Beach-Canacona/0832PX832-X832-230214174810-P2Z4_BZDET",
  timings: "24/7 Front Desk · Patnem Beachfront Restaurant & Bar 7:30 AM – 11:30 PM",
  distanceHighlights: "0m directly on Patnem Beach | 5 mins to Palolem & Colomb Bay | 3 km to Canacona Station",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "seafront-balcony-cottage",
    name: "Seafront Balcony Cottage",
    category: "Direct Beachfront Horizon",
    tagline: "Air-conditioned seafront cottage with private balcony opening directly onto Patnem Beach waves",
    pricePerNight: 4200,
    capacity: "2–3 Guests",
    sizeSqFt: 340,
    bedType: "Plush King Size Bed",
    view: "Unobstructed Patnem Cove & Arabian Sea Sunset",
    description:
      "Wake up with the sound of rolling Arabian Sea tides directly beneath your private balcony. Thoughtfully crafted for coastal relaxation with crisp air-conditioning, an in-room safety deposit box, wardrobe, free Wi-Fi, modern attached bath with free toiletries, and instant step-out sand access.",
    features: [
      "Private sit-out balcony overlooking the tranquil Patnem cove",
      "Direct 0-meter beach frontage right onto the golden sand",
      "Silent split air-conditioning & personalized climate control",
      "In-room safety deposit box, work desk, and spacious closet",
      "Private modern bathroom with 24/7 hot water & fresh toiletries",
      "Complimentary beach loungers outside Baywatch Restaurant",
    ],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "deluxe-sea-breeze-ac-room",
    name: "Deluxe Sea-Breeze A/C Room",
    category: "Coastal Comfort",
    tagline: "Restful air-conditioned double room steps away from Patnem sands and the open-air beach shack",
    pricePerNight: 3400,
    capacity: "2 Guests",
    sizeSqFt: 290,
    bedType: "Comfort King Size Bed",
    view: "Patnem Coconut Grove & Partial Sea View",
    description:
      "Ideal for couples and holidaymakers craving serene beachside living without city distractions. Enjoy clean sanitized linens, cooling split A/C, free Wi-Fi, seating terrace, and room service directly from Baywatch's multi-cuisine seaside kitchen.",
    features: [
      "Steps from Patnem Beach shoreline and seaside sunset lounge",
      "Quiet split air-conditioner and timber ceiling fans",
      "Attached modern bathroom with pressurized hot showers",
      "High-speed wireless internet access across the room",
      "Room dining service from the beachfront restaurant & bar",
      "Easy scooter rental & dolphin boat trip assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "garden-palm-breeze-cottage",
    name: "Garden Palm Breeze Cottage",
    category: "Bohemian Sanctuary",
    tagline: "Cozy shaded coastal cottage nestled beneath tropical coconut palms with laid-back beach vibe",
    pricePerNight: 2800,
    capacity: "2 Guests",
    sizeSqFt: 260,
    bedType: "Comfort Double Bed",
    view: "Shaded Coconut Palm Courtyard",
    description:
      "Embrace South Goa's slow-paced rhythm in a peaceful palm-shaded cottage designed for wellness retreats, yoga travelers, and explorers. Complete with cozy veranda chairs, clean attached bath, ceiling fan or A/C option, and quick access to the sand.",
    features: [
      "Private shaded veranda amidst swaying coconut palms",
      "Air-conditioning & cross-ventilation windows",
      "Attached clean private bath with hot and cold showers",
      "High-speed Wi-Fi suitable for remote digital nomads",
      "20-second walk straight onto uncrowded Patnem Beach",
      "Friendly 24-hour front desk & luggage assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "standard-beachside-room",
    name: "Standard Beachside Room",
    category: "Budget Beach Retreat",
    tagline: "Pocket-friendly coastal room on Patnem Beach, just 3 km from Canacona Railway Station",
    pricePerNight: 2200,
    capacity: "2 Guests",
    sizeSqFt: 220,
    bedType: "Comfort Double Bed",
    view: "Courtyard & Beach Path",
    description:
      "An affordable beachfront option for solo backpackers, surfers, and weekend travelers visiting Patnem and Palolem. Features a cozy double bed, private attached bathroom, free Wi-Fi, and direct access to the seaside restaurant and bar.",
    features: [
      "Located right on Patnem Beach shoreline (0m to beach)",
      "Only 3 km (7 mins) from Canacona Railway Station",
      "Clean private bathroom with hot & cold water",
      "Complimentary high-speed Wi-Fi and parking access",
      "Direct access to beachfront loungers, music, and happy hours",
      "Airport shuttle and local cab bookings on request",
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
    id: "patnem-beach-sand",
    title: "Patnem Beach Shoreline",
    subtitle: "0m · Calm Golden Cove",
    description:
      "Step straight out from Baywatch onto the serene, family-friendly crescent of Patnem Beach. Ideal for morning dips, paddleboarding, and tranquil beach strolls.",
    x: 24,
    y: 36,
    category: "deck",
  },
  {
    id: "baywatch-restaurant",
    title: "Baywatch Seaside Restaurant & Bar",
    subtitle: "Beach Shack Dining & Happy Hours",
    description:
      "Savor fresh Goan seafood, continental breakfasts, Indian thalis, and tropical cocktails at our lively open-air beachfront dining deck.",
    x: 62,
    y: 58,
    category: "interior",
  },
  {
    id: "palolem-colomb-corridor",
    title: "Colomb Bay & Palolem Corridor",
    subtitle: "5 Mins · Coastal Trail",
    description:
      "Walk along the rocky coastal cliff trail or take a 5-minute ride to explore neighboring Colomb Bay, Rajbagh Beach, and Palolem.",
    x: 82,
    y: 28,
    category: "view",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Sunset Happy Hours on the Sand",
    caption: "Watch crimson sunsets across Patnem cove with chilled cocktails and soft coastal music.",
    timeTag: "06:00 PM",
    location: "Baywatch Beach Bar",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Morning Sea-Breeze Breakfast",
    caption: "Fuel up with freshly brewed coffee, seasonal tropical fruit bowls, and omelettes by the surf.",
    timeTag: "08:30 AM",
    location: "Baywatch Oceanfront Deck",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Fresh Coastal Seafood Feasts",
    caption: "Indulge in spicy Goan prawn curry, garlic butter calamari, and wood-fired catch right on the shore.",
    timeTag: "08:00 PM",
    location: "Baywatch Kitchen & Grill",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Kayaking & Patnem Surf Swells",
    caption: "Explore quiet coves along Patnem and Colomb Bay by morning kayak or enjoy calm bay swimming.",
    timeTag: "10:30 AM",
    location: "Patnem Cove Waters",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Cinema Nights & Acoustic Jams",
    caption: "Experience Patnem's signature laid-back evenings with beach movie screenings and live acoustics.",
    timeTag: "09:00 PM",
    location: "Baywatch Open Lounge",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "24/7 Care & Station Transfers",
    caption: "Effortless cab support connecting you with Canacona Railway Station (3 km) and Goa airports.",
    timeTag: "11:30 PM",
    location: "Baywatch Front Desk",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Waves",
    title: "0m Directly on Patnem Beach",
    description: "Unmatched direct beach access onto Patnem's tranquil sands and calm coastal bay.",
  },
  {
    icon: "Coffee",
    title: "On-Site Beach Restaurant & Bar",
    description: "Multi-cuisine beach shack serving Goan seafood, Indian, Chinese, continental meals & cocktails.",
  },
  {
    icon: "Mountain",
    title: "Seafront Sunbeds & Loungers",
    description: "Complimentary beachfront sun loungers and shaded umbrellas serviced all day long.",
  },
  {
    icon: "ShieldCheck",
    title: "24/7 Front Desk & Safe Lockers",
    description: "Round-the-clock reception, in-room safety deposit boxes, and helpful room service.",
  },
  {
    icon: "Gamepad2",
    title: "Free High-Speed Wi-Fi",
    description: "Complimentary Wi-Fi connectivity available throughout cottages, rooms, and dining deck.",
  },
  {
    icon: "Car",
    title: "Free Parking & Airport Shuttles",
    description: "Convenient guest parking on-site plus paid airport shuttle and local Canacona cab arrangements.",
  },
  {
    icon: "Sparkles",
    title: "Happy Hours & Beach Vibes",
    description: "Laid-back sunset happy hours, coastal acoustic music nights, and occasional beach cinema.",
  },
  {
    icon: "Flame",
    title: "Boat Trips & Kayaking Desk",
    description: "Effortless bookings for Butterfly Beach boats, dolphin cruises, paddleboards, and yoga studios.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Claire & Tom Hughes",
    location: "Manchester, UK",
    rating: 5,
    comment:
      "Baywatch Beach Resort Patnem has the absolute best vibe in South Goa! Staying in a Seafront Balcony Cottage literally steps from the sand was dreamy. Great chill music, wonderful seafood curries, and much quieter and cleaner than Palolem.",
    date: "October 2026",
  },
  {
    id: "r2",
    author: "Kartikeya & Meera Iyer",
    location: "Bengaluru, Karnataka",
    rating: 5,
    comment:
      "Loved the food and location right on Patnem Beach! Breakfast overlooking the morning ocean and sunset drinks on the loungers were priceless. Staff is super friendly and Canacona station is just 10 mins away.",
    date: "September 2026",
  },
  {
    id: "r3",
    author: "Marco Rossi",
    location: "Milan, Italy",
    rating: 4,
    comment:
      "Great value beachfront accommodation in Canacona. The room A/C kept us cool, bed was comfortable, and walking straight to swim every morning at sunrise was magical. Happy hour cocktails at sunset are top notch!",
    date: "August 2026",
  },
  {
    id: "r4",
    author: "Rhea Fernandes",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment:
      "A true Patnem gem! Peaceful beach, clean rooms with hot water and Wi-Fi, and delicious butter garlic prawns at the restaurant. Perfect weekend escape from the city.",
    date: "July 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "coastal",
    name: "Patnem Breeze",
    tagline: "Sunlit Patnem shoreline & tranquil blue coastal swells",
    bg: "linear-gradient(160deg, #f0f7f9 0%, #d4e9ee 55%, #1b6370 100%)",
    accent: "#165864",
    colorScheme: "mist",
  },
  {
    key: "sunset",
    name: "Baywatch Sunset",
    tagline: "Crimson twilight horizons & sunset beach shack cocktails",
    bg: "linear-gradient(160deg, #faf3ec 0%, #f1d5be 55%, #b56232 100%)",
    accent: "#b56232",
    colorScheme: "velora",
  },
  {
    key: "night",
    name: "Starlit Shore",
    tagline: "Peaceful waves & moonlit acoustic evenings on Patnem Beach",
    bg: "linear-gradient(160deg, #0a111a 0%, #111d2e 55%, #050b11 100%)",
    accent: "#38bdf8",
    colorScheme: "night",
  },
] as const;
