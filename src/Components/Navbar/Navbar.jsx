import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className="navbar-title">
        <h1>Portfolio</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="nav-menu desktop-menu">
        <li><AnchorLink className='anchor-link' href='#home'><p>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p>About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#education'><p>Education</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p>Projects</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
      </ul>

      {/* Menu Icon (Mobile) */}
      <img
        src={menu_open}
        alt="menu"
        className="menu-icon"
        onClick={() => setMenuOpen(true)}
      />

      {/* Mobile Sidebar */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <h2>Menu</h2>
          <img
            src={menu_close}
            alt="close"
            className="close-icon"
            onClick={() => setMenuOpen(false)}
          />
        </div>
        <ul>
          <li onClick={() => setMenuOpen(false)}><AnchorLink className='anchor-link' href='#home'><p>Home</p></AnchorLink></li>
          <li onClick={() => setMenuOpen(false)}><AnchorLink className='anchor-link' offset={50} href='#about'><p>About Me</p></AnchorLink></li>
          <li onClick={() => setMenuOpen(false)}><AnchorLink className='anchor-link' offset={50} href='#education'><p>Education</p></AnchorLink></li>
          <li onClick={() => setMenuOpen(false)}><AnchorLink className='anchor-link' offset={50} href='#projects'><p>Projects</p></AnchorLink></li>
          <li onClick={() => setMenuOpen(false)}><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
