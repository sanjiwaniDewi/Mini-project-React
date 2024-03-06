import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => {
        sidebar ? setSidebar(false) : setSidebar(true);
    };
    return (
        <div>
            <div className="main">
                {sidebar ? (
                    <Sidebar handle={handleSidebar} />
                ) : (
                    <div>
                        <button onClick={handleSidebar}>Show</button>
                    </div>
                )}

                <div>{children || <Outlet />}</div>
            </div>
        </div>
    );
};

export default Layout;
