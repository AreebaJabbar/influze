export interface TestimonialReview {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  rating: number;
  content: string;
}

export const reviewsData: TestimonialReview[] = [
  {
    id: "rev-1",
    name: "JOHN DOE",
    role: "Designation",
    avatar: "/images/creator-sophia.jpg",
    rating: 5,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: "rev-2",
    name: "JOHN DOE",
    role: "Designation",
    avatar: "/images/creator-lucas.jpg",
    rating: 5,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

export const videoTestimonialData = {
  creatorName: "Sarah Johnson",
  role: "Founder, FitFuel",
  verified: true,
  rating: "5.0",
  image: "/images/testimonial-video.jpg",
  quote: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.”"
};
