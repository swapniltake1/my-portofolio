import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavbarStyle.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => setColor(window.scrollY >= 70);
    changeColor();
    window.addEventListener('scroll', changeColor);
    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to='/swapniltake/'>
        <div className='brand'>
          <span className='brand-mark'>ST</span>
          <span>
            <strong>Swapnil Take</strong>
            <small>Data Engineer</small>
          </span>
        </div>
      </Link>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/swapniltake/' onClick={() => setClick(false)}>Home</Link>
        </li>
        <li>
          <Link to='/swapniltake/project' onClick={() => setClick(false)}>Projects</Link>
        </li>
        <li>
          <Link to='/swapniltake/about' onClick={() => setClick(false)}>About</Link>
        </li>
        <li>
          <Link to='/swapniltake/contact' onClick={() => setClick(false)}>Contact</Link>
        </li>
        <li>
          <a href='/resume.html' className='nav-resume'>Resume</a>
        </li>
      </ul>

      <button className='hamburger' onClick={() => setClick(!click)} aria-label='Toggle navigation'>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff' }} />
        )}
      </button>
    </div>
  );
};

export default Navbar;
