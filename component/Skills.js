import React from 'react'
import styles from '../styles/Skills.module.css'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className={styles.container} id='skills'>
      <h1 className={styles.title}>SKILLS</h1> 
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <Image src='/img/pro.png' width='100%' height='100%'  objectFit='contain' />
          <h3 className={styles.sub}>Programming</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>JavaScript</li>
            <li className={styles.li}>Python</li>
            <li className={styles.li}>HTML</li>
            <li className={styles.li}>CSS</li>
            <li className={styles.li}></li>
          </ul>
        </div>
        <div className={styles.item}>
        <Image src='/img/frame.png' width='100%' height='100%'  objectFit='contain' />
          <h3 className={styles.sub}>Frameworks / Libraries</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>Node.js</li>
            <li className={styles.li}>Express</li>
            <li className={styles.li}>React.js</li>
            <li className={styles.li}>Next.js</li>
            <li className={styles.li}>Bootstrap</li>
          </ul>
        </div>
        <div className={styles.item}>
        <Image src='/img/tool.png' width='100%' height='100%'  objectFit='contain' />
          <h3 className={styles.sub}>Databases / Tools</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>MongoDB</li>
            <li className={styles.li}>SQL</li>
            <li className={styles.li}>Git</li>
            <li className={styles.li}>REST</li>
            <li className={styles.li}>Spline</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills