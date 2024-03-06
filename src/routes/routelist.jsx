import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LeaderDetail from "../pages/LeaderDetail";
import Project from "../pages/Project";
import NewProject from "../pages/NewProject";

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
        element: <Dashboard />,
    },
    {
        path: "/leader-detail/:id",
        element: <LeaderDetail />,
    },
    {
        path: "/project",
        children: [
            {
                element: <Project />,
                index: true,
            },
            {
                path: "new-project",
                element: <NewProject />,
            },
        ],
    },
];

export default routeslist;
