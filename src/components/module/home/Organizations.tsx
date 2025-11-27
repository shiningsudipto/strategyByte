"use client";
import {
  Marquee,
  MarqueeContent,
  // MarqueeFade,
  MarqueeItem,
} from "@/components/ui/kibo-ui/marquee";
import Image from "next/image";

const organizationsList = [
  {
    id: 1,
    img: "/organizations/alexander-rodriguez.png",
    alt: "Alexander Rodriguez",
  },
  {
    id: 2,
    img: "/organizations/care-around-you.png",
    alt: "Care Around You",
  },
  {
    id: 3,
    img: "/organizations/disacare-solution.png",
    alt: "Disacare Solution",
  },
  {
    id: 4,
    img: "/organizations/dudley-lai.png",
    alt: "Dudley Lai",
  },
  {
    id: 5,
    img: "/organizations/ecs.png",
    alt: "ECS",
  },
  {
    id: 6,
    img: "/organizations/ford.png",
    alt: "Ford",
  },
  {
    id: 7,
    img: "/organizations/gelatissimo.png",
    alt: "Gelatissimo",
  },
  {
    id: 8,
    img: "/organizations/jeep.png",
    alt: "Jeep",
  },
  {
    id: 9,
    img: "/organizations/peugeot.png",
    alt: "Peugeot",
  },
  {
    id: 10,
    img: "/organizations/property-to-freedom.png",
    alt: "Property to Freedom",
  },
  {
    id: 11,
    img: "/organizations/red-bull.png",
    alt: "Red Bull",
  },
  {
    id: 12,
    img: "/organizations/sesame-workshop-bangladesh.png",
    alt: "Sesame Workshop Bangladesh",
  },
  {
    id: 13,
    img: "/organizations/slu-softball.png",
    alt: "SLU Softball",
  },
  {
    id: 14,
    img: "/organizations/the-daily-star.png",
    alt: "The Daily Star",
  },
  {
    id: 15,
    img: "/organizations/wheres-your-head-at.png",
    alt: "Where's Your Head At",
  },
];

const Organizations = ({ title }: { title?: string }) => {
  return (
    <div className="py-20">
      <h2 className="text-center text-neutral-500 mb-5">
        {title ? (
          title
        ) : (
          <>
            Trust By <span className="font-bold">30+ organizations</span>
          </>
        )}
      </h2>
      <Marquee>
        {/* <MarqueeFade side="left" />
        <MarqueeFade side="right" /> */}
        <MarqueeContent className="">
          {organizationsList.map((item) => (
            <MarqueeItem className="px-5" key={item?.id}>
              <Image
                src={item?.img}
                alt={item?.alt}
                height={60}
                width={300}
                className="w-full h-9"
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
};

export default Organizations;
