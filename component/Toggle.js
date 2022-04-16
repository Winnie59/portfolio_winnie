import React from 'react'
import styles from '../styles/Toggle.module.css'
import Image from 'next/image'

const Toggle = () => {
  return (
    <div className={styles.t}>
        <div className={styles.tIcon} ></div>
        <div className={styles.tIcon1}></div>
      <div
        className={styles.tButton}
      ></div>
    </div>
  )
}

export default Toggle