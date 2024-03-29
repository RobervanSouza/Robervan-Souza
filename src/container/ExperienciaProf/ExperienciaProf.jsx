import React from "react";
import { motion } from "framer-motion";

import { AppWrap} from "../../wrapper";
import { images } from "../../constants";
import "./ExperienciaProf.scss";

const skills = [
  {
    name: "Pérola Negra",
    imgUrlFront: images.perlanegraconvites,
    função: "Marketign digital",
    year: [2018, " a ", 2022],
    descricao: "Desenvolvimento e acompanhamento de lojas em plataformas integradas e atendimento ao cliente."
  },
  {
    name:"Grendene",
    imgUrlFront: images.grendene,
    função:   "Técnico Mecatrônico",
    year  :  [ 2014, " a ", 2018],
    descricao:
      "Manutenção em máquinas injetoras de calçados da GOLDENMAQ. Implementando alguns sistemas de inovações da industria 4.0.  ",
  },
  {
    name: "Petrobras",
    imgUrlFront: images.petrobras,
    função: "Suporte Técnico",
    year: [2013, " a ", 2014],
    descricao:
      "Suporte técnico com o CLP Bentle-Nevada da GE. Durante o período de 06 meses, trabalhando tercerizado, e otimizando o fluxo de petróleo.",
  },
  {
    name: "Dresser-Rand",
    imgUrlFront: images.dresserange,
    função: "Montagem de painel para plataforma da petrobras",
    year: [2013, " a ", 2014],
    descricao: "Montagem de painel de controle de fluxo de petróleo. ",
  },
  {
    name: "Trexcon",
    imgUrlFront: images.trexcon,
    função:" Montador de painel pleno",
    year: [ 2013, " a ", 2014],
    descricao: "Montagem de painel para plataformas e usinas da petrobras. ",
  },

  {
    name: "NovaKoasin",
    imgUrlFront: images.novakoasin,
    função: "Montador de painel pleno",
    year: [2011, " a ", 2013],
    descricao:
      "Montagem de painel para substação de energia, montagem de sistema de câmeras para ônibus e sistemas de semáfaro. ",
  },
];

const ExperienciaProf = () => {
  return (
    <>
      <section className="projeto">
     
          <div>
            <h2 className="head-text">
              Experiências <span> durante </span> 13 anos de trabalho
            </h2>
          </div>

          <div className="app__skills-container">
            <motion.div className="app__skills-list">
              {skills.map((skill) => (
                <>
                  <div className="card">
                    <div className="card-front">
                      <div className="inner">
                        <img
                          src={skill.imgUrlFront}
                          alt={skill.name}
                          className="card-imagem"
                        />
                        <h3 className="p-text">{skill.name}</h3>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="inner fundo">
                        <h6 className="colorfuncao">
                          {" "}
                          Periodo:
                          <span className="colorfuncao">{skill.year}</span>{" "}
                        </h6>
                        <h6>
                          {" "}
                          Função:{" "}
                          <span className="colorfuncao">
                            {" "}
                            {skill.função}
                          </span>{" "}
                        </h6>
                        <h6>
                          {" "}
                          Descrição:{" "}
                          <span className="colorfuncao">
                            {" "}
                            {skill.descricao}
                          </span>{" "}
                        </h6>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </motion.div>
          </div>
        
      </section>
    </>
  );
};

export default AppWrap(ExperienciaProf, "experiencias");
