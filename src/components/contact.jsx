import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/contact.css";
import { useSelector } from "react-redux";
import Footer from "./footer";

function Contact() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className="contactContainer"
     
    >
      <Form action="https://formspree.io/f/mvonewpb" method="post">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            className={`infoContact${theme}`}
            onChange={(e) => {
              console.log(e);
            }}
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
          <Form.Label>numero de telefono</Form.Label>
          <Form.Control
            type="number"
            className={`infoContact${theme}`}
            name="numero"
          />
        </Form.Group>
        <label htmlFor="contact´sMessage">
          ¿algun mensaje en particular?
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
          enviar
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
