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
}

export const defaultLead: LeadData = {
  slug: "default",
  title: "ProPlumb",
  logo: "/logo.png",
  primaryColor: "#f59e0b",
  phone: "(306) 555-0123",
  address: "Your City, State & Surrounding Areas",
  email: "service@proplumb.com",
  heroHeading: "Honest Craftsmanship for Your Home",
  highlightWord: "Craftsmanship",
  heroSubtext: "Experience master-level craftsmanship and rapid 24/7 response times. From emergency repairs to luxury installations, we provide the elite plumbing solutions your home deserves.",
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
  "penberg-mechanical": {
    ...defaultLead,
    slug: "penberg-mechanical",
    title: "Penberg Mechanical",
    logo: "/penberg-mechanical.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 533-8290",
    email: "Penbergmech@gmail.com",
    address: "2410 Montague St, Regina, SK S4T 3K7",
    heroHeading: "Elite Mechanical Services Regina",
    highlightWord: "Mechanical",
    heroSubtext: "Providing master-level plumbing and mechanical craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.9",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.0265513383265!2d-104.6299832!3d50.4406061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e127cd01475%3A0xd92f382ca980a15!2sPenberg%20Mechanical!5e0!3m2!1sen!2s!4v1778269283938!5m2!1sen!2s"
  },
  "blue-coast": {
    ...defaultLead,
    slug: "blue-coast",
    title: "Blue Coast Plumbing",
    phone: "(306) 123-4567",
    primaryColor: "#0ea5e9",
    address: "Regina, SK & Coastal Areas",
    heroHeading: "Regina's Premier Luxury Plumbing Experts",
  },
  "revolution-mechanical": {
    ...defaultLead,
    slug: "revolution-mechanical",
    title: "Revolution Mechanical",
    logo: "/revolution-mechanical.png",
    primaryColor: "#6b9e2e",
    phone: "+1 (306) 529-4174",
    email: "revolutionmech@gmail.com",
    address: "1560A Mcara St, Regina, SK S4N 6C5, Canada",
    heroHeading: "Elite Mechanical in Regina",
    highlightWord: "Mechanical",
    heroSubtext: "Providing master-level plumbing, Heating & AC craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.8",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.297798643631!2d-104.5825375!3d50.454178999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531ea1f2159ddf59%3A0x5e76c097745b37ba!2sRevolution%20Mechanical!5e0!3m2!1sen!2s!4v1778279805488!5m2!1sen!2s"
  },
  "platinum-plumbing-heating": {
    ...defaultLead,
    slug: "platinum-plumbing-heating",
    title: "Platinum Plumbing and Heating Ltd",
    logo: "/platinum-plumbing-heating.png",
    phone: "+353 86 458 2872",
    email: "info@platinumplumbing.ie",
    address: "Serving areas in Waterford, Ireland",
    heroHeading: "Elite Plumbing in Waterford",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing and heating craftsmanship to the Waterford community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39084.36952226659!2d-7.11302995!3d52.24750495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4842c69c63d9e44d%3A0xc5bb81888b67b9fb!2sWaterford%2C%20Ireland!5e0!3m2!1sen!2s!4v1778281432182!5m2!1sen!2s"
  },
  "welldone-mechanical": {
    ...defaultLead,
    slug: "welldone-mechanical",
    title: "Welldone Mechanical Services",
    logo: "/welldone.png",
    primaryColor: "#77b033",
    phone: "+1 (306) 721-2744",
    email: "regina@welldone.com",
    address: "470 Henderson Dr, Regina, SK S4N 5W9, Canada",
    heroHeading: "Elite Mechanical in Regina",
    highlightWord: "Mechanical",
    heroSubtext: "Providing master-level plumbing craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.7",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.554939417294!2d-104.56590489999999!3d50.4680119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1f9ecc884317%3A0x9f79e75fc9e7286c!2sWelldone%20Mechanical%20Services!5e0!3m2!1sen!2s!4v1778282797642!5m2!1sen!2s"
  },
  "velocity-mechanical": {
    ...defaultLead,
    slug: "velocity-mechanical",
    title: "Velocity Mechanical Solutions",
    logo: "/velocity.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 591-7711",
    email: "info@velocityms.com",
    address: "312 Quebec St, Regina, SK S4R 1K6, Canada",
    heroHeading: "Elite Mechanical in Regina",
    highlightWord: "Mechanical",
    heroSubtext: "Providing master-level plumbing craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.9",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.1062336818172!2d-104.59715755938798!3d50.472841013860936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1efb8051281d%3A0xdb813859948e4c81!2sVelocity%20Mechanical%20Solutions!5e0!3m2!1sen!2s!4v1778283174098!5m2!1sen!2s"
  },
  "honest-plumbing-heating": {
    ...defaultLead,
    slug: "honest-plumbing-heating",
    title: "Honest Plumbing and Heating",
    logo: "/honest-plumbing.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 993-1800",
    email: "honestplumbing@gmail.com",
    address: "801 11th Ave, Regina, SK S4N 6N5, Canada",
    heroHeading: "Elite Plumbing in Regina",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing and heating craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.4",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5082649765873!2d-104.59517302356258!3d50.4502593715921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e32ff54b27f%3A0xba374d30f29738de!2sHonest%20Plumbing%20and%20Heating!5e0!3m2!1sen!2s!4v1778338742461!5m2!1sen!2s"
  },
  "roto-rooter": {
    ...defaultLead,
    slug: "roto-rooter",
    title: "Roto-Rooter",
    logo: "/roto-rooter.png",
    primaryColor: "#EF4444",
    phone: "+1 (306) 359-3996",
    email: "sales@rotorootorregina.com",
    address: "1695 Dewdney Ave E, Regina, SK S4N 4N6, Canada",
    heroHeading: "Elite Plumbing in Regina",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.0",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.2665898179025!2d-104.5596832!3d50.454760199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1fa23548237f%3A0xe7ae36cf4ceb9240!2sRoto-Rooter!5e0!3m2!1sen!2s!4v1778339435121!5m2!1sen!2s"
  },
  "queen-city-plumbing-heating": {
    ...defaultLead,
    slug: "queen-city-plumbing-heating",
    title: "Queen City Plumbing & Heating",
    logo: "/queen-city-plumbing.png",
    primaryColor: "#f59e0b", // Amber Yellow
    phone: "+1 (306) 533-5352",
    email: "queencityplumbing@gmail.com",
    address: "112 6 Ave E, Regina, SK S4N 5A7, Canada",
    heroHeading: "Elite Plumbing in Regina",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.8",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.9780047175823!2d-104.58575092356206!3d50.460134271594065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1fb01b626b85%3A0xbe5ecff2b536af1d!2sQueen%20City%20Plumbing%20%26%20Heating!5e0!3m2!1sen!2s!4v1778342225185!5m2!1sen!2s"
  },
  "reimche-excavating": {
    ...defaultLead,
    slug: "reimche-excavating",
    title: "Reimche Excavating Ltd.",
    logo: "/reimche-excavating.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 550-5516",
    email: "reimcheexcavating@gmail.com",
    address: "600 East Broadway Ave E, Regina, SK S4N 1A2, Canada",
    heroHeading: "Elite Excavating in Regina",
    highlightWord: "Excavating",
    heroSubtext: "Providing master-level excavating and plumbing craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.9",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.0181332866814!2d-104.57273909999999!3d50.440762899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1fd08ed65843%3A0x5e9c4459f911464c!2sReimche%20Excavating%20Ltd.!5e0!3m2!1sen!2s!4v1778343045080!5m2!1sen!2s"
  },
  "neighbours-mechanical": {
    ...defaultLead,
    slug: "neighbours-mechanical",
    title: "Neighbours Mechanical",
    logo: "/neighbours-mechanical.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 761-2905",
    email: "neighboursmechanical@gmail.com",
    address: "1427 Scarth St, Regina, SK S4R 2G1, Canada",
    heroHeading: "Elite Mechanical in Regina",
    highlightWord: "Mechanical",
    heroSubtext: "Providing master-level plumbing and mechanical craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.7",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.191879810421!2d-104.61081860000002!3d50.4561515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e6bd6b1add7%3A0x5c1a362c2d89033e!2sNeighbours%20Mechanical!5e0!3m2!1sen!2s!4v1778344105159!5m2!1sen!2s"
  },
  "eh-plus-plumbing-heating": {
    ...defaultLead,
    slug: "eh-plus-plumbing-heating",
    title: "Eh Plus Plumbing & Heating",
    logo: "/eh-plus-plumbing.png",
    primaryColor: "#EF4444",
    phone: "+1 (306) 559-6181",
    email: "ehplus@myaccess.ca",
    address: "817 Campbell St, Regina, SK S4T 5P2, Canada",
    heroHeading: "Elite Plumbing in Regina",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing and heating craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.720194348703!2d-104.6636425!3d50.464934899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1f7749ee9751%3A0x2f869ff4375777a5!2sEh%20Plus%20Plumbing%20%26%20Heating%20Ltd.!5e0!3m2!1sen!2s!4v1778344640927!5m2!1sen!2s"
  },
  "ae-sewer-water": {
    ...defaultLead,
    slug: "ae-sewer-water",
    title: "A & E Sewer & Water Service",
    logo: "/a&e-sewer.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 591-5665",
    email: "aesewer@gmail.com",
    address: "2327 McTavish St, Regina, SK S4T 3X4, Canada",
    heroHeading: "Elite Plumbing in Regina",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing and sewer craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.956307268119!2d-104.6335842!3d50.441914499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e0d3fe74beb%3A0x2e6c6d30e1ab4fbc!2sA%20%26%20E%20Sewer%20%26%20Water%20Service!5e0!3m2!1sen!2s!4v1778345584077!5m2!1sen!2s"
  },
  "gr-mechanical-contracting": {
    ...defaultLead,
    slug: "gr-mechanical-contracting",
    title: "G & R Mechanical Contracting",
    logo: "/mechanical-plumbing.png",
    primaryColor: "#EF4444",
    phone: "+1 (306) 537-3645",
    email: "grm@sasktel.net",
    address: "2333 6th Ave, Regina, SK S4R 1B4, Canada",
    heroHeading: "Elite Plumbing in Regina",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing, heating & air conditioning craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.598766005678!2d-104.61444005210197!3d50.459525915863026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e440faaaaab%3A0x2ec636f43a4d261c!2sG%20%26%20R%20Mechanical%20Contracting!5e0!3m2!1sen!2s!4v1778346098856!5m2!1sen!2s"
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
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.954809628566!2d-104.60793969999999!3d50.47918500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8de3a6284738706f%3A0xfab57a89784eebe7!2sJoules%20HVAC%20%26%20Electric%20Ltd!5e0!3m2!1sen!2s!4v1778346758843!5m2!1sen!2s"
  },
};

export function getLeadData(slug?: string): LeadData {
  if (!slug) return defaultLead;
  return leads[slug] || defaultLead;
}
