import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
// import facebook from '../../../public/1.png'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>@2025 BlogPost. All rights reserved</div>
        <div className={styles.social}>
            <Image src="/1.png" width={20} height={20} className={styles.icon} alt="Facebook Account" />
            <Image src='/2.png' width={20} height={20} className={styles.icon} alt="Instagram Account"/>
            <Image src='/3.png' width={20} height={20} className={styles.icon} alt="Twitter Account"/>
            <Image src='/4.png' width={20} height={20} className={styles.icon} alt="YouTube Account"/>
        </div>
    </div>
  )
}

export default Footer