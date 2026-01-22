/**
 * ============================================================================
 * STATE DATA CONFIGURATION
 * ============================================================================
 * 
 * Purpose: Central configuration file containing static data for all states.
 *          Provides fallback data when backend API is unavailable.
 * 
 * State Usage: All states (Tamil Nadu, Telangana, Delhi, etc.)
 * 
 * Architecture:
 * - Static data ensures zero blocking time
 * - Backend API enhances this data when available
 * - Each state has complete configuration (hero, departments, FAQs, etc.)
 * 
 * Key Data Structures:
 * - StateData: Complete state configuration
 * - StateHero: Hero section content
 * - StateFAQ: Frequently asked questions
 * 
 * Usage:
 * - Imported by useStateData hook
 * - Used as fallback when API fails
 * - Provides immediate data for SSR/SSG
 * 
 * Used by: useStateData hook, all state pages
 * ============================================================================
 */

// ====== TYPE DEFINITIONS ======
export interface StateHero {
  title: string;
  subtitle: string;
  image: string;
  cta: string;
}

export interface StateFAQ {
  q: string;
  a: string;
}

export interface StateData {
  name: string;
  slug: string;
  languages: string[];
  hero: StateHero;
  departments: string[];
  highlights: string[];
  faqs: StateFAQ[];
  description?: string;
  rtiPortalUrl?: string;
  process?: {
    steps: Array<{
      step: number;
      title: string;
      description: string;
    }>;
  };
  commission?: string;
  fee?: string;
  designTheme?: 'telangana' | 'puducherry' | 'default'; // Design theme for different layouts
}

export const states: Record<string, StateData> = {
  'telangana': {
    name: "Telangana",
    slug: "telangana",
    languages: ["English", "Telugu", "Urdu"],
    designTheme: "telangana",
    hero: {
      title: "File RTI Online in Telangana — Simplest Way to Get Government Information",
      subtitle: "Draft and file RTI applications to Telangana Government departments and offices without visiting in person.",
      image: "/images/telangana-banner.jpg",
      cta: "Start RTI for Telangana",
    },
    departments: [
      "Telangana Secretariat",
      "Telangana Revenue Department",
      "Telangana Police Department",
      "Telangana Education Department",
      "Telangana Health & Family Welfare Department",
      "Telangana Transport Department",
      "Telangana Public Works Department (PWD)",
      "Telangana Irrigation & CAD Department",
      "Telangana Rural Development Department",
      "Telangana Municipal Administration & Urban Development Department",
      "Telangana Registration & Stamps Department",
      "Telangana Commercial Taxes Department",
      "Telangana Labour Department",
      "Telangana Social Welfare Department",
      "Telangana Scheduled Castes Development Department",
      "Telangana Scheduled Tribes Welfare Department",
      "Telangana Women & Child Development Department",
      "Telangana Backward Classes Welfare Department",
      "Telangana Minority Welfare Department",
      "Telangana Youth & Sports Department",
      "Telangana Information & Public Relations Department",
      "Telangana Finance Department",
      "Telangana Planning Department",
      "Telangana Home Department",
      "Telangana Law Department",
      "Telangana Forest Department",
      "Telangana Environment Department",
      "Telangana Mines & Geology Department",
      "Telangana Industries & Commerce Department",
      "Telangana Information Technology Department",
      "Telangana Tourism & Culture Department",
      "Telangana Housing Department",
      "Telangana Water Resources Department",
      "Telangana Energy Department",
      "Telangana Agriculture & Cooperation Department",
      "Telangana Food & Civil Supplies Department",
      "Telangana Panchayat Raj & Rural Development Department",
      "Telangana Urban Development Department",
      "Telangana Medical & Health Department",
      "Telangana School Education Department",
      "Telangana Higher Education Department",
      "Telangana Technical Education Department",
      "Telangana Animal Husbandry Department",
      "Telangana Fisheries Department",
      "Telangana Horticulture Department",
      "Telangana Sericulture Department",
      "Telangana Handlooms & Textiles Department",
      "Telangana Endowments Department",
      "Telangana BC Welfare Department",
    ],
    highlights: [
      "Covered: Telangana Secretariat & State Departments",
      "Expert-drafted RTI questions",
      "Online filing and tracking support",
    ],
    faqs: [
      { q: "Can I file RTI to Telangana Secretariat online?", a: "Yes, you can file RTI applications to Telangana Secretariat and all state departments online through FileMyRTI. We handle drafting, submission, and tracking for you." },
      { q: "How long does RTI reply take in Telangana?", a: "As per RTI Act 2005, government departments in Telangana must respond within 30 days. In case of information concerning life or liberty, the response must be provided within 48 hours." },
      { q: "Can I file RTI for land records and property disputes in Telangana?", a: "Yes, you can file RTI applications for land records, property documents, and related information from Telangana Revenue Department, Registration & Stamps Department, and other relevant authorities." },
      { q: "Can I file RTI without visiting Meeseva or government offices?", a: "Yes, with FileMyRTI, you can file RTI applications completely online without visiting Meeseva centers or government offices. We handle all the paperwork and submission for you." },
    ],
    process: {
      steps: [
        {
          step: 1,
          title: "Share your RTI details for Telangana department or office",
          description: "Tell us what information you need from any Telangana Government department or office.",
        },
        {
          step: 2,
          title: "Our team drafts your RTI as per RTI Act, 2005 and Telangana rules",
          description: "Our experts draft a professional RTI application compliant with RTI Act 2005 and Telangana state rules.",
        },
        {
          step: 3,
          title: "We file, track, and help you with replies or appeals",
          description: "We handle submission, fee payment, tracking, and assist with first/second appeals if needed.",
        },
      ],
    },
    commission: "Telangana State Information Commission (TSIC)",
    fee: "₹10",
  },
  'tamil-nadu': {
    name: "Tamil Nadu",
    slug: "tamil-nadu",
    languages: ["English", "Hindi", "Tamil"],
    designTheme: "default",
    hero: {
      title: "File RTI Online for Tamil Nadu Government Departments",
      subtitle: "Get expert-drafted RTI applications for Revenue, Police, Education, Transport and more – without visiting offices.",
      image: "/images/hero.webp",
      cta: "File RTI for Tamil Nadu",
    },
    departments: [
      "RTI Tamil Nadu General Administration Department",
      "RTI Tamil Nadu Home, Prohibition & Excise Department",
      "RTI Tamil Nadu Police Department",
      "RTI Tamil Nadu Finance Department",
      "RTI Tamil Nadu Planning, Development & Special Initiatives Department",
      "RTI Tamil Nadu Revenue & Disaster Management Department",
      "RTI Tamil Nadu Commercial Taxes & Registration Department",
      "RTI Tamil Nadu Registration Department",
      "RTI Tamil Nadu School Education Department",
      "RTI Tamil Nadu Higher Education Department",
      "RTI Tamil Nadu Technical Education Department",
      "RTI Tamil Nadu Health & Family Welfare Department",
      "RTI Tamil Nadu Public Works Department",
      "RTI Tamil Nadu Rural Development & Panchayat Raj Department",
      "RTI Tamil Nadu Housing & Urban Development Department",
      "RTI Tamil Nadu Transport Department",
      "RTI Tamil Nadu Agriculture & Farmers Welfare Department",
      "RTI Tamil Nadu Animal Husbandry, Dairying & Fisheries Department",
      "RTI Tamil Nadu Forest & Environment Department",
      "RTI Tamil Nadu Industries Department",
      "RTI Tamil Nadu Tourism, Culture & Religious Endowments Department",
      "RTI Tamil Nadu Social Welfare & Nutritious Meal Programme Department",
      "RTI Tamil Nadu Labour Welfare & Skill Development Department",
      "RTI Tamil Nadu Backward Classes, Most Backward Classes & Minorities Welfare Department",
      "RTI Tamil Nadu Adi Dravidar & Tribal Welfare Department",
      "RTI Tamil Nadu Women & Child Development Department",
      "RTI Tamil Nadu Youth Welfare & Sports Development Department",
      "RTI Tamil Nadu Information & Public Relations Department",
      "RTI Tamil Nadu Information Technology Department",
      "RTI Tamil Nadu Energy Department",
      "RTI Tamil Nadu Water Resources Department",
      "RTI Tamil Nadu Law, Courts & Prisons Department",
      "RTI Tamil Nadu Election Department",
    ],
    highlights: [
      "Covered: Tamil Nadu Secretariat & State Departments",
      "Expert-drafted RTI questions",
      "Online filing and tracking support",
      "Service across all districts of Tamil Nadu",
    ],
    faqs: [
      { q: "Can I file RTI online in Tamil Nadu?", a: "Yes, you can file RTI applications for Tamil Nadu state departments online through FileMyRTI without visiting government offices." },
      { q: "Do I need to visit any government office to file RTI?", a: "No. The RTI filing process can be completed fully online with assistance from FileMyRTI." },
      { q: "What is the fee for filing an RTI application?", a: "The RTI application fee in Tamil Nadu is ₹10 for state departments. BPL cardholders are exempted from paying fees." },
      { q: "How long does it take to receive a response?", a: "As per the RTI Act, the Public Information Officer must provide information within 30 days from the date of receipt. For matters concerning life and liberty, the response must be given within 48 hours." },
      { q: "Can RTI be filed for state government departments in Tamil Nadu?", a: "Yes, RTI can be filed for Tamil Nadu state government departments and public authorities." },
      { q: "Is RTI filing available for individual citizens?", a: "Yes, any Indian citizen can file an RTI application." },
    ],
    process: {
      steps: [
        {
          step: 1,
          title: "Share your RTI details for Tamil Nadu department or office",
          description: "Tell us what information you need from any Tamil Nadu Government department or office.",
        },
        {
          step: 2,
          title: "Our team drafts your RTI as per RTI Act, 2005 and Tamil Nadu rules",
          description: "Our experts draft a professional RTI application compliant with RTI Act 2005 and Tamil Nadu Information Commission guidelines.",
        },
        {
          step: 3,
          title: "We file, track, and help you with replies or appeals",
          description: "We handle submission, fee payment, tracking, and assist with first/second appeals to Tamil Nadu Information Commission if needed.",
        },
      ],
    },
    commission: "Tamil Nadu Information Commission",
    fee: "₹10",
  },
  'puducherry': {
    name: "Puducherry",
    slug: "puducherry",
    languages: ["English", "Tamil", "Telugu", "Malayalam", "French"],
    designTheme: "puducherry",
    hero: {
      title: "File RTI Online in Puducherry — Simplest Way to Get Government Information",
      subtitle: "Draft and file RTI applications to Puducherry Government departments and offices without visiting in person.",
      image: "/images/puducherry.webp",
      cta: "Start RTI for Puducherry",
    },
    departments: [
      "Health & Family Welfare Department",
      "Directorate of Health & Family Welfare Services",
      "Indira Gandhi Government General Hospital & PGI",
      "Directorate of Medical Education",
      "AYUSH Directorate",
      "School Education Department",
      "Directorate of School Education",
      "Higher & Technical Education Department",
      "Directorate of Higher & Technical Education",
      "Directorate of Collegiate Education",
      "Revenue Department",
      "District Collectorate, Puducherry",
      "Taluk Offices",
      "Directorate of Survey & Land Records",
      "Registration Department",
      "Public Works Department (PWD)",
      "Electricity Department",
      "Public Health Engineering Department (PHED)",
      "Roads & Bridges Division",
      "Home Department",
      "Police Department, Puducherry",
      "Fire & Emergency Services",
      "Prison Department",
      "Prosecution Department",
      "Local Administration Department",
      "Puducherry Municipality",
      "Oulgaret Municipality",
      "Commune Panchayats",
      "Town & Country Planning Department",
      "Agriculture Department",
      "Horticulture Department",
      "Fisheries Department",
      "Animal Husbandry & Veterinary Services",
      "Agricultural Marketing Board",
      "Industries & Commerce Department",
      "Labour Department",
      "Employment Exchange",
      "Factories & Boilers Inspectorate",
      "Social Welfare Department",
      "Directorate of Women & Child Development",
      "Adi Dravidar Welfare Department",
      "Minority Welfare Department",
      "Department for the Welfare of Differently Abled Persons",
      "Transport Department",
      "Regional Transport Office (RTO)",
      "Motor Vehicles Department",
      "Ports Department",
      "Finance Department",
      "Commercial Taxes Department (GST)",
      "Excise Department",
      "Treasury & Accounts Department",
      "Forest Department",
      "Department of Environment & Climate Change",
      "Puducherry Pollution Control Committee (PPCC)",
      "Planning & Research Department",
      "Information Technology Department",
      "Directorate of Economics & Statistics",
      "National Informatics Centre (NIC), Puducherry",
      "State Information Commission, Puducherry",
      "RTI Cell – Chief Secretariat",
      "Public Information Officers (Department-wise)"
    ],
    highlights: [
      "Covered: Puducherry Secretariat & State Departments",
      "Expert-drafted RTI questions",
      "Online filing and tracking support",
      "Service across all districts of Puducherry",
    ],
    faqs: [
      { q: "Can I file RTI online in Puducherry?", a: "Yes, you can file RTI applications for Puducherry state departments online through FileMyRTI without visiting government offices." },
      { q: "Do I need to visit any government office to file RTI?", a: "No. The RTI filing process can be completed fully online with assistance from FileMyRTI." },
      { q: "What is the fee for filing an RTI application?", a: "The RTI application fee in Puducherry is ₹10 for state departments. BPL cardholders are exempted from paying fees." },
      { q: "How long does it take to receive a response?", a: "As per the RTI Act, the Public Information Officer must provide information within 30 days from the date of receipt. For matters concerning life and liberty, the response must be given within 48 hours." },
      { q: "Can RTI be filed for state government departments in Puducherry?", a: "Yes, RTI can be filed for Puducherry state government departments and public authorities." },
      { q: "Is RTI filing available for individual citizens?", a: "Yes, any Indian citizen can file an RTI application." },
    ],
    process: {
      steps: [
        {
          step: 1,
          title: "Share your RTI details for Puducherry department or office",
          description: "Tell us what information you need from any Puducherry Government department or office.",
        },
        {
          step: 2,
          title: "Our team drafts your RTI as per RTI Act, 2005 and Puducherry rules",
          description: "Our experts draft a professional RTI application compliant with RTI Act 2005 and Puducherry Information Commission guidelines.",
        },
        {
          step: 3,
          title: "We file, track, and help you with replies or appeals",
          description: "We handle submission, fee payment, tracking, and assist with first/second appeals to Puducherry Information Commission if needed.",
        },
      ],
    },
    commission: "Puducherry Information Commission",
    fee: "₹10",
  },
};

export const getStateBySlug = (slug: string): StateData | undefined => {
  return states[slug.toLowerCase()];
};

export const getAllStateSlugs = (): string[] => {
  return Object.keys(states);
};
