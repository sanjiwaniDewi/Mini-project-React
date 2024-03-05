import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FormLogReg = ({ title }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notif, setNotif] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div>
            <h1>{title}</h1>

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
            <button type="submit">Submit</button>
        </div>
    );
};
