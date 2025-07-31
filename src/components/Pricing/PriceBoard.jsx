import React from "react";

const PriceBoard = () => {
  return (
   <section className="px-4 py-10 price_board">
  <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6">
    {/* Left Card */}
    <div className="w-full max-w-[300px] sm:max-w-[340px] md:max-w-[370px] h-auto lg:h-[565px] bg-white rounded-[20px] border border-gray-200 border-t-[3px] border-t-[#81CB2D] px-5 sm:px-6 py-6 flex flex-col justify-between shadow-sm mt-8 lg:mt-[62px]">
      <div>
        <h2 className="text-[24px] sm:text-[28px] lg:text-[40px] font-roboto font-bold text-[#1A662E] mb-2">
          {"<5000"}
        </h2>
        <div className="h-[1px] bg-[#9FBCB0] mb-4 mt-2 -ml-5 w-[200px] sm:w-[260px] md:w-[320px] lg:w-[324px]"></div>
        <p className="text-[13px] sm:text-[14px] text-[#435346] font-roboto my-5">www.alresalah.com এ যান</p>
        <div className="text-[14px] sm:text-[15px] text-[#435346] font-hind-siliguri leading-[22px] my-5">
          “<span className="font-bold">নতুন অরজিনালটি খুঁজুন</span>” বাটনে ক্লিক করুন<br />
          তথ্য দিয়ে ফর্ম পূরণ করুন
        </div>
        <div className="text-[14px] sm:text-[15px] text-[#435346] font-hind-siliguri leading-[22px] my-5">
          “<span className="font-bold">নতুন অরজিনালটি খুঁজুন</span>” বাটনে ক্লিক করুন<br />
          তথ্য দিয়ে ফর্ম পূরণ করুন
        </div>
        <div className="text-[14px] sm:text-[15px] font-bold deep-green font-hind-siliguri leading-[22px] my-5">
          "নতুন অ্যাকাউন্ট খুলুন" বাটনে ক্লিক করুন
        </div>
      </div>
      <div className="mt-2 mb-4 flex justify-end">
        <button className="bg_deep-green text-white font-roboto text-[14px] sm:text-[16px] py-[10px] px-[24px] rounded-[8px] hover:bg-green-600 cursor-pointer">
          ক্লিক করুন
        </button>
      </div>
    </div>

    {/* Middle Card */}
    <div className="w-full max-w-[300px] sm:max-w-[340px] md:max-w-[370px] h-auto lg:h-[565px] bg-white rounded-[20px] border border-gray-200 border-t-[3px] border-t-[#81CB2D] px-5 sm:px-6 py-6 flex flex-col justify-between shadow-sm">
      <div>
        <h2 className="text-[24px] sm:text-[28px] lg:text-[40px] font-roboto font-bold text-[#1A662E] mb-2">
          {"5001-10k"}
        </h2>
        <div className="h-[1px] bg-[#9FBCB0] mb-4 mt-2 -ml-5 w-[200px] sm:w-[260px] md:w-[320px] lg:w-[324px]"></div>
        <p className="text-[13px] sm:text-[14px] text-[#435346] font-roboto my-5">www.alresalah.com এ যান</p>
        <div className="text-[14px] sm:text-[15px] text-[#435346] font-hind-siliguri leading-[22px] my-5">
          “<span className="font-bold">ফর্ম পূরণ করুন</span>” এরপর সাবমিট করুন<br />
          তারপর ইমেইল চেক করুন
        </div>
        <div className="text-[14px] sm:text-[15px] text-[#435346] font-hind-siliguri leading-[22px] my-5">
          “<span className="font-bold">ফর্ম পূরণ করুন</span>” এরপর সাবমিট করুন<br />
          তারপর ইমেইল চেক করুন
        </div>
        <div className="text-[14px] sm:text-[15px] font-bold deep-green font-hind-siliguri leading-[22px] my-5">
          "নতুন রেজিস্ট্রেশন করুন" বাটনে ক্লিক করুন
        </div>
      </div>
      <div className="mt-2 mb-4 flex justify-end">
        <button className="bg_deep-green text-white font-roboto text-[14px] sm:text-[16px] py-[10px] px-[24px] rounded-[8px] hover:bg-green-600 cursor-pointer">
          ক্লিক করুন
        </button>
      </div>
    </div>

    {/* Right Card */}
    <div className="w-full max-w-[300px] sm:max-w-[340px] md:max-w-[370px] h-auto lg:h-[565px] bg-white rounded-[20px] border border-gray-200 border-t-[3px] border-t-[#81CB2D] px-5 sm:px-6 py-6 flex flex-col justify-between shadow-sm mt-8 lg:mt-[62px]">
      <div>
        <h2 className="text-[24px] sm:text-[28px] lg:text-[40px] font-roboto font-bold text-[#1A662E] mb-2">
          {">10k"}
        </h2>
        <div className="h-[1px] bg-[#9FBCB0] mb-4 mt-2 -ml-5 w-[200px] sm:w-[260px] md:w-[320px] lg:w-[324px]"></div>
        <p className="text-[13px] sm:text-[14px] text-[#435346] font-roboto my-5">www.alresalah.com এ যান</p>
        <div className="text-[14px] sm:text-[15px] text-[#435346] font-hind-siliguri leading-[22px] my-5">
          “<span className="font-bold">লগইন করুন</span>” তারপর<br />
          আপনার ড্যাশবোর্ড ব্যবহার করুন
        </div>
        <div className="text-[14px] sm:text-[15px] text-[#435346] font-hind-siliguri leading-[22px] my-5">
          “<span className="font-bold">লগইন করুন</span>” তারপর<br />
          আপনার ড্যাশবোর্ড ব্যবহার করুন
        </div>
        <div className="text-[14px] sm:text-[15px] font-bold deep-green font-hind-siliguri leading-[22px] my-5">
          "ড্যাশবোর্ডে যান" বাটনে ক্লিক করুন
        </div>
      </div>
      <div className="mt-2 mb-4 flex justify-end">
        <button className="bg_deep-green text-white font-roboto text-[14px] sm:text-[16px] py-[10px] px-[24px] rounded-[8px] hover:bg-green-600 cursor-pointer">
          ক্লিক করুন
        </button>
      </div>
    </div>
  </div>
</section>




  );
};

export default PriceBoard;
