import { Navbar } from "../components";
import { Switch, Route, Redirect } from "react-router-dom";
import { DcScreen, HeroeScreen, MarvelScreen } from "../pages";

function DashboardRoutes() {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/heroe/:heroeId" component={HeroeScreen} />
          <Route exact path="/dc" component={DcScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
}

export default DashboardRoutes;
