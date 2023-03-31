import React from 'react'
import {
  BiArrowFromLeft,
  BiArrowFromRight,
  BiBullseye,
  BiCog,
} from "react-icons/bi";
import  './Sobre.scss';
import {motion} from 'framer-motion';
import { images } from "../../constants";
import AppWrap from '../../wrapper/AppWrap';

const sobres = [
  {
    titulo: "Desenvolvedor Full-Stack",
    descricao: "A definição de Desenvolvedor Full Stack pode ser resumida como alguém capaz de trabalhar tanto no back-end quanto no front-end de sistemas. Isso significa que o profisional pode desenvolver plataformas completas (com bancos de dados, servidores e clientes) que não precisam de outros aplicativos para funcionar",
    imgUrl: images.fullstack,
  },
  {
    titulo: "Tecnico Mecatrônico",
    descricao: "Formado com ampla experiência",
    imgUrl: images.mecatronica,
  },
  {
    titulo: "Cyber-Security",
    descricao: "Cursando cyber-security ",
    imgUrl: images.cybersecurity,
  },
  { titulo: "Cursos Complementares", descricao: "Varios sfd sfferfgdfgdsgfsdgd dgfd sgfsdgf sdgf sdg fdsf g sdfg ds gfd sfg sdf gds gf sdf g cursos complementares", imgUrl: images.cursos },
];

function Sobre() {

  
  return (
    <>
      <div id="sobre1" className="psobre">
        <div id="fundo"></div>
        <div className="bolas1">
          <p style={{ "--i": 1 }}></p>
          <p style={{ "--i": 11 }}></p>
          <p style={{ "--i": 21 }}></p>
          <p style={{ "--i": 31 }}></p>
          <p style={{ "--i": 2 }}></p>
          <p style={{ "--i": 12 }}></p>
          <p style={{ "--i": 22 }}></p>
          <p style={{ "--i": 3 }}></p>
          <p style={{ "--i": 13 }}></p>
          <p style={{ "--i": 23 }}></p>
       
        </div>
        <h2 className="head-text">
          <div className="simbolos">
            <h1>
              <BiArrowFromLeft /> <BiArrowFromRight />
            </h1>
          </div>
          Técnico Mecatrônico,
          <span> Desenvolvedor Full-Stack </span>
          <br /> E Cursando
          <span> Cyber-Security.</span>
          <div className="simbolos">
           
          </div>
          <div className="mecanica">
            {" "}
            <BiCog />
          </div>
          <div className="mecanica2">
            <BiCog />
          </div>
        </h2>
        <div className="app__profiles">
          <div>
            <p className="ilusao">
              <p>
                {" "}
                <BiBullseye />{" "}
              </p>{" "}
            </p>
          </div>
          {sobres.map((sobre, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={sobre.titulo + index}>
              <img src={sobre.imgUrl} alt={sobre.titulo} />
              <div className="texto">
                <h2 className="bold-text" style={{ marginTop: 10 }}>
                  {sobre.titulo}
                </h2>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {sobre.descricao}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AppWrap(Sobre, 'sobre');
