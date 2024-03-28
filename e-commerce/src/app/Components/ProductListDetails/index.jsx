"use client"
import React, { useEffect, useState } from 'react'
import './index.css'
import { Button, Spin } from 'antd'
import ProductCard from './ProductCard'
import axios from 'axios'

const ProductCategoryList = ({ route }) => {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [originalProducts, setOriginalProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let categorySlug = '';
                switch (route.category) {
                    case 'women':
                        categorySlug = 'Categories_For_Women';
                        setCategory("Women's Clothing");
                        break;
                    case 'men':
                        categorySlug = 'Categories_For_Men';
                        setCategory("Men's Clothing");
                        break;
                    case 'joggers':
                        categorySlug = 'joggers';
                        setCategory("Jogger's Shoes");
                        break;
                    default:
                        setCategory('');
                        break;
                }

                const response = await axios.get(`http://localhost:5000/product/productGetByName/${categorySlug}`);
                setProducts(response.data);
                setOriginalProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [route.category]);

    console.log(products)
    const handleFilter = (e) => {
        const newFilter = e === selectedFilter ? '' : e;
        setSelectedFilter(newFilter);
        const filteredProducts = newFilter ? originalProducts.filter(item => item.type.includes(newFilter)) : originalProducts;
        setProducts(filteredProducts);
    };

    if (loading) {
        return <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '80vh', alignItems: 'center' }}><Spin size="large" /></div>;
    }

    return (
        <div style={{ display: "flex", justifyContent: 'center', gap: '50px' }}>
            <div className='productListSidebar'>
                <div style={{ display: 'flex', marginLeft: '10px', marginRight: '10px' }}>
                    <div className='productListSidebarContent'>
                        <h2>Filter</h2>
                        {(route.category === "joggers") ? (
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: "5px" }}>
                                <li style={{ cursor: 'pointer', fontWeight: '600', color: selectedFilter === 'snackers' ? '#8A33FD' : 'black' }} onClick={() => handleFilter('snackers')}>Snackers</li>
                                <li style={{ cursor: 'pointer', fontWeight: '600', color: selectedFilter === 'joggers' ? '#8A33FD' : 'black' }} onClick={() => handleFilter('joggers')}>Joggers</li>
                                <li style={{ cursor: 'pointer', fontWeight: '600', color: selectedFilter === 'normalshoes' ? '#8A33FD' : 'black' }} onClick={() => handleFilter('normalshoes')}>Normal Shoes</li>
                            </ul>
                        ) : (
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: "10px" }}>
                                <li style={{ cursor: 'pointer', fontWeight: '600', color: selectedFilter === '' ? '#8A33FD' : 'black' }} onClick={() => handleFilter('')}>All Products</li>
                                <li style={{ cursor: 'pointer', fontWeight: '600', color: selectedFilter === 'tops' ? '#8A33FD' : 'black' }} onClick={() => handleFilter('tops')}>Tops</li>
                                <li style={{ cursor: 'pointer', fontWeight: '600', color: selectedFilter === 'printed_t_shirt' ? '#8A33FD' : 'black' }} onClick={() => handleFilter('printed_t_shirt')}>Printed T-shirts</li>
                                <li style={{ cursor: 'pointer', fontWeight: '600', color: selectedFilter === 'plain_t_shirt' ? '#8A33FD' : 'black' }} onClick={() => handleFilter('plain_t_shirt')}>Plain T-shirts</li>
                                <li style={{ cursor: 'pointer', fontWeight: '600', color: selectedFilter === 'kurti' ? '#8A33FD' : 'black' }} onClick={() => handleFilter('kurti')}>Kurti</li>
                                <li style={{ cursor: 'pointer', fontWeight: '600', color: selectedFilter === 'full_sleeve_t_shirt' ? '#8A33FD' : 'black' }} onClick={() => handleFilter('full_sleeve_t_shirt')}>Full sleeve T-shirts</li>
                                <li style={{ cursor: 'pointer', fontWeight: '600', color: selectedFilter === 'jeans' ? '#8A33FD' : 'black' }} onClick={() => handleFilter('jeans')}>Jeans</li>
                            </ul>
                        )}
                        <h2>Available Colors</h2>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <Button disabled={true} style={{
                                width: '36.73px',
                                height: '36.73px',
                                borderRadius: '50%',
                                background: 'blue',
                                border: 'none',
                            }}></Button>
                            <Button disabled={true} style={{
                                width: '36.73px',
                                height: '36.73px',
                                borderRadius: '50%',
                                background: 'black',
                                border: 'none'
                            }}></Button>
                            <Button disabled={true} style={{
                                width: '36.73px',
                                height: '36.73px',
                                borderRadius: '50%',
                                background: 'red',
                                border: 'none'
                            }}></Button>
                            <Button disabled={true} style={{
                                width: '36.73px',
                                height: '36.73px',
                                borderRadius: '50%',
                                background: 'green',
                                border: 'none'
                            }}></Button>
                            <Button disabled={true} style={{
                                width: '36.73px',
                                height: '36.73px',
                                borderRadius: '50%',
                                background: 'orange '
                                ,
                                border: 'none'
                            }}></Button>
                        </div>
                        <h2> Available Size</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}   >
                            <p style={{ fontSize: '14px', fontWeight: '400', color: 'gray' }}>Small</p>
                            <p style={{ fontSize: '14px', fontWeight: '400', color: 'gray' }}>Large</p>
                            <p style={{ fontSize: '14px', fontWeight: '400', color: 'gray' }}>Medium</p>
                            <p style={{ fontSize: '14px', fontWeight: '400', color: 'gray' }}>Extra Large</p>
                        </div>

                        <h4>Enjoy Sopping</h4>
                        <p style={{ fontSize: '12px', fontWeight: '400', color: 'gray' }}>Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sapiente odio explicabo dolore eius numquam quibusdam! Quia alias sapiente facere fugiat quisquam, dicta laudantium itaque molestiae iusto delectus ipsum doloribus! ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero corporis adipisci quibusdam neque voluptates minima at voluptatum perferendis cupiditate rerum magni nam corrupti ad deleniti ex totam, tempore ducimus?</p>
                        <h4>Free Delivery</h4>
                        <p style={{ fontSize: '12px', fontWeight: '400', color: 'gray' }}>Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sapiente odio explicabo dolore eius numquam quibusdam! Quia alias sapiente facere fugiat quisquam, dicta laudantium itaque molestiae iusto delectus ipsum doloribus! ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero corporis adipisci quibusdam neque voluptates minima at voluptatum perferendis cupiditate rerum magni nam corrupti ad deleniti ex totam, tempore ducimus?</p>
                    </div>

                </div>
            </div>
            <div className='productListBox'>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src="/Images/New Arrival Logo.png" alt="New Arrival Logo" />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        {category}
                    </span>

                </div>
                <div
                    style={{
                        width: "940px",
                        height: "max-content",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: '55px',
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginTop: '20px',
                        marginLeft: '40px'
                    }}
                >
                    {products.length === 0 ? (
                        <div style={{ width: '100%', height: 'calc(100vh - 180px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}><img width={600} height={500} src="https://www.shop.dlmindia.in/uploads/no_product_found.png" alt="123" /></div>
                    ) : (
                        products.map((item) => {
                            return <ProductCard key={Math.random()} data={item} />;
                        })
                    )}

                </div>
            </div>
        </div>

    )
}

export default ProductCategoryList