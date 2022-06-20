
import React from 'react'
import { Link, graphql } from 'gatsby';
import ThemeSwitcher from './ThemeSwitcher';
import Img from 'gatsby-image';
import Logo from './Logo';

const Header = ({ theme, action, isOpen, toggle, data }) => {
  return (
    <header>
      <nav className="container mx-auto flex flex-wrap justify-between items-center py-8">
        <div>
          <div>
            <Link to="/">
              {/* src={theme === 'light' ? logoLight : theme === 'relax' ? logoSepia : logo} */}
              <Logo theme={theme} />
            </Link>
          </div>
        </div>
        <div className="block lg:hidden">
          <button onClick={toggle} className="toggle-container flex justify-center items-center">
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
          <li className="mr-8 mb-6 lg:mb-0">
            <ThemeSwitcher theme={theme} action={action} />
          </li>
          <li onClick={toggle} className="mr-8 mb-6 lg:mb-0">
            <Link to="/" className="text-copy-primary home">Home</Link>
          </li>
          <li onClick={toggle} className="mr-8 mb-6 lg:mb-0">
            <Link to="/experience" className="text-copy-primary">Experience</Link>
          </li>
          <li onClick={toggle} className="mr-8 mb-6 lg:mb-0">
            <Link to="/projects" className="text-copy-primary">Projects</Link>
          </li>
          <li onClick={toggle} >
            <Link to="/blog" className="text-copy-primary">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

export const query = graphql`
  query {
    # file(relativePath: { eq: "logo.svg,logo-sepia.svg,logo-light-mode.svg" }) {
    file(relativePath: { eq: "logo.svg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 796) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

