import React from "react";

const BusinessPage = () => {
  const commonInput =
    "px-2.5 py-2.5  focus:outline-primaryBg text-[14px] bg-white text-black/80 focus:outline-[0.4px] rounded-md border border-black/10";
  return (
    <div className=" flex flex-col ">
      <div className="border border-black/5 p-8  flex-1 rounded-lg ">
        <div className="bg-[#F6F6F6] rounded-xl p-6 pb-8">
          <h3 className="text-black/80 pt-4 font-medium text-center  pb-8">
            Suggest a Business in Your Area
          </h3>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label className="text-black/80" htmlFor="">
                Business Name
              </label>
              <input className={commonInput} type="text" name="" id="" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black/80" htmlFor="">
                Business Type
              </label>
              <input className={commonInput} type="text" name="" id="" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black/80" htmlFor="">
                Location
              </label>
              <input className={commonInput} type="text" name="" id="" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black/80" htmlFor="">
                Why is it the best?
              </label>
              <textarea name=""  className={`${commonInput} h-[100px] resize-none`} id=""></textarea>
            </div>

            <div className="pt-4">
                <button className="w-full bg-primaryBg text-white py-3 rounded-full">Submit Suggession</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
