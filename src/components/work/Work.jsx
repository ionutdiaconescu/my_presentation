import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">How I got these skills?</h2>
      <span className="section__subtitle">Some of my practice projects</span>

      <Works />
    </section>
  );
};

export default Work;
