

import Image from "next/image";
import Segment from "./clientComponent/Segment";
import localImages from "@/utils/imageProvider";

const SubscriptionPlan = () => {
  return (
    <div className="rounded-xl drop-shadow-bloom2 max-w-[800px] mx-auto p-10 bg-[#F6F6F6]">
      <h3 className="text-4xl font-medium pb-4">Subscription Plan</h3>
      <h4 className="text-lg font-medium text-description pb-6">
        Your AI-Powered Local Assistant
      </h4>
      <p className="text-description w-11/12 pb-8">
        Get unlimited access to Local Genius, the only AI assistant that
        delivers trusted local discovery instantly by text or chat. When you
        subscribe, you get a dedicated phone number to text or chat Local
        Genius.
      </p>
      <h3 className="text-lg font-medium text-black">Why subscribe?</h3>

      <div>
        <div className="flex items-center gap-2 pt-4">
          <Image className="size-4.5" src={localImages.blackCheck} alt="check" />
          <h4 className="text-black/80">
            Curated, ad-free recommendations you can trust.
          </h4>
        </div>
        <div className="flex items-center gap-2 pt-4">
          <Image className="size-4.5" src={localImages.blackCheck} alt="check" />
          <h4 className="text-black/80">
            Only handpicked, verified local businesses and outdoor experiences.
          </h4>
        </div>
        <div className="flex items-center gap-2 pt-4">
          <Image className="size-4.5" src={localImages.blackCheck} alt="check" />
          <h4 className="text-black/80">
            Human-first guidance powered by smart AI.
          </h4>
        </div>
        <div className="flex items-center gap-2 pt-4">
          <Image className="size-4.5" src={localImages.blackCheck} alt="check" />
          <h4 className="text-black/80">
            No apps, no logins, no distractions. Just text or chat for instant
            answers.
          </h4>
        </div>
        <div className="flex items-center gap-2 pt-4">
          <Image className="size-4.5" src={localImages.blackCheck} alt="check" />
          <h4 className="text-black/80">
            Available nationwide. Your local assistant on demand.
          </h4>
        </div>
      </div>
      <Segment centered={false} />

      

      <div>
        <button className="px-6 cursor-pointer py-3 bg-primaryBg rounded-full text-white font-medium">Subscribe Now</button>
      </div>
      
    </div>
  );
};

export default SubscriptionPlan;
