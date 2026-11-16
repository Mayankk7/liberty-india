/**
 * FAQ content — edit here; the page and its search-engine markup both read
 * from this list.
 *
 * ⚠️ DRAFT: these answers were written from copy already on the site, as a
 * starting point. Replace with the client's approved questions and answers.
 */
export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: 'What is Liberty India?',
    answer:
      'Liberty India is a Destination Management Company (DMC) for India. Founded two decades ago, we design and deliver MICE programmes, luxury leisure travel, events and curated journeys across the country.',
  },
  {
    question: 'Who do you work with?',
    answer:
      'We are the on-ground partner for tour operators, luxury travel advisors and organisations planning travel to India — from individual tailor-made journeys to corporate groups and delegations.',
  },
  {
    question: 'Which services do you offer?',
    answer:
      'Meetings & Conferences, Incentives, Premium Leisure, Cruise Handling, Special Interest Tours, Sports Tourism and Education Tours. Each has its own page under Our Services.',
  },
  {
    question: 'Which parts of India do you cover?',
    answer:
      'Our journeys span the country — including the Golden Triangle, Rajasthan, Central India, Gujarat, Kerala, Tamil Nadu and North East India. Browse them all on the Journeys page.',
  },
  {
    question: 'Can an itinerary be tailored to my clients or group?',
    answer:
      'Yes. The itineraries on this site are starting points. Tell us what your clients or delegates need and our team will design a bespoke programme around it.',
  },
  {
    question: 'When is the best time to travel to India?',
    answer:
      'It depends on the region and the experience you are planning. Every itinerary page lists the best time to travel for that journey, and our team can advise on your specific dates.',
  },
  {
    question: 'How do I request a proposal?',
    answer:
      'Use the “Request a proposal” form at the bottom of any page, or the enquiry button on an itinerary. You can also email India@liberty-int.com or call +91 9811116747.',
  },
  {
    question: 'Where is Liberty India based?',
    answer:
      'Our office is at 105, Complex, Sushant Lok Rd, Sector 28A, Sushant Lok Phase 1, Gurugram, Haryana 122001, India.',
  },
];
