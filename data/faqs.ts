export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const homeFaqs: FAQItem[] = [
  {
    id: "match-brands",
    question: "How Do You Match Brands With Influencers?",
    answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
  },
  {
    id: "platforms-supported",
    question: "What Social Media Platforms Do You Support?",
    answer: "We represent and run specialized campaigns across TikTok, Instagram, YouTube, Snapchat, and Twitch. Our multi-platform strategies ensure your message is adapted specifically to each platform's native content algorithms."
  },
  {
    id: "choose-influencers",
    question: "Can I Choose The Influencers For My Campaign?",
    answer: "Yes, absolutely! While our algorithm and talent directors provide curated recommendations based on your audience demographics, you retain full approval over all final talent selections and creative briefs."
  },
  {
    id: "measure-success",
    question: "How Do You Measure Campaign Success?",
    answer: "We supply transparent analytics dashboards tracking verified impressions, view-through rates, follower acquisition cost, coupon redemption codes, and complete conversion attribution from kick-off to post-campaign wrap."
  }
];

export const helpCenterFaqs: FAQItem[] = [
  {
    id: "contract-terms",
    question: "What Are Your Standard Campaign Contract Durations?",
    answer: "We structure flexible engagements ranging from single high-impact product launches to 12-month brand ambassador partnerships with guaranteed deliverable schedules."
  },
  {
    id: "content-licensing",
    question: "Who Owns The Rights To The Creator Content Produced?",
    answer: "Standard agreements grant full digital ad usage and whitelisting rights to your brand for 30 to 90 days, with extended global commercial buyout options available."
  },
  {
    id: "gifting-vs-paid",
    question: "Do You Support Organic Gifting As Well As Paid Placements?",
    answer: "Yes! We run seeded product seeding initiatives for emerging brands as well as large-scale paid roster activations for tier-one corporate advertisers."
  },
  {
    id: "creator-payment",
    question: "How Are Creator Payments Handled Securely?",
    answer: "All talent disbursements are held in milestone escrow accounts and released only upon full delivery, brand inspection, and metric verification."
  }
];
