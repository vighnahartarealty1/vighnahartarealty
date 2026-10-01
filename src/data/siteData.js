/* =========================================================================
   VIGHNAHARTA REALTY — MASTER DATA FILE
   -------------------------------------------------------------------------
   ➜  EDIT EVERYTHING HERE. No other file needs to be touched for content.

   ⚠ Lines marked  // VERIFY-CLIENT  hold assumed / dummy values (phone, email,
     address, year, hours, RERA). Get the real ones from the client before launch.
   ========================================================================= */

const SITE_DATA = {

  /* =====================================================================
     1. COMPANY INFORMATION
     ===================================================================== */
  company: {
    name: "Vighnaharta Realty",
    shortName: "Vighnaharta",
    tagline: "Clear Titles. Confident Investments.",
    established: "2023", // VERIFY-CLIENT
    intro:
      "Vighnaharta Realty helps families and investors buy verified plots in the Mumbai 3.0 belt — Uran, Panvel and Pen — with clean 7/12 records and guidance right up to registration.",

    heroImage: "/images/home page 1.jpeg",
    aboutImage: "/images/about-us.jpeg",
    aboutImage2: "/images/about us 2.jpeg",
    whyChooseUsImage: "/images/why-choose-us.jpeg",
    contactImage: "/images/contact us.jpeg",
    projectsImage: "/images/projects.jpeg",

    /* About page paragraphs */
    about: [
      "Vighnaharta Realty was created around one idea: buying land in Maharashtra should feel clear, not risky. Most people who want to invest in a plot are ready with the money — what holds them back is the worry about what the paperwork really says. We exist to remove that worry.",
      "We focus on plots in the Mumbai 3.0 belt, the planned urban region taking shape between Mumbai and Navi Mumbai across Uran, Panvel and Pen. Before any plot is shown to a customer, our team checks the 7/12 extract, cross-verifies the 8A record and traces the title so that ownership is clean from the very start.",
      "Our way of working is simple. We listen first, take you to the land in person, let you choose at your own pace, and then stay with you through booking, sale deed and mutation. No pressure, no confusing jargon — just a straight process where every decision is backed by documents."
    ],

    vision:
      "To be the land and plot partner people across Maharashtra trust first — known for verified records, honest advice and investments that stand strong on paper.",

    mission:
      "To make plot buying simple and transparent by verifying every record, explaining every step in plain language, and supporting each customer from the first conversation to the name appearing on the 7/12.",

    /* Our Values */
    values: [
      { icon: "🤝", title: "Honesty First", text: "Straight answers about the land, the price and the process. If something is not right for you, we will say so." },
      { icon: "📜", title: "Paperwork Before Promises", text: "We let documents do the talking. Nothing is offered until the records have been checked." },
      { icon: "🔍", title: "Open Communication", text: "Titles, records and terms are shared with you before you book, so you never decide in the dark." },
      { icon: "🚶", title: "No-Pressure Buying", text: "You visit, you compare, you decide. We never use urgency tactics to close a deal." },
      { icon: "📈", title: "Growth-Minded Locations", text: "We pick land near real infrastructure — airport, sea link, highways and rail — where long-term demand is being built." },
      { icon: "🛡️", title: "Long-Term Support", text: "Our job doesn't end at the sale deed. We stay available for mutation and any questions afterwards." }
    ],

    /* Why Choose Us */
    whyChooseUs: [
      { icon: "✅", title: "Verified 7/12 Records", text: "Every plot's 7/12 extract is reviewed in detail — owner, survey number, area and any encumbrance." },
      { icon: "🔗", title: "Clean Title Chain", text: "We cross-check the 8A record and follow the title trail so there are no surprises later." },
      { icon: "📍", title: "Inside the Mumbai 3.0 Belt", text: "Plots placed in the Uran–Panvel–Pen region, close to NMIA, Atal Setu and JNPT." },
      { icon: "🗺️", title: "Site Visits, Not Just Photos", text: "Walk the land, check the access road and boundary, and see the surroundings before you commit." },
      { icon: "📝", title: "Clear Written Agreement", text: "Plot details, agreed price and registration timeline are put in writing at the time of booking." },
      { icon: "🏛️", title: "Registration Support", text: "We coordinate the sale deed, stamp duty guidance and sub-registrar formalities so you don't chase papers." },
      { icon: "📄", title: "Mutation Handled for You", text: "We help file the 7/12 mutation at the Talathi office so your name reaches the land record." },
      { icon: "💬", title: "Free Consultation", text: "Talk to our team about budget, location and goals with zero obligation." }
    ],

    /* Home page stats */
    stats: [
      { value: "124+",  label: "Villages in the Mumbai 3.0 Belt" },
      { value: "6",     label: "Major Infra Projects Nearby" },
      { value: "100%",  label: "Verified 7/12 Titles" },
      { value: "Free",  label: "Site Visit & Consultation" }
    ],

    /* Contact details */
    contact: {
      phone: "+91 90000 00000", // VERIFY-CLIENT dummy
      phoneAlt: "+91 90000 00001", // VERIFY-CLIENT dummy
      whatsapp: "919000000000", // VERIFY-CLIENT dummy (country code + number)
      email: "info@vighnahartarealty.com", // VERIFY-CLIENT
      emailAlt: "sales@vighnahartarealty.com", // VERIFY-CLIENT
      address: "Panvel, Navi Mumbai, Maharashtra", // VERIFY-CLIENT full office address
      officeHours: "Monday – Saturday : 10:00 AM – 7:00 PM", // VERIFY-CLIENT
      mapEmbed: "https://www.google.com/maps?q=Panvel%2C%20Maharashtra&output=embed"
    },

    social: [
      { label: "FB", name: "Facebook",  url: "https://facebook.com" },
      { label: "IG", name: "Instagram", url: "https://instagram.com" },
      { label: "YT", name: "YouTube",   url: "https://youtube.com" },
      { label: "IN", name: "LinkedIn",  url: "https://linkedin.com" }
    ]
  },

  /* =====================================================================
     2. PROJECTS  (add / remove / edit freely)
     Prices below follow the 7/12 site listings — client to verify.
     ===================================================================== */
  projects: [

    /* ---------------------------- PROJECT 1 ---------------------------- */
    {
      id: "mumbai-3-entry-plots",
      name: "Mumbai 3.0 Entry Plots",
      tagline: "An early, affordable way into Mumbai's next growth belt",
      type: "Investment Plots",
      status: "Available",
      featured: true,
      city: "Panvel",
      location: "Uran – Panvel – Pen Belt, Mumbai 3.0",
      priceFrom: "₹ 3 Lakh*",
      priceNote: "Per Guntha (1,089 sq.ft), starting price",
      plotSizes: ["1 Guntha – 1,089 sq.ft", "Multiple Gunthas on request"],
      area: "Contact for details",
      totalPlots: "Limited plots",
      rera: "—", // VERIFY-CLIENT (add RERA no. only if applicable)
      possession: "Registration Open",
      image: "/images/3 lakh plot.jpeg",
      images: [
        "/images/3 lakh plot.jpeg",
        "/images/home page 1.jpeg",
        "/images/projects.jpeg"
      ],
      overview:
        "These plots sit inside the Mumbai 3.0 belt, the planned region between Mumbai and Navi Mumbai that is being shaped by the Navi Mumbai International Airport, Atal Setu and the Alibaug–Virar corridor. Priced well below saturated city markets, they give first-time investors a realistic way to enter early and hold for long-term appreciation. Each plot comes with a checked 7/12 extract and a clean title trail, and our team walks you through the paperwork from booking to mutation.",
      highlights: [
        "Located within the government-planned Mumbai 3.0 region",
        "Close to Navi Mumbai International Airport (NMIA)",
        "Quick access to Atal Setu and South Mumbai",
        "7/12 extract verified, title chain checked",
        "Simple starting price per Guntha",
        "Written agreement at booking with price and timeline",
        "Site visit arranged before you decide",
        "Registration and mutation support from our team"
      ],
      plotDetails: [
        { label: "Project Type",   value: "Investment Plots" },
        { label: "Region",         value: "Mumbai 3.0 (Uran – Panvel – Pen)" },
        { label: "Unit",           value: "1 Guntha = 1,089 sq.ft" },
        { label: "Starting Price", value: "₹ 3 Lakh per Guntha" },
        { label: "Title",          value: "7/12 Verified, Clear Title" },
        { label: "Booking",        value: "Token amount + written agreement" },
        { label: "Registration",   value: "Sale Deed with our assistance" },
        { label: "Mutation",       value: "7/12 mutation support" },
        { label: "Site Visit",     value: "Arranged on request" },
        { label: "Availability",   value: "Registration Open" }
      ],
      connectivity: [
        { place: "NH-4B Highway",                     distance: "~4 min drive" },
        { place: "Panvel Railway Station",            distance: "~6 min drive" },
        { place: "JNPT Port",                         distance: "~18 min drive" },
        { place: "Navi Mumbai Int'l Airport (NMIA)",  distance: "~22 min drive" },
        { place: "Atal Setu (MTHL)",                  distance: "~15 min to S. Mumbai" },
        { place: "Alibaug–Virar Corridor",            distance: "126 km, under construction" },
        { place: "Panvel–Khopoli Expressway",         distance: "Nearby" }
      ],
      mapEmbed:
        "https://www.google.com/maps?q=Panvel%2C%20Maharashtra&output=embed"
    },

    /* ---------------------------- PROJECT 2 ---------------------------- */
    {
      id: "mumbai-3-premium-plots",
      name: "Mumbai 3.0 Premium Corridor Plots",
      tagline: "Plots closer to the action for buyers who want stronger positioning",
      type: "Investment Plots",
      status: "Available",
      featured: true,
      city: "Alibaug",
      location: "Mumbai 3.0 Belt — Alibaug–Virar Corridor side",
      priceFrom: "₹ 6 Lakh*",
      priceNote: "Per Guntha (1,089 sq.ft), starting price",
      plotSizes: ["1 Guntha – 1,089 sq.ft", "Multiple Gunthas on request"],
      area: "Contact for details",
      totalPlots: "Limited plots",
      rera: "—", // VERIFY-CLIENT (add RERA no. only if applicable)
      possession: "Registration Open",
      image: "/images/6lakh_new.png",
      images: [
        "/images/6lakh_new.png",
        "/images/home page 1.jpeg",
        "/images/projects.jpeg"
      ],
      overview:
        "For buyers who prefer land nearer to the big infrastructure lines, this category offers plots positioned along the growth corridors of Mumbai 3.0. The Alibaug–Virar multimodal corridor, the coastal link to Atal Setu and the upcoming metro connection make this stretch a natural pick for medium to long-term investors. As with every Vighnaharta plot, records are checked before we show it, and the deal is documented in writing.",
      highlights: [
        "Positioned near major corridors of the Mumbai 3.0 region",
        "Benefits from the 126 km Alibaug–Virar multimodal corridor",
        "Strong access to Atal Setu, NMIA and JNPT",
        "Ideal for medium to long-term holding",
        "Clean 7/12 and verified title chain",
        "Transparent booking with agreed price locked in writing",
        "Guided site visit before selection",
        "Support through sale deed and mutation"
      ],
      plotDetails: [
        { label: "Project Type",   value: "Investment Plots" },
        { label: "Region",         value: "Mumbai 3.0 Belt" },
        { label: "Unit",           value: "1 Guntha = 1,089 sq.ft" },
        { label: "Starting Price", value: "₹ 6 Lakh per Guntha" },
        { label: "Title",          value: "7/12 Verified, Clear Title" },
        { label: "Booking",        value: "Token amount + written agreement" },
        { label: "Registration",   value: "Sale Deed with our assistance" },
        { label: "Mutation",       value: "7/12 mutation support" },
        { label: "Site Visit",     value: "Arranged on request" },
        { label: "Availability",   value: "Registration Open" }
      ],
      connectivity: [
        { place: "Alibaug–Virar Corridor",            distance: "126 km, under construction" },
        { place: "Atal Setu (MTHL)",                  distance: "~15 min to S. Mumbai" },
        { place: "Navi Mumbai Int'l Airport (NMIA)",  distance: "~22 min drive" },
        { place: "JNPT Port",                         distance: "~18 min drive" },
        { place: "Panvel Railway Station",            distance: "~6 min drive" },
        { place: "Belapur–Uran Local Rail",           distance: "Operational" },
        { place: "Proposed Metro Link (MTHL)",        distance: "MMRDA planned" }
      ],
      mapEmbed:
        "https://www.google.com/maps?q=Alibaug%2C%20Maharashtra&output=embed"
    },

    /* ---------------------------- PROJECT 3 ---------------------------- */
    {
      id: "khopoli-pali-residential-plots",
      name: "Khopoli–Pali Residential Plots",
      tagline: "Budget-friendly residential plots on the Panvel–Khopoli side",
      type: "Residential Plots",
      status: "Available",
      featured: false,
      city: "Khopoli",
      location: "Khopoli – Pali, Raigad",
      priceFrom: "₹ 1.5 Lakh*",
      priceNote: "Per Guntha (1,089 sq.ft), starting price",
      plotSizes: ["1 Guntha – 1,089 sq.ft", "Multiple Gunthas on request"],
      area: "Contact for details",
      totalPlots: "Limited plots",
      rera: "—", // VERIFY-CLIENT (add RERA no. only if applicable)
      possession: "Registration Open",
      image: "/images/1.5lakh.jpeg",
      images: [
        "/images/1.5lakh.jpeg",
        "/images/home page 1.jpeg",
        "/images/projects.jpeg"
      ],
      overview:
        "A practical option for buyers who want land at a lower entry ticket while staying connected to the MMR growth story. The Khopoli–Pali stretch offers green surroundings, good road links via the Panvel–Khopoli route and room for a future home, weekend plan or a patient long-term holding. Records are verified and the buying process stays as straightforward as on every other Vighnaharta plot.",
      highlights: [
        "Low entry price — a comfortable first land purchase",
        "Green, peaceful surroundings with room to build",
        "Connected via the Panvel–Khopoli route",
        "Suitable for a home, weekend retreat or long-term hold",
        "7/12 checked and title trail verified",
        "Clear written agreement at booking",
        "Site visit arranged before you choose",
        "Full documentation guidance till mutation"
      ],
      plotDetails: [
        { label: "Project Type",   value: "Residential Plots" },
        { label: "Location",       value: "Khopoli – Pali" },
        { label: "Unit",           value: "1 Guntha = 1,089 sq.ft" },
        { label: "Starting Price", value: "₹ 1.5 Lakh per Guntha" },
        { label: "Title",          value: "7/12 Verified, Clear Title" },
        { label: "Booking",        value: "Token amount + written agreement" },
        { label: "Registration",   value: "Sale Deed with our assistance" },
        { label: "Mutation",       value: "7/12 mutation support" },
        { label: "Site Visit",     value: "Arranged on request" },
        { label: "Availability",   value: "Registration Open" }
      ],
      connectivity: [
        { place: "Panvel–Khopoli Expressway",         distance: "Nearby" },
        { place: "Khopoli Railway Station",           distance: "Nearby" },
        { place: "Panvel",                            distance: "Approach via expressway" },
        { place: "Navi Mumbai Int'l Airport (NMIA)",  distance: "Accessible via Panvel" },
        { place: "Mumbai–Pune Expressway",            distance: "Nearby" },
        { place: "Local Market & Schools",            distance: "Nearby" }
      ],
      mapEmbed:
        "https://www.google.com/maps?q=Khopoli%2C%20Maharashtra&output=embed"
    }
  ],

  /* Project Categories for filter pills */
  categories: [
    "All",
    "Investment Plots",
    "Residential Plots"
  ],

  /* =====================================================================
     3. NAVIGATION (Main Menu)
     ===================================================================== */
  navigation: [
    { label: "Home",       route: "#/" },
    { label: "About Us",   route: "#/about" },
    { label: "Projects",   route: "#/projects" },
    { label: "Contact Us", route: "#/contact" }
  ]
};

const { company } = SITE_DATA;

export const CATEGORIES = SITE_DATA.categories && SITE_DATA.categories.length > 0
  ? SITE_DATA.categories
  : ['All', ...Array.from(new Set(SITE_DATA.projects.map((p) => p.type).filter(Boolean)))];

export const SITE = {
  name: company.name,
  tagline: company.tagline,
  whatsappNumber: company.contact.whatsapp,
  phoneDisplay: company.contact.phone,
  phoneAlt: company.contact.phoneAlt,
  email: company.contact.email,
  emailAlt: company.contact.emailAlt,
  address: company.contact.address,
  officeHours: company.contact.officeHours,
  mapEmbed: company.contact.mapEmbed,
  heroImage: company.heroImage,
  aboutImage: company.aboutImage,
  aboutImage2: company.aboutImage2,
  whyChooseUsImage: company.whyChooseUsImage,
  contactImage: company.contactImage,
  projectsImage: company.projectsImage
};

export const PROPERTIES = SITE_DATA.projects.map((project) => ({
  ...project,
  description: project.overview,
  sizes: project.plotSizes.join(' | ')
}));

export const STATS = company.stats.map((stat) => {
  const numericValue = stat.value.match(/^(\d+)(.*)$/);

  return {
    ...stat,
    count: numericValue ? Number(numericValue[1]) : 0,
    suffix: numericValue ? numericValue[2] : '',
    displayValue: numericValue ? null : stat.value
  };
});

export const TIMELINE = company.whyChooseUs.map((item, index) => ({
  year: String(index + 1).padStart(2, '0'),
  title: item.title,
  text: item.text
}));

export const FAQS = company.whyChooseUs.map((item) => ({
  question: item.title,
  answer: item.text
}));
