import reactjs  from "../assets/images/portfolio/skills/reactjs.jpeg";
import nodejs from "../assets/images/portfolio/skills/node.jpeg";
import mongoDB from "../assets/images/portfolio/skills/mongodb.png";
import css from "../assets/images/portfolio/skills/css.png";
import sass from "../assets/images/portfolio/skills/sass.png";
import js from "../assets/images/portfolio/skills/js.png";

import cloudRasoi from "../assets/images/portfolio/projects/cloudRasoi.jpeg";
import grave from "../assets/images/portfolio/projects/grave.png";
import JayJones from "../assets/images/portfolio/projects/JayJones.png";
import socialSeeds from "../assets/images/portfolio/projects/socialSeeds.png";
import meetRibbon from "../assets/images/portfolio/projects/meetRibbon.png"

import jira from "../assets/images/portfolio/tools/jira.png";
import github from "../assets/images/portfolio/tools/git.jpeg";
import bitbucket from "../assets/images/portfolio/tools/bitbucket.png";
import figma from "../assets/images/portfolio/tools/figma.png";
import slack from "../assets/images/portfolio/tools/slack.webp";
import vscode from "../assets/images/portfolio/tools/vscode.png"

 export const SkillsItem = [
    {
        title: "ReactJs",
        img: reactjs
    },
    {
        title: "Node Js",
        img: nodejs
    },
    {
        title: "Mongo DB",
        img: mongoDB
    },
    {
        title: "CSS",
        img: css,
    },
    {
        title: "SASS",
        img: sass
    },
    {
        title: "Java Script",
        img: js
    }

];

export const tools = [
    {
        title: "Git Hub",
        img: github
    },
    {
        title: "Jira",
        img:jira
    },
    {
        title: "Figma",
        img: figma
    },
    {
        title: "Bit Bucket",
        img: bitbucket
    },
    {
        title: "Slack",
        img: slack
    },
    {
        title:"Visual Code Studio",
        img: vscode
    }

]

export const projectsData = [
    {
        title: "Cloud Rasoi",
        description: "Billing and Management",
        img: cloudRasoi,
        link: "https://cloudrasoi.com/web/"
    },
    {
        title: "Meet Ribbon",
        description:"E-commerce Platform",
        img: meetRibbon,
        link:"https://www.meetribbon.com/"
    },
    {
        title: "Grave",
        description: "A static website",
        img: grave,
        link:"https://grave.co.in/"
    },
    {
        title: "Jay Jones",
        description: "Portfolio Website",
        img: JayJones,
        link: "https://jayjones.co/"

    },
    {
        title: "Social Seeds",
        description: "A static website",
        img: socialSeeds,
        link: "https://socialseed.xyz/"
    },


]

// export default SkillsItem;
