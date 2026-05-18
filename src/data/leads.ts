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
  },
  "anytime-electric": {
    slug: "anytime-electric",
    title: "Anytime Electric",
    logo: "/anytime-electric.png",
    primaryColor: "#f59e0b", // Amber yellow
    phone: "306-203-4798",
    address: "350 Brock Crescent, Saskatoon, SK S7H 4N5",
    email: "info@anytimeelectric.ca",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4899.484474620213!2d-106.56383581506653!3d52.12081861464422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f393acbdc98b%3A0xee96f77f08320f24!2sAnytime%20Electric!5e0!3m2!1sen!2sca!4v1779062755338!5m2!1sen!2sca",
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
        title: "Residential Services",
        desc: "Expert electrical solutions for your home: Renovations, New Construction, Cabin & Basement Wiring, Air Conditioner & Boiler Wiring, Hot Tubs, and Smoke Detector installations."
      },
      {
        title: "Commercial Electrical",
        desc: "Comprehensive commercial services: New Commercial Spaces, Commercial Renovations, Parking Lot Lighting & Car Plugs, and full Building Maintenance."
      },
      {
        title: "Panel Upgrades",
        desc: "Modernize your electrical infrastructure for increased safety and capacity. Perfect for panel replacements and handling modern high-power appliances."
      },
      {
        title: "Lighting & Device Upgrades",
        desc: "Custom indoor and outdoor lighting solutions to enhance your property's beauty and security, including fixture replacements, device upgrades, and parking lot lighting."
      },
      {
        title: "Security Systems",
        desc: "Keep your home or business safe with professional security system wiring and smoke detector installations tailored to your property."
      },
      {
        title: "Electrical Troubleshooting",
        desc: "Faulty wiring, tripped breakers, or flickering lights? We diagnose and resolve electrical issues with master-level precision and rapid response."
      }
    ]
  },
  "expert-electric": {
    slug: "expert-electric",
    title: "Expert Electric",
    logo: "/expert-electric.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "306-952-4514",
    address: "902 Kingsmere Blvd., Saskatoon, SK",
    email: "expertelectricsk@gmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "4.7",
    customerCount: "300+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.225489833645!2d-106.5884570243865!3d52.093827667695926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f9e8fb3b9293%3A0x35b434776d9448a5!2sExpert%20Electric%20Saskatoon!5e0!3m2!1sen!2sca!4v1779063040863!5m2!1sen!2sca",
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
        desc: "Expert wiring, installations, and modern upgrades for your home. Specialized in kitchen renovations, garages, ceiling fans, and comprehensive new construction setups."
      },
      {
        title: "Troubleshooting & Repair",
        desc: "Flickering lights, faulty outlets, or mysterious power outages? Our certified electricians diagnose and resolve complex electrical issues quickly and safely."
      },
      {
        title: "New Construction",
        desc: "Full-service electrical system planning and execution for new builds, additions, and complete property developments built to current safety standards."
      },
      {
        title: "Specialized Wiring",
        desc: "Professional, safe electrical hookups for hot tubs, spas, pools, and advanced home climate systems including HRV (Heat Recovery Ventilator) installations."
      },
      {
        title: "Custom Lighting Design",
        desc: "Transform your living spaces with modern custom lighting solutions. Experts in energy-efficient pot lights, recessed illumination, and ambient styling."
      },
      {
        title: "Commercial Contracts",
        desc: "Reliable electrical contracting for commercial spaces: office upgrades, storefront lighting, maintenance, and expert building power solutions."
      }
    ]
  },
  "patron-electric": {
    slug: "patron-electric",
    title: "Patron Electric",
    logo: "/patron-electric.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "(306) 290-9148",
    address: "2711 Irvine Ave, Saskatoon, SK S7J 2B2",
    email: "patronelectricltd@gmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "4.8",
    customerCount: "300+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.1280553461925!2d-106.6321809!3d52.09560099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f101adb23497%3A0xccaf01ef00faeb44!2sPatron%20Electric!5e0!3m2!1sen!2sca!4v1779063425081!5m2!1sen!2sca",
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
        title: "New Home & Renovations",
        desc: "Elite electrical planning and installation for custom new builds, complete renovations, basements, and garages. We bring modern, high-quality power to your spaces."
      },
      {
        title: "Service & Panel Upgrades",
        desc: "Increase your home's electrical capacity with master-level panel and service upgrades. Perfect for supporting modern appliances, in-floor heating, and high-power setups."
      },
      {
        title: "Specialized Wiring",
        desc: "Safe and certified hookups for hot tubs, air conditioners, HRV systems, low-voltage systems, and custom built-in speakers & data networks."
      },
      {
        title: "Commercial & Agriculture",
        desc: "Full-service electrical contracting for commercial facilities and agricultural operations, including reliable service calls, troubleshooting, and system upgrades."
      },
      {
        title: "Emergency Generators",
        desc: "Ensure your home or business is never left in the dark. Professional installation and maintenance of reliable standby and emergency backup generator systems."
      },
      {
        title: "Solar Panel Systems",
        desc: "Harness sustainable energy with our advanced solar panel installations. Custom-designed systems optimized to reduce your bills and footprint."
      }
    ]
  },
  "legend-electric": {
    slug: "legend-electric",
    title: "Legend Electric",
    logo: "/legend-electric.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "+13062505429",
    address: "217 Western Crescent, Saskatoon, SK S7H 4J5",
    email: "legendElectricSK@gmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.504204983641!2d-106.578398!3d52.125149199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f5af9be3b761%3A0x16a78ea294fa0fa7!2sLegend%20Electric!5e0!3m2!1sen!2sca!4v1779063677522!5m2!1sen!2sca",
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
        desc: "Expert residential electrical services: wiring, custom home lighting, power upgrades, safety inspections, and troubleshooting."
      },
      {
        title: "Commercial Projects",
        desc: "Full-scale electrical contracting for commercial properties, offices, and retail spaces including installations and maintenance."
      },
      {
        title: "Panel Upgrades",
        desc: "Modernize your home's electrical panel and service capacity for improved safety and modern appliance support."
      },
      {
        title: "Lighting Solutions",
        desc: "Custom indoor and outdoor lighting design and professional installation to elevate your property's value and look."
      },
      {
        title: "Emergency Service",
        desc: "Prompt response for critical electrical failures and hazards. Certified master electricians are available 24/7."
      },
      {
        title: "Safety Audits & Maintenance",
        desc: "Comprehensive home and commercial electrical inspections, device upgrades, and routine system upkeep."
      }
    ]
  },
  "kadco-electric": {
    slug: "kadco-electric",
    title: "Kadco Electric",
    logo: "/kadco-electric.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "+13063430006",
    address: "221 44 St E, Saskatoon, SK S7K 8E4",
    email: "admin@kadcoelectric.ca",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "4.8",
    customerCount: "300+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2447.5314480483125!2d-106.6712447!3d52.1610303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6f5c49f40f9%3A0xb36e704492b84b93!2sKadco%20Electric%20Inc!5e0!3m2!1sen!2sca!4v1779063851633!5m2!1sen!2sca",
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
        title: "Residential Renovations",
        desc: "Expert electrical systems for new homes, garages, whole-house renovations, basements, and secondary suites built to elite modern standards."
      },
      {
        title: "Commercial & Data",
        desc: "Complete commercial electrical construction, structured computer & network cabling, and robust preventative maintenance for existing commercial buildings."
      },
      {
        title: "Service & Panel Upgrades",
        desc: "Comprehensive panel replacements and service upgrades for both underground and overhead power lines, increasing capacity and safety."
      },
      {
        title: "LED Lighting & Controls",
        desc: "Modern, energy-saving LED lighting retrofits, automated lighting control systems, emergency exit lighting, and commercial lighting repairs."
      },
      {
        title: "Safety & Protection",
        desc: "Keep your property safe with whole-home surge protection, fire and carbon monoxide (CO2) alarms, and complete commercial fire alarm systems."
      },
      {
        title: "Generators & Solar",
        desc: "Advanced power solutions including backup generator setups, custom solar panel installations, and complex HVAC control system wiring."
      }
    ]
  },
  "aim-electric": {
    slug: "aim-electric",
    title: "Aim Electric",
    logo: "/aim-electric.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "+13069341922",
    address: "515 43 St E, Saskatoon, SK S7K 0V5",
    email: "aimelectric@gmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "4.2",
    customerCount: "500+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.6750502048326!2d-106.66422224872484!3d52.16021624627223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6f44ffe6677%3A0x1af3ed4a18645a96!2sAim%20Electric%20Ltd!5e0!3m2!1sen!2sca!4v1779064150142!5m2!1sen!2sca",
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
        desc: "Expert residential electrical services: wiring, custom home lighting, power upgrades, safety inspections, and troubleshooting."
      },
      {
        title: "Commercial Projects",
        desc: "Full-scale electrical contracting for commercial properties, offices, and retail spaces including installations and maintenance."
      },
      {
        title: "Panel Upgrades",
        desc: "Modernize your home's electrical panel and service capacity for improved safety and modern appliance support."
      },
      {
        title: "Lighting Solutions",
        desc: "Custom indoor and outdoor lighting design and professional installation to elevate your property's value and look."
      },
      {
        title: "Emergency Service",
        desc: "Prompt response for critical electrical failures and hazards. Certified master electricians are available 24/7."
      },
      {
        title: "Safety Audits & Maintenance",
        desc: "Comprehensive home and commercial electrical inspections, device upgrades, and routine system upkeep."
      }
    ]
  },
  "ethical-electrical": {
    slug: "ethical-electrical",
    title: "Ethical Electrical",
    logo: "/ethical-electrical.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "+13063619319",
    address: "2106 St Andrews Ave, Saskatoon, SK S7M 0M1",
    email: "ethical.electrical.sk@gmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.6128861188204!2d-106.6766695034019!3d52.1049765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f0c5a450b2f1%3A0x11eb8e99e048297c!2sEthical%20Electrical%20-%20Best%20Rated%20Electrician%2C%20Contractor%20Saskatoon!5e0!3m2!1sen!2sca!4v1779064332896!5m2!1sen!2sca",
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
        title: "Remodels & Renovations",
        desc: "Premium electrical design and execution for home remodeling, kitchen and bath renovations, basement developments, and structural upgrades."
      },
      {
        title: "Custom Construction",
        desc: "State-of-the-art electrical planning and layout designs for high-end custom residential construction and architectural builds."
      },
      {
        title: "Solar Installation",
        desc: "Clean energy solutions optimized for your roof. Professional solar panels and battery storage installations for maximum efficiency."
      },
      {
        title: "Emergency Service Calls",
        desc: "Exceptional service when you need it most. Rapid response for critical system faults, tripped breakers, and urgent electrical fixes."
      },
      {
        title: "Safety Checks & Audits",
        desc: "Comprehensive residential electrical safety audits, thermal imaging analysis, device testing, and full code-compliance verifications."
      },
      {
        title: "Generator Installation",
        desc: "Power security for your family. Professional install and maintenance of premium home standby backup and emergency generator systems."
      }
    ]
  },
  "bright-north-electric": {
    slug: "bright-north-electric",
    title: "Bright North Electric",
    logo: "/bright-north-electric.png",
    primaryColor: "#f59e0b", // Amber yellow
    phone: "306-850-5710",
    address: "829B 50th Street East, Saskatoon, SK",
    email: "info@brightnorthelectric.ca",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.016464690755!2d-106.64861700000002!3d52.170394099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f1617d50e3b3%3A0x9c09a9e765a25e5b!2sBright%20North%20Electric!5e0!3m2!1sen!2sca!4v1779064695984!5m2!1sen!2sca",
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
        title: "Commercial Builds",
        desc: "Comprehensive commercial installations and renovations for offices, restaurants, retail shops, and warehouses, including fire alarm system setups."
      },
      {
        title: "Industrial Services",
        desc: "Specialized industrial servicing featuring motor controls (PLC and VFD), industrial equipment repairs, troubleshooting, and 24/7 breakdown support."
      },
      {
        title: "Bucket Truck Services",
        desc: "In-house bucket truck services for high-reach outdoor projects, including parking lot pole lights, signage, and exterior building lighting."
      },
      {
        title: "Infrared Thermography",
        desc: "Preventative maintenance using thermal imaging cameras to locate and resolve critical electrical faults before they cause system downtime."
      },
      {
        title: "Lighting Upgrades",
        desc: "High-efficiency commercial and industrial LED lighting retrofits, architectural lighting designs, and energy-saving lighting control systems."
      },
      {
        title: "Equipment Maintenance",
        desc: "Routine electrical maintenance plans, safety compliance auditing, and emergency on-call repairs to keep your operations running smoothly."
      }
    ]
  },
  "jd-electric": {
    slug: "jd-electric",
    title: "JD Electric",
    logo: "/jd-electric.png",
    primaryColor: "#ef4444", // Modern premium Red
    phone: "+13062204594",
    address: "819 60 St E, Saskatoon, SK S7K 5Z7",
    email: "jdelectric@gmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "4.5",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.0938102370615!2d-106.65524029999999!3d52.187167499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f5db85066bbd%3A0xd1c470ca3d869999!2sJD%20Electric!5e0!3m2!1sen!2sca!4v1779067801136!5m2!1sen!2sca",
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
        desc: "Expert residential electrical services: wiring, custom home lighting, power upgrades, safety inspections, and troubleshooting."
      },
      {
        title: "Commercial Projects",
        desc: "Full-scale electrical contracting for commercial properties, offices, and retail spaces including installations and maintenance."
      },
      {
        title: "Panel Upgrades",
        desc: "Modernize your home's electrical panel and service capacity for improved safety and modern appliance support."
      },
      {
        title: "Lighting Solutions",
        desc: "Custom indoor and outdoor lighting design and professional installation to elevate your property's value and look."
      },
      {
        title: "Emergency Service",
        desc: "Prompt response for critical electrical failures and hazards. Certified master electricians are available 24/7."
      },
      {
        title: "Safety Audits & Maintenance",
        desc: "Comprehensive home and commercial electrical inspections, device upgrades, and routine system upkeep."
      }
    ]
  },
  "tsi-electric": {
    slug: "tsi-electric",
    title: "TSI Electric",
    logo: "/tsi-electric.png",
    primaryColor: "#ef4444", // Modern premium Red
    phone: "(306) 652-1906",
    address: "1938 Saskatchewan Ave., Saskatoon, SK S7K 1R2",
    email: "info@tsielectric.ca",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "4.0",
    customerCount: "50+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.802173348617!2d-106.66858549999999!3d52.156107299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6f0c77c8cd7%3A0xa04113c977926db0!2s1938%20Saskatchewan%20Ave%2C%20Saskatoon%2C%20SK%20S7K%201R2!5e0!3m2!1sen!2sca!4v1779068267927!5m2!1sen!2sca",
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
        title: "Industrial & High Voltage",
        desc: "Specialized commercial & industrial services, including design/build projects, heavy power distribution, PLC wiring, and high-voltage installations."
      },
      {
        title: "Healthcare Systems",
        desc: "Certified electrical setups for medical and healthcare facilities, including nurse call installations, safety compliance, and strict infection control wiring."
      },
      {
        title: "Fire Alarm Systems",
        desc: "Complete fire protection wiring, addressable fire alarms, and sprinkler system electrical connections tailored for full commercial code compliance."
      },
      {
        title: "Residential & Lighting",
        desc: "High-end home wiring for new builds and upgrades, custom interior lighting plans, and energy-efficient automated lighting control systems."
      },
      {
        title: "Data & Fiber Optics",
        desc: "Elite data cabling, telecommunications networks, structured media panels, and high-speed fiber-optic network terminations for business or home."
      },
      {
        title: "Generators & 24/7 Service",
        desc: "Reliable home backup generators, automated HVAC/motor control wiring, troubleshooting, and master-level 24/7 emergency service calls."
      }
    ]
  },
  "assertive-electrical-services": {
    slug: "assertive-electrical-services",
    title: "Assertive Electrical Services",
    logo: "/assertive-electrical-services.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "+1 855-967-3827",
    address: "Site 207 RR2, Saskatoon, SK S7K 0G9",
    email: "Assertiveelectric@hotmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.908271269972!2d-106.64982820000002!3d52.1723612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f9f00065949b%3A0x766627c6ae22f0d4!2sAssertive%20Electrical%20Services%20Ltd!5e0!3m2!1sen!2sca!4v1779068393486!5m2!1sen!2sca",
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
        desc: "Expert residential electrical services: wiring, custom home lighting, power upgrades, safety inspections, and troubleshooting."
      },
      {
        title: "Commercial Projects",
        desc: "Full-scale electrical contracting for commercial properties, offices, and retail spaces including installations and maintenance."
      },
      {
        title: "Panel Upgrades",
        desc: "Modernize your home's electrical panel and service capacity for improved safety and modern appliance support."
      },
      {
        title: "Lighting Solutions",
        desc: "Custom indoor and outdoor lighting design and professional installation to elevate your property's value and look."
      },
      {
        title: "Emergency Service",
        desc: "Prompt response for critical electrical failures and hazards. Certified master electricians are available 24/7."
      },
      {
        title: "Safety Audits & Maintenance",
        desc: "Comprehensive home and commercial electrical inspections, device upgrades, and routine system upkeep."
      }
    ]
  },
  "assertive-electrical-services-2": {
    slug: "assertive-electrical-services-2",
    title: "Assertive Electrical Services",
    logo: "/assertive-electrical-services-2.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "+13063843866",
    address: "Site 207 RR2, Saskatoon, SK S7K 0G9",
    email: "assertiveelectricltd@gmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.908271269972!2d-106.64982820000002!3d52.1723612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f9f00065949b%3A0x766627c6ae22f0d4!2sAssertive%20Electrical%20Services%20Ltd!5e0!3m2!1sen!2sca!4v1779068393486!5m2!1sen!2sca",
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
        desc: "Expert residential electrical services: wiring, custom home lighting, power upgrades, safety inspections, and troubleshooting."
      },
      {
        title: "Commercial Projects",
        desc: "Full-scale electrical contracting for commercial properties, offices, and retail spaces including installations and maintenance."
      },
      {
        title: "Panel Upgrades",
        desc: "Modernize your home's electrical panel and service capacity for improved safety and modern appliance support."
      },
      {
        title: "Lighting Solutions",
        desc: "Custom indoor and outdoor lighting design and professional installation to elevate your property's value and look."
      },
      {
        title: "Emergency Service",
        desc: "Prompt response for critical electrical failures and hazards. Certified master electricians are available 24/7."
      },
      {
        title: "Safety Audits & Maintenance",
        desc: "Comprehensive home and commercial electrical inspections, device upgrades, and routine system upkeep."
      }
    ]
  },
  "aj-electric": {
    slug: "aj-electric",
    title: "AJ Electric",
    logo: "/aj-electric.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "+12045200990",
    address: "63 Winter Bay, Brandon, MB R7B 3H9",
    email: "ajelectric@gmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "4.8",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.697059709432!2d-99.9946198!3d49.82935870000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304e79b423b9832e1%3A0xb9b7f458d22a8fa1!2sAJ%20Electric%20Ltd.!5e0!3m2!1sen!2sca!4v1779069081669!5m2!1sen!2sca",
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
        title: "Traditional Services",
        desc: "Master electrical craftsmanship for all traditional residential and commercial requirements, including wiring, repairs, and code compliance."
      },
      {
        title: "Standby Generators",
        desc: "Keep your property powered. Full setup, sales, and comprehensive servicing for premium automatic home standby generator systems."
      },
      {
        title: "Solar Power Systems",
        desc: "Innovative clean energy setups. Custom solar panel installation, high-performance battery storages, and grid-tie system calibrations."
      },
      {
        title: "Panel & Service Upgrades",
        desc: "Comprehensive service upgrades and panel replacements, enhancing your property's electrical load capacity and overall safety."
      },
      {
        title: "Custom Lighting Design",
        desc: "Premium interior and exterior lighting designs and professional setups to elevate the ambiance and value of your home."
      },
      {
        title: "24/7 Emergency Repairs",
        desc: "Prompt response times for urgent electrical hazards, breaker failures, and sudden power outages. Available day and night."
      }
    ]
  },
  "current-electric": {
    slug: "current-electric",
    title: "Current Electric",
    logo: "/current-electric.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "+12047202530",
    address: "11 Oak Bluff Rd, Brandon, MB R7C 1A2",
    email: "current_electric@hotmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2571.376738970465!2d-99.9648452!3d49.872951300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52e7977f64964bcb%3A0x1661f7f6e18c4c28!2sCurrent%20Electric%20Ltd.!5e0!3m2!1sen!2sca!4v1779069237667!5m2!1sen!2sca",
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
        title: "New Home Wiring",
        desc: "Expert electrical designs and full service installations for new residential builds, custom homes, and modern layouts."
      },
      {
        title: "Panel & Wiring Upgrades",
        desc: "Comprehensive service panel replacements and modern wiring upgrades to enhance safety and load capacity."
      },
      {
        title: "Electric Furnace Repair",
        desc: "Specialized diagnostics, component wiring, and emergency electrical troubleshooting for all makes of electric furnaces."
      },
      {
        title: "Lighting Design & Setup",
        desc: "Architectural lighting design and professional installation to bring warmth, luxury, and high efficiency to your spaces."
      },
      {
        title: "Commercial Electrical",
        desc: "Complete commercial electrical systems contracting, retail wiring, office renovations, and preventative electrical maintenance."
      },
      {
        title: "Emergency Support & Audits",
        desc: "Rapid 24/7 emergency response for critical breaker failures, high-end safety inspections, and code-compliance verifications."
      }
    ]
  },
  "figol-electric": {
    slug: "figol-electric",
    title: "Figol Electric",
    logo: "/figol-electric.png",
    primaryColor: "#0077b6", // Oceanic Blue
    phone: "+12047276556",
    address: "264 10th St, Brandon, MB R7A 4E8",
    email: "bhfigol@hotmail.com",
    heroHeading: "Elite Electricians in Regina",
    highlightWord: "Electricians",
    heroSubtext: "Delivering premium electrical craftsmanship and reliable service to homes and businesses across Regina.....",
    trustRating: "4.5",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.839377869081!2d-99.95167389999999!3d49.8454755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52e7974e516ab499%3A0x57633ad94198a933!2sFigol%20Electric%20Ltd!5e0!3m2!1sen!2sca!4v1779070238215!5m2!1sen!2sca",
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
        desc: "Expert residential electrical services: wiring, custom home lighting, power upgrades, safety inspections, and troubleshooting."
      },
      {
        title: "Commercial Projects",
        desc: "Full-scale electrical contracting for commercial properties, offices, and retail spaces including installations and maintenance."
      },
      {
        title: "Panel Upgrades",
        desc: "Modernize your home's electrical panel and service capacity for improved safety and modern appliance support."
      },
      {
        title: "Lighting Solutions",
        desc: "Custom indoor and outdoor lighting design and professional installation to elevate your property's value and look."
      },
      {
        title: "Emergency Service",
        desc: "Prompt response for critical electrical failures and hazards. Certified master electricians are available 24/7."
      },
      {
        title: "Safety Audits & Maintenance",
        desc: "Comprehensive home and commercial electrical inspections, device upgrades, and routine system upkeep."
      }
    ]
  }
};

export function getLeadData(slug?: string): LeadData {
  if (!slug) return defaultLead;
  return leads[slug] || defaultLead;
}
