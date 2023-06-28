import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "../assets/IMG_20230108_141401.jpg";
import "../styles/card.css";
import { useSelector } from "react-redux";
import AboutMe from "./aboutMe";
import { useState } from "react";
function MyCard() {
  const [active, setActive] = useState(false);

  setTimeout(() => setActive(true));
  return (
    <div
      className={
        active ? "card-container card-container-active" : "card-container"
      }
      style={{ textAlign: "center" }}
    >
      <Card className={`cardSize`}>
        <Card.Img variant="top" src={image} className={`imageCard`} />
        <Card.Body>
          <Card.Title className="cardTitle">Breiner Duran</Card.Title>
          <Card.Text>Full Stack developer</Card.Text>
        </Card.Body>
      </Card>
      <AboutMe />
    </div>
  );
}

export default MyCard;
