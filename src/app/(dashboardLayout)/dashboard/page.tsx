import TextAreaCom from "@/components/textarea/TextAreaCom";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "This is basically a dashboard page and there are some route and main chatbot functionalities are working togetherly",
};

const DashboardPage = () => {

  return (
    <div className=" w-full relative min-h-[calc(100vh-56px)]   h-full flex-1 flex justify-center items-center">
      <div className="flex flex-col gap-2 h-full justify-center items-center">
        <h1 className="text-4xl pb-2 font-medium">Welcome to Local Genius</h1>
        <p className="text-black/60  w-7/12 text-center">
          Get started by writing a task and Chat can do the rest. Not sure where
          to start? Check out the Prompt Library for inspiration.
        </p>
      </div>

      <div className="absolute bottom-16 w-full -translate-x-1/2 left-1/2">
        <TextAreaCom/>
      </div>
    </div>
  );
};

export default DashboardPage;
