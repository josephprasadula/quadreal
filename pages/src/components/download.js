import React from 'react'
import Image from 'next/image'
import PlaystoreImg from '../media/appstore.png'
import AppstoreImg from '../media/googleplay.png'
import IphoneImg from '../media/Graphite.png'
import PixelImg from '../media/Pixel 5.png'
import { Col, Row ,Button} from 'antd';
export default function download() {
  return (
    <section className='download-section'>
        <Row style={{margin:'1rem'}}>
            <Col lg={{span:12}} xs={{span:24}}>
                <div className='downloadtextbox'>
                    <h3>
                    Download our new tenant experience app today!
                    </h3>
                    <p>
                    We bring the breather of our experience and industy knowledge to help you with your problem and solution.
                    </p>
                    <div className='imgbox'>
                        <Row>
                            <Col xs={{span:12}}><Image src={PlaystoreImg}/></Col>
                            <Col xs={{span:12}}><Image src={AppstoreImg}/></Col>
                        </Row>
                    
                    
                    </div>
                </div>
            </Col>
            <Col lg={{span:12}} xs={{span:0}}>
                <Row align='middle'>
                    <Col className='IphoneImg' span={12}><Image src={IphoneImg}/></Col>
                    <Col className='PixelImg' span={12}><Image src={PixelImg}/></Col>
                </Row>
            </Col>
        </Row>
    </section>
  )
}
