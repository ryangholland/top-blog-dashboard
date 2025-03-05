import { useAuth } from "../context/useAuth";

function Login() {
  const { login } = useAuth();

  return (
    <div className="container text-center mt-5">
      <h2>Login</h2>
      <button className="btn btn-primary" onClick={login}>
        Log In
      </button>
    </div>
  );
}

export default Login;
