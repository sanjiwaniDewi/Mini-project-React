import { Link, useNavigate } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { GrTasks } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { GrClose } from "react-icons/gr";

import "../style/components.css";

const Sidebar = ({ handleShow, handleLogout }) => {
    return (
        <div className="sidebar ">
            <div className="inside-sidebar">
                <button
                    className="sidebar-button sidebar-btn-close"
                    onClick={handleShow}
                >
                    <GrClose />
                    Close
                </button>

                <h2>PRO.CO</h2>
                <ul className="sidebar-nav">
                    <li className="sidebar-menu">
                        <Link to="/">
                            {" "}
                            <RiDashboardLine />
                            Dashboard
                        </Link>
                    </li>
                    <li className="sidebar-menu">
                        <Link to="/project">
                            {" "}
                            <GrTasks />
                            Project
                        </Link>
                    </li>
                    <li className="sidebar-menu">
                        <Link to="/team">
                            <RiTeamLine />
                            Team
                        </Link>
                    </li>
                    <li className="sidebar-menu">
                        <button
                            className="sidebar-button"
                            onClick={handleLogout}
                        >
                            <MdLogout />
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
