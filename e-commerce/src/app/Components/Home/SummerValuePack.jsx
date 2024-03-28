"use client"
import React from 'react'
import { Button, Carousel } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import "./index.css";
const SummerValuePack = () => {
  const carouselRef = React.createRef();

  const images = [
    'https://t3.ftcdn.net/jpg/02/64/92/28/360_F_264922838_NErJEovZiP9MTa49apqL1Vs3f88ZT8Dg.jpg',
    , "/Images/Home1.jpg",
  ];

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  return (
    <Carousel autoplay >
      {images.map((image, index) => (
        <div key={index}>
          <div style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "716px", width: "100%" }} className='flex between'>
            <div className="summerValuePackContainer">
              <h5>T-shirt / Tops</h5>
              <h1>Summer Value Pack</h1>
              <h4>cool / colorful / comfy</h4>
              <Button>Shope Now</Button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default SummerValuePack;