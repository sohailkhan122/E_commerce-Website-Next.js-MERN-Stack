"use client"
import React from "react";
import { useRouter } from 'next/navigation'

const ProductCard = ({ data }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/product_details/${data._id}`)} key={data.id} style={{ paddingTop: '16px' }} className="categorieMenCardContent"  >
      <img
        src={data.images}
        alt='hello'
        width={"270.36px"}
        height={"393.26px"}
        style={{ borderRadius: '10px', objectFit: 'cover' }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{ marginTop: "20px" }}
          className="categorieMenCardContentTittle"
        >
          <p
            style={{
              color: "#3C4242",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            {data.title}
          </p>
          <span
            style={{
              color: "#807D7E",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            {data.productName}
          </span>
        </div>
        <div style={{ paddingTop: '20px' }}>
          <button
            style={{
              width: "82.305px",
              height: "36.58px",
              borderRadius: "8px",
              background: " #F6F6F6",
              border: 'none',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            ${data.price}.00
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
