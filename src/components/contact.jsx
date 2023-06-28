import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/contact.css";
import { useSelector } from "react-redux";
import Footer from "./footer";
import { useState } from "react";
function Contact() {
  const [active, setActive] = useState(false);
  setTimeout(() => setActive(true));
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className={
        active ? "contactContainer contactContainer-active" : "contactContainer"
      }
    >
      <Form action="https://formspree.io/f/mvonewpb" method="post">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            className={`infoContact${theme}`}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            className={`infoContact${theme}`}
            name="correo"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Numero de telefono</Form.Label>
          <Form.Control
            type="number"
            className={`infoContact${theme}`}
            name="numero"
          />
        </Form.Group>
        <label htmlFor="contact´sMessage">
          ¿Algun mensaje en particular?
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
          Enviar
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
