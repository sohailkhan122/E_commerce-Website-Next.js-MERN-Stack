"use client"
import React, { useEffect, useState } from 'react';
import { Slider, Button } from 'antd';
import axios from 'axios';
import OrderProductCard from './OrderProductCard';
import { useRouter } from 'next/navigation';


const OrderDetails = ({ setValue }) => {
    const [orders, setOrders] = useState([]);
    const userId = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('userData'))._id : null;
    const router = useRouter();

    useEffect(() => {
        const fetchOrdersByUserId = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/order/getOrdersByUserId/${userId}`);
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

    return (
        <>
            {orders.length === 0 ? (
                <div style={{ width: '100%', height: '800px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                    <img style={{ objectFit: 'cover' }} src="./Images/Frame 376.png" width={'447.89px'} height={'327.71px'} alt="empty Card" />
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <h1>No Orders :(</h1>
                        <p>Add something to make it happy!</p>
                    </div>
                    <Button onClick={() => router.push('/')}>Continue Shopping</Button>
                </div>
            ) : (
                orders.map((item) => (
                    <div className="mainMyOrderContainer" key={item._id}>
                        <div style={{ width: '300px' }} className="headerMyOrder">Orders Details</div>
                        <div className='orderNoMainBox'>
                            <div className='orderNoBox'>
                                <div className='orderNoPlacedOn'>
                                    <h4>Order no: #{item._id}</h4>
                                    <p>Placed On  {item.createdAt}</p>
                                </div>
                                <p>Total : $ {item.total}</p>
                            </div>
                        </div>
                        <div className='sliderBox'>
                            <Slider
                                style={{ width: '630px', height: '49px' }}
                                defaultValue={item.status === 'pending' ? 20 : 0}
                                disabled={true}
                            />
                        </div>
                        <div className='sliderBox'>
                            <div className='orderSuccess'>
                                <p className='orderSuccessDate'>8 June 2023 3:40 PM</p>
                                <h5 className='orderSuccessMessage'>Your order has been successfully verified.</h5>
                            </div>
                        </div>
                        <div className='orderProduct'>
                            {item.productDetails?.map((items) => (
                                <OrderProductCard key={items._id} items={items} orderId={item._id} setValue={setValue} />
                            ))}
                        </div>
                    </div>
                ))
            )}
        </>
    );
};

export default OrderDetails;






