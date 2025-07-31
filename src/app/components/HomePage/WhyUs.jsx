import React from "react";

const WhyUs = () => {
  return (
    // title
    <section className="whyus px-4 py-10">
  <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-center h-auto lg:h-[46.9375rem] gap-10">
    {/* Title */}
    <div className="w-full lg:w-1/3 text-center lg:text-left">
      <h1 className="text-[30px] lg:text-[40px] font-hind-siliguri font-bold leading-snug text-center deep-green">
        কেন<span className="light-green"> আল রেসালাহ</span> বাংলাদেশের{" "}
        <br className="hidden lg:block" />
        <span className="light-green">সেরা এসএমএস</span> গেটওয়ে?
      </h1>
    </div>

    {/* Middle Column */}
    <div className="w-full lg:w-1/3 flex flex-col px-0 lg:pl-10 font-hind-siliguri deep-green">
      {/* Step 01 */}
      <div className="flex items-center gap-4 border-[#096843] pt-4 pb-4">
        <div className="w-[43px] h-[43px] min-w-[43px] border-2 border-[#81cb2d] rounded-full flex items-center justify-center text-[#006400] text-[20px] font-bold font-hind-siliguri">
          <p>০১</p>
        </div>
        <div>
          <h2 className="text-[20px] font-hind-siliguri font-bold">রেজিস্ট্রেশন করুন</h2>
          <p className="text-[14px] font-hind-siliguri my-2">কী করবেন:</p>
          <ul className="text-[14px] font-hind-siliguri list-none pl-0 py-1">
            <li className="py-0.5"><strong>১.</strong> www.alresalah.com এ যান</li>
            <li className="py-0.5"><strong>২.</strong> <strong>"নতুন অ্যাকাউন্ট খুলুন"</strong> বাটনে ক্লিক করুন</li>
            <li className="py-0.5"><strong>৩.</strong> তথ্য দিয়ে ফর্ম পূরণ করুন</li>
          </ul>
        </div>
      </div>

      {/* Step 02 */}
      <div className="flex items-center gap-4 border-t-2 border-[#096843] pt-4 pb-4">
        <div className="w-[43px] h-[43px] min-w-[43px] border-2 border-[#81cb2d] rounded-full flex items-center justify-center text-[#006400] text-[20px] font-bold font-hind-siliguri">
          <p>০২</p>
        </div>
        <div>
          <h2 className="text-[20px] font-hind-siliguri font-bold">এসএমএস লিখুন</h2>
          <p className="text-[14px] font-hind-siliguri my-2">কী করবেন:</p>
          <ul className="text-[14px] list-none pl-0 font-hind-siliguri py-1">
            <li className="py-0.5"><strong>১.</strong> ড্যাশবোর্ডে <strong>"এসএমএস পাঠান"</strong> অপশনে ক্লিক করুন</li>
            <li className="py-0.5"><strong>২.</strong> রিসিপিয়েন্ট নম্বর, মেসেজ (বাংলা/ইংরেজি), এবং সেন্ডার আইডি লিখুন</li>
            <li className="py-0.5"><strong>৩.</strong> <strong>ফ্রি ক্রেডিট ব্যবহার</strong> করে পাঠিয়ে দিন!</li>
          </ul>
        </div>
      </div>

      {/* Step 03 */}
      <div className="flex items-center gap-4 border-t-2 border-[#096843] pt-4 pb-4">
        <div className="w-[43px] h-[43px] min-w-[43px] border-2 border-[#81cb2d] rounded-full flex items-center justify-center text-[#006400] text-[20px] font-bold font-hind-siliguri">
          <p>০৩</p>
        </div>
        <div>
          <h2 className="text-[20px] font-hind-siliguri font-bold">রিচার্জ করুন</h2>
          <p className="text-[14px] font-hind-siliguri my-2">কী করবেন:</p>
          <ul className="text-[14px] list-none pl-0 font-hind-siliguri py-1">
            <li className="py-0.5"><strong>১.</strong> ড্যাশবোর্ডে <strong>"রিচার্জ"</strong> বাটনে ক্লিক করুন</li>
            <li className="py-0.5"><strong>২.</strong> <strong>যেকোনো অংক</strong> (১০ টাকা থেকে ১ লাখ টাকা) নির্বাচন করুন</li>
            <li className="py-0.5"><strong>৩.</strong> <strong>বিকাশ/নগদ/রকেট/</strong> ব্যাংক ট্রান্সফার দিয়ে পেমেন্ট করুন</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="w-full lg:w-1/3 border-t-2 lg:border-t-0 lg:border-l-2 border-[#096843] pt-6 lg:pt-0 lg:pl-6 deep-green font-hind-siliguri flex flex-col justify-center h-full">
      {/* Title and Number */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-[43px] h-[43px] min-w-[43px] border-2 border-[#81cb2d] rounded-full flex items-center justify-center text-[#006400] text-[20px] font-bold font-hind-siliguri">
          <p>০৪</p>
        </div>
        <h2 className="text-[20px] font-bold font-hind-siliguri">পাঠিয়ে দিন!</h2>
      </div>

      {/* API */}
      <div className="mb-5 pl-12 lg:pl-0">
        <p className="font-bold font-hind-siliguri text-[16px]">১: এপিআই ইন্টিগ্রেশন</p>
        <p className="text-[14px] font-hind-siliguri my-2">কী করবেন:</p>
        <ul className="text-[14px] list-none pl-0 font-hind-siliguri py-1">
          <li className="py-0.5"><strong>১.</strong> ড্যাশবোর্ড থেকে <strong>API ডকুমেন্টেশন ডাউনলোড</strong> করুন (বাংলা গাইড সহ)।</li>
          <li className="py-0.5"><strong>২.</strong> PHP, Python, বা Node.js কোড স্নিপেট কপি-পেস্ট করুন।</li>
          <li className="py-0.5"><strong>৩.</strong> ১০ মিনিটে সেটআপ শেষ!</li>
        </ul>
      </div>

      {/* Excel Upload */}
      <div className="pl-12 lg:pl-0">
        <p className="text-[16px] font-hind-siliguri font-bold">২: এক্সেল আপলোড</p>
        <p className="text-[14px] font-hind-siliguri my-2">কী করবেন:</p>
        <ul className="text-[14px] list-none pl-0 font-hind-siliguri py-1">
          <li className="py-0.5"><strong>১.</strong> ড্যাশবোর্ডে <strong>"বাল্ক এসএমএস"</strong> অপশনে ক্লিক করুন</li>
          <li className="py-0.5"><strong>২.</strong> এক্সেল ফাইল আপলোড করুন (নম্বর + মেসেজ কলাম সহ)</li>
          <li className="py-0.5"><strong>৩.</strong> ১০০০+ এসএমএস এক ক্লিকে পাঠান!</li>
        </ul>
      </div>
    </div>
  </div>
</section>

  );
};

export default WhyUs;
