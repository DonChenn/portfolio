import resume from "../../../public/Donovan_Chen_2026.pdf";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 py-4">
        <div className="container-fluid">
          {/* name button */}
          <div className="logo">
            <Link
              className="logo-name h4 text-decoration-none text-dark"
              to="/"
            >
              Donovan Chen
            </Link>
          </div>

          {/* nav buttons */}
          <ul className="nav-links d-flex list-unstyled m-0 gap-4">
            <li>
              <Link to="/projects" className="text-decoration-none text-dark">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-decoration-none text-dark">
                About Me
              </Link>
            </li>
            <li>
              <a
                className="text-decoration-none text-dark"
                href={resume}
                target="_blank"
              >
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
