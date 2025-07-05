import Profile1 from "@/assets/images/profile1.png";
import Profile2 from "@/assets/images/profile2.png";
import Profile3 from "@/assets/images/profile3.png";
import Profile4 from "@/assets/images/profile4.png";
import Profile5 from "@/assets/images/profile5.png";
import Profile6 from "@/assets/images/profile6.png";
import Profile7 from "@/assets/images/profile7.png";
import Profile8 from "@/assets/images/Profile8.png";

import Image from "next/image";
import Accordion from "./accordion/Accordion";

function SmartFeaturesSec() {

  return (
    <div className="w-full">
      <div className="flex justify-center items-center flex-col">
        <h3 className="text-3xl font-medium text-center text-black">
          Made for Localists Like You, Join Us Today!
        </h3>
        <div className="flex justify-center pt-4">
          <Image className="size-18" src={Profile1} alt="profile" />
          <Image
            className="size-18 -translate-x-2"
            src={Profile2}
            alt="profile"
          />
          <Image
            className="size-18 -translate-x-4"
            src={Profile3}
            alt="profile"
          />
          <Image
            className="size-18 -translate-x-6"
            src={Profile4}
            alt="profile"
          />
          <Image
            className="size-18 -translate-x-8"
            src={Profile5}
            alt="profile"
          />
          <Image
            className="size-18 -translate-x-10"
            src={Profile6}
            alt="profile"
          />
          <Image
            className="size-18 -translate-x-12"
            src={Profile7}
            alt="profile"
          />
          <Image
            className="size-18 -translate-x-14"
            src={Profile8}
            alt="profile"
          />
        </div>
      </div>
      <div className="pt-20">
        <div className="flex  flex-col items-center">
          <h3 className="text-3xl text-center font-medium text-black">
            Smart Features, Simple Discovery
          </h3>
          <p className="text-description pt-3 w-6/12 text-center">
            Only top-rated, never random results. Our AI pulls from real
            recommendations, trusted sources and verified data so everything you
            see is hadpicked and truly local.
          </p>
        </div>
        <Accordion/>
      </div>
    </div>
  );
}

export default SmartFeaturesSec;
