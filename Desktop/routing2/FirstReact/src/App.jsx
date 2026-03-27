import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import About from "./About.jsx";
import Home from "./Home.jsx";
import "./App.css";
import Conditional from "./Conditional.jsx";
import SignupPage from "./SignupPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/Dashboard" className="nav-link">
          Dashboard
        </Link>
        <Link to="/About" className="nav-link">
          About
        </Link>
        <Link to="/Login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Conditional />} />
        <Route path="/SignupPage" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
