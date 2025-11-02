
import React, { lazy } from "react";
import "./Skills.css";
import { motion } from "framer-motion";

import html5 from "../assets/html5.svg";
import css3 from "../assets/css3.svg";
import javascript from "../assets/javascript.svg";
import typescript from "../assets/typescript.svg";
import reactjs from "../assets/react.svg";
import firebase from "../assets/firebase.svg";
import mongodb from "../assets/mongodb.svg";
import github from "../assets/git.svg";
import figma from "../assets/figma.svg";
import Sass from "../assets/sass.svg";


const skills = [
  { name: "HTML5", icon: html5 },
  { name: "CSS3", icon: css3 },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "ReactJS", icon: reactjs },
  { name: "Firebase", icon: firebase },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: github },
  { name: "Figma", icon: figma },
  { name: "Sass", icon: Sass },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">



        <motion.h2
        className="section-title"
      


        initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1,y:0 }}
          transition={{ duration: 0.5 ,delay:0.5}}
        >

       Skills</motion.h2>

       
      <div className="skills-container">
        {skills.map((skill, index) => (

          <motion.div className="skill-card" key={index}
         initial={{ opacity: 0,y:25}}
          whileInView={{ opacity: 1,y:0}}
          transition={{ duration: 0.5,delay:0.7 }}
           
           
            // transition={{ duration: 0.2 }}
          >
            <img loading="lazy" src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </motion.div>


        ))}
      </div>

      
    </section>
  );
};

export default Skills;
