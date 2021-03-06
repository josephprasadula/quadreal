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
            <Col lg={{span:8,offset:0}} xs={{span:16,offset:4,justify:'center'}}>
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
            <Col lg={{span:5}} xs={{span:24}}>
                <Row justify='center' className='icon-box'>
                    <Col><FacebookFilled style={{fontSize:'1.5rem',margin:'0rem 1rem'}} /></Col>
                    <Col><TwitterOutlined style={{fontSize:'1.5rem',margin:'0rem 1rem'}} /></Col>
                    <Col><InstagramOutlined style={{fontSize:'1.5rem',margin:'0rem 1rem'}} /></Col>            
                </Row>
            </Col>
            <Col lg={{span:2,offset:1}} xs={{span:0}}>
            <Button type="primary" onClick={()=>{document.documentElement.scrollTop = 0;}} shape="circle" icon={<ArrowUpOutlined />} size='large' />
            </Col>
        </Row>
        <Row style={{marginTop:'2rem'}}>
            <Col lg={{span:16,offset:0}} xs={{span:20,offset:2}}><h4 className='footer-text'>©2021 QuadReal+. All Rights Reserved.</h4></Col>
            <Col lg={{span:3,offset:1}} xs={{span:0}}><h4 className='footer-text'>Terms & Conditions</h4></Col>
            <Col lg={{span:3,offset:1}} xs={{span:0}}><h4 className='footer-text'>Privacy policy</h4></Col>
        </Row>
        </div>
        
    </footer>
  )
}
