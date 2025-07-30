import React from "react";

const Banner = () => {
  return (
    <section className="hero_sec px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col-reverse lg:flex-row max-w-[1200px] mx-auto items-center">
        {/* Text Section */}
        <div className="w-full lg:w-2/3 flex-1 font-hind-siliguri mt-6 lg:mt-0">
          <h1 className="font-bold text-[2.25rem] sm:text-[3rem] lg:text-[4.375rem] deep-green leading-tight mt-5">
            বাংলাদেশের<span className="light-green"> সবচেয়ে সাশ্রয়ী</span>{" "}
            এসএমএস সার্ভিস
          </h1>
          <p className="hind-siliguri-regular text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] mt-6 deep-green">
            "মাসে লাখো এসএমএস পাঠান? <br />
            আমাদের<span className="light-green"> Pay-As-You-Use</span> সিস্টেমে
            কিনুন<span className="light-green"> ০.২০</span> টাকায়!"
          </p>

          <ul className="hind-siliguri-regular text-[1rem] sm:text-[1.125rem] my-4 lg:mt-[27px] deep-green space-y-2">
            <li className="flex items-start space-x-2">
              <img
                src="/images/heroPage/right.svg"
                alt=""
                className="w-[20px] h-[20px] mt-1"
              />
              <span>
                কোনো প্রকার লুকানো ফি নেই, শুধু ব্যবহার অনুযায়ী পেমেন্ট!
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <img
                src="/images/heroPage/right.svg"
                alt=""
                className="w-[20px] h-[20px] mt-1"
              />
              <span>২৪/৭ গ্রাহক সেবা</span>
            </li>
            <li className="flex items-start space-x-2">
              <img
                src="/images/heroPage/right.svg"
                alt=""
                className="w-[20px] h-[20px] mt-1"
              />
              <span>বাংলাদেশজুড়ে SMS ডেলিভারি মাত্র ১ সেকেন্ডে!</span>
            </li>
          </ul>

          <button
            className="box-border rounded-lg bg-[rgb(9,104,67)] px-8 sm:px-[6rem] lg:px-[9.017rem] py-[1rem] lg:py-[1.25rem] cursor-pointer mt-4
  transition-all duration-300 transform 
  hover:scale-105 hover:shadow-md 
  active:scale-95 active:shadow-inner"
          >
            <span className="font-semibold text-[1.25rem] sm:text-[1.5rem] light-yellow">
              নতুন অ্যাকাউন্ট খুলুন
            </span>
          </button>

          <p className="deep-green font-semibold my-[15px] text">
            ফ্রি <span className="light-green"> ১৫০ এসএমএস পাবেন</span>{" "}
            রেজিস্ট্রেশন করলেই!
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center my-[15px]">
            <div className="pr-6 sm:pr-12 mb-3 sm:mb-0">
              <p className="roboto deep-green text-sm sm:text-base">
                Trusted by <br />
                leading companies
              </p>
            </div>
            <div className="flex items-center flex-wrap gap-x-6 gap-y-4">
              <img src="/images/heroPage/tlogo1.svg" alt="" />
              <img src="/images/heroPage/tlogo2.svg" alt="" />
              <img src="/images/heroPage/tlogo3.svg" alt="" />
              <img src="/images/heroPage/tlogo4.svg" alt="" />
              <img src="/images/heroPage/tlogo5.svg" alt="" />
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">
          <img
            src="/images/heroPage/hero-image.svg"
            alt=""
            className="w-full sm:w-2/3 lg:w-full mx-auto lg:mx-0 scale-100"
          />

          {/* Decorative Planes - only show on large screens */}
          <div className="hidden lg:block">
            <img
              src="/images/heroPage/yellow-plane.svg"
              alt=""
              className="absolute top-[39px] right-[327px] w-[9px] h-[9px]"
            />
            <img
              src="/images/heroPage/yellow-plane.svg"
              alt=""
              className="absolute top-[-4px] right-[290px] w-[11px] h-[11px]"
            />
            <img
              src="/images/heroPage/yellow-plane.svg"
              alt=""
              className="absolute top-[-25px] right-[313px] w-[11px] h-[11px]"
            />
            <img
              src="/images/heroPage/yellow-plane.svg"
              alt=""
              className="absolute top-[-35px] right-[276px] w-[12px] h-[12px]"
            />
            <img
              src="/images/heroPage/yellow-plane.svg"
              alt=""
              className="absolute top-[-33px] right-[240px] w-[15px] h-[15px]"
            />
            <img
              src="/images/heroPage/yellow-plane.svg"
              alt=""
              className="absolute top-[-98px] left-[130px] w-[16px] h-[16px]"
            />
            <img
              src="/images/heroPage/yellow-plane.svg"
              alt=""
              className="absolute top-[-108px] left-[176px] w-[20px] h-[20px]"
            />

            {/* green-plane */}
            <img
              src="/images/heroPage/gr-pln.svg"
              alt=""
              className="absolute top-[10px] left-[73px] w-[8px] h-[8px]"
            />
            <img
              src="/images/heroPage/gr-pln.svg"
              alt=""
              className="absolute top-[31px] left-[89px] w-[8px] h-[8px]"
            />
            <img
              src="/images/heroPage/gr-pln.svg"
              alt=""
              className="absolute top-[-11px] left-[132px] w-[8px] h-[8px]"
            />
            <img
              src="/images/heroPage/gr-pln.svg"
              alt=""
              className="absolute top-[-68px] left-[101px] w-[14px] h-[14px]"
            />
            <img
              src="/images/heroPage/gr-pln.svg"
              alt=""
              className="absolute top-[-66px] left-[141px] w-[16px] h-[16px]"
            />
            <img
              src="/images/heroPage/gr-pln.svg"
              alt=""
              className="absolute top-[-66px] left-[177px] w-[16px] h-[16px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
