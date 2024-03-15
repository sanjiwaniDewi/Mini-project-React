import ProjectForm from "../components/ProjectForm.jsx";
import Layout from "../components/Layout";

const NewProject = () => {
    return (
        <Layout title="New Project">
            <div className="content-main content-form">
                <ProjectForm />
            </div>
        </Layout>
    );
};

export default NewProject;
