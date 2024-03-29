import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Softskills from "./Softskills";

const Skills = () => {
  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>

        <div className="skills__container container grid">
          <Frontend />

          <Softskills />
        </div>
        <div className="separator"></div>
      </section>
    </>
  );
};

export default Skills;
