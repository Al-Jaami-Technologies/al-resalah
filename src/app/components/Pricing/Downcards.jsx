import React from "react";

const Downcards = () => {
  return (
    <section>
      <div>
        <center>
          <h1 className="font-hind-siliguri font-bold text-[36px] deep-green mb-7">
            জেনে নিন আপনার প্রয়োজনীয় তথ্য
          </h1>
        </center>

        <div className="max-w-[1200px] m-auto">
          {/* Demi Cards 1-4 */}
          {[
            "ডিজিটালসি অনুমোদিত",
            "সব অপারেটরের সরাসরি পার্টনারশিপ",
            "বাংলাদেশের সর্বনিম্ন দামে এসএমএস প্রতিযোগীদের চেয়ে ৫০% সস্তা!",
            "সব অপারেটরের সরাসরি পার্টনারশিপ",
          ].map((text, index) => (
            <div
              key={index}
              className="custom-card w-full rounded-[40px] border-[#81cb2d] border-t-[1px] px-6 py-4 bg-white flex items-center gap-4 min-h-[80px]"
            >
              <div className="w-[43px] h-[43px] border-2 border-[#81cb2d] rounded-full flex items-center justify-center text-[#006400] text-[20px] font-bold shrink-0">
                <p>{["০১", "০২", "০৩", "০৪"][index]}</p>
              </div>
              <p className="text-[24px] font-bold deep-green font-hind-siliguri leading-snug">
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
