import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";

const Navbar: React.FC = () => {
  const history = useHistory();
  const { name, signOut } = useContext(AuthContext);

  const handleLogout = () => {
    history.push("/login");
    signOut();
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Asociaciones
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {["marvel", "dc", "search"].map((route) => (
              <li className="nav-item" key={route}>
                <NavLink className="nav-link" to={`/${route}`}>
                  {route.charAt(0).toUpperCase() + route.slice(1)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <span className="text-info">{name}</span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
