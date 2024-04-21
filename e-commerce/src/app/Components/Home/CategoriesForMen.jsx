"use client"
import React, { useEffect, useState } from "react";
import CategorieMenCard from "./CategorieMenCard";
import axios from "axios";
import { useRouter } from 'next/navigation'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CategoriesForMen = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductsByName = async () => {
      try {
        const response = await axios.get(`https://e-commerce-website-next-js-mern-stack-6.onrender.com/product/productGetByName/${'Categories_For_Men'}`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        message.error('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };
    fetchProductsByName()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="newArrivalContainer categoriesForMenContainer">
      <div className="newArrivalTittle">
        <img src="/Images/New Arrival Logo.png" alt="New Arrival Logo" />
        <span>Categories For Men</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }} >
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Slider {...settings}>
            {products.map((product) => (
              <CategorieMenCard key={product._id} product={product} onClick={() => router.push(`/product_details/${product._id}`)} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default CategoriesForMen;
