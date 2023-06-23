import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../assets/pro1.png";
import img2 from "../assets/img2.png";
import Modal from "../commons/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setShow } from "../state/show";

function Porfolio() {
  const dispatch = useDispatch();
  const handleShow = () => dispatch(setShow(true));
  const [proyect, setProyect] = useState("");

  return (
    <>
      <Container style={{ marginTop: "1rem", height: "95vh" }} id="Porfolio">
        <h2>Porfolio:</h2>
        <Row>
          <Col
            xs={6}
            onClick={() => {
              handleShow(), setProyect("HouseOfDev");
            }}
          >
            HouseOfDev
            <img src={img1} style={{ height: "88%", width: "88%" }} />
          </Col>
          <Col
            xs={6}
            onClick={() => {
              handleShow(), setProyect("ColorGame");
            }}
          >
            Color Game
            <img src={img2} style={{ height: "88%", width: "88%" }} />
          </Col>
        </Row>
      </Container>
      <Modal proyect={proyect} />
    </>
  );
}

export default Porfolio;
