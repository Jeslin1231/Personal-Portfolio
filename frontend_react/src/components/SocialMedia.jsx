import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>

      <a href="">
      <BsLinkedin />
      </a>
      
      
    </div>
    <div>
      <a href="">
      <BsGithub />
      </a>
    </div>
    <div>
      <a href="">
      <FaFacebookF />
      </a>
    </div>

  </div>
);

export default SocialMedia;