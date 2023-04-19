
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
            <h1>Olá, Sou Robervan Souza</h1>
            <h2>
              Formado em Técnico Mecatrônico, Desenvolvedor Full-Stack e 
              cursando Cyber Security. Estou aberto a novos desafios e aprender novas tecnologias.
              Estou sempre buscando me atualizar a novas linguagens, framworks e ChatGpt. Estou estudando a mais de um ano, fazendo projetos e cursos, todos disponivel em meu GitHub.    
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
