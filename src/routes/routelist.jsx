import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LeaderDetail from "../pages/LeaderDetail";

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
];

export default routeslist;
