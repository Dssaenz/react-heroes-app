import { Suspense, lazy, useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import DashboardRoutes from "./DashboardRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

import { AuthContext } from "../auth/authContext";

const LoginScreen = lazy(() => import("../pages/LoginScreen"));

export default function AppRoutes() {
  const { logged } = useContext(AuthContext);

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}
