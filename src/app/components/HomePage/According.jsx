import React from "react";

const According = () => {
  return (
    <section className="w-full px-4 py-8 flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col gap-4">
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

        {/* Full Card 5 */}
<div
  className="custom-card w-full rounded-[40px] border-t-[1px] border-[#81cb2d] p-6 bg-white flex flex-col lg:flex-row lg:items-start justify-between gap-6 shadow-left-right"
  style={{
    height: 'auto',
    minHeight: '329px',
    borderBottom: 'none',
    boxShadow: '10px 0 15px -10px rgba(0, 0, 0, 0.08), -10px 0 15px -10px rgba(0, 0, 0, 0.08)',
  }}
>
  {/* Text Section with Number */}
  <div className="flex-1">
    <div className="flex items-start gap-3">
      <div className="w-[43px] h-[43px] border-2 border-[#81cb2d] rounded-full flex items-center justify-center text-green-800 text-[20px] font-bold shrink-0 mt-[3px]">
        <p>০৫</p>
      </div>
      <h1 className="text-[24px] sm:text-[22px] lg:text-[24px] font-bold font-hind-siliguri light-green">
        বাংলায় ২৪/৭ সাপোর্ট – আমরা আপনার পাশেই আছি!
      </h1>
    </div>
    <p className="text-[18px] sm:text-[18px] mt-3 deep-green font-hind-siliguri font-semibold">
      "রাত ১২টায়ও<span className="yellow"> সমস্যা?</span> আমাদের বাংলা-ভাষী টিম কল, WhatsApp, বা লাইভ চ্যাটে সাহায্য করবে।
      <span className="light-green"> কষ্ট পেলে এক্কেবারে </span>ফ্রি!"
    </p>
  </div>

  {/* Image */}
  <div className="mt-4 lg:mt-0">
    <img
      src="/images/heroPage/cardimg.svg"
      alt="Support Illustration"
      className="h-[100px] sm:h-[120px] w-auto object-contain"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default According;
