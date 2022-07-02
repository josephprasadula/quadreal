import React from 'react'
import Image from 'next/image'
import { Col, Row ,Button} from 'antd';
import LogoImg from '../media/QuadRealPlus-Logos.png'

export default function HeaderNew() {
  return (
    <header className='header-section'>
        <Row align='middle'>
            <Col className='logobox' lg={{span:4,offset:0}} xs={{span:14,offset:1}}>
                <Image className='logo' src={LogoImg} alt='logo Img'/>
            </Col>
            <Col lg={{span:8,offset:12}} xs={{span:0,offset:0}} className='navbar'>
            <Row justify='space-between' align='middle'>
                <Col className='navline'>Features</Col>
                <Col className='navline'>Lorem</Col>
                <Col className='navline'>FAQ</Col>
                <Col><Button shape="round">Download Now</Button></Col>
            </Row>            
            </Col>
        </Row>
    </header>
  )
}
