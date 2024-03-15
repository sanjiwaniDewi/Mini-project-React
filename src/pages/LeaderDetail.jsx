import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import "../style/components.css";
import ExperiencesAndSkils from "../components/ExperiencesAndSkils";
import Achivement from "../components/Achivement";
import { constant } from "../environments/constant";

const LeaderDetail = () => {
    const [leaderData, setLeaderData] = useState({});
    const [loading, setLoading] = useState(false);
    const [notif, setNotif] = useState("");

    const { id } = useParams();

    const getLeaderDetail = () => {
        setLoading(true);
        axios
            .get(`${constant.user}/${id}`)
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
        <Layout title="Detail Leader">
            {loading ? (
                <div className="content-main content-detail detail-loading">
                    <h2>Loading ....</h2>
                </div>
            ) : notif ? (
                <div className="content-main content-detail detail-loading">
                    <h2>{notif}</h2>
                </div>
            ) : (
                <div className="content-main content-detail">
                    <div className="leader-detail">
                        <img
                            className="leader-detail-avatar"
                            src={leaderData.avatar}
                            alt="avatar"
                        />
                        <div className="card card-leader">
                            <div className="content-leader">
                                <h1>
                                    {leaderData.first_name}{" "}
                                    {leaderData.last_name}
                                </h1>
                                <p className="leader-email">
                                    email: {leaderData.email}
                                </p>

                                <ExperiencesAndSkils />
                                <Achivement />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default LeaderDetail;
