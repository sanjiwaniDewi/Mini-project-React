import { useState, useEffect } from "react";
import Table from "../components/Table";
import axios from "axios";

const Dashboard = () => {
    const [leader, setLeader] = useState([]);
    const [pagination, setPagination] = useState({
        page: 1,
        per_page: 0,
        total: 0,
        total_pages: 0,
    });

    const handleLeaderData = () => {
        axios.get(`https://reqres.in/api/users?page=${page}`).then((res) => {
            const dataLead = [];
            res.data.data.map((item) => {
                const data = {
                    id: item.id,
                    name: `${item.first_name} ${item.last_name}`,
                    email: item.email,
                };
                setPagination({
                    page: res.data.page,
                    per_page: res.data.per_page,
                    total: res.data.total,
                    total_pages: res.data.total_pages,
                });

                dataLead.push(data);
            });
            setLeader(dataLead);
        });
    };

    useEffect(() => {
        handleLeaderData(page);
    }, [page]);

    return (
        <>
            <h1> Dashboard</h1>
            <Table leaderData={leader} />
        </>
    );
};

export default Dashboard;
