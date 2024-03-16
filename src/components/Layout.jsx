import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RiNotification3Line } from "react-icons/ri";

import Sidebar from "./Sidebar";
import SidebarClose from "./SidebarClose";
import Navbar from "./Navbar";
import UserImg from "./UsersImg";
import LogoutModal from "./LogoutModal";

const Layout = ({ children, title }) => {
    const [sidebar, setSidebar] = useState(true);

    const [screenSize, setScreenSize] = useState(window.innerWidth);

    const [navbar, setNavbar] = useState(false);

    const [showModal, setShowModal] = useState(false);

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
        localStorage.removeItem("email");
        setTimeout(() => {
            navigate("/login");
        }, 1000);
    };

    const handleShowModal = () => {
        setShowModal(!showModal);
    };
    return (
        <main>
            {showModal && (
                <LogoutModal
                    handleShowModal={handleShowModal}
                    handleLogout={handleLogout}
                />
            )}
            <div className={navbar ? "layout layout-navbar" : "layout"}>
                {screenSize > 800 ? (
                    sidebar ? (
                        <Sidebar
                            handleShow={handleSidebar}
                            handleShowModal={handleShowModal}
                        />
                    ) : (
                        <SidebarClose
                            handleShow={handleSidebar}
                            handleShowModal={handleShowModal}
                        />
                    )
                ) : (
                    <Navbar handleShowModal={handleShowModal} />
                )}
            </div>

            <div className={sidebar && !navbar ? "main main-sidebar" : "main"}>
                <div className="container">
                    <div
                        className={
                            navbar
                                ? "layout-title layout-title-navbar"
                                : "layout-title"
                        }
                    >
                        <h1>{title}</h1>
                        <div className="layout-icons">
                            <RiNotification3Line />
                            <UserImg />
                        </div>
                    </div>

                    <div>{children || <Outlet />}</div>
                </div>
            </div>
        </main>
    );
};

export default Layout;
