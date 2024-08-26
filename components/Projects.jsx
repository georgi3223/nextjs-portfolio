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
          {/* Adding a ProjectItem component */}
          <ProjectItem 
            title="E-commerce build with Laravel" 
            description="A fully functional e-commerce application built with Laravel."
            
            projectUrl="https://github.com/georgi3223/laravel-ecommerce"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
