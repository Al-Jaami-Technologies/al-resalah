import React from "react";

const Downcards = () => {
  return (
    <section>
  <div>
    <center>
      <h1 className="font-hind-siliguri font-bold text-[28px] sm:text-[32px] md:text-[36px] deep-green mb-6 sm:mb-7 px-4">
        জেনে নিন আপনার প্রয়োজনীয় তথ্য
      </h1>
    </center>

    <div className="max-w-[1200px] m-auto px-4 space-y-4">
      {/* Demi Cards 1-4 */}
      {[
        "ডিজিটালসি অনুমোদিত",
        "সব অপারেটরের সরাসরি পার্টনারশিপ",
        "বাংলাদেশের সর্বনিম্ন দামে এসএমএস প্রতিযোগীদের চেয়ে ৫০% সস্তা!",
        "সব অপারেটরের সরাসরি পার্টনারশিপ",
      ].map((text, index) => (
        <div
          key={index}
          className="custom-card w-full rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] border-[#81cb2d] border-t-[1px] px-4 sm:px-5 md:px-6 py-3 sm:py-4 bg-white flex items-start sm:items-center gap-3 sm:gap-4 min-h-[80px]"
        >
          <div className="w-[38px] sm:w-[40px] md:w-[43px] h-[38px] sm:h-[40px] md:h-[43px] border-2 border-[#81cb2d] rounded-full flex items-center justify-center text-[#006400] text-[16px] sm:text-[18px] md:text-[20px] font-bold shrink-0">
            <p>{["০১", "০২", "০৩", "০৪"][index]}</p>
          </div>
          <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold deep-green font-hind-siliguri leading-snug">
            {text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Downcards;
