
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
            <h1>Sou Robervan Souza</h1>
            <h2>
              Formado em Desenvolvedor Full-Stack e 
              Técnico Mecatrônico,  cursando Cyber Security. Estou aberto a
              novos desafios e aprender outras tecnologias, e sempre buscando
              mais conhecimento e me atualizando.
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
