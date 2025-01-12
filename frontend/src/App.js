import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Create from "./pages/create";
import Edit from "./pages/edit";

function App() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <nav
        className="d-flex flex-column bg-dark text-white vh-100 p-3"
        style={{ width: "250px" }}
      >
        <h2 className="text-center">Dashboard</h2>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              Home
            </Link>
          </li>
          <li className="nav-item mt-3">
            <Link
              to="/create"
              className="btn btn-white text-white fw-bold rounded-pill shadow-sm"
            >
              + Create
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
