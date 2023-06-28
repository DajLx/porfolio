import React from "react";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setShow } from "../state/show";
import { proyects } from "../../proyects.json";
import demos from "../assets";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
const ModalU = ({ proyect }) => {
  const theme = useSelector((state) => state.theme);
  const data = proyects[proyect];
  const show = useSelector((state) => state.show);
  const disptach = useDispatch();
  const handleClose = () => disptach(setShow(false));

  return data ? (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className={`appContainer${theme}`}>
        <Modal.Title>{data.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ padding: "2rem", fontSize: "20px" }}
        className={`appContainer${theme}`}
      >
        <a href={data.link} target="_blank">
          <img src={demos[data.name]} alt="demo" style={{ width: "100%" }} />
        </a>
        <p style={{ marginBottom: "1rem", marginTop: "1rem" }}>
          {data.description}
        </p>
        <h4> En dicho proyecto tuve la responsabilidad de:</h4>
        {Array.isArray(data.responsibilities) ? (
          <ul>
            {data.responsibilities.map((responsibility) => (
              <li style={{ marginBottom: "0.5rem" }}> {responsibility}</li>
            ))}
          </ul>
        ) : (
          <p>{data.responsibilities}</p>
        )}
        ademas por acá te dejo el stack de tecnologías que se usó en {data.name}
        :
        <Container style={{ marginTop: "1rem" }}>
          <Row>
            {data.technologies.map((tech) => (
              <Col
                xs={4}
                style={{
                  marginBottom: "3rem",
                  textAlign: "center",
                  fontSize: "16px",
                }}
              >
                {tech}
                <img
                  src={demos[tech]}
                  alt=""
                  style={{ height: "100%", width: "100%" }}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className={`appContainer${theme}`}>
        <p>
          {" "}
          Si quieres ver mas sobre {data.name} puedes clickar en el video y
          probarlo tu mismo o puedes tocar{" "}
          <a href={data.link} target="_blank">
            aqui
          </a>{" "}
          e iras al proyecto ya mencionado.
        </p>
      </Modal.Footer>
    </Modal>
  ) : (
    <></>
  );
};

export default ModalU;
