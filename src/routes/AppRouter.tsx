import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const LoginScreen = lazy(() => import("../pages/LoginScreen"));
const DashboardRoutes = lazy(() => import("./DashboardRoutes"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={DashboardRoutes} />
        </Switch>
      </Router>
    </Suspense>
  );
}
