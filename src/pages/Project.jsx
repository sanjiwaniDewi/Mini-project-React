import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Table from "../components/Table";
import projects from "../data/project";

const Project = () => {
    return (
        <Layout>
            <h2>Project page</h2>
            <Table data={projects} />
            <Link to="new-project">Create New Project</Link>
        </Layout>
    );
};

export default Project;
