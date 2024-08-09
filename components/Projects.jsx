import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';
import styles from '../styles/Projects.module.scss'; 

const Projects = () => {
  return (
    <div id='projects' className={styles.container}>
      <div className={styles.content}>
        <p className={styles.sectionTitle}>Projects</p>
        <h2 className={styles.heading}>What I&apos;ve Built</h2>
        <div className={styles.grid}>
          
        
        </div>
      </div>
    </div>
  );
};

export default Projects;
