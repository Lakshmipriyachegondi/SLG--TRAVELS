import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import './tour-card.css'

const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, featured,  reviews } = tour;

  const totalRating=reviews?.reduce((acc,item)=>acc+item.rating,0)
  const avgRating =
  totalRating === 0
   ? ""
   :totalRating === 1
   ? totalRating
   :(totalRating /reviews?.length).toFixed(1);
  return (
    <div className='tour_card'>
      <Card>
        <div className='tour_img'>
          <img src={photo} alt='tour-img' />
          {featured && <span>Featured</span>}
        </div>
        <CardBody>
          <div className='card_top d-flex align-items-center justify-content-between'>
            <span className='tour_location d-flex align-items-center gap-1'>
              <i className='ri-map-pin-line'></i>{city}
            </span>
            <span className='rating d-flex align-items-center gap-1'>
              <i className='ri-star-fill'></i>{avgRating=== 0 ? null:avgRating}
              {totalRating=== 0 ? (
              "Not rated" 
              ): ( <span>({reviews.length})</span>
            )}
              
            </span>
          </div>
          <h5 className='tour_title'>
            <Link to={`/tours/${id}`}>{title}</Link>
          </h5>
          <div className='card_bottom d-flex align-items-center justify-content-between mt-3'>
            <h5>
              ${price} <span>/per person</span>
            </h5>
            <Link to={`/tours/${id}`} className='btn booking_btn'>
              Book Now
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default TourCard
