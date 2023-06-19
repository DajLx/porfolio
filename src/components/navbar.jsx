import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/navbar.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { changeTheme } from "../state/theme";

function MyNavbar() {
  const theme = useSelector((state) => state.theme);
  const navigate = useNavigate();

  console.log(theme);

  return (
    <Navbar expand="lg" className={`NavbarContainer${theme}`}>
      <Container>
        <Navbar.Brand
          className={`NavbarItems${theme}`}
          onClick={() => navigate("/")}
        >
          Breiner Duran
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ backgroundColor: " rgba(240, 240, 240, 0.459)" }}
          aria-controls="basic-navbar-nav text-primary-emphasis"
          className={`NavbarItems${theme}`}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className={`NavbarItems${theme}`}
              onClick={() => navigate("/aboutMe")}
            >
              Acerca de mi
            </Nav.Link>
            <Nav.Link
              className={`NavbarItems${theme}`}
              onClick={() => navigate("/porfolio")}
            >
              Porfolio
            </Nav.Link>
            <Nav.Link
              className={`NavbarItems${theme}`}
              onClick={() => navigate("/contact")}
            >
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

//  <Navbar expand="lg" className={`NavbarContainer${theme}`}>
//       <Container>
//         <Navbar.Brand
//           href="#home"
//           className={`NavbarItems${theme}`}
//           style={{ width: "100%", textAlign: "start", paddingTop: "10px" }}
//         ></Navbar.Brand>
//         <p style={{ fontSize: "20px" }}>Breiner D.</p>
//       </Container>
//     </Navbar>
