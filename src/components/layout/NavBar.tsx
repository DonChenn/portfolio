import resume from "../../../public/Donovan_Chen_2026.pdf";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      {/* Navigation Bar */}
      <nav>
        {/* name button */}
        <div className="logo">
          <Link className="logo-name" to="/">
            Donovan Chen
          </Link>
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
              About Me
            </Link>
          </li>
          <li>
            <a className="nav-resume" href={resume} target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
