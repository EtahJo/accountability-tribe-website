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
    speed: 1000,
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
              className="fixed object-cover bottom-0 left-0 h-full w-screen "
              priority
              fill
            />
            <div className="bg-pink mix-blend-overlay absolute inset-0" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideShow;
