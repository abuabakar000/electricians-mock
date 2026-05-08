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
};

export function getLeadData(slug?: string): LeadData {
  if (!slug) return defaultLead;
  return leads[slug] || defaultLead;
}
