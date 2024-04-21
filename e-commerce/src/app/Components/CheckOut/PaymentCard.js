"use client"
import { Button, Checkbox, Form, Input } from 'antd'
import React, { useContext } from 'react'
import './index.css'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import noteContext from '@/context/noteContext'

const PaymentCard = ({ productDetails, total }) => {
    const userId = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('userData'))._id : null;
    const router = useRouter()
    const { setRefresh } = useContext(noteContext)

    const onFinish = async (values) => {
        try {
            const response = await axios.post('https://e-commerce-website-next-js-mern-stack-6.onrender.com/order/createOrder', {
                userId: userId,
                productDetails,
                total: total,
                paymentDetails: {
                    cardnumber: values.cardnumber,
                    nameofcard: values.nameofcard,
                    expirationdate: values.expirationdate,
                    securitycode: values.securitycode
                }
            });
            console.log(response.data)
            setRefresh(pre => !pre)
            router.push('/confirm_order')
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return (
        <div className='paymentContainer'>
            <div className='paymentBox'>
                <div className='payhead'>
                    <h1>Credit Card</h1>
                    <p>We accept all major credit cards.</p>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}><img src='/Images/Frame 440.png' /><img src='/Images/Frame 441.png' /><img src='/Images/Frame 442.png' /><img src='/Images/Frame 443.png' /></div>
                <div>
                    <Form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
                        onFinish={onFinish}>
                        <span style={{ display: 'flex', gap: '20px' }}>
                            <Form.Item
                                style={{ width: '45%' }}
                                name="cardnumber"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Postal Code!',
                                    },
                                ]}
                            >
                                <Input style={{ width: '100%' }} placeholder='Card number' /></Form.Item>
                            <Form.Item
                                style={{ width: '45%' }}
                                name="nameofcard"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Postal Code!',
                                    },
                                ]}
                            >
                                <Input style={{ width: '100%' }} placeholder='Name of card' /></Form.Item>
                        </span>
                        <span style={{ display: 'flex', gap: '20px' }}>

                            <Form.Item
                                style={{ width: '45%' }}
                                name="expirationdate"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Postal Code!',
                                    },
                                ]}
                            >
                                <Input style={{ width: '100%' }} placeholder='Expiration date (MM/YY)' /></Form.Item>
                            <Form.Item
                                style={{ width: '45%' }}
                                name="securitycode"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Postal Code!',
                                    },
                                ]}
                            >
                                <Input.Password style={{ width: '100%' }} placeholder='Security Code' /></Form.Item>
                        </span>
                        <Form.Item
                            style={{ width: '100%', display: 'flex' }}
                            name="cash omn Delivery"
                            valuePropName="checked"
                        >
                            <Checkbox><h1 style={{ fontSize: '20px', fontWeight: '700' }}>Cash On Delivery</h1>
                                <p style={{ fontSize: '16px ', fontWeight: '400' }}>Pay with cash upon delivery.</p>
                            </Checkbox>

                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" >
                                Pay Now
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default PaymentCard