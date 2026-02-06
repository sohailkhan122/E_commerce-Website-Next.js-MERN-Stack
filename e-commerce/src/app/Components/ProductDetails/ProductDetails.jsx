"use client"
import React, { useState, useEffect, useContext } from 'react';
import { Button, Spin, message } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import axios from 'axios';
import './productDetails.css';
import noteContext from '@/context/noteContext';

const ProductDetails = ({ route }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [size, setSize] = useState(null);
    const [color, setColor] = useState(null);
    const [addingToCart, setAddingToCart] = useState(false);
    const { setRefresh } = useContext(noteContext)
    const { userId } = useContext(noteContext);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productId = route?.id;
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/getSingleProduct/${productId}`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [route]);

    const handleSizeClick = (selectedSize) => {
        setSize(selectedSize);
    };

    const handleColorClick = (selectedColor) => {
        setColor(selectedColor);
    };

    const isSizeSelected = (selectedSize) => {
        return size === selectedSize ? 'selected' : '';
    };

    const isColorSelected = (selectedColor) => {
        return color === selectedColor ? 'selected' : '';
    };

    const handleAddToCart = async () => {
        try {
            setAddingToCart(true);
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/cart/addToCart`, {
                productId: product._id,
                size,
                color,
                userId: userId
            });
            // router.push("/CartPage");
            message.success("Product Add In Your Cart")
            setRefresh(pre => !pre)
        } catch (error) {
            console.error('Error adding to cart:', error.response.data);
            message.error(error.response.data.message)
        } finally {
            setAddingToCart(false);
        }
    };


    if (loading) {
        return <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '80vh', alignItems: 'center' }}><Spin size="large" /></div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div style={{ width: '100%', height: 'max-content', display: 'flex', gap: '50px', justifyContent: 'center' }}>
                <div style={{ display: 'flex' }}>
                    <div className='productImage'>
                        <img style={{ borderRadius: '10px', objectFit: 'cover', width: '100%', height: '100%' }} src={product.images} alt="" />
                    </div>
                </div>
                <div className='details'>
                    <h1>{product.title}</h1>
                    <h3>{product.productName}</h3>
                    <h4>Select Size</h4>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Button className={`${isSizeSelected('large')} ${size === 'large' ? 'selectedButton' : ''}`} onClick={() => handleSizeClick('large')}>L</Button>
                        <Button className={`${isSizeSelected('small')} ${size === 'small' ? 'selectedButton' : ''}`} onClick={() => handleSizeClick('small')}>S</Button>
                        <Button className={`${isSizeSelected('Medium')} ${size === 'Medium' ? 'selectedButton' : ''}`} onClick={() => handleSizeClick('Medium')}>M</Button>
                        <Button className={`${isSizeSelected('axcel')} ${size === 'axcel' ? 'selectedButton' : ''}`} onClick={() => handleSizeClick('axcel')}>XL</Button>
                    </div>
                    <h4>Select Color</h4>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Button className={`${isColorSelected('black')} ${color === 'black' ? 'selectedButton' : ''}`} style={{ backgroundColor: 'black', borderRadius: '50%' }} onClick={() => handleColorClick('black')}></Button>
                        <Button className={`${isColorSelected('yellow')} ${color === 'yellow' ? 'selectedButton' : ''}`} style={{ backgroundColor: '#EDD146', borderRadius: '50%' }} onClick={() => handleColorClick('yellow')}></Button>
                        <Button className={`${isColorSelected('pink')} ${color === 'pink' ? 'selectedButton' : ''}`} style={{ backgroundColor: '#EB84B0', borderRadius: '50%' }} onClick={() => handleColorClick('pink')}></Button>
                        <Button className={`${isColorSelected('red')} ${color === 'red' ? 'selectedButton' : ''}`} style={{ backgroundColor: ' #9C1F35', borderRadius: '50%' }} onClick={() => handleColorClick('red')}></Button>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Button

                            onClick={handleAddToCart}
                            style={{ paddingRight: "20px", height: "44px", background: 'blue', color: 'white' }}
                            icon={<ShoppingCartOutlined />}
                            disabled={addingToCart}
                        >
                            {addingToCart ? "Loading....." : "Add to Cart"}
                        </Button>
                        <span style={{ fontSize: "15px", padding: '0px 25px', borderRadius: '5px', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{`$${product.price}.00`}</span>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '200px', marginTop: "100px" }}>
                <div style={{ width: "45%" }}>
                    <h1>{product.title}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem fuga ut natus rerum aspernatur cupiditate commodi veritatis eveniet, a architecto iste rem pariatur labore enim, alias sit minus eius.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum illum et temporibus. Eveniet veritatis magnam deserunt mollitia, nam, modi ab, est sed quod iure facilis quae sunt exercitationem maxime minus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis aut ex aperiam illo modi, officiis possimus veritatis, consequuntur fugiat aliquid distinctio, culpa adipisci doloremque vitae enim ratione provident tenetur recusandae!</p>
                </div>
                <img style={{ borderRadius: '50%', objectFit: 'cover' }} width={200} height={200} src={product.images} alt="" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px', paddingBottom: "80px" }}>
                <div style={{ width: '1300px' }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus labore molestias deserunt eum reiciendis velit facere officia ullam fuga tenetur expedita eos dolorem itaque sed, laborum ducimus! Porro tenetur fugiat quam. Vero quos nisi ratione blanditiis officiis, eum incidunt quisquam, amet modi dolores itaque inventore facilis vel maxime ducimus ut autem laboriosam dolor? Voluptatum molestiae nam cumque iste omnis atque ex voluptatem nisi quod laborum, temporibus ratione reprehenderit dolorem sed asperiores fugiat in ipsam quos excepturi cum tenetur necessitatibus tempore. Magnam minima deserunt dolorum odit sapiente ad assumenda sint, quibusdam provident necessitatibus maxime mollitia error, quos dolorem quis, et voluptatem.
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
