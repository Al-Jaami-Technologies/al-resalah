import React from "react";
import PriceBoard from "../../components/Pricing/PriceBoard";
import PricingBanner from "../../components/Pricing/PricingBanner";
import Featureboard from "../../components/Pricing/Featureboard";
import Slides from "../../components/Pricing/Slides";
import Downcards from "../../components/Pricing/Downcards";
import Startnow from "../../components/Pricing/Startnow";

const page = () => {
  return (
    <div>
      <PricingBanner></PricingBanner>
      <PriceBoard></PriceBoard>
      <Featureboard></Featureboard>
      <Slides></Slides>
      <Downcards></Downcards>
      <Startnow></Startnow>
    </div>
  );
};

export default page;
