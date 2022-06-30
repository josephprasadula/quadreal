import React from 'react'
import { useState, useEffect , useRef } from 'react'
import Image from 'next/image'

import styles from '../styles/hero.module.scss'
import PhoneImg from '../media/images@2x.png'
import PlaystoreImg from '../media/appstore.png'
import AppstoreImg from '../media/googleplay.png'
import HeaderNew from './headerNew'

export default function Herosection() {
  return (
    <section className={styles.herosection}>
      <div className={styles.container}>
        <HeaderNew />
        <div className={styles.layout}>
          <div className={styles.textbox}>
            <h1>
            Delivering connected & Seamless Tenant Experiences
            </h1>
            <p>
            Stay connected by taking advantage of our real-time building communications, access events and news, exclusive retailer promotions, and enjoy the innovative ways we’re connecting smart building technology with our community.
            </p>
            <div className={styles.storelablesbox}>
              <span>Available on both iPhone and Android devices</span>
              <div className={styles.storelables}>
                <Image src={PlaystoreImg}/>
                <Image src={AppstoreImg}/>
              </div>
            </div>
          </div>
          <div>
            <Image src={PhoneImg} alt='modal of mobile appp' />
          </div>
        </div>
      </div>
    </section>
  )
}
