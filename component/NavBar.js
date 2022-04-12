import React from 'react'
import styles from '../styles/NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = ({sideOpen, setSideOpen}) => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.logo}>
                <Link href='/' passHref>
                    <Image src='/img/logo.png' alt='logo' width={80} height={80} />
                </Link>
            </div>
        </div>
        <div className={styles.item}>
            <ul className={styles.list}>
                <li className={styles.listItem}>PROJECTS</li>
                <li className={styles.listItem}>SKILLS</li>
                <li className={styles.listItem}>RESUME</li>
                <li className={styles.listItem}>ABOUT</li>
                <li className={styles.listItem}>CONTACT</li>
            </ul>
            <div className={styles.hamburger} onClick={()=>setSideOpen(!sideOpen)}>
                <span className={styles.line1}></span>
                <span className={styles.line2}></span>
                <span className={styles.line3}></span>
            </div>
        </div>
    </div>
  )
}

export default NavBar