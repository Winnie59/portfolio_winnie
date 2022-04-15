import React from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.container} id='about'>
       <div className={styles.item}>
        <div className={styles.wrapper}>
          <Image src='/img/about.png' width='100%' height='100%' layout='responsive' objectFit='contain' />
        </div>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>ABOUT ME</h1> 
        <p className={styles.desc}>Hello! I’m Winnie Bolm. I’m a software engineer who had background in manufacturing and hospitality industry. In September 2021, I finally found my passion. I have learned that nothing is easy at first but just keep going. I enjoy creating and developing user-friendly interface. I would love to work and connect with you. </p> 
        <button className={styles.button}>Download Resume</button>
      </div>
    </div>
  )
}

export default About