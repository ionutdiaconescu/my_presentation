import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-instagram"></i>
      </a>

      <a
        href="https://github.com/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>

      <a
        href="https://facebook.com/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-facebook"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/ionut-diaconescu-381070265/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="bx bxl-linkedin-square"></i>
      </a>
    </div>
  );
};

export default Social;
