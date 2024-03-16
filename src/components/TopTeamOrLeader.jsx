import "../style/components.css";

const TopTeamOrLeader = ({ name, projects }) => {
    return (
        <div className="top-team-leader animate__animated animate__fadeInDown">
            <p>{name}</p>
            <div>
                <p>{projects}</p>
                <p>projects</p>
            </div>
        </div>
    );
};

export default TopTeamOrLeader;
