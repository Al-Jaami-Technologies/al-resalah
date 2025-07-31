import React from "react";

const Cards = () => {
  return (
    <section className="py-10 px-4">
  <div className="max-w-[1200px] mx-auto">
    <h1 className="text-center deep-green font-bold text-[28px] sm:text-[32px] md:text-[36px] mt-6 sm:mt-10">
      আমাদের সদস্যবৃন্দ
    </h1>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
      
      {/* Card */}
      <div className="bg-[#F1FAED] rounded-xl h-[420px] px-4 pt-6 flex flex-col items-center transition-all duration-300 lg:hover:scale-[1.05] lg:hover:shadow-lg">
        <div className="w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] bg-white rounded-full mb-4"></div>
        <p className="text-[16px] font-bold text-[#096843] text-center">
          আমাদের সদস্যবৃন্দ
        </p>
      </div>

      {/* Repeat 3 more cards */}
      <div className="bg-[#F1FAED] rounded-xl h-[420px] px-4 pt-6 flex flex-col items-center transition-all duration-300 lg:hover:scale-[1.05] lg:hover:shadow-lg">
        <div className="w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] bg-white rounded-full mb-4"></div>
        <p className="text-[16px] font-bold text-[#096843] text-center">
          আমাদের সদস্যবৃন্দ
        </p>
      </div>

      <div className="bg-[#F1FAED] rounded-xl h-[420px] px-4 pt-6 flex flex-col items-center transition-all duration-300 lg:hover:scale-[1.05] lg:hover:shadow-lg">
        <div className="w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] bg-white rounded-full mb-4"></div>
        <p className="text-[16px] font-bold text-[#096843] text-center">
          আমাদের সদস্যবৃন্দ
        </p>
      </div>

      <div className="bg-[#F1FAED] rounded-xl h-[420px] px-4 pt-6 flex flex-col items-center transition-all duration-300 lg:hover:scale-[1.05] lg:hover:shadow-lg">
        <div className="w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] bg-white rounded-full mb-4"></div>
        <p className="text-[16px] font-bold text-[#096843] text-center">
          আমাদের সদস্যবৃন্দ
        </p>
      </div>
    </div>
  </div>
</section>


  );
};

export default Cards;
