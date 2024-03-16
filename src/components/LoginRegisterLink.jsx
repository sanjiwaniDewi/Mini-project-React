import { Link } from "react-router-dom";

import "../style/components.css";

const LoginRegisterLink = ({ title }) => {
    return (
        <div
            className={`link-${title} ${
                title === "Login"
                    ? "animate__animated animate__slideInRight"
                    : "animate__animated animate__slideInLeft"
            }`}
        >
            <div className="content">
                <h1>{title}</h1>
                {title === "Login" ? (
                    <div className="link-content">
                        <p>New in pro.co</p>
                        <Link to="/register">Register Now</Link>
                    </div>
                ) : (
                    <div className="link-content">
                        <p>Have an account</p>
                        <Link to="/login">Login Now</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginRegisterLink;
