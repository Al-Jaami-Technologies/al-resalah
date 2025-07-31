import React from "react";
import Banner from "../components/HomePage/Banner";
import SmsBuy from "../components/HomePage/SmsBuy";
import According from "../components/HomePage/According";
import WhyUs from "../components/HomePage/WhyUs";
import Review from "../components/HomePage/Review";
import Partner from "../components/HomePage/Partner";
import Blog from "../components/HomePage/Blog";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <SmsBuy />
      <According />
      <WhyUs />
      <Review />
      <Partner />
      {/* <Blog /> */}
    </div>
  );
};

export default HomePage;
