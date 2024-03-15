import { RiDashboardLine } from "react-icons/ri";
import { GrTasks } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";

const SidebarClose = ({ handleShow, handleShowModal }) => {
    return (
        <div className="sidebar sidebar-close">
            <div className="inside-sidebar-close">
                <button
                    onClick={handleShow}
                    className="sidebar-button sidebar-btn-open"
                >
                    <GiHamburgerMenu />{" "}
                </button>
                <h2>PC</h2>
                <ul className="sidebar-nav sidebar-nav-close">
                    <li className="sidebar-menu sidebar-menu-close">
                        <Link to="/">
                            <RiDashboardLine />
                        </Link>
                    </li>
                    <li className="sidebar-menu sidebar-menu-close">
                        <Link to="/project">
                            <GrTasks />
                        </Link>
                    </li>
                    <li className="sidebar-menu sidebar-menu-close">
                        <Link to="/team">
                            <RiTeamLine />
                        </Link>
                    </li>
                    <li className="sidebar-menu sidebar-menu-close">
                        <button
                            className="sidebar-button"
                            onClick={handleShowModal}
                        >
                            <MdLogout alt="Logout" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SidebarClose;
