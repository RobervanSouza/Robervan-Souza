import React, {useState} from 'react'
import "./Experiencias.scss";
import { images } from "../../constants";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrap from '../../wrapper/AppWrap';





const experiencia = [
  {
    title: "Rick-And-Morty",
    description: "Api de busca de personagens",
    tecnologias: "Html, Css, e JavaScript",
    projectLink: "https://github.com/RobervanSouza",
    imgUrl: images.rick,
    codeLink: "https://github.com/RobervanSouza/api-rick-and-mortin-javascript",
    tags: ["Front-End", "Todos"],
  },
  {
    title: "Vigilantes do sono",
    description: "Projeto do Bootcamp, que mostra gaficos vigilantes do sono",
    tecnologias: "Ract, TypeScript, Axios, ApexCharts, StyleComponents ",
    projectLink: "https://github.com/RobervanSouza",
    imgUrl: images.vigilantes,
    codeLink:
      "https://github.com/equipe4-btc-vigilantesdosono/vigisono-client/tree/home",
    tags: ["Front-End", "Todos"],
  },
  {
    title: "teste",
    description: "teste",
    tecnologias: "Desenvolvedor",
    projectLink: "full-stack",
    imgUrl: images.about02,
    codeLink: "",
    tags: ["Back-End", "Todos"],
  },
  {
    title: "teste",
    description: "teste",
    tecnologias: "Desenvolvedor",
    projectLink: "full-stack",
    imgUrl: images.about03,
    codeLink: "",
    tags: ["Full-Stack", "Todos"],
  },
  {
    title: "teste",
    description: "teste",
    tecnologias: "Desenvolvedor",
    projectLink: "full-stack",
    imgUrl: images.about03,
    codeLink: "",
    tags: ["Mobile App", "Todos"],
  },
];

function Experiencias() {
    
    const [filterWork, setFilterWork] = useState([]);
    
    const [activeFilter, setActiveFilter] = useState("All");
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    const handleWorkFilter = (item) => {
      setActiveFilter(item);
      setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
          setAnimateCard([{ y: 0, opacity: 1 }]);

          if (item === "All") {
            setFilterWork(experiencia);
          } else {
            setFilterWork(experiencia.filter((work) => work.tags.includes(item)))
            console.log(experiencia)
          }
        },);
    };
  return (
    <>
      <div className="experiencia">
        <div className="containerEx">
          <h2 className="head-text">Meus Projetos</h2>

          <div className="app__work-filter">
            {["Front-End", "Back-End", "Full-Stack", "Mobile App", "Todos"].map(
              (item, index) => (
                <div
                  key={index}
                  onClick={() => handleWorkFilter(item)}
                  className={`app__work-filter-item app__flex p-text ${
                    activeFilter === item ? "item-active" : ""
                  }`}>
                  {item}
                </div>
              )
            )}
          </div>

          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio">
            {filterWork.map((work, index) => (
              <div className="app__work-item app__flex" key={index}>
                <div className="app__work-img app__flex">
                  <img src={work.imgUrl} alt={work.name} />

                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className="app__work-hover app__flex">
                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex">
                        <AiFillEye />
                      </motion.div>
                    </a>
                    <a href={work.codeLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex">
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  </motion.div>
                </div>

                <div className="app__work-content app__flex">
                  <h4 className="bold-text">
                    Titulo: <span>{work.title}</span>
                  </h4>

                  <div className="botaoMais">
                    <button> Mais Informações</button>
                  </div>

                  <div className="ocultar-texto">
                    <h4 className="p-text" style={{ marginTop: 5 }}>
                      Tecnologias: <span> {work.tecnologias} </span>
                    </h4>
                    <h4 className="p-text" style={{ marginTop: 5 }}>
                      Descrição: <span> {work.description} </span>
                    </h4>
                  </div>
                  <div className="app__work-tag app__flex">
                    <h5 className="p-text">{work.tags[0]}</h5>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default AppWrap(Experiencias, "experiencias");
