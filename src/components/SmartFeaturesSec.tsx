

import Image from "next/image";
import Accordion from "./accordion/Accordion";
import localImages from "@/utils/imageProvider";

function SmartFeaturesSec() {

  return (
    <div className="w-full">
      <div className="flex justify-center items-center flex-col">
        <h3 className="text-3xl font-medium text-center text-black">
          Made for Localists Like You, Join Us Today!
        </h3>
        <div className="flex justify-center pt-4">
          <Image className="size-18" src={localImages.profile1} alt="profile" />
          <Image
            className="size-18 -translate-x-2"
            src={localImages.profile2}
            alt="profile"
          />
          <Image
            className="size-18 -translate-x-4"
            src={localImages.profile3}
            alt="profile"
          />
          <Image
            className="size-18 -translate-x-6"
            src={localImages.profile4}
            alt="profile"
          />
          <Image
            className="size-18 -translate-x-8"
            src={localImages.profile5}
            alt="profile"
          />
          <Image
            className="size-18 -translate-x-10"
            src={localImages.profile6}
            alt="profile"
          />
          <Image
            className="size-18 -translate-x-12"
            src={localImages.profile7}
            alt="profile"
          />
          <Image
            className="size-18 -translate-x-14"
            src={localImages.profile8}
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
