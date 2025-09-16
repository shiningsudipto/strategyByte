"use client";
import AlexanderRodriguez from "@/assets/organizations/Alexander Rodriguez.png";
import CareAroundYou from "@/assets/organizations/Care Around You.png";
import DisacareSolution from "@/assets/organizations/Disacare Solution.png";
import DudleyLai from "@/assets/organizations/Dudley Lai.png";
import ECS from "@/assets/organizations/ECS.png";
import Ford from "@/assets/organizations/Ford.png";
import Gelatissimo from "@/assets/organizations/Gelatissimo.png";
import Jeep from "@/assets/organizations/Jeep.png";
import Peugeot from "@/assets/organizations/Peugeot.png";
import PropertyToFreedom from "@/assets/organizations/Property to Freedom.png";
import RedBull from "@/assets/organizations/Red Bull.png";
import SesameWorkshopBangladesh from "@/assets/organizations/Sesame Workshop Bangladesh.png";
import SLUSoftball from "@/assets/organizations/SLU Softball.png";
import TheDailyStar from "@/assets/organizations/The Daily Star.png";
import WheresYourHeadAt from "@/assets/organizations/Where's Your Head At.png";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/kibo-ui/marquee";
import Image from "next/image";

const organizationsList = [
  {
    id: 1,
    img: AlexanderRodriguez,
    alt: "Alexander Rodriguez",
  },
  {
    id: 2,
    img: CareAroundYou,
    alt: "Care Around You",
  },
  {
    id: 3,
    img: DisacareSolution,
    alt: "Disacare Solution",
  },
  {
    id: 4,
    img: DudleyLai,
    alt: "Dudley Lai",
  },
  {
    id: 5,
    img: ECS,
    alt: "ECS",
  },
  {
    id: 6,
    img: Ford,
    alt: "Ford",
  },
  {
    id: 7,
    img: Gelatissimo,
    alt: "Gelatissimo",
  },
  {
    id: 8,
    img: Jeep,
    alt: "Jeep",
  },
  {
    id: 9,
    img: Peugeot,
    alt: "Peugeot",
  },
  {
    id: 10,
    img: PropertyToFreedom,
    alt: "Property to Freedom",
  },
  {
    id: 11,
    img: RedBull,
    alt: "Red Bull",
  },
  {
    id: 12,
    img: SesameWorkshopBangladesh,
    alt: "Sesame Workshop Bangladesh",
  },
  {
    id: 13,
    img: SLUSoftball,
    alt: "SLU Softball",
  },
  {
    id: 14,
    img: TheDailyStar,
    alt: "The Daily Star",
  },
  {
    id: 15,
    img: WheresYourHeadAt,
    alt: "Where's Your Head At",
  },
];

const Organizations = () => {
  return (
    <div className="py-20">
      <h2 className="text-center text-neutral-500 mb-5">
        Trust By <span className="font-bold">30+ organizations</span>
      </h2>
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent className="">
          {organizationsList.map((item) => (
            <MarqueeItem className="px-5" key={item?.id}>
              <Image
                src={item?.img}
                alt={item?.alt}
                height={36}
                width={100}
                className="w-auto h-9"
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
};

export default Organizations;
