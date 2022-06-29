import React from 'react'
import { PlusCircleTwoTone } from '@ant-design/icons';
import { Collapse, Select } from 'antd';
import { useState } from 'react';
const { Panel } = Collapse;
const { Option } = Select;
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tristique nibh, eu scelerisque sem.`;

const onChange = (key) => {
    console.log(key);
};
const genExtra = () => (
    
    <PlusCircleTwoTone style={{fontSize:'2rem'}}
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
export default function Frequently() {
  return (
    <section className='frequentlysection'>
        <div className='container'>
            <div className='frequently-textbox'>
                <h6>FAQ</h6>
                <h3>Frequently Asked</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tristique nibh, eu scelerisque sem. </p>
            </div>
            <div className='accordian'>
            <Collapse accordion style={{backgroundColor:'white'}} bordered={false}  defaultActiveKey={['1']} onChange={onChange} >
            <Panel className='panel' showArrow={false} header={<h3>Lorem ipsum dolor sit amet?</h3>} key="1" extra={genExtra()}>
                <p className='accordiantext'>{text}</p>
            </Panel>
            <Panel className='panel' showArrow={false} header={<h3>Proin eu tristique nibh, eu scelerisque se?</h3>} key="2" extra={genExtra()}>
                <p className='accordiantext'>{text}</p>
            </Panel>
            <Panel className='panel' showArrow={false} header={<h3>Maecenas placerat dui quis imperdiet?</h3>} key="3" extra={genExtra()}>
                <p className='accordiantext'>{text}</p>
            </Panel>
            <Panel className='panel' showArrow={false} header={<h3>Quisque condimentum sit amet sapien et?</h3>} key="4" extra={genExtra()}>
                <p className='accordiantext'>{text}</p>
            </Panel>
            <Panel className='panel' showArrow={false} header={<h3>Nam magna massa, consequat eu luctus ut?</h3>} key="5" extra={genExtra()}>
                <p className='accordiantext'>{text}</p>
            </Panel>
            </Collapse>
            </div>
        </div>
    </section>
  )
}
