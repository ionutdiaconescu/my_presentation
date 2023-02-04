import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ionut</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://facebook.com/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/ionut-diaconescu-381070265/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin-square"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Copyright.All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
