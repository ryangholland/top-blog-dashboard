import { useAuth } from "../context/AuthContext";

function Home() {
  const { logout } = useAuth();

  return (
    <div className="container text-center mt-5">
      <h2>Hi. You're logged in.</h2>
      <button className="btn btn-danger" onClick={logout}>
        Log Out
      </button>
    </div>
  );
}

export default Home;