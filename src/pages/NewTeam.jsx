import { useState } from "react";
import InputMember from "../components/InputMember";

const NewTeam = () => {
    const [showaddmember, setShowaddmember] = useState(false);

    const [team, setTeam] = useState({
        id: "",
        name: "",
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

    console.log(team);

    return (
        <div>
            <h2>New Team</h2>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50vw",
                    gap: 5,
                }}
            >
                <input
                    name="name"
                    type="text"
                    placeholder="Team name"
                    value={team.name}
                    onChange={handleChangeTeam}
                />
                <select
                    name="lead"
                    value={team.lead}
                    onChange={handleChangeTeam}
                >
                    <option value="kambing">Kambing</option>
                    <option value="kucing">Kucing</option>
                    <option value="kelinci">kelinci</option>
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
                <button onClick={handleAddMember}>Add Member</button>

                <button>submit</button>
            </div>
        </div>
    );
};

export default NewTeam;
