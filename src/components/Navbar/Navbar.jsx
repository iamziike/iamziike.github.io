import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgarClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = (event) => {
    const { target } = event;
    if (
      !target.closest('li')?.classList.contains(styles.link)
    )
      return;
    setIsOpen(false);
  };

  return (
    <nav
      className={`${styles.navbar} navbar--default-theme`}
    >
      <div
        className={`${styles.logo} ${
          isOpen ? styles['logo--open'] : ''
        }`}
      >
        ZK
      </div>
      <div
        className={`${styles['burgar-nav']} ${
          isOpen ? styles['burgar-nav--active'] : ''
        }`}
        onClick={handleBurgarClick}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul
        className={`${styles.links} ${
          isOpen ? '' : styles['links--close']
        }`}
        onClick={handleLinkClick}
      >
        <li className={styles.link}>
          <Link to='/'>Home</Link>
        </li>
        <li className={styles.link}>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
