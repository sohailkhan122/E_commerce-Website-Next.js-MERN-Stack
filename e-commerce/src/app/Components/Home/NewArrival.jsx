import React, { useEffect, useState } from "react";
import ArrivalCard from "./ArrivalCard";
import { message } from "antd";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";

const NewArrival = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/product/productGetByName/New_Arrival");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        message.error('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
    <div className="newArrivalContainer">
      <div className="newArrivalTittle">
        <img src="/Images/New Arrival Logo.png" alt="New Arrival Logo" />
        <span >New Arrival</span>
      </div>
      <div >
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Slider {...settings}>
            {products.map((product) => (
              <ArrivalCard key={product._id} product={product} onClick={() => router.push(`/product_details/${product._id}`)} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default NewArrival;
