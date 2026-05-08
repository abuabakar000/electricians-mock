export interface LeadData {
  slug: string;
  name: string;
  phone: string;
  email?: string;
  primaryColor: string; // Tailwind color name or Hex (e.g., "#6a19cdff")
  logoUrl?: string;
  address?: string;
  hero?: {
    badge?: string;
    headline?: string;
    subheadline?: string;
  };
  services?: string[];
}

export const defaultLead: LeadData = {
  slug: "default",
  name: "Your Family-Owned Neighborhood Plumber",
  phone: "(800) 555-0199",
  email: "contact@yourplumber.com",
  primaryColor: "#f59e0b", // Your current Amber color
  logoUrl: "/logo.png",
  address: "Your City, State & Surrounding Areas",
  hero: {
    badge: "Family-Owned Master Plumbers",
    headline: "Honest Craftsmanship for Your Home",
    subheadline: "Reliable, high-end service with a personal touch. We treat every home as if it were our own, delivering master-level plumbing with unwavering integrity.",
  }
};

export const leads: Record<string, LeadData> = {
  "default": defaultLead,
  "example-lead": {
    ...defaultLead,
    slug: "example-lead",
    name: "Elite City Plumbing",
    primaryColor: "#3b82f6", // Blue theme
    phone: "(555) 000-0000",
  },
  "blue-coast": {
    ...defaultLead,
    slug: "blue-coast",
    name: "Blue Coast Plumbing",
    phone: "(555) 123-4567",
    primaryColor: "#0ea5e9", // Sky Blue theme
  },
};

/**
 * Helper to get lead data by slug. 
 * If slug is missing or lead doesn't exist, it returns the 'Master Template' default.
 */
export function getLeadData(slug?: string): LeadData {
  if (!slug) return defaultLead;
  return leads[slug] || defaultLead;
}
