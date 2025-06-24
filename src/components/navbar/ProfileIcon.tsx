"use client";

import { Popover } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileIcon = () => {
  const content = (
    <div>
      <h4 className="pb-2 border-b border-black/5">youremail@gmail.com</h4>
      <div className="flex flex-col gap-4 divide-y divide-black/5  pt-4">
        <h4 className="py-1 cursor-pointer">Upgrade Plan</h4>
        <Link href={"/settings/profile"}>
          <h4 className="py-1 cursor-pointer">Settings</h4>
        </Link>
        <h4 className="py-1 cursor-pointer">Log out</h4>
      </div>
    </div>
  );

  return (
    <div>
      <Popover content={content} trigger="click">
        <div className="border size-10 rounded-full cursor-pointer border-black/15 overflow-hidden">
          <Image
            width={20}
            height={20}
            className="w-full h-full object-cover"
            src={
              "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=612x612&w=0&k=20&c=VsTsa0kjyZ7ALe-nyKAUfynyRxZo8H4LRMdu_ecPuOY="
            }
            alt="profile"
          />
        </div>
      </Popover>
    </div>
  );
};

export default ProfileIcon;
