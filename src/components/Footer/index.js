import React from 'react';
import { contactLogos } from '../../data/index';

const Footer = () => {
  return (
    <footer>
      <ul>
        {contactLogos.map((icon) => {
          return (
            <li>
              <a
                href={icon.link}
                target='_blank'
                style={{ color: `${icon.color}` }}
              >
                {icon.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
