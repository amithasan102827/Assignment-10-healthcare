
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../project images/carosel7.jpg'
import carousel2 from '../../project images/carosel8.jpg'
import carousel3 from '../../project images/carosel9.jpg'

const HomeBanner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                       
                        <img
                            className="d-block w-100"
                            src={carousel1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className='text-dark'>Welcome to Mediyot</h1>
                            <h3 className='text-dark'>Better health care of efficient cost is the main focus of our hospital</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h1 className='text-dark'>Welcome to Mediyot</h1>
                            <h3 className='text-dark'>Better health care of efficient cost is the main focus of our hospital</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>

                        <img
                            className="d-block w-100"
                            src={carousel3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h1 className='text-dark'>Welcome to Mediyot</h1>
                            <h3 className='text-dark'>Better health care of efficient cost is the main focus of our hospital</h3>
                        </Carousel.Caption>

                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default HomeBanner;