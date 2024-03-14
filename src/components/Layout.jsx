import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import SidebarClose from "./SidebarClose";
import { useNavigate } from "react-router-dom";

const Layout = ({ children, title }) => {
    const [sidebar, setSidebar] = useState(true);

    const handleSidebar = () => {
        setSidebar(!sidebar);
    };

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("access_token");
        setTimeout(() => {
            navigate("/login");
        }, 1000);
    };
    return (
        <div className="layout">
            {sidebar ? (
                <Sidebar
                    handleShow={handleSidebar}
                    handleLogout={handleLogout}
                />
            ) : (
                <SidebarClose
                    handleShow={handleSidebar}
                    handleLogout={handleLogout}
                />
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
