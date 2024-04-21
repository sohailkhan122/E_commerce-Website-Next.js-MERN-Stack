'use client'
import { CloseOutlined } from '@ant-design/icons'
import { message } from 'antd';
import axios from 'axios';
import React from 'react'

const OrderProductCard = ({ items, orderId, setValue }) => {

    const deleteOrder = async () => {
        try {
            const response = await axios.delete(`https://e-commerce-website-next-js-mern-stack-6.onrender.com/order/removeProductDetail/${items._id}/${orderId}`);
            console.log(response)
            setValue('Myorders')
            message.success('Order Successfully Delete')
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    };
    return (
        <div className='productCardMainContainer'>
            <img src={items.images} width={'102px'} height={'99px'} style={{ objectFit: 'cover' }} alt="orderimg" />
            <div className='productCard'>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h5 className='productTittle'>{items.title}</h5>
                    <p className='productTittle'>Qty : <span>{items.quantity
                    }</span></p>
                    <span>$ {items.price}</span>
                    <CloseOutlined onClick={deleteOrder} />
                </div>
                <h5 className='productTittle'>Color : <span>{items.color}</span></h5>
            </div>
        </div>
    )
}

export default OrderProductCard
