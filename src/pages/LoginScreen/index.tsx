import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { ASYNC_STORAGE_KEYS } from "../../types/enums";

function LoginScreen() {
  const history = useHistory();
  const { signIn } = useContext(AuthContext);

  const handleLogin = () => {
    const lastPath = localStorage.getItem(ASYNC_STORAGE_KEYS.PATH_NAME) || "/";
    signIn({ name: "Darwin Saenz" });
    history.replace(lastPath);
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default LoginScreen;
