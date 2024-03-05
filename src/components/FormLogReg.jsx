import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FormLogReg = ({ title }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notif, setNotif] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

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
            .post(`https://reqres.in/api/${handleLowerCase(title)}`, payload)
            .then((res) => {
                const token = res.data.token;
                localStorage.setItem("access_token", token);
                setLoading(false);
                setNotif("login berhasil");

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
        <div>
            <h1>{title}</h1>
            {notif && <p>{notif}</p>}
            <div>
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

            {title === "Login" && (
                <div>
                    <p>new in Prods ? </p>
                    <Link to="/register">Register Now</Link>
                </div>
            )}
        </div>
    );
};
