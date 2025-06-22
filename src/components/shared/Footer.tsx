import Image from "next/image";
import TextLogo from "@/assets/images/text-white-logo.png";
import Link from "next/link";

import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full  bg-[#1F1F1F] pt-16 pb-12">
      <div className="max-w-[1320px] mx-auto ">
        <div className="flex justify-between">
          <div className="flex flex-col ">
            <Image src={TextLogo} alt="logo" />
            <h3 className="text-primaryBg -translate-y-4 font-medium ml-12">
              Local Made Smarter
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <Link href={"/"}>
              <h4 className=" hover:text-primaryBg transition-all duration-200 text-white/80">
                Home
              </h4>
            </Link>
            <Link href={"features"}>
              <h4 className=" hover:text-primaryBg transition-all duration-200 text-white/80">
                Features
              </h4>
            </Link>
            <Link href={"pricing"}>
              <h4 className=" hover:text-primaryBg transition-all duration-200 text-white/80">
                Pricing
              </h4>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href={"/"}>
              <h4 className=" hover:text-primaryBg transition-all duration-200 text-white/80">
                Terms of Service{" "}
              </h4>
            </Link>
            <Link href={"features"}>
              <h4 className=" hover:text-primaryBg transition-all duration-200 text-white/80">
                Privacy Policy
              </h4>
            </Link>
            <Link href={"pricing"}>
              <h4 className=" hover:text-primaryBg transition-all duration-200 text-white/80">
                Contact
              </h4>
            </Link>
            <Link href={"pricing"}>
              <h4 className=" hover:text-primaryBg transition-all duration-200 text-white/80">
                FAQ
              </h4>
            </Link>
          </div>

          <div>
            <h3 className="text-white/80 pb-2 text-lg">
              Only the good stuff. Leave your email to join in.
            </h3>
            <div className="flex gap-2 justify-between bg-white/90 rounded-full overflow-hidden">
              <input
                className="py-4 text-sm rounded-full px-6 focus:outline-none"
                placeholder="Email"
                type="email"
                name=""
                id=""
              />
              <button className="px-4 cursor-pointer font-medium bg-[#DAD6F7] text-primaryBg rounded-full">
                Join Newsletter
              </button>
            </div>

            <h3 className="text-white/80 text-lg pt-6 pb-2">
              Contact the Local Genius Team
            </h3>
            <p className="text-white/80  text-sm">
              Email: support@localgeniusapp.com
            </p>
          </div>
        </div>
        <div>
            <h3 className="text-white/80 pb-1.5">Follow Us</h3>
            <div className="flex gap-4 items-center">
                <Link href={''}> <RiInstagramFill size={28} className="hover:text-white text-white/50 transition-all duration-200" /></Link>
                <Link href={''}> <FaFacebookSquare size={25} className="hover:text-white text-white/50 transition-all duration-200" /></Link>
                <Link href={''}> <AiFillTikTok size={28} className="hover:text-white text-white/50 transition-all duration-200" /></Link>
            </div>
        </div>
        <hr  className="w-full text-white/10 mt-16"/>
        <h4 className="text-center pt-4 text-white/60 font-light"> Copyright  2025. Local Genius. All rights reserved.</h4>
      </div>
    </div>
  );
};

export default Footer;
