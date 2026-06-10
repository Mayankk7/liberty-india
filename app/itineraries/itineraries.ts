// ============================================================================
// LIBERTY INDIA — Itineraries Data
// ============================================================================
// This file contains all itinerary data for the Liberty India travel platform.
// Images use placeholder paths — replace with actual assets before deployment.
// ============================================================================

// ─── Category Definitions ───────────────────────────────────────────────────

export type ItineraryCategory =
  | "Heritage"
  | "Culture"
  | "Architecture"
  | "Nature"
  | "Spiritual"
  | "Wellness"
  | "Wildlife"
  | "Adventure";

export const CATEGORIES: { label: ItineraryCategory; description: string }[] = [
  { label: "Heritage", description: "Explore India's UNESCO sites, forts, palaces, and monuments that span millennia of history." },
  { label: "Culture", description: "Immerse yourself in India's living traditions, performing arts, craftsmanship, and festivals." },
  { label: "Architecture", description: "Marvel at Mughal masterpieces, Dravidian temples, colonial landmarks, and ancient cave complexes." },
  { label: "Nature", description: "Discover India's diverse landscapes — from Himalayan peaks and tea gardens to backwaters and beaches." },
  { label: "Spiritual", description: "Walk in the footsteps of saints and sages across India's most sacred pilgrimage routes." },
  { label: "Wellness", description: "Restore mind, body, and spirit with Ayurvedic treatments, yoga retreats, and holistic healing." },
  { label: "Wildlife", description: "Track Bengal tigers, one-horned rhinos, elephants, and exotic birdlife across India's finest reserves." },
  { label: "Adventure", description: "Ride toy trains, cruise backwaters, explore caves, and embark on safaris across incredible terrain." },
];

// ─── Interfaces ─────────────────────────────────────────────────────────────

export type Meal = "breakfast" | "lunch" | "dinner";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  overnight: string;
  /** Meals included that day — drives the chips on the day card. Omit (or
   *  leave empty) when no meals are included so no chip row renders. */
  meals?: Meal[];
  image?: string;
}

export interface SignatureExperience {
  category: string;
  title: string;
  image?: string;
}

export interface SuggestedHotel {
  name: string;
  city: string;
  image: string;
}

export interface Itinerary {
  slug: string;
  title: string;
  subtitle: string;
  categories: ItineraryCategory[];
  duration: string;
  durationDays: number;            // numeric for sorting/filtering
  startingPrice: string;           // e.g. "€390"
  startingPriceNote: string;       // e.g. "per person"
  route: string;
  bestTime: string;
  overview: string[];
  summary: string[];
  summaryRight: string[];
  days: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  datesPrices: string[];
  notes: string[];
  signatureExperiences: SignatureExperience[];
  heroImage: string;
  overviewImage: string;
  mapImage: string;
  coordinates?: MapStop[];
  suggestedHotels?: SuggestedHotel[];
}

// ─── Helper: Get itineraries by category ────────────────────────────────────

export function getItinerariesByCategory(category: ItineraryCategory): Itinerary[] {
  return itineraries.filter((it) => it.categories.includes(category));
}

export function getItineraryBySlug(slug: string): Itinerary | undefined {
  return itineraries.find((it) => it.slug === slug);
}

// ─── Map routes for interactive maps ────────────────────────────────────────

export interface MapStop {
  name: string;
  lat: number;
  lng: number;
  /** Transport used to reach the NEXT stop — drives the leg icon on the map
   *  (road → car, air → flight, rail → train, water → boat). */
  modeToNext?: "road" | "air" | "rail" | "water";
}

// Keyed by itinerary slug
export const ITINERARY_MAP_ROUTES: Record<string, MapStop[]> = {
  // 1. Northeast India & The City of Joy
  "eastindia": [
    { name: "Kolkata", lat: 22.5726, lng: 88.3639, modeToNext: "air" },
    { name: "Dibrugarh", lat: 27.4728, lng: 94.912, modeToNext: "road" },
    { name: "Jorhat", lat: 26.7509, lng: 94.2037, modeToNext: "road" },
    { name: "Kaziranga", lat: 26.5775, lng: 93.1711, modeToNext: "road" },
    { name: "Shillong", lat: 25.5788, lng: 91.8933, modeToNext: "road" },
    { name: "Guwahati", lat: 26.1445, lng: 91.7362, modeToNext: "air" },
    { name: "Kolkata", lat: 22.5726, lng: 88.3639 },
  ],

  // 2. Kairali Ayurvedic Healing Village
  "kairali-ayurvedic-healing-village": [
    { name: "Kochi", lat: 9.9312, lng: 76.2673, modeToNext: "road" },
    { name: "Palakkad (Kairali)", lat: 10.7867, lng: 76.6548 },
  ],

  // 3. Classical Golden Triangle
  "classical-golden-triangle": [
    { name: "Delhi", lat: 28.6139, lng: 77.209, modeToNext: "road" },
    { name: "Agra", lat: 27.1767, lng: 78.0081, modeToNext: "road" },
    { name: "Jaipur", lat: 26.9124, lng: 75.7873, modeToNext: "road" },
    { name: "Delhi", lat: 28.6139, lng: 77.209 },
  ],

  // 7. Taj & Tigers (Golden Triangle with Ranthambore)
  "taj-and-tigers": [
    { name: "Delhi", lat: 28.6139, lng: 77.209, modeToNext: "road" },
    { name: "Agra", lat: 27.1767, lng: 78.0081, modeToNext: "road" },
    { name: "Jaipur", lat: 26.9124, lng: 75.7873, modeToNext: "road" },
    { name: "Ranthambore", lat: 26.0173, lng: 76.5026, modeToNext: "road" },
    { name: "Delhi", lat: 28.6139, lng: 77.209 },
  ],

  // 12. Unveiling the Enchanting South — Tamil Nadu
  "unveiling-the-enchanting-south-tamil-nadu": [
    { name: "Chennai", lat: 13.0827, lng: 80.2707, modeToNext: "road" },
    { name: "Mahabalipuram", lat: 12.6269, lng: 80.192, modeToNext: "road" },
    { name: "Pondicherry", lat: 11.9416, lng: 79.8083, modeToNext: "road" },
    { name: "Chidambaram", lat: 11.3995, lng: 79.6914, modeToNext: "road" },
    { name: "Darasuram", lat: 10.9568, lng: 79.3587, modeToNext: "road" },
    { name: "Tanjore", lat: 10.787, lng: 79.1378, modeToNext: "road" },
    { name: "Chettinad", lat: 10.17, lng: 78.8, modeToNext: "road" },
    { name: "Madurai", lat: 9.9252, lng: 78.1198, modeToNext: "air" },
    { name: "Chennai", lat: 13.0827, lng: 80.2707 },
  ],

  // Northeast India Sojourn
  "northeast-india-sojourn": [
    { name: "Kolkata", lat: 22.5726, lng: 88.3639, modeToNext: "air" },
    { name: "Darjeeling", lat: 27.036, lng: 88.2627, modeToNext: "road" },
    { name: "Pelling", lat: 27.3167, lng: 88.2333, modeToNext: "road" },
    { name: "Gangtok", lat: 27.3389, lng: 88.6065, modeToNext: "road" },
    { name: "Kalimpong", lat: 27.068, lng: 88.471, modeToNext: "road" },
    { name: "Bagdogra", lat: 26.6812, lng: 88.3286, modeToNext: "air" },
    { name: "Kolkata", lat: 22.5726, lng: 88.3639 },
  ],

  "colourful-rajasthan": [
    { name: "Delhi",       lat: 28.6139, lng: 77.2090, modeToNext: "road" },
    { name: "Mandawa",     lat: 28.0630, lng: 75.1499, modeToNext: "road" },
    { name: "Bikaner",     lat: 28.0229, lng: 73.3119, modeToNext: "road" },
    { name: "Jaisalmer",   lat: 26.9157, lng: 70.9083, modeToNext: "road" },
    { name: "Jodhpur",     lat: 26.2389, lng: 73.0243, modeToNext: "road" },
    { name: "Ranakpur",    lat: 25.1158, lng: 73.4710, modeToNext: "road" },
    { name: "Udaipur",     lat: 24.5854, lng: 73.7125, modeToNext: "road" },
    { name: "Chittorgarh", lat: 24.8887, lng: 74.6269, modeToNext: "road" },
    { name: "Bundi",       lat: 25.4305, lng: 75.6390, modeToNext: "road" },
    { name: "Jaipur",      lat: 26.9124, lng: 75.7873, modeToNext: "road" },
    { name: "Agra",        lat: 27.1767, lng: 78.0081, modeToNext: "road" },
    { name: "Delhi",       lat: 28.6139, lng: 77.2090 },
  ],

  // Vibrant Gujrat With Central India (replaced 2026-05-26 with new doc route)
  "vibrant-gujarat-central-india": [
    { name: "Delhi",          lat: 28.6139, lng: 77.2090, modeToNext: "air" },
    { name: "Bhuj",           lat: 23.2420, lng: 69.6669, modeToNext: "road" },
    { name: "Surendra Nagar", lat: 22.7196, lng: 71.6369, modeToNext: "road" },
    { name: "Kevadia",        lat: 21.8350, lng: 73.7160, modeToNext: "road" },
    { name: "Maheshwar",      lat: 22.1761, lng: 75.5851, modeToNext: "road" },
    { name: "Mandu",          lat: 22.3603, lng: 75.4002, modeToNext: "road" },
    { name: "Ujjain",         lat: 23.1765, lng: 75.7885, modeToNext: "road" },
    { name: "Bhopal",         lat: 23.2599, lng: 77.4126, modeToNext: "air" },
    { name: "Lucknow",        lat: 26.8467, lng: 80.9462, modeToNext: "road" },
    { name: "Prayagraj",      lat: 25.4358, lng: 81.8463, modeToNext: "road" },
    { name: "Ayodhya",        lat: 26.7995, lng: 82.2032, modeToNext: "air" },
    { name: "Mumbai",         lat: 19.0760, lng: 72.8777 },
  ],

  // Gems of South India
  "gems-of-south-india": [
    { name: "Bengaluru",  lat: 12.9716, lng: 77.5946, modeToNext: "road" },
    { name: "Mysuru",     lat: 12.2958, lng: 76.6394, modeToNext: "road" },
    { name: "Hassan",     lat: 13.0033, lng: 76.0958, modeToNext: "road" },
    { name: "Chikmagalur",lat: 13.3161, lng: 75.7720, modeToNext: "road" },
    { name: "Hampi",      lat: 15.3350, lng: 76.4600, modeToNext: "road" },
    { name: "Badami",     lat: 15.9149, lng: 75.6770, modeToNext: "air" },
    { name: "Goa",        lat: 15.2993, lng: 74.1240 },
  ],

  // Safari & Heritage Trail
  "safari-and-heritage-trail": [
    { name: "Delhi",       lat: 28.6139, lng: 77.2090, modeToNext: "air" },
    { name: "Bandhavgarh", lat: 23.6975, lng: 81.0335, modeToNext: "road" },
    { name: "Kanha",       lat: 22.3344, lng: 80.6111, modeToNext: "road" },
    { name: "Pench",       lat: 21.7611, lng: 79.2417, modeToNext: "air" },
    { name: "Agra",        lat: 27.1767, lng: 78.0081 },
  ],

  // Incredible North East India
  "incredible-north-east-india": [
    { name: "Kolkata",     lat: 22.5726, lng: 88.3639, modeToNext: "air" },
    { name: "Bagdogra",    lat: 26.6812, lng: 88.3286, modeToNext: "road" },
    { name: "Darjeeling",  lat: 27.0360, lng: 88.2627, modeToNext: "road" },
    { name: "Pelling",     lat: 27.3167, lng: 88.2333, modeToNext: "road" },
    { name: "Ravangla",    lat: 27.2867, lng: 88.3712, modeToNext: "road" },
    { name: "Gangtok",     lat: 27.3389, lng: 88.6065, modeToNext: "road" },
    { name: "Kalimpong",   lat: 27.0680, lng: 88.4710, modeToNext: "air" },
    { name: "Delhi",       lat: 28.6139, lng: 77.2090 },
  ],

  // Golden Triangle with Ranthambore
  "golden-triangle-with-ranthambore": [
    { name: "Delhi",       lat: 28.6139, lng: 77.2090, modeToNext: "road" },
    { name: "Agra",        lat: 27.1767, lng: 78.0081, modeToNext: "road" },
    { name: "Jaipur",      lat: 26.9124, lng: 75.7873, modeToNext: "road" },
    { name: "Ranthambore", lat: 26.0173, lng: 76.5026, modeToNext: "road" },
    { name: "Delhi",       lat: 28.6139, lng: 77.2090 },
  ],

  // Enchanting Central India
  "enchanting-central-india": [
    { name: "Mumbai",      lat: 19.0760, lng: 72.8777, modeToNext: "air" },
    { name: "Aurangabad",  lat: 19.8762, lng: 75.3433, modeToNext: "road" },
    { name: "Burhanpur",   lat: 21.3081, lng: 76.2295, modeToNext: "road" },
    { name: "Maheshwar",   lat: 22.1761, lng: 75.5851, modeToNext: "road" },
    { name: "Ujjain",      lat: 23.1765, lng: 75.7885, modeToNext: "road" },
    { name: "Bhopal",      lat: 23.2599, lng: 77.4126, modeToNext: "air" },
    { name: "Mumbai",      lat: 19.0760, lng: 72.8777 },
  ],

  // Enchanting South India — Tamil Nadu & Kerala
  "enchanting-south-india-tamilnadu-kerala": [
    { name: "Chennai",       lat: 13.0827, lng: 80.2707, modeToNext: "road" },
    { name: "Mahabalipuram", lat: 12.6269, lng: 80.1920, modeToNext: "road" },
    { name: "Pondicherry",   lat: 11.9416, lng: 79.8083, modeToNext: "road" },
    { name: "Tanjore",       lat: 10.7870, lng: 79.1378, modeToNext: "road" },
    { name: "Chettinad",     lat: 10.0721, lng: 78.7745, modeToNext: "road" },
    { name: "Madurai",       lat: 9.9252,  lng: 78.1198, modeToNext: "road" },
    { name: "Periyar",       lat: 9.5916,  lng: 77.1606, modeToNext: "road" },
    { name: "Alleppey",      lat: 9.4981,  lng: 76.3388, modeToNext: "road" },
    { name: "Mararikulam",   lat: 9.5851,  lng: 76.3041, modeToNext: "road" },
    { name: "Kochi",         lat: 9.9312,  lng: 76.2673 },
  ],

  // India's Natural & Historical Treasures
  "indias-natural-and-historical-treasures": [
    { name: "Delhi",       lat: 28.6139, lng: 77.2090, modeToNext: "air" },
    { name: "Tadoba",      lat: 20.2569, lng: 79.3814, modeToNext: "road" },
    { name: "Pench",       lat: 21.7611, lng: 79.2417, modeToNext: "air" },
    { name: "Jaipur",      lat: 26.9124, lng: 75.7873, modeToNext: "road" },
    { name: "Ranthambore", lat: 26.0173, lng: 76.5026, modeToNext: "rail" },
    { name: "Agra",        lat: 27.1767, lng: 78.0081, modeToNext: "road" },
    { name: "Delhi",       lat: 28.6139, lng: 77.2090 },
  ],

  // Encounter With The Royal Bengal Tiger
  "encounter-with-the-royal-bengal-tiger": [
    { name: "Delhi",       lat: 28.6139, lng: 77.2090, modeToNext: "air" },
    { name: "Bandhavgarh", lat: 23.6975, lng: 81.0335, modeToNext: "road" },
    { name: "Kanha",       lat: 22.3344, lng: 80.6111, modeToNext: "road" },
    { name: "Pench",       lat: 21.7611, lng: 79.2417, modeToNext: "road" },
    { name: "Tadoba",      lat: 20.2569, lng: 79.3814, modeToNext: "air" },
    { name: "Delhi",       lat: 28.6139, lng: 77.2090 },
  ],

  // Southern Splendour
  "southern-splendour": [
    { name: "Bengaluru",   lat: 12.9716, lng: 77.5946, modeToNext: "road" },
    { name: "Mysore",      lat: 12.2958, lng: 76.6394, modeToNext: "road" },
    { name: "Kabini",      lat: 11.9651, lng: 76.3469, modeToNext: "road" },
    { name: "Coorg",       lat: 12.4244, lng: 75.7382, modeToNext: "road" },
    { name: "Hassan",      lat: 13.0033, lng: 76.0958, modeToNext: "road" },
    { name: "Chikmagalur", lat: 13.3161, lng: 75.7720, modeToNext: "road" },
    { name: "Hampi",       lat: 15.3350, lng: 76.4600, modeToNext: "road" },
    { name: "Aihole",      lat: 16.0167, lng: 75.8833, modeToNext: "road" },
    { name: "Goa",         lat: 15.2993, lng: 74.1240 },
  ],

  // On the Footsteps of Lord Buddha
  "footsteps-of-lord-buddha": [
    { name: "Delhi",       lat: 28.6139, lng: 77.2090, modeToNext: "air" },
    { name: "Lucknow",     lat: 26.8467, lng: 80.9462, modeToNext: "road" },
    { name: "Sravasti",    lat: 27.5167, lng: 82.0500, modeToNext: "road" },
    { name: "Lumbini",     lat: 27.4694, lng: 83.2747, modeToNext: "road" },
    { name: "Kushinagar",  lat: 26.7400, lng: 83.8900, modeToNext: "road" },
    { name: "Vaishali",    lat: 25.9912, lng: 85.1300, modeToNext: "road" },
    { name: "Patna",       lat: 25.5941, lng: 85.1376, modeToNext: "road" },
    { name: "Rajgir",      lat: 25.0322, lng: 85.4189, modeToNext: "road" },
    { name: "Nalanda",     lat: 25.1359, lng: 85.4438, modeToNext: "road" },
    { name: "Bodhgaya",    lat: 24.6961, lng: 84.9921, modeToNext: "road" },
    { name: "Varanasi",    lat: 25.3176, lng: 82.9739, modeToNext: "air" },
    { name: "Delhi",       lat: 28.6139, lng: 77.2090 },
  ],

};


// ─── Itineraries Data ───────────────────────────────────────────────────────

export const itineraries: Itinerary[] = [

  // ==========================================================================
  // 1. EAST INDIA & THE CITY OF JOY (formerly "Northeast India & …")
  // ==========================================================================
  {
    slug: "eastindia",
    title: "East India & The City of Joy",
    subtitle: "From colonial Kolkata to the wild grasslands of Kaziranga, the river island of Majuli, and the mist-laced hills of Meghalaya — India at its most poetic and untamed.",
    categories: ["Culture", "Nature", "Wildlife"],
    duration: "12 Nights 13 Days",
    durationDays: 13,
    startingPrice: "€1,330",
    startingPriceNote: "per person (2 people)",
    route: "Kolkata → Dibrugarh → Jorhat → Kaziranga → Shillong → Guwahati",
    bestTime: "October – March",
    overview: [
      "From the colonial elegance of Kolkata, famously known as The City of Joy, to the wild grasslands of Kaziranga, the living river island of Majuli, and the mist-laced hills of Meghalaya, this journey reveals India at its most poetic and untamed.",
      "Cruise along sacred rivers, track one-horned rhinos on safari, interact with monks on the world's largest river island, and explore villages where sustainability is a way of life. This is Northeast India—raw, soulful, and unforgettable.",
    ],
    summary: [
      "Boat ride on the Hooghly River in Kolkata, followed by a heritage walk at Dalhousie Square",
      "Scenic drive across the iconic Dhola Sadiya Bridge & Sunset cruise on the majestic Brahmaputra River",
      "Explore Dibru–Saikhowa National Park, known for its rare feral horses and riverine wilderness",
      "Cultural tour of Majuli Island with a traditional dance performance",
    ],
    summaryRight: [
      "Morning & evening jeep safaris in Kaziranga National Park, spotting one-horned rhinos, tigers, and elephants",
      "Visit Mawlynnong, celebrated as Asia's cleanest village & Darshan at the sacred Kamakhya Temple in Guwahati",
      "Discover waterfalls and limestone caves in Cherrapunjee",
      "Boat ride on the crystal-clear Umngot River in Dawki",
    ],
    days: [
      { day: 1, title: "Arrived In Kolkata", description: "Arrive in Kolkata, where colonial architecture and creative spirit coexist. You'll be met at the airport and transferred to your hotel. In the evening, enjoy an orientation tour of the city, highlighted by a serene boat ride on the Hooghly River, offering a first glimpse into Kolkata's timeless charm.", overnight: "Kolkata", meals: ["dinner"], image: "/images/itineraries/eastindia/day-1.jpg" },
      { day: 2, title: "Exploring Kolkata", description: "Today is dedicated to discovering the cultural heart of the city. Visit iconic landmarks including the Victoria Memorial, St. Paul's Cathedral, Indian Museum, and Belur Math. Later, wander through Kumartuli, a historic potters' quarter where artisans craft clay idols using age-old techniques. End the day with a visit to Nahoum's, Kolkata's legendary Jewish bakery.", overnight: "Kolkata", meals: ["breakfast", "dinner"], image: "/images/itineraries/eastindia/day-2.jpg" },
      { day: 3, title: "Kolkata → Dibrugarh", description: "Begin with a heritage walk around Dalhousie Square, exploring colonial-era sites such as the Flower Market, Writer's Building, Governor's House, and Charnock Mausoleum. After breakfast, fly to Dibrugarh, the gateway to Assam's tea country. On arrival, transfer to your hotel.", overnight: "Dibrugarh", meals: ["breakfast", "dinner"], image: "/images/itineraries/eastindia/day-3.jpg" },
      { day: 4, title: "Dibrugarh", description: "Set out on a scenic drive across the iconic Dhola–Sadiya Bridge, one of India's longest river bridges. Continue to Dibru–Saikhowa National Park, home to rare wildlife including feral horses. Later, visit a traditional tea estate to learn about Assam's world-famous tea culture.", overnight: "Dibrugarh", meals: ["breakfast", "dinner"], image: "/images/itineraries/eastindia/day-4.jpg" },
      { day: 5, title: "Dibrugarh → Jorhat", description: "Drive to Jorhat through the lush tea country of Upper Assam. En route, enjoy views of sprawling tea estates and the Brahmaputra floodplains. On arrival, check in at your hotel and enjoy the rest of the day at leisure.", overnight: "Jorhat", meals: ["breakfast", "dinner"], image: "/images/itineraries/eastindia/day-5.jpg" },
      { day: 6, title: "Majuli Island Excursion", description: "Travel to Neemati Ghat and board a ferry to Majuli, the world's largest river island. Explore its renowned Vaishnavite monasteries (Satras) and interact with resident monks. Visit local villages known for pottery-making and mask craftsmanship, followed by a cultural performance reflecting the island's spiritual traditions.", overnight: "Jorhat", meals: ["breakfast", "dinner"], image: "/images/itineraries/eastindia/day-6.jpg" },
      { day: 7, title: "Jorhat → Kaziranga National Park", description: "Drive to Kaziranga National Park, a UNESCO World Heritage Site famed for its population of one-horned rhinoceroses. In the afternoon, enjoy a river dolphin safari on the Brahmaputra, a rare and tranquil wildlife experience.", overnight: "Kaziranga National Park", meals: ["breakfast", "dinner"], image: "/images/itineraries/eastindia/day-7.jpg" },
      { day: 8, title: "Kaziranga National Park", description: "Embark on an early morning jeep safari, tracking rhinos, elephants, wild buffalo, and birdlife across Kaziranga's grasslands. After breakfast, enjoy a second safari in the afternoon, offering another chance to witness the park's extraordinary biodiversity.", overnight: "Kaziranga National Park", meals: ["breakfast", "dinner"], image: "/images/itineraries/eastindia/day-8.jpg" },
      { day: 9, title: "Kaziranga → Shillong", description: "After breakfast, drive through scenic landscapes to Shillong, the capital of Meghalaya. Check in at your hotel and enjoy the rest of the day at leisure in this hill town often called the Scotland of the East.", overnight: "Shillong", meals: ["breakfast", "dinner"], image: "/images/itineraries/eastindia/day-9.jpg" },
      { day: 10, title: "Shillong → Cherrapunjee → Shillong", description: "Travel to Cherrapunjee, one of the wettest places on Earth. En route, visit Elephant Falls and Mawdok Valley. Explore dramatic natural wonders including Nohkalikai Falls, Seven Sisters Falls, Mawsmai Cave, and Wahkaba Falls.", overnight: "Shillong", meals: ["breakfast", "dinner"], image: "/images/itineraries/eastindia/day-10.jpg" },
      { day: 11, title: "Dawki & Mawlynnong", description: "Visit Dawki for a boat ride on the crystal-clear Umngot River, with views extending into Bangladesh. Continue to Mawlynnong, celebrated as Asia's cleanest village, known for its eco-conscious lifestyle and community-driven sustainability.", overnight: "Shillong", meals: ["breakfast", "dinner"], image: "/images/itineraries/eastindia/day-11.jpg" },
      { day: 12, title: "Shillong → Guwahati", description: "Drive to Guwahati. En route, visit the sacred Kamakhya Temple, one of the most revered shrines in India. Arrive in Guwahati and check in at your hotel. Enjoy the evening at leisure or explore the local markets.", overnight: "Guwahati", meals: ["breakfast", "dinner"], image: "/images/itineraries/eastindia/day-12.jpg" },
      { day: 13, title: "Depart Guwahati", description: "Transfer to the airport for your onward journey. Optionally, visit local sites or markets if time permits before departure.", overnight: "—", meals: ["breakfast"], image: "/images/itineraries/eastindia/day-13.jpg" },
    ],
    inclusions: [
      "Twin/Double room accommodation",
      "Daily breakfast and dinner",
      "AC vehicle transfers and sightseeing",
      "English-speaking local guides",
      "Entrance fees and GST",
    ],
    exclusions: [
      "Personal expenses (laundry, heater charges)",
      "Medical expenses",
      "Items not explicitly mentioned",
    ],
    datesPrices: [
      "East India & The City of Joy",
      "Price Validity OCT 2025 – MAR 2026",
    ],
    notes: [
      "Blackout Period: Dec 23 – Jan 5 (not available)",
      "Festival Premium: Extra charges during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
    ],
    signatureExperiences: [
      { category: "Culture & History", title: "Walk around Botanical Garden", image: "/images/signature-experience/northeast-india/botanical-garden.jpg" },
      { category: "Adventure Tour",   title: "Tram Ride",                     image: "https://ik.imagekit.io/libertyindia/itineraries/north-east/tram-train.png?updatedAt=1773498540407" },
      { category: "Culture & History", title: "Visit Mother Teresa's house", image: "/images/signature-experience/northeast-india/mother-teresa-house.jpg" },
      { category: "Culture & History", title: "Cooking Workshop",            image: "/images/signature-experience/northeast-india/cooking-workshop.jpg" },
      { category: "Adventure Tour",   title: "Miniature Painting Workshop", image: "/images/signature-experience/northeast-india/miniature-painting.jpg" },
      { category: "Culture",          title: "Drink at a jazz Bar",          image: "/images/signature-experience/northeast-india/jazz-bar.jpg" },
    ],
      heroImage: "/images/itineraries/eastindia/main-bg.jpg",
      overviewImage: "/images/itineraries/eastindia/overview.jpg",
      mapImage: "https://ik.imagekit.io/libertyindia/itineraries/north-east/map.svg",
      coordinates: ITINERARY_MAP_ROUTES["eastindia"],
      // Hotel images sourced session 38 (Commons) — were wrongly reusing day-2/4/7
      // scenery SVGs. Oberoi Grand = exact property; other two = representative
      // stand-ins (see public/images/itineraries/eastindia/SOURCES.md).
      suggestedHotels: [
        { name: "The Oberoi Grand",     city: "Kolkata",   image: "/images/itineraries/eastindia/hotels/oberoi-grand.jpg" },
        { name: "Wild Mahseer",         city: "Dibrugarh", image: "/images/itineraries/eastindia/hotels/wild-mahseer.jpg" },
        { name: "Diphlu River Lodge",   city: "Kaziranga", image: "/images/itineraries/eastindia/hotels/diphlu-river-lodge.jpg" },
      ],
  },

  // ==========================================================================
  // 2. KAIRALI AYURVEDIC HEALING VILLAGE
  // ==========================================================================
  {
    slug: "kairali-ayurvedic-healing-village",
    title: "Kairali Ayurvedic Healing Village",
    subtitle: "Reconnect with ancient wellness traditions in the serene forests of Kerala. Experience authentic Ayurvedic therapies, daily yoga, and holistic healing at one of India's most celebrated retreat centres.",
    categories: ["Wellness", "Nature", "Spiritual"],
    duration: "7 Nights 8 Days",
    durationDays: 7,
    startingPrice: "€1,230",
    startingPriceNote: "per person (2 people)",
    route: "Kochi → Palakkad (Kairali Healing Village)",
    bestTime: "October – March",
    overview: [
      "Nestled among the sweet-scented Pala forests of Kerala, the Kairali Ayurvedic Healing Village offers a transformative wellness experience rooted in India's 5,000-year-old healing tradition. This is not just a retreat—it is a return to balance, guided by expert practitioners in one of the country's most respected Ayurvedic institutions.",
      "Unwind with personalised therapies, nourish your body with wholesome vegetarian cuisine, and restore your spirit through daily yoga and meditation. Whether you choose 7, 14, or 21 nights, every moment is designed to heal, rejuvenate, and reconnect you with yourself.",
    ],
    summary: [
      "Two personalised Ayurvedic therapies per person daily, including steam bath",
      "Daily morning yoga and evening meditation sessions led by experienced practitioners",
      "Consultation-based wellness programme tailored to your unique dosha profile",
      "Full board wholesome vegetarian cuisine prepared with organic ingredients",
    ],
    summaryRight: [
      "Weekly Ayurveda lectures, yoga talks, and Ayurvedic cooking demonstrations",
      "Guided organic farm visit and traditional Kerala village walk",
      "Access to swimming pool, library, gym, and all indoor and outdoor facilities",
      "Return airport transfers from Kochi included",
    ],
    days: [
      { day: 1, title: "Arrival & Consultation", description: "Arrive at Kochi Airport, where you'll be met and transferred to the Kairali Ayurvedic Healing Village in Palakkad (approx. 3 hours). Settle into your villa amidst the tranquil forest surroundings. In the evening, meet your Ayurvedic physician for an initial consultation to assess your dosha profile and design a personalised treatment plan for your stay.", overnight: "Kairali Healing Village", meals: ["dinner"], image: "https://ik.imagekit.io/libertyindia/itineraries/ayurveda-kairali/day-1.jpeg" },
      { day: 2, title: "First Full Day of Wellness", description: "Begin your morning with a group yoga session at sunrise, followed by your first Ayurvedic therapy session tailored to your consultation. Enjoy a wholesome vegetarian breakfast. In the afternoon, experience your second therapy of the day along with a rejuvenating steam bath. Conclude the evening with a guided group meditation session.", overnight: "Kairali Healing Village", meals: ["breakfast", "lunch", "dinner"], image: "https://ik.imagekit.io/libertyindia/itineraries/ayurveda-kairali/day-2.jpeg" },
      { day: 3, title: "Deepening the Healing", description: "Continue your personalised therapy programme with two Ayurvedic treatments and a steam bath. Attend your daily yoga and meditation sessions. Today features a lecture on Ayurveda, offering deeper insight into the ancient healing philosophy and how it applies to your individual wellness journey.", overnight: "Kairali Healing Village", meals: ["breakfast", "lunch", "dinner"], image: "https://ik.imagekit.io/libertyindia/itineraries/ayurveda-kairali/day-3.png" },
      { day: 4, title: "Village Walk & Cultural Immersion", description: "After your morning yoga and therapy sessions, join a guided village walk through the surrounding countryside, experiencing the rhythms of rural Kerala life. Return for your afternoon treatment and steam bath, followed by evening meditation in the peaceful forest setting.", overnight: "Kairali Healing Village", meals: ["breakfast", "lunch", "dinner"], image: "https://ik.imagekit.io/libertyindia/itineraries/ayurveda-kairali/day-4.webp" },
      { day: 5, title: "Farm Visit & Cooking Demonstration", description: "Following your morning wellness routine, explore the retreat's organic farm on a guided walk, learning about the herbs and ingredients used in Ayurvedic treatments and cuisine. Later, attend an Ayurvedic cooking demonstration and discover how traditional recipes support holistic well-being. Continue with your afternoon therapy and evening meditation.", overnight: "Kairali Healing Village", meals: ["breakfast", "lunch", "dinner"], image: "https://ik.imagekit.io/libertyindia/itineraries/ayurveda-kairali/day-5.webp" },
      { day: 6, title: "Yoga Philosophy & Restoration", description: "Today's special activity is a lecture on yoga, exploring its philosophical roots and practical benefits for long-term wellness. Continue your daily rhythm of personalised therapies, steam bath, and meditation. Spend your free time at the pool, library, or wandering through the forest paths.", overnight: "Kairali Healing Village", meals: ["breakfast", "lunch", "dinner"], image: "https://ik.imagekit.io/libertyindia/itineraries/ayurveda-kairali/day-6.webp" },
      { day: 7, title: "Final Day (7-Night Guests) / Continuation", description: "For 7-night guests, enjoy a final morning therapy session and a closing consultation with your physician, who will provide personalised lifestyle and dietary recommendations to carry forward at home. Transfer to Kochi Airport for departure. For guests continuing to 14 or 21 nights, the weekly cycle of therapies, lectures, farm visits, village walks, and cooking demonstrations repeats, deepening your healing journey with each passing week.", overnight: "Kairali Healing Village", meals: ["breakfast", "lunch", "dinner"], image: "https://ik.imagekit.io/libertyindia/itineraries/ayurveda-kairali/day-7.png" },
    ],
    inclusions: [
      "Accommodation for selected nights in your chosen villa or suite category",
      "Full board meals — breakfast, lunch, and dinner (vegetarian)",
      "Two Ayurvedic therapies per person daily with steam bath",
      "Daily morning group yoga and evening group meditation",
      "Weekly Ayurveda lecture, yoga lecture, and Ayurvedic cooking demonstration",
      "Weekly village walk and organic farm visit with guided walk",
      "Daily personal lifestyle and fitness evaluation",
      "Daily in-room mineral water (1 per person per day, max 2 per room) and unlimited herbal water",
      "Use of swimming pool, library, gym, and all indoor and outdoor facilities",
      "Return airport transfers from Kochi Airport",
    ],
    exclusions: [
      "Domestic or international airfare",
      "Monument entrance fees and guide services",
      "Personal expenses (tips, laundry, beverages, telephone calls)",
      "Expenses caused by factors beyond control (flight cancellations, roadblocks, vehicle malfunction, natural calamities)",
      "Medical or evacuation insurance",
      "Travel insurance",
      "Items not explicitly mentioned in the programme",
    ],
    datesPrices: [
      "Kairali Ayurvedic Healing Village",
      "Price Validity OCT 2025 – MAR 2026",
      "Starting from €1,230 per person (7 Nights, Deluxe Villa, Single Occupancy)",
    ],
    notes: [
      "Blackout Period: Dec 20 – Jan 10 (prices above not valid)",
      "Festival Premium: Extra charges may apply during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
      "Treatment Note: Basic Ayurveda Package included; specific/specialised treatments are not covered in the above pricing",
    ],
    signatureExperiences: [
      { category: "Wellness & Healing", title: "Personalised Ayurvedic consultation and dosha profiling" },
      { category: "Wellness & Healing", title: "Daily Ayurvedic therapies with steam bath" },
      { category: "Culture & Mindfulness", title: "Ayurvedic cooking demonstration" },
      { category: "Nature & Exploration", title: "Organic farm visit and guided herb walk" },
      { category: "Culture & Mindfulness", title: "Traditional Kerala village walk" },
      { category: "Wellness & Healing", title: "Sunrise yoga and sunset meditation" },
    ],
    heroImage: "https://ik.imagekit.io/libertyindia/itineraries/ayurveda-kairali/main-bg.png",
    overviewImage: "https://ik.imagekit.io/libertyindia/itineraries/ayurveda-kairali/overview.png",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/north-east/map.svg",
    coordinates: ITINERARY_MAP_ROUTES["kairali-ayurvedic-healing-village"],
  },

  // ==========================================================================
  // 3. CLASSICAL GOLDEN TRIANGLE
  // ==========================================================================
  {
    slug: "classical-golden-triangle",
    title: "The Classical Golden Triangle of India",
    subtitle: "Experience the iconic wonders of India's Golden Triangle. Visit the Taj Mahal at sunrise, explore Delhi's historic sites, and experience the pink city of Jaipur.",
    categories: ["Heritage", "Culture", "Architecture"],
    duration: "5 Nights 6 Days",
    durationDays: 6,
    startingPrice: "€1,013",
    startingPriceNote: "per person (2 people)",
    route: "Delhi → Agra → Jaipur → Delhi",
    bestTime: "October – March",
    overview: [
      "From the bustling lanes of Old Delhi and the grandeur of Mughal monuments to the ethereal beauty of the Taj Mahal and the vibrant royal heritage of Jaipur, the Classical Golden Triangle is India's most celebrated journey—a tapestry of history, architecture, and living culture.",
      "Ride cycle rickshaws through centuries-old bazaars, witness the Taj Mahal bathed in sunrise light, explore magnificent forts and palaces, and wander through colourful markets brimming with traditional craftsmanship. This is India at its most iconic and unforgettable.",
    ],
    summary: [
      "Cycle rickshaw ride through the narrow, winding lanes of Old Delhi and Chandni Chowk",
      "Sunrise visit to the Taj Mahal, one of the Seven Wonders of the World",
      "Explore Agra Fort and the exquisite Itmad-ud-Daula Tomb, known as the Baby Taj",
      "Drive through the abandoned Mughal city of Fatehpur Sikri en route to Jaipur",
    ],
    summaryRight: [
      "Ascend the magnificent Amber Fort and discover the mystery of Panna Meena Step Well",
      "Visit the City Palace, Jantar Mantar observatory, and the iconic Hawa Mahal in Jaipur",
      "Drive past India Gate, Rashtrapati Bhawan, and explore Humayun's Tomb and Qutub Minar in Delhi",
      "Wander through Jaipur's traditional markets filled with handicrafts, textiles, and jewellery",
    ],
    days: [
      { day: 1, title: "Arrive in Delhi", description: "Arrive at Delhi International Airport, where you'll be met by our representative and transferred to your hotel. Settle in and rest after your journey. The evening is at leisure to begin soaking in the energy of India's capital city.", overnight: "Delhi", image: "https://ik.imagekit.io/libertyindia/itineraries/classical-golden-triangle/day-1.webp" },
      { day: 2, title: "Exploring Delhi", description: "Begin with a fascinating tour of Old Delhi. Drive past the Red Fort and Jama Masjid, India's largest mosque, then enjoy a cycle rickshaw ride through the narrow, bustling lanes of Chandni Chowk. Visit the Digambar Jain Temple along the way. In the afternoon, explore New Delhi's grand landmarks. Drive past Rashtrapati Bhawan, Rajpath, and India Gate, then visit Humayun's Tomb, a masterpiece of Mughal architecture, and Qutub Minar with its ancient Iron Pillar dating to the 4th century AD.", overnight: "Delhi", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/classical-golden-triangle/day-2.png" },
      { day: 3, title: "Delhi → Agra", description: "After breakfast, depart for Agra (approx. 4 hours). On arrival, visit Agra Fort, a magnificent 16th-century fortress blending military strength with refined Mughal interiors, where Emperor Shah Jahan was famously imprisoned by his own son. Later, explore the Itmad-ud-Daula Tomb, often called the Baby Taj Mahal. This delicate marble mausoleum is the first tomb in India built entirely of marble, commissioned by Empress Nur Jahan for her father.", overnight: "Agra", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/classical-golden-triangle/day-3.png" },
      { day: 4, title: "Agra → Fatehpur Sikri → Jaipur", description: "Rise early to witness the Taj Mahal at sunrise—a sublime experience of shifting light and colour across one of the world's most celebrated monuments. After breakfast, depart for Jaipur (approx. 6 hours), stopping en route at Fatehpur Sikri, the exquisite red sandstone city built by Akbar the Great in 1569 and mysteriously abandoned shortly after. Arrive in Jaipur and enjoy the rest of the day at leisure.", overnight: "Jaipur", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/classical-golden-triangle/day-4.png" },
      { day: 5, title: "Exploring Jaipur", description: "Begin with a guided excursion to the magnificent Amber Fort, the ancient capital of the Kachawaha clan. Ascend through five defensive gates to discover ornate halls, temples, and sweeping views. Nearby, visit the intriguing Panna Meena Step Well, an eight-storey 16th-century marvel with criss-crossing staircases. In the afternoon, tour the City Palace, the Jantar Mantar stone observatory, and stop for photographs at the iconic Hawa Mahal, the Palace of Winds. End the day wandering through Jaipur's colourful traditional markets.", overnight: "Jaipur", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/classical-golden-triangle/day-5.png" },
      { day: 6, title: "Depart Jaipur → Delhi", description: "After a leisurely morning, transfer from Jaipur to Delhi International Airport (approx. 5 hours) to connect with your onward flight. End of tour.", overnight: "—", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/classical-golden-triangle/day-6.png" },
    ],
    inclusions: [
      "Accommodation in single/twin rooms at selected hotel category or similar",
      "Daily breakfast",
      "AC vehicle transfers and sightseeing (Toyota Crysta for 2–3 people / Tempo Traveller for 4–6 people)",
      "Cycle rickshaw ride in Old Delhi",
      "GST (Goods & Services Tax) as applicable",
    ],
    exclusions: [
      "Domestic or international airfare",
      "Monument entrance fees and guide services",
      "Personal expenses (tips, laundry, beverages, spa, telephone calls)",
      "Expenses caused by factors beyond control (flight cancellations, roadblocks, vehicle malfunction, natural calamities)",
      "Medical or evacuation insurance",
      "Travel insurance",
      "Items not explicitly mentioned in the programme",
    ],
    datesPrices: [
      "Classical Golden Triangle",
      "Price Validity OCT 2025 – MAR 2026",
      "Starting from €390 per person (Standard Hotels, 4–6 people, Twin Sharing)",
    ],
    notes: [
      "Blackout Period: Dec 20 – Jan 10 (prices above not valid)",
      "Festival Premium: Extra charges may apply during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
      "Red Fort is closed on Mondays; Taj Mahal is closed on Fridays",
    ],
    signatureExperiences: [
      { category: "Culture & History", title: "Cycle rickshaw ride through Old Delhi's Chandni Chowk" },
      { category: "Culture & History", title: "Sunrise visit to the Taj Mahal" },
      { category: "Culture & History", title: "Explore the abandoned city of Fatehpur Sikri" },
      { category: "Adventure Tour", title: "Ascend Amber Fort and discover Panna Meena Step Well" },
      { category: "Culture & History", title: "Wander through Jaipur's vibrant traditional markets" },
      { category: "Culture & History", title: "Visit Humayun's Tomb and the ancient Qutub Minar complex" },
    ],
    heroImage: "https://ik.imagekit.io/libertyindia/itineraries/classical-golden-triangle/main-bg.png",
    overviewImage: "https://ik.imagekit.io/libertyindia/itineraries/classical-golden-triangle/overview.png",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/north-east/map.svg",
    coordinates: ITINERARY_MAP_ROUTES["classical-golden-triangle"],
    // Hotels per the client's Golden Triangle docx city table (Deluxe column);
    // images shared with golden-triangle-with-ranthambore (same properties).
    suggestedHotels: [
      { name: "The Claridges", city: "Delhi", image: "/images/itineraries/classical-golden-triangle/hotels/claridges-delhi.jpg" },
      { name: "ITC Mughal", city: "Agra", image: "/images/itineraries/classical-golden-triangle/hotels/itc-mughal-agra.jpg" },
      { name: "Samode Haveli", city: "Jaipur", image: "/images/itineraries/classical-golden-triangle/hotels/samode-haveli.jpg" },
    ],
  },

  // ==========================================================================
  // 4. COLOURFUL RAJASTHAN
  // ==========================================================================
  

  // ==========================================================================
  // 7. TAJ & TIGERS (Golden Triangle with Ranthambore)
  // ==========================================================================
  {
    slug: "taj-and-tigers",
    title: "Taj & Tigers",
    subtitle: "Experience the iconic wonders of India's Golden Triangle combined with thrilling wildlife safaris. Visit the Taj Mahal at sunrise, explore Delhi's historic sites, discover the pink city of Jaipur, and track tigers in Ranthambore National Park.",
    categories: ["Heritage", "Culture", "Wildlife", "Adventure"],
    duration: "7 Nights 8 Days",
    durationDays: 8,
    startingPrice: "€1,406",
    startingPriceNote: "per person (2 people)",
    route: "Delhi → Agra → Jaipur → Ranthambore → Delhi",
    bestTime: "October – March",
    overview: [
      "From the bustling lanes of Old Delhi and the grandeur of Mughal monuments to the ethereal beauty of the Taj Mahal, the vibrant royal heritage of Jaipur, and the wild landscapes of Ranthambore, this journey combines India's most celebrated cultural circuit with one of its finest wildlife experiences.",
      "Ride cycle rickshaws through centuries-old bazaars, witness the Taj Mahal bathed in sunrise light, explore magnificent forts and palaces, wander through colourful markets, and embark on jeep safaris in search of the elusive Bengal tiger. This is India's Golden Triangle—elevated with a touch of the wild.",
    ],
    summary: [
      "Cycle rickshaw ride through the narrow, winding lanes of Old Delhi and Chandni Chowk",
      "Sunrise visit to the Taj Mahal, one of the Seven Wonders of the World",
      "Explore Agra Fort and the exquisite Itmad-ud-Daula Tomb, known as the Baby Taj",
      "Drive through the abandoned Mughal city of Fatehpur Sikri en route to Jaipur",
    ],
    summaryRight: [
      "Ascend the magnificent Amber Fort and discover the mystery of Panna Meena Step Well",
      "Visit the City Palace, Jantar Mantar observatory, and the iconic Hawa Mahal in Jaipur",
      "Explore Humayun's Tomb and the ancient Qutub Minar complex in Delhi",
      "Morning and afternoon private jeep safaris in Ranthambore National Park, tracking Bengal tigers",
    ],
    days: [
      { day: 1, title: "Arrive in Delhi", description: "Arrive at Delhi International Airport, where you'll be met by our representative and transferred to your hotel. Settle in and enjoy the rest of the day at leisure, taking in the energy of India's capital city.", overnight: "Delhi", image: "https://ik.imagekit.io/libertyindia/itineraries/taj-and-tigers/day-01.webp" },
      { day: 2, title: "Exploring Delhi", description: "Begin with a tour of Old Delhi. Drive past the Red Fort and Jama Masjid, then enjoy a cycle rickshaw ride through the narrow, bustling lanes of Chandni Chowk. Visit the Digambar Jain Temple along the way. In the afternoon, explore New Delhi's grand landmarks. Drive past Rashtrapati Bhawan, Rajpath, and India Gate, then visit Humayun's Tomb, a masterpiece of Mughal architecture, and Qutub Minar with its ancient Iron Pillar dating to the 4th century AD.", overnight: "Delhi", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/taj-and-tigers/day-02.png" },
      { day: 3, title: "Delhi → Agra", description: "After breakfast, depart for Agra (approx. 4 hours). On arrival, visit Agra Fort, a magnificent 16th-century fortress blending military strength with refined Mughal interiors, where Emperor Shah Jahan was famously imprisoned by his own son. Later, explore the Itmad-ud-Daula Tomb, often called the Baby Taj Mahal. This delicate marble mausoleum is the first tomb in India built entirely of marble, commissioned by Empress Nur Jahan for her father.", overnight: "Agra", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/taj-and-tigers/day-03.png" },
      { day: 4, title: "Agra → Fatehpur Sikri → Jaipur", description: "Rise early to witness the Taj Mahal at sunrise—a sublime experience of shifting light and colour across one of the world's most celebrated monuments. After breakfast, depart for Jaipur (approx. 6 hours), stopping en route at Fatehpur Sikri, the exquisite red sandstone city built by Akbar the Great in 1569 and mysteriously abandoned shortly after. Arrive in Jaipur and enjoy the rest of the day at leisure.", overnight: "Jaipur", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/taj-and-tigers/day-04.png" },
      { day: 5, title: "Exploring Jaipur", description: "Begin with a guided excursion to the magnificent Amber Fort, the ancient capital of the Kachawaha clan. Ascend through five defensive gates to discover ornate halls, temples, and sweeping views. Nearby, visit the intriguing Panna Meena Step Well, an eight-storey 16th-century marvel with criss-crossing staircases. In the afternoon, tour the City Palace, the Jantar Mantar stone observatory, and stop for photographs at the iconic Hawa Mahal, the Palace of Winds. End the day wandering through Jaipur's colourful traditional markets.", overnight: "Jaipur", meals: ["breakfast"], image: "/images/itineraries/taj-and-tigers/day-5.jpg" },
      { day: 6, title: "Jaipur → Ranthambore", description: "After breakfast, depart for Ranthambore National Park (approx. 3.5 hours), one of the biggest and most renowned national parks in Northern India, and a former hunting ground of the Maharajas of Jaipur. Check in at your hotel and enjoy the rest of the day at leisure, preparing for the next day's wildlife adventures.", overnight: "Ranthambore", meals: ["breakfast", "lunch", "dinner"], image: "https://ik.imagekit.io/libertyindia/itineraries/taj-and-tigers/day-06.png" },
      { day: 7, title: "Ranthambore Safari", description: "Embark on an early morning jeep safari with an English-speaking naturalist, tracking Bengal tigers, leopards, sloth bears, and diverse birdlife through the park's dramatic landscape of dry deciduous forests and ancient ruins. In the afternoon, set out on a second safari, offering another chance to encounter Ranthambore's extraordinary wildlife in the golden light of the late day.", overnight: "Ranthambore", meals: ["breakfast", "lunch", "dinner"], image: "https://ik.imagekit.io/libertyindia/itineraries/taj-and-tigers/day-07.png" },
      { day: 8, title: "Ranthambore → Delhi", description: "After breakfast, depart for Delhi (approx. 6 hours). On arrival, transfer to Delhi International Airport for your onward flight. End of tour.", overnight: "—", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/taj-and-tigers/day-08.png" },
    ],
    inclusions: [
      "Accommodation in single/twin rooms at selected hotel category or similar",
      "Daily breakfast; full board at Ranthambore",
      "AC vehicle transfers and sightseeing (Toyota Crysta for 2–3 people / Tempo Traveller for 4–6 people)",
      "Cycle rickshaw ride in Old Delhi",
      "Two shared jeep safaris in Ranthambore National Park",
      "GST (Goods & Services Tax) as applicable",
    ],
    exclusions: [
      "Domestic or international airfare",
      "Monument entrance fees and guide services",
      "Personal expenses (tips, laundry, beverages, spa, telephone calls)",
      "Expenses caused by factors beyond control (flight cancellations, roadblocks, vehicle malfunction, natural calamities)",
      "Travel insurance",
      "Items not explicitly mentioned in the programme",
    ],
    datesPrices: [
      "Golden Triangle with Ranthambore",
      "Price Validity OCT 2025 – MAR 2026",
      "Starting from €690 per person (Standard Hotels, 4–6 people, Twin Sharing)",
    ],
    notes: [
      "Blackout Period: Dec 20 – Jan 10 (prices above not valid)",
      "Festival Premium: Extra charges may apply during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
      "Red Fort (Delhi) is closed on Mondays; Taj Mahal (Agra) is closed on Fridays",
      "Ranthambore National Park is closed during monsoon season (July–September); safari zones are allocated by the park authority",
    ],
    signatureExperiences: [
      { category: "Culture & History", title: "Cycle rickshaw ride through Old Delhi's Chandni Chowk" },
      { category: "Culture & History", title: "Sunrise visit to the Taj Mahal" },
      { category: "Culture & History", title: "Explore the abandoned city of Fatehpur Sikri" },
      { category: "Adventure Tour", title: "Ascend Amber Fort and discover Panna Meena Step Well" },
      { category: "Culture & History", title: "Wander through Jaipur's vibrant traditional markets" },
      { category: "Adventure Tour", title: "Jeep safaris tracking Bengal tigers in Ranthambore" },
    ],
    heroImage: "https://ik.imagekit.io/libertyindia/itineraries/taj-and-tigers/main-bg.webp",
    overviewImage: "https://ik.imagekit.io/libertyindia/itineraries/taj-and-tigers/overview.png",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/north-east/map.svg",
    coordinates: ITINERARY_MAP_ROUTES["taj-and-tigers"],
    // Same route as Golden Triangle with Ranthambore — the client docx city
    // table applies; images shared with that itinerary (same properties).
    suggestedHotels: [
      { name: "The Claridges", city: "Delhi", image: "/images/itineraries/taj-and-tigers/hotels/claridges-delhi.jpg" },
      { name: "ITC Mughal", city: "Agra", image: "/images/itineraries/taj-and-tigers/hotels/itc-mughal-agra.jpg" },
      { name: "Samode Haveli", city: "Jaipur", image: "/images/itineraries/taj-and-tigers/hotels/samode-haveli.jpg" },
      { name: "TUTC Sawai Shivir", city: "Ranthambore", image: "/images/itineraries/taj-and-tigers/hotels/tutc-sawai-shivir.jpg" },
    ],
  },

  // ==========================================================================
  // 8. HIGHLIGHTS OF KERALA
  // ==========================================================================
  
  // ==========================================================================
  // 12. UNVEILING THE ENCHANTING SOUTH — TAMIL NADU
  // ==========================================================================
  {
    slug: "unveiling-the-enchanting-south-tamil-nadu",
    title: "Unveiling the Enchanting South — Tamil Nadu",
    subtitle: "Discover the magnificent temple architecture, French colonial heritage, and living craft traditions of Tamil Nadu. From ancient rock-cut monuments to towering gopurams and forgotten merchant palaces.",
    categories: ["Heritage", "Culture", "Architecture"],
    duration: "9 Nights 10 Days",
    durationDays: 10,
    startingPrice: "€880",
    startingPriceNote: "per person (2 people)",
    route: "Chennai → Mahabalipuram → Pondicherry → Tanjore → Chettinad → Madurai → Chennai",
    bestTime: "October – March",
    overview: [
      "From the rock-cut temples of Mahabalipuram and the tree-lined French boulevards of Pondicherry to the magnificent Chola temples of Tanjore, the extraordinary merchant mansions of Chettinad, and the towering gopurams of Madurai, this journey reveals the architectural grandeur and living traditions of Tamil Nadu—India's most temple-rich state.",
      "Explore UNESCO World Heritage monuments carved from solid granite, walk through colonial-era quarters, discover villages where centuries-old crafts are still practised daily, and attend ancient evening ceremonies at one of India's most spectacular temples. This is Tamil Nadu—monumental, deeply cultural, and endlessly rewarding.",
    ],
    summary: [
      "Explore the UNESCO World Heritage rock-cut monuments of Mahabalipuram—the Five Rathas and Shore Temple",
      "Walk through the French Quarter of Pondicherry and visit the experimental township of Auroville",
      "Visit the sacred Nataraja Temple at Chidambaram, where Shiva is worshipped as the cosmic dancer",
      "Discover the magnificent Brihadeeshwara Temple in Tanjore, a UNESCO World Heritage Chola masterpiece",
    ],
    summaryRight: [
      "Explore the extraordinary merchant mansions and artisan villages of Chettinad",
      "Visit the Thirumala Nayak Palace and its remarkable unsupported dome in Madurai",
      "Attend the evening ceremony at the Meenakshi Temple, a masterpiece of Dravidian architecture",
    ],
    days: [
      { day: 1, title: "Arrive Chennai → Mahabalipuram", description: "Arrive at Chennai Airport, where you'll be met by our representative and transferred to Mahabalipuram (approx. 1 hour), an ancient Pallava seaport set along the Bay of Bengal. Check in at your hotel and enjoy the rest of the day at leisure.", overnight: "Mahabalipuram", image: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/day-1.avif" },
      { day: 2, title: "Exploring Mahabalipuram", description: "Explore this UNESCO World Heritage town and its remarkable rock-cut monuments. Visit the great bas-relief of Arjuna's Penance, depicting the mythical descent of the Ganges with gods, animals, and fables carved into a massive granite face. Continue to the Five Rathas, five monolithic temples carved from a single rock formation. End at the Shore Temple, one of the oldest in South India, standing at the water's edge.", overnight: "Mahabalipuram", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/day-2.png" },
      { day: 3, title: "Mahabalipuram → Pondicherry", description: "After breakfast, drive to Pondicherry (approx. 2 hours), a former French colonial settlement that retains its European character in its tree-lined boulevards, pastel-coloured villas, and seaside promenade. Take a walk through the French Quarter and White Town, passing colonial-era buildings, the Alliance Française, and the Cluny Embroidery Centre.", overnight: "Pondicherry", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/day-3.jpg" },
      { day: 4, title: "Exploring Pondicherry", description: "After breakfast, visit Auroville, the experimental international township founded in 1968 where people of all nationalities live in progressive harmony. Explore the complex and learn about its unique philosophy and way of life. Later, stroll through the local markets and along the beachside promenade.", overnight: "Pondicherry", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/day-4.png" },
      { day: 5, title: "Pondicherry → Chidambaram → Darasuram → Tanjore", description: "Depart for Tanjore (approx. 5 hours), stopping en route at Chidambaram to visit the sacred Nataraja Temple, where Shiva is worshipped as the cosmic dancer. Continue to Darasuram, whose temple is a superb example of Chola architecture. Arrive in Tanjore and visit the magnificent Brihadeeshwara Temple, a UNESCO World Heritage masterpiece, and the Palace with its gallery of ancient bronzes.", overnight: "Tanjore", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/day-5.png" },
      { day: 6, title: "Tanjore → Chettinad", description: "After breakfast, drive to Chettinad (approx. 4 hours), a region of 74 villages once home to the fabulously wealthy Chettiar merchants who built extraordinary mansions in their own distinctive style. In the evening, explore the charming village of Karaikudi. Visit workshops for traditional woodwork, silversmithing, and textile weaving.", overnight: "Chettinad", meals: ["breakfast"], image: "/images/itineraries/unveiling-the-enchanting-south-tamil-nadu/day-6.jpg" },
      { day: 7, title: "Exploring Chettinad", description: "Spend the day exploring the local villages and meeting artisans who keep centuries-old craft traditions alive—from intricate wood carving and handloom weaving to the production of earthenware tiles renowned throughout India. Wander through forgotten hamlets, romantic palaces, and sacred groves with paths lined with wonderful terracotta horses.", overnight: "Chettinad", meals: ["breakfast"], image: "/images/itineraries/unveiling-the-enchanting-south-tamil-nadu/day-7.jpg" },
      { day: 8, title: "Chettinad → Madurai", description: "After a leisurely breakfast, drive to Madurai (approx. 3 hours), the ancient capital of the Pandyan Kings, set on the banks of the River Vaigai. In its heyday, Madurai traded with Greece and Rome and was a centre of Tamil poetry and literature. Check in at your hotel and spend the rest of the day exploring this vibrant temple city at your own pace.", overnight: "Madurai", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/day-8.jpg" },
      { day: 9, title: "Exploring Madurai", description: "Visit the Thirumala Nayak Palace, built in 1639 in a blend of Dravidian and Islamic styles, with its remarkable unsupported curved dome. Continue to the Meenakshi Temple, a masterpiece of Dravidian architecture with immense gopurams adorned with thousands of colourful stucco figures. In the evening, attend the nightly ceremony where the temple bronze of Lord Shiva is carried in procession to the boudoir of his consort Parvati, accompanied by devotional music.", overnight: "Madurai", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/day-9.png" },
      { day: 10, title: "Depart Madurai → Chennai", description: "Transfer to Madurai Airport for your flight to Chennai. On arrival, connect with your onward international flight. End of tour.", overnight: "—", meals: ["breakfast"], image: "/images/itineraries/unveiling-the-enchanting-south-tamil-nadu/day-10.jpg" },
    ],
    inclusions: [
      "Accommodation in single/twin rooms at selected hotel category or similar",
      "Daily breakfast",
      "AC vehicle transfers and sightseeing (Toyota Crysta for 2–3 people / Tempo Traveller for 4–6 people)",
      "GST (Goods & Services Tax) as applicable",
    ],
    exclusions: [
      "Domestic or international airfare (Madurai–Chennai flight to be advised separately)",
      "Monument entrance fees and guide services",
      "Personal expenses (tips, laundry, beverages, spa, telephone calls)",
      "Expenses caused by factors beyond control (flight cancellations, roadblocks, vehicle malfunction, natural calamities)",
      "Medical or evacuation insurance",
      "Travel insurance",
      "Items not explicitly mentioned in the programme",
    ],
    datesPrices: [
      "Unveiling the Enchanting South — Tamil Nadu",
      "Price Validity OCT 2025 – MAR 2026",
      "Starting from €880 per person (Standard Hotels, 4–6 people, Twin Sharing)",
    ],
    notes: [
      "Blackout Period: Dec 20 – Jan 10 (prices above not valid)",
      "Festival Premium: Extra charges may apply during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
      "Domestic airfare (Madurai–Chennai) to be advised separately",
    ],
    signatureExperiences: [
      { category: "Culture & History", title: "Explore the UNESCO World Heritage rock-cut monuments of Mahabalipuram" },
      { category: "Culture & History", title: "Walk through the French Quarter of Pondicherry" },
      { category: "Culture & History", title: "Visit the Nataraja Temple at Chidambaram and Brihadeeshwara Temple at Tanjore" },
      { category: "Culture & History", title: "Discover the merchant mansions and artisan villages of Chettinad" },
      { category: "Culture & History", title: "Attend the evening ceremony at the Meenakshi Temple in Madurai" },
    ],
    heroImage: "/images/itineraries/unveiling-the-enchanting-south-tamil-nadu/main-bg.jpg",
    overviewImage: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/overview.png",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/north-east/map.svg",
    coordinates: ITINERARY_MAP_ROUTES["unveiling-the-enchanting-south-tamil-nadu"],
    // Cities shared with Enchanting Tamil Nadu & Kerala — hotels per that
    // docx city table (Deluxe column).
    suggestedHotels: [
      { name: "Radisson Temple Bay", city: "Mahabalipuram", image: "/images/itineraries/unveiling-the-enchanting-south-tamil-nadu/hotels/radisson-temple-bay.jpg" },
      { name: "Villa Shanti", city: "Pondicherry", image: "/images/itineraries/unveiling-the-enchanting-south-tamil-nadu/hotels/villa-shanti-pondicherry.jpg" },
      { name: "Chidambara Vilas", city: "Chettinad", image: "/images/itineraries/unveiling-the-enchanting-south-tamil-nadu/hotels/chidambara-vilas.jpg" },
      { name: "Heritage Madurai", city: "Madurai", image: "/images/itineraries/unveiling-the-enchanting-south-tamil-nadu/hotels/heritage-madurai.jpg" },
    ],
  },

  // ==========================================================================
  // 13. GEMS OF SOUTH INDIA — 18 Days (NEW)
  // ==========================================================================
 

  // ==========================================================================
  // 14. NORTHEAST INDIA SOJOURN — 10 Days (NEW)
  // ==========================================================================
  // Replaced 2026-05-26 from itineraries/Colorful Rajasthan.docx — new doc has
  // 14 days (was 16), routes through Ranakpur, Chittorgarh, and Bundi (was via
  // Deogarh). Slug preserved (URL-stable, British spelling kept). Existing
  // image URLs preserved as placeholders for the new days too.
  {
    slug: "colourful-rajasthan",
    title: "Colourful Rajasthan",
    subtitle: "Experience the land of Kings, its majestic forts and opulent palaces as this immersive journey takes you through a bygone era of royal grandeur and architectural brilliance.",
    categories: ["Heritage", "Culture", "Architecture"],
    duration: "13 Nights 14 Days",
    durationDays: 14,
    startingPrice: "Price on request",
    startingPriceNote: "Contact for quote",
    route: "Delhi → Mandawa → Bikaner → Jaisalmer → Jodhpur → Ranakpur → Udaipur → Chittorgarh → Bundi → Jaipur → Agra → Delhi",
    bestTime: "October – April",
    overview: [
      "The tour starts and ends in Delhi. The first stop in Mandawa is famous for its beautiful havelis, followed by Bikaner and Jaisalmer — known for their deserted lands, camel and cattle farms, and golden sandstone buildings. Jodhpur, the Blue City, welcomes you with the grand Mehrangarh Fort.",
      "See the peaceful Jain temples at Ranakpur on the way to Udaipur, the City of Lakes. Continue through Chittorgarh's historic stories of bravery and Bundi's princely charm. The last part of the tour takes you through Jaipur, the Pink City, followed by a visit to the iconic Taj Mahal in Agra.",
    ],
    summary: [
      "Cycle Rickshaw ride in the narrow-crowded lanes of Old Delhi",
      "Painted havelis and frescoed mansions of Mandawa in the Shekhawati region",
      "Junagadh Fort in Bikaner and the golden Jaisalmer Fort — the world's largest living fort",
      "Camel Desert Safari followed by dinner in the dunes, Jaisalmer",
    ],
    summaryRight: [
      "500-year-old Ranakpur Jain Temples with their 1,444 uniquely carved pillars",
      "Private boat ride on Lake Pichola, Udaipur",
      "Chittorgarh Fort and the princely town of Bundi",
      "Jeep ride to Amber Fort, Jaipur and sunrise photoshoot at the Taj Mahal",
    ],
    days: [
      { day: 1,  title: "Arrive in Delhi",                 description: "Meet our representative on arrival at Delhi International Airport and transfer to your hotel.", overnight: "Delhi", image: "https://ik.imagekit.io/libertyindia/itineraries/colorful-rajasthan/day-1.png?updatedAt=1773538850824" },
      { day: 2,  title: "Delhi",                           description: "Old Delhi tour: Red Fort (drive-past), Jama Masjid, cycle rickshaw ride through Chandni Chowk, and Digambar Jain Temple. Afternoon New Delhi: Rashtrapati Bhawan, Rajpath, India Gate, Humayun's Tomb, and Qutub Minar with the 4th-century Iron Pillar.", overnight: "Delhi", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/colorful-rajasthan/day-2.png?updatedAt=1773539739934" },
      { day: 3,  title: "Delhi → Mandawa",                 description: "Drive to Mandawa in the Shekhawati region — Rajasthan's open-air art gallery. Check in at your heritage hotel adorned with frescoes.", overnight: "Mandawa", meals: ["breakfast"], image: "/images/itineraries/colourful-rajasthan/day-3.jpg" },
      { day: 4,  title: "Mandawa → Bikaner",               description: "Drive to Bikaner. Afternoon visit to Junagadh Fort — a 1593 complex of palaces, temples, and ornate galleries with the Karan, Anup, Chandra, and Phool Mahals.", overnight: "Bikaner", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/colorful-rajasthan/day-4.png?updatedAt=1773539161291" },
      { day: 5,  title: "Bikaner → Jaisalmer",             description: "Drive across the Thar Desert to Jaisalmer, the Golden City. Rest of the day at leisure.", overnight: "Jaisalmer", meals: ["breakfast"], image: "/images/itineraries/colourful-rajasthan/day-5.jpg" },
      { day: 6,  title: "Jaisalmer",                       description: "Visit Patwon Ji ki Haveli and Nathmal Ji ki Haveli — exquisite carved sandstone mansions — and Jaisalmer Fort, said to be the world's largest living fort. Evening camel safari followed by dinner in the dunes.", overnight: "Jaisalmer", meals: ["breakfast", "dinner"], image: "https://ik.imagekit.io/libertyindia/itineraries/colorful-rajasthan/day-6.png?updatedAt=1773539216072" },
      { day: 7,  title: "Jaisalmer → Jodhpur",             description: "Drive to Jodhpur, the Blue City. Visit Mehrangarh Fort, Jaswant Thada (white marble cenotaph of Maharaja Jaswant Singh II), and the bustling Clock Tower market.", overnight: "Jodhpur", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/colorful-rajasthan/day-7.png?updatedAt=1773539284444" },
      { day: 8,  title: "Jodhpur → Ranakpur → Udaipur",    description: "Drive to Udaipur via the 500-year-old Ranakpur Jain Temples — the central Chaumukha Temple has 29 halls and 1,444 uniquely carved pillars, no two alike.", overnight: "Udaipur", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/colorful-rajasthan/day-9.png?updatedAt=1773539337661" },
      { day: 9,  title: "Udaipur",                         description: "Morning visit to the City Palace, Crystal Gallery, Jagdish Temple, and Saheliyon-ki-Bari. Late afternoon private boat ride on Lake Pichola with views of the Lake Palace and the ghats.", overnight: "Udaipur", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/colorful-rajasthan/day-10.png?updatedAt=1773539469997" },
      { day: 10, title: "Udaipur → Chittorgarh → Bundi",   description: "Drive to Bundi via Chittorgarh Fort — the Rajput bastion attacked thrice in its history (1303 by Ala-ud-din Khilji, 1533 by Bahadur Shah, 1568 by Akbar) and finally returned to the Rajputs under Jahangir in 1616.", overnight: "Bundi", meals: ["breakfast"], image: "/images/itineraries/colourful-rajasthan/day-10.jpg" },
      { day: 11, title: "Bundi → Jaipur",                  description: "Visit the 12th-century Menal temples and the Shiva temples at Bijolia. Explore Bundi's Taragarh Fort (14th c.) and the Rajput Chattar Mahal palace with its 18th-century paintings. Drive to Jaipur.", overnight: "Jaipur", meals: ["breakfast"], image: "/images/itineraries/colourful-rajasthan/day-11.jpg" },
      { day: 12, title: "Jaipur",                          description: "Guided excursion to Amber Fort and Panna Meena Step Well, then City Palace, Jantar Mantar, and a photo stop at Hawa Mahal.", overnight: "Jaipur", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/colorful-rajasthan/day-13.png?updatedAt=1773539532705" },
      { day: 13, title: "Jaipur → Fatehpur Sikri → Agra",  description: "Drive to Agra via Fatehpur Sikri, Akbar's red sandstone capital (1569). On arrival visit Agra Fort, where Shah Jahan was imprisoned by his son.", overnight: "Agra", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/colorful-rajasthan/day-14.png?updatedAt=1773539550428" },
      { day: 14, title: "Agra → Delhi / Depart",           description: "Sunrise visit to the Taj Mahal. After breakfast, drive back to Delhi and transfer to international airport for outbound flight. End of tour.", overnight: "—", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/colorful-rajasthan/day-15.png?updatedAt=1773539560731" },
    ],
    inclusions: [
      "Accommodation in 01 Double Room or similar",
      "Meals as mentioned",
      "All transfers and sightseeing by AC Toyota Crysta",
      "Prevailing monument entrance fees",
      "Local English / French speaking guides on sightseeing tours (different guides per city)",
      "Cycle Rickshaw ride in Old Delhi",
      "Private boat ride on Lake Pichola in Udaipur",
      "Jeep ride at Amber Fort in Jaipur",
      "Wi-fi access in the vehicle and unlimited bottled water during travel",
      "GST as applicable",
    ],
    exclusions: [
      "Any domestic / international airfare",
      "Personal expenses (tips, laundry, beverages, telephone calls)",
      "Expenses caused by factors beyond control (flight cancellation, roadblocks, vehicle malfunction)",
      "Medical or evacuation insurance",
      "Travel insurance",
    ],
    datesPrices: [
      "Colourful Rajasthan",
      "Price Validity OCT 2026 – MAR 2027",
      "Price on request — contact our travel desk for a tailored quote",
    ],
    notes: [
      "Blackout Period: Dec 20 – Jan 10 (prices above not valid)",
      "Festival Premium: Extra charges may apply during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
      "Red Fort (Delhi) is closed on Mondays; Taj Mahal (Agra) is closed on Fridays",
    ],
    signatureExperiences: [
      { category: "Culture & History", title: "Cycle rickshaw ride through Old Delhi's Chandni Chowk" },
      { category: "Culture & History", title: "Explore the painted havelis of Mandawa and Jaisalmer" },
      { category: "Culture & History", title: "Discover the 1,444-pillar Ranakpur Jain Temples" },
      { category: "Adventure Tour", title: "Shared boat ride on Lake Pichola at sunset" },
      { category: "Culture & History", title: "Ascend Amber Fort and explore Panna Meena Step Well" },
      { category: "Culture & History", title: "Sunrise visit to the Taj Mahal" },
    ],
    heroImage: "https://ik.imagekit.io/libertyindia/itineraries/colorful-rajasthan/main-bg.png?updatedAt=1780099200000",
    overviewImage: "https://ik.imagekit.io/libertyindia/itineraries/colorful-rajasthan/overview.png",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/colorful-rajasthan/map.png",
    coordinates: ITINERARY_MAP_ROUTES["colourful-rajasthan"],
    // From the Colorful Rajasthan docx city table (Deluxe column), spread
    // across the route's signature stays.
    suggestedHotels: [
      { name: "Narendra Bhawan", city: "Bikaner", image: "/images/itineraries/colourful-rajasthan/hotels/narendra-bhawan.jpg" },
      { name: "Fort Rajwada", city: "Jaisalmer", image: "/images/itineraries/colourful-rajasthan/hotels/fort-rajwada.jpg" },
      { name: "Fateh Prakash Palace", city: "Udaipur", image: "/images/itineraries/colourful-rajasthan/hotels/fateh-prakash-palace.jpg" },
      { name: "Samode Haveli", city: "Jaipur", image: "/images/itineraries/colourful-rajasthan/hotels/samode-haveli.jpg" },
    ],
  },
  {
    slug: "northeast-india-sojourn",
    title: "Northeast India Sojourn",
    subtitle: "A compact 10-day voyage from Kolkata through Darjeeling's tea gardens, Sikkim's sacred monasteries, and Kalimpong's orchid-filled hills.",
    categories: ["Nature", "Culture", "Spiritual", "Adventure"] as ItineraryCategory[],
    duration: "9 Nights 10 Days",
    durationDays: 10,
    startingPrice: "€1,310",
    startingPriceNote: "per person (30 people)",
    route: "Kolkata → Darjeeling → Pelling → Gangtok → Kalimpong → Kolkata",
    bestTime: "October – March",
    overview: [
      "From Kolkata to Darjeeling's tea estates, the ancient monasteries of Pelling and Gangtok, and Kalimpong's flower nurseries, this 10-day journey offers an intimate encounter with the Himalayan heart of Northeast India.",
      "Cruise the Hooghly, ride the toy train, explore monasteries, visit the Chenrezig Statue, and enjoy high tea with Silk Route stories. Compact, deeply rewarding, and unforgettable.",
    ],
    summary: [
      "Hooghly River cruise and Dakshineswar Kali Temple in Kolkata",
      "Victoria Memorial, Indian Museum, Kumartuli, and Nahoum's Bakery",
      "Heritage Darjeeling toy train and Ghoom Monastery",
      "Japanese Temple and Peace Pagoda in Darjeeling",
    ],
    summaryRight: [
      "Pemayangtse and Sangachoeling monasteries in Pelling",
      "135-foot Chenrezig Statue and sacred Khecheopalri Lake",
      "Rumtek Monastery en route to Kalimpong",
      "High tea with Lee and tales of the ancient Silk Route",
    ],
    days: [
      { day: 1, title: "Arrive in Kolkata", description: "Arrive in Kolkata. Evening visit to Dakshineswar Kali Temple and Hooghly River cruise.", overnight: "Kolkata", image: "https://ik.imagekit.io/libertyindia/itineraries/northeast-india-sojourn/day-1.png" },
      { day: 2, title: "Exploring Kolkata", description: "Visit Victoria Memorial, St. Paul's Cathedral, Indian Museum, Belur Math, Kumartuli, and Nahoum's bakery.", overnight: "Kolkata", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/northeast-india-sojourn/day-2.png" },
      { day: 3, title: "Kolkata → Darjeeling", description: "Fly to Bagdogra, drive to Darjeeling. Evening gala dinner with Everest summiteer Tenzin (groups only).", overnight: "Darjeeling", meals: ["breakfast"], image: "/images/itineraries/northeast-india-sojourn/day-3.jpg" },
      { day: 4, title: "Exploring Darjeeling", description: "Ride the heritage toy train to Ghoom. Visit Ghoom Monastery, Tibetan Refugee Centre, Japanese Temple, and Peace Pagoda.", overnight: "Darjeeling", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/northeast-india-sojourn/day-4.png" },
      { day: 5, title: "Darjeeling → Pelling", description: "Drive to Pelling with stunning Kanchenjunga views. Visit Pemayangtse Monastery, one of the oldest in Sikkim.", overnight: "Pelling", meals: ["breakfast"], image: "/images/itineraries/northeast-india-sojourn/day-5.jpg" },
      { day: 6, title: "Exploring Pelling", description: "Walk to Sangachoeling Monastery. Visit the 135-foot Chenrezig Statue and sacred Khecheopalri Lake.", overnight: "Pelling", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/northeast-india-sojourn/day-6.png" },
      { day: 7, title: "Pelling → Gangtok", description: "Drive to Gangtok. Visit Do Drul Chorten and the Buddha and Guru Padmasambhava statues.", overnight: "Gangtok", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/northeast-india-sojourn/day-7.png" },
      { day: 8, title: "Gangtok → Kalimpong", description: "Drive to Kalimpong via Rumtek Monastery. Evening high tea with Lee and tales of the ancient Silk Route.", overnight: "Kalimpong", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/northeast-india-sojourn/day-8.png" },
      { day: 9, title: "Exploring Kalimpong", description: "Visit cactus nurseries, Tharpa Choling and Thongsa Gumpa monasteries. Buddha Pada cultural afternoon with music and community lunch.", overnight: "Kalimpong", meals: ["breakfast", "lunch"], image: "https://ik.imagekit.io/libertyindia/itineraries/northeast-india-sojourn/day-9.png" },
      { day: 10, title: "Depart Kalimpong", description: "Drive to Bagdogra Airport for flight to Kolkata and onward departure. End of tour.", overnight: "—", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/northeast-india-sojourn/day-10.png" },
    ],
    inclusions: ["Accommodation in Twin/Double rooms", "Daily breakfast and dinner (all meals at Pelling & Gangtok)", "AC vehicle transfers", "English-speaking guides", "Entrance fees and GST", "Hooghly River boat ride", "Toy train tickets", "High tea in Kalimpong", "Buddha Pada cultural show"],
    exclusions: ["Personal expenses", "Items not mentioned", "Expenses beyond control", "Medical expenses", "Christmas/New Year surcharge"],
    datesPrices: ["Northeast India Sojourn", "Price Validity OCT 2025 – MAR 2026", "Airfare: EUR 246 (additional)"],
    notes: ["Blackout: Dec 23 – Jan 5", "Festival Premium applies", "Weather Clause: customer bears costs", "Force Majeure: company not liable", "Gala dinner with Everest summiteer for groups only"],
    signatureExperiences: [
      { category: "Adventure Tour", title: "Gondola Ride in Darjeeling" },
      { category: "Adventure Tour", title: "Tsomgo Lake visit with Yak Ride in Gangtok" },
      { category: "Culture & History", title: "Walk around Botanical Garden in Kalimpong" },
      { category: "Culture & History", title: "Buddha Pada cultural show in Kalimpong" },
    ],
    heroImage: "https://ik.imagekit.io/libertyindia/itineraries/northeast-india-sojourn/main-bg.png",
    overviewImage: "https://ik.imagekit.io/libertyindia/itineraries/northeast-india-sojourn/overview.png",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/north-east/map.svg",
    coordinates: ITINERARY_MAP_ROUTES["northeast-india-sojourn"],
    // Cities shared with Incredible North East India — hotels per that docx
    // city table (Deluxe column); shared images for the shared properties.
    suggestedHotels: [
      { name: "Taj Raaj Kutir", city: "Kolkata", image: "/images/itineraries/northeast-india-sojourn/hotels/taj-raaj-kutir.jpg" },
      { name: "The Elgin Darjeeling", city: "Darjeeling", image: "/images/itineraries/northeast-india-sojourn/hotels/elgin-darjeeling.jpg" },
      { name: "Elgin Mt. Pandim", city: "Pelling", image: "/images/itineraries/northeast-india-sojourn/hotels/elgin-mt-pandim.jpg" },
      { name: "Elgin Nor-khill", city: "Gangtok", image: "/images/itineraries/northeast-india-sojourn/hotels/elgin-norkhill.jpg" },
    ],
  },

  // ==========================================================================
  // 8. VIBRANT GUJARAT WITH CENTRAL INDIA
  // Replaced 2026-05-26 from itineraries/Vibrant Gujrat With Central India.docx
  // New doc: 20 days (was 18), routes Delhi → Bhuj → Surendra Nagar → Kevadia
  // → Maheshwar → Mandu → Ujjain → Bhopal → Lucknow → Prayagraj → Ayodhya →
  // Mumbai (was Ahmedabad → Gondal → Sasan Gir → Diu → Bhopal → Sanchi →
  // Khajuraho → Bandhavgarh → Jabalpur). NOTE doc hero says 21 Days but
  // Summary Strip + day-by-day are 20 days — using 20.
  // IMAGES (2026-05-29): Days 1–7 now use real photos from the ImageKit folder
  // itineraries/vibrant-gujarat-central-india/day-N.png. NOTE day 5 ↔ day 6 are
  // intentionally cross-wired: uploaded day-5.png is a pond/sanctuary and
  // day-6.png is the heritage palace, which match the OPPOSITE days' text, so
  // Day 5 references day-6.png and Day 6 references day-5.png (per user request).
  // Days 8–20 use free-licensed Wikimedia Commons photos stored LOCALLY at
  // /public/images/itineraries/vibrant-gujarat-central-india/day-N.jpg (client had
  // not uploaded these to ImageKit; see that folder's SOURCES.md for per-image
  // license + attribution). Swap to ImageKit URLs when the client uploads
  // day-8..day-20. hero/overview/map still colorful-rajasthan placeholders below.
  // ==========================================================================
  {
    slug: "vibrant-gujarat-central-india",
    title: "Vibrant Gujarat With Central India",
    subtitle: "Embark on a culturally rich journey across India's spiritual and historical treasures, exploring vibrant Gujarat, majestic Madhya Pradesh, and the holy cities of Prayagraj and Ayodhya with unforgettable experiences throughout.",
    categories: ["Heritage", "Culture", "Spiritual", "Architecture"],
    duration: "19 Nights 20 Days",
    durationDays: 20,
    startingPrice: "Price on request",
    startingPriceNote: "Contact for quote",
    route: "Delhi → Bhuj → Surendra Nagar → Kevadia → Maheshwar → Omkareshwar → Mandu → Ujjain → Bhopal → Lucknow → Prayagraj → Ayodhya → Mumbai",
    bestTime: "October – March",
    overview: [
      "Travel across the heart of India, where bustling cities, desert landscapes, sacred rivers, and centuries-old heritage come together — from Delhi and Bhuj to Mandu, Bhopal, Prayagraj, and the holy city of Ayodhya.",
      "Discover vibrant local culture, admire stunning architecture, visit revered temples and spiritual landmarks, and soak in unforgettable experiences as you journey through Gujarat, Madhya Pradesh, and Uttar Pradesh at a relaxed and immersive pace.",
    ],
    summary: [
      "White salt desert of the Rann of Kutch with traditional artisan villages and colourful handicrafts",
      "Statue of Unity at Kevadia with scenic views of the Narmada River",
      "Riverside ghats and royal heritage of Maheshwar, famous for handloom traditions",
      "Romantic ruins, palaces, and Afghan architecture of Mandu",
    ],
    summaryRight: [
      "Cultural heritage of Lucknow — Nawabi architecture, bazaars, and renowned cuisine",
      "Holy Sangam in Prayagraj — confluence of the Ganga, Yamuna, and Saraswati rivers",
      "Ayodhya — birthplace of Lord Rama, with revered temples, ghats, and the new Ram Mandir",
      "Sanchi Stupa (UNESCO), Bhimbetka rock shelters, and Udayagiri Caves near Bhopal",
    ],
    days: [
      { day: 1,  title: "Arrive Delhi",                            description: "Upon arrival in Delhi, meet at the airport and transfer to the hotel for an overnight stay.", overnight: "Delhi", image: "https://ik.imagekit.io/libertyindia/itineraries/vibrant-gujarat-central-india/day-1.png" },
      { day: 2,  title: "Delhi → Bhuj",                            description: "After breakfast, Fly to Bhuj and transfer to your hotel. Overnight in Bhuj.", overnight: "Bhuj", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/vibrant-gujarat-central-india/day-2.png" },
      { day: 3,  title: "Rann of Kutch",                           description: "After breakfast, take an excursion to Rann of Kutch and explore nearby artisan villages known for traditional crafts, embroidery, and local artistry. Overnight in Bhuj.", overnight: "Bhuj", meals: ["breakfast", "lunch", "dinner"], image: "https://ik.imagekit.io/libertyindia/itineraries/vibrant-gujarat-central-india/day-3.png" },
      { day: 4,  title: "Bhuj",                                    description: "After breakfast, enjoy a guided cultural tour of Kutch villages around Bhuj, rich in heritage and craftsmanship. Overnight in Bhuj.", overnight: "Bhuj", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/vibrant-gujarat-central-india/day-4.png" },
      { day: 5,  title: "Bhuj → Surendra Nagar",                   description: "After breakfast, travel to the stately Ambika Niwas Palace and enjoy a peaceful evening at the heritage property. Overnight in Surendra Nagar.", overnight: "Surendra Nagar", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/vibrant-gujarat-central-india/day-6.png" }, // img cross-wired: day-6.png (heritage palace) matches the Ambika Niwas Palace visit
      { day: 6,  title: "Surendra Nagar → Kevadia",                description: "Morning after breakfast, visit a nearby wildlife sanctuary (Optional). Later start your onward journey to Kevadia. Upon arrival check-in and freshen up. Evening is free for leisure. Overnight in Kevadia.", overnight: "Kevadia", meals: ["breakfast"], image: "/images/itineraries/vibrant-gujarat-central-india/day-6.jpg" }, // img cross-wired: day-5.png (garden/pond) matches the wildlife-sanctuary stop
      { day: 7,  title: "Kevadia → Maheshwar",                     description: "After breakfast, visit to the Statue of Unity. Later, start your onwards journey to Maheshwar. Upon arrival check-in and freshen up. Evening is free for leisure. Overnight stay in Maheshwar.", overnight: "Maheshwar", meals: ["breakfast"], image: "https://ik.imagekit.io/libertyindia/itineraries/vibrant-gujarat-central-india/day-7.png" },
      { day: 8,  title: "Maheshwar",                               description: "Start the day with a visit to Omkareshwar, a sacred Jyotirlinga site on an island shaped like 'Om'. Return to Maheshwar to explore its riverside fort, ghats, and witness Maheshwari sari weaving. End the day with a peaceful evening boat ride on the Narmada. Overnight stay in Maheshwar.", overnight: "Maheshwar", meals: ["breakfast"], image: "/images/itineraries/vibrant-gujarat-central-india/day-8.jpg" },
      { day: 9,  title: "Maheshwar → Mandu",                       description: "Depart for Mandu, a romantic hilltop citadel rich in Afghan architecture and haunting tales. Reach by late afternoon and enjoy the sunset at Baz Bahadur's Palace or by the Rewa Kund, where stories of love and longing echo through its still waters. Overnight stay in Mandu.", overnight: "Mandu", meals: ["breakfast"], image: "/images/itineraries/vibrant-gujarat-central-india/day-9.jpg" },
      { day: 10, title: "Mandu",                                   description: "Spend the day exploring Mandu's timeless charm. Visit the floating Jahaz Mahal, the tilted walls of Hindola Mahal, the grand Jami Masjid, and Hoshang Shah's marble tomb—believed to have inspired the Taj Mahal. End at Roopmati's Pavilion for scenic views and romantic tales. Overnight stay in Mandu.", overnight: "Mandu", meals: ["breakfast"], image: "/images/itineraries/vibrant-gujarat-central-india/day-10.jpg" },
      { day: 11, title: "Mandu → Ujjain",                          description: "Drive from Mandu to Ujjain, one of India's most sacred cities. On the way, visit the revered Mahakaleshwar Temple, home to one of the twelve Jyotirlingas. If time allows, you can also visit the 18th-century Jantar Mantar, a historic astronomical observatory. Overnight stay in Ujjain.", overnight: "Ujjain", meals: ["breakfast"], image: "/images/itineraries/vibrant-gujarat-central-india/day-11.jpg" },
      { day: 12, title: "Ujjain → Bhopal",                         description: "Start the day exploring Ujjain's key sites, including Kal Bhairav Temple, Harsiddhi Temple, and the historic Ved Shala observatory. After lunch, head to Bhopal, a city rich in culture and dotted with scenic lakes. Overnight stay in Bhopal.", overnight: "Bhopal", meals: ["breakfast"], image: "/images/itineraries/vibrant-gujarat-central-india/day-12.jpg" },
      { day: 13, title: "Bhopal",                                  description: "Spend the day visiting Sanchi Stupa, a UNESCO site from Ashoka's era, followed by the historic town of Vidisha and the ancient rock-cut sculptures of Udayagiri Caves. Return to Bhopal by evening. Overnight stay in Bhopal.", overnight: "Bhopal", meals: ["breakfast"], image: "/images/itineraries/vibrant-gujarat-central-india/day-13.jpg" },
      { day: 14, title: "Bhopal",                                  description: "Begin with a morning trip to the Bhimbetka Rock Shelters to see ancient cave art, then visit Bhojpur Temple, known for its giant Shiva lingam. Return to Bhopal to explore the State Tribal Museum, the grand Taj-ul-Masjid, and browse the old city bazaars. Overnight stay in Bhopal.", overnight: "Bhopal", meals: ["breakfast"], image: "/images/itineraries/vibrant-gujarat-central-india/day-14.jpg" },
      { day: 15, title: "Bhopal → Lucknow",                        description: "After breakfast departure transfer to airport to board the flight to Lucknow, the cultural capital of Uttar Pradesh, known for its Nawabi elegance. Upon arrival meeting at the Airport and transfer to hotel. Evening free for leisure. Overnight in Lucknow.", overnight: "Lucknow", meals: ["breakfast"], image: "/images/itineraries/vibrant-gujarat-central-india/day-15.jpg" },
      { day: 16, title: "Lucknow",                                 description: "After breakfast, begin the new year with heritage walks exploring Bara Imambara, Chota Imambara, and indulge in Lucknowi cuisine. Overnight in Lucknow.", overnight: "Lucknow", meals: ["breakfast"], image: "/images/itineraries/vibrant-gujarat-central-india/day-16.jpg" },
      { day: 17, title: "Lucknow",                                 description: "After breakfast, Continue exploring the city's colonial landmarks, local bazaars, and museums. Evening free for leisure. Overnight in Lucknow.", overnight: "Lucknow", meals: ["breakfast"], image: "/images/itineraries/vibrant-gujarat-central-india/day-17.jpg" },
      { day: 18, title: "Lucknow → Prayagraj",                     description: "After breakfast, drive to Prayagraj (formerly Allahabad), the sacred confluence city of the Ganga, Yamuna, and Saraswati rivers. Overnight in Prayagraj.", overnight: "Prayagraj", meals: ["breakfast"], image: "/images/itineraries/vibrant-gujarat-central-india/day-18.jpg" },
      { day: 19, title: "Prayagraj → Ayodhya",                     description: "After breakfast, proceed to the revered town of Ayodhya, believed to be the birthplace of Lord Rama. Evening enjoy the Aarti ceremony at Saryu river. Overnight in Ayodhya.", overnight: "Ayodhya", meals: ["breakfast"], image: "/images/itineraries/vibrant-gujarat-central-india/day-19.jpg" },
      { day: 20, title: "Ayodhya → Mumbai",                        description: "After breakfast, visit the grand Ram Mandir and the nearby temples of Hanumangarhi. Conclude your enriching journey with a transfer or flight to Mumbai.", overnight: "—", meals: ["breakfast"], image: "/images/itineraries/vibrant-gujarat-central-india/day-20.jpg" },
    ],
    inclusions: [
      "Accommodation on Twin/Double sharing room or similar",
      "Daily breakfast at mentioned hotels; all meals at Rann of Kutch",
      "All transfers and sightseeing by AC vehicle",
      "01 boat ride at Prayagraj",
      "01 rickshaw ride at Ayodhya",
      "English Speaking local Guides for visits as per the program",
      "Entrance fees to the monuments as per the program",
      "GST as applicable",
    ],
    exclusions: [
      "Domestic and international airfare",
      "Personal expenses (room heater, laundry, etc.)",
      "Medical expenses",
      "Expenses caused by factors beyond control (road blockage, accidents, landslides)",
      "Christmas / New Year season surcharge (23 Dec – 5 Jan)",
      "Anything not explicitly mentioned in inclusions",
    ],
    datesPrices: [
      "Vibrant Gujarat With Central India",
      "Price Validity OCT 2025 – MAR 2026",
      "Price on request — contact our travel desk for a tailored quote",
    ],
    notes: [
      "Blackout Period: Dec 23 – Jan 5 (not available)",
      "Festival Premium: Extra charges during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
    ],
    signatureExperiences: [
      // Images web-sourced from Wikimedia Commons (free licenses), stored locally
      // under /signature/. See SOURCES.md in the image folder for attribution.
      { category: "Culture & History", title: "Heritage Trail Tour in Bhuj",                       image: "/images/itineraries/vibrant-gujarat-central-india/signature/bhuj-heritage.jpg" },
      { category: "Culture & History", title: "Appreciate the Dance Form of Kathak in Lucknow",    image: "/images/itineraries/vibrant-gujarat-central-india/signature/kathak.jpg" },
      { category: "Culture & History", title: "Maheshwari Saree Weaving Tour",                     image: "/images/itineraries/vibrant-gujarat-central-india/signature/maheshwari-weaving.jpg" },
      { category: "Culture & History", title: "Threads of Lucknow Workshop",                       image: "/images/itineraries/vibrant-gujarat-central-india/signature/chikankari.jpg" },
      { category: "Culture & History", title: "Cooking Workshop in Lucknow",                       image: "/images/itineraries/vibrant-gujarat-central-india/signature/awadhi-cooking.jpg" },
      { category: "Culture & History", title: "Shopping with a Concierge in Lucknow",              image: "/images/itineraries/vibrant-gujarat-central-india/signature/lucknow-bazaar.jpg" },
    ],
    // hero/overview web-sourced (Wikimedia Commons), stored locally. mapImage is unused by the template.
    heroImage: "/images/itineraries/vibrant-gujarat-central-india/main-bg.jpg",
    overviewImage: "/images/itineraries/vibrant-gujarat-central-india/overview.jpg",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/colorful-rajasthan/map.svg",
    coordinates: ITINERARY_MAP_ROUTES["vibrant-gujarat-central-india"],
    // Hotel images are REPRESENTATIVE web-sourced stand-ins (free-licensed photos of the exact
    // named properties weren't available) — see SOURCES.md. Swap for official hotel photos.
    suggestedHotels: [
      { name: "Kutch Safari Resort",   city: "Bhuj",           image: "/images/itineraries/vibrant-gujarat-central-india/hotels/kutch-safari.jpg" },
      { name: "Ambika Niwas Palace",   city: "Surendra Nagar", image: "/images/itineraries/vibrant-gujarat-central-india/hotels/ambika-niwas.jpg" },
      { name: "Jehan Numa Palace",     city: "Bhopal",         image: "/images/itineraries/vibrant-gujarat-central-india/hotels/jehan-numa.jpg" },
      { name: "Renaissance Lucknow",   city: "Lucknow",        image: "/images/itineraries/vibrant-gujarat-central-india/hotels/renaissance-lucknow.jpg" },
    ],
  },

  // ==========================================================================
  // 9. GEMS OF SOUTH INDIA
  // Images are reused from the Tamil Nadu itinerary as visual placeholders —
  // swap when Karnataka / Hampi / Goa photography is sourced.
  // ==========================================================================
  {
    slug: "gems-of-south-india",
    title: "Gems of South India",
    subtitle: "From Mysuru's royal palaces to Hampi's boulder-strewn ruins and Chikmagalur's coffee hills, this 12-day Karnataka journey ends with two relaxed days on Goa's beaches.",
    categories: ["Heritage", "Culture", "Architecture", "Nature"],
    duration: "11 Nights 12 Days",
    durationDays: 12,
    startingPrice: "€1,420",
    startingPriceNote: "per person (2 people)",
    route: "Bengaluru → Mysuru → Hassan → Chikmagalur → Hampi → Badami → Goa",
    bestTime: "October – March",
    overview: [
      "Karnataka's southern circuit is India's most underrated cultural belt — Hoysala temples carved like jewellery, the granite surreality of Hampi (a UNESCO site that once rivalled Rome), the coffee-scented hills of Chikmagalur, and palatial Mysuru — closing on Goa's Portuguese-Indian coast.",
      "Less crowded than the Golden Triangle, less wellness-focused than Kerala, this itinerary is for travellers who want India's depth without its density.",
    ],
    summary: [
      "Tipu Sultan's summer palace and Lalbagh gardens in Bengaluru",
      "Mysuru Palace illuminated at night — 100,000 bulbs",
      "Hoysala marvels at Belur, Halebidu, and Somnathpur",
      "Coffee estate stay and plantation walk in Chikmagalur",
    ],
    summaryRight: [
      "Sunrise coracle ride through Hampi's Tungabhadra ruins",
      "Vittala Temple and the musical stone pillars",
      "Cave temples of Badami — early Chalukyan rock-cut architecture",
      "Portuguese churches of Old Goa and two days on Palolem beach",
    ],
    days: [
      { day: 1,  title: "Arrive in Bengaluru",          description: "Arrive at Kempegowda International. Transfer to your hotel. Evening at leisure on MG Road or in Indiranagar.", overnight: "Bengaluru", image: "/images/itineraries/gems-of-south-india/day-1.jpg" },
      { day: 2,  title: "Bengaluru → Mysuru",           description: "Morning visit to Tipu Sultan's Summer Palace and Lalbagh Botanical Gardens, then drive to Mysuru. Evening Mysuru Palace illumination (Sundays).", overnight: "Mysuru", meals: ["breakfast"], image: "/images/itineraries/gems-of-south-india/day-2.jpg" },
      { day: 3,  title: "Exploring Mysuru",             description: "Mysuru Palace, Chamundi Hill, Devaraja Market, and the silk-weaving cooperative. Evening at the music fountain.", overnight: "Mysuru", meals: ["breakfast"], image: "/images/itineraries/gems-of-south-india/day-3.jpg" },
      { day: 4,  title: "Mysuru → Hassan",              description: "En route stop at Srirangapatna's Tipu Sultan landmarks. Continue to Hassan, your base for the Hoysala temples.", overnight: "Hassan", meals: ["breakfast"], image: "/images/itineraries/gems-of-south-india/day-4.jpg" },
      { day: 5,  title: "Belur, Halebidu & Shravanabelagola", description: "Full-day temple circuit — Chennakeshava at Belur, Hoysaleswara at Halebidu, and the 17m monolithic Bahubali statue at Shravanabelagola.", overnight: "Hassan", meals: ["breakfast"], image: "/images/itineraries/gems-of-south-india/day-5.jpg" },
      { day: 6,  title: "Hassan → Chikmagalur",         description: "Drive into the Western Ghats to Chikmagalur, the birthplace of Indian coffee. Check in at a heritage plantation stay.", overnight: "Chikmagalur", meals: ["breakfast"], image: "/images/itineraries/gems-of-south-india/day-6.jpg" },
      { day: 7,  title: "Coffee Estates & Mullayanagiri", description: "Plantation walk with a barista-led tasting. Afternoon drive to Mullayanagiri, Karnataka's highest peak, for sunset.", overnight: "Chikmagalur", meals: ["breakfast"], image: "/images/itineraries/gems-of-south-india/day-7.jpg" },
      { day: 8,  title: "Chikmagalur → Hampi",          description: "Long drive to Hampi (or overnight train from Bengaluru variant). Evening orientation walk through the bazaar ruins.", overnight: "Hampi", meals: ["breakfast"], image: "/images/itineraries/gems-of-south-india/day-8.jpg" },
      { day: 9,  title: "Hampi by Coracle & Foot",       description: "Sunrise coracle ride on the Tungabhadra. Explore the Vittala Temple complex, Royal Enclosure, Queen's Bath, and Lotus Mahal.", overnight: "Hampi", meals: ["breakfast"], image: "/images/itineraries/gems-of-south-india/day-9.jpg" },
      { day: 10, title: "Hampi → Badami → Goa",         description: "En route visit to Badami's Chalukyan cave temples and Aihole's early Hindu architecture. Continue to Goa by evening flight or overnight transfer.", overnight: "Goa", meals: ["breakfast"], image: "/images/itineraries/gems-of-south-india/day-10.jpg" },
      { day: 11, title: "Old Goa & Beach Day",          description: "Morning tour of Old Goa's Portuguese churches and Fontainhas Latin Quarter. Afternoon at Palolem or Agonda beach.", overnight: "Goa", meals: ["breakfast"], image: "/images/itineraries/gems-of-south-india/day-11.jpg" },
      { day: 12, title: "Depart Goa",                   description: "Morning at leisure. Transfer to Dabolim or Mopa airport for onward departure. End of tour.", overnight: "—", meals: ["breakfast"], image: "/images/itineraries/gems-of-south-india/day-12.jpg" },
    ],
    inclusions: [
      "Twin/Double room accommodation",
      "Daily breakfast",
      "AC vehicle transfers and sightseeing",
      "English-speaking local guides",
      "Entrance fees and GST",
      "Coffee estate experience in Chikmagalur",
      "Coracle ride in Hampi",
    ],
    exclusions: [
      "International and domestic airfare",
      "Lunch and dinner (unless specified)",
      "Personal expenses",
      "Items not explicitly mentioned",
      "Christmas / New Year surcharge",
    ],
    datesPrices: [
      "Gems of South India",
      "Price Validity OCT 2025 – MAR 2026",
      "Airfare: EUR 180 (additional)",
    ],
    notes: [
      "Blackout Period: Dec 23 – Jan 5 (not available)",
      "Hampi gets very hot March–May; best in Nov–Feb",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
    ],
    signatureExperiences: [],
    // Images: local Pexels + Wikimedia Commons (premium, free-license) — see SOURCES.md in the image folder
    heroImage: "/images/itineraries/gems-of-south-india/main-bg.jpg",
    overviewImage: "/images/itineraries/gems-of-south-india/overview.jpg",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/map.svg",
    coordinates: ITINERARY_MAP_ROUTES["gems-of-south-india"],
    // Cities shared with Southern Splendour — hotels per that docx city
    // table (Deluxe column); shared images for the shared properties.
    suggestedHotels: [
      { name: "Royal Orchid Metropole", city: "Mysore", image: "/images/itineraries/gems-of-south-india/hotels/royal-orchid-metropole.jpg" },
      { name: "Hoysala Village", city: "Hassan", image: "/images/itineraries/gems-of-south-india/hotels/hoysala-village.jpg" },
      { name: "Heritage Resort", city: "Hampi", image: "/images/itineraries/gems-of-south-india/hotels/heritage-resort-hampi.jpg" },
      { name: "Taj Holiday Village", city: "Goa", image: "/images/itineraries/gems-of-south-india/hotels/taj-holiday-village-goa.jpg" },
    ],
  },

  // ==========================================================================
  // 10. SAFARI & HERITAGE TRAIL — 12 Days
  // Imported from itineraries/Safari & Heritage Trail.docx. No price provided
  // in source; using "Price on request". IMAGES: all containers (days, hero,
  // overview, signature, hotels) web-sourced from Pexels, stored locally — see
  // SOURCES.md in the image folder.
  // ==========================================================================
  {
    slug: "safari-and-heritage-trail",
    title: "Safari & Heritage Trail",
    subtitle: "Experience a perfect blend of culture, history, and adventure with visits to Delhi and Agra's timeless monuments and thrilling jungle safaris across Bandhavgarh, Kanha, and Pench.",
    categories: ["Wildlife", "Heritage", "Culture", "Adventure"],
    duration: "11 Nights 12 Days",
    durationDays: 12,
    startingPrice: "Price on request",
    startingPriceNote: "Contact for quote",
    route: "Delhi → Bandhavgarh → Kanha → Pench → Agra",
    bestTime: "October – March",
    overview: [
      "From the timeless streets of Delhi and the majestic beauty of the Taj Mahal in Agra to the deep forests of Bandhavgarh, Kanha, and Pench, this journey brings together India's history, culture, and wild heart.",
      "Walk through grand monuments, feel the thrill of tiger safaris in lush national parks, and soak in the peaceful rhythm of nature and heritage blending together. It's a journey full of stories, sights, and unforgettable moments.",
    ],
    summary: [
      "Visit Delhi's historic landmarks including India Gate, Qutub Minar, and Humayun's Tomb, showcasing centuries of rich heritage",
      "Witness the sunrise view of the Taj Mahal in Agra, a timeless symbol of love and Mughal architecture",
      "Embark on thrilling tiger safaris in Bandhavgarh National Park, known for one of the highest tiger densities in India",
    ],
    summaryRight: [
      "Explore the pristine forests of Kanha National Park, the inspiration behind Rudyard Kipling's The Jungle Book",
      "Experience Pench National Park's rich biodiversity, home to leopards, wild dogs, and diverse birdlife",
      "Immerse in scenic drives through Central India's countryside, connecting cultural landmarks with untouched wilderness",
    ],
    days: [
      { day: 1,  title: "Arrive Delhi",            description: "Upon arrival in Delhi, meet Liberty representative at the airport and transfer the hotel for an overnight stay.", overnight: "Delhi", image: "/images/itineraries/safari-and-heritage-trail/day-1.jpg" },
      { day: 2,  title: "Delhi",                   description: "Start the day with a morning visit to Old Delhi, including a bicycle rickshaw ride through the bustling streets and a visit to the famous spice market. In the afternoon, take a panoramic drive through Lutyens' Delhi, admiring colonial-era architecture. Dinner and overnight stay at the hotel.", overnight: "Delhi", meals: ["breakfast", "lunch", "dinner"], image: "/images/itineraries/safari-and-heritage-trail/day-2.jpg" },
      { day: 3,  title: "Delhi",                   description: "Visit Humayun's Tomb, the serene Sunder Nursery, and the iconic Qutub Minar. Enjoy an optional visit to Nizamuddin Dargah or go shopping. The rest of the day is free for leisure. Dinner and overnight stay in Delhi.", overnight: "Delhi", meals: ["breakfast", "dinner"], image: "/images/itineraries/safari-and-heritage-trail/day-3.jpg" },
      { day: 4,  title: "Delhi → Bandhavgarh",     description: "After an early breakfast, fly to Jabalpur and from there drive to Bandhavgarh. Enjoy a relaxing evening at the hotel, followed by dinner and an overnight stay.", overnight: "Bandhavgarh", meals: ["breakfast", "dinner"], image: "/images/itineraries/safari-and-heritage-trail/day-4.jpg" },
      { day: 5,  title: "Bandhavgarh",             description: "Early morning and afternoon exclusive Jeep Safaris in Bandhavgarh. Relax, enjoy lunch & dinner and an overnight stay included.", overnight: "Bandhavgarh", meals: ["breakfast", "lunch", "dinner"], image: "/images/itineraries/safari-and-heritage-trail/day-5.jpg" },
      { day: 6,  title: "Bandhavgarh → Kanha",     description: "Early Jeep safari in Bandhavgarh National Park, followed by breakfast at the hotel. Drive to Kanha with a packed lunch. Check-in at the hotel, enjoy dinner, and stay overnight.", overnight: "Kanha", meals: ["breakfast", "lunch", "dinner"], image: "/images/itineraries/safari-and-heritage-trail/day-6.jpg" },
      { day: 7,  title: "Kanha",                   description: "Enjoy an early morning Jeep Safari in Kanha National Park, then return for breakfast and relax before lunch. Later, head out for an evening Jeep Safari, followed by dinner and an overnight stay at the hotel.", overnight: "Kanha", meals: ["breakfast", "lunch", "dinner"], image: "/images/itineraries/safari-and-heritage-trail/day-7.jpg" },
      { day: 8,  title: "Kanha → Pench",           description: "Early morning Jeep Safari in Kanha, followed by transfer to Pench. Dinner & overnight stay.", overnight: "Pench", meals: ["breakfast", "lunch", "dinner"], image: "/images/itineraries/safari-and-heritage-trail/day-8.jpg" },
      { day: 9,  title: "Pench",                   description: "Morning Jeep Safari in Pench National Park, return for breakfast, relax and enjoy lunch. Later, head out for an afternoon Jeep Safari in Pench. Dinner and overnight stay at Pench.", overnight: "Pench", meals: ["breakfast", "lunch", "dinner"], image: "/images/itineraries/safari-and-heritage-trail/day-9.jpg" },
      { day: 10, title: "Pench → Delhi → Agra",    description: "After an early morning breakfast, transfer to Nagpur for flight to Delhi. Upon arrival in Delhi, transfer to Agra for the night. Overnight stay at the hotel.", overnight: "Agra", meals: ["breakfast"], image: "/images/itineraries/safari-and-heritage-trail/day-10.jpg" },
      { day: 11, title: "Agra",                    description: "Begin with an early sunrise visit to the Taj Mahal. Return for breakfast. A morning visit to Itmad-UL Daulah's Tomb and Agra Fort. Overnight stay at the hotel.", overnight: "Agra", meals: ["breakfast"], image: "/images/itineraries/safari-and-heritage-trail/day-11.jpg" },
      { day: 12, title: "Agra → Delhi",            description: "After breakfast, depart Agra and proceed to Delhi. Upon arrival, transfer to Delhi airport for your flight back home.", overnight: "—", meals: ["breakfast"], image: "/images/itineraries/safari-and-heritage-trail/day-12.jpg" },
    ],
    inclusions: [
      "Accommodation on Twin/Double sharing room at the above-mentioned hotels or similar",
      "Daily breakfast at mentioned hotels. Bandhavgarh, Kanha and Pench include all meals",
      "01 Lunch at Dharampura Haveli at Delhi",
      "02 dinners at the hotel in Delhi",
      "01 Bicycle Rickshaw ride during Old Delhi tour",
      "03 Exclusive Jeep Safari at Bandhavgarh National Park",
      "03 Exclusive Jeep Safari at Kanha National Park",
      "02 Exclusive Jeep Safari at Pench National Park",
      "All transfers and sightseeing by AC Vehicle as per the program",
      "English Speaking local Guides for visits as per the program",
      "Entrance fees to the monuments as per the program",
      "GST (Goods & Services Tax) as applicable",
    ],
    exclusions: [
      "Domestic and international airfare",
      "Personal expenses (room heater, laundry, etc.)",
      "Medical expenses",
      "Expenses caused by factors beyond control (road blockage, accidents, landslides)",
      "Christmas / New Year season surcharge (23 Dec – 5 Jan)",
      "Anything not explicitly mentioned in inclusions",
    ],
    datesPrices: [
      "Safari & Heritage Trail",
      "Price Validity OCT 2026 – MAR 2027",
      "Price on request — contact our travel desk for a tailored quote",
    ],
    notes: [
      "Blackout Period: Dec 23 – Jan 5 (not available)",
      "Festival Premium: Extra charges during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
      "Jeep safaris booked first-come-first-served; bookings open 120 days in advance",
      "National parks are closed for visitors in the afternoon every Wednesday",
    ],
    signatureExperiences: [
      // Images web-sourced from Pexels (premium stock), stored locally under /signature/. See SOURCES.md.
      { category: "Culture & History", title: "Art Walk in Delhi",                       image: "/images/itineraries/safari-and-heritage-trail/signature/art-walk.jpg" },
      { category: "Culture & History", title: "Walking tour of Moonlit Square by Night",  image: "/images/itineraries/safari-and-heritage-trail/signature/moonlit-square.jpg" },
      { category: "Culture & History", title: "Yoga at Sivananda Vedanta Centres",        image: "/images/itineraries/safari-and-heritage-trail/signature/yoga-sivananda.jpg" },
      { category: "Culture & History", title: "Cooking Workshop",                         image: "/images/itineraries/safari-and-heritage-trail/signature/cooking-workshop.jpg" },
      { category: "Culture & History", title: "Village walks",                            image: "/images/itineraries/safari-and-heritage-trail/signature/village-walks.jpg" },
      { category: "Culture & History", title: "Yoga by Taj",                              image: "/images/itineraries/safari-and-heritage-trail/signature/yoga-by-taj.jpg" },
    ],
    // IMAGES (2026-05-29): hero/overview + hotels web-sourced from Pexels (premium stock),
    // stored LOCALLY under /images/itineraries/safari-and-heritage-trail/. See SOURCES.md.
    // mapImage unused by the template. Swap to ImageKit + official hotel photos later.
    heroImage: "/images/itineraries/safari-and-heritage-trail/main-bg.jpg",
    overviewImage: "/images/itineraries/safari-and-heritage-trail/overview.jpg",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/north-east/map.svg",
    coordinates: ITINERARY_MAP_ROUTES["safari-and-heritage-trail"],
    // Hotel images are REPRESENTATIVE premium stand-ins (exact properties not free-licensed) — see SOURCES.md.
    suggestedHotels: [
      { name: "The Claridges",            city: "Delhi",       image: "/images/itineraries/safari-and-heritage-trail/hotels/claridges-delhi.jpg" },
      { name: "Brij Sone Bagh",           city: "Bandhavgarh", image: "/images/itineraries/safari-and-heritage-trail/hotels/brij-bandhavgarh.jpg" },
      { name: "Outpost 12",               city: "Kanha",       image: "/images/itineraries/safari-and-heritage-trail/hotels/outpost-kanha.jpg" },
      { name: "ITC Mughal",               city: "Agra",        image: "/images/itineraries/safari-and-heritage-trail/hotels/itc-mughal-agra.jpg" },
    ],
  },

  // ==========================================================================
  // 11. INCREDIBLE NORTH EAST INDIA — 14 Days
  // NOTE: doc hero lists Bagdogra & Ravangla in route; Summary Strip omits them.
  // Using Summary Strip values for `route` field; days include all stops.
  // IMAGES: all sections web-sourced (Pexels; day-5 toy train from Commons), stored
  // locally under /images/itineraries/incredible-north-east-india/ — see SOURCES.md.
  // ==========================================================================
  {
    slug: "incredible-north-east-india",
    title: "Incredible North East India",
    subtitle: "Explore the charm of North East India as you travel through Kolkata, Darjeeling, Pelling, Ravangla, Gangtok, and Kalimpong surrounded by mountains, monasteries, and scenic beauty.",
    categories: ["Nature", "Culture", "Spiritual", "Adventure"],
    duration: "13 Nights 14 Days",
    durationDays: 14,
    startingPrice: "Price on request",
    startingPriceNote: "Contact for quote",
    route: "Kolkata → Bagdogra → Darjeeling → Pelling → Ravangla → Gangtok → Kalimpong → Bagdogra → Delhi",
    bestTime: "October – May",
    overview: [
      "Start your journey in Kolkata and travel through the scenic hills of Darjeeling, Pelling, Ravangla, Gangtok, and Kalimpong, enjoying fresh mountain air and beautiful Himalayan views.",
      "Discover peaceful monasteries, rolling tea gardens, and charming hill towns while experiencing the rich culture and natural beauty that make North East India truly special.",
    ],
    summary: [
      "Discover Kolkata's heritage charm with its colonial buildings, bustling streets, and cultural landmarks",
      "Enjoy the scenic toy train ride in Darjeeling through tea gardens and misty hills",
      "Watch the magical sunrise over Kanchenjunga from Tiger Hill",
      "Visit peaceful monasteries and enjoy the calm vibe of Gangtok and Ravangla",
    ],
    summaryRight: [
      "Take in stunning valley views and a relaxed atmosphere in Kalimpong",
      "Explore Pelling for close views of snow-capped Himalayan peaks and ancient monasteries",
      "Walk through lush green tea estates and meet warm local communities",
      "Travel through winding mountain roads surrounded by breathtaking Himalayan scenery",
    ],
    days: [
      { day: 1,  title: "Arrive in Kolkata",                  description: "On arrival in Kolkata, transfer to the hotel. (standard check-in time: 1400 hrs). Overnight in Kolkata.", overnight: "Kolkata", image: "/images/itineraries/incredible-north-east-india/day-1.jpg" },
      { day: 2,  title: "Exploring Kolkata",                  description: "After breakfast, explore colonial Kolkata. Begin at Dalhousie Square, the city's historic heart, taking in Raj Bhawan, St. John's Church, the Writers' Building and the GPO — grand reminders of British rule. Continue to the Mullick Ghat Flower Market beneath Howrah Bridge, the 1943 cantilever marvel, and Kumartulli, the 400-year-old artisan quarter where Bengal's festival idols are sculpted. Wander College Street's book stalls and pause at the legendary Indian Coffee House before an evening cruise on the Hooghly River. Overnight in Kolkata.", overnight: "Kolkata", meals: ["breakfast"], image: "/images/itineraries/incredible-north-east-india/day-2.jpg" },
      { day: 3,  title: "Kolkata",                            description: "After breakfast, continue exploring Kolkata. Visit the Dakshineswar Kali Temple, built in 1847 and famed for its association with the mystic Ramakrishna Paramhansa, its courtyard ringed by twelve shrines to Shiva. See the white-marble Victoria Memorial (closed Mondays) and St. Paul's Cathedral with its soaring spire and Florentine frescoes. Explore the Indian Museum (closed Mondays), one of Asia's oldest, founded in 1814, then visit Mother Teresa House (closed Thursdays), home of the Missionaries of Charity. Overnight in Kolkata.", overnight: "Kolkata", meals: ["breakfast"], image: "/images/itineraries/incredible-north-east-india/day-3.jpg" },
      { day: 4,  title: "Kolkata → Bagdogra → Darjeeling",    description: "After breakfast, fly to Bagdogra and drive on to Darjeeling (around three hours). Standing at 2,134m in the Himalayas, 'Dorje Ling' — the place of the thunderbolt — offers breathtaking views of snow-capped peaks, with Kanchenjunga rising above them all. Often called the 'Queen of the Hills', it charms with tiny waterfalls, little villages and its narrow-gauge mountain railway, all surrounded by world-famous tea gardens. Graeme Westlake described its outlook as 'a view scarcely unrivalled on Earth'. Overnight in Darjeeling.", overnight: "Darjeeling", meals: ["breakfast"], image: "/images/itineraries/incredible-north-east-india/day-4.jpg" },
      { day: 5,  title: "Darjeeling",                         description: "Rise early for the drive to Tiger Hill to watch the sunrise paint the Himalayan range — Kanchenjunga and, on clear days, Everest — in shifting gold. Return for breakfast, then ride the famous Darjeeling Himalayan 'toy train', a UNESCO-listed feat of 1881 engineering still steaming gently across the hillside. Visit Ghoom Monastery, the area's oldest, home to a 15-foot Maitreya Buddha, and the Tibetan Self-Help Centre (closed Sundays), where carpets, paintings and woodwork are crafted by hand. Overnight in Darjeeling.", overnight: "Darjeeling", meals: ["breakfast"], image: "/images/itineraries/incredible-north-east-india/day-5.jpg" },
      { day: 6,  title: "Darjeeling",                         description: "After breakfast, set out on a city tour. Visit the Himalayan Mountaineering Institute, founded after Tenzing Norgay's ascent of Everest, with its fascinating Everest Museum, and the adjoining Padmaja Naidu Himalayan Zoological Park (closed Thursdays), home to snow leopards, Tibetan wolves, yaks and Himalayan black bears. Continue to the Japanese Peace Pagoda on Jalapahar hill, a serene white sanctuary in classic Japanese style built in 1972. The evening is free to explore Mall Road. Overnight in Darjeeling.", overnight: "Darjeeling", meals: ["breakfast"], image: "/images/itineraries/incredible-north-east-india/day-6.jpg" },
      { day: 7,  title: "Darjeeling → Pelling",               description: "After breakfast, drive to Pelling, a laid-back town in West Sikkim near the foothills of Kanchenjunga, dotted with scenic viewpoints and ancient monasteries. In the afternoon, walk up to Pemayangtse Monastery — 'The Perfect Sublime Lotus' — perched on a wooded hilltop at 2,085m. Built in the late 17th century, it is among the oldest and most important Nyingma monasteries in Sikkim; its chief treasure is an intricate wooden replica of Zangdog Palri, the celestial abode of Guru Padmasambhava. Overnight in Pelling.", overnight: "Pelling", meals: ["breakfast"], image: "/images/itineraries/incredible-north-east-india/day-7.jpg" },
      { day: 8,  title: "Pelling",                            description: "After breakfast, walk up to Sangachoeling Monastery, one of Sikkim's oldest, established in the 17th century atop a forested ridge with sweeping views of snow-clad peaks; inside are beautifully preserved wall paintings and clay sculptures. Next, visit the Chenrezig Statue, a 135-foot image of the Buddha of compassion beside the Pelling skywalk, consecrated by the Dalai Lama. Continue to sacred Khecheopalri Lake, a wish-fulfilling lake cradled beneath the holy Khachoedpaldri hill that draws pilgrims from across the region. Overnight in Pelling.", overnight: "Pelling", meals: ["breakfast"], image: "/images/itineraries/incredible-north-east-india/day-8.jpg" },
      { day: 9,  title: "Pelling → Ravangla → Gangtok",       description: "After breakfast, drive to Gangtok, stopping en route at the Buddha Park of Ravangla (Tathagata Tsal), centred on a 130-foot statue of the Buddha consecrated by the 14th Dalai Lama in 2013, with the important Ralang Monastery nearby. Continue to Gangtok, the Sikkimese capital set at 1,750m. Surrounded by monasteries and orchids, its lively downtown is the gateway to North Sikkim. The rest of the day is at leisure. Overnight in Gangtok.", overnight: "Gangtok", meals: ["breakfast"], image: "/images/itineraries/incredible-north-east-india/day-9.jpg" },
      { day: 10, title: "Gangtok",                            description: "After breakfast, explore Gangtok. Visit the awe-inspiring Rumtek Monastery, seat of the Gyalwa Karmapa, with its jewel-studded Golden Stupa holding the relics of the 16th Karmapa. See the Do Drul Chorten, encircled by prayer wheels, and the Namgyal Institute of Tibetology, holding one of the world's finest collections of rare Mahayana Buddhist manuscripts. Continue to ridge-top Enchey Monastery, built in 1910, and finish among the carved friezes, hand-woven carpets and choktse tables of the Handloom and Handicrafts centre. Overnight in Gangtok.", overnight: "Gangtok", meals: ["breakfast"], image: "/images/itineraries/incredible-north-east-india/day-10.jpg" },
      { day: 11, title: "Gangtok → Kalimpong",                description: "After breakfast, drive to Kalimpong (1,250m), a quiet hill town renowned for its orchids and gladioli. Once part of the Sikkim raja's domain and later Bhutanese, it thrived as a wool-trading hub with Tibet; today it is a relaxed retreat. Visit the Zang Dog Palri Fo-Brang Monastery at Durpin Dara, with panoramic views and a rare three-dimensional mandala, the celebrated flower nurseries, the Gelug-order Tharpa Choling Monastery, and Thongsa Gumpa, Kalimpong's oldest monastery, dating to around 1692. Overnight in Kalimpong.", overnight: "Kalimpong", meals: ["breakfast"], image: "/images/itineraries/incredible-north-east-india/day-11.jpg" },
      { day: 12, title: "Kalimpong → Bagdogra → Delhi",       description: "In time, transfer from Kalimpong to Bagdogra airport for flight to Delhi. On arrival in Delhi, transfer to your hotel. Overnight in Delhi.", overnight: "Delhi", meals: ["breakfast"], image: "/images/itineraries/incredible-north-east-india/day-12.jpg" },
      { day: 13, title: "Delhi",                              description: "Post breakfast, enjoy a fascinating exploration of Old Delhi. Drive past the Red Fort (closed Mondays), Shah Jahan's red-sandstone citadel, and the Jama Masjid, India's largest mosque, then take a memorable cycle-rickshaw ride through the winding lanes of Chandni Chowk. In New Delhi, drive past Rashtrapati Bhawan along the grand Rajpath to India Gate. Visit Humayun's Tomb, the first great example of Mughal architecture, built in 1565, and the 72-metre Qutab Minar with Delhi's famous un-corroded 4th-century Iron Pillar. Overnight in Delhi.", overnight: "Delhi", meals: ["breakfast"], image: "/images/itineraries/incredible-north-east-india/day-13.jpg" },
      { day: 14, title: "Delhi Departure",                    description: "In time transfer to international airport for onward flight and tour terminates.", overnight: "—", meals: ["breakfast"], image: "/images/itineraries/incredible-north-east-india/day-14.jpg" },
    ],
    inclusions: [
      "Accommodation in 01 Double Room at the above-mentioned hotels or similar",
      "Meals as mentioned above",
      "All transfers and sightseeing by AC Toyota Crysta Car as per the program",
      "Prevailing Monument Entrance Fees",
      "Services of Accompanying English-Speaking Guide from Bagdogra to Bagdogra + Local Guides in Kolkata & Delhi",
      "Private Hooghly River Cruise in Kolkata",
      "Toy Train Ride in Darjeeling",
      "Cycle Rickshaw Ride in Old Delhi",
      "Wi-fi access in the vehicle during traveling",
      "Unlimited drinking bottled water in the vehicle during traveling",
      "GST (Goods & Services Tax) as applicable",
    ],
    exclusions: [
      "Any domestic / international airfare",
      "Personal expenses (tips, laundry, beverages, telephone calls)",
      "Expenses caused by factors beyond control (flight cancellation, roadblocks, vehicle malfunction)",
      "Medical or evacuation insurance",
      "Travel insurance",
    ],
    datesPrices: [
      "Incredible North East India",
      "Price Validity OCT 2026 – MAY 2027",
      "Price on request — contact our travel desk for a tailored quote",
    ],
    notes: [
      "Blackout Period: Dec 23 – Jan 5 (not available)",
      "Festival Premium: Extra charges during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
    ],
    signatureExperiences: [
      { category: "Culture & History", title: "Yoga Session at Sivananda Yoga Centre, Delhi", image: "/images/itineraries/incredible-north-east-india/signature/yoga.jpg" },
      { category: "Culture & History", title: "Old Delhi Food & Heritage Walk",               image: "/images/itineraries/incredible-north-east-india/signature/old-delhi-food.jpg" },
      { category: "Culture & History", title: "Street Art Tour in Delhi Art District",        image: "/images/itineraries/incredible-north-east-india/signature/street-art.jpg" },
    ],
    // IMAGES (2026-05-29): hero/overview + hotels web-sourced from Pexels (premium stock),
    // stored LOCALLY under /images/itineraries/incredible-north-east-india/. See SOURCES.md.
    // mapImage unused by the template. Swap to ImageKit + official hotel photos later.
    heroImage: "/images/itineraries/incredible-north-east-india/main-bg.jpg",
    overviewImage: "/images/itineraries/incredible-north-east-india/overview.jpg",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/north-east/map.svg",
    coordinates: ITINERARY_MAP_ROUTES["incredible-north-east-india"],
    // Hotel images are REPRESENTATIVE premium stand-ins (exact properties not free-licensed) — see SOURCES.md.
    suggestedHotels: [
      { name: "Taj Raaj Kutir",        city: "Kolkata",    image: "/images/itineraries/incredible-north-east-india/hotels/taj-raaj-kutir.jpg" },
      { name: "The Elgin Darjeeling",  city: "Darjeeling", image: "/images/itineraries/incredible-north-east-india/hotels/elgin-darjeeling.jpg" },
      { name: "Elgin Nor-khill",       city: "Gangtok",    image: "/images/itineraries/incredible-north-east-india/hotels/elgin-norkhill.jpg" },
      { name: "The Claridges",         city: "Delhi",      image: "/images/itineraries/incredible-north-east-india/hotels/claridges-delhi.jpg" },
    ],
  },

  // ==========================================================================
  // 12. GOLDEN TRIANGLE WITH RANTHAMBORE — 8 Days
  // Distinct from existing `taj-and-tigers` — same circuit, different source
  // doc. IMAGES: all sections web-sourced (Pexels), stored locally — see SOURCES.md.
  // ==========================================================================
  {
    slug: "golden-triangle-with-ranthambore",
    title: "Golden Triangle With Ranthambore",
    subtitle: "Experience India's Golden Triangle with wildlife adventure: explore Delhi's heritage, Agra's Taj Mahal, Jaipur's royal charm and Ranthambore's thrilling tiger safaris and natural beauty.",
    categories: ["Heritage", "Culture", "Architecture", "Wildlife"],
    duration: "7 Nights 8 Days",
    durationDays: 8,
    startingPrice: "Price on request",
    startingPriceNote: "Contact for quote",
    route: "Delhi → Agra → Jaipur → Ranthambore → Delhi",
    bestTime: "October – March",
    overview: [
      "This journey offers a perfect mix of India's rich history, colourful culture, stunning architecture, and exciting wildlife adventures — creating memories that last a lifetime.",
      "Stroll through the historic lanes of Delhi, admire the breathtaking beauty of the Taj Mahal in Agra, experience the royal charm of Jaipur, and head into the wild forests of Ranthambore for an unforgettable tiger safari.",
    ],
    summary: [
      "Be part of a Heritage walk through Old Delhi, visiting bustling bazaars, Jama Masjid, and Raj Ghat",
      "Explore New Delhi's iconic landmarks including India Gate, Humayun's Tomb, and Qutub Minar",
      "Sunrise visit to the Taj Mahal and tour of the magnificent Agra Fort",
      "Scenic drive through Rajasthan's countryside en-route to the Pink City of Jaipur",
    ],
    summaryRight: [
      "Guided tour of Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar in Jaipur",
      "Experience Jaipur's vibrant bazaars, traditional crafts, and authentic Rajasthani cuisine",
      "Morning & evening jeep safaris in Ranthambore National Park, home to majestic Bengal tigers",
      "Witness the perfect blend of Mughal grandeur, Rajput royalty, and India's rich wildlife heritage",
    ],
    days: [
      { day: 1, title: "Arrive Delhi",                   description: "On arrival at Delhi International Airport, you'll meet our representative who will assist you and further accompany you to your hotel. Overnight in Delhi.", overnight: "Delhi", image: "/images/itineraries/golden-triangle-with-ranthambore/day-1.jpg" },
      { day: 2, title: "Exploring Delhi",                description: "Post breakfast, enjoy a fascinating exploration of Old Delhi. Drive past the Red Fort (closed Mondays), Shah Jahan's red-sandstone citadel, and the Jama Masjid, India's largest mosque, then take a memorable cycle-rickshaw ride through the winding lanes of Chandni Chowk. In New Delhi, drive past Rashtrapati Bhawan along the grand Rajpath to India Gate. Visit Humayun's Tomb, the first great example of Mughal architecture, built in 1565, and the 72-metre Qutab Minar with Delhi's famous un-corroded 4th-century Iron Pillar. Overnight in Delhi.", overnight: "Delhi", meals: ["breakfast"], image: "/images/itineraries/golden-triangle-with-ranthambore/day-2.jpg" },
      { day: 3, title: "Delhi → Agra",                   description: "After breakfast, depart for Agra by surface and check in at the hotel. Visit Agra Fort, built in the 16th century and added to by three generations of Mughal emperors — a synthesis of military might and delicate interior detail, where Shah Jahan was later imprisoned by his son. Continue to the Itmad-ud-Daulah, the 'Baby Taj' — the first tomb in India built entirely of marble, commissioned by Empress Nur Jahan for her father Mir Gheyas Beg. Overnight in Agra.", overnight: "Agra", meals: ["breakfast"], image: "/images/itineraries/golden-triangle-with-ranthambore/day-3.jpg" },
      { day: 4, title: "Agra → Fatehpur Sikri → Jaipur", description: "Early morning, visit the incomparable Taj Mahal at sunrise (closed Fridays) — a varying kaleidoscope of solitude, colour and mood, 22 years in the making and widely regarded as an earthly replica of paradise: 'a vision, a dream, a poem and a wonder'. Return for breakfast, then depart for Jaipur, en route visiting Fatehpur Sikri, Akbar the Great's exquisite red-sandstone city of 1569, abandoned soon after its creation. Continue to Jaipur and check in; the rest of the day is at leisure. Overnight in Jaipur.", overnight: "Jaipur", meals: ["breakfast"], image: "/images/itineraries/golden-triangle-with-ranthambore/day-4.jpg" },
      { day: 5, title: "Jaipur",                         description: "After breakfast, drive to the magnificent Amber Fort, the ancient Kachhwaha capital. Built by Raja Man Singh in the early 17th century, this superb blend of Hindu and Mughal architecture rises above the old town in a succession of mighty gates, ornate halls, pavilions and gardens. Nearby, photograph the criss-crossing staircases of Panna Meena ka Kund, a 16th-century step well. In the afternoon, tour the City Palace and the Jantar Mantar observatory, pause at the iconic Hawa Mahal, and wander Jaipur's vibrant bazaars. Overnight in Jaipur.", overnight: "Jaipur", meals: ["breakfast"], image: "/images/itineraries/golden-triangle-with-ranthambore/day-5.jpg" },
      { day: 6, title: "Jaipur → Ranthambore",           description: "After breakfast, depart to Ranthambore by surface and check-in at the hotel. Ranthambore National Park is one of the biggest and most renowned national parks in Northern India. Being considered as one of the famous and former hunting grounds of the Maharajas of Jaipur, today the Ranthambore National Park terrain is a major wildlife tourist attraction spot that has pulled the attention of many wildlife photographers and lovers. Overnight in Ranthambore.", overnight: "Ranthambore", meals: ["breakfast"], image: "/images/itineraries/golden-triangle-with-ranthambore/day-6.jpg" },
      { day: 7, title: "Ranthambore",                    description: "Early Morning & Afternoon Private Jeep Safari with English Speaking Naturalist at Ranthambore National Park. Overnight in Ranthambore.", overnight: "Ranthambore", meals: ["breakfast"], image: "/images/itineraries/golden-triangle-with-ranthambore/day-7.jpg" },
      { day: 8, title: "Ranthambore → Delhi",            description: "After breakfast, depart for Jaipur by surface. Reach Delhi and transfer to international airport for an onward flight and tour terminates.", overnight: "—", meals: ["breakfast"], image: "/images/itineraries/golden-triangle-with-ranthambore/day-8.jpg" },
    ],
    inclusions: [
      "Accommodation in 01 Double Room at the above-mentioned hotels or similar",
      "Meals as mentioned above",
      "All transfers and sightseeing by AC Toyota Crysta Car as per the program",
      "Prevailing Monument Entrance Fees",
      "Services of Local English / French Speaking Guide on sightseeing tours (different guides in each city)",
      "Cycle Rickshaw Ride in Old Delhi",
      "Jeep Ride at Amber Fort in Jaipur",
      "02 Private Jeep Safaris at Ranthambore National Park",
      "Wi-fi access in the vehicle during traveling",
      "Unlimited drinking bottled water in the vehicle during traveling",
      "GST (Goods & Services Tax) as applicable",
    ],
    exclusions: [
      "Any domestic / international airfare",
      "Personal expenses (tips, laundry, beverages, telephone calls)",
      "Expenses caused by factors beyond control (flight cancellation, roadblocks, vehicle malfunction)",
      "Medical or evacuation insurance",
      "Travel insurance",
    ],
    datesPrices: [
      "Golden Triangle With Ranthambore",
      "Price Validity OCT 2025 – MAR 2026",
      "Price on request — contact our travel desk for a tailored quote",
    ],
    notes: [
      "Blackout Period: Dec 23 – Jan 5 (not available)",
      "Festival Premium: Extra charges during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
      "Ranthambore Jeep Safari bookings open 120 days in advance, first-come-first-served",
    ],
    signatureExperiences: [
      { category: "Culture & History", title: "Yoga Session at Sivananda Yoga Centre, Delhi", image: "/images/itineraries/golden-triangle-with-ranthambore/signature/yoga.jpg" },
      { category: "Culture & History", title: "Old Delhi Food & Heritage Walk", image: "/images/itineraries/golden-triangle-with-ranthambore/signature/old-delhi-food.jpg" },
      { category: "Culture & History", title: "Street Art Tour in Delhi Art District", image: "/images/itineraries/golden-triangle-with-ranthambore/signature/street-art.jpg" },
      { category: "Culture & History", title: "Food Walk in Agra", image: "/images/itineraries/golden-triangle-with-ranthambore/signature/agra-food.jpg" },
      { category: "Culture & History", title: "Heritage Walk in Agra", image: "/images/itineraries/golden-triangle-with-ranthambore/signature/agra-heritage.jpg" },
      { category: "Culture & History", title: "Agra Handicraft Walk", image: "/images/itineraries/golden-triangle-with-ranthambore/signature/agra-handicraft.jpg" },
      { category: "Culture & History", title: "Cooking Demonstration followed by lunch/dinner in Jaipur", image: "/images/itineraries/golden-triangle-with-ranthambore/signature/jaipur-cooking.jpg" },
      { category: "Adventure",         title: "Rhythm with Elephants at Dera Amer in Jaipur", image: "/images/itineraries/golden-triangle-with-ranthambore/signature/elephants.jpg" },
      { category: "Adventure",         title: "Pedal to Heritage (morning cycling tour) in Jaipur", image: "/images/itineraries/golden-triangle-with-ranthambore/signature/cycling.jpg" },
    ],
    // IMAGES (2026-05-29): all sections web-sourced from Pexels (premium stock), stored locally
    // under /images/itineraries/golden-triangle-with-ranthambore/. See SOURCES.md. mapImage unused.
    heroImage: "/images/itineraries/golden-triangle-with-ranthambore/main-bg.jpg",
    overviewImage: "/images/itineraries/golden-triangle-with-ranthambore/overview.jpg",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/north-east/map.svg",
    coordinates: ITINERARY_MAP_ROUTES["golden-triangle-with-ranthambore"],
    // Hotel images are REPRESENTATIVE premium stand-ins (exact properties not free-licensed) — see SOURCES.md.
    suggestedHotels: [
      { name: "The Claridges",     city: "Delhi",       image: "/images/itineraries/golden-triangle-with-ranthambore/hotels/claridges-delhi.jpg" },
      { name: "ITC Mughal",        city: "Agra",        image: "/images/itineraries/golden-triangle-with-ranthambore/hotels/itc-mughal-agra.jpg" },
      { name: "Samode Haveli",     city: "Jaipur",      image: "/images/itineraries/golden-triangle-with-ranthambore/hotels/samode-haveli.jpg" },
      { name: "TUTC Sawai Shivir", city: "Ranthambore", image: "/images/itineraries/golden-triangle-with-ranthambore/hotels/tutc-sawai-shivir.jpg" },
    ],
  },

  // ==========================================================================
  // 13. ENCHANTING CENTRAL INDIA — 12 Days
  // NOTE: doc Summary Strip route omits Mandu but day-by-day includes a Mandu
  // excursion from Maheshwar on Day 8. Faithful to day-by-day.
  // Hero/overview placeholders from existing vibrant-gujarat-central-india.
  // ==========================================================================
  {
    slug: "enchanting-central-india",
    title: "Enchanting Central India",
    subtitle: "Experience the diverse charm of India as you journey from Mumbai to Aurangabad's ancient caves, Burhanpur's forgotten Mughal heritage, the peaceful ghats of Maheshwar, the romantic ruins of Mandu, the spiritual aura of Ujjain, and the cultural heart of Bhopal.",
    categories: ["Heritage", "Culture", "Spiritual", "Architecture"],
    duration: "11 Nights 12 Days",
    durationDays: 12,
    startingPrice: "Price on request",
    startingPriceNote: "Contact for quote",
    route: "Mumbai → Aurangabad → Burhanpur → Maheshwar → Ujjain → Bhopal → Mumbai",
    bestTime: "October – March",
    overview: [
      "From Mumbai's vibrant city life to Aurangabad's ancient caves and Burhanpur's forgotten Mughal heritage, this journey reveals India's fascinating blend of history, culture, architecture, and timeless traditions.",
      "Explore the riverside beauty of Maheshwar, the romantic ruins of Mandu, the spiritual energy of Ujjain, and the cultural charm of Bhopal on a memorable journey through Central India.",
    ],
    summary: [
      "Soak in the energy of Mumbai as you explore its lively streets, colonial landmarks, and seaside charm",
      "Step back in time at the magnificent Ajanta & Ellora Caves, famous for their ancient rock-cut art and architecture",
      "Uncover the lesser-known Mughal history of Burhanpur through its forts, mosques, and royal monuments",
      "Enjoy peaceful moments by the Narmada River while exploring the beautiful ghats and temples of Maheshwar",
    ],
    summaryRight: [
      "Wander through the romantic ruins and grand palaces of Mandu, surrounded by stunning landscapes",
      "Experience the spiritual heartbeat of Ujjain with visits to sacred temples and riverside ceremonies",
      "Discover the cultural soul of Bhopal through its lakes, museums, vibrant bazaars, and historic old city charm",
    ],
    days: [
      { day: 1,  title: "Arrive Mumbai",                          description: "On arrival in Mumbai, you will meet our representative, who will assist you during the check-in at the hotel (standard check-in time is 1400 hrs onwards).", overnight: "Mumbai", image: "/images/itineraries/enchanting-central-india/day-1.jpg" },
      { day: 2,  title: "Exploring Mumbai",                       description: "Post breakfast, take the boat across to Elephanta Island (closed Mondays) to explore its ancient rock-cut temples and the stunning 20-foot Shiva sculpture. Back on shore, see the Gateway of India, built to commemorate the visit of King George V in whimsical Indo-Saracenic style. Drive up Malabar Hill to the Hanging Gardens and Kamala Nehru Park — welcome splashes of green with splendid city views — passing the Rajabai Clock Tower, and finish at Dhobi Ghat, India's largest open-air laundry, in full midday swing.", overnight: "Mumbai", meals: ["breakfast"], image: "/images/itineraries/enchanting-central-india/day-2.jpg" },
      { day: 3,  title: "Mumbai → Aurangabad",                    description: "Early morning, transfer to airport for flight to Aurangabad. On arrival in Aurangabad, check-in at the hotel (check-in time: 1400 hrs). Later, visit Bibi ka Maqbara, a tomb located in Aurangabad, Maharashtra, India. It was commissioned in 1660 by the Mughal emperor Aurangzeb's son Prince Azim Shah in the memory of his loving mother Dilras Banu Begum. It bears a striking resemblance to the Taj Mahal, the mausoleum of Aurangzeb's mother, Mumtaz Mahal. Overnight in Aurangabad.", overnight: "Aurangabad", meals: ["breakfast"], image: "/images/itineraries/enchanting-central-india/day-3.jpg" },
      { day: 4,  title: "A day in Aurangabad",                    description: "After breakfast, visit the Ellora Caves (closed Tuesdays), among the finest cave temples in the world. Carved between roughly 350 and 700 AD, the 34 rock-cut sanctuaries embrace Buddhism, Hinduism and Jainism, crowned by the Kailasa Temple — a colossal shrine hewn from a single rock. Continue to Daulatabad Fort, a 13th-century stronghold set on a great conical hill, its 30-metre Chand Minar rising over the pass it commands. The evening is free to explore the local markets. Overnight in Aurangabad.", overnight: "Aurangabad", meals: ["breakfast"], image: "/images/itineraries/enchanting-central-india/day-4.jpg" },
      { day: 5,  title: "Aurangabad → Ajanta → Burhanpur",        description: "After breakfast, depart for Burhanpur, stopping at the Ajanta Caves (closed Mondays). Hidden for centuries until their 19th-century rediscovery, these 30 caves carved into the Sahyadri hills served as secluded retreats for Buddhist monks from around 200 BC to 650 AD. Ajanta is celebrated above all for its exquisite murals of the Jataka tales — the flying apsara of cave 17, the preaching Buddha of cave 16 and the seated Nagaraja among the highlights. Continue to Burhanpur and check in. Overnight in Burhanpur.", overnight: "Burhanpur", meals: ["breakfast"], image: "/images/itineraries/enchanting-central-india/day-5.jpg" },
      { day: 6,  title: "Burhanpur → Omkareshwar → Maheshwar",    description: "After breakfast, drive to Maheshwar, stopping at Omkareshwar — a sacred island in the Narmada and home to one of India's twelve revered Jyotirlinga shrines of Lord Shiva. Visit the Mamleshwar Jyotirlinga on the river's south bank, the 11th-century Kedareshwar Temple with its lovely views along the parikrama path, and the 13th-century Siddhanath Temple on Mandhata island, a fine example of ancient Indian craftsmanship. Continue to Maheshwar and check in at the hotel. Overnight in Maheshwar.", overnight: "Maheshwar", meals: ["breakfast"], image: "/images/itineraries/enchanting-central-india/day-6.jpg" },
      { day: 7,  title: "Maheshwar",                              description: "After a leisurely breakfast, set out on a full-day tour of Maheshwar, a centre of handloom weaving since the 5th century and famed for its delicate Maheshwari saris in cotton and silk. Mentioned in the Mahabharata and Ramayana, the town is rich in spiritual heritage. Explore Holkar Fort, named after the revered Rani Ahilyabai Holkar, with scenic views over the Narmada from its ramparts, and visit the Pandrinath and Jaleshwar temples. Overnight in Maheshwar.", overnight: "Maheshwar", meals: ["breakfast"], image: "/images/itineraries/enchanting-central-india/day-7.jpg" },
      { day: 8,  title: "Maheshwar → Mandu → Maheshwar",          description: "After breakfast, enjoy a full-day excursion to Mandu, a romantic hilltop city in stone celebrating the love of poet-prince Baz Bahadur and Rani Roopmati. Visit Roopmati's Pavilion, gazing over the Narmada plains far below; the elegant Jahaz Mahal, a 120-metre 'ship palace' afloat between two lakes; the Hindola Mahal, named for its sloping walls; and Hoshang Shah's Tomb — India's first marble edifice, said to have inspired the builders of the Taj Mahal. Finish at the grand Jami Masjid. Overnight in Maheshwar.", overnight: "Maheshwar", meals: ["breakfast"], image: "/images/itineraries/enchanting-central-india/day-8.jpg" },
      { day: 9,  title: "Maheshwar → Ujjain",                     description: "After breakfast, drive to Ujjain and check in at the hotel. An ancient city on the Kshipra River and one of Hinduism's holiest pilgrimage sites, Ujjain is renowned for the Mahakaleshwar Jyotirlinga, revered as Swayambhu — self-manifested. Visit the Jantar Mantar observatory built in 1733 by Maharaja Jai Singh, on the meridian Indian astronomers traditionally took as prime. In the evening, witness the serene aarti ceremony on the steps of Ram Ghat. Overnight in Ujjain.", overnight: "Ujjain", meals: ["breakfast"], image: "/images/itineraries/enchanting-central-india/day-9.jpg" },
      { day: 10, title: "Ujjain → Bhopal",                        description: "After breakfast, drive to Bhopal, stopping at the UNESCO-listed Bhimbetka rock shelters, whose 600-plus caves preserve vivid prehistoric paintings up to 12,000 years old, and the Bhojpur Temple with its 7.5-foot lingam. Reach lakeside Bhopal and visit the Taj-ul-Masjid, said to be India's largest mosque, begun under Shah Jehan Begum and completed only in 1971. Continue to the open-air Tribal Habitat Museum, then drive along VIP Road for views over the Upper Lake. Overnight in Bhopal.", overnight: "Bhopal", meals: ["breakfast"], image: "/images/itineraries/enchanting-central-india/day-10.jpg" },
      { day: 11, title: "Explore Bhopal",                         description: "After breakfast, enjoy an excursion to UNESCO-listed Sanchi, the oldest Buddhist sanctuary in existence — a hilltop ensemble of stupas, pillars and monasteries dating mostly from the 2nd and 1st centuries BC. The Great Stupa is encircled by superbly carved toranas, the finest of early Buddhist art, with the elegant Ashoka Pillar nearby. In the afternoon, continue to the Udayagiri Caves, twenty rock-cut Gupta shrines carved during the reign of Chandragupta II — a rich showcase of Gupta art. Overnight in Bhopal.", overnight: "Bhopal", meals: ["breakfast"], image: "/images/itineraries/enchanting-central-india/day-11.jpg" },
      { day: 12, title: "Bhopal → Mumbai",                        description: "Post breakfast, transfer to airport for flight to Mumbai. On arrival in Mumbai, transfer to international airport for onward flight and tour terminates.", overnight: "—", meals: ["breakfast"], image: "/images/itineraries/enchanting-central-india/day-12.jpg" },
    ],
    inclusions: [
      "Accommodation in 01 Double Room at the above-mentioned hotels or similar",
      "Meals as mentioned above",
      "All transfers and sightseeing by AC Toyota Crysta Car as per the program",
      "Prevailing Monument Entrance Fees",
      "Services of Local English / French Speaking Guide on sightseeing tours (different guides in each city)",
      "Return Shared Ferry for Elephanta Caves",
      "Wi-fi access in the vehicle during traveling",
      "Unlimited drinking bottled water in the vehicle during traveling",
      "GST (Goods & Services Tax) as applicable",
    ],
    exclusions: [
      "Any domestic / international airfare",
      "Personal expenses (tips, laundry, beverages, telephone calls)",
      "Expenses caused by factors beyond control (flight cancellation, roadblocks, vehicle malfunction)",
      "Medical or evacuation insurance",
      "Travel insurance",
    ],
    datesPrices: [
      "Enchanting Central India",
      "Price Validity OCT 2025 – MAR 2026",
      "Price on request — contact our travel desk for a tailored quote",
    ],
    notes: [
      "Blackout Period: Dec 23 – Jan 5 (not available)",
      "Festival Premium: Extra charges during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
      "Ajanta Caves closed Mondays; Ellora Caves closed Tuesdays",
    ],
    signatureExperiences: [
      { category: "Culture & History", title: "Bollywood Studio Tour in Mumbai", image: "/images/itineraries/enchanting-central-india/signature/bollywood.jpg" },
      { category: "Culture & History", title: "Art Deco Tour in Mumbai", image: "/images/itineraries/enchanting-central-india/signature/art-deco.jpg" },
      { category: "Culture & History", title: "Mumbai By Dawn Tour", image: "/images/itineraries/enchanting-central-india/signature/mumbai-dawn.jpg" },
    ],
    // Images: local Pexels + Wikimedia Commons (premium, free-license) — see SOURCES.md in the image folder
    heroImage: "/images/itineraries/enchanting-central-india/main-bg.jpg",
    overviewImage: "/images/itineraries/enchanting-central-india/overview.jpg",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/colorful-rajasthan/map.svg",
    coordinates: ITINERARY_MAP_ROUTES["enchanting-central-india"],
    // Hotel images are representative luxury/heritage stand-ins — see SOURCES.md
    suggestedHotels: [
      { name: "Trident Nariman Point", city: "Mumbai",     image: "/images/itineraries/enchanting-central-india/hotels/trident-mumbai.jpg" },
      { name: "Gateway Aurangabad",    city: "Aurangabad", image: "/images/itineraries/enchanting-central-india/hotels/gateway-aurangabad.jpg" },
      { name: "Ahilya Fort",           city: "Maheshwar",  image: "/images/itineraries/enchanting-central-india/hotels/ahilya-fort.jpg" },
      { name: "Jehan Numa Palace",     city: "Bhopal",     image: "/images/itineraries/enchanting-central-india/hotels/jehan-numa-bhopal.jpg" },
    ],
  },

  // ==========================================================================
  // 14. ENCHANTING SOUTH INDIA — TAMIL NADU & KERALA — 16 Days
  // Distinct from existing `unveiling-the-enchanting-south-tamil-nadu` (which
  // is Tamil Nadu only). This one adds Kerala (Periyar, Alleppey houseboat,
  // Mararikulam, Kochi). Hero/overview placeholders from existing TN entry.
  // ==========================================================================
  {
    slug: "enchanting-south-india-tamilnadu-kerala",
    title: "Enchanting South India — Tamil Nadu & Kerala",
    subtitle: "This South India tour blends culture, architecture, spirituality, nature, and relaxation into one unforgettable experience.",
    categories: ["Culture", "Heritage", "Architecture", "Spiritual", "Nature", "Wellness"],
    duration: "15 Nights 16 Days",
    durationDays: 16,
    startingPrice: "Price on request",
    startingPriceNote: "Contact for quote",
    route: "Chennai → Mahabalipuram → Pondicherry → Tanjore → Chettinad → Madurai → Periyar → Alleppey → Mararikulam → Kochi",
    bestTime: "October – March",
    overview: [
      "Discover the timeless charm of South India on a captivating journey through vibrant cities and cultural treasures — from the heritage streets of Chennai and the ancient shore temples of Mahabalipuram to the French elegance of Pondicherry and the majestic temples of Tanjore and Chidambaram.",
      "Experience the rich heritage of Chettinad, the spiritual aura of Madurai, the lush wildlife of Periyar, and unwind amidst the serene backwaters of Alleppey and Mararikulam before concluding in the charming coastal city of Kochi.",
    ],
    summary: [
      "Heritage walk of the French town & White town, Pondicherry",
      "Artisans village tour in Chettinad",
      "Night ceremony at the Meenakshi Temple",
      "Spice Plantation Tour, Periyar",
    ],
    summaryRight: [
      "Boat cruise on Lake Periyar in the national park, Periyar",
      "Overnight Houseboat experience in the backwaters, Alleppey",
      "Kathakali Dance Performance at a local theatre, Kochi",
    ],
    days: [
      { day: 1,  title: "Arrive Chennai",                         description: "Upon arrival in Chennai, you'll meet our representative who will assist you at the airport. Later, you will transfer to and check-in at the hotel. Remainder of the day is at leisure.", overnight: "Chennai", image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/day-1.jpg" },
      { day: 2,  title: "Chennai → Mahabalipuram",                description: "After breakfast, drive to Mahabalipuram, the ancient Pallava seaport whose sea-weathered, rock-hewn monuments bear testimony to the magnificence of Dravidian art. Begin at Arjuna's Penance, a vast bas-relief depicting the descent of the Ganges amid gods, animals and fables from the Panchatantra. Continue to the UNESCO-listed Five Rathas, each shrine carved from a single granite outcrop and named for the heroes of the Mahabharata, and finish at the glorious 7th-century Shore Temple, standing on the very edge of the sea. Overnight in Mahabalipuram.", overnight: "Mahabalipuram", meals: ["breakfast"], image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/day-2.jpg" },
      { day: 3,  title: "Mahabalipuram → Pondicherry",            description: "After breakfast, drive to Pondicherry and check in at the hotel. A French colonial settlement until 1954, the town preserves its Gallic soul in the French Quarter — tree-lined boulevards, mustard-coloured villas and chic boutiques beside a seaside promenade on the Bay of Bengal. Walk through the French and White Towns from Baker Street towards the Alliance Française, stopping on Rue Dumas at the Cluny Embroidery Centre, where local women create exquisite hand-embroidered furnishings in a graceful colonial building.", overnight: "Pondicherry", meals: ["breakfast"], image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/day-3.jpg" },
      { day: 4,  title: "Pondicherry",                            description: "After breakfast, visit Auroville, founded in 1968 — an experimental township where people of all nationalities live in peace and progressive harmony. Roam around the complex, understand the culture and way of life here. Later, walk through the local markets / beach side.", overnight: "Pondicherry", meals: ["breakfast"], image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/day-4.jpg" },
      { day: 5,  title: "Pondicherry → Chidambaram → Darasuram → Tanjore", description: "Post breakfast, depart for Tanjore enroute visiting Chidambaram, where we will visit a remarkable sacred complex characteristic of Dravidian India: the Nataraja Temple where Shiva is worshipped in the form of the dancing god. Visit Darasuram, a small town whose temple is a superb example of Chola architecture with its columns decorated with miniature sculptures. Reach Tanjore and check-in at the hotel. Later, visit the Brihadeeshwara Temple and the Palace, which has a very interesting gallery of ancient bronzes.", overnight: "Tanjore", meals: ["breakfast"], image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/day-5.jpg" },
      { day: 6,  title: "Tanjore → Chettinad",                    description: "After breakfast, drive to Chettinad and check in at the hotel. This region was home to the Chettiars, a community of prosperous merchants who built extraordinary mansions in their own distinctive style, and its craft traditions remain alive across 74 villages — forgotten hamlets, romantic palaces, sacred woods lined with terracotta horses, and workshops of wood-carvers and weavers. In the evening, explore the charming town of Karaikudi, its artisan workshops for woodwork, silver and textiles, and its palace and museum.", overnight: "Chettinad", meals: ["breakfast"], image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/day-6.jpg" },
      { day: 7,  title: "Chettinad",                              description: "After breakfast, the day is at leisure to explore local villages and artisans.", overnight: "Chettinad", meals: ["breakfast"], image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/day-7.jpg" },
      { day: 8,  title: "Chettinad → Madurai",                    description: "After a leisurely breakfast, drive to Madurai and check in at the hotel; the rest of the day is at leisure. Set on the banks of the River Vaigai, this ancient capital of the Pandyan kings once traded with Greece and Rome and was the centre of Tamil poetry and literature. Today it is symbolised by the iconic Meenakshi Temple and its surrounding bazaars, alongside the noteworthy Thirumalai Nayak Palace and the Temple Tank, focus of Madurai's many festivals.", overnight: "Madurai", meals: ["breakfast"], image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/day-8.jpg" },
      { day: 9,  title: "Madurai",                                description: "After breakfast, visit the Thirumalai Nayak Palace, built in 1639 in a blend of Dravidian and Islamic styles, its great curved dome raised without girder or rafter. Pass the Mariamman Teppakulam tank, then visit the magnificent Meenakshi Temple, a superb example of Dravidian art whose towering gopurams, adorned with colourful stucco gods, dominate the skyline. In the evening, attend the temple's nightly ceremony, when the bronze image of Shiva is carried in procession to the chamber of his consort, accompanied by prayer and temple music.", overnight: "Madurai", meals: ["breakfast"], image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/day-9.jpg" },
      { day: 10, title: "Madurai → Periyar",                      description: "After breakfast, drive to Periyar (also known as Thekkady) — one of the world's most fascinating wildlife reserves. The Periyar wildlife sanctuary in Thekkady is spread across 777 sq km of which 360 sq km is thick evergreen forest. Noted for its geomorphology, diversity of wildlife and scenic beauty, the sanctuary was declared a Tiger Reserve in 1978. Enjoy a guided Spice Plantation Tour to the nearby garden where various species of spices and other aromatic plants are cultivated.", overnight: "Periyar", meals: ["breakfast"], image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/day-10.jpg" },
      { day: 11, title: "Periyar",                                description: "After breakfast, enjoy a boat cruise on Lake Periyar in the national park, known for its herds of wild elephants, bison, deer, and spectacular birds. The afternoon is free.", overnight: "Periyar", meals: ["breakfast"], image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/day-11.jpg" },
      { day: 12, title: "Periyar → Alleppey",                     description: "Post breakfast, travel to the backwaters at Alleppey and embark on a houseboat — your floating hotel for the next 24 hours, with lunch served on board. Drift past the life of the canals: cargo boats laden with green mounds of coconuts, single sails stitched from old sacks, school children on the banks and villages strung along the water. With a crew of four — guide, cooks and boatmen — it is a languid, effortlessly unwinding cruise through Kerala's loveliest countryside.", overnight: "Houseboat / Alleppey", meals: ["breakfast", "lunch", "dinner"], image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/day-12.jpg" },
      { day: 13, title: "Alleppey → Mararikulam",                 description: "After breakfast, drive to Mararikulam and check-in at the hotel. Relax at the hotel / beach.", overnight: "Mararikulam", meals: ["breakfast"], image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/day-13.jpg" },
      { day: 14, title: "Mararikulam",                            description: "After breakfast, the day is at leisure to relax at the hotel / beach.", overnight: "Mararikulam", meals: ["breakfast"], image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/day-14.jpg" },
      { day: 15, title: "Mararikulam → Kochi",                    description: "Morning drive to Kochi. Visit the Mattancherry Dutch Palace (closed Fridays), built by the Portuguese in 1555, where 17th-century murals depict the Ramayana in vivid colour; the Paradesi Synagogue in Jew Town (closed Fridays and Saturdays), a reminder of Kerala's ancient Jewish trade; and St. Francis Church, the oldest European church in India. In the evening, see the iconic Chinese Fishing Nets at Fort Cochin, then enjoy a Kathakali performance — classical stories told through elaborate costume and expressive gesture. Overnight in Kochi.", overnight: "Kochi", meals: ["breakfast"], image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/day-15.jpg" },
      { day: 16, title: "Depart Kochi",                           description: "After breakfast, transfer to airport for onward flight. End of Tour.", overnight: "—", meals: ["breakfast"], image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/day-16.jpg" },
    ],
    inclusions: [
      "Accommodation in 01 Double Room at the above-mentioned hotels or similar",
      "Meals as mentioned above",
      "All transfers and sightseeing by AC Toyota Crysta Car as per the program",
      "Prevailing Monument Entrance Fees",
      "Services of Local English / French Speaking Guide on sightseeing tours (different guides in each city)",
      "Evening Sunset Ceremony at Meenakshi Temple in Madurai",
      "Spice Plantation Tour in Periyar",
      "Common Boat Cruise on Lake Periyar",
      "Kathakali Dance Performance at a local theatre in Kochi",
      "Wi-fi access in the vehicle during traveling",
      "Unlimited drinking bottled water in the vehicle during traveling",
      "GST (Goods & Services Tax) as applicable",
    ],
    exclusions: [
      "Any domestic / international airfare",
      "Personal expenses (tips, laundry, beverages, telephone calls)",
      "Expenses caused by factors beyond control (flight cancellation, roadblocks, vehicle malfunction)",
      "Medical or evacuation insurance",
      "Travel insurance",
    ],
    datesPrices: [
      "Enchanting South India — Tamil Nadu & Kerala",
      "Price Validity OCT 2025 – MAR 2026",
      "Price on request — contact our travel desk for a tailored quote",
    ],
    notes: [
      "Blackout Period: Dec 20 – Jan 10 (not available)",
      "Festival Premium: Extra charges during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
      "Mattancherry Palace, Jewish Synagogue closed on Fridays, Saturdays, and Jewish holidays",
    ],
    // NOTE: source doc's Signature Experience block was a template-copy of NE
    // India content (Botanical Garden, Tram Ride, etc) — not relevant to this
    // South-India itinerary. Left empty pending real entries from the user.
    signatureExperiences: [],
    // Images: local Pexels + Wikimedia Commons (premium, free-license) — see SOURCES.md in the image folder
    heroImage: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/main-bg.jpg",
    overviewImage: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/overview.jpg",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/north-east/map.svg",
    coordinates: ITINERARY_MAP_ROUTES["enchanting-south-india-tamilnadu-kerala"],
    // Hotel images are representative luxury/heritage stand-ins — see SOURCES.md
    suggestedHotels: [
      { name: "Radisson Temple Bay", city: "Mahabalipuram", image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/hotels/radisson-temple-bay.jpg" },
      { name: "Villa Shanti",        city: "Pondicherry",   image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/hotels/villa-shanti-pondicherry.jpg" },
      { name: "Cardamom County",     city: "Periyar",       image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/hotels/cardamom-county-periyar.jpg" },
      { name: "Brunton Boatyard",    city: "Kochi",         image: "/images/itineraries/enchanting-south-india-tamilnadu-kerala/hotels/brunton-boatyard-kochi.jpg" },
    ],
  },

  // ==========================================================================
  // 15. INDIA'S NATURAL & HISTORICAL TREASURES — 15 Days
  // Combines Central India wildlife (Tadoba, Pench) with Golden Triangle +
  // Ranthambore. Hero/overview placeholders from taj-and-tigers.
  // ==========================================================================
  {
    slug: "indias-natural-and-historical-treasures",
    title: "India's Natural & Historical Treasures",
    subtitle: "Experience the magic of India through exciting jungle safaris, colorful royal cities, historic forts, and the timeless beauty of the Taj Mahal.",
    categories: ["Wildlife", "Heritage", "Culture", "Adventure"],
    duration: "14 Nights 15 Days",
    durationDays: 15,
    startingPrice: "Price on request",
    startingPriceNote: "Contact for quote",
    route: "Delhi → Tadoba → Pench → Delhi → Jaipur → Ranthambore → Agra → Delhi",
    bestTime: "October – March",
    overview: [
      "Travel through the vibrant heart of India, where ancient cities, royal palaces, and tiger-filled jungles come together to create a journey rich in culture, history, and unforgettable wildlife encounters.",
      "From sunrise safaris in Tadoba and Pench to exploring Jaipur's regal heritage and Agra's iconic wonders, every moment offers a deeper connection to India's wild and timeless spirit.",
    ],
    summary: [
      "In Delhi, explore India's vibrant capital, blending historic monuments with modern city life",
      "Jungle safaris in Tadoba Tiger Reserve, tracking tigers, leopards, and diverse wildlife in dense forests",
      "Game drives in Pench National Park, the inspiration behind 'The Jungle Book,' rich with scenic landscapes",
    ],
    summaryRight: [
      "Thrilling safaris in Ranthambore National Park, known for its royal Bengal tigers and ancient fort backdrop",
      "Discover Jaipur's royal heritage with visits to majestic forts, palaces, and colorful local bazaars",
      "Explore the timeless beauty of Agra, including the iconic Taj Mahal and Mughal-era monuments",
    ],
    days: [
      { day: 1,  title: "Arrive Delhi",                description: "Upon arrival in Delhi, meet Liberty representative at the airport and transfer to the hotel for an overnight stay. Overnight in Delhi.", overnight: "Delhi", image: "/images/itineraries/indias-natural-and-historical-treasures/day-1.jpg" },
      { day: 2,  title: "Delhi",                       description: "Start the day with a morning visit to Old Delhi, including a bicycle rickshaw ride through the bustling streets and a visit to the famous spice market. In the afternoon, take a panoramic drive through Lutyens' Delhi, admiring colonial-era architecture. In the afternoon, lunch at Haveli Dharampura. Dinner and overnight stay at the hotel.", overnight: "Delhi", meals: ["breakfast", "lunch", "dinner"], image: "/images/itineraries/indias-natural-and-historical-treasures/day-2.jpg" },
      { day: 3,  title: "Delhi",                       description: "Visit Humayun's Tomb and the newly opened underground museum, serene Sunder Nursery, and the iconic Qutub Minar. Enjoy an optional visit to Nizamuddin Dargah or go shopping. The rest of the day is free for leisure. Dinner and overnight stay in Delhi.", overnight: "Delhi", meals: ["breakfast", "dinner"], image: "/images/itineraries/indias-natural-and-historical-treasures/day-3.jpg" },
      { day: 4,  title: "Delhi → Tadoba",              description: "Take an early morning flight to Nagpur. Drive to Tadoba. Check into the hotel, have lunch, and enjoy an afternoon Jeep Safari at Tadoba Tiger Reserve. Dinner and overnight stay at the hotel.", overnight: "Tadoba", meals: ["breakfast", "lunch", "dinner"], image: "/images/itineraries/indias-natural-and-historical-treasures/day-4.jpg" },
      { day: 5,  title: "Tadoba",                      description: "Start with a morning Jeep Safari at Tadoba Tiger Reserve. After breakfast, relax at the hotel. Enjoy lunch and head for another Jeep Safari in the afternoon. Dinner and overnight stay at the hotel.", overnight: "Tadoba", meals: ["breakfast", "lunch", "dinner"], image: "/images/itineraries/indias-natural-and-historical-treasures/day-5.jpg" },
      { day: 6,  title: "Tadoba → Pench",              description: "After breakfast, depart Tadoba for a scenic drive to Pench. Check into the hotel and have lunch. In the afternoon, embark on a Jeep Safari in Pench. Dinner and overnight stay at the hotel.", overnight: "Pench", meals: ["breakfast", "lunch", "dinner"], image: "/images/itineraries/indias-natural-and-historical-treasures/day-6.jpg" },
      { day: 7,  title: "Pench",                       description: "Enjoy a morning Jeep Safari in Pench National Park, followed by breakfast, relaxation, lunch, and an afternoon Jeep Safari. End the day with dinner and an overnight stay.", overnight: "Pench", meals: ["breakfast", "lunch", "dinner"], image: "/images/itineraries/indias-natural-and-historical-treasures/day-7.jpg" },
      { day: 8,  title: "Pench → Delhi",               description: "Begin the day with a morning Jeep Safari in Pench, then breakfast, check-out, lunch, and transfer to Nagpur for a flight to Delhi. Overnight stay at the hotel.", overnight: "Delhi", meals: ["breakfast", "lunch"], image: "/images/itineraries/indias-natural-and-historical-treasures/day-8.jpg" },
      { day: 9,  title: "Delhi → Jaipur",              description: "Following breakfast, depart for Jaipur. Check into the hotel, followed by afternoon visits to City Palace and Jantar Mantar. Overnight stay at the hotel.", overnight: "Jaipur", meals: ["breakfast"], image: "/images/itineraries/indias-natural-and-historical-treasures/day-9.jpg" },
      { day: 10, title: "Jaipur",                      description: "Start the day with a morning safari at Jhalana, then visit Amer Fort and Hawa Mahal. Enjoy an afternoon Jeep Safari at Jhalana Leopard Safari Park. Overnight stay at the hotel.", overnight: "Jaipur", meals: ["breakfast"], image: "/images/itineraries/indias-natural-and-historical-treasures/day-10.jpg" },
      { day: 11, title: "Jaipur → Ranthambore",        description: "After an early breakfast, drive to Ranthambore. After lunch, go on an afternoon Jeep Safari in Ranthambore National Park. Dinner and overnight stay at the hotel.", overnight: "Ranthambore", meals: ["breakfast", "lunch", "dinner"], image: "/images/itineraries/indias-natural-and-historical-treasures/day-11.jpg" },
      { day: 12, title: "Ranthambore",                 description: "Start the day with a morning Jeep Safari in Ranthambore. Return for breakfast and relax at the hotel. After lunch, go for another Jeep Safari. Dinner and overnight stay at the hotel.", overnight: "Ranthambore", meals: ["breakfast", "lunch", "dinner"], image: "/images/itineraries/indias-natural-and-historical-treasures/day-12.jpg" },
      { day: 13, title: "Ranthambore → Agra",          description: "After breakfast, take a train from Sawai Madhopur to Bharatpur. Drive to Agra, stopping at Fatehpur Sikri en route. On arrival, check into the hotel and visit Agra Fort. Overnight stay at the hotel.", overnight: "Agra", meals: ["breakfast"], image: "/images/itineraries/indias-natural-and-historical-treasures/day-13.jpg" },
      { day: 14, title: "Agra → Delhi",                description: "Start the day with a sunrise visit to the Taj Mahal, return for breakfast, and later drive to Delhi. Dinner and overnight stay in Delhi.", overnight: "Delhi", meals: ["breakfast", "dinner"], image: "/images/itineraries/indias-natural-and-historical-treasures/day-14.jpg" },
      { day: 15, title: "Departure Delhi",             description: "Conclude your journey with a late-night transfer to the airport for your flight home, taking unforgettable memories with you.", overnight: "—", meals: ["breakfast"], image: "/images/itineraries/indias-natural-and-historical-treasures/day-15.jpg" },
    ],
    inclusions: [
      "Accommodation on Twin/Double sharing room at the above-mentioned hotels or similar",
      "Daily breakfast at mentioned hotels. Tadoba, Pench and Ranthambore include all meals",
      "01 dinner at the hotel in Delhi",
      "All transfers and sightseeing by AC Vehicle as per the program",
      "Ascend to Amer Fort by Jeep in Jaipur",
      "English Speaking local Guides for visits as per the program",
      "01 Lunch at Hotel Haveli Dharampura Delhi",
      "01 Bicycle Rickshaw ride during Old Delhi tour",
      "03 Exclusive Jeep Safari at Tadoba National Park",
      "04 Exclusive Jeep Safari at Pench National Park",
      "02 Exclusive Jeep Safari at Jhalana Leopard Safari Park",
      "03 Exclusive Jeep Safari at Ranthambore National Park",
      "Entrance fees to the monuments as per the program",
      "GST (Goods & Services Tax) as applicable",
    ],
    exclusions: [
      "Domestic and international airfare",
      "Personal expenses (room heater, laundry, etc.)",
      "Medical expenses",
      "Expenses caused by factors beyond control",
      "Christmas / New Year season surcharge (23 Dec – 5 Jan)",
      "Anything not explicitly mentioned in inclusions",
    ],
    datesPrices: [
      "India's Natural & Historical Treasures",
      "Price Validity OCT 2026 – MAR 2027",
      "Price on request — contact our travel desk for a tailored quote",
    ],
    notes: [
      "Blackout Period: Dec 23 – Jan 5 (not available)",
      "Festival Premium: Extra charges during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
      "National parks closed for visitors on Wednesday afternoons; mobile smartphones not allowed inside parks",
    ],
    signatureExperiences: [
      { category: "Culture & History", title: "Art Walk in Delhi", image: "/images/itineraries/indias-natural-and-historical-treasures/signature/art-walk.jpg" },
      { category: "Adventure",         title: "Cycling to Rukhad in Pench", image: "/images/itineraries/indias-natural-and-historical-treasures/signature/cycling-pench.jpg" },
      { category: "Culture & History", title: "Yoga by Taj in Agra", image: "/images/itineraries/indias-natural-and-historical-treasures/signature/yoga-taj.jpg" },
      { category: "Adventure",         title: "Boatride in Lrai Lake in Tadoba", image: "/images/itineraries/indias-natural-and-historical-treasures/signature/boat-tadoba.jpg" },
      { category: "Adventure",         title: "Hot Air Ballooning in Jaipur", image: "/images/itineraries/indias-natural-and-historical-treasures/signature/balloon-jaipur.jpg" },
      { category: "Culture & History", title: "Puppet Making in Jaipur", image: "/images/itineraries/indias-natural-and-historical-treasures/signature/puppets-jaipur.jpg" },
    ],
    // Images: local Pexels + Wikimedia Commons (premium, free-license) — see SOURCES.md in the image folder
    heroImage: "/images/itineraries/indias-natural-and-historical-treasures/main-bg.jpg",
    overviewImage: "/images/itineraries/indias-natural-and-historical-treasures/overview.jpg",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/north-east/map.svg",
    coordinates: ITINERARY_MAP_ROUTES["indias-natural-and-historical-treasures"],
    // Hotel images are representative luxury/heritage stand-ins — see SOURCES.md
    suggestedHotels: [
      { name: "The Claridges",      city: "Delhi",       image: "/images/itineraries/indias-natural-and-historical-treasures/hotels/claridges-delhi.jpg" },
      { name: "Jamtara Wilderness", city: "Pench",       image: "/images/itineraries/indias-natural-and-historical-treasures/hotels/jamtara-pench.jpg" },
      { name: "Samode Haveli",      city: "Jaipur",      image: "/images/itineraries/indias-natural-and-historical-treasures/hotels/samode-haveli-jaipur.jpg" },
      { name: "ITC Mughal",         city: "Agra",        image: "/images/itineraries/indias-natural-and-historical-treasures/hotels/itc-mughal-agra.jpg" },
    ],
  },

  // ==========================================================================
  // 16. ENCOUNTER WITH THE ROYAL BENGAL TIGER — 11 Days
  // Hero/overview placeholders from taj-and-tigers.
  // ==========================================================================
  {
    slug: "encounter-with-the-royal-bengal-tiger",
    title: "Encounter With The Royal Bengal Tiger",
    subtitle: "A memorable wildlife adventure across India's top national parks, featuring exciting safaris, rich forests, and close encounters with the Royal Bengal Tiger.",
    categories: ["Wildlife", "Adventure", "Nature"],
    duration: "10 Nights 11 Days",
    durationDays: 11,
    startingPrice: "Price on request",
    startingPriceNote: "Contact for quote",
    route: "Delhi → Bandhavgarh → Kanha → Pench → Tadoba → Delhi",
    bestTime: "October – March",
    overview: [
      "Discover the beauty of India's wildlife as you explore Bandhavgarh, Kanha, Pench, and Tadoba, starting from Delhi and travelling through stunning forests and rich natural landscapes.",
      "This itinerary offers exciting safaris, close wildlife encounters, and memorable moments in the wild, making it perfect for nature lovers and adventure seekers alike.",
    ],
    summary: [
      "Journey through India's top tiger reserves starting from the vibrant city of Delhi",
      "Morning and evening jungle safaris in Bandhavgarh, Kanha, Pench, and Tadoba",
      "Close encounters with the majestic Royal Bengal Tiger in its natural habitat",
      "Experience the beauty of untouched forests, grasslands, and serene jungle landscapes",
    ],
    summaryRight: [
      "Opportunities to enjoy wildlife photography and birdwatching during safaris",
      "Relaxing stays at wildlife lodges located close to the national parks",
      "Enjoy scenic drives between destinations with changing natural landscapes throughout the journey",
      "An unforgettable wildlife adventure for nature lovers and safari enthusiasts",
    ],
    days: [
      { day: 1,  title: "Arrive Delhi",                                  description: "On arrival at Delhi International Airport, you'll meet our representative who will assist you and further accompany you to your hotel. Overnight in Delhi.", overnight: "Delhi", image: "/images/itineraries/encounter-with-the-royal-bengal-tiger/day-1.jpg" },
      { day: 2,  title: "Exploring Delhi",                               description: "Post breakfast, enjoy a fascinating exploration of Old Delhi. Drive past the Red Fort (closed Mondays), Shah Jahan's red-sandstone citadel, and the Jama Masjid, India's largest mosque, then take a memorable cycle-rickshaw ride through the winding lanes of Chandni Chowk. In New Delhi, drive past Rashtrapati Bhawan along the grand Rajpath to India Gate. Visit Humayun's Tomb, the first great example of Mughal architecture, built in 1565, and the 72-metre Qutab Minar with Delhi's famous un-corroded 4th-century Iron Pillar. Overnight in Delhi.", overnight: "Delhi", meals: ["breakfast"], image: "/images/itineraries/encounter-with-the-royal-bengal-tiger/day-2.jpg" },
      { day: 3,  title: "Delhi → Jabalpur (by flight) → Bandhavgarh",    description: "Post breakfast, transfer to airport for flight to Jabalpur. On arrival in Jabalpur, you'll be transferred to Bandhavgarh. Bandhavgarh National Park is spread at Vindhya hills in Madhya Pradesh. The park consists of a core area of 105 sq km and a buffer area of approximately 400 sq km. Its topography varies between steep ridges, undulating forest and open meadows. Bandhavgarh National Park is known for the Royal Bengal Tigers. The density of the tiger population at Bandhavgarh is the highest known in India. Overnight in Bandhavgarh.", overnight: "Bandhavgarh", meals: ["breakfast"], image: "/images/itineraries/encounter-with-the-royal-bengal-tiger/day-3.jpg" },
      { day: 4,  title: "Bandhavgarh",                                   description: "Enjoy early morning & afternoon Private Jeep Safari with English Speaking Naturalist at Bandhavgarh National Park. Overnight in Bandhavgarh.", overnight: "Bandhavgarh", meals: ["breakfast"], image: "/images/itineraries/encounter-with-the-royal-bengal-tiger/day-4.jpg" },
      { day: 5,  title: "Bandhavgarh → Kanha",                           description: "After breakfast, drive to Kanha and check in at the hotel; the rest of the day is at leisure. Nestled in the Maikal range of the Satpuras in Madhya Pradesh, Kanha is celebrated as one of the finest wildlife areas in the world. Declared a reserve forest in 1879 and a wildlife sanctuary in 1933, it became a national park in 1955 and today stands among India's most storied tiger reserves. Overnight in Kanha.", overnight: "Kanha", meals: ["breakfast"], image: "/images/itineraries/encounter-with-the-royal-bengal-tiger/day-5.jpg" },
      { day: 6,  title: "Kanha",                                         description: "Enjoy early morning & afternoon Private Jeep Safari with English Speaking Naturalist at Kanha National Park. Overnight in Kanha.", overnight: "Kanha", meals: ["breakfast"], image: "/images/itineraries/encounter-with-the-royal-bengal-tiger/day-6.jpg" },
      { day: 7,  title: "Kanha → Pench",                                 description: "After breakfast, drive to Pench and check in at the hotel; the rest of the day is at leisure. Named after the pristine River Pench that flows through it, the park famously inspired Rudyard Kipling's 'The Jungle Book', and wildlife lovers still come to seek out its characters — Akela the wolf, Baloo the sloth bear and Shere Khan, the Royal Bengal Tiger — amid some of central India's loveliest forest. Overnight in Pench.", overnight: "Pench", meals: ["breakfast"], image: "/images/itineraries/encounter-with-the-royal-bengal-tiger/day-7.jpg" },
      { day: 8,  title: "Pench",                                         description: "Enjoy early morning & afternoon Private Jeep Safari with English Speaking Naturalist at Pench National Park. Overnight in Pench.", overnight: "Pench", meals: ["breakfast"], image: "/images/itineraries/encounter-with-the-royal-bengal-tiger/day-8.jpg" },
      { day: 9,  title: "Pench → Tadoba",                                description: "After breakfast, drive to Tadoba and check in at the hotel; the rest of the day is at leisure. Maharashtra's oldest and largest national park, the Tadoba Andhari Tiger Reserve spans 1,727 sq km of forest about 150 km from Nagpur. Created in 1955 and joined with the Andhari Wildlife Sanctuary in 1995, it takes its name from the local deity Tadoba and the Andhari river that flows through it. Overnight in Tadoba.", overnight: "Tadoba", meals: ["breakfast"], image: "/images/itineraries/encounter-with-the-royal-bengal-tiger/day-9.jpg" },
      { day: 10, title: "Tadoba",                                        description: "Enjoy early morning & afternoon Private Jeep Safari with English Speaking Naturalist at Tadoba National Park. Overnight in Tadoba.", overnight: "Tadoba", meals: ["breakfast"], image: "/images/itineraries/encounter-with-the-royal-bengal-tiger/day-10.jpg" },
      { day: 11, title: "Tadoba → Nagpur → Delhi",                       description: "In time transfer to Nagpur airport (2.5 hrs drive) for flight to Delhi. On arrival in Delhi, connect your flight back home and tour terminates.", overnight: "—", meals: ["breakfast"], image: "/images/itineraries/encounter-with-the-royal-bengal-tiger/day-11.jpg" },
    ],
    inclusions: [
      "Accommodation in 01 Double Room at the above-mentioned hotels or similar",
      "Meals as mentioned above",
      "All transfers and sightseeing by AC Toyota Crysta Car as per the program",
      "Prevailing Monument Entrance Fees",
      "02 Private Jeep Safaris with English-Speaking Naturalist at Bandhavgarh National Park",
      "02 Private Jeep Safaris with English-Speaking Naturalist at Kanha National Park",
      "02 Private Jeep Safaris with English-Speaking Naturalist at Pench National Park",
      "02 Private Jeep Safaris with English-Speaking Naturalist at Tadoba National Park",
      "Services of Local English / French Speaking Guide on sightseeing tour in Delhi",
      "Cycle Rickshaw Ride in Old Delhi",
      "Wi-fi access in the vehicle during traveling",
      "Unlimited drinking bottled water in the vehicle during traveling",
      "GST (Goods & Services Tax) as applicable",
    ],
    exclusions: [
      "Any domestic / international airfare",
      "Personal expenses (tips, laundry, beverages, telephone calls)",
      "Expenses caused by factors beyond control",
      "Medical or evacuation insurance",
      "Travel insurance",
    ],
    datesPrices: [
      "Encounter With The Royal Bengal Tiger",
      "Price Validity OCT 2025 – MAR 2026",
      "Price on request — contact our travel desk for a tailored quote",
    ],
    notes: [
      "Blackout Period: Dec 23 – Jan 5 (not available)",
      "Festival Premium: Extra charges during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
      "Jeep Safari bookings open 120 days in advance, first-come-first-served",
      "Parks closed for visitors on Wednesday afternoons; mobile smartphones not allowed inside parks",
    ],
    signatureExperiences: [
      { category: "Culture & History", title: "Yoga Session at Sivananda Yoga Centre, Delhi", image: "/images/itineraries/encounter-with-the-royal-bengal-tiger/signature/yoga.jpg" },
      { category: "Culture & History", title: "Old Delhi Food & Heritage Walk", image: "/images/itineraries/encounter-with-the-royal-bengal-tiger/signature/old-delhi-food.jpg" },
      { category: "Culture & History", title: "Street Art Tour in Delhi Art District", image: "/images/itineraries/encounter-with-the-royal-bengal-tiger/signature/street-art.jpg" },
    ],
    // Images: local Pexels (premium, free-license) — see SOURCES.md in the image folder
    heroImage: "/images/itineraries/encounter-with-the-royal-bengal-tiger/main-bg.jpg",
    overviewImage: "/images/itineraries/encounter-with-the-royal-bengal-tiger/overview.jpg",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/north-east/map.svg",
    coordinates: ITINERARY_MAP_ROUTES["encounter-with-the-royal-bengal-tiger"],
    // Hotel images are representative luxury/lodge stand-ins — see SOURCES.md
    suggestedHotels: [
      { name: "The Claridges",      city: "Delhi",       image: "/images/itineraries/encounter-with-the-royal-bengal-tiger/hotels/claridges-delhi.jpg" },
      { name: "Brij Sone Bagh",     city: "Bandhavgarh", image: "/images/itineraries/encounter-with-the-royal-bengal-tiger/hotels/brij-bandhavgarh.jpg" },
      { name: "Outpost 12",         city: "Kanha",       image: "/images/itineraries/encounter-with-the-royal-bengal-tiger/hotels/outpost-kanha.jpg" },
      { name: "Waghoba Eco Retreat", city: "Tadoba",      image: "/images/itineraries/encounter-with-the-royal-bengal-tiger/hotels/waghoba-tadoba.jpg" },
    ],
  },

  // ==========================================================================
  // 17. SOUTHERN SPLENDOUR — 14 Days
  // Karnataka + Goa circuit. Distinct from `gems-of-south-india` (12 days,
  // covers similar territory but without Kabini/Coorg). All images web-sourced
  // (Wikimedia Commons), stored locally — see SOURCES.md in the image folder.
  // ==========================================================================
  {
    slug: "southern-splendour",
    title: "Southern Splendour",
    subtitle: "Discover the soul of South India through royal palaces, wildlife forests, coffee estates, ancient wonders, and relaxing beaches.",
    categories: ["Heritage", "Culture", "Nature", "Wildlife"],
    duration: "13 Nights 14 Days",
    durationDays: 14,
    startingPrice: "Price on request",
    startingPriceNote: "Contact for quote",
    route: "Bengaluru → Mysore → Kabini → Coorg → Hassan → Chikmagalur → Hampi → Aihole → Goa",
    bestTime: "October – March",
    overview: [
      "Experience the diverse beauty of South India. This journey covers vibrant cities, peaceful forests, historic temples, scenic hill stations, and stunning coastal escapes across Karnataka and Goa.",
      "From the misty hills of Coorg and Chikmagalur to the timeless ruins of Hampi and relaxing beaches of Goa, every destination offers its own unique charm and cultural richness.",
    ],
    summary: [
      "Admire the regal charm of Mysore with palace visits, vibrant markets, and cultural experiences",
      "Experience thrilling wildlife safaris in Kabini, surrounded by serene forests and rich natural beauty",
      "Spend time amidst the misty coffee estates and green hills of beautiful Coorg",
      "Explore Hassan's architectural treasures, known for their detailed craftsmanship and rich history",
    ],
    summaryRight: [
      "Relax in the cool climate and scenic surroundings of Chikmagalur's rolling hills and plantations",
      "Step back in time while exploring Hampi's majestic ruins, temples, and royal heritage sites",
      "Discover the ancient temple town of Aihole, often called the birthplace of temple architecture in India",
      "End the journey in Goa with relaxing beach days, charming cafes, and stunning coastal sunsets",
    ],
    days: [
      { day: 1,  title: "Arrive Bengaluru → Mysore",              description: "On arrival at Bengaluru International Airport, you'll meet our representative who will assist you and later drive to Mysore. Check-in & rest of the day at hotel. Overnight in Mysore.", overnight: "Mysore", image: "/images/itineraries/southern-splendour/day-1.jpg" },
      { day: 2,  title: "Mysore",                                 description: "After breakfast, visit Somnathpur, home to the famous Chennakeshava Temple built by the Hoysala commander Somnath in 1268 AD — a soapstone masterpiece of Hoysala art. In the evening, visit Brindavan Gardens, among the finest terrace gardens in the world. Conceived by Sir Mirza Ismail, then Diwan of Mysore, it enchants with its symmetric design, illuminated fountains and botanical park — a fitting end to the day. Overnight in Mysore.", overnight: "Mysore", meals: ["breakfast"], image: "/images/itineraries/southern-splendour/day-2.jpg" },
      { day: 3,  title: "Mysore → Kabini",                        description: "After breakfast, visit the Maharaja's Palace, a sumptuous blend of Hindu and Muslim styles rich with gateways, domes, turrets and colonnades. Drive up Chamundi Hill to its ancient temple and the 16-foot Nandi carved from a single boulder, with sweeping panoramas over Mysore. Later, drive to the Kabini reservoir (about five hours), adjoining Nagarhole National Park — the Kabini Wildlife Sanctuary is among South India's finest, its forests, lakes and streams sheltering a wealth of wildlife. Overnight in Kabini.", overnight: "Kabini", meals: ["breakfast"], image: "/images/itineraries/southern-splendour/day-3.jpg" },
      { day: 4,  title: "Kabini",                                 description: "Early in the morning, enjoy Jeep Safari with a naturalist guide in the footsteps of the park's fauna: tigers, elephants, gaurs (Indian bison), leopards, fallow deer and a wide variety of birds. Boat trip on the calm waters of the Kabini River — the opportunity to observe wildlife, many birds, perhaps also large mammals coming to drink (elephants, bison, deer etc.). Overnight in Kabini.", overnight: "Kabini", meals: ["breakfast"], image: "/images/itineraries/southern-splendour/day-4.jpg" },
      { day: 5,  title: "Kabini → Coorg",                         description: "After breakfast, depart for Coorg (approx. 03 hrs drive). Arrival in the town of Madikeri, perched at an altitude of 1,500 m, capital of the Coorg region and whose landscapes are among the most beautiful in South India. Afternoon of relaxation and walking in the middle of lush nature and coffee and pepper plantation. The rest of the day is at leisure. Overnight in Coorg.", overnight: "Coorg", meals: ["breakfast"], image: "/images/itineraries/southern-splendour/day-5.jpg" },
      { day: 6,  title: "Coorg → Shravanabelagola → Hassan",      description: "After breakfast, drive to Hassan visiting Shravanabelagola, a major Jain pilgrimage site in Karnataka, and the colossal and monolithic statue of Bahubali, a saint of Jain mythology, dating from the tenth century. Overnight in Hassan.", overnight: "Hassan", meals: ["breakfast"], image: "/images/itineraries/southern-splendour/day-6.jpg" },
      { day: 7,  title: "Hassan → Belur & Halebid → Chikmagalur", description: "After breakfast, drive to Chikmagalur, en route visiting Belur and Halebid. Belur flourished 800 years ago under the Hoysala kings, and its Chennakeswara Temple is breathtaking — stone walls covered in a profusion of intricate carvings; legend has it that conquerors who came to raze it were left overawed by its magnificence. Halebid's double-shrine temple, built a decade later, seems created from lace rather than stone, its friezes alive with mythological episodes. Reach Chikmagalur and check in. Overnight in Chikmagalur.", overnight: "Chikmagalur", meals: ["breakfast"], image: "/images/itineraries/southern-splendour/day-7.jpg" },
      { day: 8,  title: "Chikmagalur → Hampi",                    description: "After breakfast, depart for Hampi, en route visiting Chitradurga Fort — Elusuttina Kote, 'the fort of seven circles' — one of the country's strongest hill forts. Its soaring ramparts are hewn from the living rock of a craggy landscape, with zigzag pathways designed to slow invaders, gateways once bristling with iron spikes against war elephants, and dozens of postern gates and secret entrances. Upon arrival in Hampi, check in at the hotel. Overnight in Hampi.", overnight: "Hampi", meals: ["breakfast"], image: "/images/itineraries/southern-splendour/day-8.jpg" },
      { day: 9,  title: "Hampi",                                  description: "After breakfast, visit the 15th-century Vijaya Vittala Temple, the grandest of Hampi's monuments, where the extraordinary stone chariot and 56 musical pillars — each sounding a different note when tapped — embody the city's bewitching architecture. Continue to the Virupaksha Temple, believed to be India's oldest functioning temple, a 7th-century shrine still drawing pilgrims through its soaring gateway towers. Later, explore the Vijayanagar Ruins, spread over nearly 26 sq km of temples, pavilions, baths and palaces. Overnight in Hampi.", overnight: "Hampi", meals: ["breakfast"], image: "/images/itineraries/southern-splendour/day-9.jpg" },
      { day: 10, title: "Hampi → Badami → Pattadakal → Aihole",   description: "After breakfast, drive to Aihole, visiting Badami and Pattadakal en route. At Badami, explore the rock-cut cave temples magnificently sculpted in honour of Vishnu, set in a crown of hills above the Bhutanath Tank. At Pattadakal, coronation site of the Chalukyan kings, ten temples blend north Indian and Dravidian styles, carved with scenes from the Ramayana and Mahabharata. End at Aihole, the cradle of Hindu temple architecture, with more than seventy temples including the remarkable Durga Temple. Overnight in Aihole.", overnight: "Aihole", meals: ["breakfast"], image: "/images/itineraries/southern-splendour/day-10.jpg" },
      { day: 11, title: "Aihole → Goa",                           description: "Post breakfast, drive to Goa. Upon arrival at Goa, check-in at your hotel. Overnight in Goa.", overnight: "Goa", meals: ["breakfast"], image: "/images/itineraries/southern-splendour/day-11.jpg" },
      { day: 12, title: "Goa",                                    description: "Post breakfast, discover Old Goa. Visit the Basilica of Bom Jesus, holding the tomb and relics of Saint Francis Xavier, apostle of Portugal's eastern colonies; the convent and church of St Francis of Assisi, with magnificent gilded woodcarving and a floor of emblazoned tombstones; the ruins of the 17th-century church of St Augustine; the church of San Cajetan, modelled on St Peter's in Rome; and the church and convent of Santa Monica, once a royal monastery. Overnight in Goa.", overnight: "Goa", meals: ["breakfast"], image: "/images/itineraries/southern-splendour/day-12.jpg" },
      { day: 13, title: "Goa",                                    description: "After breakfast, full day at leisure / you may relax on the beach. Overnight in Goa.", overnight: "Goa", meals: ["breakfast"], image: "/images/itineraries/southern-splendour/day-13.jpg" },
      { day: 14, title: "Depart Goa",                             description: "In time transfer to Goa airport to board your onward flight.", overnight: "—", meals: ["breakfast"], image: "/images/itineraries/southern-splendour/day-14.jpg" },
    ],
    inclusions: [
      "Accommodation in 01 Double Room at the above-mentioned hotels or similar",
      "Meals as mentioned above",
      "All transfers and sightseeing by AC Toyota Crysta Car as per the program",
      "Prevailing Monument Entrance Fees",
      "Services of Local English / French Speaking Guide on sightseeing tours (different guides in each city)",
      "01 Shared Jeep / Canter Safari in Kabini",
      "01 Shared Boat Safari in Kabini",
      "Wi-fi access in the vehicle during traveling",
      "Unlimited drinking bottled water in the vehicle during traveling",
      "GST (Goods & Services Tax) as applicable",
    ],
    exclusions: [
      "Any domestic / international airfare",
      "Personal expenses (tips, laundry, beverages, telephone calls)",
      "Expenses caused by factors beyond control",
      "Medical or evacuation insurance",
      "Travel insurance",
    ],
    datesPrices: [
      "Southern Splendour",
      "Price Validity OCT 2025 – MAR 2026",
      "Price on request — contact our travel desk for a tailored quote",
    ],
    notes: [
      "Blackout Period: Dec 23 – Jan 5 (not available)",
      "Festival Premium: Extra charges during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
    ],
    signatureExperiences: [
      { category: "Culture & History", title: "The Royal Walk, Mysore",                              image: "/images/itineraries/southern-splendour/signature/royal-walk-mysore.jpg" },
      { category: "Culture & History", title: "The Silk Tour, Mysore",                               image: "/images/itineraries/southern-splendour/signature/mysore-silk.jpg" },
      { category: "Culture & History", title: "Heritage Walking Tour of Fontainhas & Sao Tome, Goa", image: "/images/itineraries/southern-splendour/signature/fontainhas-goa.jpg" },
    ],
    // IMAGES (2026-05-29): all containers web-sourced from Wikimedia Commons (free
    // licenses), stored LOCALLY under /images/itineraries/southern-splendour/. Client
    // hadn't uploaded to ImageKit; see that folder's SOURCES.md for attribution.
    // mapImage unused by the template. Swap to ImageKit + official hotel photos later.
    heroImage: "/images/itineraries/southern-splendour/main-bg.jpg",
    overviewImage: "/images/itineraries/southern-splendour/overview.jpg",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/map.svg",
    coordinates: ITINERARY_MAP_ROUTES["southern-splendour"],
    // Hotel images are REPRESENTATIVE web-sourced stand-ins (exact properties not free-licensed) — see SOURCES.md.
    suggestedHotels: [
      { name: "Royal Orchid Metropole", city: "Mysore", image: "/images/itineraries/southern-splendour/hotels/royal-orchid-metropole.jpg" },
      { name: "Kaav Safari Lodge",      city: "Kabini", image: "/images/itineraries/southern-splendour/hotels/kaav-safari-lodge.jpg" },
      { name: "Heritage Resort",        city: "Hampi",  image: "/images/itineraries/southern-splendour/hotels/heritage-resort-hampi.jpg" },
      { name: "Taj Holiday Village",    city: "Goa",    image: "/images/itineraries/southern-splendour/hotels/taj-holiday-village-goa.jpg" },
    ],
  },

  // ==========================================================================
  // 18. FOOTSTEPS OF LORD BUDDHA — 15 Days
  // NOTE: doc Hero route omits Vaishali, Patna, and the Delhi return; Summary
  // Strip includes them. Using Summary Strip route + day-by-day stops.
  // Hero/overview placeholders from classical-golden-triangle (closest
  // northern-circuit placeholder available).
  // ==========================================================================
  {
    slug: "footsteps-of-lord-buddha",
    title: "On the Footsteps of Lord Buddha",
    subtitle: "India offers a soulful journey through sacred sites, ancient monasteries, and spiritual landmarks associated with the life and teachings of Lord Buddha.",
    categories: ["Spiritual", "Culture", "Heritage"],
    duration: "14 Nights 15 Days",
    durationDays: 15,
    startingPrice: "Price on request",
    startingPriceNote: "Contact for quote",
    route: "Delhi → Lucknow → Sravasti → Lumbini → Kushinagar → Vaishali → Patna → Rajgir → Nalanda → Bodhgaya → Varanasi → Delhi",
    bestTime: "October – May",
    overview: [
      "The Buddhist Circuit Tour in India takes you on a spiritual journey through some of the country's most sacred places linked to Gautama Buddha's life and teachings. You'll visit important sites like Bodh Gaya, where Buddha reached enlightenment, Sarnath, where he gave his first sermon, and Kushinagar, where he passed away.",
      "This tour gives you a closer look at Buddhist heritage, culture, and philosophy. People from all over the world join this pilgrimage to find peace, spiritual growth, and a deeper connection to Buddhism's lasting legacy.",
    ],
    summary: [
      "Enjoy Cycle Rickshaw ride in the narrow alleys of Old Delhi",
      "Boatride on River Ganges, Varanasi",
      "Yoga & Meditation session in Sarnath, Varanasi",
    ],
    summaryRight: [],
    days: [
      { day: 1,  title: "Arrive Delhi",                               description: "On arrival at Delhi International Airport, you'll meet our representative who will assist you and further accompany you to your hotel.", overnight: "Delhi", image: "/images/itineraries/footsteps-of-lord-buddha/day-1.jpg" },
      { day: 2,  title: "Delhi",                                      description: "Post breakfast, enjoy a fascinating exploration of Old Delhi. Drive past the Red Fort (closed Mondays), Shah Jahan's red-sandstone citadel, and the Jama Masjid, India's largest mosque, then take a memorable cycle-rickshaw ride through the winding lanes of Chandni Chowk. In New Delhi, drive past Rashtrapati Bhawan along the grand Rajpath to India Gate. Visit Humayun's Tomb, the first great example of Mughal architecture, built in 1565, and the 72-metre Qutab Minar with Delhi's famous un-corroded 4th-century Iron Pillar.", overnight: "Delhi", meals: ["breakfast"], image: "/images/itineraries/footsteps-of-lord-buddha/day-2.jpg" },
      { day: 3,  title: "Delhi → Lucknow",                            description: "Post breakfast, transfer to airport for flight to Lucknow. On arrival in Lucknow, transfer to the hotel. Lucknow, also known as the City of Nawabs, is the capital and the largest city of the Indian state of Uttar Pradesh. It serves as the administrative headquarters of the district and division and continues to be an important centre of governance, commerce, culture, and tourism. It is renowned for its music, poetry, and traditional dance forms and has a rich literary heritage and has produced famous poets and writers. Rest the day at leisure.", overnight: "Lucknow", meals: ["breakfast"], image: "/images/itineraries/footsteps-of-lord-buddha/day-3.jpg" },
      { day: 4,  title: "Lucknow",                                    description: "After breakfast, enjoy a guided tour of Lucknow. Begin at the imposing Bara Imambara, the world's largest Shia congregational hall, famous for its labyrinthine Bhul Bhulaiya maze, and continue to the Chota Imambara with its ornate chandeliers and fine silver work. Pause for a traditional Awadhi lunch (on own) of Lucknowi kebabs and fragrant biryanis, then visit the evocative British Residency and the majestic 18th-century Rumi Darwaza. End among the celebrated Chikankari embroidery stalls of Aminabad bazaar. Overnight in Lucknow.", overnight: "Lucknow", meals: ["breakfast"], image: "/images/itineraries/footsteps-of-lord-buddha/day-4.jpg" },
      { day: 5,  title: "Lucknow → Sravasti",                         description: "After breakfast drive to Sravasti and check in at the hotel. Sravasti is the ancient capital of Kosala Mahajanapada. Visit Sahet-Mahet — Sravasti is famous for the supernatural feats performed by Lord Buddha seated on a lotus.", overnight: "Sravasti", meals: ["breakfast"], image: "/images/itineraries/footsteps-of-lord-buddha/day-5.jpg" },
      { day: 6,  title: "Sravasti → Lumbini",                         description: "After having breakfast drive to Lumbini. It is considered as 'the birthplace of Lord Buddha' which was rediscovered in 1890 after being untraced for about 1500 years. While going there, complete Visa/Immigration formalities at India/Nepal border.", overnight: "Lumbini", meals: ["breakfast"], image: "/images/itineraries/footsteps-of-lord-buddha/day-6.jpg" },
      { day: 7,  title: "Lumbini",                                    description: "After breakfast, visit Maya Devi Temple, Sacred Garden, Bodhi Tree, Maya Devi Pond, Ashoka Pillar, World Peace Pagoda and International Monasteries & Temples.", overnight: "Lumbini", meals: ["breakfast"], image: "/images/itineraries/footsteps-of-lord-buddha/day-7.jpg" },
      { day: 8,  title: "Lumbini → Kushinagar",                       description: "After having breakfast, drive to Kushinagar where Buddha finally attained salvation or passed into Maha Parinirvana. Reach Kushinagar and transfer to the hotel. Visit Mahaparinirvana Temple where Buddha took his last breath and Rambhar Stupa, where he got cremated.", overnight: "Kushinagar", meals: ["breakfast"], image: "/images/itineraries/footsteps-of-lord-buddha/day-8.jpg" },
      { day: 9,  title: "Kushinagar → Vaishali → Patna",              description: "After having breakfast drive to Patna (Capital of Bihar state of India) via visit Vaishali. Arrive Patna & transfer to hotel.", overnight: "Patna", meals: ["breakfast"], image: "/images/itineraries/footsteps-of-lord-buddha/day-9.jpg" },
      { day: 10, title: "Patna → Rajgir",                             description: "After breakfast visit Patna Museum, Buddh Smriti Park and Golghar. Afterwards, drive to Rajgir and visit the famous Shanti Stupa (peace pagoda). Later check in the hotel.", overnight: "Rajgir", meals: ["breakfast"], image: "/images/itineraries/footsteps-of-lord-buddha/day-10.jpg" },
      { day: 11, title: "Rajgir → Nalanda → Bodhgaya",                description: "After breakfast drive towards Bodhgaya (the place of Buddha's Enlightenment & the spiritual home of Buddhists). On the way, visit Nalanda, ancient university of the world.", overnight: "Bodhgaya", meals: ["breakfast"], image: "/images/itineraries/footsteps-of-lord-buddha/day-11.jpg" },
      { day: 12, title: "Bodhgaya",                                   description: "After breakfast, visit the Mahabodhi Temple, inscribed as a UNESCO World Heritage Site — the temple is the place where Lord Buddha attained enlightenment. Within the temple complex, you will be taken to the Bodhi Tree under which the Lord gained enlightenment. The site is a major pilgrimage for Buddhists and is thronged by followers of Buddhism from all over the world. From there you will be visiting the Wat Thai Temple. The shrine is unique and the only Thai temple in India.", overnight: "Bodhgaya", meals: ["breakfast"], image: "/images/itineraries/footsteps-of-lord-buddha/day-12.jpg" },
      { day: 13, title: "Bodhgaya → Varanasi",                        description: "On arrival in Varanasi, transfer to the hotel. Later in the evening, visit the river Ganges to witness the Evening Aarti Ceremony — a time when residents & priests come together in prayer in dedication to the Holy River Ganges. This is best witnessed sitting in traditional boats by the riverside, facing the banks of the river.", overnight: "Varanasi", meals: ["breakfast"], image: "/images/itineraries/footsteps-of-lord-buddha/day-13.jpg" },
      { day: 14, title: "Varanasi",                                   description: "At dawn, return to the Ganges to witness riverside worship as a silent multitude descends the ghats to immerse themselves in the holy stream and salute the rising sun. From a traditional boat, watch the bathing and cremation ghats, then walk the narrow cobbled lanes thronged with pilgrims. Later, visit Sarnath, where the Buddha preached his first sermon in the Deer Park, marked by the Dhamek Stupa. End among Varanasi's temples — Bharat Mata, the gold-plated Vishwanath and the Durga 'Monkey' Temple.", overnight: "Varanasi", meals: ["breakfast"], image: "/images/itineraries/footsteps-of-lord-buddha/day-14.jpg" },
      { day: 15, title: "Varanasi → Delhi → Departure",               description: "After breakfast, transfer to the airport for a flight to Delhi. On arrival in Delhi, transfer to Delhi International Airport for your outbound flight and tour terminates. End of Tour.", overnight: "—", meals: ["breakfast"], image: "/images/itineraries/footsteps-of-lord-buddha/day-15.jpg" },
    ],
    inclusions: [
      "Accommodation in 01 Double Room at the above-mentioned hotels or similar",
      "Meals as mentioned above",
      "All transfers and sightseeing by AC Toyota Crysta Car as per the program",
      "Prevailing Monument Entrance Fees",
      "Services of Local English / French Speaking Guide on sightseeing tours (different guides in each city)",
      "Cycle Rickshaw Ride in Old Delhi",
      "Morning & Evening Boat Ride on River Ganges in Varanasi",
      "Wi-fi access in the vehicle during traveling",
      "Unlimited drinking bottled water in the vehicle during traveling",
      "GST (Goods & Services Tax) as applicable",
    ],
    exclusions: [
      "Any domestic / international airfare",
      "Personal expenses (tips, laundry, beverages, telephone calls)",
      "Expenses caused by factors beyond control",
      "Medical or evacuation insurance",
      "Travel insurance",
      "Nepal visa fees and any border immigration costs",
    ],
    datesPrices: [
      "On the Footsteps of Lord Buddha",
      "Price Validity OCT 2026 – APR 2027",
      "Price on request — contact our travel desk for a tailored quote",
    ],
    notes: [
      "Blackout Period: Dec 20 – Jan 10 (not available)",
      "Festival Premium: Extra charges during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
      "Tour crosses into Nepal at Lumbini — passport, valid visa, and immigration formalities required at the border",
    ],
    // NOTE: source doc's Signature Experience block was a template-copy of NE
    // India content (Botanical Garden, Tram Ride, etc) — not relevant to this
    // Buddhist Circuit itinerary. Left empty pending real entries from the user.
    signatureExperiences: [],
    // Images: local (Pexels + Wikimedia Commons, free-license) — see SOURCES.md in the image folder
    heroImage: "/images/itineraries/footsteps-of-lord-buddha/main-bg.jpg",
    overviewImage: "/images/itineraries/footsteps-of-lord-buddha/overview.jpg",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/north-east/map.svg",
    coordinates: ITINERARY_MAP_ROUTES["footsteps-of-lord-buddha"],
    // Hotel images are representative luxury stand-ins — see SOURCES.md
    suggestedHotels: [
      { name: "The Claridges",           city: "Delhi",    image: "/images/itineraries/footsteps-of-lord-buddha/hotels/claridges-delhi.jpg" },
      { name: "Taj Mahal Lucknow",       city: "Lucknow",  image: "/images/itineraries/footsteps-of-lord-buddha/hotels/taj-lucknow.jpg" },
      { name: "Marasa Sarovar Portico",  city: "Bodhgaya", image: "/images/itineraries/footsteps-of-lord-buddha/hotels/marasa-bodhgaya.jpg" },
      { name: "Amritara Suryauday Haveli", city: "Varanasi", image: "/images/itineraries/footsteps-of-lord-buddha/hotels/suryauday-varanasi.jpg" },
    ],
  },

];
