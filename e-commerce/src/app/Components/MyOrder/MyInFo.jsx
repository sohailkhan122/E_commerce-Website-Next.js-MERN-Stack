"use client"
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Select, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const MyInfo = () => {
    const userId = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('userData'))._id : null;
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const getUserById = async () => {
            try {
                const response = await axios.get(`https://e-commerce-website-next-js-mern-stack-6.onrender.com/user/getUserById/${userId}`);
                setUserData(response.data)
            } catch (error) {
                console.error('Error fetching user by ID:', error);
                throw new Error('Failed to fetch user by ID');
            }
        };
        getUserById()

    }, [userId])

    const onFinish = async (values) => {
        try {
            setLoading(true);
            await axios.put(`https://e-commerce-website-next-js-mern-stack-6.onrender.com/user/updateUser/${userId}`, values);
            message.success('User information updated successfully');
            router.push('/')
        } catch (error) {
            message.error('Failed to update user information');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="mainMyOrderContainer">
            <div style={{ marginLeft: '0' }} className="headerMyOrder">
                My Info
            </div>
            <h3>Add Address</h3>
            {userData && <>

                <Form
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
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
                            Submit
                        </Button>
                        <Button type="default" htmlType="button">
                            Cancel
                        </Button>
                    </Form.Item>
                </Form>
            </>}
        </div>
    );
};

export default MyInfo;

