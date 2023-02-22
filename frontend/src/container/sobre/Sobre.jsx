import React,{ useEffect, useState} from 'react'
import  './Sobre.scss';
import {motion} from 'framer-motion';
import { images } from "../../constants";
import { urlFor, cliente } from '../../cliente';
const sobres = [
  { titulo: "Desenvolvedor", descricao: 'full-stack', imgUrl: images.about01},
  { titulo: "Desenvolvedor", descricao: 'full-stack', imgUrl: images.about02},
  { titulo: "Desenvolvedor", descricao: 'full-stack', imgUrl: images.about03},
 
];

function Sobre() {
  const [sobres, setSobre] = useState([]);
  useEffect(() => {
    const query = '*[_type == "sobre"]';

    cliente.fetch(query).then((data) =>{
      
    })
  }, []);
  return (
    <>
      <h2 className="head-text">
        descrever sobre
        <span> bom programador</span>
        <br />
        voce
        <span> full stack</span>
      </h2>
      <div className="app__profiles">
        {sobres.map((sobre, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={sobre.title + index}>
            <img src={sobre.imgUrl} alt={sobre.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {sobre.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {sobre.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Sobre
