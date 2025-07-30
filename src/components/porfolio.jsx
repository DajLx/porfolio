import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../assets/";
import Modal from "../commons/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShow } from "../state/show";
import { proyects } from "../../proyects.json";
import content from "../../transletor.json"

function Porfolio() {
  const dispatch = useDispatch();
  const handleShow = () => dispatch(setShow(true));
  const language = useSelector((state) => state.language);
  const [proyect, setProyect] = useState("");
  const [active, setActive] = useState(false);
  setTimeout(() => setActive(true), "500");

  return (
    <>
      <Container
        id="portafolio"
        style={{ alignItems: "center", margin: "1.5rem auto" }}
        className={active ? "portfolio portfolio-active" : "portfolio"}
      >
        <h2 style={{ marginBottom: "2rem" }}>{content.portfolio[language].title}</h2>
        <Row>
          {Object.entries(proyects).map(([key, proyect]) => (
            <Col
              xs={12}
              md={6}
              onClick={() => {
                handleShow(), setProyect(proyect.name);
              }}
              style={{ marginBottom: "1rem" }}
            >
              <div style={{ height: "70%", width: "100%" }}>
                <span style={{ marginBottom: "2rem" }}>{proyect.name}</span>
                <img
                  src={img[`img${proyect.name}`]}
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "10%",
                    margin: "0 0 1rem",
                  }}
                />
              </div>
            </Col>
          ))}
          {/* <Col

            xs={6}
            onClick={() => {
              handleShow(), setProyect("HouseOfDev");
            }}
          >
            HouseOfDev
            
          </Col>
          <Col
            xs={6}
            onClick={() => {
              handleShow(), setProyect("ColorGame");
            }}
          >
            Color Game
            <img src={img2} style={{ height: "88%", width: "88%" }} />
          </Col> */}
        </Row>
      </Container>
      <Modal proyect={proyect} />
    </>
  );
}

export default Porfolio;
