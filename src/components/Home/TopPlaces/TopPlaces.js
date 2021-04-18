import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import japan from '../../../images/japan.jpg';
import spain from '../../../images/spain.jpg';
import italy from '../../../images/italy.jpg';
import europe from '../../../images/europe.jpg';
import "./TopPlaces.css";


const TopPlaces = () => {
    return (
        <div className="topPlaces" id="ourWorks">
            <h1 className="text-white my-5">Some Of The <span style={{ color: '#7AB259' }}>Top Places</span></h1>

            <Carousel className="carousel">
                <div className="carousel-inner">
                    <img style={{borderRadius: '10px', width: '50%'}} src={japan} />
                    <p className="legend">Japan Tokyo</p>
                </div>
                <div className="carousel-inner">
                    <img style={{borderRadius: '10px', width: '50%'}} src={spain} />
                    <p className="legend">Spain Madrid</p>
                </div>
                <div className="carousel-inner">
                    <img style={{borderRadius: '10px', width: '50%'}} src={italy} />
                    <p className="legend">Italy Venice</p>
                </div>
                <div className="carousel-inner">
                    <img style={{borderRadius: '10px', width: '50%'}} src={europe} />
                    <p className="legend">Europe City</p>
                </div>
            </Carousel>
        </div>
    );
};

export default TopPlaces;