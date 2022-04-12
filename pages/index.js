import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../component/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Winnie Bolm</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <NavBar />
    </div>
  )
}
