import { useState } from "react";
import Layout from "../components/Layout";

import projects from "../data/project.js";
import teams from "../data/teams.js";

const NewProject = () => {
    const [newproject, setNewProject] = useState({
        id: "",
        name: "",
        team: "",
        start: "",
        end: "",
        detail: "",
    });

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
        console.log(newproject);

        projects.push(newproject);

        setNewProject({
            id: "",
            name: "",
            team: "",
            start: "",
            end: "",
            detail: "",
        });
    };

    return (
        <Layout>
            <h2>New Project</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <input
                    type="text"
                    name="name"
                    placeholder="project name"
                    value={newproject.name}
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
                            <option key={index}>{person.name}</option>
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
        </Layout>
    );
};

export default NewProject;
