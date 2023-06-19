import React from "react";
import img1 from "../assets/gif1.gif";
import img2 from "../assets/gif3.gif";
const MainView = () => {
  return (
    <div style={{ marginTop: "1rem", height: "100%", padding:"1rem" }}>
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
      ¡Hola!, sientete bienvenido y libre de curiosar un poco por aqui y por
      allá, ¡ES GRATIS!, puedes leer un poco sobre mi o ver mis proyectos para
      conocerme más y ver de lo que soy capaz de hacer, ¡SIEMPRE EN BUSCA DE
      RETOS MAS GRANDES Y CADA VEZ MAS DESAFIANTES!, si deseas contactarme ve a
      la pestaña de contactos donde te presento algunos de mis datos personales
      y/o medios por los cuales puedes comunicarte de una forma facil y
      sencilla, recuerda que todo problema tiene solución, una o varias pero
      siempre hay una forma para lograrlo aunque parezca imposible, en este
      perfil podrás ver con la constancía y perseverancia junto con la paciencia
      pueden lograr grandes cosas, ¡Y ESO SOLO ES EL PRINCIPIO!, todo esto junto
      a la creatividad hacen que simplemente las maravillas que podemos contruir
      seán grandiosas. Hablando mas a fondo fobre las secciones que encontraras
      acá:
      <img
        src={img2}
        style={{
          float: "right",
          height: "38%",
          width: "40%",
         margin:"1rem"
        }}
      />
      <ul style={{ marginTop: "1rem" }}>
        <li>
          acerca de mi: acá encontraras mucha información acerca de mi
          personalidad, actitud mi camino en el mundo de desarrollo web y
          desempeño laboral a la hora de trabajar con un equipo y otro tipo de
          información personal relevante.
        </li>
        <li>
          porfolio: en este sección encontrarás mis proyectos donde podras ver
          mis logros y un juego dinámico de colores
        </li>
        <li>
          contacto: y por último como te habia dicho anteriormente. En esta
          sección encontrarás los medios para poder comunicarte con mi persona
          en caso de querer contactarme
        </li>
      </ul>
      ¡OH!, y si estas fatigado por el tema acá te ofrezco en el boton que tiene
      a tu derecha la posibilidad de poder cambiar el tema del portafolio, no es
      algo importante pero es algo bonito de ver.
    </div>
  );
};

export default MainView;
