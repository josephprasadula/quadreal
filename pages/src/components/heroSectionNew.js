import React from 'react'
import { useState, useEffect , useRef } from 'react'
import Image from 'next/image'
import { Col, Row ,Button} from 'antd';
import PhoneImg from '../media/images@2xdf.png'
import PlaystoreImg from '../media/appstore.png'
import AppstoreImg from '../media/googleplay.png'
import HeaderNew from './headerNew'

export default function Herosection() {
  return (
    <section className='herosection'> 
    <HeaderNew />
      <div className='hero-container'>
        <Row align='middle' justify='space-around'>
            <Col lg={{span:10}} xs={{span:18,offset:2}}>
            <div className='hero-textbox'>
            <h1>
            Delivering connected & Seamless Tenant Experiences
            </h1>
            <p>
            Stay connected by taking advantage of our real-time building communications, access events and news, exclusive retailer promotions, and enjoy the innovative ways we’re connecting smart building technology with our community.
            </p>
            <div className='hero-lablebox'>
              <span>Available on both iPhone and Android devices</span>
              <Row>
                <Col span={12}><Image src={PlaystoreImg}/></Col>
                <Col span={12}><Image src={AppstoreImg}/></Col>
              </Row>
            </div>
          </div>
            </Col>
            <Col lg={{span:12}} xs={{span:24}}>
                <Image src={PhoneImg} alt='modal of mobile appp' />
            </Col>
        </Row>
      </div>
    </section>
  )
}
