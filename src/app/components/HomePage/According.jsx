import React from "react";

const According = () => {
  return (
    <section className="w-full px-4 py-8 flex justify-center ">
      <div className="w-full max-w-[1200px] flex flex-col gap-4">

        {/* Demi Cards 1-4 */}
        {[
          'ডিজিটালসি অনুমোদিত',
          'সব অপারেটরের সরাসরি পার্টনারশিপ',
          'বাংলাদেশের সর্বনিম্ন দামে এসএমএস প্রতিযোগীদের চেয়ে ৫০% সস্তা!',
          'সব অপারেটরের সরাসরি পার্টনারশিপ',
        ].map((text, index) => (
          <div
            key={index}
            className="custom-card w-full rounded-[40px] border-t-[1px] px-6 py-4 bg-white flex items-center gap-4"
            style={{ height: '80px' }}
          >
            <div className="w-[35px] h-[35px] border-2 border-green-800 rounded-full flex items-center justify-center text-green-800 text-sm font-semibold shrink-0">
              <p>{`0${index + 1}`}</p>
            </div>
            <p className="text-[16px] sm:text-[18px] font-medium">{text}</p>
          </div>
        ))}

        {/* Full Card 5 */}
        <div
          className="custom-card w-full rounded-[40px] border-t-[1px] p-6 bg-white flex flex-col lg:flex-row items-center justify-between gap-6"
          style={{ height: '329px' }}
        >
          {/* Number bubble */}
          <div className="w-[43px] h-[43px] border-2 border-green-800 rounded-full flex items-center justify-center text-green-800 text-sm font-semibold shrink-0">
            <p>05</p>
          </div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-green-700">
              বাংলায় ২৪/৭ সাপোর্ট – আমরা আপনার পাশেই আছি!
            </h1>
            <p className="text-[16px] sm:text-[18px] mt-2 text-gray-800">
              "রাত ১২টায়ও <span className="text-red-600 font-semibold">সমস্যা?</span> আমাদের বাংলা-ভাষী টিম কল, WhatsApp, বা লাইভ
              চ্যাটে সাহায্য করবে। কষ্ট পেলে এক্কেবারে ফ্রি!"
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
