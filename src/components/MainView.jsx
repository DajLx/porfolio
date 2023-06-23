import React from "react";
import img1 from "../assets/gif1.gif";
import img2 from "../assets/gif3.gif";
import "../styles/mainview.css";
const MainView = () => {
  return (
    <div className="mainViewContainer">
      <img
        src={img1}
        alt=""
        style={{
          height: "38%",
          width: "40%",
          float: "left",
          marginRight: "10px",
          marginLeft: "1rem",
        }}
      />
      ¡Hola!, sientete bienvenido y libre de curiosar un poco por aquí y por
      allá, ¡ES GRATIS!, puedes leer un poco sobre mi o ver mis proyectos para
      conocerme más y ver de lo que soy capaz de hacer, ¡SIEMPRE EN BUSCA DE
      RETOS MÁS GRANDES Y CADA VEZ MÁS DESAFIANTES!, si deseas contactarme ve a
      la pestaña de contactos donde te presento algunos de mis datos personales
      y/o medios por los cuales puedes comunicarte de una forma fácil y
      sencilla, recuerda que todo problema tiene solución, una o varias pero
      siempre hay una forma para lograrlo aunque parezca imposible, en este
      perfil podrás ver que con la constancoa y perseverancia junto con la
      paciencia pueden lograr grandes cosas, ¡Y ESO SOLO ES EL PRINCIPIO!, todo
      esto junto a la creatividad hacen que simplemente las maravillas que
      podemos contruir seán grandiosas. Hablando mas a fondo sobre las secciones
      que encontrarás acá:
      <img
        src={img2}
        style={{
          float: "right",
          height: "38%",
          width: "40%",
          margin: "1rem",
        }}
      />
      <ul style={{ marginTop: "1rem" }}>
        <li>
          Acerca de mí: acá encontrarás mucha información acerca de mi
          personalidad, actitud, mi camino en el mundo del desarrollo web y
          desempeño laboral a la hora de trabajar con un equipo y otro tipo de
          información personal relevante.
        </li>
        <li>
          Portafolio: en este sección encontrarás mis proyectos donde podras ver
          mis logros y un juego dinámico de colores
        </li>
        <li>
          Contacto: y por último como te habia dicho anteriormente. En esta
          sección encontrarás los medios para poder comunicarte con mi persona
          en caso de querer contactarme
        </li>
      </ul>
      ¡OH!, y si estás fatigado por el tema acá te ofrezco en el botón que
      tienes a tu derecha la posibilidad de poder cambiar el tema del
      portafolio, no es algo importante pero es algo bonito de ver.
    </div>
  );
};

export default MainView;
