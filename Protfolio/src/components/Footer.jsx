import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Vasanth. All Rights Reserved.</p>

      <div className="footer-contact">
        <a href="tel:+918754673456">📞 +91 7502878203</a>
        <a href="mailto:vasanth@gmail.com">✉ vasanthg501@gmail.com</a>
      </div>

      <div className="footer-social">
        <a
          href="https://www.linkedin.com/in/vasanth-ganesan-6a4943318"
          target="_blank"
        >
          <FaLinkedin size={22} />
        </a>

        <a href="https://github.com/Vasanth-Ajinth" target="_blank">
          <FaGithub size={22} />
        </a>

        <a
          href="https://www.instagram.com/mr_v_a___s_u_"
          target="_blank"
        >
          <FaInstagram size={22} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
