import React from "react";

const Journyy = () => {
  return (
    <section>
  {/* Title */}
  <center>
    <h1 className="font-hind-siliguri font-bold text-[28px] md:text-[36px] deep-green mt-10 mb-7">
      আমাদের যাত্রাপথ
    </h1>
  </center>

  {/* Timeline */}
  <div className="w-full max-w-[945px] mx-auto px-4">
    <div className="relative h-auto">
      {/* Horizontal Line */}
      <div className="absolute top-[33px] left-0 right-0 h-[3px] bg_deep-green rounded-[40px] z-0 hidden sm:block"></div>

      {/* Circles */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-x-8 md:gap-x-24 lg:gap-x-40 gap-y-6 sm:gap-y-0 relative z-10">
        {/* Circle 1 */}
        <div className="flex flex-col items-center">
          <div className="w-[67px] h-[67px] border border-[#096843] rounded-full flex items-center justify-center font-roboto font-extrabold text-[20px] sec_bg deep-green shrink-0">
            2014
          </div>
          <p className="mt-2 text-center text-[16px] sm:text-[18px] font-medium deep-green w-[100px]">Founded in Dhaka</p>
        </div>

        {/* Circle 2 */}
        <div className="flex flex-col items-center">
          <div className="w-[67px] h-[67px] border border-[#096843] rounded-full flex items-center justify-center font-roboto font-extrabold text-[20px] sec_bg deep-green shrink-0">
            2020
          </div>
          <p className="mt-2 text-center text-[16px] sm:text-[18px] font-medium deep-green w-[100px]">Launched SMS Gateway</p>
        </div>

        {/* Circle 3 */}
        <div className="flex flex-col items-center">
          <div className="w-[67px] h-[67px] border border-[#096843] rounded-full flex items-center justify-center font-roboto font-extrabold text-[20px] sec_bg deep-green shrink-0">
            2024
          </div>
          <p className="mt-2 text-center text-[16px] sm:text-[18px] font-medium deep-green w-[100px]">1M+ SMS Daily</p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Journyy;
