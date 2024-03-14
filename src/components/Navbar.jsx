import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Navbar = ({ handleLogout }) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="navbar">
            <div className="navbar-content">
                <div className="navbar-togel">
                    <h1>PRO.CO</h1>
                    <div className="hamburger">
                        <button onClick={handleShowMenu}>
                            {showMenu ? <GrClose /> : <GiHamburgerMenu />}
                        </button>
                    </div>
                </div>

                <div
                    className={
                        showMenu ? "navbar-menu" : " navbar-menu disable"
                    }
                >
                    <ul className="navbar-list">
                        <li className="navbar-menu">
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li className="navbar-menu">
                            <Link to="/project">Project</Link>
                        </li>
                        <li className="navbar-menu">
                            <Link to="/team">Team</Link>
                        </li>
                        <li className="navbar-menu">
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
