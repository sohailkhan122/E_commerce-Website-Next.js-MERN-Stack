"use client"
import React, { useEffect, useState } from 'react'
import './index.css'
import { Button, Checkbox, Form, Input, Select, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import PaymentCard from './PaymentCard'

const CheckOut = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [productDetails, setProductDetails] = useState([]);
  const shippingCharges = 5.8;

  useEffect(() => {
    const userId = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('userData'))._id : null;
    if (!userId) return;
    const getUserById = async () => {
      try {
        const response = await axios.get(`https://e-commerce-website-next-js-mern-stack-6.onrender.com/user/getUserById/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user by ID:', error);
        throw new Error('Failed to fetch user by ID');
      }
    };
    getUserById();
  }, []);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      await axios.put(`https://e-commerce-website-next-js-mern-stack-6.onrender.com/user/updateUser/${userId}`, values);
      message.success('User information updated successfully');
    } catch (error) {
      message.error('Failed to update user information');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const userId = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('userData'))._id : null;
    if (!userId) return; // Exit early if userId is not available
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://e-commerce-website-next-js-mern-stack-6.onrender.com/cart/getCartItem/${userId}`);
        const { products } = response.data.cartItem;

        if (response.data.cartItem.products.length === 0) {
          router.push('/');
        }

        const productDetailPromises = products.map(async product => {
          const productDetailResponse = await axios.get(`https://e-commerce-website-next-js-mern-stack-6.onrender.com/product/getSingleProduct/${product.productId}`);
          const productDetail = productDetailResponse.data;
          return { ...product, ...productDetail };
        });

        const productDetails = await Promise.all(productDetailPromises);
        setProductDetails(productDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const subtotal = productDetails.reduce((accum, curr) => accum + curr.price * curr.quantity, 0);
  const total = subtotal + shippingCharges;

  return (<div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: 'maxcontent', marginBottom: '200px' }}>
    <div className='BiilingAndOrderSummaryContainer'>
      <div className='billingDetails'>
        <div style={{ marginLeft: '10px' }} className='head'>
          <img src="/Images/New Arrival Logo.png" alt='new' />
          <h1>Check Out</h1>
        </div>
        <h1 style={{ marginLeft: '10px' }}>Billing Details</h1>
        {userData && <>
          <Form
            style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}
            name="basic"
            onFinish={onFinish}
            initialValues={userData}
          >
            <Form.Item
              style={{ width: '45%' }}
              label="First Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your Name!',
                },
              ]}
            >
              <Input name='name' />
            </Form.Item>
            <Form.Item
              style={{ width: '45%' }}
              label="Last Name"
              name="lastname"
              rules={[
                {
                  required: true,
                  message: 'Please input your Last name!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              style={{ width: '45%' }}
              label="Country / Region"
              name="region"
              rules={[
                {
                  required: true,
                  message: 'Please input your Region!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              style={{ width: '45%' }}
              label="Company Name"
              name="companyname"
              rules={[
                {
                  required: true,
                  message: 'Please input your Company Name!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              style={{ width: '45%' }}
              label="Street Address"
              name="streetadress"
              rules={[
                {
                  required: true,
                  message: 'Please input your Street Address!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              style={{ width: '45%' }}
              label="Apt, suite, unit"
              name="unit"
              rules={[
                {
                  required: true,
                  message: 'Please input your Apt, suite, unit!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              style={{ width: '45%' }}
              label="City"
              name="city"
              rules={[
                {
                  required: true,
                  message: 'Please input your City!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              style={{ width: '45%' }}
              label="State"
              name="state"
              rules={[
                {
                  required: true,
                  message: 'Please input your State!',
                },
              ]}
            >
              <Select
                style={{ width: '100%' }}
                showSearch
                placeholder="State"
                optionFilterProp="children"
                options={[
                  {
                    value: 'Pakistan',
                    label: 'Pakistan',
                  },
                  {
                    value: 'India',
                    label: 'India',
                  },
                  {
                    value: 'Turkey',
                    label: 'Turkey',
                  },
                ]}
              />
            </Form.Item>

            <Form.Item
              style={{ width: '45%' }}
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Please input your Phone!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              style={{ width: '45%' }}
              label="Postal Code"
              name="postalcode"
              rules={[
                {
                  required: true,
                  message: 'Please input your Postal Code!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              style={{ width: '90%' }}
              label="Delivery Instruction"
              name="deliveryinstruction"
              rules={[
                {
                  required: true,
                  message: 'Please input your Delivery Instruction!',
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              style={{ width: '100%' }}
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>Set as default shipping address</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Changed Information
              </Button>
            </Form.Item>
          </Form>
        </>}

      </div>
      <div className='orderSummaryConatiner'>
        <div className='orderSummary'>
          <h1>Order Summary</h1>
          <div className='SummaryCardMain' >
            {
              productDetails.map((item) => {
                return <React.Fragment key={Math.random()}>
                  <div className='summaryCard'>
                    <img src={item.images} width={63} height={63} style={{ borderRadius: '10px', objectFit: 'cover' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '273px', height: '41px' }}>
                      <div className='dsh'>
                        <h4>{item.title}</h4>
                        <p>color <span style={{ color: 'gray' }}>{item.color}</span></p>
                        <p>Quantity <span style={{ color: 'gray' }}>{item.quantity}</span></p>
                      </div>
                      <p className='price'>$ {item.price}</p>
                    </div>
                  </div>
                  <hr />
                </React.Fragment>

              })
            }
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '10px' }}>
            <span style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h1 style={{ fontSize: '18px', fontWeight: '700' }}>Subtotal</h1>
              <h1 style={{ fontSize: '18px', fontWeight: '700', color: 'gray' }}>$ {subtotal}</h1>
            </span>
            <span style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h1 style={{ fontSize: '18px', fontWeight: '700' }}>Shipping</h1>
              <h1 style={{ fontSize: '18px', fontWeight: '700', color: 'gray' }}> $ {shippingCharges}</h1>
            </span>
            <hr />
            <span style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h1 style={{ fontSize: '18px', fontWeight: '700' }}>Total</h1>
              <h1 style={{ fontSize: '18px', fontWeight: '700', color: 'gray' }}>$ {total}</h1>
            </span>
          </div>
        </div>
      </div>
    </div>
    <PaymentCard productDetails={productDetails} total={total} />
  </div>
  )
}

export default CheckOut