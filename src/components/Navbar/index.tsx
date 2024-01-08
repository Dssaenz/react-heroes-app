import { FC, useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

import { AuthContext } from "../../auth/authContext";

const Navbar: FC = () => {
  const history = useHistory();
  const { name, signOut } = useContext(AuthContext);

  const handleLogout = () => {
    history.replace("/login");
    signOut();
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/marvel">
            Marvel
          </NavLink>

          <NavLink className="nav-item nav-link" to="/dc">
            DC
          </NavLink>

          <NavLink className="nav-item nav-link" to="/search">
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <p className="nav-item nav-link text-info m-0">{name}</p>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
