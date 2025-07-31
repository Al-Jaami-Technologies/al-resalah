import React from "react";

const AboutBanner = ({ mtitle }) => {
  return (
    <section class="ab_sec bg-white px-4">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="font-hind-siliguri font-bold text-[22px] sm:text-[26px] md:text-[32px] lg:text-[40px] xl:text-[48px] deep-green pt-[30px] leading-snug w-full lg:w-2/3">
          বাংলাদেশের<span className="light-green"> ব্যবসায়ীদের</span> সাথে
          যুক্ত হয়ে
          <span className="light-green"> ডিজিটাল সমাধান</span> দেওয়ার
          প্রতিশ্রুতি
        </h1>

        <p className="font-hind-mysuru font-regular text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] deep-green pt-6 pb-20">
          "১০ বছর ধরে ১০,০০০+ ক্লায়েন্টের আস্থা"
        </p>
      </div>
    </section>
  );
};

export default AboutBanner;
