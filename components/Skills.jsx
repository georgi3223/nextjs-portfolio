import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Github from '../public/assets/skills/github1.png';
import NextJS from '../public/assets/skills/nextjs.png';
import styles from '../styles/Skills.module.scss'; 


const Skills = () => {
  return (
    <div id='skills' className={styles.container}>
      <div className={styles.content}>
        <p className={styles.sectionTitle}>Skills</p>
        <h2 className={styles.heading}>What I Can Do</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.icon}>
                <Image src={Html} width='64px' height='64px' alt='HTML' />
              </div>
              <div className={styles.label}>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.icon}>
                <Image src={Css} width='64px' height='64px' alt='CSS' />
              </div>
              <div className={styles.label}>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.icon}>
                <Image src={Javascript} width='64px' height='64px' alt='JavaScript' />
              </div>
              <div className={styles.label}>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.icon}>
                <Image src={ReactImg} width='64px' height='64px' alt='React' />
              </div>
              <div className={styles.label}>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.icon}>
                <Image src={Github} width='64px' height='64px' alt='Github' />
              </div>
              <div className={styles.label}>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.icon}>
                <Image src={NextJS} width='64px' height='64px' alt='NextJS' />
              </div>
              <div className={styles.label}>
                <h3>Next</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
