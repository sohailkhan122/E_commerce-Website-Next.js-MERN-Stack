import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const WishListCard = ({data}) => {
  return (
    <>
      <div>
        <div className="order">
          <div>
            <div className="orderContainer">
              <CloseOutlined style={{ margin: "0PX 20px" }} />
              <img src={data.img} alt=" order" />
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <h2>{data.tittle}</h2>
                <p>
                  Colour : <span>{data.color}</span>{" "}
                </p>
                <p>
                  Qty : <span>{data.qty}</span>
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <h5 style={{ color: "#bebcbd" }}>{data.total}</h5>
            <Button>Add Card</Button>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default WishListCard;
