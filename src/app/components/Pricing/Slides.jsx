import React from "react";

const Slides = () => {
  return (
    <section>
      <div className="mt-[45px]">
        <center>
          <h1 className="font-hind-siliguri font-bold text-[36px] deep-green mb-7">
            যত দরকার, তত এসএমএস!
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-[100px]">
            {/* Left Image */}
            <img
              src="/images/heroPage/reviewImg.svg"
              alt="Review 1"
              className="w-full max-w-[300px] md:max-w-[250px] object-contain"
            />

            {/* Middle (slightly bigger on desktop) */}
            <img
              src="/images/heroPage/reviewImg2.svg"
              alt="Review 2"
              className="w-full max-w-[300px] md:max-w-[300px] object-contain"
            />

            {/* Right Image */}
            <img
              src="/images/heroPage/reviewImg.svg"
              alt="Review 3"
              className="w-full max-w-[300px] md:max-w-[250px] object-contain"
            />
          </div>
        </center>
      </div>
    </section>
  );
};

export default Slides;
