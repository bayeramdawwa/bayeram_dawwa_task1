import React from 'react'
import './ServicesStyle.css';
import ServicesCards from '../ServicesCards/ServicesCards';
import AdsCompo from '../Ads/AdsCompo';
function Services() {
    return (
        <section className='Services' id='Services'>
            <div className="ServicesText">
            <h1 className="Services-h1">Our Services</h1>
            <p className="Services-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat ipsa nostrum quos odio debitis quas corporis necessitatibus delectus minus,
            </p>
            </div>
            <ServicesCards />
            <AdsCompo />
        </section>
    )
}

export default Services