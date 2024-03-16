import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { constant } from "../environments/constant";
import teams from "../data/teams";

import "../style/components.css";

const TeamForm = () => {
    const [showaddmember, setShowaddmember] = useState(false);
    const [leader, setLeader] = useState([]);
    const [totalData, setTotalData] = useState("");
    const [notif, setNotif] = useState("");
    const [team, setTeam] = useState({
        id: "",
        team: "",
        lead: "Leader",
        members: [],
        createdAt: "",
    });
    const [member, setMember] = useState({
        membername: "",
        job: "",
    });

    const formMember = [];

    const navigate = useNavigate();

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
        setNotif("");
        setTeam({
            ...team,
            id: uuid,
            createdAt: time,

            [e.target.name]: e.target.value,
        });
    };

    const handleChangeMember = (e) => {
        setNotif("");
        setMember({
            ...member,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddMember = () => {
        setNotif("");
        setShowaddmember(!showaddmember);
        setMember({
            membername: "",
            job: "",
        });
    };

    console.log("formember", formMember);

    const handleAdd = () => {
        setNotif("");
        setShowaddmember(!showaddmember);

        setTeam({
            ...team,
            members: [...team.members, member],
        });
    };

    console.log(team.members);

    const handleDelete = (key) => {
        setTeam({
            ...team,
            members: team.members.filter((item, index) => index !== key),
        });
    };

    team.members.map((item, index) =>
        formMember.push(
            <div key={index} className="members-field after-add">
                <input value={item.membername} disabled />
                <input value={item.job} disabled />
                <div>
                    <button onClick={() => handleDelete(index)}>delete</button>
                </div>
            </div>
        )
    );

    const handleSubmit = () => {
        if (team.lead !== "Leader" && team.team && team.members.length > 0) {
            teams.push(team);
            setTeam({
                id: "",
                team: "",
                lead: "Leader",
                members: [],
                createdAt: "",
            });
            setTimeout(() => {
                navigate("/team");
            }, 1500);
        } else {
            setNotif("compleate the fields");
        }
    };

    return (
        <div className="form">
            {notif && <p className="notif-form">{notif}</p>}
            <input
                name="team"
                type="text"
                placeholder="Team name"
                value={team.team}
                onChange={handleChangeTeam}
            />
            <select name="lead" value={team.lead} onChange={handleChangeTeam}>
                <option>Leader</option>
                {leader &&
                    leader.map((lead, index) => (
                        <option value={lead}>{lead}</option>
                    ))}
            </select>
            <div className="member-add">
                <h4>Member</h4>
                {team.members.length !== 0 && formMember}

                {showaddmember && (
                    <div className="members-field before-add">
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

                        <button
                            onClick={handleAdd}
                            disabled={
                                member.job && member.membername ? false : true
                            }
                        >
                            Add
                        </button>
                    </div>
                )}
            </div>

            {!showaddmember && (
                <button onClick={handleAddMember}>Add Member</button>
            )}

            <button type="submit" onClick={handleSubmit}>
                submit
            </button>
        </div>
    );
};

export default TeamForm;
