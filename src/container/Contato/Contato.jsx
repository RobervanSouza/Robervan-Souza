import React from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./contato.scss";

const Contato = () => {
  return (
    <>
      <h2 className="head-text"> Contato</h2>

      <div className="card-conato">
        <div className="card-email ">
          <img src={images.email} alt="email" />
          <a href="rob.robervan@hotmail.com" className="email">
            rob.robervan@hotmail.com
          </a>
        </div>
        <div className="card-telefone">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="telefone">
            (85) 99257-3085
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Contato, "app__footer"),
  "contato",
  "app__whitebg"
);
