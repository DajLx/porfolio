import React, { useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { useSelector } from "react-redux";
import { GiLindenLeaf } from "react-icons/gi";
import { ImContrast } from "react-icons/im";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { GiThermometerHot } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { changeTheme } from "../state/theme";

const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const [display, setDisplay] = useState("none");
  function toggleDisplay() {
    return display === "none" ? setDisplay("block") : setDisplay("none");
  }
  return (
    <div>
      <div style={{ display: display }}>
        <button
          className={`sizeOptions one appContainer${theme}`}
          style={{ opacity: "70%" }}
          onClick={() => {
            dispatch(changeTheme("Soft"));
          }}
        >
          {<GiLindenLeaf />}
        </button>
        <button
          className={`sizeOptions two appContainer${theme}`}
          style={{ opacity: "70%" }}
          onClick={() => {
            dispatch(changeTheme("Contrast"));
          }}
        >
          <ImContrast />
        </button>
        <button
          className={`sizeOptions three appContainer${theme}`}
          style={{ opacity: "70%" }}
          onClick={() => {
            dispatch(changeTheme("Ligth"));
          }}
        >
          <HiOutlineLightBulb />
        </button>
        <button
          className={`sizeOptions four appContainer${theme}`}
          style={{ opacity: "70%" }}
          onClick={() => {
            dispatch(changeTheme("Dark"));
          }}
        >
          <MdDarkMode />
        </button>
        <button
          className={`sizeOptions five appContainer${theme}`}
          style={{ opacity: "70%" }}
          onClick={() => {
            dispatch(changeTheme("Hot"));
          }}
        >
          <GiThermometerHot />
        </button>
      </div>

      <button
        className={`buttonIdea appContainer${theme}`}
        style={{ opacity: "70%" }}
        onClick={() => {
          toggleDisplay();
        }}
      >
        {<FaLightbulb />}
      </button>
    </div>
  );
};

export default Theme;
