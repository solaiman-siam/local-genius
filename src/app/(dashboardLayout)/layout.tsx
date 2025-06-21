import Link from "next/link";
import { ReactNode } from "react";


const DashboardPage = ({children} : {children: ReactNode}) => {
    return (
        <div className="">
            <h1 className="bg-white w-full text-black py-8 text-lg font-semibold px-8">Navbar for Dashboard</h1>
            <div className="flex ">
                <div className="bg-white flex flex-col text-black font-semibold  justify-center items-center">
                   <h3 className="text-xl"> Sidebar</h3>
                  <div>
                     <Link href={'/dashboard'}>Dashboard</Link>
                  </div>
                </div>
                {children}
            </div>
            <h1 className="bg-white w-full text-black py-8 text-lg font-semibold px-8">Footer For Dashboard</h1>
        </div>
    );
};

export default DashboardPage;