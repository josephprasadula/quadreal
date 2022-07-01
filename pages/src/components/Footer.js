import React from 'react'
import Image from 'next/image'
import LogoImg from '../media/QuadRealPlus-Logos.png'
import { Col, Row ,Button} from 'antd';
import {FacebookFilled,TwitterOutlined,InstagramOutlined,ArrowUpOutlined} from '@ant-design/icons'

export default function Footer() {
  return (
    <footer className='footer-section'>
        <div className='container footer'>
        <Row align='middle'>
            <Col lg={{span:8}} xs={{span:24,justify:'center'}}>
                <Image src={LogoImg} className='footer-logo' alt='logo in footer' />
            </Col>
            <Col lg={{span:4}} xs={{span:0}}>
                <h4 className='footer-text'>Features</h4>
                <h4 className='footer-text'>Highlights</h4>
            </Col>
            <Col lg={{span:4}} xs={{span:0}}>
                <h4 className='footer-text'>FAQ</h4>
                <h4 className='footer-text'>Download</h4>
            </Col>
            <Col lg={{span:4}} xs={{span:24}}>
                <Row justify='center' gutter={4}>
                    <Col><FacebookFilled style={{fontSize:'1.5rem'}} /></Col>
                    <Col><TwitterOutlined style={{fontSize:'1.5rem'}} /></Col>
                    <Col><InstagramOutlined style={{fontSize:'1.5rem'}} /></Col>            
                </Row>
            </Col>
            <Col lg={{span:4}} xs={{span:0}}>
            <Button type="primary" onClick={()=>{document.documentElement.scrollTop = 0;}} shape="circle" icon={<ArrowUpOutlined />} size='large' />
            </Col>
        </Row>
        <Row>
            <Col lg={{span:12}} xs={{span:24}}><h4 className='footer-text'>©2021 QuadReal+. All Rights Reserved.</h4></Col>
            <Col lg={{span:6}} xs={{span:0}}><h4 className='footer-text'>Terms & Conditions</h4></Col>
            <Col lg={{span:6}} xs={{span:0}}><h4 className='footer-text'>Privacy policy</h4></Col>
        </Row>
        </div>
        
    </footer>
  )
}
