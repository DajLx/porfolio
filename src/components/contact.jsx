import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/contact.css";
import { useSelector } from "react-redux";
import content from "../../transletor.json";
import Footer from "./footer";
import { useState } from "react";
function Contact() {
  const [active, setActive] = useState(false);
  setTimeout(() => setActive(true));
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);
  return (
    <div
      id="contacto"
      className={
        active ? "contactContainer contactContainer-active" : "contactContainer"
      }
    >
      <h2 style={{ marginBottom: "1rem" }}>{content.contact[language].message}</h2>
      <Form action="https://formspree.io/f/mvonewpb" method="post">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{content.contact[language].name}</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            className={`infoContact${theme}`}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>{content.contact[language].email}</Form.Label>
          <Form.Control
            type="email"
            className={`infoContact${theme}`}
            name="correo"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{content.contact[language].phoneNumber}</Form.Label>
          <Form.Control
            type="number"
            className={`infoContact${theme}`}
            name="numero"
          />
        </Form.Group>
        <label htmlFor="contact´sMessage">
          {content.contact[language].messageEmail}
          <textarea
            id="contact´sMessage"
            cols="150"
            rows="6"
            className={`infoContact${theme} messageContact`}
            name="comentario"
            style={{ marginTop: "10px" }}
          ></textarea>
        </label>
        <Button
          variant="primary"
          type="submit"
          className={`sendInfoButton${theme} `}
        >
          {content.contact[language].button}
        </Button>
      </Form>
      <Footer />
    </div>
  );
}

export default Contact;

{
  /*  */
}
