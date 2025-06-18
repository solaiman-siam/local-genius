import Image from "next/image";
import Container from "./shared/Container";

import Bot from "@/assets/images/bot.png";

function Hero() {
  return (
    <Container>
      <div className="flex relative flex-col items-center gap-24 pt-24">

        <div className="flex flex-col items-center gap-8">
          <h1 className="text-5xl font-medium">
            {" "}
            Trusted Local Discovery, Instantly by Text or Chat.
          </h1>
          <p className="w-8/12 text-lg text-center text-description">
            No apps, No endless scrolling. Just the best small businesses and
            outdoor experiences- handpicked , vetted and delivered instantly by
            your AI-Powered local assistant.{" "}
          </p>

          <button className="bg-primaryBg text-white px-6 py-3 rounded-full ">
            Start Your Free Trial
          </button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="flex flex-col gap-3 p-7 bg-white rounded-2xl">
            <div className="rounded-full bg-white p-1">
                <Image src={Bot} alt="bot" />
            </div>
            <h3 className="font-medium text-lg">Local Made Smarter</h3>
            <p className="text-description text-[15px] ">
              Local Genius is your AI-powered local assistant. No apps. No
              downloads. Just fast, secure recommendations from top- rated local
              businesses.
            </p>
          </div>
          <div className="flex flex-col gap-3 p-7 bg-white rounded-2xl">
            <div className="rounded-full bg-white p-1">
                <Image src={Bot} alt="bot" />
            </div>
            <h3 className="font-medium text-lg">Local Made Smarter</h3>
            <p className="text-description text-[15px] ">
              Local Genius is your AI-powered local assistant. No apps. No
              downloads. Just fast, secure recommendations from top- rated local
              businesses.
            </p>
          </div>
          <div className="flex flex-col gap-3 p-7 bg-white rounded-2xl">
            <div className="rounded-full bg-white p-1">
                <Image src={Bot} alt="bot" />
            </div>
            <h3 className="font-medium text-lg">Local Made Smarter</h3>
            <p className="text-description text-[15px] ">
              Local Genius is your AI-powered local assistant. No apps. No
              downloads. Just fast, secure recommendations from top- rated local
              businesses.
            </p>
          </div>
          <div className="flex flex-col gap-3 p-7 bg-white rounded-2xl">
            <div className="rounded-full bg-white p-1">
                <Image src={Bot} alt="bot" />
            </div>
            <h3 className="font-medium text-lg">Local Made Smarter</h3>
            <p className="text-description text-[15px] ">
              Local Genius is your AI-powered local assistant. No apps. No
              downloads. Just fast, secure recommendations from top- rated local
              businesses.
            </p>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 size-96 shadow-primaryBg/20 drop-shadow-bloom bg-primaryBg ">

        </div>
      </div>
    </Container>
  );
}

export default Hero;
