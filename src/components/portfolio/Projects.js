import React from "react";
import {projectsData} from "../../data/SkillsLogo";
import { ProjectCard } from "./ProjectCard";
import github from "../../assets/images/portfolio/icons/github.png"

export const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-title">
            Projects
      </div>
      <div className="projects-description mx-3">
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
      <div className="projects-footer text-center ">
          <div className="projects-footer-title">
                More Projects I have worked on 
            </div> 
            <div className="projects-footer-link flex justify-center mt-2">
                <img src={github} alt="github"/> &nbsp; @ &nbsp; <a href="https://github.com/ajaysheokand-as" target="_blank"> ajaysheokand-as </a> &nbsp; on Git Hub
            </div>
      </div>
    </div>
  );
};
