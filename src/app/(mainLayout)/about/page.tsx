

import Image from "next/image";
import React from "react";
import localImages from "@/utils/imageProvider";

const AboutPage =  () => {
  return (
    <div className="">
      <div className="  bg-[#F6F6F6] ">
        <div className=" max-w-[1320px] mx-auto py-20 drop-shadow-bloom2">
          <h1 className="text-4xl font-medium pb-20 text-center">
            Where It All Started
          </h1>

          <div className="flex gap-10 items-center">
            <div className="flex-1 justify-center flex w-full">
              <Image
                className="w-full h-full object-cover "
                src={localImages.about1}
                alt="about_img"
              />
            </div>
            <div className="flex-1 flex-col space-y-4 w-11/12 text-description flex">
              <p className={"w-11/12"}>
                Local Genius started with a simple idea: finding the best of
                local should be easy - no matter where you are.
              </p>
              <p className={"w-11/12"}>
                For Tiffany, a small business owner, it meant finally being seen
                and supported. For Trisha and Quade, it meant finding trusted
                recs and uncovering places they didnt even know they were
                missing. For Tiffany, a small business owner, it meant finally
                being seen and supported. For Trisha and Quade, it meant finding
                trusted recs and uncovering places they didnt even know they
                were missing.
              </p>
              <p className={"w-11/12"}>
                Born from a love of small businesses and a passion for real,
                authentic experiences, Local Genius was built to make local
                discovery effortless, personal, and community-powered. Born from
                a love of small businesses and a passion for real, authentic
                experiences, Local Genius was built to make local discovery
                effortless, personal, and community-powered.
              </p>
              <p className={"w-11/12"}>
                We believe local is culture, character, and connection and
                everyone deserves access to the best of it. We believe local is
                culture, character, and connection and everyone deserves access
                to the best of it. We believe local is culture, character, and
                connection and everyone deserves access to the best of it.
              </p>
              <p className={"w-11/12"}>
                We believe local is culture, character, and connection and
                everyone deserves access to the best of it.
              </p>
            </div>
          </div>
          <div className="flex drop-shadow-bloom2 flex-col items-center py-20">
            <h3 className="text-3xl font-medium">
              The power of word-of-mouth, upgraded.
            </h3>
            <p className="text-description text-center pt-4 w-9/12">
              Local Genius makes it easy to find the best local businesses and
              outdoor experiences anytime, anywhere in the U.S. Weve done the
              digging, vetted the best, and built a trusted network so you dont
              have to. Just text or chat what you need, and get instant,
              reliable recommendations. No apps. No downloads. Just answers you
              can count on.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <div className="px-20 max-w-[1320px]  mx-auto py-20">
          <div className="flex gap-10">
            <div className="flex-1">
              <h3 className="text-3xl font-medium pb-8">From the Founders</h3>
              <div className="flex-1 flex-col space-y-4  text-description flex">
                <p className={""}>
                  Local Genius started with a simple idea: finding the best of
                  local should be easy - no matter where you are.
                </p>
                <p className={""}>
                  For Tiffany, a small business owner, it meant finally being
                  seen and supported. For Trisha and Quade, it meant finding
                  trusted recs and uncovering places they didnt even know they
                  were missing. For Tiffany, a small business owner, it meant
                  finally being seen and supported. For Trisha and Quade, it
                  meant finding trusted recs and uncovering places they didnt
                  even know they were missing.
                </p>
                <p className={""}>
                  Born from a love of small businesses and a passion for real,
                  authentic experiences, Local Genius was built to make local
                  discovery effortless, personal, and community-powered. Born
                  from a love of small businesses and a passion for real,
                  authentic experiences, Local Genius was built to make local
                  discovery effortless, personal, and community-powered.
                </p>
                <p className={""}>
                  We believe local is culture, character, and connection and
                  everyone deserves access to the best of it. We believe local
                  is culture, character, and connection and everyone deserves
                  access to the best of it. We believe local is culture,
                  character, and connection and everyone deserves access to the
                  best of it.
                </p>
                <p className={""}>
                  We hope it inspires you to explore more, support more, and
                  feel more connected to your community wherever you are.
                </p>
                <p className={" pb-4"}>All the best,</p>
                <Image src={localImages.signature} alt="signature" />
              </div>
            </div>
            <div className="flex-1">
              <Image
                className="w-full h-full"
                src={localImages.about2}
                alt="about_img"
              />
            </div>
          </div>
        </div>
      </div>
        <div className="bg-white py-24">
            <div className="flex flex-col  max-w-[1200px] mx-auto bg-[#F6F6F6] p-8 rounded-2xl items-center ">
            <h3 className="text-description text-lg font-medium pb-4">OUR COMMITMENT</h3>
            <h3 className="text-xl font-medium text-black pb-6 w-10/12 text-center">We don’t sell your data. We don’t take paid placements. Every recommendation is vetted and curated to keep your experience honest and valuable.</h3>
            <button className="px-6 py-3 rounded-full cursor-pointer bg-primaryBg text-white  ">Start Your Free Trial</button>
        </div>
        </div>
    </div>
  );
};

export default AboutPage;
