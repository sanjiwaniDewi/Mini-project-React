import { useEffect, useState } from "react";

import teams from "../data/teams";
import Layout from "../components/Layout";
import axios from "axios";

import "../style/pages.css";
import { constant } from "../environments/constant";

const NewTeam = () => {
    const [showaddmember, setShowaddmember] = useState(false);
    const [leader, setLeader] = useState([]);
    const [totalData, setTotalData] = useState("");

    const [team, setTeam] = useState({
        id: "",
        team: "",
        lead: "",
        members: [],
        createdAt: "",
    });
    const [member, setMember] = useState({
        membername: "",
        job: "",
    });

    let uuid = self.crypto.randomUUID();
    let time = new Date().toLocaleDateString();

    const handledataLeader = () => {
        axios

            .get(constant.user)
            .then((res) => setTotalData(res.data.total))
            .catch((err) => console.log(err));

        axios
            .get(`${constant.user}?per_page=${totalData}`)
            .then((res) =>
                setLeader(
                    res.data.data.map(
                        (item) => `${item.first_name} ${item.last_name}`
                    )
                )
            )
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        handledataLeader();
    }, [totalData]);

    const handleChangeTeam = (e) => {
        setTeam({
            ...team,
            id: uuid,
            createdAt: time,

            [e.target.name]: e.target.value,
        });
    };

    const handleChangeMember = (e) => {
        setMember({
            ...member,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddMember = () => {
        setShowaddmember(!showaddmember);
        setMember({
            membername: "",
            job: "",
        });
    };

    const handleAdd = () => {
        setShowaddmember(!showaddmember);
        setTeam({
            ...team,
            members: [...team.members, member],
        });
    };

    const handleSubmit = () => {
        teams.push(team);
    };

    return (
        <Layout title="New Team">
            <div className="content-main content-form">
                <div className="form">
                    <input
                        name="team"
                        type="text"
                        placeholder="Team name"
                        value={team.team}
                        onChange={handleChangeTeam}
                    />
                    <select
                        name="lead"
                        value={team.lead}
                        onChange={handleChangeTeam}
                    >
                        {leader &&
                            leader.map((lead, index) => (
                                <option value={lead}>{lead}</option>
                            ))}
                    </select>
                    <h5>Member</h5>
                    {team.members.length !== 0 &&
                        team.members.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 5,
                                }}
                            >
                                <input value={item.membername} disabled />
                                <input value={item.job} disabled />
                                <div>
                                    <button>delete</button>
                                </div>
                            </div>
                        ))}

                    {showaddmember && (
                        <div>
                            <input
                                name="membername"
                                type="text"
                                placeholder="member name"
                                value={member.membername}
                                onChange={handleChangeMember}
                            />
                            <input
                                name="job"
                                type="text"
                                placeholder="job"
                                value={member.job}
                                onChange={handleChangeMember}
                            />

                            <button onClick={handleAdd}>Add</button>
                        </div>
                    )}
                    {!showaddmember && (
                        <button onClick={handleAddMember}>Add Member</button>
                    )}

                    <button type="submit" onClick={handleSubmit}>
                        submit
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default NewTeam;
