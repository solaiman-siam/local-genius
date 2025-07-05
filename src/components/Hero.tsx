import Image from "next/image";
import Container from "./shared/Container";

import Bot from "@/assets/images/bot.png";
import { IHeroCard } from "../../types";

async function Hero() {

  // const res = await fetch("http://localhost:5000/heroCards" , {cache: 'force-cache'});
  // const heroCards = await res.json();


  const heroCards = [
  {
    "id": 1,
    "title": "Local Made Smarter",
    "description": "Local Genius is your AI-powered local assistant. No apps. No downloads. Just fast, secure recommendations from top-rated local businesses."
  },
  {
    "id": 2,
    "title": "Simple, Honest Pricing",
    "description": "Unlimited local recommendations powered by GPT-4 and real human insight all for one clear, honest price."
  },
  {
    "id": 3,
    "title": "Instant Access",
    "description": "Get real-time, trusted local recs by text or chat, wherever you are."
  },
  {
    "id": 4,
    "title": "Private and Secure",
    "description": "Your conversations always stay private. No tracking. No data selling. Just secure, trusted answers you can count on."
  }
]
  

  return (
    <Container>
      <div className="flex relative flex-col items-center gap-24 py-24">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-5xl font-medium">
            Trusted Local Discovery, Instantly by Text or Chat.
          </h1>
          <p className="w-8/12 text-lg text-center text-description">
            No apps, No endless scrolling. Just the best small businesses and
            outdoor experiences- handpicked , vetted and delivered instantly by
            your AI-Powered local assistant.
          </p>
          <button className="bg-primaryBg drop-shadow-bloomButton cursor-pointer text-white px-6 py-3 rounded-full ">
            Start Your Free Trial
          </button>
        </div>
        <div className="grid drop-shadow-bloom2 grid-cols-4 gap-6">
          {heroCards.map((card : IHeroCard ) => (
            <div key={card.id} className="flex flex-col  gap-3 p-7 bg-[#F6F6F6] rounded-2xl">
              <div className="rounded-full w-fit bg-white p-3">
                <Image src={Bot} alt="bot" />
              </div>
              <h3 className="font-medium text-lg">{card.title}</h3>
              <p className="text-description text-[15px] ">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Hero;
