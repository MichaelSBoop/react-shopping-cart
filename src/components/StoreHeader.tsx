import { Button, Nav } from "react-bootstrap";
import { Searchbar } from "./Searchbar";
import { NavLink } from "react-router-dom";

export function StoreHeader() {
  return (
    <>
      <Searchbar></Searchbar>
      <div className="mb-4">
        <Button className="me-1">
          <Nav.Link to="." as={NavLink}>
            All
          </Nav.Link>
        </Button>
        <Button className="mx-1">
          <Nav.Link to="cookware" as={NavLink}>
            Cookware
          </Nav.Link>
        </Button>
        <Button className="mx-1">
          <Nav.Link to="electronics" as={NavLink}>
            Electronics
          </Nav.Link>
        </Button>
        <Button className="mx-1">
          <Nav.Link to="furniture" as={NavLink}>
            Furniture
          </Nav.Link>
        </Button>
      </div>
    </>
  );
}
