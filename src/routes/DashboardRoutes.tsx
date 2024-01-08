import { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Navbar } from "../components";

const DcScreen = lazy(() => import("../pages/DcScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen"));
const MarvelScreen = lazy(() => import("../pages/MarvelScreen"));
const HeroeScreen = lazy(() => import("../pages/HeroeScreen"));

function DashboardRoutes() {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/heroe/:heroeId" component={HeroeScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
}

export default DashboardRoutes;
