import React from "react";
import {
  FaGithubSquare,
  FaWhatsapp,
  FaYoutube,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { AppWrap } from "../../wrapper";
import { FcBusinessContact, FcAddressBook } from "react-icons/fc";
import "./contato.scss";

function Contato() {
   
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
                      href="https://api.whatsapp.com/send?phone=5585994532058"
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
            <ul>
              <li>
                <i>
                  <FaGithubSquare />
                </i>
              </li>
              <li>
                <i>
                  <FaWhatsapp />
                </i>
              </li>
              <li>
                <i>
                  <FaYoutube />
                </i>
              </li>
              <li>
                <i>
                  <FaLinkedin />
                </i>
              </li>
            </ul>
          </div>
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
