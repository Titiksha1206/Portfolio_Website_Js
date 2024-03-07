import React from "react";
import { projectsData } from "./WorkData";
import WorkItems from "./WorkItems";

const Works = () => {
  return (
    <>
      <div className="work__container container grid">
        {projectsData.map((item) => {
          return <WorkItems key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default Works;
