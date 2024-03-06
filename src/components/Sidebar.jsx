import { Link } from "react-router-dom";

const Sidebar = ({ handle }) => {
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
                        <Link to="/project">Team</Link>
                    </li>
                    <li>
                        <Link to="/login">Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
