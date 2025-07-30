import React from "react";

const PriceBoard = () => {
  return (
   <section className="px-4 py-10 price_board">
  <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-4">

    {/* Left Card - pushed down */}
    <div className="mt-[62px] w-[377px] h-[565px] bg-white rounded-[20px] border border-gray-200 border-t-[3px] border-t-[#81CB2D] px-6 py-6 flex flex-col justify-between shadow-sm">
      <div>
        <h2 className="text-[40px] font-roboto font-bold text-[#1A662E] mb-2">
          {"<5000"}
        </h2>
        <div className="h-[1px] bg-[#9FBCB0] mb-4 mt-2 -ml-6 w-[324px]"></div>
        <p className="text-[14px] text-[#435346] font-roboto my-5">
          www.alresalah.com এ যান
        </p>
        <div className="text-[16px] font-hind-siliguri text-[#435346] mb-3 leading-[22px] my-10">
          “<span className="font-bold">নতুন অরজিনালটি খুঁজুন</span>” বাটনে ক্লিক করুন<br />
          তথ্য দিয়ে ফর্ম পূরণ করুন
        </div>
        <div className="text-[16px] font-hind-siliguri text-[#435346] mb-3 leading-[22px] my-10">
          “<span className="font-bold">নতুন অরজিনালটি খুঁজুন</span>” বাটনে ক্লিক করুন<br />
          তথ্য দিয়ে ফর্ম পূরণ করুন
        </div>
        <div className="text-[16px] font-hind-siliguri font-bold deep-green leading-[22px] my-10">
          "নতুন অ্যাকাউন্ট খুলুন" বাটনে ক্লিক করুন
        </div>
      </div>
      <div className="mt-2 mb-5 flex justify-end">
        <button className="bg_deep-green text-white font-roboto text-[16px] py-[12px] px-[28px] rounded-[8px] hover:bg-green-600 cursor-pointer">
          ক্লিক করুন
        </button>
      </div>
    </div>

    {/* Middle Card - normal position */}
    <div className="w-[377px] h-[565px] bg-white rounded-[20px] border border-gray-200 border-t-[3px] border-t-[#81CB2D] px-6 py-6 flex flex-col justify-between shadow-sm">
      <div>
        <h2 className="text-[40px] font-roboto font-bold text-[#1A662E] mb-2">
          {"5001-10k"}
        </h2>
        <div className="h-[1px] bg-[#9FBCB0] mb-4 mt-2 -ml-6 w-[324px]"></div>
        <p className="text-[14px] text-[#435346] font-roboto my-5">
          www.alresalah.com এ যান
        </p>
        <div className="text-[16px] font-hind-siliguri text-[#435346] mb-3 leading-[22px] my-10">
          “<span className="font-bold">ফর্ম পূরণ করুন</span>” এরপর সাবমিট করুন<br />
          তারপর ইমেইল চেক করুন
        </div>
        <div className="text-[16px] font-hind-siliguri text-[#435346] mb-3 leading-[22px] my-10">
          “<span className="font-bold">ফর্ম পূরণ করুন</span>” এরপর সাবমিট করুন<br />
          তারপর ইমেইল চেক করুন
        </div>
        <div className="text-[16px] font-hind-siliguri font-bold deep-green leading-[22px] my-10">
          "নতুন রেজিস্ট্রেশন করুন" বাটনে ক্লিক করুন
        </div>
      </div>
      <div className="mt-2 mb-5 flex justify-end">
        <button className="bg_deep-green text-white font-roboto text-[16px] py-[12px] px-[28px] rounded-[8px] hover:bg-green-600 cursor-pointer">
          ক্লিক করুন
        </button>
      </div>
    </div>

    {/* Right Card - pushed down */}
    <div className="mt-[62px] w-[377px] h-[565px] bg-white rounded-[20px] border border-gray-200 border-t-[3px] border-t-[#81CB2D] px-6 py-6 flex flex-col justify-between shadow-sm">
      <div>
        <h2 className="text-[40px] font-roboto font-bold text-[#1A662E] mb-2">
          {">10k"}
        </h2>
        <div className="h-[1px] bg-[#9FBCB0] mb-4 mt-2 -ml-6 w-[324px]"></div>
        <p className="text-[14px] text-[#435346] font-roboto my-5">
          www.alresalah.com এ যান
        </p>
        <div className="text-[16px] font-hind-siliguri text-[#435346] mb-3 leading-[22px] my-10">
          “<span className="font-bold">লগইন করুন</span>” তারপর<br />
          আপনার ড্যাশবোর্ড ব্যবহার করুন
        </div>
        <div className="text-[16px] font-hind-siliguri text-[#435346] mb-3 leading-[22px] my-10">
          “<span className="font-bold">লগইন করুন</span>” তারপর<br />
          আপনার ড্যাশবোর্ড ব্যবহার করুন
        </div>
        <div className="text-[16px] font-hind-siliguri font-bold deep-green leading-[22px] my-10">
          "ড্যাশবোর্ডে যান" বাটনে ক্লিক করুন
        </div>
      </div>
      <div className="mt-2 mb-5 flex justify-end">
        <button className="bg_deep-green text-white font-roboto text-[16px] py-[12px] px-[28px] rounded-[8px] hover:bg-green-600 cursor-pointer">
          ক্লিক করুন
        </button>
      </div>
    </div>

  </div>
</section>


  );
};

export default PriceBoard;
