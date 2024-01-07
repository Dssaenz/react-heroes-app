import { useHistory } from "react-router-dom";

function LoginScreen() {
  const history = useHistory();
  const handleLogin = () => history.replace("/");

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
