import React from 'react'
import { BiArrowFromLeft, BiArrowFromRight, BiBullseye } from "react-icons/bi";
import  './Sobre.scss';
import {motion} from 'framer-motion';
import { images } from "../../constants";
import AppWrap from '../../wrapper/AppWrap';

const sobres = [
  {
    titulo: "Desenvolvedor Full-Stack",
    descricao: "Desenvolvedor de web sites",
    imgUrl: images.fullstack,
  },
  {
    titulo: "Tecnico Mecatrônico",
    descricao: "Formado com ampla experiência",
    imgUrl: images.mecatronica,
  },
  {
    titulo: "Cyber-Security",
    descricao: "Cursando cyber-security",
    imgUrl: images.cybersecurity,
  },
  { titulo: "Cursos Complementares", descricao: "Varios cursos complementares", imgUrl: images.cursos },
];

function Sobre() {

  
  return (
    <div id="sobre1" className="psobre">
      <h2 className="head-text">
        <div className="simbolos">
          <h1>
            <BiArrowFromLeft /> <BiArrowFromRight />
          </h1>
        </div>
        
        Tecnico Mecatrônico,
        <span> Desenvolvedor Full-Stack</span>
        <br />
        Cursando
        <span> Cyber-Security</span>
        <div className="simbolos">
          <h1>
            {" "}
            <BiArrowFromLeft /> <BiArrowFromRight />{" "}
          </h1>
        </div>
      </h2>
      <div className="app__profiles">
        <p className="ilusao">
          <p>
            {" "}
            <BiBullseye />{" "}
          </p>{" "}
        </p>
        {sobres.map((sobre, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={sobre.titulo + index}>
            <img src={sobre.imgUrl} alt={sobre.titulo} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {sobre.titulo}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {sobre.descricao}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AppWrap(Sobre, 'sobre');
