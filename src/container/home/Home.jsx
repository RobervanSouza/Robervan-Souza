import React from 'react'
import "./Home.scss"; 
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from '../../wrapper/AppWrap'

const scalevariantes={
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition:{
      duration: 1,
      ease: 'easeInOut',
    }
  }
}
function Home() {
  return (
    <div id='home'  className="app app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text"> Olá estou aqui</p>
              <h1 className="head-text">Robervan Souza</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className='p-text'>Desenvolvedor Full-Stack</p>
            <p className='p-text' >Cyber-Security</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-image">
        <img src={images.robervan} alt="imagem perfil" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="imagem perfil"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scalevariantes}
        whileInView={scalevariantes.whileInView}
        className="app__header-circles">
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default  AppWrap(Home, 'home')
