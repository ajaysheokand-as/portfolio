import React from "react";
import {projectsData} from "../../data/SkillsLogo";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-title">
            Projects
      </div>
      <div className="projects-description">
      Transforming ideas into digital reality: Crafting innovative websites for a seamless user experience.
      </div>
      <div class="projects-card flex flex-wrap justify-evenly" id="1">
        {
            projectsData.map((item, index)=>{
                return (
                    <ProjectCard data={item} key={index}/>
                )
            })
        }
      </div>
    </div>
  );
};
