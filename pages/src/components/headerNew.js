import React from 'react'
import Image from 'next/image'
import { Col, Row ,Button} from 'antd';
import LogoImg from '../media/QuadRealPlus-Logos.png'

export default function HeaderNew() {
  return (
    <header className='header-section'>
        <Row align='middle'>
            <Col className='logobox' lg={5} xs={20}>
                <Image className='logo' src={LogoImg} alt='logo Img'/>
            </Col>
            <Col lg={8} xs={0} offset={11} className='navbar'>
            <Row justify='space-between' align='middle'>
                <Col className='navline'>Features</Col>
                <Col className='navline'>Lorem</Col>
                <Col className='navline'>FAQ</Col>
                <Col><Button shape="round" className='navbutton'>Download Now</Button></Col>
            </Row>            
            </Col>
        </Row>
    </header>
  )
}
