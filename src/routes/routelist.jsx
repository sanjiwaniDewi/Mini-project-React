import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LeaderDetail from "../pages/LeaderDetail";
import ProjectandTeam from "../pages/ProjectandTeam";
import NewProject from "../pages/NewProject";
import ProtectedRoute from "./ProtectedRoute";
import projects from "../data/project";
import NewTeam from "../pages/NewTeam";
import teams from "../data/teams";

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
                        <ProjectandTeam
                            title="Project"
                            data={projects}
                            route="new-project"
                        />
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

    {
        path: "/team",
        children: [
            {
                element: (
                    <ProtectedRoute>
                        <ProjectandTeam
                            title="Team"
                            data={teams}
                            route="new-team"
                        />
                    </ProtectedRoute>
                ),
                index: true,
            },
            {
                path: "new-team",
                element: (
                    <ProtectedRoute>
                        <NewTeam />
                    </ProtectedRoute>
                ),
            },
        ],
    },
];

export default routeslist;
