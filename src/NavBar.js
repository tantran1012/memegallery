import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar({ handleAll, handleRandom }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand onClick={handleAll}>
          <Image
            src="logo192.png"
            alt={document.title}
            width="35"
            height="35"
            fluid
          />{' '}
          Memes Gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleAll}>Tất cả meme</Nav.Link>
            <Nav.Link onClick={handleRandom}>Ngẫu nhiên</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
