import { Button } from "antd";
import React from "react";
import LimeLightCard from "../Home/LimeLightCard";

const EmptyWishlist = () => {

  return (
    <>
      <div className="mainWishlistcontainer">
        <div className="wishlistContainer">
          <img
            src="/Images/Frame 505.png"
            alt="wishlist"
            width={"170px"}
            height={"170px"}
          />
          <div>
            <h1>Your wishlist is empty.</h1>
            <p>
              You don’t have any products in the wishlist yet. You will find a
              lot of interesting products on our Shop page.
            </p>
          </div>
          <Button>Continue Shopping</Button>
        </div>
      </div>{" "}
      <div className="recentlyView">
        <div className="recentlyViewContainer">
          <div className="newArrivalContainer emptyWishListContainer">
            <div className="emptyWishListTittle">
              <img src="/Images/New Arrival Logo.png" alt="New Arrival Logo" />
              <span>Recently Viewed</span>
            </div>
            <div
              style={{
                width: "1239px",
                height: "451px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* {wishlist.map((item) => {
                return <LimeLightCard key={Math.random()} data={item} />;
              })} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyWishlist;
