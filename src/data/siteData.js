/* =========================================================================
   VIGHNAHARTA REALTY — MASTER DATA FILE
   -------------------------------------------------------------------------
   ➜  EDIT EVERYTHING HERE. All property listings, company details,
      and Mumbai 3.0 portal data are centralized in this file.

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

    heroImage: "/images/home_page1.jpg",
    aboutImage: "/images/about-us.jpg",
    aboutImage2: "/images/about_us_2.jpg",
    whyChooseUsImage: "/images/why-choose-us.jpg",
    contactImage: "/images/contact_us.jpg",
    projectsImage: "/images/projects.jpg",

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
      { icon: "fa-solid fa-handshake", title: "Honesty First", text: "Straight answers about the land, the price and the process. If something is not right for you, we will say so." },
      { icon: "fa-solid fa-file-lines", title: "Paperwork Before Promises", text: "We let documents do the talking. Nothing is offered until the records have been checked." },
      { icon: "fa-solid fa-comments", title: "Open Communication", text: "Titles, records and terms are shared with you before you book, so you never decide in the dark." },
      { icon: "fa-solid fa-person-walking", title: "No-Pressure Buying", text: "You visit, you compare, you decide. We never use urgency tactics to close a deal." },
      { icon: "fa-solid fa-chart-line", title: "Growth-Minded Locations", text: "We pick land near real infrastructure — airport, sea link, highways and rail — where long-term demand is being built." },
      { icon: "fa-solid fa-shield-halved", title: "Long-Term Support", text: "Our job doesn't end at the sale deed. We stay available for mutation and any questions afterwards." }
    ],

    /* Why Choose Us */
    whyChooseUs: [
      { icon: "fa-solid fa-circle-check", title: "Verified 7/12 Records", text: "Every plot's 7/12 extract is reviewed in detail — owner, survey number, area and any encumbrance." },
      { icon: "fa-solid fa-link", title: "Clean Title Chain", text: "We cross-check the 8A record and follow the title trail so there are no surprises later." },
      { icon: "fa-solid fa-location-dot", title: "Inside the Mumbai 3.0 Belt", text: "Plots placed in the Uran–Panvel–Pen region, close to NMIA, Atal Setu and JNPT." },
      { icon: "fa-solid fa-binoculars", title: "Site Visits, Not Just Photos", text: "Walk the land, check the access road and boundary, and see the surroundings before you commit." },
      { icon: "fa-solid fa-file-signature", title: "Clear Written Agreement", text: "Plot details, agreed price and registration timeline are put in writing at the time of booking." },
      { icon: "fa-solid fa-building-columns", title: "Registration Support", text: "We coordinate the sale deed, stamp duty guidance and sub-registrar formalities so you don't chase papers." },
      { icon: "fa-solid fa-stamp", title: "Mutation Handled for You", text: "We help file the 7/12 mutation at the Talathi office so your name reaches the land record." },
      { icon: "fa-solid fa-headset", title: "Free Consultation", text: "Talk to our team about budget, location and goals with zero obligation." }
    ],

    /* Home page stats */
    stats: [
      { value: "124+", label: "Villages in the Mumbai 3.0 Belt" },
      { value: "6", label: "Major Infra Projects Nearby" },
      { value: "100%", label: "Verified 7/12 Titles" },
      { value: "Free", label: "Site Visit & Consultation" }
    ],

    /* Contact details */
    contact: {
      phone: "+91 90000 00000", // VERIFY-CLIENT dummy
      phoneAlt: "+91 90000 00001", // VERIFY-CLIENT dummy
      whatsapp: "919000000000", // VERIFY-CLIENT dummy (country code + number)
      email: "info@vighnahartarealty.com", // VERIFY-CLIENT
      emailAlt: "sales@vighnahartarealty.com", // VERIFY-CLIENT
      address: "Panvel, Navi Mumbai, Mumbai Metropolitan Region (MMR), Maharashtra", // Mumbai MMR office
      officeHours: "Monday – Saturday : 10:00 AM – 7:00 PM", // VERIFY-CLIENT
      mapEmbed: "https://www.google.com/maps?q=Panvel%2C%20Navi%20Mumbai%2C%20Maharashtra&output=embed"
    },

    social: [
      { label: "FB", name: "Facebook", url: "https://facebook.com" },
      { label: "IG", name: "Instagram", url: "https://instagram.com" },
      { label: "YT", name: "YouTube", url: "https://youtube.com" },
      { label: "IN", name: "LinkedIn", url: "https://linkedin.com" }
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
      // type: "Investment Plots",
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
      image: "/images/3_lakh_plot.jpg",
      images: [
        "/images/3_lakh_plot.jpg",
        "/images/home_page1.jpg",
        "/images/projects.jpg"
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
        // { label: "Project Type",   value: "Investment Plots" },
        { label: "Region", value: "Mumbai 3.0 (Uran – Panvel – Pen)" },
        { label: "Unit", value: "1 Guntha = 1,089 sq.ft" },
        { label: "Starting Price", value: "₹ 3 Lakh per Guntha" },
        { label: "Title", value: "7/12 Verified, Clear Title" },
        { label: "Booking", value: "Token amount + written agreement" },
        { label: "Registration", value: "Sale Deed with our assistance" },
        { label: "Mutation", value: "7/12 mutation support" },
        { label: "Site Visit", value: "Arranged on request" },
        { label: "Availability", value: "Registration Open" }
      ],
      connectivity: [
        { place: "NH-4B Highway", distance: "~4 min drive" },
        { place: "Panvel Railway Station", distance: "~6 min drive" },
        { place: "JNPT Port", distance: "~18 min drive" },
        { place: "Navi Mumbai Int'l Airport (NMIA)", distance: "~22 min drive" },
        { place: "Atal Setu (MTHL)", distance: "~15 min to S. Mumbai" },
        { place: "Alibaug–Virar Corridor", distance: "126 km, under construction" },
        { place: "Panvel–Khopoli Expressway", distance: "Nearby" }
      ],
      mapEmbed:
        "https://www.google.com/maps?q=Panvel%2C%20Maharashtra&output=embed"
    },

    /* ---------------------------- PROJECT 2 ---------------------------- */
    {
      id: "mumbai-3-premium-plots",
      name: "Mumbai 3.0 Premium Corridor Plots",
      tagline: "Plots closer to the action for buyers who want stronger positioning",
      // type: "Investment Plots",
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
      image: "/images/6lakh_new.jpg",
      images: [
        "/images/6lakh_new.jpg",
        "/images/home_page1.jpg",
        "/images/projects.jpg"
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
        // { label: "Project Type",   value: "Investment Plots" },
        { label: "Region", value: "Mumbai 3.0 Belt" },
        { label: "Unit", value: "1 Guntha = 1,089 sq.ft" },
        { label: "Starting Price", value: "₹ 6 Lakh per Guntha" },
        { label: "Title", value: "7/12 Verified, Clear Title" },
        { label: "Booking", value: "Token amount + written agreement" },
        { label: "Registration", value: "Sale Deed with our assistance" },
        { label: "Mutation", value: "7/12 mutation support" },
        { label: "Site Visit", value: "Arranged on request" },
        { label: "Availability", value: "Registration Open" }
      ],
      connectivity: [
        { place: "Alibaug–Virar Corridor", distance: "126 km, under construction" },
        { place: "Atal Setu (MTHL)", distance: "~15 min to S. Mumbai" },
        { place: "Navi Mumbai Int'l Airport (NMIA)", distance: "~22 min drive" },
        { place: "JNPT Port", distance: "~18 min drive" },
        { place: "Panvel Railway Station", distance: "~6 min drive" },
        { place: "Belapur–Uran Local Rail", distance: "Operational" },
        { place: "Proposed Metro Link (MTHL)", distance: "MMRDA planned" }
      ],
      mapEmbed:
        "https://www.google.com/maps?q=Alibaug%2C%20Maharashtra&output=embed"
    },

    /* ---------------------------- PROJECT 3 ---------------------------- */
    {
      id: "mumbai-3-commercial-investment-plots",
      name: "Mumbai 3.0 Commercial Investment Plots",
      tagline: "Strategic commercial and investment plots in the emerging Mumbai 3.0 corridor",
      // type: "Commercial Investment Plots",
      status: "Available",
      featured: false,
      city: "Mumbai 3.0",
      location: "Mumbai 3.0 Belt, Raigad",
      priceFrom: "₹ 1.5 Lakh*",
      priceNote: "Per Guntha (1,089 sq.ft), starting price",
      plotSizes: ["1 Guntha – 1,089 sq.ft", "Multiple Gunthas on request"],
      area: "Contact for details",
      totalPlots: "Limited plots",
      rera: "—", // VERIFY-CLIENT (add RERA no. only if applicable)
      possession: "Registration Open",
      image: "/images/1_5lakh.jpg",
      images: [
        "/images/1_5lakh.jpg",
        "/images/home_page1.jpg",
        "/images/projects.jpg"
      ],
      overview:
        "A high-potential investment opportunity for buyers seeking strategic commercial and investment plots at an accessible entry ticket in the Mumbai 3.0 growth belt. Positioned with seamless connectivity to key infrastructure and transport links, these plots offer strong appreciation potential for business ventures, commercial setups, or long-term capital growth. All title records are 7/12 verified with clear, transparent documentation.",
      highlights: [
        "Low entry price — an accessible commercial investment opportunity",
        "Strategic location within the Mumbai 3.0 growth belt",
        "Connected via prime arterial highways and expressways",
        "Suitable for commercial setups, business ventures or long-term holding",
        "7/12 checked and title trail verified",
        "Clear written agreement at booking",
        "Site visit arranged before you choose",
        "Full documentation guidance till mutation"
      ],
      plotDetails: [
        // { label: "Project Type",   value: "Commercial Investment Plots" },
        { label: "Location", value: "Mumbai 3.0 Belt" },
        { label: "Unit", value: "1 Guntha = 1,089 sq.ft" },
        { label: "Starting Price", value: "₹ 1.5 Lakh per Guntha" },
        { label: "Title", value: "7/12 Verified, Clear Title" },
        { label: "Booking", value: "Token amount + written agreement" },
        { label: "Registration", value: "Sale Deed with our assistance" },
        { label: "Mutation", value: "7/12 mutation support" },
        { label: "Site Visit", value: "Arranged on request" },
        { label: "Availability", value: "Registration Open" }
      ],
      connectivity: [
        { place: "Alibaug–Virar Corridor", distance: "Nearby" },
        { place: "Navi Mumbai Int'l Airport (NMIA)", distance: "Accessible via Panvel" },
        { place: "Panvel Railway Station", distance: "Nearby" },
        { place: "Mumbai–Pune Expressway", distance: "Nearby" },
        { place: "JNPT Port Corridor", distance: "Nearby" },
        { place: "Local Markets & Commercial Hubs", distance: "Nearby" }
      ],
      mapEmbed:
        "https://www.google.com/maps?q=Panvel%2C%20Maharashtra&output=embed"
    }
  ],

  /* Project Categories for filter pills */
  categories: [
    "All",
    // "Investment Plots",
    // "Commercial Investment Plots"
  ],

  /* =====================================================================
     3. NAVIGATION (Main Menu)
     ===================================================================== */
  navigation: [
    { label: "Home", route: "/" },
    { label: "Mumbai 3.0", route: "/mumbai-3.0" },
    { label: "About Us", route: "/about" },
    { label: "Projects", route: "/projects" },
    { label: "Why Us", route: "/why-us" },
    { label: "Contact Us", route: "/contact" }
  ],

  /* =====================================================================
     4. MUMBAI 3.0 DEDICATED PORTAL DATA
     ---------------------------------------------------------------------
     All image paths are configured here. Leave "" for fallback visuals
     or paste your image paths when available.
     ===================================================================== */
  mumbai3: {
    images: {
      heroBg: "/images/mumbai_3_0_airport.jpg",
      ctaBg: "",  // e.g. "/images/cta-bg.jpg"
      overview: "/images/mumbai_3_0_1.jpeg",
      property1: "", // Highway-Connected Logistics & Commercial Plot
      property2: "", // Greenfield Crest Residential Plot
      property3: "", // Aura Solis Township Development
      property4: "", // Gateway Nexus Commercial Land
      property5: "", // Horizon Nova Greenfield Expansion Zone
      property6: "", // Emerald Crest Executive Villa Plot
      locHighway: "",
      locResidential: "",
      locCommercial: "",
      locUrban: ""
    },

    infrastructure: [
      {
        title: "MMRDA MoUs at the World Economic Forum",
        image: "/images/mumbai_3_0_2.png",
        article: true,
        description: "MMRDA announced investment agreements at the World Economic Forum."
      },
      {
        title: "Mumbai 3.0 in the MMRDA Budget",
        image: "/images/mumbai_3_0_3.png",
        article: true,
        description: "The MMRDA budget includes funding for Mumbai 3.0 development."
      },
      {
        title: "Metro Connectivity",
        image: "/images/METRO.jpeg",
        description: "Fast and easy daily travel with upcoming Metro lines, connecting you smoothly to Navi Mumbai, Thane, and Mumbai without traffic hassle."
      },
      {
        title: "Alibag–Virar Corridor",
        image: "/images/mumbai_3_0_alibag_virar.jpeg",
        description: "A wide high-speed expressway connecting Virar to Alibag, cutting travel time drastically and making road trips quick across the MMR."
      },
      {
        title: "Atal Setu",
        image: "/images/mumbai_3_0_atal_setu.jpeg",
        description: "India's longest sea bridge connects South Mumbai to Navi Mumbai in just 20 minutes, making everyday travel quick and effortless."
      },
      {
        title: "JNPT Port",
        image: "/images/mumbai_3_0_jnpt.png",
        description: "India's largest container port right next door, bringing strong business growth, logistics hubs, and thousands of jobs to the area."
      },
      {
        title: "Railway Connectivity",
        image: "/images/mumbai_3_0_railway.jpeg",
        description: "Strong local train network and upcoming suburban rail routes, providing affordable and easy daily travel across Mumbai."
      },
      {
        title: "Navi Mumbai International Airport",
        image: "/images/mumbai_3_0_airport.jpg",
        description: "Located close to the brand-new international airport, bringing rapid development, high rental demand, and great property value growth."
      }
    ],

    overview: {
      title: "A New Chapter for the Mumbai Region",
      paragraphs: [
        "Mumbai 3.0 refers to an emerging planned urban region within the Mumbai Metropolitan Region, being shaped through state and MMRDA-led planning across parts of Uran, Panvel and Pen. The wider plan covers around 124 villages.",
        "With projects such as Navi Mumbai International Airport and Atal Setu, alongside proposed transport corridors, the area is attracting attention as a future growth centre between Mumbai and Navi Mumbai.",
        "Vighnaharta Realty offers plots in this belt with a focus on verified land records and clear guidance, helping buyers assess opportunities with care and build a considered long-term portfolio."
      ]
    },

    // categories: [
    //   "All Categories",
    //   "Highway-Connected Corridors",
    //   "Residential Plots",
    //   "Township Developments",
    //   "Commercial Land",
    //   "Future Development Zones",
    //   "Residential Investment Opportunities"
    // ],

    properties: [
      {
        id: "m3-highway-corridor-parcel",
        name: "Arterial Heights Logistics & Highway Plots",
        tagline: "Strategic frontage along the premier six-lane multimodal arterial corridor",
        type: "Highway-Connected Corridors",
        status: "Active Exploration",
        city: "Uran Corridor",
        location: "NH-4B Arterial Belt, Uran Sub-District",
        indicativePrice: "₹ 4.5 Lakh / Guntha*",
        priceNote: "Indicative baseline per Guntha (1,089 sq.ft)",
        plotSizes: "1.5 to 5 Gunthas (1,633 – 5,445 sq.ft)",
        area: "Flexible plot configurations",
        image: "/images/mumbai_3_0_alibag_virar.jpeg",
        categoryBadge: "Highway Frontage",
        description: "High-visibility parcels positioned directly alongside expanding regional transport lifelines. Ideal for long-term capital appreciation, fleet logistics hubs, or commercial frontage ventures requiring immediate vehicular access.",
        highlights: [
          "Direct 60-meter multi-lane highway frontage",
          "Immediate proximity to freight interchange junctions",
          "Unrestricted heavy payload vehicular approach",
          "Clear revenue demarcations and 7/12 check completed"
        ],
        connectivity: [
          { place: "NH-4B Multi-Lane Arterial", distance: "Direct Frontage (0 km)" },
          { place: "JNPT Freight Terminus", distance: "~8 km / 12 mins" },
          { place: "Atal Setu (MTHL) Expressway", distance: "~14 km / 18 mins" },
          { place: "Upcoming Cargo Corridor", distance: "~6 km" }
        ],
        investmentType: "Commercial & Logistics Growth"
      },
      {
        id: "m3-greenfield-crest-residential",
        name: "Greenfield Crest Valley Enclave",
        tagline: "Serene scenic residential parcels set against pristine foothill contours",
        type: "Residential Plots",
        status: "Active Exploration",
        city: "Panvel South",
        location: "Panvel South Green Foothills, Near Golf Greens",
        indicativePrice: "₹ 3.2 Lakh / Guntha*",
        priceNote: "Indicative baseline per Guntha (1,089 sq.ft)",
        plotSizes: "1 to 3 Gunthas (1,089 – 3,267 sq.ft)",
        area: "Individual demarcated layouts",
        image: "/images/3_lakh_plot.jpg",
        categoryBadge: "Scenic Residential",
        description: "Nestled amidst lush panoramic landscapes, these freehold residential parcels provide tranquil suburban living while maintaining effortless transit links to key economic epicenters.",
        highlights: [
          "Surrounded by natural greenery and mountain views",
          "Internal 30-foot asphalt access roads with drainage",
          "Demarcated perimeter boundary stones for each plot",
          "Verified title chain and hassle-free registration guidance"
        ],
        connectivity: [
          { place: "Old Mumbai–Pune Highway", distance: "~6 km / 9 mins" },
          { place: "Panvel Central Junction", distance: "~10 km / 15 mins" },
          { place: "Proposed Metro Extension", distance: "~8 km / 12 mins" },
          { place: "Reputed Schools & Healthcare", distance: "Within 7 km" }
        ],
        investmentType: "Custom Villa & Weekend Home"
      },
      {
        id: "m3-aura-solis-township",
        name: "Aura Solis Integrated Township Lands",
        tagline: "Master-planned sector parcels inside the core urban expansion grid",
        type: "Township Developments",
        status: "Active Exploration",
        city: "Chirle Belt",
        location: "Chirle Priority Growth Node, Mumbai 3.0 Core",
        indicativePrice: "₹ 5.8 Lakh / Guntha*",
        priceNote: "Indicative baseline per Guntha (1,089 sq.ft)",
        plotSizes: "2 to 10 Gunthas (2,178 – 10,890 sq.ft)",
        area: "Comprehensive township sector zones",
        image: "/images/mumbai_3_0_1.jpeg",
        categoryBadge: "Integrated Sector",
        description: "Premium large-format land tracts embedded inside an organized master-planned township blueprint. Tailored for mixed-use residential quarters, boutique clusters, and community developments.",
        highlights: [
          "Broad 40-foot main central boulevard access",
          "Earmarked civic amenities and open green parks",
          "Dedicated conduits for underground electrification & water",
          "Direct linkage to trans-harbour transit corridors"
        ],
        connectivity: [
          { place: "Atal Setu (MTHL) Interchange", distance: "~7 km / 10 mins" },
          { place: "Navi Mumbai Int'l Airport (NMIA)", distance: "~16 km / 20 mins" },
          { place: "Belapur–Uran Suburban Rail", distance: "~4 km / 6 mins" },
          { place: "Regional Smart City Zone", distance: "Adjacent Node" }
        ],
        investmentType: "Integrated Community Growth"
      },
      {
        id: "m3-gateway-nexus-commercial",
        name: "Gateway Nexus Commercial Land Parcels",
        tagline: "High-yield commercial parcels engineered for retail, warehousing and offices",
        type: "Commercial Land",
        status: "Active Exploration",
        city: "Pen Sub-Zone",
        location: "Pen Commercial & Industrial Corridor",
        indicativePrice: "₹ 2.1 Lakh / Guntha*",
        priceNote: "Indicative baseline per Guntha (1,089 sq.ft)",
        plotSizes: "2.5 to 12 Gunthas (2,722 – 13,068 sq.ft)",
        area: "Commercial plot configurations",
        image: "/images/mumbai_3_0_jnpt.png",
        categoryBadge: "Commercial Yield",
        description: "Strategically located parcels along bustling inter-district transit axes. Configured to accommodate warehouses, light assembly facilities, transit motels, or road-facing commercial retail showrooms.",
        highlights: [
          "Generous commercial frontage with wide entry gates",
          "Compatible with light commercial & warehouse zoning",
          "High capacity utility supply & telecom connectivity",
          "Low initial capital outlay with substantial upside"
        ],
        connectivity: [
          { place: "Mumbai–Goa National Highway", distance: "~2 km / 4 mins" },
          { place: "Pen Central Railway Station", distance: "~5 km / 8 mins" },
          { place: "Panvel–Khopoli Link Road", distance: "~18 km / 22 mins" },
          { place: "Local Wholesale Hubs", distance: "Within 3 km" }
        ],
        investmentType: "Commercial Enterprise & Storage"
      },
      {
        id: "m3-horizon-nova-greenfield",
        name: "Horizon Nova Greenfield Expansion Plots",
        tagline: "Early-stage capital appreciation acreage within designated regional masterplans",
        type: "Future Development Zones",
        status: "Active Exploration",
        city: "Karanjade South",
        location: "Karanjade South Growth Fringe, MMR Region",
        indicativePrice: "₹ 2.8 Lakh / Guntha*",
        priceNote: "Indicative baseline per Guntha (1,089 sq.ft)",
        plotSizes: "1 to 4 Gunthas (1,089 – 4,356 sq.ft)",
        area: "Phased greenfield development",
        image: "/images/mumbai_3_0_airport.jpeg",
        categoryBadge: "Future Growth Belt",
        description: "Positioned squarely in the pathway of the metropolitan growth spillover. A prime destination for patient, forward-thinking buyers looking to secure strategic land parcels ahead of urban consolidation.",
        highlights: [
          "Identified inside the long-term regional development draft",
          "Clean 7/12 extract checked with verified mutation trail",
          "Fast-evolving infrastructure and planned bypasses nearby",
          "Attractive low-entry valuation with robust growth headroom"
        ],
        connectivity: [
          { place: "Proposed Multi-Modal Corridor", distance: "~5 km / 7 mins" },
          { place: "NMIA Aerotropolis Fringe", distance: "~12 km / 16 mins" },
          { place: "Panvel Suburban Terminal", distance: "~9 km / 14 mins" },
          { place: "Coastal Ring Boulevard", distance: "Under Construction" }
        ],
        investmentType: "Long-Horizon Value Investment"
      },
      {
        id: "m3-emerald-crest-villas",
        name: "Emerald Crest Executive Villa Estates",
        tagline: "Exclusive boutique plotted community close to emerging coastal nodes",
        type: "Residential Investment Opportunities",
        status: "Active Exploration",
        city: "Ulwe-Dronagiri",
        location: "Ulwe–Dronagiri Inter-Belt, Coastal MMR",
        indicativePrice: "₹ 6.2 Lakh / Guntha*",
        priceNote: "Indicative baseline per Guntha (1,089 sq.ft)",
        plotSizes: "1.2 to 3.5 Gunthas (1,306 – 3,811 sq.ft)",
        area: "Demarcated luxury villa plots",
        image: "/images/1_5lakh.jpg",
        categoryBadge: "High-Demand Suburban",
        description: "Refined residential plots situated near thriving coastal suburbs. Combines high everyday liveability with premier proximity to upcoming trans-harbour corridors and world-class commercial sectors.",
        highlights: [
          "Rapidly urbanizing neighborhood with established civic amenities",
          "Immediate registry readiness with clear freehold documentation",
          "Scenic elevated terrain with superior natural drainage",
          "Strong historical appreciation and high rental demand surrounding"
        ],
        connectivity: [
          { place: "Dronagiri Railway Station", distance: "~4 km / 6 mins" },
          { place: "Uran Coastal Boulevard", distance: "~5 km / 8 mins" },
          { place: "Atal Setu Fast Interchange", distance: "~9 km / 12 mins" },
          { place: "Belapur CBD Node", distance: "~22 km / 25 mins" }
        ],
        investmentType: "Suburban Villa & Capital Security"
      }
    ],

    advantages: [
      {
        icon: "fa-solid fa-compass",
        title: "Connectivity & Regional Arterials",
        text: "Seamless integration with Atal Setu (MTHL), upcoming Navi Mumbai International Airport, multimodal ring roads, and direct rail networks."
      },
      {
        icon: "fa-solid fa-chart-line",
        title: "Long-Term Development Potential",
        text: "Strategically located along Maharashtra's primary economic corridor, benefiting from massive state infrastructure investments and urban growth."
      },
      {
        icon: "fa-solid fa-building-columns",
        title: "Diverse Property Options",
        text: "From accessible entry-level residential plots to prime commercial acreage and master-planned township sectors tailored to varied investment horizons."
      },
      {
        icon: "fa-solid fa-location-dot",
        title: "Location-Based Opportunities",
        text: "Handpicked locations situated within the priority urban expansion zone, offering strong structural advantages over saturated city markets."
      },
      {
        icon: "fa-solid fa-file-shield",
        title: "Transparent Property Information",
        text: "Every property comes with verified 7/12 land records, clear title trails, and comprehensive legal and mutation assistance from day one."
      }
    ],

    stats: [
      {
        value: "6+",
        label: "Property Categories",
        sub: "Plots, Commercial, Townships & Corridors"
      },
      {
        value: "24+",
        label: "Curated Locations",
        sub: "Across Uran, Panvel, Pen & Alibaug"
      },
      {
        value: "100%",
        label: "Title Verification",
        sub: "Rigorous 7/12 & Revenue Check Standard"
      },
      {
        value: "4x",
        label: "Major Transit Hubs",
        sub: "Airport, Sea Link, Rail & Expressways"
      }
    ],

    locationHighlights: [
      {
        id: "corridor-highway",
        title: "Highway-Accessible Arterials",
        tag: "High Connectivity",
        subtitle: "NH-4B & Multimodal Express Belts",
        description: "Properties with direct or immediate connectivity to primary transit corridors, ideal for commercial hubs, logistics setups, and high-visibility investments.",
        highlights: ["Direct multi-lane highway frontage", "Rapid freight & transit connectivity", "High commercial appreciation potential"],
        image: "/images/mumbai_3_0_airport.jpeg"
      },
      {
        id: "corridor-residential",
        title: "Developing Residential Corridors",
        tag: "Suburban Living",
        subtitle: "Panvel–Uran Scenic Greenbelt",
        description: "Quiet, green residential expanses planned for villa communities and weekend retreats, balancing scenic tranquility with smooth city commutes.",
        highlights: ["Lush natural surroundings", "Planned internal asphalt roads", "Gated enclave demarcations"],
        image: "/images/mumbai_3_0_1.jpeg"
      },
      {
        id: "corridor-commercial",
        title: "Emerging Commercial & Logistics Zones",
        tag: "Business Expansion",
        subtitle: "Pen & Port-Adjacent Industrial Hubs",
        description: "Robust industrial and commercial zones designed to support Maharashtra's expanding logistics, warehousing, and commercial enterprises.",
        highlights: ["Heavy-vehicle compliant access", "High utility load readiness", "Accessible entry pricing per Guntha"],
        image: "/images/mumbai_3_0_jnpt.png"
      },
      {
        id: "corridor-urban",
        title: "Established Urban Extensions",
        tag: "Metropolitan Growth",
        subtitle: "Ulwe, Dronagiri & Chirle Sectors",
        description: "Rapidly maturing suburban nodes situated close to rail lines, schools, hospitals, and direct Atal Setu access into South Mumbai.",
        highlights: ["Immediate urban infrastructure", "High liveability quotient", "Steady, reliable capital growth"],
        image: "/images/METRO.jpeg"
      }
    ]
  }
};

const { company, mumbai3 } = SITE_DATA;

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

// Mumbai 3.0 Exports
export const MUMBAI3_IMAGES = mumbai3.images;
export const MUMBAI3_INFRASTRUCTURE = mumbai3.infrastructure;
export const MUMBAI3_OVERVIEW = mumbai3.overview;
export const MUMBAI3_CATEGORIES = mumbai3.categories;
export const MUMBAI3_PROPERTIES = mumbai3.properties.map((p) => ({
  ...p,
  image: mumbai3.images[p.id] || p.image || ""
}));
export const MUMBAI3_ADVANTAGES = mumbai3.advantages;
export const MUMBAI3_STATS = mumbai3.stats;
export const MUMBAI3_LOCATION_HIGHLIGHTS = mumbai3.locationHighlights;
