import React from "react";

const WhyUs = () => {
  return (
    // title
    <section className="whyus px-4 py-10">
  <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-center h-auto lg:h-[46.9375rem] gap-10">

    {/* Title */}
    <div className="w-full lg:w-1/3 text-center lg:text-left">
      <h1 className="text-[30px] lg:text-[40px] font-bold leading-snug">
        কেন আল রেসালাহ বাংলাদেশের <br className="hidden lg:block" />
        সেরা এসএমএস গেটওয়ে?
      </h1>
    </div>

    {/* Middle Column */}
    <div className="w-full lg:w-1/3 flex flex-col gap-6 px-0 lg:px-10">
      
      {/* Step 01 */}
      <div className="flex items-start gap-4 border-b-2 pb-4">
        <div className="w-[43px] h-[43px] border-2 border-green-800 rounded-full flex items-center justify-center text-green-800 text-sm font-semibold">
          <p>01</p>
        </div>
        <div>
          <h2 className="text-[20px] font-semibold">রেজিস্ট্রেশন করুন</h2>
          <p className="text-[14px]">কী করবেন:</p>
          <ul className="text-[14px] list-disc pl-5">
            <li>১. www.alresalah.com এ যান</li>
            <li>২. "নতুন অ্যাকাউন্ট খুলুন" বাটনে ক্লিক করুন</li>
            <li>৩. তথ্য দিয়ে ফর্ম পূরণ করুন</li>
          </ul>
        </div>
      </div>

      {/* Step 02 */}
      <div className="flex items-start gap-4 border-b-2 pb-4">
        <div className="w-[43px] h-[43px] border-2 border-green-800 rounded-full flex items-center justify-center text-green-800 text-sm font-semibold">
          <p>02</p>
        </div>
        <div>
          <h2 className="text-[20px] font-semibold">এসএমএস লিখুন</h2>
          <p className="text-[14px]">কী করবেন:</p>
          <ul className="text-[14px] list-disc pl-5">
            <li>১. ড্যাশবোর্ডে "এসএমএস পাঠান" অপশনে ক্লিক করুন</li>
            <li>২. রিসিপিয়েন্ট নম্বর, মেসেজ (বাংলা/ইংরেজি), এবং সেন্ডার আইডি লিখুন</li>
            <li>৩. ফ্রি ক্রেডিট ব্যবহার করে পাঠিয়ে দিন!</li>
          </ul>
        </div>
      </div>

      {/* Step 03 */}
      <div className="flex items-start gap-4">
        <div className="w-[43px] h-[43px] border-2 border-green-800 rounded-full flex items-center justify-center text-green-800 text-sm font-semibold">
          <p>03</p>
        </div>
        <div>
          <h2 className="text-[20px] font-semibold">রিচার্জ করুন</h2>
          <p className="text-[14px]">কী করবেন:</p>
          <ul className="text-[14px] list-disc pl-5">
            <li>১. ড্যাশবোর্ডে "রিচার্জ" বাটনে ক্লিক করুন</li>
            <li>২. যেকোনো অংক (১০ টাকা থেকে ১ লাখ টাকা) নির্বাচন করুন</li>
            <li>৩. বিকাশ/নগদ/রকেট/ ব্যাংক ট্রান্সফার দিয়ে পেমেন্ট করুন</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="w-full lg:w-1/3 border-t-2 lg:border-t-0 lg:border-l-2 border-gray-300 pt-6 lg:pt-0 lg:pl-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-[43px] h-[43px] border-2 border-green-800 rounded-full flex items-center justify-center text-green-800 text-sm font-semibold">
          <p>04</p>
        </div>
        <div>
          <h2 className="text-[20px] font-semibold">পাঠিয়ে দিন!</h2>
        </div>
      </div>

      {/* API */}
      <div className="mb-5">
        <p className="text-[16px] font-medium">১: এপিআই ইন্টিগ্রেশন</p>
        <p className="text-[14px]">কী করবেন:</p>
        <ul className="text-[14px] list-disc pl-5">
          <li>ড্যাশবোর্ড থেকে API ডকুমেন্টেশন ডাউনলোড করুন (বাংলা গাইড সহ)</li>
          <li>PHP, Python, বা Node.js কোড স্নিপেট কপি-পেস্ট করুন</li>
          <li>১০ মিনিটে সেটআপ শেষ!</li>
        </ul>
      </div>

      {/* Excel Upload */}
      <div>
        <p className="text-[16px] font-medium">২: এক্সেল আপলোড</p>
        <p className="text-[14px]">কী করবেন:</p>
        <ul className="text-[14px] list-disc pl-5">
          <li>ড্যাশবোর্ডে "বাল্ক এসএমএস" অপশনে ক্লিক করুন</li>
          <li>এক্সেল ফাইল আপলোড করুন (নম্বর + মেসেজ কলাম সহ)</li>
          <li>১০০০+ এসএমএস এক ক্লিকে পাঠান!</li>
        </ul>
      </div>
    </div>

  </div>
</section>


  );
};

export default WhyUs;
