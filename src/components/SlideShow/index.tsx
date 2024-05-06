import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlideShowProps } from '@/types/types';
import Image from 'next/image';

const SlideShow = ({ slides }: SlideShowProps) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    innitialSlide: 0,
    pauseOnHover: false,
    autoplay: true,
    swipe: false,
    swipeToSlide: false,
    arrows: false,
    adaptiveHeight: true,
  };
  return (
    <div className="">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className=" h-screen w-screen relative bg-pink bg-blend-normal"
          >
            <Image
              src={slide.src}
              alt="slide image"
              className="absolute object-fill top-0 left-0 h-screen w-screen"
              sizes="100vw"
              priority
              height={3000}
              width={3000}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideShow;
