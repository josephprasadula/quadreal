import React from 'react'
import Image from 'next/image'

import Img1 from '../media/top-icon.png'
import Img2 from '../media/top-icon (1).png'
import Img3 from '../media/top-icon (2).png'
import Img4 from '../media/top-icon (3).png'
import Img5 from '../media/top-icon (4).png'
import Img6 from '../media/top-icon (5).png'


export default function Features() {
  return (
    <section className='featuresection'>
        <div className='container'>
            <div className='topbox'>
                <h3>FEATURES</h3>
                <h2>Our Features</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tristique nibh, eu scelerisque sem. </p>
            </div>
            <div className='cardgrid'>
                <div className='card'>
                    <Image src={Img1}/>
                    <div className='cardtextbox'>
                        <h4>The Quad</h4>
                        <span>Stay connected Events, Newsletters and Experiences….</span>
                    </div>
                </div>
                <div className='card'>
                    <Image src={Img2}/>
                    <div className='cardtextbox'>
                        <h4>Building Information</h4>
                        <span> Everything you need to know about your building… Emergency procedures, </span>
                    </div>
                </div>
                <div className='card'>
                    <Image src={Img3}/>
                    <div className='cardtextbox'>
                        <h4>Mobile Access Pass </h4>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </span>
                    </div>
                </div>
                <div className='card'>
                    <Image src={Img4}/>
                    <div className='cardtextbox'>
                        <h4>Visitor Management </h4>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </span>
                    </div>
                </div>
                <div className='card'>
                    <Image src={Img5}/>
                    <div className='cardtextbox'>
                        <h4>Get food delivered to your office from the Food Court </h4>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </span>
                    </div>
                </div>
                <div className='card'>
                    <Image src={Img6}/>
                    <div className='cardtextbox'>
                        <h4>Discover and Book Available Amenities</h4>
                        <span> Explore the amenities available at the various…</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
