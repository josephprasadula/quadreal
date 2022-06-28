import React from 'react'
import { useState, useEffect , useRef } from 'react'
import Image from 'next/image'

import styles from '../styles/header.module.scss'
import LogoImg from '../media/QuadRealPlus-Logos.png'

export default function Header() {
  return (
    <header className={styles.section}>
        <div className={styles.logobox}>
            <Image src={LogoImg} alt='logo Img'/>
        </div>
        <nav>
            <ul>
                <li>Features</li>
                <li>Lorem</li>
                <li>FAQ</li>
                <li><button className={styles.navbutton}>Download Now</button></li>
            </ul>
        </nav>
    </header>
  )
}
