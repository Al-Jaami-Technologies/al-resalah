import React from "react";

const Cards = () => {
  return (
    <section>
      <center>
        <h1 className="deep-green font-bold text-[36px] mt-12">
          আমাদের সদস্যবৃন্দ
        </h1>
      </center>

          {/* cards */}
          <div class="max-w-[1200px] mx-auto px-4 py-10">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
    
    {/* <!-- Card --> */}
    <div class="bg-[#F1FAED] rounded-xl flex flex-col items-center py-8 px-4">
      <div class="w-[100px] h-[100px] bg-white rounded-full mb-4"></div>
      <p class="text-[16px] font-bold text-[#096843] text-center">আমাদের সদস্যবৃন্দ</p>
    </div>

    {/* <!-- Card --> */}
    <div class="bg-[#F1FAED] rounded-xl flex flex-col items-center py-8 px-4">
      <div class="w-[100px] h-[100px] bg-white rounded-full mb-4"></div>
      <p class="text-[16px] font-bold text-[#096843] text-center">আমাদের সদস্যবৃন্দ</p>
    </div>

    {/* <!-- Card --> */}
    <div class="bg-[#F1FAED] rounded-xl flex flex-col items-center py-8 px-4">
      <div class="w-[100px] h-[100px] bg-white rounded-full mb-4"></div>
      <p class="text-[16px] font-bold text-[#096843] text-center">আমাদের সদস্যবৃন্দ</p>
    </div>

    {/* <!-- Card --> */}
    <div class="bg-[#F1FAED] rounded-xl flex flex-col items-center py-8 px-4">
      <div class="w-[100px] h-[100px] bg-white rounded-full mb-4"></div>
      <p class="text-[16px] font-bold text-[#096843] text-center">আমাদের সদস্যবৃন্দ</p>
    </div>

  </div>
</div>

          










    </section>
  );
};

export default Cards;
