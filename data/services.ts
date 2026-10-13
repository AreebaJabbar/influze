export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const servicesData: Service[] = [
  {
    id: "influencer-marketing",
    title: "INFLUENCER MARKETING",
    description: "End-to-end multi-platform influencer campaigns driven by audience data, authentic brand matching, and measurable conversion goals.",
    image: "/images/service-1.jpg",
    tags: ["Brand Growth", "Strategy"]
  },
  {
    id: "creator-partnerships",
    title: "CREATOR PARTNERSHIPS",
    description: "Long-term ambassador programs and collaborative partnerships that build deep customer affinity and consistent brand loyalty.",
    image: "/images/service-2.jpg",
    tags: ["Creator Match", "Partnership"]
  },
  {
    id: "content-creation",
    title: "CONTENT CREATION",
    description: "High-impact user generated content, cinematic brand films, and viral-ready short form videos crafted for maximum algorithm engagement.",
    image: "/images/service-3.jpg",
    tags: ["Content First", "Creative"]
  },
  {
    id: "talent-management",
    title: "TALENT MANAGEMENT",
    description: "360-degree career stewardship for top-tier digital creators including contract negotiation, brand licensing, and multi-channel scaling.",
    image: "/images/service-4.jpg",
    tags: ["Brand Growth", "Strategy"]
  },
  {
    id: "campaign-analytics",
    title: "CAMPAIGN ANALYTICS",
    description: "Real-time transparent dashboards tracking sentiment analysis, impressions, click-through rates, and verifiable return on ad spend.",
    image: "/images/service-5.jpg",
    tags: ["Creator Match", "Partnership"]
  },
  {
    id: "brand-collaborations",
    title: "BRAND COLLABORATIONS",
    description: "Strategic co-branded activations, limited edition product drops, and exclusive community events that drive instant cultural momentum.",
    image: "/images/service-6.jpg",
    tags: ["Content First", "Creative"]
  }
];
