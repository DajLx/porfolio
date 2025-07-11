import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import "../styles/footer.css";
import { useSelector } from "react-redux";
import content from "../../transletor.json";
const Footer = () => {
  const theme = useSelector((state) => state.theme);
  const language = useSelector((s) => s.language);
  return (
    <div
      id="footer"
      style={{ textAlign: "center" }}
      className="footerContainer"
    >
      <h2 className="direction">{content.footer[language].address}</h2>
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
