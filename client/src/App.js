/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Switch } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Errors from "./pages/Errors";
import LandPage from "./pages/LandPage";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import PrivateRoute from "./router/PrivateRoute";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";

import { currentUser } from "./JS/actions/user";

import "./App.css";
import PrivateRouteAdmin from "./router/PrivateRouteAdmin";
import Dashbored from "./pages/Admin/Dashbored";
import Dashboredsuper from "./pages/Admin/SuperAdmin/Dashboredsuper";
import PrivateRouteSuperAdmin from "./router/PrivateRouteSuperAdmin";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRouteAdmin  path="/dashboredAdmin" component={Dashbored} />
        <PrivateRouteSuperAdmin  path="/dashboredSuperAdmin" component={Dashboredsuper} />
        <Route path="/*" component={Errors} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;