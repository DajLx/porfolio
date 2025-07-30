import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "../assets/WIN_20250310_12_28_55_Pro.jpg";
import "../styles/card.css";
import { useSelector } from "react-redux";
import AboutMe from "./aboutMe";
import { useState } from "react";
function MyCard() {
  const [active, setActive] = useState(false);

  setTimeout(() => setActive(true));
  return (
    <div
      id="sobreMi"
      className={
        active ? "card-container card-container-active" : "card-container"
      }
      style={{ textAlign: "center" }}
    >
      <Card className={`cardSize`}>
        <Card.Img variant="top" src={image} className={`imageCard`} />
        <Card.Body>
          <Card.Title className="cardTitle">Breiner Duran</Card.Title>
          <Card.Text>Full Stack Developer</Card.Text>
        </Card.Body>
      </Card>
      <AboutMe />
    </div>
  );
}

export default MyCard;
