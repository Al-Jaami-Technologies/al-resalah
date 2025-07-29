import React from "react";

const Journyy = () => {
  return (
    <section>
      {/* title */}
      <center>
        <h1 className="font-hind-siliguri font-bold text-[36px] deep-green mt-15 mb-7">
          আমাদের যাত্রাপথ
        </h1>
      </center>

      {/* <!-- test --> */}
      <div className="w-full max-w-[945px] mx-auto px-4">
        <div className="relative h-[80px]">
          {/* <!-- Horizontal Line --> */}
          <div className="absolute top-1/2 left-0 right-0 h-[3px] bg_deep-green rounded-[40px] z-0 transform -translate-y-1/2"></div>

          {/* <!-- Flex container for circles --> */}
          <div className="flex justify-center items-center gap-x-8 md:gap-x-24 lg:gap-x-40 h-full relative z-10">
            {/* <!-- Circle 1 --> */}
            <div className="w-[67px] h-[67px] border border-[#096843] rounded-full flex items-center justify-center font-roboto font-extrabold text-[20px] sec_bg shrink-0 deep-green">
              2014
            </div>

            {/* <!-- Circle 2 --> */}
            <div className="w-[67px] h-[67px] border border-[#096843] rounded-full flex items-center justify-center text-[20px] sec_bg shrink-0 font-roboto font-extrabold deep-green">
              2020
            </div>

            {/* <!-- Circle 3 --> */}
            <div className="w-[67px] h-[67px] border border-[#096843] rounded-full flex items-center justify-center text-[20px] sec_bg shrink-0 font-roboto font-extrabold deep-green">
              2024
            </div>
          </div>
        </div>

        {/* <!-- Text below circles --> */}
        <div className="flex justify-center gap-x-8 md:gap-x-24 lg:gap-x-40 text-center mt-4 px-2 text-sm flex-wrap">
          <p className="w-[67px] font-medium text-[20px] deep-green">Founded in Dhaka</p>
          <p className="w-[67px] font-medium text-[20px] deep-green">Launched SMS Gateway</p>
          <p className="w-[67px] font-medium text-[20px] deep-green">1M+ SMS Daily</p>
        </div>
      </div>
    </section>
  );
};

export default Journyy;
