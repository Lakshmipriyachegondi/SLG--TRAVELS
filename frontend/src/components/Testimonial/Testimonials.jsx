
import Slider from 'react-slick'
import React from "react"
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
const Testimonial = () =>{

    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
            },
        },
        ]
    }
    return <Slider{...settings}>
       <div className="testimonial py=4 px=3">
          <p>"Travel World made our trip unforgettable! Everything was perfectly organized, the guides were amazing, and the destinations were breathtaking. We couldn’t have asked for a better travel experience. Highly recommend!"</p>

          <div className="d-flex align-items-center gap-4 mt-3">
              <img src ={ava01} className='w-25 h-25 rounded-2'alt=""/>
              <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
              </div>
          </div>
       </div>

       <div className="testimonial py=4 px=3">
          <p>"Fantastic experience with Travel World! Everything was smooth and well-planned, from start to finish. The destinations were stunning, and the team was super helpful. Highly recommend for hassle-free travel!"</p>

          <div className="d-flex align-items-center gap-4 mt-3">
              <img src ={ava02} className='w-25 h-25 rounded-2'alt=""/>
              <div>
                <h6 className="mb-0 mt-3">Riya</h6>
                <p>Customer</p>
              </div>
          </div>
       </div>

       <div className="testimonial py=4 px=3">
          <p>"Travel World exceeded all expectations! Their seamless planning and stunning destinations made our trip truly unforgettable. Highly recommend for anyone looking for the perfect travel experience!"</p>

          <div className="d-flex align-items-center gap-4 mt-3">
              <img src ={ava03} className='w-25 h-25 rounded-2'alt=""/>
              <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
              </div>
          </div>
       </div>
     
       <div className="testimonial py=4 px=3">
          <p>"Travel World exceeded all expectations! Their seamless planning and stunning destinations made our trip truly unforgettable. Highly recommend for anyone looking for the perfect travel experience!"</p>

          <div className="d-flex align-items-center gap-4 mt-3">
              <img src ={ava03} className='w-25 h-25 rounded-2'alt=""/>
              <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
              </div>
          </div>
       </div>

       <div className="testimonial py=4 px=3">
          <p>"Travel World exceeded all expectations! Their seamless planning and stunning destinations made our trip truly unforgettable. Highly recommend for anyone looking for the perfect travel experience!"</p>

          <div className="d-flex align-items-center gap-4 mt-3">
              <img src ={ava03} className='w-25 h-25 rounded-2'alt=""/>
              <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
              </div>
          </div>
       </div>


       <div className="testimonial py=4 px=3">
          <p>"Travel World exceeded all expectations! Their seamless planning and stunning destinations made our trip truly unforgettable. Highly recommend for anyone looking for the perfect travel experience!"</p>

          <div className="d-flex align-items-center gap-4 mt-3">
              <img src ={ava03} className='w-25 h-25 rounded-2'alt=""/>
              <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
              </div>
          </div>
       </div>

    </Slider>  
};

export default Testimonial