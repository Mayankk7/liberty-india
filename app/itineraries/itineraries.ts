export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  overnight: string;
  image?: string;
}

export interface Itinerary {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
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
  heroImage: string;
  overviewImage: string;
  mapImage: string;
}

export const itineraries: Itinerary[] = [
  {
    slug: "northeast-india-city-of-joy",
    title: "Northeast India & The City of Joy",
    subtitle: "Experience the iconic wonders of India's Golden Triangle. Visit the Taj Mahal at sunrise, explore Delhi's historic sites, and experience the pink city of Jaipur.",
    duration: "13 Days",
    route: "Kolkata → Dibrugarh → Jorhat → Kaziranga → Shillong → Guwahati",
    bestTime: "October – March",
    overview: [
      "From the colonial elegance of Kolkata, famously known as The City of Joy, to the wild grasslands of Kaziranga, the living river island of Majuli, and the mist-laced hills of Meghalaya, this journey reveals India at its most poetic and untamed.",
      "Cruise along sacred rivers, track one-horned rhinos on safari, interact with monks on the world’s largest river island, and explore villages where sustainability is a way of life. This is Northeast India—raw, soulful, and unforgettable."
    ],
    summary: [
      "Boat ride on the Hooghly River in Kolkata, followed by a heritage walk at Dalhousie Square",
      "Scenic drive across the iconic Dhola Sadiya Bridge & Sunset cruise on the majestic Brahmaputra River",
      "Explore Dibru–Saikhowa National Park, known for its rare feral horses and riverine wilderness",
      "Cultural tour of Majuli Island with a traditional dance performance"
    ],
    summaryRight: [
      "Morning & evening jeep safaris in Kaziranga National Park, spotting one-horned rhinos, tigers, and elephants",
      "Visit Mawlynnong, celebrated as Asia’s cleanest village & Darshan at the sacred Kamakhya Temple in Guwahati",
      "Discover waterfalls and limestone caves in Cherrapunjee",
      "Boat ride on the crystal-clear Umngot River in Dawki"
    ],
    days: [
      {
        day: 1,
        title: "Arrived In Kolkata",
        description: "Arrive in Kolkata, where colonial architecture and creative spirit coexist. You’ll be met at the airport and transferred to your hotel. In the evening, enjoy an orientation tour of the city, highlighted by a serene boat ride on the Hooghly River, offering a first glimpse into Kolkata’s timeless charm.",
        overnight: "Kolkata",
        image: "/images/itineraries/north-east/day-1.svg"
      },
      {
        day: 2,
        title: "Exploring Kolkata",
        description: "Today is dedicated to discovering the cultural heart of the city. Visit iconic landmarks including the Victoria Memorial, St. Paul’s Cathedral, Indian Museum, and Belur Math. Later, wander through Kumartuli, a historic potters’ quarter where artisans craft clay idols using age-old techniques. End the day with a visit to Nahoum’s, Kolkata’s legendary Jewish bakery.",
        overnight: "Kolkata",
        image: "/images/itineraries/north-east/day-2.svg"
      },
      {
        day: 3,
        title: "Kolkata → Dibrugarh",
        description: "Begin with a heritage walk around Dalhousie Square, exploring colonial-era sites such as the Flower Market, Writer’s Building, Governor’s House, and Charnock Mausoleum. After breakfast, fly to Dibrugarh, the gateway to Assam’s tea country. On arrival, transfer to your hotel.",
        overnight: "Dibrugarh",
        image: "/images/itineraries/north-east/day-3.svg"
      },
      {
        day: 4,
        title: "Dibrugarh",
        description: "Set out on a scenic drive across the iconic Dhola–Sadiya Bridge, one of India’s longest river bridges. Continue to Dibru–Saikhowa National Park, home to rare wildlife including feral horses. Later, visit a traditional tea estate to learn about Assam’s world-famous tea culture.",
        overnight: "Dibrugarh",
        image: "/images/itineraries/north-east/day-4.svg"
      },
      {
        day: 5,
        title: "Dibrugarh → Jorhat",
        description: "Set out on a scenic drive across the iconic Dhola–Sadiya Bridge, one of India’s longest river bridges. Continue to Dibru–Saikhowa National Park, home to rare wildlife including feral horses. Later, visit a traditional tea estate to learn about Assam’s world-famous tea culture.",
        overnight: "Jorhat",
        image: "/images/itineraries/north-east/day-5.svg"
      },
      {
        day: 6,
        title: "Majuli Island Excursion",
        description: "Travel to Neemati Ghat and board a ferry to Majuli, the world’s largest river island. Explore its renowned Vaishnavite monasteries (Satras) and interact with resident monks. Visit local villages known for pottery-making and mask craftsmanship, followed by a cultural performance reflecting the island’s spiritual traditions.",
        overnight: "Jorhat",
        image: "/images/itineraries/north-east/day-6.svg"
      },
      {
        day: 7,
        title: "Jorhat → Kaziranga National Park",
        description: "Drive to Kaziranga National Park, a UNESCO World Heritage Site famed for its population of one-horned rhinoceroses. In the afternoon, enjoy a river dolphin safari on the Brahmaputra, a rare and tranquil wildlife experience.",
        overnight: "Kaziranga National Park",
        image: "/images/itineraries/north-east/day-7.svg"
      },
      {
        day: 8,
        title: "Kaziranga National Park",
        description: "Embark on an early morning jeep safari, tracking rhinos, elephants, wild buffalo, and birdlife across Kaziranga’s grasslands. After breakfast, enjoy a second safari in the afternoon, offering another chance to witness the park’s extraordinary biodiversity.",
        overnight: "Kaziranga National Park",
        image: "/images/itineraries/north-east/day-8.svg"
      },
      {
        day: 9,
        title: "Kaziranga → Shillong",
        description: "After breakfast, drive through scenic landscapes to Shillong, the capital of Meghalaya. Check in at your hotel and enjoy the rest of the day at leisure in this hill town often called the Scotland of the East.",
        overnight: "Shillong",
        image: "/images/itineraries/north-east/day-9.svg"
      },
      {
        day: 10,
        title: "Shillong → Cherrapunjee → Shillong",
        description: "Travel to Cherrapunjee, one of the wettest places on Earth. En route, visit Elephant Falls and Mawdok Valley. Explore dramatic natural wonders including Nohkalikai Falls, Seven Sisters Falls, Mawsmai Cave, and Wahkaba Falls.",
        overnight: "Shillong",
        image: "/images/itineraries/north-east/day-10.svg"
      },
      {
        day: 11,
        title: "Dawki & Mawlynnong",
        description: "Visit Dawki for a boat ride on the crystal-clear Umngot River, with views extending into Bangladesh. Continue to Mawlynnong, celebrated as Asia’s cleanest village, known for its eco-conscious lifestyle and community-driven sustainability.",
        overnight: "Shillong",
        image: "/images/itineraries/north-east/day-11.svg"
      },
      {
        day: 12,
        title: "Shillong → Guwahati",
        description: "Drive to Guwahati. En route, visit the sacred Kamakhya Temple, one of the most revered shrines in India. Arrive in Guwahati and check in at your hotel. Enjoy the evening at leisure or explore the local markets.",
        overnight: "Guwahati",
        image: "/images/itineraries/north-east/day-12.svg"
      },
      {
        day: 13,
        title: "Depart Guwahati",
        description: "Transfer to the airport for your onward journey. Optionally, visit local sites or markets if time permits before departure.",
        overnight: "Shillong",
        image: "/images/itineraries/north-east/day-13.svg"
      },

    ],
    inclusions: [
      "Twin/Double room accommodation",
      "Daily breakfast and dinner",
      "AC vehicle transfers and sightseeing",
      "English-speaking local guides",
      "Entrance fees and GST"
    ],
    exclusions: [
      "Personal expenses (laundry, heater charges)",
      "Medical expenses",
      "Items not explicitly mentioned"
    ],
    datesPrices: [
      "Northeast India & The City of Joy",
      "Price  Validity OCT 2025 – MAR 2026"
    ],
    notes: [
      "Blackout Period: Dec 23 – Jan 5 (not available)",
      "Festival Premium: Extra charges during major festivals",
      "Weather Clause: Customer bears costs for natural disruptions",
      "Force Majeure: Company not liable for conditions beyond control"
    ],
    heroImage: "/images/itineraries/north-east/main-bg.svg",
    overviewImage: "/images/itineraries/north-east/overview.svg",
    mapImage: "/images/itineraries/north-east/map.svg"
  }
  // Add more itineraries here
];
