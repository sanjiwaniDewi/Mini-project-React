import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LeaderDetail = () => {
    const [leaderData, setLeaderData] = useState({});

    const { id } = useParams();

    const getLeaderDetail = () => {
        axios
            .get(`https://reqres.in/api/users/${id}`)
            .then((res) => {
                setLeaderData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getLeaderDetail();
    }, []);

    return (
        <>
            <h2>Detail Leader</h2>
            <div>
                <img src={leaderData.avatar} alt="avatar" />
                <h3>
                    {leaderData.first_name} {leaderData.last_name}
                </h3>
                <p>{leaderData.email}</p>
            </div>
        </>
    );
};

export default LeaderDetail;
