/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {["home", "sobre","experiencias", "projetos", "contato"].map((itens, index) => (
      <a
        href={`#${itens}`}
        key={itens + index}
        className="app__navigation-dot"
        style={active === itens ? { backgroundColor: "#313BAC" } : {}}/>
       
      
    ))}
  </div>
);

export default NavigationDots;
