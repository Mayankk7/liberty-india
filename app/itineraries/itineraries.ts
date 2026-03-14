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
}

// ─── Helper: Get itineraries by category ────────────────────────────────────

export function getItinerariesByCategory(category: ItineraryCategory): Itinerary[] {
  return itineraries.filter((it) => it.categories.includes(category));
}

export function getItineraryBySlug(slug: string): Itinerary | undefined {
  return itineraries.find((it) => it.slug === slug);
}

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
      { day: 1, title: "Arrived In Kolkata", description: "Arrive in Kolkata, where colonial architecture and creative spirit coexist. You'll be met at the airport and transferred to your hotel. In the evening, enjoy an orientation tour of the city, highlighted by a serene boat ride on the Hooghly River, offering a first glimpse into Kolkata's timeless charm.", overnight: "Kolkata", image: "/images/itineraries/north-east/day-1.svg" },
      { day: 2, title: "Exploring Kolkata", description: "Today is dedicated to discovering the cultural heart of the city. Visit iconic landmarks including the Victoria Memorial, St. Paul's Cathedral, Indian Museum, and Belur Math. Later, wander through Kumartuli, a historic potters' quarter where artisans craft clay idols using age-old techniques. End the day with a visit to Nahoum's, Kolkata's legendary Jewish bakery.", overnight: "Kolkata", image: "/images/itineraries/north-east/day-2.svg" },
      { day: 3, title: "Kolkata → Dibrugarh", description: "Begin with a heritage walk around Dalhousie Square, exploring colonial-era sites such as the Flower Market, Writer's Building, Governor's House, and Charnock Mausoleum. After breakfast, fly to Dibrugarh, the gateway to Assam's tea country. On arrival, transfer to your hotel.", overnight: "Dibrugarh", image: "/images/itineraries/north-east/day-3.svg" },
      { day: 4, title: "Dibrugarh", description: "Set out on a scenic drive across the iconic Dhola–Sadiya Bridge, one of India's longest river bridges. Continue to Dibru–Saikhowa National Park, home to rare wildlife including feral horses. Later, visit a traditional tea estate to learn about Assam's world-famous tea culture.", overnight: "Dibrugarh", image: "/images/itineraries/north-east/day-4.svg" },
      { day: 5, title: "Dibrugarh → Jorhat", description: "Drive to Jorhat through the lush tea country of Upper Assam. En route, enjoy views of sprawling tea estates and the Brahmaputra floodplains. On arrival, check in at your hotel and enjoy the rest of the day at leisure.", overnight: "Jorhat", image: "/images/itineraries/north-east/day-5.svg" },
      { day: 6, title: "Majuli Island Excursion", description: "Travel to Neemati Ghat and board a ferry to Majuli, the world's largest river island. Explore its renowned Vaishnavite monasteries (Satras) and interact with resident monks. Visit local villages known for pottery-making and mask craftsmanship, followed by a cultural performance reflecting the island's spiritual traditions.", overnight: "Jorhat", image: "/images/itineraries/north-east/day-6.svg" },
      { day: 7, title: "Jorhat → Kaziranga National Park", description: "Drive to Kaziranga National Park, a UNESCO World Heritage Site famed for its population of one-horned rhinoceroses. In the afternoon, enjoy a river dolphin safari on the Brahmaputra, a rare and tranquil wildlife experience.", overnight: "Kaziranga National Park", image: "/images/itineraries/north-east/day-7.svg" },
      { day: 8, title: "Kaziranga National Park", description: "Embark on an early morning jeep safari, tracking rhinos, elephants, wild buffalo, and birdlife across Kaziranga's grasslands. After breakfast, enjoy a second safari in the afternoon, offering another chance to witness the park's extraordinary biodiversity.", overnight: "Kaziranga National Park", image: "/images/itineraries/north-east/day-8.svg" },
      { day: 9, title: "Kaziranga → Shillong", description: "After breakfast, drive through scenic landscapes to Shillong, the capital of Meghalaya. Check in at your hotel and enjoy the rest of the day at leisure in this hill town often called the Scotland of the East.", overnight: "Shillong", image: "/images/itineraries/north-east/day-9.svg" },
      { day: 10, title: "Shillong → Cherrapunjee → Shillong", description: "Travel to Cherrapunjee, one of the wettest places on Earth. En route, visit Elephant Falls and Mawdok Valley. Explore dramatic natural wonders including Nohkalikai Falls, Seven Sisters Falls, Mawsmai Cave, and Wahkaba Falls.", overnight: "Shillong", image: "/images/itineraries/north-east/day-10.svg" },
      { day: 11, title: "Dawki & Mawlynnong", description: "Visit Dawki for a boat ride on the crystal-clear Umngot River, with views extending into Bangladesh. Continue to Mawlynnong, celebrated as Asia's cleanest village, known for its eco-conscious lifestyle and community-driven sustainability.", overnight: "Shillong", image: "/images/itineraries/north-east/day-11.svg" },
      { day: 12, title: "Shillong → Guwahati", description: "Drive to Guwahati. En route, visit the sacred Kamakhya Temple, one of the most revered shrines in India. Arrive in Guwahati and check in at your hotel. Enjoy the evening at leisure or explore the local markets.", overnight: "Guwahati", image: "/images/itineraries/north-east/day-12.svg" },
      { day: 13, title: "Depart Guwahati", description: "Transfer to the airport for your onward journey. Optionally, visit local sites or markets if time permits before departure.", overnight: "—", image: "/images/itineraries/north-east/day-13.svg" },
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
      { category: "Adventure Tour", title: "Painting Workshop" },
      { category: "Culture", title: "Drink at a jazz Bar" },
    ],
    heroImage: "/images/itineraries/north-east/main-bg.svg",
    overviewImage: "/images/itineraries/north-east/overview.svg",
    mapImage: "/images/itineraries/north-east/map.svg",
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
      { day: 1, title: "Arrival & Consultation", description: "Arrive at Kochi Airport, where you'll be met and transferred to the Kairali Ayurvedic Healing Village in Palakkad (approx. 3 hours). Settle into your villa amidst the tranquil forest surroundings. In the evening, meet your Ayurvedic physician for an initial consultation to assess your dosha profile and design a personalised treatment plan for your stay.", overnight: "Kairali Healing Village", image: "/images/itineraries/north-east/day-1.svg" },
      { day: 2, title: "First Full Day of Wellness", description: "Begin your morning with a group yoga session at sunrise, followed by your first Ayurvedic therapy session tailored to your consultation. Enjoy a wholesome vegetarian breakfast. In the afternoon, experience your second therapy of the day along with a rejuvenating steam bath. Conclude the evening with a guided group meditation session.", overnight: "Kairali Healing Village", image: "/images/itineraries/north-east/day-2.svg" },
      { day: 3, title: "Deepening the Healing", description: "Continue your personalised therapy programme with two Ayurvedic treatments and a steam bath. Attend your daily yoga and meditation sessions. Today features a lecture on Ayurveda, offering deeper insight into the ancient healing philosophy and how it applies to your individual wellness journey.", overnight: "Kairali Healing Village", image: "/images/itineraries/north-east/day-3.svg" },
      { day: 4, title: "Village Walk & Cultural Immersion", description: "After your morning yoga and therapy sessions, join a guided village walk through the surrounding countryside, experiencing the rhythms of rural Kerala life. Return for your afternoon treatment and steam bath, followed by evening meditation in the peaceful forest setting.", overnight: "Kairali Healing Village", image: "/images/itineraries/north-east/day-4.svg" },
      { day: 5, title: "Farm Visit & Cooking Demonstration", description: "Following your morning wellness routine, explore the retreat's organic farm on a guided walk, learning about the herbs and ingredients used in Ayurvedic treatments and cuisine. Later, attend an Ayurvedic cooking demonstration and discover how traditional recipes support holistic well-being. Continue with your afternoon therapy and evening meditation.", overnight: "Kairali Healing Village", image: "/images/itineraries/north-east/day-5.svg" },
      { day: 6, title: "Yoga Philosophy & Restoration", description: "Today's special activity is a lecture on yoga, exploring its philosophical roots and practical benefits for long-term wellness. Continue your daily rhythm of personalised therapies, steam bath, and meditation. Spend your free time at the pool, library, or wandering through the forest paths.", overnight: "Kairali Healing Village", image: "/images/itineraries/north-east/day-6.svg" },
      { day: 7, title: "Final Day (7-Night Guests) / Continuation", description: "For 7-night guests, enjoy a final morning therapy session and a closing consultation with your physician, who will provide personalised lifestyle and dietary recommendations to carry forward at home. Transfer to Kochi Airport for departure. For guests continuing to 14 or 21 nights, the weekly cycle of therapies, lectures, farm visits, village walks, and cooking demonstrations repeats, deepening your healing journey with each passing week.", overnight: "Kairali Healing Village", image: "/images/itineraries/north-east/day-7.svg" },
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
      "Expenses caused by factors beyond control (flight cancellations, roadblocks, vehicle malfunction)",
      "Medical or evacuation insurance",
      "Travel insurance",
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
    heroImage: "/images/itineraries/north-east/main-bg.svg",
    overviewImage: "/images/itineraries/north-east/overview.svg",
    mapImage: "/images/itineraries/north-east/map.svg",
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
      { day: 1, title: "Arrive in Delhi", description: "Arrive at Delhi International Airport, where you'll be met by our representative and transferred to your hotel. Settle in and rest after your journey. The evening is at leisure to begin soaking in the energy of India's capital city.", overnight: "Delhi", image: "/images/itineraries/north-east/day-1.svg" },
      { day: 2, title: "Exploring Delhi", description: "Begin with a fascinating tour of Old Delhi. Drive past the Red Fort and Jama Masjid, India's largest mosque, then enjoy a cycle rickshaw ride through the narrow, bustling lanes of Chandni Chowk. Visit the Digambar Jain Temple along the way. In the afternoon, explore New Delhi's grand landmarks. Drive past Rashtrapati Bhawan, Rajpath, and India Gate, then visit Humayun's Tomb, a masterpiece of Mughal architecture, and Qutub Minar with its ancient Iron Pillar dating to the 4th century AD.", overnight: "Delhi", image: "/images/itineraries/north-east/day-2.svg" },
      { day: 3, title: "Delhi → Agra", description: "After breakfast, depart for Agra (approx. 4 hours). On arrival, visit Agra Fort, a magnificent 16th-century fortress blending military strength with refined Mughal interiors, where Emperor Shah Jahan was famously imprisoned by his own son. Later, explore the Itmad-ud-Daula Tomb, often called the Baby Taj Mahal. This delicate marble mausoleum, commissioned by Empress Nur Jahan, is the first tomb in India built entirely of marble.", overnight: "Agra", image: "/images/itineraries/north-east/day-3.svg" },
      { day: 4, title: "Agra → Fatehpur Sikri → Jaipur", description: "Rise early to witness the Taj Mahal at sunrise—a sublime experience of shifting light and colour across one of the world's most celebrated monuments. A tribute built over 22 years by Emperor Shah Jahan in memory of his beloved wife. After breakfast, depart for Jaipur (approx. 6 hours), stopping en route at Fatehpur Sikri, the exquisite red sandstone city built by Akbar the Great in 1569 and mysteriously abandoned shortly after. Arrive in Jaipur and enjoy the rest of the day at leisure.", overnight: "Jaipur", image: "/images/itineraries/north-east/day-4.svg" },
      { day: 5, title: "Exploring Jaipur", description: "Begin with a guided excursion to the magnificent Amber Fort, the ancient capital of the Kachawaha clan. Ascend through five defensive gates to discover ornate halls, temples, and sweeping views. Nearby, visit the intriguing Panna Meena Step Well, an eight-storey 16th-century marvel with criss-crossing staircases. In the afternoon, tour the City Palace, the Jantar Mantar stone observatory, and stop for photographs at the iconic Hawa Mahal, the Palace of Winds. End the day wandering through Jaipur's colourful traditional markets.", overnight: "Jaipur", image: "/images/itineraries/north-east/day-5.svg" },
      { day: 6, title: "Depart Jaipur → Delhi", description: "After a leisurely morning, transfer from Jaipur to Delhi International Airport (approx. 5 hours) to connect with your onward flight. End of tour.", overnight: "—", image: "/images/itineraries/north-east/day-6.svg" },
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
    heroImage: "/images/itineraries/north-east/main-bg.svg",
    overviewImage: "/images/itineraries/north-east/overview.svg",
    mapImage: "/images/itineraries/north-east/map.svg",
  },

  // ==========================================================================
  // 4. COLOURFUL RAJASTHAN
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
      { day: 1, title: "Arrive in Delhi", description: "Arrive at Delhi International Airport, where you'll be met by our representative and transferred to your hotel. Settle in and enjoy the rest of the day at leisure, taking in the energy of India's capital city.", overnight: "Delhi", image: "/images/itineraries/north-east/day-1.svg" },
      { day: 2, title: "Exploring Delhi", description: "Begin with a tour of Old Delhi. Drive past the Red Fort and Jama Masjid, then enjoy a cycle rickshaw ride through the narrow, bustling lanes of Chandni Chowk. Visit the Digambar Jain Temple along the way. In the afternoon, explore New Delhi's grand landmarks. Drive past Rashtrapati Bhawan, Rajpath, and India Gate, then visit Humayun's Tomb, a masterpiece of Mughal architecture, and Qutub Minar with its ancient Iron Pillar dating to the 4th century AD.", overnight: "Delhi", image: "/images/itineraries/north-east/day-2.svg" },
      { day: 3, title: "Delhi → Mandawa", description: "After breakfast, depart for Mandawa (approx. 6 hours), a town in the heart of the Shekhawati region, known as the open-air art gallery of Rajasthan. Check in at your hotel, a heritage property set within the historic Mandawa Fort. Later, explore the town's painted havelis, including the exquisitely decorated Gulab Rai Wadia Haveli and the unique twin-winged Chowkhadi Haveli, renowned for their beautifully preserved frescoes and murals.", overnight: "Mandawa", image: "/images/itineraries/north-east/day-3.svg" },
      { day: 4, title: "Mandawa → Bikaner", description: "After breakfast, depart for Bikaner (approx. 4 hours). On arrival, check in at your hotel and rest. Later, visit Junagadh Fort, built in 1593 by Raja Rai Singh. Explore its ornate palaces including Karan Mahal, Anup Mahal, and Phool Mahal, along with intricately designed galleries, windows, and the impressive Zenana quarters.", overnight: "Bikaner", image: "/images/itineraries/north-east/day-4.svg" },
      { day: 5, title: "Bikaner → Jaisalmer", description: "After breakfast, depart for Jaisalmer (approx. 6 hours), the golden city rising from the heart of the Thar Desert. On arrival, check in at your hotel and enjoy the rest of the day at leisure, soaking in the desert atmosphere.", overnight: "Jaisalmer", image: "/images/itineraries/north-east/day-5.svg" },
      { day: 6, title: "Exploring Jaisalmer", description: "Begin with a visit to Patwon Ji ki Haveli, a cluster of five ornate mansions built over 50 years starting in 1805, followed by the asymmetrical Nathmal Ji ki Haveli, designed by two brothers who worked on opposite sides simultaneously. Continue to Jaisalmer Fort, the world's largest living fort, still home to families who have resided here for over 800 years. Explore the Jain Temples within, then visit Lake Gadisar and the royal cenotaphs at Bada Bagh.", overnight: "Jaisalmer", image: "/images/itineraries/north-east/day-6.svg" },
      { day: 7, title: "Jaisalmer → Jodhpur", description: "After breakfast, drive to Jodhpur (approx. 5 hours), the Blue City of Rajasthan, and check in at your hotel. In the evening, explore the vibrant Clock Tower Market, a sensory feast of spices, textiles, handicrafts, and local street food.", overnight: "Jodhpur", image: "/images/itineraries/north-east/day-7.svg" },
      { day: 8, title: "Jodhpur → Ranakpur → Udaipur", description: "Depart for Udaipur, stopping en route at the magnificent Ranakpur Jain Temples. Over 500 years old and superbly preserved, the main Chaumukha Temple dedicated to Adinath features 29 halls supported by 1,444 pillars, no two of which are exactly alike. Continue to Udaipur, the City of Lakes, and check in at your hotel. Enjoy the rest of the evening at leisure.", overnight: "Udaipur", image: "/images/itineraries/north-east/day-8.svg" },
      { day: 9, title: "Exploring Udaipur", description: "Visit the magnificent City Palace, a grand complex of courtyards, pavilions, and hanging gardens, along with its Crystal Gallery housing an extraordinary collection of crystal artefacts. Later, explore Jagdish Temple and Saheliyon-ki-Bari, the Garden of the Maids of Honour. In the late afternoon, enjoy a shared boat ride on Lake Pichola, taking in spectacular views of the City Palace, the Lake Palace Hotel, and the picturesque ghats along the water's edge.", overnight: "Udaipur", image: "/images/itineraries/north-east/day-9.svg" },
      { day: 10, title: "Udaipur → Chittorgarh → Bundi", description: "Depart for Bundi, stopping en route at Chittorgarh Fort, a legendary Rajput stronghold that endured three devastating sieges across its turbulent history—from Sultan Ala-ud-din Khilji in 1303 to Mughal Emperor Akbar in 1568. Continue to Bundi and check in at your hotel. This charming princely town, nestled in the hollow of green hills, retains a rustic, timeless appeal far from the tourist trail.", overnight: "Bundi", image: "/images/itineraries/north-east/day-10.svg" },
      { day: 11, title: "Bundi → Jaipur", description: "After breakfast, explore the temples of Menal and Bijolia, dating from the 12th century. Visit the Taragarh Fort, the Rajput Chattar Mahal Palace with its magnificent 18th-century paintings, the ornately sculpted Rani ki Baori step well, and the royal cenotaphs. Later, drive to Jaipur (approx. 4 hours), the Pink City, and check in at your hotel.", overnight: "Jaipur", image: "/images/itineraries/north-east/day-11.svg" },
      { day: 12, title: "Exploring Jaipur", description: "Begin with a guided excursion to the magnificent Amber Fort, the ancient Kachawaha capital. Ascend through five defensive gates to discover ornate halls, temples, and sweeping views. Nearby, visit the intriguing Panna Meena Step Well, an eight-storey 16th-century marvel with criss-crossing staircases. In the afternoon, tour the City Palace, the Jantar Mantar stone observatory, and stop for photographs at the iconic Hawa Mahal. End the day wandering through Jaipur's colourful traditional markets.", overnight: "Jaipur", image: "/images/itineraries/north-east/day-12.svg" },
      { day: 13, title: "Jaipur → Fatehpur Sikri → Agra", description: "After breakfast, depart for Agra (approx. 6 hours), stopping en route at Fatehpur Sikri, the exquisite red sandstone city built by Akbar the Great in 1569 and mysteriously abandoned shortly after. On arrival, visit Agra Fort, a magnificent 16th-century fortress blending military strength with refined Mughal interiors, where Emperor Shah Jahan was famously imprisoned by his own son.", overnight: "Agra", image: "/images/itineraries/north-east/day-13.svg" },
      { day: 14, title: "Agra → Delhi", description: "Rise early to witness the Taj Mahal at sunrise—a sublime experience of shifting light and colour across one of the world's most celebrated monuments. Return to the hotel for breakfast. Later, visit the Itmad-ud-Daula Tomb, the delicate marble mausoleum known as the Baby Taj. Afterwards, drive to Delhi International Airport for your onward flight. End of tour.", overnight: "—", image: "/images/itineraries/north-east/day-1.svg" },
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
    heroImage: "/images/itineraries/north-east/main-bg.svg",
    overviewImage: "/images/itineraries/north-east/overview.svg",
    mapImage: "/images/itineraries/north-east/map.svg",
  },

  // ==========================================================================
  // 5. ENCHANTING CENTRAL INDIA
  // ==========================================================================
  {
    slug: "enchanting-central-india",
    title: "Enchanting Central India",
    subtitle: "Experience the ancient caves, sacred temples, and forgotten citadels of India's heartland. Journey through Maharashtra and Madhya Pradesh, where history is carved into rock, woven into fabric, and whispered along sacred riverbanks.",
    categories: ["Heritage", "Culture", "Architecture", "Spiritual"],
    duration: "13 Days",
    durationDays: 13,
    startingPrice: "€1,065",
    startingPriceNote: "per person (2 Pax)",
    route: "Mumbai → Aurangabad → Burhanpur → Maheshwar → Mandu → Ujjain → Bhopal → Mumbai",
    bestTime: "October – March",
    overview: [
      "From the cosmopolitan energy of Mumbai and the ancient rock-cut masterpieces of Ajanta and Ellora to the sacred Jyotirlingas of Omkareshwar and Ujjain, and the hauntingly beautiful ruins of Mandu, this journey reveals a side of India few travellers ever see—where history, spirituality, and craftsmanship intertwine across centuries.",
      "Explore UNESCO World Heritage caves adorned with centuries-old paintings, witness the world's oldest surviving handloom traditions in Maheshwar, stand before prehistoric rock shelters at Bhimbetka, and discover the serene Buddhist monuments of Sanchi. This is Central India—deeply spiritual, architecturally magnificent, and profoundly rewarding.",
    ],
    summary: [
      "Boat ride to Elephanta Island and its ancient rock-cut cave temples dedicated to Lord Shiva",
      "Explore the UNESCO World Heritage Ellora Caves, spanning Hindu, Buddhist, and Jain traditions",
      "Visit the UNESCO World Heritage Ajanta Caves, home to exquisite paintings dating from 200 BC",
      "Discover the sacred Jyotirlinga shrines of Omkareshwar and Mahakaleshwar in Ujjain",
    ],
    summaryRight: [
      "Explore the romantic ruins of Mandu, including Jahaz Mahal, Roopmati's Pavilion, and Hoshang Shah's Tomb",
      "Experience Maheshwar's centuries-old handloom weaving tradition along the banks of the Narmada",
      "Visit the prehistoric Bhimbetka rock shelters, a UNESCO World Heritage Site with paintings up to 12,000 years old",
      "Explore the ancient Buddhist monuments of Sanchi, including the Great Stupa and Ashoka Pillar",
    ],
    days: [
      { day: 1, title: "Arrive in Mumbai", description: "Arrive in Mumbai, India's vibrant coastal metropolis. You'll be met at the airport and transferred to your hotel. Settle in and enjoy the rest of the day at leisure, taking in the energy of one of Asia's most dynamic cities.", overnight: "Mumbai", image: "/images/itineraries/north-east/day-1.svg" },
      { day: 2, title: "Exploring Mumbai", description: "Begin with a boat ride to Elephanta Island to explore its ancient rock-cut cave temples, home to a stunning 20-foot Shiva sculpture. Return to the city and visit the iconic Gateway of India. Later, drive up to Malabar Hill to visit the Hanging Gardens and Kamala Nehru Park, offering sweeping views of the city. Continue to Dhobi Ghat, India's largest open-air laundry, for a glimpse into Mumbai's unique daily life.", overnight: "Mumbai", image: "/images/itineraries/north-east/day-2.svg" },
      { day: 3, title: "Mumbai → Aurangabad", description: "Transfer to the airport for your flight to Aurangabad. On arrival, check in at your hotel. Later, visit Bibi ka Maqbara, a 17th-century tomb commissioned by Prince Azam Shah in memory of his mother. Often called the Taj of the Deccan, it bears a striking resemblance to the Taj Mahal.", overnight: "Aurangabad", image: "/images/itineraries/north-east/day-3.svg" },
      { day: 4, title: "Exploring Aurangabad", description: "After breakfast, visit the UNESCO World Heritage Ellora Caves, a remarkable complex of 34 rock-cut temples spanning Hinduism, Buddhism, and Jainism, carved between 350 AD and 700 AD. The Kailasa Temple in Cave 16 is an unparalleled masterpiece. Later, explore Daulatabad Fort, a formidable hilltop fortress with a tumultuous history stretching across the Delhi Sultanate and Mughal eras, crowned by the 30-metre Chand Minar. The evening is free to explore local markets.", overnight: "Aurangabad", image: "/images/itineraries/north-east/day-4.svg" },
      { day: 5, title: "Aurangabad → Ajanta → Burhanpur", description: "Depart for Burhanpur, stopping en route at the UNESCO World Heritage Ajanta Caves. Discovered by British officers in the 19th century, these 30 caves date from 200 BC to 650 AD and contain exquisite paintings and carvings depicting the life and teachings of the Buddha. Continue to Burhanpur and check in at your hotel.", overnight: "Burhanpur", image: "/images/itineraries/north-east/day-5.svg" },
      { day: 6, title: "Burhanpur → Omkareshwar → Maheshwar", description: "After breakfast, depart for Maheshwar, stopping en route at Omkareshwar, a sacred riverine island and one of India's twelve revered Jyotirlinga shrines of Lord Shiva. Visit the Mamleshwar Jyotirlinga, the ancient Kedareshwar Temple, and the architecturally stunning Siddhanath Temple. Continue to Maheshwar, a serene town on the banks of the Narmada River, and check in at your hotel.", overnight: "Maheshwar", image: "/images/itineraries/north-east/day-6.svg" },
      { day: 7, title: "Exploring Maheshwar", description: "Spend the day exploring this historic town, renowned as a centre of handloom textile weaving since the 5th century. Discover the celebrated Maheshwari sarees, crafted using traditional techniques passed down through generations. Visit the Holkar Fort, named after Rani Ahilyabai Holkar, and enjoy panoramic views from its ramparts. Explore the riverside temples, including Pandrinath Temple and Jaleshwar Temple.", overnight: "Maheshwar", image: "/images/itineraries/north-east/day-7.svg" },
      { day: 8, title: "Maheshwar → Mandu", description: "After a leisurely breakfast, depart for Mandu (approx. 1.5 hours), a ruined citadel perched along the Vindhya ranges at 2,000 feet. Check in at your hotel and enjoy the rest of the day at leisure, soaking in the atmosphere of this hauntingly beautiful hilltop settlement.", overnight: "Mandu", image: "/images/itineraries/north-east/day-8.svg" },
      { day: 9, title: "Exploring Mandu", description: "Explore the architectural marvels of Mandu, a celebration in stone of the love between poet-prince Baz Bahadur and his consort Rani Roopmati. Visit Roopmati's Pavilion with its sweeping views of the Narmada plains, and the elegant Jahaz Mahal, a two-storeyed palace built between two artificial lakes. Continue to Hindola Mahal, Baz Bahadur's Palace, and the grand Jami Masjid. Visit Hoshang Shah's Tomb, India's first marble edifice, believed to have inspired the builders of the Taj Mahal.", overnight: "Mandu", image: "/images/itineraries/north-east/day-9.svg" },
      { day: 10, title: "Mandu → Ujjain", description: "After breakfast, depart for Ujjain (approx. 3.5 hours), one of India's most ancient and sacred cities on the banks of the Kshipra River. Visit the towering Mahakaleshwar Temple, one of the twelve Jyotirlingas and among the most sacred abodes of Lord Shiva, and the Jantar Mantar observatory, built by Maharaja Jai Singh in 1733. In the evening, witness the atmospheric Aarti ceremony at Ram Ghat.", overnight: "Ujjain", image: "/images/itineraries/north-east/day-10.svg" },
      { day: 11, title: "Ujjain → Bhopal", description: "Depart for Bhopal, stopping en route at the UNESCO World Heritage Bhimbetka Caves, a collection of over 600 rock shelters containing prehistoric paintings believed to be up to 12,000 years old. Also visit the Bhojeshwar Temple, an incomplete but magnificent Hindu shrine housing a towering 7.5-foot Shiva lingam. Arrive in Bhopal, the City of Lakes. Visit the grand Taj-ul-Masjid, said to be the largest mosque in the country, and the Tribal Habitat Museum.", overnight: "Bhopal", image: "/images/itineraries/north-east/day-11.svg" },
      { day: 12, title: "Exploring Bhopal", description: "After breakfast, take an excursion to Sanchi (approx. 1 hour), a UNESCO World Heritage Site and the oldest surviving Buddhist sanctuary in India. Explore the Great Stupa, the magnificent toranas depicting the life of the Buddha, and the Ashoka Pillar. Visit the Archaeological Museum at the base of Sanchi hill. In the afternoon, continue to the Udaygiri Caves, a group of 20 rock-cut Gupta-era shrines dating to the 4th–5th century AD.", overnight: "Bhopal", image: "/images/itineraries/north-east/day-12.svg" },
      { day: 13, title: "Depart Bhopal → Mumbai", description: "After breakfast, transfer to the airport for your flight to Mumbai. On arrival, connect with your onward international flight. End of tour.", overnight: "—", image: "/images/itineraries/north-east/day-13.svg" },
    ],
    inclusions: [
      "Accommodation in single/twin rooms at selected hotel category or similar",
      "Meals as per hotel plan (breakfast at all hotels; lunch and dinner where specified)",
      "AC vehicle transfers and sightseeing (Toyota Crysta for 2–3 Pax / Tempo Traveller for 4–6 Pax)",
      "GST (Goods & Services Tax) as applicable",
    ],
    exclusions: [
      "Domestic or international airfare (Mumbai–Aurangabad and Bhopal–Mumbai flights to be advised separately)",
      "Monument entrance fees and guide services",
      "Personal expenses (tips, laundry, beverages, spa, telephone calls)",
      "Expenses caused by factors beyond control (flight cancellations, roadblocks, vehicle malfunction, natural calamities)",
      "Medical or evacuation insurance",
      "Travel insurance",
      "Items not explicitly mentioned in the programme",
    ],
    datesPrices: [
      "Enchanting Central India",
      "Price Validity OCT 2025 – MAR 2026",
      "Starting from €1,065 per person (Standard Hotels, 4–6 Pax, Twin Sharing)",
    ],
    notes: [
      "Blackout Period: Dec 20 – Jan 10 (prices above not valid)",
      "Festival Premium: Extra charges may apply during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
      "Elephanta Caves (Mumbai) closed on Mondays; Ellora Caves closed on Tuesdays; Ajanta Caves closed on Mondays",
      "Domestic airfares (Mumbai–Aurangabad and Bhopal–Mumbai) to be advised separately",
    ],
    signatureExperiences: [
      { category: "Culture & History", title: "Boat ride to Elephanta Island's ancient cave temples" },
      { category: "Culture & History", title: "Explore the UNESCO World Heritage Ellora and Ajanta Caves" },
      { category: "Culture & History", title: "Discover the romantic ruins and palaces of Mandu" },
      { category: "Culture & History", title: "Experience Maheshwar's centuries-old handloom weaving tradition" },
      { category: "Adventure Tour", title: "Witness the evening Aarti ceremony at Ram Ghat in Ujjain" },
      { category: "Culture & History", title: "Visit the prehistoric Bhimbetka rock shelters and Buddhist monuments of Sanchi" },
    ],
    heroImage: "/images/itineraries/north-east/main-bg.svg",
    overviewImage: "/images/itineraries/north-east/overview.svg",
    mapImage: "/images/itineraries/north-east/map.svg",
  },

  // ==========================================================================
  // 6. GEMS OF NORTH INDIA
  // ==========================================================================
  {
    slug: "gems-of-north-india",
    title: "Gems of North India",
    subtitle: "Journey through the spiritual heartland and ancient kingdoms of North India. From the sacred ghats of Varanasi and the sculptured temples of Khajuraho to the mighty forts of Gwalior and the Taj Mahal at sunrise.",
    categories: ["Heritage", "Culture", "Spiritual", "Architecture"],
    duration: "13 Days",
    durationDays: 13,
    startingPrice: "€1,868",
    startingPriceNote: "per person (2 Pax)",
    route: "Delhi → Varanasi → Khajuraho → Agra → Jaipur → Jodhpur → Udaipur → Mumbai",
    bestTime: "October – March",
    overview: [
      "From the refined Nawabi culture of Lucknow and the sacred riverbanks of Ayodhya and Varanasi to the exquisitely carved temples of Khajuraho, the forgotten medieval splendour of Orchha, and the Mughal grandeur of Agra and Delhi, this journey traces the spiritual and architectural heart of North India across centuries of history.",
      "Witness ancient Aarti ceremonies on the Ganges, explore temples adorned with some of the finest sculpture ever created, stand before legendary forts and palaces, and experience the Taj Mahal bathed in sunrise light. This is North India—deeply spiritual, richly layered, and endlessly fascinating.",
    ],
    summary: [
      "Explore the Bara Imambara and its famous Bhul Bhulaiya maze in Lucknow, the City of Nawabs",
      "Attend the evening Aarti ceremony on the banks of the sacred Sarayu River in Ayodhya",
      "Dawn boat ride on the Ganges at Varanasi, witnessing ancient bathing rituals on the ghats",
      "Boat ride at Sangam in Prayagraj, the sacred confluence of three rivers",
    ],
    summaryRight: [
      "Visit the intricately sculpted Hindu and Jain temples of Khajuraho, a UNESCO World Heritage Site",
      "Discover the medieval Rajput palaces and temples of Orchha, a forgotten gem of Bundelkhand",
      "Explore the magnificent Gwalior Fort, Jai Vilas Palace, and the Tomb of Tansen",
      "Sunrise visit to the Taj Mahal and the exquisite Itmad-ud-Daula Tomb in Agra",
    ],
    days: [
      { day: 1, title: "Arrive in Lucknow", description: "Arrive in Lucknow, the City of Nawabs, renowned for its music, poetry, and refined cultural traditions. You'll be met at the airport and transferred to your hotel. Settle in and enjoy the rest of the day at leisure, soaking in the gracious atmosphere of Uttar Pradesh's capital.", overnight: "Lucknow", image: "/images/itineraries/north-east/day-1.svg" },
      { day: 2, title: "Exploring Lucknow", description: "Begin at the imposing Bara Imambara, the largest Shia congregational hall in the world, and navigate its famous Bhul Bhulaiya maze. Continue to the Chota Imambara, known for its ornate chandeliers, and the British Residency, a poignant relic of the 1857 uprising. Visit the State Museum to explore the artistic heritage of the Awadh region. In the late afternoon, capture a mesmerising sunset at the majestic Rumi Darwaza. End the day exploring Lucknow's celebrated Chikankari embroidery at Aminabad Market.", overnight: "Lucknow", image: "/images/itineraries/north-east/day-2.svg" },
      { day: 3, title: "Lucknow → Ayodhya", description: "After breakfast, drive to Ayodhya (approx. 2.5 hours), one of Hinduism's most sacred cities and the revered birthplace of Lord Rama, set along the banks of the Sarayu River. Visit key religious sites including Hanuman Garhi, Kanak Bhawan, and Dashrath Mahal. In the evening, attend the deeply moving Saryu Ghat Aarti, a lamp-lit ceremony of prayer and devotion on the riverbank.", overnight: "Ayodhya", image: "/images/itineraries/north-east/day-3.svg" },
      { day: 4, title: "Ayodhya → Varanasi", description: "After breakfast, drive to Varanasi (approx. 4 hours), one of the oldest continuously inhabited cities in the world. Check in at your hotel. In the evening, head to the banks of the Ganges to witness the spectacular Evening Aarti Ceremony, best experienced from a traditional boat on the river, as priests perform elaborate rituals of fire and devotion.", overnight: "Varanasi", image: "/images/itineraries/north-east/day-4.svg" },
      { day: 5, title: "Exploring Varanasi", description: "At dawn, take a boat ride on the Ganges to witness the ancient bathing rituals along the ghats—a timeless scene of devotion stretching over three miles of riverbank. Afterwards, walk through the narrow, storied lanes of the old city. Later, visit Sarnath, where the Buddha preached his first sermon at the Deer Park. Explore the Dhamek Stupa and ruined monasteries. Return to Varanasi to visit the Bharat Mata Temple, Vishwanath Temple (the Golden Temple), and the Durga Temple.", overnight: "Varanasi", image: "/images/itineraries/north-east/day-5.svg" },
      { day: 6, title: "Varanasi → Prayagraj", description: "After a leisurely breakfast, depart for Prayagraj (approx. 4 hours), formerly known as Allahabad, an important pilgrimage city at the meeting of three sacred rivers. On arrival, enjoy a boat ride on the Sangam, the revered confluence of the Ganga, Yamuna, and the mythical Saraswati—one of Hinduism's most sacred sites.", overnight: "Prayagraj", image: "/images/itineraries/north-east/day-6.svg" },
      { day: 7, title: "Prayagraj → Khajuraho", description: "After breakfast, depart for Khajuraho (approx. 5 hours), home to one of India's most extraordinary temple complexes. Check in at your hotel. The rest of the day is at leisure to relax before the next day's explorations.", overnight: "Khajuraho", image: "/images/itineraries/north-east/day-7.svg" },
      { day: 8, title: "Exploring Khajuraho", description: "Begin with the Eastern Group of temples, including the Parsvanath Temple, the largest Jain temple in the complex, adorned with charming depictions of everyday life. In the afternoon, explore the Western Group, including the magnificent Mahadeo Temple dedicated to Shiva, the Chausat Yogini Temple dedicated to Kali, and the Chitragupta Temple honouring the Sun God—all featuring exquisitely detailed carvings of gods, goddesses, and celestial figures.", overnight: "Khajuraho", image: "/images/itineraries/north-east/day-8.svg" },
      { day: 9, title: "Khajuraho → Orchha", description: "After breakfast, drive to Orchha (approx. 3 hours), a beautifully preserved medieval town frozen in time along the Betwa River. Explore the Raj Mahal Palace, begun in the 16th century by Rudra Pratap Singh, the Laxmi Narayan Temple built by King Veer Singh Deo in 1622, and the uniquely designed Chaturbhuj Temple with its smooth mosque-like dome and open-sky courtyard.", overnight: "Orchha", image: "/images/itineraries/north-east/day-9.svg" },
      { day: 10, title: "Orchha → Gwalior", description: "After breakfast, drive to Gwalior (approx. 2.5 hours), a city dominated by one of India's most formidable hilltop forts. Explore the legendary Gwalior Fort, believed to date from the 3rd century, and the opulent Jai Vilas Palace built in 1874 with its crystal chandeliers spanning 75 acres. Visit the Gujari Mahal, the Man Mandir Palace, and the Tomb of Tansen, the legendary musician of Emperor Akbar's court.", overnight: "Gwalior", image: "/images/itineraries/north-east/day-10.svg" },
      { day: 11, title: "Gwalior → Agra", description: "After breakfast, drive to Agra (approx. 3.5 hours). On arrival, visit Agra Fort, a magnificent 16th-century fortress blending military strength with refined Mughal interiors, where Emperor Shah Jahan was famously imprisoned by his own son. Later, explore the Itmad-ud-Daula Tomb, often called the Baby Taj Mahal—the first tomb in India built entirely of marble, commissioned by Empress Nur Jahan for her father.", overnight: "Agra", image: "/images/itineraries/north-east/day-11.svg" },
      { day: 12, title: "Agra → Delhi", description: "Rise early to witness the Taj Mahal at sunrise—a sublime experience of shifting light and colour across one of the world's most celebrated monuments. A tribute built over 22 years by Emperor Shah Jahan in memory of his beloved wife. After breakfast, drive to Delhi (approx. 4 hours) and check in at your hotel. The rest of the day is at leisure.", overnight: "Delhi", image: "/images/itineraries/north-east/day-12.svg" },
      { day: 13, title: "Exploring Delhi", description: "Begin with a tour of Old Delhi. Drive past the Red Fort and Jama Masjid, then enjoy a cycle rickshaw ride through the narrow, bustling lanes of Chandni Chowk. Visit the Digambar Jain Temple along the way. In the afternoon, explore New Delhi's grand landmarks. Drive past Rashtrapati Bhawan, Rajpath, and India Gate, then visit Humayun's Tomb, a masterpiece of Mughal architecture, and Qutub Minar with its ancient Iron Pillar dating to the 4th century AD.", overnight: "Delhi", image: "/images/itineraries/north-east/day-13.svg" },
      { day: 14, title: "Depart Delhi", description: "Transfer to Delhi International Airport for your onward flight. End of tour.", overnight: "—", image: "/images/itineraries/north-east/day-1.svg" },
    ],
    inclusions: [
      "Accommodation in single/twin rooms at selected hotel category or similar",
      "Daily breakfast",
      "AC vehicle transfers and sightseeing (Toyota Crysta for 2–3 Pax / Tempo Traveller for 4–6 Pax)",
      "Morning and evening boat rides in Varanasi",
      "Boat ride at Sangam in Prayagraj",
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
      "Gems of North India",
      "Price Validity OCT 2025 – MAR 2026",
      "Starting from €1,250 per person (Standard Hotels, 4–6 Pax, Twin Sharing)",
    ],
    notes: [
      "Blackout Period: Dec 20 – Jan 10 (prices above not valid)",
      "Festival Premium: Extra charges may apply during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
      "Red Fort (Delhi) is closed on Mondays; Taj Mahal (Agra) is closed on Fridays",
    ],
    signatureExperiences: [
      { category: "Culture & History", title: "Explore the Bara Imambara and Bhul Bhulaiya maze in Lucknow" },
      { category: "Culture & History", title: "Attend the Saryu Ghat Aarti ceremony in Ayodhya" },
      { category: "Adventure Tour", title: "Dawn boat ride on the Ganges at Varanasi" },
      { category: "Culture & History", title: "Boat ride at the sacred Sangam confluence in Prayagraj" },
      { category: "Culture & History", title: "Discover the sculptured temples of Khajuraho" },
      { category: "Culture & History", title: "Explore the medieval palaces and temples of Orchha" },
      { category: "Culture & History", title: "Visit the legendary Gwalior Fort and Tomb of Tansen" },
      { category: "Culture & History", title: "Sunrise visit to the Taj Mahal" },
    ],
    heroImage: "/images/itineraries/north-east/main-bg.svg",
    overviewImage: "/images/itineraries/north-east/overview.svg",
    mapImage: "/images/itineraries/north-east/map.svg",
  },

  // ==========================================================================
  // 7. GOLDEN TRIANGLE WITH RANTHAMBHORE
  // ==========================================================================
  {
    slug: "taj-and-tigers",
    title: "Taj & Tigers",
    subtitle: "Experience the iconic wonders of India's Golden Triangle combined with thrilling wildlife safaris. Visit the Taj Mahal at sunrise, explore Delhi's historic sites, discover the pink city of Jaipur, and track tigers in Ranthambhore National Park.",
    categories: ["Heritage", "Culture", "Wildlife", "Adventure"],
    duration: "9 Days",
    durationDays: 9,
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
      { day: 1, title: "Arrive in Delhi", description: "Arrive at Delhi International Airport, where you'll be met by our representative and transferred to your hotel. Settle in and enjoy the rest of the day at leisure, taking in the energy of India's capital city.", overnight: "Delhi", image: "/images/itineraries/north-east/day-1.svg" },
      { day: 2, title: "Exploring Delhi", description: "Begin with a tour of Old Delhi. Drive past the Red Fort and Jama Masjid, India's largest mosque, then enjoy a cycle rickshaw ride through the narrow, bustling lanes of Chandni Chowk. Visit the Digambar Jain Temple along the way. In the afternoon, explore New Delhi's grand landmarks. Drive past Rashtrapati Bhawan, Rajpath, and India Gate, then visit Humayun's Tomb, a masterpiece of Mughal architecture, and Qutub Minar with its ancient Iron Pillar dating to the 4th century AD.", overnight: "Delhi", image: "/images/itineraries/north-east/day-2.svg" },
      { day: 3, title: "Delhi → Agra", description: "After breakfast, depart for Agra (approx. 4 hours). On arrival, visit Agra Fort, a magnificent 16th-century fortress blending military strength with refined Mughal interiors, where Emperor Shah Jahan was famously imprisoned by his own son. Later, explore the Itmad-ud-Daula Tomb, often called the Baby Taj Mahal. This delicate marble mausoleum, commissioned by Empress Nur Jahan, is the first tomb in India built entirely of marble.", overnight: "Agra", image: "/images/itineraries/north-east/day-3.svg" },
      { day: 4, title: "Agra → Fatehpur Sikri → Jaipur", description: "Rise early to witness the Taj Mahal at sunrise—a sublime experience of shifting light and colour across one of the world's most celebrated monuments. After breakfast, depart for Jaipur (approx. 6 hours), stopping en route at Fatehpur Sikri, the exquisite red sandstone city built by Akbar the Great in 1569 and mysteriously abandoned shortly after. Arrive in Jaipur and enjoy the rest of the day at leisure.", overnight: "Jaipur", image: "/images/itineraries/north-east/day-4.svg" },
      { day: 5, title: "Exploring Jaipur", description: "Begin with a guided excursion to the magnificent Amber Fort, the ancient capital of the Kachawaha clan. Ascend through five defensive gates to discover ornate halls, temples, and sweeping views. Nearby, visit the intriguing Panna Meena Step Well, an eight-storey 16th-century marvel with criss-crossing staircases. In the afternoon, tour the City Palace, the Jantar Mantar stone observatory, and stop for photographs at the iconic Hawa Mahal, the Palace of Winds. End the day wandering through Jaipur's colourful traditional markets.", overnight: "Jaipur", image: "/images/itineraries/north-east/day-5.svg" },
      { day: 6, title: "Jaipur → Ranthambhore", description: "After breakfast, depart for Ranthambhore National Park (approx. 3.5 hours), one of the biggest and most renowned national parks in Northern India, and a former hunting ground of the Maharajas of Jaipur. Check in at your hotel and enjoy the rest of the day at leisure, preparing for the next day's wildlife adventures.", overnight: "Ranthambhore", image: "/images/itineraries/north-east/day-6.svg" },
      { day: 7, title: "Ranthambhore Safari", description: "Embark on an early morning jeep safari with an English-speaking naturalist, tracking Bengal tigers, leopards, sloth bears, and diverse birdlife through the park's dramatic landscape of dry deciduous forests and ancient ruins. In the afternoon, set out on a second safari, offering another chance to encounter Ranthambhore's extraordinary wildlife in the golden light of the late day.", overnight: "Ranthambhore", image: "/images/itineraries/north-east/day-7.svg" },
      { day: 8, title: "Ranthambhore → Delhi", description: "After breakfast, depart for Delhi (approx. 6 hours). On arrival, transfer to Delhi International Airport for your onward flight. End of tour.", overnight: "—", image: "/images/itineraries/north-east/day-8.svg" },
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
    heroImage: "/images/itineraries/north-east/main-bg.svg",
    overviewImage: "/images/itineraries/north-east/overview.svg",
    mapImage: "/images/itineraries/north-east/map.svg",
  },

  // ==========================================================================
  // 8. HIGHLIGHTS OF KERALA
  // ==========================================================================
  {
    slug: "highlights-of-kerala",
    title: "Highlights of Kerala",
    subtitle: "Drift through Kerala's enchanting backwaters, explore misty tea plantations, and unwind on golden beaches. Experience God's Own Country through its spice gardens, wildlife sanctuaries, and centuries-old cultural traditions.",
    categories: ["Nature", "Culture", "Adventure", "Wildlife"],
    duration: "11 Days",
    durationDays: 11,
    startingPrice: "€1,110",
    startingPriceNote: "per person (2 Pax)",
    route: "Kochi → Munnar → Periyar → Alleppey (Houseboat) → Kumarakom → Mararikulam → Kochi",
    bestTime: "October – March",
    overview: [
      "From the colonial charm and Chinese fishing nets of Fort Kochi to the emerald tea gardens of Munnar, the wildlife-rich forests of Periyar, the languid backwaters of Alleppey, and the sun-kissed shores of Mararikulam, this journey captures the very essence of Kerala—a land of lush beauty, living traditions, and effortless serenity.",
      "Watch Kathakali dancers bring ancient epics to life, walk through aromatic spice plantations, cruise past palm-fringed canals on a traditional houseboat, and end your days on a quiet stretch of golden beach. This is Kerala—unhurried, verdant, and deeply restorative.",
    ],
    summary: [
      "Visit the Mattancherry Dutch Palace, Jewish Synagogue, and Chinese Fishing Nets in historic Fort Kochi",
      "Kathakali dance performance—an elaborate retelling of ancient epics through vibrant costume and gesture",
      "Walk through the emerald tea gardens of Munnar and visit the Tea Museum",
      "Guided spice plantation tour through the aromatic gardens of Periyar",
    ],
    summaryRight: [
      "Boat cruise on Lake Periyar in the wildlife sanctuary, spotting elephants, bison, and exotic birds",
      "Overnight houseboat cruise through Kerala's palm-fringed backwater canals",
      "Explore the bird sanctuary and tranquil waterways of Kumarakom on Vembanad Lake",
      "Relax on the pristine golden beach at Mararikulam",
    ],
    days: [
      { day: 1, title: "Arrive in Kochi", description: "Arrive at Kochi International Airport, where you'll be met by our representative and transferred to your hotel. Settle in and enjoy the rest of the day at leisure in this historic port city where European, Arab, and Indian cultures have mingled for centuries.", overnight: "Kochi", image: "/images/itineraries/north-east/day-1.svg" },
      { day: 2, title: "Exploring Kochi", description: "Begin with a tour of Kochi's heritage sites. Visit the Mattancherry Dutch Palace with its vivid 17th-century Ramayana murals, the Jewish Synagogue in Jew Town, and St. Francis Church, the oldest European church in India. In the evening, visit Fort Cochin to see the iconic Chinese Fishing Nets. Afterwards, enjoy a traditional Kathakali dance performance at a local theatre—an elaborate art form that brings the great Hindu epics to life through dramatic costumes, vivid face paint, and expressive hand gestures.", overnight: "Kochi", image: "/images/itineraries/north-east/day-2.svg" },
      { day: 3, title: "Kochi → Munnar", description: "After breakfast, depart for Munnar (approx. 3 hours), a hill station set at 1,600 metres above sea level at the confluence of three mountain streams. Once the summer retreat of the British Raj, it is surrounded by endless rolling tea plantations. Check in at your hotel and enjoy the rest of the day at leisure amidst the cool, misty mountain air.", overnight: "Munnar", image: "/images/itineraries/north-east/day-3.svg" },
      { day: 4, title: "Exploring Munnar", description: "Visit the Munnar Tea Plantations and the Tea Museum, which displays antiquities, vintage photographs, and original tea processing machinery. Learn about the stages of black tea production and sample different varieties in the demonstration room. Later, enjoy a walk through the tea gardens, touching and smelling the plants in their natural environment. The evening is free to relax and take in the mountain scenery.", overnight: "Munnar", image: "/images/itineraries/north-east/day-4.svg" },
      { day: 5, title: "Munnar → Periyar", description: "After breakfast, drive to Periyar (approx. 3 hours), also known as Thekkady, home to one of the world's most fascinating wildlife reserves. The Periyar Wildlife Sanctuary spans 777 sq km of thick evergreen forest and was declared a Tiger Reserve in 1978. Enjoy a guided spice plantation tour through nearby gardens where cardamom, pepper, cinnamon, and other aromatic plants are cultivated in their natural environment.", overnight: "Periyar", image: "/images/itineraries/north-east/day-5.svg" },
      { day: 6, title: "Exploring Periyar", description: "After breakfast, enjoy a boat cruise on Lake Periyar within the national park. Glide across the tranquil waters, spotting herds of wild elephants, bison, deer, and spectacular birdlife along the forested shores. The afternoon is free to relax or explore the surroundings at your own pace.", overnight: "Periyar", image: "/images/itineraries/north-east/day-6.svg" },
      { day: 7, title: "Periyar → Alleppey Houseboat", description: "After breakfast, travel to Alleppey, the gateway to Kerala's famous backwaters. Board your traditional houseboat—your floating hotel for the next 24 hours, complete with a crew of four including guide, cooks, and boatmen. Cruise through centuries-old backwater canals flanked by swaying palms, passing villages, rice paddies, and oared boats laden with coconuts. Watch the unhurried rhythms of daily life along the waterways. Lunch and dinner are served on board.", overnight: "Houseboat", image: "/images/itineraries/north-east/day-7.svg" },
      { day: 8, title: "Houseboat → Kumarakom", description: "Disembark from your houseboat and transfer to Kumarakom, a cluster of small islands on Vembanad Lake interspersed with a network of canals—the largest backwater system in Kerala. Check in at your hotel. The adjoining bird sanctuary is home to Siberian storks, egrets, herons, darters, and numerous migratory species. Enjoy the rest of the day at leisure.", overnight: "Kumarakom", image: "/images/itineraries/north-east/day-8.svg" },
      { day: 9, title: "Kumarakom → Mararikulam", description: "After breakfast, drive to Mararikulam (approx. 1 hour), a tranquil fishing village blessed with a pristine golden beach. Check in at your hotel and spend the day relaxing by the beach or the pool.", overnight: "Mararikulam", image: "/images/itineraries/north-east/day-9.svg" },
      { day: 10, title: "Mararikulam", description: "A full day at leisure to unwind on the beach, enjoy the resort facilities, or simply soak in the peaceful coastal atmosphere. This is your day to rest and reflect before the journey home.", overnight: "Mararikulam", image: "/images/itineraries/north-east/day-10.svg" },
      { day: 11, title: "Depart Mararikulam → Kochi", description: "Morning transfer to Kochi Airport (approx. 2 hours) for your onward flight. End of tour.", overnight: "—", image: "/images/itineraries/north-east/day-11.svg" },
    ],
    inclusions: [
      "Accommodation in single/twin rooms at selected hotel category or similar",
      "Meals as per hotel plan (breakfast at all hotels; full board on houseboat)",
      "AC vehicle transfers and sightseeing (Toyota Crysta for 2–3 Pax / Tempo Traveller for 4–6 Pax)",
      "Kathakali dance performance at a local theatre in Kochi",
      "Guided spice plantation tour in Periyar",
      "Common boat cruise on Lake Periyar",
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
      "Highlights of Kerala",
      "Price Validity OCT 2025 – MAR 2026",
      "Starting from €1,110 per person (Standard Hotels, 4–6 Pax, Twin Sharing)",
    ],
    notes: [
      "Blackout Period: Dec 20 – Jan 10 (prices above not valid)",
      "Festival Premium: Extra charges may apply during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
      "Mattancherry Dutch Palace and Jewish Synagogue in Kochi are closed on Fridays; Synagogue also closed on Saturdays and Jewish holidays",
      "Houseboat availability is subject to seasonal demand; houseboats travel in convoy with 2 or 4 bedrooms per boat",
    ],
    signatureExperiences: [
      { category: "Culture & History", title: "Explore Fort Kochi's Dutch Palace, Jewish Synagogue, and Chinese Fishing Nets" },
      { category: "Culture & History", title: "Kathakali dance performance with traditional make-up ritual" },
      { category: "Nature & Exploration", title: "Walk through the tea gardens and visit the Tea Museum in Munnar" },
      { category: "Nature & Exploration", title: "Guided spice plantation tour in Periyar" },
      { category: "Adventure Tour", title: "Boat cruise on Lake Periyar spotting elephants and exotic birds" },
      { category: "Adventure Tour", title: "Overnight houseboat cruise through Kerala's backwater canals" },
    ],
    heroImage: "/images/itineraries/north-east/main-bg.svg",
    overviewImage: "/images/itineraries/north-east/overview.svg",
    mapImage: "/images/itineraries/north-east/map.svg",
  },

  // ==========================================================================
  // 9. INCREDIBLE NORTH EAST INDIA
  // ==========================================================================
  {
    slug: "incredible-north-east-india",
    title: "Incredible North East India",
    subtitle: "Journey from the colonial grandeur of Kolkata through the Himalayan tea gardens of Darjeeling, the sacred monasteries of Sikkim, and the orchid-filled hills of Kalimpong. A voyage into India's most serene and spiritual mountain landscapes.",
    categories: ["Nature", "Culture", "Spiritual", "Adventure"],
    duration: "14 Days",
    durationDays: 14,
    startingPrice: "€1,225",
    startingPriceNote: "per person (2 Pax)",
    route: "Kolkata → Bagdogra → Darjeeling → Pelling → Gangtok → Kalimpong → Bagdogra → Delhi",
    bestTime: "October – March",
    overview: [
      "From the cultural vibrancy of Kolkata, famously known as The City of Joy, to the mist-wrapped tea estates of Darjeeling, the ancient Buddhist monasteries of Pelling and Gangtok, and the flower-filled nurseries of Kalimpong, this journey reveals the Himalayan heart of Northeast India—a world of towering peaks, living spirituality, and breathtaking natural beauty.",
      "Cruise along the Hooghly River, ride the iconic Darjeeling toy train, witness sunrise over Kanchenjunga, explore centuries-old monasteries perched on forested ridges, and walk through orchid gardens at the foothills of the world's third-highest mountain. This is Northeast India at its most serene and majestic.",
    ],
    summary: [
      "Hooghly River cruise and heritage walk through colonial Dalhousie Square and the Flower Market in Kolkata",
      "Visit the Victoria Memorial, Indian Museum, and Mother Teresa's House in Kolkata",
      "Sunrise at Tiger Hill with panoramic views of Kanchenjunga and the Himalayan range",
      "Ride the iconic Darjeeling Himalayan Railway toy train, a UNESCO World Heritage Site",
    ],
    summaryRight: [
      "Explore the ancient Pemayangtse and Sangachoeling monasteries in Pelling",
      "Visit the 135-foot Chenrezig Statue and the sacred Khecheopalri Lake in West Sikkim",
      "Discover Rumtek Monastery and the Namgyal Institute of Tibetology in Gangtok",
      "Explore Kalimpong's flower nurseries and historic monasteries",
    ],
    days: [
      { day: 1, title: "Arrive in Kolkata", description: "Arrive in Kolkata, where colonial architecture and creative spirit coexist. You'll be met at the airport and transferred to your hotel. Settle in and enjoy the rest of the day at leisure in this vibrant cultural capital.", overnight: "Kolkata", image: "/images/itineraries/north-east/day-1.svg" },
      { day: 2, title: "Exploring Kolkata — Heritage & Markets", description: "Begin with a heritage walk around Dalhousie Square, exploring colonial-era landmarks including Raj Bhawan, St. John's Church, and Writer's Building. Continue to the vibrant Mullick Ghat Flower Market beneath Howrah Bridge, eastern India's largest. Later, wander through Kumartuli, the 400-year-old artisan village, and visit the College Street Book Market and the legendary Indian Coffee House. In the evening, enjoy a cruise on the Hooghly River.", overnight: "Kolkata", image: "/images/itineraries/north-east/day-2.svg" },
      { day: 3, title: "Exploring Kolkata — Monuments & Culture", description: "Visit the Dakshineswar Kali Temple, built in 1847 and famously associated with the spiritual teacher Ramakrishna. Continue to the magnificent Victoria Memorial, a white marble monument housing paintings, manuscripts, and historical artefacts. Later, explore St. Paul's Cathedral, the Indian Museum—one of the oldest in Asia—and Mother Teresa's House, the headquarters of the Missionaries of Charity.", overnight: "Kolkata", image: "/images/itineraries/north-east/day-3.svg" },
      { day: 4, title: "Kolkata → Bagdogra → Darjeeling", description: "After breakfast, fly to Bagdogra and drive to Darjeeling (approx. 3 hours), the Queen of the Hills, perched at 2,134 metres in the Himalayas with breathtaking views of Kanchenjunga. Arrive and check in at your hotel. Spend the rest of the day acclimatising and soaking in the mountain atmosphere amid world-famous tea gardens.", overnight: "Darjeeling", image: "/images/itineraries/north-east/day-4.svg" },
      { day: 5, title: "Darjeeling — Tiger Hill & Toy Train", description: "Rise before dawn for a visit to Tiger Hill to witness a spectacular sunrise over the Himalayan range, with Kanchenjunga and Mount Everest glowing golden on the horizon. Return for breakfast, then enjoy a ride on the iconic Darjeeling Himalayan Railway toy train, a UNESCO World Heritage railway dating from 1881. Continue to the Ghoom Monastery, the oldest in the area. Visit the Tibetan Self-Help Centre to see traditional carpet weaving, leatherwork, and painting.", overnight: "Darjeeling", image: "/images/itineraries/north-east/day-5.svg" },
      { day: 6, title: "Exploring Darjeeling", description: "After breakfast, visit the Himalayan Mountaineering Institute, founded after Tenzing Norgay's ascent of Everest, and the adjoining Padmaja Naidu Himalayan Zoological Park, home to snow leopards, Tibetan wolves, and Himalayan black bears. Continue to the Japanese Peace Pagoda, a serene white Buddhist shrine offering panoramic views. The evening is free to explore the charming Mall Road.", overnight: "Darjeeling", image: "/images/itineraries/north-east/day-6.svg" },
      { day: 7, title: "Darjeeling → Pelling", description: "After breakfast, drive to Pelling (approx. 4 hours), a quiet Sikkimese town near the foothills of Kanchenjunga offering outstanding mountain views. In the afternoon, walk up to Pemayangtse Monastery, one of the oldest and most important monasteries of the Nyingmapa order of Buddhism in Sikkim, built in the late 17th century.", overnight: "Pelling", image: "/images/itineraries/north-east/day-7.svg" },
      { day: 8, title: "Exploring Pelling", description: "After breakfast, hike to Sangachoeling Monastery, a 17th-century monastery perched atop a ridge, reached through a 40-minute forest walk. Inside, discover ancient wall paintings, statues, and scriptures, with spectacular mountain views from the summit. Later, visit the 135-foot Chenrezig Statue, one of the world's tallest Buddha statues, consecrated by the Dalai Lama, and the sacred Khecheopalri Lake.", overnight: "Pelling", image: "/images/itineraries/north-east/day-8.svg" },
      { day: 9, title: "Pelling → Gangtok", description: "After breakfast, drive to Gangtok (approx. 4 hours), the capital of Sikkim, stopping en route at the Buddha Park of Ravangla to see its magnificent 130-foot Buddha statue, consecrated by the Dalai Lama in 2013. Arrive in Gangtok, set at 1,750 metres and surrounded by monasteries and orchid gardens. The rest of the day is at leisure.", overnight: "Gangtok", image: "/images/itineraries/north-east/day-9.svg" },
      { day: 10, title: "Exploring Gangtok", description: "Visit Rumtek Monastery, the seat of the Karmapa and world Dharma Chakra Centre, with its lavishly decorated Institute of Buddhist Studies and the jewel-studded Golden Stupa. Continue to Do Drul Chorten. Later, explore the Namgyal Institute of Tibetology, housing one of the world's largest collections of rare books on Mahayana Buddhism, and the Enchey Monastery. Visit the Directorate of Handloom and Handicrafts to see artisans at work.", overnight: "Gangtok", image: "/images/itineraries/north-east/day-10.svg" },
      { day: 11, title: "Gangtok → Kalimpong", description: "After breakfast, drive to Kalimpong (approx. 3 hours), a quiet hill resort at 1,250 metres once a thriving wool trading centre with Tibet, now renowned for its orchids, gladioli, and flower nurseries. In the afternoon, visit Zang Dog Palri Fo-Brang Monastery with its rare three-dimensional mandala and panoramic views. Explore the famous flower nurseries and visit the historic Tharpa Choling and Thongsa Gumpa monasteries.", overnight: "Kalimpong", image: "/images/itineraries/north-east/day-11.svg" },
      { day: 12, title: "Kalimpong → Bagdogra → Delhi", description: "Transfer to Bagdogra Airport for your flight to Delhi. On arrival, transfer to your hotel. The rest of the day is at leisure.", overnight: "Delhi", image: "/images/itineraries/north-east/day-12.svg" },
      { day: 13, title: "Exploring Delhi", description: "Begin with a tour of Old Delhi. Drive past the Red Fort and Jama Masjid, then enjoy a cycle rickshaw ride through the narrow, bustling lanes of Chandni Chowk. Visit the Digambar Jain Temple along the way. In the afternoon, explore New Delhi's grand landmarks. Drive past Rashtrapati Bhawan, Rajpath, and India Gate, then visit Humayun's Tomb, a masterpiece of Mughal architecture, and Qutub Minar with its ancient Iron Pillar dating to the 4th century AD.", overnight: "Delhi", image: "/images/itineraries/north-east/day-13.svg" },
      { day: 14, title: "Depart Delhi", description: "Transfer to Delhi International Airport for your onward flight. End of tour.", overnight: "—", image: "/images/itineraries/north-east/day-1.svg" },
    ],
    inclusions: [
      "Accommodation in single/twin rooms at selected hotel category or similar",
      "Daily breakfast",
      "AC vehicle transfers and sightseeing (Toyota Crysta for 2–3 Pax / Tempo Traveller for 4–6 Pax)",
      "Private Hooghly River cruise in Kolkata",
      "Toy train ride in Darjeeling",
      "Sikkim Inner Line Permit",
      "Cycle rickshaw ride in Old Delhi",
      "GST (Goods & Services Tax) as applicable",
    ],
    exclusions: [
      "Domestic or international airfare (Kolkata–Bagdogra and Bagdogra–Delhi flights to be advised separately)",
      "Monument entrance fees and guide services",
      "Personal expenses (tips, laundry, beverages, spa, telephone calls)",
      "Expenses caused by factors beyond control (flight cancellations, roadblocks, vehicle malfunction, natural calamities)",
      "Medical or evacuation insurance",
      "Travel insurance",
      "Items not explicitly mentioned in the programme",
    ],
    datesPrices: [
      "Incredible North East India",
      "Price Validity OCT 2025 – MAR 2026",
      "Starting from €1,225 per person (Standard Hotels, 4–6 Pax, Twin Sharing)",
    ],
    notes: [
      "Blackout Period: Dec 20 – Jan 10 (prices above not valid)",
      "Festival Premium: Extra charges may apply during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
      "Victoria Memorial (Kolkata) closed on Mondays; Indian Museum closed on Mondays; Mother Teresa's House closed on Thursdays; Tibetan Self-Help Centre (Darjeeling) closed on Sundays",
      "Domestic airfares (Kolkata–Bagdogra and Bagdogra–Delhi) to be advised separately",
      "Sikkim Inner Line Permit is included and will be arranged in advance",
    ],
    signatureExperiences: [
      { category: "Culture & History", title: "Heritage walk through Dalhousie Square and the Flower Market in Kolkata" },
      { category: "Adventure Tour", title: "Hooghly River cruise at sunset" },
      { category: "Adventure Tour", title: "Sunrise at Tiger Hill with views of Kanchenjunga and Everest" },
      { category: "Culture & History", title: "Ride the UNESCO World Heritage Darjeeling toy train" },
      { category: "Culture & History", title: "Explore the ancient Pemayangtse and Sangachoeling monasteries in Pelling" },
      { category: "Culture & History", title: "Visit Rumtek Monastery and the Namgyal Institute of Tibetology in Gangtok" },
      { category: "Nature & Exploration", title: "Discover Kalimpong's flower nurseries and orchid gardens" },
      { category: "Culture & History", title: "Cycle rickshaw ride through Old Delhi's Chandni Chowk" },
    ],
    heroImage: "/images/itineraries/north-east/main-bg.svg",
    overviewImage: "/images/itineraries/north-east/overview.svg",
    mapImage: "/images/itineraries/north-east/map.svg",
  },

  // ==========================================================================
  // 10. ON THE FOOTSTEPS OF LORD BUDDHA
  // ==========================================================================
  {
    slug: "on-the-footsteps-of-lord-buddha",
    title: "On the Footsteps of Lord Buddha",
    subtitle: "Trace the life and teachings of the Buddha across the sacred landscapes of India and Nepal. From his birthplace at Lumbini to his enlightenment at Bodhgaya, his first sermon at Sarnath, and his final rest at Kushinagar.",
    categories: ["Spiritual", "Heritage", "Culture"],
    duration: "15 Days",
    durationDays: 15,
    startingPrice: "€1,245",
    startingPriceNote: "per person (2 Pax)",
    route: "Delhi → Lucknow → Sravasti → Lumbini (Nepal) → Kushinagar → Patna → Rajgir → Bodhgaya → Varanasi → Delhi",
    bestTime: "October – March",
    overview: [
      "From the refined Nawabi culture of Lucknow and the ancient pilgrimage site of Sravasti to the birthplace of the Buddha at Lumbini in Nepal, the place of his enlightenment at Bodhgaya, and the sacred ghats of Varanasi where his teachings first took root, this journey follows the most important chapters of the Buddha's life across one of the world's great spiritual circuits.",
      "Walk in the footsteps of the Enlightened One, meditate beneath the Bodhi Tree, witness ancient ceremonies on the Ganges, and explore the ruins of Nalanda, the world's first great university. This is a pilgrimage through India's deepest spiritual heritage—contemplative, profound, and life-changing.",
    ],
    summary: [
      "Cycle rickshaw ride through Old Delhi's Chandni Chowk and visits to Humayun's Tomb and Qutub Minar",
      "Explore the Bara Imambara with its famous Bhul Bhulaiya maze and the Rumi Darwaza in Lucknow",
      "Visit Sravasti, where Lord Buddha performed supernatural feats and spent many monsoon retreats",
      "Cross into Nepal to visit Lumbini, the birthplace of Lord Buddha—a UNESCO World Heritage Site",
    ],
    summaryRight: [
      "Pay homage at the Mahaparinirvana Temple in Kushinagar, where Buddha attained final nirvana",
      "Visit the UNESCO World Heritage Mahabodhi Temple and the sacred Bodhi Tree in Bodhgaya",
      "Explore the ruins of Nalanda, the ancient world's greatest university, and the Peace Pagoda at Rajgir",
      "Dawn boat ride on the Ganges at Varanasi and visit to Sarnath, where Buddha preached his first sermon",
    ],
    days: [
      { day: 1, title: "Arrive in Delhi", description: "Arrive at Delhi International Airport, where you'll be met by our representative and transferred to your hotel. Settle in and enjoy the rest of the day at leisure.", overnight: "Delhi", image: "/images/itineraries/north-east/day-1.svg" },
      { day: 2, title: "Exploring Delhi", description: "Begin with a tour of Old Delhi. Drive past the Red Fort and Jama Masjid, then enjoy a cycle rickshaw ride through the narrow, bustling lanes of Chandni Chowk. Visit the Digambar Jain Temple along the way. In the afternoon, explore New Delhi's grand landmarks. Drive past Rashtrapati Bhawan, Rajpath, and India Gate, then visit Humayun's Tomb, a masterpiece of Mughal architecture, and Qutub Minar with its ancient Iron Pillar dating to the 4th century AD.", overnight: "Delhi", image: "/images/itineraries/north-east/day-2.svg" },
      { day: 3, title: "Delhi → Lucknow", description: "After breakfast, fly to Lucknow, the City of Nawabs, renowned for its music, poetry, and refined cultural traditions. On arrival, transfer to your hotel. The rest of the day is at leisure to begin soaking in the gracious atmosphere of Uttar Pradesh's capital.", overnight: "Lucknow", image: "/images/itineraries/north-east/day-3.svg" },
      { day: 4, title: "Exploring Lucknow", description: "Begin at the imposing Bara Imambara, the largest Shia congregational hall in the world, and navigate its famous Bhul Bhulaiya maze. Continue to the Chota Imambara, known for its ornate chandeliers and silverwork. Later, visit the British Residency, a poignant relic of the 1857 uprising, and the State Museum. Capture a mesmerising sunset at the majestic Rumi Darwaza, then explore Lucknow's celebrated Chikankari embroidery at Aminabad Market.", overnight: "Lucknow", image: "/images/itineraries/north-east/day-4.svg" },
      { day: 5, title: "Lucknow → Sravasti", description: "After breakfast, drive to Sravasti (approx. 3.5 hours), the ancient capital of the Kosala kingdom and one of the most important Buddhist pilgrimage sites, where Lord Buddha spent many monsoon retreats. Visit Sahet-Mahet, the archaeological site famous for the supernatural feats performed by Lord Buddha. Explore the ancient monastery ruins and meditation grounds.", overnight: "Sravasti", image: "/images/itineraries/north-east/day-5.svg" },
      { day: 6, title: "Sravasti → Lumbini (Nepal)", description: "After breakfast, drive to Lumbini (approx. 3.5 hours), crossing the India-Nepal border with visa and immigration formalities en route. Arrive in Lumbini, the birthplace of Lord Buddha, rediscovered in 1890 after being lost for approximately 1,500 years. Check in at your hotel.", overnight: "Lumbini", image: "/images/itineraries/north-east/day-6.svg" },
      { day: 7, title: "Exploring Lumbini", description: "Spend the day exploring this UNESCO World Heritage Site. Visit the Maya Devi Temple marking the exact spot of Buddha's birth, the Sacred Garden, the ancient Bodhi Tree, and the Ashoka Pillar erected by Emperor Ashoka in 249 BC. Continue to the World Peace Pagoda and the International Monastery Zone, where countries from around the world have built temples in their own architectural traditions.", overnight: "Lumbini", image: "/images/itineraries/north-east/day-7.svg" },
      { day: 8, title: "Lumbini → Kushinagar", description: "After breakfast, drive to Kushinagar (approx. 4 hours), the sacred site where Lord Buddha attained Maha Parinirvana—his final liberation from the cycle of rebirth. Visit the Mahaparinirvana Temple, housing a reclining Buddha sculpture marking the spot where he took his last breath, and the Rambhar Stupa, where his mortal remains were cremated.", overnight: "Kushinagar", image: "/images/itineraries/north-east/day-8.svg" },
      { day: 9, title: "Kushinagar → Vaishali → Patna", description: "After breakfast, drive to Patna (approx. 5 hours), the capital of Bihar, stopping en route at Vaishali, an important site in Buddhist history where Buddha preached his last sermon. Arrive in Patna and check in at your hotel.", overnight: "Patna", image: "/images/itineraries/north-east/day-9.svg" },
      { day: 10, title: "Patna → Rajgir", description: "After breakfast, visit the Patna Museum, Buddha Smriti Park, and the Golghar, an 18th-century granary with panoramic city views. Later, drive to Rajgir (approx. 2.5 hours) and visit the famous Shanti Stupa (Peace Pagoda), set atop Gridhrakuta Hill. Check in at your hotel.", overnight: "Rajgir", image: "/images/itineraries/north-east/day-10.svg" },
      { day: 11, title: "Rajgir → Nalanda → Bodhgaya", description: "After breakfast, depart for Bodhgaya (approx. 2.5 hours), the spiritual home of Buddhism. En route, visit Nalanda, the ruins of the ancient world's greatest university, which flourished from the 5th to 12th century and attracted scholars from across Asia. Arrive in Bodhgaya and check in at your hotel.", overnight: "Bodhgaya", image: "/images/itineraries/north-east/day-11.svg" },
      { day: 12, title: "Exploring Bodhgaya", description: "Visit the Mahabodhi Temple, a UNESCO World Heritage Site marking the exact spot where Lord Buddha attained enlightenment. Within the temple complex, sit beneath the sacred Bodhi Tree, a direct descendant of the original tree under which the Buddha meditated. Later, visit the Wat Thai Temple, the only Thai temple in India, and explore the international monasteries.", overnight: "Bodhgaya", image: "/images/itineraries/north-east/day-12.svg" },
      { day: 13, title: "Bodhgaya → Varanasi", description: "After breakfast, drive to Varanasi (approx. 5 hours), one of the oldest continuously inhabited cities in the world. Check in at your hotel. In the evening, head to the banks of the Ganges to witness the spectacular Evening Aarti Ceremony, best experienced from a traditional boat on the river.", overnight: "Varanasi", image: "/images/itineraries/north-east/day-13.svg" },
      { day: 14, title: "Exploring Varanasi", description: "At dawn, take a boat ride on the Ganges to witness the ancient bathing rituals along the ghats—a timeless scene of devotion stretching over three miles of riverbank. Afterwards, walk through the narrow, storied lanes of the old city. Later, visit Sarnath, where the Buddha preached his first sermon at the Deer Park. Explore the Dhamek Stupa and ruined monasteries. Return to Varanasi to visit the Bharat Mata Temple, Vishwanath Temple, and the Durga Temple.", overnight: "Varanasi", image: "/images/itineraries/north-east/day-1.svg" },
      { day: 15, title: "Depart Varanasi → Delhi", description: "After breakfast, transfer to the airport for your flight to Delhi. On arrival, connect with your onward international flight. End of tour.", overnight: "—", image: "/images/itineraries/north-east/day-2.svg" },
    ],
    inclusions: [
      "Accommodation in single/twin rooms at selected hotel category or similar",
      "Daily breakfast",
      "AC vehicle transfers and sightseeing (Toyota Crysta for 2–3 Pax / Tempo Traveller for 4–6 Pax)",
      "Morning and evening boat rides in Varanasi",
      "Cycle rickshaw ride in Old Delhi",
      "GST (Goods & Services Tax) as applicable",
    ],
    exclusions: [
      "Domestic or international airfare (Delhi–Lucknow and Varanasi–Delhi flights to be advised separately)",
      "Monument entrance fees and guide services",
      "Personal expenses (tips, laundry, beverages, spa, telephone calls)",
      "Expenses caused by factors beyond control (flight cancellations, roadblocks, vehicle malfunction, natural calamities)",
      "Medical or evacuation insurance",
      "Travel insurance",
      "Nepal visa fees (required for non-Indian nationals)",
      "Items not explicitly mentioned in the programme",
    ],
    datesPrices: [
      "On the Footsteps of Lord Buddha",
      "Price Validity OCT 2025 – MAR 2026",
      "Starting from €1,245 per person (Standard Hotels, 4–6 Pax, Twin Sharing)",
    ],
    notes: [
      "Blackout Period: Dec 20 – Jan 10 (prices above not valid)",
      "Festival Premium: Extra charges may apply during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
      "Red Fort (Delhi) is closed on Mondays",
      "Nepal visa/immigration formalities required at the India-Nepal border (Day 06); visa fees are not included",
      "Domestic airfares (Delhi–Lucknow and Varanasi–Delhi) to be advised separately",
      "Limited hotel options at Sravasti, Kushinagar, and Rajgir—same property may apply across categories",
    ],
    signatureExperiences: [
      { category: "Culture & History", title: "Cycle rickshaw ride through Old Delhi's Chandni Chowk" },
      { category: "Culture & History", title: "Explore the Bara Imambara and Chikankari markets of Lucknow" },
      { category: "Culture & History", title: "Visit Lumbini, the birthplace of Lord Buddha, across the Nepal border" },
      { category: "Culture & History", title: "Pay homage at the Mahaparinirvana Temple in Kushinagar" },
      { category: "Culture & History", title: "Meditate beneath the Bodhi Tree at the Mahabodhi Temple in Bodhgaya" },
      { category: "Culture & History", title: "Explore the ancient university ruins of Nalanda" },
      { category: "Adventure Tour", title: "Dawn boat ride on the Ganges at Varanasi" },
      { category: "Culture & History", title: "Visit Sarnath, where Buddha preached his first sermon" },
    ],
    heroImage: "/images/itineraries/north-east/main-bg.svg",
    overviewImage: "/images/itineraries/north-east/overview.svg",
    mapImage: "/images/itineraries/north-east/map.svg",
  },

  // ==========================================================================
  // 11. UNVEILING THE ENCHANTING SOUTH — TAMIL NADU & KERALA
  // ==========================================================================
  {
    slug: "unveiling-the-enchanting-south-tamil-nadu-kerala",
    title: "Unveiling the Enchanting South — Tamil Nadu & Kerala",
    subtitle: "Journey through the ancient temples and French colonial heritage of Tamil Nadu into the spice gardens, backwaters, and golden beaches of Kerala. A voyage from monumental Dravidian grandeur to tropical serenity.",
    categories: ["Heritage", "Culture", "Architecture", "Nature", "Adventure"],
    duration: "16 Days",
    durationDays: 16,
    startingPrice: "€1,465",
    startingPriceNote: "per person (2 Pax)",
    route: "Chennai → Mahabalipuram → Pondicherry → Tanjore → Chettinad → Madurai → Periyar → Alleppey (Houseboat) → Mararikulam → Kochi",
    bestTime: "October – March",
    overview: [
      "From the rock-cut temples of Mahabalipuram and the French colonial boulevards of Pondicherry to the towering gopurams of Madurai, the forgotten merchant palaces of Chettinad, the wildlife-rich forests of Periyar, and the palm-fringed backwaters of Kerala, this journey reveals the extraordinary depth and diversity of South India.",
      "Explore UNESCO World Heritage monuments carved from solid rock, wander through aromatic spice plantations, cruise along centuries-old backwater canals on a traditional houseboat, and watch Kathakali dancers bring ancient epics to life. This is South India—ancient, vibrant, and endlessly surprising.",
    ],
    summary: [
      "Explore the UNESCO World Heritage rock-cut monuments of Mahabalipuram—the Five Rathas and Shore Temple",
      "Walk through the French Quarter of Pondicherry and visit the experimental township of Auroville",
      "Visit the magnificent Brihadeeshwara Temple in Tanjore and the Nataraja Temple at Chidambaram",
      "Discover the extraordinary merchant mansions and artisan villages of Chettinad",
    ],
    summaryRight: [
      "Attend the evening ceremony at the Meenakshi Temple in Madurai, a masterpiece of Dravidian architecture",
      "Guided spice plantation tour and boat cruise on Lake Periyar in the wildlife sanctuary",
      "Overnight houseboat cruise through Kerala's palm-fringed backwater canals",
      "Kathakali dance performance in Fort Kochi with a visit to the Dutch Palace, Jewish Synagogue, and Chinese Fishing Nets",
    ],
    days: [
      { day: 1, title: "Arrive Chennai → Mahabalipuram", description: "Arrive at Chennai Airport, where you'll be met by our representative and transferred to Mahabalipuram (approx. 1 hour), an ancient Pallava seaport set along the Bay of Bengal. Check in at your hotel and enjoy the rest of the day at leisure.", overnight: "Mahabalipuram", image: "/images/itineraries/north-east/day-1.svg" },
      { day: 2, title: "Exploring Mahabalipuram", description: "Explore this UNESCO World Heritage town and its remarkable rock-cut monuments. Visit the great bas-relief of Arjuna's Penance, depicting the mythical descent of the Ganges with gods, animals, and fables carved into a massive granite face. Continue to the Five Rathas, five monolithic temples carved from a single rock formation. End at the Shore Temple, one of the oldest in South India, standing at the water's edge.", overnight: "Mahabalipuram", image: "/images/itineraries/north-east/day-2.svg" },
      { day: 3, title: "Mahabalipuram → Pondicherry", description: "After breakfast, drive to Pondicherry (approx. 2 hours), a former French colonial settlement that retains its European character in its tree-lined boulevards, pastel-coloured villas, and seaside promenade. Take a walk through the French Quarter and White Town, passing colonial-era buildings, the Alliance Française, and the Cluny Embroidery Centre.", overnight: "Pondicherry", image: "/images/itineraries/north-east/day-3.svg" },
      { day: 4, title: "Exploring Pondicherry", description: "After breakfast, visit Auroville, the experimental international township founded in 1968 where people of all nationalities live in progressive harmony. Explore the complex and learn about its unique philosophy and way of life. Later, stroll through the local markets and along the beachside promenade.", overnight: "Pondicherry", image: "/images/itineraries/north-east/day-4.svg" },
      { day: 5, title: "Pondicherry → Chidambaram → Darasuram → Tanjore", description: "Depart for Tanjore (approx. 5 hours), stopping en route at Chidambaram to visit the sacred Nataraja Temple, where Shiva is worshipped as the cosmic dancer. Continue to Darasuram, whose temple is a superb example of Chola architecture. Arrive in Tanjore and visit the magnificent Brihadeeshwara Temple, a UNESCO World Heritage masterpiece, and the Palace with its gallery of ancient bronzes.", overnight: "Tanjore", image: "/images/itineraries/north-east/day-5.svg" },
      { day: 6, title: "Tanjore → Chettinad", description: "After breakfast, drive to Chettinad (approx. 4 hours), a region of 74 villages once home to the fabulously wealthy Chettiar merchants who built extraordinary mansions in their own distinctive style. In the evening, explore the charming village of Karaikudi. Visit workshops for traditional woodwork, silversmithing, and textile weaving.", overnight: "Chettinad", image: "/images/itineraries/north-east/day-6.svg" },
      { day: 7, title: "Exploring Chettinad", description: "Spend the day exploring the local villages and meeting artisans who keep centuries-old craft traditions alive—from intricate wood carving and handloom weaving to the production of earthenware tiles renowned throughout India. Wander through forgotten hamlets, romantic palaces, and sacred groves with paths lined with wonderful terracotta horses.", overnight: "Chettinad", image: "/images/itineraries/north-east/day-7.svg" },
      { day: 8, title: "Chettinad → Madurai", description: "After a leisurely breakfast, drive to Madurai (approx. 3 hours), the ancient capital of the Pandyan Kings, set on the banks of the River Vaigai. In its heyday, Madurai traded with Greece and Rome and was a centre of Tamil poetry and literature. Check in at your hotel and spend the rest of the day exploring this vibrant temple city at your own pace.", overnight: "Madurai", image: "/images/itineraries/north-east/day-8.svg" },
      { day: 9, title: "Exploring Madurai", description: "Visit the Thirumala Nayak Palace, built in 1639 in a blend of Dravidian and Islamic styles, with its remarkable unsupported curved dome. Continue to the Meenakshi Temple, a masterpiece of Dravidian architecture with immense gopurams adorned with thousands of colourful stucco figures. In the evening, attend the nightly ceremony where the temple bronze of Lord Shiva is carried in procession to the boudoir of his consort Parvati, accompanied by devotional music.", overnight: "Madurai", image: "/images/itineraries/north-east/day-9.svg" },
      { day: 10, title: "Madurai → Periyar", description: "After breakfast, drive to Periyar (approx. 3 hours), also known as Thekkady, home to one of the world's most fascinating wildlife reserves spanning 777 sq km of thick evergreen forest. Enjoy a guided spice plantation tour through nearby gardens where cardamom, pepper, cinnamon, and other aromatic plants are cultivated.", overnight: "Periyar", image: "/images/itineraries/north-east/day-10.svg" },
      { day: 11, title: "Exploring Periyar", description: "After breakfast, enjoy a boat cruise on Lake Periyar within the national park. Glide across the tranquil waters, spotting herds of wild elephants, bison, deer, and spectacular birdlife along the forested shores. The afternoon is free to relax or explore the surroundings at your own pace.", overnight: "Periyar", image: "/images/itineraries/north-east/day-11.svg" },
      { day: 12, title: "Periyar → Alleppey Houseboat", description: "After breakfast, travel to Alleppey, the gateway to Kerala's famous backwaters. Board your traditional houseboat—your floating hotel for the next 24 hours, complete with a crew of four. Cruise through centuries-old backwater canals flanked by swaying palms, passing villages, rice paddies, and oared boats. Lunch and dinner are served on board.", overnight: "Houseboat", image: "/images/itineraries/north-east/day-12.svg" },
      { day: 13, title: "Houseboat → Mararikulam", description: "Disembark from your houseboat and drive to Mararikulam (approx. 1 hour), a tranquil fishing village blessed with a pristine golden beach. Check in at your hotel and spend the day relaxing by the beach or the pool.", overnight: "Mararikulam", image: "/images/itineraries/north-east/day-13.svg" },
      { day: 14, title: "Mararikulam", description: "A full day at leisure to unwind on the beach, enjoy the resort facilities, or simply soak in the peaceful coastal atmosphere. This is your day to rest and reflect before the final leg of your journey.", overnight: "Mararikulam", image: "/images/itineraries/north-east/day-1.svg" },
      { day: 15, title: "Mararikulam → Kochi", description: "Drive to Kochi (approx. 2 hours) and begin exploring its rich heritage. Visit the Mattancherry Dutch Palace with its vivid 17th-century Ramayana murals, the Jewish Synagogue in Jew Town, and St. Francis Church. See the iconic Chinese Fishing Nets at Fort Cochin. In the evening, enjoy a traditional Kathakali dance performance at a local theatre.", overnight: "Kochi", image: "/images/itineraries/north-east/day-2.svg" },
      { day: 16, title: "Depart Kochi", description: "After breakfast, transfer to Kochi Airport for your onward flight. End of tour.", overnight: "—", image: "/images/itineraries/north-east/day-3.svg" },
    ],
    inclusions: [
      "Accommodation in single/twin rooms at selected hotel category or similar",
      "Meals as per hotel plan (breakfast at all hotels; full board on houseboat)",
      "AC vehicle transfers and sightseeing (Toyota Crysta for 2–3 Pax / Tempo Traveller for 4–6 Pax)",
      "Kathakali dance performance at a local theatre in Kochi",
      "Guided spice plantation tour in Periyar",
      "Common boat cruise on Lake Periyar",
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
      "Unveiling the Enchanting South — Tamil Nadu & Kerala",
      "Price Validity OCT 2025 – MAR 2026",
      "Starting from €1,465 per person (Standard Hotels, 4–6 Pax, Twin Sharing)",
    ],
    notes: [
      "Blackout Period: Dec 20 – Jan 10 (prices above not valid)",
      "Festival Premium: Extra charges may apply during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control",
      "Mattancherry Dutch Palace and Jewish Synagogue (Kochi) closed on Fridays; Synagogue also closed on Saturdays and Jewish holidays",
      "Houseboat availability is subject to seasonal demand; houseboats travel in convoy with 2 or 4 bedrooms per boat",
    ],
    signatureExperiences: [
      { category: "Culture & History", title: "Explore the UNESCO World Heritage rock-cut monuments of Mahabalipuram" },
      { category: "Culture & History", title: "Walk through the French Quarter of Pondicherry" },
      { category: "Culture & History", title: "Visit the Nataraja Temple at Chidambaram and Brihadeeshwara Temple at Tanjore" },
      { category: "Culture & History", title: "Discover the merchant mansions and artisan villages of Chettinad" },
      { category: "Culture & History", title: "Attend the evening ceremony at the Meenakshi Temple in Madurai" },
      { category: "Nature & Exploration", title: "Guided spice plantation tour in Periyar" },
      { category: "Adventure Tour", title: "Overnight houseboat cruise through Kerala's backwaters" },
      { category: "Culture & History", title: "Kathakali dance performance in Fort Kochi" },
    ],
    heroImage: "/images/itineraries/north-east/main-bg.svg",
    overviewImage: "/images/itineraries/north-east/overview.svg",
    mapImage: "/images/itineraries/north-east/map.svg",
  },

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
      { day: 1, title: "Arrive Chennai → Mahabalipuram", description: "Arrive at Chennai Airport, where you'll be met by our representative and transferred to Mahabalipuram (approx. 1 hour), an ancient Pallava seaport set along the Bay of Bengal. Check in at your hotel and enjoy the rest of the day at leisure.", overnight: "Mahabalipuram", image: "/images/itineraries/north-east/day-1.svg" },
      { day: 2, title: "Exploring Mahabalipuram", description: "Explore this UNESCO World Heritage town and its remarkable rock-cut monuments. Visit the great bas-relief of Arjuna's Penance, depicting the mythical descent of the Ganges with gods, animals, and fables carved into a massive granite face. Continue to the Five Rathas, five monolithic temples carved from a single rock formation. End at the Shore Temple, one of the oldest in South India, standing at the water's edge.", overnight: "Mahabalipuram", image: "/images/itineraries/north-east/day-2.svg" },
      { day: 3, title: "Mahabalipuram → Pondicherry", description: "After breakfast, drive to Pondicherry (approx. 2 hours), a former French colonial settlement that retains its European character in its tree-lined boulevards, pastel-coloured villas, and seaside promenade. Take a walk through the French Quarter and White Town, passing colonial-era buildings, the Alliance Française, and the Cluny Embroidery Centre.", overnight: "Pondicherry", image: "/images/itineraries/north-east/day-3.svg" },
      { day: 4, title: "Exploring Pondicherry", description: "After breakfast, visit Auroville, the experimental international township founded in 1968 where people of all nationalities live in progressive harmony. Explore the complex and learn about its unique philosophy and way of life. Later, stroll through the local markets and along the beachside promenade.", overnight: "Pondicherry", image: "/images/itineraries/north-east/day-4.svg" },
      { day: 5, title: "Pondicherry → Chidambaram → Darasuram → Tanjore", description: "Depart for Tanjore (approx. 5 hours), stopping en route at Chidambaram to visit the sacred Nataraja Temple, where Shiva is worshipped as the cosmic dancer. Continue to Darasuram, whose temple is a superb example of Chola architecture. Arrive in Tanjore and visit the magnificent Brihadeeshwara Temple, a UNESCO World Heritage masterpiece, and the Palace with its gallery of ancient bronzes.", overnight: "Tanjore", image: "/images/itineraries/north-east/day-5.svg" },
      { day: 6, title: "Tanjore → Chettinad", description: "After breakfast, drive to Chettinad (approx. 4 hours), a region of 74 villages once home to the fabulously wealthy Chettiar merchants who built extraordinary mansions in their own distinctive style. In the evening, explore the charming village of Karaikudi. Visit workshops for traditional woodwork, silversmithing, and textile weaving.", overnight: "Chettinad", image: "/images/itineraries/north-east/day-6.svg" },
      { day: 7, title: "Exploring Chettinad", description: "Spend the day exploring the local villages and meeting artisans who keep centuries-old craft traditions alive—from intricate wood carving and handloom weaving to the production of earthenware tiles renowned throughout India. Wander through forgotten hamlets, romantic palaces, and sacred groves with paths lined with wonderful terracotta horses.", overnight: "Chettinad", image: "/images/itineraries/north-east/day-7.svg" },
      { day: 8, title: "Chettinad → Madurai", description: "After a leisurely breakfast, drive to Madurai (approx. 3 hours), the ancient capital of the Pandyan Kings, set on the banks of the River Vaigai. In its heyday, Madurai traded with Greece and Rome and was a centre of Tamil poetry and literature. Check in at your hotel and spend the rest of the day exploring this vibrant temple city at your own pace.", overnight: "Madurai", image: "/images/itineraries/north-east/day-8.svg" },
      { day: 9, title: "Exploring Madurai", description: "Visit the Thirumala Nayak Palace, built in 1639 in a blend of Dravidian and Islamic styles, with its remarkable unsupported curved dome. Continue to the Meenakshi Temple, a masterpiece of Dravidian architecture with immense gopurams adorned with thousands of colourful stucco figures. In the evening, attend the nightly ceremony where the temple bronze of Lord Shiva is carried in procession to the boudoir of his consort Parvati, accompanied by devotional music.", overnight: "Madurai", image: "/images/itineraries/north-east/day-9.svg" },
      { day: 10, title: "Depart Madurai → Chennai", description: "Transfer to Madurai Airport for your flight to Chennai. On arrival, connect with your onward international flight. End of tour.", overnight: "—", image: "/images/itineraries/north-east/day-10.svg" },
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
    heroImage: "/images/itineraries/north-east/main-bg.svg",
    overviewImage: "/images/itineraries/north-east/overview.svg",
    mapImage: "/images/itineraries/north-east/map.svg",
  },



  // ==========================================================================
  // 13. GEMS OF SOUTH INDIA — 18 Days (NEW)
  // ==========================================================================
  {
    slug: "gems-of-south-india",
    title: "Gems of South India",
    subtitle: "Journey through South India's temples, backwaters, and ancient monuments. Experience Kerala's serene houseboats, Tamil Nadu's magnificent temples, and coastal charm in this 18-day southern adventure.",
    categories: ["Heritage", "Culture", "Architecture", "Nature", "Adventure"] as ItineraryCategory[],
    duration: "18 Days",
    durationDays: 18,
    startingPrice: "€1,455",
    startingPriceNote: "per person (25 Pax)",
    route: "Kochi → Kumarakom → Periyar → Madurai → Chettinad → Trichy → Thanjavur → Pondicherry → Mahabalipuram → Chennai",
    bestTime: "October – March",
    overview: [
      "From the colonial charm of Fort Kochi and the tranquil backwaters of Kumarakom to the wildlife-rich forests of Periyar, the towering gopurams of Madurai, the merchant mansions of Chettinad, the great Chola temples of Thanjavur, and the rock-cut monuments of Mahabalipuram, this journey captures the extraordinary breadth of South India.",
      "Watch Kathakali dancers, cruise backwater canals on a houseboat, spot elephants on a lake safari, explore UNESCO World Heritage temples, learn ancient crafts from village artisans, and walk the French boulevards of Pondicherry. This is South India at its most immersive.",
    ],
    summary: [
      "Chinese Fishing Nets, cooking class with Nimmy Paul, and Kathakali performance in Kochi",
      "Village activities in Kumarakom — canoeing, toddy tapping, and net fishing",
      "Overnight houseboat cruise through Kerala's backwater canals",
      "Kalaripayattu martial arts show and spice plantation tour in Periyar",
    ],
    summaryRight: [
      "Visit the Meenakshi Temple in Madurai with evening Aarti ceremony",
      "Explore Chettinad's merchant mansions with cooking demo at The Bangala",
      "Visit Trichy's Rock Fort and Thanjavur's Chola temples",
      "Explore UNESCO Mahabalipuram and the French Quarter of Pondicherry",
    ],
    days: [
      { day: 1, title: "Arrive in Kochi", description: "Upon arrival in Kochi, meet the Liberty representative and transfer to your hotel. Evening free for leisure.", overnight: "Kochi", image: "/images/itineraries/north-east/day-1.svg" },
      { day: 2, title: "Exploring Kochi", description: "Watch the Chinese fishing nets in action. Cooking session with Nimmy Paul. Visit the Portuguese Museum and Fort Cochin. End with a Kathakali performance.", overnight: "Kochi", image: "/images/itineraries/north-east/day-2.svg" },
      { day: 3, title: "Kochi → Kumarakom", description: "Drive to Kumarakom on Vembanad Lake. Visit Kumarakom Bird Sanctuary to spot migratory birds.", overnight: "Kumarakom", image: "/images/itineraries/north-east/day-3.svg" },
      { day: 4, title: "Exploring Kumarakom", description: "Village activities in Manjira village — canoeing, coconut tree climbing, toddy tapping, net fishing, and coir-making.", overnight: "Kumarakom", image: "/images/itineraries/north-east/day-4.svg" },
      { day: 5, title: "Houseboat Cruise", description: "Board a deluxe houseboat for a one-night cruise through palm jungles, rice fields, and quaint villages.", overnight: "Houseboat", image: "/images/itineraries/north-east/day-5.svg" },
      { day: 6, title: "Houseboat → Periyar", description: "Disembark and drive to Periyar. En route visit a rubber plantation with lunch. Evening Kalaripayattu show.", overnight: "Periyar", image: "/images/itineraries/north-east/day-6.svg" },
      { day: 7, title: "Exploring Periyar", description: "Spice plantation tour. Lunch at Shalimar Spice Garden. Afternoon boat ride on Periyar lake spotting elephants.", overnight: "Periyar", image: "/images/itineraries/north-east/day-7.svg" },
      { day: 8, title: "Periyar → Madurai", description: "Drive to Madurai. Explore Meenakshi Temple, Tirumala Nayak Palace, and Temple Tank. Attend the Night Ceremony.", overnight: "Madurai", image: "/images/itineraries/north-east/day-8.svg" },
      { day: 9, title: "Exploring Madurai", description: "City sightseeing — Meenakshi Temple complex, Hall of Thousand Pillars, Tirumal Nayak Palace, and Mariamman Teppakulam.", overnight: "Madurai", image: "/images/itineraries/north-east/day-9.svg" },
      { day: 10, title: "Madurai → Chettinad", description: "Drive to Chettinad, a region of extraordinary merchant mansions. Check in at your hotel.", overnight: "Chettinad", image: "/images/itineraries/north-east/day-10.svg" },
      { day: 11, title: "Exploring Chettinad", description: "Visit Raja's Palace, old Chettiar mansions, and Athangudi village. Evening cooking demo and dinner at The Bangala.", overnight: "Chettinad", image: "/images/itineraries/north-east/day-11.svg" },
      { day: 12, title: "Chettinad → Trichy → Thanjavur", description: "Explore Trichy's Rock Fort and Srirangam temple town. Continue to Thanjavur, once the Chola capital.", overnight: "Thanjavur", image: "/images/itineraries/north-east/day-12.svg" },
      { day: 13, title: "Exploring Thanjavur", description: "Visit Dharasuram's Airateshwara temple and Gangaikondacholapuram. Afternoon village tour along the Kaveri river.", overnight: "Thanjavur", image: "/images/itineraries/north-east/day-13.svg" },
      { day: 14, title: "Thanjavur → Pondicherry", description: "Drive to Pondicherry. Stroll through the French and White Towns, Baker Street to Alliance Française.", overnight: "Pondicherry", image: "/images/itineraries/north-east/day-1.svg" },
      { day: 15, title: "Pondicherry → Mahabalipuram", description: "Drive to Mahabalipuram. En route visit Auroville, the experimental international township.", overnight: "Mahabalipuram", image: "/images/itineraries/north-east/day-2.svg" },
      { day: 16, title: "Exploring Mahabalipuram", description: "Visit Arjuna's Penance, the Five Rathas, and the Shore Temple. Sunset over the Bay of Bengal.", overnight: "Mahabalipuram", image: "/images/itineraries/north-east/day-3.svg" },
      { day: 17, title: "Mahabalipuram → Chennai", description: "Drive to Chennai. Visit Kapaleeswarar Temple, San Thome Cathedral, Fort George, and the spice market.", overnight: "Chennai", image: "/images/itineraries/north-east/day-4.svg" },
      { day: 18, title: "Depart Chennai", description: "Transfer to Chennai International Airport for your onward flight. End of tour.", overnight: "—", image: "/images/itineraries/north-east/day-5.svg" },
    ],
    inclusions: ["Accommodation in Twin/Double rooms", "Daily breakfast (houseboat all meals)", "Lunch at Shalimar Spice Garden", "AC vehicle transfers", "English-speaking guides", "Entrance fees and GST", "Kathakali show", "Rubber plantation visit", "Kalaripayattu show", "Spice plantation tour", "Boat ride at Periyar", "Aarti at Meenakshi Temple", "Tuk Tuk ride Madurai", "Cooking demo with dinner at Chettinad"],
    exclusions: ["Personal expenses", "Items not mentioned", "Expenses beyond control", "Medical expenses", "Christmas/New Year surcharge (Dec 23 – Jan 5)"],
    datesPrices: ["Gems of South India", "Price Validity OCT 2025 – MAR 2026"],
    notes: ["Blackout: Dec 23 – Jan 5", "Festival Premium applies", "Weather Clause: customer bears costs", "Force Majeure: company not liable"],
    signatureExperiences: [
      { category: "Culture & History", title: "Cooking class with Nimmy Paul in Kochi" },
      { category: "Adventure Tour", title: "Overnight houseboat cruise" },
      { category: "Nature", title: "Village activities in Kumarakom" },
      { category: "Culture & History", title: "Kalaripayattu show in Periyar" },
      { category: "Culture & History", title: "Aarti ceremony at Meenakshi Temple" },
      { category: "Culture & History", title: "Cooking demo at The Bangala, Chettinad" },
      { category: "Culture & History", title: "Veena Making Workshop in Thanjavur" },
      { category: "Adventure Tour", title: "Bamboo Rafting in Periyar" },
    ],
    heroImage: "/images/itineraries/north-east/main-bg.svg",
    overviewImage: "/images/itineraries/north-east/overview.svg",
    mapImage: "/images/itineraries/north-east/map.svg",
  },

  // ==========================================================================
  // 14. NORTHEAST INDIA SOJOURN — 10 Days (NEW)
  // ==========================================================================
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
      "High tea with Silk Route tales and Buddha Pada cultural show",
    ],
    days: [
      { day: 1, title: "Arrive in Kolkata", description: "Arrive in Kolkata. Evening visit to Dakshineswar Kali Temple and Hooghly River cruise.", overnight: "Kolkata", image: "/images/itineraries/north-east/day-1.svg" },
      { day: 2, title: "Exploring Kolkata", description: "Visit Victoria Memorial, St. Paul's Cathedral, Indian Museum, Belur Math, Kumartuli, and Nahoum's bakery.", overnight: "Kolkata", image: "/images/itineraries/north-east/day-2.svg" },
      { day: 3, title: "Kolkata → Darjeeling", description: "Fly to Bagdogra, drive to Darjeeling. Evening gala dinner with Everest summiteer Tenzin (groups only).", overnight: "Darjeeling", image: "/images/itineraries/north-east/day-3.svg" },
      { day: 4, title: "Exploring Darjeeling", description: "Ride the heritage toy train to Ghoom. Visit Ghoom Monastery, Tibetan Refugee Centre, Japanese Temple, and Peace Pagoda.", overnight: "Darjeeling", image: "/images/itineraries/north-east/day-4.svg" },
      { day: 5, title: "Darjeeling → Pelling", description: "Drive to Pelling with stunning Kanchenjunga views. Visit Pemayangtse Monastery, one of the oldest in Sikkim.", overnight: "Pelling", image: "/images/itineraries/north-east/day-5.svg" },
      { day: 6, title: "Exploring Pelling", description: "Walk to Sangachoeling Monastery. Visit the 135-foot Chenrezig Statue and sacred Khecheopalri Lake.", overnight: "Pelling", image: "/images/itineraries/north-east/day-6.svg" },
      { day: 7, title: "Pelling → Gangtok", description: "Drive to Gangtok. Visit Do Drul Chorten and the Buddha and Guru Padmasambhava statues.", overnight: "Gangtok", image: "/images/itineraries/north-east/day-7.svg" },
      { day: 8, title: "Gangtok → Kalimpong", description: "Drive to Kalimpong via Rumtek Monastery. Evening high tea with Lee and tales of the ancient Silk Route.", overnight: "Kalimpong", image: "/images/itineraries/north-east/day-8.svg" },
      { day: 9, title: "Exploring Kalimpong", description: "Visit cactus nurseries, Tharpa Choling and Thongsa Gumpa monasteries. Buddha Pada cultural afternoon with music and community lunch.", overnight: "Kalimpong", image: "/images/itineraries/north-east/day-9.svg" },
      { day: 10, title: "Depart Kalimpong", description: "Drive to Bagdogra Airport for flight to Kolkata and onward departure. End of tour.", overnight: "—", image: "/images/itineraries/north-east/day-10.svg" },
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
    heroImage: "/images/itineraries/north-east/main-bg.svg",
    overviewImage: "/images/itineraries/north-east/overview.svg",
    mapImage: "/images/itineraries/north-east/map.svg",
  },

  // ==========================================================================
  // 15. VIBRANT GUJARAT WITH CENTRAL INDIA — 21 Days (NEW)
  // ==========================================================================
  {
    slug: "vibrant-gujarat-with-central-india",
    title: "Vibrant Gujarat with Central India",
    subtitle: "From the white salt deserts of Kutch and the Statue of Unity to the ruins of Mandu, the sacred cities of Ujjain and Ayodhya, and the UNESCO monuments of Bhopal — an epic 21-day journey.",
    categories: ["Heritage", "Culture", "Architecture", "Spiritual", "Nature"] as ItineraryCategory[],
    duration: "21 Days",
    durationDays: 21,
    startingPrice: "€1,765",
    startingPriceNote: "per person (30 Pax)",
    route: "Delhi → Bhuj → Rann of Kutch → Surendra Nagar → Kevadia → Maheshwar → Mandu → Ujjain → Bhopal → Lucknow → Prayagraj → Ayodhya → Mumbai",
    bestTime: "October – March",
    overview: [
      "From the shimmering white salt deserts of the Rann of Kutch and the artisan villages of Bhuj to the Statue of Unity, the sacred Narmada riverbanks of Maheshwar, the romantic ruins of Mandu, the holy cities of Ujjain and Ayodhya, and the UNESCO sites around Bhopal, this epic journey reveals India's western and central heartland.",
      "Explore traditional craft villages, witness ancient weaving traditions, stand before prehistoric rock art, discover grand mosques and Buddhist stupas, and attend sacred Aarti ceremonies. India at its most diverse, authentic, and enriching.",
    ],
    summary: [
      "Desert glamping in the white salt flats of the Rann of Kutch",
      "Guided tour of Kutch artisan villages — embroidery, crafts, heritage",
      "Visit the Statue of Unity at Kevadia",
      "Maheshwar's riverside fort and Maheshwari sari weaving",
    ],
    summaryRight: [
      "Romantic ruins of Mandu — Jahaz Mahal, Hoshang Shah's Tomb, Roopmati's Pavilion",
      "Mahakaleshwar Temple in Ujjain and UNESCO Sanchi Stupa near Bhopal",
      "Heritage walks in Lucknow — Bara Imambara and Nawabi cuisine",
      "Ram Mandir in Ayodhya and Saryu River Aarti ceremony",
    ],
    days: [
      { day: 1, title: "Arrive in Delhi", description: "Arrive in Delhi. Transfer to hotel.", overnight: "Delhi", image: "/images/itineraries/north-east/day-1.svg" },
      { day: 2, title: "Delhi → Bhuj → Rann of Kutch", description: "Fly to Bhuj. Transfer to desert camp in the Rann of Kutch for glamping.", overnight: "Rann of Kutch", image: "/images/itineraries/north-east/day-2.svg" },
      { day: 3, title: "Rann of Kutch", description: "Explore artisan villages known for traditional crafts, embroidery, and local artistry.", overnight: "Rann of Kutch", image: "/images/itineraries/north-east/day-3.svg" },
      { day: 4, title: "Rann of Kutch → Bhuj", description: "Return to Bhuj for local sightseeing and leisure.", overnight: "Bhuj", image: "/images/itineraries/north-east/day-4.svg" },
      { day: 5, title: "Exploring Bhuj", description: "Guided cultural tour of Kutch villages rich in heritage and craftsmanship.", overnight: "Bhuj", image: "/images/itineraries/north-east/day-5.svg" },
      { day: 6, title: "Bhuj → Surendra Nagar", description: "Travel to the stately Ambika Niwas Palace for a peaceful evening.", overnight: "Surendra Nagar", image: "/images/itineraries/north-east/day-6.svg" },
      { day: 7, title: "Surendra Nagar → Kevadia", description: "Optional wildlife sanctuary visit. Continue to Kevadia, home of the Statue of Unity.", overnight: "Kevadia", image: "/images/itineraries/north-east/day-7.svg" },
      { day: 8, title: "Kevadia → Maheshwar", description: "Visit the Statue of Unity (182m). Journey to Maheshwar on the Narmada.", overnight: "Maheshwar", image: "/images/itineraries/north-east/day-8.svg" },
      { day: 9, title: "Exploring Maheshwar", description: "Visit Omkareshwar Jyotirlinga. Explore Maheshwar's fort, ghats, Maheshwari sari weaving, and evening Narmada boat ride.", overnight: "Maheshwar", image: "/images/itineraries/north-east/day-9.svg" },
      { day: 10, title: "Maheshwar → Mandu", description: "Depart for Mandu, a romantic hilltop citadel. Sunset at Baz Bahadur's Palace.", overnight: "Mandu", image: "/images/itineraries/north-east/day-10.svg" },
      { day: 11, title: "Exploring Mandu", description: "Visit Jahaz Mahal, Hindola Mahal, Jami Masjid, Hoshang Shah's Tomb, and Roopmati's Pavilion.", overnight: "Mandu", image: "/images/itineraries/north-east/day-11.svg" },
      { day: 12, title: "Mandu → Ujjain", description: "Drive to Ujjain. Visit Mahakaleshwar Temple and Jantar Mantar observatory.", overnight: "Ujjain", image: "/images/itineraries/north-east/day-12.svg" },
      { day: 13, title: "Ujjain → Bhopal", description: "Visit Kal Bhairav Temple, Harsiddhi Temple, and Ved Shala. Drive to Bhopal.", overnight: "Bhopal", image: "/images/itineraries/north-east/day-13.svg" },
      { day: 14, title: "Bhopal — Sanchi", description: "Visit UNESCO Sanchi Stupa, Vidisha, and Udayagiri Caves.", overnight: "Bhopal", image: "/images/itineraries/north-east/day-1.svg" },
      { day: 15, title: "Exploring Bhopal", description: "Visit Bhimbetka Rock Shelters, Bhojpur Temple, State Tribal Museum, Taj-ul-Masjid, and old city bazaars.", overnight: "Bhopal", image: "/images/itineraries/north-east/day-2.svg" },
      { day: 16, title: "Bhopal → Lucknow", description: "Fly to Lucknow, the cultural capital of Uttar Pradesh. Evening at leisure.", overnight: "Lucknow", image: "/images/itineraries/north-east/day-3.svg" },
      { day: 17, title: "Exploring Lucknow", description: "Heritage walks — Bara Imambara, Chota Imambara. Indulge in Lucknowi cuisine.", overnight: "Lucknow", image: "/images/itineraries/north-east/day-4.svg" },
      { day: 18, title: "Lucknow (continued)", description: "Explore colonial landmarks, local bazaars, and museums. Evening at leisure.", overnight: "Lucknow", image: "/images/itineraries/north-east/day-5.svg" },
      { day: 19, title: "Lucknow → Prayagraj", description: "Drive to Prayagraj, the sacred confluence of three rivers. Boat ride at the Sangam.", overnight: "Prayagraj", image: "/images/itineraries/north-east/day-6.svg" },
      { day: 20, title: "Prayagraj → Ayodhya", description: "Proceed to Ayodhya, birthplace of Lord Rama. Evening Aarti ceremony at Saryu River.", overnight: "Ayodhya", image: "/images/itineraries/north-east/day-7.svg" },
      { day: 21, title: "Ayodhya → Mumbai", description: "Visit the grand Ram Mandir and Hanumangarhi. Transfer or flight to Mumbai. End of tour.", overnight: "—", image: "/images/itineraries/north-east/day-8.svg" },
    ],
    inclusions: ["Accommodation in Twin/Double rooms", "Daily breakfast (all meals at Rann of Kutch)", "AC vehicle transfers", "English-speaking guides", "Entrance fees and GST", "Boat ride at Prayagraj", "Rickshaw ride at Ayodhya"],
    exclusions: ["Personal expenses", "Items not mentioned", "Expenses beyond control", "Medical expenses", "Christmas/New Year surcharge"],
    datesPrices: ["Vibrant Gujarat with Central India", "Price Validity OCT 2025 – MAR 2026"],
    notes: ["Blackout: Dec 23 – Jan 5", "Festival Premium applies", "Weather Clause: customer bears costs", "Force Majeure: company not liable", "Domestic airfares (Delhi-Bhuj, Bhopal-Lucknow, Ayodhya-Mumbai) to be advised"],
    signatureExperiences: [
      { category: "Adventure Tour", title: "Desert glamping in the Rann of Kutch" },
      { category: "Culture & History", title: "Heritage trail tour in Bhuj" },
      { category: "Culture & History", title: "Smritivan Earthquake Museum" },
      { category: "Culture & History", title: "Maheshwari saree weaving tradition" },
      { category: "Culture & History", title: "Threads of Lucknow workshop" },
      { category: "Culture & History", title: "Learn Calligraphy in Lucknow" },
      { category: "Culture & History", title: "Kathak dance appreciation in Lucknow" },
      { category: "Culture & History", title: "Dine at Kotwara House, Lucknow" },
    ],
    heroImage: "/images/itineraries/north-east/main-bg.svg",
    overviewImage: "/images/itineraries/north-east/overview.svg",
    mapImage: "/images/itineraries/north-east/map.svg",
  },

];
