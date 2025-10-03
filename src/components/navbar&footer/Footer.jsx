import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-dark text-secondary py-5">
      <div className="container">
        <div className="mb-3 d-flex gap-3">
          <a href="https://facebook.com" className="text-secondary">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a href="https://instagram.com" className="text-secondary">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://twitter.com" className="text-secondary">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://youtube.com" className="text-secondary">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
        </div>

        <div className="row">
          <div className="col-6 col-md-3 mb-3">
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-secondary">
                  Audio and Subtitles
                </a>
              </li>
              <li>
                <a href="#!" className="text-secondary">
                  Media Center
                </a>
              </li>
              <li>
                <a href="#!" className="text-secondary">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#!" className="text-secondary">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-secondary">
                  Audio Description
                </a>
              </li>
              <li>
                <a href="#!" className="text-secondary">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#!" className="text-secondary">
                  Legal Notices
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-secondary">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#!" className="text-secondary">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#!" className="text-secondary">
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-secondary">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#!" className="text-secondary">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#!" className="text-secondary">
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>
        </div>

        <button className="btn btn-outline-secondary btn-sm mt-3">
          Service Code
        </button>

        <p className="mt-3 small text-secondary">
          © 2025 RRSYSTEMS, Netflix Clone.
        </p>
      </div>
    </footer>
  );
}
