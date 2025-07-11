import React from "react";
import "../styles/aboutme.css";
import content from "../../transletor.json";
import { useSelector } from "react-redux";
const AboutMe = () => {
  const language = useSelector((state) => state.language);
  return (
    <div className="aboutmeContainer">
      <h2>{content.aboutMe[language].title}</h2>
      <p style={{ marginTop: "1rem" }}>
        {content.aboutMe[language].aboutMe}
      </p>
    </div>
  );
};

export default AboutMe;
