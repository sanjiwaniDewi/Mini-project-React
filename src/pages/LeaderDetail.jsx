import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LeaderDetail = () => {
    const [leaderData, setLeaderData] = useState({});
    const [loading, setLoading] = useState(false);
    const [notif, setNotif] = useState("");

    const { id } = useParams();

    const getLeaderDetail = () => {
        setLoading(true);
        axios
            .get(`https://reqres.in/api/users/${id}`)
            .then((res) => {
                setLeaderData(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                if (err.message === "Request failed with status code 404") {
                    setNotif("Data Not Found");
                }
            });
    };

    useEffect(() => {
        getLeaderDetail();
    }, []);

    return (
        <>
            <h2>Detail Leader</h2>
            {loading ? (
                <h2>Loading ....</h2>
            ) : notif ? (
                <p>{notif}</p>
            ) : (
                <div>
                    <img src={leaderData.avatar} alt="avatar" />
                    <h3>
                        {leaderData.first_name} {leaderData.last_name}
                    </h3>
                    <p>{leaderData.email}</p>
                </div>
            )}
        </>
    );
};

export default LeaderDetail;
