import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Importing only the close icon

import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: navBg }}
      className={`${styles.navbar} ${shadow ? styles.shadow : ''}`}
    >
      <div className={styles.container}>
        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <ul style={{ color: linkColor }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#skills">Skills</Link></li>
            <li><Link href="/#projects">Projects</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div className={styles.hamburger} onClick={handleNav}>
          <span className={`${styles.bar} ${nav ? styles.open : ''}`}></span>
          <span className={`${styles.bar} ${nav ? styles.open : ''}`}></span>
          <span className={`${styles.bar} ${nav ? styles.open : ''}`}></span>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${nav ? styles.open : ''}`}>
          <div className={styles.closeIcon} onClick={handleNav}>
            <AiOutlineClose size={30} />
          </div>
          <ul style={{ color: linkColor }}>
            <li onClick={handleNav}><Link href="/">Home</Link></li>
            <li onClick={handleNav}><Link href="/#about">About</Link></li>
            <li onClick={handleNav}><Link href="/#skills">Skills</Link></li>
            <li onClick={handleNav}><Link href="/#projects">Projects</Link></li>
            <li onClick={handleNav}><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
