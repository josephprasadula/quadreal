import React from 'react'
import { useState, useEffect , useRef } from 'react'
import Image from 'next/image'
import { Col, Row ,Button} from 'antd';

import styles from '../styles/header.module.scss'
import LogoImg from '../media/QuadRealPlus-Logos.png'

export default function Header() {
  return (
    <header className={styles.section}>
        <div className={styles.logobox}>
            <Image className='logo' src={LogoImg} alt='logo Img'/>
        </div>
        <nav>
            <ul>
                <li>Features</li>
                <li>Lorem</li>
                <li>FAQ</li>
                <li><Button shape="round" className={styles.navbutton}>Download Now</Button></li>
            </ul>
        </nav>
    </header>
  )
}
