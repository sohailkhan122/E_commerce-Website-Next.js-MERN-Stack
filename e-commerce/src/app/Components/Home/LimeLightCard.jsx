import React from "react";

const LimeLightCard = ({ product, onClick }) => {
  return (
    <div key={product._id} onClick={onClick} className="categorieMenCardContent">
      <img
        src={product.images}
        alt="limelight"
        width={"270.36px"}
        height={"393.26px"}
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
            {product.title}
          </p>
          <span
            style={{
              color: "#807D7E",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            {product.productName}
          </span>
        </div>
        <div>
          <button
            style={{
              width: "82.305px",
              height: "36.58px",
              borderRadius: "8px",
              background: " #F6F6F6",
              border: 'none'
            }}
          >
            ${product.price}.00
          </button>
        </div>
      </div>
    </div>
  );
};

export default LimeLightCard;
