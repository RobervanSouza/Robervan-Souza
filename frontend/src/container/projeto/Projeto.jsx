import React from "react";
import { motion } from "framer-motion";


import {AppWrap, MotionWrap} from "../../../src/wrapper";
import { images } from "../../constants";
import "./Projeto.scss";

const experiencia = [
  {
    year: 2016,
    descricao: "dasdasda",
  }

 ];
const skills = [
  {
    name: "Student",
    imgUrl: images.react,
  },
  {
    name: "Student",
    imgUrl: images.react,
  },
  {
    name: "Student",
    imgUrl: images.react,
  },
];

const Projeto = () => {
  



  return (
    <>
      <section>
        <div>
          <h2 className="head-text">
            experiencias <span>Portfolio</span> Section
          </h2>
        </div>

        <div className="app__skills-container">
          <motion.div className="app__skills-list">
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex "
                key={skill.name}>
                <div className="app__flex">
                  <img src={skill.imgUrl} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="app__skills-exp">
          {experiencia.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
                <p className="bold-text">{experience.descricao}</p>
                
              </div>
              
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AppWrap(
  MotionWrap(Projeto, "app__projetos"),
  "projetos",
  "app__whitebg"
);
 
