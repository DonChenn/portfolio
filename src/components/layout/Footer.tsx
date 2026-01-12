import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p className="footer-text">Stay in touch</p>
        <div className="icon-container">
          <a className="icon-link" href="https://www.linkedin.com/in/donovan-chen/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
          <a className="icon-link" href="https://github.com/DonChenn" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
          <a className="icon-link" href="mailto:DonovanAChen@email.com">
            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
