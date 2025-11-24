import React from 'react';

const benefits = [
  {
    title: 'Culture',
    description:
      'We strive to keep a relax work environment and warm culture to keep minimum stress level.',
  },
  {
    title: 'Creative Freedom',
    description:
      'Every brain has different approach towards a goal and we are always eager to hear new ideas.',
  },
  {
    title: 'Growth',
    description:
      'We work on varied projects with different clients that allows us to broaden our vision.',
  },
  {
    title: 'Balance',
    description:
      "Work-life balance is not a myth here, it's a reality. And we ensure to offer you maximum balance.",
  },
  {
    title: 'Remote Working',
    description:
      'We offer full freedom in choosing places where you can work from, be it office or comfort of your home.',
  },
  {
    title: 'Inclusive',
    description:
      'We are an organisation that welcomes everyone as we believe that diversity breeds creativity.',
  },
];

const WhyJoinUs = () => {
  return (
    <section
      className="relative bg-[#091736] py-20 md:py-24 overflow-hidden"
      style={{
        backgroundImage: 'url(/vectors/polkadots.png)',
        backgroundSize: '96%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
          {/* Section Header */}
          <div className="w-full">
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[78px] font-bold text-white">
              Why Join us?
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="flex flex-col gap-3 md:gap-2">
            {/* First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-2">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 min-h-[240px] sm:min-h-[260px] md:h-80 flex flex-col justify-between"
                >
                  <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl leading-tight md:leading-[62px] lg:leading-[78px] font-semibold text-[#1f1e1d]">
                    {benefit.title}
                  </h3>
                  <p className="text-base sm:text-lg leading-6 sm:leading-7 md:leading-8 text-[#1f1e1d]">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-2">
              {benefits.slice(3, 6).map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 min-h-[240px] sm:min-h-[260px] md:h-80 flex flex-col justify-between"
                >
                  <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl leading-tight md:leading-[62px] lg:leading-[78px] font-semibold text-[#1f1e1d]">
                    {benefit.title}
                  </h3>
                  <p className="text-base sm:text-lg leading-6 sm:leading-7 md:leading-8 text-[#1f1e1d]">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
