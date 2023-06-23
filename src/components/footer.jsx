import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import "../styles/footer.css";
import { useSelector } from "react-redux";
const Footer = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <div style={{ textAlign: "center" }} className="footerContainer">
      <h2 className="direction">Dirección:</h2>
      <p>Venezuela, Carabobo</p>
      <div id={`writeMe`}>
        <a href="https://wa.me/+584145818721">
          <BsWhatsapp className={`contact${theme}`} />
        </a>
        <a href="https://www.messenger.com/t/100074593797058/">
          <BsMessenger className={`contact${theme}`} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
