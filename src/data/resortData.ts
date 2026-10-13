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
  name: "Haritha Resort Ananthagiri, Vikarabad",
  shortName: "Haritha Resort",
  subTitle: "Misty Hill Station & Forest Nature Retreat",
  phone: "+91 90109 11122",
  phoneRaw: "919010911122",
  phoneAlt: "+91 96767 52356",
  landline: "08416-256800",
  tollFree: "1800-425-46464",
  email: "reservations@tstdc.in",
  website: "https://tgtdc.in",
  address: "Tandur Road, Ananthagiri Hills, Vikarabad, Telangana 501101",
  landmark: "Atop Ananthagiri Hills, 1.5 km before Sri Anantha Padmanabha Swamy Temple",
  googleMapsQuery: "Haritha+Resort+Ananthagiri+Vikarabad+Telangana",
  googleMapsEmbed: "https://maps.google.com/maps?q=Haritha+Resort+Ananthagiri+Vikarabad&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleMapsLink: "https://www.google.com/maps/place/Haritha+Resort+Ananthagiri,+Vikarabad/@17.3117741,77.875494,17z",
  timings: "Check-in: 12:00 PM | Check-out: 11:00 AM (24/7 Front Desk & Security)",
  distanceFromHyd: "75 km from Hyderabad (approx. 1.5 - 2 hrs via Chevella / Vikarabad road) · 6 km from Vikarabad Railway Station",
};

export const RESORT_SUITES: Suite[] = [
  {
    id: "executive-valley-suite",
    name: "Executive Valley View Suite",
    category: "Premium Air-Conditioned Suite",
    tagline: "Panoramic balcony vistas overlooking misty Ananthagiri forest hills & sunrise clouds",
    pricePerNight: 4500,
    capacity: "2-3 Adults",
    sizeSqFt: 520,
    bedType: "Plush King Bed + Sofa Lounge",
    view: "Ananthagiri Forest Valley & Sunrise Hilltops",
    description:
      "Perched on the elevated crest of Ananthagiri Hills, this premium executive suite features a private observation balcony facing the sweeping forest valley, climate-controlled AC, and peaceful mountain seclusion.",
    features: [
      "Expansive private balcony with outdoor seating facing the valley",
      "Silent split air-conditioning & flat-screen LED TV",
      "Spacious living lounge with coffee table and sofa",
      "En-suite bathroom with 24/7 solar hot water geyser",
      "Complimentary morning breakfast at Haritha Restaurant",
      "Direct walking pathway to sunset viewpoint & forest trails",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "haritha-deluxe-ac-room",
    name: "Haritha Deluxe AC Suite",
    category: "Deluxe Air-Conditioned Room",
    tagline: "Comfortable AC haven amidst dense green trees and cool oxygen-rich mountain breeze",
    pricePerNight: 3200,
    capacity: "2 Adults + 1 Child",
    sizeSqFt: 380,
    bedType: "Comfort King Bed",
    view: "Green Pine & Forest Garden",
    description:
      "A serene hillside retreat for weekend road-trippers from Hyderabad. Features well-appointed bedding, air-conditioning, clean modern bath amenities, and immediate garden tranquility.",
    features: [
      "Climate-controlled air-conditioning & ceiling fan",
      "Private sit-out veranda overlooking hillside greenery",
      "Television with satellite entertainment channels",
      "Attached bathroom with geyser for refreshing hot baths",
      "24-hour front desk support & daily housekeeping",
      "Steps away from Haritha dining hall and children lawn",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "hilltop-family-cottage",
    name: "Hilltop Heritage Family Cottage",
    category: "Spacious Multi-Bed Family Suite",
    tagline: "Spacious family cottage ideal for pilgrimages to Anantha Padmanabha Swamy Temple",
    pricePerNight: 5500,
    capacity: "4-6 Adults",
    sizeSqFt: 750,
    bedType: "Two Double Beds + Extra Daybed",
    view: "Hill Crest Gardens & Forest Belt",
    description:
      "Designed for families and groups visiting the sacred temple or holidaying in Vikarabad. Offers multi-bed sleeping arrangements, a large veranda for gathering over hot tea, and ample parking outside.",
    features: [
      "Accommodates up to 6 guests comfortably in spacious quarters",
      "Two interconnected air-conditioned sleeping zones",
      "Two attached bathrooms with reliable hot water",
      "Wide outdoor veranda for family conversations and mountain air",
      "Easy 3-minute drive to Sri Anantha Padmanabha Swamy Temple",
      "Short scenic drive to Kotepally Reservoir boating point",
    ],
    image:
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "standard-nature-room",
    name: "Ananthagiri Nature Classic Room",
    category: "Nature View Classic Room",
    tagline: "Cozy budget-friendly retreat for weekend hikers, cyclists, and nature enthusiasts",
    pricePerNight: 2200,
    capacity: "2 Adults",
    sizeSqFt: 300,
    bedType: "Double Bed",
    view: "Hillside Woodlands & Lawns",
    description:
      "Perfect for nature lovers exploring the trekking trails of Vikarabad. Clean, breezy, and peaceful with natural ventilation and fast access to early-morning hiking paths.",
    features: [
      "Naturally ventilated room with fresh cool mountain breeze",
      "Double spring mattress and clean cotton linens",
      "Attached private bathroom with hot water geyser",
      "Wardrobe and bedside charging points",
      "Early morning bird-watching right outside your window",
      "Direct access to Ananthagiri forest trekking trails",
    ],
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export const RESORT_HOTSPOTS: Hotspot[] = [
  {
    id: "viewpoint",
    title: "Ananthagiri Valley Viewpoint",
    subtitle: "Sweeping Valley & Foggy Horizon",
    description:
      "Marvel at sunrise mist rolling over deep teak forests and the emerald valleys of Vikarabad from the scenic viewpoint.",
    x: 48,
    y: 38,
    category: "view",
  },
  {
    id: "temple",
    title: "Sri Anantha Padmanabha Swamy Temple",
    subtitle: "Ancient 400-Year Sacred Shrine (1.5 km)",
    description:
      "A revered historic temple built within natural rock caves, celebrating Lord Vishnu and marking the sacred origin of River Musi.",
    x: 78,
    y: 55,
    category: "interior",
  },
  {
    id: "dining",
    title: "Haritha Valley Restaurant",
    subtitle: "Authentic Telangana & South Indian Feasts",
    description:
      "Savor steaming idlis, crispy dosas, spicy Telangana chicken curries, and fragrant dum biryanis right on the hilltop.",
    x: 25,
    y: 65,
    category: "deck",
  },
];

export const RESORT_MOMENTS: Moment[] = [
  {
    id: "1",
    title: "Morning Mist Rising Over the Valley",
    caption: "Thick fog hovering gently over Ananthagiri forest canopies as the morning sun casts gold across the hills.",
    timeTag: "06:15 AM",
    location: "Haritha Valley Viewpoint",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "2",
    title: "Sacred Temple Darshan in the Caves",
    caption: "Peaceful spiritual moments at the ancient Sri Anantha Padmanabha Swamy Temple nestled in natural rock caves.",
    timeTag: "08:45 AM",
    location: "Anantha Padmanabha Swamy Temple (1.5 km)",
    image:
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "3",
    title: "Trekking Through Medicinal Forests",
    caption: "Guided morning hikes through dense teak trees, breathing in the cleanest oxygen-rich air in Telangana.",
    timeTag: "11:00 AM",
    location: "Ananthagiri Reserve Forest Trails",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "4",
    title: "Kayaking at Kotepally Reservoir",
    caption: "Gliding across tranquil reservoir waters surrounded by gentle hills and refreshing breezes just 14 km away.",
    timeTag: "03:30 PM",
    location: "Kotepally Reservoir Lake",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "5",
    title: "Hilltop Sunset Over Vikarabad",
    caption: "Watching the sun dip below endless horizons casting warm purple and orange hues across the mountain ridge.",
    timeTag: "06:00 PM",
    location: "Resort Sunset Deck",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "6",
    title: "Cool Mountain Night & Bonfire Warmth",
    caption: "Gathering around crackling fires under crisp starry night skies with family and hot food in the chilly hill air.",
    timeTag: "08:45 PM",
    location: "Haritha Campfire Lawns",
    image:
      "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1400&q=85",
  },
];

export const RESORT_AMENITIES: Amenity[] = [
  {
    icon: "Compass",
    title: "Hill Station Climate at 700m",
    description: "Cool weather, morning fog, and clean mountain air atop Ananthagiri Hills, the highest hill station in the region.",
  },
  {
    icon: "Car",
    title: "Only 75 km from Hyderabad",
    description: "An effortless 1.5 to 2-hour drive via Chevella & Vikarabad highway, making it the closest nature getaway from the city.",
  },
  {
    icon: "UtensilsCrossed",
    title: "Haritha Valley Restaurant",
    description: "On-site multi-cuisine restaurant serving hot South Indian breakfast, Telangana curries, biryani, and tea.",
  },
  {
    icon: "Flame",
    title: "Campfire & Starry Hill Nights",
    description: "Enjoy winter bonfires and starry night skies in the chilly hill atmosphere with family and friends.",
  },
  {
    icon: "Sparkles",
    title: "Sri Anantha Padmanabha Swamy Temple",
    description: "Located just 1.5 km away from the 400-year-old historic cave shrine and the sacred origin point of River Musi.",
  },
  {
    icon: "Waves",
    title: "Kotepally Reservoir Boating",
    description: "Only 14 km drive to Kotepally Lake for kayaking, pedal boating, and tranquil lakeside picnicking.",
  },
  {
    icon: "TreePine",
    title: "Dense Forest Trekking Trails",
    description: "Direct access to scenic hiking routes through reserve teak forests and rich medicinal plant groves.",
  },
  {
    icon: "ShieldCheck",
    title: "24/7 Front Desk & Parking",
    description: "Government-operated TSTDC property with round-the-clock front desk, caretaker staff, and ample vehicle parking.",
  },
];

export const RESORT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Rahul Sharma",
    location: "Gachibowli, Hyderabad",
    rating: 5,
    comment:
      "Best weekend escape from Hyderabad! The cool morning weather with thick fog rolling across the valley was unbelievable. Temple is just 1.5 km away, and Kotepally kayaking was a fantastic experience for the family.",
    date: "February 2026",
  },
  {
    id: "r2",
    author: "Sravanthi Rao",
    location: "Kondapur, Hyderabad",
    rating: 4,
    comment:
      "Just 1.5 hours scenic drive from Hyderabad. Haritha Resort has the most commanding valley view in all of Ananthagiri. Having hot puri bhaji and coffee on the hill in the cool morning breeze made our weekend.",
    date: "January 2026",
  },
  {
    id: "r3",
    author: "Venkatesh K",
    location: "Secunderabad, Telangana",
    rating: 4,
    comment:
      "Great forest surroundings and pure fresh oxygen. Rooms are spacious with wonderful valley view balconies. Perfect for families looking for peaceful nature without traveling too far.",
    date: "March 2026",
  },
];

export const AMBIENT_MOODS = [
  {
    key: "emerald",
    name: "Forest Mist",
    tagline: "Dense green teak trees & morning mountain fog",
    bg: "linear-gradient(160deg, #eaf2eb 0%, #d4e5d6 55%, #7a9c7e 100%)",
    accent: "#3a6344",
    colorScheme: "emerald",
  },
  {
    key: "golden",
    name: "Hilltop Sunset",
    tagline: "Warm amber radiance over Vikarabad valley horizons",
    bg: "linear-gradient(160deg, #faf1df 0%, #eed0b7 55%, #a5582d 100%)",
    accent: "#a5582d",
    colorScheme: "velora",
  },
  {
    key: "twilight",
    name: "Mountain Starlight",
    tagline: "Crisp hill breeze & peaceful starry night skies",
    bg: "linear-gradient(160deg, #1c2522 0%, #131b18 55%, #0b110f 100%)",
    accent: "#4ea366",
    colorScheme: "night",
  },
] as const;
