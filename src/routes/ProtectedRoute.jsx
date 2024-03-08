import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    let token = localStorage.getItem("access_token");
    if (!token) {
        return <Navigate to="/login" />;
    }

    return <>{children || <Outlet />}</>;
};

export default ProtectedRoute;
