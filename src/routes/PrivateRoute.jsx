import { Children, useContext } from "react";
import { AuthCotext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthCotext);
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;