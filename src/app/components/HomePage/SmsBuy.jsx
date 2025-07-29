import React from "react";

const SmsBuy = () => {
  return (
    <section className="max-w-[856px] mx-auto px-4 sm:px-6">
      <div>
        <center>
          <h1 className="hind-siliguri font-bold deep-green mt-[60px] sm:mt-[80px] lg:mt-[110px] mb-3 text-[28px] sm:text-[36px] lg:text-[40px] leading-snug">
            যেকোনো <span class="light-green">পরিমাণ রিচার্জ</span> করুন,
            <br />
            শুধু ব্যবহার অনুযায়ী <span class="light-green">খরচ করুন!</span>
          </h1>
        </center>

        <center>
          <h1 className="hind-siliguri font-semibold light-green mt-[27px] text-[20px] sm:text-[22px] md:text-[24px]">
            কোন ধরনের এসএমএস চাচ্ছেন ?
          </h1>
        </center>

        <center>
          <section className="mt-[27px] px-4">
            <div
              id="groupButtonsFixed"
              className="flex justify-center items-center mx-auto border border-green-800 rounded-[17px] font-medium text-xs sm:text-sm overflow-hidden w-full max-w-[581px]"
            >
              <button className="group-btn flex-1 max-w-[80px] sm:max-w-[116px] h-[30px] sm:h-[34px] bg-white text-green-800 flex items-center justify-center rounded-l-[17px] cursor-pointer text-[10px] sm:text-[13px]">
                মার্কিং
              </button>
              <button className="group-btn flex-1 max-w-[80px] sm:max-w-[116px] h-[30px] sm:h-[34px] bg-green-800 text-white flex items-center justify-center border-l border-white cursor-pointer text-[10px] sm:text-[13px]">
                নন-মার্কিং
              </button>
              <button className="group-btn flex-1 max-w-[80px] sm:max-w-[116px] h-[30px] sm:h-[34px] bg-green-800 text-white flex items-center justify-center border-l border-white cursor-pointer text-[10px] sm:text-[13px]">
                ওটিপি
              </button>
              <button className="group-btn flex-1 max-w-[80px] sm:max-w-[116px] h-[30px] sm:h-[34px] bg-green-800 text-white flex items-center justify-center border-l border-white cursor-pointer text-[10px] sm:text-[13px]">
                ট্রান্সক্রিপশন
              </button>
              <button className="group-btn flex-1 max-w-[80px] sm:max-w-[116px] h-[30px] sm:h-[34px] bg-green-800 text-white flex items-center justify-center rounded-r-[17px] border-l border-white cursor-pointer text-[10px] sm:text-[13px]">
                প্রোমোশন
              </button>
            </div>

            <script
              dangerouslySetInnerHTML={{
                __html: `
        const buttons = document.querySelectorAll('.group-btn');
        buttons.forEach((btn, index) => {
          btn.addEventListener('click', () => {
            buttons.forEach((b, i) => {
              b.classList.remove('bg-white', 'text-green-800', 'rounded-l-[17px]', 'rounded-r-[17px]');
              b.classList.add('bg-green-800', 'text-white');
            });

            btn.classList.remove('bg-green-800', 'text-white');
            btn.classList.add('bg-white', 'text-green-800');

            if (index === 0) {
              btn.classList.add('rounded-l-[17px]');
            } else if (index === buttons.length - 1) {
              btn.classList.add('rounded-r-[17px]');
            }
          });
        });
      `,
              }}
            />
          </section>
        </center>

        <center>
          <h1 className="hind-siliguri font-semibold light-green mt-[27px] text-[20px] sm:text-[22px] md:text-[24px]">
            কতগুলো এসএমএস চাচ্ছেন ?
          </h1>
        </center>

        <center>
          <div className="mt-[20px] w-full px-4">
            <input
              type="amount"
              placeholder="আপনার এসএমএস এর পরিমাণ এখানে লিখুন"
              className="p-4 rounded-[8px] border-[rgb(129,203,45)] placeholder-[rgb(112,167,146)] border-[2px] w-full max-w-[373px] h-[48px] in_put"
            />
          </div>
        </center>

        <center>
          <h1 className="deep-green hind-mysuru font-bold text-[28px] sm:text-[32px] md:text-[36px] mt-[20px]">
            ৯,৬০০ টাকা মাত্র
          </h1>
          <p className="deep-green hind-mysuru font-bold text-[16px] sm:text-[18px] mt-[20px]">
            প্রতিটি <span className="light-green">মাস্কিং</span> এসএমএস এর মুল্য{" "}
            <span className="light-green">০.৪৮</span> পয়সা মাত্র
          </p>
        </center>

        <center>
          <button className="my-3 w-full max-w-[576px] h-[56px] sm:h-[64px] text-white rounded-[8px] mid_button hind-siliguri font-bold text-[20px] sm:text-[24px] mt-[20px] mb-[49px] cursor-pointer bg_deep-green">
            এখনই রিচার্জ করুন ও SMS পাঠানো শুরু করুন
          </button>
        </center>
      </div>
    </section>
  );
};

export default SmsBuy;
