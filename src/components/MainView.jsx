import React, { useState } from "react";
import img1 from "../assets/gif1.gif";
import img2 from "../assets/gif3.gif";
import "../styles/mainview.css";
const MainView = () => {
  const [active, setactive] = useState(false);

  setTimeout(() => {
    setactive(true);
  }, "500");

  return (
    <div id="mainView"
      className={
        active
          ? "mainViewContainer mainViewContainer-active"
          : "mainViewContainer"
      }
    >
      <div className="text-mainView">
        {" "}
        <p>
          ¡Hola! ¡Bienvenido/a a mi perfil! Aquí podrás conocer más sobre mí y
          mis proyectos. No te preocupes, todo es gratis y sin compromiso. En la
          sección "Acerca de mí" encontrarás información sobre mi personalidad,
          actitud y
          <img
            src={img2}
            className={active ? "imgSize-2 imgSize-2-active" : "imgSize-2"}
            style={{
              float: "right",
              margin: "0rem",
            }}
          />{" "}
          experiencia laboral. En "Portafolio" podrás ver mis proyectos y un
          juego dinámico de colores que te encantará. Si deseas contactarme, ve
          a la sección "Contacto", donde encontrarás mis datos personales y
          medios para comunicarte conmigo de forma fácil y sencilla. Recuerda
          que siempre hay solución a los problemas, solo necesitas constancia,
          perseverancia y paciencia para lograr grandes cosas. Y si te cansas
          del tema, ¡puedes cambiarlo con solo un clic en el botón a tu derecha!
          ¡Gracias por visitar mi perfil!
        </p>
      </div>
    </div>
  );
};

export default MainView;
