import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Table from "../components/Table";

import "../style/pages.css";

const ProjectandTeam = ({ title, data, route }) => {
    return (
        <Layout title={`${title} Page`}>
            <div className="content-main">
                <Table data={data} />

                <div className="button-create">
                    <Link to={route}>
                        <button>Create New {title}</button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default ProjectandTeam;
