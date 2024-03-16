import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { constant } from "../environments/constant";

import "../style/card.css";
import "../style/components.css";

const FormLogReg = ({ title }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notif, setNotif] = useState("");
    const [loading, setLoading] = useState(false);
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    const navigate = useNavigate();

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

    const handleLowerCase = (title) => {
        return title.toLowerCase();
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {
        const payload = {
            email: email,
            password: password,
        };
        setLoading(true);
        axios
            .post(
                handleLowerCase(title) === "login"
                    ? constant.login
                    : constant.register,
                payload
            )
            .then((res) => {
                const token = res.data.token;
                localStorage.setItem("access_token", token);
                localStorage.setItem("email", payload.email);
                setLoading(false);
                setNotif(
                    title === "Login" ? "Login Success" : "Register Success"
                );

                setTimeout(() => {
                    if (title === "Register") {
                        navigate("/login");
                    } else {
                        navigate("/");
                    }
                }, 2000);
            })
            .catch((err) => {
                setNotif(err.response.data.error);
                setLoading(false);
            });
    };

    return (
        <div className="form-logreg ">
            <div
                className={`content ${
                    title === "Login"
                        ? "animate__animated animate__rotateInDownLeft"
                        : "animate__animated animate__rotateInDownRight"
                }`}
            >
                {screenSize < 1000 && <h1>{title}</h1>}
                {notif && (
                    <p
                        className={
                            screenSize < 1000 ? "notif notif-light" : "notif"
                        }
                    >
                        {notif}
                    </p>
                )}
                <div className="inputs">
                    <input
                        type="email"
                        placeholder="email"
                        onChange={handleEmail}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        onChange={handlePassword}
                    />
                </div>

                <button type="submit" onClick={handleSubmit}>
                    {loading ? "loading ..." : handleLowerCase(title)}
                </button>

                {screenSize && title === "Login" ? (
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

export default FormLogReg;
