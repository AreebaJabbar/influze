export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    slug: "how-influencer-marketing-drives-brand-growth",
    title: "How Influencer Marketing Drives Brand Growth",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    date: "Oct 10, 2026",
    readTime: "5 min read",
    category: "Strategy",
    image: "/images/blog-1.jpg",
    author: {
      name: "Marcus Vance",
      avatar: "/images/creator-ethan.jpg",
      role: "Head of Strategy"
    }
  },
  {
    id: "post-2",
    slug: "choosing-the-right-influencer-for-your-brand",
    title: "Choosing the Right Influencers for Your Specific Niche",
    excerpt: "Key metrics beyond vanity follower counts: how to audit comment sentiment, geographic density, and creator brand safety before signing.",
    date: "Oct 08, 2026",
    readTime: "4 min read",
    category: "Talent",
    image: "/images/blog-2.jpg",
    author: {
      name: "Sophia Carter",
      avatar: "/images/creator-sophia.jpg",
      role: "Talent Director"
    }
  },
  {
    id: "post-3",
    slug: "the-roi-of-micro-vs-macro-influencers",
    title: "The Real ROI of Micro vs. Macro Influencers in 2026",
    excerpt: "A deep dive into cost-per-engagement data across 450 recent agency campaigns comparing tier-one celebrities against dedicated community creators.",
    date: "Oct 05, 2026",
    readTime: "6 min read",
    category: "Analytics",
    image: "/images/blog-3.jpg",
    author: {
      name: "Naomi Mitchell",
      avatar: "/images/creator-naomi.jpg",
      role: "Insights Lead"
    }
  },
  {
    id: "post-4",
    slug: "mastering-short-form-video-algorithms",
    title: "Mastering TikTok and Reels Content Hooks for Direct Conversions",
    excerpt: "The first 3 seconds dictate your campaign reach. Learn the proven visual and auditory cues that convert casual scrollers into paying customers.",
    date: "Sep 28, 2026",
    readTime: "7 min read",
    category: "Production",
    image: "/images/blog-4.jpg",
    author: {
      name: "Lucas Anderson",
      avatar: "/images/creator-lucas.jpg",
      role: "Creative Director"
    }
  },
  {
    id: "post-5",
    slug: "navigating-ftc-guidelines-and-creator-contracts",
    title: "Best Practices for FTC Disclosures and Transparent Brand Deals",
    excerpt: "Stay ahead of regulatory compliance while maintaining engaging, authentic storytelling that respects both your audience and legal standards.",
    date: "Sep 22, 2026",
    readTime: "5 min read",
    category: "Legal & Ethics",
    image: "/images/blog-5.jpg",
    author: {
      name: "Ava Collins",
      avatar: "/images/creator-ava.jpg",
      role: "Brand Counsel"
    }
  },
  {
    id: "post-6",
    slug: "building-long-term-ambassador-ecosystems",
    title: "Why One-Off Sponsored Posts Fail and Ambassador Programs Win",
    excerpt: "Transforming transactional sponsorships into year-round collaborative ambassadorships that build compound brand loyalty and evergreen sales.",
    date: "Sep 15, 2026",
    readTime: "6 min read",
    category: "Partnerships",
    image: "/images/blog-6.jpg",
    author: {
      name: "Ethan Carter",
      avatar: "/images/creator-ethan.jpg",
      role: "Ecosystem Lead"
    }
  }
];
