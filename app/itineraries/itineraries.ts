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

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  overnight: string;
  image?: string;
}

export interface SignatureExperience {
  category: string;
  title: string;
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
  modeToNext?: "road" | "air" | "rail";
}

// Keyed by itinerary slug
export const ITINERARY_MAP_ROUTES: Record<string, MapStop[]> = {
  // 1. Northeast India & The City of Joy
  "northeast-india-city-of-joy": [
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

  // 7. Taj & Tigers (Golden Triangle with Ranthambhore)
  "taj-and-tigers": [
    { name: "Delhi", lat: 28.6139, lng: 77.209, modeToNext: "road" },
    { name: "Agra", lat: 27.1767, lng: 78.0081, modeToNext: "road" },
    { name: "Jaipur", lat: 26.9124, lng: 75.7873, modeToNext: "road" },
    { name: "Ranthambhore", lat: 26.0173, lng: 76.5026, modeToNext: "road" },
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
    { name: "Delhi",     lat: 28.6139, lng: 77.2090, modeToNext: "road" },
    { name: "Mandawa",   lat: 28.0630, lng: 75.1499, modeToNext: "road" },
    { name: "Bikaner",   lat: 28.0229, lng: 73.3119, modeToNext: "road" },
    { name: "Jaisalmer", lat: 26.9157, lng: 70.9083, modeToNext: "road" },
    { name: "Jodhpur",   lat: 26.2389, lng: 73.0243, modeToNext: "road" },
    { name: "Udaipur",   lat: 24.5854, lng: 73.7125, modeToNext: "road" },
    { name: "Deogarh",   lat: 25.5421, lng: 73.9080, modeToNext: "road" },
    { name: "Jaipur",    lat: 26.9124, lng: 75.7873, modeToNext: "road" },
    { name: "Agra",      lat: 27.1767, lng: 78.0081, modeToNext: "road" },
    { name: "Delhi",     lat: 28.6139, lng: 77.2090 },
  ]

};


// ─── Itineraries Data ───────────────────────────────────────────────────────

export const itineraries: Itinerary[] = [

  // ==========================================================================
  // 1. NORTHEAST INDIA & THE CITY OF JOY
  // ==========================================================================
  {
    slug: "northeast-india-city-of-joy",
    title: "Northeast India & The City of Joy",
    subtitle: "Experience the iconic wonders of India's Golden Triangle. Visit the Taj Mahal at sunrise, explore Delhi's historic sites, and experience the pink city of Jaipur.",
    categories: ["Culture", "Nature", "Wildlife"],
    duration: "13 Days",
    durationDays: 13,
    startingPrice: "$1,330",
    startingPriceNote: "per person (2 Pax)",
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
      { day: 1, title: "Arrived In Kolkata", description: "Arrive in Kolkata, where colonial architecture and creative spirit coexist. You'll be met at the airport and transferred to your hotel. In the evening, enjoy an orientation tour of the city, highlighted by a serene boat ride on the Hooghly River, offering a first glimpse into Kolkata's timeless charm.", overnight: "Kolkata", image: "https://ik.imagekit.io/libertyindia/itineraries/north-east/day-1.svg" },
      { day: 2, title: "Exploring Kolkata", description: "Today is dedicated to discovering the cultural heart of the city. Visit iconic landmarks including the Victoria Memorial, St. Paul's Cathedral, Indian Museum, and Belur Math. Later, wander through Kumartuli, a historic potters' quarter where artisans craft clay idols using age-old techniques. End the day with a visit to Nahoum's, Kolkata's legendary Jewish bakery.", overnight: "Kolkata", image: "https://ik.imagekit.io/libertyindia/itineraries/north-east/day-2.svg" },
      { day: 3, title: "Kolkata → Dibrugarh", description: "Begin with a heritage walk around Dalhousie Square, exploring colonial-era sites such as the Flower Market, Writer's Building, Governor's House, and Charnock Mausoleum. After breakfast, fly to Dibrugarh, the gateway to Assam's tea country. On arrival, transfer to your hotel.", overnight: "Dibrugarh", image: "https://ik.imagekit.io/libertyindia/itineraries/north-east/day-3.svg" },
      { day: 4, title: "Dibrugarh", description: "Set out on a scenic drive across the iconic Dhola–Sadiya Bridge, one of India's longest river bridges. Continue to Dibru–Saikhowa National Park, home to rare wildlife including feral horses. Later, visit a traditional tea estate to learn about Assam's world-famous tea culture.", overnight: "Dibrugarh", image: "https://ik.imagekit.io/libertyindia/itineraries/north-east/day-4.svg" },
      { day: 5, title: "Dibrugarh → Jorhat", description: "Drive to Jorhat through the lush tea country of Upper Assam. En route, enjoy views of sprawling tea estates and the Brahmaputra floodplains. On arrival, check in at your hotel and enjoy the rest of the day at leisure.", overnight: "Jorhat", image: "https://ik.imagekit.io/libertyindia/itineraries/north-east/day-5.svg" },
      { day: 6, title: "Majuli Island Excursion", description: "Travel to Neemati Ghat and board a ferry to Majuli, the world's largest river island. Explore its renowned Vaishnavite monasteries (Satras) and interact with resident monks. Visit local villages known for pottery-making and mask craftsmanship, followed by a cultural performance reflecting the island's spiritual traditions.", overnight: "Jorhat", image: "https://ik.imagekit.io/libertyindia/itineraries/north-east/day-6.svg" },
      { day: 7, title: "Jorhat → Kaziranga National Park", description: "Drive to Kaziranga National Park, a UNESCO World Heritage Site famed for its population of one-horned rhinoceroses. In the afternoon, enjoy a river dolphin safari on the Brahmaputra, a rare and tranquil wildlife experience.", overnight: "Kaziranga National Park", image: "https://ik.imagekit.io/libertyindia/itineraries/north-east/day-7.svg" },
      { day: 8, title: "Kaziranga National Park", description: "Embark on an early morning jeep safari, tracking rhinos, elephants, wild buffalo, and birdlife across Kaziranga's grasslands. After breakfast, enjoy a second safari in the afternoon, offering another chance to witness the park's extraordinary biodiversity.", overnight: "Kaziranga National Park", image: "https://ik.imagekit.io/libertyindia/itineraries/north-east/day-8.svg" },
      { day: 9, title: "Kaziranga → Shillong", description: "After breakfast, drive through scenic landscapes to Shillong, the capital of Meghalaya. Check in at your hotel and enjoy the rest of the day at leisure in this hill town often called the Scotland of the East.", overnight: "Shillong", image: "https://ik.imagekit.io/libertyindia/itineraries/north-east/day-9.svg" },
      { day: 10, title: "Shillong → Cherrapunjee → Shillong", description: "Travel to Cherrapunjee, one of the wettest places on Earth. En route, visit Elephant Falls and Mawdok Valley. Explore dramatic natural wonders including Nohkalikai Falls, Seven Sisters Falls, Mawsmai Cave, and Wahkaba Falls.", overnight: "Shillong", image: "https://ik.imagekit.io/libertyindia/itineraries/north-east/day-10.svg" },
      { day: 11, title: "Dawki & Mawlynnong", description: "Visit Dawki for a boat ride on the crystal-clear Umngot River, with views extending into Bangladesh. Continue to Mawlynnong, celebrated as Asia's cleanest village, known for its eco-conscious lifestyle and community-driven sustainability.", overnight: "Shillong", image: "https://ik.imagekit.io/libertyindia/itineraries/north-east/day-11.svg" },
      { day: 12, title: "Shillong → Guwahati", description: "Drive to Guwahati. En route, visit the sacred Kamakhya Temple, one of the most revered shrines in India. Arrive in Guwahati and check in at your hotel. Enjoy the evening at leisure or explore the local markets.", overnight: "Guwahati", image: "https://ik.imagekit.io/libertyindia/itineraries/north-east/day-12.svg" },
      { day: 13, title: "Depart Guwahati", description: "Transfer to the airport for your onward journey. Optionally, visit local sites or markets if time permits before departure.", overnight: "—", image: "https://ik.imagekit.io/libertyindia/itineraries/north-east/day-13.svg" },
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
      "Northeast India & The City of Joy",
      "Price Validity OCT 2025 – MAR 2026",
    ],
    notes: [
      "Blackout Period: Dec 23 – Jan 5 (not available)",
      "Festival Premium: Extra charges during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
    ],
    signatureExperiences: [
      { category: "Culture & History", title: "Walk around Botanical Garden" },
      { category: "Adventure Tour", title: "Tram Ride" },
      { category: "Culture & History", title: "Visit Mother Teresa's house" },
      { category: "Culture & History", title: "Cooking Workshop" },
      { category: "Culture", title: "Drink at a jazz Bar" },
    ],
      heroImage: "https://ik.imagekit.io/libertyindia/itineraries/north-east/main-bg.svg",
      overviewImage: "https://ik.imagekit.io/libertyindia/itineraries/north-east/overview.svg",
      mapImage: "https://ik.imagekit.io/libertyindia/itineraries/north-east/map.svg",
      coordinates: ITINERARY_MAP_ROUTES["northeast-india-city-of-joy"],
  },

  // ==========================================================================
  // 2. KAIRALI AYURVEDIC HEALING VILLAGE
  // ==========================================================================
  {
    slug: "kairali-ayurvedic-healing-village",
    title: "Kairali Ayurvedic Healing Village",
    subtitle: "Reconnect with ancient wellness traditions in the serene forests of Kerala. Experience authentic Ayurvedic therapies, daily yoga, and holistic healing at one of India's most celebrated retreat centres.",
    categories: ["Wellness", "Nature", "Spiritual"],
    duration: "7 / 14 / 21 Nights",
    durationDays: 7,
    startingPrice: "€1,230",
    startingPriceNote: "per person (2 Pax)",
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
      { day: 1, title: "Arrival & Consultation", description: "Arrive at Kochi Airport, where you'll be met and transferred to the Kairali Ayurvedic Healing Village in Palakkad (approx. 3 hours). Settle into your villa amidst the tranquil forest surroundings. In the evening, meet your Ayurvedic physician for an initial consultation to assess your dosha profile and design a personalised treatment plan for your stay.", overnight: "Kairali Healing Village", image: "https://ik.imagekit.io/libertyindia/itineraries/ayurveda-kairali/day-1.jpeg" },
      { day: 2, title: "First Full Day of Wellness", description: "Begin your morning with a group yoga session at sunrise, followed by your first Ayurvedic therapy session tailored to your consultation. Enjoy a wholesome vegetarian breakfast. In the afternoon, experience your second therapy of the day along with a rejuvenating steam bath. Conclude the evening with a guided group meditation session.", overnight: "Kairali Healing Village", image: "https://ik.imagekit.io/libertyindia/itineraries/ayurveda-kairali/day-2.jpeg" },
      { day: 3, title: "Deepening the Healing", description: "Continue your personalised therapy programme with two Ayurvedic treatments and a steam bath. Attend your daily yoga and meditation sessions. Today features a lecture on Ayurveda, offering deeper insight into the ancient healing philosophy and how it applies to your individual wellness journey.", overnight: "Kairali Healing Village", image: "https://ik.imagekit.io/libertyindia/itineraries/ayurveda-kairali/day-3.png" },
      { day: 4, title: "Village Walk & Cultural Immersion", description: "After your morning yoga and therapy sessions, join a guided village walk through the surrounding countryside, experiencing the rhythms of rural Kerala life. Return for your afternoon treatment and steam bath, followed by evening meditation in the peaceful forest setting.", overnight: "Kairali Healing Village", image: "https://ik.imagekit.io/libertyindia/itineraries/ayurveda-kairali/day-4.webp" },
      { day: 5, title: "Farm Visit & Cooking Demonstration", description: "Following your morning wellness routine, explore the retreat's organic farm on a guided walk, learning about the herbs and ingredients used in Ayurvedic treatments and cuisine. Later, attend an Ayurvedic cooking demonstration and discover how traditional recipes support holistic well-being. Continue with your afternoon therapy and evening meditation.", overnight: "Kairali Healing Village", image: "https://ik.imagekit.io/libertyindia/itineraries/ayurveda-kairali/day-5.webp" },
      { day: 6, title: "Yoga Philosophy & Restoration", description: "Today's special activity is a lecture on yoga, exploring its philosophical roots and practical benefits for long-term wellness. Continue your daily rhythm of personalised therapies, steam bath, and meditation. Spend your free time at the pool, library, or wandering through the forest paths.", overnight: "Kairali Healing Village", image: "https://ik.imagekit.io/libertyindia/itineraries/ayurveda-kairali/day-6.webp" },
      { day: 7, title: "Final Day (7-Night Guests) / Continuation", description: "For 7-night guests, enjoy a final morning therapy session and a closing consultation with your physician, who will provide personalised lifestyle and dietary recommendations to carry forward at home. Transfer to Kochi Airport for departure. For guests continuing to 14 or 21 nights, the weekly cycle of therapies, lectures, farm visits, village walks, and cooking demonstrations repeats, deepening your healing journey with each passing week.", overnight: "Kairali Healing Village", image: "https://ik.imagekit.io/libertyindia/itineraries/ayurveda-kairali/day-7.png" },
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
    duration: "7 Days",
    durationDays: 7,
    startingPrice: "€1,013",
    startingPriceNote: "per person (2 Pax)",
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
      { day: 2, title: "Exploring Delhi", description: "Begin with a fascinating tour of Old Delhi. Drive past the Red Fort and Jama Masjid, India's largest mosque, then enjoy a cycle rickshaw ride through the narrow, bustling lanes of Chandni Chowk. Visit the Digambar Jain Temple along the way. In the afternoon, explore New Delhi's grand landmarks. Drive past Rashtrapati Bhawan, Rajpath, and India Gate, then visit Humayun's Tomb, a masterpiece of Mughal architecture, and Qutub Minar with its ancient Iron Pillar dating to the 4th century AD.", overnight: "Delhi", image: "https://ik.imagekit.io/libertyindia/itineraries/classical-golden-triangle/day-2.png" },
      { day: 3, title: "Delhi → Agra", description: "After breakfast, depart for Agra (approx. 4 hours). On arrival, visit Agra Fort, a magnificent 16th-century fortress blending military strength with refined Mughal interiors, where Emperor Shah Jahan was famously imprisoned by his own son. Later, explore the Itmad-ud-Daula Tomb, often called the Baby Taj Mahal. This delicate marble mausoleum, commissioned by Empress Nur Jahan, is the first tomb in India built entirely of marble, commissioned by Empress Nur Jahan for her father.", overnight: "Agra", image: "https://ik.imagekit.io/libertyindia/itineraries/classical-golden-triangle/day-3.png" },
      { day: 4, title: "Agra → Fatehpur Sikri → Jaipur", description: "Rise early to witness the Taj Mahal at sunrise—a sublime experience of shifting light and colour across one of the world's most celebrated monuments. After breakfast, depart for Jaipur (approx. 6 hours), stopping en route at Fatehpur Sikri, the exquisite red sandstone city built by Akbar the Great in 1569 and mysteriously abandoned shortly after. Arrive in Jaipur and enjoy the rest of the day at leisure.", overnight: "Jaipur", image: "https://ik.imagekit.io/libertyindia/itineraries/classical-golden-triangle/day-4.png" },
      { day: 5, title: "Exploring Jaipur", description: "Begin with a guided excursion to the magnificent Amber Fort, the ancient capital of the Kachawaha clan. Ascend through five defensive gates to discover ornate halls, temples, and sweeping views. Nearby, visit the intriguing Panna Meena Step Well, an eight-storey 16th-century marvel with criss-crossing staircases. In the afternoon, tour the City Palace, the Jantar Mantar stone observatory, and stop for photographs at the iconic Hawa Mahal, the Palace of Winds. End the day wandering through Jaipur's colourful traditional markets.", overnight: "Jaipur", image: "https://ik.imagekit.io/libertyindia/itineraries/classical-golden-triangle/day-5.png" },
      { day: 6, title: "Depart Jaipur → Delhi", description: "After a leisurely morning, transfer from Jaipur to Delhi International Airport (approx. 5 hours) to connect with your onward flight. End of tour.", overnight: "—", image: "https://ik.imagekit.io/libertyindia/itineraries/classical-golden-triangle/day-6.png" },
    ],
    inclusions: [
      "Accommodation in single/twin rooms at selected hotel category or similar",
      "Daily breakfast",
      "AC vehicle transfers and sightseeing (Toyota Crysta for 2–3 Pax / Tempo Traveller for 4–6 Pax)",
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
      "Starting from €390 per person (Standard Hotels, 4–6 Pax, Twin Sharing)",
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
  },

  // ==========================================================================
  // 4. COLOURFUL RAJASTHAN
  // ==========================================================================
  

  // ==========================================================================
  // 7. GOLDEN TRIANGLE WITH RANTHAMBHOREprice
  // ==========================================================================
  {
    slug: "taj-and-tigers",
    title: "Taj & Tigers",
    subtitle: "Experience the iconic wonders of India's Golden Triangle combined with thrilling wildlife safaris. Visit the Taj Mahal at sunrise, explore Delhi's historic sites, discover the pink city of Jaipur, and track tigers in Ranthambhore National Park.",
    categories: ["Heritage", "Culture", "Wildlife", "Adventure"],
    duration: "8 Days",
    durationDays: 8,
    startingPrice: "€1,406",
    startingPriceNote: "per person (2 Pax)",
    route: "Delhi → Agra → Jaipur → Ranthambhore → Delhi",
    bestTime: "October – March",
    overview: [
      "From the bustling lanes of Old Delhi and the grandeur of Mughal monuments to the ethereal beauty of the Taj Mahal, the vibrant royal heritage of Jaipur, and the wild landscapes of Ranthambhore, this journey combines India's most celebrated cultural circuit with one of its finest wildlife experiences.",
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
      "Morning and afternoon private jeep safaris in Ranthambhore National Park, tracking Bengal tigers",
    ],
    days: [
      { day: 1, title: "Arrive in Delhi", description: "Arrive at Delhi International Airport, where you'll be met by our representative and transferred to your hotel. Settle in and enjoy the rest of the day at leisure, taking in the energy of India's capital city.", overnight: "Delhi", image: "https://ik.imagekit.io/libertyindia/itineraries/taj-and-tigers/day-01.webp" },
      { day: 2, title: "Exploring Delhi", description: "Begin with a tour of Old Delhi. Drive past the Red Fort and Jama Masjid, then enjoy a cycle rickshaw ride through the narrow, bustling lanes of Chandni Chowk. Visit the Digambar Jain Temple along the way. In the afternoon, explore New Delhi's grand landmarks. Drive past Rashtrapati Bhawan, Rajpath, and India Gate, then visit Humayun's Tomb, a masterpiece of Mughal architecture, and Qutub Minar with its ancient Iron Pillar dating to the 4th century AD.", overnight: "Delhi", image: "https://ik.imagekit.io/libertyindia/itineraries/taj-and-tigers/day-02.png" },
      { day: 3, title: "Delhi → Agra", description: "After breakfast, depart for Agra (approx. 4 hours). On arrival, visit Agra Fort, a magnificent 16th-century fortress blending military strength with refined Mughal interiors, where Emperor Shah Jahan was famously imprisoned by his own son. Later, explore the Itmad-ud-Daula Tomb, often called the Baby Taj Mahal. This delicate marble mausoleum, commissioned by Empress Nur Jahan, is the first tomb in India built entirely of marble, commissioned by Empress Nur Jahan for her father.", overnight: "Agra", image: "https://ik.imagekit.io/libertyindia/itineraries/taj-and-tigers/day-03.png" },
      { day: 4, title: "Agra → Fatehpur Sikri → Jaipur", description: "Rise early to witness the Taj Mahal at sunrise—a sublime experience of shifting light and colour across one of the world's most celebrated monuments. After breakfast, depart for Jaipur (approx. 6 hours), stopping en route at Fatehpur Sikri, the exquisite red sandstone city built by Akbar the Great in 1569 and mysteriously abandoned shortly after. Arrive in Jaipur and enjoy the rest of the day at leisure.", overnight: "Jaipur", image: "https://ik.imagekit.io/libertyindia/itineraries/taj-and-tigers/day-04.png" },
      { day: 5, title: "Exploring Jaipur", description: "Begin with a guided excursion to the magnificent Amber Fort, the ancient capital of the Kachawaha clan. Ascend through five defensive gates to discover ornate halls, temples, and sweeping views. Nearby, visit the intriguing Panna Meena Step Well, an eight-storey 16th-century marvel with criss-crossing staircases. In the afternoon, tour the City Palace, the Jantar Mantar stone observatory, and stop for photographs at the iconic Hawa Mahal, the Palace of Winds. End the day wandering through Jaipur's colourful traditional markets.", overnight: "Jaipur", image: "https://ik.imagekit.io/libertyindia/itineraries/taj-and-tigers/day-05.png" },
      { day: 6, title: "Jaipur → Ranthambhore", description: "After breakfast, depart for Ranthambhore National Park (approx. 3.5 hours), one of the biggest and most renowned national parks in Northern India, and a former hunting ground of the Maharajas of Jaipur. Check in at your hotel and enjoy the rest of the day at leisure, preparing for the next day's wildlife adventures.", overnight: "Ranthambhore", image: "https://ik.imagekit.io/libertyindia/itineraries/taj-and-tigers/day-06.png" },
      { day: 7, title: "Ranthambhore Safari", description: "Embark on an early morning jeep safari with an English-speaking naturalist, tracking Bengal tigers, leopards, sloth bears, and diverse birdlife through the park's dramatic landscape of dry deciduous forests and ancient ruins. In the afternoon, set out on a second safari, offering another chance to encounter Ranthambhore's extraordinary wildlife in the golden light of the late day.", overnight: "Ranthambhore", image: "https://ik.imagekit.io/libertyindia/itineraries/taj-and-tigers/day-07.png" },
      { day: 8, title: "Ranthambhore → Delhi", description: "After breakfast, depart for Delhi (approx. 6 hours). On arrival, transfer to Delhi International Airport for your onward flight. End of tour.", overnight: "—", image: "https://ik.imagekit.io/libertyindia/itineraries/taj-and-tigers/day-08.png" },
    ],
    inclusions: [
      "Accommodation in single/twin rooms at selected hotel category or similar",
      "Daily breakfast; full board at Ranthambhore",
      "AC vehicle transfers and sightseeing (Toyota Crysta for 2–3 Pax / Tempo Traveller for 4–6 Pax)",
      "Cycle rickshaw ride in Old Delhi",
      "Two shared jeep safaris in Ranthambhore National Park",
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
      "Golden Triangle with Ranthambhore",
      "Price Validity OCT 2025 – MAR 2026",
      "Starting from €690 per person (Standard Hotels, 4–6 Pax, Twin Sharing)",
    ],
    notes: [
      "Blackout Period: Dec 20 – Jan 10 (prices above not valid)",
      "Festival Premium: Extra charges may apply during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
      "Red Fort (Delhi) is closed on Mondays; Taj Mahal (Agra) is closed on Fridays",
      "Ranthambhore National Park is closed during monsoon season (July–September); safari zones are allocated by the park authority",
    ],
    signatureExperiences: [
      { category: "Culture & History", title: "Cycle rickshaw ride through Old Delhi's Chandni Chowk" },
      { category: "Culture & History", title: "Sunrise visit to the Taj Mahal" },
      { category: "Culture & History", title: "Explore the abandoned city of Fatehpur Sikri" },
      { category: "Adventure Tour", title: "Ascend Amber Fort and discover Panna Meena Step Well" },
      { category: "Culture & History", title: "Wander through Jaipur's vibrant traditional markets" },
      { category: "Adventure Tour", title: "Jeep safaris tracking Bengal tigers in Ranthambhore" },
    ],
    heroImage: "https://ik.imagekit.io/libertyindia/itineraries/taj-and-tigers/main-bg.webp",
    overviewImage: "https://ik.imagekit.io/libertyindia/itineraries/taj-and-tigers/overview.png",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/north-east/map.svg",
    coordinates: ITINERARY_MAP_ROUTES["taj-and-tigers"],
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
    duration: "10 Days",
    durationDays: 10,
    startingPrice: "€880",
    startingPriceNote: "per person (2 Pax)",
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
      { day: 2, title: "Exploring Mahabalipuram", description: "Explore this UNESCO World Heritage town and its remarkable rock-cut monuments. Visit the great bas-relief of Arjuna's Penance, depicting the mythical descent of the Ganges with gods, animals, and fables carved into a massive granite face. Continue to the Five Rathas, five monolithic temples carved from a single rock formation. End at the Shore Temple, one of the oldest in South India, standing at the water's edge.", overnight: "Mahabalipuram", image: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/day-2.png" },
      { day: 3, title: "Mahabalipuram → Pondicherry", description: "After breakfast, drive to Pondicherry (approx. 2 hours), a former French colonial settlement that retains its European character in its tree-lined boulevards, pastel-coloured villas, and seaside promenade. Take a walk through the French Quarter and White Town, passing colonial-era buildings, the Alliance Française, and the Cluny Embroidery Centre.", overnight: "Pondicherry", image: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/day-3.jpg" },
      { day: 4, title: "Exploring Pondicherry", description: "After breakfast, visit Auroville, the experimental international township founded in 1968 where people of all nationalities live in progressive harmony. Explore the complex and learn about its unique philosophy and way of life. Later, stroll through the local markets and along the beachside promenade.", overnight: "Pondicherry", image: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/day-4.png" },
      { day: 5, title: "Pondicherry → Chidambaram → Darasuram → Tanjore", description: "Depart for Tanjore (approx. 5 hours), stopping en route at Chidambaram to visit the sacred Nataraja Temple, where Shiva is worshipped as the cosmic dancer. Continue to Darasuram, whose temple is a superb example of Chola architecture. Arrive in Tanjore and visit the magnificent Brihadeeshwara Temple, a UNESCO World Heritage masterpiece, and the Palace with its gallery of ancient bronzes.", overnight: "Tanjore", image: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/day-5.png" },
      { day: 6, title: "Tanjore → Chettinad", description: "After breakfast, drive to Chettinad (approx. 4 hours), a region of 74 villages once home to the fabulously wealthy Chettiar merchants who built extraordinary mansions in their own distinctive style. In the evening, explore the charming village of Karaikudi. Visit workshops for traditional woodwork, silversmithing, and textile weaving.", overnight: "Chettinad", image: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/day-6.png" },
      { day: 7, title: "Exploring Chettinad", description: "Spend the day exploring the local villages and meeting artisans who keep centuries-old craft traditions alive—from intricate wood carving and handloom weaving to the production of earthenware tiles renowned throughout India. Wander through forgotten hamlets, romantic palaces, and sacred groves with paths lined with wonderful terracotta horses.", overnight: "Chettinad", image: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/day-7.png" },
      { day: 8, title: "Chettinad → Madurai", description: "After a leisurely breakfast, drive to Madurai (approx. 3 hours), the ancient capital of the Pandyan Kings, set on the banks of the River Vaigai. In its heyday, Madurai traded with Greece and Rome and was a centre of Tamil poetry and literature. Check in at your hotel and spend the rest of the day exploring this vibrant temple city at your own pace.", overnight: "Madurai", image: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/day-8.jpg" },
      { day: 9, title: "Exploring Madurai", description: "Visit the Thirumala Nayak Palace, built in 1639 in a blend of Dravidian and Islamic styles, with its remarkable unsupported curved dome. Continue to the Meenakshi Temple, a masterpiece of Dravidian architecture with immense gopurams adorned with thousands of colourful stucco figures. In the evening, attend the nightly ceremony where the temple bronze of Lord Shiva is carried in procession to the boudoir of his consort Parvati, accompanied by devotional music.", overnight: "Madurai", image: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/day-9.png" },
      { day: 10, title: "Depart Madurai → Chennai", description: "Transfer to Madurai Airport for your flight to Chennai. On arrival, connect with your onward international flight. End of tour.", overnight: "—", image: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/main-bg.png" },
    ],
    inclusions: [
      "Accommodation in single/twin rooms at selected hotel category or similar",
      "Daily breakfast",
      "AC vehicle transfers and sightseeing (Toyota Crysta for 2–3 Pax / Tempo Traveller for 4–6 Pax)",
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
      "Starting from €880 per person (Standard Hotels, 4–6 Pax, Twin Sharing)",
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
    heroImage: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/main-bg.png",
    overviewImage: "https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/overview.png",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/north-east/map.svg",
    coordinates: ITINERARY_MAP_ROUTES["unveiling-the-enchanting-south-tamil-nadu"],
  },

  // ==========================================================================
  // 13. GEMS OF SOUTH INDIA — 18 Days (NEW)
  // ==========================================================================
 

  // ==========================================================================
  // 14. NORTHEAST INDIA SOJOURN — 10 Days (NEW)
  // ==========================================================================
  {
    slug: "colourful-rajasthan",
    title: "Colourful Rajasthan",
    subtitle: "Immerse yourself in Rajasthan's vivid colours and royal heritage. From desert dunes to palace lakes, experience India's most vibrant state through forts, temples, and authentic cultural encounters.",
    categories: ["Heritage", "Culture", "Architecture"],
    duration: "16 Days",
    durationDays: 16,
    startingPrice: "€2,086",
    startingPriceNote: "per person (2 Pax)",
    route: "Delhi → Mandawa → Bikaner → Jaisalmer → Jodhpur → Udaipur → Deogarh → Jaipur → Agra → Delhi",
    bestTime: "October – March",
    overview: [
      "From the painted havelis of Shekhawati and the golden ramparts of Jaisalmer to the lake palaces of Udaipur and the mighty forts of Jodhpur, this journey reveals Rajasthan in all its colour, grandeur, and living tradition—a land where every city tells its own royal story.",
      "Ride cycle rickshaws through Old Delhi's ancient bazaars, explore medieval forts and intricately carved Jain temples, cruise across shimmering lakes, and witness the Taj Mahal at sunrise. This is India at its most vivid and unforgettable.",
    ],
    summary: [
      "Cycle rickshaw ride through Old Delhi's Chandni Chowk and visit to Humayun's Tomb and Qutub Minar",
      "Explore the exquisitely painted havelis and frescoed mansions of Mandawa in the Shekhawati region",
      "Visit Junagadh Fort in Bikaner and the magnificent golden Jaisalmer Fort, the world's largest living fort",
      "Discover the ornate Patwon Ji ki Haveli and Nathmal Ji ki Haveli in Jaisalmer",
    ],
    summaryRight: [
      "Explore the 500-year-old Ranakpur Jain Temples with their 1,444 uniquely carved pillars",
      "Shared boat ride on Lake Pichola in Udaipur with views of the City Palace and Lake Palace",
      "Visit the historic Chittorgarh Fort and the charming princely town of Bundi",
      "Ascend Amber Fort, explore Panna Meena Step Well, and wander Jaipur's vibrant markets",
    ],
    days: [
  {
    day: 1,
    title: "Arrive in Delhi",
    description:
      "Arrive at Delhi International Airport, where you'll be met by our representative and transferred to your hotel. Settle in and enjoy the rest of the day at leisure, taking in the energy of India's capital city.",
    overnight: "Delhi",
    image: "https://ik.imagekit.io/libertyindia/itineraries/colourful-rajasthan/day-1.png",
  },
  {
    day: 2,
    title: "Exploring Delhi",
    description:
      "After breakfast, proceed for a guided city tour of Delhi. Begin with a visit to Qutub Minar, the 12th‑century Tower of Victory. Continue exploring New Delhi, driving past the President’s House, North and South Blocks, and Parliament House. In the afternoon, head to Old Delhi for lunch at Haveli Dharampura, drive past the Red Fort, visit Jama Masjid, and enjoy a cycle rickshaw ride through the narrow lanes and spice markets of the old city.",
    overnight: "Delhi",
    image: "https://ik.imagekit.io/libertyindia/itineraries/colourful-rajasthan/day-2.png",
  },
  {
    day: 3,
    title: "Delhi → Mandawa",
    description:
      "After breakfast, drive to Mandawa in the Shekhawati region, famed as Rajasthan’s open‑air art gallery. Check into your heritage hotel in the former Mandawa Castle, adorned with frescoes and a gateway dedicated to Lord Krishna. Later, explore the richly painted havelis of Nawalgarh and Jhunjhunu, seeing some of the finest murals in Rajasthan.",
    overnight: "Mandawa",
    image: "https://ik.imagekit.io/libertyindia/itineraries/colourful-rajasthan/day-3.png",
  },
  {
    day: 4,
    title: "Mandawa → Bikaner",
    description:
      "Depart for Bikaner after breakfast. On arrival, check in at your hotel and relax. Later, visit Junagadh Fort, an impressive complex of palaces, temples, balconies, and courtyards, renowned for its intricate stonework and richly decorated interiors.",
    overnight: "Bikaner",
    image: "https://ik.imagekit.io/libertyindia/itineraries/colourful-rajasthan/day-4.png",
  },
  {
    day: 5,
    title: "Bikaner → Jaisalmer",
    description:
      "After breakfast, drive across the Thar Desert to Jaisalmer, the fabled Golden City. On arrival, check in at your hotel. The rest of the day is at leisure to soak in the desert atmosphere and explore the surrounding streets at your own pace.",
    overnight: "Jaisalmer",
    image: "https://ik.imagekit.io/libertyindia/itineraries/colourful-rajasthan/day-5.png",
  },
  {
    day: 6,
    title: "Exploring Jaisalmer",
    description:
      "Spend the day discovering Jaisalmer’s architectural treasures. Visit Patwon Ji ki Haveli and Nathmal Ji ki Haveli, remarkable for their carved sandstone façades, then explore Jaisalmer Fort with its bustling lanes and Jain temples. Continue to Lake Gadisar and the royal cenotaphs at Bada Bagh, and in the evening enjoy a camel ride on the Sam Sand Dunes.",
    overnight: "Jaisalmer",
    image: "https://ik.imagekit.io/libertyindia/itineraries/colourful-rajasthan/day-6.png",
  },
  {
    day: 7,
    title: "Jaisalmer → Jodhpur",
    description:
      "After breakfast, drive to Jodhpur, the Blue City of Rajasthan. On arrival, check in at your hotel. Later, begin exploring the city’s old quarters around the Clock Tower Market, filled with spices, textiles, and local handicrafts, or simply enjoy the evening at leisure.",
    overnight: "Jodhpur",
    image: "https://ik.imagekit.io/libertyindia/itineraries/colourful-rajasthan/day-7.png",
  },
  {
    day: 8,
    title: "Exploring Jodhpur",
    description:
      "Today, visit the mighty Mehrangarh Fort, one of India’s most spectacular hill forts, with sweeping views over the blue‑washed old city. Continue to Jaswant Thada, a serene marble cenotaph built in memory of Maharaja Jaswant Singh II, and spend time around the vibrant Clock Tower and Sardar Market area.",
    overnight: "Jodhpur",
    image: "https://ik.imagekit.io/libertyindia/itineraries/colourful-rajasthan/day-8.png",
  },
  {
    day: 9,
    title: "Jodhpur → Ranakpur → Udaipur",
    description:
      "Depart Jodhpur after breakfast, driving through rural Rajasthan to the Ranakpur Jain Temples. Explore the 15th‑century Chaumukha Temple, famed for its 29 halls and 1,444 uniquely carved pillars. Continue onward to Udaipur, the romantic City of Lakes, and check in at your hotel for the night.",
    overnight: "Udaipur",
    image: "https://ik.imagekit.io/libertyindia/itineraries/colourful-rajasthan/day-9.png",
  },
  {
    day: 10,
    title: "Exploring Udaipur",
    description:
      "Discover Udaipur’s regal charm with a visit to the vast City Palace complex and its Crystal Gallery. Later, visit Jagdish Temple and Saheliyon‑ki‑Bari, the Garden of the Maids of Honour. In the late afternoon, enjoy a shared boat ride on Lake Pichola, admiring the Lake Palace Hotel, the City Palace, and the atmospheric ghats along the lakefront.",
    overnight: "Udaipur",
    image: "https://ik.imagekit.io/libertyindia/itineraries/colourful-rajasthan/day-10.png",
  },
  {
    day: 11,
    title: "Udaipur → Deogarh",
    description:
      "After breakfast, drive to Deogarh, a rural town surrounded by rocky hills and small lakes. Check in at your heritage hotel and later head out on a relaxed village walk, meeting local residents and experiencing the slower rhythms of countryside life.",
    overnight: "Deogarh",
    image: "https://ik.imagekit.io/libertyindia/itineraries/colourful-rajasthan/day-11.png",
  },
  {
    day: 12,
    title: "Deogarh → Jaipur",
    description:
      "Depart Deogarh after breakfast and drive to Jaipur, the famed Pink City. On arrival, check in at your hotel and enjoy the remainder of the day at leisure, with time to relax or begin exploring the nearby bazaars.",
    overnight: "Jaipur",
    image: "https://ik.imagekit.io/libertyindia/itineraries/colourful-rajasthan/day-12.png",
  },
  {
    day: 13,
    title: "Exploring Jaipur",
    description:
      "Enjoy a full‑day guided tour of Jaipur. Visit the hilltop Amber Fort and the photogenic Panna Meena Step Well, then explore the City Palace and the Jantar Mantar stone observatory. Pause for photos at the iconic Hawa Mahal before browsing Jaipur’s colourful markets for textiles, jewellery, and handicrafts.",
    overnight: "Jaipur",
    image: "https://ik.imagekit.io/libertyindia/itineraries/colourful-rajasthan/day-13.png",
  },
  {
    day: 14,
    title: "Jaipur → Fatehpur Sikri → Agra",
    description:
      "After breakfast, drive towards Agra, stopping en route at Fatehpur Sikri, Emperor Akbar’s beautifully preserved but short‑lived sandstone capital. Explore its palaces, courtyards, and mosques before continuing to Agra and checking in at your hotel.",
    overnight: "Agra",
    image: "https://ik.imagekit.io/libertyindia/itineraries/colourful-rajasthan/day-14.png",
  },
  {
    day: 15,
    title: "Agra",
    description:
      "Rise early for a sunrise visit to the Taj Mahal, watching the marble monument change colour in the soft morning light. Return to the hotel for breakfast, then visit Itmad‑ud‑Daulah, the exquisite ‘Baby Taj’ with delicate marble inlay work. In the evening, enjoy a cooking session and dinner with a local family.",
    overnight: "Agra",
    image: "https://ik.imagekit.io/libertyindia/itineraries/colourful-rajasthan/day-15.png",
  },
  {
    day: 16,
    title: "Agra → Delhi – Departure",
    description:
      "After breakfast, drive back to Delhi. On arrival, transfer to Delhi International Airport for your outbound flight, where your Colourful Rajasthan journey concludes.",
    overnight: "—",
    image: "https://ik.imagekit.io/libertyindia/itineraries/colourful-rajasthan/day-16.png",
  },
],

    inclusions: [
      "Accommodation in single/twin rooms at selected hotel category or similar",
      "Daily breakfast",
      "AC vehicle transfers and sightseeing (Toyota Crysta for 2–3 Pax / Tempo Traveller for 4–6 Pax)",
      "Cycle rickshaw ride in Old Delhi",
      "Shared boat ride on Lake Pichola in Udaipur",
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
      "Colourful Rajasthan",
      "Price Validity OCT 2025 – MAR 2026",
      "Starting from €950 per person (Standard Hotels, 4–6 Pax, Twin Sharing)",
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
    heroImage: "https://ik.imagekit.io/libertyindia/itineraries/colorful-rajasthan/main-bg.png",
    overviewImage: "https://ik.imagekit.io/libertyindia/itineraries/colorful-rajasthan/overview.png",
    mapImage: "https://ik.imagekit.io/libertyindia/itineraries/colorful-rajasthan/map.png",
    coordinates: ITINERARY_MAP_ROUTES["colourful-rajasthan"],
  },
  {
    slug: "northeast-india-sojourn",
    title: "Northeast India Sojourn",
    subtitle: "A compact 10-day voyage from Kolkata through Darjeeling's tea gardens, Sikkim's sacred monasteries, and Kalimpong's orchid-filled hills.",
    categories: ["Nature", "Culture", "Spiritual", "Adventure"] as ItineraryCategory[],
    duration: "10 Days",
    durationDays: 10,
    startingPrice: "€1,310",
    startingPriceNote: "per person (30 Pax)",
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
      { day: 2, title: "Exploring Kolkata", description: "Visit Victoria Memorial, St. Paul's Cathedral, Indian Museum, Belur Math, Kumartuli, and Nahoum's bakery.", overnight: "Kolkata", image: "https://ik.imagekit.io/libertyindia/itineraries/northeast-india-sojourn/day-2.png" },
      { day: 3, title: "Kolkata → Darjeeling", description: "Fly to Bagdogra, drive to Darjeeling. Evening gala dinner with Everest summiteer Tenzin (groups only).", overnight: "Darjeeling", image: "https://ik.imagekit.io/libertyindia/itineraries/northeast-india-sojourn/day-3.png" },
      { day: 4, title: "Exploring Darjeeling", description: "Ride the heritage toy train to Ghoom. Visit Ghoom Monastery, Tibetan Refugee Centre, Japanese Temple, and Peace Pagoda.", overnight: "Darjeeling", image: "https://ik.imagekit.io/libertyindia/itineraries/northeast-india-sojourn/day-4.png" },
      { day: 5, title: "Darjeeling → Pelling", description: "Drive to Pelling with stunning Kanchenjunga views. Visit Pemayangtse Monastery, one of the oldest in Sikkim.", overnight: "Pelling", image: "https://ik.imagekit.io/libertyindia/itineraries/northeast-india-sojourn/day-5.png" },
      { day: 6, title: "Exploring Pelling", description: "Walk to Sangachoeling Monastery. Visit the 135-foot Chenrezig Statue and sacred Khecheopalri Lake.", overnight: "Pelling", image: "https://ik.imagekit.io/libertyindia/itineraries/northeast-india-sojourn/day-6.png" },
      { day: 7, title: "Pelling → Gangtok", description: "Drive to Gangtok. Visit Do Drul Chorten and the Buddha and Guru Padmasambhava statues.", overnight: "Gangtok", image: "https://ik.imagekit.io/libertyindia/itineraries/northeast-india-sojourn/day-7.png" },
      { day: 8, title: "Gangtok → Kalimpong", description: "Drive to Kalimpong via Rumtek Monastery. Evening high tea with Lee and tales of the ancient Silk Route.", overnight: "Kalimpong", image: "https://ik.imagekit.io/libertyindia/itineraries/northeast-india-sojourn/day-8.png" },
      { day: 9, title: "Exploring Kalimpong", description: "Visit cactus nurseries, Tharpa Choling and Thongsa Gumpa monasteries. Buddha Pada cultural afternoon with music and community lunch.", overnight: "Kalimpong", image: "https://ik.imagekit.io/libertyindia/itineraries/northeast-india-sojourn/day-9.png" },
      { day: 10, title: "Depart Kalimpong", description: "Drive to Bagdogra Airport for flight to Kolkata and onward departure. End of tour.", overnight: "—", image: "https://ik.imagekit.io/libertyindia/itineraries/northeast-india-sojourn/day-10.png" },
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
  },

  // ==========================================================================
  // 15. VIBRANT GUJARAT WITH CENTRAL INDIA — 21 Days (NEW)
  // ==========================================================================
  

];
