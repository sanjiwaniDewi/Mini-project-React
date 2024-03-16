import { useState } from "react";
import { useNavigate } from "react-router-dom";
import projects from "../data/project.js";
import teams from "../data/teams.js";

import "../style/components.css";

const ProjectForm = () => {
    const [newproject, setNewProject] = useState({
        id: "",
        project: "",
        team: "Team",
        start: "",
        end: "",
        detail: "",
    });
    const [notif, setNotif] = useState("");

    const navigate = useNavigate();

    let uuid = self.crypto.randomUUID();
    let start = new Date().toLocaleDateString();

    const handleEndDateFormat = (date) => {
        return date.split("-").reverse().join("-");
    };
    const handleStartDateFormat = (date) => {
        const start = date.split("/");
        start[0].length < 2 ? (start[0] = 0 + start[0]) : start[0];

        return start.join("-");
    };

    const handleChange = (e) => {
        setNotif("");
        if (e.target.name === "end") {
            setNewProject({
                ...newproject,
                id: uuid,
                start: handleStartDateFormat(start),
                [e.target.name]: handleEndDateFormat(e.target.value),
            });
        } else {
            setNewProject({
                ...newproject,
                id: uuid,
                start: handleStartDateFormat(start),
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = (e) => {
        if (
            newproject.team !== "Team" &&
            newproject.detail &&
            newproject.start &&
            newproject.project
        ) {
            setNotif("");
            projects.push(newproject);
            setNewProject({
                id: "",
                project: "",
                team: "Team",
                start: "",
                end: "",
                detail: "",
            });
            setTimeout(() => {
                navigate("/project");
            }, 1000);
        } else {
            setNotif("compleate the fields");
        }
    };

    return (
        <div className="form">
            {notif && <p className="notif-form">{notif}</p>}
            <input
                type="text"
                name="project"
                placeholder="project name"
                value={newproject.project}
                onChange={handleChange}
            />
            <select
                name="team"
                id="team"
                value={newproject.team}
                onChange={handleChange}
            >
                <option>Team</option>
                {teams.length &&
                    teams.map((person, index) => (
                        <option key={index}>{person.team}</option>
                    ))}
            </select>

            <input
                name="end"
                type="date"
                value={newproject.date}
                onChange={handleChange}
            />

            <textarea
                name="detail"
                id="detail"
                cols="30"
                rows="10"
                placeholder="Description"
                value={newproject.detail}
                onChange={handleChange}
            ></textarea>

            <input type="file" />
            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};

export default ProjectForm;
