import React from "react";

const Partner = () => {
  return (
    <section className="px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-[28px] md:text-[22px] font-medium ">
          The world's best companies trust Stellar.
        </h1>
      </div>

      {/* Logos (now using natural size) */}
      <div className="flex flex-wrap justify-center items-center gap-6 max-w-[1200px] mx-auto mb-8">
        {/* Logo 1 */}
        <div className="px-6 border-r border-gray-300">
          <img
            src="/images/heroPage/SVG1.svg"
            alt="Logo 1"
            className="object-contain"
          />
        </div>

        {/* Logo 2 */}
        <div className="px-6 border-r border-gray-300">
          <img
            src="/images/heroPage/SVG2.svg"
            alt="Logo 2"
            className="object-contain"
          />
        </div>

        {/* Logo 3 */}
        <div className="px-6 border-r border-gray-300">
          <img
            src="/images/heroPage/SVG3.svg"
            alt="Logo 3"
            className="object-contain"
          />
        </div>

        {/* Logo 4 */}
        <div className="px-6 border-r border-gray-300">
          <img
            src="/images/heroPage/SVG3.svg"
            alt="Logo 4"
            className="object-contain"
          />
        </div>

        {/* Logo 5 (no border on last item) */}
        <div className="px-6">
          <img
            src="/images/heroPage/SVG3.svg"
            alt="Logo 5"
            className="object-contain"
          />
        </div>
      </div>

      <p className="text-center text-[15px] mb-6 font-normal text-[#363D4F]">
        Stellar is used by over 55,000+ companies across the globe
      </p>

      <div className="text-center">
        <button
          className="bg_deep-green hover:bg-green-500 text-white px-6 py-3 rounded-full transition-all duration-300 transform cursor-pointer
  hover:scale-105 hover:shadow-md 
  active:scale-95 active:shadow-inner"
        >
          Start your Stellar Journey
        </button>
      </div>
    </section>
  );
};

export default Partner;
