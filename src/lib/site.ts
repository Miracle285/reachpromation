import flyerImg from "@/assets/service-flyer.jpg";
import newspaperImg from "@/assets/service-newspaper.jpg";
import collegeImg from "@/assets/service-college.jpg";
import noParkingImg from "@/assets/no-parking-board-installation.jpg.asset.json";
import sunpackImg from "@/assets/sunpack-pole-board-installation.jpg.asset.json";
import bannerImg from "@/assets/small-banner-installation.jpg.asset.json";
import g0 from "@/assets/gallery-newspaper-insertion-1.jpg.asset.json";
import g1 from "@/assets/gallery-newspaper-insertion-2.jpg.asset.json";
import g2 from "@/assets/gallery-newspaper-insertion-3.jpg.asset.json";
import g3 from "@/assets/gallery-newspaper-insertion-4.jpg.asset.json";
import g4 from "@/assets/gallery-college-promotion-christ-university.jpg.asset.json";
import g5 from "@/assets/gallery-pg-pole-board-1.jpg.asset.json";
import g6 from "@/assets/gallery-pg-pole-board-2.jpg.asset.json";
import g7 from "@/assets/gallery-pg-pole-board-3.jpg.asset.json";
import g8 from "@/assets/gallery-pg-pole-board-4.jpg.asset.json";
import g9 from "@/assets/gallery-pg-pole-board-5.jpg.asset.json";
import g10 from "@/assets/gallery-pharmacy-pole-board-1.jpg.asset.json";
import g11 from "@/assets/gallery-pharmacy-pole-board-2.jpg.asset.json";
import g12 from "@/assets/gallery-pharmacy-pole-board-3.jpg.asset.json";
import g13 from "@/assets/gallery-pharmacy-pole-board-4.jpg.asset.json";
import g14 from "@/assets/gallery-pharmacy-pole-board-5.jpg.asset.json";
import eduFairImg from "@/assets/service-edu-fair.jpg";
import productImg from "@/assets/service-product.jpg";
import marketingImg from "@/assets/service-marketing.jpg";
import salesImg from "@/assets/service-sales.jpg";
import nagendraCertificate from "@/assets/gallery-aecc-nagendra-certificate.jpg.asset.json";
import raghuCertificate from "@/assets/gallery-aecc-raghu-certificate.jpg.asset.json";
import canamCertificate from "@/assets/gallery-canam-participation-certificate.jpg.asset.json";
import flyerOutreach1 from "@/assets/gallery-flyer-outreach-1.jpg.asset.json";
import flyerOutreach2 from "@/assets/gallery-flyer-outreach-2.jpg.asset.json";
import flyerOutreach3 from "@/assets/gallery-flyer-outreach-3.jpg.asset.json";
import globalDegreesEvent from "@/assets/gallery-global-degrees-event.jpg.asset.json";
import educationPoleBoard1 from "@/assets/gallery-education-fair-pole-board-1.jpg.asset.json";
import educationPoleBoard2 from "@/assets/gallery-education-fair-pole-board-2.jpg.asset.json";

export const BRAND = {
  name: "Reach Promotion",
  tagline: "Take Your Brand to Greater Heights.",
  location: "Bangalore, Karnataka",
  address: "No 146, 2nd Main Road, 2nd Block, 33rd Cross, Jugganahalli, Rajajinagar, Bangalore 560010",
};

export type Contact = { name: string; phones: string[] };

export const CONTACTS: Contact[] = [
  { name: "Raghu Kumar", phones: ["8792021476", "9164021476"] },
  { name: "Nagendra K", phones: ["8431038031", "8497838431"] },
];

export const PRIMARY_PHONE = "8792021476";

export function telHref(phone: string) {
  return `tel:+91${phone}`;
}

export function whatsappHref(phone: string, message = "Hello Reach Promotion, I would like to enquire about your promotional services.") {
  return `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;
}

export function formatPhone(phone: string) {
  return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
}

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/experience", label: "Experience" },
  { to: "/gallery", label: "Our Work" },
  { to: "/contact", label: "Contact Us" },
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  image: string;
  alt: string;
  imagePosition?: string;
};

export const SERVICES: Service[] = [
  {
    slug: "flyer-distribution",
    title: "Door-to-Door Flyer Distribution",
    short: "Professional distribution of promotional flyers to help businesses reach local households and potential customers across Bangalore.",
    description: "Our team delivers your flyers directly to homes, apartments and residential layouts in the areas you choose, so your message reaches the households most likely to become your customers.",
    benefits: ["Area-wise targeting across Bangalore", "Direct reach to local households", "Planned routes and coordinated teams"],
    image: flyerImg,
    alt: "Promoter handing a flyer to a resident at an apartment gate",
  },
  {
    slug: "newspaper-insertion",
    title: "Newspaper Insertion",
    short: "Distribution of advertising flyers through newspaper insertion campaigns.",
    description: "Your flyers are inserted into morning newspapers and delivered with them, placing your offer in the hands of readers at the start of their day.",
    benefits: ["Arrives with the morning paper", "Covers selected localities", "Cost-effective for large quantities"],
    image: newspaperImg,
    alt: "Advertising leaflets being inserted into stacked newspapers",
  },
  {
    slug: "college-flyer-distribution",
    title: "College Flyer Distribution",
    short: "Promotional flyer distribution in front of colleges and student-focused locations.",
    description: "We reach students directly at college gates and student hubs — ideal for coaching centres, study-abroad consultancies, events and youth brands.",
    benefits: ["Direct access to student audiences", "Knowledge of college and student areas", "Timed around college hours"],
    image: collegeImg,
    alt: "Promoter handing flyers to students outside a college gate",
  },
  {
    slug: "no-parking-board-installation",
    title: "No Parking Board Installation",
    short: "Installation of no-parking boards for promotional and location-based requirements.",
    description: "We install no-parking and pole boards at the locations you need, carrying your brand at street level where people walk and drive every day.",
    benefits: ["Street-level brand visibility", "Location-based placement", "Neat, secure installation"],
    image: noParkingImg.url,
    alt: "Two workers installing a no-parking board on a metal gate",
  },
  {
    slug: "sunpack-board-installation",
    title: "Sunpack Board Installation",
    short: "Installation of Sunpack boards for outdoor promotional and advertising purposes.",
    description: "Lightweight, weather-resistant Sunpack boards placed along roads, railings and junctions to keep your brand visible to passing traffic.",
    benefits: ["Visible to daily commuters", "Light and weather-resistant boards", "Quick installation across locations"],
    image: sunpackImg.url,
    alt: "Reach Promotion pole board installed on a tree-lined street",
    imagePosition: "center 25%",
  },
  {
    slug: "banner-installation",
    title: "Small Banner Installation",
    short: "Small banner installation for promotional campaigns and local brand visibility.",
    description: "We put up banners at markets, junctions and event venues to announce openings, offers and events in the neighbourhoods that matter to you.",
    benefits: ["Ideal for openings and offers", "Placement in busy local areas", "Coordinated setup and removal"],
    image: bannerImg.url,
    alt: "Worker installing a promotional banner on a street pole",
    imagePosition: "center 25%",
  },
  {
    slug: "educational-fair-support",
    title: "Educational Fair Volunteer Support",
    short: "Volunteer and promotional support for educational fairs and related events.",
    description: "Trained volunteers to guide visitors, manage registrations and support your stall at educational fairs and similar events.",
    benefits: ["Friendly, briefed volunteers", "Visitor guidance and registrations", "Support from setup to close"],
    image: eduFairImg,
    alt: "Volunteers guiding students and parents at an education fair",
  },
  {
    slug: "product-distribution",
    title: "Product Distribution",
    short: "Product distribution and local market outreach activities.",
    description: "Sampling and product handouts at stores, malls and residential areas to put your product directly in customers' hands.",
    benefits: ["Hands-on product sampling", "Outreach at retail locations", "Local market coverage"],
    image: productImg,
    alt: "Promoters handing out product samples outside a supermarket",
  },
  {
    slug: "marketing-support",
    title: "Marketing and Promotional Support",
    short: "Ground-level marketing, brand visibility and promotional campaign coordination.",
    description: "From planning locations to coordinating teams on the ground, we help run your promotional campaigns smoothly across the city.",
    benefits: ["Campaign planning and coordination", "On-ground brand visibility", "One point of contact"],
    image: marketingImg,
    alt: "Team planning a campaign around a city map",
  },
  {
    slug: "sales-support",
    title: "Sales Support and Customer Coordination",
    short: "Sales support, customer outreach and coordination services.",
    description: "Field staff who can connect with shop owners and customers, follow up on leads and coordinate on your behalf.",
    benefits: ["Customer outreach and follow-up", "Retailer coordination", "Reliable field staff"],
    image: salesImg,
    alt: "Sales coordinator speaking with a shop owner at a counter",
  },
];

export const WHY_CHOOSE = [
  "4 years of industry experience",
  "Wide coverage across Bangalore",
  "Professional and dependable service",
  "Strong understanding of local markets and student areas",
  "Coordination with retailers, colleges and event organisers",
  "Commitment to timely service delivery",
  "Customer-focused approach",
];

export const CLIENTS = ["Global Degrees", "AECC Study Abroad", "Study Australia", "CANOM"];

export const PROCESS = [
  { title: "Understand Requirements", text: "We listen to your goals, audience and budget." },
  { title: "Plan the Campaign", text: "We plan quantities, timing and the right activity." },
  { title: "Identify Locations", text: "We pick the areas where your audience is." },
  { title: "Execute", text: "Our team carries out the distribution or installation." },
  { title: "Share Updates", text: "We share completion updates once the campaign is done." },
];

export const GALLERY_CATEGORIES = [
  "Flyer Distribution",
  "Pole Board Installation",
  "Newspaper Insertion",
  "Banner Installation",
  "College Promotions",
  "Product Distribution",
  "Promotional Events",
  "Certificates",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export const GALLERY: { image: string; category: GalleryCategory; caption: string }[] = [
  { image: noParkingImg.url, category: "Pole Board Installation", caption: "Two workers installing a no-parking board on a metal gate" },
  { image: sunpackImg.url, category: "Pole Board Installation", caption: "Reach Promotion pole board installed on a tree-lined street" },
  { image: bannerImg.url, category: "Banner Installation", caption: "Worker installing a promotional banner on a street pole" },
  { image: g0.url, category: "Newspaper Insertion", caption: "Our team inserting flyers into morning newspapers (1)" },
  { image: g1.url, category: "Newspaper Insertion", caption: "Our team inserting flyers into morning newspapers (2)" },
  { image: g2.url, category: "Newspaper Insertion", caption: "Our team inserting flyers into morning newspapers (3)" },
  { image: g3.url, category: "Newspaper Insertion", caption: "Our team inserting flyers into morning newspapers (4)" },
  { image: g4.url, category: "College Promotions", caption: "Flyer distribution outside Christ University" },
  { image: g5.url, category: "Pole Board Installation", caption: "PG pole board installed in Basavanagudi (1)" },
  { image: g6.url, category: "Pole Board Installation", caption: "PG pole board installed in Basavanagudi (2)" },
  { image: g7.url, category: "Pole Board Installation", caption: "PG pole board installed in Basavanagudi (3)" },
  { image: g8.url, category: "Pole Board Installation", caption: "PG pole board installed in Basavanagudi (4)" },
  { image: g9.url, category: "Pole Board Installation", caption: "PG pole board installed in Basavanagudi (5)" },
  { image: g10.url, category: "Pole Board Installation", caption: "Pharmacy pole board installed at night (1)" },
  { image: g11.url, category: "Pole Board Installation", caption: "Pharmacy pole board installed at night (2)" },
  { image: g12.url, category: "Pole Board Installation", caption: "Pharmacy pole board installed at night (3)" },
  { image: g13.url, category: "Pole Board Installation", caption: "Pharmacy pole board installed at night (4)" },
  { image: g14.url, category: "Pole Board Installation", caption: "Pharmacy pole board installed at night (5)" },
  { image: flyerOutreach1.url, category: "Flyer Distribution", caption: "Our team distributing flyers on the street (1)" },
  { image: flyerOutreach2.url, category: "Flyer Distribution", caption: "Our team distributing flyers on the street (2)" },
  { image: flyerOutreach3.url, category: "Flyer Distribution", caption: "Our team distributing flyers on the street (3)" },
  { image: globalDegreesEvent.url, category: "Promotional Events", caption: "Team photo at a Global Degrees event" },
  { image: educationPoleBoard1.url, category: "Pole Board Installation", caption: "Australia & New Zealand Education Fair pole board (1)" },
  { image: educationPoleBoard2.url, category: "Pole Board Installation", caption: "Australia & New Zealand Education Fair pole board (2)" },
  { image: nagendraCertificate.url, category: "Certificates", caption: "AECC certificate of attendance — Nagendra K" },
  { image: raghuCertificate.url, category: "Certificates", caption: "AECC certificate of attendance — Raghu Kumar" },
  { image: canamCertificate.url, category: "Certificates", caption: "Canadian Universities & Colleges Admissions Fair certificate of participation" },
];
