import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React, { ReactNode } from "react";

const MainLayout = async ({ children }: { children: ReactNode }) => {

    
  return (
    <div>
      <div className="py-6 bg-[#F6F6F6]">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
