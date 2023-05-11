
import { motion } from "framer-motion";
import React from 'react'
import "./Home.scss"; 
import AppWrap from '../../wrapper/AppWrap'
import { images } from "../../constants";




function Home() {
 
  return (
    <>
      <div className="home">
        <section className="nome">
          <div>
            <h1>
              Olá, <span> Robervan Souza</span>
            </h1>
            <h2>
              Olá, sou um Desenvolvedor Full-Stack, formado em Técnico
              Mecatrônico e atualmente cursando Cyber Security. Sou apaixonado
              por tecnologia e sempre busco me atualizar em novas linguagens,
              frameworks e ferramentas. Com mais de um ano de experiência em
              desenvolvimento, estou aberto a novos desafios e a aprender novas
              tecnologias que possam agregar ao meu conhecimento. Além de
              projetos pessoais, também dedico parte do meu tempo para cursos e
              estudos que compartilho em meu GitHub.
            </h2>
          </div>
        </section>
        <section>
          <div className="foto">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className="imagem-home">
              <img src={images.robervan} alt="imagem perfil" />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default  AppWrap(Home, 'home')
