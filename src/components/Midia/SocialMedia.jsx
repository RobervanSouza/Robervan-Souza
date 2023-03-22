import React from 'react';
import {  FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import "./scss/Midia.scss"
const SocialMedia = () => (
  <div className="app__social">
    <div className='linkedin'>
      <FaLinkedin/>
    </div>
    <div>
      <FaGithub className='github' />
    </div>
    <div>
      <FaYoutube className='youtube'/>
    </div>
  </div>
);

export default SocialMedia;
