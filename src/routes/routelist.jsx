import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LeaderDetail from "../pages/LeaderDetail";
import Project from "../pages/Project";
import NewProject from "../pages/NewProject";
import ProtectedRoute from "./ProtectedRoute";

const routeslist = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Dashboard />{" "}
            </ProtectedRoute>
        ),
    },
    {
        path: "/leader-detail/:id",
        element: (
            <ProtectedRoute>
                <LeaderDetail />
            </ProtectedRoute>
        ),
    },
    {
        path: "/project",
        children: [
            {
                element: (
                    <ProtectedRoute>
                        <Project />
                    </ProtectedRoute>
                ),
                index: true,
            },
            {
                path: "new-project",
                element: (
                    <ProtectedRoute>
                        <NewProject />
                    </ProtectedRoute>
                ),
            },
        ],
    },
];

export default routeslist;
