import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Progress } from "antd";
import { BsStars } from "react-icons/bs";
import { Ellipsis, EllipsisVertical, Plus, Share } from "lucide-react";
import SelectCom from "@/components/select/SelectCom";
import ProfileIcon from "@/components/navbar/ProfileIcon";
import localImages from "@/utils/imageProvider";

const DashboardPage = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <div className="flex ">
        {/* sidebar */}
        <div className=" w-[350px] justify-between fixed  min-h-screen p-4 bg-[#F6F6F6] flex flex-col text-black ">
          <div>
            <Link href={"/dashboard"}>
              <Image className="w-32" src={localImages.localGeniusLogo} alt="logo" />
            </Link>
            <div className="pt-8 px-2">
              <div className="flex cursor-pointer items-center gap-3">
                <span className="p-1 flex items-center bg-black w-fit rounded-full New Chat text-white">
                  <Plus className="size-4" />{" "}
                </span>
                <h4 className="font-medium">New Chat</h4>
              </div>

              <div className="pt-10">
                <h3 className="text-description pb-6 font-medium">
                  Chat History
                </h3>
                <div className="flex flex-col gap-2">
                  <h4 className="px-4 py-2 bg-white cursor-pointer rounded-xl text-black/80 flex items-center justify-between ">
                    Coffee shops near downtown{" "}
                    <Ellipsis
                      className="size-5 cursor-pointer"
                      strokeWidth={1.2}
                    />
                  </h4>
                  <h4 className="px-4 py-2 bg-white cursor-pointer rounded-xl text-black/80 flex items-center justify-between ">
                    Best parks for jogging{" "}
                    <Ellipsis
                      className="size-5 cursor-pointer"
                      strokeWidth={1.2}
                    />
                  </h4>
                  <h4 className="px-4 py-2 bg-white cursor-pointer rounded-xl text-black/80 flex items-center justify-between ">
                    Coffee shops near downtown{" "}
                    <Ellipsis
                      className="size-5 cursor-pointer"
                      strokeWidth={1.2}
                    />
                  </h4>
                  <h4 className="px-4 py-2 bg-white cursor-pointer rounded-xl text-black/80 flex items-center justify-between ">
                    Local restaurants with...{" "}
                    <Ellipsis
                      className="size-5 cursor-pointer"
                      strokeWidth={1.2}
                    />
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-lg font-medium pb-4">Free Trial</h3>
            <div className="flex flex-col ">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Limit</h4>
                <h4 className="font-medium">1/7</h4>
              </div>
              <Progress percent={30} strokeColor={"#594ff4"} showInfo={false} />
            </div>
            <p className="text-description pt-2 pb-2 text-sm">
              Get up to 3 free AI prompts daily. Need more? Upgrade to unlock
              unlimited access and boost your productivity
            </p>
            <div>
              <button className="w-full py-2.5 justify-center rounded-full cursor-pointer flex items-center gap-1.5 bg-primaryBg text-white font-medium">
                {" "}
                <BsStars /> Upgrade your plan
              </button>
            </div>
          </div>
        </div>

        {/* cildren and navbar */}

        <div className="ml-[350px] flex-1  relative">
          {/* navbar */}
          <div className="fixed ml-[350px] bg-white left-0  border-b border-black/5 h-14 right-0 ">
            <div className="flex px-4 h-full justify-between w-full items-center">
              <SelectCom />
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="flex items-center gap-2 rounded-full px-3 py-1.5 border border-black/15 cursor-pointer font-medium">
                    {" "}
                    <Share className="size-4.5" /> Share
                  </h4>
                </div>
                <div>
                  <EllipsisVertical className="cursor-pointer" size={20} />
                </div>
                <ProfileIcon/>
              </div>
            </div>
          </div>
          <div className="bg-white pt-14 min-h-screen w-full ">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
