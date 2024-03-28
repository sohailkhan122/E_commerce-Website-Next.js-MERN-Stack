import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const limeLight = [
    {
      id: "1",
      img: "/Images/In The Limelight 7.png",
      tittle: "Black Sweatshirt with ....",
      describtion: "Jhanvi’s  Brand",
      value: "$123.00",
    },
    {
      id: "2",
      img: "/Images/In The Limelight 4.png",
      tittle: "line Pattern Black H...",
      describtion: "AS’s  Brand",
      value: "$37.00",
    },
    {
      id: "3",
      img: "/Images/In The Limelight 5.png",
      tittle: "Black Shorts",
      describtion: "MM’s  Brand",
      value: "$37.00",
    },
    {
      id: "4",
      img: "/Images/In The Limelight 6.png",
      tittle: "Levender Hoodie with ....",
      describtion: "Nike’s  Brand",
      value: "$119.00",
    },
  ];
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
      <div style={{ width: '100%' }}>
        <img src="/Images/New Arrival Logo.png" alt="New Arrival Logo" />
        <span>In The Limelight</span>
      </div>
      <div
        style={{
          width: "1239px",
          height: "451px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {limeLight.map((item) => {
          return <ProductCard key={Math.random()} data={item} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
