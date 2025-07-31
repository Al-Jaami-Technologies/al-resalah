import React from 'react';

const Story = () => {
    return (
       <section className="max-w-[1200px] mx-auto px-4 py-8">
  <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
    {/* Text Content */}
    <div className="text-center lg:text-left">
      <h1 className="font-hind-siliguri font-bold text-[28px] md:text-[32px] lg:text-[36px] deep-green my-4">
        সফল গ্রাহকের গল্প
      </h1>
      <p className="font-hind-siliguri text-[18px] md:text-[20px] lg:text-[24px] font-medium text-[#435346]">
        রাত ১২টায়ও সমস্যা? আমাদের বাংলা-ভাষী টিম কল, WhatsApp, বা লাইভ চ্যাটে সাহায্য করবে। কষ্ট পেলে এক্কেবারে ফ্রি!
      </p>
    </div>

    {/* Image */}
    <div className="w-full max-w-[400px]">
      <img src="/images/about-us-page/storyimg.svg" alt="Customer Story" className="w-full h-auto" />
    </div>
  </div>
</section>

    );
};

export default Story;