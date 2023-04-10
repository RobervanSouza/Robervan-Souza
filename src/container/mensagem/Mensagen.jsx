import React, { useEffect } from "react";
import {
  FaWhatsapp,
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";

import { FcBusinessContact, FcAddressBook } from "react-icons/fc";
import "./Mensagem.scss";
import { BiGitMerge } from "react-icons/bi";

function Mensagem() {
  useEffect(() => {
   
    let links = document.querySelector(".compartilhar-links");
    let icone = document.querySelector(".compartilhar-icones");
    links.onclick = function () {
      if (icone.classList.contains("active")) {
        icone.classList.remove("active");
        console.log("desativado");
      } else {
        icone.classList.add("active");
        console.log("ativo");
      }
    };
  }, []);

  return (
    <>
      <div className="container-mensagem">
        <div className="modal" >
            <form action="" className="formulario">
              <label htmlFor=""> Digite seu nome</label>
              <input type="text" placeholder="Digite seu nome"/>
              <label htmlFor="">Cargo</label>
              <input type="text" placeholder="Digite seu nome"/>
            </form>
        </div>

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
