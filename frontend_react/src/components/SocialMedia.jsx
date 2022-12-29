import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href={`https://github.com/graham-greer`} target="about_blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href={`https://www.linkedin.com/in/graham-greer/`} target="about_blank">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href={`mailto: grahamgreer.pt@gmail.com`}>
        <MdEmail />
      </a>
    </div>
  </div>
);

export default SocialMedia;