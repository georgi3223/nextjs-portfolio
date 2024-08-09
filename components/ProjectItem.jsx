import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/ProjectItem.module.scss'; // Import the SCSS module

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
    <div className={styles.projectItem}>
      <Image className={styles.backgroundImg} src={backgroundImg} alt="/" />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.tech}>{tech}</p>
        <Link href={projectUrl}>
          <p className={styles.moreInfo}>More Info</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
