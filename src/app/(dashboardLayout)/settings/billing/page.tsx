import Segment from "@/components/clientComponent/Segment";
import React from "react";

const BillingPage = () => {
  return (
    <div className=" flex flex-col ">
      <div className="border border-black/5 p-8  flex-1 rounded-lg ">
        <div className="flex flex-col gap-1">
          <h3 className="text-3xl font-medium pb-4">Overview</h3>
          <h4 className="font-medium pb-2">Summary</h4>
          <p className="text-[15px] text-black/50">
            Your workspace was created on May 15, 2025.
          </p>
          <p className="text-[15px] text-black/50">
            Your Free plan allows you to generate maximum 5 prompts.
          </p>
        </div>

        <div className="pt-6">
          <h3 className="pb-2 text-lg ">Plan</h3>
          <div className="flex flex-col border p-6 rounded-xl w-fit items-center border-black/10 justify-center">
            <h3 className="text-xl  ">Upgrade to Local Genius</h3>
            <Segment centered={true} />
            <button className="px-8 py-3 rounded-full cursor-pointer bg-primaryBg text-white ">
              Upgrade Now
            </button>
          </div>
        </div>
        <div className="pt-8">
          <h2 className=" text-lg pb-2">Manage Billing</h2>
          <div className="rounded-xl border border-black/10 p-6">
            <div className="flex justify-between gap-6 py-5 border-b border-black/10">
              <div className="flex-1">
                <h3 className="text-black/80 font-medium pb-2">Invoices</h3>
                <p className="text-black/50 text-[15px]">
                  View your past and upcoming invoices
                </p>
              </div>
              <div>
                <button className="w-40 border border-primaryBg cursor-pointer text-black/80 rounded-full py-2">
                  View Invoices
                </button>
              </div>
            </div>
            <div className="flex justify-between gap-6 pt-5 ">
              <div className="flex-1">
                <h3 className="text-black/80 pb-2 font-medium">Cancellation</h3>
                <p className="text-black/50 text-[15px]">
                  If you cancel your subscription, you won’t access your current
                  plan anymore.
                </p>
              </div>
              <div>
                <button className="w-44 bg-[#CF251F] text-white cursor-pointer rounded-full py-2 border border-[#CF251F]">
                  Cancel Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
