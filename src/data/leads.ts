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
  "express-electric": {
    slug: "express-electric",
    title: "Express Electric Inc",
    logo: "/express-elec.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "(306) 529-9111",
    address: "1819 MacKay St, Regina, SK S4N 6E7",
    email: "expresselectric@sasktel.net",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.",
    trustRating: "4.9",
    customerCount: "500+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.53482039142!2d-104.58020259999999!3d50.4497648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1fc9d4568a3d%3A0x599dc47a4659de2a!2sExpress%20Electric%20Inc!5e0!3m2!1sen!2sca!4v1778801053462!5m2!1sen!2sca",
    hours: {
      monFri: "8:00 AM - 5:00 PM",
      sat: "Closed",
      emergency: "Available 24/7"
    },
    socials: {
      facebook: "https://facebook.com",
      google: "https://google.com"
    },
    services: [
      {
        title: "Gemstone Lights",
        desc: "Authorized dealer for permanent, customizable LED lighting systems for homes and businesses. Never climb a ladder for holiday lights again!"
      },
      {
        title: "Commercial Electrical",
        desc: "Complete wiring, new circuits, security systems, fire alarms, and energy-saving systems for commercial facilities."
      },
      {
        title: "Residential Services",
        desc: "Expert electrical setup, panel upgrades, surge protection, outlet repair, and all residential maintenance."
      },
      {
        title: "Lighting Solutions",
        desc: "Custom indoor and outdoor lighting requirements—fixture installation, replacement, and repair for optimal ambiance."
      },
      {
        title: "EV Charging",
        desc: "Professional installation of electric vehicle charging stations for both residential and commercial properties."
      },
      {
        title: "Safety Inspections",
        desc: "Comprehensive electrical safety inspections, smoke and carbon monoxide detector installations, and routine maintenance."
      }
    ]
  },
  "caron-electrical-contractors": {
    slug: "caron-electrical-contractors",
    title: "Caron Electrical Contractors",
    logo: "/caron-elec.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "(306) 737-9953",
    address: "12100 Ewing Ave B26, Regina, SK S4M 0A2",
    email: "caronelectricalcontractors@gmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "4.6",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.42103658486!2d-104.75642599999999!3d50.451883900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1f9f618c1da3%3A0xf82d1b8d8da8d1aa!2sCaron%20Electrical%20Contractors!5e0!3m2!1sen!2sca!4v1778802472232!5m2!1sen!2sca",
    hours: {
      monFri: "8:00 AM - 5:00 PM",
      sat: "Closed",
      emergency: "Available 24/7"
    },
    socials: {
      facebook: "https://facebook.com",
      google: "https://google.com"
    },
    services: [
      {
        title: "Residential Electrical",
        desc: "From full home wiring to simple repairs, we provide master-level electrical solutions for your home."
      },
      {
        title: "Commercial Contracts",
        desc: "Expert electrical contracting for businesses, including maintenance, upgrades, and large-scale installations."
      },
      {
        title: "Panel Upgrades",
        desc: "Modernize your electrical system for increased safety and the capacity to handle modern appliances."
      },
      {
        title: "Lighting Design",
        desc: "Premium indoor and outdoor lighting solutions to enhance your property's aesthetics and security."
      },
      {
        title: "EV Charging",
        desc: "Professional installation of electric vehicle charging stations for residential and commercial sites."
      },
      {
        title: "Safety Audits",
        desc: "Comprehensive electrical safety inspections and maintenance to keep your systems running flawlessly."
      }
    ]
  },
  "kress-electric": {
    slug: "kress-electric",
    title: "Kress Electric",
    logo: "/kress-elec.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "(306) 545-4810",
    address: "1423 Lorne St, Regina, SK S4R 2K3",
    email: "kresselectric@gmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "3.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.190494191727!2d-104.6137125497563!3d50.45617730365965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e452a73ca5b%3A0xcd8e08887692e7c3!2sKress%20Electric!5e0!3m2!1sen!2sca!4v1778802624926!5m2!1sen!2sca",
    hours: {
      monFri: "8:00 AM - 5:00 PM",
      sat: "Closed",
      emergency: "Available 24/7"
    },
    socials: {
      facebook: "https://facebook.com",
      google: "https://google.com"
    },
    services: [
      {
        title: "Residential Electrical",
        desc: "Expert setup, panel upgrades, and repairs for Regina homeowners. Reliable service you can count on."
      },
      {
        title: "Commercial Services",
        desc: "Full-scale electrical contracting for businesses, including maintenance and new system installations."
      },
      {
        title: "Emergency Repairs",
        desc: "Fast response times for critical electrical failures. We're available when you need us most."
      },
      {
        title: "Lighting Solutions",
        desc: "Professional installation and design of indoor and outdoor lighting to brighten your space."
      },
      {
        title: "Panel Upgrades",
        desc: "Modernize your home's electrical capacity to support modern technology and improve safety."
      },
      {
        title: "General Maintenance",
        desc: "Routine inspections and upkeep to ensure your electrical systems are safe and efficient."
      }
    ]
  },
  "globe-elite-electrical": {
    slug: "globe-elite-electrical",
    title: "Globe Elite Electrical Contractors",
    logo: "/globe-elite-elec.png",
    primaryColor: "#f59e0b", // Amber Yellow
    phone: "(306) 757-1234",
    address: "1202 St John St, Regina, SK S4R 1R9",
    email: "globeelite@gmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.006787141639!2d-104.6022023!3d50.4595983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e52472fafcf%3A0x9c2026f334fff84f!2sGlobe%20Elite%20Electrical%20Contractors!5e0!3m2!1sen!2sca!4v1778802999363!5m2!1sen!2sca",
    hours: {
      monFri: "8:00 AM - 5:00 PM",
      sat: "Closed",
      emergency: "Available 24/7"
    },
    socials: {
      facebook: "https://facebook.com",
      google: "https://google.com"
    },
    services: [
      {
        title: "Residential Electrical",
        desc: "High-end electrical solutions for your home. From wiring to panel upgrades, we ensure safety and excellence."
      },
      {
        title: "Commercial Contracting",
        desc: "Comprehensive electrical services for commercial properties, including maintenance and new builds."
      },
      {
        title: "Elite Installations",
        desc: "Specialized installations for premium fixtures, smart home systems, and advanced electrical components."
      },
      {
        title: "Lighting Design",
        desc: "Custom indoor and outdoor lighting design and installation to enhance your property's value and appeal."
      },
      {
        title: "Emergency Service",
        desc: "Rapid response for electrical emergencies. Our master electricians are available 24/7 to resolve critical issues."
      },
      {
        title: "System Maintenance",
        desc: "Regular inspections and preventative maintenance to ensure your electrical systems operate at peak efficiency."
      }
    ]
  },
  "voltz-electric-2020": {
    slug: "voltz-electric-2020",
    title: "Voltz Electric 2020 Inc",
    logo: "/Voltz Electric 2020.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "(306) 731-7972",
    address: "1114 Atkinson St, Regina, SK S4N 3V4",
    email: "voltzelectric.joshua@sasktel.net",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "4.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.930895845954!2d-104.59261029999999!3d50.4610115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1fe994d5ffbf%3A0xc87f364bc85766e8!2sVoltz%20Electric%202020%20Inc!5e0!3m2!1sen!2sca!4v1778803404348!5m2!1sen!2sca",
    hours: {
      monFri: "8:00 AM - 5:00 PM",
      sat: "Closed",
      emergency: "Available 24/7"
    },
    socials: {
      facebook: "https://facebook.com",
      google: "https://google.com"
    },
    services: [
      {
        title: "Commercial & Industrial",
        desc: "Complete electrical solutions for commercial facilities and industrial complexes, including maintenance and new builds."
      },
      {
        title: "Residential Services",
        desc: "Expert residential electrical work, from wiring and panel upgrades to daily service calls for homeowners."
      },
      {
        title: "New Construction",
        desc: "Specialized electrical infrastructure for new building construction projects, ensuring modern standards and safety."
      },
      {
        title: "HVAC Control Systems",
        desc: "Professional installation and maintenance of advanced HVAC control systems for optimal climate management."
      },
      {
        title: "Fire Alarm Installation",
        desc: "Certified fire alarm system installation and maintenance to protect your property and occupants."
      },
      {
        title: "Data and Fibre Optics",
        desc: "High-speed data cabling and fibre optic solutions for modern communication and networking needs."
      }
    ]
  },
  "sim-electric": {
    slug: "sim-electric",
    title: "Sim Electric Ltd",
    logo: "/sim-electric.png",
    primaryColor: "#f59e0b", // Amber Yellow
    phone: "(306) 545-0382",
    address: "1221 Halifax St, Regina, SK S4R 1T7",
    email: "simelectric@gmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "4.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.0148165514315!2d-104.6034751401193!3d50.4594487796952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e522380eef3%3A0xd169d91ec8b42991!2sSim%20Electric%20Ltd!5e0!3m2!1sen!2sca!4v1778803658224!5m2!1sen!2sca",
    hours: {
      monFri: "8:00 AM - 5:00 PM",
      sat: "Closed",
      emergency: "Available 24/7"
    },
    socials: {
      facebook: "https://facebook.com",
      google: "https://google.com"
    },
    services: [
      {
        title: "Residential Electrical",
        desc: "Complete electrical services for your home, from wiring and lighting to panel upgrades and repairs."
      },
      {
        title: "Commercial Projects",
        desc: "Expert electrical contracting for commercial properties, ensuring quality and compliance for your business."
      },
      {
        title: "Emergency Repairs",
        desc: "Prompt and professional response to electrical failures, keeping your property safe at any hour."
      },
      {
        title: "Lighting Solutions",
        desc: "Custom indoor and outdoor lighting design and installation to improve ambiance and security."
      },
      {
        title: "Panel Maintenance",
        desc: "Specialized service for electrical panels, including upgrades, repairs, and safety inspections."
      },
      {
        title: "System Audits",
        desc: "Detailed electrical inspections and maintenance to ensure your systems are efficient and up to code."
      }
    ]
  },
  "walters-electric": {
    slug: "walters-electric",
    title: "Walters Electric Contractors",
    logo: "/walter-electric.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "(306) 737-0773",
    address: "1360 Bay A, Broder St, Regina, SK S4V 1K3",
    email: "dwalters@walterselectric.ca",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.13580738984!2d-104.5911228!3d50.4571957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1fff14c98f7f%3A0xd1180eba14d9f516!2sWalters%20Electric%20Contractors!5e0!3m2!1sen!2sca!4v1778803919830!5m2!1sen!2sca",
    hours: {
      monFri: "8:00 AM - 5:00 PM",
      sat: "Closed",
      emergency: "Available 24/7"
    },
    socials: {
      facebook: "https://facebook.com",
      google: "https://google.com"
    },
    services: [
      {
        title: "Residential Electrical",
        desc: "High-quality electrical services for your home. From wiring to lighting, we ensure safety and excellence."
      },
      {
        title: "Commercial Contracting",
        desc: "Professional electrical contracting for businesses, including maintenance, upgrades, and new builds."
      },
      {
        title: "Master Services",
        desc: "Elite-level electrical craftsmanship for complex systems and high-end residential projects."
      },
      {
        title: "Lighting Design",
        desc: "Custom indoor and outdoor lighting solutions to enhance the beauty and security of your property."
      },
      {
        title: "Emergency Repairs",
        desc: "24/7 rapid response for electrical emergencies, keeping your property safe at any hour."
      },
      {
        title: "System Audits",
        desc: "Comprehensive electrical inspections and maintenance to ensure your systems are efficient and up to code."
      }
    ]
  },
  "iles-electric": {
    slug: "iles-electric",
    title: "Iles Electric Ltd",
    logo: "/Iles-elec.png",
    primaryColor: "#f59e0b", // Amber Yellow
    phone: "(306) 757-6549",
    address: "1200 Scarth Street, Regina, SK S4R 2E5",
    email: "ileselectricltd@gmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "4.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.0027810306406!2d-104.6112259!3d50.4596729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e5086013a2b%3A0x64b02b45448cfb5e!2sIles%20Electric%20Ltd!5e0!3m2!1sen!2sca!4v1778804292860!5m2!1sen!2sca",
    hours: {
      monFri: "8:00 AM - 5:00 PM",
      sat: "Closed",
      emergency: "Available 24/7"
    },
    socials: {
      facebook: "https://facebook.com",
      google: "https://google.com"
    },
    services: [
      {
        title: "Residential Electrical",
        desc: "Trusted electrical services for your home, from wiring and installations to troubleshooting and repairs."
      },
      {
        title: "Commercial Services",
        desc: "Expert electrical contracting for commercial properties, including maintenance and new system setups."
      },
      {
        title: "Lighting Solutions",
        desc: "Professional indoor and outdoor lighting design and installation to enhance security and ambiance."
      },
      {
        title: "Panel Upgrades",
        desc: "Modernize your electrical infrastructure for improved safety and increased power capacity."
      },
      {
        title: "Emergency Repairs",
        desc: "Rapid response for electrical failures, ensuring your systems are safe and functional at all times."
      },
      {
        title: "Maintenance & Audits",
        desc: "Comprehensive inspections and preventative maintenance to keep your electrical systems running smoothly."
      }
    ]
  },
  "joes-electric": {
    slug: "joes-electric",
    title: "Joe’s Electric Ltd.",
    logo: "/joe-elec.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "(306) 789-6066",
    address: "1555J McDonald St, Regina, SK S4N 6H7",
    email: "joeselectric@sasktel.net",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "4.0",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40644.6676940473!2d-104.583228!3d50.454292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e4fa75bc657%3A0x841352a09a067c0a!2sJoe&#39;s%20Electric!5e0!3m2!1sen!2sus!4v1778804548265!5m2!1sen!2sus",
    hours: {
      monFri: "8:00 AM - 5:00 PM",
      sat: "Closed",
      emergency: "Available 24/7"
    },
    socials: {
      facebook: "https://facebook.com",
      google: "https://google.com"
    },
    services: [
      {
        title: "Residential Electrical",
        desc: "High-quality electrical services for your home. From wiring and lighting to panel upgrades and safety repairs."
      },
      {
        title: "Commercial Projects",
        desc: "Professional electrical contracting for commercial properties, including maintenance, upgrades, and new builds."
      },
      {
        title: "Prompt Maintenance",
        desc: "Expert upkeep for your electrical systems to ensure they remain safe, efficient, and up to modern standards."
      },
      {
        title: "Lighting Design",
        desc: "Custom indoor and outdoor lighting solutions to enhance the beauty and security of your property."
      },
      {
        title: "Emergency Response",
        desc: "24/7 rapid response for electrical emergencies, ensuring your home or business is never left in the dark."
      },
      {
        title: "System Audits",
        desc: "Comprehensive electrical inspections and troubleshooting to ensure all components are functioning perfectly."
      }
    ]
  },
  "day-bird-electrical": {
    slug: "day-bird-electrical",
    title: "Day Bird Electrical Contracting Ltd",
    logo: "/day-bird-electrical.png",
    primaryColor: "#f59e0b", // Amber Yellow
    phone: "(306) 527-8508",
    address: "1 First Nations Way Room B0128, Regina, SK S4S 7K5",
    email: "daybirdelectric@gmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.1671501241362!2d-104.5815348!3d50.419357299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531ea1a069f2e387%3A0x6f7198068de94d5e!2sDay%20Bird%20Electrical%20Contracting%20Ltd!5e0!3m2!1sen!2sca!4v1778804906817!5m2!1sen!2sca",
    hours: {
      monFri: "8:00 AM - 5:00 PM",
      sat: "Closed",
      emergency: "Available 24/7"
    },
    socials: {
      facebook: "https://facebook.com",
      google: "https://google.com"
    },
    services: [
      {
        title: "Residential Electrical",
        desc: "Complete electrical services for your home, from wiring and installations to troubleshooting and repairs."
      },
      {
        title: "Commercial Projects",
        desc: "Expert electrical contracting for commercial properties, ensuring quality and compliance for your business."
      },
      {
        title: "Elite Installations",
        desc: "Specialized installations for premium fixtures, smart home systems, and advanced electrical components."
      },
      {
        title: "Lighting Design",
        desc: "Custom indoor and outdoor lighting design and installation to enhance your property's value and appeal."
      },
      {
        title: "Emergency Service",
        desc: "Rapid response for electrical emergencies. Our master electricians are available 24/7 to resolve critical issues."
      },
      {
        title: "System Maintenance",
        desc: "Regular inspections and preventative maintenance to ensure your electrical systems operate at peak efficiency."
      }
    ]
  },
  "rankins-electric": {
    slug: "rankins-electric",
    title: "Rankins Electric",
    logo: "/rankins-elec.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "(306) 352-0303",
    address: "1070 McDonald St, Regina, SK S4N 2X8",
    email: "rankinselectric@gmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.8978433911393!2d-104.5835980472714!3d50.46162697304089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1faf8d4566f9%3A0x916e65cce33bc46b!2sRankins%20Electric!5e0!3m2!1sen!2sca!4v1778805100288!5m2!1sen!2sca",
    hours: {
      monFri: "8:00 AM - 5:00 PM",
      sat: "Closed",
      emergency: "Available 24/7"
    },
    socials: {
      facebook: "https://facebook.com",
      google: "https://google.com"
    },
    services: [
      {
        title: "Residential Electrical",
        desc: "Complete electrical services for your home, from wiring and installations to troubleshooting and repairs."
      },
      {
        title: "Commercial Projects",
        desc: "Expert electrical contracting for commercial properties, ensuring quality and compliance for your business."
      },
      {
        title: "Elite Installations",
        desc: "Specialized installations for premium fixtures, smart home systems, and advanced electrical components."
      },
      {
        title: "Lighting Design",
        desc: "Custom indoor and outdoor lighting design and installation to enhance your property's value and appeal."
      },
      {
        title: "Emergency Service",
        desc: "Rapid response for electrical emergencies. Our master electricians are available 24/7 to resolve critical issues."
      },
      {
        title: "System Maintenance",
        desc: "Regular inspections and preventative maintenance to ensure your electrical systems operate at peak efficiency."
      }
    ]
  },
  "electric-effects": {
    slug: "electric-effects",
    title: "Electric Effects Inc.",
    logo: "/electric-effects.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "(306) 525-3884",
    address: "406 Dewdney Ave, Regina, SK S4N 0E9",
    email: "electriceffects@gmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "4.2",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1068.0632564101506!2d-104.58672920864596!3d50.454196711449384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e12a8bf2e21%3A0xcca81a80d6ae0d!2sElectric%20Effects%20Inc.!5e0!3m2!1sen!2sca!4v1778805269862!5m2!1sen!2sca",
    hours: {
      monFri: "8:00 AM - 5:00 PM",
      sat: "Closed",
      emergency: "Available 24/7"
    },
    socials: {
      facebook: "https://facebook.com",
      google: "https://google.com"
    },
    services: [
      {
        title: "Residential Electrical",
        desc: "Complete electrical services for your home, from wiring and installations to troubleshooting and repairs."
      },
      {
        title: "Commercial Services",
        desc: "Expert electrical contracting for commercial properties, including maintenance and new system setups."
      },
      {
        title: "Elite Installations",
        desc: "Specialized installations for premium fixtures, smart home systems, and advanced electrical components."
      },
      {
        title: "Lighting Solutions",
        desc: "Professional indoor and outdoor lighting design and installation to enhance security and ambiance."
      },
      {
        title: "Emergency Repairs",
        desc: "Rapid response for electrical failures, ensuring your systems are safe and functional at all times."
      },
      {
        title: "Maintenance & Audits",
        desc: "Comprehensive inspections and preventative maintenance to keep your electrical systems running smoothly."
      }
    ]
  },
  "colt-electric": {
    slug: "colt-electric",
    title: "Colt Electric",
    logo: "/colt-elec.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "(306) 551-3773",
    address: "708 Dalgliesh Dr, Regina, SK S4R 6G2",
    email: "coltelectric@gmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2538.5417349477507!2d-104.6440336!3d50.4868745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1ebf07919c07%3A0x16fe13e69fb5b180!2sColt%20Electric!5e0!3m2!1sen!2sca!4v1778805552685!5m2!1sen!2sca",
    hours: {
      monFri: "8:00 AM - 5:00 PM",
      sat: "Closed",
      emergency: "Available 24/7"
    },
    socials: {
      facebook: "https://facebook.com",
      google: "https://google.com"
    },
    services: [
      {
        title: "Residential Electrical",
        desc: "Trusted electrical services for your home, from wiring and installations to troubleshooting and repairs."
      },
      {
        title: "Commercial Services",
        desc: "Expert electrical contracting for commercial properties, including maintenance and new system setups."
      },
      {
        title: "Elite Installations",
        desc: "Specialized installations for premium fixtures, smart home systems, and advanced electrical components."
      },
      {
        title: "Lighting Solutions",
        desc: "Professional indoor and outdoor lighting design and installation to enhance security and ambiance."
      },
      {
        title: "Emergency Repairs",
        desc: "Rapid response for electrical failures, ensuring your systems are safe and functional at all times."
      },
      {
        title: "Maintenance & Audits",
        desc: "Comprehensive inspections and preventative maintenance to keep your electrical systems running smoothly."
      }
    ]
  }
};

export function getLeadData(slug?: string): LeadData {
  if (!slug) return defaultLead;
  return leads[slug] || defaultLead;
}
