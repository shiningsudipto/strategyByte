import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/ui/kibo-ui/marquee";
import { testimonials } from "@/constants/services.constants";
import Image from "next/image";

const Reviews = () => {
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
                  <p className="text-neutral-500 text-sm">{item.position}</p>
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
