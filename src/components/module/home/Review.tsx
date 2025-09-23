import brandImg1 from "@/assets/brands/dropbox.png";
import brandImg2 from "@/assets/brands/microsoft.png";
import brandImg3 from "@/assets/brands/slack.png";
import brandImg4 from "@/assets/brands/spotify.png";
import avatarImg1 from "@/assets/avatars/avatar1.png";
import avatarImg2 from "@/assets/avatars/avatar2.png";
import avatarImg3 from "@/assets/avatars/avatar3.png";
import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/ui/kibo-ui/marquee";
import Image from "next/image";

const Review = () => {
  const testimonials = [
    {
      id: 1,
      brand: brandImg1,
      review:
        "StrategyByte helped us optimize campaigns with data-driven insights. We saw immediate ROI improvements.",
      name: "Emily Johnson",
      avatar: avatarImg1,
      position: "Marketing Manager at Google",
    },
    {
      id: 2,
      brand: brandImg2,
      review:
        "Their approach to growth is refreshing and results-oriented. Our engagement metrics skyrocketed.",
      name: "David Lee",
      avatar: avatarImg2,
      position: "Growth Lead at Meta",
    },
    {
      id: 3,
      brand: brandImg3,
      review:
        "We trusted StrategyByte for our new product launch, and they exceeded expectations.",
      name: "Sophia Martinez",
      avatar: avatarImg3,
      position: "Product Manager at Amazon",
    },
    {
      id: 4,
      brand: brandImg4,
      review:
        "The team delivered measurable results while being collaborative and transparent.",
      name: "James Wilson",
      avatar: avatarImg1,
      position: "Head of Strategy at Airbnb",
    },
    {
      id: 5,
      brand: brandImg1,
      review:
        "Excellent experience — the StrategyByte team really understands data-driven scaling.",
      name: "Olivia Chen",
      avatar: avatarImg2,
      position: "Senior Analyst at Microsoft",
    },
    {
      id: 6,
      brand: brandImg2,
      review:
        "They helped us reach new audiences with precision targeting and smart insights.",
      name: "Michael Brown",
      avatar: avatarImg3,
      position: "Creative Director at Netflix",
    },
    {
      id: 7,
      brand: brandImg3,
      review:
        "A great partner for growth marketing. Our subscriptions increased significantly.",
      name: "Ava Thompson",
      avatar: avatarImg1,
      position: "Marketing Strategist at Spotify",
    },
    {
      id: 8,
      brand: brandImg4,
      review:
        "Innovative, agile, and data-backed — they align perfectly with how we build products.",
      name: "Daniel Carter",
      avatar: avatarImg2,
      position: "Product Lead at Tesla",
    },
  ];

  return (
    <section className="py-40 bg-navy-bg text-white">
      <div className="container">
        <div className="section-gap text-center">
          <h2 className="font-chopin text-[56px] font-bold">
            Results That <br /> Speak for Themselves
          </h2>
          <p className="text-xl mt-4">
            From startups to established brands, businesses across Australia
            trust StrategyByte to deliver <br /> results that matter.
          </p>
        </div>
        <div className="space-y-2 mt-20">
          <Marquee>
            <MarqueeContent pauseOnHover={false} pauseOnClick={false}>
              {testimonials.map((item) => (
                <MarqueeItem
                  key={item?.id}
                  className="bg-white p-6 rounded-[36px] w-[534px] h-[520px] flex flex-col"
                >
                  <div>
                    <Image
                      src={item?.brand}
                      alt={item?.position}
                      height={48}
                      width={90}
                      className="w-auto h-12"
                    />
                  </div>

                  <p className="text-neutral-300 text-2 font-semibold mt-10">
                    {item.review}
                  </p>

                  {/* footer */}
                  <div className="flex gap-4 mt-auto">
                    <Image
                      src={item?.avatar}
                      alt={item?.name}
                      height={56}
                      width={56}
                      className="rounded-full"
                    />
                    <div className="flex flex-col items-start gap-2">
                      <p className="text-neutral-700 text-xl font-semibold">
                        {item.name}
                      </p>
                      <p className="text-neutral-500 text-sm">
                        {item.position}
                      </p>
                    </div>
                  </div>
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>
          <Marquee>
            <MarqueeContent
              pauseOnHover={false}
              pauseOnClick={false}
              direction="right"
            >
              {testimonials.map((item) => (
                <MarqueeItem
                  key={item?.id}
                  className="bg-white p-6 rounded-[36px] w-[534px] h-[520px] flex flex-col"
                >
                  <div>
                    <Image
                      src={item?.brand}
                      alt={item?.position}
                      height={48}
                      width={90}
                      className="w-auto h-12"
                    />
                  </div>

                  <p className="text-neutral-300 text-2 font-semibold mt-10">
                    {item.review}
                  </p>

                  {/* footer */}
                  <div className="flex gap-4 mt-auto">
                    <Image
                      src={item?.avatar}
                      alt={item?.name}
                      height={56}
                      width={56}
                      className="rounded-full"
                    />
                    <div className="flex flex-col items-start gap-2">
                      <p className="text-neutral-700 text-xl font-semibold">
                        {item.name}
                      </p>
                      <p className="text-neutral-500 text-sm">
                        {item.position}
                      </p>
                    </div>
                  </div>
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Review;
