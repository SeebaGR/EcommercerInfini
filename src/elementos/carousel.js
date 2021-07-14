import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import foto1 from '../drawable/foto1.jpg';

import foto2 from '../drawable/foto2.jpg';

import foto3 from '../drawable/foto3.png';



const Carlousel = () =>{

    return (
        <div>


<Carousel>
  <Carousel.Item>
    <img
      className="image"
      src={foto1}
      alt="First slide"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
      src={foto2}
      alt="Second slide"
    />

    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
      src={foto3}
      alt="Third slide"
    />

    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Carlousel;