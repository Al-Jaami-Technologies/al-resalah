import React from "react";

const Review = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10">
  <h1 className="text-[32px] md:text-[48px] font-bold  mb-10 leading-snug font-hind-siliguri deep-green ">
    কেন <span className="light-green">আল রেসালাহ</span> বাংলাদেশের <br className="hidden md:block" />
    <span className="light-green">সেরা এসএমএস</span> গেটওয়ে?
  </h1>

  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
    {/* Left Image */}
    <img
      src="/images/heroPage/reviewImg.svg"
      alt="Review 1"
      className="w-full max-w-[300px] md:max-w-[250px] object-contain"
    />

    {/* Middle (slightly bigger on desktop) */}
    <img
      src="/images/heroPage/reviewImg2.svg"
      alt="Review 2"
      className="w-full max-w-[300px] md:max-w-[300px] object-contain"
    />

    {/* Right Image */}
    <img
      src="/images/heroPage/reviewImg.svg"
      alt="Review 3"
      className="w-full max-w-[300px] md:max-w-[250px] object-contain"
    />
  </div>
</section>

  );
};

export default Review;
