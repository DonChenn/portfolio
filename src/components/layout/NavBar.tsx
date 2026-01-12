import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="nav-container">
          {/* name button */}
          <div className="logo-container">
            <div>
              <Link className="logo-name" to="/">
                Donovan Chen
              </Link>
            </div>
          </div>

          {/* nav buttons */}
          <ul className="nav-links">
            <li>
              <Link to="/projects" className="nav-projects">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-about">
                About
              </Link>
            </li>
            <li>
              <a className="nav-resume" href='/Donovan_Chen_2026.pdf' target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
