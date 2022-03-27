import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from './Navbar.module.css';

const CustomLink = ({ to, title }) => {
  return (
    <Link to={to} className={classes.link}>
      {title.toUpperCase()}
    </Link>
  );
};

const links = [
  { to: '/', title: 'Home' },
  { to: '/projects', title: 'Projects' },
  { to: '/contact', title: 'Contact Me' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navControlClickHandler = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={classes.nav}>
      <Link
        to='/'
        className={`${classes.logo} ${isOpen ? classes['logo--active'] : ''}`}
      >
        ZK
      </Link>
      <div
        className={`${classes.links} ${isOpen ? '' : classes['links--close']}`}
      >
        {links.map((link) => (
          <CustomLink key={link.to} to={link.to} title={link.title} />
        ))}
      </div>
      <div
        className={`${classes.nav__control} ${
          isOpen ? classes['nav__control--active'] : ''
        }`}
        onClick={navControlClickHandler}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Navbar;
