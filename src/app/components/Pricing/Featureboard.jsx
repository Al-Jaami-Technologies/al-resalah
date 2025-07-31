import React from "react";

const Featureboard = () => {
  return (
    <section className="my-[110px] ">
      <div className="max-w-[1200px] mx-auto overflow-x-auto">
        {/* Row 1: Header Row */}
        <div className="w-[1200px] h-[48px] flex">
          <div
            className="w-[480px] h-full bg-[url('')] bg-cover bg-no-repeat flex items-center justify-center   border-t border-l border-[#096843] rounded-tl-lg box_bg deep-green font-roboto font-semibold text-[24px] border-b-1"
            
          >
            Features
          </div>
          <div
            className="w-[180px] h-full bg-[url('')] bg-cover bg-no-repeat flex items-center justify-center  border-t border-[#096843] box_bg2 deep-green font-roboto font-semibold text-[24px] border-b-1"
            
          >
            Masking
          </div>
          <div
            className="w-[180px] h-full bg-[url('')] bg-cover bg-no-repeat flex items-center justify-center  border-t border-[#096843] box_bg2 deep-green font-roboto font-semibold text-[24px] border-b-1"
            
          >
            Non-masking
          </div>
          <div
            className="w-[180px] h-full bg-[url('')] bg-cover bg-no-repeat flex items-center justify-center  border-t border-[#096843] box_bg2 deep-green font-roboto font-semibold text-[24px] border-b-1"
            
          >
            OTP
          </div>
          <div
            className="w-[180px] h-full bg-[url('')] bg-cover bg-no-repeat flex items-center justify-center  border-t border-r border-[#096843] rounded-tr-lg box_bg2 deep-green font-roboto font-semibold text-[24px] border-b-1"
            
          >
            Promotion
          </div>
        </div>

        {/* Row 2: Minimum Buy (no bg) */}
        <div className="w-[1200px] h-[56px] flex items-center pl-4">
          <div className="w-[480px] truncate font-medium font-roboto text-[18px] deep-green">Minimum Buy: 70 Tk(200 SMS)</div>
          <div className="w-[180px] flex justify-center checked_">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
        </div>

        {/* Row 3: MNP Charge (with bg #F9FDF4) */}
        <div
          className="w-[1200px] h-[48px] flex items-center border border-gray-300 rounded-lg pl-4"
          style={{ backgroundColor: "#F9FDF4" }}
        >
          <div className="w-[480px] truncate font-medium font-roboto text-[18px] deep-green">MNP Charge: 6 Polsa Included</div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
        </div>

        {/* Row 4: Sender ID (no bg) */}
        <div className="w-[1200px] h-[56px] flex items-center pl-4">
          <div className="w-[480px] truncate font-medium font-roboto text-[18px] deep-green">Sender ID: Dedicated</div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="cross" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
        </div>

        {/* Row 5: Two-factor Security (with bg #F9FDF4) */}
        <div
          className="w-[1200px] h-[48px] flex items-center border border-gray-300 rounded-lg pl-4"
          style={{ backgroundColor: "#F9FDF4" }}
        >
          <div className="w-[480px] truncate font-medium font-roboto text-[18px] deep-green">
            Two-factor Security: Yes (SMS/email)
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="cross" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
        </div>

        {/* Row 6: HTTP API Access (no bg) */}
        <div className="w-[1200px] h-[56px] flex items-center pl-4">
          <div className="w-[480px] truncate font-medium font-roboto text-[18px] deep-green">HTTP API Access: Yes</div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="cross" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
        </div>

        {/* Row 7: Auto Backup Gateway (with bg #F9FDF4) */}
        <div
          className="w-[1200px] h-[48px] flex items-center border border-gray-300 rounded-lg pl-4"
          style={{ backgroundColor: "#F9FDF4" }}
        >
          <div className="w-[480px] truncate font-medium font-roboto text-[18px] deep-green">
            Auto Backup Gateway Routing: Yes
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="cross" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/xross.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
        </div>

        {/* Row 8: Can Send OTP SMS (no bg) */}
        <div className="w-[1200px] h-[56px] flex items-center pl-4">
          <div className="w-[480px] truncate font-medium font-roboto text-[18px] deep-green">Can Send OTP SMS: Yes</div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
        </div>

        {/* Row 9: Fast Delivery Speed (with bg #F9FDF4) */}
        <div
          className="w-[1200px] h-[48px] flex items-center border border-gray-300 rounded-lg pl-4"
          style={{ backgroundColor: "#F9FDF4" }}
        >
          <div className="w-[480px] truncate font-medium font-roboto text-[18px] deep-green">Fast Delivery Speed</div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
        </div>

        {/* Row 10: Validity (no bg) */}
        <div className="w-[1200px] h-[56px] flex items-center pl-4">
          <div className="w-[480px] truncate font-medium font-roboto text-[18px] deep-green">Validity: 1 Year</div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
        </div>

        {/* Row 11: File to SMS (with bg #F9FDF4) */}
        <div
          className="w-[1200px] h-[48px] flex items-center border border-gray-300 rounded-lg pl-4"
          style={{ backgroundColor: "#F9FDF4" }}
        >
          <div className="w-[480px] truncate font-medium font-roboto text-[18px] deep-green">File to SMS: Yes</div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="cross" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
        </div>

        {/* Row 12: Dynamic SMS (no bg) */}
        <div className="w-[1200px] h-[56px] flex items-center pl-4">
          <div className="w-[480px] truncate font-medium font-roboto text-[18px] deep-green">
            Dynamic SMS: Yes (from xlsx/API)
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="cross" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
        </div>

        {/* Row 13: Group SMS (with bg #F9FDF4) */}
        <div
          className="w-[1200px] h-[48px] flex items-center border border-gray-300 rounded-lg pl-4"
          style={{ backgroundColor: "#F9FDF4" }}
        >
          <div className="w-[480px] truncate font-medium font-roboto text-[18px] deep-green">Group SMS: Yes</div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="cross" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
        </div>

        {/* Row 14: Online Payment (no bg) */}
        <div className="w-[1200px] h-[56px] flex items-center pl-4">
          <div className="w-[480px] truncate font-medium font-roboto text-[18px] deep-green">
            Online Payment (Bkash Auto) Yes
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="cross" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
          <div className="w-[180px] flex justify-center">
            <img src="/images/pricingPage/checked.svg" alt="check" />
          </div>
        </div>

        {/* Row 15: Empty Row (with bg #F9FDF4) */}
        <div
          className="w-[1200px] h-[48px] border border-gray-300 rounded-bl-lg rounded-br-lg"
          style={{ backgroundColor: "#F9FDF4" }}
        ></div>
      </div>
    </section>
  );
};

export default Featureboard;
