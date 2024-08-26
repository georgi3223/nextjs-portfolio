import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import styles from '../styles/Main.module.scss'; 
const Main = () => {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.content}>
          <p className={styles.intro}>
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className={styles.name}>
            Hi, I'm <span className={styles.highlight}>Georgi Nyagolov.</span>
          </h1>
          <h1 className={styles.role}> Web Developer</h1>
          <p className={styles.description}>
            I’m focused on building responsive web applications
            integrating back-end technologies.
          </p>
          <div className={styles.socialIcons}>
            <a
              href="https://www.linkedin.com/in/georgi-nyagolov-26668a23a/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.icon}>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/georgi3223"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.icon}>
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className={styles.icon}>
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
