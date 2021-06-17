import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { GoMarkGithub } from 'react-icons/go';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaYoutube />
        </li>
        {/* <li>
          <SiGmail />
        </li> */}
        {/* <li>
          <GoMarkGithub />
        </li> */}
      </ul>
    </footer>
  );
};

export default Footer;
