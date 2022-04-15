import React from 'react'
import styles from '../styles/Skills.module.css'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className={styles.container} id='skills'>
      <div className={styles.item}>
        <h1>SKILLS</h1>
      </div>
      <div className={styles.item}>
        <iframe className={styles.iframe} src='https://my.spline.design/untitled-438f22da94006361b3ddee55203db9cf/' frameborder='0' width='100%' height='100%'></iframe>
      </div>
      <Image className={styles.img} src='/img/skills.png'  layout='responsive' height='100%' width='100%' objectFit='cover'/>
    </div>
  )
}

export default Skills