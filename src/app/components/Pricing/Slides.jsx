import React from "react";

const Slides = () => {
  return (
    <section>
  <div className="mt-[40px] sm:mt-[45px] px-4">
    <center>
      <h1 className="font-hind-siliguri font-bold text-[24px] sm:text-[30px] md:text-[32px] lg:text-[36px] deep-green mb-5 sm:mb-6 md:mb-7">
        যত দরকার, তত এসএমএস!
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-[60px] md:mb-[80px] lg:mb-[100px]">
        {/* Left Image */}
        <img
          src="/images/heroPage/reviewImg.svg"
          alt="Review 1"
          className="w-full max-w-[250px] sm:max-w-[280px] md:max-w-[250px] object-contain"
        />

        {/* Middle (slightly bigger on desktop) */}
        <img
          src="/images/heroPage/reviewImg2.svg"
          alt="Review 2"
          className="w-full max-w-[260px] sm:max-w-[290px] md:max-w-[300px] object-contain"
        />

        {/* Right Image */}
        <img
          src="/images/heroPage/reviewImg.svg"
          alt="Review 3"
          className="w-full max-w-[250px] sm:max-w-[280px] md:max-w-[250px] object-contain"
        />
      </div>
    </center>
  </div>
</section>

  );
};

export default Slides;
