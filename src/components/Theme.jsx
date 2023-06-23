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
  const [active, setactive] = useState(false);
  function togglePosition() {
    return active === false ? setactive(true) : setactive(false);
  }
  return (
    <div className="btn-ctn">
      <button
        className={active ? `buttonIdea button-active appContainer${theme}` : `buttonIdea appContainer${theme}`}
        style={{}}
        onClick={() => {
          togglePosition();
        }}
      >
        {<FaLightbulb />}
      </button>

      <button
        className={`sizeOptions themes ${
          active ? "themes-active" : null
        }  appContainer${theme}`}
        style={{ "--t": "-4.5rem", "--l": "0.5rem" }}
        onClick={() => {
          dispatch(changeTheme("Soft"));
        }}
      >
        {<GiLindenLeaf />}
      </button>
      <button
        className={`sizeOptions themes ${
          active ? "themes-active" : null
        } appContainer${theme}`}
        style={{ "--t": "-3rem", "--l": "-2.8rem" }}
        onClick={() => {
          dispatch(changeTheme("Contrast"));
        }}
      >
        <ImContrast />
      </button>
      <button
        className={`sizeOptions themes ${
          active ? "themes-active" : null
        } appContainer${theme}`}
        style={{ "--t": "0.4rem", "--l": "-4.5rem" }}
        onClick={() => {
          dispatch(changeTheme("Ligth"));
        }}
      >
        <HiOutlineLightBulb />
      </button>
      <button
        className={`sizeOptions themes ${
          active ? "themes-active" : null
        } appContainer${theme}`}
        style={{ "--t": "3.6rem", "--l": "-2.8rem" }}
        onClick={() => {
          dispatch(changeTheme("Dark"));
        }}
      >
        <MdDarkMode />
      </button>
      <button
        className={`sizeOptions themes ${
          active ? "themes-active" : null
        } appContainer${theme}`}
        style={{ "--t": "5.1rem", "--l": "0.5rem" }}
        onClick={() => {
          dispatch(changeTheme("Hot"));
        }}
      >
        <GiThermometerHot />
      </button>
    </div>
  );
};

export default Theme;
