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
          <p style={{ "--i": 4 }}></p>
          <p style={{ "--i": 14 }}></p>
          <p style={{ "--i": 24 }}></p>
          <p style={{ "--i": 5 }}></p>
          <p style={{ "--i": 15 }}></p>
          <p style={{ "--i": 25 }}></p>
          <p style={{ "--i": 6 }}></p>
          <p style={{ "--i": 16 }}></p>
          <p style={{ "--i": 26 }}></p>
          <p style={{ "--i": 7 }}></p>
          <p style={{ "--i": 17 }}></p>
          <p style={{ "--i": 27 }}></p>
          <p style={{ "--i": 8 }}></p>
          <p style={{ "--i": 18 }}></p>
          <p style={{ "--i": 28 }}></p>
          <p style={{ "--i": 9 }}></p>
          <p style={{ "--i": 19 }}></p>
          <p style={{ "--i": 29 }}></p>
        </div>
        <h2 className="head-text">
          <div className="simbolos">
            <h1>
              <BiArrowFromLeft /> <BiArrowFromRight />
            </h1>
          </div>
          Tecnico Mecatrônico,
          <span> Desenvolvedor Full-Stack </span>
          <br /> E 
          Cursando
          <span> Cyber-Security.</span>
          <div className="simbolos">
            <h1>
              {" "}
              <BiArrowFromLeft /> <BiArrowFromRight />{" "}
            </h1>
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
    </>
  );
}

export default AppWrap(Sobre, 'sobre');
