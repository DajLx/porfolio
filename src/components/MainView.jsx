import React, { useState } from "react";
import img1 from "../assets/gif1.gif";
import img2 from "../assets/gif3.gif";
import "../styles/mainview.css";
import content from "../../transletor.json";
import { useSelector } from "react-redux";
const MainView = () => {
  const [active, setactive] = useState(false);
  const language = useSelector((state) => state.language);

  setTimeout(() => {
    setactive(true);
  }, "500");

  return (
    <div
      id="mainView"
      className={
        active
          ? "mainViewContainer mainViewContainer-active"
          : "mainViewContainer"
      }
    >
      <div className="text-mainView">
        {" "}
        <p>
          {content.presentation[language][0]}
          <img
            src={img2}
            className={active ? "imgSize-2 imgSize-2-active" : "imgSize-2"}
            style={{
              float: "right",
              margin: "0rem",
            }}
          />{" "}
          {content.presentation[language][1]}
        </p>
      </div>
    </div>
  );
};

export default MainView;
