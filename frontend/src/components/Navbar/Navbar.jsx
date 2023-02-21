import React from 'react'
import './Navbar.scss'
import { images } from '../../constants'
function Navbar() {
  return (
    <nav className='Nav_bar' >
      <div>
        <img src={images.logo} alt="logo" />
      </div>
      <ul>
        {["home", "sobre", "projetos", "skills", "contato"].map((itens) => (
          <li key={`link-${itens}`}>
            <div />
            <a href={`#${itens}`}> {itens} </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar
