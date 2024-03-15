import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import "../style/components.css";
import ExperiencesAndSkils from "../components/ExperiencesAndSkils";
import Achivement from "../components/Achivement";

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
        <Layout>
            <h2>Detail Leader</h2>
            {loading ? (
                <h2>Loading ....</h2>
            ) : notif ? (
                <p>{notif}</p>
            ) : (
                <div className="leader-detail">
                    <img
                        className="leader-detail-avatar"
                        src={leaderData.avatar}
                        alt="avatar"
                    />
                    <div className="card card-leader">
                        <div className="content-leader">
                            <h1>
                                {leaderData.first_name} {leaderData.last_name}
                            </h1>
                            <p className="leader-email">
                                email: {leaderData.email}
                            </p>

                            <ExperiencesAndSkils />
                            <Achivement />
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default LeaderDetail;
