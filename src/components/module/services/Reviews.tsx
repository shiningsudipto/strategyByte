import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/ui/kibo-ui/marquee";
import { reviews } from "@/constants/reviews";
import { Quote } from "lucide-react";
import Image from "next/image";

const Reviews = () => {
  const ReviewerAvatar = ({ photo, name }: { photo: string; name: string }) => {
    if (photo) {
      return (
        <Image
          src={photo}
          alt={name}
          width={56}
          height={56}
          className="size-14 rounded-full object-cover"
        />
      );
    }

    return (
      <div className="size-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-200 flex items-center justify-center text-neutral-700 font-bold text-xl shrink-0">
        {name.charAt(0)}
      </div>
    );
  };
  return (
    <section className="bg-navy-bg section-gap-y">
      <div className="container section-gap lg:mb-20 mb-10 px-4 lg:px-0">
        <div className="text-white text-center">
          <h2 className="heading">Real Clients Reviews</h2>
          <p className="subheading">
            From startups to established brands, businesses across Australia
            trust StrategyByte to deliver <br /> results that matter.
          </p>
        </div>
      </div>
      <Marquee>
        <MarqueeContent pauseOnHover={true} pauseOnClick={true}>
          {reviews.map((item, index) => (
            <MarqueeItem
              key={index}
              className="bg-white p-8 rounded-[36px] w-[534px] min-h-[400px] flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote size={40} className="text-yellow-400 fill-yellow-100" />
              </div>

              {/* Review text */}
              <p className="text-neutral-700 text-lg leading-relaxed flex-1">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Reviewer info */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <div className="flex items-center gap-4">
                  <ReviewerAvatar photo={item.photo} name={item.name} />
                  <div className="flex flex-col">
                    <p className="text-neutral-800 text-lg font-semibold">
                      {item.name}
                    </p>
                    <p className="text-neutral-500 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </section>
  );
};

export default Reviews;
