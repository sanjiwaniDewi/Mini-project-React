import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Table from "../components/Table";
import projects from "../data/project";

const ProjectandTeam = ({ title, data, route }) => {
    return (
        <Layout title={`${title} Page`}>
            <Table data={data} />
            <Link to={route}>Create New {title}</Link>
        </Layout>
    );
};

export default ProjectandTeam;
