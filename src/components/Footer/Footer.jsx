import React from "react";
import "./Footer.css";
import logo from "/src/assets/images/Logo-1.png";
const Footer = () => {
  return (
    <div className="footer-div">
      <img src={logo} alt="" srcset="" />

      <h3 className="mention">
        Made by <span>❤ </span> team Hex{" "}
      </h3>
    </div>
  );
};

export default Footer;
