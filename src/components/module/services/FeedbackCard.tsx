"use client";
import { AnimatedTestimonials } from "@/components/ui/shadcn-io/animated-testimonials";
import { reviews } from "@/constants/reviews";

const FeedbackCard = () => {
  return (
    <div>
      <AnimatedTestimonials testimonials={reviews} />
    </div>
  );
};

export default FeedbackCard;
