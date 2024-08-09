import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import styles from '../styles/Footer.module.scss'; // Import SCSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialIcons}>
          <a
            href='https://www.linkedin.com/in/georgi-nyagolov-26668a23a/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedinIn className={styles.icon} />
          </a>
          <a
            href='https://github.com/fireclint'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub className={styles.icon} />
          </a>
       </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Georgi Nyagolov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
