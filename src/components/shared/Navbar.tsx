"use client"
import Image from "next/image";

import Link from "next/link";
import Container from "./Container";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import localImages from "@/utils/imageProvider";


const Navbar = () => {

  const pathName = usePathname();
  const router = useRouter()

  const handleGetStarted = () => {
    router.push('/dashboard')
  }


  return (
    <div>
      <Container>
        <div className="bg-[#E6E5E7] rounded-full flex items-center justify-between px-4 py-px ">
          <div className="flex items-center gap-12 ">
           <Link href={'/'}> <Image src={localImages.localGeniusLogo} alt="logo" /></Link>
            <div className="flex items-center ">
              <Link href={"/subscription"}>
                <h4 className={`font-medium text-sm py-2 px-2  text-black ${pathName === '/subscription' ? ' drop-shadow-button rounded-xs  text-primaryBg border-primaryBg' : ''}`}>
                  Manage Subscription
                </h4>
              </Link>
              <Link href={"/dashboard"}>
                <h4 className="font-medium text-sm px-2 py-2 text-black">Chat</h4>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Link href={'/about'}> <h4 className={`font-medium px-2 py-2 text-sm text-black ${pathName === '/about' ? ' drop-shadow-button rounded-xs  text-primaryBg  border-primaryBg' : ''}`}>About Us</h4> </Link>
            <button onClick={handleGetStarted}  className="text-white cursor-pointer text-sm px-6 py-3 rounded-full bg-primaryBg ">Get Started</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
