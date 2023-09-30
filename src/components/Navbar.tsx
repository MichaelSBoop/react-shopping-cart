import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
            onClick={openCart}
          >
            <FaCartShopping size="1.25rem" />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.25rem",
                height: "1.25rem",
                position: "absolute",
                bottom: "-15%",
                right: "-10%",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBS>
  );
}
