import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from '../data/carouselData';

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-[50px] h-[50px] rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center shadow-md focus:outline-none"
      aria-label="Next Slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="w-6 h-6 text-gray-700"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-[50px] h-[50px] rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center shadow-md focus:outline-none"
      aria-label="Previous Slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="w-6 h-6 text-gray-700"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>
  );
}

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    fade: true,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div key={index}>
            <div className="relative">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-100" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
