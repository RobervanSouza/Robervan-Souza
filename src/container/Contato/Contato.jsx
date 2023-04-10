import React, { useEffect } from "react";
import {
  FaWhatsapp,
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { AppWrap } from "../../wrapper";
import { FcBusinessContact, FcAddressBook } from "react-icons/fc";
import "./contato.scss";
import { BiGitMerge } from "react-icons/bi";

function Contato() {
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
      <div className="cards">
        <div className="container">
          <div className="card-contato">
            <ul>
              <li>
                <i className="icone-contato">
                  <FcBusinessContact />
                  <span> (89) 99453-2058</span>
                </i>
              </li>
              <li>
                <i className="icone-contato">
                  <span className="email">
                    <FcAddressBook />
                    rob.robervan@hotmail.com
                  </span>
                </i>
              </li>
            </ul>
          </div>
          <div className="card-nome">
            <div className="card-nome-icon"></div>
            <h3> Robervan Souza</h3>
          </div>
          <div className="card-link">
            <ul>
              <li>
                <div className="contato-linkedin">
                  <a
                    href="https://www.linkedin.com/in/robervan-souza/"
                    target="_blank"
                    rel="noreferrer">
                    <FaLinkedin />
                  </a>
                </div>
              </li>
              <li>
                <div className="contato-whatsap">
                  <div className="icone-whatsap">
                    <a
                      href="https://api.whatsapp.com/send?phone=5589994532058"
                      target="_blank"
                      rel="noreferrer">
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="contato-github">
                  <a
                    href="https://github.com/RobervanSouza"
                    target="_blank"
                    rel="noreferrer"
                    className="icone-github">
                    <FaGithub />
                  </a>
                </div>
              </li>
              <li>
                <div class="contato-youtube">
                  <a
                    href="https://www.youtube.com/@robervansouza4546/videos"
                    target="_blank"
                    rel="noreferrer"
                    class="youtube-icone">
                    <FaYoutube />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="compartilhar-icones">
          <div className="compartilhar-links">
            <span className="icone-compartilhar">
              <BiGitMerge />
            </span>
          </div>

          <li style={{ "--i": 1 }}>
            <a
              href="https://www.linkedin.com/in/robervan-souza/"
              target="_blank"
              style={{ color: "blue" }}
              rel="noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li style={{ "--i": 2 }}>
            <a
              href="https://www.facebook.com/sua_pagina"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#3b5998" }}>
              <FaFacebook />
            </a>
          </li>
          <li style={{ "--i": 3 }}>
            <a
              href="https://www.linkedin.com/in/robervan-souza/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "red" }} onClick="ShareVideo">
              <FaYoutube />
            </a>
          </li>
          <li style={{ "--i": 4 }}>
            <a
              href="https://www.linkedin.com/in/robervan-souza/"
              target="_blank"
              rel="noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li style={{ "--i": 5 }}>
            <a
              href="https://www.linkedin.com/in/robervan-souza/"
              target="_blank"
              rel="noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li style={{ "--i": 6 }}>
            <a
              href="https://www.linkedin.com/in/robervan-souza/"
              target="_blank"
              rel="noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li style={{ "--i": 7 }}>
            <a
              href="https://www.linkedin.com/in/robervan-souza/"
              target="_blank"
              rel="noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li style={{ "--i": 8 }}>
            <a
              href="https://www.linkedin.com/in/robervan-souza/"
              target="_blank"
              rel="noreferrer">
              <FaLinkedin />
            </a>
          </li>
        </div>
      </div>
    </>
  );
}

export default AppWrap(Contato, "contato");

/* //3 exemplo para mudar a cor do todo o codigo
export default AppWrap(
  MotionWrap(Contato, "app__footer"),
  "contato",
  "app__whitebg"
);
*/
