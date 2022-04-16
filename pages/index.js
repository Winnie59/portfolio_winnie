import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Contact from '../component/Contact'
import Logo from '../component/Logo'
import NavBar from '../component/NavBar'
import Projects from '../component/Projects'
import SideBar from '../component/SideBar'
import Skills from '../component/Skills'
import styles from '../styles/Home.module.css'
import { data } from "../data";
import About from '../component/About'
import Toggle from '../component/Toggle'

export default function Home({projects}) {
  const [sideOpen, setSideOpen] = useState(false)
  return (
    <div className={styles.container}>
      <Head>
        <title>Winnie Bolm</title>
        <meta name="description" content="A motivated and creative full stack software engineer" />
        <meta name="keyword" content="portfolio, javascript, react, css3, next.js, node.js, developer" />
        <meta property="og:title" content="Winnie Bolm | Software Engineer" />
        <meta property="og:description"
            content="A motivated and creative full stack software engineer" />
        <meta property="og:image" content="/img/portfolio.jpeg" />
        <meta property="og:url" content="https://www.winniebolm.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <NavBar sideOpen={sideOpen} setSideOpen={setSideOpen} />
      <SideBar sideOpen={sideOpen} setSideOpen={setSideOpen}/>
      {/* <Toggle /> */}
      <Logo />
      <About />
      <Projects projects={projects} />
      <Skills />
      <Contact />
    </div>
  )
}

export const getStaticProps = () => {
  const projects = data;
  return {
    props: { projects },
  };
};
