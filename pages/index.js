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

export default function Home({projects}) {
  const [sideOpen, setSideOpen] = useState(false)
  return (
    <div className={styles.container}>
      <Head>
        <title>Winnie Bolm</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <NavBar sideOpen={sideOpen} setSideOpen={setSideOpen} />
      <SideBar sideOpen={sideOpen} setSideOpen={setSideOpen}/>
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
