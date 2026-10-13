export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  creatorName: string;
  creatorAvatar: string;
  creatorVerified: boolean;
  reach: string;
  engagement: string;
  summary: string;
}

export const projectsData: Project[] = [
  {
    id: "summer-style-launch",
    title: "SUMMER STYLE LAUNCH CAMPAIGN",
    subtitle: "- Fashion & Lifestyle",
    image: "/images/project-summer.jpg",
    tags: ["Fashion", "Lifestyle"],
    creatorName: "Emma Collins",
    creatorAvatar: "/images/creator-sophia.jpg",
    creatorVerified: true,
    reach: "3.2M",
    engagement: "8.9%",
    summary: "A multi-platform summer capsule reveal featuring 12 micro-trend videos, generating over 45,000 direct website referral checkouts."
  },
  {
    id: "glow-naturally-product-review",
    title: "GLOW NATURALLY PRODUCT REVIEW",
    subtitle: "- Beauty Care",
    image: "/images/project-glow.jpg",
    tags: ["Beauty", "Skincare"],
    creatorName: "Sophia Carter",
    creatorAvatar: "/images/creator-naomi.jpg",
    creatorVerified: true,
    reach: "8.2M",
    engagement: "9.4%",
    summary: "Viral TikTok & Reels routine showcasing organic botanical serum, yielding a 310% surge in quarterly brand search volume."
  },
  {
    id: "explore-beyond-destinations",
    title: "EXPLORE BEYOND DESTINATIONS",
    subtitle: "- Travel Tourism",
    image: "/images/project-explore.jpg",
    tags: ["Travel", "Adventure"],
    creatorName: "Olivia Brooks",
    creatorAvatar: "/images/creator-lisa.jpg",
    creatorVerified: true,
    reach: "3.2M",
    engagement: "8.9%",
    summary: "Cinematic destination travel logs across Mediterranean coastal resorts that quadrupled international booking inquiries."
  },
  {
    id: "30-day-healthy-challenge",
    title: "30-DAY HEALTHY CHALLENGE",
    subtitle: "- Health Fitness",
    image: "/images/project-fitness.jpg",
    tags: ["Wellness", "Fitness"],
    creatorName: "Liam Anderson",
    creatorAvatar: "/images/creator-lucas.jpg",
    creatorVerified: true,
    reach: "3.2M",
    engagement: "8.9%",
    summary: "Community fitness challenge driving daily hashtag engagement, app downloads, and sustained subscription retention."
  }
];
