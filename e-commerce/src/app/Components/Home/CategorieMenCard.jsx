import React from "react";

const CategorieMenCard = ({ product, onClick }) => {
  return (
    <div key={product._id} onClick={onClick} className="categorieMenCardContent">
      <img
        src={product.images}
        alt='helo'
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
        <div className="categorieMenCardContentTittle">
          <p>{product.title}</p>
          <span>Explore Now!</span>
        </div>
        <div>
          <img src="/Images/Arrow Right.png" alt="Arrow Right" />
        </div>
      </div>
    </div>
  );
};

export default CategorieMenCard;
