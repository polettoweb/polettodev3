
import React from 'react'
import { Link } from 'gatsby';
import ThemeSwitcher from './ThemeSwitcher';
import Logo from './Logo';

const Header = ({ theme, action, isOpen, toggle }) => {
  return (
    <header>
      <nav className="container mx-auto flex flex-wrap justify-between items-center py-8">
        <Logo theme={theme} title="Home" />
        <div className="block lg:hidden">
          <button onClick={toggle} title="Change color theme" className="toggle-container flex justify-center items-center">
            <svg
              className="current-color h-6 w-6 toggle"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul
          className={`uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0 ${isOpen ? "block" : "hidden"}`}>
          <li><ThemeSwitcher theme={theme} action={action} /> </li>
          <li><Link to="/" activeClassName="active" title='About' onClick={toggle} className="mr-8 text-copy-primary">About</Link></li>
          <li><Link to="/blog" activeClassName="active" title='Blog' onClick={toggle} className="mr-8 text-copy-primary">Blog</Link></li>
          <li><Link to="/experience" activeClassName="active" title='Experience' onClick={toggle} className="mr-8 text-copy-primary">Experience</Link></li>
          <li><Link to="/projects" activeClassName="active" title='Projects' onClick={toggle} className="mr-8 text-copy-primary">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

