import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRout = ({children}) => {

    const {user,loading} = useContext(AuthContext)

    const location = useLocation();
    console.log(location)

    if(loading){
        return <span className="loading loading-bars loading-lg mx-auto "></span>
    }

    if(user){
        return children
    }
    return  <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRout;