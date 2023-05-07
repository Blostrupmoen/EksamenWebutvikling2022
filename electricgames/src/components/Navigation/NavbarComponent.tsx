import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            Electric games
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/AllChampions"}>
                All Champions
              </Nav.Link>
              <Nav.Link as={Link} to={"/SearchChampion"}>
                Search Champion
              </Nav.Link>
              <Nav.Link as={Link} to={"/AddNew"}>
                Add new Champion
              </Nav.Link>
              <Nav.Link as={Link} to={"/UpdateChampion"}>
                Update Champion
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
