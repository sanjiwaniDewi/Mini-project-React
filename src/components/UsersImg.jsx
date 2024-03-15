import { useEffect, useState } from "react";
import axios from "axios";

const UserImg = () => {
    const [email, setEmail] = useState(localStorage.getItem("email"));

    const [user, setUser] = useState("");
    const [totalData, setTotalData] = useState("");

    const handleTotalData = () => {
        // setUser(users.filter((item) => item.email === email));
        axios

            .get("https://reqres.in/api/users")
            .then((res) => setTotalData(res.data.total))
            .catch((err) => console.log(err));
    };

    console.log(totalData);

    useEffect(() => {
        handleTotalData();
    }, []);

    const handleUser = () => {
        axios
            .get(`https://reqres.in/api/users?per_page=${totalData}`)
            .then((res) =>
                setUser(...res.data.data.filter((item) => item.email === email))
            )
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        handleUser();
    }, [totalData]);
    console.log(user);

    return (
        <div className="user">
            <img className="user" src={user?.avatar} alt="user" />
        </div>
    );
};

export default UserImg;
