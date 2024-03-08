import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ handle }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("access_token");
        setTimeout(() => {
            navigate("/login");
        }, 1000);
    };

    return (
        <div className="sidebar">
            <div className="inside-sidebar">
                <div className="side-button">
                    <button onClick={handle}>Close</button>
                </div>
                <h2>Sidebar</h2>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/project">Project</Link>
                    </li>
                    <li>
                        <Link to="/team">Team</Link>
                    </li>
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
