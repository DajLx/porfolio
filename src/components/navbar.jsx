import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/navbar.css";
import { useSelector } from "react-redux";
import content from "../../transletor.json";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { changeTheme } from "../state/theme";
import { Form } from "react-bootstrap";
import { switchLanguage } from "../state/language";
import { useEffect } from "react";
function MyNavbar() {
  const dis = useDispatch();
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);
  useEffect(() => console.log(language), language);

  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className={`NavbarContainer${theme}`}>
      <Container>
        <Navbar.Brand
          className={`NavbarItems${theme}`}
          onClick={() => navigate("/")}
          href={"#mainView"}
        >
          Breiner Duran
        </Navbar.Brand>

        <Navbar.Toggle
          style={{ backgroundColor: " rgba(240, 240, 240, 0.459)" }}
          aria-controls="basic-navbar-nav text-primary-emphasis"
          className={`NavbarItems${theme}`}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto "
            style={{ display: "flex", alignItems: "flex-end" }}
          >
            <Nav.Link href="#sobreMi" className={`NavbarItems${theme}`}>
              {content.navbar[language].aboutMe}
            </Nav.Link>
            <Nav.Link href="#portafolio" className={`NavbarItems${theme}`}>
              {content.navbar[language].portfolio}
            </Nav.Link>
            <Nav.Link href="#contacto" className={`NavbarItems${theme}`}>
              {content.navbar[language].contact}
            </Nav.Link>
            <Nav.Link></Nav.Link>
          </Nav>
          <div
            style={{
              with: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label={content.navbar[language].translator}
              className={`bottonTranslator NavbarItems${theme}`}
              onClick={() => dis(switchLanguage())}
            />
          </div>
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
