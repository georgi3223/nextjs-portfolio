import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import styles from '../styles/About.module.scss'; 

const About = () => {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.textContainer}>
          <p className={styles.title}>About</p>
          <h2 className={styles.subtitle}>Who I Am</h2>
          <p className={styles.paragraph}>
          I focus on creating mobile-responsive front-end UI applications that seamlessly integrate with APIs and backend technologies. I’m passionate about learning new technologies and exploring different approaches to problem-solving. While I have strong skills in HTML, CSS, JavaScript, and React, I’m a fast learner who can adapt to new tech stacks as needed. I believe that being an effective developer involves choosing the best tools and techniques for each project, rather than sticking to a single technology.
          </p>
        
          <Link href="/#projects">
            <p className={styles.link}>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <Image src={AboutImg} className={styles.image} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
