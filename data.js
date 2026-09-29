/* ==========================================================
  VIGHNHARTA REALTY — SITE DATA
   This is the ONLY file you need to edit to update the site.

   1. Change your WhatsApp number in SITE below.
   2. To add a property, copy one { ... }, block inside
      PROPERTIES, paste it at the end, and change the details.
   3. Save the file and refresh the page.
   ========================================================== */

const SITE = {
  // Country code + number, digits only. No +, spaces or dashes.
  whatsappNumber: "919999999999",
  phoneDisplay: "+91 99999 99999",
  email: "hello@Vighnhartareality.com",
  address: "Vighnharta Realty Office, Bhavnagar, Gujarat"
};

/* ----------------------------------------------------------
   PROPERTIES
   name        : shown as the card title
   location    : area / city
   type        : e.g. House, Apartment, Villa, Plot, Commercial, Rental
  description : shown in the details popup (1-3 sentences)
  sizes      : available plot sizes
  highlights : project highlights
  connectivity: nearby access and landmarks
   image       : full image URL (works with any website's image link)
   ---------------------------------------------------------- */
const PROPERTIES = [
  {
    id: 1,
    name: "Vighnharta Green County",
    location: "Bhavnagar",
    type: "Residential Plots",
    description: "A calm residential plotting project designed for families who want open surroundings and an address with room to grow.",
    sizes: "1000, 1200 and 1500 sq. ft.", highlights: "Clear title, internal roads, electricity and landscaped entrance.", connectivity: "Easy access to the city, schools and daily essentials.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=70"
  },
  {
    id: 2,
    name: "Vighnharta Sunrise Enclave",
    location: "Bhavnagar",
    type: "Residential Plots",
    description: "A thoughtfully planned neighbourhood with generous plot options, wide roads and a peaceful setting for your next chapter.",
    sizes: "800, 1000 and 1250 sq. ft.", highlights: "Gated entry, drainage, street lighting and reliable water connection.", connectivity: "Connected to major roads, markets and nearby employment hubs.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=70"
  },
  {
    id: 3,
    name: "Vighnharta Farmview",
    location: "Rajkot",
    type: "Farm Plots",
    description: "Open land for a weekend retreat, garden home or long-term investment, surrounded by a quieter landscape.",
    sizes: "2000, 3000 and 5000 sq. ft.", highlights: "Open views, defined boundaries and approach road access.", connectivity: "A short drive from the main highway and local amenities.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=70"
  },

  {
    id: 11,
    name: "Green Belt Plot",
    location: "Bhavnagar",
    type: "Plot",
    description: "A residential plot in a growing neighbourhood, with paved road access, drainage and electricity already in place.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=70"
  },
  {
    id: 12,
    name: "Family Flat near Market",
    location: "Sihor",
    type: "Rental", 
    description: "A three-bedroom flat for rent close to the market and bus stop. Ground floor, easy access and a small shared courtyard.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=70"
  }
];

/* ----------------------------------------------------------
   OUR STORY (timeline) — change the text to your real history
   ---------------------------------------------------------- */
const TIMELINE = [
  {
    year: "01", title: "Locations with potential",
    text: "We study access, surroundings and everyday convenience before presenting a project."
  },
  {
    year: "02", title: "Details you can trust",
    text: "We make plot sizes, project features and location information easy to understand."
  },
  {
    year: "03", title: "Personal guidance",
    text: "Every enquiry gets a thoughtful conversation, whether you are buying your first plot or expanding an investment."
  },
  {
    year: "04", title: "Support beyond selection",
    text: "Our team stays available through site visits, comparisons and the next steps after you decide."
  }
];
