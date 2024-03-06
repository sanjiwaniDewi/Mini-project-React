import Layout from "../components/Layout";

const NewProject = () => {
    return (
        <Layout>
            <h2>New Project</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <input type="text" placeholder="project name" />
                <select name="team" id="team">
                    <option>Team</option>
                    <option value="Ayam">Ayam</option>
                    <option value="Kambing">Kambing</option>
                    <option value="Kerbau">Kerbau</option>
                    <option value="Sapi">Sapi</option>
                </select>

                <input type="date" />

                <textarea
                    name="detail"
                    id="detail"
                    cols="30"
                    rows="10"
                    placeholder="Description"
                ></textarea>

                <input type="file" />
                <button type="submit">Submit</button>
            </div>
        </Layout>
    );
};

export default NewProject;
