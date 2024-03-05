import { useState } from "react";
const LeaderDetail = () => {
    const [leaderData, setLeaderData] = useState({});
    return (
        <>
            <h2>Detail Leader</h2>
            <div>
                <img src="" alt="avatar" />
                <h3>name</h3>
                <p>email</p>
            </div>
        </>
    );
};

export default LeaderDetail;
