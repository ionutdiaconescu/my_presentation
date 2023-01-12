import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">
          I did many projects to improve my web developer skills
        </span>
      </div>

      <div className="about_box">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">Check out my GitHub profile </span>
        <i class="bx bx-chevrons-right"></i>

        <a
          href="https://github.com/ionutdiaconescu"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bx bxl-github about__icon"></i>
        </a>
      </div>

      <div className="about_box">
        <i class="bx bx-support about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
