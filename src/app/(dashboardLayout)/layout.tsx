import { ReactNode } from "react";




const DashboardPage = ({children} : {children: ReactNode}) => {
    return (
        <div>
            <h1>Navbar for Dashboard</h1>
            {children}
            <h1>Footer For Dashboard</h1>
        </div>
    );
};

export default DashboardPage;