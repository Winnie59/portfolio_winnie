import React from 'react'
import styles from '../../styles/Project.module.css'
import { data } from '../../data'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '../../component/NavBar'
import SideBar from '../../component/SideBar'
import { useState } from 'react'

const Project = ({project}) => {
    const [sideOpen, setSideOpen] = useState(false)

  return (
    <div className={styles.container}>
        <NavBar sideOpen={sideOpen} setSideOpen={setSideOpen} />
        <SideBar sideOpen={sideOpen} setSideOpen={setSideOpen}/>
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <div className={styles.media}>
                <Link href={project.link} >
                <a target="_blank">
                    <video 
                    className={styles.video}
                    src={`/img/${project.video}`}
                    autoPlay
                    loop />  
                </a>
                </Link>
                </div>
            </div>
            <div  className={styles.item}>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.desc} >{project.desc}</p>
            <div className={styles.button}>
                <Link href={project.github} >
                <a target="_blank">
                <Image  src='/img/git.png' width={200} height={200} /> 
                </a>
                </Link>
                <Link href={project.link} >
                <a target="_blank">
                <Image  src='/img/link1.png' width={200} height={200} /> 
                </a>
                </Link>   
            </div>
            </div>
        </div>
    </div>
  )
}

export const getStaticPaths = () => {
    const projects = data
    const paths = projects.map((item) => {
      return {
        params: { id: item.id },
      }
    })
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = (ctx) => {
    const id = ctx.params.id
    const project = data.filter((item) => item.id === id)[0];
    return {
      props: { project },
    };
  };

export default Project