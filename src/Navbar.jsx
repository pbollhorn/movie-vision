import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#eee" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>
        Home
      </Link>
      <Link to="/vision" style={{ marginRight: "1rem" }}>
        Vision
      </Link>
      <Link to="/endpoints">Endpoints</Link>
    </nav>
  );
}
