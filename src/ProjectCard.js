import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, isImageLeft }) => {
    return (
        <div>
            <div className={`${styles.card} ${isImageLeft ? styles.rowReverse : ''}`}>
                <div className={styles.imageContainer}>
                    <img src={project.image} alt={project.title} className={styles.image} />
                </div>
                <div className={styles.contentContainer}>
                    <h3 className={styles.heading}>{project.title}</h3>
                    <p className={styles.subheading}>{project.sub}</p>
                    <p className={styles.content}>{project.description}</p>
                    <a href={project.link} rel="noreferrer">
                    <button type="button" class="btn btn-dark">Detail</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
