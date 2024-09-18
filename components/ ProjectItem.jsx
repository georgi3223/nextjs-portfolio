import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/ProjectItem.module.scss';


const ProjectItem = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className={styles.projectItem}>
      <Image
        src={imageUrl}
        alt={title}
        className={styles.projectImage}
        width={500}
        height={300}
      />
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <Link href={projectUrl}>
          <a className={styles.projectLink} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
