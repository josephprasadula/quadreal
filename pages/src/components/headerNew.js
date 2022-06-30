import React from 'react'
import Image from 'next/image'
import { Col, Row ,Button} from 'antd';
import LogoImg from '../media/QuadRealPlus-Logos.png'

export default function HeaderNew() {
  return (
    <header className='header-section'>
        <Row align='middle'>
            <Col className='logobox' lg={4} xs={20}>
                <Image className='logo' src={LogoImg} alt='logo Img'/>
            </Col>
            <Col lg={8} xs={0} offset={12} className='navbar'>
            <Row justify='space-between' align='middle'>
                <Col>Features</Col>
                <Col>Lorem</Col>
                <Col>FAQ</Col>
                <Col><Button shape="round" className='navbutton'>Download Now</Button></Col>
            </Row>            
            </Col>
        </Row>
    </header>
  )
}
