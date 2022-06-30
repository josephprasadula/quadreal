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
            <Col lg={{span:6}} xs={{span:24}}>
                <Image src={LogoImg} alt='logo in footer' />
                <h4 className='footer-text'>©2021 QuadReal+. All Rights Reserved.</h4>
            </Col>
            <Col lg={{span:6}} xs={{span:0}}>
                <h4 className='footer-text'>Features</h4>
                <h4 className='footer-text'>Highlights</h4>
            </Col>
            <Col lg={{span:6}} xs={{span:0}}>
                <h4 className='footer-text'>FAQ</h4>
                <h4 className='footer-text'>Download</h4>
            </Col>
            <Col lg={{span:6}} xs={{span:24}}>
                <Row justify='space-between' gutter={8}>
                    <Col lg={{span:10}} xs={{span:20}}>
                        <Row gutter={4} className='footer-text'>
                            <Col><FacebookFilled /></Col>
                            <Col><TwitterOutlined /></Col>
                            <Col><InstagramOutlined /></Col>
                        </Row>
                        <h4 className='footer-text'>Terms & Conditions</h4>
                    </Col>
                    <Col lg={{span:10}} xs={{span:0}}>
                    <Button type="primary" style={{marginTop:'2rem'}} onClick={()=>{document.documentElement.scrollTop = 0;}} shape="circle" icon={<ArrowUpOutlined />} size='large' />
                    <h4 className='footer-text'>Privacy policy</h4>
                    </Col>
                </Row>
            </Col>
        </Row>
        </div>
        
    </footer>
  )
}
