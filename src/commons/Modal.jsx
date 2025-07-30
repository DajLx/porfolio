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
import content from "../../transletor.json";
const ModalU = ({ proyect }) => {
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);
  console.log(proyects[proyect]);
  const data = proyects[proyect];
  const show = useSelector((state) => state.show);
  const disptach = useDispatch();
  const handleClose = () => disptach(setShow(false));
  console.log(language);
  console.log(data);

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
          {data.description[language]}
        </p>
        <h4> {content.modal[language].responsabilitieTitle}</h4>
        {Array.isArray(data.responsibilities[language]) ? (
          <ul>
            {data.responsibilities[language].map((responsibility) => (
              <li style={{ marginBottom: "0.5rem" }}> {responsibility}</li>
            ))}
          </ul>
        ) : (
          <p>{data.responsibilities[language]}</p>
        )}
        {`${content.modal[language].technologies} ${data.name}`}:
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
          {content.modal[language].footer[0]} {data.name}{" "}
          {content.modal[language].footer[1]}
          <a href={data.link} target="_blank">
            {content.modal[language].link}
          </a>{" "}
          {content.modal[language].footer[2]}
        </p>
      </Modal.Footer>
    </Modal>
  ) : (
    <></>
  );
};

export default ModalU;

