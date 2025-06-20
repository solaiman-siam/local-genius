import Image from "next/image";
import Logo from "@/assets/images/local_genius_logo.png";
import Link from "next/link";
import Container from "./Container";


const Navbar = () => {
  return (
    <div>
      <Container>
        <div className="bg-[#E6E5E7] rounded-full flex items-center justify-between px-4 py-px ">
          <div className="flex items-center gap-12 ">
            <Image src={Logo} alt="logo" />
            <div className="flex items-center gap-6">
              <Link href={"subscription"}>
                <h4 className="font-medium text-sm  text-black">
                  Manage Subscription
                </h4>
              </Link>
              <Link href={""}>
                <h4 className="font-medium text-sm  text-black">Chat</h4>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Link href={''}> <h4 className="font-medium text-sm text-black">About Us</h4> </Link>
            <button className="text-white text-sm px-4 py-3 rounded-full bg-primaryBg ">Get Started</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
