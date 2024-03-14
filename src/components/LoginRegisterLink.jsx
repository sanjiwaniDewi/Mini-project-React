import { Link } from "react-router-dom";

import "../style/components.css";
import { useEffect, useState } from "react";

const LoginRegisterLink = ({ title }) => {
    const [animate, setAnimate] = useState(
        " animate__animated animate__fadeInRight"
    );

    const handleAnimate = () => {
        title === "Register"
            ? setAnimate(" animate__animated animate__fadeInLeft")
            : "";
    };

    useEffect(() => {
        handleAnimate();
    }, [title]);

    return (
        <div className={"link-" + title + animate}>
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
