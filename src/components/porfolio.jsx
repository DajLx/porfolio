import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../assets/pro1.png";
import img2 from "../assets/img2.png";
function Porfolio() {
  return (
    <>
      <Container style={{ marginTop: "1rem", height: "100vh" }} id="Porfolio">
        <h2>Porfolio:</h2>
        <Row>
          <Col xs={6}>
            
           HouseOfDev
            <a href="https://house-of-dev.vercel.app/">
              <img src={img1} style={{ height: "100%", width: "100%" }} />
            </a>
          </Col>
          <Col xs={6}>
            Color Game
            <a href="https://pdr-alexduran-8aadcd.netlify.app/color%20game/">
              <img src={img2} style={{ height: "100%", width: "100%" }} />
            </a>
          </Col>
        </Row>
      </Container>
      <hr style={{ marginTop: "3rem" }}></hr>
    </>
  );
}

export default Porfolio;
