import { Route, Redirect } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";


const PrivateRouteSuperAdmin = ({ component: Component,...rest }) => {
const token = localStorage.getItem("token");
const user = useSelector((state) => state.userReducer.user);

if (token && (user && user.role===2)  ) {
    return <Route component={Component} {...rest} />;}

return <Redirect to="/signin" />;
};
export default PrivateRouteSuperAdmin 