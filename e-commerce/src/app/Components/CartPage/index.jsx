"use client"
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, message, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import noteContext from '@/context/noteContext';

const CartPage = () => {
    const [loading, setLoading] = useState(true);
    const [productDetails, setProductDetails] = useState([]);
    const [total, setTotal] = useState(0);
    const router = useRouter();
    const [grandTotal, setGrandTotal] = useState(0);
    const [userData, setUserData] = useState({});
    const [checkoutLoading, setCheckoutLoading] = useState(false);
    const { refresh, setRefresh } = useContext(noteContext)
    const shippingCharges = 5.8;

    useEffect(() => {
        const userDataFromLocalStorage = localStorage.getItem('userData');
        if (userDataFromLocalStorage) {
            setUserData(JSON.parse(userDataFromLocalStorage));
        }
    }, []);

    useEffect(() => {
        if (userData._id) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`https://e-commerce-website-next-js-mern-stack-6.onrender.com/cart/getCartItem/${userData._id}`);
                    if (response.data.cartItem) {
                        const productIdsWithQuantity = response.data.cartItem.products.reduce((accumulator, product) => {
                            accumulator[product.productId] = product.quantity;
                            return accumulator;
                        }, {});

                        const productIds = response.data.cartItem.products.map(product => product.productId);
                        const productDetailPromises = productIds.map(productId =>
                            axios.get(`https://e-commerce-website-next-js-mern-stack-6.onrender.com/product/getSingleProduct/${productId}`)
                        );
                        const productDetails = await Promise.all(productDetailPromises);

                        const updatedProductDetails = productDetails.map(response => ({
                            ...response.data,
                            quantity: productIdsWithQuantity[response.data._id] || 1,
                            subtotal: response.data.price * (productIdsWithQuantity[response.data._id] || 1)
                        }));

                        const total = updatedProductDetails.reduce((acc, product) => acc + product.subtotal, 0);
                        setTotal(total);
                        setProductDetails(updatedProductDetails);
                    } else {
                        setProductDetails([]);
                        setTotal(0);
                    }
                } catch (error) {
                    console.error('Error fetching cart items:', error);
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        }
    }, [userData._id, refresh]);

    useEffect(() => {
        setGrandTotal(shippingCharges + total);
    }, [total]);

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            newQuantity = 1;
        }
        const updatedProductDetails = productDetails.map(product => {
            if (product._id === productId) {
                return {
                    ...product,
                    quantity: newQuantity,
                    subtotal: product.price * newQuantity
                };
            }
            return product;
        });

        const total = updatedProductDetails.reduce((acc, product) => acc + product.subtotal, 0);
        setTotal(total);
        setProductDetails(updatedProductDetails);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://e-commerce-website-next-js-mern-stack-6.onrender.com/cart/deleteCartProducts/${id}/${userData._id}`);
            message.success('Product removed from cart');
            setRefresh(pre => !pre)
        } catch (error) {
            console.error('Error deleting product from cart:', error);
            message.error('Failed to remove product from cart');
        }
    };

    const updateQuantity = async () => {
        try {
            setCheckoutLoading(true);
            const updateRequests = productDetails.map(async (item) => {
                await axios.put(`https://e-commerce-website-next-js-mern-stack-6.onrender.com/cart/updatequantiity/${userData._id}`, {
                    productId: item._id,
                    quantity: item.quantity
                });
            });

            await Promise.all(updateRequests);
            router.push('/check_out')
            message.success('Cart items updated successfully');
        } catch (error) {
            console.error('Error updating cart items:', error);
            message.error('Failed to update cart items');
        } finally {
            setCheckoutLoading(false);
        }
    };

    return (
        <>
            {productDetails.length === 0 ? (
                <div style={{ width: '100%', height: '745px', border: '1px solid gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                    <img style={{ objectFit: 'cover' }} src="./Images/Frame 376.png" width={'447.89px'} height={'327.71px'} alt="empty Card" />
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <h1>Your cart is empty and sad :(</h1>
                        <p>Add something to make it happy!</p>
                    </div>
                    <Button onClick={() => router.push('/')}>Continue Shopping</Button>
                </div>
            ) : (
                <>
                    <div style={{ width: '600px', display: 'flex', flexWrap: 'wrap', marginLeft: '60px', marginBottom: '20px', marginTop: '20px' }}>
                        <h1 style={{ fontSize: '40px', fontWeight: '800', color: '#3C4242' }}>Add Cart</h1>
                        <p style={{ fontSize: '14px', color: 'gray' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ut. Perspiciatis eum aut ea nam! Architecto ratione neque itaque voluptatibus ipsam praesentium quibusdam aut deleniti ipsum, magni eius vitae nostrum.</p>
                    </div>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <table style={{ width: '100%', display: 'flex', flexDirection: 'column', marginBottom: '60px' }}>
                            <thead style={{ width: '100%', height: '76px', display: 'flex', alignItems: 'center', backgroundColor: '#3C4242', color: 'white' }}>
                                <tr style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                                    <th style={{ width: '300px' }}>Product Details</th>
                                    <th style={{ width: '300px' }}>Price</th>
                                    <th style={{ width: '300px' }}>Quantity</th>
                                    <th style={{ width: '300px' }}>Subtotal</th>
                                    <th style={{ width: '300px' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
                                {productDetails.map((product, index) => (
                                    <tr style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} key={index}>
                                        <td style={{ display: 'flex', borderRadius: '10px', gap: '10px', alignItems: 'center', width: '300px' }}><img src={product.images} alt={product.title} style={{ width: '105px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} /><p>{product.title}</p></td>
                                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '300px' }}>${product.price}</td>
                                        <td style={{ display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center', width: '300px' }}>
                                            <Button onClick={() => handleQuantityChange(product._id, product.quantity - 1)}>-</Button>
                                            {product.quantity}
                                            <Button onClick={() => handleQuantityChange(product._id, product.quantity + 1)}>+</Button>
                                        </td>
                                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '300px' }}>${product.subtotal}</td>
                                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '300px' }}><Button onClick={() => handleDelete(product._id)}>Delete</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    <div style={{ width: '100%', height: '368px', backgroundColor: '#F6F6F6', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <div style={{ width: '375px', height: '222px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <h1>Enjoy Shopping</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deserunt molestiae architecto optio facere debitis libero odio ea alias quis! Quisquam repudiandae ipsam porro magni temporibus eaque obcaecati libero molestias.</p>
                        </div>
                        <div style={{ width: '465px', height: '367px', backgroundColor: '#F3F3F3', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '30px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <p style={{ display: 'flex', gap: '50px' }}><span style={{ fontSize: '22px', fontWeight: '500', width: '200px' }}>Sub Total</span><span style={{ fontSize: '22px', fontWeight: '500' }}>$ {total}</span></p>
                                <p style={{ display: 'flex', gap: '50px' }}><span style={{ fontSize: '22px', fontWeight: '500', width: '200px' }}>Shipping</span><span style={{ fontSize: '22px', fontWeight: '500' }}>$ {shippingCharges}</span></p>
                                <p style={{ display: 'flex', gap: '50px' }}><span style={{ fontSize: '22px', fontWeight: 'bolder', width: '200px' }}>Grand Total</span><span style={{ fontSize: '22px', fontWeight: '500' }}>$ {grandTotal}</span></p>
                            </div>
                            <Spin spinning={checkoutLoading}>
                                <Button
                                    style={{ backgroundColor: '#8A33FD', color: 'white', display: 'flex', alignItems: 'center', padding: '20px' }}
                                    onClick={updateQuantity}
                                    disabled={checkoutLoading}
                                >
                                    Proceed To Checkout
                                </Button>
                            </Spin>

                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default CartPage;



