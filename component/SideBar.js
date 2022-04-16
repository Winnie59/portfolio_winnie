import Link from 'next/link'
import React from 'react'
import styles from '../styles/SideBar.module.css'

const SideBar = ({sideOpen, setSideOpen}) => {
  return (
    <div>
        {sideOpen ? 
        <div className={`${styles.side} ${styles.active}`}>
                <ul className={styles.list}>
                <Link href='/#about' passHref>
                    <li className={styles.listItem} onClick={()=>setSideOpen(!sideOpen)}>ABOUT</li>
                </Link>    
                <Link href='/#projects' passHref >
                    <li className={styles.listItem} onClick={()=>setSideOpen(!sideOpen)} >PROJECTS</li>
                </Link>
                <Link href='/#skills' passHref>
                    <li className={styles.listItem} onClick={()=>setSideOpen(!sideOpen)}>SKILLS</li>
                </Link>
                <Link href='/img/Winnie Bolm Resume.pdf' >
                <a target="_blank">
                    <li className={styles.listItem} onClick={()=>setSideOpen(!sideOpen)}>RESUME</li>
                </a>
                </Link>
                <Link href='/#contact' passHref>
                    <li className={styles.listItem} onClick={()=>setSideOpen(!sideOpen)}>CONTACT</li>
                </Link>
                </ul>
        </div>
        :
        <div className={styles.side}>
                <ul className={styles.list}>
                 <Link href='/#about' passHref>
                    <li className={styles.listItem}>ABOUT</li>
                </Link>    
                <Link href='/#projects' passHref >
                    <li className={styles.listItem}>PROJECTS</li>
                </Link>
                <Link href='/#skills' passHref>
                    <li className={styles.listItem}>SKILLS</li>
                </Link>
                <Link href='/img/Winnie Bolm Resume.pdf' >
                <a target="_blank">
                    <li className={styles.listItem}>RESUME</li>
                </a>
                </Link>
                <Link href='/#contact' passHref>
                    <li className={styles.listItem}>CONTACT</li>
                </Link>
                </ul>  
        </div>
        }
    </div>
  )
}

export default SideBar