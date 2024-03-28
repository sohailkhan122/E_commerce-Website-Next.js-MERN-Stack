import React from "react";
import WishListCard from "./WishListCard";

const Wishlist = () => {
  const wishlist = [
    {
      id: "1",
      img: "/Images/Categories For Women 11.png",
      tittle: "Blue Flower Print Crop Top ",
      color: "Yellow",
      qty: "1",
      total: "$29.00",
    },
    {
      id: "2",
      img: "/Images/Verification.png",
      tittle: "Yellow Flower Print Dress  ",
      color: "Yellow",
      qty: "1",
      total: "$78.00",
    },
    {
      id: "3",
      img: "/Images/Big Saving Zone 3.png",
      tittle: "White Hoodie long sleeve ",
      color: "White",
      qty: "1",
      total: "$134.00",
    },
    {
      id: "4",
      img: "/Images/New Arrival (2).png",
      tittle: "Brown men’s long sleeve T-shirt",
      color: "Brown",
      qty: "1",
      total: "$93.00",
    },
  ];
  return (
    <div className="mainMyOrderContainer">
      <div className="headerMyOrder">Wishlist</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {wishlist.map((item) => {
          return <WishListCard key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Wishlist;
