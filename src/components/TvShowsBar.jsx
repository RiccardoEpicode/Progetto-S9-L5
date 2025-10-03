import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faTh } from "@fortawesome/free-solid-svg-icons";

export default function TvShowsBar() {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-between mt-3">
      <div className="d-flex align-items-center">
        <h2 className="mb-0 text-white">TV Shows</h2>

        <Dropdown className="ms-3">
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Genres
          </Dropdown.Toggle>

          <Dropdown.Menu className="bg-dark border border-light">
            <Dropdown.Item href="#" className="text-white">
              Action
            </Dropdown.Item>
            <Dropdown.Divider className="border-light" />
            <Dropdown.Item href="#" className="text-white">
              Comedy
            </Dropdown.Item>
            <Dropdown.Divider className="border-light" />
            <Dropdown.Item href="#" className="text-white">
              Drama
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <ButtonGroup>
        <Button variant="outline-light">
          <FontAwesomeIcon icon={faList} />
        </Button>
        <Button variant="outline-light">
          <FontAwesomeIcon icon={faTh} />
        </Button>
      </ButtonGroup>
    </div>
  );
}
