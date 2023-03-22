import React from 'react';
import {  FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import "./scss/Midia.scss"
const SocialMedia = () => (
  <div className="app__social">
    <div className="linkedin">
      <a
        href="https://www.linkedin.com/in/robervan-souza/"
        target="_blank"
        rel="noreferrer">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://github.com/RobervanSouza"
        target="_blank"
        rel="noreferrer">
        <FaGithub className="github" />
      </a>
    </div>
    <div>
      <a
        href="https://www.youtube.com/@robervansouza4546/videos"
        target="_blank"
        rel="noreferrer">
        
      <FaYoutube className="youtube" />
      </a>
    </div>
  </div>
);

export default SocialMedia;
