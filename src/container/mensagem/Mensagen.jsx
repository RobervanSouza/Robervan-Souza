import React, { useState} from "react";
import { useForm } from "react-hook-form";

import "./Mensagem.scss";


function Mensagem() {


  return (
    <>
      <div className="container-footer">
        © 2023  Robervan Souza 
      </div>
    </>
  );
}

export default Mensagem;

/* //3 exemplo para mudar a cor do todo o codigo
export default AppWrap(
  MotionWrap(Contato, "app__footer"),
  "contato",
  "app__whitebg"
);
*/
