'use client'
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import axios from "axios";
import { useRouter } from "next/navigation";

const OrdersOwn = ({ setValue }) => {
  const [orders, setOrders] = useState([]);
  const userId = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('userData'))._id : null;
  const router = useRouter()

  useEffect(() => {
    const fetchOrdersByUserId = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/getOrdersByUserId/${userId}`);
        const { data } = response;

        if (data.success) {
          setOrders(data.orders);
        } else {
          console.error('Error fetching orders:', data.message);
        }
      } catch (error) {
        console.error('Error fetching orders:', error.message);
      }
    };

    fetchOrdersByUserId();
  }, [userId]);

  return (<>
    {orders.length === 0 ? (
      <div style={{ width: '100%', height: '800px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        <img style={{ objectFit: 'cover' }} src="./Images/Frame 376.png" width={'447.89px'} height={'327.71px'} alt="empty Card" />
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <h1>No Orders :(</h1>
          <p>Add something to make it happy!</p>
        </div>
        <Button onClick={() => router.push('/')}>Continue Shopping</Button>
      </div>
    ) : (<div className="mainMyOrderContainer">
      <div className="headerMyOrder">My Orders</div>
      <div className="myOrderbtn">
        <Button>Active</Button>
        <Button>Cancelled</Button>
        <Button>Completed</Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {orders.map((item) => (
          <OrderCard key={item.id} data={item} setValue={setValue} />
        ))}
      </div>
    </div>)
    }
  </>
  );
};

export default OrdersOwn;

