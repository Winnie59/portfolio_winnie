import React from 'react'
import { useState } from 'react'
import styles from '../styles/Contact.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(true)
  }
  return (
    <div className={styles.container} id='contact'>
        <div className={styles.item}>
         <h1 className={styles.title}>CONTACT</h1> 
         <span className={styles.text}>" Would love to hear your feedback and Let's connect "</span>
         <div className={styles.social}>
          <Link href='https://www.linkedin.com/in/winniebolm/' >
          <a target="_blank">
          <Image src='/img/in.png' width={100} height={100} />  
          </a>
          </Link>
          <Link href='https://github.com/Winnie59' >
          <a target="_blank">
          <Image src='/img/git.png' width={100} height={100} /> 
          </a>
          </Link>
          <Link href='https://www.instagram.com/winnie_bolm/' >
          <a target="_blank">
          <Image src='/img/ig.png' width={100} height={100} /> 
          </a>
          </Link>
         </div>
        </div>
        <div className={styles.item}>
           <h3 className={styles.sub}>Contact and Feedback</h3>
          <form className={styles.form} onSubmit={handleSubmit}>
          <input className={styles.input} type="text" placeholder='Name' />
            <input className={styles.input} type="text" placeholder='Email' />
            <textarea className={styles.textarea} placeholder='Message'></textarea>
            <button className={styles.button}>SEND</button>
            {message && <span>Thanks for the message!!</span> }
          </form>
        </div>
    </div>
  )
}

export default Contact