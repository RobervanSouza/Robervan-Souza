import React from 'react';
import {  FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <FaLinkedin/>
    </div>
    <div>
      <FaGithub />
    </div>
    <div>
      <FaYoutube />
    </div>
  </div>
);

export default SocialMedia;
