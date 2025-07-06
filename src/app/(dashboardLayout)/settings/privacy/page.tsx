import Image from "next/image";
import { Dot } from "lucide-react";
import localImages from "@/utils/imageProvider";

const PrivacyPage = () => {
  return (
    <div className=" flex flex-col ">
      <div className="border border-black/5 p-8  flex-1 rounded-lg ">
        <div className="flex items-center gap-2">
          <Image src={localImages.privacyIcon} alt="privacy" />
          <div className="flex flex-col ">
            <h3 className="text-lg ">Data Privacy</h3>
            <p className="text-black/70 text-[15px]">
              Local Genius believes in transparent data practices
            </p>
          </div>
        </div>

        <p className="text-[15px] text-black/70 pt-4">
          Keeping your data safe is a priority. Learn how your information is
          protected when using Copybot products, and visit our <span className="text-primaryBg font-medium">Privacy Center </span>
          and <span className="text-primaryBg font-medium"> Privacy Policy</span> for more details{" "}
        </p>

        <div className="pt-4">
          <h4 className="pb-2">How we protect your data</h4>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Dot />
              <h4 className="flex-1 text-black/70">
                By default, Local Genius doesn’t train our generative models on
                your conversations. 
              </h4>
            </div>
            <div className="flex items-center gap-1">
              <Dot />
              <h4 className="flex-1 text-black/70">
                Local Genius doesn’t sell your data to third parties. 
              </h4>
            </div>
            <div className="flex items-center gap-1">
              <Dot />
              <h4 className="flex-1 text-black/70">
                Local Genius deletes your data promptly when requested, except
                for safety violations or conversations you’ve shared through
                feedback.  
              </h4>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <h4 className="pb-2">How we use your data</h4>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Dot />
              <h4 className="flex-1 text-black/70">
                Local Genius may use conversations flagged for safety violations
                to ensure safety of our systems for all users.
              </h4>
            </div>
            <div className="flex items-center gap-1">
              <Dot />
              <h4 className="flex-1 text-black/70">
                Local Genius may use your email for account verification,
                billing, and Anthropic-led communications and marketing (e.g.,
                emails sharing new product offerings and features).
              </h4>
            </div>
            <div className="flex items-center gap-1">
              <Dot />
              <h4 className="flex-1 text-black/70">
                Local Genius may conduct aggregated, anonymized analysis of data
                to understand how people use Claude.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
