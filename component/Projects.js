import Link from 'next/link'
import React from 'react'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'

const Projects = ({projects}) => {
  return (
    <section className={styles.container} id='projects'>
       <h1 className={styles.title}>PROJECTS</h1>
       <div className={styles.projects}>
          {projects.map((project) => (
            <Link key={project.id} href={`/project/${project.id}`} passHref>
              <a target="_blank">
              <div className={styles.project}>
                <span className={styles.cat}>{project.title}</span>
                <div className={styles.media}>
                    <Image src={`/img/${project.photo}`} 
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    alt=""
                    />
                </div>
              </div>
              </a>
            </Link>
          ))}
       </div>
    </section>
  )
}

export default Projects