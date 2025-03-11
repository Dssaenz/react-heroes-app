import { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { AuthContext } from "../auth/authContext";

import { LoginScreen } from "../pages";

import DashboardRoutes from "./DashboardRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

export default function AppRoutes() {
  const { logged } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <PublicRoutes
          path="/login"
          component={LoginScreen}
          isAuthenticated={logged}
        />

        <PrivateRoutes
          path="/"
          component={DashboardRoutes}
          isAuthenticated={logged}
        />
      </Switch>
    </Router>
  );
}
