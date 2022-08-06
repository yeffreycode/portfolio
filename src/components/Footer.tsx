import React from "react";
import "./../assets/css/Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <p>Copyright © 2022 Yeffrey Espinoza</p>
      <div className="footer-links">
        <a href="https://www.github.com/yeffreycode" target={"_blank"}>
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/yeffrey404" target={"_blank"}>
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100083572955867"
          target={"_blank"}
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default Footer;
