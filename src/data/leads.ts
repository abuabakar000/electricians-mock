export interface LeadData {
  slug: string;
  title: string;
  logo?: string;
  primaryColor: string;
  phone: string;
  address: string;
  email: string;
  heroHeading: string;
  highlightWord?: string; // The specific word to apply the gradient to
  heroSubtext: string;
  trustRating: string;
  customerCount: string;
  licensedText?: string;
  hours: {
    monFri: string;
    sat: string;
    emergency: string;
  };
  socials: {
    facebook?: string;
    instagram?: string;
    google?: string;
  };
  mapUrl?: string; // Google Maps Embed URL
  services?: {
    title?: string;
    desc?: string;
  }[];
}

export const defaultLead: LeadData = {
  slug: "default",
  title: "ProElectric",
  logo: "/logo.png",
  primaryColor: "#0ea5e9", // Electric Blue
  phone: "(306) 555-0123",
  address: "Your City, State & Surrounding Areas",
  email: "service@proelectric.com",
  heroHeading: "Master Electrical Solutions for Your Home",
  highlightWord: "Electrical",
  heroSubtext: "Experience master-level electrical craftsmanship and rapid 24/7 response times. From emergency repairs to smart home installations, we provide the elite electrical solutions your home deserves.",
  trustRating: "4.9",
  customerCount: "500+",
  hours: {
    monFri: "8:00 AM - 6:00 PM",
    sat: "9:00 AM - 4:00 PM",
    emergency: "Available 24/7"
  },
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    google: "https://google.com"
  },
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280986043!2d-74.14448744574929!3d40.69766374865809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
};

export const leads: Record<string, LeadData> = {
  "default": defaultLead,
  "penberg-electrical": {
    ...defaultLead,
    slug: "penberg-electrical",
    title: "Penberg Electrical",
    logo: "/penberg-electrical.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 533-8290",
    email: "Penbergelectric@gmail.com",
    address: "2410 Montague St, Regina, SK S4T 3K7",
    heroHeading: "Elite Electrical Services Regina",
    highlightWord: "Electrical",
    heroSubtext: "Providing master-level electrical craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.9",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.0265513383265!2d-104.6299832!3d50.4406061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e127cd01475%3A0xd92f382ca980a15!2sPenberg%20Electrical!5e0!3m2!1sen!2s!4v1778269283938!5m2!1sen!2s"
  },
  "blue-coast": {
    ...defaultLead,
    slug: "blue-coast",
    title: "Blue Coast Electric",
    phone: "(306) 123-4567",
    primaryColor: "#0ea5e9",
    address: "Regina, SK & Coastal Areas",
    heroHeading: "Regina's Premier Luxury Electrical Experts",
    services: [
      {
        title: "Coastal Smart Lighting",
        desc: "Specialized lighting design for coastal properties. We create the perfect ambiance while ensuring weather-resistant durability."
      },
      {
        title: "Premium Panel Upgrades",
        desc: "Advanced electrical infrastructure to power your luxury home safely and efficiently."
      },
      {
        title: "Marine-Grade Wiring",
        desc: "Specialized wiring solutions built to withstand high-salinity environments and coastal moisture."
      },
      {
        title: "Whole-Home Automation",
        desc: "Seamless integration of smart technology for total control of your coastal property's systems."
      },
      {
        title: "Surge Protection",
        desc: "Industrial-grade protection to safeguard your high-end electronics from coastal power fluctuations."
      },
      {
        title: "EV Charging Solutions",
        desc: "Professional installation of luxury electric vehicle charging stations, integrated into your home's aesthetic."
      }
    ]
  },
  "revolution-electrical": {
    ...defaultLead,
    slug: "revolution-electrical",
    title: "Revolution Electrical",
    logo: "/revolution-electrical.png",
    primaryColor: "#6b9e2e",
    phone: "+1 (306) 529-4174",
    email: "revolutionmech@gmail.com",
    address: "1560A Mcara St, Regina, SK S4N 6C5, Canada",
    heroHeading: "Elite Electrical in Regina",
    highlightWord: "Electrical",
    heroSubtext: "Providing master-level electrical, Power & AC craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.8",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.297798643631!2d-104.5825375!3d50.454178999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531ea1f2159ddf59%3A0x5e76c097745b37ba!2sRevolution%20Electrical!5e0!3m2!1sen!2s!4v1778279805488!5m2!1sen!2s"
  },
  "platinum-electrical-power": {
    ...defaultLead,
    slug: "platinum-electrical-power",
    title: "Platinum Electric and Systems Ltd",
    logo: "/platinum-electrical-power.png",
    phone: "+353 86 458 2872",
    email: "info@platinumelectric.ie",
    address: "Serving areas in Waterford, Ireland",
    heroHeading: "Elite Electrical in Waterford",
    highlightWord: "Electrical",
    heroSubtext: "Providing master-level electrical and systems craftsmanship to the Waterford community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39084.36952226659!2d-7.11302995!3d52.24750495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4842c69c63d9e44d%3A0xc5bb81888b67b9fb!2sWaterford%2C%20Ireland!5e0!3m2!1sen!2s!4v1778281432182!5m2!1sen!2s"
  },
  "welldone-electrical": {
    ...defaultLead,
    slug: "welldone-electrical",
    title: "Welldone Electrical Services",
    logo: "/welldone.png",
    primaryColor: "#77b033",
    phone: "+1 (306) 721-2744",
    email: "regina@welldone.com",
    address: "470 Henderson Dr, Regina, SK S4N 5W9, Canada",
    heroHeading: "Elite Electrical in Regina",
    highlightWord: "Electrical",
    heroSubtext: "Providing master-level electrical craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.7",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.554939417294!2d-104.56590489999999!3d50.4680119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1f9ecc884317%3A0x9f79e75fc9e7286c!2sWelldone%20Electrical%20Services!5e0!3m2!1sen!2s!4v1778282797642!5m2!1sen!2s",
    services: [
      {
        title: "Industrial Electrical",
        desc: "Custom-designed electrical programs for industrial environments, ensuring peak efficiency and safety compliance."
      },
      {
        title: "Energy Efficiency Audits",
        desc: "Expert analysis of your property's electrical consumption with implementation of modern, energy-saving solutions."
      },
      {
        title: "HVAC Control Systems",
        desc: "Professional wiring and automation for complex HVAC systems, optimizing climate control and energy usage."
      },
      {
        title: "Commercial Lighting",
        desc: "High-efficiency lighting installations for retail, office, and industrial spaces with intelligent control integration."
      },
      {
        title: "Power Quality Analysis",
        desc: "Advanced monitoring and correction of power fluctuations to protect sensitive industrial and commercial equipment."
      },
      {
        title: "Safety Inspections",
        desc: "Comprehensive electrical safety audits to identify hazards and ensure your property meets all modern code requirements."
      }
    ]
  },
  "velocity-electrical": {
    ...defaultLead,
    slug: "velocity-electrical",
    title: "Velocity Electrical Solutions",
    logo: "/velocity.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 591-7711",
    email: "info@velocityms.com",
    address: "312 Quebec St, Regina, SK S4R 1K6, Canada",
    heroHeading: "Elite Electrical in Regina",
    highlightWord: "Electrical",
    heroSubtext: "Providing master-level electrical craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.9",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.1062336818172!2d-104.59715755938798!3d50.472841013860936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1efb8051281d%3A0xdb813859948e4c81!2sVelocity%20Electrical%20Solutions!5e0!3m2!1sen!2s!4v1778283174098!5m2!1sen!2s"
  },
  "honest-electrical-power": {
    ...defaultLead,
    slug: "honest-electrical-power",
    title: "Honest Electrical and Systems",
    logo: "/honest-electrical.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 993-1800",
    email: "honestelectric@gmail.com",
    address: "801 11th Ave, Regina, SK S4N 6N5, Canada",
    heroHeading: "Elite Electrical in Regina",
    highlightWord: "Electrical",
    heroSubtext: "Providing master-level electrical and systems craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.4",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5082649765873!2d-104.59517302356258!3d50.4502593715921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e32ff54b27f%3A0xba374d30f29738de!2sHonest%20Electrical%20and%20Power!5e0!3m2!1sen!2s!4v1778338742461!5m2!1sen!2s"
  },
  "roto-rooter": {
    ...defaultLead,
    slug: "roto-rooter",
    title: "Roto-Electric",
    logo: "/roto-rooter.png",
    primaryColor: "#EF4444",
    phone: "+1 (306) 359-3996",
    email: "sales@rotoelectricregina.com",
    address: "1695 Dewdney Ave E, Regina, SK S4N 4N6, Canada",
    heroHeading: "Elite Electrical in Regina",
    highlightWord: "Electrical",
    heroSubtext: "Providing master-level electrical craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.0",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.2665898179025!2d-104.5596832!3d50.454760199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1fa23548237f%3A0xe7ae36cf4ceb9240!2sRoto-Rooter!5e0!3m2!1sen!2s!4v1778339435121!5m2!1sen!2s"
  },
  "queen-city-electrical-power": {
    ...defaultLead,
    slug: "queen-city-electrical-power",
    title: "Queen City Electric",
    logo: "/queen-city-electrical.png",
    primaryColor: "#f59e0b", // Amber Yellow
    phone: "+1 (306) 533-5352",
    email: "queencityelectric@gmail.com",
    address: "112 6 Ave E, Regina, SK S4N 5A7, Canada",
    heroHeading: "Elite Electrical in Regina",
    highlightWord: "Electrical",
    heroSubtext: "Providing master-level electrical craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.8",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.9780047175823!2d-104.58575092356206!3d50.460134271594065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1fb01b626b85%3A0xbe5ecff2b536af1d!2sQueen%20City%20Electrical%20%26%20Power!5e0!3m2!1sen!2s!4v1778342225185!5m2!1sen!2s"
  },
  "reimche-excavating": {
    ...defaultLead,
    slug: "reimche-excavating",
    title: "Reimche Electrical & Excavating Ltd.",
    logo: "/reimche-excavating.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 550-5516",
    email: "reimcheelectric@gmail.com",
    address: "600 East Broadway Ave E, Regina, SK S4N 1A2, Canada",
    heroHeading: "Elite Electrical & Trenching in Regina",
    highlightWord: "Electrical",
    heroSubtext: "Providing master-level electrical and trenching craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your property.",
    trustRating: "4.9",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.0181332866814!2d-104.57273909999999!3d50.440762899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1fd08ed65843%3A0x5e9c4459f911464c!2sReimche%20Excavating%20Ltd.!5e0!3m2!1sen!2s!4v1778343045080!5m2!1sen!2s"
  },
  "neighbours-electrical": {
    ...defaultLead,
    slug: "neighbours-electrical",
    title: "Neighbours Electric",
    logo: "/neighbours-electrical.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 761-2905",
    email: "neighbourselectric@gmail.com",
    address: "1427 Scarth St, Regina, SK S4R 2G1, Canada",
    heroHeading: "Elite Electrical in Regina",
    highlightWord: "Electrical",
    heroSubtext: "Providing master-level electrical craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.7",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.191879810421!2d-104.61081860000002!3d50.4561515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e6bd6b1add7%3A0x5c1a362c2d89033e!2sNeighbours%20Electrical!5e0!3m2!1sen!2s!4v1778344105159!5m2!1sen!2s"
  },
  "eh-plus-electrical-power": {
    ...defaultLead,
    slug: "eh-plus-electrical-power",
    title: "Eh Plus Electric",
    logo: "/eh-plus-electrical.png",
    primaryColor: "#EF4444",
    phone: "+1 (306) 559-6181",
    email: "ehplus@myaccess.ca",
    address: "817 Campbell St, Regina, SK S4T 5P2, Canada",
    heroHeading: "Elite Electrical in Regina",
    highlightWord: "Electrical",
    heroSubtext: "Providing master-level electrical craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.720194348703!2d-104.6636425!3d50.464934899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1f7749ee9751%3A0x2f869ff4375777a5!2sEh%20Plus%20Electrical%20%26%20Power%20Ltd.!5e0!3m2!1sen!2s!4v1778344640927!5m2!1sen!2s"
  },
  "ae-systems-water": {
    ...defaultLead,
    slug: "ae-systems-water",
    title: "A & E Electrical Services",
    logo: "/a&e-systems.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 591-5665",
    email: "aeelectric@gmail.com",
    address: "2327 McTavish St, Regina, SK S4T 3X4, Canada",
    heroHeading: "Elite Electrical in Regina",
    highlightWord: "Electrical",
    heroSubtext: "Providing master-level electrical craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.956307268119!2d-104.6335842!3d50.441914499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e0d3fe74beb%3A0x2e6c6d30e1ab4fbc!2sA%20%26%20E%20Systems%20%26%20Water%20Service!5e0!3m2!1sen!2s!4v1778345584077!5m2!1sen!2s"
  },
  "gr-electrical-contracting": {
    ...defaultLead,
    slug: "gr-electrical-contracting",
    title: "G & R Electrical Contracting",
    logo: "/electrical-electrical.png",
    primaryColor: "#EF4444",
    phone: "+1 (306) 537-3645",
    email: "grelectric@sasktel.net",
    address: "2333 6th Ave, Regina, SK S4R 1B4, Canada",
    heroHeading: "Elite Electrical in Regina",
    highlightWord: "Electrical",
    heroSubtext: "Providing master-level electrical and automated systems craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.598766005678!2d-104.61444005210197!3d50.459525915863026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e440faaaaab%3A0x2ec636f43a4d261c!2sG%20%26%20R%20Electrical%20Contracting!5e0!3m2!1sen!2s!4v1778346098856!5m2!1sen!2s"
  },
  "joules-hvac-electric": {
    ...defaultLead,
    slug: "joules-hvac-electric",
    title: "Joules HVAC & Electric Ltd",
    logo: "/joules-electrical.png",
    primaryColor: "#f59e0b", // Amber Yellow
    phone: "+1 (306) 537-0771",
    email: "Jouleshvac@hotmail.com",
    address: "210 Rose St N, Regina, SK S4R 2Y2, Canada",
    heroHeading: "Elite HVAC & Electric in Regina",
    highlightWord: "HVAC",
    heroSubtext: "Providing master-level HVAC and electric craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "5.0",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.954809628566!2d-104.60793969999999!3d50.47918500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8de3a6284738706f%3A0xfab57a89784eebe7!2sJoules%20HVAC%20%26%20Electric%20Ltd!5e0!3m2!1sen!2s!4v1778346758843!5m2!1sen!2s",
    services: [
      {
        title: "AC Repair & Maintenance",
        desc: "Precision cooling solutions for your home. We keep your air conditioning systems running at peak efficiency all summer long."
      },
      {
        title: "Furnace & Power",
        desc: "Expert power services to keep your property warm. From emergency repairs to full furnace installations, we've got you covered."
      },
      {
        title: "Electrical Upgrades",
        desc: "Modernizing your property's electrical infrastructure with master-level precision and absolute safety in mind."
      },
      {
        title: "Smart Home Integration",
        desc: "Seamlessly connecting your HVAC and electrical systems for total control, comfort, and maximum energy efficiency."
      },
      {
        title: "Indoor Air Purification",
        desc: "High-efficiency filtration and UV purification systems to ensure your home's air is clean, safe, and free from allergens."
      },
      {
        title: "EV Charging Solutions",
        desc: "Professional installation of level 2 electric vehicle charging stations, integrated seamlessly into your home's electrical panel."
      }
    ]
  },
  "liquid-metal-electrical-power": {
    ...defaultLead,
    slug: "liquid-metal-electrical-power",
    title: "Liquid Metal Electrical",
    logo: "/liquid-metal.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 596-3622",
    email: "LiquidMetalElectric@gmail.com",
    address: "58 Mackenzie Crescent, Regina, SK S4N 5G5, Canada",
    heroHeading: "Elite Electrical in Regina",
    highlightWord: "Electrical",
    heroSubtext: "Providing master-level electrical and smart home craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.1542225024837!2d-104.5383536045762!3d50.45685276913899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1f7bcc53271d%3A0xde04890f05ecac52!2sLiquid%20Metal%20Electrical%20and%20Power!5e0!3m2!1sen!2s!4v1778442577249!5m2!1sen!2s",
    services: [
      {
        title: "Smart Home Integration",
        desc: "Expert installation of automated lighting, climate, and security systems for total control of your environment."
      },
      {
        title: "Panel Upgrades & Service",
        desc: "Precision electrical panel installations and upgrades, ensuring long-lasting reliability and peak performance."
      },
      {
        title: "Electrical Maintenance",
        desc: "Fast and reliable repair services for all your electrical needs, from faulty wiring to complete system audits."
      },
      {
        title: "Full Home Rewiring",
        desc: "Seamless replacement of outdated electrical wiring with modern, safe, and energy-efficient solutions."
      },
      {
        title: "Emergency Response",
        desc: "Rapid, 24/7 onsite solutions for major electrical failures or safety hazards, protecting your property's integrity."
      },
      {
        title: "EV Charging Stations",
        desc: "Professional installation of electric vehicle charging solutions, integrated seamlessly into your home's infrastructure."
      }
    ]
  },
  "queen-city-systems": {
    ...defaultLead,
    slug: "queen-city-systems",
    title: "Queen City Electrical Grid",
    logo: "/queen-city.png",
    primaryColor: "#EF4444",
    phone: "+1 (306) 536-0125",
    email: "info@queencityelectric.ca",
    address: "Pasqua St, Regina, SK S4R 8R7, Canada",
    heroHeading: "Elite Grid Services in Regina",
    highlightWord: "Grid",
    heroSubtext: "Providing master-level electrical infrastructure and maintenance to the Regina community. We offer 24/7 rapid response for your property.",
    trustRating: "4.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.663707168183!2d-104.640912!3d50.42873699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1de21ee733e1%3A0x114607710cf87ab8!2sQueen%20City%20Systems!5e0!3m2!1sen!2s!4v1778444595023!5m2!1sen!2s",
    services: [
      {
        title: "Underground Infrastructure",
        desc: "Efficient and reliable electrical line installation and maintenance for residential and commercial properties."
      },
      {
        title: "Panel Maintenance",
        desc: "Professional cleaning and technical maintenance of electrical panels and distribution boards."
      },
      {
        title: "Grid Optimization",
        desc: "Expert analysis and tuning of your property's electrical load to ensure safety and efficiency."
      },
      {
        title: "Surge Protection Systems",
        desc: "High-performance surge suppression installations to protect your entire electrical grid from power spikes."
      },
      {
        title: "Thermal Imaging Audits",
        desc: "Non-destructive testing using thermal cameras to identify hotspots and potential electrical failures before they occur."
      },
      {
        title: "Backup Power Systems",
        desc: "Advanced backup and redundancy solutions to ensure your electrical grid remains active through any outage."
      }
    ]
  },
  "rooter-man-drain-services": {
    ...defaultLead,
    slug: "rooter-man-drain-services",
    title: "Rooter Man Electrical",
    logo: "/rooter-man.png",
    primaryColor: "#EF4444",
    phone: "+1 (306) 651-2564",
    email: "rooterelectric@gmail.com",
    address: "1527 Ontario Ave Unit 8, Saskatoon, SK S7K 1S7, Canada",
    heroHeading: "Elite Electrical in Saskatoon",
    highlightWord: "Electrical",
    heroSubtext: "Providing master-level electrical and automated craftsmanship to the Saskatoon community. We offer 24/7 rapid response and elite maintenance for your property.",
    trustRating: "4.8",
    customerCount: "1000+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.153792301255!2d-106.666764!3d52.149712799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f0d9a6df94bb%3A0x1362f3538a76cb31!2sRooter%20Man%20Drain%20Services!5e0!3m2!1sen!2s!4v1778446130943!5m2!1sen!2s",
    services: [
      {
        title: "Electrical Diagnostics",
        desc: "Expert solutions for even the most complex electrical issues, using advanced tools to restore full power instantly."
      },
      {
        title: "Infrared Inspections",
        desc: "High-definition thermal inspections to identify hidden electrical issues and ensure your systems are in peak condition."
      },
      {
        title: "Panel Board Service",
        desc: "Professional maintenance and cleaning of electrical panels for commercial and residential properties to prevent failures."
      },
      {
        title: "Backup Power Solutions",
        desc: "Comprehensive repair, maintenance, and installation of generators and UPS systems to ensure you never lose power."
      },
      {
        title: "Smart Control Setup",
        desc: "Professional-grade automation solutions that optimize your energy usage, keeping your property efficient and modern."
      },
      {
        title: "Electrical Protection",
        desc: "Specialized heavy-duty surge protection and grounding to eliminate electrical hazards and prevent future equipment damage."
      }
    ]
  },
  "courtesy-electrical-power": {
    ...defaultLead,
    slug: "courtesy-electrical-power",
    title: "Courtesy Electric",
    logo: "/courtesy-electrical.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+13063824122",
    email: "admin@courtesyelectric.ca",
    address: "418A 50 St E #101, Saskatoon, SK S7M 5A5, Canada",
    heroHeading: "Elite Electrical in Saskatoon",
    highlightWord: "Electrical",
    heroSubtext: "Providing master-level electrical craftsmanship to the Saskatoon community. We offer 24/7 rapid response and elite maintenance for your property.",
    trustRating: "4.4",
    customerCount: "500+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.9812420565263!2d-106.66297229999999!3d52.1710345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f9e8b57b8165%3A0x17ae720181ac3899!2sCourtesy%20Electrical%20%26%20Power!5e0!3m2!1sen!2s!4v1778446443994!5m2!1sen!2s",
    services: [
      {
        title: "Full Home Rewiring",
        desc: "Expert electrical installations and upgrades, ensuring your systems are modern, efficient, and reliable."
      },
      {
        title: "Safety Specialists",
        desc: "Dedicated electrical safety solutions to keep your home protected throughout every season."
      },
      {
        title: "Preventive Maintenance",
        desc: "Comprehensive maintenance plans and service agreements designed to extend the life of your electrical infrastructure and prevent costly repairs."
      },
      {
        title: "Extended Warranties",
        desc: "Peace of mind with extended warranties on our master-level craftsmanship and premium parts."
      },
      {
        title: "High-Efficiency Panels",
        desc: "Expert installation and service for modern electrical panels, maximizing energy distribution and safety."
      },
      {
        title: "Smart Tech Integration",
        desc: "Precise calibration and installation of advanced home automation systems for optimized comfort and remote monitoring."
      }
    ]
  },
  "five-star-electrical-power-air-conditioning": {
    ...defaultLead,
    slug: "five-star-electrical-power-air-conditioning",
    title: "Five Star Electric & HVAC",
    logo: "/five-star.png",
    primaryColor: "#2FA7A0",
    phone: "+1 (306) 934-7002",
    email: "info@FiveStarElectric.com",
    address: "2270 Northridge Dr, Saskatoon, SK S7L 1B9, Canada",
    heroHeading: "Elite Electric & HVAC in Saskatoon",
    highlightWord: "Electric",
    heroSubtext: "Providing master-level electrical and climate control craftsmanship to the Saskatoon community. We offer 24/7 rapid response and elite installations for your property.",
    trustRating: "4.9",
    customerCount: "500+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.529935719325!2d-106.6684835!3d52.161057799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6fb23057755%3A0x89d59bdb0609efb1!2sFive%20Star%20Electrical%20Power%20%26%20Air%20Conditioning!5e0!3m2!1sen!2s!4v1778447955776!5m2!1sen!2s",
    services: [
      {
        title: "Advanced Climate Controls",
        desc: "From residential smart home integration to commercial building automation, we keep your property perfectly controlled."
      },
      {
        title: "Complete Electrical Care",
        desc: "Expert service for panels, wiring, and grounding. We ensure your electrical system is reliable through any demand."
      },
      {
        title: "Full-Scale Lighting",
        desc: "Comprehensive lighting services including LED retrofits, architectural lighting, and expert repair for faulty circuits."
      },
      {
        title: "Commercial Automation",
        desc: "Specialized service and automation solutions for commercial properties, ensuring modern infrastructure and peak performance."
      },
      {
        title: "Power Quality Tuning",
        desc: "Professional analysis and design of electrical systems to eliminate power surges and improve overall equipment performance."
      },
      {
        title: "Emergency Generator Care",
        desc: "Reliable repair and replacement of backup power systems to safeguard your property from unexpected grid failures."
      }
    ]
  },
  "nickel-electrical-power": {
    ...defaultLead,
    slug: "nickel-electrical-power",
    title: "Nickel Electrical & Power",
    logo: "/nickel-electrical.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 653-1899",
    email: "info@nickelelectrical.com",
    address: "2104 St George Ave, Saskatoon, SK S7M 0K7",
    heroHeading: "Elite Electrical in Saskatoon",
    highlightWord: "Electrical",
    heroSubtext: "Providing master-level electrical, power, and systems craftsmanship to the Saskatoon community since 1968. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.0",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9802.413627583066!2d-106.673583!3d52.105149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f0c53cd96a5d%3A0x3d84057f387aa794!2sNickel%20Electrical%20%26%20Power%20(1985)%20Ltd!5e0!3m2!1sen!2sca!4v1778448926411!5m2!1sen!2sca",
    services: [
      {
        title: "Master-Level Electrical",
        desc: "Comprehensive electrical services including fixture repair, gas fitting, and backflow prevention with absolute precision."
      },
      {
        title: "Elite HVAC & Power",
        desc: "Specialized service for furnaces, boilers, and radiant power systems. We ensure your comfort through every season."
      },
      {
        title: "Advanced Systems & Drain",
        desc: "High-pressure jetting, CCTV camera inspections, and expert systems relining to keep your infrastructure flowing perfectly."
      },
      {
        title: "Cooling & Refrigeration",
        desc: "Full-service air conditioning installation and commercial refrigeration solutions designed for maximum efficiency."
      },
      {
        title: "Natural Gas Line Service",
        desc: "Certified gas line installation and leak testing for fireplaces, ranges, and outdoor BBQ setups with absolute safety."
      },
      {
        title: "Water Softener Systems",
        desc: "Targeted solutions to eliminate hard water mineral buildup, extending the lifespan of your appliances and fixtures."
      }
    ]
  },
  "accelerate-electrical-power": {
    ...defaultLead,
    slug: "accelerate-electrical-power",
    title: "Accelerate Electrical & Power Ltd.",
    logo: "/accelerate-electrical.png",
    primaryColor: "#EF4444",
    phone: "+1 (306) 280-3663",
    email: "accelerateelectrical@hotmail.com",
    address: "519 Glacial Shores Way, Saskatoon, SK S7W 0R5, Canada",
    heroHeading: "Elite Electrical in Saskatoon",
    highlightWord: "Electrical",
    heroSubtext: "Providing master-level electrical and power craftsmanship to the Saskatoon community. We offer 24/7 rapid response and elite installations for your property.",
    trustRating: "4.8",
    customerCount: "500+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4894.185511032629!2d-106.562127!3d52.169007!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f4f8573b8a97%3A0xa5d95470c3f29981!2sAccelerate%20Electrical%20%26%20Power%20Ltd.!5e0!3m2!1sen!2sus!4v1778449283195!5m2!1sen!2sus",
    services: [
      {
        title: "Master Grid Service",
        desc: "Expert gas fitting services for furnaces, garage heaters, and fireplaces, ensuring absolute safety and peak performance."
      },
      {
        title: "Elite Electrical & Reno",
        desc: "Comprehensive electrical services and high-end bathroom renovations tailored to your property's unique needs."
      },
      {
        title: "Power & Furnace Repair",
        desc: "Fast and reliable furnace repair and power system maintenance to keep your home comfortable in any weather."
      },
      {
        title: "A/C & EV Charging",
        desc: "Professional installation and service for air conditioning units and hot water heaters for total year-round comfort."
      },
      {
        title: "Radiant Floor Power",
        desc: "Custom design and installation of in-floor power systems for unrivaled comfort and modern energy efficiency."
      },
      {
        title: "Backflow Prevention",
        desc: "Certified testing and installation of backflow preventers to protect your property's potable water supply from contamination."
      }
    ]
  },
  "tyrones-drain": {
    ...defaultLead,
    slug: "tyrones-drain",
    title: "Tyrone's Drain Doctor Inc.",
    logo: "/tyron-drain.png",
    primaryColor: "#77b033",
    phone: "+1 (306) 202-6914",
    email: "tyronesdraincleaning@gmail.com",
    address: "507 3 St E, Saskatoon, SK S7H 1L9, Canada",
    heroHeading: "Elite Drain Services in Saskatoon",
    highlightWord: "Drain",
    heroSubtext: "Providing master-level drain and electrical craftsmanship to the Saskatoon community. We offer 24/7 rapid response and elite maintenance for your property.",
    trustRating: "5.0",
    customerCount: "1000+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.3407219200035!2d-106.65887839999999!3d52.109929099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f67d5849b203%3A0xf1f197a96d188bc6!2sTyrone's%20Drain%20Doctor%20Inc.!5e0!3m2!1sen!2s!4v1778451336019!5m2!1sen!2s",
    services: [
      {
        title: "Master Electrical Repair",
        desc: "Precision drain cleaning and clearing using advanced tools to restore full functionality to your property's infrastructure."
      },
      {
        title: "High Pressure Jetting",
        desc: "Powerful high-pressure water jetting to clear even the most stubborn blockages and maintain long-term flow."
      },
      {
        title: "CCTV Camera Inspections",
        desc: "High-definition camera inspections to accurately diagnose issues within your lines and ensure absolute clarity."
      },
      {
        title: "Emergency Electrical",
        desc: "Rapid 24/7 emergency electrical services to handle urgent repairs and protect your property from water damage."
      },
      {
        title: "Main Line Cleaning",
        desc: "Specialized heavy-duty cleaning of your property's main systems line to prevent catastrophic backups and structural damage."
      },
      {
        title: "Toilet & Sink Restoration",
        desc: "Professional clearing and electrical restoration of slow-moving toilets and sinks to ensure peak bathroom functionality."
      }
    ]
  },
};

export function getLeadData(slug?: string): LeadData {
  if (!slug) return defaultLead;
  return leads[slug] || defaultLead;
}
