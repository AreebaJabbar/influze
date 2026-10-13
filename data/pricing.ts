export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Plan",
    price: "$19",
    period: "/Month",
    description: "Lorem ipsum dolor sit amet, consectetur elit.",
    isPopular: false,
    features: [
      "Up To 3 Influencer Collaborations",
      "Campaign Strategy Consultation",
      "Content Performance Report",
      "Email Support"
    ],
    ctaText: "Choose Plan"
  },
  {
    id: "growth",
    name: "Growth Plan",
    price: "$26",
    period: "/Month",
    description: "Lorem ipsum dolor sit amet, consectetur elit.",
    isPopular: true,
    features: [
      "Up To 8 Influencer Collaborations",
      "Campaign Strategy Consultation",
      "Content Performance Report",
      "Email Support"
    ],
    ctaText: "Choose Plan"
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: "$36",
    period: "/Month",
    description: "Lorem ipsum dolor sit amet, consectetur elit.",
    isPopular: false,
    features: [
      "Up To 3 Influencer Collaborations",
      "Campaign Strategy Consultation",
      "Content Performance Report",
      "Email Support"
    ],
    ctaText: "Choose Plan"
  }
];
