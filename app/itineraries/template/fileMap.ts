// Maps itinerary slug -> downloadable file name placed under /public/files/.
// Used by the OverviewSection to show a "Download" CTA only when a file exists.
export const ITINERARY_FILE_MAP: Record<string, string> = {
  'eastindia': 'Northeast India &  The City of Joy.pdf',
  'kairali-ayurvedic-healing-village': 'Ayurveda - Kairali.docx',
  'taj-and-tigers': 'Taj-and-Tigers.pdf',
  'classical-golden-triangle': 'Classical Golden Triangle.docx',
  'unveiling-the-enchanting-south-tamil-nadu': 'Unveiling the Enchanting South – Tamil Nadu & Kerala.docx',
  'colourful-rajasthan': 'Colourful Rajasthan.docx',
};
