import { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import SidebarClose from "./SidebarClose";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({ children, title }) => {
    const [sidebar, setSidebar] = useState(true);

    const [screenSize, setScreenSize] = useState(window.innerWidth);

    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleNavbar = () => {
        if (screenSize < 800) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        handleNavbar();
    }, [screenSize]);

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
        <div className={navbar ? "layout layout-navbar" : "layout"}>
            {screenSize > 800 ? (
                sidebar ? (
                    <Sidebar
                        handleShow={handleSidebar}
                        handleLogout={handleLogout}
                    />
                ) : (
                    <SidebarClose
                        handleShow={handleSidebar}
                        handleLogout={handleLogout}
                    />
                )
            ) : (
                <Navbar handleLogout={handleLogout} />
            )}
            <div className="main">
                <div className="container">
                    <div
                        className={
                            navbar
                                ? "layout-title layout-title-navbar"
                                : "layout-title"
                        }
                    >
                        <h1>{title}</h1>
                    </div>

                    <div>{children || <Outlet />}</div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
