import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HowItWorksSec from "@/components/HowItWorksSec";
import LocalInteligence from "@/components/LocalInteligence";

import SmartFeaturesSec from "@/components/SmartFeaturesSec";
import SubscriptionPlan from "@/components/SubscriptionPlan";
import React from "react";

const HomePage = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #F6F6F6 50%, #1F1F1F 50%)",
        width: "100%",
      }}
      className=" text-black min-h-screen"
    >
      <div>
        <Hero />
        <div className="bg-white relative z-[8] rounded-t-[200px]  rounded-b-[30px] py-20">
          <SmartFeaturesSec />
          <HowItWorksSec />
          <LocalInteligence />
          <SubscriptionPlan />
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
