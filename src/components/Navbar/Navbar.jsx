import React, { useState} from 'react';
import './Navbar.scss';

import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import { motion} from 'framer-motion';


function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>Robervan</h1>
      </div>
      <ul className="app__navbar-links">
        {["home", "sobre", "projetos", "experiencias", "contato"].map(
          (itens) => (
            <li className="app__flex p-text" key={`link-${itens}`}>
              <div />
              <a href={`#${itens}`}> {itens} </a>
            </li>
          )
        )}
      </ul>
      <div className="app__navbar-menu">
        <HiOutlineMenuAlt4 onClick={() => setMenu(true)} />

        {menu && (
          <motion.div
            whileInView={{ x: [100, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}>
            <HiOutlineX onClick={() => setMenu(false)} />
            <ul>
              {["home", "sobre", "experiencias", "projetos", "contato"].map(
                (itens) => (
                  <li key={itens}>
                    <a href={`#${itens}`} onClick={() => setMenu(false)}>
                      {itens}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar
