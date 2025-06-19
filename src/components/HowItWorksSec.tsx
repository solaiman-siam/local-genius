import React from "react";

import SectionImage from "@/assets/images/HowItWorks.png";
import CheckImage from "@/assets/images/checkMark.png";
import Image from "next/image";

const HowItWorksSec = () => {
  return (
    <div className="flex max-w-[1300px] mx-auto items-center gap-10 py-24 ">
      <div>
        <div className="pb-10">
          <h3 className="text-4xl font-medium pb-4 text-textPrimary">
            How it Works
          </h3>
          <p className="w-8/12 font-normal text-description">
            Get top local picks in seconds. No apps, no digging, just the good
            stuff, anywhere in the U.S.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex gap-3 bg-[#F6F6F6] rounded-xl p-4">
            <div>
              <Image className="size-6 mt-1" src={CheckImage} alt="check" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-medium pb-2 text-textPrimary">
                Ask Anything
              </h3>
              <p className="text-description">
                “Where’s a cozy cafe nearby?” <br/>
                 “Cool local bookstores?”  <br/>
                 “Easy
                hikes with views?”
              </p>
            </div>
          </div>
          <div className="flex gap-3 bg-[#F6F6F6] rounded-xl p-4">
            <div>
              <Image className="size-6 mt-1" src={CheckImage} alt="check" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-medium pb-2 text-textPrimary">
               We Search Our Curated Database.
              </h3>
              <p className="text-description">
               Top-rated only. No chains. No paid placements.
              </p>
            </div>
          </div>
          <div className="flex gap-3 bg-[#F6F6F6] rounded-xl p-4">
            <div>
              <Image className="size-6 mt-1" src={CheckImage} alt="check" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-medium pb-2 text-textPrimary">
               You Get Instant, Trusted Results.
              </h3>
              <p className="text-description">
               Straight to your phone or chat window.
              </p>
            </div>
          </div>

          <h3 className="text-lg  font-medium pt-4 text-textPrimary">
            No download. No account. Just answers.
          </h3>

          <div className="pt-3">
            <button className="px-6 py-3 cursor-pointer  rounded-full text-white bg-primaryBg ">
              Try Local Genius Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <Image src={SectionImage} alt="sectionImage" />
      </div>
    </div>
  );
};

export default HowItWorksSec;
