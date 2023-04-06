import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../../src/wrapper";
import { images } from "../../constants";
import "./Projeto.scss";

const skills = [
  {
    name: "Perola Negra Convites",
    imgUrlFront: images.perlanegraconvites,
    função: "Marketign digital",
    year: [2018, " a ", 2022],
    descricao: "Desenvolvendo produtos e atendimento ao cliente",
  },
  {
    name: "Grendene",
    imgUrlFront: images.grendene,
    função: "Técnico Mecatrônico",
    year: [2014, " a ", 2018],
    descricao: "Manutenção em maquina injetoras de calçados da GOLDENMAQ. Implementado alguns sistemas de inivação da industria 4.0  ",
  },
  {
    name: "Petrobras",
    imgUrlFront: images.petrobras,
    função: "Suporte Técnico",
    year: [2013, " a ", 2014],
    descricao: "Suporte técnico com o CLP Bentle-Nevada da GE. Durante o periodo de 6 meses trabalhando tercerizado, otimizando o fluxo de petróleo",
  },
  {
    name: "Dresser-Rand",
    imgUrlFront: images.dresserange,
    função: "Montagem de painel para plataforma da petrobras",
    year: [2013, " a ", 2014],
    descricao: "Montagem de painel de contrele de floxo de petróleo. ",
  },
  {
    name: "Trexcon",
    imgUrlFront: images.trexcon,
    função: "Montador de painel pleno",
    year: [2013, " a ", 2014],
    descricao: "Montagem de painel para plataforma e usinas da petrobras ",
  },
 
  {
    name: "NovaKoasin",
    imgUrlFront: images.novakoasin,
    função: "Montador de painel pleno",
    year: [2011, " a ", 2013],
    descricao: "Montagem de painel para substação de eneergia, montagem de sistema de cameras para ônibus e sistema de semáfaro ",
  },
 
 
];

const Projeto = () => {
  return (
    <>
      <section className="projeto">
        <div>
          <h2 className="head-text">
            Experiências <span>Durante </span> 13 anos de trabalho
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
                    <div className="inner">
                      <h6 className="ano">
                        {" "}
                        Periodo:<span className="colorfunção">
                        {skill.year}
                          </span>{" "}
                      </h6>
                      <h6>
                        {" "}
                        Função:{" "}
                        <span className="colorfunção">
                          {" "}
                          {skill.função}
                        </span>{" "}
                      </h6>
                      <h6>
                        {" "}
                        Descrição:{" "}
                        <span className="colorfunção">
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

export default AppWrap(
  MotionWrap(Projeto, "app__projetos"),
  "projetos",
  "app__whitebg"
);
