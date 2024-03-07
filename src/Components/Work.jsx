import React from "react";
import "./Work.css";
import Works from "./Works";

const Work = () => {
  return (
    <>
      <section className="projects section" id="projects">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most Recent Works</span>
        <Works />
        <div className="separator"></div>;
      </section>
    </>
  );
};

export default Work;
