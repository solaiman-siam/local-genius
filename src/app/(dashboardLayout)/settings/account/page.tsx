import { SquareMousePointer } from "lucide-react";
import React from "react";

const AccountPage = () => {
  return (
    <div className=" flex flex-col ">
      <div className="border border-black/5 p-8  flex-1 rounded-lg ">
        <div className="flex justify-between pb-6 border-b border-black/10">
          <h3 className="text-black/80 cursor-pointer font-medium">
            Change Password
          </h3>
          <SquareMousePointer className="cursor-pointer" />
        </div>
        <div className="flex justify-between gap-6 py-5 border-b border-black/10">
          <div className="flex-1">
            <h3 className="text-black/80 font-medium pb-4">
              Log Out of all devices
            </h3>
            <p className="text-black/50 text-[15px]">
              Log out of all active sessions across all devices, including your
              current session. It may take up to 30 minutes for other devices to
              be logged out.
            </p>
          </div>
          <div>
            <button className="w-40 border border-[#CF251F] cursor-pointer text-black/80 rounded-full py-2">
              Log out all
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-6 pt-5 ">
          <div className="flex-1">
            <h3 className="text-black/80 pb-4 font-medium">
              Delete your account
            </h3>
            <p className="text-black/50 text-[15px]">
              Deleting your account will permanently remove all your data, and
              this action cannot be undone
            </p>
          </div>
          <div>
            <button className="w-44 bg-[#CF251F] text-white cursor-pointer rounded-full py-2 border border-[#CF251F]">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
