import React from 'react'
import Image from 'next/image'

import amentiesImg from '../media/amenites@2x.png'
import optionIMg from '../media/order@2x.png'
import { DownloadOutlined } from '@ant-design/icons';
import { Col, Row ,Button} from 'antd';

export default function Options() {
  return (
    <section className='options-section'>
      <div className='amenties'>
        <Row justify='end' align='middle'>
          <Col span={8}>
            <div className='amentiesTextbox'>
              <h6>
              AMENITIES
              </h6>
              <h3>
              Discover & Book Available Amenities
              </h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue eu, faucibus volutpat pulvinar orci. Est nam ut nec volutpat platea volutpat eg stas dignissim purus. 
              </p>
              <Button type="primary" shape="round" icon={<DownloadOutlined />} size='large'>
              See all features
              </Button>
            </div>
          </Col>
          <Col span={16}>
            <Image src={amentiesImg} alt='amenities image'></Image>
          </Col>
        </Row>
      </div>
      <div className='options-ritual'>
        <Row justify='start' align='middle'>
          <Col span={16}><Image src={optionIMg} alt='amenities image'></Image></Col>
          <Col span={8}><div className='optionsTextbox'>
          <h6>
          Ritual
          </h6>
          <h3>
          Order Food & Skip The Line with Ritual!
          </h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue eu, faucibus volutpat pulvinar orci. Est nam ut nec volutpat platea volutpat eg stas dignissim purus.
          </p>
          <Button type="primary" shape="round" size='large'>
          Learn More</Button>
        </div></Col>
        </Row>
      </div>
    </section>
  )
}
