import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/useAuth";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;