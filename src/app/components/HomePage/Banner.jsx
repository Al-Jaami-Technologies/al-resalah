import React from "react";

const Banner = () => {
  return (
    <section className="hero_sec">
      <div className="flex max-w-[1200px] m-auto items-center">
        <div className="w-2/3 flex-1 font-hind-siliguri">
          <h1 className=" font-bold text-[4.375rem] mt-[17px] deep-green">
            বাংলাদেশের<span className="light-green"> সবচেয়ে সাশ্রয়ী</span>{" "}
            এসএমএস সার্ভিস
          </h1>
          <p className="hind-siliguri-regular text-[1.5rem] mt-[36px] deep-green">
            "মাসে লাখো এসএমএস পাঠান? <br />
            আমাদের<span className="light-green"> Pay-As-You-Use</span> সিস্টেমে
            কিনুন<span className="light-green"> ০.২০</span> টাকায়! git add"
          </p>
          
          
          <ul className="hind-siliguri-regular text-[1.125rem] my-[18px] deep-green mt-[27px]">
            <li className="flex items-start space-x-2">
              <img
                src="/images/heroPage/right.svg"
                alt=""
                className="w-[20px] h-[20px] mt-1"
              />
              কোনো প্রকার লুকানো ফি নেই, শুধু ব্যবহার অনুযায়ী পেমেন্ট!"
            </li>
            <li className="flex items-start space-x-2">
              <img
                src="/images/heroPage/right.svg"
                alt=""
                className="w-[20px] h-[20px] mt-1"
              />
              ২৪/৭ গ্রাহক সেবা
            </li>
            <li className="flex items-start space-x-2">
              <img
                src="/images/heroPage/right.svg"
                alt=""
                className="w-[20px] h-[20px] mt-1"
              />
              "বাংলাদেশজুড়ে SMS ডেলিভারি মাত্র ১ সেকেন্ডে!"
            </li>
          </ul>

          <button className="box-border rounded-lg bg-[rgb(9,104,67)] px-[9.017rem] py-[1.25rem] cursor-pointer">
            <span className="font-semibold bg-red text-[1.5rem] light-yellow">
              নতুন অ্যাকাউন্ট খুলুন
            </span>
          </button>
          <p className="deep-green font-semibold my-[15px] text">
            ফ্রি <span className="light-green"> ১৫০ এসএমএস পাবেন</span>{" "}
            রেজিস্ট্রেশন করলেই!
          </p>

          <div className="flex items-center my-[15px]">
            <div className="pr-12">
              <p className="roboto deep-green text-base">
                Trusted by <br />
                leading companies
              </p>
            </div>

            <div>
              <div className="flex items-center gap-x-12">
                <img src="./assecta/s-logo1.png" alt="" />
                <img src="./assecta/slogo2.png" alt="" />
                <img src="./assecta/slogo3.png" alt="" />
                <img src="./assecta/slogo4.png" alt="" />
                <img src="./assecta/slogo5.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3 relative">
          <img src="./assecta/hero.png" alt="" className="w-full scale-140" />

          <img
            src="./assecta/yellow-plane.png"
            alt=""
            className="absolute top-[39px] right-[327px] w-[9px] h-[9px]"
          />
          <img
            src="./assecta/yellow-plane.png"
            alt=""
            className="absolute top-[-4px] right-[290px] w-[11px] h-[11px]"
          />
          <img
            src="./assecta/yellow-plane.png"
            alt=""
            className="absolute top-[-25px] right-[313px] w-[11px] h-[11px]"
          />
          <img
            src="./assecta/yellow-plane.png"
            alt=""
            className="absolute top-[-35px] right-[276px] w-[12px] h-[12px]"
          />
          <img
            src="./assecta/yellow-plane.png"
            alt=""
            className="absolute top-[-33px] right-[240px] w-[15px] h-[15px]"
          />
          <img
            src="./assecta/yellow-plane.png"
            alt=""
            className="absolute top-[-98px] left-[130px] w-[16px] h-[16px]"
          />
          <img
            src="./assecta/yellow-plane.png"
            alt=""
            className="absolute top-[-108px] left-[176px] w-[20px] h-[20px]"
          />
          <img
            src="./assecta/green-plane.png"
            alt=""
            className="absolute top-[10px] left-[73px] w-[8px] h-[8px]"
          />
          <img
            src="./assecta/green-plane.png"
            alt=""
            className="absolute top-[31px] left-[89px] w-[8px] h-[8px]"
          />
          <img
            src="./assecta/green-plane.png"
            alt=""
            className="absolute top-[-11px] left-[132px] w-[8px] h-[8px]"
          />
          <img
            src="./assecta/green-plane.png"
            alt=""
            className="absolute top-[-68px] left-[101px] w-[14px] h-[14px]"
          />
          <img
            src="./assecta/green-plane.png"
            alt=""
            className="absolute top-[-66px] left-[141px] w-[16px] h-[16px]"
          />
          <img
            src="./assecta/green-plane.png"
            alt=""
            className="absolute top-[-66px] left-[177px] w-[16px] h-[16px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
