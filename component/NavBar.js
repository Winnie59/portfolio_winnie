import React from 'react'
import styles from '../styles/NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = ({sideOpen, setSideOpen}) => {
  return (
    <nav className={styles.container}>
        <div className={styles.item}>
            <div className={styles.logo}>
                <Link href='/' passHref>
                    <Image src='/img/logo.png' alt='logo' width={80} height={80} />
                </Link>
            </div>
        </div>
        <div className={styles.item}>
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
            <div className={styles.hamburger} onClick={()=>setSideOpen(!sideOpen)}>
                <span className={styles.line1}></span>
                <span className={styles.line2}></span>
                <span className={styles.line3}></span>
            </div>
        </div>
    </nav>
  )
}

export default NavBar