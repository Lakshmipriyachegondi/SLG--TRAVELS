import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
    {
        imgUrl:weatherImg,
        title:'calculate weather',
        desc:'"Discover the Perfect Weather for Your Adventures!"',
    },
    {
        imgUrl:guideImg,
        title:'Best Tour Guide',
        desc:'"Your Trusted Guide for Perfect Adventures!"',
    },
    {
        imgUrl:customizationImg,
        title:'Customization',
        desc:'"Tailor-Made Adventures Just for You!"',
    },
]

const ServiceList = () => {
  return (
    <div>
        {servicesData.map((item,index)=>(
            <Col lg='3' key={index}>
                <ServiceCard item={item}/>
            </Col>
        ))}
    </div>
  )
}

export default ServiceList