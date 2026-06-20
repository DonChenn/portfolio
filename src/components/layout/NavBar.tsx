import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="nav-container">
          {/* name button */}
          <div className="logo-container">
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <img src="/portfolio/logo.svg" alt="DC logo" style={{ height: "1.5rem" }} />
              <span className="logo-name">Donovan Chen</span>
            </Link>
          </div>

          {/* nav buttons */}
          <ul className="nav-links">
            <li>
              <Link to="/projects" className="nav-projects">
                all projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-about">
                about
              </Link>
            </li>
            <li>
              <a
                className="nav-resume"
                href="/portfolio/Donovan_Chen_2026.pdf"
                target="_blank"
              >
                resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
