import Image from "next/image";
import React from "react";


import Link from "next/link";
import localImages from "@/utils/imageProvider";

const NotFooundPage = () => {
  return (
    <div className="h-screen w-full bg-white flex flex-col justify-center items-center">
      <Image src={localImages.error404} alt="404" />

      <p className="text-black w-4/12 text-center">
        The page you are trying to access doesn’t exist or has been moved.Try
        going back to our homepage.
      </p>
      <div className="pt-4">
        <Link href={"/"}>
          <h4 className="px-6 py-2.5 rounded-full text-white bg-primaryBg">
            Go to homepage
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default NotFooundPage;
