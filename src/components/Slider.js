import React from 'react';
import Slider from "react-slick";
import 'animate.css';

import SlideImage1 from "../images/sl1.jpg";
import SlideImage2 from "../images/sl2.jpg";
import SlideImage3 from "../images/sl3.jpg";
import SlideImage4 from "../images/sl4.jpg";
import {Link} from 'react-router-dom';
import '../styles/slider.css';

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
       
      
      autoplaySpeed: 2000,
      fade: true,
      };
      return (
        <div className='carousel_sec clearfix'>
          
          <Slider {...settings}>
          <div className='slider_1 sl-h'>
             
             <div className="slider-content"> 
                 <h2 className='animate__animated animate__fadeInLeft' >flexible & universal</h2>
                 <h3>for all your business needs</h3>
                 <Link to="/" ><button className='slider-btn-1 butn'>Get Started Now</button></Link>
                 <Link to="/" ><button className='slider-btn-2        butn'>Discover Now</button></Link>
             </div>
         </div>

         <div className='slider_2 sl-h'>
             <div className="slider-content"> 
                 <h2 className='animate__animated animate__fadeInLeft'>flexible & universal</h2>
                 <h3>for all your business needs</h3>
                 <Link to="/" ><button className='slider-btn-1 butn'>Get Started Now</button></Link>
                 <Link to="/" ><button className='slider-btn-2       butn'>Discover Now</button></Link>
             </div>
         </div>

         <div className='slider_3 sl-h'>
             <div className="slider-content"> 
                 <h2 className='animate__animated animate__fadeInLeft'>flexible & universal</h2>
                 <h3>for all your business needs</h3>
                 <Link to="/" ><button className='slider-btn-1 butn'>Get Started Now</button></Link>
                 <Link to="/" ><button className='slider-btn-2        butn'>Discover Now</button></Link>
             </div>
         </div>

         <div className='slider_4 sl-h'>
             <div className="slider-content"> 
                 <h2 className='animate__animated animate__fadeInLeft'>flexible & universal</h2>
                 <h3>for all your business needs</h3>
                 <Link to="/" ><button className='slider-btn-1 butn'>Get Started Now</button></Link>
                 <Link to="/" ><button className='slider-btn-2        butn'>Discover Now</button></Link>
             </div>
         </div>
         <div className='slider_5 sl-h'>
             <div className="slider-content"> 
                 <h2 className='animate__animated animate__fadeInLeft'>flexible & universal</h2>
                 <h3>for all your business needs</h3>
                 <Link to="/" ><button className='slider-btn-1 butn'>Get Started Now</button></Link>
                 <Link to="/" ><button className='slider-btn-2        butn'>Discover Now</button></Link>
             </div>
         </div>
           
          </Slider>
          <div className="bottom-border"></div>

          
        </div>
      );
    
}

export default Carousel;
