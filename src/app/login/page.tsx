import Image from "next/image";
import React from "react";

import Form from "next/form";
import localImages from "@/utils/imageProvider";

const LoginPage = () => {
  return (
    <div className="flex justify-center bg-[#F6F6F6] h-screen items-center w-full">
      <div className="max-w-[600px] bg-white p-10 rounded-3xl">
        <div className="flex w-full flex-col items-center justify-center">
          <Image src={localImages.localGeniusLogo} alt="Logo" />
          <h3 className="text-center text-[2.5rem] font-medium  pb-2">
            Create your account
          </h3>
          <p className="text-center text-[#707070] pb-6  w-9/12">
            We recommend signing up with your work email to keep all your
            content in one place.
          </p>
        </div>
        <Form action="">
          {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
          <input name="query" />
          <button type="submit">Submit</button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
