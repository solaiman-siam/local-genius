import Image from "next/image";


import { Check } from "lucide-react";
import localImages from "@/utils/imageProvider";

const SubscriptionPage = () => {
  return (
    <div className=" flex flex-col ">
      <div className="border border-black/5 p-8  flex-1 rounded-lg ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div>
              <Image src={localImages.subscriptionIcon} alt="subscription_icon" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium">Free Plan</h3>
              <p className="text-black/60 text-[15px]">Try Local Genius</p>
            </div>
          </div>
          <div>
            <button className="px-8 py-2.5 cursor-pointer rounded-full bg-primaryBg text-white ">
              Upgrade Plan
            </button>
          </div>
        </div>

        <div className="pt-8 space-y-3 px-3">
          <div className="flex items-center gap-2">
            <span className="bg-black p-1 rounded-full  ">
              <Check className="text-white size-3.5" />
            </span>
            <p className="text-[15px] text-black/80">
              Maximum 5 prompts generations
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-black p-1 rounded-full  ">
              <Check className="text-white size-3.5" />
            </span>
            <p className="text-[15px] text-black/80">
              Write, edit, and create content
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-black p-1 rounded-full  ">
              <Check className="text-white size-3.5" />
            </span>
            <p className="text-[15px] text-black/80">
              Chat on web, iOS, and Android
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
