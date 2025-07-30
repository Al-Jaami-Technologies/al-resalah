import React from "react";

const ContactLocation = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4">
  <div className="flex flex-col lg:flex-row border border-[#81CB2D] rounded-[12px] justify-between items-start lg:items-center my-6 p-6 gap-6">
    
    {/* Location Section */}
    <div className="flex-1 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start lg:items-center">
        <div>
          <h1 className="font-hind-siliguri font-bold text-[24px] deep-green pb-1">
            আমাদের অফিস
          </h1>
          <p className="font-roboto font-normal text-[16px] text-[#435346] py-3 max-w-[250px]">
            Blackburn Road, Houghton Regis, Dunstable LU5 5BQ, UK
          </p>
        </div>
        <img
          src="/images/contact-us-page/location.svg"
          alt="location"
          className="mt-4 sm:mt-0 w-[60px] lg:w-auto"
        />
      </div>

      <div className="mt-6">
        <h1 className="font-hind-siliguri font-bold text-[24px] deep-green pb-3">
          সোশ্যাল মিডিয়া
        </h1>
        <div className="flex border max-w-[265px] py-3 justify-around rounded-[10px] border-[#E5E5E5]">
  <img
    className="cursor-pointer transition-transform duration-200 hover:scale-110"
    src="/images/contact-us-page/facebook.svg"
    alt="facebook"
  />
  <img
    className="cursor-pointer transition-transform duration-200 hover:scale-110"
    src="/images/contact-us-page/whatsapp.svg"
    alt="whatsapp"
  />
  <img
    className="cursor-pointer transition-transform duration-200 hover:scale-110"
    src="/images/contact-us-page/insta.svg"
    alt="instagram"
  />
  <img
    className="cursor-pointer transition-transform duration-200 hover:scale-110"
    src="/images/contact-us-page/X.svg"
    alt="twitter"
  />
</div>

      </div>
    </div>

    {/* Vertical Line */}
    <div className="hidden lg:block w-[2px] h-[364px] bg-[#096843] mx-6"></div>

    {/* Form Section */}
    <div className="flex-1 w-full">
      <div className="flex flex-col sm:flex-row mt-3 gap-4">
        <div className="flex-1">
          <label htmlFor="name" className="block mb-1">
            নাম
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 rounded-[6px] bg-[#EFF9E5] px-3 py-2 w-full"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="number" className="block mb-1">
            ফোন
          </label>
          <input
            type="tel"
            id="number"
            className="border border-gray-300 rounded-[6px] bg-[#EFF9E5] px-3 py-2 w-full"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="email" className="block mb-1">
          ই-মেইল
        </label>
        <input
          type="email"
          id="email"
          className="border border-gray-300 rounded-[6px] bg-[#EFF9E5] px-3 py-2 w-full"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="block mb-1">
          মেসেজ লিখুন
        </label>
        <textarea
          id="message"
          className="border border-gray-300 rounded-[6px] bg-[#EFF9E5] px-3 py-2 w-full h-[144px]"
        ></textarea>
      </div>

      <div className="mt-4">
        <button className="btn btn-success block bg_deep-green text-white w-full cursor-pointer rounded-[6px] h-[48px]
  transition-all duration-300 transform
  hover:scale-105 hover:shadow-md
  active:scale-95 active:shadow-inner">
  মেসেজ পাঠান
</button>

      </div>
    </div>
  </div>
</section>


  );
};

export default ContactLocation;
