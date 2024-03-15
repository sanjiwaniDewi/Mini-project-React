import Layout from "../components/Layout";
import TeamForm from "../components/TeamForm";

const NewTeam = () => {
    return (
        <Layout title="New Team">
            <div className="content-main content-form">
                <TeamForm />
            </div>
        </Layout>
    );
};

export default NewTeam;
