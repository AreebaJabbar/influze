export interface Creator {
  id: string;
  name: string;
  role: string;
  handle: string;
  image: string;
  verified: boolean;
  category: string;
  followers: string;
  engagement: string;
  bio: string;
}

export const creatorsData: Creator[] = [
  {
    id: "ethan-carter",
    name: "Ethan Carter",
    role: "Lifestyle Creator",
    handle: "@ethancarter",
    image: "/images/creator-ethan.jpg",
    verified: true,
    category: "Lifestyle",
    followers: "1.4M",
    engagement: "7.8%",
    bio: "Visual storyteller capturing authentic urban lifestyle, street culture, and daily adventures across global cities."
  },
  {
    id: "sophia-bennett",
    name: "Sophia Bennett",
    role: "Beauty Influencer",
    handle: "@sophiabennett",
    image: "/images/creator-sophia.jpg",
    verified: true,
    category: "Beauty",
    followers: "2.8M",
    engagement: "9.2%",
    bio: "Clean beauty pioneer providing skincare science breakdowns, glam tutorials, and conscious brand endorsements."
  },
  {
    id: "naomi-mitchell",
    name: "Naomi Mitchell",
    role: "Tech Reviewer",
    handle: "@naomitech",
    image: "/images/creator-naomi.jpg",
    verified: true,
    category: "Tech",
    followers: "950K",
    engagement: "8.5%",
    bio: "Demystifying future tech, hardware ecosystems, and smart home setups with high-production creative reviews."
  },
  {
    id: "ava-collins",
    name: "Ava Collins",
    role: "Fashion Creator",
    handle: "@avacollins",
    image: "/images/creator-ava.jpg",
    verified: true,
    category: "Fashion",
    followers: "3.1M",
    engagement: "6.9%",
    bio: "Haute couture meets accessible street style, partnering with premier European fashion houses and emerging labels."
  },
  {
    id: "lucas-anderson",
    name: "Lucas Anderson",
    role: "Travel Influencer",
    handle: "@lucas_travels",
    image: "/images/creator-lucas.jpg",
    verified: true,
    category: "Travel",
    followers: "1.8M",
    engagement: "10.4%",
    bio: "Expedition filmmaker leading off-grid travel adventures, luxury resort experiences, and cinematic travel storytelling."
  },
  {
    id: "mia-thompson",
    name: "Mia Thompson",
    role: "Fitness Coach",
    handle: "@miathompsonfit",
    image: "/images/creator-mia.jpg",
    verified: true,
    category: "Fitness",
    followers: "2.2M",
    engagement: "8.9%",
    bio: "Holistic wellness expert, high-performance athletic trainer, and champion of sustainable active living."
  },
  {
    id: "lisa-brooks",
    name: "Lisa Brooks",
    role: "Content Creator",
    handle: "@lisabrooks",
    image: "/images/creator-lisa.jpg",
    verified: true,
    category: "Lifestyle",
    followers: "1.1M",
    engagement: "7.4%",
    bio: "Viral digital creative specializing in short-form comedy, relatable commentary, and trending audio narratives."
  },
  {
    id: "chloe-parker",
    name: "Chloe Parker",
    role: "Food & Lifestyle Creator",
    handle: "@chloeparker_eats",
    image: "/images/creator-chloe.jpg",
    verified: true,
    category: "Food",
    followers: "1.6M",
    engagement: "9.8%",
    bio: "Culinary explorer reviewing world gastronomy, farm-to-table cuisine, and craft kitchen innovations."
  }
];
