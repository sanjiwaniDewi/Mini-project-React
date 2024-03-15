import { useState, useEffect } from "react";
import Table from "../components/Table";
import axios from "axios";
import Pagination from "../components/Pagination";
import Layout from "../components/Layout";
import "../style/pages.css";

const Dashboard = () => {
    const [leader, setLeader] = useState([]);
    const [pagination, setPagination] = useState({
        page: 1,
        per_page: 0,
        total: 0,
        total_pages: 0,
    });

    const handleLeaderData = () => {
        axios
            .get(`https://reqres.in/api/users?page=${pagination.page}`)
            .then((res) => {
                const dataLead = [];
                res.data.data.map((item) => {
                    const data = {
                        id: item.id,
                        name: `${item.first_name} ${item.last_name}`,
                        email: item.email,
                        avatar: item.avatar,
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

    const handlePagination = (num) => {
        setPagination({
            ...pagination,
            page: num,
        });
    };

    useEffect(() => {
        handleLeaderData();
    }, [pagination.page]);

    return (
        <Layout title="Dashboard">
            <div className="middle-section">
                <div className="card" style={{ height: "30vh" }}>
                    <h2>Project Graph</h2>
                </div>
                <div className="aside">
                    <div className="card" style={{ height: "14vh" }}>
                        <h2>Top Team</h2>
                    </div>
                    <div className="card" style={{ height: "14vh" }}>
                        <h2>top leader</h2>
                    </div>
                </div>
            </div>
            <div className="end-section">
                <div className="card">
                    <Table data={leader} />

                    <Pagination
                        currentPage={pagination.page}
                        total={pagination.total_pages}
                        handlePagination={handlePagination}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
