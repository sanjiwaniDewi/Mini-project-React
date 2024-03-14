import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = ({ children, title }) => {
    const [sidebar, setSidebar] = useState(true);

    const handleSidebar = () => {
        setSidebar(!sidebar);
    };
    return (
        <div className="layout">
            {sidebar ? (
                <Sidebar handle={handleSidebar} />
            ) : (
                <div>
                    <button onClick={handleSidebar}>Show</button>
                </div>
            )}
            <div className="main">
                <div className="container">
                    <div className="layout-title">
                        <h1>{title}</h1>
                    </div>

                    <div>{children || <Outlet />}</div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
