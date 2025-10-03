// BOOTSTRAP IMPORT
import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENTS IMPORT
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/netflix.svg";

// OTHER IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import ProfilePic from "../../assets/profile.png";

// FUNCTION

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" className="mx-3" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#" className="py-2">
          <img
            src={logo}
            alt="Netflix Logo"
            height="25"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-light" href="#action1">
              Home
            </Nav.Link>
            <Nav.Link className="text-light" href="#action2">
              TV Shows
            </Nav.Link>
            <Nav.Link className="text-light" href="#action1">
              Movies
            </Nav.Link>
            <Nav.Link className="text-light" href="#action2">
              Recently Added
            </Nav.Link>
            <Nav.Link className="text-light" href="#action2">
              My List
            </Nav.Link>
          </Nav>
          <Nav className="d-flex">
            <Nav.Link href="#action1">
              <FontAwesomeIcon icon={faSearch} />
            </Nav.Link>
            <Nav.Link className="text-light" href="#action2">
              KIDS
            </Nav.Link>
            <Nav.Link href="#action2">
              <FontAwesomeIcon icon={faBell} />
            </Nav.Link>
            <NavDropdown
              title={
                <img
                  src={ProfilePic}
                  alt="Profile"
                  height="30"
                  className="rounded-circle"
                />
              }
              id="navbarScrollingDropdown"
              align="end"
            >
              {" "}
              <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
