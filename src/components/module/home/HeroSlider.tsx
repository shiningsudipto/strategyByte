"use client";

import TextType from "@/components/ui/TextType";

const HeroSlider = () => {
  return (
    <div className="section-gap border pt-[200px]">
      <div>
        <div>
          <h1 className="font-bold text-7xl">Unlock Your Online</h1>
          <TextType
            className="font-bold text-7xl"
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter=""
            text={["Potential.", "Growth.", "Business.", "Engagement."]}
          />
        </div>
        <p>
          Strategybyte helps Australian businesses grow with smart websites,
          targeted ads, and results-driven digital marketing.
        </p>
      </div>
      <div>
        <p>Brand</p>
        <p>Growth</p>
        <p>Design</p>
        <p>Development</p>
      </div>
    </div>
  );
};

export default HeroSlider;
