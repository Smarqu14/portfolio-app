import React from 'react';
import { useEffect, useState } from 'react';
import logo from '../../images/Steve codes (1).png';
import { MenuItems } from './MenuItems';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset >= 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const head = ['navbar'];
  if (scrolled) {
    head.push('scrolled');
  }

  return (
    <nav className={head.join(' ')}>
      <div className='logo'>
        <img src={logo} alt='Steve Marquez logo' />
      </div>
      <ul className={clicked ? 'nav-links' : 'nav-items'}>
        {MenuItems.map((items, index) => {
          return (
            <li key={index}>
              <a href={items.url}>{items.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
