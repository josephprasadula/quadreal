import React from 'react'
import {PlusOutlined ,CloseCircleTwoTone } from '@ant-design/icons';
import { Collapse, Select } from 'antd';
import { useState } from 'react';

const { Panel } = Collapse;
const { Option } = Select;
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tristique nibh, eu scelerisque sem.`;


export default function Frequently() {
    const [Active,setActive] = useState(true)
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <section className='frequentlysection'>
            <div className='container'>
                <div className='frequently-textbox'>
                    <h6>FAQ</h6>
                    <h3>Frequently Asked</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tristique nibh, eu scelerisque sem. </p>
                </div>
                <div className='accordian'>
                <Collapse className='accordian-collapse' expandIcon={({ isActive }) => isActive ? <CloseCircleTwoTone style={{fontSize:'2rem'}} /> : <PlusOutlined style={{fontSize: '24px',borderRadius: '50%',backgroundColor: '#eff0f6',padding: '4px'}}/>} expandIconPosition='end' accordion style={{backgroundColor:'white'}} bordered={false}  defaultActiveKey={['1']} onChange={onChange} collapsible="header">
                <Panel className='panel' header={<h3 style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600', fontSize: '20px', color: '#14142b'}}>Lorem ipsum dolor sit amet?</h3>} key="1">
                    <p className='accordiantext'>{text}</p>
                </Panel>
                <Panel className='panel' header={<h3 style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600', fontSize: '20px', color: '#14142b'}}>Proin eu tristique nibh, eu scelerisque se?</h3>} key="2">
                    <p className='accordiantext'>{text}</p>
                </Panel>
                <Panel className='panel' header={<h3 style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600', fontSize: '20px', color: '#14142b'}}>Maecenas placerat dui quis imperdiet?</h3>} key="3">
                    <p className='accordiantext'>{text}</p>
                </Panel>
                <Panel className='panel' header={<h3 style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600', fontSize: '20px', color: '#14142b'}}>Quisque condimentum sit amet sapien et?</h3>} key="4">
                    <p className='accordiantext'>{text}</p>
                </Panel>
                <Panel className='panel' header={<h3 style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600', fontSize: '20px', color: '#14142b'}}>Nam magna massa, consequat eu luctus ut?</h3>} key="5">
                    <p className='accordiantext'>{text}</p>
                </Panel>
                </Collapse>
                </div>
            </div>
        </section>
    )
}
