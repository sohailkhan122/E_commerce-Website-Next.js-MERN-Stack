import { Button } from "antd";
import React from "react";

const OrderCard = ({ data, setValue }) => {
  return (
    <div className="mainOrder">
      <div className="orderDetails">
        <div className="orderInnerDetail">
          <div className="detalis">
            <h3>Order no: # {data._id}</h3>
            <p>
              Order Date : <span> {data.createdAt}</span>
            </p>
            <p>
              Estimated Delivery Date : <span>{data.createdAt}</span>
            </p>
          </div>
          <div style={{ marginTop: "27px" }} className="detalis">
            <p>
              Order Status : <span>{data.status}</span>
            </p>
            <p>
              Payment Method : {data.securitycode === null ? <span>Cash on Delivery</span> : <span>Pay</span>}
            </p>

          </div>
        </div>
      </div>
      <div className="order">
        <div>
          <div className="orderContainer">
            <img src='https://e7.pngegg.com/pngimages/406/777/png-clipart-logo-shopping-cart-product-design-shopping-cart-angle-rectangle-thumbnail.png' alt=" order" />
            <div
              style={{ display: "flex", flexDirection: "column", justifyContent: 'center', gap: "5px" }}
            >
              <h2>Items {data.productDetails.length}</h2>
              <h5>Total : {data.total}</h5>
            </div>
          </div>
        </div>
        <Button onClick={() => setValue('OrdersDetails')}>View Detail</Button>
      </div>
    </div>
  );
};

export default OrderCard;
