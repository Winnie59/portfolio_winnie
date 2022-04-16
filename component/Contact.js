import React from 'react'
import { useState, useRef } from 'react'
import styles from '../styles/Contact.module.css'
import Image from 'next/image'
import Link from 'next/link'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      `${process.env.NEXT_PUBLIC_YOUR_SERVICE_ID}`, 
      `${process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID}`, 
      formRef.current, 
      `${process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY}`
      )
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.item}>
         <h1 className={styles.title}>CONTACT</h1> 
         <div className={styles.card}>
         <p className={styles.text}> would love to hear your feedback ...</p>
         </div>
         <div className={styles.connect}>
          <span className={`${styles.textSub} ${styles.nect}`}>LET'S CONNECT</span> 
          <div className={styles.mail}>
            <Image src='/img/email.png' width={80} height={80} objectFit='contain'/>
            <span className={`${styles.textSub} ${styles.email}`}>winnie.bolm@gmail.com</span>   
          </div>
           
         </div>
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
           <h3 className={styles.sub}>Contact or Feedback</h3>
          <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
          <input className={styles.input} type="text" placeholder='Name' name="user_name" />
            <input className={styles.input} type="text" placeholder='Email' name="user_email" />
            <textarea className={styles.textarea} placeholder='Message' name="message" ></textarea>
            {done && <span>Thanks for the message!!</span> }
            <button className={styles.button}>SEND</button>
          </form>
        </div>
    </footer>
  )
}

export default Contact