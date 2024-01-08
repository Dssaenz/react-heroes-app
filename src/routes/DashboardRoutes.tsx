import { Navbar } from "../components";
import { Switch, Route, Redirect } from "react-router-dom";
import { DcScreen, HeroeScreen, MarvelScreen, SearchScreen } from "../pages";

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
