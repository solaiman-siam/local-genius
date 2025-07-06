"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";


import { Camera } from "lucide-react";
import { DatePicker, DatePickerProps } from "antd";
import localImages from "@/utils/imageProvider";

const ProfilePage = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    // Do something with the files
  }, []);
  const { getInputProps } = useDropzone({ onDrop });

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const commonInput = 'px-2.5 py-2.5  focus:outline-primaryBg text-[14px] text-black/80 focus:outline-[0.4px] rounded-md border border-black/10'

  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <div className="flex flex-col gap-6">
      <form className="border border-black/5 p-10 rounded-xl">
        <div className="size-20 mb-12 relative">
          <Image
            className="rounded-full overflow-hidden object-contain"
            src={localImages.defaultProfile}
            alt="profile_img"
          />
          <label
            className=" rounded-full cursor-pointer absolute bottom-0 right-0 hover:bg-primaryBg/30 transition-all duration-200 bg-primaryBg/10 p-1.5  flex w-fit overflow-hidden"
            htmlFor="profile-input"
          >
            <input
              {...getInputProps()}
              className="hidden"
              type="file"
              name="profile-input"
              id="profile-input"
            />
            <Camera className="text-primaryBg size-5" />
          </label>
          <h4 className="text-sm pt-1 text-nowrap">Change Image</h4>
        </div>
        <div className="grid grid-cols-2 gap-6 w-full">
          <div className="flex flex-col gap-2">
            <label className="text-black/80" htmlFor="first_name">
              First name
            </label>
            <input
              className={commonInput}
              type="text"
              name=""
              placeholder={'User name'}
              id=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black/80" htmlFor="first_name">
              Last name
            </label>
            <input
              className={commonInput}
              type="text"
              placeholder={'User name'}
              name=""
              id=""
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label htmlFor="" className="text-black/70">Date of Birth</label>
            <DatePicker
              style={{ width: "100%", height: "43px" }}
              onChange={onChange}
            />
          </div>
          <div className="col-span-2">
            <button className="w-52 h-11 cursor-pointer text-s flex justify-center items-center bg-primaryBg rounded-full text-white">
              Save Changes
            </button>
          </div>
        </div>
      </form>
      <form className="border border-black/5 p-10 rounded-xl">
        <div className="flex gap-3 items-end">
          <div className="flex flex-1 flex-col gap-2">
            <label className="text-black/70" htmlFor="">Email</label>
            <input placeholder={'example@gmail.com'} className={commonInput} type="email" name="" id="" />
          </div>
          <div>
            <button type="button" onClick={() => setToggle(!toggle)} className="w-32 rounded-md h-11 border hover:text-white hover:bg-primaryBg transition-all duration-200 border-black/10 cursor-pointer text-black/70">Change</button>
          </div>
        </div>
        {toggle && <div className="pt-6 flex flex-col gap-3">
            <div className="flex flex-col gap-2 ">
                <label className="text-black/70" htmlFor="">To change email, type your password</label>
                <input placeholder="Enter your password here" className={commonInput} type="password" name="" id="" />
            </div>
            <div className="pt-3">
               <button className="w-52 h-11 cursor-pointer text-s flex justify-center items-center bg-primaryBg rounded-full text-white">Save Changes</button>
            </div>
        </div>}
      </form>
    </div>
  );
};

export default ProfilePage;
